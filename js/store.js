// ============================================================================
// BAYTOUKA (بيتك) — Centralized Reactive Store (Families, Variants, Settings,
// Bridal Packages, Cart with Free-Delivery Progress & Recently Viewed)
// ============================================================================

import {
  normalizeArabic,
  CATEGORY_META,
  DEFAULT_LEBANON_REGIONS,
  DEFAULT_STORE_SETTINGS,
  BRAND_COLOR_PRESETS
} from './utils.js';

import {
  buildProductFamilies,
  syncActiveVariantFields,
  findMatchingVariantIndex
} from './families.js';

import { generateBrandedOgDataUri } from './art-tiles.js';
import { isSupabaseConnected, getSupabaseConfig } from './supabase-client.js';

const DB_NAME = 'BaytoukaDB_v4';
const DB_VERSION = 1;
const STORE_PRODUCTS = 'inventory_rows';
const LOCAL_KEY_CUSTOM_CATALOG = 'baytouka_custom_catalog_v6';
const LOCAL_KEY_CATALOG_BACKUP = 'baytouka_catalog_backup_v6';
const LOCAL_KEY_SETTINGS = 'baytouka_store_settings_v2';
const LOCAL_KEY_PACKAGES = 'baytouka_bridal_packages_v2';
const LOCAL_KEY_CATEGORIES = 'baytouka_categories_v2';
const LOCAL_KEY_CART = 'baytouka_cart_v3';
const LOCAL_KEY_SAVED_CART = 'baytouka_saved_cart_v3';
const LOCAL_KEY_RECENTLY_VIEWED = 'baytouka_recently_viewed_v2';
const LOCAL_KEY_MODE = 'baytouka_mode';
const LOCAL_KEY_THEME = 'baytouka_theme';

export const BATCH_SIZE = 24;

export const store = {
  // Raw rows (645) and Normalized Product Families (~265)
  rawProducts: [],
  products: [],
  families: [],
  filteredFamilies: [],
  filteredProducts: [],
  badgedFamilies: [],
  categoryCounts: {},
  categoryVariantCounts: {},
  homeSubCounts: { all: 0, bottles: 0, cleaning: 0, appliances: 0, decor: 0 },
  stats: {
    totalProducts: 0, // Total distinct families
    totalFamilies: 0,
    totalVariants: 0, // Total models/variants across families
    totalRawRows: 0,
    totalCategories: 5,
    minRetail: 0.75,
    maxRetail: 135
  },
  // Price-range filter removed completely per Part 3
  filters: {
    category: 'all',
    homeSubCategory: 'all',
    collectionId: 'all',
    searchQuery: '',
    sortBy: 'featured', // 'featured' | 'price-asc' | 'price-desc' | 'newest'
    visibleCount: BATCH_SIZE
  },
  settings: loadSettingsFromStorage(),
  categories: loadCategoriesFromStorage(),
  packages: [],
  bridalBuilder: {
    activeStepIdx: 0,
    // Map of familyId -> { familyId, variantIdx, qty }
    selections: {}
  },
  mode: localStorage.getItem(LOCAL_KEY_MODE) === 'wholesale' ? 'wholesale' : 'retail',
  theme: localStorage.getItem(LOCAL_KEY_THEME) || 'light',
  cart: loadCartFromStorage(),
  recentlyViewedIds: loadRecentlyViewedFromStorage(),
  selectedRegionId: 'tripoli',
  route: {
    view: 'home', // 'home' | 'product' | 'admin'
    productId: null,
    categorySlug: null
  },
  adminAuthenticated: false,
  listeners: new Set()
};

function loadSettingsFromStorage() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY_SETTINGS);
    if (!raw) return structuredCloneSettings(DEFAULT_STORE_SETTINGS);
    const parsed = JSON.parse(raw);
    return {
      ...structuredCloneSettings(DEFAULT_STORE_SETTINGS),
      ...parsed,
      regions: Array.isArray(parsed.regions) && parsed.regions.length > 0 ? parsed.regions : [...DEFAULT_LEBANON_REGIONS]
    };
  } catch {
    return structuredCloneSettings(DEFAULT_STORE_SETTINGS);
  }
}

function structuredCloneSettings(obj) {
  const copy = JSON.parse(JSON.stringify(obj));
  if (!Array.isArray(copy.regions)) {
    copy.regions = JSON.parse(JSON.stringify(DEFAULT_LEBANON_REGIONS));
  }
  return copy;
}

export function saveSettingsToStorage(newSettings) {
  store.settings = {
    ...store.settings,
    ...newSettings
  };
  try {
    localStorage.setItem(LOCAL_KEY_SETTINGS, JSON.stringify(store.settings));
  } catch (e) {
    console.warn('Settings save warning:', e);
  }
  applyRuntimeBrandSettings();
  notify('settings');
}

export function applyRuntimeBrandSettings() {
  const s = store.settings;
  const preset = BRAND_COLOR_PRESETS.find(p => p.id === s.colorPresetId) || BRAND_COLOR_PRESETS[0];
  const root = document.documentElement;
  if (preset && root) {
    root.style.setProperty('--accent-terracotta', preset.accent);
    root.style.setProperty('--accent-saffron', preset.secondary);
    root.style.setProperty('--accent-brass', preset.brass);
  }
}

function loadCategoriesFromStorage() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY_CATEGORIES);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // ignore
  }
  return JSON.parse(JSON.stringify(CATEGORY_META));
}

export function saveCategoriesToStorage(cats) {
  store.categories = cats;
  try {
    localStorage.setItem(LOCAL_KEY_CATEGORIES, JSON.stringify(cats));
  } catch {
    // ignore
  }
  notify('categories');
}

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY_CART);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveCartToStorage() {
  try {
    localStorage.setItem(LOCAL_KEY_CART, JSON.stringify(store.cart));
  } catch (err) {
    console.warn('Cart save warning:', err);
  }
}

export function saveCartForLater() {
  try {
    localStorage.setItem(LOCAL_KEY_SAVED_CART, JSON.stringify(store.cart));
    return true;
  } catch {
    return false;
  }
}

export function hasSavedCartForLater() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY_SAVED_CART);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) && parsed.length > 0;
  } catch {
    return false;
  }
}

export function restoreSavedCart() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY_SAVED_CART);
    const parsed = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed) && parsed.length > 0) {
      store.cart = parsed;
      saveCartToStorage();
      notify('cart');
      return true;
    }
  } catch {
    // ignore
  }
  return false;
}

function loadRecentlyViewedFromStorage() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY_RECENTLY_VIEWED);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.slice(0, 10) : [];
  } catch {
    return [];
  }
}

export function recordRecentlyViewed(familyId) {
  const numId = Number(familyId);
  if (!numId) return;
  store.recentlyViewedIds = [numId, ...store.recentlyViewedIds.filter(id => Number(id) !== numId)].slice(0, 8);
  try {
    localStorage.setItem(LOCAL_KEY_RECENTLY_VIEWED, JSON.stringify(store.recentlyViewedIds));
  } catch {
    // ignore
  }
}

export function subscribe(listener) {
  store.listeners.add(listener);
  return () => store.listeners.delete(listener);
}

export function notify(event = 'update') {
  store.listeners.forEach(fn => {
    try {
      fn(event, store);
    } catch (e) {
      console.error('Store listener error:', e);
    }
  });
}

// IndexedDB helper for custom catalog persistence
function openDatabase() {
  return new Promise(resolve => {
    if (!window.indexedDB) {
      resolve(null);
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_PRODUCTS)) {
        db.createObjectStore(STORE_PRODUCTS, { keyPath: 'id' });
      }
    };
    req.onsuccess = e => resolve(e.target.result);
    req.onerror = () => resolve(null);
  });
}

export async function saveCustomCatalogToStorage(rawRows, createUndoBackup = true) {
  if (createUndoBackup && store.rawProducts.length > 0) {
    try {
      localStorage.setItem(LOCAL_KEY_CATALOG_BACKUP, JSON.stringify(store.rawProducts));
    } catch {
      // ignore
    }
  }

  try {
    const db = await openDatabase();
    if (db) {
      const tx = db.transaction(STORE_PRODUCTS, 'readwrite');
      const objStore = tx.objectStore(STORE_PRODUCTS);
      await new Promise((res, rej) => {
        const clearReq = objStore.clear();
        clearReq.onsuccess = () => {
          rawRows.forEach(p => objStore.put(p));
          res();
        };
        clearReq.onerror = rej;
      });
    }
  } catch (e) {
    console.warn('IndexedDB save warning:', e);
  }
  try {
    localStorage.setItem(LOCAL_KEY_CUSTOM_CATALOG, JSON.stringify(rawRows));
  } catch {
    // Ignore quota errors if IndexedDB succeeded
  }
}

export function hasCatalogUndoBackup() {
  return Boolean(localStorage.getItem(LOCAL_KEY_CATALOG_BACKUP));
}

export function restoreCatalogUndoBackup() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY_CATALOG_BACKUP);
    if (!raw) return false;
    const rows = JSON.parse(raw);
    if (Array.isArray(rows) && rows.length > 0) {
      setCatalogProducts(rows, true, false);
      localStorage.removeItem(LOCAL_KEY_CATALOG_BACKUP);
      return true;
    }
  } catch {
    // ignore
  }
  return false;
}

/**
 * Loads the canonical catalog from:
 * 1. Custom owner edits in localStorage/IndexedDB or Supabase
 * 2. fetch('products.json') over HTTP(S)
 * 3. Embedded window.__PRODUCTS__ fallback for file:// and offline
 */
export async function initCatalogStore(onErrorCallback) {
  let rawProducts = null;

  // 0. Check if owner saved custom catalog edits locally
  try {
    const savedCustom = localStorage.getItem(LOCAL_KEY_CUSTOM_CATALOG);
    if (savedCustom) {
      const parsed = JSON.parse(savedCustom);
      if (Array.isArray(parsed) && parsed.length > 0) {
        rawProducts = parsed;
      }
    }
  } catch {
    // ignore
  }

  // 1. If Supabase is connected, attempt fetching products & settings
  if (!rawProducts && isSupabaseConnected()) {
    try {
      const { url, anonKey } = getSupabaseConfig();
      const [prodRes, setRes] = await Promise.all([
        fetch(`${url}/rest/v1/products?select=*&order=sort_order.asc,id.asc`, {
          headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}` }
        }),
        fetch(`${url}/rest/v1/settings?id=eq.1&select=data`, {
          headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}` }
        })
      ]);
      if (prodRes.ok) {
        const dbProds = await prodRes.json();
        if (Array.isArray(dbProds) && dbProds.length > 0) {
          rawProducts = dbProds.map(r => ({
            id: r.id,
            family_key: r.family_key,
            sku: r.sku,
            box: r.box,
            nameAr: r.name_ar,
            descAr: r.desc_ar,
            category: r.category,
            specs: r.specs,
            wholesalePrice: Number(r.wholesale_price),
            retailPrice: Number(r.retail_price),
            costPrice: r.cost_price ? Number(r.cost_price) : undefined,
            stock: r.stock,
            badge: r.badge || '',
            featured: Boolean(r.featured),
            active: r.active !== false,
            customImageUrl: r.image_url || ''
          }));
        }
      }
      if (setRes.ok) {
        const setRows = await setRes.json();
        if (setRows?.[0]?.data && Object.keys(setRows[0].data).length > 0) {
          saveSettingsToStorage(setRows[0].data);
        }
      }
    } catch (e) {
      console.warn('[BAYTOUKA] Supabase fetch fallback to local bundle:', e);
    }
  }

  // 2. Primary web source: fetch('products.json') when served via http(s)
  if ((!rawProducts || rawProducts.length === 0) && typeof window !== 'undefined' && window.location.protocol !== 'file:' && typeof fetch === 'function') {
    try {
      const response = await fetch('products.json');
      if (response && response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          rawProducts = data;
        }
      }
    } catch (err) {
      console.warn('[BAYTOUKA] fetch("products.json") fallback to window.__PRODUCTS__:', err?.message);
    }
  }

  // 3. Embedded fallback: window.__PRODUCTS__ (from js/products-data.js)
  if (!rawProducts || rawProducts.length === 0) {
    if (typeof window !== 'undefined' && Array.isArray(window.__PRODUCTS__) && window.__PRODUCTS__.length > 0) {
      rawProducts = window.__PRODUCTS__;
    }
  }

  // 4. Secondary embedded fallbacks
  if (!rawProducts || rawProducts.length === 0) {
    if (typeof window !== 'undefined') {
      const fallback = (window.BAYTOUKA_DATA && window.BAYTOUKA_DATA.products) || window.CATALOG_PRODUCTS;
      if (Array.isArray(fallback) && fallback.length > 0) {
        rawProducts = fallback;
      }
    }
  }

  if (!rawProducts || rawProducts.length === 0) {
    console.error('[BAYTOUKA ERROR] Both fetch and embedded products data failed to load.');
    if (typeof onErrorCallback === 'function') onErrorCallback();
    return [];
  }

  setCatalogProducts(rawProducts, false, false);
  return store.families;
}

export function setCatalogProducts(rawList, persistCustom = false, createUndoBackup = true) {
  store.rawProducts = Array.isArray(rawList) ? rawList : [];

  const { families, totalRawRows, totalFamilies, totalVariants } = buildProductFamilies(store.rawProducts);

  const catFamilyCounts = {};
  const catVariantCounts = {};
  const subCounts = { all: 0, bottles: 0, cleaning: 0, appliances: 0, decor: 0 };
  let maxRetail = 0;
  let minRetail = Infinity;

  families.forEach(fam => {
    catFamilyCounts[fam.category] = (catFamilyCounts[fam.category] || 0) + 1;
    catVariantCounts[fam.category] = (catVariantCounts[fam.category] || 0) + fam.variants.length;

    if (fam.maxRetailPrice > maxRetail) maxRetail = fam.maxRetailPrice;
    if (fam.minRetailPrice > 0 && fam.minRetailPrice < minRetail) minRetail = fam.minRetailPrice;

    if (fam.category === 'المطرات ومستلزمات المنزل' && fam._homeSub) {
      subCounts.all++;
      subCounts[fam._homeSub] = (subCounts[fam._homeSub] || 0) + 1;
    }
  });

  store.families = families;
  // Expose store.products as the normalized families list for seamless compatibility while keeping store.rawProducts for Admin variant rows
  store.products = families;
  store.categoryCounts = catFamilyCounts;
  store.categoryVariantCounts = catVariantCounts;
  store.homeSubCounts = subCounts;
  store.badgedFamilies = families.filter(f => Boolean(f.badge || f.featured));

  store.stats = {
    totalProducts: totalFamilies,
    totalFamilies,
    totalVariants,
    totalRawRows,
    totalCategories: Object.keys(catFamilyCounts).length || CATEGORY_META.length,
    minRetail: isFinite(minRetail) ? minRetail : 0.75,
    maxRetail: Math.max(135, Math.ceil(maxRetail))
  };

  // Initialize or refresh the 5 Ready-Made Bridal & Starter Tiers + Room Builder
  initBridalPackagesAndBuilder(families);

  // Maintain global references
  window.CATALOG_PRODUCTS = families;
  window.BAYTOUKA_DATA = {
    products: families,
    rawProducts: store.rawProducts,
    regions: store.settings.regions || DEFAULT_LEBANON_REGIONS
  };

  if (persistCustom) {
    saveCustomCatalogToStorage(store.rawProducts, createUndoBackup);
  }

  recomputeFilteredProducts();
  updateStructuredDataJsonLd();
  notify('catalog');
}

/**
 * Builds the 5 Ready-Made Bridal & Starter Package Tiers from real catalog families across all 5 categories
 */
function initBridalPackagesAndBuilder(families = []) {
  try {
    const saved = localStorage.getItem(LOCAL_KEY_PACKAGES);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length >= 4) {
        store.packages = enrichPackagesWithLiveFamilies(parsed, families);
        seedDefaultBuilderSelections(families);
        return;
      }
    }
  } catch {
    // fallback to generated tiers
  }

  const byCat = catName =>
    families
      .filter(f => f.category === catName)
      .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.maxRetailPrice - a.maxRetailPrice);

  const cookware = byCat('أطقم الطناجر والمقالي');
  const tableware = byCat('أدوات المائدة والسيراميك');
  const storage = byCat('حافظات الطعام والبهارات');
  const prep = byCat('أدوات التحضير والباربكيو');
  const home = byCat('المطرات ومستلزمات المنزل');

  const pick = (arr, idx, qty = 1) => {
    const fam = arr[idx % Math.max(1, arr.length)] || families[idx % Math.max(1, families.length)];
    return fam ? { familyId: fam.familyId, sku: fam.sku, qty } : null;
  };

  const defaultPackages = [
    {
      id: 'tier-essential',
      nameAr: 'الباقة الأساسية (Essential Bridal)',
      tierCode: 'Essential',
      badgeAr: 'اقتصادية ومتوازنة',
      subtitleAr: 'الأساسيات اليومية لمطبخ الزوجين العصري من الفئات الخمس',
      discountPct: 6,
      items: [
        pick(cookware, 4, 1),
        pick(tableware, 3, 1),
        pick(storage, 2, 1),
        pick(prep, 2, 1),
        pick(home, 2, 1)
      ].filter(Boolean)
    },
    {
      id: 'tier-classic',
      nameAr: 'الباقة الكلاسيكية (Classic Lebanese Table)',
      tierCode: 'Classic',
      badgeAr: 'الأكثر طلباً للعرائس',
      subtitleAr: 'تجهيز متكامل للطبخ والضيافة وتنظيم المطبخ والحمام',
      discountPct: 9,
      items: [
        pick(cookware, 1, 1),
        pick(cookware, 6, 1),
        pick(tableware, 0, 1),
        pick(tableware, 4, 1),
        pick(storage, 0, 1),
        pick(prep, 0, 1),
        pick(home, 0, 1)
      ].filter(Boolean)
    },
    {
      id: 'tier-premium',
      nameAr: 'باقة النخبة الفاخرة (Premium Culinary Suite)',
      tierCode: 'Premium',
      badgeAr: 'تجهيز فاخر',
      subtitleAr: 'أطقم غرانيت وستانلس، سفرة سيراميك، تمريات خشب، وستاندات ضيافة',
      discountPct: 12,
      items: [
        pick(cookware, 0, 1),
        pick(cookware, 2, 1),
        pick(tableware, 0, 1),
        pick(tableware, 1, 1),
        pick(tableware, 2, 1),
        pick(storage, 0, 1),
        pick(storage, 1, 1),
        pick(prep, 0, 1),
        pick(home, 1, 1)
      ].filter(Boolean)
    },
    {
      id: 'tier-royal',
      nameAr: 'الباقة الملكية الشاملة (Royal Complete Trousseau)',
      tierCode: 'Royal',
      badgeAr: 'تجهيز ملكي شامل',
      subtitleAr: 'أفخم أطقم الطناجر الملكية والضيافة المذهبة وتنظيم البيت الكامل',
      discountPct: 15,
      items: [
        pick(cookware, 0, 1),
        pick(cookware, 1, 1),
        pick(cookware, 3, 1),
        pick(tableware, 0, 1),
        pick(tableware, 1, 1),
        pick(tableware, 2, 1),
        pick(tableware, 5, 1),
        pick(storage, 0, 1),
        pick(storage, 2, 1),
        pick(prep, 0, 1),
        pick(prep, 1, 1),
        pick(home, 0, 1),
        pick(home, 3, 1)
      ].filter(Boolean)
    },
    {
      id: 'tier-wholesale-shop',
      nameAr: 'باقة انطلاقة المتاجر (Wholesale Shop Starter)',
      tierCode: 'B2B Starter',
      badgeAr: 'للمحلات والتجار',
      subtitleAr: 'تشكيلة سريعة الدوران لأصحاب المحلات التجارية بكميات جملة مربحة',
      discountPct: 18,
      items: [
        pick(cookware, 1, 3),
        pick(tableware, 1, 6),
        pick(storage, 0, 6),
        pick(prep, 1, 6),
        pick(home, 0, 6)
      ].filter(Boolean)
    }
  ];

  store.packages = enrichPackagesWithLiveFamilies(defaultPackages, families);
  seedDefaultBuilderSelections(families);
}

function enrichPackagesWithLiveFamilies(packagesList, families) {
  return packagesList.map(pkg => {
    let retailSum = 0;
    let wholesaleSum = 0;
    let totalPieces = 0;
    const resolvedItems = [];

    (pkg.items || []).forEach(entry => {
      const fam =
        families.find(f => Number(f.familyId) === Number(entry.familyId)) ||
        families.find(f => f.sku === entry.sku) ||
        families[0];
      if (!fam) return;
      const qty = Math.max(1, Number(entry.qty) || 1);
      retailSum += fam.retailPrice * qty;
      wholesaleSum += fam.wholesalePrice * qty;
      totalPieces += qty;
      resolvedItems.push({
        familyId: fam.familyId,
        sku: fam.sku,
        nameAr: fam.baseNameAr,
        category: fam.category,
        qty,
        retailPrice: fam.retailPrice,
        wholesalePrice: fam.wholesalePrice,
        family: fam
      });
    });

    const discountMultiplier = 1 - Math.min(40, Math.max(0, Number(pkg.discountPct) || 8)) / 100;
    const packagePrice = Number((wholesaleSum * discountMultiplier).toFixed(2));
    const savingsAmount = Number(Math.max(0, retailSum - packagePrice).toFixed(2));

    return {
      ...pkg,
      resolvedItems,
      totalPieces,
      retailSum: Number(retailSum.toFixed(2)),
      wholesaleSum: Number(wholesaleSum.toFixed(2)),
      packagePrice,
      savingsAmount
    };
  });
}

export function savePackagesToStorage(newPackages) {
  try {
    localStorage.setItem(LOCAL_KEY_PACKAGES, JSON.stringify(newPackages));
  } catch {
    // ignore
  }
  store.packages = enrichPackagesWithLiveFamilies(newPackages, store.families);
  notify('packages');
}

function seedDefaultBuilderSelections(families) {
  if (Object.keys(store.bridalBuilder.selections).length > 0) return;
  CATEGORY_META.forEach(cat => {
    const topInCat = families.filter(f => f.category === cat.id).slice(0, 2);
    topInCat.forEach(fam => {
      store.bridalBuilder.selections[fam.familyId] = {
        familyId: fam.familyId,
        variantIdx: 0,
        qty: 1
      };
    });
  });
}

export function recomputeFilteredProducts() {
  const { category, homeSubCategory, collectionId, searchQuery, sortBy } = store.filters;
  const isWholesale = store.mode === 'wholesale';
  const normQuery = normalizeArabic(searchQuery);
  const queryTokens = normQuery ? normQuery.split(' ').filter(Boolean) : [];

  // Optional collection badge regex
  let collectionRegex = null;
  if (collectionId && collectionId !== 'all') {
    const colDef = (store.settings.collectionsOrder || []).find(c => c.id === collectionId);
    if (colDef && colDef.badgeFilter) {
      collectionRegex = new RegExp(colDef.badgeFilter, 'i');
    }
  }

  const filtered = store.families.filter(fam => {
    if (category !== 'all' && fam.category !== category) return false;
    if (category === 'المطرات ومستلزمات المنزل' && homeSubCategory !== 'all') {
      if (fam._homeSub !== homeSubCategory) return false;
    }
    if (collectionRegex) {
      const badgeMatch = collectionRegex.test(fam.badge || '') || (collectionId === 'bestsellers' && fam.featured);
      if (!badgeMatch) return false;
    }

    if (queryTokens.length > 0) {
      for (let i = 0; i < queryTokens.length; i++) {
        if (!fam._normSearch.includes(queryTokens[i])) return false;
      }
      // Automatically preselect the variant matching the user's SKU/Box/model query!
      const matchedIdx = findMatchingVariantIndex(fam, searchQuery);
      if (matchedIdx !== fam.selectedVariantIdx) {
        syncActiveVariantFields(fam, matchedIdx);
      }
    }
    return true;
  });

  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => (isWholesale ? a.wholesalePrice - b.wholesalePrice : a.retailPrice - b.retailPrice));
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => (isWholesale ? b.wholesalePrice - a.wholesalePrice : b.retailPrice - a.retailPrice));
  } else if (sortBy === 'newest') {
    filtered.sort((a, b) => b.familyId - a.familyId);
  } else {
    // 'featured': badged/featured first, then multi-variant families, then catalog order
    filtered.sort(
      (a, b) =>
        (b.featured ? 1 : 0) - (a.featured ? 1 : 0) ||
        a.familyId - b.familyId
    );
  }

  store.filteredFamilies = filtered;
  store.filteredProducts = filtered;
  return filtered;
}

export function getSearchSuggestions(rawQuery, limit = 6) {
  const norm = normalizeArabic(rawQuery);
  if (!norm) return [];
  const tokens = norm.split(' ').filter(Boolean);

  const matches = [];
  for (let i = 0; i < store.families.length; i++) {
    const fam = store.families[i];
    let ok = true;
    for (let t = 0; t < tokens.length; t++) {
      if (!fam._normSearch.includes(tokens[t])) {
        ok = false;
        break;
      }
    }
    if (ok) {
      const matchedVarIdx = findMatchingVariantIndex(fam, rawQuery);
      syncActiveVariantFields(fam, matchedVarIdx);
      matches.push(fam);
      if (matches.length >= limit) break;
    }
  }
  return matches;
}

export function selectFamilyVariant(familyId, variantIdx) {
  const fam = store.families.find(f => Number(f.familyId) === Number(familyId) || Number(f.id) === Number(familyId));
  if (!fam) return null;
  syncActiveVariantFields(fam, variantIdx);
  return fam;
}

export function setPricingMode(newMode) {
  store.mode = newMode === 'wholesale' ? 'wholesale' : 'retail';
  localStorage.setItem(LOCAL_KEY_MODE, store.mode);
  document.documentElement.setAttribute('data-pricing-mode', store.mode);
  recomputeFilteredProducts();
  notify('mode');
}

export function setTheme(newTheme) {
  store.theme = newTheme === 'dark' ? 'dark' : 'light';
  localStorage.setItem(LOCAL_KEY_THEME, store.theme);
  document.documentElement.setAttribute('data-theme', store.theme);
  notify('theme');
}

export function addToCart(familyOrProductId, qty = 1, explicitVariantIdx = null) {
  const numId = Number(familyOrProductId);
  const fam =
    store.families.find(f => Number(f.familyId) === numId || Number(f.id) === numId) ||
    store.families.find(f => f.variants.some(v => Number(v.id) === numId));

  if (!fam) return null;

  const vIdx =
    explicitVariantIdx !== null
      ? Number(explicitVariantIdx)
      : fam.variants.findIndex(v => Number(v.id) === numId) !== -1
        ? fam.variants.findIndex(v => Number(v.id) === numId)
        : fam.selectedVariantIdx || 0;

  const variant = fam.variants[Math.max(0, Math.min(fam.variants.length - 1, vIdx))] || fam.variants[0];
  const amount = Math.max(1, Number(qty) || 1);

  const existing = store.cart.find(item => item.sku === variant.sku);
  if (existing) {
    existing.qty += amount;
  } else {
    store.cart.push({
      familyId: fam.familyId,
      productId: variant.id,
      sku: variant.sku,
      variantIdx: vIdx,
      qty: amount
    });
  }

  saveCartToStorage();
  notify('cart');
  return { ...variant, family: fam };
}

export function updateCartItemQty(index, newQty) {
  if (index < 0 || index >= store.cart.length) return;
  if (newQty <= 0) {
    store.cart.splice(index, 1);
  } else {
    store.cart[index].qty = Number(newQty);
  }
  saveCartToStorage();
  notify('cart');
}

export function clearCart() {
  store.cart = [];
  saveCartToStorage();
  notify('cart');
}

export function getCartSummary() {
  const isWholesale = store.mode === 'wholesale';
  const regions = store.settings.regions || DEFAULT_LEBANON_REGIONS;
  const region = regions.find(r => r.id === store.selectedRegionId) || regions[0];

  const tierQty = Number(store.settings.quantityTierDiscountQty) || 12;
  const tierDiscountPct = Number(store.settings.quantityTierDiscountPct) || 5;

  let subtotal = 0;
  let retailEquivalentTotal = 0;
  let totalPieces = 0;
  let tierDiscountTotal = 0;
  const detailedItems = [];

  store.cart.forEach((item, index) => {
    const fam =
      store.families.find(f => Number(f.familyId) === Number(item.familyId)) ||
      store.families.find(f => f.variants.some(v => v.sku === item.sku));
    if (!fam) return;

    const variant = fam.variants.find(v => v.sku === item.sku) || fam.variants[item.variantIdx || 0] || fam.variants[0];
    if (!variant) return;

    const baseUnitPrice = isWholesale ? variant.wholesalePrice : variant.retailPrice;
    const qualifiesQtyTier = item.qty >= tierQty;
    const effectiveUnitPrice = qualifiesQtyTier
      ? Number((baseUnitPrice * (1 - tierDiscountPct / 100)).toFixed(2))
      : baseUnitPrice;

    const lineTotal = Number((effectiveUnitPrice * item.qty).toFixed(2));
    if (qualifiesQtyTier) {
      tierDiscountTotal += Number(((baseUnitPrice - effectiveUnitPrice) * item.qty).toFixed(2));
    }

    subtotal += lineTotal;
    retailEquivalentTotal += variant.retailPrice * item.qty;
    totalPieces += item.qty;

    detailedItems.push({
      index,
      qty: item.qty,
      unitPrice: effectiveUnitPrice,
      baseUnitPrice,
      qualifiesQtyTier,
      lineTotal,
      product: variant,
      family: fam
    });
  });

  subtotal = Number(subtotal.toFixed(2));
  const freeThreshold = isWholesale
    ? Number(store.settings.freeDeliveryThresholdWholesale) || 220
    : Number(store.settings.freeDeliveryThresholdRetail) || 65;

  const isFreeDelivery = subtotal > 0 && subtotal >= freeThreshold;
  const remainingForFreeDelivery = Math.max(0, Number((freeThreshold - subtotal).toFixed(2)));
  const freeDeliveryProgressPct = freeThreshold > 0 ? Math.min(100, Math.round((subtotal / freeThreshold) * 100)) : 100;

  const deliveryFee = subtotal > 0 ? (isFreeDelivery ? 0 : Number(region.fee || 0)) : 0;
  const grandTotal = Number((subtotal + deliveryFee).toFixed(2));
  const totalSavings = Math.max(0, Number((retailEquivalentTotal - subtotal).toFixed(2)));

  return {
    items: detailedItems,
    totalPieces,
    subtotal,
    deliveryFee,
    grandTotal,
    totalSavings,
    tierDiscountTotal: Number(tierDiscountTotal.toFixed(2)),
    freeThreshold,
    isFreeDelivery,
    remainingForFreeDelivery,
    freeDeliveryProgressPct,
    region
  };
}

/**
 * Returns 3 complementary low-ticket impulse items for the Cart Upsell Strip ("يُطلب غالباً مع هذا الطلب")
 */
export function getCartUpsellFamilies(limit = 3) {
  const inCartFamilyIds = new Set(store.cart.map(i => Number(i.familyId)));
  return store.families
    .filter(f => !inCartFamilyIds.has(Number(f.familyId)) && f.retailPrice >= 1.0 && f.retailPrice <= 9.5)
    .slice(0, limit);
}

/**
 * Injects dynamic Schema.org JSON-LD (Store + ItemList + Product with variant Offers) & OG Image
 */
export function updateStructuredDataJsonLd(activeFamily = null) {
  let scriptEl = document.getElementById('baytouka-jsonld');
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'baytouka-jsonld';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  const s = store.settings;
  const baseUrl = window.location.origin && window.location.origin !== 'null' ? window.location.origin : 'https://baytouka.lb';

  const graph = [
    {
      '@context': 'https://schema.org',
      '@type': 'Store',
      name: `${s.storeNameEn} | ${s.storeNameAr}`,
      description: s.seoDescription,
      telephone: `+${s.whatsappPhone}`,
      priceRange: '$0.75 - $132.50',
      currenciesAccepted: s.currencyCode || 'USD',
      paymentAccepted: 'Cash on Delivery',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tripoli',
        addressCountry: 'LB'
      },
      areaServed: 'Lebanon',
      url: baseUrl
    }
  ];

  if (activeFamily) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: activeFamily.baseNameAr,
      description: activeFamily.descAr || activeFamily.baseNameAr,
      sku: activeFamily.sku,
      category: activeFamily.category,
      offers: activeFamily.variants.map(v => ({
        '@type': 'Offer',
        sku: v.sku,
        name: `${v.baseNameAr} (${v.sku})`,
        priceCurrency: s.currencyCode || 'USD',
        price: v.retailPrice.toFixed(2),
        availability: 'https://schema.org/InStock'
      }))
    });

    // Update dynamic OG image meta tag for the product
    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      ogImg.setAttribute(
        'content',
        generateBrandedOgDataUri({
          titleAr: activeFamily.baseNameAr,
          subtitleAr: activeFamily.category,
          priceText: `$${activeFamily.retailPrice.toFixed(2)} USD`,
          sku: activeFamily.sku
        })
      );
    }
  } else if (store.families.length > 0) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${s.storeNameAr} — كتالوج عائلات المنتجات`,
      numberOfItems: store.families.length,
      itemListElement: store.families.slice(0, 12).map((f, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'Product',
          name: f.baseNameAr,
          sku: f.sku,
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: s.currencyCode || 'USD',
            lowPrice: f.minWholesalePrice.toFixed(2),
            highPrice: f.maxRetailPrice.toFixed(2),
            offerCount: f.variants.length,
            availability: 'https://schema.org/InStock'
          }
        }
      }))
    });
  }

  scriptEl.textContent = JSON.stringify(graph);
}
