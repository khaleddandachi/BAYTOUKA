// ============================================================================
// BAYTOUKA (بيتك) — Product Families & Variants Normalization Engine
// Groups duplicate catalog rows (645 rows -> ~265-290 distinct families)
// while preserving every distinct SKU, Box, and price as selectable variants.
// ============================================================================

import { normalizeArabic, classifyHomeSubCategory } from './utils.js';

/**
 * Extracts a clean base family name and an optional variant descriptor
 * from a raw Arabic product name.
 */
export function extractBaseNameAndVariantLabel(rawNameAr = '', sku = '', specs = '') {
  const original = String(rawNameAr || '').trim();
  let base = original;
  let extractedLabel = '';

  // 1. Match "- موديل 142" or "- رقم 5" or "| موديل ..."
  const dashModelMatch = base.match(/\s*[-–—|]\s*((?:موديل|رقم|كود|قياس|حجم|شكل|لون|طراز|نوع|مقاس)\s*.+)$/i);
  if (dashModelMatch) {
    extractedLabel = dashModelMatch[1].trim();
    base = base.slice(0, dashModelMatch.index).trim();
  }

  // 2. Match trailing "موديل 142" or "مقاس 18CM" without dash
  if (!extractedLabel) {
    const inlineModelMatch = base.match(/\s+((?:موديل|رقم|كود|طراز|مقاس)\s+[#:]?\s*[A-Za-z0-9.,×x*\-\/]+\s*(?:سم|مل|لتر|انش|بوصة|cm|mm|inch|ml|l)?)$/i);
    if (inlineModelMatch) {
      extractedLabel = inlineModelMatch[1].trim();
      base = base.slice(0, inlineModelMatch.index).trim();
    }
  }

  // 3. Match trailing parenthesized dimension like "(5INCH)" or "(13.5 سم)" or "(450 مل)"
  if (!extractedLabel) {
    const parenDimMatch = base.match(/\s*\(\s*([\d.,×x*]+\s*(?:سم|مل|لتر|انش|بوصة|cm|mm|inch|ml|l))\s*\)\s*$/i);
    if (parenDimMatch) {
      extractedLabel = parenDimMatch[1].trim();
      base = base.slice(0, parenDimMatch.index).trim();
    }
  }

  if (!base) base = original;

  // Build concise chip label for the variant selector
  let chipLabel = String(sku || '').trim();
  if (extractedLabel && !chipLabel.includes(extractedLabel)) {
    const shortExtracted = extractedLabel.replace(/^(موديل|رقم|مقاس|قياس)\s+/i, '');
    chipLabel = chipLabel ? `${chipLabel} (${shortExtracted})` : shortExtracted;
  } else if (!chipLabel && specs) {
    chipLabel = String(specs).trim();
  }

  return {
    baseNameAr: base,
    variantSuffix: extractedLabel,
    chipLabel: chipLabel || 'Standard'
  };
}

/**
 * Groups raw product rows into normalized Product Families with selectable Variants.
 */
export function buildProductFamilies(rawProducts = []) {
  const familyMap = new Map();
  let totalValidRows = 0;

  rawProducts.forEach((raw, idx) => {
    if (raw && raw.active === false) return; // Skip explicitly hidden products on storefront
    totalValidRows++;

    const id = raw.id !== undefined ? Number(raw.id) : idx + 1;
    const sku = String(raw.sku || raw.Style || `SKU-${id}`).trim();
    const box = String(raw.box || raw.Box || '—').trim();
    const nameAr = String(raw.nameAr || raw.name || `منتج ${sku}`).trim();
    const descAr = String(raw.descAr || '').trim();
    const category = String(raw.category || 'أطقم الطناجر والمقالي').trim();
    const specs = String(raw.specs || 'Standard').trim();
    const wholesalePrice = Number(parseFloat(raw.wholesalePrice ?? raw.wholesale ?? 5).toFixed(2));
    const retailPrice = Number(parseFloat(raw.retailPrice ?? raw.retail ?? 8).toFixed(2));
    const costPrice = raw.costPrice !== undefined ? Number(parseFloat(raw.costPrice).toFixed(2)) : Number((wholesalePrice * 0.82).toFixed(2));
    const stock = raw.stock !== undefined ? Number(raw.stock) : null;
    const badge = String(raw.badge || '').trim();
    const featured = Boolean(raw.featured || badge);
    const customImageUrl = String(raw.customImageUrl || raw.image_url || '').trim();

    const { baseNameAr, variantSuffix, chipLabel } = extractBaseNameAndVariantLabel(nameAr, sku, specs);
    const familyKey = raw.family_key || `${normalizeArabic(baseNameAr)}__${normalizeArabic(category)}`;

    const variantObj = {
      id,
      sku,
      box,
      nameAr,
      baseNameAr,
      variantSuffix,
      chipLabel,
      descAr,
      category,
      specs,
      wholesalePrice: isNaN(wholesalePrice) ? 5 : wholesalePrice,
      retailPrice: isNaN(retailPrice) ? 8 : retailPrice,
      costPrice: isNaN(costPrice) ? 4 : costPrice,
      stock,
      badge,
      featured,
      customImageUrl,
      _normSearch: normalizeArabic(`${nameAr} ${baseNameAr} ${descAr} ${sku} ${box} ${specs} ${category} ${badge}`)
    };

    if (!familyMap.has(familyKey)) {
      const homeSub =
        category === 'المطرات ومستلزمات المنزل'
          ? classifyHomeSubCategory({ nameAr: baseNameAr, descAr, specs })
          : null;

      familyMap.set(familyKey, {
        familyId: id,
        familyKey,
        baseNameAr,
        nameAr: baseNameAr,
        descAr,
        category,
        badge,
        featured,
        customImageUrl,
        _homeSub: homeSub,
        variants: [variantObj],
        selectedVariantIdx: 0
      });
    } else {
      const fam = familyMap.get(familyKey);
      // Merge exact duplicate variant if same SKU + same retailPrice + same wholesalePrice
      const existingSameSku = fam.variants.find(
        v =>
          v.sku.toLowerCase() === variantObj.sku.toLowerCase() &&
          Math.abs(v.retailPrice - variantObj.retailPrice) < 0.01 &&
          Math.abs(v.wholesalePrice - variantObj.wholesalePrice) < 0.01
      );
      if (!existingSameSku) {
        fam.variants.push(variantObj);
      }
      if (!fam.descAr && descAr) fam.descAr = descAr;
      if (!fam.badge && badge) fam.badge = badge;
      if (featured) fam.featured = true;
      if (!fam.customImageUrl && customImageUrl) fam.customImageUrl = customImageUrl;
    }
  });

  // Finalize computed price ranges and active variant fields on each family
  const families = [];
  let totalDistinctVariants = 0;

  for (const fam of familyMap.values()) {
    // Sort variants by retailPrice ascending, then SKU
    fam.variants.sort((a, b) => a.retailPrice - b.retailPrice || a.sku.localeCompare(b.sku, undefined, { numeric: true }));
    totalDistinctVariants += fam.variants.length;

    const retailPrices = fam.variants.map(v => v.retailPrice);
    const wholesalePrices = fam.variants.map(v => v.wholesalePrice);

    fam.minRetailPrice = Math.min(...retailPrices);
    fam.maxRetailPrice = Math.max(...retailPrices);
    fam.minWholesalePrice = Math.min(...wholesalePrices);
    fam.maxWholesalePrice = Math.max(...wholesalePrices);
    fam.hasRetailSpread = fam.maxRetailPrice - fam.minRetailPrice >= 0.05;
    fam.hasWholesaleSpread = fam.maxWholesalePrice - fam.minWholesalePrice >= 0.05;
    fam.variantCount = fam.variants.length;

    // Combined normalized search string across all variants in this family
    fam._normSearch = fam.variants.map(v => v._normSearch).join(' ');

    syncActiveVariantFields(fam, 0);
    families.push(fam);
  }

  return {
    families,
    totalRawRows: totalValidRows,
    totalFamilies: families.length,
    totalVariants: totalDistinctVariants
  };
}

/**
 * Synchronizes top-level convenience fields (id, sku, box, retailPrice, wholesalePrice, specs)
 * on a family object to match its currently selected variant index.
 */
export function syncActiveVariantFields(family, variantIdx = 0) {
  if (!family || !Array.isArray(family.variants) || family.variants.length === 0) return family;
  const safeIdx = Math.max(0, Math.min(family.variants.length - 1, Number(variantIdx) || 0));
  const activeVar = family.variants[safeIdx];

  family.selectedVariantIdx = safeIdx;
  family.activeVariant = activeVar;
  family.id = activeVar.id;
  family.sku = activeVar.sku;
  family.box = activeVar.box;
  family.specs = activeVar.specs;
  family.retailPrice = activeVar.retailPrice;
  family.wholesalePrice = activeVar.wholesalePrice;
  family.costPrice = activeVar.costPrice;
  if (activeVar.customImageUrl) {
    family.customImageUrl = activeVar.customImageUrl;
  }
  return family;
}

/**
 * Finds the best matching variant index within a family for a search query (SKU, Box, or model number)
 */
export function findMatchingVariantIndex(family, rawQuery = '') {
  if (!family || !rawQuery || family.variants.length <= 1) return family?.selectedVariantIdx || 0;
  const q = normalizeArabic(rawQuery);
  if (!q) return family.selectedVariantIdx || 0;

  // Prefer exact SKU or Box match first
  const exactIdx = family.variants.findIndex(
    v => normalizeArabic(v.sku) === q || normalizeArabic(v.box) === q
  );
  if (exactIdx !== -1) return exactIdx;

  // Next prefer partial SKU, Box, or variantSuffix match
  const partialIdx = family.variants.findIndex(
    v =>
      normalizeArabic(v.sku).includes(q) ||
      normalizeArabic(v.box).includes(q) ||
      normalizeArabic(v.variantSuffix).includes(q)
  );
  if (partialIdx !== -1) return partialIdx;

  return family.selectedVariantIdx || 0;
}

/**
 * Generates a detailed report for the Admin "Merge Duplicates" tool preview
 */
export function previewDuplicateMerge(rawProducts = []) {
  const { families, totalRawRows, totalFamilies, totalVariants } = buildProductFamilies(rawProducts);
  const multiVariantFamilies = families
    .filter(f => f.variants.length > 1)
    .sort((a, b) => b.variants.length - a.variants.length);

  return {
    beforeRowCount: totalRawRows,
    afterFamilyCount: totalFamilies,
    totalDistinctVariants: totalVariants,
    mergedDuplicateRowsCount: totalRawRows - totalFamilies,
    multiVariantFamiliesCount: multiVariantFamilies.length,
    topMergedFamilies: multiVariantFamilies.slice(0, 15).map(f => ({
      familyKey: f.familyKey,
      baseNameAr: f.baseNameAr,
      category: f.category,
      variantCount: f.variants.length,
      priceRangeRetail:
        f.minRetailPrice === f.maxRetailPrice
          ? `$${f.minRetailPrice.toFixed(2)}`
          : `$${f.minRetailPrice.toFixed(2)} – $${f.maxRetailPrice.toFixed(2)}`,
      sampleSkus: f.variants.slice(0, 5).map(v => v.sku).join(', ')
    })),
    families
  };
}

