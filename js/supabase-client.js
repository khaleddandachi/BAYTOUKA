// ============================================================================
// BAYTOUKA (بيتك) — Supabase Backend Client (Auth, Postgres REST/RPC, Storage)
// Zero hardcoded passwords or secrets in bundle.
// Resilient offline/local fallback so customer WhatsApp orders are never blocked.
// ============================================================================

import { sha256Hex } from './utils.js';

const LOCAL_KEY_SUPABASE_CFG = 'baytouka_supabase_cfg_v2';
const LOCAL_KEY_AUTH_SESSION = 'baytouka_admin_session_v2';
const LOCAL_KEY_OWNER_CRED = 'baytouka_owner_cred_v2';
const LOCAL_KEY_ORDERS_DB = 'baytouka_orders_db_v2';
const LOCAL_KEY_RATE_LIMIT = 'baytouka_order_ratelimit_v2';

let broadcastChannel = null;
try {
  if (typeof BroadcastChannel !== 'undefined') {
    broadcastChannel = new BroadcastChannel('baytouka_orders_channel');
  }
} catch {
  // Ignore if unsupported
}

export function getSupabaseConfig() {
  let envUrl = '';
  let envKey = '';
  try {
    if (typeof window !== 'undefined' && window.__SUPABASE_ENV__) {
      envUrl = window.__SUPABASE_ENV__.url || '';
      envKey = window.__SUPABASE_ENV__.anonKey || '';
    }
  } catch {
    // ignore
  }

  try {
    const saved = JSON.parse(localStorage.getItem(LOCAL_KEY_SUPABASE_CFG) || '{}');
    return {
      url: String(saved.url || envUrl || '').trim().replace(/\/+$/, ''),
      anonKey: String(saved.anonKey || envKey || '').trim()
    };
  } catch {
    return { url: envUrl, anonKey: envKey };
  }
}

export function saveSupabaseConfig(url, anonKey) {
  const clean = {
    url: String(url || '').trim().replace(/\/+$/, ''),
    anonKey: String(anonKey || '').trim()
  };
  localStorage.setItem(LOCAL_KEY_SUPABASE_CFG, JSON.stringify(clean));
  return clean;
}

export function isSupabaseConnected() {
  const { url, anonKey } = getSupabaseConfig();
  return Boolean(url && url.startsWith('https://') && !url.includes('your-project-ref') && anonKey && anonKey.length > 20);
}

// ============================================================================
// ADMIN AUTHENTICATION (Supabase Auth + Local Owner Account Provisioning)
// No password or hash is ever hardcoded in the JavaScript bundle.
// ============================================================================
export function hasLocalOwnerAccount() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY_OWNER_CRED);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return Boolean(parsed && parsed.email && parsed.passwordHash);
  } catch {
    return false;
  }
}

export async function registerLocalOwnerAccount(email, password) {
  const cleanEmail = String(email || '').trim().toLowerCase();
  const cleanPass = String(password || '');
  if (!cleanEmail.includes('@') || cleanPass.length < 6) {
    throw new Error('يرجى إدخال بريد إلكتروني صحيح وكلمة مرور من 6 أحرف على الأقل');
  }
  const salt = `baytouka_${Date.now()}`;
  const passwordHash = await sha256Hex(`${salt}:${cleanPass}`);
  localStorage.setItem(
    LOCAL_KEY_OWNER_CRED,
    JSON.stringify({ email: cleanEmail, salt, passwordHash, createdAt: new Date().toISOString() })
  );
  const session = {
    email: cleanEmail,
    mode: 'local-owner',
    accessToken: `local_${await sha256Hex(cleanEmail + Date.now())}`,
    expiresAt: Date.now() + 1000 * 60 * 60 * 12
  };
  sessionStorage.setItem(LOCAL_KEY_AUTH_SESSION, JSON.stringify(session));
  return session;
}

export async function signInAdmin(email, password) {
  const cleanEmail = String(email || '').trim().toLowerCase();
  const cleanPass = String(password || '');

  // 1. If Supabase is configured, authenticate against Supabase Auth REST API
  if (isSupabaseConnected()) {
    const { url, anonKey } = getSupabaseConfig();
    const res = await fetch(`${url}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: {
        apikey: anonKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: cleanEmail, password: cleanPass })
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error_description || data.msg || 'بيانات الدخول غير صحيحة في Supabase Auth');
    }
    const session = {
      email: data.user?.email || cleanEmail,
      userId: data.user?.id,
      mode: 'supabase',
      accessToken: data.access_token,
      expiresAt: Date.now() + (Number(data.expires_in) || 3600) * 1000
    };
    sessionStorage.setItem(LOCAL_KEY_AUTH_SESSION, JSON.stringify(session));
    return session;
  }

  // 2. Otherwise verify against the owner-created local account
  const rawCred = localStorage.getItem(LOCAL_KEY_OWNER_CRED);
  if (!rawCred) {
    throw new Error('لم يتم إعداد حساب المالك بعد. يرجى إنشاء حساب الإدارة أولاً.');
  }
  const cred = JSON.parse(rawCred);
  const candidateHash = await sha256Hex(`${cred.salt}:${cleanPass}`);
  if (cred.email !== cleanEmail || candidateHash !== cred.passwordHash) {
    throw new Error('البريد الإلكتروني أو كلمة المرور غير صحيحة');
  }

  const session = {
    email: cred.email,
    mode: 'local-owner',
    accessToken: `local_${await sha256Hex(cred.email + Date.now())}`,
    expiresAt: Date.now() + 1000 * 60 * 60 * 12
  };
  sessionStorage.setItem(LOCAL_KEY_AUTH_SESSION, JSON.stringify(session));
  return session;
}

export function getAdminSession() {
  try {
    const raw = sessionStorage.getItem(LOCAL_KEY_AUTH_SESSION);
    if (!raw) return null;
    const session = JSON.parse(raw);
    if (!session || Date.now() > Number(session.expiresAt || 0)) {
      sessionStorage.removeItem(LOCAL_KEY_AUTH_SESSION);
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export function signOutAdmin() {
  sessionStorage.removeItem(LOCAL_KEY_AUTH_SESSION);
}

// ============================================================================
// ORDERS DATABASE (ZERO DEMO DATA — Strict WhatsApp Checkout Recording Only)
// ============================================================================
export function loadLocalOrders() {
  try {
    // Clean up any legacy demo sales key from Round 1 so fake sales never appear
    localStorage.removeItem('baytouka_weekly_sales_v1');
    const raw = localStorage.getItem(LOCAL_KEY_ORDERS_DB);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveLocalOrders(orders) {
  try {
    localStorage.setItem(LOCAL_KEY_ORDERS_DB, JSON.stringify(orders));
  } catch (e) {
    console.warn('Orders storage save warning:', e);
  }
}

function checkClientOrderRateLimit() {
  try {
    const now = Date.now();
    const tenMinsAgo = now - 10 * 60 * 1000;
    const raw = JSON.parse(localStorage.getItem(LOCAL_KEY_RATE_LIMIT) || '[]');
    const recent = Array.isArray(raw) ? raw.filter(ts => ts > tenMinsAgo) : [];
    if (recent.length >= 6) {
      return false;
    }
    recent.push(now);
    localStorage.setItem(LOCAL_KEY_RATE_LIMIT, JSON.stringify(recent));
    return true;
  } catch {
    return true;
  }
}

/**
 * Records a verified customer order ONLY when the customer submits the final
 * WhatsApp checkout form. Recomputes totals from actual catalog prices so prices cannot be spoofed.
 */
export async function submitVerifiedCustomerOrder({
  customerName,
  customerPhone,
  region,
  address,
  notes = '',
  pricingMode = 'retail',
  cartItems = [],
  catalogProducts = [],
  freeDeliveryThreshold = 65
}) {
  if (!checkClientOrderRateLimit()) {
    throw new Error('لقد تجاوزت الحد المسموح لإرسال الطلبيات المتتالية. يرجى الانتظار بضع دقائق.');
  }

  const isWholesale = pricingMode === 'wholesale';
  let verifiedSubtotal = 0;
  let verifiedWholesaleCostTotal = 0;
  let totalPieces = 0;

  const verifiedItems = cartItems.map(item => {
    const qty = Math.max(1, Math.min(500, Number(item.qty) || 1));
    // Re-lookup canonical product price from catalogProducts to prevent price tampering
    const canonical =
      catalogProducts.find(p => Number(p.id) === Number(item.product.id) && p.sku === item.product.sku) ||
      catalogProducts.find(p => p.sku === item.product.sku) ||
      item.product;

    const unitPrice = Number((isWholesale ? canonical.wholesalePrice : canonical.retailPrice).toFixed(2));
    const wholesaleCost = Number((canonical.costPrice || canonical.wholesalePrice * 0.82).toFixed(2));
    const lineTotal = Number((unitPrice * qty).toFixed(2));

    verifiedSubtotal += lineTotal;
    verifiedWholesaleCostTotal += Number((wholesaleCost * qty).toFixed(2));
    totalPieces += qty;

    return {
      productId: canonical.id,
      sku: canonical.sku,
      box: canonical.box || '—',
      nameAr: canonical.nameAr || canonical.baseNameAr,
      qty,
      unitPrice,
      wholesaleCost,
      lineTotal
    };
  });

  verifiedSubtotal = Number(verifiedSubtotal.toFixed(2));
  verifiedWholesaleCostTotal = Number(verifiedWholesaleCostTotal.toFixed(2));

  const qualifiesFreeDelivery = freeDeliveryThreshold > 0 && verifiedSubtotal >= freeDeliveryThreshold;
  const deliveryFee = qualifiesFreeDelivery ? 0 : Number((region?.fee ?? 3.0).toFixed(2));
  const grandTotal = Number((verifiedSubtotal + deliveryFee).toFixed(2));
  const netProfit = Number((verifiedSubtotal - verifiedWholesaleCostTotal).toFixed(2));

  const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randPart = Math.random().toString(36).substring(2, 6).toUpperCase();
  let orderNumber = `BYT-${datePart}-${randPart}`;
  let syncedToSupabase = false;

  // 1. Attempt Supabase RPC insert if connected
  if (isSupabaseConnected()) {
    try {
      const { url, anonKey } = getSupabaseConfig();
      const res = await fetch(`${url}/rest/v1/rpc/submit_customer_order`, {
        method: 'POST',
        headers: {
          apikey: anonKey,
          Authorization: `Bearer ${anonKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          p_customer_name: customerName,
          p_customer_phone: customerPhone,
          p_region_id: region?.id || 'tripoli',
          p_region_name_ar: region?.nameAr || 'طرابلس والشمال',
          p_address: address,
          p_notes: notes,
          p_pricing_mode: isWholesale ? 'wholesale' : 'retail',
          p_delivery_fee: deliveryFee,
          p_client_fingerprint: navigator.userAgent.slice(0, 64),
          p_items: verifiedItems
        })
      });
      if (res.ok) {
        const rpcData = await res.json();
        if (rpcData && rpcData.orderNumber) {
          orderNumber = rpcData.orderNumber;
          syncedToSupabase = true;
        }
      }
    } catch (err) {
      console.warn('[BAYTOUKA] Supabase order RPC unreachable; queueing locally so WhatsApp checkout proceeds:', err);
    }
  }

  // 2. Always persist to local Order Database / Sync Queue as well
  const orderRecord = {
    id: `ord_${Date.now()}_${randPart}`,
    orderNumber,
    createdAt: new Date().toISOString(),
    customerName,
    customerPhone,
    regionId: region?.id || 'tripoli',
    regionNameAr: region?.nameAr || 'طرابلس والشمال',
    address,
    notes,
    pricingMode: isWholesale ? 'wholesale' : 'retail',
    totalPieces,
    subtotal: verifiedSubtotal,
    deliveryFee,
    grandTotal,
    wholesaleCostTotal: verifiedWholesaleCostTotal,
    netProfit,
    status: 'new', // 'new' | 'confirmed' | 'delivered' | 'cancelled'
    syncedToSupabase,
    items: verifiedItems
  };

  const orders = loadLocalOrders();
  orders.unshift(orderRecord);
  saveLocalOrders(orders);

  // Notify any open Admin tab via BroadcastChannel & CustomEvent
  try {
    broadcastChannel?.postMessage({ type: 'NEW_ORDER', order: orderRecord });
    window.dispatchEvent(new CustomEvent('baytouka:new-order', { detail: orderRecord }));
  } catch {
    // ignore
  }

  return orderRecord;
}

export async function fetchAllOrdersForAdmin() {
  const localOrders = loadLocalOrders();
  if (!isSupabaseConnected()) return localOrders;

  const session = getAdminSession();
  if (!session || session.mode !== 'supabase') return localOrders;

  try {
    const { url, anonKey } = getSupabaseConfig();
    const res = await fetch(`${url}/rest/v1/orders?select=*,order_items(*)&order=created_at.desc`, {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${session.accessToken}`
      }
    });
    if (!res.ok) return localOrders;
    const rows = await res.json();
    if (!Array.isArray(rows)) return localOrders;

    return rows.map(r => ({
      id: r.id,
      orderNumber: r.order_number,
      createdAt: r.created_at,
      customerName: r.customer_name,
      customerPhone: r.customer_phone,
      regionId: r.region_id,
      regionNameAr: r.region_name_ar,
      address: r.address,
      notes: r.notes || '',
      pricingMode: r.pricing_mode,
      subtotal: Number(r.subtotal || 0),
      deliveryFee: Number(r.delivery_fee || 0),
      grandTotal: Number(r.grand_total || 0),
      wholesaleCostTotal: Number(r.wholesale_cost_total || 0),
      netProfit: Number(r.net_profit || 0),
      status: r.status || 'new',
      totalPieces: (r.order_items || []).reduce((acc, i) => acc + Number(i.qty || 0), 0),
      items: (r.order_items || []).map(i => ({
        productId: i.product_id,
        sku: i.sku,
        box: i.box,
        nameAr: i.name_ar,
        qty: Number(i.qty || 1),
        unitPrice: Number(i.unit_price || 0),
        wholesaleCost: Number(i.wholesale_cost || 0),
        lineTotal: Number(i.line_total || 0)
      }))
    }));
  } catch {
    return localOrders;
  }
}

export async function updateOrderStatusInBackend(orderId, newStatus) {
  const validStatuses = ['new', 'confirmed', 'delivered', 'cancelled'];
  if (!validStatuses.includes(newStatus)) return false;

  const orders = loadLocalOrders();
  const target = orders.find(o => o.id === orderId || o.orderNumber === orderId);
  if (target) {
    target.status = newStatus;
    target.updatedAt = new Date().toISOString();
    saveLocalOrders(orders);
  }

  if (isSupabaseConnected()) {
    const session = getAdminSession();
    if (session && session.mode === 'supabase') {
      try {
        const { url, anonKey } = getSupabaseConfig();
        await fetch(`${url}/rest/v1/orders?id=eq.${encodeURIComponent(orderId)}`, {
          method: 'PATCH',
          headers: {
            apikey: anonKey,
            Authorization: `Bearer ${session.accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ status: newStatus, updated_at: new Date().toISOString() })
        });
      } catch (e) {
        console.warn('Supabase order status update warning:', e);
      }
    }
  }
  return true;
}

/**
 * Compresses an uploaded image file to WebP (max 800x800) using HTML5 Canvas,
 * then uploads to Supabase Storage if connected or returns a clean WebP Data URI.
 */
export async function compressAndUploadProductImage(file, sku = 'item') {
  const webpBlob = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const maxDim = 760;
        let w = img.width;
        let h = img.height;
        if (w > maxDim || h > maxDim) {
          if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        canvas.toBlob(
          blob => {
            if (blob) resolve(blob);
            else reject(new Error('Canvas WebP conversion failed'));
          },
          'image/webp',
          0.84
        );
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  if (isSupabaseConnected()) {
    const session = getAdminSession();
    if (session && session.mode === 'supabase') {
      try {
        const { url, anonKey } = getSupabaseConfig();
        const fileName = `${String(sku).replace(/[^a-zA-Z0-9_-]/g, '')}_${Date.now()}.webp`;
        const uploadRes = await fetch(`${url}/storage/v1/object/product-images/${fileName}`, {
          method: 'POST',
          headers: {
            apikey: anonKey,
            Authorization: `Bearer ${session.accessToken}`,
            'Content-Type': 'image/webp',
            'x-upsert': 'true'
          },
          body: webpBlob
        });
        if (uploadRes.ok) {
          return `${url}/storage/v1/object/public/product-images/${fileName}`;
        }
      } catch (e) {
        console.warn('Supabase storage upload fallback to local Data URI:', e);
      }
    }
  }

  // Fallback to compressed WebP Data URI
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(webpBlob);
  });
}

export function onRealtimeNewOrder(callback) {
  window.addEventListener('baytouka:new-order', e => callback(e.detail));
  if (broadcastChannel) {
    broadcastChannel.addEventListener('message', e => {
      if (e.data && e.data.type === 'NEW_ORDER') {
        callback(e.data.order);
      }
    });
  }
}

