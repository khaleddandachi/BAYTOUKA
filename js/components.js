// ============================================================================
// BAYTOUKA (بيتك) — Commerce-Focused Editorial UI Components
// Powered 100% by Levantine Art Tiles (Zero Product Photos) & Product Families
// ============================================================================

import {
  HOME_SUBCATEGORIES,
  DEFAULT_LEBANON_REGIONS,
  escapeHtml,
  highlightMatch,
  calcSavingsPercent
} from './utils.js';

import { renderArtTile } from './art-tiles.js';

/**
 * Renders a Product Family Card with interactive Variant Selector Chips & Art Tile
 */
export function renderProductCard(fam, isWholesale = false, options = {}) {
  const activeVar = fam.activeVariant || fam.variants?.[fam.selectedVariantIdx || 0] || fam;
  const activePrice = isWholesale ? activeVar.wholesalePrice : activeVar.retailPrice;
  const comparePrice = isWholesale ? activeVar.retailPrice : activeVar.wholesalePrice;
  const savingsPct = calcSavingsPercent(activeVar.retailPrice, activeVar.wholesalePrice);
  const hasMultipleVariants = Array.isArray(fam.variants) && fam.variants.length > 1;
  const hasPriceSpread = isWholesale ? fam.hasWholesaleSpread : fam.hasRetailSpread;
  const minSpreadPrice = isWholesale ? fam.minWholesalePrice : fam.minRetailPrice;

  // Show up to 5 variant chips directly on card, plus "+N" indicator if more
  const maxChipsOnCard = 4;
  const visibleVariants = hasMultipleVariants ? fam.variants.slice(0, maxChipsOnCard) : [];
  const extraVariantsCount = hasMultipleVariants ? Math.max(0, fam.variants.length - maxChipsOnCard) : 0;

  return `
    <article
      class="product-card reveal-on-scroll"
      data-product-id="${fam.familyId}"
      data-family-id="${fam.familyId}"
      data-active-sku="${escapeHtml(activeVar.sku)}"
    >
      ${
        fam.badge
          ? `<span class="badge-ribbon">${escapeHtml(fam.badge)}</span>`
          : hasMultipleVariants
            ? `<span class="badge-ribbon badge-variants-count">${fam.variants.length} موديلات</span>`
            : ''
      }
      ${
        savingsPct > 0
          ? `<span class="wholesale-savings-chip" title="نسبة التوفير بسعر الجملة">
               ${isWholesale ? `توفير الجملة ${savingsPct}%` : `جملة -${savingsPct}%`}
             </span>`
          : ''
      }

      <div
        class="product-image-container art-tile-stage"
        onclick="window.BAYTOUKA.openQuickView(${fam.familyId})"
        role="button"
        tabindex="0"
        aria-label="معاينة ${escapeHtml(fam.baseNameAr || fam.nameAr)}"
      >
        <div class="card-art-tile-slot" data-art-slot="${fam.familyId}">
          ${renderArtTile(
            {
              ...fam,
              activeSku: activeVar.sku,
              activeBox: activeVar.box,
              customImageUrl: activeVar.customImageUrl || fam.customImageUrl
            },
            { size: 'md', showMeta: true }
          )}
        </div>
        <button
          type="button"
          class="quick-view-trigger-pill"
          onclick="event.stopPropagation(); window.BAYTOUKA.openQuickView(${fam.familyId})"
          aria-label="معاينة سريعة لـ ${escapeHtml(fam.baseNameAr || fam.nameAr)}"
        >
          <i data-lucide="eye" style="width:14px;height:14px"></i>
          <span>معاينة</span>
        </button>
      </div>

      <div class="card-meta-row">
        <span class="sku-pill num-ltr" data-sku-el="${fam.familyId}">SKU: ${escapeHtml(activeVar.sku)}</span>
        <span class="box-pill num-ltr" data-box-el="${fam.familyId}">Box: ${escapeHtml(activeVar.box)}</span>
      </div>

      <h3
        class="card-title"
        onclick="window.BAYTOUKA.openProductPage(${fam.familyId})"
        title="${escapeHtml(fam.baseNameAr || fam.nameAr)}"
      >
        ${escapeHtml(fam.baseNameAr || fam.nameAr)}
      </h3>

      ${fam.descAr ? `<p class="card-desc">${escapeHtml(fam.descAr)}</p>` : ''}

      ${
        hasMultipleVariants
          ? `<div class="variant-chips-wrap" role="group" aria-label="اختر الموديل أو المقاس">
               ${visibleVariants
                 .map((v, vIdx) => {
                   const isSel = vIdx === (fam.selectedVariantIdx || 0);
                   return `<button
                     type="button"
                     class="variant-chip num-ltr ${isSel ? 'active' : ''}"
                     onclick="window.BAYTOUKA.onCardVariantSelect(event, ${fam.familyId}, ${vIdx})"
                     title="SKU: ${escapeHtml(v.sku)} | Box: ${escapeHtml(v.box)} — $${(isWholesale ? v.wholesalePrice : v.retailPrice).toFixed(2)}"
                   >${escapeHtml(v.chipLabel || v.sku)}</button>`;
                 })
                 .join('')}
               ${
                 extraVariantsCount > 0
                   ? `<button
                        type="button"
                        class="variant-chip variant-chip-more"
                        onclick="window.BAYTOUKA.openQuickView(${fam.familyId})"
                        title="عرض جميع الموديلات (${fam.variants.length})"
                      >+${extraVariantsCount} موديل</button>`
                   : ''
               }
             </div>`
          : `<span class="specs-chip num-ltr" data-specs-el="${fam.familyId}">${escapeHtml(activeVar.specs)}</span>`
      }

      ${
        isWholesale
          ? `<div class="wholesale-card-hint">
               <span>📦 كرتونة #${escapeHtml(activeVar.box)}</span>
               <span>• خصم 5% لـ 12+ قطعة</span>
             </div>`
          : ''
      }

      <div class="card-footer-row">
        <div class="price-stack">
          <span class="compare-price-label" data-compare-el="${fam.familyId}">
            ${isWholesale ? 'سعر المفرق:' : 'سعر الجملة:'}
            <strong class="num-ltr" dir="ltr">$${comparePrice.toFixed(2)}</strong>
          </span>
          <div style="display:flex;align-items:baseline;gap:0.3rem;flex-wrap:wrap">
            ${
              hasPriceSpread
                ? `<small class="from-price-tag" title="تختلف الأسعار باختلاف الموديل (${minSpreadPrice.toFixed(2)}$ - ${(isWholesale ? fam.maxWholesalePrice : fam.maxRetailPrice).toFixed(2)}$)">من</small>`
                : ''
            }
            <span class="active-price-value num-ltr" dir="ltr" data-price-el="${fam.familyId}">
              $${activePrice.toFixed(2)} <small style="font-size:0.68rem;font-weight:700;opacity:0.75">USD</small>
            </span>
          </div>
        </div>

        <button
          type="button"
          class="quick-add-btn"
          onclick="window.BAYTOUKA.quickAddWithFly(event, ${fam.familyId})"
          aria-label="إضافة ${escapeHtml(fam.baseNameAr || fam.nameAr)} إلى السلة"
          title="إضافة سريعة إلى السلة"
        >
          <i data-lucide="plus" style="width:20px;height:20px"></i>
        </button>
      </div>
    </article>
  `;
}

export function renderSkeletonCards(count = 8) {
  return Array.from({ length: count })
    .map(
      () => `
      <div class="product-card" aria-hidden="true">
        <div class="product-image-container skeleton-shimmer"></div>
        <div class="skeleton-shimmer" style="height:16px;width:60%;margin-bottom:10px"></div>
        <div class="skeleton-shimmer" style="height:20px;width:90%;margin-bottom:8px"></div>
        <div class="skeleton-shimmer" style="height:14px;width:75%;margin-bottom:16px"></div>
        <div class="skeleton-shimmer" style="height:38px;width:100%"></div>
      </div>
    `
    )
    .join('');
}

export function renderCatalogLoadingError() {
  const grid = document.getElementById('products-grid');
  const resultsCounter = document.getElementById('results-counter');
  if (resultsCounter) {
    resultsCounter.textContent = 'تعذر تحميل بيانات الكتالوج';
  }
  if (grid) {
    grid.innerHTML = `
      <div class="catalog-error-state" style="grid-column:1/-1;padding:3.5rem 1.5rem;text-align:center;background:var(--bg-elevated);border:1px solid var(--accent-terracotta);border-radius:var(--radius-xl);margin:1.5rem 0">
        <div style="width:58px;height:58px;border-radius:50%;background:var(--accent-terracotta-soft);color:var(--accent-terracotta);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem">
          <i data-lucide="alert-triangle" style="width:28px;height:28px"></i>
        </div>
        <h3 style="font-family:var(--font-display);font-size:1.35rem;font-weight:700;margin-bottom:0.5rem;color:var(--text-primary)">
          تعذر تحميل قائمة المنتجات
        </h3>
        <p style="font-size:0.86rem;color:var(--text-secondary);max-width:50ch;margin:0 auto 1.5rem;line-height:1.6">
          لم نتمكن من الوصول إلى ملف البيانات (products.json أو js/products-data.js). يرجى التأكد من مسار الملفات أو الضغط على الزر أدناه لإعادة المحاولة.
        </p>
        <button type="button" class="btn-primary-editorial" onclick="window.location.reload()" style="padding-inline:2rem">
          <i data-lucide="refresh-cw" style="width:16px;height:16px"></i>
          <span>إعادة المحاولة الآن</span>
        </button>
      </div>
    `;
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }
}

/**
 * Renders the 5-Category Asymmetric Bento Grid using pure Levantine Art Tiles (Zero Photos)
 */
export function renderCategoryBentoGrid(store) {
  const famCounts = store.categoryCounts || {};
  const varCounts = store.categoryVariantCounts || {};
  const categories = (store.categories || []).filter(c => c.active !== false);

  return categories
    .map((cat, idx) => {
      const fCount = famCounts[cat.id] || 0;
      const vCount = varCounts[cat.id] || fCount;
      return `
        <div
          class="bento-category-tile bento-tile-${idx % 5} reveal-on-scroll"
          onclick="window.BAYTOUKA.selectCategoryBySlug('${escapeHtml(cat.slug)}', true)"
          role="button"
          tabindex="0"
          aria-label="تصفح قسم ${escapeHtml(cat.shortAr || cat.short_ar)} (${fCount} عائلة منتج و ${vCount} موديل)"
        >
          <div class="bento-art-bg">
            ${renderArtTile(
              {
                nameAr: cat.shortAr || cat.short_ar,
                category: cat.id,
                familyKey: `bento-cat-${cat.slug}`
              },
              { size: 'bento', showMeta: false }
            )}
          </div>
          <div class="bento-tile-shade"></div>
          <div class="bento-tile-content">
            <span class="bento-count-pill">
              <i data-lucide="${escapeHtml(cat.icon || 'layers')}" style="width:14px;height:14px"></i>
              <span><strong class="num-ltr">${fCount}</strong> صنف • <strong class="num-ltr">${vCount}</strong> موديل</span>
            </span>
            <h3 class="bento-tile-title">${escapeHtml(cat.shortAr || cat.short_ar)}</h3>
            <p style="font-size:0.8rem;color:rgba(247,243,235,0.86);line-height:1.45">
              ${escapeHtml(cat.subtitleAr || cat.subtitle_ar)}
            </p>
          </div>
        </div>
      `;
    })
    .join('');
}

export function renderHomeSubFilterPills(store) {
  const subCounts = store.homeSubCounts || {};
  const activeSub = store.filters.homeSubCategory || 'all';
  const isHomeCatActive = store.filters.category === 'المطرات ومستلزمات المنزل';

  return HOME_SUBCATEGORIES.map(sub => {
    const cnt = subCounts[sub.id] || 0;
    const isActive = isHomeCatActive && activeSub === sub.id;
    return `
      <button
        type="button"
        class="subfilter-pill ${isActive ? 'active' : ''}"
        onclick="window.BAYTOUKA.filterHomeSubCategory('${sub.id}')"
      >
        <span>${escapeHtml(sub.labelAr)}</span>
        <span class="num-ltr" style="font-size:0.7rem;opacity:0.85">(${cnt})</span>
      </button>
    `;
  }).join('');
}

/**
 * Renders the Owner-Reorderable Curated Collections Pills (Best Sellers, New, Special Offers, Bridal, Wholesale, Gifts)
 */
export function renderCollectionsPills(store) {
  const collections = (store.settings.collectionsOrder || []).filter(c => c.active !== false);
  const activeCol = store.filters.collectionId || 'all';

  return `
    <button
      type="button"
      class="collection-tab-pill ${activeCol === 'all' ? 'active' : ''}"
      onclick="window.BAYTOUKA.filterByCollection('all')"
    >
      <span>كل المجموعات</span>
    </button>
    ${collections
      .map(
        col => `
        <button
          type="button"
          class="collection-tab-pill ${activeCol === col.id ? 'active' : ''}"
          onclick="window.BAYTOUKA.filterByCollection('${escapeHtml(col.id)}')"
        >
          <span>${escapeHtml(col.titleAr)}</span>
        </button>
      `
      )
      .join('')}
  `;
}

export function renderSearchSuggestionsDropdown(suggestions, rawQuery, isWholesale) {
  if (!rawQuery || !rawQuery.trim()) return '';
  if (!suggestions || suggestions.length === 0) {
    return `
      <div style="padding:1rem;text-align:center;font-size:0.8rem;color:var(--text-muted)">
        لا توجد نتائج مطابقة لـ «${escapeHtml(rawQuery)}»
      </div>
    `;
  }

  return suggestions
    .map(fam => {
      const activeVar = fam.activeVariant || fam.variants?.[fam.selectedVariantIdx || 0] || fam;
      const price = isWholesale ? activeVar.wholesalePrice : activeVar.retailPrice;
      return `
        <div
          class="suggestion-item"
          onclick="window.BAYTOUKA.openQuickView(${fam.familyId}, ${fam.selectedVariantIdx || 0}); window.BAYTOUKA.closeSearchSuggestions();"
          role="option"
          tabindex="0"
        >
          <div class="suggestion-art-thumb">
            ${renderArtTile(fam, { size: 'sm', showMeta: false })}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:0.82rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
              ${highlightMatch(fam.baseNameAr || fam.nameAr, rawQuery)}
            </div>
            <div class="num-ltr" style="font-size:0.7rem;color:var(--text-muted)">
              SKU: ${highlightMatch(activeVar.sku, rawQuery)} | Box: ${highlightMatch(activeVar.box, rawQuery)}
              ${fam.variants?.length > 1 ? ` • ${fam.variants.length} موديلات` : ''}
            </div>
          </div>
          <div class="num-ltr" dir="ltr" style="font-weight:800;font-size:0.84rem;color:var(--accent-terracotta)">
            $${price.toFixed(2)}
          </div>
        </div>
      `;
    })
    .join('');
}

/**
 * Renders the Quick-View Modal with Art Tile, Variant Chips, Quantity Stepper,
 * WhatsApp Inquiry ("Ask about this product"), and Share button
 */
export function renderQuickViewModal(fam, isWholesale = false, qty = 1, settings = {}) {
  const activeVar = fam.activeVariant || fam.variants?.[fam.selectedVariantIdx || 0] || fam;
  const activePrice = isWholesale ? activeVar.wholesalePrice : activeVar.retailPrice;
  const savingsPct = calcSavingsPercent(activeVar.retailPrice, activeVar.wholesalePrice);
  const waPhone = settings.whatsappPhone || '96171840915';
  const askMsg = `مرحباً ${settings.storeNameAr || 'بيتك'}، أود الاستفسار عن الصنف: ${fam.baseNameAr} (SKU: ${activeVar.sku} | Box: ${activeVar.box})`;
  const shareUrl = `${window.location.origin}${window.location.pathname}#/product/${fam.familyId}`;
  const shareMsg = `شاهد هذا الصنف من متجر ${settings.storeNameAr || 'بيتك'}: ${fam.baseNameAr} (${activeVar.sku}) بسعر $${activePrice.toFixed(2)} USD\n${shareUrl}`;

  return `
    <div class="modal-split-layout">
      <div class="modal-image-stage">
        ${renderArtTile(
          {
            ...fam,
            activeSku: activeVar.sku,
            activeBox: activeVar.box,
            customImageUrl: activeVar.customImageUrl || fam.customImageUrl
          },
          { size: 'lg', showMeta: true }
        )}
      </div>

      <div class="modal-details-stage">
        <!-- Mobile Swipe Handle -->
        <div class="mobile-sheet-grabber" aria-hidden="true"></div>

        <div style="display:flex;flex-wrap:wrap;align-items:center;gap:0.45rem">
          <span class="sku-pill num-ltr">SKU: ${escapeHtml(activeVar.sku)}</span>
          <span class="sku-pill num-ltr" style="color:var(--accent-terracotta);border-color:var(--accent-terracotta)">Box: ${escapeHtml(activeVar.box)}</span>
          ${fam.badge ? `<span class="sku-pill" style="background:var(--accent-saffron-soft);color:var(--accent-saffron)">${escapeHtml(fam.badge)}</span>` : ''}
        </div>

        <h2 style="font-family:var(--font-display);font-size:clamp(1.25rem,2.4vw,1.65rem);font-weight:700;line-height:1.3">
          ${escapeHtml(fam.baseNameAr || fam.nameAr)}
        </h2>

        <p style="font-size:0.86rem;color:var(--text-secondary);line-height:1.65">
          ${escapeHtml(fam.descAr || 'قطعة أصلية عالية الجودة من تشكيلة المائدة والمطبخ اللبناني، مفروزة بالكرتونة والكود وجاهزة للشحن الفوري.')}
        </p>

        ${
          fam.variants && fam.variants.length > 1
            ? `<div style="padding:0.75rem;border-radius:var(--radius-md);background:var(--bg-subtle);border:1px solid var(--border-subtle)">
                 <span style="font-size:0.75rem;font-weight:800;display:block;margin-bottom:0.45rem;color:var(--text-secondary)">
                   اختر الموديل / المقاس المتوفر (${fam.variants.length} خيارات):
                 </span>
                 <div class="variant-chips-wrap">
                   ${fam.variants
                     .map((v, vIdx) => {
                       const isSel = vIdx === (fam.selectedVariantIdx || 0);
                       const vPrice = isWholesale ? v.wholesalePrice : v.retailPrice;
                       return `<button
                         type="button"
                         class="variant-chip num-ltr ${isSel ? 'active' : ''}"
                         onclick="window.BAYTOUKA.selectModalVariant(${fam.familyId}, ${vIdx})"
                       >${escapeHtml(v.chipLabel || v.sku)} • $${vPrice.toFixed(2)}</button>`;
                     })
                     .join('')}
                 </div>
               </div>`
            : ''
        }

        <!-- Dual Price Comparison Box -->
        <div class="dual-price-box">
          <div class="price-tier-card ${!isWholesale ? 'active-tier' : ''}">
            <span style="font-size:0.72rem;font-weight:700;color:var(--text-muted);display:block">سعر المفرق (Retail)</span>
            <strong class="num-ltr" dir="ltr" style="font-size:1.25rem;font-weight:800;color:var(--text-primary)">
              $${activeVar.retailPrice.toFixed(2)} <small style="font-size:0.7rem">USD</small>
            </strong>
          </div>
          <div class="price-tier-card ${isWholesale ? 'active-tier' : ''}">
            <span style="font-size:0.72rem;font-weight:700;color:var(--accent-terracotta);display:block">
              سعر الجملة (Wholesale) ${savingsPct > 0 ? `• وفّر ${savingsPct}%` : ''}
            </span>
            <strong class="num-ltr" dir="ltr" style="font-size:1.25rem;font-weight:800;color:var(--accent-terracotta)">
              $${activeVar.wholesalePrice.toFixed(2)} <small style="font-size:0.7rem">USD</small>
            </strong>
          </div>
        </div>

        <!-- Quantity Stepper + Add to Cart -->
        <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;margin-top:0.25rem">
          <div class="qty-stepper" aria-label="تحديد الكمية">
            <button type="button" class="qty-stepper-btn" onclick="window.BAYTOUKA.stepQuickViewQty(-1)" aria-label="إنقاص الكمية">−</button>
            <span id="qv-qty-value" class="qty-stepper-val num-ltr">${qty}</span>
            <button type="button" class="qty-stepper-btn" onclick="window.BAYTOUKA.stepQuickViewQty(1)" aria-label="زيادة الكمية">+</button>
          </div>

          <button
            type="button"
            class="btn-primary-editorial"
            style="flex:1"
            onclick="window.BAYTOUKA.confirmQuickViewAdd(${fam.familyId})"
          >
            <i data-lucide="shopping-bag" style="width:18px;height:18px"></i>
            <span>إضافة للسلة — <strong id="qv-line-total" class="num-ltr" dir="ltr">$${(activePrice * qty).toFixed(2)} USD</strong></span>
          </button>
        </div>

        <!-- Ask on WhatsApp & Share Row -->
        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.5rem;padding-top:0.75rem;border-top:1px solid var(--border-subtle);font-size:0.76rem">
          <div style="display:flex;gap:0.45rem;flex-wrap:wrap">
            <a
              href="https://wa.me/${encodeURIComponent(waPhone)}?text=${encodeURIComponent(askMsg)}"
              target="_blank"
              rel="noopener noreferrer"
              class="icon-action-btn"
              style="min-height:36px;color:#18864B;border-color:rgba(24,134,75,0.35)"
            >
              <i data-lucide="message-circle" style="width:14px;height:14px"></i>
              <span>اسأل عن هذا الصنف (${escapeHtml(activeVar.sku)})</span>
            </a>
            <a
              href="https://wa.me/?text=${encodeURIComponent(shareMsg)}"
              target="_blank"
              rel="noopener noreferrer"
              class="icon-action-btn"
              style="min-height:36px"
            >
              <i data-lucide="share-2" style="width:14px;height:14px"></i>
              <span>مشاركة عبر واتساب</span>
            </a>
          </div>
          <a
            href="#/product/${fam.familyId}"
            onclick="window.BAYTOUKA.closeQuickView()"
            style="color:var(--accent-terracotta);font-weight:700;display:inline-flex;align-items:center;gap:0.3rem"
          >
            <span>صفحة الصنف الكاملة</span>
            <i data-lucide="arrow-up-left" style="width:14px;height:14px"></i>
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * Renders the Full Shareable Product Page (#/product/:id) with Sticky Add-to-Cart Bar,
 * Related Products, and Recently Viewed Strip
 */
export function renderShareableProductPage(
  fam,
  relatedFamilies = [],
  recentlyViewedFamilies = [],
  isWholesale = false,
  settings = {}
) {
  const activeVar = fam.activeVariant || fam.variants?.[fam.selectedVariantIdx || 0] || fam;
  const activePrice = isWholesale ? activeVar.wholesalePrice : activeVar.retailPrice;
  const savingsPct = calcSavingsPercent(activeVar.retailPrice, activeVar.wholesalePrice);
  const waPhone = settings.whatsappPhone || '96171840915';
  const askMsg = `مرحباً ${settings.storeNameAr || 'بيتك'}، أود الاستفسار عن الصنف: ${fam.baseNameAr} (SKU: ${activeVar.sku} | Box: ${activeVar.box})`;
  const shareMsg = `شاهد ${fam.baseNameAr} (${activeVar.sku}) في متجر ${settings.storeNameAr || 'بيتك'}:\n${window.location.href}`;

  return `
    <div class="container-shell" style="padding-block:2.2rem 5rem">
      <nav aria-label="مسار التنقل" style="display:flex;align-items:center;gap:0.5rem;font-size:0.82rem;color:var(--text-muted);margin-bottom:1.5rem;flex-wrap:wrap">
        <a href="#/" style="color:var(--text-primary);font-weight:700">الرئيسية</a>
        <span>/</span>
        <button
          type="button"
          onclick="window.BAYTOUKA.filterByCategory('${escapeHtml(fam.category)}', true); window.location.hash='#/';"
          style="background:none;border:none;cursor:pointer;color:var(--accent-terracotta);font-weight:700"
        >
          ${escapeHtml(fam.category)}
        </button>
        <span>/</span>
        <span>${escapeHtml(fam.baseNameAr)}</span>
      </nav>

      <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-xl);overflow:hidden;box-shadow:var(--shadow-md)">
        <div class="modal-split-layout">
          <div class="modal-image-stage" style="min-height:380px">
            ${renderArtTile(
              {
                ...fam,
                activeSku: activeVar.sku,
                activeBox: activeVar.box,
                customImageUrl: activeVar.customImageUrl || fam.customImageUrl
              },
              { size: 'lg', showMeta: true }
            )}
          </div>

          <div class="modal-details-stage" style="padding:clamp(1.5rem,3.5vw,2.75rem)">
            <div style="display:flex;flex-wrap:wrap;gap:0.5rem">
              <span class="sku-pill num-ltr">SKU: ${escapeHtml(activeVar.sku)}</span>
              <span class="sku-pill num-ltr">Box: ${escapeHtml(activeVar.box)}</span>
              <span class="sku-pill num-ltr">${escapeHtml(activeVar.specs)}</span>
            </div>

            <h1 style="font-family:var(--font-display);font-size:clamp(1.5rem,3vw,2.25rem);font-weight:700;line-height:1.25">
              ${escapeHtml(fam.baseNameAr)}
            </h1>

            <p style="font-size:0.95rem;color:var(--text-secondary);line-height:1.75">
              ${escapeHtml(fam.descAr || 'قطعة أصلية مختارة بعناية من كتالوج بيتك لتجهيز المطبخ والمائدة اللبنانية بأعلى معايير الجودة والمتانة.')}
            </p>

            ${
              fam.variants && fam.variants.length > 1
                ? `<div style="padding:0.9rem;border-radius:var(--radius-md);background:var(--bg-subtle);border:1px solid var(--border-subtle)">
                     <strong style="font-size:0.8rem;display:block;margin-bottom:0.5rem">الموديلات والمقاسات المتوفرة (${fam.variants.length}):</strong>
                     <div class="variant-chips-wrap">
                       ${fam.variants
                         .map((v, vIdx) => {
                           const isSel = vIdx === (fam.selectedVariantIdx || 0);
                           const vP = isWholesale ? v.wholesalePrice : v.retailPrice;
                           return `<button
                             type="button"
                             class="variant-chip num-ltr ${isSel ? 'active' : ''}"
                             onclick="window.BAYTOUKA.selectPageVariant(${fam.familyId}, ${vIdx})"
                           >${escapeHtml(v.chipLabel || v.sku)} — $${vP.toFixed(2)}</button>`;
                         })
                         .join('')}
                     </div>
                   </div>`
                : ''
            }

            <div class="dual-price-box">
              <div class="price-tier-card ${!isWholesale ? 'active-tier' : ''}">
                <span style="font-size:0.75rem;font-weight:700;color:var(--text-muted);display:block">سعر المفرق (Retail)</span>
                <strong class="num-ltr" dir="ltr" style="font-size:1.45rem;font-weight:800">$${activeVar.retailPrice.toFixed(2)} USD</strong>
              </div>
              <div class="price-tier-card ${isWholesale ? 'active-tier' : ''}">
                <span style="font-size:0.75rem;font-weight:700;color:var(--accent-terracotta);display:block">
                  سعر الجملة (Wholesale) ${savingsPct > 0 ? `• وفّر ${savingsPct}%` : ''}
                </span>
                <strong class="num-ltr" dir="ltr" style="font-size:1.45rem;font-weight:800;color:var(--accent-terracotta)">$${activeVar.wholesalePrice.toFixed(2)} USD</strong>
              </div>
            </div>

            <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-top:0.5rem">
              <button
                type="button"
                class="btn-primary-editorial"
                style="flex:1;min-width:210px"
                onclick="window.BAYTOUKA.addToCart(${fam.familyId}, 1, ${fam.selectedVariantIdx || 0})"
              >
                <i data-lucide="shopping-bag" style="width:18px;height:18px"></i>
                <span>أضف إلى السلة — <span class="num-ltr" dir="ltr">$${activePrice.toFixed(2)} USD</span></span>
              </button>

              <a
                href="https://wa.me/${encodeURIComponent(waPhone)}?text=${encodeURIComponent(askMsg)}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary-brass"
              >
                <i data-lucide="message-circle" style="width:18px;height:18px;color:#25D366"></i>
                <span>اسأل عن الصنف (${escapeHtml(activeVar.sku)})</span>
              </a>

              <a
                href="https://wa.me/?text=${encodeURIComponent(shareMsg)}"
                target="_blank"
                rel="noopener noreferrer"
                class="icon-action-btn"
                title="مشاركة عبر واتساب"
              >
                <i data-lucide="share-2" style="width:16px;height:16px"></i>
                <span>مشاركة</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      ${
        relatedFamilies.length > 0
          ? `<div style="margin-top:3rem">
               <h3 style="font-family:var(--font-display);font-size:1.45rem;font-weight:700;margin-bottom:1.25rem">
                 أصناف مشابهة من نفس القسم
               </h3>
               <div class="products-editorial-grid">
                 ${relatedFamilies.map(r => renderProductCard(r, isWholesale)).join('')}
               </div>
             </div>`
          : ''
      }

      ${
        recentlyViewedFamilies.length > 0
          ? `<div style="margin-top:3rem;padding-top:2rem;border-top:1px solid var(--border-subtle)">
               <h3 style="font-family:var(--font-display);font-size:1.3rem;font-weight:700;margin-bottom:1rem">
                 شوهد مؤخراً (Recently Viewed)
               </h3>
               <div class="products-editorial-grid">
                 ${recentlyViewedFamilies.map(r => renderProductCard(r, isWholesale)).join('')}
               </div>
             </div>`
          : ''
      }

      <!-- Sticky Product Page Add-to-Cart Bar -->
      <div class="sticky-product-action-bar">
        <div class="container-shell" style="display:flex;align-items:center;justify-content:space-between;gap:1rem">
          <div style="min-width:0">
            <strong style="font-size:0.88rem;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escapeHtml(fam.baseNameAr)}</strong>
            <span class="num-ltr" dir="ltr" style="font-size:0.78rem;color:var(--accent-terracotta);font-weight:800">SKU: ${escapeHtml(activeVar.sku)} • $${activePrice.toFixed(2)} USD</span>
          </div>
          <button
            type="button"
            class="btn-primary-editorial"
            style="min-height:42px;padding-inline:1.35rem"
            onclick="window.BAYTOUKA.addToCart(${fam.familyId}, 1, ${fam.selectedVariantIdx || 0})"
          >
            <i data-lucide="plus" style="width:16px;height:16px"></i>
            <span>أضف للسلة</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Renders Part 4: Multi-Tier Ready-Made Bridal Packages + 5-Step Room/Need Package Builder
 */
export function renderBridalExperienceSection(store) {
  const packages = store.packages || [];
  const isWholesale = store.mode === 'wholesale';

  // 5-Step Room/Need Builder Definitions
  const builderSteps = [
    { idx: 0, titleAr: '1. الطبخ والطهي', category: 'أطقم الطناجر والمقالي', icon: 'chef-hat' },
    { idx: 1, titleAr: '2. المائدة والضيافة', category: 'أدوات المائدة والسيراميك', icon: 'utensils' },
    { idx: 2, titleAr: '3. المؤونة والتخزين', category: 'حافظات الطعام والبهارات', icon: 'package' },
    { idx: 3, titleAr: '4. التحضير والباربكيو', category: 'أدوات التحضير والباربكيو', icon: 'flame' },
    { idx: 4, titleAr: '5. مستلزمات البيت', category: 'المطرات ومستلزمات المنزل', icon: 'home' }
  ];

  const activeStepIdx = store.bridalBuilder.activeStepIdx || 0;
  const currentStep = builderSteps[activeStepIdx] || builderSteps[0];
  const stepFamilies = store.families.filter(f => f.category === currentStep.category).slice(0, 10);

  // Calculate live builder totals & progress ring
  const selections = store.bridalBuilder.selections || {};
  const selectedEntries = Object.values(selections).filter(s => s && s.qty > 0);
  let builderRetailTotal = 0;
  let builderWholesaleTotal = 0;
  let builderPiecesCount = 0;
  const coveredCategories = new Set();

  selectedEntries.forEach(sel => {
    const fam = store.families.find(f => Number(f.familyId) === Number(sel.familyId));
    if (!fam) return;
    const v = fam.variants[sel.variantIdx || 0] || fam.variants[0];
    builderRetailTotal += v.retailPrice * sel.qty;
    builderWholesaleTotal += v.wholesalePrice * sel.qty;
    builderPiecesCount += sel.qty;
    coveredCategories.add(fam.category);
  });

  const builderPackagePrice = Number((builderWholesaleTotal * 0.94).toFixed(2)); // Extra 6% bridal bundle discount
  const builderSavings = Math.max(0, Number((builderRetailTotal - builderPackagePrice).toFixed(2)));
  const completionPct = Math.min(100, Math.round((coveredCategories.size / 5) * 100));
  const ringCircumference = 2 * Math.PI * 24;
  const ringOffset = ringCircumference - (completionPct / 100) * ringCircumference;

  return `
    <!-- 1. Ready-Made Bridal & Shop Starter Tiers (5 Curated Packages) -->
    <div class="bridal-tiers-grid" style="margin-bottom:2.75rem">
      ${packages
        .map(
          pkg => `
          <div class="bridal-tier-card">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.65rem">
              <span class="bento-count-pill" style="margin:0">${escapeHtml(pkg.badgeAr || pkg.tierCode)}</span>
              <span class="num-ltr" style="font-size:0.74rem;color:#FFD98E;font-weight:800">خصم باقة -${pkg.discountPct}%</span>
            </div>

            <h3 style="font-family:var(--font-display);font-size:1.25rem;color:#F7F3EB;margin-bottom:0.35rem">
              ${escapeHtml(pkg.nameAr)}
            </h3>
            <p style="font-size:0.78rem;color:var(--text-on-dark-muted);margin-bottom:0.9rem;min-height:2.4em">
              ${escapeHtml(pkg.subtitleAr)}
            </p>

            <!-- Mini Art Tile Strip for the Package Items -->
            <div class="tier-art-preview-row">
              ${(pkg.resolvedItems || [])
                .slice(0, 4)
                .map(
                  it => `
                  <div class="tier-mini-tile" title="${escapeHtml(it.nameAr)} (×${it.qty})">
                    ${renderArtTile(it.family || it, { size: 'sm', showMeta: false })}
                  </div>
                `
                )
                .join('')}
              ${
                (pkg.resolvedItems || []).length > 4
                  ? `<span class="tier-more-badge num-ltr">+${pkg.resolvedItems.length - 4}</span>`
                  : ''
              }
            </div>

            <ul class="tier-items-list">
              ${(pkg.resolvedItems || [])
                .slice(0, 5)
                .map(
                  it => `
                  <li>
                    <span>• ${escapeHtml(it.nameAr)}</span>
                    <strong class="num-ltr">×${it.qty}</strong>
                  </li>
                `
                )
                .join('')}
            </ul>

            <div class="tier-pricing-footer">
              <div>
                <span style="font-size:0.7rem;color:var(--text-on-dark-muted);display:block;text-decoration:line-through" class="num-ltr" dir="ltr">
                  المفرق: $${pkg.retailSum.toFixed(2)}
                </span>
                <strong class="num-ltr" dir="ltr" style="font-size:1.3rem;color:#FFD98E">
                  $${pkg.packagePrice.toFixed(2)} <small style="font-size:0.7rem">USD</small>
                </strong>
                <span class="num-ltr" dir="ltr" style="font-size:0.72rem;color:#25D366;display:block;font-weight:700">
                  توفير $${pkg.savingsAmount.toFixed(2)}
                </span>
              </div>

              <div style="display:flex;gap:0.45rem">
                <button
                  type="button"
                  class="btn-primary-editorial"
                  style="min-height:38px;padding-inline:0.9rem;font-size:0.76rem"
                  onclick="window.BAYTOUKA.addReadyTierToCart('${escapeHtml(pkg.id)}')"
                >
                  <i data-lucide="shopping-bag" style="width:14px;height:14px"></i>
                  <span>أضف الباقة</span>
                </button>
                <button
                  type="button"
                  class="icon-action-btn"
                  style="min-height:38px;background:rgba(37,211,102,0.16);color:#25D366;border-color:rgba(37,211,102,0.4)"
                  onclick="window.BAYTOUKA.sendReadyTierWhatsApp('${escapeHtml(pkg.id)}')"
                  title="اطلب هذه الباقة عبر واتساب"
                  aria-label="اطلب ${escapeHtml(pkg.nameAr)} عبر واتساب"
                >
                  <i data-lucide="message-circle" style="width:16px;height:16px"></i>
                </button>
              </div>
            </div>
          </div>
        `
        )
        .join('')}
    </div>

    <!-- 2. Interactive 5-Step Bridal Package Builder by Room/Need -->
    <div class="bridal-builder-card">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1.25rem;padding-bottom:1rem;border-bottom:1px solid rgba(255,255,255,0.14)">
        <div>
          <span style="font-size:0.74rem;color:#FFD98E;font-weight:800;display:block">أداة تفاعلية لتصميم جهاز العروس حسب أقسام البيت</span>
          <h3 style="font-family:var(--font-display);font-size:1.4rem;color:#F7F3EB">
            صمّمي باقتكِ المخصصة خطوة بخطوة (5 أجنحة)
          </h3>
        </div>

        <!-- SVG Progress Ring -->
        <div style="display:flex;align-items:center;gap:0.75rem;background:rgba(0,0,0,0.3);padding:0.45rem 0.9rem;border-radius:var(--radius-pill);border:1px solid rgba(204,160,94,0.35)">
          <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
            <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="4"/>
            <circle
              cx="28"
              cy="28"
              r="24"
              fill="none"
              stroke="#FFD98E"
              stroke-width="4"
              stroke-linecap="round"
              stroke-dasharray="${ringCircumference.toFixed(1)}"
              stroke-dashoffset="${ringOffset.toFixed(1)}"
              transform="rotate(-90 28 28)"
            />
            <text x="28" y="32" text-anchor="middle" fill="#FFD98E" font-family="monospace" font-size="12" font-weight="800">${completionPct}%</text>
          </svg>
          <div>
            <strong class="num-ltr" style="color:#F7F3EB;font-size:0.86rem;display:block">${builderPiecesCount} قطعة مختارة</strong>
            <span style="font-size:0.72rem;color:var(--text-on-dark-muted)">تغطية ${coveredCategories.size} من 5 أقسام</span>
          </div>
        </div>
      </div>

      <!-- 5 Room/Need Step Tabs -->
      <div class="builder-steps-tabs" role="tablist" style="display:flex;gap:0.5rem;overflow-x:auto;padding-bottom:0.75rem;margin-bottom:1rem">
        ${builderSteps
          .map(
            st => `
            <button
              type="button"
              class="builder-step-tab ${st.idx === activeStepIdx ? 'active' : ''}"
              onclick="window.BAYTOUKA.setBridalBuilderStep(${st.idx})"
            >
              <i data-lucide="${st.icon}" style="width:15px;height:15px"></i>
              <span>${escapeHtml(st.titleAr)}</span>
            </button>
          `
          )
          .join('')}
      </div>

      <!-- Active Step Families Selection Grid -->
      <div class="builder-step-items-grid">
        ${stepFamilies
          .map(fam => {
            const sel = selections[fam.familyId];
            const isChecked = Boolean(sel && sel.qty > 0);
            const selVarIdx = sel ? sel.variantIdx || 0 : 0;
            const activeVar = fam.variants[selVarIdx] || fam.variants[0];
            return `
              <div class="bridal-check-item ${isChecked ? 'selected' : ''}" onclick="window.BAYTOUKA.toggleBridalBuilderItem(${fam.familyId})">
                <input
                  type="checkbox"
                  ${isChecked ? 'checked' : ''}
                  onclick="event.stopPropagation(); window.BAYTOUKA.toggleBridalBuilderItem(${fam.familyId})"
                  aria-label="اختيار ${escapeHtml(fam.baseNameAr)}"
                  style="width:18px;height:18px;accent-color:var(--accent-saffron-bright);cursor:pointer"
                />
                <div style="width:46px;height:46px;flex-shrink:0">
                  ${renderArtTile(fam, { size: 'sm', showMeta: false })}
                </div>
                <div style="flex:1;min-width:0">
                  <div style="font-size:0.82rem;font-weight:700;color:#F7F3EB;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
                    ${escapeHtml(fam.baseNameAr)}
                  </div>
                  ${
                    fam.variants.length > 1
                      ? `<select
                           class="builder-variant-select num-ltr"
                           onclick="event.stopPropagation()"
                           onchange="window.BAYTOUKA.changeBridalBuilderVariant(${fam.familyId}, this.value)"
                           aria-label="اختيار موديل ${escapeHtml(fam.baseNameAr)}"
                         >
                           ${fam.variants
                             .map(
                               (v, idx) =>
                                 `<option value="${idx}" ${idx === selVarIdx ? 'selected' : ''}>${escapeHtml(v.chipLabel || v.sku)} ($${v.wholesalePrice.toFixed(2)})</option>`
                             )
                             .join('')}
                         </select>`
                      : `<span class="num-ltr" style="font-size:0.7rem;color:var(--text-on-dark-muted)">SKU: ${escapeHtml(activeVar.sku)}</span>`
                  }
                </div>
                <div class="num-ltr" dir="ltr" style="text-align:left">
                  <strong style="font-size:0.86rem;color:#FFD98E;display:block">$${activeVar.wholesalePrice.toFixed(2)}</strong>
                  <small style="font-size:0.68rem;color:var(--text-on-dark-muted);text-decoration:line-through">$${activeVar.retailPrice.toFixed(2)}</small>
                </div>
              </div>
            `;
          })
          .join('')}
      </div>

      <!-- Builder Totals & One-Click Actions Footer -->
      <div style="margin-top:1.25rem;padding:1rem 1.25rem;border-radius:var(--radius-md);background:rgba(0,0,0,0.4);border:1px solid var(--accent-brass);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem">
        <div style="display:flex;gap:1.5rem;flex-wrap:wrap">
          <div>
            <span style="font-size:0.7rem;color:var(--text-on-dark-muted);display:block">قيمة المفرق</span>
            <strong class="num-ltr" dir="ltr" style="font-size:1.05rem;color:#F7F3EB;text-decoration:line-through">$${builderRetailTotal.toFixed(2)}</strong>
          </div>
          <div>
            <span style="font-size:0.7rem;color:#FFD98E;display:block">سعر الباقة المخصصة (-6% إضافي)</span>
            <strong class="num-ltr" dir="ltr" style="font-size:1.25rem;color:#FFD98E">$${builderPackagePrice.toFixed(2)} USD</strong>
          </div>
          <div>
            <span style="font-size:0.7rem;color:#25D366;display:block">إجمالي توفيركِ</span>
            <strong class="num-ltr" dir="ltr" style="font-size:1.1rem;color:#25D366">$${builderSavings.toFixed(2)} USD</strong>
          </div>
        </div>

        <div style="display:flex;wrap:wrap;gap:0.65rem">
          <button type="button" onclick="window.BAYTOUKA.addBridalPackageToCart()" class="btn-primary-editorial">
            <i data-lucide="shopping-bag" style="width:17px;height:17px"></i>
            <span>إضافة الباقة الكاملة للسلة</span>
          </button>
          <button
            type="button"
            onclick="window.BAYTOUKA.sendBridalPackageWhatsApp()"
            class="btn-secondary-brass"
            style="background:transparent;color:#F7F3EB"
          >
            <i data-lucide="message-circle" style="width:17px;height:17px;color:#25D366"></i>
            <span>إرسال الباقة عبر واتساب</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Renders the Owner-Editable FAQ Accordion
 */
export function renderFaqAccordion(settings = {}) {
  const faqs = settings.faqs || [];
  return faqs
    .map(
      (item, idx) => `
      <details class="faq-accordion-item" ${idx === 0 ? 'open' : ''}>
        <summary class="faq-accordion-summary">
          <span>${escapeHtml(item.q)}</span>
          <i data-lucide="chevron-down" style="width:18px;height:18px;color:var(--accent-brass);flex-shrink:0"></i>
        </summary>
        <div class="faq-accordion-body">
          <p>${escapeHtml(item.a)}</p>
        </div>
      </details>
    `
    )
    .join('');
}

export function renderLebanonRegionsGrid(selectedRegionId = 'tripoli', settings = {}) {
  const regions = settings.regions || DEFAULT_LEBANON_REGIONS;
  return regions
    .map(
      r => `
      <div
        class="region-card ${r.id === selectedRegionId ? 'active' : ''}"
        onclick="window.BAYTOUKA.selectDeliveryRegion('${escapeHtml(r.id)}')"
        role="button"
        tabindex="0"
      >
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem">
          <span style="font-weight:800;font-size:0.95rem">${escapeHtml(r.cityAr)}</span>
          <span class="sku-pill num-ltr" dir="ltr" style="color:var(--accent-terracotta);font-weight:800">$${Number(r.fee).toFixed(2)}</span>
        </div>
        <p style="font-size:0.78rem;color:var(--text-secondary);margin-bottom:0.4rem">${escapeHtml(r.nameAr)}</p>
        <div style="font-size:0.72rem;color:var(--text-muted);display:flex;align-items:center;gap:0.35rem">
          <i data-lucide="clock" style="width:13px;height:13px;color:var(--accent-brass)"></i>
          <span>مدة التوصيل: ${escapeHtml(r.etaAr)}</span>
        </div>
      </div>
    `
    )
    .join('');
}
