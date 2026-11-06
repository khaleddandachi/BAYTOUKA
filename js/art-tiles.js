// ============================================================================
// BAYTOUKA (بيتك) — Premium Generated Visual System ("Levantine Art Tiles")
// 36 Original Duotone/Line SVG Culinary & Home Illustrations + 8 Curated Themes
// Zero stock photos, zero external image URLs, 100% deterministic & crisp.
// ============================================================================

import { escapeHtml, normalizeArabic } from './utils.js';

export const TILE_THEMES = [
  {
    id: 'saffron',
    nameAr: 'زعفران كهرماني',
    bgGrad: 'linear-gradient(155deg, #2B1D0E 0%, #4A3014 52%, #6E471B 100%)',
    archBg: 'radial-gradient(circle at 50% 32%, rgba(242, 182, 68, 0.28), rgba(28, 19, 10, 0.92) 78%)',
    stroke: '#F6C96B',
    accentFill: 'rgba(229, 155, 35, 0.26)',
    badgeBg: 'rgba(23, 16, 9, 0.86)',
    badgeText: '#FBE3A8',
    border: 'rgba(246, 201, 107, 0.42)'
  },
  {
    id: 'terracotta',
    nameAr: 'فخار تيراكوتا',
    bgGrad: 'linear-gradient(155deg, #2D140E 0%, #562317 52%, #7D3320 100%)',
    archBg: 'radial-gradient(circle at 50% 32%, rgba(232, 118, 84, 0.28), rgba(32, 14, 10, 0.92) 78%)',
    stroke: '#F4B39E',
    accentFill: 'rgba(198, 83, 50, 0.28)',
    badgeBg: 'rgba(28, 11, 8, 0.86)',
    badgeText: '#FAD4C8',
    border: 'rgba(244, 179, 158, 0.40)'
  },
  {
    id: 'olive',
    nameAr: 'زيتوني مشرقي',
    bgGrad: 'linear-gradient(155deg, #151F16 0%, #243626 52%, #334D36 100%)',
    archBg: 'radial-gradient(circle at 50% 32%, rgba(169, 204, 156, 0.24), rgba(16, 24, 17, 0.92) 78%)',
    stroke: '#D4E6C3',
    accentFill: 'rgba(138, 176, 122, 0.25)',
    badgeBg: 'rgba(14, 21, 15, 0.86)',
    badgeText: '#E5F2D8',
    border: 'rgba(212, 230, 195, 0.38)'
  },
  {
    id: 'charcoal',
    nameAr: 'فحمي ومطروق نحاسي',
    bgGrad: 'linear-gradient(155deg, #121310 0%, #22241E 52%, #31342B 100%)',
    archBg: 'radial-gradient(circle at 50% 32%, rgba(212, 174, 110, 0.25), rgba(14, 15, 12, 0.94) 78%)',
    stroke: '#E4C389',
    accentFill: 'rgba(178, 134, 70, 0.25)',
    badgeBg: 'rgba(12, 13, 10, 0.88)',
    badgeText: '#F3DFB9',
    border: 'rgba(228, 195, 137, 0.40)'
  },
  {
    id: 'copper',
    nameAr: 'نحاسي دمشقي',
    bgGrad: 'linear-gradient(155deg, #261712 0%, #462A1F 52%, #683E2E 100%)',
    archBg: 'radial-gradient(circle at 50% 32%, rgba(226, 156, 118, 0.27), rgba(26, 15, 11, 0.92) 78%)',
    stroke: '#F0C3A5',
    accentFill: 'rgba(196, 122, 82, 0.26)',
    badgeBg: 'rgba(22, 13, 9, 0.86)',
    badgeText: '#F9DEC9',
    border: 'rgba(240, 195, 165, 0.40)'
  },
  {
    id: 'sand',
    nameAr: 'حجر جبيل الرملي',
    bgGrad: 'linear-gradient(155deg, #2A241B 0%, #43392B 52%, #5C4E3B 100%)',
    archBg: 'radial-gradient(circle at 50% 32%, rgba(235, 214, 178, 0.25), rgba(28, 24, 18, 0.92) 78%)',
    stroke: '#EFE0C4',
    accentFill: 'rgba(204, 179, 136, 0.24)',
    badgeBg: 'rgba(21, 18, 13, 0.86)',
    badgeText: '#F7EFE0',
    border: 'rgba(239, 224, 196, 0.38)'
  },
  {
    id: 'teal',
    nameAr: 'أزرق متوسطي عميق',
    bgGrad: 'linear-gradient(155deg, #102124 0%, #1B383D 52%, #264F57 100%)',
    archBg: 'radial-gradient(circle at 50% 32%, rgba(132, 204, 212, 0.25), rgba(12, 25, 28, 0.92) 78%)',
    stroke: '#BCE5EA',
    accentFill: 'rgba(88, 168, 178, 0.25)',
    badgeBg: 'rgba(10, 21, 24, 0.86)',
    badgeText: '#DCF3F6',
    border: 'rgba(188, 229, 234, 0.38)'
  },
  {
    id: 'plum',
    nameAr: 'رماني داكن',
    bgGrad: 'linear-gradient(155deg, #24131C 0%, #3E2030 52%, #572D44 100%)',
    archBg: 'radial-gradient(circle at 50% 32%, rgba(224, 158, 192, 0.25), rgba(24, 12, 19, 0.92) 78%)',
    stroke: '#EFC2D8',
    accentFill: 'rgba(186, 112, 150, 0.25)',
    badgeBg: 'rgba(20, 10, 15, 0.86)',
    badgeText: '#F8DFEC',
    border: 'rgba(239, 194, 216, 0.38)'
  }
];

// 36 Original Duotone + Fine-Line SVG Illustrations (viewBox 0 0 120 120)
export const ILLUSTRATION_PATHS = {
  'pot-royal-set': {
    labelAr: 'طقم طناجر ملكي',
    render: (stroke, fill) => `
      <ellipse cx="60" cy="84" rx="34" ry="8" fill="${fill}" />
      <rect x="30" y="50" width="60" height="32" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M26 52 H94" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M34 50 C34 38, 86 38, 86 50" fill="none" stroke="${stroke}" stroke-width="2"/>
      <circle cx="60" cy="37" r="4.5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M20 58 H30 M90 58 H100" stroke="${stroke}" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M48 28 Q50 21 47 16 M60 26 Q62 19 59 14 M72 28 Q74 21 71 16" fill="none" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" opacity="0.75"/>
      <path d="M38 66 H82" stroke="${stroke}" stroke-width="1.4" stroke-dasharray="3 3" opacity="0.65"/>
    `
  },
  'pot-casserole': {
    labelAr: 'طنجرة وكسرولة',
    render: (stroke, fill) => `
      <rect x="32" y="46" width="56" height="38" rx="9" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M28 46 H92" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M36 46 Q60 32 84 46" fill="none" stroke="${stroke}" stroke-width="2"/>
      <rect x="54" y="34" width="12" height="5" rx="2.5" stroke="${stroke}" stroke-width="2" fill="${fill}"/>
      <path d="M22 54 C26 50, 28 50, 32 54 M88 54 C92 50, 94 50, 98 54" fill="none" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <line x1="42" y1="64" x2="78" y2="64" stroke="${stroke}" stroke-width="1.6" opacity="0.7"/>
    `
  },
  'pan-skillet': {
    labelAr: 'مقلاة وشواية',
    render: (stroke, fill) => `
      <ellipse cx="52" cy="64" rx="28" ry="18" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <ellipse cx="52" cy="64" rx="21" ry="12" fill="none" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="4 3"/>
      <path d="M78 56 L104 42 L107 47 L80 62 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <circle cx="101" cy="46" r="1.6" fill="${stroke}"/>
      <path d="M42 58 L58 70 M46 54 L62 66 M38 62 L54 74" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" opacity="0.75"/>
    `
  },
  'pot-pressure': {
    labelAr: 'طنجرة ضغط',
    render: (stroke, fill) => `
      <rect x="33" y="46" width="54" height="40" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M30 46 H90" stroke="${stroke}" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M36 46 C40 36, 80 36, 84 46" fill="none" stroke="${stroke}" stroke-width="2"/>
      <rect x="56" y="29" width="8" height="10" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <circle cx="48" cy="36" r="2.5" stroke="${stroke}" stroke-width="1.8" fill="none"/>
      <path d="M18 50 H33 M87 50 H102" stroke="${stroke}" stroke-width="3" stroke-linecap="round"/>
      <path d="M60 24 V16 M55 20 L60 15 L65 20" fill="none" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round"/>
    `
  },
  'pot-glass': {
    labelAr: 'طنجرة زجاج حراري',
    render: (stroke, fill) => `
      <rect x="32" y="46" width="56" height="38" rx="12" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <ellipse cx="60" cy="46" rx="28" ry="6" fill="none" stroke="${stroke}" stroke-width="1.8"/>
      <circle cx="60" cy="35" r="5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M23 56 C27 52, 32 52, 32 60 M97 56 C93 52, 88 52, 88 60" fill="none" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M42 56 V74 M48 60 V72" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" opacity="0.7"/>
      <path d="M38 70 Q60 76 82 70" fill="none" stroke="${stroke}" stroke-width="1.5" opacity="0.6"/>
    `
  },
  'roaster-tray': {
    labelAr: 'صينية فرن وتحمير',
    render: (stroke, fill) => `
      <ellipse cx="60" cy="64" rx="36" ry="18" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <ellipse cx="60" cy="64" rx="28" ry="12" fill="none" stroke="${stroke}" stroke-width="1.6"/>
      <path d="M18 64 C20 58, 24 58, 24 64 M96 64 C96 58, 100 58, 102 64" fill="none" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M46 64 H74 M52 59 H68 M52 69 H68" stroke="${stroke}" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
    `
  },
  'dinner-set': {
    labelAr: 'طقم سفرة وصحون سيراميك',
    render: (stroke, fill) => `
      <circle cx="56" cy="60" r="28" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <circle cx="56" cy="60" r="20" fill="none" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="72" cy="70" r="16" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M62 70 A10 10 0 0 0 82 70 Z" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>
      <circle cx="56" cy="60" r="4" fill="${stroke}" opacity="0.7"/>
    `
  },
  'tea-set': {
    labelAr: 'طقم شاي وأباريق ضيافة',
    render: (stroke, fill) => `
      <path d="M42 46 H74 L70 80 H46 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M44 46 Q58 34 72 46" fill="none" stroke="${stroke}" stroke-width="2"/>
      <circle cx="58" cy="36" r="3.5" fill="${stroke}"/>
      <path d="M74 54 C86 50, 88 64, 72 70" fill="none" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M42 56 C30 52, 28 42, 22 44" fill="none" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M84 72 H98 L96 84 H86 Z" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>
      <path d="M22 84 H98" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>
    `
  },
  'coffee-finjan': {
    labelAr: 'فناجين قهوة ودلة ضيافة',
    render: (stroke, fill) => `
      <path d="M36 78 L42 44 H58 L64 78 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M40 44 Q50 30 60 44" fill="none" stroke="${stroke}" stroke-width="2"/>
      <path d="M42 52 L26 46" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M60 48 C70 48, 70 66, 62 68" fill="none" stroke="${stroke}" stroke-width="2"/>
      <path d="M74 66 H92 L89 80 H77 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <ellipse cx="83" cy="82" rx="11" ry="2.5" fill="${stroke}" opacity="0.7"/>
    `
  },
  'cutlery-set': {
    labelAr: 'طقم ملاعق وشوك وسكاكين',
    render: (stroke, fill) => `
      <ellipse cx="38" cy="40" rx="7" ry="11" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <line x1="38" y1="51" x2="38" y2="88" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M55 30 V44 M60 30 V44 M65 30 V44 M55 44 C55 50, 65 50, 65 44" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>
      <line x1="60" y1="49" x2="60" y2="88" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M80 30 C86 34, 86 52, 80 56 V88" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
    `
  },
  'wooden-dates-tray': {
    labelAr: 'تمرية ومكسرات خشب طبيعي',
    render: (stroke, fill) => `
      <rect x="20" y="74" width="80" height="7" rx="3.5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M26 74 A14 14 0 0 1 54 74 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M46 74 A14 14 0 0 1 74 74 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M66 74 A14 14 0 0 1 94 74 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <circle cx="40" cy="56" r="2.8" fill="${stroke}"/>
      <circle cx="60" cy="56" r="2.8" fill="${stroke}"/>
      <circle cx="80" cy="56" r="2.8" fill="${stroke}"/>
    `
  },
  'cake-stand-3tier': {
    labelAr: 'ستاند ضيافة وتقديم 3 طبقات',
    render: (stroke, fill) => `
      <line x1="60" y1="26" x2="60" y2="88" stroke="${stroke}" stroke-width="2.4"/>
      <circle cx="60" cy="23" r="4.5" fill="none" stroke="${stroke}" stroke-width="2"/>
      <ellipse cx="60" cy="42" rx="18" ry="4.5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <ellipse cx="60" cy="60" rx="26" ry="5.5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <ellipse cx="60" cy="78" rx="34" ry="6.5" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M48 88 H72" stroke="${stroke}" stroke-width="2.6" stroke-linecap="round"/>
    `
  },
  'bowl-deep': {
    labelAr: 'وعاء وجاط وزبدية تقديم',
    render: (stroke, fill) => `
      <path d="M24 50 H96 C94 74, 78 84, 60 84 C42 84, 26 74, 24 50 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <ellipse cx="60" cy="50" rx="36" ry="7" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M38 62 Q60 70 82 62" fill="none" stroke="${stroke}" stroke-width="1.6" opacity="0.75"/>
      <path d="M46 84 H74" stroke="${stroke}" stroke-width="2.6" stroke-linecap="round"/>
    `
  },
  'crystal-cup': {
    labelAr: 'أكواب وكاسات كريستال',
    render: (stroke, fill) => `
      <path d="M38 34 H82 L76 84 H44 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <ellipse cx="60" cy="34" rx="22" ry="5" fill="none" stroke="${stroke}" stroke-width="1.8"/>
      <line x1="50" y1="40" x2="52" y2="80" stroke="${stroke}" stroke-width="1.4" opacity="0.7"/>
      <line x1="60" y1="40" x2="60" y2="80" stroke="${stroke}" stroke-width="1.4" opacity="0.7"/>
      <line x1="70" y1="40" x2="68" y2="80" stroke="${stroke}" stroke-width="1.4" opacity="0.7"/>
    `
  },
  'pitcher-jug': {
    labelAr: 'إبريق وموزع عصير ومياه',
    render: (stroke, fill) => `
      <path d="M42 34 L38 84 H76 L72 34 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M38 34 H76 L80 28 H42 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M73 42 C88 42, 88 68, 75 70" fill="none" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <line x1="46" y1="54" x2="68" y2="54" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="3 3"/>
    `
  },
  'serving-tray': {
    labelAr: 'صينية ضيافة وتقديم فاخرة',
    render: (stroke, fill) => `
      <rect x="22" y="42" width="76" height="40" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <rect x="29" y="48" width="62" height="28" rx="6" fill="none" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="4 3"/>
      <path d="M16 56 V68 M104 56 V68" stroke="${stroke}" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="60" cy="62" r="5" fill="none" stroke="${stroke}" stroke-width="1.6"/>
    `
  },
  'spice-carousel': {
    labelAr: 'طقم علب بهارات وتوابل مع ستاند',
    render: (stroke, fill) => `
      <rect x="26" y="76" width="68" height="6" rx="3" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <rect x="30" y="44" width="16" height="32" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <rect x="52" y="44" width="16" height="32" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <rect x="74" y="44" width="16" height="32" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <rect x="32" y="38" width="12" height="6" rx="2" fill="${stroke}"/>
      <rect x="54" y="38" width="12" height="6" rx="2" fill="${stroke}"/>
      <rect x="76" y="38" width="12" height="6" rx="2" fill="${stroke}"/>
    `
  },
  'storage-canister': {
    labelAr: 'مرتبان وحافظة مؤونة وبقوليات',
    render: (stroke, fill) => `
      <rect x="36" y="38" width="48" height="48" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <rect x="34" y="30" width="52" height="8" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <rect x="46" y="54" width="28" height="16" rx="3" fill="none" stroke="${stroke}" stroke-width="1.6"/>
      <line x1="52" y1="62" x2="68" y2="62" stroke="${stroke}" stroke-width="1.6"/>
    `
  },
  'food-containers': {
    labelAr: 'طقم حافظات طعام محكمة الإغلاق',
    render: (stroke, fill) => `
      <rect x="26" y="60" width="68" height="24" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M24 60 H96" stroke="${stroke}" stroke-width="2.8" stroke-linecap="round"/>
      <rect x="34" y="38" width="52" height="20" rx="5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M32 38 H88" stroke="${stroke}" stroke-width="2.6" stroke-linecap="round"/>
    `
  },
  'oil-cruet': {
    labelAr: 'موزع وقنينة زيت وخل زجاجية',
    render: (stroke, fill) => `
      <path d="M44 86 L46 54 L54 38 H66 L74 54 L76 86 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M56 38 V26 H64 V38" fill="none" stroke="${stroke}" stroke-width="2"/>
      <path d="M64 28 L74 22" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M46 68 Q60 74 74 68" fill="none" stroke="${stroke}" stroke-width="1.6"/>
    `
  },
  'honey-jar': {
    labelAr: 'مرطبان عسل ومربى فاخر',
    render: (stroke, fill) => `
      <rect x="38" y="42" width="44" height="42" rx="14" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M38 56 H82 M38 70 H82" stroke="${stroke}" stroke-width="1.5" opacity="0.7"/>
      <rect x="44" y="34" width="32" height="8" rx="3" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <line x1="60" y1="22" x2="60" y2="34" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
    `
  },
  'chef-knife': {
    labelAr: 'سكين وساطور مطبخ احترافي',
    render: (stroke, fill) => `
      <path d="M26 78 L46 58 L88 26 C94 36, 82 54, 54 66 L46 58" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M24 80 L44 60 L50 66 L30 86 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <circle cx="33" cy="77" r="1.5" fill="${stroke}"/>
      <circle cx="40" cy="70" r="1.5" fill="${stroke}"/>
    `
  },
  'cutting-board': {
    labelAr: 'لوح تقطيع خشب وصحي',
    render: (stroke, fill) => `
      <rect x="32" y="28" width="56" height="64" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <rect x="48" y="35" width="24" height="6" rx="3" fill="none" stroke="${stroke}" stroke-width="1.8"/>
      <line x1="44" y1="54" x2="76" y2="54" stroke="${stroke}" stroke-width="1.5" opacity="0.65"/>
      <line x1="44" y1="66" x2="76" y2="66" stroke="${stroke}" stroke-width="1.5" opacity="0.65"/>
    `
  },
  'grater-slicer': {
    labelAr: 'مبشرة وقطاعة خضار ستانلس',
    render: (stroke, fill) => `
      <path d="M38 84 L46 38 H74 L82 84 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M48 38 V28 H72 V38" fill="none" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <circle cx="54" cy="52" r="2" fill="${stroke}"/><circle cx="66" cy="52" r="2" fill="${stroke}"/>
      <circle cx="52" cy="64" r="2" fill="${stroke}"/><circle cx="60" cy="64" r="2" fill="${stroke}"/><circle cx="68" cy="64" r="2" fill="${stroke}"/>
      <circle cx="54" cy="74" r="2" fill="${stroke}"/><circle cx="66" cy="74" r="2" fill="${stroke}"/>
    `
  },
  'colander-strainer': {
    labelAr: 'مصفاة مطبخ وشبك تصفية',
    render: (stroke, fill) => `
      <path d="M28 48 H92 C90 72, 76 82, 60 82 C44 82, 30 72, 28 48 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M18 48 H28 M92 48 H102" stroke="${stroke}" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="48" cy="60" r="1.8" fill="${stroke}"/><circle cx="60" cy="60" r="1.8" fill="${stroke}"/><circle cx="72" cy="60" r="1.8" fill="${stroke}"/>
      <circle cx="54" cy="70" r="1.8" fill="${stroke}"/><circle cx="66" cy="70" r="1.8" fill="${stroke}"/>
    `
  },
  'silicone-utensils': {
    labelAr: 'طقم ملاعق وتوزيع سيليكون وخشب',
    render: (stroke, fill) => `
      <rect x="44" y="60" width="32" height="28" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <line x1="52" y1="60" x2="42" y2="34" stroke="${stroke}" stroke-width="2.2"/>
      <rect x="34" y="24" width="14" height="12" rx="3" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <line x1="60" y1="60" x2="60" y2="32" stroke="${stroke}" stroke-width="2.2"/>
      <ellipse cx="60" cy="26" rx="6" ry="9" fill="none" stroke="${stroke}" stroke-width="1.8"/>
      <line x1="68" y1="60" x2="78" y2="34" stroke="${stroke}" stroke-width="2.2"/>
      <circle cx="80" cy="28" r="7" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    `
  },
  'bbq-skewers': {
    labelAr: 'شواية ومستلزمات باربكيو وشوي',
    render: (stroke, fill) => `
      <path d="M26 56 H94 C92 74, 78 82, 60 82 C42 82, 28 74, 26 56 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <line x1="42" y1="80" x2="34" y2="92" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="78" y1="80" x2="86" y2="92" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="30" y1="46" x2="90" y2="46" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>
      <circle cx="46" cy="46" r="4" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>
      <circle cx="60" cy="46" r="4" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>
      <circle cx="74" cy="46" r="4" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>
    `
  },
  'rolling-pin': {
    labelAr: 'شوبك وفرادة عجين ومخبوزات',
    render: (stroke, fill) => `
      <rect x="34" y="48" width="52" height="20" rx="6" transform="rotate(-24 60 58)" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <line x1="20" y1="76" x2="34" y2="69" stroke="${stroke}" stroke-width="3.2" stroke-linecap="round"/>
      <line x1="86" y1="47" x2="100" y2="40" stroke="${stroke}" stroke-width="3.2" stroke-linecap="round"/>
    `
  },
  'tongs-clamp': {
    labelAr: 'ملقط مطبخ وتقديم وسلطات',
    render: (stroke, fill) => `
      <path d="M60 28 L38 78 C34 84, 42 88, 46 82 L60 44 L74 82 C78 88, 86 84, 82 78 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <circle cx="60" cy="28" r="5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    `
  },
  'thermos-flask': {
    labelAr: 'ترمس ومطرة حرارية لحفظ الحرارة',
    render: (stroke, fill) => `
      <rect x="42" y="34" width="36" height="54" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M46 34 V24 H74 V34" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M78 46 C88 46, 88 68, 78 68" fill="none" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="42" y1="48" x2="78" y2="48" stroke="${stroke}" stroke-width="1.6"/>
      <line x1="42" y1="74" x2="78" y2="74" stroke="${stroke}" stroke-width="1.6"/>
    `
  },
  'water-bottle': {
    labelAr: 'مطرة مياه رياضية ومدرسية',
    render: (stroke, fill) => `
      <rect x="42" y="38" width="36" height="50" rx="11" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <rect x="48" y="26" width="24" height="12" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M72 30 C82 28, 84 38, 78 44" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>
      <line x1="50" y1="52" x2="58" y2="52" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="50" y1="62" x2="62" y2="62" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="50" y1="72" x2="58" y2="72" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round"/>
    `
  },
  'laundry-basket': {
    labelAr: 'سلة تنظيم وغسيل وتخزين',
    render: (stroke, fill) => `
      <path d="M28 40 H92 L84 86 H36 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M24 40 H96" stroke="${stroke}" stroke-width="2.8" stroke-linecap="round"/>
      <rect x="50" y="47" width="20" height="6" rx="3" fill="none" stroke="${stroke}" stroke-width="1.8"/>
      <line x1="42" y1="60" x2="78" y2="60" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="4 4"/>
      <line x1="44" y1="72" x2="76" y2="72" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="4 4"/>
    `
  },
  'cleaning-mop': {
    labelAr: 'ممسحة ومكنسة وأدوات تنظيف',
    render: (stroke, fill) => `
      <path d="M30 56 H74 L68 86 H36 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M30 56 C36 44, 68 44, 74 56" fill="none" stroke="${stroke}" stroke-width="1.8"/>
      <line x1="84" y1="24" x2="64" y2="78" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M52 78 H76 L80 88 H48 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    `
  },
  'bathroom-set': {
    labelAr: 'طقم إكسسوارات وموزع صابون حمام',
    render: (stroke, fill) => `
      <rect x="30" y="44" width="28" height="42" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M44 44 V32 H54" fill="none" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
      <rect x="66" y="54" width="24" height="32" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <line x1="73" y1="54" x2="70" y2="38" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>
      <line x1="82" y1="54" x2="86" y2="40" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>
    `
  },
  'wall-hooks': {
    labelAr: 'علاقات وخطافات ورفوف تنظيم',
    render: (stroke, fill) => `
      <rect x="24" y="44" width="72" height="12" rx="5" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M38 56 V70 C38 76, 46 76, 46 70" fill="none" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M60 56 V70 C60 76, 68 76, 68 70" fill="none" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M82 56 V70 C82 76, 90 76, 90 70" fill="none" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
    `
  },
  'lantern-mabkhara': {
    labelAr: 'مبخرة وفانوس وتحف ديكور شرقي',
    render: (stroke, fill) => `
      <circle cx="60" cy="24" r="4" fill="none" stroke="${stroke}" stroke-width="2"/>
      <path d="M44 42 L60 28 L76 42 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <rect x="42" y="42" width="36" height="34" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M52 58 A8 8 0 0 1 68 58 V76 H52 Z" fill="none" stroke="${stroke}" stroke-width="1.8"/>
      <path d="M36 84 H84 L78 76 H42 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    `
  }
};

/**
 * Deterministically maps any product or family to one of the 36 SVG illustrations
 * and one of the 8 curated Levantine color themes using Arabic keyword rules.
 */
export function resolveArtTileSpec(item = {}) {
  const rawName = `${item.nameAr || ''} ${item.baseNameAr || ''} ${item.descAr || ''} ${item.specs || ''}`;
  const norm = normalizeArabic(rawName);
  const cat = normalizeArabic(item.category || '');

  let iconKey = 'pot-royal-set';

  if (/(طنجره ضغط|ضغط)/.test(norm)) iconKey = 'pot-pressure';
  else if (/(طنجره زجاج|بوروسيليكات)/.test(norm)) iconKey = 'pot-glass';
  else if (/(مقلاه|مقلايه|شوايه مسطحه|كريب|تيفال|جرانيت مقلاه)/.test(norm)) iconKey = 'pan-skillet';
  else if (/(طقم طناجر|طناجر متكامل|طقم جرانيت|طقم ستانلس)/.test(norm)) iconKey = 'pot-royal-set';
  else if (/(طنجره|كسروله|حله)/.test(norm)) iconKey = 'pot-casserole';
  else if (/(صينيه فرن|بايركس|قالب كيك|قالب فرن|تحمير)/.test(norm)) iconKey = 'roaster-tray';
  else if (/(تمريه|مكسرات خشب|قلوب|مقسم)/.test(norm)) iconKey = 'wooden-dates-tray';
  else if (/(ستاند ضيافه|3 طبقات|طبقات|ستاند كيك|حامل حلويات)/.test(norm)) iconKey = 'cake-stand-3tier';
  else if (/(فنجان|قهوه|دله|ركوه)/.test(norm)) iconKey = 'coffee-finjan';
  else if (/(ابريق شاي|طقم شاي|غلايه|براد شاي)/.test(norm)) iconKey = 'tea-set';
  else if (/(ملاعق|شوك|سكاكين مائده|شوكه|ملعقه ضيافه)/.test(norm)) iconKey = 'cutlery-set';
  else if (/(صينيه تقديم|صواني|صينيه ضيافه|صينيه رخام)/.test(norm)) iconKey = 'serving-tray';
  else if (/(ابريق|موزع عصير|جك|قنينه زجاج|شربات)/.test(norm)) iconKey = 'pitcher-jug';
  else if (/(كوب|كاس|كاسات|مج|اكواب)/.test(norm)) iconKey = 'crystal-cup';
  else if (/(وعاء|جاط|زبديه|سلطه)/.test(norm)) iconKey = 'bowl-deep';
  else if (/(طقم سفره|صحن|صحون|اطباق|سيراميك)/.test(norm)) iconKey = 'dinner-set';
  else if (/(بهارات|توابل|ملح وفلفل)/.test(norm)) iconKey = 'spice-carousel';
  else if (/(زيت|خل|موزع زيت)/.test(norm)) iconKey = 'oil-cruet';
  else if (/(عسل|مربي|مرطبان)/.test(norm)) iconKey = 'honey-jar';
  else if (/(حافظه|حافظات|علب ثلاجه|لانش بوكس)/.test(norm)) iconKey = 'food-containers';
  else if (/(مرتبان|بقوليات|مؤونه|تخزين طعام)/.test(norm)) iconKey = 'storage-canister';
  else if (/(سكين|ساطور|مقص مطبخ)/.test(norm)) iconKey = 'chef-knife';
  else if (/(لوح تقطيع|قطاعه خشب)/.test(norm)) iconKey = 'cutting-board';
  else if (/(مبشره|بشاره|قطاعه خضار|فرامه|مهرسه)/.test(norm)) iconKey = 'grater-slicer';
  else if (/(مصفاه|شبك|تصفية|منخل)/.test(norm)) iconKey = 'colander-strainer';
  else if (/(سيليكون|مغرفه|خفاقه|كفكير|فرشاه دهن)/.test(norm)) iconKey = 'silicone-utensils';
  else if (/(شوي|باربكيو|اعواد شوي|اسياخ|منقل)/.test(norm)) iconKey = 'bbq-skewers';
  else if (/(شوبك|عجين|رق|مخبوزات)/.test(norm)) iconKey = 'rolling-pin';
  else if (/(ملقط|ملاقط|ماسك)/.test(norm)) iconKey = 'tongs-clamp';
  else if (/(ترمس|حافظه حراريه|قهوه وشاي حراري)/.test(norm)) iconKey = 'thermos-flask';
  else if (/(مطره|مطاره|زمزميه|مياه رياضيه|مدرسيه)/.test(norm)) iconKey = 'water-bottle';
  else if (/(مبخره|فانوس|شمعدان|مصباح|اضاءه|ديكور|تحفه|ساعه)/.test(norm)) iconKey = 'lantern-mabkhara';
  else if (/(حمام|صابون|تواليت|فوط|منشفه)/.test(norm)) iconKey = 'bathroom-set';
  else if (/(ممسحه|مكنسه|فرشاه تنظيف|دلو|مساحه|اسفنج|سلك جلي)/.test(norm)) iconKey = 'cleaning-mop';
  else if (/(علاقه|خطاف|تعليق|شماعه|رف)/.test(norm)) iconKey = 'wall-hooks';
  else if (/(سله|غسيل|منظم|تنظيم|نفايات|قمامه)/.test(norm)) iconKey = 'laundry-basket';
  else if (cat.includes('طناجر')) iconKey = 'pot-royal-set';
  else if (cat.includes('مائده')) iconKey = 'dinner-set';
  else if (cat.includes('بهارات') || cat.includes('حافظات')) iconKey = 'spice-carousel';
  else if (cat.includes('تحضير')) iconKey = 'chef-knife';
  else iconKey = 'water-bottle';

  // Deterministic hash on familyKey or baseName so the same family always gets the same rich theme
  const seedStr = String(item.familyKey || item.baseNameAr || item.nameAr || item.sku || iconKey);
  let hash = 2166136261;
  for (let i = 0; i < seedStr.length; i++) {
    hash ^= seedStr.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  const themeIdx = Math.abs(hash) % TILE_THEMES.length;
  const theme = TILE_THEMES[themeIdx];
  const illustration = ILLUSTRATION_PATHS[iconKey] || ILLUSTRATION_PATHS['pot-royal-set'];

  return {
    iconKey,
    theme,
    illustration
  };
}

/**
 * Checks whether an item has a genuine owner-uploaded custom photo (ignoring legacy assets/products/* paths)
 */
export function getValidOwnerUploadedPhoto(item = {}) {
  const url = String(item.customImageUrl || item.image_url || item.image || '').trim();
  if (!url) return null;
  if (url.startsWith('assets/products/') || url.startsWith('./assets/products/') || url.includes('legacy-assets')) {
    return null;
  }
  if (/^(https?:\/\/|data:image\/|blob:)/i.test(url)) {
    return url;
  }
  return null;
}

/**
 * Renders a complete Levantine Art Tile HTML string for cards, modals, cart items, bento tiles, and bridal sets
 */
export function renderArtTile(item = {}, options = {}) {
  const { iconKey, theme, illustration } = resolveArtTileSpec(item);
  const customPhoto = getValidOwnerUploadedPhoto(item);
  const sizeClass = options.size || 'md'; // 'sm' | 'md' | 'lg' | 'bento'
  const skuLabel = item.activeSku || item.sku || '';
  const boxLabel = item.activeBox || item.box || '';
  const showMeta = options.showMeta !== false;

  const svgMarkup = illustration.render(theme.stroke, theme.accentFill);

  return `
    <div
      class="art-tile art-tile-${sizeClass} art-theme-${theme.id}"
      style="background:${theme.bgGrad};--tile-stroke:${theme.stroke};--tile-border:${theme.border}"
      data-art-icon="${iconKey}"
      data-art-theme="${theme.id}"
    >
      <div class="art-tile-grain" aria-hidden="true"></div>
      <div class="art-tile-shine" aria-hidden="true"></div>

      <!-- Levantine Arch Inner Stage -->
      <div class="art-tile-arch" style="background:${theme.archBg};border-color:${theme.border}">
        <!-- Subtle Corner Geometric Star -->
        <span class="art-tile-ornament" aria-hidden="true" style="color:${theme.stroke}">✦</span>

        ${
          customPhoto
            ? `<img
                 src="${escapeHtml(customPhoto)}"
                 alt="${escapeHtml(item.baseNameAr || item.nameAr || illustration.labelAr)}"
                 class="art-tile-custom-img"
                 loading="lazy"
                 decoding="async"
                 onload="this.classList.add('is-loaded')"
                 onerror="this.remove()"
               />`
            : ''
        }

        <svg
          class="art-tile-svg"
          viewBox="0 0 120 120"
          role="img"
          aria-label="${escapeHtml(item.baseNameAr || item.nameAr || illustration.labelAr)}"
        >
          ${svgMarkup}
        </svg>
      </div>

      ${
        showMeta && (skuLabel || boxLabel)
          ? `<div class="art-tile-meta-bar" style="background:${theme.badgeBg};color:${theme.badgeText};border-color:${theme.border}">
               ${skuLabel ? `<span class="num-ltr">SKU: ${escapeHtml(skuLabel)}</span>` : ''}
               ${boxLabel && boxLabel !== '—' ? `<span class="num-ltr">Box: ${escapeHtml(boxLabel)}</span>` : ''}
             </div>`
          : ''
      }
    </div>
  `;
}

/**
 * Renders the Hero Creative Levantine SVG Composition (replacing the old photo collage)
 */
export function renderHeroArtComposition() {
  const heroItems = [
    {
      nameAr: 'طقم طناجر ملكي للعرائس',
      sku: '33B12',
      price: '$78.20',
      category: 'أطقم الطناجر والمقالي',
      slotClass: 'hero-art-center',
      depth: '0.12'
    },
    {
      nameAr: 'سفرة سيراميك ضيافة 24 قطعة',
      sku: 'PS1',
      price: '$21.15',
      category: 'أدوات المائدة والسيراميك',
      slotClass: 'hero-art-top-right',
      depth: '0.22'
    },
    {
      nameAr: 'طقم شاي وأباريق مذهبة',
      sku: '256',
      price: '$14.50',
      category: 'أدوات المائدة والسيراميك',
      slotClass: 'hero-art-mid-right',
      depth: '0.28'
    },
    {
      nameAr: 'تمرية خشب طبيعي 3 قلوب',
      sku: '35717-1',
      price: '$6.60',
      category: 'أدوات المائدة والسيراميك',
      slotClass: 'hero-art-top-left',
      depth: '0.18'
    },
    {
      nameAr: 'طقم علب بهارات مع ستاند',
      sku: '35717-8',
      price: '$5.10',
      category: 'حافظات الطعام والبهارات',
      slotClass: 'hero-art-mid-left',
      depth: '0.24'
    },
    {
      nameAr: 'ستاند ضيافة كريستال 3 طبقات',
      sku: '245',
      price: '$11.40',
      category: 'أدوات المائدة والسيراميك',
      slotClass: 'hero-art-bottom',
      depth: '0.30'
    }
  ];

  return `
    <div class="hero-atelier-composition" id="hero-collage-stage">
      <!-- Ambient Animated Glow & Brass Orbit Ring -->
      <div class="hero-atelier-halo" aria-hidden="true"></div>
      <svg class="hero-atelier-orbit-svg" viewBox="0 0 500 500" aria-hidden="true">
        <circle cx="250" cy="250" r="215" fill="none" stroke="rgba(178,134,70,0.28)" stroke-width="1.2" stroke-dasharray="6 8" />
        <path d="M90 250 A160 160 0 0 1 410 250" fill="none" stroke="rgba(198,125,15,0.35)" stroke-width="1.5" />
      </svg>

      ${heroItems
        .map(
          (h, idx) => `
          <div
            class="hero-art-card ${h.slotClass}"
            data-depth="${h.depth}"
            onclick="window.BAYTOUKA.quickSearchSku('${escapeHtml(h.sku)}')"
            role="button"
            tabindex="0"
            aria-label="استعراض ${escapeHtml(h.nameAr)} (${escapeHtml(h.sku)})"
          >
            ${renderArtTile(
              { nameAr: h.nameAr, category: h.category, sku: h.sku, familyKey: `hero-${idx}-${h.sku}` },
              { size: idx === 0 ? 'lg' : 'sm', showMeta: false }
            )}
            <div class="hero-art-caption">
              <span class="hero-art-title">${escapeHtml(h.nameAr)}</span>
              <strong class="num-ltr hero-art-meta">${escapeHtml(h.sku)} • ${escapeHtml(h.price)}</strong>
            </div>
          </div>
        `
        )
        .join('')}
    </div>
  `;
}

/**
 * Generates a branded SVG Open Graph / Social Share image (1200x630) without photos
 */
export function generateBrandedOgSvg({
  titleAr = 'بيتك • BAYTOUKA — المائدة اللبنانية',
  subtitleAr = 'أواني المطبخ، الضيافة، وتجهيز العرائس بالجملة والمفرق في لبنان',
  priceText = 'جملة ومفرق • توصيل لكافة لبنان',
  sku = 'BAYTOUKA-LB',
  iconKey = 'pot-royal-set'
} = {}) {
  const ill = ILLUSTRATION_PATHS[iconKey] || ILLUSTRATION_PATHS['pot-royal-set'];
  const svgIcon = ill.render('#F6C96B', 'rgba(229,155,35,0.25)');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#141611"/>
        <stop offset="55%" stop-color="#221A12"/>
        <stop offset="100%" stop-color="#382214"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect x="36" y="36" width="1128" height="558" rx="28" fill="none" stroke="#B28646" stroke-width="2" stroke-opacity="0.55"/>
    <path d="M120 490 V220 A140 140 0 0 1 400 220 V490 Z" fill="#1E1710" stroke="#F6C96B" stroke-width="2.5"/>
    <g transform="translate(140, 175) scale(2.0)">
      ${svgIcon}
    </g>
    <text x="1080" y="165" text-anchor="end" fill="#F6C96B" font-family="sans-serif" font-size="28" font-weight="700">BAYTOUKA • بيتك — لبنان</text>
    <text x="1080" y="265" text-anchor="end" fill="#F7F3EB" font-family="sans-serif" font-size="52" font-weight="800">${escapeHtml(titleAr.slice(0, 42))}</text>
    <text x="1080" y="335" text-anchor="end" fill="#D8CFC0" font-family="sans-serif" font-size="28">${escapeHtml(subtitleAr.slice(0, 65))}</text>
    <rect x="680" y="400" width="400" height="74" rx="37" fill="#B64624"/>
    <text x="880" y="447" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="30" font-weight="800">${escapeHtml(priceText)}</text>
    <text x="1080" y="535" text-anchor="end" fill="#B28646" font-family="monospace" font-size="22">Code: ${escapeHtml(sku)} | WhatsApp: +961 71 840 915</text>
  </svg>`;
}

export function generateBrandedOgDataUri(opts = {}) {
  const svg = generateBrandedOgSvg(opts);
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

