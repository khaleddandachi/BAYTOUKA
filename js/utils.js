// ============================================================================
// BAYTOUKA (بيتك) — Core Utilities, Arabic Normalization & White-Label Defaults
// Zero hardcoded passwords/hashes in bundle; all store texts & fees configurable.
// ============================================================================

export const CATEGORY_META = [
  {
    id: 'المطرات ومستلزمات المنزل',
    slug: 'home-and-bottles',
    shortAr: 'المطرات ومستلزمات المنزل',
    subtitleAr: 'مطرات حرارية، تنظيم الغسيل والحمام، ومفروشات البيت العصري',
    icon: 'home',
    artIcon: 'water-bottle',
    artTheme: 'teal'
  },
  {
    id: 'أدوات المائدة والسيراميك',
    slug: 'tableware-and-ceramics',
    shortAr: 'أدوات المائدة والسيراميك',
    subtitleAr: 'أطقم سفرة سيراميك، تمريات خشب طبيعي، صواني وفناجين ضيافة',
    icon: 'utensils',
    artIcon: 'dinner-set',
    artTheme: 'saffron'
  },
  {
    id: 'أدوات التحضير والباربكيو',
    slug: 'prep-and-bbq',
    shortAr: 'أدوات التحضير والباربكيو',
    subtitleAr: 'سكاكين احترافية، أطقم سيليكون، مصافي، وشوايات باربكيو',
    icon: 'flame',
    artIcon: 'chef-knife',
    artTheme: 'copper'
  },
  {
    id: 'حافظات الطعام والبهارات',
    slug: 'storage-and-spices',
    shortAr: 'حافظات الطعام والبهارات',
    subtitleAr: 'علب بهارات مع ستاند، حافظات بقوليات محكمة، وعربات تنظيم',
    icon: 'package',
    artIcon: 'spice-carousel',
    artTheme: 'olive'
  },
  {
    id: 'أطقم الطناجر والمقالي',
    slug: 'cookware-and-pots',
    shortAr: 'أطقم الطناجر والمقالي',
    subtitleAr: 'أطقم غرانيت وستانلس ستيل ملكية، طناجر ضغط، وزجاج حراري',
    icon: 'chef-hat',
    artIcon: 'pot-royal-set',
    artTheme: 'terracotta'
  }
];

export const HOME_SUBCATEGORIES = [
  { id: 'all', labelAr: 'كل مستلزمات المنزل والمطرات' },
  { id: 'bottles', labelAr: 'مطرات وترمس وأكواب حافظة' },
  { id: 'cleaning', labelAr: 'تنظيم وغسيل ومستلزمات حمام' },
  { id: 'appliances', labelAr: 'أجهزة صغيرة وإضاءة وكهربائيات' },
  { id: 'decor', labelAr: 'مفروشات وديكور وضيافة منزلية' }
];

export const DEFAULT_LEBANON_REGIONS = [
  { id: 'tripoli', nameAr: 'طرابلس والشمال (Tripoli & North)', cityAr: 'طرابلس', fee: 2.50, etaAr: '24 ساعة (مركز الانطلاق)' },
  { id: 'beirut', nameAr: 'بيروت الكبرى (Beirut)', cityAr: 'بيروت', fee: 3.00, etaAr: '24 – 48 ساعة' },
  { id: 'mount_lebanon', nameAr: 'جبل لبنان والمتن وكسروان (Mount Lebanon)', cityAr: 'جبل لبنان', fee: 3.00, etaAr: '24 – 48 ساعة' },
  { id: 'saida', nameAr: 'صيدا والجنوب (Saida & South)', cityAr: 'صيدا', fee: 3.50, etaAr: '48 ساعة' },
  { id: 'zahle', nameAr: 'زحلة والبقاع (Zahle & Bekaa)', cityAr: 'زحلة', fee: 3.50, etaAr: '48 ساعة' },
  { id: 'tyre_nabatieh', nameAr: 'صور والنبطية (Tyre & Nabatieh)', cityAr: 'صور والنبطية', fee: 4.00, etaAr: '48 – 72 ساعة' }
];

export const BRAND_COLOR_PRESETS = [
  {
    id: 'levantine_saffron',
    nameAr: 'المائدة اللبنانية (زعفران وتيراكوتا)',
    primary: '#171914',
    accent: '#B64624',
    secondary: '#C67D0F',
    brass: '#B28646',
    canvasLight: '#F7F3EB'
  },
  {
    id: 'royal_olive',
    nameAr: 'أخضر زيتوني مشرقي وذهبي',
    primary: '#142016',
    accent: '#2D5A3C',
    secondary: '#B88928',
    brass: '#C49A45',
    canvasLight: '#F5F6F0'
  },
  {
    id: 'damascene_copper',
    nameAr: 'نحاسي دمشقي عتيق',
    primary: '#1E1512',
    accent: '#8C3B22',
    secondary: '#C86D3B',
    brass: '#B8835A',
    canvasLight: '#FAF4EE'
  },
  {
    id: 'mediterranean_teal',
    nameAr: 'أزرق متوسطي وذهبي شامبين',
    primary: '#102024',
    accent: '#1C5D68',
    secondary: '#C68B2C',
    brass: '#B69454',
    canvasLight: '#F3F7F7'
  }
];

export const DEFAULT_STORE_SETTINGS = {
  storeNameAr: 'بيتك',
  storeNameEn: 'BAYTOUKA',
  taglineAr: 'صالة المائدة والمطبخ اللبناني • جملة ومفرق',
  logoUrl: 'assets/baytouka-logo.png',
  whatsappPhone: '96171840915',
  whatsappDisplay: '+961 71 840 915',
  currencySymbol: '$',
  currencyCode: 'USD',
  freeDeliveryThresholdRetail: 65,
  freeDeliveryThresholdWholesale: 220,
  wholesaleMoqHintAr: 'الحد الأدنى لطلبيات الجملة: 6 قطع متنوعة أو كرتونة كاملة',
  quantityTierDiscountQty: 12,
  quantityTierDiscountPct: 5,
  defaultTheme: 'light',
  colorPresetId: 'levantine_saffron',
  countNewOrdersInRevenue: false,
  heroKickerAr: 'حكاية الضيافة اللبنانية • من طرابلس إلى كل بيت في لبنان',
  heroHeadlineAr: 'أناقة المائدة اللبنانية وفخامة المطبخ العصري بأسعار الجملة والمفرق',
  heroSubheadlineAr: 'صالة عرض متكاملة تضم مئات الأصناف والعائلات المنتقاة من أطقم الطناجر الملكية، سيراميك الضيافة، أواني الخشب الطبيعي، وحافظات المؤونة والبهارات — لتجهيز البيوت، العرائس، والمحلات التجارية في كل لبنان.',
  heroPrimaryCtaAr: 'تسوّق الكتالوج',
  heroSecondaryCtaAr: 'أسعار وطلبات الجملة',
  announcements: [
    '🚚 توصيل لكافة الأراضي اللبنانية من طرابلس إلى بيروت والجنوب والبقاع',
    '📦 خصومات فورية للطلبيات والكميات بالجملة للمحلات والمطاعم',
    '💍 باقات ملكية متكاملة لتجهيز مطبخ العروس بأسعار الاستيراد',
    '💬 اطلب مباشرة بضغطة زر عبر واتساب والدفع نقداً عند الاستلام'
  ],
  trustBadges: [
    { icon: 'truck', titleAr: 'توصيل لكافة لبنان', descAr: 'شحن يومي من طرابلس لبيروت والجبل والجنوب والبقاع' },
    { icon: 'banknote', titleAr: 'الدفع عند الاستلام', descAr: 'معاينة الطلبية والتأكد من سلامة القطع قبل الدفع' },
    { icon: 'badge-percent', titleAr: 'أسعار جملة مباشرة', descAr: 'تسعير شفاف للمفرق والجملة مع خصم إضافي للكميات' },
    { icon: 'message-circle', titleAr: 'دعم وطلب عبر واتساب', descAr: 'تأكيد فوري للطلبيات واستشارات تجهيز العرائس والمحلات' }
  ],
  collectionsOrder: [
    { id: 'bestsellers', titleAr: 'الأكثر مبيعاً والترند', badgeFilter: 'الأكثر مبيعاً|ترند|مميز', active: true },
    { id: 'new_arrivals', titleAr: 'وصل حديثاً', badgeFilter: 'جديد|موسمي', active: true },
    { id: 'special_offers', titleAr: 'عروض خاصة وتصفيات', badgeFilter: 'عرض خاص|عملي', active: true },
    { id: 'bridal_picks', titleAr: 'مختارات تجهيز العرائس', badgeFilter: 'تجهيز عرائس|ملكي|فخم', active: true },
    { id: 'wholesale_deals', titleAr: 'صفقات الجملة للمحلات', badgeFilter: 'سعر جملة', active: true },
    { id: 'gift_ideas', titleAr: 'أفكار هدايا للبيت الجديد', badgeFilter: 'هدية مميزة|فخم', active: true }
  ],
  faqs: [
    {
      q: 'كم تستغرق عملية التوصيل داخل لبنان وما هي الكلفة؟',
      a: 'يتم التوصيل خلال 24 ساعة في طرابلس والشمال ($2.50)، وخلال 24 إلى 48 ساعة في بيروت وجبل لبنان ($3.00)، و48 ساعة في صيدا والجنوب وزحلة والبقاع ($3.50 – $4.00). التوصيل مجاني للطلبيات التي تتجاوز الحد المعتمد في السلة.'
    },
    {
      q: 'كيف يتم الدفع وهل يمكنني معاينة الطلبية عند الاستلام؟',
      a: 'الدفع نقداً عند الاستلام (Cash on Delivery) بالدولار الأمريكي أو ما يعادله بالسعر اليومي. يحق للزبون معاينة القطع والتأكد من سلامتها ومطابقتها للمواصفات قبل التسديد.'
    },
    {
      q: 'ما هو الفرق بين نظام المبيع بالمفرق ونظام الجملة؟',
      a: 'يمكنك التبديل بضغطة زر في أعلى الموقع بين تسعير المفرق (للبيوت والعائلات) وتسعير الجملة (لأصحاب المحلات، المطاعم، وباقات العرائس). في وضع الجملة تظهر أرقام الكراتين (Box) وأكواد الموديلات (SKU) مع نسبة التوفير المباشرة.'
    },
    {
      q: 'هل يمكن تعديل أصناف باقات تجهيز العرائس حسب الرغبة؟',
      a: 'نعم بالتأكيد! وفرنا في قسم «تجهيز العرائس» 5 باقات جاهزة بميزانيات متدرجة، بالإضافة إلى «أداة بناء الباقة خطوة بخطوة» التي تتيح لكِ اختيار كل قطعة وموديل حسب احتياج مطبخك.'
    },
    {
      q: 'ما هي سياسة الاستبدال في حال وجود أي عيب مصنعي؟',
      a: 'نضمن جميع منتجاتنا ضد أي كسر أثناء الشحن أو عيب مصنعي، ويتم استبدال القطعة المتضررة فوراً مجاناً عند التواصل معنا عبر واتساب مع رقم الطلبية.'
    }
  ],
  addressAr: 'المركز الرئيسي والمستودعات: طرابلس، لبنان — شحن يومي لكافة المحافظات',
  hoursAr: 'الإثنين – السبت: 9:00 صباحاً حتى 8:00 مساءً',
  instagramUrl: 'https://instagram.com/baytouka.lb',
  facebookUrl: 'https://facebook.com/baytouka.lb',
  tiktokUrl: '',
  seoTitle: 'BAYTOUKA | بيتك — المائدة اللبنانية لأواني المطبخ والضيافة بالجملة والمفرق',
  seoDescription: 'بيتك (BAYTOUKA) — صالة العرض اللبنانية لأطقم الطناجر، السفرة والسيراميك، حافظات الطعام والبهارات، وتجهيز العرائس والمحلات بأسعار الجملة والمفرق في طرابلس وكافة لبنان.'
};

export let LEBANON_REGIONS = [...DEFAULT_LEBANON_REGIONS];

/**
 * Arabic-aware normalization:
 * - Removes tashkeel/diacritics and tatweel
 * - Normalizes أ / إ / آ / ٱ -> ا
 * - Normalizes ة -> ه
 * - Normalizes ى -> ي
 * - Normalizes ؤ -> و and ئ -> ي
 * - Converts Arabic-Indic digits to Western digits
 */
export function normalizeArabic(input) {
  if (!input) return '';
  const arabicDigits = '٠١٢٣٤٥٦٧٨٩';
  return String(input)
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/[٠-٩]/g, d => String(arabicDigits.indexOf(d)))
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Highlights a normalized Arabic or Latin search match inside text
 */
export function highlightMatch(text, rawQuery) {
  if (!text) return '';
  const safeText = escapeHtml(String(text));
  const q = normalizeArabic(rawQuery);
  if (!q) return safeText;

  const rawStr = String(text);
  const normChars = [];
  const rawIndices = [];

  for (let i = 0; i < rawStr.length; i++) {
    const ch = rawStr[i];
    if (/[\u064B-\u065F\u0670\u0640]/.test(ch)) continue;
    const normCh = normalizeArabic(ch);
    if (normCh.length > 0) {
      for (let k = 0; k < normCh.length; k++) {
        normChars.push(normCh[k]);
        rawIndices.push(i);
      }
    }
  }

  const normFull = normChars.join('');
  const matchIdx = normFull.indexOf(q);
  if (matchIdx === -1) return safeText;

  const startRaw = rawIndices[matchIdx];
  const endRaw = (rawIndices[matchIdx + q.length - 1] ?? startRaw) + 1;

  return (
    escapeHtml(rawStr.slice(0, startRaw)) +
    '<mark class="suggestion-highlight">' +
    escapeHtml(rawStr.slice(startRaw, endRaw)) +
    '</mark>' +
    escapeHtml(rawStr.slice(endRaw))
  );
}

export function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Classifies products in "المطرات ومستلزمات المنزل" into sensible sub-categories
 */
export function classifyHomeSubCategory(product) {
  const text = normalizeArabic(`${product.nameAr || ''} ${product.descAr || ''} ${product.specs || ''}`);
  if (/(كهربا|شحن|اضاءه|مصباح|فانوس|اباجوره|شمعدان|مبخر|خلاط|غلايه|ماكينه|مكواه|كوي|سخان|مروحه|ساعه|الكتروني|بطاريه|ميزان|led|usb)/.test(text)) {
    return 'appliances';
  }
  if (/(سله|غسيل|حمام|ممسحه|دلو|صابون|منظم|رف|تنظيف|مكنسه|فرشاه|تواليت|نفايات|قمامه|مناشف|منشفه|علاقه|شماعه)/.test(text)) {
    return 'cleaning';
  }
  if (/(مطره|مطاره|ترمس|كوب|مج|قنينه|زجاجه|شرب|عصير|موزع عصير|حافظه مشروبات|اكواب|فنجان|ابريق)/.test(text)) {
    return 'bottles';
  }
  return 'decor';
}

export function getCategoryBySlug(slug) {
  return CATEGORY_META.find(c => c.slug === slug) || null;
}

export function getCategoryMeta(catId) {
  return CATEGORY_META.find(c => c.id === catId) || CATEGORY_META[0];
}

export function formatUSD(amount, currencySymbol = '$') {
  const num = Number(amount);
  if (isNaN(num)) return `${currencySymbol}0.00`;
  return `${currencySymbol}${num.toFixed(2)}`;
}

export function calcSavingsPercent(retail, wholesale) {
  const r = Number(retail) || 0;
  const w = Number(wholesale) || 0;
  if (r <= 0 || w >= r) return 0;
  return Math.round(((r - w) / r) * 100);
}

/**
 * Computes SHA-256 hex digest using Web Crypto API (used for owner-configured local passkey or order checksums;
 * no password or hash is ever hardcoded in the bundle).
 */
export async function sha256Hex(plainText) {
  const text = String(plainText ?? '');
  if (window.crypto && window.crypto.subtle) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
  return '';
}

export function debounce(fn, wait = 180) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}
