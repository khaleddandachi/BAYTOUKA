// ============================================================================
// BAYTOUKA (بيتك) — White-Label Admin System (Supabase Auth + Monthly Sales
// Analytics + Order Management + No-Code Product/Variant Editor + Settings)
// Zero demo sales on fresh install; zero hardcoded passwords in bundle.
// ============================================================================

import {
  escapeHtml,
  BRAND_COLOR_PRESETS,
  DEFAULT_STORE_SETTINGS
} from './utils.js';

import {
  setCatalogProducts,
  saveSettingsToStorage,
  saveCategoriesToStorage,
  savePackagesToStorage,
  hasCatalogUndoBackup,
  restoreCatalogUndoBackup
} from './store.js';

import { previewDuplicateMerge } from './families.js';
import { renderArtTile, ILLUSTRATION_PATHS, TILE_THEMES } from './art-tiles.js';

import {
  getSupabaseConfig,
  saveSupabaseConfig,
  isSupabaseConnected,
  hasLocalOwnerAccount,
  registerLocalOwnerAccount,
  signInAdmin,
  getAdminSession,
  signOutAdmin,
  fetchAllOrdersForAdmin,
  updateOrderStatusInBackend,
  compressAndUploadProductImage,
  onRealtimeNewOrder
} from './supabase-client.js';

let adminState = {
  activeTab: 'analytics', // 'analytics' | 'orders' | 'products' | 'packages' | 'settings'
  periodFilter: 'month', // 'today' | 'week' | 'month' | 'all'
  selectedMonth: new Date().toISOString().slice(0, 7), // 'YYYY-MM'
  includeNewOrders: false,
  orderStatusFilter: 'all',
  orderSearchQuery: '',
  productSearchQuery: '',
  productCategoryFilter: 'all',
  orders: [],
  mergePreviewOpen: false,
  editingProduct: null,
  unreadNewOrdersCount: 0,
  realtimeBound: false
};

function playNewOrderChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.setValueAtTime(880, ctx.currentTime + 0.12); // A5
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.45);
  } catch {
    // ignore audio restrictions
  }
}

export async function renderAdminView(store, showToast) {
  const rootEl = document.getElementById('admin-view');
  if (!rootEl) return;

  // Bind realtime listener once
  if (!adminState.realtimeBound) {
    adminState.realtimeBound = true;
    onRealtimeNewOrder(newOrder => {
      adminState.unreadNewOrdersCount++;
      playNewOrderChime();
      if (typeof showToast === 'function') {
        showToast(`🔔 طلبية واتساب جديدة رقم ${newOrder.orderNumber} (${newOrder.customerName})`);
      }
      if (!rootEl.classList.contains('hidden') && getAdminSession()) {
        renderAdminView(store, showToast);
      }
    });
  }

  const session = getAdminSession();
  if (!session) {
    store.adminAuthenticated = false;
    renderAdminAuthGate(rootEl, store, showToast);
    return;
  }

  store.adminAuthenticated = true;
  adminState.includeNewOrders = Boolean(store.settings.countNewOrdersInRevenue);
  adminState.orders = await fetchAllOrdersForAdmin();

  rootEl.innerHTML = `
    <div style="min-height:100vh;padding:1.5rem 0 5rem;background:var(--bg-canvas)">
      <div class="container-shell">

        <!-- Top Admin Header -->
        <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-xl);padding:1.25rem 1.5rem;box-shadow:var(--shadow-md);margin-bottom:1.25rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem">
          <div style="display:flex;align-items:center;gap:0.9rem">
            <div style="width:48px;height:48px;border-radius:14px;background:#171914;color:#FFD98E;display:flex;align-items:center;justify-content:center;border:1.5px solid var(--accent-brass)">
              <i data-lucide="shield-check" style="width:24px;height:24px"></i>
            </div>
            <div>
              <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap">
                <h1 style="font-family:var(--font-display);font-size:clamp(1.25rem,2.4vw,1.65rem);font-weight:700">
                  لوحة إدارة «${escapeHtml(store.settings.storeNameAr)}» المتكاملة
                </h1>
                <span class="sku-pill num-ltr" style="background:${isSupabaseConnected() ? 'rgba(24,134,75,0.15)' : 'var(--accent-saffron-soft)'};color:${isSupabaseConnected() ? '#18864B' : 'var(--accent-saffron)'}">
                  ${isSupabaseConnected() ? '● Supabase Cloud متصل' : '● وضع التخزين المحلي الآمن'}
                </span>
              </div>
              <p style="font-size:0.78rem;color:var(--text-secondary)">
                المسؤول: <strong class="num-ltr">${escapeHtml(session.email)}</strong> • تحكم كامل بالمبيعات الشهرية، الطلبيات، المنتجات، وإعدادات المتجر بدون برمجة
              </p>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:0.55rem;flex-wrap:wrap">
            <a href="#/" class="btn-secondary-brass" style="min-height:40px;padding-inline:1rem;font-size:0.78rem">
              <i data-lucide="store" style="width:15px;height:15px"></i>
              <span>العودة إلى المتجر (Back to Store)</span>
            </a>
            <button
              type="button"
              id="admin-logout-btn"
              class="icon-action-btn"
              style="min-height:40px;color:var(--accent-terracotta)"
            >
              <i data-lucide="log-out" style="width:15px;height:15px"></i>
              <span>تسجيل الخروج</span>
            </button>
          </div>
        </div>

        <!-- Admin Navigation Tabs -->
        <div class="admin-tabs-bar" role="tablist" style="display:flex;gap:0.5rem;overflow-x:auto;padding-bottom:0.5rem;margin-bottom:1.5rem">
          ${[
            { id: 'analytics', label: 'المبيعات والتحليل الشهري', icon: 'bar-chart-3' },
            {
              id: 'orders',
              label: `الطلبيات والفواتير (${adminState.orders.length})`,
              icon: 'shopping-bag',
              badge: adminState.unreadNewOrdersCount
            },
            {
              id: 'products',
              label: `المنتجات والعائلات (${store.stats.totalFamilies} عائلة / ${store.rawProducts.length} صف)`,
              icon: 'package'
            },
            { id: 'packages', label: 'الأقسام وباقات العرائس', icon: 'gem' },
            { id: 'settings', label: 'إعدادات المتجر والـ White-Label', icon: 'settings' }
          ]
            .map(
              t => `
              <button
                type="button"
                class="admin-nav-tab ${adminState.activeTab === t.id ? 'active' : ''}"
                data-admin-tab="${t.id}"
              >
                <i data-lucide="${t.icon}" style="width:16px;height:16px"></i>
                <span>${escapeHtml(t.label)}</span>
                ${t.badge ? `<span class="cart-count-badge">${t.badge}</span>` : ''}
              </button>
            `
            )
            .join('')}
        </div>

        <!-- Active Tab Content -->
        <div id="admin-tab-body">
          ${renderActiveAdminTab(store)}
        </div>

      </div>
    </div>
  `;

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
  bindAdminDashboardEvents(rootEl, store, showToast);
}

/**
 * Renders the Authentication Gate (Supabase Auth or First-Time Owner Account Setup)
 */
function renderAdminAuthGate(rootEl, store, showToast) {
  const sbConnected = isSupabaseConnected();
  const hasOwner = hasLocalOwnerAccount();
  const sbCfg = getSupabaseConfig();

  rootEl.innerHTML = `
    <div style="min-height:92vh;display:flex;align-items:center;justify-content:center;padding:2rem 1rem;background:var(--bg-canvas)">
      <div style="width:100%;max-width:480px;background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-xl);padding:2rem;box-shadow:var(--shadow-lg)">
        <div style="text-align:center;margin-bottom:1.5rem">
          <div style="width:56px;height:56px;border-radius:16px;background:#171914;color:#FFD98E;display:flex;align-items:center;justify-content:center;margin:0 auto 0.85rem;border:1.5px solid var(--accent-brass)">
            <i data-lucide="lock" style="width:26px;height:26px"></i>
          </div>
          <h1 style="font-family:var(--font-display);font-size:1.5rem;font-weight:700;margin-bottom:0.3rem">
            ${sbConnected ? 'تسجيل دخول الإدارة (Supabase Auth)' : hasOwner ? 'تسجيل دخول مالك المتجر' : 'إعداد حساب مالك المتجر لأول مرة'}
          </h1>
          <p style="font-size:0.8rem;color:var(--text-secondary)">
            ${
              sbConnected
                ? 'أدخل البريد الإلكتروني وكلمة المرور المسجلة في Supabase Auth'
                : hasOwner
                  ? 'أدخل البريد الإلكتروني وكلمة المرور الخاصة بمالك المتجر'
                  : 'لا توجد أي كلمة مرور افتراضية في الكود لحماية المتجر. أنشئ بيانات دخول المالك الآن:'
            }
          </p>
        </div>

        <form id="admin-auth-form" style="display:grid;gap:0.85rem">
          <div>
            <label for="admin-auth-email" style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:0.3rem">البريد الإلكتروني للمالك (Email) *</label>
            <input
              type="email"
              id="admin-auth-email"
              required
              placeholder="owner@baytouka.lb"
              class="control-input num-ltr"
              dir="ltr"
              autocomplete="username"
            />
          </div>
          <div>
            <label for="admin-auth-pass" style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:0.3rem">كلمة المرور (Password) *</label>
            <input
              type="password"
              id="admin-auth-pass"
              required
              minlength="6"
              placeholder="••••••••"
              class="control-input num-ltr"
              dir="ltr"
              autocomplete="${hasOwner || sbConnected ? 'current-password' : 'new-password'}"
            />
          </div>
          <p id="admin-auth-error" class="hidden" style="font-size:0.78rem;color:var(--accent-terracotta);font-weight:700"></p>

          <button type="submit" class="btn-primary-editorial" style="width:100%;justify-content:center">
            <i data-lucide="key-round" style="width:17px;height:17px"></i>
            <span>${sbConnected || hasOwner ? 'دخول إلى لوحة الإدارة' : 'إنشاء حساب المالك والدخول'}</span>
          </button>
        </form>

        <details style="margin-top:1.25rem;padding-top:1rem;border-top:1px solid var(--border-subtle);font-size:0.76rem">
          <summary style="cursor:pointer;font-weight:700;color:var(--text-secondary)">
            ⚙️ إعداد ربط قاعدة بيانات Supabase (اختياري)
          </summary>
          <div style="display:grid;gap:0.6rem;margin-top:0.75rem">
            <input type="url" id="sb-url-input" placeholder="https://xyz.supabase.co" value="${escapeHtml(sbCfg.url)}" class="control-input num-ltr" dir="ltr" style="min-height:38px;font-size:0.75rem" />
            <input type="text" id="sb-key-input" placeholder="Supabase Anon Public Key" value="${escapeHtml(sbCfg.anonKey)}" class="control-input num-ltr" dir="ltr" style="min-height:38px;font-size:0.75rem" />
            <button type="button" id="save-sb-cfg-btn" class="btn-secondary-brass" style="min-height:36px;font-size:0.75rem;justify-content:center">
              حفظ اتصال Supabase
            </button>
          </div>
        </details>

        <div style="margin-top:1.25rem;text-align:center">
          <a href="#/" style="font-size:0.8rem;font-weight:700;color:var(--text-muted)">← العودة إلى واجهة المتجر</a>
        </div>
      </div>
    </div>
  `;

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  rootEl.querySelector('#admin-auth-form')?.addEventListener('submit', async e => {
    e.preventDefault();
    const email = rootEl.querySelector('#admin-auth-email')?.value.trim();
    const pass = rootEl.querySelector('#admin-auth-pass')?.value;
    const errEl = rootEl.querySelector('#admin-auth-error');
    try {
      if (!sbConnected && !hasOwner) {
        await registerLocalOwnerAccount(email, pass);
        showToast?.('تم إنشاء حساب مالك المتجر وتسجيل الدخول بنجاح');
      } else {
        await signInAdmin(email, pass);
        showToast?.('تم تسجيل الدخول إلى لوحة الإدارة');
      }
      await renderAdminView(store, showToast);
    } catch (err) {
      if (errEl) {
        errEl.textContent = err.message || 'فشل تسجيل الدخول';
        errEl.classList.remove('hidden');
      }
    }
  });

  rootEl.querySelector('#save-sb-cfg-btn')?.addEventListener('click', () => {
    const url = rootEl.querySelector('#sb-url-input')?.value.trim();
    const key = rootEl.querySelector('#sb-key-input')?.value.trim();
    saveSupabaseConfig(url, key);
    showToast?.('تم تحديث إعدادات اتصال Supabase');
    renderAdminView(store, showToast);
  });
}

function renderActiveAdminTab(store) {
  switch (adminState.activeTab) {
    case 'orders':
      return renderOrdersTab(store);
    case 'products':
      return renderProductsManagementTab(store);
    case 'packages':
      return renderPackagesAndCategoriesTab(store);
    case 'settings':
      return renderWhiteLabelSettingsTab(store);
    case 'analytics':
    default:
      return renderMonthlyAnalyticsTab(store);
  }
}

// ============================================================================
// TAB 1: MONTHLY ANALYTICS, KPIs & SVG CHARTS (ZERO DEMO DATA)
// ============================================================================
function computeAnalyticsMetrics(orders, periodFilter, selectedMonth, includeNewOrders) {
  const validStatuses = includeNewOrders ? ['new', 'confirmed', 'delivered'] : ['confirmed', 'delivered'];
  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const inPeriod = o => {
    if (!validStatuses.includes(o.status)) return false;
    const dStr = String(o.createdAt || '').slice(0, 10);
    if (periodFilter === 'today') return dStr === todayStr;
    if (periodFilter === 'week') return new Date(o.createdAt) >= weekAgo;
    if (periodFilter === 'month') return dStr.startsWith(selectedMonth);
    return true; // 'all'
  };

  const filtered = orders.filter(inPeriod);
  let revenue = 0;
  let wholesaleCost = 0;
  let netProfit = 0;
  let itemsSold = 0;
  let retailRevenue = 0;
  let wholesaleRevenue = 0;

  const productTally = new Map();
  const regionTally = new Map();
  const dailyMap = new Map();

  for (let day = 1; day <= 31; day++) {
    const dayKey = String(day).padStart(2, '0');
    dailyMap.set(dayKey, { day: dayKey, revenue: 0, profit: 0, orders: 0 });
  }

  filtered.forEach(o => {
    const rev = Number(o.subtotal || 0);
    const cost = Number(o.wholesaleCostTotal || 0);
    const prof = Number(o.netProfit ?? rev - cost);
    const pieces = Number(o.totalPieces || 0);

    revenue += rev;
    wholesaleCost += cost;
    netProfit += prof;
    itemsSold += pieces;

    if (o.pricingMode === 'wholesale') wholesaleRevenue += rev;
    else retailRevenue += rev;

    const regName = o.regionNameAr || 'طرابلس والشمال';
    regionTally.set(regName, (regionTally.get(regName) || 0) + rev);

    const dayPart = String(o.createdAt || '').slice(8, 10);
    if (dailyMap.has(dayPart)) {
      const dObj = dailyMap.get(dayPart);
      dObj.revenue += rev;
      dObj.profit += prof;
      dObj.orders += 1;
    }

    (o.items || []).forEach(it => {
      const prev = productTally.get(it.sku) || { sku: it.sku, nameAr: it.nameAr, qty: 0, revenue: 0 };
      prev.qty += Number(it.qty || 1);
      prev.revenue += Number(it.lineTotal || 0);
      productTally.set(it.sku, prev);
    });
  });

  const aov = filtered.length > 0 ? revenue / filtered.length : 0;

  return {
    ordersCount: filtered.length,
    totalAllStatusCount: orders.length,
    newPendingCount: orders.filter(o => o.status === 'new').length,
    itemsSold,
    revenue: Number(revenue.toFixed(2)),
    wholesaleCost: Number(wholesaleCost.toFixed(2)),
    netProfit: Number(netProfit.toFixed(2)),
    aov: Number(aov.toFixed(2)),
    retailRevenue: Number(retailRevenue.toFixed(2)),
    wholesaleRevenue: Number(wholesaleRevenue.toFixed(2)),
    topProducts: [...productTally.values()].sort((a, b) => b.qty - a.qty).slice(0, 6),
    topRegions: [...regionTally.entries()].map(([name, rev]) => ({ name, revenue: rev })).sort((a, b) => b.revenue - a.revenue),
    dailySeries: [...dailyMap.values()]
  };
}

function renderMonthlyAnalyticsTab(store) {
  const m = computeAnalyticsMetrics(
    adminState.orders,
    adminState.periodFilter,
    adminState.selectedMonth,
    adminState.includeNewOrders
  );

  const maxDailyRev = Math.max(10, ...m.dailySeries.map(d => d.revenue));

  return `
    <!-- Filter & Month Selector Strip -->
    <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-lg);padding:1rem 1.25rem;margin-bottom:1.25rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem">
      <div style="display:flex;align-items:center;gap:0.45rem;flex-wrap:wrap">
        ${[
          { id: 'today', label: 'اليوم (Today)' },
          { id: 'week', label: 'هذا الأسبوع (Week)' },
          { id: 'month', label: 'التحليل الشهري (Monthly)' },
          { id: 'all', label: 'كل الأوقات (All Time)' }
        ]
          .map(
            p => `
            <button
              type="button"
              class="subfilter-pill ${adminState.periodFilter === p.id ? 'active' : ''}"
              data-period-btn="${p.id}"
            >
              ${escapeHtml(p.label)}
            </button>
          `
          )
          .join('')}
      </div>

      <div style="display:flex;align-items:center;gap:0.85rem;flex-wrap:wrap">
        <label style="display:inline-flex;align-items:center;gap:0.4rem;font-size:0.78rem;font-weight:700;cursor:pointer">
          <input type="checkbox" id="toggle-include-new" ${adminState.includeNewOrders ? 'checked' : ''} style="accent-color:var(--accent-terracotta)" />
          <span>احتساب الطلبيات الجديدة (قيد التأكيد) في الأرباح</span>
        </label>

        <div style="display:flex;align-items:center;gap:0.4rem">
          <label for="admin-month-picker" style="font-size:0.78rem;font-weight:700">الشهر:</label>
          <input
            type="month"
            id="admin-month-picker"
            value="${escapeHtml(adminState.selectedMonth)}"
            class="control-input num-ltr"
            style="min-height:36px;width:auto;padding-inline:0.65rem;font-size:0.8rem"
          />
        </div>
      </div>
    </div>

    ${
      m.newPendingCount > 0 && !adminState.includeNewOrders
        ? `<div style="padding:0.8rem 1.1rem;border-radius:var(--radius-md);background:var(--accent-saffron-soft);border:1px solid var(--accent-brass);margin-bottom:1.25rem;display:flex;align-items:center;justify-content:space-between;gap:0.75rem;font-size:0.82rem">
             <span>💡 لديك <strong>${m.newPendingCount} طلبية جديدة</strong> بانتظار التأكيد. حسب الإعداد الافتراضي، تُحتسب الأرباح للطلبيات المؤكدة والمُسلّمة فقط.</span>
             <button type="button" class="subfilter-pill active" data-admin-tab="orders">مراجعة الطلبيات</button>
           </div>`
        : ''
    }

    <!-- 6 KPI Cards -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(195px,1fr));gap:1rem;margin-bottom:1.5rem">
      <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-lg);padding:1.15rem">
        <span style="font-size:0.75rem;color:var(--text-muted);font-weight:700;display:block">عدد الطلبيات المعتمدة</span>
        <strong class="num-ltr" dir="ltr" style="font-size:1.85rem;font-weight:800;display:block;margin-block:0.2rem">${m.ordersCount}</strong>
        <span style="font-size:0.72rem;color:var(--text-secondary)">إجمالي كل الحالات: ${m.totalAllStatusCount}</span>
      </div>

      <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-lg);padding:1.15rem">
        <span style="font-size:0.75rem;color:var(--text-muted);font-weight:700;display:block">القطع المباعة (Items Sold)</span>
        <strong class="num-ltr" dir="ltr" style="font-size:1.85rem;font-weight:800;display:block;margin-block:0.2rem">${m.itemsSold}</strong>
        <span style="font-size:0.72rem;color:var(--text-secondary)">قطعة مباعة في الفترة</span>
      </div>

      <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-lg);padding:1.15rem">
        <span style="font-size:0.75rem;color:var(--text-muted);font-weight:700;display:block">إجمالي المبيعات (Revenue)</span>
        <strong class="num-ltr" dir="ltr" style="font-size:1.85rem;font-weight:800;color:var(--text-primary);display:block;margin-block:0.2rem">$${m.revenue.toFixed(2)}</strong>
        <span class="num-ltr" dir="ltr" style="font-size:0.72rem;color:var(--text-secondary)">كلفة الجملة: $${m.wholesaleCost.toFixed(2)}</span>
      </div>

      <div style="background:#171914;color:#F7F3EB;border:1px solid var(--accent-brass);border-radius:var(--radius-lg);padding:1.15rem">
        <span style="font-size:0.75rem;color:#FFD98E;font-weight:700;display:block">صافي الربح (Net Profit)</span>
        <strong class="num-ltr" dir="ltr" style="font-size:1.85rem;font-weight:800;color:#25D366;display:block;margin-block:0.2rem">$${m.netProfit.toFixed(2)}</strong>
        <span style="font-size:0.72rem;color:var(--text-on-dark-muted)">بعد خصم الكلفة التقديرية</span>
      </div>

      <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-lg);padding:1.15rem">
        <span style="font-size:0.75rem;color:var(--text-muted);font-weight:700;display:block">متوسط قيمة الطلبية (AOV)</span>
        <strong class="num-ltr" dir="ltr" style="font-size:1.85rem;font-weight:800;color:var(--accent-terracotta);display:block;margin-block:0.2rem">$${m.aov.toFixed(2)}</strong>
        <span class="num-ltr" dir="ltr" style="font-size:0.72rem;color:var(--text-secondary)">مفرق: $${m.retailRevenue.toFixed(0)} | جملة: $${m.wholesaleRevenue.toFixed(0)}</span>
      </div>
    </div>

    <!-- Monthly SVG Bar Chart -->
    <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-xl);padding:1.4rem;margin-bottom:1.5rem">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1rem;flex-wrap:wrap">
        <div>
          <h3 style="font-family:var(--font-display);font-size:1.25rem;font-weight:700">
            مخطط المبيعات والأرباح الشهرية (${escapeHtml(adminState.selectedMonth)})
          </h3>
          <p style="font-size:0.78rem;color:var(--text-muted)">
            توزيع المبيعات اليومية وصافي الربح بالدولار الأمريكي (خالٍ تماماً من أي بيانات وهمية)
          </p>
        </div>
        <div style="display:flex;gap:1rem;font-size:0.75rem;font-weight:700">
          <span style="display:inline-flex;align-items:center;gap:0.35rem"><span style="width:10px;height:10px;border-radius:2px;background:var(--accent-terracotta)"></span> المبيعات ($)</span>
          <span style="display:inline-flex;align-items:center;gap:0.35rem"><span style="width:10px;height:10px;border-radius:2px;background:#18864B"></span> صافي الربح ($)</span>
        </div>
      </div>

      ${
        m.ordersCount === 0
          ? `<div style="padding:2.75rem 1rem;text-align:center;border:1px dashed var(--border-strong);border-radius:var(--radius-lg);background:var(--bg-subtle)">
               <i data-lucide="bar-chart-2" style="width:32px;height:32px;color:var(--accent-brass);margin:0 auto 0.6rem"></i>
               <h4 style="font-size:0.95rem;font-weight:800;margin-bottom:0.25rem">لا توجد مبيعات مسجلة في هذه الفترة ($0.00)</h4>
               <p style="font-size:0.78rem;color:var(--text-muted);max-width:48ch;margin:0 auto">
                 تُسجل المبيعات تلقائياً فور ضغط الزبون على زر «إرسال الطلبية عبر واتساب» في سلة التسوق وتأكيد الطلبية من قِبل الإدارة.
               </p>
             </div>`
          : `<div style="overflow-x:auto">
               <svg viewBox="0 0 930 220" style="width:100%;min-width:640px;height:210px;display:block">
                 <line x1="30" y1="185" x2="915" y2="185" stroke="rgba(178,134,70,0.35)" stroke-width="1"/>
                 ${m.dailySeries
                   .map((d, idx) => {
                     const x = 38 + idx * 28;
                     const revH = Math.round((d.revenue / maxDailyRev) * 150);
                     const profH = Math.round((Math.max(0, d.profit) / maxDailyRev) * 150);
                     return `
                       <g>
                         <title>يوم ${d.day}: مبيعات $${d.revenue.toFixed(2)} | ربح $${d.profit.toFixed(2)}</title>
                         <rect x="${x}" y="${185 - revH}" width="10" height="${Math.max(2, revH)}" rx="3" fill="#B64624" opacity="${d.revenue > 0 ? '1' : '0.18'}"/>
                         <rect x="${x + 11}" y="${185 - profH}" width="8" height="${Math.max(2, profH)}" rx="2" fill="#18864B" opacity="${d.profit > 0 ? '1' : '0.18'}"/>
                         <text x="${x + 9}" y="204" text-anchor="middle" font-size="9" font-family="monospace" fill="#767164">${d.day}</text>
                       </g>
                     `;
                   })
                   .join('')}
               </svg>
             </div>`
      }
    </div>

    <!-- Top Products & Top Regions Split -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:1.25rem">
      <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-lg);padding:1.25rem">
        <h4 style="font-size:0.95rem;font-weight:800;margin-bottom:0.85rem">الأصناف الأكثر مبيعاً في الفترة</h4>
        ${
          m.topProducts.length === 0
            ? `<p style="font-size:0.8rem;color:var(--text-muted)">لا توجد أصناف مباعة بعد ($0.00).</p>`
            : `<div style="display:grid;gap:0.55rem">
                 ${m.topProducts
                   .map(
                     tp => `
                     <div style="display:flex;align-items:center;justify-content:space-between;padding:0.55rem 0.75rem;border-radius:var(--radius-sm);background:var(--bg-subtle);font-size:0.8rem">
                       <div>
                         <strong style="display:block">${escapeHtml(tp.nameAr)}</strong>
                         <span class="num-ltr" style="font-size:0.7rem;color:var(--text-muted)">SKU: ${escapeHtml(tp.sku)} • الكمية: ${tp.qty}</span>
                       </div>
                       <strong class="num-ltr" dir="ltr" style="color:var(--accent-terracotta)">$${tp.revenue.toFixed(2)}</strong>
                     </div>
                   `
                   )
                   .join('')}
               </div>`
        }
      </div>

      <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-lg);padding:1.25rem">
        <h4 style="font-size:0.95rem;font-weight:800;margin-bottom:0.85rem">المبيعات حسب المحافظات اللبنانية</h4>
        ${
          m.topRegions.length === 0
            ? `<p style="font-size:0.8rem;color:var(--text-muted)">لا توجد طلبيات مسجلة حسب المناطق بعد.</p>`
            : `<div style="display:grid;gap:0.55rem">
                 ${m.topRegions
                   .map(
                     tr => `
                     <div style="display:flex;align-items:center;justify-content:space-between;padding:0.55rem 0.75rem;border-radius:var(--radius-sm);background:var(--bg-subtle);font-size:0.8rem">
                       <strong>${escapeHtml(tr.name)}</strong>
                       <strong class="num-ltr" dir="ltr" style="color:#18864B">$${tr.revenue.toFixed(2)} USD</strong>
                     </div>
                   `
                   )
                   .join('')}
               </div>`
        }
      </div>
    </div>
  `;
}

// ============================================================================
// TAB 2: ORDERS & INVOICES MANAGEMENT
// ============================================================================
function renderOrdersTab(store) {
  adminState.unreadNewOrdersCount = 0;
  const q = adminState.orderSearchQuery.toLowerCase().trim();
  const statusFilter = adminState.orderStatusFilter;

  const filtered = adminState.orders.filter(o => {
    if (statusFilter !== 'all' && o.status !== statusFilter) return false;
    if (!q) return true;
    const hay = `${o.orderNumber} ${o.customerName} ${o.customerPhone} ${o.regionNameAr} ${(o.items || []).map(i => i.sku + ' ' + i.nameAr).join(' ')}`.toLowerCase();
    return hay.includes(q);
  });

  const statusLabels = {
    new: { label: 'جديد (New)', color: '#C67D0F', bg: 'rgba(198,125,15,0.15)' },
    confirmed: { label: 'مؤكد (Confirmed)', color: '#1C5D68', bg: 'rgba(28,93,104,0.15)' },
    delivered: { label: 'تم التسليم (Delivered)', color: '#18864B', bg: 'rgba(24,134,75,0.16)' },
    cancelled: { label: 'ملغى (Cancelled)', color: '#B64624', bg: 'rgba(182,70,36,0.15)' }
  };

  return `
    <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-xl);padding:1.25rem">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.85rem;margin-bottom:1.25rem">
        <div style="display:flex;gap:0.45rem;flex-wrap:wrap">
          ${[
            { id: 'all', label: `الكل (${adminState.orders.length})` },
            { id: 'new', label: 'جديد' },
            { id: 'confirmed', label: 'مؤكد' },
            { id: 'delivered', label: 'تم التسليم' },
            { id: 'cancelled', label: 'ملغى' }
          ]
            .map(
              s => `
              <button type="button" class="subfilter-pill ${statusFilter === s.id ? 'active' : ''}" data-order-status-filter="${s.id}">
                ${escapeHtml(s.label)}
              </button>
            `
            )
            .join('')}
        </div>

        <div style="display:flex;gap:0.55rem;flex-wrap:wrap;flex:1;max-width:460px">
          <input
            type="search"
            id="admin-order-search"
            value="${escapeHtml(adminState.orderSearchQuery)}"
            placeholder="ابحث برقم الطلبية، اسم الزبون، الهاتف، أو الكود..."
            class="control-input"
            style="min-height:38px;flex:1"
          />
          <button type="button" id="admin-export-orders-csv" class="btn-secondary-brass" style="min-height:38px;padding-inline:0.9rem;font-size:0.76rem">
            <i data-lucide="download" style="width:14px;height:14px"></i>
            <span>تصدير CSV</span>
          </button>
        </div>
      </div>

      ${
        filtered.length === 0
          ? `<div style="padding:3rem 1rem;text-align:center;background:var(--bg-subtle);border-radius:var(--radius-lg);border:1px dashed var(--border-strong)">
               <h4 style="font-size:1rem;font-weight:800;margin-bottom:0.3rem">لا توجد طلبيات مطابقة</h4>
               <p style="font-size:0.8rem;color:var(--text-muted)">عندما يضغط الزبون على زر «إرسال الطلبية عبر واتساب» في السلة، ستظهر الطلبية هنا فوراً مع رقمها وتفاصيلها.</p>
             </div>`
          : `<div style="display:grid;gap:0.85rem">
               ${filtered
                 .map(o => {
                   const st = statusLabels[o.status] || statusLabels.new;
                   const cleanPhone = String(o.customerPhone || '').replace(/[^0-9]/g, '');
                   const waReplyPhone = cleanPhone.startsWith('961') ? cleanPhone : `961${cleanPhone.replace(/^0+/, '')}`;
                   const waReplyMsg = `مرحباً ${o.customerName}، نتواصل معك من متجر ${store.settings.storeNameAr} بخصوص طلبيتك رقم ${o.orderNumber} بقيمة $${Number(o.grandTotal).toFixed(2)} USD.`;

                   return `
                     <div style="padding:1rem 1.15rem;border-radius:var(--radius-lg);background:var(--bg-subtle);border:1px solid var(--border-strong)">
                       <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;padding-bottom:0.75rem;border-bottom:1px solid var(--border-subtle)">
                         <div>
                           <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap">
                             <strong class="num-ltr" style="font-size:0.95rem">${escapeHtml(o.orderNumber)}</strong>
                             <span style="font-size:0.72rem;font-weight:800;padding:0.15rem 0.6rem;border-radius:99px;background:${st.bg};color:${st.color}">${st.label}</span>
                             <span class="sku-pill">${o.pricingMode === 'wholesale' ? 'جملة (Wholesale)' : 'مفرق (Retail)'}</span>
                           </div>
                           <div style="font-size:0.78rem;color:var(--text-secondary);margin-top:0.25rem">
                             👤 <strong>${escapeHtml(o.customerName)}</strong> • 📞 <span class="num-ltr">${escapeHtml(o.customerPhone)}</span> • 📍 ${escapeHtml(o.regionNameAr)} (${escapeHtml(o.address)})
                           </div>
                         </div>

                         <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap">
                           <select class="control-select" data-order-status-select="${escapeHtml(o.id)}" style="min-height:36px;width:auto;font-size:0.76rem">
                             <option value="new" ${o.status === 'new' ? 'selected' : ''}>جديد (New)</option>
                             <option value="confirmed" ${o.status === 'confirmed' ? 'selected' : ''}>مؤكد (Confirmed)</option>
                             <option value="delivered" ${o.status === 'delivered' ? 'selected' : ''}>تم التسليم (Delivered)</option>
                             <option value="cancelled" ${o.status === 'cancelled' ? 'selected' : ''}>ملغى (Cancelled)</option>
                           </select>

                           <a
                             href="https://wa.me/${encodeURIComponent(waReplyPhone)}?text=${encodeURIComponent(waReplyMsg)}"
                             target="_blank"
                             rel="noopener noreferrer"
                             class="icon-action-btn"
                             style="min-height:36px;color:#18864B;border-color:rgba(24,134,75,0.4)"
                             title="الرد على الزبون عبر واتساب"
                           >
                             <i data-lucide="message-circle" style="width:14px;height:14px"></i>
                             <span>واتساب</span>
                           </a>

                           <button
                             type="button"
                             class="icon-action-btn"
                             data-print-order="${escapeHtml(o.id)}"
                             style="min-height:36px"
                             title="طباعة فاتورة الطلبية PDF"
                           >
                             <i data-lucide="printer" style="width:14px;height:14px"></i>
                             <span>فاتورة</span>
                           </button>
                         </div>
                       </div>

                       <!-- Order Items & Totals -->
                       <div style="margin-top:0.75rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;font-size:0.78rem">
                         <div style="display:flex;flex-wrap:wrap;gap:0.45rem">
                           ${(o.items || [])
                             .map(
                               it => `
                               <span class="sku-pill">
                                 ${escapeHtml(it.nameAr)} (<strong class="num-ltr">${escapeHtml(it.sku)}</strong>) × <strong class="num-ltr">${it.qty}</strong> = <strong class="num-ltr" dir="ltr">$${Number(it.lineTotal).toFixed(2)}</strong>
                               </span>
                             `
                             )
                             .join('')}
                         </div>

                         <div class="num-ltr" dir="ltr" style="font-weight:800;font-size:0.88rem">
                           Subtotal: $${Number(o.subtotal).toFixed(2)} + Delivery: $${Number(o.deliveryFee).toFixed(2)} =
                           <span style="color:var(--accent-terracotta);font-size:1rem">$${Number(o.grandTotal).toFixed(2)} USD</span>
                           <small style="color:#18864B;margin-left:6px">(Profit: +$${Number(o.netProfit || 0).toFixed(2)})</small>
                         </div>
                       </div>
                     </div>
                   `;
                 })
                 .join('')}
             </div>`
      }
    </div>
  `;
}

// ============================================================================
// TAB 3: PRODUCT MANAGEMENT, INLINE EDIT, BULK PRICE & MERGE DUPLICATES
// ============================================================================
function renderProductsManagementTab(store) {
  const q = adminState.productSearchQuery.toLowerCase().trim();
  const catFilter = adminState.productCategoryFilter;

  const filteredRaw = store.rawProducts.filter(p => {
    if (catFilter !== 'all' && p.category !== catFilter) return false;
    if (!q) return true;
    return `${p.nameAr} ${p.sku} ${p.box} ${p.category} ${p.badge || ''}`.toLowerCase().includes(q);
  });

  const mergeReport = previewDuplicateMerge(store.rawProducts);

  return `
    <!-- Top Product Actions Bar -->
    <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-xl);padding:1.25rem;margin-bottom:1.25rem">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1rem">
        <div>
          <h3 style="font-family:var(--font-display);font-size:1.25rem;font-weight:700">
            إدارة المنتجات والعائلات والأسعار بدون برمجة
          </h3>
          <p style="font-size:0.78rem;color:var(--text-secondary)">
            إجمالي الصفوف: <strong class="num-ltr">${store.rawProducts.length}</strong> صف • مدمجة في الواجهة ضمن <strong class="num-ltr">${store.stats.totalFamilies}</strong> عائلة منتج مع خيارات الموديلات
          </p>
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:0.5rem">
          <button type="button" id="admin-new-product-btn" class="btn-primary-editorial" style="min-height:40px;font-size:0.78rem">
            <i data-lucide="plus" style="width:16px;height:16px"></i>
            <span>إضافة منتج جديد</span>
          </button>

          <button type="button" id="admin-open-merge-preview-btn" class="btn-secondary-brass" style="min-height:40px;font-size:0.78rem">
            <i data-lucide="git-merge" style="width:16px;height:16px;color:var(--accent-terracotta)"></i>
            <span>أداة دمج التكرارات (${mergeReport.mergedDuplicateRowsCount} تكرار)</span>
          </button>

          ${
            hasCatalogUndoBackup()
              ? `<button type="button" id="admin-undo-catalog-btn" class="icon-action-btn" style="min-height:40px;color:#18864B;border-color:#18864B">
                   <i data-lucide="undo-2" style="width:15px;height:15px"></i>
                   <span>تراجع عن آخر تعديل (Undo)</span>
                 </button>`
              : ''
          }

          <button type="button" id="admin-export-catalog-json" class="icon-action-btn" style="min-height:40px">
            <i data-lucide="download" style="width:15px;height:15px"></i>
            <span>تصدير نسخة احتياطية JSON</span>
          </button>

          <label class="icon-action-btn" style="min-height:40px;cursor:pointer">
            <i data-lucide="upload" style="width:15px;height:15px"></i>
            <span>استيراد JSON/CSV</span>
            <input type="file" id="admin-import-file-input" accept=".json,.csv" class="hidden" />
          </label>
        </div>
      </div>

      <!-- Bulk Price Editor Strip -->
      <div style="padding:0.85rem 1rem;border-radius:var(--radius-md);background:var(--bg-subtle);border:1px solid var(--border-subtle);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;margin-bottom:1rem">
        <div style="font-size:0.8rem;font-weight:700">
          ⚡ تعديل الأسعار الجماعي (Bulk Price Adjust):
        </div>
        <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap">
          <input type="number" id="bulk-pct-input" value="10" step="1" min="-50" max="100" class="control-input num-ltr" style="width:90px;min-height:36px;font-size:0.8rem" />
          <span style="font-size:0.8rem;font-weight:700">%</span>
          <button type="button" id="apply-bulk-price-btn" class="subfilter-pill active">
            تطبيق النسبة على الفئة المحددة (مع حفظ نسخة تراجع)
          </button>
        </div>
      </div>

      <!-- Search & Category Filter -->
      <div style="display:grid;grid-template-columns:1fr auto;gap:0.75rem">
        <input
          type="search"
          id="admin-product-search"
          value="${escapeHtml(adminState.productSearchQuery)}"
          placeholder="ابحث بالاسم العربي، الكود (SKU)، أو رقم الكرتونة (Box)..."
          class="control-input"
          style="min-height:40px"
        />
        <select id="admin-product-cat-filter" class="control-select" style="min-height:40px;width:auto">
          <option value="all">كل الفئات (${store.rawProducts.length})</option>
          ${(store.categories || [])
            .map(
              c =>
                `<option value="${escapeHtml(c.id)}" ${catFilter === c.id ? 'selected' : ''}>${escapeHtml(c.shortAr || c.id)}</option>`
            )
            .join('')}
        </select>
      </div>
    </div>

    ${adminState.mergePreviewOpen ? renderMergeDuplicatesPreviewCard(mergeReport) : ''}
    ${adminState.editingProduct ? renderProductEditorModalCard(adminState.editingProduct, store) : ''}

    <!-- Inline Editable Products Table (First 60 matching rows for fast DOM) -->
    <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-xl);overflow:hidden">
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:0.78rem;text-align:right">
          <thead>
            <tr style="background:var(--bg-muted);border-bottom:1px solid var(--border-strong)">
              <th style="padding:0.75rem">الرمز الفني</th>
              <th style="padding:0.75rem">SKU / Box</th>
              <th style="padding:0.75rem">اسم الصنف والفئة</th>
              <th style="padding:0.75rem">سعر الجملة ($)</th>
              <th style="padding:0.75rem">سعر المفرق ($)</th>
              <th style="padding:0.75rem">الشارة</th>
              <th style="padding:0.75rem">الحالة</th>
              <th style="padding:0.75rem">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            ${filteredRaw
              .slice(0, 60)
              .map(
                p => `
                <tr style="border-bottom:1px solid var(--border-subtle);opacity:${p.active === false ? '0.48' : '1'}">
                  <td style="padding:0.55rem 0.75rem;width:58px">
                    <div style="width:44px;height:44px">
                      ${renderArtTile(p, { size: 'sm', showMeta: false })}
                    </div>
                  </td>
                  <td style="padding:0.55rem 0.75rem" class="num-ltr">
                    <strong>${escapeHtml(p.sku)}</strong><br/>
                    <small style="color:var(--text-muted)">Box: ${escapeHtml(p.box)}</small>
                  </td>
                  <td style="padding:0.55rem 0.75rem">
                    <input
                      type="text"
                      value="${escapeHtml(p.nameAr)}"
                      data-inline-field="nameAr"
                      data-prod-id="${p.id}"
                      class="control-input"
                      style="min-height:32px;font-size:0.78rem;font-weight:700;margin-bottom:0.2rem"
                    />
                    <span style="font-size:0.68rem;color:var(--text-muted)">${escapeHtml(p.category)}</span>
                  </td>
                  <td style="padding:0.55rem 0.75rem;width:105px">
                    <input
                      type="number"
                      step="0.05"
                      value="${Number(p.wholesalePrice).toFixed(2)}"
                      data-inline-field="wholesalePrice"
                      data-prod-id="${p.id}"
                      class="control-input num-ltr"
                      dir="ltr"
                      style="min-height:32px;font-size:0.78rem"
                    />
                  </td>
                  <td style="padding:0.55rem 0.75rem;width:105px">
                    <input
                      type="number"
                      step="0.05"
                      value="${Number(p.retailPrice).toFixed(2)}"
                      data-inline-field="retailPrice"
                      data-prod-id="${p.id}"
                      class="control-input num-ltr"
                      dir="ltr"
                      style="min-height:32px;font-size:0.78rem"
                    />
                  </td>
                  <td style="padding:0.55rem 0.75rem;width:115px">
                    <input
                      type="text"
                      value="${escapeHtml(p.badge || '')}"
                      placeholder="بدون شارة"
                      data-inline-field="badge"
                      data-prod-id="${p.id}"
                      class="control-input"
                      style="min-height:32px;font-size:0.74rem"
                    />
                  </td>
                  <td style="padding:0.55rem 0.75rem">
                    <button
                      type="button"
                      class="subfilter-pill ${p.active !== false ? 'active' : ''}"
                      data-toggle-active="${p.id}"
                      style="font-size:0.68rem;padding:0.2rem 0.55rem"
                    >
                      ${p.active !== false ? 'ظاهر' : 'مخفي'}
                    </button>
                  </td>
                  <td style="padding:0.55rem 0.75rem">
                    <div style="display:flex;gap:0.3rem">
                      <button type="button" class="icon-action-btn" data-edit-prod="${p.id}" style="min-width:32px;min-height:32px;padding:4px" title="تعديل كامل ورفع صورة">
                        <i data-lucide="edit-3" style="width:14px;height:14px"></i>
                      </button>
                      <button type="button" class="icon-action-btn" data-dup-prod="${p.id}" style="min-width:32px;min-height:32px;padding:4px" title="نسخ المنتج">
                        <i data-lucide="copy" style="width:14px;height:14px"></i>
                      </button>
                      <button type="button" class="icon-action-btn" data-del-prod="${p.id}" style="min-width:32px;min-height:32px;padding:4px;color:var(--accent-terracotta)" title="حذف">
                        <i data-lucide="trash-2" style="width:14px;height:14px"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              `
              )
              .join('')}
          </tbody>
        </table>
      </div>
      <div style="padding:0.75rem 1rem;background:var(--bg-subtle);font-size:0.75rem;color:var(--text-muted)">
        يتم عرض أول ${Math.min(60, filteredRaw.length)} من أصل ${filteredRaw.length} صف مطابق. أي تعديل في الحقول أعلاه يُحفظ تلقائياً ويُحدّث عائلات المتجر فوراً.
      </div>
    </div>
  `;
}

function renderMergeDuplicatesPreviewCard(report) {
  return `
    <div style="background:#171914;color:#F7F3EB;border:1.5px solid var(--accent-brass);border-radius:var(--radius-xl);padding:1.5rem;margin-bottom:1.5rem">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1rem;flex-wrap:wrap">
        <div>
          <span class="bento-count-pill" style="margin-bottom:0.35rem">معاينة دمج التكرارات في عائلات المنتجات</span>
          <h4 style="font-family:var(--font-display);font-size:1.3rem;color:#FFD98E">
            تحويل ${report.beforeRowCount} صفاً إلى ${report.afterFamilyCount} عائلة منتج رئيسية (${report.multiVariantFamiliesCount} عائلة متعددة الموديلات)
          </h4>
        </div>
        <div style="display:flex;gap:0.5rem">
          <button type="button" id="confirm-merge-families-btn" class="btn-primary-editorial" style="min-height:38px;font-size:0.78rem">
            تأكيد وحفظ مفاتيح العائلات (مع أخذ نسخة احتياطية)
          </button>
          <button type="button" id="close-merge-preview-btn" class="icon-action-btn" style="min-height:38px;background:rgba(255,255,255,0.1);color:#fff">
            إغلاق
          </button>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:0.65rem;max-height:260px;overflow-y:auto">
        ${report.topMergedFamilies
          .map(
            f => `
            <div style="padding:0.7rem;border-radius:var(--radius-md);background:rgba(255,255,255,0.06);border:1px solid rgba(204,160,94,0.28);font-size:0.76rem">
              <strong style="color:#FFD98E;display:block">${escapeHtml(f.baseNameAr)}</strong>
              <span style="color:var(--text-on-dark-muted)">${f.variantCount} موديلات مدمجة • السعر: <strong class="num-ltr" dir="ltr">${f.priceRangeRetail}</strong></span>
              <div class="num-ltr" style="font-size:0.68rem;opacity:0.75;margin-top:0.2rem">SKUs: ${escapeHtml(f.sampleSkus)}...</div>
            </div>
          `
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderProductEditorModalCard(prod, store) {
  return `
    <div style="background:var(--bg-elevated);border:2px solid var(--accent-terracotta);border-radius:var(--radius-xl);padding:1.5rem;margin-bottom:1.5rem;box-shadow:var(--shadow-lg)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem">
        <h4 style="font-family:var(--font-display);font-size:1.25rem;font-weight:700">
          ${prod.isNew ? 'إضافة منتج / موديل جديد' : `تعديل الصنف: ${escapeHtml(prod.nameAr)}`}
        </h4>
        <button type="button" id="cancel-edit-prod-btn" class="icon-action-btn" style="min-height:34px">إغلاق</button>
      </div>

      <form id="admin-product-modal-form" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:0.85rem">
        <div>
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">اسم الصنف بالعربية *</label>
          <input type="text" name="nameAr" required value="${escapeHtml(prod.nameAr || '')}" class="control-input" />
        </div>
        <div>
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">الفئة *</label>
          <select name="category" class="control-select">
            ${(store.categories || [])
              .map(
                c => `<option value="${escapeHtml(c.id)}" ${prod.category === c.id ? 'selected' : ''}>${escapeHtml(c.shortAr || c.id)}</option>`
              )
              .join('')}
          </select>
        </div>
        <div>
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">كود الموديل (SKU) *</label>
          <input type="text" name="sku" required value="${escapeHtml(prod.sku || '')}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">رقم الكرتونة (Box)</label>
          <input type="text" name="box" value="${escapeHtml(prod.box || '1')}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">سعر الجملة ($) *</label>
          <input type="number" step="0.05" name="wholesalePrice" required value="${Number(prod.wholesalePrice || 5).toFixed(2)}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">سعر المفرق ($) *</label>
          <input type="number" step="0.05" name="retailPrice" required value="${Number(prod.retailPrice || 8).toFixed(2)}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">المواصفات (Specs)</label>
          <input type="text" name="specs" value="${escapeHtml(prod.specs || 'Standard')}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">الشارة (Badge)</label>
          <input type="text" name="badge" value="${escapeHtml(prod.badge || '')}" placeholder="الأكثر مبيعاً / جديد / عرض خاص" class="control-input" />
        </div>
        <div style="grid-column:1/-1">
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">وصف الصنف</label>
          <input type="text" name="descAr" value="${escapeHtml(prod.descAr || '')}" class="control-input" />
        </div>
        <div style="grid-column:1/-1;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;padding-top:0.5rem">
          <div style="display:flex;align-items:center;gap:0.65rem;flex-wrap:wrap">
            <label class="btn-secondary-brass" style="min-height:38px;font-size:0.76rem;cursor:pointer">
              <i data-lucide="image-plus" style="width:15px;height:15px"></i>
              <span>رفع صورة حقيقية عالية الدقة (تُضغط WebP تلقائياً — اختياري)</span>
              <input type="file" id="admin-upload-prod-photo" accept="image/*" class="hidden" />
            </label>
            <input
              type="text"
              name="customImageUrl"
              id="admin-custom-img-url"
              value="${escapeHtml(prod.customImageUrl || '')}"
              placeholder="أو اتركه فارغاً لاستخدام لوحة الفن المشرقية (Art Tile)"
              class="control-input num-ltr"
              dir="ltr"
              style="min-height:38px;width:290px;font-size:0.74rem"
            />
          </div>

          <button type="submit" class="btn-primary-editorial" style="min-height:42px">
            <i data-lucide="check" style="width:16px;height:16px"></i>
            <span>حفظ الصنف وتحديث الكتالوج</span>
          </button>
        </div>
      </form>
    </div>
  `;
}

// ============================================================================
// TAB 4: CATEGORIES & BRIDAL PACKAGES EDITOR
// ============================================================================
function renderPackagesAndCategoriesTab(store) {
  return `
    <div style="display:grid;gap:1.5rem">
      <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-xl);padding:1.35rem">
        <h3 style="font-family:var(--font-display);font-size:1.25rem;font-weight:700;margin-bottom:0.85rem">
          تعديل باقات تجهيز العرائس والمتاجر (${store.packages.length} باقات)
        </h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem">
          ${store.packages
            .map(
              (pkg, idx) => `
              <div style="padding:1rem;border-radius:var(--radius-lg);background:var(--bg-subtle);border:1px solid var(--border-strong);display:grid;gap:0.55rem">
                <label style="font-size:0.72rem;font-weight:700">اسم الباقة:</label>
                <input type="text" value="${escapeHtml(pkg.nameAr)}" data-pkg-idx="${idx}" data-pkg-field="nameAr" class="control-input" style="min-height:36px;font-size:0.8rem;font-weight:700" />
                <label style="font-size:0.72rem;font-weight:700">الوصف المختصر:</label>
                <input type="text" value="${escapeHtml(pkg.subtitleAr)}" data-pkg-idx="${idx}" data-pkg-field="subtitleAr" class="control-input" style="min-height:36px;font-size:0.76rem" />
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem">
                  <div>
                    <label style="font-size:0.72rem;font-weight:700">الشارة:</label>
                    <input type="text" value="${escapeHtml(pkg.badgeAr || '')}" data-pkg-idx="${idx}" data-pkg-field="badgeAr" class="control-input" style="min-height:36px;font-size:0.76rem" />
                  </div>
                  <div>
                    <label style="font-size:0.72rem;font-weight:700">نسبة الخصم (%):</label>
                    <input type="number" value="${Number(pkg.discountPct || 8)}" data-pkg-idx="${idx}" data-pkg-field="discountPct" class="control-input num-ltr" dir="ltr" style="min-height:36px;font-size:0.76rem" />
                  </div>
                </div>
                <div class="num-ltr" dir="ltr" style="font-size:0.76rem;color:var(--accent-terracotta);font-weight:800">
                  Package Price: $${pkg.packagePrice.toFixed(2)} USD (Savings: $${pkg.savingsAmount.toFixed(2)})
                </div>
              </div>
            `
            )
            .join('')}
        </div>
        <button type="button" id="save-packages-admin-btn" class="btn-primary-editorial" style="margin-top:1rem">
          حفظ تعديلات باقات العرائس
        </button>
      </div>
    </div>
  `;
}

// ============================================================================
// TAB 5: WHITE-LABEL STORE SETTINGS (FOR RESALE TO ANY STORE OWNER)
// ============================================================================
function renderWhiteLabelSettingsTab(store) {
  const s = store.settings;
  return `
    <form id="admin-settings-form" style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-xl);padding:1.5rem;display:grid;gap:1.25rem">
      <div>
        <h3 style="font-family:var(--font-display);font-size:1.3rem;font-weight:700">
          إعدادات الهوية والمتجر الكاملة (White-Label Configuration)
        </h3>
        <p style="font-size:0.8rem;color:var(--text-secondary)">
          جميع النصوص، أرقام الواتساب، رسوم التوصيل، الألوان، والأسئلة الشائعة تُقرأ مباشرةً من هذه الإعدادات دون الحاجة لتعديل الكود.
        </p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:0.9rem">
        <div>
          <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">اسم المتجر بالعربية *</label>
          <input type="text" name="storeNameAr" required value="${escapeHtml(s.storeNameAr)}" class="control-input" />
        </div>
        <div>
          <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">اسم المتجر بالإنجليزية *</label>
          <input type="text" name="storeNameEn" required value="${escapeHtml(s.storeNameEn)}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">رقم واتساب لاستقبال الطلبيات (مع رمز الدولة بدون +) *</label>
          <input type="text" name="whatsappPhone" required value="${escapeHtml(s.whatsappPhone)}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">صيغة عرض الرقم للزبائن</label>
          <input type="text" name="whatsappDisplay" value="${escapeHtml(s.whatsappDisplay)}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">حد التوصيل المجاني للمفرق ($)</label>
          <input type="number" step="1" name="freeDeliveryThresholdRetail" value="${Number(s.freeDeliveryThresholdRetail || 65)}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">حد التوصيل المجاني للجملة ($)</label>
          <input type="number" step="1" name="freeDeliveryThresholdWholesale" value="${Number(s.freeDeliveryThresholdWholesale || 220)}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">ثيم الألوان الرئيسي (Brand Color Preset)</label>
          <select name="colorPresetId" class="control-select">
            ${BRAND_COLOR_PRESETS.map(
              p => `<option value="${p.id}" ${s.colorPresetId === p.id ? 'selected' : ''}>${escapeHtml(p.nameAr)}</option>`
            ).join('')}
          </select>
        </div>
        <div>
          <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">العنوان وساعات العمل</label>
          <input type="text" name="addressAr" value="${escapeHtml(s.addressAr)}" class="control-input" />
        </div>
      </div>

      <div>
        <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">العنوان الترحيبي الرئيسي (Hero Headline)</label>
        <input type="text" name="heroHeadlineAr" value="${escapeHtml(s.heroHeadlineAr)}" class="control-input" />
      </div>

      <div>
        <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">النص التوضيحي تحت العنوان (Hero Subheadline)</label>
        <input type="text" name="heroSubheadlineAr" value="${escapeHtml(s.heroSubheadlineAr)}" class="control-input" />
      </div>

      <div style="display:flex;wrap:wrap;gap:0.75rem;justify-content:space-between;align-items:center;padding-top:0.75rem;border-top:1px solid var(--border-subtle)">
        <button type="button" id="reset-default-settings-btn" class="icon-action-btn" style="color:var(--accent-terracotta)">
          استعادة الإعدادات الافتراضية
        </button>
        <button type="submit" class="btn-primary-editorial">
          <i data-lucide="save" style="width:17px;height:17px"></i>
          <span>حفظ وتطبيق إعدادات المتجر فوراً</span>
        </button>
      </div>
    </form>
  `;
}

// ============================================================================
// ADMIN EVENT HANDLERS
// ============================================================================
function bindAdminDashboardEvents(rootEl, store, showToast) {
  // Logout
  rootEl.querySelector('#admin-logout-btn')?.addEventListener('click', () => {
    signOutAdmin();
    store.adminAuthenticated = false;
    window.location.hash = '#/';
    showToast?.('تم تسجيل الخروج من لوحة الإدارة');
  });

  // Switch Admin Tabs
  rootEl.querySelectorAll('[data-admin-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      adminState.activeTab = btn.getAttribute('data-admin-tab');
      renderAdminView(store, showToast);
    });
  });

  // Analytics Period Filter
  rootEl.querySelectorAll('[data-period-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      adminState.periodFilter = btn.getAttribute('data-period-btn');
      renderAdminView(store, showToast);
    });
  });

  rootEl.querySelector('#admin-month-picker')?.addEventListener('change', e => {
    adminState.selectedMonth = e.target.value;
    adminState.periodFilter = 'month';
    renderAdminView(store, showToast);
  });

  rootEl.querySelector('#toggle-include-new')?.addEventListener('change', e => {
    adminState.includeNewOrders = e.target.checked;
    saveSettingsToStorage({ countNewOrdersInRevenue: adminState.includeNewOrders });
    renderAdminView(store, showToast);
  });

  // Orders Filter & Search
  rootEl.querySelectorAll('[data-order-status-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      adminState.orderStatusFilter = btn.getAttribute('data-order-status-filter');
      renderAdminView(store, showToast);
    });
  });

  rootEl.querySelector('#admin-order-search')?.addEventListener('input', e => {
    adminState.orderSearchQuery = e.target.value;
    renderAdminView(store, showToast);
  });

  // Order Status Change
  rootEl.querySelectorAll('[data-order-status-select]').forEach(sel => {
    sel.addEventListener('change', async e => {
      const orderId = sel.getAttribute('data-order-status-select');
      const newStatus = e.target.value;
      await updateOrderStatusInBackend(orderId, newStatus);
      showToast?.(`تم تحديث حالة الطلبية إلى: ${newStatus}`);
      renderAdminView(store, showToast);
    });
  });

  // Print Order Invoice
  rootEl.querySelectorAll('[data-print-order]').forEach(btn => {
    btn.addEventListener('click', () => {
      const orderId = btn.getAttribute('data-print-order');
      const order = adminState.orders.find(o => o.id === orderId);
      if (order) printOrderInvoice(order, store.settings);
    });
  });

  // Export Orders CSV
  rootEl.querySelector('#admin-export-orders-csv')?.addEventListener('click', () => {
    exportOrdersCsv(adminState.orders);
  });

  // Products Tab Events
  rootEl.querySelector('#admin-product-search')?.addEventListener('input', e => {
    adminState.productSearchQuery = e.target.value;
    renderAdminView(store, showToast);
  });

  rootEl.querySelector('#admin-product-cat-filter')?.addEventListener('change', e => {
    adminState.productCategoryFilter = e.target.value;
    renderAdminView(store, showToast);
  });

  // Inline Table Edits
  rootEl.querySelectorAll('[data-inline-field]').forEach(inp => {
    inp.addEventListener('change', () => {
      const id = Number(inp.getAttribute('data-prod-id'));
      const field = inp.getAttribute('data-inline-field');
      const target = store.rawProducts.find(p => Number(p.id) === id);
      if (!target) return;
      if (field === 'wholesalePrice' || field === 'retailPrice') {
        target[field] = Math.max(0.1, Number(parseFloat(inp.value).toFixed(2)) || 1);
      } else {
        target[field] = inp.value.trim();
      }
      setCatalogProducts(store.rawProducts, true, true);
      showToast?.(`تم تحديث "${target.nameAr}"`);
    });
  });

  // Toggle Product Active/Hidden
  rootEl.querySelectorAll('[data-toggle-active]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.getAttribute('data-toggle-active'));
      const target = store.rawProducts.find(p => Number(p.id) === id);
      if (!target) return;
      target.active = target.active === false ? true : false;
      setCatalogProducts(store.rawProducts, true, true);
      renderAdminView(store, showToast);
    });
  });

  // Edit / Duplicate / Delete Product
  rootEl.querySelector('#admin-new-product-btn')?.addEventListener('click', () => {
    const nextId = store.rawProducts.reduce((max, p) => Math.max(max, Number(p.id) || 0), 0) + 1;
    adminState.editingProduct = {
      isNew: true,
      id: nextId,
      sku: `BYT-${nextId}`,
      box: '1',
      nameAr: '',
      category: 'أطقم الطناجر والمقالي',
      wholesalePrice: 10,
      retailPrice: 14,
      specs: 'Standard',
      badge: 'جديد'
    };
    renderAdminView(store, showToast);
  });

  rootEl.querySelectorAll('[data-edit-prod]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.getAttribute('data-edit-prod'));
      const target = store.rawProducts.find(p => Number(p.id) === id);
      if (target) {
        adminState.editingProduct = { ...target, isNew: false };
        renderAdminView(store, showToast);
      }
    });
  });

  rootEl.querySelectorAll('[data-dup-prod]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.getAttribute('data-dup-prod'));
      const target = store.rawProducts.find(p => Number(p.id) === id);
      if (!target) return;
      const nextId = store.rawProducts.reduce((max, p) => Math.max(max, Number(p.id) || 0), 0) + 1;
      const copy = { ...target, id: nextId, sku: `${target.sku}-COPY` };
      store.rawProducts.unshift(copy);
      setCatalogProducts(store.rawProducts, true, true);
      showToast?.(`تم استنساخ الصنف (${copy.sku})`);
      renderAdminView(store, showToast);
    });
  });

  rootEl.querySelectorAll('[data-del-prod]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.getAttribute('data-del-prod'));
      if (!window.confirm('هل أنت متأكد من حذف هذا الصنف؟ يمكنك التراجع عبر زر Undo.')) return;
      const nextRows = store.rawProducts.filter(p => Number(p.id) !== id);
      setCatalogProducts(nextRows, true, true);
      showToast?.('تم حذف الصنف (تم حفظ نسخة احتياطية للتراجع)');
      renderAdminView(store, showToast);
    });
  });

  rootEl.querySelector('#cancel-edit-prod-btn')?.addEventListener('click', () => {
    adminState.editingProduct = null;
    renderAdminView(store, showToast);
  });

  rootEl.querySelector('#admin-upload-prod-photo')?.addEventListener('change', async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      showToast?.('جاري ضغط الصورة إلى WebP ورفعها...');
      const url = await compressAndUploadProductImage(file, adminState.editingProduct?.sku || 'item');
      const urlInp = rootEl.querySelector('#admin-custom-img-url');
      if (urlInp) urlInp.value = url;
      showToast?.('تم ضغط الصورة واعتمادها بنجاح');
    } catch (err) {
      showToast?.('تعذر معالجة الصورة: ' + err.message);
    }
  });

  rootEl.querySelector('#admin-product-modal-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const updated = {
      ...adminState.editingProduct,
      nameAr: String(fd.get('nameAr') || '').trim(),
      category: String(fd.get('category') || '').trim(),
      sku: String(fd.get('sku') || '').trim(),
      box: String(fd.get('box') || '1').trim(),
      wholesalePrice: Math.max(0.1, Number(parseFloat(fd.get('wholesalePrice')).toFixed(2)) || 5),
      retailPrice: Math.max(0.1, Number(parseFloat(fd.get('retailPrice')).toFixed(2)) || 8),
      specs: String(fd.get('specs') || 'Standard').trim(),
      badge: String(fd.get('badge') || '').trim(),
      descAr: String(fd.get('descAr') || '').trim(),
      customImageUrl: String(fd.get('customImageUrl') || '').trim(),
      active: true
    };
    delete updated.isNew;

    const existingIdx = store.rawProducts.findIndex(p => Number(p.id) === Number(updated.id));
    if (existingIdx !== -1) {
      store.rawProducts[existingIdx] = updated;
    } else {
      store.rawProducts.unshift(updated);
    }
    adminState.editingProduct = null;
    setCatalogProducts(store.rawProducts, true, true);
    showToast?.('تم حفظ بيانات الصنف وتحديث الكتالوج');
    renderAdminView(store, showToast);
  });

  // Bulk Price Editor
  rootEl.querySelector('#apply-bulk-price-btn')?.addEventListener('click', () => {
    const pct = parseFloat(rootEl.querySelector('#bulk-pct-input')?.value || '0');
    if (!pct || isNaN(pct)) return;
    const cat = adminState.productCategoryFilter;
    const factor = 1 + pct / 100;
    store.rawProducts.forEach(p => {
      if (cat === 'all' || p.category === cat) {
        p.wholesalePrice = Number(Math.max(0.25, p.wholesalePrice * factor).toFixed(2));
        p.retailPrice = Number(Math.max(0.5, p.retailPrice * factor).toFixed(2));
      }
    });
    setCatalogProducts(store.rawProducts, true, true);
    showToast?.(`تم تعديل الأسعار بنسبة ${pct > 0 ? '+' : ''}${pct}% بنجاح`);
    renderAdminView(store, showToast);
  });

  // Merge Duplicates Tool
  rootEl.querySelector('#admin-open-merge-preview-btn')?.addEventListener('click', () => {
    adminState.mergePreviewOpen = !adminState.mergePreviewOpen;
    renderAdminView(store, showToast);
  });

  rootEl.querySelector('#close-merge-preview-btn')?.addEventListener('click', () => {
    adminState.mergePreviewOpen = false;
    renderAdminView(store, showToast);
  });

  rootEl.querySelector('#confirm-merge-families-btn')?.addEventListener('click', () => {
    const report = previewDuplicateMerge(store.rawProducts);
    // Tag every row with its normalized family_key and remove exact SKU+price duplicates
    const deduplicatedRows = [];
    report.families.forEach(fam => {
      fam.variants.forEach(v => {
        deduplicatedRows.push({
          id: v.id,
          family_key: fam.familyKey,
          sku: v.sku,
          box: v.box,
          nameAr: v.nameAr,
          baseNameAr: fam.baseNameAr,
          descAr: v.descAr || fam.descAr,
          category: fam.category,
          specs: v.specs,
          wholesalePrice: v.wholesalePrice,
          retailPrice: v.retailPrice,
          badge: v.badge || fam.badge,
          featured: fam.featured,
          customImageUrl: v.customImageUrl || ''
        });
      });
    });
    adminState.mergePreviewOpen = false;
    setCatalogProducts(deduplicatedRows, true, true);
    showToast?.(`تم دمج التكرارات واعتماد ${report.afterFamilyCount} عائلة منتج بنجاح!`);
    renderAdminView(store, showToast);
  });

  // Undo Last Catalog Destructive Action
  rootEl.querySelector('#admin-undo-catalog-btn')?.addEventListener('click', () => {
    if (restoreCatalogUndoBackup()) {
      showToast?.('تمت استعادة النسخة السابقة من الكتالوج بنجاح');
      renderAdminView(store, showToast);
    }
  });

  // Export Catalog JSON
  rootEl.querySelector('#admin-export-catalog-json')?.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(store.rawProducts, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `baytouka-catalog-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  // Import Catalog JSON/CSV
  rootEl.querySelector('#admin-import-file-input')?.addEventListener('change', e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const text = String(ev.target.result || '').replace(/^\uFEFF/, '');
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCatalogProducts(parsed, true, true);
          showToast?.(`تم استيراد ${parsed.length} صنفاً بنجاح`);
          renderAdminView(store, showToast);
        }
      } catch (err) {
        showToast?.('خطأ في قراءة الملف: ' + err.message);
      }
    };
    reader.readAsText(file);
  });

  // Save Bridal Packages
  rootEl.querySelector('#save-packages-admin-btn')?.addEventListener('click', () => {
    const updatedPkgs = JSON.parse(JSON.stringify(store.packages));
    rootEl.querySelectorAll('[data-pkg-idx]').forEach(inp => {
      const idx = Number(inp.getAttribute('data-pkg-idx'));
      const field = inp.getAttribute('data-pkg-field');
      if (updatedPkgs[idx]) {
        updatedPkgs[idx][field] = field === 'discountPct' ? Number(inp.value) : inp.value.trim();
      }
    });
    savePackagesToStorage(updatedPkgs);
    showToast?.('تم حفظ تعديلات باقات العرائس بنجاح');
    renderAdminView(store, showToast);
  });

  // Save White-Label Settings
  rootEl.querySelector('#admin-settings-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    saveSettingsToStorage({
      storeNameAr: String(fd.get('storeNameAr') || 'بيتك').trim(),
      storeNameEn: String(fd.get('storeNameEn') || 'BAYTOUKA').trim(),
      whatsappPhone: String(fd.get('whatsappPhone') || '96171840915').replace(/[^0-9]/g, ''),
      whatsappDisplay: String(fd.get('whatsappDisplay') || '+961 71 840 915').trim(),
      freeDeliveryThresholdRetail: Number(fd.get('freeDeliveryThresholdRetail')) || 65,
      freeDeliveryThresholdWholesale: Number(fd.get('freeDeliveryThresholdWholesale')) || 220,
      colorPresetId: String(fd.get('colorPresetId') || 'levantine_saffron'),
      addressAr: String(fd.get('addressAr') || '').trim(),
      heroHeadlineAr: String(fd.get('heroHeadlineAr') || '').trim(),
      heroSubheadlineAr: String(fd.get('heroSubheadlineAr') || '').trim()
    });
    showToast?.('تم حفظ وتطبيق إعدادات المتجر بنجاح');
  });

  rootEl.querySelector('#reset-default-settings-btn')?.addEventListener('click', () => {
    saveSettingsToStorage(DEFAULT_STORE_SETTINGS);
    showToast?.('تمت استعادة الإعدادات الافتراضية');
    renderAdminView(store, showToast);
  });
}

function printOrderInvoice(order, settings) {
  const win = window.open('', '_blank', 'width=820,height=900');
  if (!win) return;
  const rowsHtml = (order.items || [])
    .map(
      (it, idx) => `
      <tr>
        <td>${idx + 1}</td>
        <td>${escapeHtml(it.nameAr)}</td>
        <td style="font-family:monospace">${escapeHtml(it.sku)} (Box: ${escapeHtml(it.box)})</td>
        <td style="font-family:monospace">${it.qty}</td>
        <td style="font-family:monospace">$${Number(it.unitPrice).toFixed(2)}</td>
        <td style="font-family:monospace;font-weight:bold">$${Number(it.lineTotal).toFixed(2)}</td>
      </tr>
    `
    )
    .join('');

  win.document.write(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8"/>
      <title>فاتورة طلبية ${escapeHtml(order.orderNumber)} | ${escapeHtml(settings.storeNameEn)}</title>
      <style>
        body { font-family: sans-serif; padding: 32px; color: #171914; }
        .header { display: flex; justify-content: space-between; border-bottom: 2px solid #B28646; padding-bottom: 16px; margin-bottom: 24px; }
        table { width: 100%; border-collapse: collapse; margin-top: 16px; }
        th, td { border: 1px solid #ddd; padding: 10px; text-align: right; font-size: 14px; }
        th { background: #F7F3EB; }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <h1 style="margin:0">${escapeHtml(settings.storeNameEn)} • ${escapeHtml(settings.storeNameAr)}</h1>
          <p style="margin:4px 0;font-size:13px">${escapeHtml(settings.addressAr || '')} | WhatsApp: ${escapeHtml(settings.whatsappDisplay || '')}</p>
        </div>
        <div style="text-align:left;direction:ltr">
          <h2 style="margin:0">${escapeHtml(order.orderNumber)}</h2>
          <small>${escapeHtml(String(order.createdAt).slice(0, 16).replace('T', ' '))}</small>
        </div>
      </div>
      <p><strong>الزبون:</strong> ${escapeHtml(order.customerName)} | <strong>الهاتف:</strong> ${escapeHtml(order.customerPhone)} | <strong>المنطقة:</strong> ${escapeHtml(order.regionNameAr)} — ${escapeHtml(order.address)}</p>
      <table>
        <thead>
          <tr><th>#</th><th>الصنف</th><th>SKU / Box</th><th>الكمية</th><th>السعر الإفرادي</th><th>المجموع</th></tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>
      <h3 style="text-align:left;direction:ltr;margin-top:20px">
        Subtotal: $${Number(order.subtotal).toFixed(2)} | Delivery: $${Number(order.deliveryFee).toFixed(2)} | Grand Total: $${Number(order.grandTotal).toFixed(2)} USD
      </h3>
      <script>window.onload = function() { window.print(); };<\/script>
    </body>
    </html>
  `);
  win.document.close();
}

function exportOrdersCsv(orders = []) {
  const headers = ['OrderNumber', 'Date', 'Status', 'Mode', 'Customer', 'Phone', 'Region', 'SubtotalUSD', 'DeliveryUSD', 'GrandTotalUSD', 'NetProfitUSD'];
  const rows = orders.map(o => [
    o.orderNumber,
    String(o.createdAt || '').slice(0, 19),
    o.status,
    o.pricingMode,
    `"${String(o.customerName || '').replace(/"/g, '""')}"`,
    `"${String(o.customerPhone || '')}"`,
    `"${String(o.regionNameAr || '')}"`,
    Number(o.subtotal || 0).toFixed(2),
    Number(o.deliveryFee || 0).toFixed(2),
    Number(o.grandTotal || 0).toFixed(2),
    Number(o.netProfit || 0).toFixed(2)
  ]);
  const csv = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `baytouka-orders-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
