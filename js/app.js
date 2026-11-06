// ============================================================================
// BAYTOUKA (بيتك) — Main Application Entry, Router & Interactive Controllers
// Round 2: Levantine Art Tiles, Product Families & Variants, 5-Tier + 5-Step
// Bridal Atelier, Free-Delivery Cart & Upsells, White-Label Settings & Admin
// ============================================================================

import {
  CATEGORY_META,
  DEFAULT_LEBANON_REGIONS,
  escapeHtml,
  getCategoryBySlug,
  calcSavingsPercent,
  debounce
} from './utils.js';

import {
  renderArtTile,
  renderHeroArtComposition
} from './art-tiles.js';

import {
  store,
  BATCH_SIZE,
  initCatalogStore,
  recomputeFilteredProducts,
  getSearchSuggestions,
  selectFamilyVariant,
  setPricingMode,
  setTheme,
  addToCart,
  updateCartItemQty,
  clearCart,
  getCartSummary,
  getCartUpsellFamilies,
  saveCartForLater,
  hasSavedCartForLater,
  restoreSavedCart,
  recordRecentlyViewed,
  applyRuntimeBrandSettings,
  updateStructuredDataJsonLd,
  subscribe
} from './store.js';

import {
  dismissPageIntro,
  initHeroParallax,
  animateCounter,
  observeScrollReveals,
  flyToCartAnimation,
  initDraggableCarousel,
  initDesktopCursorAndMagnetics,
  initMobileSwipeSheets
} from './animations.js';

import {
  renderProductCard,
  renderSkeletonCards,
  renderCategoryBentoGrid,
  renderHomeSubFilterPills,
  renderCollectionsPills,
  renderSearchSuggestionsDropdown,
  renderQuickViewModal,
  renderShareableProductPage,
  renderBridalExperienceSection,
  renderFaqAccordion,
  renderLebanonRegionsGrid,
  renderCatalogLoadingError
} from './components.js';

import { submitVerifiedCustomerOrder } from './supabase-client.js';
import { renderAdminView } from './admin.js';

// Maintain compatibility namespace
window.BAYTOUKA = window.BAYTOUKA || {};
window.BAYTOUKA.state = store;
window.BAYTOUKA.renderCatalogLoadingError = renderCatalogLoadingError;

let quickViewState = {
  familyId: null,
  qty: 1
};

document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Apply saved theme, pricing mode & white-label brand color preset immediately
    document.documentElement.setAttribute('data-theme', store.theme);
    document.documentElement.setAttribute('data-pricing-mode', store.mode);
    applyRuntimeBrandSettings();
    syncThemeButtonUI();
    syncModeUI();

    // Render Hero Art Composition immediately (Zero Photos — Pure SVG Atelier)
    renderHeroStage();

    // Render initial skeleton cards in catalog grid while loading
    const catalogGrid = document.getElementById('products-grid');
    if (catalogGrid) {
      catalogGrid.innerHTML = renderSkeletonCards(8);
    }

    populateRegionSelect();
    renderRegionsShowcase();
    renderFaqSection();
    applyStorefrontSettingsToDOM();
    bindGlobalEvents();
    initStickyNavbarScroll();

    // Load 645 raw rows and normalize into ~265 Product Families with Variants
    await initCatalogStore(renderCatalogLoadingError);

    // Populate all data-driven sections
    updateAllDynamicCounters();
    renderAllSections();
    renderCartUI();
    initWholesaleCalculator();

    // Subscribe to live store updates from Admin (products, settings, categories, packages)
    subscribe(event => {
      if (event === 'catalog' || event === 'categories') {
        updateAllDynamicCounters();
        renderAllSections();
        renderCartUI();
      } else if (event === 'settings') {
        applyRuntimeBrandSettings();
        applyStorefrontSettingsToDOM();
        populateRegionSelect();
        renderRegionsShowcase();
        renderFaqSection();
        renderCollectionsStrip();
        renderCartUI();
      } else if (event === 'packages') {
        renderBridalSection();
      }
    });

    // Handle initial route (#/, #/category/:slug, #/product/:id, #/admin)
    try {
      await handleRouteChange();
    } catch (routeErr) {
      console.error('[BAYTOUKA] Route handling error:', routeErr);
    }
    window.addEventListener('hashchange', handleRouteChange);
  } catch (initErr) {
    console.error('[BAYTOUKA FATAL] Storefront initialization error:', initErr);
  } finally {
    // 1. ALWAYS dismiss the loader curtain FIRST, even if any exception occurred!
    try {
      dismissPageIntro();
    } catch (dismissErr) {
      console.error('[BAYTOUKA] Dismiss loader error:', dismissErr);
      if (typeof window !== 'undefined' && typeof window.__dismissLoader === 'function') {
        window.__dismissLoader();
      }
    }
  }

  // 2. Initialize animations strictly AFTER the loader is dismissed, each wrapped in try/catch
  try {
    initHeroParallax();
  } catch (animErr) {
    console.error('[BAYTOUKA] Hero parallax init failed:', animErr);
  }

  try {
    initDesktopCursorAndMagnetics();
  } catch (animErr) {
    console.error('[BAYTOUKA] Desktop cursor init failed:', animErr);
  }

  try {
    initMobileSwipeSheets(window.BAYTOUKA.closeQuickView, window.BAYTOUKA.closeCartDrawer);
  } catch (animErr) {
    console.error('[BAYTOUKA] Swipe sheets init failed:', animErr);
  }

  try {
    const bestsellersEl = document.getElementById('bestsellers-carousel');
    if (bestsellersEl) {
      initDraggableCarousel(bestsellersEl);
    }
  } catch (animErr) {
    console.error('[BAYTOUKA] Carousel init failed:', animErr);
  }

  try {
    observeScrollReveals();
  } catch (animErr) {
    console.error('[BAYTOUKA] Scroll reveals init failed:', animErr);
  }
});

function renderHeroStage() {
  const heroStage = document.getElementById('hero-collage-stage');
  if (heroStage) {
    heroStage.innerHTML = renderHeroArtComposition();
  }
}

/**
 * Applies owner-configurable White-Label Store Settings to DOM elements
 */
function applyStorefrontSettingsToDOM() {
  const s = store.settings || {};

  // Brand names in header & footer
  document.querySelectorAll('[data-brand-en]').forEach(el => {
    el.textContent = s.storeNameEn || 'BAYTOUKA';
  });
  document.querySelectorAll('[data-brand-ar]').forEach(el => {
    el.textContent = s.storeNameAr || 'بيتك';
  });
  document.querySelectorAll('[data-brand-tagline]').forEach(el => {
    el.textContent = s.taglineAr || 'صالة المائدة والمطبخ اللبناني • جملة ومفرق';
  });

  // Hero eyebrow & subline
  const heroEyebrowEl = document.getElementById('hero-eyebrow-text');
  if (heroEyebrowEl && s.heroEyebrowAr) {
    heroEyebrowEl.textContent = s.heroEyebrowAr;
  }

  // Announcement Marquee items
  if (Array.isArray(s.announcementMessages) && s.announcementMessages.length > 0) {
    const groups = document.querySelectorAll('#top-announcement-marquee .marquee-group');
    const html = s.announcementMessages
      .map(msg => `<span class="marquee-item">${escapeHtml(msg)}</span><span class="marquee-dot">✦</span>`)
      .join('');
    groups.forEach(g => {
      g.innerHTML = html;
    });
  }

  // Footer contact details
  const footerAddressEl = document.getElementById('footer-address-text');
  const footerHoursEl = document.getElementById('footer-hours-text');
  const footerWaLink = document.getElementById('footer-whatsapp-link');
  if (footerAddressEl && s.addressAr) footerAddressEl.textContent = `📍 ${s.addressAr}`;
  if (footerHoursEl && s.workingHoursAr) footerHoursEl.textContent = `🕒 ${s.workingHoursAr}`;
  if (footerWaLink && s.whatsappPhone) {
    footerWaLink.href = `https://wa.me/${encodeURIComponent(s.whatsappPhone)}`;
    footerWaLink.textContent = `WhatsApp: +${s.whatsappPhone}`;
  }
}

function updateAllDynamicCounters() {
  const totalFamilies = store.stats.totalFamilies || store.stats.totalProducts;
  const totalVariants = store.stats.totalVariants || store.stats.totalRawRows;
  const totalCategories = store.stats.totalCategories;

  const heroProdCounter = document.getElementById('metric-total-products');
  const heroCatCounter = document.getElementById('metric-total-categories');
  if (heroProdCounter) animateCounter(heroProdCounter, totalFamilies, 850);
  if (heroCatCounter) animateCounter(heroCatCounter, totalCategories, 700);

  document.querySelectorAll('[data-total-products-text]').forEach(el => {
    el.textContent = `${totalFamilies.toLocaleString('en-US')} عائلة (${totalVariants.toLocaleString('en-US')} موديل)`;
  });
}

function renderAllSections() {
  renderBentoSection();
  renderBestsellersSection();
  renderCollectionsStrip();
  renderCategoryFilterChips();
  renderCatalogGrid();
  renderBridalSection();
  renderFaqSection();
  if (window.lucide) window.lucide.createIcons();
  observeScrollReveals();
}

function renderBentoSection() {
  const bentoContainer = document.getElementById('category-bento-grid');
  if (bentoContainer) {
    bentoContainer.innerHTML = renderCategoryBentoGrid(store);
  }
  const homeSubRow = document.getElementById('home-subfilter-pills');
  if (homeSubRow) {
    homeSubRow.innerHTML = renderHomeSubFilterPills(store);
  }
}

function renderBestsellersSection() {
  const carousel = document.getElementById('bestsellers-carousel');
  const countBadge = document.getElementById('bestsellers-count-badge');
  if (!carousel) return;

  const isWholesale = store.mode === 'wholesale';
  const featured = store.badgedFamilies.slice(0, 16);
  if (countBadge) {
    countBadge.textContent = `${store.badgedFamilies.length} عائلة صنف مميزة`;
  }

  carousel.innerHTML = featured
    .map(fam => `<div class="carousel-slide-item">${renderProductCard(fam, isWholesale)}</div>`)
    .join('');

  if (!carousel.dataset.dragBound) {
    carousel.dataset.dragBound = '1';
    initDraggableCarousel(carousel);
  }
}

function renderCollectionsStrip() {
  const container = document.getElementById('collections-pills-container');
  if (!container) return;
  container.innerHTML = renderCollectionsPills(store);
}

function renderCategoryFilterChips() {
  const container = document.getElementById('filter-chips-container');
  if (!container) return;

  const activeCat = store.filters.category;
  const totalCount = store.stats.totalFamilies;
  const categories = (store.categories || CATEGORY_META).filter(c => c.active !== false);

  const chips = [
    { id: 'all', label: 'كل الكتالوج', count: totalCount, icon: 'layout-grid' },
    ...categories.map(c => ({
      id: c.id,
      label: c.shortAr || c.short_ar,
      count: store.categoryCounts[c.id] || 0,
      icon: c.icon || 'layers'
    }))
  ];

  container.innerHTML = chips
    .map(
      c => `
      <button
        type="button"
        class="cat-filter-chip ${activeCat === c.id ? 'active' : ''}"
        onclick="window.BAYTOUKA.filterByCategory('${escapeHtml(c.id)}')"
      >
        <i data-lucide="${escapeHtml(c.icon)}" style="width:15px;height:15px"></i>
        <span>${escapeHtml(c.label)}</span>
        <span class="chip-count-pill num-ltr">${c.count}</span>
      </button>
    `
    )
    .join('');

  // Toggle Home Sub-Filter Bar inside Catalog when "المطرات ومستلزمات المنزل" is active
  const catalogSubBar = document.getElementById('catalog-home-subbar');
  if (catalogSubBar) {
    if (activeCat === 'المطرات ومستلزمات المنزل') {
      catalogSubBar.classList.remove('hidden');
      catalogSubBar.innerHTML = renderHomeSubFilterPills(store);
    } else {
      catalogSubBar.classList.add('hidden');
    }
  }
}

function renderCatalogGrid() {
  const grid = document.getElementById('products-grid');
  const emptyState = document.getElementById('no-products-state');
  const counterEl = document.getElementById('results-counter');
  const loadMoreWrap = document.getElementById('load-more-container');
  const loadMoreInfo = document.getElementById('load-more-progress-text');

  if (!grid) return;

  const filtered = store.filteredFamilies;
  const totalFiltered = filtered.length;
  const visibleCount = Math.min(store.filters.visibleCount, totalFiltered);
  const visibleItems = filtered.slice(0, visibleCount);
  const isWholesale = store.mode === 'wholesale';

  if (counterEl) {
    counterEl.innerHTML = `عرض <strong class="num-ltr">${visibleCount}</strong> من أصل <strong class="num-ltr">${totalFiltered}</strong> عائلة صنف مطابقة — إجمالي الكتالوج: <strong class="num-ltr">${store.stats.totalFamilies}</strong> عائلة (<strong class="num-ltr">${store.stats.totalVariants}</strong> موديل ومقاس متوفر)`;
  }

  if (totalFiltered === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    if (loadMoreWrap) loadMoreWrap.classList.add('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  grid.innerHTML = visibleItems.map(fam => renderProductCard(fam, isWholesale)).join('');

  if (loadMoreWrap) {
    if (visibleCount < totalFiltered) {
      loadMoreWrap.classList.remove('hidden');
      if (loadMoreInfo) {
        loadMoreInfo.textContent = `تم عرض ${visibleCount} من ${totalFiltered} عائلة صنف — متبقي ${totalFiltered - visibleCount}`;
      }
    } else {
      loadMoreWrap.classList.add('hidden');
    }
  }

  if (window.lucide) window.lucide.createIcons();
  observeScrollReveals(grid);
}

function renderBridalSection() {
  const mountEl = document.getElementById('bridal-experience-mount');
  if (!mountEl) return;
  mountEl.innerHTML = renderBridalExperienceSection(store);
  if (window.lucide) window.lucide.createIcons();
}

function renderFaqSection() {
  const mountEl = document.getElementById('faq-accordion-mount');
  if (!mountEl) return;
  mountEl.innerHTML = renderFaqAccordion(store.settings);
  if (window.lucide) window.lucide.createIcons();
}

function renderRegionsShowcase() {
  const grid = document.getElementById('lebanon-regions-grid');
  if (grid) {
    grid.innerHTML = renderLebanonRegionsGrid(store.selectedRegionId, store.settings);
  }
}

function populateRegionSelect() {
  const select = document.getElementById('checkout-region');
  if (!select) return;
  const regions = store.settings.regions || DEFAULT_LEBANON_REGIONS;
  select.innerHTML = regions
    .map(
      r => `
      <option value="${escapeHtml(r.id)}" ${r.id === store.selectedRegionId ? 'selected' : ''}>
        ${escapeHtml(r.nameAr)} — توصيل $${Number(r.fee).toFixed(2)} (${escapeHtml(r.etaAr || '')})
      </option>
    `
    )
    .join('');
}

// ============================================================================
// CART RENDERING (Art Tile Thumbs, Free-Delivery Bar, Upsell Strip, Save Cart)
// ============================================================================
function renderCartUI() {
  const summary = getCartSummary();
  const isWholesale = store.mode === 'wholesale';

  document.querySelectorAll('.cart-count-badge, .cart-badge-count').forEach(el => {
    el.textContent = summary.totalPieces;
  });

  const headerTotal = document.getElementById('header-cart-total');
  const mobileBarTotal = document.getElementById('mobile-bar-cart-total');
  if (headerTotal) headerTotal.textContent = `\u200E$${summary.subtotal.toFixed(2)}`;
  if (mobileBarTotal) mobileBarTotal.textContent = `\u200E$${summary.subtotal.toFixed(2)}`;

  // Free-Delivery Progress Bar
  const freeDeliveryBanner = document.getElementById('cart-free-delivery-banner');
  if (freeDeliveryBanner) {
    if (summary.isFreeDelivery) {
      freeDeliveryBanner.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.76rem;font-weight:800;color:#18864B;margin-bottom:0.3rem">
          <span>🎉 مبروك! طلبيتك مؤهلة للتوصيل المجاني في كافة لبنان</span>
          <span class="num-ltr">100%</span>
        </div>
        <div class="free-delivery-track"><div class="free-delivery-fill" style="width:100%;background:#18864B"></div></div>
      `;
    } else {
      freeDeliveryBanner.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.75rem;font-weight:700;margin-bottom:0.3rem">
          <span>أضف بقيمة <strong class="num-ltr" dir="ltr" style="color:var(--accent-terracotta)">$${summary.remainingForFreeDelivery.toFixed(2)}</strong> للحصول على <strong>توصيل مجاني</strong>!</span>
          <span class="num-ltr">${summary.freeDeliveryProgressPct}%</span>
        </div>
        <div class="free-delivery-track"><div class="free-delivery-fill" style="width:${summary.freeDeliveryProgressPct}%"></div></div>
      `;
    }
  }

  const totalPiecesEl = document.getElementById('cart-total-pieces');
  const subtotalEl = document.getElementById('cart-subtotal');
  const deliveryEl = document.getElementById('cart-delivery-fee');
  const grandTotalEl = document.getElementById('cart-grand-total');
  const savingsRowEl = document.getElementById('cart-savings-row');
  const savingsValEl = document.getElementById('cart-savings-val');
  const clearBtn = document.getElementById('clear-cart-btn');
  const saveLaterBtn = document.getElementById('save-cart-later-btn');
  const restoreSavedBtn = document.getElementById('restore-saved-cart-btn');
  const listEl = document.getElementById('cart-items-list');
  const upsellStripEl = document.getElementById('cart-upsell-strip');

  if (totalPiecesEl) totalPiecesEl.textContent = summary.totalPieces;
  if (subtotalEl) subtotalEl.textContent = `$${summary.subtotal.toFixed(2)}`;
  if (deliveryEl) {
    deliveryEl.textContent = summary.isFreeDelivery ? 'مجاني ($0.00)' : `$${summary.deliveryFee.toFixed(2)}`;
  }
  if (grandTotalEl) grandTotalEl.textContent = `$${summary.grandTotal.toFixed(2)} USD`;

  if (savingsRowEl && savingsValEl) {
    const combinedSavings = summary.totalSavings + summary.tierDiscountTotal;
    savingsRowEl.classList.toggle('hidden', combinedSavings <= 0);
    savingsValEl.textContent = `$${combinedSavings.toFixed(2)} USD`;
  }

  if (clearBtn) clearBtn.classList.toggle('hidden', summary.items.length === 0);
  if (saveLaterBtn) saveLaterBtn.classList.toggle('hidden', summary.items.length === 0);
  if (restoreSavedBtn) {
    restoreSavedBtn.classList.toggle('hidden', summary.items.length > 0 || !hasSavedCartForLater());
  }

  if (!listEl) return;

  if (summary.items.length === 0) {
    listEl.innerHTML = `
      <div style="padding:2.2rem 1.15rem;text-align:center;background:var(--bg-elevated);border:1px dashed var(--border-strong);border-radius:var(--radius-lg);margin-block:0.65rem">
        <div style="width:52px;height:52px;border-radius:50%;background:var(--accent-saffron-soft);color:var(--accent-terracotta);display:flex;align-items:center;justify-content:center;margin:0 auto 0.75rem">
          <i data-lucide="shopping-bag" style="width:24px;height:24px"></i>
        </div>
        <h4 style="font-size:0.95rem;font-weight:800;margin-bottom:0.25rem">سلة التسوق فارغة حالياً</h4>
        <p style="font-size:0.78rem;color:var(--text-muted)">اضغط على (+) بجانب أي صنف لإضافته إلى السلة وإتمام الطلب عبر واتساب</p>
      </div>
    `;
  } else {
    listEl.innerHTML = summary.items
      .map(
        ({ index, qty, unitPrice, qualifiesQtyTier, lineTotal, product, family }) => `
        <div style="padding:0.75rem;margin-bottom:0.6rem;border-radius:var(--radius-md);background:var(--bg-elevated);border:1px solid var(--border-subtle);box-shadow:var(--shadow-sm)">
          <div style="display:flex;align-items:flex-start;gap:0.7rem">
            <div style="width:56px;height:56px;flex-shrink:0">
              ${renderArtTile(
                {
                  ...(family || product),
                  activeSku: product.sku,
                  activeBox: product.box
                },
                { size: 'sm', showMeta: false }
              )}
            </div>
            <div style="flex:1;min-width:0">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:0.35rem;margin-bottom:0.2rem">
                <span class="sku-pill num-ltr">SKU: ${escapeHtml(product.sku)} | Box: ${escapeHtml(product.box)}</span>
                <button
                  type="button"
                  onclick="window.BAYTOUKA.updateCartQty(${index}, 0)"
                  style="background:none;border:none;color:var(--text-muted);cursor:pointer;padding:2px"
                  aria-label="حذف ${escapeHtml(product.nameAr)}"
                >
                  <i data-lucide="trash-2" style="width:14px;height:14px"></i>
                </button>
              </div>
              <h5 style="font-size:0.82rem;font-weight:800;line-height:1.35">${escapeHtml(product.nameAr)}</h5>
              ${
                qualifiesQtyTier
                  ? `<span style="font-size:0.68rem;color:#18864B;font-weight:800">✦ خصم كمية إضافي (-5%) مفعل</span>`
                  : ''
              }
            </div>
          </div>

          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:0.55rem;padding-top:0.5rem;border-top:1px solid var(--border-subtle)">
            <span class="num-ltr" dir="ltr" style="font-size:0.75rem;color:var(--text-muted)">
              $${unitPrice.toFixed(2)} (${isWholesale ? 'جملة' : 'مفرق'})
            </span>

            <div style="display:inline-flex;align-items:center;gap:0.3rem;background:var(--bg-subtle);padding:2px 6px;border-radius:99px;border:1px solid var(--border-subtle)">
              <button type="button" onclick="window.BAYTOUKA.updateCartQty(${index}, ${qty - 1})" style="width:25px;height:25px;border-radius:50%;border:none;background:var(--bg-elevated);font-weight:800;cursor:pointer" aria-label="إنقاص">−</button>
              <span class="num-ltr" style="min-width:22px;text-align:center;font-weight:800;font-size:0.78rem">${qty}</span>
              <button type="button" onclick="window.BAYTOUKA.updateCartQty(${index}, ${qty + 1})" style="width:25px;height:25px;border-radius:50%;border:none;background:var(--bg-elevated);font-weight:800;cursor:pointer" aria-label="زيادة">+</button>
            </div>

            <strong class="num-ltr" dir="ltr" style="font-size:0.9rem;font-weight:800;color:var(--accent-terracotta)">$${lineTotal.toFixed(2)}</strong>
          </div>
        </div>
      `
      )
      .join('');
  }

  // Render Upsell Strip ("يُطلب غالباً مع هذا الطلب")
  if (upsellStripEl) {
    const upsells = getCartUpsellFamilies(3);
    if (upsells.length > 0) {
      upsellStripEl.innerHTML = `
        <div style="font-size:0.74rem;font-weight:800;color:var(--text-secondary);margin-bottom:0.45rem;display:flex;align-items:center;gap:0.35rem">
          <i data-lucide="sparkles" style="width:13px;height:13px;color:var(--accent-saffron)"></i>
          <span>يُطلب غالباً مع هذا الطلب:</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.45rem">
          ${upsells
            .map(u => {
              const p = isWholesale ? u.wholesalePrice : u.retailPrice;
              return `
                <button
                  type="button"
                  onclick="window.BAYTOUKA.quickAddWithFly(event, ${u.familyId})"
                  style="padding:0.45rem;border-radius:var(--radius-sm);background:var(--bg-elevated);border:1px solid var(--border-subtle);text-align:right;cursor:pointer;display:flex;flex-direction:column;gap:0.25rem"
                  title="أضف ${escapeHtml(u.baseNameAr)}"
                >
                  <div style="font-size:0.7rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%">${escapeHtml(u.baseNameAr)}</div>
                  <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
                    <strong class="num-ltr" dir="ltr" style="font-size:0.72rem;color:var(--accent-terracotta)">$${p.toFixed(2)}</strong>
                    <span style="font-size:0.68rem;font-weight:800;color:#18864B">+ أضف</span>
                  </div>
                </button>
              `;
            })
            .join('')}
        </div>
      `;
    } else {
      upsellStripEl.innerHTML = '';
    }
  }

  if (window.lucide) window.lucide.createIcons();
}

// ============================================================================
// ROUTING (#/, #/category/:slug, #/product/:id, #/admin)
// ============================================================================
async function handleRouteChange() {
  const rawHash = window.location.hash || '#/';
  const cleanHash = rawHash.replace(/^#\/?/, '').trim();

  const storefrontEl = document.getElementById('storefront-view');
  const productPageEl = document.getElementById('product-detail-view');
  const adminEl = document.getElementById('admin-view');

  // 1. Admin Route (#/admin or #admin) — Uses Supabase Auth / First-Run Owner Setup (Zero Hardcoded Passwords)
  if (cleanHash === 'admin' || cleanHash.startsWith('admin')) {
    store.route.view = 'admin';
    if (storefrontEl) storefrontEl.classList.add('hidden');
    if (productPageEl) productPageEl.classList.add('hidden');
    if (adminEl) adminEl.classList.remove('hidden');

    document.title = `لوحة الإدارة والمبيعات | ${store.settings.storeNameEn || 'BAYTOUKA'}`;
    renderAdminView(store, showToast);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // 2. Shareable Product Route (#/product/:id)
  if (cleanHash.startsWith('product/')) {
    const idPart = Number(cleanHash.split('/')[1]);
    const fam =
      store.families.find(f => Number(f.familyId) === idPart || Number(f.id) === idPart) ||
      store.families.find(f => f.variants.some(v => Number(v.id) === idPart));

    if (fam && productPageEl) {
      store.route.view = 'product';
      store.route.productId = fam.familyId;
      recordRecentlyViewed(fam.familyId);

      if (storefrontEl) storefrontEl.classList.add('hidden');
      if (adminEl) adminEl.classList.add('hidden');
      productPageEl.classList.remove('hidden');

      const related = store.families
        .filter(f => f.category === fam.category && f.familyId !== fam.familyId)
        .slice(0, 4);

      const recentFamilies = store.recentlyViewedIds
        .filter(id => Number(id) !== Number(fam.familyId))
        .map(id => store.families.find(f => Number(f.familyId) === Number(id)))
        .filter(Boolean)
        .slice(0, 4);

      productPageEl.innerHTML = renderShareableProductPage(
        fam,
        related,
        recentFamilies,
        store.mode === 'wholesale',
        store.settings
      );
      document.title = `${fam.baseNameAr} (${fam.sku}) | ${store.settings.storeNameEn} ${store.settings.storeNameAr}`;
      updateStructuredDataJsonLd(fam);
      if (window.lucide) window.lucide.createIcons();
      observeScrollReveals(productPageEl);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
  }

  // 3. Category Route (#/category/:slug)
  if (cleanHash.startsWith('category/')) {
    const slug = cleanHash.split('/')[1];
    const catMeta = getCategoryBySlug(slug);
    showStorefrontView();
    if (catMeta) {
      store.filters.category = catMeta.id;
      store.filters.visibleCount = BATCH_SIZE;
      recomputeFilteredProducts();
      renderCategoryFilterChips();
      renderCatalogGrid();
      document.title = `${catMeta.shortAr} | ${store.settings.storeNameEn} ${store.settings.storeNameAr}`;
      setTimeout(() => {
        document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
    return;
  }

  // 4. Default Home Storefront (#/)
  showStorefrontView();
}

function showStorefrontView() {
  store.route.view = 'home';
  const storefrontEl = document.getElementById('storefront-view');
  const productPageEl = document.getElementById('product-detail-view');
  const adminEl = document.getElementById('admin-view');

  if (storefrontEl) storefrontEl.classList.remove('hidden');
  if (productPageEl) productPageEl.classList.add('hidden');
  if (adminEl) adminEl.classList.add('hidden');

  document.title = store.settings.seoTitle || 'BAYTOUKA | بيتك — المائدة اللبنانية لأواني المطبخ والضيافة بالجملة والمفرق';
  updateStructuredDataJsonLd(null);
}

// ============================================================================
// STICKY NAVBAR SCROLL & WHOLESALE PROFIT CALCULATOR
// ============================================================================
function initStickyNavbarScroll() {
  const headerWrap = document.getElementById('floating-header-wrap');
  if (!headerWrap) return;

  let lastScrollY = window.scrollY;
  window.addEventListener(
    'scroll',
    () => {
      const currentY = window.scrollY;
      if (currentY > 180 && currentY > lastScrollY + 8) {
        headerWrap.classList.add('nav-hidden');
      } else if (currentY < lastScrollY - 6 || currentY <= 120) {
        headerWrap.classList.remove('nav-hidden');
      }
      lastScrollY = currentY;
    },
    { passive: true }
  );
}

function initWholesaleCalculator() {
  const slider = document.getElementById('wholesale-calc-slider');
  const boxesCountEl = document.getElementById('calc-boxes-val');
  const retailValEl = document.getElementById('calc-retail-value');
  const wholesaleCostEl = document.getElementById('calc-wholesale-cost');
  const netProfitEl = document.getElementById('calc-net-profit');

  if (!slider) return;

  function updateCalc() {
    const budget = Number(slider.value) || 250;
    const retailEquivalent = budget * 1.34;
    const profit = retailEquivalent - budget;
    if (boxesCountEl) boxesCountEl.textContent = `$${budget}`;
    if (wholesaleCostEl) wholesaleCostEl.textContent = `$${budget.toFixed(2)} USD`;
    if (retailValEl) retailValEl.textContent = `$${retailEquivalent.toFixed(2)} USD`;
    if (netProfitEl) netProfitEl.textContent = `+$${profit.toFixed(2)} USD`;
  }

  slider.addEventListener('input', updateCalc);
  updateCalc();
}

function syncModeUI() {
  const isWholesale = store.mode === 'wholesale';
  const modeBadge = document.getElementById('current-mode-label');
  const drawerPill = document.getElementById('drawer-mode-pill');
  const wholesaleNotice = document.getElementById('wholesale-banner-notice');

  if (modeBadge) modeBadge.textContent = isWholesale ? 'مبيع بالجملة (Wholesale)' : 'مبيع بالمفرق (Retail)';
  if (drawerPill) drawerPill.textContent = isWholesale ? 'جملة' : 'مفرق';
  if (wholesaleNotice) wholesaleNotice.classList.toggle('hidden', !isWholesale);
}

function syncThemeButtonUI() {
  const iconEl = document.getElementById('theme-toggle-icon');
  if (iconEl) {
    iconEl.setAttribute('data-lucide', store.theme === 'dark' ? 'sun' : 'moon');
    if (window.lucide) window.lucide.createIcons();
  }
}

export function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  toast.innerHTML = `<span style="width:8px;height:8px;border-radius:50%;background:var(--accent-saffron-bright);flex-shrink:0"></span><span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// ============================================================================
// PUBLIC API METHODS ON window.BAYTOUKA
// ============================================================================
window.BAYTOUKA.setupMode = function (mode, notifyToast = true) {
  setPricingMode(mode);
  syncModeUI();
  renderBestsellersSection();
  renderCatalogGrid();
  renderBridalSection();
  renderCartUI();
  if (store.route.view === 'product' && store.route.productId) {
    handleRouteChange();
  }
  if (notifyToast) {
    showToast(
      store.mode === 'wholesale'
        ? 'تم تفعيل أسعار الجملة وإظهار أرقام الكراتين (Box) وخصومات الكميات'
        : 'تم تفعيل أسعار المفرق'
    );
  }
};

window.BAYTOUKA.toggleTheme = function () {
  const next = store.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  syncThemeButtonUI();
  showToast(next === 'dark' ? 'تم تفعيل الوضع الليلي الدافئ' : 'تم تفعيل الوضع النهاري');
};

window.BAYTOUKA.filterByCategory = function (category, scroll = false) {
  store.filters.category = category;
  store.filters.homeSubCategory = 'all';
  store.filters.visibleCount = BATCH_SIZE;
  recomputeFilteredProducts();
  renderCategoryFilterChips();
  renderBentoSection();
  renderCatalogGrid();
  if (scroll) {
    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
  }
};

window.BAYTOUKA.selectCategoryBySlug = function (slug, scroll = true) {
  const cat = getCategoryBySlug(slug);
  if (!cat) return;
  window.BAYTOUKA.filterByCategory(cat.id, scroll);
};

window.BAYTOUKA.filterHomeSubCategory = function (subId) {
  store.filters.category = 'المطرات ومستلزمات المنزل';
  store.filters.homeSubCategory = subId;
  store.filters.visibleCount = BATCH_SIZE;
  recomputeFilteredProducts();
  renderCategoryFilterChips();
  renderBentoSection();
  renderCatalogGrid();
  document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
};

window.BAYTOUKA.filterByCollection = function (colId) {
  store.filters.collectionId = colId;
  store.filters.visibleCount = BATCH_SIZE;
  recomputeFilteredProducts();
  renderCollectionsStrip();
  renderCatalogGrid();
};

window.BAYTOUKA.loadMoreProducts = function () {
  store.filters.visibleCount += BATCH_SIZE;
  renderCatalogGrid();
};

/**
 * Interactive Variant Chip selection directly on a Product Family Card (in-place DOM update)
 */
window.BAYTOUKA.onCardVariantSelect = function (event, familyId, variantIdx) {
  event?.stopPropagation();
  const fam = selectFamilyVariant(familyId, variantIdx);
  if (!fam) return;

  const isWholesale = store.mode === 'wholesale';
  const activeVar = fam.activeVariant;
  const activePrice = isWholesale ? activeVar.wholesalePrice : activeVar.retailPrice;
  const comparePrice = isWholesale ? activeVar.retailPrice : activeVar.wholesalePrice;

  // Update all matching cards on page (e.g., Bestsellers + Main Grid)
  document.querySelectorAll(`.product-card[data-family-id="${fam.familyId}"]`).forEach(card => {
    card.setAttribute('data-active-sku', activeVar.sku);

    const skuEl = card.querySelector(`[data-sku-el="${fam.familyId}"]`);
    const boxEl = card.querySelector(`[data-box-el="${fam.familyId}"]`);
    const priceEl = card.querySelector(`[data-price-el="${fam.familyId}"]`);
    const compareEl = card.querySelector(`[data-compare-el="${fam.familyId}"]`);
    const artSlot = card.querySelector(`[data-art-slot="${fam.familyId}"]`);

    if (skuEl) skuEl.textContent = `SKU: ${activeVar.sku}`;
    if (boxEl) boxEl.textContent = `Box: ${activeVar.box}`;
    if (priceEl) {
      priceEl.innerHTML = `$${activePrice.toFixed(2)} <small style="font-size:0.68rem;font-weight:700;opacity:0.75">USD</small>`;
    }
    if (compareEl) {
      compareEl.innerHTML = `${isWholesale ? 'سعر المفرق:' : 'سعر الجملة:'} <strong class="num-ltr" dir="ltr">$${comparePrice.toFixed(2)}</strong>`;
    }
    if (artSlot) {
      artSlot.innerHTML = renderArtTile(
        {
          ...fam,
          activeSku: activeVar.sku,
          activeBox: activeVar.box,
          customImageUrl: activeVar.customImageUrl || fam.customImageUrl
        },
        { size: 'md', showMeta: true }
      );
    }

    // Highlight active chip
    const chips = card.querySelectorAll('.variant-chip:not(.variant-chip-more)');
    chips.forEach((chip, idx) => {
      chip.classList.toggle('active', idx === Number(variantIdx));
    });
  });
};

window.BAYTOUKA.selectModalVariant = function (familyId, variantIdx) {
  const fam = selectFamilyVariant(familyId, variantIdx);
  const content = document.getElementById('modal-product-content');
  if (!fam || !content) return;
  content.innerHTML = renderQuickViewModal(fam, store.mode === 'wholesale', quickViewState.qty, store.settings);
  if (window.lucide) window.lucide.createIcons();
};

window.BAYTOUKA.selectPageVariant = function (familyId, variantIdx) {
  const fam = selectFamilyVariant(familyId, variantIdx);
  if (!fam) return;
  handleRouteChange();
};

window.BAYTOUKA.quickAddWithFly = function (event, familyId) {
  const triggerEl = event?.currentTarget || null;
  const prod = addToCart(familyId, 1);
  if (!prod) return;
  flyToCartAnimation(triggerEl);
  renderCartUI();
  showToast(`أُضيف "${prod.nameAr}" (${prod.sku}) إلى السلة`);
};

window.BAYTOUKA.addToCart = function (familyId, qty = 1, explicitVariantIdx = null) {
  const prod = addToCart(familyId, qty, explicitVariantIdx);
  if (!prod) return;
  renderCartUI();
  window.BAYTOUKA.openCartDrawer();
  showToast(`تمت إضافة "${prod.nameAr}" (${prod.sku}) إلى السلة`);
};

window.BAYTOUKA.updateCartQty = function (index, newQty) {
  updateCartItemQty(index, newQty);
  renderCartUI();
};

window.BAYTOUKA.saveCartForLater = function () {
  if (saveCartForLater()) {
    showToast('تم حفظ السلة للرجوع إليها لاحقاً');
  }
};

window.BAYTOUKA.restoreSavedCart = function () {
  if (restoreSavedCart()) {
    renderCartUI();
    showToast('تمت استعادة السلة المحفوظة بنجاح');
  }
};

window.BAYTOUKA.openCartDrawer = function () {
  document.getElementById('cart-drawer')?.classList.add('open');
  document.getElementById('cart-drawer')?.classList.remove('translate-x-full');
  document.getElementById('cart-drawer-overlay')?.classList.add('open');
  document.getElementById('cart-drawer-overlay')?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

window.BAYTOUKA.closeCartDrawer = function () {
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.getElementById('cart-drawer')?.classList.add('translate-x-full');
  document.getElementById('cart-drawer-overlay')?.classList.remove('open');
  document.getElementById('cart-drawer-overlay')?.classList.add('hidden');
  document.body.style.overflow = '';
};

window.BAYTOUKA.toggleCart = function () {
  const drawer = document.getElementById('cart-drawer');
  if (drawer?.classList.contains('open')) {
    window.BAYTOUKA.closeCartDrawer();
  } else {
    window.BAYTOUKA.openCartDrawer();
  }
};

window.BAYTOUKA.openQuickView = function (familyOrProductId, explicitVariantIdx = null) {
  const numId = Number(familyOrProductId);
  const fam =
    store.families.find(f => Number(f.familyId) === numId || Number(f.id) === numId) ||
    store.families.find(f => f.variants.some(v => Number(v.id) === numId));

  const modal = document.getElementById('quick-view-modal');
  const content = document.getElementById('modal-product-content');
  if (!fam || !modal || !content) return;

  if (explicitVariantIdx !== null) {
    selectFamilyVariant(fam.familyId, explicitVariantIdx);
  }
  recordRecentlyViewed(fam.familyId);

  quickViewState = { familyId: fam.familyId, qty: 1 };
  content.innerHTML = renderQuickViewModal(fam, store.mode === 'wholesale', 1, store.settings);
  modal.classList.add('open');
  if (window.lucide) window.lucide.createIcons();
};

window.BAYTOUKA.stepQuickViewQty = function (delta) {
  const fam = store.families.find(f => Number(f.familyId) === Number(quickViewState.familyId));
  if (!fam) return;
  quickViewState.qty = Math.max(1, quickViewState.qty + delta);
  const qtyEl = document.getElementById('qv-qty-value');
  const totalEl = document.getElementById('qv-line-total');
  const activeVar = fam.activeVariant || fam.variants[0];
  const unitPrice = store.mode === 'wholesale' ? activeVar.wholesalePrice : activeVar.retailPrice;
  if (qtyEl) qtyEl.textContent = String(quickViewState.qty);
  if (totalEl) totalEl.textContent = `$${(unitPrice * quickViewState.qty).toFixed(2)} USD`;
};

window.BAYTOUKA.confirmQuickViewAdd = function (familyId) {
  const qty = quickViewState.familyId === familyId ? quickViewState.qty : 1;
  window.BAYTOUKA.closeQuickView();
  window.BAYTOUKA.addToCart(familyId, qty);
};

window.BAYTOUKA.closeQuickView = function () {
  document.getElementById('quick-view-modal')?.classList.remove('open');
};

window.BAYTOUKA.openProductPage = function (familyId) {
  window.location.hash = `#/product/${familyId}`;
};

window.BAYTOUKA.quickSearchSku = function (sku) {
  const fam = store.families.find(f => f.sku === sku || f.variants.some(v => v.sku === sku));
  if (fam) {
    const vIdx = fam.variants.findIndex(v => v.sku === sku);
    window.BAYTOUKA.openQuickView(fam.familyId, vIdx >= 0 ? vIdx : 0);
  } else {
    const inp = document.getElementById('catalog-search-input');
    if (inp) {
      inp.value = sku;
      inp.dispatchEvent(new Event('input', { bubbles: true }));
    }
    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
  }
};

window.BAYTOUKA.copyShareUrl = function () {
  navigator.clipboard?.writeText(window.location.href);
  showToast('تم نسخ رابط المنتج لمشاركته');
};

window.BAYTOUKA.closeSearchSuggestions = function () {
  document.querySelectorAll('.search-suggestions-dropdown').forEach(el => el.classList.add('hidden'));
};

// ============================================================================
// PART 4: MULTI-TIER BRIDAL PACKAGES & 5-STEP ROOM BUILDER HANDLERS
// ============================================================================
window.BAYTOUKA.addReadyTierToCart = function (tierId) {
  const pkg = (store.packages || []).find(p => p.id === tierId);
  if (!pkg || !pkg.resolvedItems) return;

  let added = 0;
  pkg.resolvedItems.forEach(item => {
    const res = addToCart(item.familyId, item.qty || 1);
    if (res) added += item.qty || 1;
  });
  renderCartUI();
  window.BAYTOUKA.openCartDrawer();
  showToast(`تمت إضافة "${pkg.nameAr}" (${added} قطع) إلى السلة!`);
};

window.BAYTOUKA.sendReadyTierWhatsApp = function (tierId) {
  const pkg = (store.packages || []).find(p => p.id === tierId);
  if (!pkg || !pkg.resolvedItems) return;

  const waPhone = store.settings.whatsappPhone || '96171840915';
  const lines = pkg.resolvedItems.map(
    it => `• ${it.nameAr} (SKU: ${it.sku}) × ${it.qty}`
  );
  const msg = `مرحباً ${store.settings.storeNameAr || 'بيتك'} BAYTOUKA،\nأود طلب الباقة الجاهزة: *${pkg.nameAr}*\n\nالأصناف المشمولة:\n${lines.join('\n')}\n\nسعر الباقة بعد الخصم (-${pkg.discountPct}%): *$${pkg.packagePrice.toFixed(2)} USD* (توفير $${pkg.savingsAmount.toFixed(2)})\nالرجاء التواصل لتأكيد الطلبية.`;
  window.open(`https://wa.me/${encodeURIComponent(waPhone)}?text=${encodeURIComponent(msg)}`, '_blank');
};

window.BAYTOUKA.setBridalBuilderStep = function (stepIdx) {
  store.bridalBuilder.activeStepIdx = Number(stepIdx) || 0;
  renderBridalSection();
};

window.BAYTOUKA.toggleBridalBuilderItem = function (familyId) {
  const numId = Number(familyId);
  const current = store.bridalBuilder.selections[numId];
  if (current && current.qty > 0) {
    delete store.bridalBuilder.selections[numId];
  } else {
    store.bridalBuilder.selections[numId] = {
      familyId: numId,
      variantIdx: 0,
      qty: 1
    };
  }
  renderBridalSection();
};

window.BAYTOUKA.changeBridalBuilderVariant = function (familyId, variantIdx) {
  const numId = Number(familyId);
  const vIdx = Number(variantIdx) || 0;
  store.bridalBuilder.selections[numId] = {
    familyId: numId,
    variantIdx: vIdx,
    qty: store.bridalBuilder.selections[numId]?.qty || 1
  };
  renderBridalSection();
};

window.BAYTOUKA.addBridalPackageToCart = function () {
  const selections = Object.values(store.bridalBuilder.selections || {}).filter(s => s && s.qty > 0);
  if (selections.length === 0) {
    showToast('يرجى اختيار صنف واحد على الأقل لتكوين الباقة');
    return;
  }
  let added = 0;
  selections.forEach(sel => {
    const p = addToCart(sel.familyId, sel.qty, sel.variantIdx || 0);
    if (p) added += sel.qty;
  });
  renderCartUI();
  window.BAYTOUKA.openCartDrawer();
  showToast(`تمت إضافة باقتك المخصصة (${added} قطع) إلى السلة!`);
};

window.BAYTOUKA.sendBridalPackageWhatsApp = function () {
  const selections = Object.values(store.bridalBuilder.selections || {}).filter(s => s && s.qty > 0);
  if (selections.length === 0) {
    showToast('يرجى اختيار الأصناف أولاً لإرسال الباقة عبر واتساب');
    return;
  }

  const waPhone = store.settings.whatsappPhone || '96171840915';
  const lines = [];
  let wholesaleTotal = 0;

  selections.forEach(sel => {
    const fam = store.families.find(f => Number(f.familyId) === Number(sel.familyId));
    if (!fam) return;
    const v = fam.variants[sel.variantIdx || 0] || fam.variants[0];
    wholesaleTotal += v.wholesalePrice * sel.qty;
    lines.push(`• ${fam.baseNameAr} (SKU: ${v.sku} | Box: ${v.box}) — $${v.wholesalePrice.toFixed(2)}`);
  });

  const bundlePrice = (wholesaleTotal * 0.94).toFixed(2);
  const msg = `مرحباً ${store.settings.storeNameAr || 'بيتك'} BAYTOUKA،\nأود طلب باقة تجهيز العروس المخصصة:\n\n${lines.join('\n')}\n\nإجمالي الباقة بعد خصم العرائس: *$${bundlePrice} USD*\nالرجاء التواصل لتأكيد الباقة.`;
  window.open(`https://wa.me/${encodeURIComponent(waPhone)}?text=${encodeURIComponent(msg)}`, '_blank');
};

window.BAYTOUKA.selectDeliveryRegion = function (regionId) {
  store.selectedRegionId = regionId;
  const select = document.getElementById('checkout-region');
  if (select) select.value = regionId;
  renderRegionsShowcase();
  renderCartUI();
  showToast('تم تحديث منطقة التوصيل في السلة');
};

window.BAYTOUKA.openAdminWithPassword = function () {
  window.location.hash = '#/admin';
};

window.BAYTOUKA.navigateTo = function (path) {
  if (path === '/admin' || path === '#admin' || path === '#/admin') {
    window.location.hash = '#/admin';
  } else {
    window.location.hash = '#/';
    showStorefrontView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

/**
 * 5-Tab Mobile Bottom Navigation Bar Handler
 */
window.BAYTOUKA.mobileNavAction = function (tab) {
  if (tab === 'home') {
    window.location.hash = '#/';
    showStorefrontView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (tab === 'categories') {
    if (store.route.view !== 'home') {
      window.location.hash = '#/';
      showStorefrontView();
    }
    setTimeout(() => {
      document.getElementById('bento-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  } else if (tab === 'search') {
    if (store.route.view !== 'home') {
      window.location.hash = '#/';
      showStorefrontView();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      const mobileInput = document.getElementById('mobile-search-input') || document.getElementById('catalog-search-input');
      mobileInput?.focus();
    }, 180);
  } else if (tab === 'cart') {
    window.BAYTOUKA.openCartDrawer();
  }
};

// ============================================================================
// GLOBAL DOM EVENT BINDINGS
// ============================================================================
function bindGlobalEvents() {
  // Cart Drawer buttons
  document.querySelectorAll('.cart-toggle-btn').forEach(btn => {
    btn.addEventListener('click', window.BAYTOUKA.toggleCart);
  });
  document.getElementById('cart-close-btn')?.addEventListener('click', window.BAYTOUKA.closeCartDrawer);
  document.getElementById('cart-drawer-overlay')?.addEventListener('click', window.BAYTOUKA.closeCartDrawer);

  document.getElementById('clear-cart-btn')?.addEventListener('click', () => {
    clearCart();
    renderCartUI();
    showToast('تم إفراغ سلة التسوق');
  });

  // Quick-view close
  const qvModal = document.getElementById('quick-view-modal');
  document.getElementById('modal-close-btn')?.addEventListener('click', window.BAYTOUKA.closeQuickView);
  qvModal?.addEventListener('click', e => {
    if (e.target === qvModal) window.BAYTOUKA.closeQuickView();
  });

  // Live Arabic-normalized search + variant-aware suggestions
  const searchInputs = [
    document.getElementById('search-input'),
    document.getElementById('mobile-search-input'),
    document.getElementById('catalog-search-input')
  ];
  const clearSearchBtn = document.getElementById('search-clear-btn');
  const desktopDropdown = document.getElementById('desktop-search-suggestions');
  const mobileDropdown = document.getElementById('mobile-search-suggestions');

  const handleSearchInput = debounce((val, sourceId) => {
    store.filters.searchQuery = val;
    store.filters.visibleCount = BATCH_SIZE;

    searchInputs.forEach(inp => {
      if (inp && inp.value !== val) inp.value = val;
    });
    if (clearSearchBtn) clearSearchBtn.classList.toggle('hidden', !val);

    recomputeFilteredProducts();
    renderCatalogGrid();

    if (val.trim().length >= 1) {
      const suggestions = getSearchSuggestions(val, 6);
      const html = renderSearchSuggestionsDropdown(suggestions, val, store.mode === 'wholesale');
      if (sourceId === 'search-input' && desktopDropdown) {
        desktopDropdown.innerHTML = html;
        desktopDropdown.classList.remove('hidden');
      } else if (sourceId === 'mobile-search-input' && mobileDropdown) {
        mobileDropdown.innerHTML = html;
        mobileDropdown.classList.remove('hidden');
      }
    } else {
      window.BAYTOUKA.closeSearchSuggestions();
    }
  }, 90);

  searchInputs.forEach(inp => {
    if (!inp) return;
    inp.addEventListener('input', e => handleSearchInput(e.target.value, inp.id));
  });

  clearSearchBtn?.addEventListener('click', () => {
    handleSearchInput('', '');
    window.BAYTOUKA.closeSearchSuggestions();
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-search-shell') && !e.target.closest('.mobile-search-bar')) {
      window.BAYTOUKA.closeSearchSuggestions();
    }
  });

  // Sort select (featured, price-asc, price-desc, newest)
  document.getElementById('sort-select')?.addEventListener('change', e => {
    store.filters.sortBy = e.target.value;
    recomputeFilteredProducts();
    renderCatalogGrid();
  });

  // Reset filters (Price slider removed completely per Part 3)
  document.getElementById('reset-filters-btn')?.addEventListener('click', () => {
    store.filters.category = 'all';
    store.filters.homeSubCategory = 'all';
    store.filters.collectionId = 'all';
    store.filters.searchQuery = '';
    store.filters.sortBy = 'featured';
    store.filters.visibleCount = BATCH_SIZE;

    searchInputs.forEach(inp => {
      if (inp) inp.value = '';
    });
    const sortSel = document.getElementById('sort-select');
    if (sortSel) sortSel.value = 'featured';

    recomputeFilteredProducts();
    renderCollectionsStrip();
    renderCategoryFilterChips();
    renderBentoSection();
    renderCatalogGrid();
  });

  // Region delivery fee change
  document.getElementById('checkout-region')?.addEventListener('change', e => {
    store.selectedRegionId = e.target.value;
    renderRegionsShowcase();
    renderCartUI();
  });

  // Verified Lebanese WhatsApp Checkout Form -> Records Order in Supabase/Local DB ONLY on submit!
  document.getElementById('checkout-form')?.addEventListener('submit', async e => {
    e.preventDefault();
    const name = document.getElementById('checkout-name')?.value.trim();
    const phone = document.getElementById('checkout-phone')?.value.trim();
    const address = document.getElementById('checkout-address')?.value.trim();
    const notes = document.getElementById('checkout-notes')?.value.trim() || '';

    if (!name || !phone || !address) {
      showToast('يرجى تعبئة الاسم ورقم الهاتف والعنوان التفصيلي');
      return;
    }

    const summary = getCartSummary();
    if (summary.items.length === 0) {
      showToast('سلة التسوق فارغة! أضف صنفاً واحداً على الأقل لإتمام الطلب.');
      return;
    }

    const isWholesale = store.mode === 'wholesale';
    const modeText = isWholesale ? 'مبيع بالجملة (Wholesale)' : 'مبيع بالمفرق (Retail)';
    const waPhone = store.settings.whatsappPhone || '96171840915';

    let orderRecord = null;
    try {
      orderRecord = await submitVerifiedCustomerOrder({
        customerName: name,
        customerPhone: phone,
        region: summary.region,
        address,
        notes,
        pricingMode: store.mode,
        cartItems: summary.items,
        catalogProducts: store.rawProducts,
        freeDeliveryThreshold: summary.freeThreshold
      });
    } catch (orderErr) {
      showToast(orderErr.message || 'تعذر تسجيل الطلبية، يرجى المحاولة مجدداً');
      return;
    }

    const orderNum = orderRecord?.orderNumber || `BYT-${Date.now().toString().slice(-6)}`;

    const itemsLines = summary.items
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.product.nameAr} (SKU: ${item.product.sku} | Box: ${item.product.box})\n   الكمية: ${item.qty} × $${item.unitPrice.toFixed(2)} = $${item.lineTotal.toFixed(2)}`
      )
      .join('\n');

    const message = `مرحباً ${store.settings.storeNameAr || 'بيتك'} ${store.settings.storeNameEn || 'BAYTOUKA'}،

أود تأكيد طلبيتي رقم: *${orderNum}* (${modeText})

الأصناف المطلوبة:
${itemsLines}

المجموع الفرعي: $${summary.subtotal.toFixed(2)} USD
التوصيل (${summary.region.nameAr}): ${summary.isFreeDelivery ? 'مجاني ($0.00)' : `$${summary.deliveryFee.toFixed(2)} USD`}
*المجموع الكلي: $${summary.grandTotal.toFixed(2)} USD*

الاسم: ${name}
رقم الهاتف: ${phone}
المنطقة: ${summary.region.nameAr}
العنوان التفصيلي: ${address}${notes ? `\nملاحظات: ${notes}` : ''}

الرجاء تأكيد الطلبية.`;

    showToast(`تم تسجيل طلبيتك رقم ${orderNum} بنجاح! جاري فتح واتساب...`);
    window.open(`https://wa.me/${encodeURIComponent(waPhone)}?text=${encodeURIComponent(message)}`, '_blank');
  });

  // Escape key closes modal, drawer & search suggestions
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      window.BAYTOUKA.closeQuickView();
      window.BAYTOUKA.closeCartDrawer();
      window.BAYTOUKA.closeSearchSuggestions();
    }
  });
}
