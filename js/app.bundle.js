(() => {
  // js/utils.js
  var CATEGORY_META = [
    {
      id: "\u0627\u0644\u0645\u0637\u0631\u0627\u062A \u0648\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u0632\u0644",
      slug: "home-and-bottles",
      shortAr: "\u0627\u0644\u0645\u0637\u0631\u0627\u062A \u0648\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u0632\u0644",
      subtitleAr: "\u0645\u0637\u0631\u0627\u062A \u062D\u0631\u0627\u0631\u064A\u0629\u060C \u062A\u0646\u0638\u064A\u0645 \u0627\u0644\u063A\u0633\u064A\u0644 \u0648\u0627\u0644\u062D\u0645\u0627\u0645\u060C \u0648\u0645\u0641\u0631\u0648\u0634\u0627\u062A \u0627\u0644\u0628\u064A\u062A \u0627\u0644\u0639\u0635\u0631\u064A",
      icon: "home",
      artIcon: "water-bottle",
      artTheme: "teal"
    },
    {
      id: "\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0648\u0627\u0644\u0633\u064A\u0631\u0627\u0645\u064A\u0643",
      slug: "tableware-and-ceramics",
      shortAr: "\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0648\u0627\u0644\u0633\u064A\u0631\u0627\u0645\u064A\u0643",
      subtitleAr: "\u0623\u0637\u0642\u0645 \u0633\u0641\u0631\u0629 \u0633\u064A\u0631\u0627\u0645\u064A\u0643\u060C \u062A\u0645\u0631\u064A\u0627\u062A \u062E\u0634\u0628 \u0637\u0628\u064A\u0639\u064A\u060C \u0635\u0648\u0627\u0646\u064A \u0648\u0641\u0646\u0627\u062C\u064A\u0646 \u0636\u064A\u0627\u0641\u0629",
      icon: "utensils",
      artIcon: "dinner-set",
      artTheme: "saffron"
    },
    {
      id: "\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u062A\u062D\u0636\u064A\u0631 \u0648\u0627\u0644\u0628\u0627\u0631\u0628\u0643\u064A\u0648",
      slug: "prep-and-bbq",
      shortAr: "\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u062A\u062D\u0636\u064A\u0631 \u0648\u0627\u0644\u0628\u0627\u0631\u0628\u0643\u064A\u0648",
      subtitleAr: "\u0633\u0643\u0627\u0643\u064A\u0646 \u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629\u060C \u0623\u0637\u0642\u0645 \u0633\u064A\u0644\u064A\u0643\u0648\u0646\u060C \u0645\u0635\u0627\u0641\u064A\u060C \u0648\u0634\u0648\u0627\u064A\u0627\u062A \u0628\u0627\u0631\u0628\u0643\u064A\u0648",
      icon: "flame",
      artIcon: "chef-knife",
      artTheme: "copper"
    },
    {
      id: "\u062D\u0627\u0641\u0638\u0627\u062A \u0627\u0644\u0637\u0639\u0627\u0645 \u0648\u0627\u0644\u0628\u0647\u0627\u0631\u0627\u062A",
      slug: "storage-and-spices",
      shortAr: "\u062D\u0627\u0641\u0638\u0627\u062A \u0627\u0644\u0637\u0639\u0627\u0645 \u0648\u0627\u0644\u0628\u0647\u0627\u0631\u0627\u062A",
      subtitleAr: "\u0639\u0644\u0628 \u0628\u0647\u0627\u0631\u0627\u062A \u0645\u0639 \u0633\u062A\u0627\u0646\u062F\u060C \u062D\u0627\u0641\u0638\u0627\u062A \u0628\u0642\u0648\u0644\u064A\u0627\u062A \u0645\u062D\u0643\u0645\u0629\u060C \u0648\u0639\u0631\u0628\u0627\u062A \u062A\u0646\u0638\u064A\u0645",
      icon: "package",
      artIcon: "spice-carousel",
      artTheme: "olive"
    },
    {
      id: "\u0623\u0637\u0642\u0645 \u0627\u0644\u0637\u0646\u0627\u062C\u0631 \u0648\u0627\u0644\u0645\u0642\u0627\u0644\u064A",
      slug: "cookware-and-pots",
      shortAr: "\u0623\u0637\u0642\u0645 \u0627\u0644\u0637\u0646\u0627\u062C\u0631 \u0648\u0627\u0644\u0645\u0642\u0627\u0644\u064A",
      subtitleAr: "\u0623\u0637\u0642\u0645 \u063A\u0631\u0627\u0646\u064A\u062A \u0648\u0633\u062A\u0627\u0646\u0644\u0633 \u0633\u062A\u064A\u0644 \u0645\u0644\u0643\u064A\u0629\u060C \u0637\u0646\u0627\u062C\u0631 \u0636\u063A\u0637\u060C \u0648\u0632\u062C\u0627\u062C \u062D\u0631\u0627\u0631\u064A",
      icon: "chef-hat",
      artIcon: "pot-royal-set",
      artTheme: "terracotta"
    }
  ];
  var HOME_SUBCATEGORIES = [
    { id: "all", labelAr: "\u0643\u0644 \u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u0632\u0644 \u0648\u0627\u0644\u0645\u0637\u0631\u0627\u062A" },
    { id: "bottles", labelAr: "\u0645\u0637\u0631\u0627\u062A \u0648\u062A\u0631\u0645\u0633 \u0648\u0623\u0643\u0648\u0627\u0628 \u062D\u0627\u0641\u0638\u0629" },
    { id: "cleaning", labelAr: "\u062A\u0646\u0638\u064A\u0645 \u0648\u063A\u0633\u064A\u0644 \u0648\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u062D\u0645\u0627\u0645" },
    { id: "appliances", labelAr: "\u0623\u062C\u0647\u0632\u0629 \u0635\u063A\u064A\u0631\u0629 \u0648\u0625\u0636\u0627\u0621\u0629 \u0648\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0627\u062A" },
    { id: "decor", labelAr: "\u0645\u0641\u0631\u0648\u0634\u0627\u062A \u0648\u062F\u064A\u0643\u0648\u0631 \u0648\u0636\u064A\u0627\u0641\u0629 \u0645\u0646\u0632\u0644\u064A\u0629" }
  ];
  var DEFAULT_LEBANON_REGIONS = [
    { id: "tripoli", nameAr: "\u0637\u0631\u0627\u0628\u0644\u0633 \u0648\u0627\u0644\u0634\u0645\u0627\u0644 (Tripoli & North)", cityAr: "\u0637\u0631\u0627\u0628\u0644\u0633", fee: 2.5, etaAr: "24 \u0633\u0627\u0639\u0629 (\u0645\u0631\u0643\u0632 \u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642)" },
    { id: "beirut", nameAr: "\u0628\u064A\u0631\u0648\u062A \u0627\u0644\u0643\u0628\u0631\u0649 (Beirut)", cityAr: "\u0628\u064A\u0631\u0648\u062A", fee: 3, etaAr: "24 \u2013 48 \u0633\u0627\u0639\u0629" },
    { id: "mount_lebanon", nameAr: "\u062C\u0628\u0644 \u0644\u0628\u0646\u0627\u0646 \u0648\u0627\u0644\u0645\u062A\u0646 \u0648\u0643\u0633\u0631\u0648\u0627\u0646 (Mount Lebanon)", cityAr: "\u062C\u0628\u0644 \u0644\u0628\u0646\u0627\u0646", fee: 3, etaAr: "24 \u2013 48 \u0633\u0627\u0639\u0629" },
    { id: "saida", nameAr: "\u0635\u064A\u062F\u0627 \u0648\u0627\u0644\u062C\u0646\u0648\u0628 (Saida & South)", cityAr: "\u0635\u064A\u062F\u0627", fee: 3.5, etaAr: "48 \u0633\u0627\u0639\u0629" },
    { id: "zahle", nameAr: "\u0632\u062D\u0644\u0629 \u0648\u0627\u0644\u0628\u0642\u0627\u0639 (Zahle & Bekaa)", cityAr: "\u0632\u062D\u0644\u0629", fee: 3.5, etaAr: "48 \u0633\u0627\u0639\u0629" },
    { id: "tyre_nabatieh", nameAr: "\u0635\u0648\u0631 \u0648\u0627\u0644\u0646\u0628\u0637\u064A\u0629 (Tyre & Nabatieh)", cityAr: "\u0635\u0648\u0631 \u0648\u0627\u0644\u0646\u0628\u0637\u064A\u0629", fee: 4, etaAr: "48 \u2013 72 \u0633\u0627\u0639\u0629" }
  ];
  var BRAND_COLOR_PRESETS = [
    {
      id: "levantine_saffron",
      nameAr: "\u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064A\u0629 (\u0632\u0639\u0641\u0631\u0627\u0646 \u0648\u062A\u064A\u0631\u0627\u0643\u0648\u062A\u0627)",
      primary: "#171914",
      accent: "#B64624",
      secondary: "#C67D0F",
      brass: "#B28646",
      canvasLight: "#F7F3EB"
    },
    {
      id: "royal_olive",
      nameAr: "\u0623\u062E\u0636\u0631 \u0632\u064A\u062A\u0648\u0646\u064A \u0645\u0634\u0631\u0642\u064A \u0648\u0630\u0647\u0628\u064A",
      primary: "#142016",
      accent: "#2D5A3C",
      secondary: "#B88928",
      brass: "#C49A45",
      canvasLight: "#F5F6F0"
    },
    {
      id: "damascene_copper",
      nameAr: "\u0646\u062D\u0627\u0633\u064A \u062F\u0645\u0634\u0642\u064A \u0639\u062A\u064A\u0642",
      primary: "#1E1512",
      accent: "#8C3B22",
      secondary: "#C86D3B",
      brass: "#B8835A",
      canvasLight: "#FAF4EE"
    },
    {
      id: "mediterranean_teal",
      nameAr: "\u0623\u0632\u0631\u0642 \u0645\u062A\u0648\u0633\u0637\u064A \u0648\u0630\u0647\u0628\u064A \u0634\u0627\u0645\u0628\u064A\u0646",
      primary: "#102024",
      accent: "#1C5D68",
      secondary: "#C68B2C",
      brass: "#B69454",
      canvasLight: "#F3F7F7"
    }
  ];
  var DEFAULT_STORE_SETTINGS = {
    storeNameAr: "\u0628\u064A\u062A\u0643",
    storeNameEn: "BAYTOUKA",
    taglineAr: "\u0635\u0627\u0644\u0629 \u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0648\u0627\u0644\u0645\u0637\u0628\u062E \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064A \u2022 \u062C\u0645\u0644\u0629 \u0648\u0645\u0641\u0631\u0642",
    logoUrl: "assets/baytouka-logo.png",
    whatsappPhone: "96171840915",
    whatsappDisplay: "+961 71 840 915",
    currencySymbol: "$",
    currencyCode: "USD",
    freeDeliveryThresholdRetail: 65,
    freeDeliveryThresholdWholesale: 220,
    wholesaleMoqHintAr: "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0637\u0644\u0628\u064A\u0627\u062A \u0627\u0644\u062C\u0645\u0644\u0629: 6 \u0642\u0637\u0639 \u0645\u062A\u0646\u0648\u0639\u0629 \u0623\u0648 \u0643\u0631\u062A\u0648\u0646\u0629 \u0643\u0627\u0645\u0644\u0629",
    quantityTierDiscountQty: 12,
    quantityTierDiscountPct: 5,
    defaultTheme: "light",
    colorPresetId: "levantine_saffron",
    countNewOrdersInRevenue: false,
    heroKickerAr: "\u062D\u0643\u0627\u064A\u0629 \u0627\u0644\u0636\u064A\u0627\u0641\u0629 \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064A\u0629 \u2022 \u0645\u0646 \u0637\u0631\u0627\u0628\u0644\u0633 \u0625\u0644\u0649 \u0643\u0644 \u0628\u064A\u062A \u0641\u064A \u0644\u0628\u0646\u0627\u0646",
    heroHeadlineAr: "\u0623\u0646\u0627\u0642\u0629 \u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064A\u0629 \u0648\u0641\u062E\u0627\u0645\u0629 \u0627\u0644\u0645\u0637\u0628\u062E \u0627\u0644\u0639\u0635\u0631\u064A \u0628\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u062C\u0645\u0644\u0629 \u0648\u0627\u0644\u0645\u0641\u0631\u0642",
    heroSubheadlineAr: "\u0635\u0627\u0644\u0629 \u0639\u0631\u0636 \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u062A\u0636\u0645 \u0645\u0626\u0627\u062A \u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0648\u0627\u0644\u0639\u0627\u0626\u0644\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0642\u0627\u0629 \u0645\u0646 \u0623\u0637\u0642\u0645 \u0627\u0644\u0637\u0646\u0627\u062C\u0631 \u0627\u0644\u0645\u0644\u0643\u064A\u0629\u060C \u0633\u064A\u0631\u0627\u0645\u064A\u0643 \u0627\u0644\u0636\u064A\u0627\u0641\u0629\u060C \u0623\u0648\u0627\u0646\u064A \u0627\u0644\u062E\u0634\u0628 \u0627\u0644\u0637\u0628\u064A\u0639\u064A\u060C \u0648\u062D\u0627\u0641\u0638\u0627\u062A \u0627\u0644\u0645\u0624\u0648\u0646\u0629 \u0648\u0627\u0644\u0628\u0647\u0627\u0631\u0627\u062A \u2014 \u0644\u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0628\u064A\u0648\u062A\u060C \u0627\u0644\u0639\u0631\u0627\u0626\u0633\u060C \u0648\u0627\u0644\u0645\u062D\u0644\u0627\u062A \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0641\u064A \u0643\u0644 \u0644\u0628\u0646\u0627\u0646.",
    heroPrimaryCtaAr: "\u062A\u0633\u0648\u0651\u0642 \u0627\u0644\u0643\u062A\u0627\u0644\u0648\u062C",
    heroSecondaryCtaAr: "\u0623\u0633\u0639\u0627\u0631 \u0648\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u062C\u0645\u0644\u0629",
    announcements: [
      "\u{1F69A} \u062A\u0648\u0635\u064A\u0644 \u0644\u0643\u0627\u0641\u0629 \u0627\u0644\u0623\u0631\u0627\u0636\u064A \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064A\u0629 \u0645\u0646 \u0637\u0631\u0627\u0628\u0644\u0633 \u0625\u0644\u0649 \u0628\u064A\u0631\u0648\u062A \u0648\u0627\u0644\u062C\u0646\u0648\u0628 \u0648\u0627\u0644\u0628\u0642\u0627\u0639",
      "\u{1F4E6} \u062E\u0635\u0648\u0645\u0627\u062A \u0641\u0648\u0631\u064A\u0629 \u0644\u0644\u0637\u0644\u0628\u064A\u0627\u062A \u0648\u0627\u0644\u0643\u0645\u064A\u0627\u062A \u0628\u0627\u0644\u062C\u0645\u0644\u0629 \u0644\u0644\u0645\u062D\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u0637\u0627\u0639\u0645",
      "\u{1F48D} \u0628\u0627\u0642\u0627\u062A \u0645\u0644\u0643\u064A\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0644\u062A\u062C\u0647\u064A\u0632 \u0645\u0637\u0628\u062E \u0627\u0644\u0639\u0631\u0648\u0633 \u0628\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F",
      "\u{1F4AC} \u0627\u0637\u0644\u0628 \u0645\u0628\u0627\u0634\u0631\u0629 \u0628\u0636\u063A\u0637\u0629 \u0632\u0631 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628 \u0648\u0627\u0644\u062F\u0641\u0639 \u0646\u0642\u062F\u0627\u064B \u0639\u0646\u062F \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645"
    ],
    trustBadges: [
      { icon: "truck", titleAr: "\u062A\u0648\u0635\u064A\u0644 \u0644\u0643\u0627\u0641\u0629 \u0644\u0628\u0646\u0627\u0646", descAr: "\u0634\u062D\u0646 \u064A\u0648\u0645\u064A \u0645\u0646 \u0637\u0631\u0627\u0628\u0644\u0633 \u0644\u0628\u064A\u0631\u0648\u062A \u0648\u0627\u0644\u062C\u0628\u0644 \u0648\u0627\u0644\u062C\u0646\u0648\u0628 \u0648\u0627\u0644\u0628\u0642\u0627\u0639" },
      { icon: "banknote", titleAr: "\u0627\u0644\u062F\u0641\u0639 \u0639\u0646\u062F \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645", descAr: "\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0637\u0644\u0628\u064A\u0629 \u0648\u0627\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0642\u0637\u0639 \u0642\u0628\u0644 \u0627\u0644\u062F\u0641\u0639" },
      { icon: "badge-percent", titleAr: "\u0623\u0633\u0639\u0627\u0631 \u062C\u0645\u0644\u0629 \u0645\u0628\u0627\u0634\u0631\u0629", descAr: "\u062A\u0633\u0639\u064A\u0631 \u0634\u0641\u0627\u0641 \u0644\u0644\u0645\u0641\u0631\u0642 \u0648\u0627\u0644\u062C\u0645\u0644\u0629 \u0645\u0639 \u062E\u0635\u0645 \u0625\u0636\u0627\u0641\u064A \u0644\u0644\u0643\u0645\u064A\u0627\u062A" },
      { icon: "message-circle", titleAr: "\u062F\u0639\u0645 \u0648\u0637\u0644\u0628 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628", descAr: "\u062A\u0623\u0643\u064A\u062F \u0641\u0648\u0631\u064A \u0644\u0644\u0637\u0644\u0628\u064A\u0627\u062A \u0648\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0639\u0631\u0627\u0626\u0633 \u0648\u0627\u0644\u0645\u062D\u0644\u0627\u062A" }
    ],
    collectionsOrder: [
      { id: "bestsellers", titleAr: "\u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0628\u064A\u0639\u0627\u064B \u0648\u0627\u0644\u062A\u0631\u0646\u062F", badgeFilter: "\u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0628\u064A\u0639\u0627\u064B|\u062A\u0631\u0646\u062F|\u0645\u0645\u064A\u0632", active: true },
      { id: "new_arrivals", titleAr: "\u0648\u0635\u0644 \u062D\u062F\u064A\u062B\u0627\u064B", badgeFilter: "\u062C\u062F\u064A\u062F|\u0645\u0648\u0633\u0645\u064A", active: true },
      { id: "special_offers", titleAr: "\u0639\u0631\u0648\u0636 \u062E\u0627\u0635\u0629 \u0648\u062A\u0635\u0641\u064A\u0627\u062A", badgeFilter: "\u0639\u0631\u0636 \u062E\u0627\u0635|\u0639\u0645\u0644\u064A", active: true },
      { id: "bridal_picks", titleAr: "\u0645\u062E\u062A\u0627\u0631\u0627\u062A \u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0639\u0631\u0627\u0626\u0633", badgeFilter: "\u062A\u062C\u0647\u064A\u0632 \u0639\u0631\u0627\u0626\u0633|\u0645\u0644\u0643\u064A|\u0641\u062E\u0645", active: true },
      { id: "wholesale_deals", titleAr: "\u0635\u0641\u0642\u0627\u062A \u0627\u0644\u062C\u0645\u0644\u0629 \u0644\u0644\u0645\u062D\u0644\u0627\u062A", badgeFilter: "\u0633\u0639\u0631 \u062C\u0645\u0644\u0629", active: true },
      { id: "gift_ideas", titleAr: "\u0623\u0641\u0643\u0627\u0631 \u0647\u062F\u0627\u064A\u0627 \u0644\u0644\u0628\u064A\u062A \u0627\u0644\u062C\u062F\u064A\u062F", badgeFilter: "\u0647\u062F\u064A\u0629 \u0645\u0645\u064A\u0632\u0629|\u0641\u062E\u0645", active: true }
    ],
    faqs: [
      {
        q: "\u0643\u0645 \u062A\u0633\u062A\u063A\u0631\u0642 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u062F\u0627\u062E\u0644 \u0644\u0628\u0646\u0627\u0646 \u0648\u0645\u0627 \u0647\u064A \u0627\u0644\u0643\u0644\u0641\u0629\u061F",
        a: "\u064A\u062A\u0645 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u062E\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629 \u0641\u064A \u0637\u0631\u0627\u0628\u0644\u0633 \u0648\u0627\u0644\u0634\u0645\u0627\u0644 ($2.50)\u060C \u0648\u062E\u0644\u0627\u0644 24 \u0625\u0644\u0649 48 \u0633\u0627\u0639\u0629 \u0641\u064A \u0628\u064A\u0631\u0648\u062A \u0648\u062C\u0628\u0644 \u0644\u0628\u0646\u0627\u0646 ($3.00)\u060C \u064848 \u0633\u0627\u0639\u0629 \u0641\u064A \u0635\u064A\u062F\u0627 \u0648\u0627\u0644\u062C\u0646\u0648\u0628 \u0648\u0632\u062D\u0644\u0629 \u0648\u0627\u0644\u0628\u0642\u0627\u0639 ($3.50 \u2013 $4.00). \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0645\u062C\u0627\u0646\u064A \u0644\u0644\u0637\u0644\u0628\u064A\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0645\u0639\u062A\u0645\u062F \u0641\u064A \u0627\u0644\u0633\u0644\u0629."
      },
      {
        q: "\u0643\u064A\u0641 \u064A\u062A\u0645 \u0627\u0644\u062F\u0641\u0639 \u0648\u0647\u0644 \u064A\u0645\u0643\u0646\u0646\u064A \u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0637\u0644\u0628\u064A\u0629 \u0639\u0646\u062F \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645\u061F",
        a: "\u0627\u0644\u062F\u0641\u0639 \u0646\u0642\u062F\u0627\u064B \u0639\u0646\u062F \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645 (Cash on Delivery) \u0628\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A \u0623\u0648 \u0645\u0627 \u064A\u0639\u0627\u062F\u0644\u0647 \u0628\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u064A\u0648\u0645\u064A. \u064A\u062D\u0642 \u0644\u0644\u0632\u0628\u0648\u0646 \u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0642\u0637\u0639 \u0648\u0627\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0633\u0644\u0627\u0645\u062A\u0647\u0627 \u0648\u0645\u0637\u0627\u0628\u0642\u062A\u0647\u0627 \u0644\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0642\u0628\u0644 \u0627\u0644\u062A\u0633\u062F\u064A\u062F."
      },
      {
        q: "\u0645\u0627 \u0647\u0648 \u0627\u0644\u0641\u0631\u0642 \u0628\u064A\u0646 \u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0628\u064A\u0639 \u0628\u0627\u0644\u0645\u0641\u0631\u0642 \u0648\u0646\u0638\u0627\u0645 \u0627\u0644\u062C\u0645\u0644\u0629\u061F",
        a: "\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062A\u0628\u062F\u064A\u0644 \u0628\u0636\u063A\u0637\u0629 \u0632\u0631 \u0641\u064A \u0623\u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0642\u0639 \u0628\u064A\u0646 \u062A\u0633\u0639\u064A\u0631 \u0627\u0644\u0645\u0641\u0631\u0642 (\u0644\u0644\u0628\u064A\u0648\u062A \u0648\u0627\u0644\u0639\u0627\u0626\u0644\u0627\u062A) \u0648\u062A\u0633\u0639\u064A\u0631 \u0627\u0644\u062C\u0645\u0644\u0629 (\u0644\u0623\u0635\u062D\u0627\u0628 \u0627\u0644\u0645\u062D\u0644\u0627\u062A\u060C \u0627\u0644\u0645\u0637\u0627\u0639\u0645\u060C \u0648\u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0639\u0631\u0627\u0626\u0633). \u0641\u064A \u0648\u0636\u0639 \u0627\u0644\u062C\u0645\u0644\u0629 \u062A\u0638\u0647\u0631 \u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0643\u0631\u0627\u062A\u064A\u0646 (Box) \u0648\u0623\u0643\u0648\u0627\u062F \u0627\u0644\u0645\u0648\u062F\u064A\u0644\u0627\u062A (SKU) \u0645\u0639 \u0646\u0633\u0628\u0629 \u0627\u0644\u062A\u0648\u0641\u064A\u0631 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629."
      },
      {
        q: "\u0647\u0644 \u064A\u0645\u0643\u0646 \u062A\u0639\u062F\u064A\u0644 \u0623\u0635\u0646\u0627\u0641 \u0628\u0627\u0642\u0627\u062A \u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0639\u0631\u0627\u0626\u0633 \u062D\u0633\u0628 \u0627\u0644\u0631\u063A\u0628\u0629\u061F",
        a: "\u0646\u0639\u0645 \u0628\u0627\u0644\u062A\u0623\u0643\u064A\u062F! \u0648\u0641\u0631\u0646\u0627 \u0641\u064A \u0642\u0633\u0645 \xAB\u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0639\u0631\u0627\u0626\u0633\xBB 5 \u0628\u0627\u0642\u0627\u062A \u062C\u0627\u0647\u0632\u0629 \u0628\u0645\u064A\u0632\u0627\u0646\u064A\u0627\u062A \u0645\u062A\u062F\u0631\u062C\u0629\u060C \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \xAB\u0623\u062F\u0627\u0629 \u0628\u0646\u0627\u0621 \u0627\u0644\u0628\u0627\u0642\u0629 \u062E\u0637\u0648\u0629 \u0628\u062E\u0637\u0648\u0629\xBB \u0627\u0644\u062A\u064A \u062A\u062A\u064A\u062D \u0644\u0643\u0650 \u0627\u062E\u062A\u064A\u0627\u0631 \u0643\u0644 \u0642\u0637\u0639\u0629 \u0648\u0645\u0648\u062F\u064A\u0644 \u062D\u0633\u0628 \u0627\u062D\u062A\u064A\u0627\u062C \u0645\u0637\u0628\u062E\u0643."
      },
      {
        q: "\u0645\u0627 \u0647\u064A \u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u0627\u0633\u062A\u0628\u062F\u0627\u0644 \u0641\u064A \u062D\u0627\u0644 \u0648\u062C\u0648\u062F \u0623\u064A \u0639\u064A\u0628 \u0645\u0635\u0646\u0639\u064A\u061F",
        a: "\u0646\u0636\u0645\u0646 \u062C\u0645\u064A\u0639 \u0645\u0646\u062A\u062C\u0627\u062A\u0646\u0627 \u0636\u062F \u0623\u064A \u0643\u0633\u0631 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0634\u062D\u0646 \u0623\u0648 \u0639\u064A\u0628 \u0645\u0635\u0646\u0639\u064A\u060C \u0648\u064A\u062A\u0645 \u0627\u0633\u062A\u0628\u062F\u0627\u0644 \u0627\u0644\u0642\u0637\u0639\u0629 \u0627\u0644\u0645\u062A\u0636\u0631\u0631\u0629 \u0641\u0648\u0631\u0627\u064B \u0645\u062C\u0627\u0646\u0627\u064B \u0639\u0646\u062F \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628 \u0645\u0639 \u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628\u064A\u0629."
      }
    ],
    addressAr: "\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0648\u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639\u0627\u062A: \u0637\u0631\u0627\u0628\u0644\u0633\u060C \u0644\u0628\u0646\u0627\u0646 \u2014 \u0634\u062D\u0646 \u064A\u0648\u0645\u064A \u0644\u0643\u0627\u0641\u0629 \u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0627\u062A",
    hoursAr: "\u0627\u0644\u0625\u062B\u0646\u064A\u0646 \u2013 \u0627\u0644\u0633\u0628\u062A: 9:00 \u0635\u0628\u0627\u062D\u0627\u064B \u062D\u062A\u0649 8:00 \u0645\u0633\u0627\u0621\u064B",
    instagramUrl: "https://instagram.com/baytouka.lb",
    facebookUrl: "https://facebook.com/baytouka.lb",
    tiktokUrl: "",
    seoTitle: "BAYTOUKA | \u0628\u064A\u062A\u0643 \u2014 \u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064A\u0629 \u0644\u0623\u0648\u0627\u0646\u064A \u0627\u0644\u0645\u0637\u0628\u062E \u0648\u0627\u0644\u0636\u064A\u0627\u0641\u0629 \u0628\u0627\u0644\u062C\u0645\u0644\u0629 \u0648\u0627\u0644\u0645\u0641\u0631\u0642",
    seoDescription: "\u0628\u064A\u062A\u0643 (BAYTOUKA) \u2014 \u0635\u0627\u0644\u0629 \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064A\u0629 \u0644\u0623\u0637\u0642\u0645 \u0627\u0644\u0637\u0646\u0627\u062C\u0631\u060C \u0627\u0644\u0633\u0641\u0631\u0629 \u0648\u0627\u0644\u0633\u064A\u0631\u0627\u0645\u064A\u0643\u060C \u062D\u0627\u0641\u0638\u0627\u062A \u0627\u0644\u0637\u0639\u0627\u0645 \u0648\u0627\u0644\u0628\u0647\u0627\u0631\u0627\u062A\u060C \u0648\u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0639\u0631\u0627\u0626\u0633 \u0648\u0627\u0644\u0645\u062D\u0644\u0627\u062A \u0628\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u062C\u0645\u0644\u0629 \u0648\u0627\u0644\u0645\u0641\u0631\u0642 \u0641\u064A \u0637\u0631\u0627\u0628\u0644\u0633 \u0648\u0643\u0627\u0641\u0629 \u0644\u0628\u0646\u0627\u0646."
  };
  var LEBANON_REGIONS = [...DEFAULT_LEBANON_REGIONS];
  function normalizeArabic(input) {
    if (!input) return "";
    const arabicDigits = "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669";
    return String(input).toLowerCase().replace(/[\u064B-\u065F\u0670\u0640]/g, "").replace(/[أإآٱ]/g, "\u0627").replace(/ة/g, "\u0647").replace(/ى/g, "\u064A").replace(/ؤ/g, "\u0648").replace(/ئ/g, "\u064A").replace(/[٠-٩]/g, (d) => String(arabicDigits.indexOf(d))).replace(/\s+/g, " ").trim();
  }
  function highlightMatch(text, rawQuery) {
    if (!text) return "";
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
    const normFull = normChars.join("");
    const matchIdx = normFull.indexOf(q);
    if (matchIdx === -1) return safeText;
    const startRaw = rawIndices[matchIdx];
    const endRaw = (rawIndices[matchIdx + q.length - 1] ?? startRaw) + 1;
    return escapeHtml(rawStr.slice(0, startRaw)) + '<mark class="suggestion-highlight">' + escapeHtml(rawStr.slice(startRaw, endRaw)) + "</mark>" + escapeHtml(rawStr.slice(endRaw));
  }
  function escapeHtml(str) {
    return String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function classifyHomeSubCategory(product) {
    const text = normalizeArabic(`${product.nameAr || ""} ${product.descAr || ""} ${product.specs || ""}`);
    if (/(كهربا|شحن|اضاءه|مصباح|فانوس|اباجوره|شمعدان|مبخر|خلاط|غلايه|ماكينه|مكواه|كوي|سخان|مروحه|ساعه|الكتروني|بطاريه|ميزان|led|usb)/.test(text)) {
      return "appliances";
    }
    if (/(سله|غسيل|حمام|ممسحه|دلو|صابون|منظم|رف|تنظيف|مكنسه|فرشاه|تواليت|نفايات|قمامه|مناشف|منشفه|علاقه|شماعه)/.test(text)) {
      return "cleaning";
    }
    if (/(مطره|مطاره|ترمس|كوب|مج|قنينه|زجاجه|شرب|عصير|موزع عصير|حافظه مشروبات|اكواب|فنجان|ابريق)/.test(text)) {
      return "bottles";
    }
    return "decor";
  }
  function getCategoryBySlug(slug) {
    return CATEGORY_META.find((c) => c.slug === slug) || null;
  }
  function calcSavingsPercent(retail, wholesale) {
    const r = Number(retail) || 0;
    const w = Number(wholesale) || 0;
    if (r <= 0 || w >= r) return 0;
    return Math.round((r - w) / r * 100);
  }
  async function sha256Hex(plainText) {
    const text = String(plainText ?? "");
    if (window.crypto && window.crypto.subtle) {
      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    }
    return "";
  }
  function debounce(fn, wait = 180) {
    let timer = null;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  // js/art-tiles.js
  var TILE_THEMES = [
    {
      id: "saffron",
      nameAr: "\u0632\u0639\u0641\u0631\u0627\u0646 \u0643\u0647\u0631\u0645\u0627\u0646\u064A",
      bgGrad: "linear-gradient(155deg, #2B1D0E 0%, #4A3014 52%, #6E471B 100%)",
      archBg: "radial-gradient(circle at 50% 32%, rgba(242, 182, 68, 0.28), rgba(28, 19, 10, 0.92) 78%)",
      stroke: "#F6C96B",
      accentFill: "rgba(229, 155, 35, 0.26)",
      badgeBg: "rgba(23, 16, 9, 0.86)",
      badgeText: "#FBE3A8",
      border: "rgba(246, 201, 107, 0.42)"
    },
    {
      id: "terracotta",
      nameAr: "\u0641\u062E\u0627\u0631 \u062A\u064A\u0631\u0627\u0643\u0648\u062A\u0627",
      bgGrad: "linear-gradient(155deg, #2D140E 0%, #562317 52%, #7D3320 100%)",
      archBg: "radial-gradient(circle at 50% 32%, rgba(232, 118, 84, 0.28), rgba(32, 14, 10, 0.92) 78%)",
      stroke: "#F4B39E",
      accentFill: "rgba(198, 83, 50, 0.28)",
      badgeBg: "rgba(28, 11, 8, 0.86)",
      badgeText: "#FAD4C8",
      border: "rgba(244, 179, 158, 0.40)"
    },
    {
      id: "olive",
      nameAr: "\u0632\u064A\u062A\u0648\u0646\u064A \u0645\u0634\u0631\u0642\u064A",
      bgGrad: "linear-gradient(155deg, #151F16 0%, #243626 52%, #334D36 100%)",
      archBg: "radial-gradient(circle at 50% 32%, rgba(169, 204, 156, 0.24), rgba(16, 24, 17, 0.92) 78%)",
      stroke: "#D4E6C3",
      accentFill: "rgba(138, 176, 122, 0.25)",
      badgeBg: "rgba(14, 21, 15, 0.86)",
      badgeText: "#E5F2D8",
      border: "rgba(212, 230, 195, 0.38)"
    },
    {
      id: "charcoal",
      nameAr: "\u0641\u062D\u0645\u064A \u0648\u0645\u0637\u0631\u0648\u0642 \u0646\u062D\u0627\u0633\u064A",
      bgGrad: "linear-gradient(155deg, #121310 0%, #22241E 52%, #31342B 100%)",
      archBg: "radial-gradient(circle at 50% 32%, rgba(212, 174, 110, 0.25), rgba(14, 15, 12, 0.94) 78%)",
      stroke: "#E4C389",
      accentFill: "rgba(178, 134, 70, 0.25)",
      badgeBg: "rgba(12, 13, 10, 0.88)",
      badgeText: "#F3DFB9",
      border: "rgba(228, 195, 137, 0.40)"
    },
    {
      id: "copper",
      nameAr: "\u0646\u062D\u0627\u0633\u064A \u062F\u0645\u0634\u0642\u064A",
      bgGrad: "linear-gradient(155deg, #261712 0%, #462A1F 52%, #683E2E 100%)",
      archBg: "radial-gradient(circle at 50% 32%, rgba(226, 156, 118, 0.27), rgba(26, 15, 11, 0.92) 78%)",
      stroke: "#F0C3A5",
      accentFill: "rgba(196, 122, 82, 0.26)",
      badgeBg: "rgba(22, 13, 9, 0.86)",
      badgeText: "#F9DEC9",
      border: "rgba(240, 195, 165, 0.40)"
    },
    {
      id: "sand",
      nameAr: "\u062D\u062C\u0631 \u062C\u0628\u064A\u0644 \u0627\u0644\u0631\u0645\u0644\u064A",
      bgGrad: "linear-gradient(155deg, #2A241B 0%, #43392B 52%, #5C4E3B 100%)",
      archBg: "radial-gradient(circle at 50% 32%, rgba(235, 214, 178, 0.25), rgba(28, 24, 18, 0.92) 78%)",
      stroke: "#EFE0C4",
      accentFill: "rgba(204, 179, 136, 0.24)",
      badgeBg: "rgba(21, 18, 13, 0.86)",
      badgeText: "#F7EFE0",
      border: "rgba(239, 224, 196, 0.38)"
    },
    {
      id: "teal",
      nameAr: "\u0623\u0632\u0631\u0642 \u0645\u062A\u0648\u0633\u0637\u064A \u0639\u0645\u064A\u0642",
      bgGrad: "linear-gradient(155deg, #102124 0%, #1B383D 52%, #264F57 100%)",
      archBg: "radial-gradient(circle at 50% 32%, rgba(132, 204, 212, 0.25), rgba(12, 25, 28, 0.92) 78%)",
      stroke: "#BCE5EA",
      accentFill: "rgba(88, 168, 178, 0.25)",
      badgeBg: "rgba(10, 21, 24, 0.86)",
      badgeText: "#DCF3F6",
      border: "rgba(188, 229, 234, 0.38)"
    },
    {
      id: "plum",
      nameAr: "\u0631\u0645\u0627\u0646\u064A \u062F\u0627\u0643\u0646",
      bgGrad: "linear-gradient(155deg, #24131C 0%, #3E2030 52%, #572D44 100%)",
      archBg: "radial-gradient(circle at 50% 32%, rgba(224, 158, 192, 0.25), rgba(24, 12, 19, 0.92) 78%)",
      stroke: "#EFC2D8",
      accentFill: "rgba(186, 112, 150, 0.25)",
      badgeBg: "rgba(20, 10, 15, 0.86)",
      badgeText: "#F8DFEC",
      border: "rgba(239, 194, 216, 0.38)"
    }
  ];
  var ILLUSTRATION_PATHS = {
    "pot-royal-set": {
      labelAr: "\u0637\u0642\u0645 \u0637\u0646\u0627\u062C\u0631 \u0645\u0644\u0643\u064A",
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
    "pot-casserole": {
      labelAr: "\u0637\u0646\u062C\u0631\u0629 \u0648\u0643\u0633\u0631\u0648\u0644\u0629",
      render: (stroke, fill) => `
      <rect x="32" y="46" width="56" height="38" rx="9" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M28 46 H92" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M36 46 Q60 32 84 46" fill="none" stroke="${stroke}" stroke-width="2"/>
      <rect x="54" y="34" width="12" height="5" rx="2.5" stroke="${stroke}" stroke-width="2" fill="${fill}"/>
      <path d="M22 54 C26 50, 28 50, 32 54 M88 54 C92 50, 94 50, 98 54" fill="none" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <line x1="42" y1="64" x2="78" y2="64" stroke="${stroke}" stroke-width="1.6" opacity="0.7"/>
    `
    },
    "pan-skillet": {
      labelAr: "\u0645\u0642\u0644\u0627\u0629 \u0648\u0634\u0648\u0627\u064A\u0629",
      render: (stroke, fill) => `
      <ellipse cx="52" cy="64" rx="28" ry="18" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <ellipse cx="52" cy="64" rx="21" ry="12" fill="none" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="4 3"/>
      <path d="M78 56 L104 42 L107 47 L80 62 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <circle cx="101" cy="46" r="1.6" fill="${stroke}"/>
      <path d="M42 58 L58 70 M46 54 L62 66 M38 62 L54 74" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" opacity="0.75"/>
    `
    },
    "pot-pressure": {
      labelAr: "\u0637\u0646\u062C\u0631\u0629 \u0636\u063A\u0637",
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
    "pot-glass": {
      labelAr: "\u0637\u0646\u062C\u0631\u0629 \u0632\u062C\u0627\u062C \u062D\u0631\u0627\u0631\u064A",
      render: (stroke, fill) => `
      <rect x="32" y="46" width="56" height="38" rx="12" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <ellipse cx="60" cy="46" rx="28" ry="6" fill="none" stroke="${stroke}" stroke-width="1.8"/>
      <circle cx="60" cy="35" r="5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M23 56 C27 52, 32 52, 32 60 M97 56 C93 52, 88 52, 88 60" fill="none" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M42 56 V74 M48 60 V72" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" opacity="0.7"/>
      <path d="M38 70 Q60 76 82 70" fill="none" stroke="${stroke}" stroke-width="1.5" opacity="0.6"/>
    `
    },
    "roaster-tray": {
      labelAr: "\u0635\u064A\u0646\u064A\u0629 \u0641\u0631\u0646 \u0648\u062A\u062D\u0645\u064A\u0631",
      render: (stroke, fill) => `
      <ellipse cx="60" cy="64" rx="36" ry="18" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <ellipse cx="60" cy="64" rx="28" ry="12" fill="none" stroke="${stroke}" stroke-width="1.6"/>
      <path d="M18 64 C20 58, 24 58, 24 64 M96 64 C96 58, 100 58, 102 64" fill="none" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M46 64 H74 M52 59 H68 M52 69 H68" stroke="${stroke}" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
    `
    },
    "dinner-set": {
      labelAr: "\u0637\u0642\u0645 \u0633\u0641\u0631\u0629 \u0648\u0635\u062D\u0648\u0646 \u0633\u064A\u0631\u0627\u0645\u064A\u0643",
      render: (stroke, fill) => `
      <circle cx="56" cy="60" r="28" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <circle cx="56" cy="60" r="20" fill="none" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="72" cy="70" r="16" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M62 70 A10 10 0 0 0 82 70 Z" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>
      <circle cx="56" cy="60" r="4" fill="${stroke}" opacity="0.7"/>
    `
    },
    "tea-set": {
      labelAr: "\u0637\u0642\u0645 \u0634\u0627\u064A \u0648\u0623\u0628\u0627\u0631\u064A\u0642 \u0636\u064A\u0627\u0641\u0629",
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
    "coffee-finjan": {
      labelAr: "\u0641\u0646\u0627\u062C\u064A\u0646 \u0642\u0647\u0648\u0629 \u0648\u062F\u0644\u0629 \u0636\u064A\u0627\u0641\u0629",
      render: (stroke, fill) => `
      <path d="M36 78 L42 44 H58 L64 78 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M40 44 Q50 30 60 44" fill="none" stroke="${stroke}" stroke-width="2"/>
      <path d="M42 52 L26 46" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M60 48 C70 48, 70 66, 62 68" fill="none" stroke="${stroke}" stroke-width="2"/>
      <path d="M74 66 H92 L89 80 H77 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <ellipse cx="83" cy="82" rx="11" ry="2.5" fill="${stroke}" opacity="0.7"/>
    `
    },
    "cutlery-set": {
      labelAr: "\u0637\u0642\u0645 \u0645\u0644\u0627\u0639\u0642 \u0648\u0634\u0648\u0643 \u0648\u0633\u0643\u0627\u0643\u064A\u0646",
      render: (stroke, fill) => `
      <ellipse cx="38" cy="40" rx="7" ry="11" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <line x1="38" y1="51" x2="38" y2="88" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M55 30 V44 M60 30 V44 M65 30 V44 M55 44 C55 50, 65 50, 65 44" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>
      <line x1="60" y1="49" x2="60" y2="88" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M80 30 C86 34, 86 52, 80 56 V88" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
    `
    },
    "wooden-dates-tray": {
      labelAr: "\u062A\u0645\u0631\u064A\u0629 \u0648\u0645\u0643\u0633\u0631\u0627\u062A \u062E\u0634\u0628 \u0637\u0628\u064A\u0639\u064A",
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
    "cake-stand-3tier": {
      labelAr: "\u0633\u062A\u0627\u0646\u062F \u0636\u064A\u0627\u0641\u0629 \u0648\u062A\u0642\u062F\u064A\u0645 3 \u0637\u0628\u0642\u0627\u062A",
      render: (stroke, fill) => `
      <line x1="60" y1="26" x2="60" y2="88" stroke="${stroke}" stroke-width="2.4"/>
      <circle cx="60" cy="23" r="4.5" fill="none" stroke="${stroke}" stroke-width="2"/>
      <ellipse cx="60" cy="42" rx="18" ry="4.5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <ellipse cx="60" cy="60" rx="26" ry="5.5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <ellipse cx="60" cy="78" rx="34" ry="6.5" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M48 88 H72" stroke="${stroke}" stroke-width="2.6" stroke-linecap="round"/>
    `
    },
    "bowl-deep": {
      labelAr: "\u0648\u0639\u0627\u0621 \u0648\u062C\u0627\u0637 \u0648\u0632\u0628\u062F\u064A\u0629 \u062A\u0642\u062F\u064A\u0645",
      render: (stroke, fill) => `
      <path d="M24 50 H96 C94 74, 78 84, 60 84 C42 84, 26 74, 24 50 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <ellipse cx="60" cy="50" rx="36" ry="7" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M38 62 Q60 70 82 62" fill="none" stroke="${stroke}" stroke-width="1.6" opacity="0.75"/>
      <path d="M46 84 H74" stroke="${stroke}" stroke-width="2.6" stroke-linecap="round"/>
    `
    },
    "crystal-cup": {
      labelAr: "\u0623\u0643\u0648\u0627\u0628 \u0648\u0643\u0627\u0633\u0627\u062A \u0643\u0631\u064A\u0633\u062A\u0627\u0644",
      render: (stroke, fill) => `
      <path d="M38 34 H82 L76 84 H44 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <ellipse cx="60" cy="34" rx="22" ry="5" fill="none" stroke="${stroke}" stroke-width="1.8"/>
      <line x1="50" y1="40" x2="52" y2="80" stroke="${stroke}" stroke-width="1.4" opacity="0.7"/>
      <line x1="60" y1="40" x2="60" y2="80" stroke="${stroke}" stroke-width="1.4" opacity="0.7"/>
      <line x1="70" y1="40" x2="68" y2="80" stroke="${stroke}" stroke-width="1.4" opacity="0.7"/>
    `
    },
    "pitcher-jug": {
      labelAr: "\u0625\u0628\u0631\u064A\u0642 \u0648\u0645\u0648\u0632\u0639 \u0639\u0635\u064A\u0631 \u0648\u0645\u064A\u0627\u0647",
      render: (stroke, fill) => `
      <path d="M42 34 L38 84 H76 L72 34 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M38 34 H76 L80 28 H42 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M73 42 C88 42, 88 68, 75 70" fill="none" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <line x1="46" y1="54" x2="68" y2="54" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="3 3"/>
    `
    },
    "serving-tray": {
      labelAr: "\u0635\u064A\u0646\u064A\u0629 \u0636\u064A\u0627\u0641\u0629 \u0648\u062A\u0642\u062F\u064A\u0645 \u0641\u0627\u062E\u0631\u0629",
      render: (stroke, fill) => `
      <rect x="22" y="42" width="76" height="40" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <rect x="29" y="48" width="62" height="28" rx="6" fill="none" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="4 3"/>
      <path d="M16 56 V68 M104 56 V68" stroke="${stroke}" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="60" cy="62" r="5" fill="none" stroke="${stroke}" stroke-width="1.6"/>
    `
    },
    "spice-carousel": {
      labelAr: "\u0637\u0642\u0645 \u0639\u0644\u0628 \u0628\u0647\u0627\u0631\u0627\u062A \u0648\u062A\u0648\u0627\u0628\u0644 \u0645\u0639 \u0633\u062A\u0627\u0646\u062F",
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
    "storage-canister": {
      labelAr: "\u0645\u0631\u062A\u0628\u0627\u0646 \u0648\u062D\u0627\u0641\u0638\u0629 \u0645\u0624\u0648\u0646\u0629 \u0648\u0628\u0642\u0648\u0644\u064A\u0627\u062A",
      render: (stroke, fill) => `
      <rect x="36" y="38" width="48" height="48" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <rect x="34" y="30" width="52" height="8" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <rect x="46" y="54" width="28" height="16" rx="3" fill="none" stroke="${stroke}" stroke-width="1.6"/>
      <line x1="52" y1="62" x2="68" y2="62" stroke="${stroke}" stroke-width="1.6"/>
    `
    },
    "food-containers": {
      labelAr: "\u0637\u0642\u0645 \u062D\u0627\u0641\u0638\u0627\u062A \u0637\u0639\u0627\u0645 \u0645\u062D\u0643\u0645\u0629 \u0627\u0644\u0625\u063A\u0644\u0627\u0642",
      render: (stroke, fill) => `
      <rect x="26" y="60" width="68" height="24" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M24 60 H96" stroke="${stroke}" stroke-width="2.8" stroke-linecap="round"/>
      <rect x="34" y="38" width="52" height="20" rx="5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M32 38 H88" stroke="${stroke}" stroke-width="2.6" stroke-linecap="round"/>
    `
    },
    "oil-cruet": {
      labelAr: "\u0645\u0648\u0632\u0639 \u0648\u0642\u0646\u064A\u0646\u0629 \u0632\u064A\u062A \u0648\u062E\u0644 \u0632\u062C\u0627\u062C\u064A\u0629",
      render: (stroke, fill) => `
      <path d="M44 86 L46 54 L54 38 H66 L74 54 L76 86 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M56 38 V26 H64 V38" fill="none" stroke="${stroke}" stroke-width="2"/>
      <path d="M64 28 L74 22" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M46 68 Q60 74 74 68" fill="none" stroke="${stroke}" stroke-width="1.6"/>
    `
    },
    "honey-jar": {
      labelAr: "\u0645\u0631\u0637\u0628\u0627\u0646 \u0639\u0633\u0644 \u0648\u0645\u0631\u0628\u0649 \u0641\u0627\u062E\u0631",
      render: (stroke, fill) => `
      <rect x="38" y="42" width="44" height="42" rx="14" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M38 56 H82 M38 70 H82" stroke="${stroke}" stroke-width="1.5" opacity="0.7"/>
      <rect x="44" y="34" width="32" height="8" rx="3" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <line x1="60" y1="22" x2="60" y2="34" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
    `
    },
    "chef-knife": {
      labelAr: "\u0633\u0643\u064A\u0646 \u0648\u0633\u0627\u0637\u0648\u0631 \u0645\u0637\u0628\u062E \u0627\u062D\u062A\u0631\u0627\u0641\u064A",
      render: (stroke, fill) => `
      <path d="M26 78 L46 58 L88 26 C94 36, 82 54, 54 66 L46 58" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M24 80 L44 60 L50 66 L30 86 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <circle cx="33" cy="77" r="1.5" fill="${stroke}"/>
      <circle cx="40" cy="70" r="1.5" fill="${stroke}"/>
    `
    },
    "cutting-board": {
      labelAr: "\u0644\u0648\u062D \u062A\u0642\u0637\u064A\u0639 \u062E\u0634\u0628 \u0648\u0635\u062D\u064A",
      render: (stroke, fill) => `
      <rect x="32" y="28" width="56" height="64" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <rect x="48" y="35" width="24" height="6" rx="3" fill="none" stroke="${stroke}" stroke-width="1.8"/>
      <line x1="44" y1="54" x2="76" y2="54" stroke="${stroke}" stroke-width="1.5" opacity="0.65"/>
      <line x1="44" y1="66" x2="76" y2="66" stroke="${stroke}" stroke-width="1.5" opacity="0.65"/>
    `
    },
    "grater-slicer": {
      labelAr: "\u0645\u0628\u0634\u0631\u0629 \u0648\u0642\u0637\u0627\u0639\u0629 \u062E\u0636\u0627\u0631 \u0633\u062A\u0627\u0646\u0644\u0633",
      render: (stroke, fill) => `
      <path d="M38 84 L46 38 H74 L82 84 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M48 38 V28 H72 V38" fill="none" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <circle cx="54" cy="52" r="2" fill="${stroke}"/><circle cx="66" cy="52" r="2" fill="${stroke}"/>
      <circle cx="52" cy="64" r="2" fill="${stroke}"/><circle cx="60" cy="64" r="2" fill="${stroke}"/><circle cx="68" cy="64" r="2" fill="${stroke}"/>
      <circle cx="54" cy="74" r="2" fill="${stroke}"/><circle cx="66" cy="74" r="2" fill="${stroke}"/>
    `
    },
    "colander-strainer": {
      labelAr: "\u0645\u0635\u0641\u0627\u0629 \u0645\u0637\u0628\u062E \u0648\u0634\u0628\u0643 \u062A\u0635\u0641\u064A\u0629",
      render: (stroke, fill) => `
      <path d="M28 48 H92 C90 72, 76 82, 60 82 C44 82, 30 72, 28 48 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M18 48 H28 M92 48 H102" stroke="${stroke}" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="48" cy="60" r="1.8" fill="${stroke}"/><circle cx="60" cy="60" r="1.8" fill="${stroke}"/><circle cx="72" cy="60" r="1.8" fill="${stroke}"/>
      <circle cx="54" cy="70" r="1.8" fill="${stroke}"/><circle cx="66" cy="70" r="1.8" fill="${stroke}"/>
    `
    },
    "silicone-utensils": {
      labelAr: "\u0637\u0642\u0645 \u0645\u0644\u0627\u0639\u0642 \u0648\u062A\u0648\u0632\u064A\u0639 \u0633\u064A\u0644\u064A\u0643\u0648\u0646 \u0648\u062E\u0634\u0628",
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
    "bbq-skewers": {
      labelAr: "\u0634\u0648\u0627\u064A\u0629 \u0648\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u0628\u0627\u0631\u0628\u0643\u064A\u0648 \u0648\u0634\u0648\u064A",
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
    "rolling-pin": {
      labelAr: "\u0634\u0648\u0628\u0643 \u0648\u0641\u0631\u0627\u062F\u0629 \u0639\u062C\u064A\u0646 \u0648\u0645\u062E\u0628\u0648\u0632\u0627\u062A",
      render: (stroke, fill) => `
      <rect x="34" y="48" width="52" height="20" rx="6" transform="rotate(-24 60 58)" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <line x1="20" y1="76" x2="34" y2="69" stroke="${stroke}" stroke-width="3.2" stroke-linecap="round"/>
      <line x1="86" y1="47" x2="100" y2="40" stroke="${stroke}" stroke-width="3.2" stroke-linecap="round"/>
    `
    },
    "tongs-clamp": {
      labelAr: "\u0645\u0644\u0642\u0637 \u0645\u0637\u0628\u062E \u0648\u062A\u0642\u062F\u064A\u0645 \u0648\u0633\u0644\u0637\u0627\u062A",
      render: (stroke, fill) => `
      <path d="M60 28 L38 78 C34 84, 42 88, 46 82 L60 44 L74 82 C78 88, 86 84, 82 78 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <circle cx="60" cy="28" r="5" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    `
    },
    "thermos-flask": {
      labelAr: "\u062A\u0631\u0645\u0633 \u0648\u0645\u0637\u0631\u0629 \u062D\u0631\u0627\u0631\u064A\u0629 \u0644\u062D\u0641\u0638 \u0627\u0644\u062D\u0631\u0627\u0631\u0629",
      render: (stroke, fill) => `
      <rect x="42" y="34" width="36" height="54" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M46 34 V24 H74 V34" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M78 46 C88 46, 88 68, 78 68" fill="none" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="42" y1="48" x2="78" y2="48" stroke="${stroke}" stroke-width="1.6"/>
      <line x1="42" y1="74" x2="78" y2="74" stroke="${stroke}" stroke-width="1.6"/>
    `
    },
    "water-bottle": {
      labelAr: "\u0645\u0637\u0631\u0629 \u0645\u064A\u0627\u0647 \u0631\u064A\u0627\u0636\u064A\u0629 \u0648\u0645\u062F\u0631\u0633\u064A\u0629",
      render: (stroke, fill) => `
      <rect x="42" y="38" width="36" height="50" rx="11" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <rect x="48" y="26" width="24" height="12" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <path d="M72 30 C82 28, 84 38, 78 44" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>
      <line x1="50" y1="52" x2="58" y2="52" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="50" y1="62" x2="62" y2="62" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="50" y1="72" x2="58" y2="72" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round"/>
    `
    },
    "laundry-basket": {
      labelAr: "\u0633\u0644\u0629 \u062A\u0646\u0638\u064A\u0645 \u0648\u063A\u0633\u064A\u0644 \u0648\u062A\u062E\u0632\u064A\u0646",
      render: (stroke, fill) => `
      <path d="M28 40 H92 L84 86 H36 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M24 40 H96" stroke="${stroke}" stroke-width="2.8" stroke-linecap="round"/>
      <rect x="50" y="47" width="20" height="6" rx="3" fill="none" stroke="${stroke}" stroke-width="1.8"/>
      <line x1="42" y1="60" x2="78" y2="60" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="4 4"/>
      <line x1="44" y1="72" x2="76" y2="72" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="4 4"/>
    `
    },
    "cleaning-mop": {
      labelAr: "\u0645\u0645\u0633\u062D\u0629 \u0648\u0645\u0643\u0646\u0633\u0629 \u0648\u0623\u062F\u0648\u0627\u062A \u062A\u0646\u0638\u064A\u0641",
      render: (stroke, fill) => `
      <path d="M30 56 H74 L68 86 H36 Z" fill="${fill}" stroke="${stroke}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M30 56 C36 44, 68 44, 74 56" fill="none" stroke="${stroke}" stroke-width="1.8"/>
      <line x1="84" y1="24" x2="64" y2="78" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M52 78 H76 L80 88 H48 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    `
    },
    "bathroom-set": {
      labelAr: "\u0637\u0642\u0645 \u0625\u0643\u0633\u0633\u0648\u0627\u0631\u0627\u062A \u0648\u0645\u0648\u0632\u0639 \u0635\u0627\u0628\u0648\u0646 \u062D\u0645\u0627\u0645",
      render: (stroke, fill) => `
      <rect x="30" y="44" width="28" height="42" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M44 44 V32 H54" fill="none" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round"/>
      <rect x="66" y="54" width="24" height="32" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <line x1="73" y1="54" x2="70" y2="38" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>
      <line x1="82" y1="54" x2="86" y2="40" stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>
    `
    },
    "wall-hooks": {
      labelAr: "\u0639\u0644\u0627\u0642\u0627\u062A \u0648\u062E\u0637\u0627\u0641\u0627\u062A \u0648\u0631\u0641\u0648\u0641 \u062A\u0646\u0638\u064A\u0645",
      render: (stroke, fill) => `
      <rect x="24" y="44" width="72" height="12" rx="5" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M38 56 V70 C38 76, 46 76, 46 70" fill="none" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M60 56 V70 C60 76, 68 76, 68 70" fill="none" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M82 56 V70 C82 76, 90 76, 90 70" fill="none" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/>
    `
    },
    "lantern-mabkhara": {
      labelAr: "\u0645\u0628\u062E\u0631\u0629 \u0648\u0641\u0627\u0646\u0648\u0633 \u0648\u062A\u062D\u0641 \u062F\u064A\u0643\u0648\u0631 \u0634\u0631\u0642\u064A",
      render: (stroke, fill) => `
      <circle cx="60" cy="24" r="4" fill="none" stroke="${stroke}" stroke-width="2"/>
      <path d="M44 42 L60 28 L76 42 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
      <rect x="42" y="42" width="36" height="34" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="2.2"/>
      <path d="M52 58 A8 8 0 0 1 68 58 V76 H52 Z" fill="none" stroke="${stroke}" stroke-width="1.8"/>
      <path d="M36 84 H84 L78 76 H42 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    `
    }
  };
  function resolveArtTileSpec(item = {}) {
    const rawName = `${item.nameAr || ""} ${item.baseNameAr || ""} ${item.descAr || ""} ${item.specs || ""}`;
    const norm = normalizeArabic(rawName);
    const cat = normalizeArabic(item.category || "");
    let iconKey = "pot-royal-set";
    if (/(طنجره ضغط|ضغط)/.test(norm)) iconKey = "pot-pressure";
    else if (/(طنجره زجاج|بوروسيليكات)/.test(norm)) iconKey = "pot-glass";
    else if (/(مقلاه|مقلايه|شوايه مسطحه|كريب|تيفال|جرانيت مقلاه)/.test(norm)) iconKey = "pan-skillet";
    else if (/(طقم طناجر|طناجر متكامل|طقم جرانيت|طقم ستانلس)/.test(norm)) iconKey = "pot-royal-set";
    else if (/(طنجره|كسروله|حله)/.test(norm)) iconKey = "pot-casserole";
    else if (/(صينيه فرن|بايركس|قالب كيك|قالب فرن|تحمير)/.test(norm)) iconKey = "roaster-tray";
    else if (/(تمريه|مكسرات خشب|قلوب|مقسم)/.test(norm)) iconKey = "wooden-dates-tray";
    else if (/(ستاند ضيافه|3 طبقات|طبقات|ستاند كيك|حامل حلويات)/.test(norm)) iconKey = "cake-stand-3tier";
    else if (/(فنجان|قهوه|دله|ركوه)/.test(norm)) iconKey = "coffee-finjan";
    else if (/(ابريق شاي|طقم شاي|غلايه|براد شاي)/.test(norm)) iconKey = "tea-set";
    else if (/(ملاعق|شوك|سكاكين مائده|شوكه|ملعقه ضيافه)/.test(norm)) iconKey = "cutlery-set";
    else if (/(صينيه تقديم|صواني|صينيه ضيافه|صينيه رخام)/.test(norm)) iconKey = "serving-tray";
    else if (/(ابريق|موزع عصير|جك|قنينه زجاج|شربات)/.test(norm)) iconKey = "pitcher-jug";
    else if (/(كوب|كاس|كاسات|مج|اكواب)/.test(norm)) iconKey = "crystal-cup";
    else if (/(وعاء|جاط|زبديه|سلطه)/.test(norm)) iconKey = "bowl-deep";
    else if (/(طقم سفره|صحن|صحون|اطباق|سيراميك)/.test(norm)) iconKey = "dinner-set";
    else if (/(بهارات|توابل|ملح وفلفل)/.test(norm)) iconKey = "spice-carousel";
    else if (/(زيت|خل|موزع زيت)/.test(norm)) iconKey = "oil-cruet";
    else if (/(عسل|مربي|مرطبان)/.test(norm)) iconKey = "honey-jar";
    else if (/(حافظه|حافظات|علب ثلاجه|لانش بوكس)/.test(norm)) iconKey = "food-containers";
    else if (/(مرتبان|بقوليات|مؤونه|تخزين طعام)/.test(norm)) iconKey = "storage-canister";
    else if (/(سكين|ساطور|مقص مطبخ)/.test(norm)) iconKey = "chef-knife";
    else if (/(لوح تقطيع|قطاعه خشب)/.test(norm)) iconKey = "cutting-board";
    else if (/(مبشره|بشاره|قطاعه خضار|فرامه|مهرسه)/.test(norm)) iconKey = "grater-slicer";
    else if (/(مصفاه|شبك|تصفية|منخل)/.test(norm)) iconKey = "colander-strainer";
    else if (/(سيليكون|مغرفه|خفاقه|كفكير|فرشاه دهن)/.test(norm)) iconKey = "silicone-utensils";
    else if (/(شوي|باربكيو|اعواد شوي|اسياخ|منقل)/.test(norm)) iconKey = "bbq-skewers";
    else if (/(شوبك|عجين|رق|مخبوزات)/.test(norm)) iconKey = "rolling-pin";
    else if (/(ملقط|ملاقط|ماسك)/.test(norm)) iconKey = "tongs-clamp";
    else if (/(ترمس|حافظه حراريه|قهوه وشاي حراري)/.test(norm)) iconKey = "thermos-flask";
    else if (/(مطره|مطاره|زمزميه|مياه رياضيه|مدرسيه)/.test(norm)) iconKey = "water-bottle";
    else if (/(مبخره|فانوس|شمعدان|مصباح|اضاءه|ديكور|تحفه|ساعه)/.test(norm)) iconKey = "lantern-mabkhara";
    else if (/(حمام|صابون|تواليت|فوط|منشفه)/.test(norm)) iconKey = "bathroom-set";
    else if (/(ممسحه|مكنسه|فرشاه تنظيف|دلو|مساحه|اسفنج|سلك جلي)/.test(norm)) iconKey = "cleaning-mop";
    else if (/(علاقه|خطاف|تعليق|شماعه|رف)/.test(norm)) iconKey = "wall-hooks";
    else if (/(سله|غسيل|منظم|تنظيم|نفايات|قمامه)/.test(norm)) iconKey = "laundry-basket";
    else if (cat.includes("\u0637\u0646\u0627\u062C\u0631")) iconKey = "pot-royal-set";
    else if (cat.includes("\u0645\u0627\u0626\u062F\u0647")) iconKey = "dinner-set";
    else if (cat.includes("\u0628\u0647\u0627\u0631\u0627\u062A") || cat.includes("\u062D\u0627\u0641\u0638\u0627\u062A")) iconKey = "spice-carousel";
    else if (cat.includes("\u062A\u062D\u0636\u064A\u0631")) iconKey = "chef-knife";
    else iconKey = "water-bottle";
    const seedStr = String(item.familyKey || item.baseNameAr || item.nameAr || item.sku || iconKey);
    let hash = 2166136261;
    for (let i = 0; i < seedStr.length; i++) {
      hash ^= seedStr.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    const themeIdx = Math.abs(hash) % TILE_THEMES.length;
    const theme = TILE_THEMES[themeIdx];
    const illustration = ILLUSTRATION_PATHS[iconKey] || ILLUSTRATION_PATHS["pot-royal-set"];
    return {
      iconKey,
      theme,
      illustration
    };
  }
  function getValidOwnerUploadedPhoto(item = {}) {
    const url = String(item.customImageUrl || item.image_url || item.image || "").trim();
    if (!url) return null;
    if (url.startsWith("assets/products/") || url.startsWith("./assets/products/") || url.includes("legacy-assets")) {
      return null;
    }
    if (/^(https?:\/\/|data:image\/|blob:)/i.test(url)) {
      return url;
    }
    return null;
  }
  function renderArtTile(item = {}, options = {}) {
    const { iconKey, theme, illustration } = resolveArtTileSpec(item);
    const customPhoto = getValidOwnerUploadedPhoto(item);
    const sizeClass = options.size || "md";
    const skuLabel = item.activeSku || item.sku || "";
    const boxLabel = item.activeBox || item.box || "";
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
        <span class="art-tile-ornament" aria-hidden="true" style="color:${theme.stroke}">\u2726</span>

        ${customPhoto ? `<img
                 src="${escapeHtml(customPhoto)}"
                 alt="${escapeHtml(item.baseNameAr || item.nameAr || illustration.labelAr)}"
                 class="art-tile-custom-img"
                 loading="lazy"
                 decoding="async"
                 onload="this.classList.add('is-loaded')"
                 onerror="this.remove()"
               />` : ""}

        <svg
          class="art-tile-svg"
          viewBox="0 0 120 120"
          role="img"
          aria-label="${escapeHtml(item.baseNameAr || item.nameAr || illustration.labelAr)}"
        >
          ${svgMarkup}
        </svg>
      </div>

      ${showMeta && (skuLabel || boxLabel) ? `<div class="art-tile-meta-bar" style="background:${theme.badgeBg};color:${theme.badgeText};border-color:${theme.border}">
               ${skuLabel ? `<span class="num-ltr">SKU: ${escapeHtml(skuLabel)}</span>` : ""}
               ${boxLabel && boxLabel !== "\u2014" ? `<span class="num-ltr">Box: ${escapeHtml(boxLabel)}</span>` : ""}
             </div>` : ""}
    </div>
  `;
  }
  function renderHeroArtComposition() {
    const heroItems = [
      {
        nameAr: "\u0637\u0642\u0645 \u0637\u0646\u0627\u062C\u0631 \u0645\u0644\u0643\u064A \u0644\u0644\u0639\u0631\u0627\u0626\u0633",
        sku: "33B12",
        price: "$78.20",
        category: "\u0623\u0637\u0642\u0645 \u0627\u0644\u0637\u0646\u0627\u062C\u0631 \u0648\u0627\u0644\u0645\u0642\u0627\u0644\u064A",
        slotClass: "hero-art-center",
        depth: "0.12"
      },
      {
        nameAr: "\u0633\u0641\u0631\u0629 \u0633\u064A\u0631\u0627\u0645\u064A\u0643 \u0636\u064A\u0627\u0641\u0629 24 \u0642\u0637\u0639\u0629",
        sku: "PS1",
        price: "$21.15",
        category: "\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0648\u0627\u0644\u0633\u064A\u0631\u0627\u0645\u064A\u0643",
        slotClass: "hero-art-top-right",
        depth: "0.22"
      },
      {
        nameAr: "\u0637\u0642\u0645 \u0634\u0627\u064A \u0648\u0623\u0628\u0627\u0631\u064A\u0642 \u0645\u0630\u0647\u0628\u0629",
        sku: "256",
        price: "$14.50",
        category: "\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0648\u0627\u0644\u0633\u064A\u0631\u0627\u0645\u064A\u0643",
        slotClass: "hero-art-mid-right",
        depth: "0.28"
      },
      {
        nameAr: "\u062A\u0645\u0631\u064A\u0629 \u062E\u0634\u0628 \u0637\u0628\u064A\u0639\u064A 3 \u0642\u0644\u0648\u0628",
        sku: "35717-1",
        price: "$6.60",
        category: "\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0648\u0627\u0644\u0633\u064A\u0631\u0627\u0645\u064A\u0643",
        slotClass: "hero-art-top-left",
        depth: "0.18"
      },
      {
        nameAr: "\u0637\u0642\u0645 \u0639\u0644\u0628 \u0628\u0647\u0627\u0631\u0627\u062A \u0645\u0639 \u0633\u062A\u0627\u0646\u062F",
        sku: "35717-8",
        price: "$5.10",
        category: "\u062D\u0627\u0641\u0638\u0627\u062A \u0627\u0644\u0637\u0639\u0627\u0645 \u0648\u0627\u0644\u0628\u0647\u0627\u0631\u0627\u062A",
        slotClass: "hero-art-mid-left",
        depth: "0.24"
      },
      {
        nameAr: "\u0633\u062A\u0627\u0646\u062F \u0636\u064A\u0627\u0641\u0629 \u0643\u0631\u064A\u0633\u062A\u0627\u0644 3 \u0637\u0628\u0642\u0627\u062A",
        sku: "245",
        price: "$11.40",
        category: "\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0648\u0627\u0644\u0633\u064A\u0631\u0627\u0645\u064A\u0643",
        slotClass: "hero-art-bottom",
        depth: "0.30"
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

      ${heroItems.map(
      (h, idx) => `
          <div
            class="hero-art-card ${h.slotClass}"
            data-depth="${h.depth}"
            onclick="window.BAYTOUKA.quickSearchSku('${escapeHtml(h.sku)}')"
            role="button"
            tabindex="0"
            aria-label="\u0627\u0633\u062A\u0639\u0631\u0627\u0636 ${escapeHtml(h.nameAr)} (${escapeHtml(h.sku)})"
          >
            ${renderArtTile(
        { nameAr: h.nameAr, category: h.category, sku: h.sku, familyKey: `hero-${idx}-${h.sku}` },
        { size: idx === 0 ? "lg" : "sm", showMeta: false }
      )}
            <div class="hero-art-caption">
              <span class="hero-art-title">${escapeHtml(h.nameAr)}</span>
              <strong class="num-ltr hero-art-meta">${escapeHtml(h.sku)} \u2022 ${escapeHtml(h.price)}</strong>
            </div>
          </div>
        `
    ).join("")}
    </div>
  `;
  }
  function generateBrandedOgSvg({
    titleAr = "\u0628\u064A\u062A\u0643 \u2022 BAYTOUKA \u2014 \u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064A\u0629",
    subtitleAr = "\u0623\u0648\u0627\u0646\u064A \u0627\u0644\u0645\u0637\u0628\u062E\u060C \u0627\u0644\u0636\u064A\u0627\u0641\u0629\u060C \u0648\u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0639\u0631\u0627\u0626\u0633 \u0628\u0627\u0644\u062C\u0645\u0644\u0629 \u0648\u0627\u0644\u0645\u0641\u0631\u0642 \u0641\u064A \u0644\u0628\u0646\u0627\u0646",
    priceText = "\u062C\u0645\u0644\u0629 \u0648\u0645\u0641\u0631\u0642 \u2022 \u062A\u0648\u0635\u064A\u0644 \u0644\u0643\u0627\u0641\u0629 \u0644\u0628\u0646\u0627\u0646",
    sku = "BAYTOUKA-LB",
    iconKey = "pot-royal-set"
  } = {}) {
    const ill = ILLUSTRATION_PATHS[iconKey] || ILLUSTRATION_PATHS["pot-royal-set"];
    const svgIcon = ill.render("#F6C96B", "rgba(229,155,35,0.25)");
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
    <text x="1080" y="165" text-anchor="end" fill="#F6C96B" font-family="sans-serif" font-size="28" font-weight="700">BAYTOUKA \u2022 \u0628\u064A\u062A\u0643 \u2014 \u0644\u0628\u0646\u0627\u0646</text>
    <text x="1080" y="265" text-anchor="end" fill="#F7F3EB" font-family="sans-serif" font-size="52" font-weight="800">${escapeHtml(titleAr.slice(0, 42))}</text>
    <text x="1080" y="335" text-anchor="end" fill="#D8CFC0" font-family="sans-serif" font-size="28">${escapeHtml(subtitleAr.slice(0, 65))}</text>
    <rect x="680" y="400" width="400" height="74" rx="37" fill="#B64624"/>
    <text x="880" y="447" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="30" font-weight="800">${escapeHtml(priceText)}</text>
    <text x="1080" y="535" text-anchor="end" fill="#B28646" font-family="monospace" font-size="22">Code: ${escapeHtml(sku)} | WhatsApp: +961 71 840 915</text>
  </svg>`;
  }
  function generateBrandedOgDataUri(opts = {}) {
    const svg = generateBrandedOgSvg(opts);
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  // js/families.js
  function extractBaseNameAndVariantLabel(rawNameAr = "", sku = "", specs = "") {
    const original = String(rawNameAr || "").trim();
    let base = original;
    let extractedLabel = "";
    const dashModelMatch = base.match(/\s*[-–—|]\s*((?:موديل|رقم|كود|قياس|حجم|شكل|لون|طراز|نوع|مقاس)\s*.+)$/i);
    if (dashModelMatch) {
      extractedLabel = dashModelMatch[1].trim();
      base = base.slice(0, dashModelMatch.index).trim();
    }
    if (!extractedLabel) {
      const inlineModelMatch = base.match(/\s+((?:موديل|رقم|كود|طراز|مقاس)\s+[#:]?\s*[A-Za-z0-9.,×x*\-\/]+\s*(?:سم|مل|لتر|انش|بوصة|cm|mm|inch|ml|l)?)$/i);
      if (inlineModelMatch) {
        extractedLabel = inlineModelMatch[1].trim();
        base = base.slice(0, inlineModelMatch.index).trim();
      }
    }
    if (!extractedLabel) {
      const parenDimMatch = base.match(/\s*\(\s*([\d.,×x*]+\s*(?:سم|مل|لتر|انش|بوصة|cm|mm|inch|ml|l))\s*\)\s*$/i);
      if (parenDimMatch) {
        extractedLabel = parenDimMatch[1].trim();
        base = base.slice(0, parenDimMatch.index).trim();
      }
    }
    if (!base) base = original;
    let chipLabel = String(sku || "").trim();
    if (extractedLabel && !chipLabel.includes(extractedLabel)) {
      const shortExtracted = extractedLabel.replace(/^(موديل|رقم|مقاس|قياس)\s+/i, "");
      chipLabel = chipLabel ? `${chipLabel} (${shortExtracted})` : shortExtracted;
    } else if (!chipLabel && specs) {
      chipLabel = String(specs).trim();
    }
    return {
      baseNameAr: base,
      variantSuffix: extractedLabel,
      chipLabel: chipLabel || "Standard"
    };
  }
  function buildProductFamilies(rawProducts = []) {
    const familyMap = /* @__PURE__ */ new Map();
    let totalValidRows = 0;
    rawProducts.forEach((raw, idx) => {
      if (raw && raw.active === false) return;
      totalValidRows++;
      const id = raw.id !== void 0 ? Number(raw.id) : idx + 1;
      const sku = String(raw.sku || raw.Style || `SKU-${id}`).trim();
      const box = String(raw.box || raw.Box || "\u2014").trim();
      const nameAr = String(raw.nameAr || raw.name || `\u0645\u0646\u062A\u062C ${sku}`).trim();
      const descAr = String(raw.descAr || "").trim();
      const category = String(raw.category || "\u0623\u0637\u0642\u0645 \u0627\u0644\u0637\u0646\u0627\u062C\u0631 \u0648\u0627\u0644\u0645\u0642\u0627\u0644\u064A").trim();
      const specs = String(raw.specs || "Standard").trim();
      const wholesalePrice = Number(parseFloat(raw.wholesalePrice ?? raw.wholesale ?? 5).toFixed(2));
      const retailPrice = Number(parseFloat(raw.retailPrice ?? raw.retail ?? 8).toFixed(2));
      const costPrice = raw.costPrice !== void 0 ? Number(parseFloat(raw.costPrice).toFixed(2)) : Number((wholesalePrice * 0.82).toFixed(2));
      const stock = raw.stock !== void 0 ? Number(raw.stock) : null;
      const badge = String(raw.badge || "").trim();
      const featured = Boolean(raw.featured || badge);
      const customImageUrl = String(raw.customImageUrl || raw.image_url || "").trim();
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
        const homeSub = category === "\u0627\u0644\u0645\u0637\u0631\u0627\u062A \u0648\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u0632\u0644" ? classifyHomeSubCategory({ nameAr: baseNameAr, descAr, specs }) : null;
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
        const existingSameSku = fam.variants.find(
          (v) => v.sku.toLowerCase() === variantObj.sku.toLowerCase() && Math.abs(v.retailPrice - variantObj.retailPrice) < 0.01 && Math.abs(v.wholesalePrice - variantObj.wholesalePrice) < 0.01
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
    const families = [];
    let totalDistinctVariants = 0;
    for (const fam of familyMap.values()) {
      fam.variants.sort((a, b) => a.retailPrice - b.retailPrice || a.sku.localeCompare(b.sku, void 0, { numeric: true }));
      totalDistinctVariants += fam.variants.length;
      const retailPrices = fam.variants.map((v) => v.retailPrice);
      const wholesalePrices = fam.variants.map((v) => v.wholesalePrice);
      fam.minRetailPrice = Math.min(...retailPrices);
      fam.maxRetailPrice = Math.max(...retailPrices);
      fam.minWholesalePrice = Math.min(...wholesalePrices);
      fam.maxWholesalePrice = Math.max(...wholesalePrices);
      fam.hasRetailSpread = fam.maxRetailPrice - fam.minRetailPrice >= 0.05;
      fam.hasWholesaleSpread = fam.maxWholesalePrice - fam.minWholesalePrice >= 0.05;
      fam.variantCount = fam.variants.length;
      fam._normSearch = fam.variants.map((v) => v._normSearch).join(" ");
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
  function syncActiveVariantFields(family, variantIdx = 0) {
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
  function findMatchingVariantIndex(family, rawQuery = "") {
    if (!family || !rawQuery || family.variants.length <= 1) return family?.selectedVariantIdx || 0;
    const q = normalizeArabic(rawQuery);
    if (!q) return family.selectedVariantIdx || 0;
    const exactIdx = family.variants.findIndex(
      (v) => normalizeArabic(v.sku) === q || normalizeArabic(v.box) === q
    );
    if (exactIdx !== -1) return exactIdx;
    const partialIdx = family.variants.findIndex(
      (v) => normalizeArabic(v.sku).includes(q) || normalizeArabic(v.box).includes(q) || normalizeArabic(v.variantSuffix).includes(q)
    );
    if (partialIdx !== -1) return partialIdx;
    return family.selectedVariantIdx || 0;
  }
  function previewDuplicateMerge(rawProducts = []) {
    const { families, totalRawRows, totalFamilies, totalVariants } = buildProductFamilies(rawProducts);
    const multiVariantFamilies = families.filter((f) => f.variants.length > 1).sort((a, b) => b.variants.length - a.variants.length);
    return {
      beforeRowCount: totalRawRows,
      afterFamilyCount: totalFamilies,
      totalDistinctVariants: totalVariants,
      mergedDuplicateRowsCount: totalRawRows - totalFamilies,
      multiVariantFamiliesCount: multiVariantFamilies.length,
      topMergedFamilies: multiVariantFamilies.slice(0, 15).map((f) => ({
        familyKey: f.familyKey,
        baseNameAr: f.baseNameAr,
        category: f.category,
        variantCount: f.variants.length,
        priceRangeRetail: f.minRetailPrice === f.maxRetailPrice ? `$${f.minRetailPrice.toFixed(2)}` : `$${f.minRetailPrice.toFixed(2)} \u2013 $${f.maxRetailPrice.toFixed(2)}`,
        sampleSkus: f.variants.slice(0, 5).map((v) => v.sku).join(", ")
      })),
      families
    };
  }

  // js/supabase-client.js
  var LOCAL_KEY_SUPABASE_CFG = "baytouka_supabase_cfg_v2";
  var LOCAL_KEY_AUTH_SESSION = "baytouka_admin_session_v2";
  var LOCAL_KEY_OWNER_CRED = "baytouka_owner_cred_v2";
  var LOCAL_KEY_ORDERS_DB = "baytouka_orders_db_v2";
  var LOCAL_KEY_RATE_LIMIT = "baytouka_order_ratelimit_v2";
  var broadcastChannel = null;
  try {
    if (typeof BroadcastChannel !== "undefined") {
      broadcastChannel = new BroadcastChannel("baytouka_orders_channel");
    }
  } catch {
  }
  function getSupabaseConfig() {
    let envUrl = "";
    let envKey = "";
    try {
      if (typeof window !== "undefined" && window.__SUPABASE_ENV__) {
        envUrl = window.__SUPABASE_ENV__.url || "";
        envKey = window.__SUPABASE_ENV__.anonKey || "";
      }
    } catch {
    }
    try {
      const saved = JSON.parse(localStorage.getItem(LOCAL_KEY_SUPABASE_CFG) || "{}");
      return {
        url: String(saved.url || envUrl || "").trim().replace(/\/+$/, ""),
        anonKey: String(saved.anonKey || envKey || "").trim()
      };
    } catch {
      return { url: envUrl, anonKey: envKey };
    }
  }
  function saveSupabaseConfig(url, anonKey) {
    const clean = {
      url: String(url || "").trim().replace(/\/+$/, ""),
      anonKey: String(anonKey || "").trim()
    };
    localStorage.setItem(LOCAL_KEY_SUPABASE_CFG, JSON.stringify(clean));
    return clean;
  }
  function isSupabaseConnected() {
    const { url, anonKey } = getSupabaseConfig();
    return Boolean(url && url.startsWith("https://") && !url.includes("your-project-ref") && anonKey && anonKey.length > 20);
  }
  function hasLocalOwnerAccount() {
    try {
      const raw = localStorage.getItem(LOCAL_KEY_OWNER_CRED);
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      return Boolean(parsed && parsed.email && parsed.passwordHash);
    } catch {
      return false;
    }
  }
  async function registerLocalOwnerAccount(email, password) {
    const cleanEmail = String(email || "").trim().toLowerCase();
    const cleanPass = String(password || "");
    if (!cleanEmail.includes("@") || cleanPass.length < 6) {
      throw new Error("\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0635\u062D\u064A\u062D \u0648\u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u0645\u0646 6 \u0623\u062D\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644");
    }
    const salt = `baytouka_${Date.now()}`;
    const passwordHash = await sha256Hex(`${salt}:${cleanPass}`);
    localStorage.setItem(
      LOCAL_KEY_OWNER_CRED,
      JSON.stringify({ email: cleanEmail, salt, passwordHash, createdAt: (/* @__PURE__ */ new Date()).toISOString() })
    );
    const session = {
      email: cleanEmail,
      mode: "local-owner",
      accessToken: `local_${await sha256Hex(cleanEmail + Date.now())}`,
      expiresAt: Date.now() + 1e3 * 60 * 60 * 12
    };
    sessionStorage.setItem(LOCAL_KEY_AUTH_SESSION, JSON.stringify(session));
    return session;
  }
  async function signInAdmin(email, password) {
    const cleanEmail = String(email || "").trim().toLowerCase();
    const cleanPass = String(password || "");
    if (isSupabaseConnected()) {
      const { url, anonKey } = getSupabaseConfig();
      const res = await fetch(`${url}/auth/v1/token?grant_type=password`, {
        method: "POST",
        headers: {
          apikey: anonKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: cleanEmail, password: cleanPass })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error_description || data.msg || "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629 \u0641\u064A Supabase Auth");
      }
      const session2 = {
        email: data.user?.email || cleanEmail,
        userId: data.user?.id,
        mode: "supabase",
        accessToken: data.access_token,
        expiresAt: Date.now() + (Number(data.expires_in) || 3600) * 1e3
      };
      sessionStorage.setItem(LOCAL_KEY_AUTH_SESSION, JSON.stringify(session2));
      return session2;
    }
    const rawCred = localStorage.getItem(LOCAL_KEY_OWNER_CRED);
    if (!rawCred) {
      throw new Error("\u0644\u0645 \u064A\u062A\u0645 \u0625\u0639\u062F\u0627\u062F \u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0627\u0644\u0643 \u0628\u0639\u062F. \u064A\u0631\u062C\u0649 \u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0623\u0648\u0644\u0627\u064B.");
    }
    const cred = JSON.parse(rawCred);
    const candidateHash = await sha256Hex(`${cred.salt}:${cleanPass}`);
    if (cred.email !== cleanEmail || candidateHash !== cred.passwordHash) {
      throw new Error("\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0623\u0648 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629");
    }
    const session = {
      email: cred.email,
      mode: "local-owner",
      accessToken: `local_${await sha256Hex(cred.email + Date.now())}`,
      expiresAt: Date.now() + 1e3 * 60 * 60 * 12
    };
    sessionStorage.setItem(LOCAL_KEY_AUTH_SESSION, JSON.stringify(session));
    return session;
  }
  function getAdminSession() {
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
  function signOutAdmin() {
    sessionStorage.removeItem(LOCAL_KEY_AUTH_SESSION);
  }
  function loadLocalOrders() {
    try {
      localStorage.removeItem("baytouka_weekly_sales_v1");
      const raw = localStorage.getItem(LOCAL_KEY_ORDERS_DB);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  function saveLocalOrders(orders) {
    try {
      localStorage.setItem(LOCAL_KEY_ORDERS_DB, JSON.stringify(orders));
    } catch (e) {
      console.warn("Orders storage save warning:", e);
    }
  }
  function checkClientOrderRateLimit() {
    try {
      const now = Date.now();
      const tenMinsAgo = now - 10 * 60 * 1e3;
      const raw = JSON.parse(localStorage.getItem(LOCAL_KEY_RATE_LIMIT) || "[]");
      const recent = Array.isArray(raw) ? raw.filter((ts) => ts > tenMinsAgo) : [];
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
  async function submitVerifiedCustomerOrder({
    customerName,
    customerPhone,
    region,
    address,
    notes = "",
    pricingMode = "retail",
    cartItems = [],
    catalogProducts = [],
    freeDeliveryThreshold = 65
  }) {
    if (!checkClientOrderRateLimit()) {
      throw new Error("\u0644\u0642\u062F \u062A\u062C\u0627\u0648\u0632\u062A \u0627\u0644\u062D\u062F \u0627\u0644\u0645\u0633\u0645\u0648\u062D \u0644\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u062A\u0627\u0644\u064A\u0629. \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631 \u0628\u0636\u0639 \u062F\u0642\u0627\u0626\u0642.");
    }
    const isWholesale = pricingMode === "wholesale";
    let verifiedSubtotal = 0;
    let verifiedWholesaleCostTotal = 0;
    let totalPieces = 0;
    const verifiedItems = cartItems.map((item) => {
      const qty = Math.max(1, Math.min(500, Number(item.qty) || 1));
      const canonical = catalogProducts.find((p) => Number(p.id) === Number(item.product.id) && p.sku === item.product.sku) || catalogProducts.find((p) => p.sku === item.product.sku) || item.product;
      const unitPrice = Number((isWholesale ? canonical.wholesalePrice : canonical.retailPrice).toFixed(2));
      const wholesaleCost = Number((canonical.costPrice || canonical.wholesalePrice * 0.82).toFixed(2));
      const lineTotal = Number((unitPrice * qty).toFixed(2));
      verifiedSubtotal += lineTotal;
      verifiedWholesaleCostTotal += Number((wholesaleCost * qty).toFixed(2));
      totalPieces += qty;
      return {
        productId: canonical.id,
        sku: canonical.sku,
        box: canonical.box || "\u2014",
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
    const deliveryFee = qualifiesFreeDelivery ? 0 : Number((region?.fee ?? 3).toFixed(2));
    const grandTotal = Number((verifiedSubtotal + deliveryFee).toFixed(2));
    const netProfit = Number((verifiedSubtotal - verifiedWholesaleCostTotal).toFixed(2));
    const datePart = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "");
    const randPart = Math.random().toString(36).substring(2, 6).toUpperCase();
    let orderNumber = `BYT-${datePart}-${randPart}`;
    let syncedToSupabase = false;
    if (isSupabaseConnected()) {
      try {
        const { url, anonKey } = getSupabaseConfig();
        const res = await fetch(`${url}/rest/v1/rpc/submit_customer_order`, {
          method: "POST",
          headers: {
            apikey: anonKey,
            Authorization: `Bearer ${anonKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            p_customer_name: customerName,
            p_customer_phone: customerPhone,
            p_region_id: region?.id || "tripoli",
            p_region_name_ar: region?.nameAr || "\u0637\u0631\u0627\u0628\u0644\u0633 \u0648\u0627\u0644\u0634\u0645\u0627\u0644",
            p_address: address,
            p_notes: notes,
            p_pricing_mode: isWholesale ? "wholesale" : "retail",
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
        console.warn("[BAYTOUKA] Supabase order RPC unreachable; queueing locally so WhatsApp checkout proceeds:", err);
      }
    }
    const orderRecord = {
      id: `ord_${Date.now()}_${randPart}`,
      orderNumber,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      customerName,
      customerPhone,
      regionId: region?.id || "tripoli",
      regionNameAr: region?.nameAr || "\u0637\u0631\u0627\u0628\u0644\u0633 \u0648\u0627\u0644\u0634\u0645\u0627\u0644",
      address,
      notes,
      pricingMode: isWholesale ? "wholesale" : "retail",
      totalPieces,
      subtotal: verifiedSubtotal,
      deliveryFee,
      grandTotal,
      wholesaleCostTotal: verifiedWholesaleCostTotal,
      netProfit,
      status: "new",
      // 'new' | 'confirmed' | 'delivered' | 'cancelled'
      syncedToSupabase,
      items: verifiedItems
    };
    const orders = loadLocalOrders();
    orders.unshift(orderRecord);
    saveLocalOrders(orders);
    try {
      broadcastChannel?.postMessage({ type: "NEW_ORDER", order: orderRecord });
      window.dispatchEvent(new CustomEvent("baytouka:new-order", { detail: orderRecord }));
    } catch {
    }
    return orderRecord;
  }
  async function fetchAllOrdersForAdmin() {
    const localOrders = loadLocalOrders();
    if (!isSupabaseConnected()) return localOrders;
    const session = getAdminSession();
    if (!session || session.mode !== "supabase") return localOrders;
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
      return rows.map((r) => ({
        id: r.id,
        orderNumber: r.order_number,
        createdAt: r.created_at,
        customerName: r.customer_name,
        customerPhone: r.customer_phone,
        regionId: r.region_id,
        regionNameAr: r.region_name_ar,
        address: r.address,
        notes: r.notes || "",
        pricingMode: r.pricing_mode,
        subtotal: Number(r.subtotal || 0),
        deliveryFee: Number(r.delivery_fee || 0),
        grandTotal: Number(r.grand_total || 0),
        wholesaleCostTotal: Number(r.wholesale_cost_total || 0),
        netProfit: Number(r.net_profit || 0),
        status: r.status || "new",
        totalPieces: (r.order_items || []).reduce((acc, i) => acc + Number(i.qty || 0), 0),
        items: (r.order_items || []).map((i) => ({
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
  async function updateOrderStatusInBackend(orderId, newStatus) {
    const validStatuses = ["new", "confirmed", "delivered", "cancelled"];
    if (!validStatuses.includes(newStatus)) return false;
    const orders = loadLocalOrders();
    const target = orders.find((o) => o.id === orderId || o.orderNumber === orderId);
    if (target) {
      target.status = newStatus;
      target.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      saveLocalOrders(orders);
    }
    if (isSupabaseConnected()) {
      const session = getAdminSession();
      if (session && session.mode === "supabase") {
        try {
          const { url, anonKey } = getSupabaseConfig();
          await fetch(`${url}/rest/v1/orders?id=eq.${encodeURIComponent(orderId)}`, {
            method: "PATCH",
            headers: {
              apikey: anonKey,
              Authorization: `Bearer ${session.accessToken}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: newStatus, updated_at: (/* @__PURE__ */ new Date()).toISOString() })
          });
        } catch (e) {
          console.warn("Supabase order status update warning:", e);
        }
      }
    }
    return true;
  }
  async function compressAndUploadProductImage(file, sku = "item") {
    const webpBlob = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const maxDim = 760;
          let w = img.width;
          let h = img.height;
          if (w > maxDim || h > maxDim) {
            if (w > h) {
              h = Math.round(h * maxDim / w);
              w = maxDim;
            } else {
              w = Math.round(w * maxDim / h);
              h = maxDim;
            }
          }
          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, w, h);
          canvas.toBlob(
            (blob) => {
              if (blob) resolve(blob);
              else reject(new Error("Canvas WebP conversion failed"));
            },
            "image/webp",
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
      if (session && session.mode === "supabase") {
        try {
          const { url, anonKey } = getSupabaseConfig();
          const fileName = `${String(sku).replace(/[^a-zA-Z0-9_-]/g, "")}_${Date.now()}.webp`;
          const uploadRes = await fetch(`${url}/storage/v1/object/product-images/${fileName}`, {
            method: "POST",
            headers: {
              apikey: anonKey,
              Authorization: `Bearer ${session.accessToken}`,
              "Content-Type": "image/webp",
              "x-upsert": "true"
            },
            body: webpBlob
          });
          if (uploadRes.ok) {
            return `${url}/storage/v1/object/public/product-images/${fileName}`;
          }
        } catch (e) {
          console.warn("Supabase storage upload fallback to local Data URI:", e);
        }
      }
    }
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result);
      r.onerror = reject;
      r.readAsDataURL(webpBlob);
    });
  }
  function onRealtimeNewOrder(callback) {
    window.addEventListener("baytouka:new-order", (e) => callback(e.detail));
    if (broadcastChannel) {
      broadcastChannel.addEventListener("message", (e) => {
        if (e.data && e.data.type === "NEW_ORDER") {
          callback(e.data.order);
        }
      });
    }
  }

  // js/store.js
  var DB_NAME = "BaytoukaDB_v4";
  var DB_VERSION = 1;
  var STORE_PRODUCTS = "inventory_rows";
  var LOCAL_KEY_CUSTOM_CATALOG = "baytouka_custom_catalog_v6";
  var LOCAL_KEY_CATALOG_BACKUP = "baytouka_catalog_backup_v6";
  var LOCAL_KEY_SETTINGS = "baytouka_store_settings_v2";
  var LOCAL_KEY_PACKAGES = "baytouka_bridal_packages_v2";
  var LOCAL_KEY_CATEGORIES = "baytouka_categories_v2";
  var LOCAL_KEY_CART = "baytouka_cart_v3";
  var LOCAL_KEY_SAVED_CART = "baytouka_saved_cart_v3";
  var LOCAL_KEY_RECENTLY_VIEWED = "baytouka_recently_viewed_v2";
  var LOCAL_KEY_MODE = "baytouka_mode";
  var LOCAL_KEY_THEME = "baytouka_theme";
  var BATCH_SIZE = 24;
  var store = {
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
      totalProducts: 0,
      // Total distinct families
      totalFamilies: 0,
      totalVariants: 0,
      // Total models/variants across families
      totalRawRows: 0,
      totalCategories: 5,
      minRetail: 0.75,
      maxRetail: 135
    },
    // Price-range filter removed completely per Part 3
    filters: {
      category: "all",
      homeSubCategory: "all",
      collectionId: "all",
      searchQuery: "",
      sortBy: "featured",
      // 'featured' | 'price-asc' | 'price-desc' | 'newest'
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
    mode: localStorage.getItem(LOCAL_KEY_MODE) === "wholesale" ? "wholesale" : "retail",
    theme: localStorage.getItem(LOCAL_KEY_THEME) || "light",
    cart: loadCartFromStorage(),
    recentlyViewedIds: loadRecentlyViewedFromStorage(),
    selectedRegionId: "tripoli",
    route: {
      view: "home",
      // 'home' | 'product' | 'admin'
      productId: null,
      categorySlug: null
    },
    adminAuthenticated: false,
    listeners: /* @__PURE__ */ new Set()
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
  function saveSettingsToStorage(newSettings) {
    store.settings = {
      ...store.settings,
      ...newSettings
    };
    try {
      localStorage.setItem(LOCAL_KEY_SETTINGS, JSON.stringify(store.settings));
    } catch (e) {
      console.warn("Settings save warning:", e);
    }
    applyRuntimeBrandSettings();
    notify("settings");
  }
  function applyRuntimeBrandSettings() {
    const s = store.settings;
    const preset = BRAND_COLOR_PRESETS.find((p) => p.id === s.colorPresetId) || BRAND_COLOR_PRESETS[0];
    const root = document.documentElement;
    if (preset && root) {
      root.style.setProperty("--accent-terracotta", preset.accent);
      root.style.setProperty("--accent-saffron", preset.secondary);
      root.style.setProperty("--accent-brass", preset.brass);
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
    }
    return JSON.parse(JSON.stringify(CATEGORY_META));
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
  function saveCartToStorage() {
    try {
      localStorage.setItem(LOCAL_KEY_CART, JSON.stringify(store.cart));
    } catch (err) {
      console.warn("Cart save warning:", err);
    }
  }
  function saveCartForLater() {
    try {
      localStorage.setItem(LOCAL_KEY_SAVED_CART, JSON.stringify(store.cart));
      return true;
    } catch {
      return false;
    }
  }
  function hasSavedCartForLater() {
    try {
      const raw = localStorage.getItem(LOCAL_KEY_SAVED_CART);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) && parsed.length > 0;
    } catch {
      return false;
    }
  }
  function restoreSavedCart() {
    try {
      const raw = localStorage.getItem(LOCAL_KEY_SAVED_CART);
      const parsed = raw ? JSON.parse(raw) : [];
      if (Array.isArray(parsed) && parsed.length > 0) {
        store.cart = parsed;
        saveCartToStorage();
        notify("cart");
        return true;
      }
    } catch {
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
  function recordRecentlyViewed(familyId) {
    const numId = Number(familyId);
    if (!numId) return;
    store.recentlyViewedIds = [numId, ...store.recentlyViewedIds.filter((id) => Number(id) !== numId)].slice(0, 8);
    try {
      localStorage.setItem(LOCAL_KEY_RECENTLY_VIEWED, JSON.stringify(store.recentlyViewedIds));
    } catch {
    }
  }
  function subscribe(listener) {
    store.listeners.add(listener);
    return () => store.listeners.delete(listener);
  }
  function notify(event = "update") {
    store.listeners.forEach((fn) => {
      try {
        fn(event, store);
      } catch (e) {
        console.error("Store listener error:", e);
      }
    });
  }
  function openDatabase() {
    return new Promise((resolve) => {
      if (!window.indexedDB) {
        resolve(null);
        return;
      }
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_PRODUCTS)) {
          db.createObjectStore(STORE_PRODUCTS, { keyPath: "id" });
        }
      };
      req.onsuccess = (e) => resolve(e.target.result);
      req.onerror = () => resolve(null);
    });
  }
  async function saveCustomCatalogToStorage(rawRows, createUndoBackup = true) {
    if (createUndoBackup && store.rawProducts.length > 0) {
      try {
        localStorage.setItem(LOCAL_KEY_CATALOG_BACKUP, JSON.stringify(store.rawProducts));
      } catch {
      }
    }
    try {
      const db = await openDatabase();
      if (db) {
        const tx = db.transaction(STORE_PRODUCTS, "readwrite");
        const objStore = tx.objectStore(STORE_PRODUCTS);
        await new Promise((res, rej) => {
          const clearReq = objStore.clear();
          clearReq.onsuccess = () => {
            rawRows.forEach((p) => objStore.put(p));
            res();
          };
          clearReq.onerror = rej;
        });
      }
    } catch (e) {
      console.warn("IndexedDB save warning:", e);
    }
    try {
      localStorage.setItem(LOCAL_KEY_CUSTOM_CATALOG, JSON.stringify(rawRows));
    } catch {
    }
  }
  function hasCatalogUndoBackup() {
    return Boolean(localStorage.getItem(LOCAL_KEY_CATALOG_BACKUP));
  }
  function restoreCatalogUndoBackup() {
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
    }
    return false;
  }
  async function initCatalogStore(onErrorCallback) {
    let rawProducts = null;
    try {
      const savedCustom = localStorage.getItem(LOCAL_KEY_CUSTOM_CATALOG);
      if (savedCustom) {
        const parsed = JSON.parse(savedCustom);
        if (Array.isArray(parsed) && parsed.length > 0) {
          rawProducts = parsed;
        }
      }
    } catch {
    }
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
            rawProducts = dbProds.map((r) => ({
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
              costPrice: r.cost_price ? Number(r.cost_price) : void 0,
              stock: r.stock,
              badge: r.badge || "",
              featured: Boolean(r.featured),
              active: r.active !== false,
              customImageUrl: r.image_url || ""
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
        console.warn("[BAYTOUKA] Supabase fetch fallback to local bundle:", e);
      }
    }
    if ((!rawProducts || rawProducts.length === 0) && typeof window !== "undefined" && window.location.protocol !== "file:" && typeof fetch === "function") {
      try {
        const response = await fetch("products.json");
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
    if (!rawProducts || rawProducts.length === 0) {
      if (typeof window !== "undefined" && Array.isArray(window.__PRODUCTS__) && window.__PRODUCTS__.length > 0) {
        rawProducts = window.__PRODUCTS__;
      }
    }
    if (!rawProducts || rawProducts.length === 0) {
      if (typeof window !== "undefined") {
        const fallback = window.BAYTOUKA_DATA && window.BAYTOUKA_DATA.products || window.CATALOG_PRODUCTS;
        if (Array.isArray(fallback) && fallback.length > 0) {
          rawProducts = fallback;
        }
      }
    }
    if (!rawProducts || rawProducts.length === 0) {
      console.error("[BAYTOUKA ERROR] Both fetch and embedded products data failed to load.");
      if (typeof onErrorCallback === "function") onErrorCallback();
      return [];
    }
    setCatalogProducts(rawProducts, false, false);
    return store.families;
  }
  function setCatalogProducts(rawList, persistCustom = false, createUndoBackup = true) {
    store.rawProducts = Array.isArray(rawList) ? rawList : [];
    const { families, totalRawRows, totalFamilies, totalVariants } = buildProductFamilies(store.rawProducts);
    const catFamilyCounts = {};
    const catVariantCounts = {};
    const subCounts = { all: 0, bottles: 0, cleaning: 0, appliances: 0, decor: 0 };
    let maxRetail = 0;
    let minRetail = Infinity;
    families.forEach((fam) => {
      catFamilyCounts[fam.category] = (catFamilyCounts[fam.category] || 0) + 1;
      catVariantCounts[fam.category] = (catVariantCounts[fam.category] || 0) + fam.variants.length;
      if (fam.maxRetailPrice > maxRetail) maxRetail = fam.maxRetailPrice;
      if (fam.minRetailPrice > 0 && fam.minRetailPrice < minRetail) minRetail = fam.minRetailPrice;
      if (fam.category === "\u0627\u0644\u0645\u0637\u0631\u0627\u062A \u0648\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u0632\u0644" && fam._homeSub) {
        subCounts.all++;
        subCounts[fam._homeSub] = (subCounts[fam._homeSub] || 0) + 1;
      }
    });
    store.families = families;
    store.products = families;
    store.categoryCounts = catFamilyCounts;
    store.categoryVariantCounts = catVariantCounts;
    store.homeSubCounts = subCounts;
    store.badgedFamilies = families.filter((f) => Boolean(f.badge || f.featured));
    store.stats = {
      totalProducts: totalFamilies,
      totalFamilies,
      totalVariants,
      totalRawRows,
      totalCategories: Object.keys(catFamilyCounts).length || CATEGORY_META.length,
      minRetail: isFinite(minRetail) ? minRetail : 0.75,
      maxRetail: Math.max(135, Math.ceil(maxRetail))
    };
    initBridalPackagesAndBuilder(families);
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
    notify("catalog");
  }
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
    }
    const byCat = (catName) => families.filter((f) => f.category === catName).sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.maxRetailPrice - a.maxRetailPrice);
    const cookware = byCat("\u0623\u0637\u0642\u0645 \u0627\u0644\u0637\u0646\u0627\u062C\u0631 \u0648\u0627\u0644\u0645\u0642\u0627\u0644\u064A");
    const tableware = byCat("\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0648\u0627\u0644\u0633\u064A\u0631\u0627\u0645\u064A\u0643");
    const storage = byCat("\u062D\u0627\u0641\u0638\u0627\u062A \u0627\u0644\u0637\u0639\u0627\u0645 \u0648\u0627\u0644\u0628\u0647\u0627\u0631\u0627\u062A");
    const prep = byCat("\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u062A\u062D\u0636\u064A\u0631 \u0648\u0627\u0644\u0628\u0627\u0631\u0628\u0643\u064A\u0648");
    const home = byCat("\u0627\u0644\u0645\u0637\u0631\u0627\u062A \u0648\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u0632\u0644");
    const pick = (arr, idx, qty = 1) => {
      const fam = arr[idx % Math.max(1, arr.length)] || families[idx % Math.max(1, families.length)];
      return fam ? { familyId: fam.familyId, sku: fam.sku, qty } : null;
    };
    const defaultPackages = [
      {
        id: "tier-essential",
        nameAr: "\u0627\u0644\u0628\u0627\u0642\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 (Essential Bridal)",
        tierCode: "Essential",
        badgeAr: "\u0627\u0642\u062A\u0635\u0627\u062F\u064A\u0629 \u0648\u0645\u062A\u0648\u0627\u0632\u0646\u0629",
        subtitleAr: "\u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u064A\u0648\u0645\u064A\u0629 \u0644\u0645\u0637\u0628\u062E \u0627\u0644\u0632\u0648\u062C\u064A\u0646 \u0627\u0644\u0639\u0635\u0631\u064A \u0645\u0646 \u0627\u0644\u0641\u0626\u0627\u062A \u0627\u0644\u062E\u0645\u0633",
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
        id: "tier-classic",
        nameAr: "\u0627\u0644\u0628\u0627\u0642\u0629 \u0627\u0644\u0643\u0644\u0627\u0633\u064A\u0643\u064A\u0629 (Classic Lebanese Table)",
        tierCode: "Classic",
        badgeAr: "\u0627\u0644\u0623\u0643\u062B\u0631 \u0637\u0644\u0628\u0627\u064B \u0644\u0644\u0639\u0631\u0627\u0626\u0633",
        subtitleAr: "\u062A\u062C\u0647\u064A\u0632 \u0645\u062A\u0643\u0627\u0645\u0644 \u0644\u0644\u0637\u0628\u062E \u0648\u0627\u0644\u0636\u064A\u0627\u0641\u0629 \u0648\u062A\u0646\u0638\u064A\u0645 \u0627\u0644\u0645\u0637\u0628\u062E \u0648\u0627\u0644\u062D\u0645\u0627\u0645",
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
        id: "tier-premium",
        nameAr: "\u0628\u0627\u0642\u0629 \u0627\u0644\u0646\u062E\u0628\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 (Premium Culinary Suite)",
        tierCode: "Premium",
        badgeAr: "\u062A\u062C\u0647\u064A\u0632 \u0641\u0627\u062E\u0631",
        subtitleAr: "\u0623\u0637\u0642\u0645 \u063A\u0631\u0627\u0646\u064A\u062A \u0648\u0633\u062A\u0627\u0646\u0644\u0633\u060C \u0633\u0641\u0631\u0629 \u0633\u064A\u0631\u0627\u0645\u064A\u0643\u060C \u062A\u0645\u0631\u064A\u0627\u062A \u062E\u0634\u0628\u060C \u0648\u0633\u062A\u0627\u0646\u062F\u0627\u062A \u0636\u064A\u0627\u0641\u0629",
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
        id: "tier-royal",
        nameAr: "\u0627\u0644\u0628\u0627\u0642\u0629 \u0627\u0644\u0645\u0644\u0643\u064A\u0629 \u0627\u0644\u0634\u0627\u0645\u0644\u0629 (Royal Complete Trousseau)",
        tierCode: "Royal",
        badgeAr: "\u062A\u062C\u0647\u064A\u0632 \u0645\u0644\u0643\u064A \u0634\u0627\u0645\u0644",
        subtitleAr: "\u0623\u0641\u062E\u0645 \u0623\u0637\u0642\u0645 \u0627\u0644\u0637\u0646\u0627\u062C\u0631 \u0627\u0644\u0645\u0644\u0643\u064A\u0629 \u0648\u0627\u0644\u0636\u064A\u0627\u0641\u0629 \u0627\u0644\u0645\u0630\u0647\u0628\u0629 \u0648\u062A\u0646\u0638\u064A\u0645 \u0627\u0644\u0628\u064A\u062A \u0627\u0644\u0643\u0627\u0645\u0644",
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
        id: "tier-wholesale-shop",
        nameAr: "\u0628\u0627\u0642\u0629 \u0627\u0646\u0637\u0644\u0627\u0642\u0629 \u0627\u0644\u0645\u062A\u0627\u062C\u0631 (Wholesale Shop Starter)",
        tierCode: "B2B Starter",
        badgeAr: "\u0644\u0644\u0645\u062D\u0644\u0627\u062A \u0648\u0627\u0644\u062A\u062C\u0627\u0631",
        subtitleAr: "\u062A\u0634\u0643\u064A\u0644\u0629 \u0633\u0631\u064A\u0639\u0629 \u0627\u0644\u062F\u0648\u0631\u0627\u0646 \u0644\u0623\u0635\u062D\u0627\u0628 \u0627\u0644\u0645\u062D\u0644\u0627\u062A \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0628\u0643\u0645\u064A\u0627\u062A \u062C\u0645\u0644\u0629 \u0645\u0631\u0628\u062D\u0629",
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
    return packagesList.map((pkg) => {
      let retailSum = 0;
      let wholesaleSum = 0;
      let totalPieces = 0;
      const resolvedItems = [];
      (pkg.items || []).forEach((entry) => {
        const fam = families.find((f) => Number(f.familyId) === Number(entry.familyId)) || families.find((f) => f.sku === entry.sku) || families[0];
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
  function savePackagesToStorage(newPackages) {
    try {
      localStorage.setItem(LOCAL_KEY_PACKAGES, JSON.stringify(newPackages));
    } catch {
    }
    store.packages = enrichPackagesWithLiveFamilies(newPackages, store.families);
    notify("packages");
  }
  function seedDefaultBuilderSelections(families) {
    if (Object.keys(store.bridalBuilder.selections).length > 0) return;
    CATEGORY_META.forEach((cat) => {
      const topInCat = families.filter((f) => f.category === cat.id).slice(0, 2);
      topInCat.forEach((fam) => {
        store.bridalBuilder.selections[fam.familyId] = {
          familyId: fam.familyId,
          variantIdx: 0,
          qty: 1
        };
      });
    });
  }
  function recomputeFilteredProducts() {
    const { category, homeSubCategory, collectionId, searchQuery, sortBy } = store.filters;
    const isWholesale = store.mode === "wholesale";
    const normQuery = normalizeArabic(searchQuery);
    const queryTokens = normQuery ? normQuery.split(" ").filter(Boolean) : [];
    let collectionRegex = null;
    if (collectionId && collectionId !== "all") {
      const colDef = (store.settings.collectionsOrder || []).find((c) => c.id === collectionId);
      if (colDef && colDef.badgeFilter) {
        collectionRegex = new RegExp(colDef.badgeFilter, "i");
      }
    }
    const filtered = store.families.filter((fam) => {
      if (category !== "all" && fam.category !== category) return false;
      if (category === "\u0627\u0644\u0645\u0637\u0631\u0627\u062A \u0648\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u0632\u0644" && homeSubCategory !== "all") {
        if (fam._homeSub !== homeSubCategory) return false;
      }
      if (collectionRegex) {
        const badgeMatch = collectionRegex.test(fam.badge || "") || collectionId === "bestsellers" && fam.featured;
        if (!badgeMatch) return false;
      }
      if (queryTokens.length > 0) {
        for (let i = 0; i < queryTokens.length; i++) {
          if (!fam._normSearch.includes(queryTokens[i])) return false;
        }
        const matchedIdx = findMatchingVariantIndex(fam, searchQuery);
        if (matchedIdx !== fam.selectedVariantIdx) {
          syncActiveVariantFields(fam, matchedIdx);
        }
      }
      return true;
    });
    if (sortBy === "price-asc") {
      filtered.sort((a, b) => isWholesale ? a.wholesalePrice - b.wholesalePrice : a.retailPrice - b.retailPrice);
    } else if (sortBy === "price-desc") {
      filtered.sort((a, b) => isWholesale ? b.wholesalePrice - a.wholesalePrice : b.retailPrice - a.retailPrice);
    } else if (sortBy === "newest") {
      filtered.sort((a, b) => b.familyId - a.familyId);
    } else {
      filtered.sort(
        (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.familyId - b.familyId
      );
    }
    store.filteredFamilies = filtered;
    store.filteredProducts = filtered;
    return filtered;
  }
  function getSearchSuggestions(rawQuery, limit = 6) {
    const norm = normalizeArabic(rawQuery);
    if (!norm) return [];
    const tokens = norm.split(" ").filter(Boolean);
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
  function selectFamilyVariant(familyId, variantIdx) {
    const fam = store.families.find((f) => Number(f.familyId) === Number(familyId) || Number(f.id) === Number(familyId));
    if (!fam) return null;
    syncActiveVariantFields(fam, variantIdx);
    return fam;
  }
  function setPricingMode(newMode) {
    store.mode = newMode === "wholesale" ? "wholesale" : "retail";
    localStorage.setItem(LOCAL_KEY_MODE, store.mode);
    document.documentElement.setAttribute("data-pricing-mode", store.mode);
    recomputeFilteredProducts();
    notify("mode");
  }
  function setTheme(newTheme) {
    store.theme = newTheme === "dark" ? "dark" : "light";
    localStorage.setItem(LOCAL_KEY_THEME, store.theme);
    document.documentElement.setAttribute("data-theme", store.theme);
    notify("theme");
  }
  function addToCart(familyOrProductId, qty = 1, explicitVariantIdx = null) {
    const numId = Number(familyOrProductId);
    const fam = store.families.find((f) => Number(f.familyId) === numId || Number(f.id) === numId) || store.families.find((f) => f.variants.some((v) => Number(v.id) === numId));
    if (!fam) return null;
    const vIdx = explicitVariantIdx !== null ? Number(explicitVariantIdx) : fam.variants.findIndex((v) => Number(v.id) === numId) !== -1 ? fam.variants.findIndex((v) => Number(v.id) === numId) : fam.selectedVariantIdx || 0;
    const variant = fam.variants[Math.max(0, Math.min(fam.variants.length - 1, vIdx))] || fam.variants[0];
    const amount = Math.max(1, Number(qty) || 1);
    const existing = store.cart.find((item) => item.sku === variant.sku);
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
    notify("cart");
    return { ...variant, family: fam };
  }
  function updateCartItemQty(index, newQty) {
    if (index < 0 || index >= store.cart.length) return;
    if (newQty <= 0) {
      store.cart.splice(index, 1);
    } else {
      store.cart[index].qty = Number(newQty);
    }
    saveCartToStorage();
    notify("cart");
  }
  function clearCart() {
    store.cart = [];
    saveCartToStorage();
    notify("cart");
  }
  function getCartSummary() {
    const isWholesale = store.mode === "wholesale";
    const regions = store.settings.regions || DEFAULT_LEBANON_REGIONS;
    const region = regions.find((r) => r.id === store.selectedRegionId) || regions[0];
    const tierQty = Number(store.settings.quantityTierDiscountQty) || 12;
    const tierDiscountPct = Number(store.settings.quantityTierDiscountPct) || 5;
    let subtotal = 0;
    let retailEquivalentTotal = 0;
    let totalPieces = 0;
    let tierDiscountTotal = 0;
    const detailedItems = [];
    store.cart.forEach((item, index) => {
      const fam = store.families.find((f) => Number(f.familyId) === Number(item.familyId)) || store.families.find((f) => f.variants.some((v) => v.sku === item.sku));
      if (!fam) return;
      const variant = fam.variants.find((v) => v.sku === item.sku) || fam.variants[item.variantIdx || 0] || fam.variants[0];
      if (!variant) return;
      const baseUnitPrice = isWholesale ? variant.wholesalePrice : variant.retailPrice;
      const qualifiesQtyTier = item.qty >= tierQty;
      const effectiveUnitPrice = qualifiesQtyTier ? Number((baseUnitPrice * (1 - tierDiscountPct / 100)).toFixed(2)) : baseUnitPrice;
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
    const freeThreshold = isWholesale ? Number(store.settings.freeDeliveryThresholdWholesale) || 220 : Number(store.settings.freeDeliveryThresholdRetail) || 65;
    const isFreeDelivery = subtotal > 0 && subtotal >= freeThreshold;
    const remainingForFreeDelivery = Math.max(0, Number((freeThreshold - subtotal).toFixed(2)));
    const freeDeliveryProgressPct = freeThreshold > 0 ? Math.min(100, Math.round(subtotal / freeThreshold * 100)) : 100;
    const deliveryFee = subtotal > 0 ? isFreeDelivery ? 0 : Number(region.fee || 0) : 0;
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
  function getCartUpsellFamilies(limit = 3) {
    const inCartFamilyIds = new Set(store.cart.map((i) => Number(i.familyId)));
    return store.families.filter((f) => !inCartFamilyIds.has(Number(f.familyId)) && f.retailPrice >= 1 && f.retailPrice <= 9.5).slice(0, limit);
  }
  function updateStructuredDataJsonLd(activeFamily = null) {
    let scriptEl = document.getElementById("baytouka-jsonld");
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = "baytouka-jsonld";
      scriptEl.type = "application/ld+json";
      document.head.appendChild(scriptEl);
    }
    const s = store.settings;
    const baseUrl = window.location.origin && window.location.origin !== "null" ? window.location.origin : "https://baytouka.lb";
    const graph = [
      {
        "@context": "https://schema.org",
        "@type": "Store",
        name: `${s.storeNameEn} | ${s.storeNameAr}`,
        description: s.seoDescription,
        telephone: `+${s.whatsappPhone}`,
        priceRange: "$0.75 - $132.50",
        currenciesAccepted: s.currencyCode || "USD",
        paymentAccepted: "Cash on Delivery",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tripoli",
          addressCountry: "LB"
        },
        areaServed: "Lebanon",
        url: baseUrl
      }
    ];
    if (activeFamily) {
      graph.push({
        "@context": "https://schema.org",
        "@type": "Product",
        name: activeFamily.baseNameAr,
        description: activeFamily.descAr || activeFamily.baseNameAr,
        sku: activeFamily.sku,
        category: activeFamily.category,
        offers: activeFamily.variants.map((v) => ({
          "@type": "Offer",
          sku: v.sku,
          name: `${v.baseNameAr} (${v.sku})`,
          priceCurrency: s.currencyCode || "USD",
          price: v.retailPrice.toFixed(2),
          availability: "https://schema.org/InStock"
        }))
      });
      const ogImg = document.querySelector('meta[property="og:image"]');
      if (ogImg) {
        ogImg.setAttribute(
          "content",
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
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `${s.storeNameAr} \u2014 \u0643\u062A\u0627\u0644\u0648\u062C \u0639\u0627\u0626\u0644\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A`,
        numberOfItems: store.families.length,
        itemListElement: store.families.slice(0, 12).map((f, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          item: {
            "@type": "Product",
            name: f.baseNameAr,
            sku: f.sku,
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: s.currencyCode || "USD",
              lowPrice: f.minWholesalePrice.toFixed(2),
              highPrice: f.maxRetailPrice.toFixed(2),
              offerCount: f.variants.length,
              availability: "https://schema.org/InStock"
            }
          }
        }))
      });
    }
    scriptEl.textContent = JSON.stringify(graph);
  }

  // js/animations.js
  function prefersReducedMotion() {
    return Boolean(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }
  function dismissPageIntro() {
    if (typeof window !== "undefined" && typeof window.__dismissLoader === "function") {
      window.__dismissLoader();
    } else {
      const curtain = document.getElementById("page-intro-curtain");
      if (!curtain) return;
      const delay = prefersReducedMotion() ? 40 : 300;
      setTimeout(() => {
        curtain.classList.add("loaded");
        setTimeout(() => {
          if (curtain && curtain.parentNode) {
            curtain.style.display = "none";
          }
        }, 500);
      }, delay);
    }
  }
  function initHeroParallax() {
    if (prefersReducedMotion()) return;
    const stage = document.getElementById("hero-collage-stage");
    if (!stage) return;
    const layers = Array.from(stage.querySelectorAll("[data-depth]"));
    if (layers.length === 0) return;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = null;
    function updateParallax() {
      currentX += (targetX - currentX) * 0.09;
      currentY += (targetY - currentY) * 0.09;
      layers.forEach((el) => {
        const depth = parseFloat(el.getAttribute("data-depth") || "0.15");
        const moveX = currentX * depth * 38;
        const moveY = currentY * depth * 38;
        el.style.transform = `translate3d(${moveX.toFixed(1)}px, ${moveY.toFixed(1)}px, 0)`;
      });
      if (Math.abs(targetX - currentX) > 2e-3 || Math.abs(targetY - currentY) > 2e-3) {
        rafId = requestAnimationFrame(updateParallax);
      } else {
        rafId = null;
      }
    }
    function scheduleUpdate() {
      if (!rafId) {
        rafId = requestAnimationFrame(updateParallax);
      }
    }
    window.addEventListener(
      "mousemove",
      (e) => {
        const rect = stage.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        targetX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetY = (e.clientY / window.innerHeight - 0.5) * 2;
        scheduleUpdate();
      },
      { passive: true }
    );
    window.addEventListener(
      "scroll",
      () => {
        const scrollY = window.scrollY;
        if (scrollY > window.innerHeight * 1.2) return;
        targetY = scrollY / 500 * -0.55;
        scheduleUpdate();
      },
      { passive: true }
    );
  }
  function animateCounter(el, targetValue, duration = 850) {
    if (!el) return;
    const end = Number(targetValue) || 0;
    if (prefersReducedMotion()) {
      el.textContent = end.toLocaleString("en-US");
      return;
    }
    const startTime = performance.now();
    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(end * eased);
      el.textContent = current.toLocaleString("en-US");
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);
  }
  var revealObserver = null;
  function observeScrollReveals(root = document) {
    const elements = root.querySelectorAll(".reveal-on-scroll:not(.is-visible)");
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
              const delay = Math.min(idx * 35, 180);
              setTimeout(() => {
                entry.target.classList.add("is-visible");
              }, delay);
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -24px 0px" }
      );
    }
    elements.forEach((el) => revealObserver.observe(el));
  }
  function flyToCartAnimation(triggerEl) {
    bounceCartBadges();
    if (prefersReducedMotion() || !triggerEl) return;
    const cartTarget = document.querySelector("#mobile-cart-bar-btn") && window.innerWidth < 768 ? document.querySelector("#mobile-cart-bar-btn") : document.querySelector(".cart-trigger-pill");
    if (!cartTarget) return;
    const startRect = triggerEl.getBoundingClientRect();
    const endRect = cartTarget.getBoundingClientRect();
    const orb = document.createElement("div");
    orb.className = "flying-product-orb";
    orb.setAttribute("aria-hidden", "true");
    orb.textContent = "\u2726";
    orb.style.left = `${startRect.left + startRect.width / 2 - 22}px`;
    orb.style.top = `${startRect.top + startRect.height / 2 - 22}px`;
    document.body.appendChild(orb);
    requestAnimationFrame(() => {
      const dx = endRect.left + endRect.width / 2 - (startRect.left + startRect.width / 2);
      const dy = endRect.top + endRect.height / 2 - (startRect.top + startRect.height / 2);
      orb.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(0.28)`;
      orb.style.opacity = "0.2";
    });
    setTimeout(() => {
      orb.remove();
    }, 680);
  }
  function bounceCartBadges() {
    document.querySelectorAll(".cart-count-badge").forEach((badge) => {
      badge.classList.remove("bounce");
      void badge.offsetWidth;
      badge.classList.add("bounce");
    });
  }
  function initDraggableCarousel(carouselEl) {
    if (!carouselEl) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    carouselEl.addEventListener("mousedown", (e) => {
      isDown = true;
      carouselEl.classList.add("dragging");
      startX = e.pageX - carouselEl.offsetLeft;
      scrollLeft = carouselEl.scrollLeft;
    });
    window.addEventListener("mouseup", () => {
      if (!isDown) return;
      isDown = false;
      carouselEl.classList.remove("dragging");
    });
    carouselEl.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carouselEl.offsetLeft;
      const walk = (x - startX) * 1.5;
      carouselEl.scrollLeft = scrollLeft - walk;
    });
  }
  function initDesktopCursorAndMagnetics() {
    if (prefersReducedMotion()) return;
    const isFinePointer = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;
    const cursorRing = document.getElementById("custom-cursor-ring");
    if (cursorRing) {
      window.addEventListener(
        "mousemove",
        (e) => {
          cursorRing.style.transform = `translate3d(${e.clientX - 17}px, ${e.clientY - 17}px, 0)`;
        },
        { passive: true }
      );
      document.addEventListener("mouseover", (e) => {
        const interactive = e.target.closest("a, button, .product-card, .bento-category-tile, .hero-art-card");
        cursorRing.classList.toggle("cursor-hover", Boolean(interactive));
      });
    }
    document.addEventListener(
      "mousemove",
      (e) => {
        const stage = e.target.closest(".art-tile-stage");
        if (!stage) return;
        const tile = stage.querySelector(".art-tile");
        if (!tile) return;
        const rect = stage.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        tile.style.transform = `perspective(520px) rotateY(${(nx * 7).toFixed(1)}deg) rotateX(${(-ny * 7).toFixed(1)}deg) scale(1.015)`;
      },
      { passive: true }
    );
    document.addEventListener(
      "mouseout",
      (e) => {
        const stage = e.target.closest(".art-tile-stage");
        if (!stage) return;
        const tile = stage.querySelector(".art-tile");
        if (tile) tile.style.transform = "";
      },
      { passive: true }
    );
  }
  function initMobileSwipeSheets(onCloseModal, onCloseCart) {
    const modalCard = document.querySelector("#quick-view-modal .modal-card");
    const cartDrawer = document.getElementById("cart-drawer");
    function attachSwipeDown(el, closeCallback) {
      if (!el) return;
      let startY = 0;
      let currentDeltaY = 0;
      el.addEventListener(
        "touchstart",
        (e) => {
          if (el.scrollTop > 10) return;
          startY = e.touches[0].clientY;
          currentDeltaY = 0;
        },
        { passive: true }
      );
      el.addEventListener(
        "touchmove",
        (e) => {
          if (!startY) return;
          const dy = e.touches[0].clientY - startY;
          if (dy > 0 && el.scrollTop <= 5) {
            currentDeltaY = dy;
          }
        },
        { passive: true }
      );
      el.addEventListener(
        "touchend",
        () => {
          if (currentDeltaY > 85 && typeof closeCallback === "function") {
            closeCallback();
          }
          startY = 0;
          currentDeltaY = 0;
        },
        { passive: true }
      );
    }
    attachSwipeDown(modalCard, onCloseModal);
    attachSwipeDown(cartDrawer, onCloseCart);
  }

  // js/components.js
  function renderProductCard(fam, isWholesale = false, options = {}) {
    const activeVar = fam.activeVariant || fam.variants?.[fam.selectedVariantIdx || 0] || fam;
    const activePrice = isWholesale ? activeVar.wholesalePrice : activeVar.retailPrice;
    const comparePrice = isWholesale ? activeVar.retailPrice : activeVar.wholesalePrice;
    const savingsPct = calcSavingsPercent(activeVar.retailPrice, activeVar.wholesalePrice);
    const hasMultipleVariants = Array.isArray(fam.variants) && fam.variants.length > 1;
    const hasPriceSpread = isWholesale ? fam.hasWholesaleSpread : fam.hasRetailSpread;
    const minSpreadPrice = isWholesale ? fam.minWholesalePrice : fam.minRetailPrice;
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
      ${fam.badge ? `<span class="badge-ribbon">${escapeHtml(fam.badge)}</span>` : hasMultipleVariants ? `<span class="badge-ribbon badge-variants-count">${fam.variants.length} \u0645\u0648\u062F\u064A\u0644\u0627\u062A</span>` : ""}
      ${savingsPct > 0 ? `<span class="wholesale-savings-chip" title="\u0646\u0633\u0628\u0629 \u0627\u0644\u062A\u0648\u0641\u064A\u0631 \u0628\u0633\u0639\u0631 \u0627\u0644\u062C\u0645\u0644\u0629">
               ${isWholesale ? `\u062A\u0648\u0641\u064A\u0631 \u0627\u0644\u062C\u0645\u0644\u0629 ${savingsPct}%` : `\u062C\u0645\u0644\u0629 -${savingsPct}%`}
             </span>` : ""}

      <div
        class="product-image-container art-tile-stage"
        onclick="window.BAYTOUKA.openQuickView(${fam.familyId})"
        role="button"
        tabindex="0"
        aria-label="\u0645\u0639\u0627\u064A\u0646\u0629 ${escapeHtml(fam.baseNameAr || fam.nameAr)}"
      >
        <div class="card-art-tile-slot" data-art-slot="${fam.familyId}">
          ${renderArtTile(
      {
        ...fam,
        activeSku: activeVar.sku,
        activeBox: activeVar.box,
        customImageUrl: activeVar.customImageUrl || fam.customImageUrl
      },
      { size: "md", showMeta: true }
    )}
        </div>
        <button
          type="button"
          class="quick-view-trigger-pill"
          onclick="event.stopPropagation(); window.BAYTOUKA.openQuickView(${fam.familyId})"
          aria-label="\u0645\u0639\u0627\u064A\u0646\u0629 \u0633\u0631\u064A\u0639\u0629 \u0644\u0640 ${escapeHtml(fam.baseNameAr || fam.nameAr)}"
        >
          <i data-lucide="eye" style="width:14px;height:14px"></i>
          <span>\u0645\u0639\u0627\u064A\u0646\u0629</span>
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

      ${fam.descAr ? `<p class="card-desc">${escapeHtml(fam.descAr)}</p>` : ""}

      ${hasMultipleVariants ? `<div class="variant-chips-wrap" role="group" aria-label="\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u062F\u064A\u0644 \u0623\u0648 \u0627\u0644\u0645\u0642\u0627\u0633">
               ${visibleVariants.map((v, vIdx) => {
      const isSel = vIdx === (fam.selectedVariantIdx || 0);
      return `<button
                     type="button"
                     class="variant-chip num-ltr ${isSel ? "active" : ""}"
                     onclick="window.BAYTOUKA.onCardVariantSelect(event, ${fam.familyId}, ${vIdx})"
                     title="SKU: ${escapeHtml(v.sku)} | Box: ${escapeHtml(v.box)} \u2014 $${(isWholesale ? v.wholesalePrice : v.retailPrice).toFixed(2)}"
                   >${escapeHtml(v.chipLabel || v.sku)}</button>`;
    }).join("")}
               ${extraVariantsCount > 0 ? `<button
                        type="button"
                        class="variant-chip variant-chip-more"
                        onclick="window.BAYTOUKA.openQuickView(${fam.familyId})"
                        title="\u0639\u0631\u0636 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0648\u062F\u064A\u0644\u0627\u062A (${fam.variants.length})"
                      >+${extraVariantsCount} \u0645\u0648\u062F\u064A\u0644</button>` : ""}
             </div>` : `<span class="specs-chip num-ltr" data-specs-el="${fam.familyId}">${escapeHtml(activeVar.specs)}</span>`}

      ${isWholesale ? `<div class="wholesale-card-hint">
               <span>\u{1F4E6} \u0643\u0631\u062A\u0648\u0646\u0629 #${escapeHtml(activeVar.box)}</span>
               <span>\u2022 \u062E\u0635\u0645 5% \u0644\u0640 12+ \u0642\u0637\u0639\u0629</span>
             </div>` : ""}

      <div class="card-footer-row">
        <div class="price-stack">
          <span class="compare-price-label" data-compare-el="${fam.familyId}">
            ${isWholesale ? "\u0633\u0639\u0631 \u0627\u0644\u0645\u0641\u0631\u0642:" : "\u0633\u0639\u0631 \u0627\u0644\u062C\u0645\u0644\u0629:"}
            <strong class="num-ltr" dir="ltr">$${comparePrice.toFixed(2)}</strong>
          </span>
          <div style="display:flex;align-items:baseline;gap:0.3rem;flex-wrap:wrap">
            ${hasPriceSpread ? `<small class="from-price-tag" title="\u062A\u062E\u062A\u0644\u0641 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0628\u0627\u062E\u062A\u0644\u0627\u0641 \u0627\u0644\u0645\u0648\u062F\u064A\u0644 (${minSpreadPrice.toFixed(2)}$ - ${(isWholesale ? fam.maxWholesalePrice : fam.maxRetailPrice).toFixed(2)}$)">\u0645\u0646</small>` : ""}
            <span class="active-price-value num-ltr" dir="ltr" data-price-el="${fam.familyId}">
              $${activePrice.toFixed(2)} <small style="font-size:0.68rem;font-weight:700;opacity:0.75">USD</small>
            </span>
          </div>
        </div>

        <button
          type="button"
          class="quick-add-btn"
          onclick="window.BAYTOUKA.quickAddWithFly(event, ${fam.familyId})"
          aria-label="\u0625\u0636\u0627\u0641\u0629 ${escapeHtml(fam.baseNameAr || fam.nameAr)} \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629"
          title="\u0625\u0636\u0627\u0641\u0629 \u0633\u0631\u064A\u0639\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629"
        >
          <i data-lucide="plus" style="width:20px;height:20px"></i>
        </button>
      </div>
    </article>
  `;
  }
  function renderSkeletonCards(count = 8) {
    return Array.from({ length: count }).map(
      () => `
      <div class="product-card" aria-hidden="true">
        <div class="product-image-container skeleton-shimmer"></div>
        <div class="skeleton-shimmer" style="height:16px;width:60%;margin-bottom:10px"></div>
        <div class="skeleton-shimmer" style="height:20px;width:90%;margin-bottom:8px"></div>
        <div class="skeleton-shimmer" style="height:14px;width:75%;margin-bottom:16px"></div>
        <div class="skeleton-shimmer" style="height:38px;width:100%"></div>
      </div>
    `
    ).join("");
  }
  function renderCatalogLoadingError() {
    const grid = document.getElementById("products-grid");
    const resultsCounter = document.getElementById("results-counter");
    if (resultsCounter) {
      resultsCounter.textContent = "\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0643\u062A\u0627\u0644\u0648\u062C";
    }
    if (grid) {
      grid.innerHTML = `
      <div class="catalog-error-state" style="grid-column:1/-1;padding:3.5rem 1.5rem;text-align:center;background:var(--bg-elevated);border:1px solid var(--accent-terracotta);border-radius:var(--radius-xl);margin:1.5rem 0">
        <div style="width:58px;height:58px;border-radius:50%;background:var(--accent-terracotta-soft);color:var(--accent-terracotta);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem">
          <i data-lucide="alert-triangle" style="width:28px;height:28px"></i>
        </div>
        <h3 style="font-family:var(--font-display);font-size:1.35rem;font-weight:700;margin-bottom:0.5rem;color:var(--text-primary)">
          \u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A
        </h3>
        <p style="font-size:0.86rem;color:var(--text-secondary);max-width:50ch;margin:0 auto 1.5rem;line-height:1.6">
          \u0644\u0645 \u0646\u062A\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0645\u0644\u0641 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A (products.json \u0623\u0648 js/products-data.js). \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0645\u0633\u0627\u0631 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0623\u0648 \u0627\u0644\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0632\u0631 \u0623\u062F\u0646\u0627\u0647 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629.
        </p>
        <button type="button" class="btn-primary-editorial" onclick="window.location.reload()" style="padding-inline:2rem">
          <i data-lucide="refresh-cw" style="width:16px;height:16px"></i>
          <span>\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u0622\u0646</span>
        </button>
      </div>
    `;
      if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
      }
    }
  }
  function renderCategoryBentoGrid(store2) {
    const famCounts = store2.categoryCounts || {};
    const varCounts = store2.categoryVariantCounts || {};
    const categories = (store2.categories || []).filter((c) => c.active !== false);
    return categories.map((cat, idx) => {
      const fCount = famCounts[cat.id] || 0;
      const vCount = varCounts[cat.id] || fCount;
      return `
        <div
          class="bento-category-tile bento-tile-${idx % 5} reveal-on-scroll"
          onclick="window.BAYTOUKA.selectCategoryBySlug('${escapeHtml(cat.slug)}', true)"
          role="button"
          tabindex="0"
          aria-label="\u062A\u0635\u0641\u062D \u0642\u0633\u0645 ${escapeHtml(cat.shortAr || cat.short_ar)} (${fCount} \u0639\u0627\u0626\u0644\u0629 \u0645\u0646\u062A\u062C \u0648 ${vCount} \u0645\u0648\u062F\u064A\u0644)"
        >
          <div class="bento-art-bg">
            ${renderArtTile(
        {
          nameAr: cat.shortAr || cat.short_ar,
          category: cat.id,
          familyKey: `bento-cat-${cat.slug}`
        },
        { size: "bento", showMeta: false }
      )}
          </div>
          <div class="bento-tile-shade"></div>
          <div class="bento-tile-content">
            <span class="bento-count-pill">
              <i data-lucide="${escapeHtml(cat.icon || "layers")}" style="width:14px;height:14px"></i>
              <span><strong class="num-ltr">${fCount}</strong> \u0635\u0646\u0641 \u2022 <strong class="num-ltr">${vCount}</strong> \u0645\u0648\u062F\u064A\u0644</span>
            </span>
            <h3 class="bento-tile-title">${escapeHtml(cat.shortAr || cat.short_ar)}</h3>
            <p style="font-size:0.8rem;color:rgba(247,243,235,0.86);line-height:1.45">
              ${escapeHtml(cat.subtitleAr || cat.subtitle_ar)}
            </p>
          </div>
        </div>
      `;
    }).join("");
  }
  function renderHomeSubFilterPills(store2) {
    const subCounts = store2.homeSubCounts || {};
    const activeSub = store2.filters.homeSubCategory || "all";
    const isHomeCatActive = store2.filters.category === "\u0627\u0644\u0645\u0637\u0631\u0627\u062A \u0648\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u0632\u0644";
    return HOME_SUBCATEGORIES.map((sub) => {
      const cnt = subCounts[sub.id] || 0;
      const isActive = isHomeCatActive && activeSub === sub.id;
      return `
      <button
        type="button"
        class="subfilter-pill ${isActive ? "active" : ""}"
        onclick="window.BAYTOUKA.filterHomeSubCategory('${sub.id}')"
      >
        <span>${escapeHtml(sub.labelAr)}</span>
        <span class="num-ltr" style="font-size:0.7rem;opacity:0.85">(${cnt})</span>
      </button>
    `;
    }).join("");
  }
  function renderCollectionsPills(store2) {
    const collections = (store2.settings.collectionsOrder || []).filter((c) => c.active !== false);
    const activeCol = store2.filters.collectionId || "all";
    return `
    <button
      type="button"
      class="collection-tab-pill ${activeCol === "all" ? "active" : ""}"
      onclick="window.BAYTOUKA.filterByCollection('all')"
    >
      <span>\u0643\u0644 \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0627\u062A</span>
    </button>
    ${collections.map(
      (col) => `
        <button
          type="button"
          class="collection-tab-pill ${activeCol === col.id ? "active" : ""}"
          onclick="window.BAYTOUKA.filterByCollection('${escapeHtml(col.id)}')"
        >
          <span>${escapeHtml(col.titleAr)}</span>
        </button>
      `
    ).join("")}
  `;
  }
  function renderSearchSuggestionsDropdown(suggestions, rawQuery, isWholesale) {
    if (!rawQuery || !rawQuery.trim()) return "";
    if (!suggestions || suggestions.length === 0) {
      return `
      <div style="padding:1rem;text-align:center;font-size:0.8rem;color:var(--text-muted)">
        \u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C \u0645\u0637\u0627\u0628\u0642\u0629 \u0644\u0640 \xAB${escapeHtml(rawQuery)}\xBB
      </div>
    `;
    }
    return suggestions.map((fam) => {
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
            ${renderArtTile(fam, { size: "sm", showMeta: false })}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:0.82rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
              ${highlightMatch(fam.baseNameAr || fam.nameAr, rawQuery)}
            </div>
            <div class="num-ltr" style="font-size:0.7rem;color:var(--text-muted)">
              SKU: ${highlightMatch(activeVar.sku, rawQuery)} | Box: ${highlightMatch(activeVar.box, rawQuery)}
              ${fam.variants?.length > 1 ? ` \u2022 ${fam.variants.length} \u0645\u0648\u062F\u064A\u0644\u0627\u062A` : ""}
            </div>
          </div>
          <div class="num-ltr" dir="ltr" style="font-weight:800;font-size:0.84rem;color:var(--accent-terracotta)">
            $${price.toFixed(2)}
          </div>
        </div>
      `;
    }).join("");
  }
  function renderQuickViewModal(fam, isWholesale = false, qty = 1, settings = {}) {
    const activeVar = fam.activeVariant || fam.variants?.[fam.selectedVariantIdx || 0] || fam;
    const activePrice = isWholesale ? activeVar.wholesalePrice : activeVar.retailPrice;
    const savingsPct = calcSavingsPercent(activeVar.retailPrice, activeVar.wholesalePrice);
    const waPhone = settings.whatsappPhone || "96171840915";
    const askMsg = `\u0645\u0631\u062D\u0628\u0627\u064B ${settings.storeNameAr || "\u0628\u064A\u062A\u0643"}\u060C \u0623\u0648\u062F \u0627\u0644\u0627\u0633\u062A\u0641\u0633\u0627\u0631 \u0639\u0646 \u0627\u0644\u0635\u0646\u0641: ${fam.baseNameAr} (SKU: ${activeVar.sku} | Box: ${activeVar.box})`;
    const shareUrl = `${window.location.origin}${window.location.pathname}#/product/${fam.familyId}`;
    const shareMsg = `\u0634\u0627\u0647\u062F \u0647\u0630\u0627 \u0627\u0644\u0635\u0646\u0641 \u0645\u0646 \u0645\u062A\u062C\u0631 ${settings.storeNameAr || "\u0628\u064A\u062A\u0643"}: ${fam.baseNameAr} (${activeVar.sku}) \u0628\u0633\u0639\u0631 $${activePrice.toFixed(2)} USD
${shareUrl}`;
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
      { size: "lg", showMeta: true }
    )}
      </div>

      <div class="modal-details-stage">
        <!-- Mobile Swipe Handle -->
        <div class="mobile-sheet-grabber" aria-hidden="true"></div>

        <div style="display:flex;flex-wrap:wrap;align-items:center;gap:0.45rem">
          <span class="sku-pill num-ltr">SKU: ${escapeHtml(activeVar.sku)}</span>
          <span class="sku-pill num-ltr" style="color:var(--accent-terracotta);border-color:var(--accent-terracotta)">Box: ${escapeHtml(activeVar.box)}</span>
          ${fam.badge ? `<span class="sku-pill" style="background:var(--accent-saffron-soft);color:var(--accent-saffron)">${escapeHtml(fam.badge)}</span>` : ""}
        </div>

        <h2 style="font-family:var(--font-display);font-size:clamp(1.25rem,2.4vw,1.65rem);font-weight:700;line-height:1.3">
          ${escapeHtml(fam.baseNameAr || fam.nameAr)}
        </h2>

        <p style="font-size:0.86rem;color:var(--text-secondary);line-height:1.65">
          ${escapeHtml(fam.descAr || "\u0642\u0637\u0639\u0629 \u0623\u0635\u0644\u064A\u0629 \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u062C\u0648\u062F\u0629 \u0645\u0646 \u062A\u0634\u0643\u064A\u0644\u0629 \u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0648\u0627\u0644\u0645\u0637\u0628\u062E \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064A\u060C \u0645\u0641\u0631\u0648\u0632\u0629 \u0628\u0627\u0644\u0643\u0631\u062A\u0648\u0646\u0629 \u0648\u0627\u0644\u0643\u0648\u062F \u0648\u062C\u0627\u0647\u0632\u0629 \u0644\u0644\u0634\u062D\u0646 \u0627\u0644\u0641\u0648\u0631\u064A.")}
        </p>

        ${fam.variants && fam.variants.length > 1 ? `<div style="padding:0.75rem;border-radius:var(--radius-md);background:var(--bg-subtle);border:1px solid var(--border-subtle)">
                 <span style="font-size:0.75rem;font-weight:800;display:block;margin-bottom:0.45rem;color:var(--text-secondary)">
                   \u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u062F\u064A\u0644 / \u0627\u0644\u0645\u0642\u0627\u0633 \u0627\u0644\u0645\u062A\u0648\u0641\u0631 (${fam.variants.length} \u062E\u064A\u0627\u0631\u0627\u062A):
                 </span>
                 <div class="variant-chips-wrap">
                   ${fam.variants.map((v, vIdx) => {
      const isSel = vIdx === (fam.selectedVariantIdx || 0);
      const vPrice = isWholesale ? v.wholesalePrice : v.retailPrice;
      return `<button
                         type="button"
                         class="variant-chip num-ltr ${isSel ? "active" : ""}"
                         onclick="window.BAYTOUKA.selectModalVariant(${fam.familyId}, ${vIdx})"
                       >${escapeHtml(v.chipLabel || v.sku)} \u2022 $${vPrice.toFixed(2)}</button>`;
    }).join("")}
                 </div>
               </div>` : ""}

        <!-- Dual Price Comparison Box -->
        <div class="dual-price-box">
          <div class="price-tier-card ${!isWholesale ? "active-tier" : ""}">
            <span style="font-size:0.72rem;font-weight:700;color:var(--text-muted);display:block">\u0633\u0639\u0631 \u0627\u0644\u0645\u0641\u0631\u0642 (Retail)</span>
            <strong class="num-ltr" dir="ltr" style="font-size:1.25rem;font-weight:800;color:var(--text-primary)">
              $${activeVar.retailPrice.toFixed(2)} <small style="font-size:0.7rem">USD</small>
            </strong>
          </div>
          <div class="price-tier-card ${isWholesale ? "active-tier" : ""}">
            <span style="font-size:0.72rem;font-weight:700;color:var(--accent-terracotta);display:block">
              \u0633\u0639\u0631 \u0627\u0644\u062C\u0645\u0644\u0629 (Wholesale) ${savingsPct > 0 ? `\u2022 \u0648\u0641\u0651\u0631 ${savingsPct}%` : ""}
            </span>
            <strong class="num-ltr" dir="ltr" style="font-size:1.25rem;font-weight:800;color:var(--accent-terracotta)">
              $${activeVar.wholesalePrice.toFixed(2)} <small style="font-size:0.7rem">USD</small>
            </strong>
          </div>
        </div>

        <!-- Quantity Stepper + Add to Cart -->
        <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;margin-top:0.25rem">
          <div class="qty-stepper" aria-label="\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0645\u064A\u0629">
            <button type="button" class="qty-stepper-btn" onclick="window.BAYTOUKA.stepQuickViewQty(-1)" aria-label="\u0625\u0646\u0642\u0627\u0635 \u0627\u0644\u0643\u0645\u064A\u0629">\u2212</button>
            <span id="qv-qty-value" class="qty-stepper-val num-ltr">${qty}</span>
            <button type="button" class="qty-stepper-btn" onclick="window.BAYTOUKA.stepQuickViewQty(1)" aria-label="\u0632\u064A\u0627\u062F\u0629 \u0627\u0644\u0643\u0645\u064A\u0629">+</button>
          </div>

          <button
            type="button"
            class="btn-primary-editorial"
            style="flex:1"
            onclick="window.BAYTOUKA.confirmQuickViewAdd(${fam.familyId})"
          >
            <i data-lucide="shopping-bag" style="width:18px;height:18px"></i>
            <span>\u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0633\u0644\u0629 \u2014 <strong id="qv-line-total" class="num-ltr" dir="ltr">$${(activePrice * qty).toFixed(2)} USD</strong></span>
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
              <span>\u0627\u0633\u0623\u0644 \u0639\u0646 \u0647\u0630\u0627 \u0627\u0644\u0635\u0646\u0641 (${escapeHtml(activeVar.sku)})</span>
            </a>
            <a
              href="https://wa.me/?text=${encodeURIComponent(shareMsg)}"
              target="_blank"
              rel="noopener noreferrer"
              class="icon-action-btn"
              style="min-height:36px"
            >
              <i data-lucide="share-2" style="width:14px;height:14px"></i>
              <span>\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628</span>
            </a>
          </div>
          <a
            href="#/product/${fam.familyId}"
            onclick="window.BAYTOUKA.closeQuickView()"
            style="color:var(--accent-terracotta);font-weight:700;display:inline-flex;align-items:center;gap:0.3rem"
          >
            <span>\u0635\u0641\u062D\u0629 \u0627\u0644\u0635\u0646\u0641 \u0627\u0644\u0643\u0627\u0645\u0644\u0629</span>
            <i data-lucide="arrow-up-left" style="width:14px;height:14px"></i>
          </a>
        </div>
      </div>
    </div>
  `;
  }
  function renderShareableProductPage(fam, relatedFamilies = [], recentlyViewedFamilies = [], isWholesale = false, settings = {}) {
    const activeVar = fam.activeVariant || fam.variants?.[fam.selectedVariantIdx || 0] || fam;
    const activePrice = isWholesale ? activeVar.wholesalePrice : activeVar.retailPrice;
    const savingsPct = calcSavingsPercent(activeVar.retailPrice, activeVar.wholesalePrice);
    const waPhone = settings.whatsappPhone || "96171840915";
    const askMsg = `\u0645\u0631\u062D\u0628\u0627\u064B ${settings.storeNameAr || "\u0628\u064A\u062A\u0643"}\u060C \u0623\u0648\u062F \u0627\u0644\u0627\u0633\u062A\u0641\u0633\u0627\u0631 \u0639\u0646 \u0627\u0644\u0635\u0646\u0641: ${fam.baseNameAr} (SKU: ${activeVar.sku} | Box: ${activeVar.box})`;
    const shareMsg = `\u0634\u0627\u0647\u062F ${fam.baseNameAr} (${activeVar.sku}) \u0641\u064A \u0645\u062A\u062C\u0631 ${settings.storeNameAr || "\u0628\u064A\u062A\u0643"}:
${window.location.href}`;
    return `
    <div class="container-shell" style="padding-block:2.2rem 5rem">
      <nav aria-label="\u0645\u0633\u0627\u0631 \u0627\u0644\u062A\u0646\u0642\u0644" style="display:flex;align-items:center;gap:0.5rem;font-size:0.82rem;color:var(--text-muted);margin-bottom:1.5rem;flex-wrap:wrap">
        <a href="#/" style="color:var(--text-primary);font-weight:700">\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</a>
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
      { size: "lg", showMeta: true }
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
              ${escapeHtml(fam.descAr || "\u0642\u0637\u0639\u0629 \u0623\u0635\u0644\u064A\u0629 \u0645\u062E\u062A\u0627\u0631\u0629 \u0628\u0639\u0646\u0627\u064A\u0629 \u0645\u0646 \u0643\u062A\u0627\u0644\u0648\u062C \u0628\u064A\u062A\u0643 \u0644\u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0645\u0637\u0628\u062E \u0648\u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064A\u0629 \u0628\u0623\u0639\u0644\u0649 \u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u062C\u0648\u062F\u0629 \u0648\u0627\u0644\u0645\u062A\u0627\u0646\u0629.")}
            </p>

            ${fam.variants && fam.variants.length > 1 ? `<div style="padding:0.9rem;border-radius:var(--radius-md);background:var(--bg-subtle);border:1px solid var(--border-subtle)">
                     <strong style="font-size:0.8rem;display:block;margin-bottom:0.5rem">\u0627\u0644\u0645\u0648\u062F\u064A\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u0642\u0627\u0633\u0627\u062A \u0627\u0644\u0645\u062A\u0648\u0641\u0631\u0629 (${fam.variants.length}):</strong>
                     <div class="variant-chips-wrap">
                       ${fam.variants.map((v, vIdx) => {
      const isSel = vIdx === (fam.selectedVariantIdx || 0);
      const vP = isWholesale ? v.wholesalePrice : v.retailPrice;
      return `<button
                             type="button"
                             class="variant-chip num-ltr ${isSel ? "active" : ""}"
                             onclick="window.BAYTOUKA.selectPageVariant(${fam.familyId}, ${vIdx})"
                           >${escapeHtml(v.chipLabel || v.sku)} \u2014 $${vP.toFixed(2)}</button>`;
    }).join("")}
                     </div>
                   </div>` : ""}

            <div class="dual-price-box">
              <div class="price-tier-card ${!isWholesale ? "active-tier" : ""}">
                <span style="font-size:0.75rem;font-weight:700;color:var(--text-muted);display:block">\u0633\u0639\u0631 \u0627\u0644\u0645\u0641\u0631\u0642 (Retail)</span>
                <strong class="num-ltr" dir="ltr" style="font-size:1.45rem;font-weight:800">$${activeVar.retailPrice.toFixed(2)} USD</strong>
              </div>
              <div class="price-tier-card ${isWholesale ? "active-tier" : ""}">
                <span style="font-size:0.75rem;font-weight:700;color:var(--accent-terracotta);display:block">
                  \u0633\u0639\u0631 \u0627\u0644\u062C\u0645\u0644\u0629 (Wholesale) ${savingsPct > 0 ? `\u2022 \u0648\u0641\u0651\u0631 ${savingsPct}%` : ""}
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
                <span>\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629 \u2014 <span class="num-ltr" dir="ltr">$${activePrice.toFixed(2)} USD</span></span>
              </button>

              <a
                href="https://wa.me/${encodeURIComponent(waPhone)}?text=${encodeURIComponent(askMsg)}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary-brass"
              >
                <i data-lucide="message-circle" style="width:18px;height:18px;color:#25D366"></i>
                <span>\u0627\u0633\u0623\u0644 \u0639\u0646 \u0627\u0644\u0635\u0646\u0641 (${escapeHtml(activeVar.sku)})</span>
              </a>

              <a
                href="https://wa.me/?text=${encodeURIComponent(shareMsg)}"
                target="_blank"
                rel="noopener noreferrer"
                class="icon-action-btn"
                title="\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628"
              >
                <i data-lucide="share-2" style="width:16px;height:16px"></i>
                <span>\u0645\u0634\u0627\u0631\u0643\u0629</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      ${relatedFamilies.length > 0 ? `<div style="margin-top:3rem">
               <h3 style="font-family:var(--font-display);font-size:1.45rem;font-weight:700;margin-bottom:1.25rem">
                 \u0623\u0635\u0646\u0627\u0641 \u0645\u0634\u0627\u0628\u0647\u0629 \u0645\u0646 \u0646\u0641\u0633 \u0627\u0644\u0642\u0633\u0645
               </h3>
               <div class="products-editorial-grid">
                 ${relatedFamilies.map((r) => renderProductCard(r, isWholesale)).join("")}
               </div>
             </div>` : ""}

      ${recentlyViewedFamilies.length > 0 ? `<div style="margin-top:3rem;padding-top:2rem;border-top:1px solid var(--border-subtle)">
               <h3 style="font-family:var(--font-display);font-size:1.3rem;font-weight:700;margin-bottom:1rem">
                 \u0634\u0648\u0647\u062F \u0645\u0624\u062E\u0631\u0627\u064B (Recently Viewed)
               </h3>
               <div class="products-editorial-grid">
                 ${recentlyViewedFamilies.map((r) => renderProductCard(r, isWholesale)).join("")}
               </div>
             </div>` : ""}

      <!-- Sticky Product Page Add-to-Cart Bar -->
      <div class="sticky-product-action-bar">
        <div class="container-shell" style="display:flex;align-items:center;justify-content:space-between;gap:1rem">
          <div style="min-width:0">
            <strong style="font-size:0.88rem;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escapeHtml(fam.baseNameAr)}</strong>
            <span class="num-ltr" dir="ltr" style="font-size:0.78rem;color:var(--accent-terracotta);font-weight:800">SKU: ${escapeHtml(activeVar.sku)} \u2022 $${activePrice.toFixed(2)} USD</span>
          </div>
          <button
            type="button"
            class="btn-primary-editorial"
            style="min-height:42px;padding-inline:1.35rem"
            onclick="window.BAYTOUKA.addToCart(${fam.familyId}, 1, ${fam.selectedVariantIdx || 0})"
          >
            <i data-lucide="plus" style="width:16px;height:16px"></i>
            <span>\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629</span>
          </button>
        </div>
      </div>
    </div>
  `;
  }
  function renderBridalExperienceSection(store2) {
    const packages = store2.packages || [];
    const isWholesale = store2.mode === "wholesale";
    const builderSteps = [
      { idx: 0, titleAr: "1. \u0627\u0644\u0637\u0628\u062E \u0648\u0627\u0644\u0637\u0647\u064A", category: "\u0623\u0637\u0642\u0645 \u0627\u0644\u0637\u0646\u0627\u062C\u0631 \u0648\u0627\u0644\u0645\u0642\u0627\u0644\u064A", icon: "chef-hat" },
      { idx: 1, titleAr: "2. \u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0648\u0627\u0644\u0636\u064A\u0627\u0641\u0629", category: "\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0648\u0627\u0644\u0633\u064A\u0631\u0627\u0645\u064A\u0643", icon: "utensils" },
      { idx: 2, titleAr: "3. \u0627\u0644\u0645\u0624\u0648\u0646\u0629 \u0648\u0627\u0644\u062A\u062E\u0632\u064A\u0646", category: "\u062D\u0627\u0641\u0638\u0627\u062A \u0627\u0644\u0637\u0639\u0627\u0645 \u0648\u0627\u0644\u0628\u0647\u0627\u0631\u0627\u062A", icon: "package" },
      { idx: 3, titleAr: "4. \u0627\u0644\u062A\u062D\u0636\u064A\u0631 \u0648\u0627\u0644\u0628\u0627\u0631\u0628\u0643\u064A\u0648", category: "\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u062A\u062D\u0636\u064A\u0631 \u0648\u0627\u0644\u0628\u0627\u0631\u0628\u0643\u064A\u0648", icon: "flame" },
      { idx: 4, titleAr: "5. \u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u0627\u0644\u0628\u064A\u062A", category: "\u0627\u0644\u0645\u0637\u0631\u0627\u062A \u0648\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u0632\u0644", icon: "home" }
    ];
    const activeStepIdx = store2.bridalBuilder.activeStepIdx || 0;
    const currentStep = builderSteps[activeStepIdx] || builderSteps[0];
    const stepFamilies = store2.families.filter((f) => f.category === currentStep.category).slice(0, 10);
    const selections = store2.bridalBuilder.selections || {};
    const selectedEntries = Object.values(selections).filter((s) => s && s.qty > 0);
    let builderRetailTotal = 0;
    let builderWholesaleTotal = 0;
    let builderPiecesCount = 0;
    const coveredCategories = /* @__PURE__ */ new Set();
    selectedEntries.forEach((sel) => {
      const fam = store2.families.find((f) => Number(f.familyId) === Number(sel.familyId));
      if (!fam) return;
      const v = fam.variants[sel.variantIdx || 0] || fam.variants[0];
      builderRetailTotal += v.retailPrice * sel.qty;
      builderWholesaleTotal += v.wholesalePrice * sel.qty;
      builderPiecesCount += sel.qty;
      coveredCategories.add(fam.category);
    });
    const builderPackagePrice = Number((builderWholesaleTotal * 0.94).toFixed(2));
    const builderSavings = Math.max(0, Number((builderRetailTotal - builderPackagePrice).toFixed(2)));
    const completionPct = Math.min(100, Math.round(coveredCategories.size / 5 * 100));
    const ringCircumference = 2 * Math.PI * 24;
    const ringOffset = ringCircumference - completionPct / 100 * ringCircumference;
    return `
    <!-- 1. Ready-Made Bridal & Shop Starter Tiers (5 Curated Packages) -->
    <div class="bridal-tiers-grid" style="margin-bottom:2.75rem">
      ${packages.map(
      (pkg) => `
          <div class="bridal-tier-card">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.65rem">
              <span class="bento-count-pill" style="margin:0">${escapeHtml(pkg.badgeAr || pkg.tierCode)}</span>
              <span class="num-ltr" style="font-size:0.74rem;color:#FFD98E;font-weight:800">\u062E\u0635\u0645 \u0628\u0627\u0642\u0629 -${pkg.discountPct}%</span>
            </div>

            <h3 style="font-family:var(--font-display);font-size:1.25rem;color:#F7F3EB;margin-bottom:0.35rem">
              ${escapeHtml(pkg.nameAr)}
            </h3>
            <p style="font-size:0.78rem;color:var(--text-on-dark-muted);margin-bottom:0.9rem;min-height:2.4em">
              ${escapeHtml(pkg.subtitleAr)}
            </p>

            <!-- Mini Art Tile Strip for the Package Items -->
            <div class="tier-art-preview-row">
              ${(pkg.resolvedItems || []).slice(0, 4).map(
        (it) => `
                  <div class="tier-mini-tile" title="${escapeHtml(it.nameAr)} (\xD7${it.qty})">
                    ${renderArtTile(it.family || it, { size: "sm", showMeta: false })}
                  </div>
                `
      ).join("")}
              ${(pkg.resolvedItems || []).length > 4 ? `<span class="tier-more-badge num-ltr">+${pkg.resolvedItems.length - 4}</span>` : ""}
            </div>

            <ul class="tier-items-list">
              ${(pkg.resolvedItems || []).slice(0, 5).map(
        (it) => `
                  <li>
                    <span>\u2022 ${escapeHtml(it.nameAr)}</span>
                    <strong class="num-ltr">\xD7${it.qty}</strong>
                  </li>
                `
      ).join("")}
            </ul>

            <div class="tier-pricing-footer">
              <div>
                <span style="font-size:0.7rem;color:var(--text-on-dark-muted);display:block;text-decoration:line-through" class="num-ltr" dir="ltr">
                  \u0627\u0644\u0645\u0641\u0631\u0642: $${pkg.retailSum.toFixed(2)}
                </span>
                <strong class="num-ltr" dir="ltr" style="font-size:1.3rem;color:#FFD98E">
                  $${pkg.packagePrice.toFixed(2)} <small style="font-size:0.7rem">USD</small>
                </strong>
                <span class="num-ltr" dir="ltr" style="font-size:0.72rem;color:#25D366;display:block;font-weight:700">
                  \u062A\u0648\u0641\u064A\u0631 $${pkg.savingsAmount.toFixed(2)}
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
                  <span>\u0623\u0636\u0641 \u0627\u0644\u0628\u0627\u0642\u0629</span>
                </button>
                <button
                  type="button"
                  class="icon-action-btn"
                  style="min-height:38px;background:rgba(37,211,102,0.16);color:#25D366;border-color:rgba(37,211,102,0.4)"
                  onclick="window.BAYTOUKA.sendReadyTierWhatsApp('${escapeHtml(pkg.id)}')"
                  title="\u0627\u0637\u0644\u0628 \u0647\u0630\u0647 \u0627\u0644\u0628\u0627\u0642\u0629 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628"
                  aria-label="\u0627\u0637\u0644\u0628 ${escapeHtml(pkg.nameAr)} \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628"
                >
                  <i data-lucide="message-circle" style="width:16px;height:16px"></i>
                </button>
              </div>
            </div>
          </div>
        `
    ).join("")}
    </div>

    <!-- 2. Interactive 5-Step Bridal Package Builder by Room/Need -->
    <div class="bridal-builder-card">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1.25rem;padding-bottom:1rem;border-bottom:1px solid rgba(255,255,255,0.14)">
        <div>
          <span style="font-size:0.74rem;color:#FFD98E;font-weight:800;display:block">\u0623\u062F\u0627\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 \u0644\u062A\u0635\u0645\u064A\u0645 \u062C\u0647\u0627\u0632 \u0627\u0644\u0639\u0631\u0648\u0633 \u062D\u0633\u0628 \u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0628\u064A\u062A</span>
          <h3 style="font-family:var(--font-display);font-size:1.4rem;color:#F7F3EB">
            \u0635\u0645\u0651\u0645\u064A \u0628\u0627\u0642\u062A\u0643\u0650 \u0627\u0644\u0645\u062E\u0635\u0635\u0629 \u062E\u0637\u0648\u0629 \u0628\u062E\u0637\u0648\u0629 (5 \u0623\u062C\u0646\u062D\u0629)
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
            <strong class="num-ltr" style="color:#F7F3EB;font-size:0.86rem;display:block">${builderPiecesCount} \u0642\u0637\u0639\u0629 \u0645\u062E\u062A\u0627\u0631\u0629</strong>
            <span style="font-size:0.72rem;color:var(--text-on-dark-muted)">\u062A\u063A\u0637\u064A\u0629 ${coveredCategories.size} \u0645\u0646 5 \u0623\u0642\u0633\u0627\u0645</span>
          </div>
        </div>
      </div>

      <!-- 5 Room/Need Step Tabs -->
      <div class="builder-steps-tabs" role="tablist" style="display:flex;gap:0.5rem;overflow-x:auto;padding-bottom:0.75rem;margin-bottom:1rem">
        ${builderSteps.map(
      (st) => `
            <button
              type="button"
              class="builder-step-tab ${st.idx === activeStepIdx ? "active" : ""}"
              onclick="window.BAYTOUKA.setBridalBuilderStep(${st.idx})"
            >
              <i data-lucide="${st.icon}" style="width:15px;height:15px"></i>
              <span>${escapeHtml(st.titleAr)}</span>
            </button>
          `
    ).join("")}
      </div>

      <!-- Active Step Families Selection Grid -->
      <div class="builder-step-items-grid">
        ${stepFamilies.map((fam) => {
      const sel = selections[fam.familyId];
      const isChecked = Boolean(sel && sel.qty > 0);
      const selVarIdx = sel ? sel.variantIdx || 0 : 0;
      const activeVar = fam.variants[selVarIdx] || fam.variants[0];
      return `
              <div class="bridal-check-item ${isChecked ? "selected" : ""}" onclick="window.BAYTOUKA.toggleBridalBuilderItem(${fam.familyId})">
                <input
                  type="checkbox"
                  ${isChecked ? "checked" : ""}
                  onclick="event.stopPropagation(); window.BAYTOUKA.toggleBridalBuilderItem(${fam.familyId})"
                  aria-label="\u0627\u062E\u062A\u064A\u0627\u0631 ${escapeHtml(fam.baseNameAr)}"
                  style="width:18px;height:18px;accent-color:var(--accent-saffron-bright);cursor:pointer"
                />
                <div style="width:46px;height:46px;flex-shrink:0">
                  ${renderArtTile(fam, { size: "sm", showMeta: false })}
                </div>
                <div style="flex:1;min-width:0">
                  <div style="font-size:0.82rem;font-weight:700;color:#F7F3EB;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
                    ${escapeHtml(fam.baseNameAr)}
                  </div>
                  ${fam.variants.length > 1 ? `<select
                           class="builder-variant-select num-ltr"
                           onclick="event.stopPropagation()"
                           onchange="window.BAYTOUKA.changeBridalBuilderVariant(${fam.familyId}, this.value)"
                           aria-label="\u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0648\u062F\u064A\u0644 ${escapeHtml(fam.baseNameAr)}"
                         >
                           ${fam.variants.map(
        (v, idx) => `<option value="${idx}" ${idx === selVarIdx ? "selected" : ""}>${escapeHtml(v.chipLabel || v.sku)} ($${v.wholesalePrice.toFixed(2)})</option>`
      ).join("")}
                         </select>` : `<span class="num-ltr" style="font-size:0.7rem;color:var(--text-on-dark-muted)">SKU: ${escapeHtml(activeVar.sku)}</span>`}
                </div>
                <div class="num-ltr" dir="ltr" style="text-align:left">
                  <strong style="font-size:0.86rem;color:#FFD98E;display:block">$${activeVar.wholesalePrice.toFixed(2)}</strong>
                  <small style="font-size:0.68rem;color:var(--text-on-dark-muted);text-decoration:line-through">$${activeVar.retailPrice.toFixed(2)}</small>
                </div>
              </div>
            `;
    }).join("")}
      </div>

      <!-- Builder Totals & One-Click Actions Footer -->
      <div style="margin-top:1.25rem;padding:1rem 1.25rem;border-radius:var(--radius-md);background:rgba(0,0,0,0.4);border:1px solid var(--accent-brass);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem">
        <div style="display:flex;gap:1.5rem;flex-wrap:wrap">
          <div>
            <span style="font-size:0.7rem;color:var(--text-on-dark-muted);display:block">\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0641\u0631\u0642</span>
            <strong class="num-ltr" dir="ltr" style="font-size:1.05rem;color:#F7F3EB;text-decoration:line-through">$${builderRetailTotal.toFixed(2)}</strong>
          </div>
          <div>
            <span style="font-size:0.7rem;color:#FFD98E;display:block">\u0633\u0639\u0631 \u0627\u0644\u0628\u0627\u0642\u0629 \u0627\u0644\u0645\u062E\u0635\u0635\u0629 (-6% \u0625\u0636\u0627\u0641\u064A)</span>
            <strong class="num-ltr" dir="ltr" style="font-size:1.25rem;color:#FFD98E">$${builderPackagePrice.toFixed(2)} USD</strong>
          </div>
          <div>
            <span style="font-size:0.7rem;color:#25D366;display:block">\u0625\u062C\u0645\u0627\u0644\u064A \u062A\u0648\u0641\u064A\u0631\u0643\u0650</span>
            <strong class="num-ltr" dir="ltr" style="font-size:1.1rem;color:#25D366">$${builderSavings.toFixed(2)} USD</strong>
          </div>
        </div>

        <div style="display:flex;wrap:wrap;gap:0.65rem">
          <button type="button" onclick="window.BAYTOUKA.addBridalPackageToCart()" class="btn-primary-editorial">
            <i data-lucide="shopping-bag" style="width:17px;height:17px"></i>
            <span>\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0628\u0627\u0642\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u0644\u0644\u0633\u0644\u0629</span>
          </button>
          <button
            type="button"
            onclick="window.BAYTOUKA.sendBridalPackageWhatsApp()"
            class="btn-secondary-brass"
            style="background:transparent;color:#F7F3EB"
          >
            <i data-lucide="message-circle" style="width:17px;height:17px;color:#25D366"></i>
            <span>\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0628\u0627\u0642\u0629 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628</span>
          </button>
        </div>
      </div>
    </div>
  `;
  }
  function renderFaqAccordion(settings = {}) {
    const faqs = settings.faqs || [];
    return faqs.map(
      (item, idx) => `
      <details class="faq-accordion-item" ${idx === 0 ? "open" : ""}>
        <summary class="faq-accordion-summary">
          <span>${escapeHtml(item.q)}</span>
          <i data-lucide="chevron-down" style="width:18px;height:18px;color:var(--accent-brass);flex-shrink:0"></i>
        </summary>
        <div class="faq-accordion-body">
          <p>${escapeHtml(item.a)}</p>
        </div>
      </details>
    `
    ).join("");
  }
  function renderLebanonRegionsGrid(selectedRegionId = "tripoli", settings = {}) {
    const regions = settings.regions || DEFAULT_LEBANON_REGIONS;
    return regions.map(
      (r) => `
      <div
        class="region-card ${r.id === selectedRegionId ? "active" : ""}"
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
          <span>\u0645\u062F\u0629 \u0627\u0644\u062A\u0648\u0635\u064A\u0644: ${escapeHtml(r.etaAr)}</span>
        </div>
      </div>
    `
    ).join("");
  }

  // js/admin.js
  var adminState = {
    activeTab: "analytics",
    // 'analytics' | 'orders' | 'products' | 'packages' | 'settings'
    periodFilter: "month",
    // 'today' | 'week' | 'month' | 'all'
    selectedMonth: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7),
    // 'YYYY-MM'
    includeNewOrders: false,
    orderStatusFilter: "all",
    orderSearchQuery: "",
    productSearchQuery: "",
    productCategoryFilter: "all",
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
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 0.45);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.45);
    } catch {
    }
  }
  async function renderAdminView(store2, showToast2) {
    const rootEl = document.getElementById("admin-view");
    if (!rootEl) return;
    if (!adminState.realtimeBound) {
      adminState.realtimeBound = true;
      onRealtimeNewOrder((newOrder) => {
        adminState.unreadNewOrdersCount++;
        playNewOrderChime();
        if (typeof showToast2 === "function") {
          showToast2(`\u{1F514} \u0637\u0644\u0628\u064A\u0629 \u0648\u0627\u062A\u0633\u0627\u0628 \u062C\u062F\u064A\u062F\u0629 \u0631\u0642\u0645 ${newOrder.orderNumber} (${newOrder.customerName})`);
        }
        if (!rootEl.classList.contains("hidden") && getAdminSession()) {
          renderAdminView(store2, showToast2);
        }
      });
    }
    const session = getAdminSession();
    if (!session) {
      store2.adminAuthenticated = false;
      renderAdminAuthGate(rootEl, store2, showToast2);
      return;
    }
    store2.adminAuthenticated = true;
    adminState.includeNewOrders = Boolean(store2.settings.countNewOrdersInRevenue);
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
                  \u0644\u0648\u062D\u0629 \u0625\u062F\u0627\u0631\u0629 \xAB${escapeHtml(store2.settings.storeNameAr)}\xBB \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644\u0629
                </h1>
                <span class="sku-pill num-ltr" style="background:${isSupabaseConnected() ? "rgba(24,134,75,0.15)" : "var(--accent-saffron-soft)"};color:${isSupabaseConnected() ? "#18864B" : "var(--accent-saffron)"}">
                  ${isSupabaseConnected() ? "\u25CF Supabase Cloud \u0645\u062A\u0635\u0644" : "\u25CF \u0648\u0636\u0639 \u0627\u0644\u062A\u062E\u0632\u064A\u0646 \u0627\u0644\u0645\u062D\u0644\u064A \u0627\u0644\u0622\u0645\u0646"}
                </span>
              </div>
              <p style="font-size:0.78rem;color:var(--text-secondary)">
                \u0627\u0644\u0645\u0633\u0624\u0648\u0644: <strong class="num-ltr">${escapeHtml(session.email)}</strong> \u2022 \u062A\u062D\u0643\u0645 \u0643\u0627\u0645\u0644 \u0628\u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0627\u0644\u0634\u0647\u0631\u064A\u0629\u060C \u0627\u0644\u0637\u0644\u0628\u064A\u0627\u062A\u060C \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A\u060C \u0648\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u062A\u062C\u0631 \u0628\u062F\u0648\u0646 \u0628\u0631\u0645\u062C\u0629
              </p>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:0.55rem;flex-wrap:wrap">
            <a href="#/" class="btn-secondary-brass" style="min-height:40px;padding-inline:1rem;font-size:0.78rem">
              <i data-lucide="store" style="width:15px;height:15px"></i>
              <span>\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u062A\u062C\u0631 (Back to Store)</span>
            </a>
            <button
              type="button"
              id="admin-logout-btn"
              class="icon-action-btn"
              style="min-height:40px;color:var(--accent-terracotta)"
            >
              <i data-lucide="log-out" style="width:15px;height:15px"></i>
              <span>\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C</span>
            </button>
          </div>
        </div>

        <!-- Admin Navigation Tabs -->
        <div class="admin-tabs-bar" role="tablist" style="display:flex;gap:0.5rem;overflow-x:auto;padding-bottom:0.5rem;margin-bottom:1.5rem">
          ${[
      { id: "analytics", label: "\u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0648\u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0634\u0647\u0631\u064A", icon: "bar-chart-3" },
      {
        id: "orders",
        label: `\u0627\u0644\u0637\u0644\u0628\u064A\u0627\u062A \u0648\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 (${adminState.orders.length})`,
        icon: "shopping-bag",
        badge: adminState.unreadNewOrdersCount
      },
      {
        id: "products",
        label: `\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0648\u0627\u0644\u0639\u0627\u0626\u0644\u0627\u062A (${store2.stats.totalFamilies} \u0639\u0627\u0626\u0644\u0629 / ${store2.rawProducts.length} \u0635\u0641)`,
        icon: "package"
      },
      { id: "packages", label: "\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0639\u0631\u0627\u0626\u0633", icon: "gem" },
      { id: "settings", label: "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u062A\u062C\u0631 \u0648\u0627\u0644\u0640 White-Label", icon: "settings" }
    ].map(
      (t) => `
              <button
                type="button"
                class="admin-nav-tab ${adminState.activeTab === t.id ? "active" : ""}"
                data-admin-tab="${t.id}"
              >
                <i data-lucide="${t.icon}" style="width:16px;height:16px"></i>
                <span>${escapeHtml(t.label)}</span>
                ${t.badge ? `<span class="cart-count-badge">${t.badge}</span>` : ""}
              </button>
            `
    ).join("")}
        </div>

        <!-- Active Tab Content -->
        <div id="admin-tab-body">
          ${renderActiveAdminTab(store2)}
        </div>

      </div>
    </div>
  `;
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
    bindAdminDashboardEvents(rootEl, store2, showToast2);
  }
  function renderAdminAuthGate(rootEl, store2, showToast2) {
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
            ${sbConnected ? "\u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644 \u0627\u0644\u0625\u062F\u0627\u0631\u0629 (Supabase Auth)" : hasOwner ? "\u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644 \u0645\u0627\u0644\u0643 \u0627\u0644\u0645\u062A\u062C\u0631" : "\u0625\u0639\u062F\u0627\u062F \u062D\u0633\u0627\u0628 \u0645\u0627\u0644\u0643 \u0627\u0644\u0645\u062A\u062C\u0631 \u0644\u0623\u0648\u0644 \u0645\u0631\u0629"}
          </h1>
          <p style="font-size:0.8rem;color:var(--text-secondary)">
            ${sbConnected ? "\u0623\u062F\u062E\u0644 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u0645\u0633\u062C\u0644\u0629 \u0641\u064A Supabase Auth" : hasOwner ? "\u0623\u062F\u062E\u0644 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0645\u0627\u0644\u0643 \u0627\u0644\u0645\u062A\u062C\u0631" : "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u064A \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629 \u0641\u064A \u0627\u0644\u0643\u0648\u062F \u0644\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0645\u062A\u062C\u0631. \u0623\u0646\u0634\u0626 \u0628\u064A\u0627\u0646\u0627\u062A \u062F\u062E\u0648\u0644 \u0627\u0644\u0645\u0627\u0644\u0643 \u0627\u0644\u0622\u0646:"}
          </p>
        </div>

        <form id="admin-auth-form" style="display:grid;gap:0.85rem">
          <div>
            <label for="admin-auth-email" style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:0.3rem">\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0644\u0644\u0645\u0627\u0644\u0643 (Email) *</label>
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
            <label for="admin-auth-pass" style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:0.3rem">\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 (Password) *</label>
            <input
              type="password"
              id="admin-auth-pass"
              required
              minlength="6"
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              class="control-input num-ltr"
              dir="ltr"
              autocomplete="${hasOwner || sbConnected ? "current-password" : "new-password"}"
            />
          </div>
          <p id="admin-auth-error" class="hidden" style="font-size:0.78rem;color:var(--accent-terracotta);font-weight:700"></p>

          <button type="submit" class="btn-primary-editorial" style="width:100%;justify-content:center">
            <i data-lucide="key-round" style="width:17px;height:17px"></i>
            <span>${sbConnected || hasOwner ? "\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 \u0644\u0648\u062D\u0629 \u0627\u0644\u0625\u062F\u0627\u0631\u0629" : "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0627\u0644\u0643 \u0648\u0627\u0644\u062F\u062E\u0648\u0644"}</span>
          </button>
        </form>

        <details style="margin-top:1.25rem;padding-top:1rem;border-top:1px solid var(--border-subtle);font-size:0.76rem">
          <summary style="cursor:pointer;font-weight:700;color:var(--text-secondary)">
            \u2699\uFE0F \u0625\u0639\u062F\u0627\u062F \u0631\u0628\u0637 \u0642\u0627\u0639\u062F\u0629 \u0628\u064A\u0627\u0646\u0627\u062A Supabase (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)
          </summary>
          <div style="display:grid;gap:0.6rem;margin-top:0.75rem">
            <input type="url" id="sb-url-input" placeholder="https://xyz.supabase.co" value="${escapeHtml(sbCfg.url)}" class="control-input num-ltr" dir="ltr" style="min-height:38px;font-size:0.75rem" />
            <input type="text" id="sb-key-input" placeholder="Supabase Anon Public Key" value="${escapeHtml(sbCfg.anonKey)}" class="control-input num-ltr" dir="ltr" style="min-height:38px;font-size:0.75rem" />
            <button type="button" id="save-sb-cfg-btn" class="btn-secondary-brass" style="min-height:36px;font-size:0.75rem;justify-content:center">
              \u062D\u0641\u0638 \u0627\u062A\u0635\u0627\u0644 Supabase
            </button>
          </div>
        </details>

        <div style="margin-top:1.25rem;text-align:center">
          <a href="#/" style="font-size:0.8rem;font-weight:700;color:var(--text-muted)">\u2190 \u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u0645\u062A\u062C\u0631</a>
        </div>
      </div>
    </div>
  `;
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
    rootEl.querySelector("#admin-auth-form")?.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = rootEl.querySelector("#admin-auth-email")?.value.trim();
      const pass = rootEl.querySelector("#admin-auth-pass")?.value;
      const errEl = rootEl.querySelector("#admin-auth-error");
      try {
        if (!sbConnected && !hasOwner) {
          await registerLocalOwnerAccount(email, pass);
          showToast2?.("\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u0645\u0627\u0644\u0643 \u0627\u0644\u0645\u062A\u062C\u0631 \u0648\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0646\u062C\u0627\u062D");
        } else {
          await signInAdmin(email, pass);
          showToast2?.("\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 \u0644\u0648\u062D\u0629 \u0627\u0644\u0625\u062F\u0627\u0631\u0629");
        }
        await renderAdminView(store2, showToast2);
      } catch (err) {
        if (errEl) {
          errEl.textContent = err.message || "\u0641\u0634\u0644 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644";
          errEl.classList.remove("hidden");
        }
      }
    });
    rootEl.querySelector("#save-sb-cfg-btn")?.addEventListener("click", () => {
      const url = rootEl.querySelector("#sb-url-input")?.value.trim();
      const key = rootEl.querySelector("#sb-key-input")?.value.trim();
      saveSupabaseConfig(url, key);
      showToast2?.("\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u062A\u0635\u0627\u0644 Supabase");
      renderAdminView(store2, showToast2);
    });
  }
  function renderActiveAdminTab(store2) {
    switch (adminState.activeTab) {
      case "orders":
        return renderOrdersTab(store2);
      case "products":
        return renderProductsManagementTab(store2);
      case "packages":
        return renderPackagesAndCategoriesTab(store2);
      case "settings":
        return renderWhiteLabelSettingsTab(store2);
      case "analytics":
      default:
        return renderMonthlyAnalyticsTab(store2);
    }
  }
  function computeAnalyticsMetrics(orders, periodFilter, selectedMonth, includeNewOrders) {
    const validStatuses = includeNewOrders ? ["new", "confirmed", "delivered"] : ["confirmed", "delivered"];
    const now = /* @__PURE__ */ new Date();
    const todayStr = now.toISOString().slice(0, 10);
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1e3);
    const inPeriod = (o) => {
      if (!validStatuses.includes(o.status)) return false;
      const dStr = String(o.createdAt || "").slice(0, 10);
      if (periodFilter === "today") return dStr === todayStr;
      if (periodFilter === "week") return new Date(o.createdAt) >= weekAgo;
      if (periodFilter === "month") return dStr.startsWith(selectedMonth);
      return true;
    };
    const filtered = orders.filter(inPeriod);
    let revenue = 0;
    let wholesaleCost = 0;
    let netProfit = 0;
    let itemsSold = 0;
    let retailRevenue = 0;
    let wholesaleRevenue = 0;
    const productTally = /* @__PURE__ */ new Map();
    const regionTally = /* @__PURE__ */ new Map();
    const dailyMap = /* @__PURE__ */ new Map();
    for (let day = 1; day <= 31; day++) {
      const dayKey = String(day).padStart(2, "0");
      dailyMap.set(dayKey, { day: dayKey, revenue: 0, profit: 0, orders: 0 });
    }
    filtered.forEach((o) => {
      const rev = Number(o.subtotal || 0);
      const cost = Number(o.wholesaleCostTotal || 0);
      const prof = Number(o.netProfit ?? rev - cost);
      const pieces = Number(o.totalPieces || 0);
      revenue += rev;
      wholesaleCost += cost;
      netProfit += prof;
      itemsSold += pieces;
      if (o.pricingMode === "wholesale") wholesaleRevenue += rev;
      else retailRevenue += rev;
      const regName = o.regionNameAr || "\u0637\u0631\u0627\u0628\u0644\u0633 \u0648\u0627\u0644\u0634\u0645\u0627\u0644";
      regionTally.set(regName, (regionTally.get(regName) || 0) + rev);
      const dayPart = String(o.createdAt || "").slice(8, 10);
      if (dailyMap.has(dayPart)) {
        const dObj = dailyMap.get(dayPart);
        dObj.revenue += rev;
        dObj.profit += prof;
        dObj.orders += 1;
      }
      (o.items || []).forEach((it) => {
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
      newPendingCount: orders.filter((o) => o.status === "new").length,
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
  function renderMonthlyAnalyticsTab(store2) {
    const m = computeAnalyticsMetrics(
      adminState.orders,
      adminState.periodFilter,
      adminState.selectedMonth,
      adminState.includeNewOrders
    );
    const maxDailyRev = Math.max(10, ...m.dailySeries.map((d) => d.revenue));
    return `
    <!-- Filter & Month Selector Strip -->
    <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-lg);padding:1rem 1.25rem;margin-bottom:1.25rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem">
      <div style="display:flex;align-items:center;gap:0.45rem;flex-wrap:wrap">
        ${[
      { id: "today", label: "\u0627\u0644\u064A\u0648\u0645 (Today)" },
      { id: "week", label: "\u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 (Week)" },
      { id: "month", label: "\u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0634\u0647\u0631\u064A (Monthly)" },
      { id: "all", label: "\u0643\u0644 \u0627\u0644\u0623\u0648\u0642\u0627\u062A (All Time)" }
    ].map(
      (p) => `
            <button
              type="button"
              class="subfilter-pill ${adminState.periodFilter === p.id ? "active" : ""}"
              data-period-btn="${p.id}"
            >
              ${escapeHtml(p.label)}
            </button>
          `
    ).join("")}
      </div>

      <div style="display:flex;align-items:center;gap:0.85rem;flex-wrap:wrap">
        <label style="display:inline-flex;align-items:center;gap:0.4rem;font-size:0.78rem;font-weight:700;cursor:pointer">
          <input type="checkbox" id="toggle-include-new" ${adminState.includeNewOrders ? "checked" : ""} style="accent-color:var(--accent-terracotta)" />
          <span>\u0627\u062D\u062A\u0633\u0627\u0628 \u0627\u0644\u0637\u0644\u0628\u064A\u0627\u062A \u0627\u0644\u062C\u062F\u064A\u062F\u0629 (\u0642\u064A\u062F \u0627\u0644\u062A\u0623\u0643\u064A\u062F) \u0641\u064A \u0627\u0644\u0623\u0631\u0628\u0627\u062D</span>
        </label>

        <div style="display:flex;align-items:center;gap:0.4rem">
          <label for="admin-month-picker" style="font-size:0.78rem;font-weight:700">\u0627\u0644\u0634\u0647\u0631:</label>
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

    ${m.newPendingCount > 0 && !adminState.includeNewOrders ? `<div style="padding:0.8rem 1.1rem;border-radius:var(--radius-md);background:var(--accent-saffron-soft);border:1px solid var(--accent-brass);margin-bottom:1.25rem;display:flex;align-items:center;justify-content:space-between;gap:0.75rem;font-size:0.82rem">
             <span>\u{1F4A1} \u0644\u062F\u064A\u0643 <strong>${m.newPendingCount} \u0637\u0644\u0628\u064A\u0629 \u062C\u062F\u064A\u062F\u0629</strong> \u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062A\u0623\u0643\u064A\u062F. \u062D\u0633\u0628 \u0627\u0644\u0625\u0639\u062F\u0627\u062F \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u060C \u062A\u064F\u062D\u062A\u0633\u0628 \u0627\u0644\u0623\u0631\u0628\u0627\u062D \u0644\u0644\u0637\u0644\u0628\u064A\u0627\u062A \u0627\u0644\u0645\u0624\u0643\u062F\u0629 \u0648\u0627\u0644\u0645\u064F\u0633\u0644\u0651\u0645\u0629 \u0641\u0642\u0637.</span>
             <button type="button" class="subfilter-pill active" data-admin-tab="orders">\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0637\u0644\u0628\u064A\u0627\u062A</button>
           </div>` : ""}

    <!-- 6 KPI Cards -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(195px,1fr));gap:1rem;margin-bottom:1.5rem">
      <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-lg);padding:1.15rem">
        <span style="font-size:0.75rem;color:var(--text-muted);font-weight:700;display:block">\u0639\u062F\u062F \u0627\u0644\u0637\u0644\u0628\u064A\u0627\u062A \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629</span>
        <strong class="num-ltr" dir="ltr" style="font-size:1.85rem;font-weight:800;display:block;margin-block:0.2rem">${m.ordersCount}</strong>
        <span style="font-size:0.72rem;color:var(--text-secondary)">\u0625\u062C\u0645\u0627\u0644\u064A \u0643\u0644 \u0627\u0644\u062D\u0627\u0644\u0627\u062A: ${m.totalAllStatusCount}</span>
      </div>

      <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-lg);padding:1.15rem">
        <span style="font-size:0.75rem;color:var(--text-muted);font-weight:700;display:block">\u0627\u0644\u0642\u0637\u0639 \u0627\u0644\u0645\u0628\u0627\u0639\u0629 (Items Sold)</span>
        <strong class="num-ltr" dir="ltr" style="font-size:1.85rem;font-weight:800;display:block;margin-block:0.2rem">${m.itemsSold}</strong>
        <span style="font-size:0.72rem;color:var(--text-secondary)">\u0642\u0637\u0639\u0629 \u0645\u0628\u0627\u0639\u0629 \u0641\u064A \u0627\u0644\u0641\u062A\u0631\u0629</span>
      </div>

      <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-lg);padding:1.15rem">
        <span style="font-size:0.75rem;color:var(--text-muted);font-weight:700;display:block">\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A (Revenue)</span>
        <strong class="num-ltr" dir="ltr" style="font-size:1.85rem;font-weight:800;color:var(--text-primary);display:block;margin-block:0.2rem">$${m.revenue.toFixed(2)}</strong>
        <span class="num-ltr" dir="ltr" style="font-size:0.72rem;color:var(--text-secondary)">\u0643\u0644\u0641\u0629 \u0627\u0644\u062C\u0645\u0644\u0629: $${m.wholesaleCost.toFixed(2)}</span>
      </div>

      <div style="background:#171914;color:#F7F3EB;border:1px solid var(--accent-brass);border-radius:var(--radius-lg);padding:1.15rem">
        <span style="font-size:0.75rem;color:#FFD98E;font-weight:700;display:block">\u0635\u0627\u0641\u064A \u0627\u0644\u0631\u0628\u062D (Net Profit)</span>
        <strong class="num-ltr" dir="ltr" style="font-size:1.85rem;font-weight:800;color:#25D366;display:block;margin-block:0.2rem">$${m.netProfit.toFixed(2)}</strong>
        <span style="font-size:0.72rem;color:var(--text-on-dark-muted)">\u0628\u0639\u062F \u062E\u0635\u0645 \u0627\u0644\u0643\u0644\u0641\u0629 \u0627\u0644\u062A\u0642\u062F\u064A\u0631\u064A\u0629</span>
      </div>

      <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-lg);padding:1.15rem">
        <span style="font-size:0.75rem;color:var(--text-muted);font-weight:700;display:block">\u0645\u062A\u0648\u0633\u0637 \u0642\u064A\u0645\u0629 \u0627\u0644\u0637\u0644\u0628\u064A\u0629 (AOV)</span>
        <strong class="num-ltr" dir="ltr" style="font-size:1.85rem;font-weight:800;color:var(--accent-terracotta);display:block;margin-block:0.2rem">$${m.aov.toFixed(2)}</strong>
        <span class="num-ltr" dir="ltr" style="font-size:0.72rem;color:var(--text-secondary)">\u0645\u0641\u0631\u0642: $${m.retailRevenue.toFixed(0)} | \u062C\u0645\u0644\u0629: $${m.wholesaleRevenue.toFixed(0)}</span>
      </div>
    </div>

    <!-- Monthly SVG Bar Chart -->
    <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-xl);padding:1.4rem;margin-bottom:1.5rem">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1rem;flex-wrap:wrap">
        <div>
          <h3 style="font-family:var(--font-display);font-size:1.25rem;font-weight:700">
            \u0645\u062E\u0637\u0637 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0648\u0627\u0644\u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0634\u0647\u0631\u064A\u0629 (${escapeHtml(adminState.selectedMonth)})
          </h3>
          <p style="font-size:0.78rem;color:var(--text-muted)">
            \u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0627\u0644\u064A\u0648\u0645\u064A\u0629 \u0648\u0635\u0627\u0641\u064A \u0627\u0644\u0631\u0628\u062D \u0628\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A (\u062E\u0627\u0644\u064D \u062A\u0645\u0627\u0645\u0627\u064B \u0645\u0646 \u0623\u064A \u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0647\u0645\u064A\u0629)
          </p>
        </div>
        <div style="display:flex;gap:1rem;font-size:0.75rem;font-weight:700">
          <span style="display:inline-flex;align-items:center;gap:0.35rem"><span style="width:10px;height:10px;border-radius:2px;background:var(--accent-terracotta)"></span> \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A ($)</span>
          <span style="display:inline-flex;align-items:center;gap:0.35rem"><span style="width:10px;height:10px;border-radius:2px;background:#18864B"></span> \u0635\u0627\u0641\u064A \u0627\u0644\u0631\u0628\u062D ($)</span>
        </div>
      </div>

      ${m.ordersCount === 0 ? `<div style="padding:2.75rem 1rem;text-align:center;border:1px dashed var(--border-strong);border-radius:var(--radius-lg);background:var(--bg-subtle)">
               <i data-lucide="bar-chart-2" style="width:32px;height:32px;color:var(--accent-brass);margin:0 auto 0.6rem"></i>
               <h4 style="font-size:0.95rem;font-weight:800;margin-bottom:0.25rem">\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0628\u064A\u0639\u0627\u062A \u0645\u0633\u062C\u0644\u0629 \u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u0641\u062A\u0631\u0629 ($0.00)</h4>
               <p style="font-size:0.78rem;color:var(--text-muted);max-width:48ch;margin:0 auto">
                 \u062A\u064F\u0633\u062C\u0644 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0641\u0648\u0631 \u0636\u063A\u0637 \u0627\u0644\u0632\u0628\u0648\u0646 \u0639\u0644\u0649 \u0632\u0631 \xAB\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628\u064A\u0629 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628\xBB \u0641\u064A \u0633\u0644\u0629 \u0627\u0644\u062A\u0633\u0648\u0642 \u0648\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628\u064A\u0629 \u0645\u0646 \u0642\u0650\u0628\u0644 \u0627\u0644\u0625\u062F\u0627\u0631\u0629.
               </p>
             </div>` : `<div style="overflow-x:auto">
               <svg viewBox="0 0 930 220" style="width:100%;min-width:640px;height:210px;display:block">
                 <line x1="30" y1="185" x2="915" y2="185" stroke="rgba(178,134,70,0.35)" stroke-width="1"/>
                 ${m.dailySeries.map((d, idx) => {
      const x = 38 + idx * 28;
      const revH = Math.round(d.revenue / maxDailyRev * 150);
      const profH = Math.round(Math.max(0, d.profit) / maxDailyRev * 150);
      return `
                       <g>
                         <title>\u064A\u0648\u0645 ${d.day}: \u0645\u0628\u064A\u0639\u0627\u062A $${d.revenue.toFixed(2)} | \u0631\u0628\u062D $${d.profit.toFixed(2)}</title>
                         <rect x="${x}" y="${185 - revH}" width="10" height="${Math.max(2, revH)}" rx="3" fill="#B64624" opacity="${d.revenue > 0 ? "1" : "0.18"}"/>
                         <rect x="${x + 11}" y="${185 - profH}" width="8" height="${Math.max(2, profH)}" rx="2" fill="#18864B" opacity="${d.profit > 0 ? "1" : "0.18"}"/>
                         <text x="${x + 9}" y="204" text-anchor="middle" font-size="9" font-family="monospace" fill="#767164">${d.day}</text>
                       </g>
                     `;
    }).join("")}
               </svg>
             </div>`}
    </div>

    <!-- Top Products & Top Regions Split -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:1.25rem">
      <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-lg);padding:1.25rem">
        <h4 style="font-size:0.95rem;font-weight:800;margin-bottom:0.85rem">\u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0628\u064A\u0639\u0627\u064B \u0641\u064A \u0627\u0644\u0641\u062A\u0631\u0629</h4>
        ${m.topProducts.length === 0 ? `<p style="font-size:0.8rem;color:var(--text-muted)">\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0635\u0646\u0627\u0641 \u0645\u0628\u0627\u0639\u0629 \u0628\u0639\u062F ($0.00).</p>` : `<div style="display:grid;gap:0.55rem">
                 ${m.topProducts.map(
      (tp) => `
                     <div style="display:flex;align-items:center;justify-content:space-between;padding:0.55rem 0.75rem;border-radius:var(--radius-sm);background:var(--bg-subtle);font-size:0.8rem">
                       <div>
                         <strong style="display:block">${escapeHtml(tp.nameAr)}</strong>
                         <span class="num-ltr" style="font-size:0.7rem;color:var(--text-muted)">SKU: ${escapeHtml(tp.sku)} \u2022 \u0627\u0644\u0643\u0645\u064A\u0629: ${tp.qty}</span>
                       </div>
                       <strong class="num-ltr" dir="ltr" style="color:var(--accent-terracotta)">$${tp.revenue.toFixed(2)}</strong>
                     </div>
                   `
    ).join("")}
               </div>`}
      </div>

      <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-lg);padding:1.25rem">
        <h4 style="font-size:0.95rem;font-weight:800;margin-bottom:0.85rem">\u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u062D\u0633\u0628 \u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0627\u062A \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064A\u0629</h4>
        ${m.topRegions.length === 0 ? `<p style="font-size:0.8rem;color:var(--text-muted)">\u0644\u0627 \u062A\u0648\u062C\u062F \u0637\u0644\u0628\u064A\u0627\u062A \u0645\u0633\u062C\u0644\u0629 \u062D\u0633\u0628 \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0628\u0639\u062F.</p>` : `<div style="display:grid;gap:0.55rem">
                 ${m.topRegions.map(
      (tr) => `
                     <div style="display:flex;align-items:center;justify-content:space-between;padding:0.55rem 0.75rem;border-radius:var(--radius-sm);background:var(--bg-subtle);font-size:0.8rem">
                       <strong>${escapeHtml(tr.name)}</strong>
                       <strong class="num-ltr" dir="ltr" style="color:#18864B">$${tr.revenue.toFixed(2)} USD</strong>
                     </div>
                   `
    ).join("")}
               </div>`}
      </div>
    </div>
  `;
  }
  function renderOrdersTab(store2) {
    adminState.unreadNewOrdersCount = 0;
    const q = adminState.orderSearchQuery.toLowerCase().trim();
    const statusFilter = adminState.orderStatusFilter;
    const filtered = adminState.orders.filter((o) => {
      if (statusFilter !== "all" && o.status !== statusFilter) return false;
      if (!q) return true;
      const hay = `${o.orderNumber} ${o.customerName} ${o.customerPhone} ${o.regionNameAr} ${(o.items || []).map((i) => i.sku + " " + i.nameAr).join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
    const statusLabels = {
      new: { label: "\u062C\u062F\u064A\u062F (New)", color: "#C67D0F", bg: "rgba(198,125,15,0.15)" },
      confirmed: { label: "\u0645\u0624\u0643\u062F (Confirmed)", color: "#1C5D68", bg: "rgba(28,93,104,0.15)" },
      delivered: { label: "\u062A\u0645 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 (Delivered)", color: "#18864B", bg: "rgba(24,134,75,0.16)" },
      cancelled: { label: "\u0645\u0644\u063A\u0649 (Cancelled)", color: "#B64624", bg: "rgba(182,70,36,0.15)" }
    };
    return `
    <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-xl);padding:1.25rem">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.85rem;margin-bottom:1.25rem">
        <div style="display:flex;gap:0.45rem;flex-wrap:wrap">
          ${[
      { id: "all", label: `\u0627\u0644\u0643\u0644 (${adminState.orders.length})` },
      { id: "new", label: "\u062C\u062F\u064A\u062F" },
      { id: "confirmed", label: "\u0645\u0624\u0643\u062F" },
      { id: "delivered", label: "\u062A\u0645 \u0627\u0644\u062A\u0633\u0644\u064A\u0645" },
      { id: "cancelled", label: "\u0645\u0644\u063A\u0649" }
    ].map(
      (s) => `
              <button type="button" class="subfilter-pill ${statusFilter === s.id ? "active" : ""}" data-order-status-filter="${s.id}">
                ${escapeHtml(s.label)}
              </button>
            `
    ).join("")}
        </div>

        <div style="display:flex;gap:0.55rem;flex-wrap:wrap;flex:1;max-width:460px">
          <input
            type="search"
            id="admin-order-search"
            value="${escapeHtml(adminState.orderSearchQuery)}"
            placeholder="\u0627\u0628\u062D\u062B \u0628\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628\u064A\u0629\u060C \u0627\u0633\u0645 \u0627\u0644\u0632\u0628\u0648\u0646\u060C \u0627\u0644\u0647\u0627\u062A\u0641\u060C \u0623\u0648 \u0627\u0644\u0643\u0648\u062F..."
            class="control-input"
            style="min-height:38px;flex:1"
          />
          <button type="button" id="admin-export-orders-csv" class="btn-secondary-brass" style="min-height:38px;padding-inline:0.9rem;font-size:0.76rem">
            <i data-lucide="download" style="width:14px;height:14px"></i>
            <span>\u062A\u0635\u062F\u064A\u0631 CSV</span>
          </button>
        </div>
      </div>

      ${filtered.length === 0 ? `<div style="padding:3rem 1rem;text-align:center;background:var(--bg-subtle);border-radius:var(--radius-lg);border:1px dashed var(--border-strong)">
               <h4 style="font-size:1rem;font-weight:800;margin-bottom:0.3rem">\u0644\u0627 \u062A\u0648\u062C\u062F \u0637\u0644\u0628\u064A\u0627\u062A \u0645\u0637\u0627\u0628\u0642\u0629</h4>
               <p style="font-size:0.8rem;color:var(--text-muted)">\u0639\u0646\u062F\u0645\u0627 \u064A\u0636\u063A\u0637 \u0627\u0644\u0632\u0628\u0648\u0646 \u0639\u0644\u0649 \u0632\u0631 \xAB\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628\u064A\u0629 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628\xBB \u0641\u064A \u0627\u0644\u0633\u0644\u0629\u060C \u0633\u062A\u0638\u0647\u0631 \u0627\u0644\u0637\u0644\u0628\u064A\u0629 \u0647\u0646\u0627 \u0641\u0648\u0631\u0627\u064B \u0645\u0639 \u0631\u0642\u0645\u0647\u0627 \u0648\u062A\u0641\u0627\u0635\u064A\u0644\u0647\u0627.</p>
             </div>` : `<div style="display:grid;gap:0.85rem">
               ${filtered.map((o) => {
      const st = statusLabels[o.status] || statusLabels.new;
      const cleanPhone = String(o.customerPhone || "").replace(/[^0-9]/g, "");
      const waReplyPhone = cleanPhone.startsWith("961") ? cleanPhone : `961${cleanPhone.replace(/^0+/, "")}`;
      const waReplyMsg = `\u0645\u0631\u062D\u0628\u0627\u064B ${o.customerName}\u060C \u0646\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0645\u0646 \u0645\u062A\u062C\u0631 ${store2.settings.storeNameAr} \u0628\u062E\u0635\u0648\u0635 \u0637\u0644\u0628\u064A\u062A\u0643 \u0631\u0642\u0645 ${o.orderNumber} \u0628\u0642\u064A\u0645\u0629 $${Number(o.grandTotal).toFixed(2)} USD.`;
      return `
                     <div style="padding:1rem 1.15rem;border-radius:var(--radius-lg);background:var(--bg-subtle);border:1px solid var(--border-strong)">
                       <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;padding-bottom:0.75rem;border-bottom:1px solid var(--border-subtle)">
                         <div>
                           <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap">
                             <strong class="num-ltr" style="font-size:0.95rem">${escapeHtml(o.orderNumber)}</strong>
                             <span style="font-size:0.72rem;font-weight:800;padding:0.15rem 0.6rem;border-radius:99px;background:${st.bg};color:${st.color}">${st.label}</span>
                             <span class="sku-pill">${o.pricingMode === "wholesale" ? "\u062C\u0645\u0644\u0629 (Wholesale)" : "\u0645\u0641\u0631\u0642 (Retail)"}</span>
                           </div>
                           <div style="font-size:0.78rem;color:var(--text-secondary);margin-top:0.25rem">
                             \u{1F464} <strong>${escapeHtml(o.customerName)}</strong> \u2022 \u{1F4DE} <span class="num-ltr">${escapeHtml(o.customerPhone)}</span> \u2022 \u{1F4CD} ${escapeHtml(o.regionNameAr)} (${escapeHtml(o.address)})
                           </div>
                         </div>

                         <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap">
                           <select class="control-select" data-order-status-select="${escapeHtml(o.id)}" style="min-height:36px;width:auto;font-size:0.76rem">
                             <option value="new" ${o.status === "new" ? "selected" : ""}>\u062C\u062F\u064A\u062F (New)</option>
                             <option value="confirmed" ${o.status === "confirmed" ? "selected" : ""}>\u0645\u0624\u0643\u062F (Confirmed)</option>
                             <option value="delivered" ${o.status === "delivered" ? "selected" : ""}>\u062A\u0645 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 (Delivered)</option>
                             <option value="cancelled" ${o.status === "cancelled" ? "selected" : ""}>\u0645\u0644\u063A\u0649 (Cancelled)</option>
                           </select>

                           <a
                             href="https://wa.me/${encodeURIComponent(waReplyPhone)}?text=${encodeURIComponent(waReplyMsg)}"
                             target="_blank"
                             rel="noopener noreferrer"
                             class="icon-action-btn"
                             style="min-height:36px;color:#18864B;border-color:rgba(24,134,75,0.4)"
                             title="\u0627\u0644\u0631\u062F \u0639\u0644\u0649 \u0627\u0644\u0632\u0628\u0648\u0646 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628"
                           >
                             <i data-lucide="message-circle" style="width:14px;height:14px"></i>
                             <span>\u0648\u0627\u062A\u0633\u0627\u0628</span>
                           </a>

                           <button
                             type="button"
                             class="icon-action-btn"
                             data-print-order="${escapeHtml(o.id)}"
                             style="min-height:36px"
                             title="\u0637\u0628\u0627\u0639\u0629 \u0641\u0627\u062A\u0648\u0631\u0629 \u0627\u0644\u0637\u0644\u0628\u064A\u0629 PDF"
                           >
                             <i data-lucide="printer" style="width:14px;height:14px"></i>
                             <span>\u0641\u0627\u062A\u0648\u0631\u0629</span>
                           </button>
                         </div>
                       </div>

                       <!-- Order Items & Totals -->
                       <div style="margin-top:0.75rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;font-size:0.78rem">
                         <div style="display:flex;flex-wrap:wrap;gap:0.45rem">
                           ${(o.items || []).map(
        (it) => `
                               <span class="sku-pill">
                                 ${escapeHtml(it.nameAr)} (<strong class="num-ltr">${escapeHtml(it.sku)}</strong>) \xD7 <strong class="num-ltr">${it.qty}</strong> = <strong class="num-ltr" dir="ltr">$${Number(it.lineTotal).toFixed(2)}</strong>
                               </span>
                             `
      ).join("")}
                         </div>

                         <div class="num-ltr" dir="ltr" style="font-weight:800;font-size:0.88rem">
                           Subtotal: $${Number(o.subtotal).toFixed(2)} + Delivery: $${Number(o.deliveryFee).toFixed(2)} =
                           <span style="color:var(--accent-terracotta);font-size:1rem">$${Number(o.grandTotal).toFixed(2)} USD</span>
                           <small style="color:#18864B;margin-left:6px">(Profit: +$${Number(o.netProfit || 0).toFixed(2)})</small>
                         </div>
                       </div>
                     </div>
                   `;
    }).join("")}
             </div>`}
    </div>
  `;
  }
  function renderProductsManagementTab(store2) {
    const q = adminState.productSearchQuery.toLowerCase().trim();
    const catFilter = adminState.productCategoryFilter;
    const filteredRaw = store2.rawProducts.filter((p) => {
      if (catFilter !== "all" && p.category !== catFilter) return false;
      if (!q) return true;
      return `${p.nameAr} ${p.sku} ${p.box} ${p.category} ${p.badge || ""}`.toLowerCase().includes(q);
    });
    const mergeReport = previewDuplicateMerge(store2.rawProducts);
    return `
    <!-- Top Product Actions Bar -->
    <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-xl);padding:1.25rem;margin-bottom:1.25rem">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1rem">
        <div>
          <h3 style="font-family:var(--font-display);font-size:1.25rem;font-weight:700">
            \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0648\u0627\u0644\u0639\u0627\u0626\u0644\u0627\u062A \u0648\u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0628\u062F\u0648\u0646 \u0628\u0631\u0645\u062C\u0629
          </h3>
          <p style="font-size:0.78rem;color:var(--text-secondary)">
            \u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0635\u0641\u0648\u0641: <strong class="num-ltr">${store2.rawProducts.length}</strong> \u0635\u0641 \u2022 \u0645\u062F\u0645\u062C\u0629 \u0641\u064A \u0627\u0644\u0648\u0627\u062C\u0647\u0629 \u0636\u0645\u0646 <strong class="num-ltr">${store2.stats.totalFamilies}</strong> \u0639\u0627\u0626\u0644\u0629 \u0645\u0646\u062A\u062C \u0645\u0639 \u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0648\u062F\u064A\u0644\u0627\u062A
          </p>
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:0.5rem">
          <button type="button" id="admin-new-product-btn" class="btn-primary-editorial" style="min-height:40px;font-size:0.78rem">
            <i data-lucide="plus" style="width:16px;height:16px"></i>
            <span>\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u062C \u062C\u062F\u064A\u062F</span>
          </button>

          <button type="button" id="admin-open-merge-preview-btn" class="btn-secondary-brass" style="min-height:40px;font-size:0.78rem">
            <i data-lucide="git-merge" style="width:16px;height:16px;color:var(--accent-terracotta)"></i>
            <span>\u0623\u062F\u0627\u0629 \u062F\u0645\u062C \u0627\u0644\u062A\u0643\u0631\u0627\u0631\u0627\u062A (${mergeReport.mergedDuplicateRowsCount} \u062A\u0643\u0631\u0627\u0631)</span>
          </button>

          ${hasCatalogUndoBackup() ? `<button type="button" id="admin-undo-catalog-btn" class="icon-action-btn" style="min-height:40px;color:#18864B;border-color:#18864B">
                   <i data-lucide="undo-2" style="width:15px;height:15px"></i>
                   <span>\u062A\u0631\u0627\u062C\u0639 \u0639\u0646 \u0622\u062E\u0631 \u062A\u0639\u062F\u064A\u0644 (Undo)</span>
                 </button>` : ""}

          <button type="button" id="admin-export-catalog-json" class="icon-action-btn" style="min-height:40px">
            <i data-lucide="download" style="width:15px;height:15px"></i>
            <span>\u062A\u0635\u062F\u064A\u0631 \u0646\u0633\u062E\u0629 \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629 JSON</span>
          </button>

          <label class="icon-action-btn" style="min-height:40px;cursor:pointer">
            <i data-lucide="upload" style="width:15px;height:15px"></i>
            <span>\u0627\u0633\u062A\u064A\u0631\u0627\u062F JSON/CSV</span>
            <input type="file" id="admin-import-file-input" accept=".json,.csv" class="hidden" />
          </label>
        </div>
      </div>

      <!-- Bulk Price Editor Strip -->
      <div style="padding:0.85rem 1rem;border-radius:var(--radius-md);background:var(--bg-subtle);border:1px solid var(--border-subtle);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;margin-bottom:1rem">
        <div style="font-size:0.8rem;font-weight:700">
          \u26A1 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u062C\u0645\u0627\u0639\u064A (Bulk Price Adjust):
        </div>
        <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap">
          <input type="number" id="bulk-pct-input" value="10" step="1" min="-50" max="100" class="control-input num-ltr" style="width:90px;min-height:36px;font-size:0.8rem" />
          <span style="font-size:0.8rem;font-weight:700">%</span>
          <button type="button" id="apply-bulk-price-btn" class="subfilter-pill active">
            \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0646\u0633\u0628\u0629 \u0639\u0644\u0649 \u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u062D\u062F\u062F\u0629 (\u0645\u0639 \u062D\u0641\u0638 \u0646\u0633\u062E\u0629 \u062A\u0631\u0627\u062C\u0639)
          </button>
        </div>
      </div>

      <!-- Search & Category Filter -->
      <div style="display:grid;grid-template-columns:1fr auto;gap:0.75rem">
        <input
          type="search"
          id="admin-product-search"
          value="${escapeHtml(adminState.productSearchQuery)}"
          placeholder="\u0627\u0628\u062D\u062B \u0628\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0639\u0631\u0628\u064A\u060C \u0627\u0644\u0643\u0648\u062F (SKU)\u060C \u0623\u0648 \u0631\u0642\u0645 \u0627\u0644\u0643\u0631\u062A\u0648\u0646\u0629 (Box)..."
          class="control-input"
          style="min-height:40px"
        />
        <select id="admin-product-cat-filter" class="control-select" style="min-height:40px;width:auto">
          <option value="all">\u0643\u0644 \u0627\u0644\u0641\u0626\u0627\u062A (${store2.rawProducts.length})</option>
          ${(store2.categories || []).map(
      (c) => `<option value="${escapeHtml(c.id)}" ${catFilter === c.id ? "selected" : ""}>${escapeHtml(c.shortAr || c.id)}</option>`
    ).join("")}
        </select>
      </div>
    </div>

    ${adminState.mergePreviewOpen ? renderMergeDuplicatesPreviewCard(mergeReport) : ""}
    ${adminState.editingProduct ? renderProductEditorModalCard(adminState.editingProduct, store2) : ""}

    <!-- Inline Editable Products Table (First 60 matching rows for fast DOM) -->
    <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-xl);overflow:hidden">
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:0.78rem;text-align:right">
          <thead>
            <tr style="background:var(--bg-muted);border-bottom:1px solid var(--border-strong)">
              <th style="padding:0.75rem">\u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0641\u0646\u064A</th>
              <th style="padding:0.75rem">SKU / Box</th>
              <th style="padding:0.75rem">\u0627\u0633\u0645 \u0627\u0644\u0635\u0646\u0641 \u0648\u0627\u0644\u0641\u0626\u0629</th>
              <th style="padding:0.75rem">\u0633\u0639\u0631 \u0627\u0644\u062C\u0645\u0644\u0629 ($)</th>
              <th style="padding:0.75rem">\u0633\u0639\u0631 \u0627\u0644\u0645\u0641\u0631\u0642 ($)</th>
              <th style="padding:0.75rem">\u0627\u0644\u0634\u0627\u0631\u0629</th>
              <th style="padding:0.75rem">\u0627\u0644\u062D\u0627\u0644\u0629</th>
              <th style="padding:0.75rem">\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>
            </tr>
          </thead>
          <tbody>
            ${filteredRaw.slice(0, 60).map(
      (p) => `
                <tr style="border-bottom:1px solid var(--border-subtle);opacity:${p.active === false ? "0.48" : "1"}">
                  <td style="padding:0.55rem 0.75rem;width:58px">
                    <div style="width:44px;height:44px">
                      ${renderArtTile(p, { size: "sm", showMeta: false })}
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
                      value="${escapeHtml(p.badge || "")}"
                      placeholder="\u0628\u062F\u0648\u0646 \u0634\u0627\u0631\u0629"
                      data-inline-field="badge"
                      data-prod-id="${p.id}"
                      class="control-input"
                      style="min-height:32px;font-size:0.74rem"
                    />
                  </td>
                  <td style="padding:0.55rem 0.75rem">
                    <button
                      type="button"
                      class="subfilter-pill ${p.active !== false ? "active" : ""}"
                      data-toggle-active="${p.id}"
                      style="font-size:0.68rem;padding:0.2rem 0.55rem"
                    >
                      ${p.active !== false ? "\u0638\u0627\u0647\u0631" : "\u0645\u062E\u0641\u064A"}
                    </button>
                  </td>
                  <td style="padding:0.55rem 0.75rem">
                    <div style="display:flex;gap:0.3rem">
                      <button type="button" class="icon-action-btn" data-edit-prod="${p.id}" style="min-width:32px;min-height:32px;padding:4px" title="\u062A\u0639\u062F\u064A\u0644 \u0643\u0627\u0645\u0644 \u0648\u0631\u0641\u0639 \u0635\u0648\u0631\u0629">
                        <i data-lucide="edit-3" style="width:14px;height:14px"></i>
                      </button>
                      <button type="button" class="icon-action-btn" data-dup-prod="${p.id}" style="min-width:32px;min-height:32px;padding:4px" title="\u0646\u0633\u062E \u0627\u0644\u0645\u0646\u062A\u062C">
                        <i data-lucide="copy" style="width:14px;height:14px"></i>
                      </button>
                      <button type="button" class="icon-action-btn" data-del-prod="${p.id}" style="min-width:32px;min-height:32px;padding:4px;color:var(--accent-terracotta)" title="\u062D\u0630\u0641">
                        <i data-lucide="trash-2" style="width:14px;height:14px"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              `
    ).join("")}
          </tbody>
        </table>
      </div>
      <div style="padding:0.75rem 1rem;background:var(--bg-subtle);font-size:0.75rem;color:var(--text-muted)">
        \u064A\u062A\u0645 \u0639\u0631\u0636 \u0623\u0648\u0644 ${Math.min(60, filteredRaw.length)} \u0645\u0646 \u0623\u0635\u0644 ${filteredRaw.length} \u0635\u0641 \u0645\u0637\u0627\u0628\u0642. \u0623\u064A \u062A\u0639\u062F\u064A\u0644 \u0641\u064A \u0627\u0644\u062D\u0642\u0648\u0644 \u0623\u0639\u0644\u0627\u0647 \u064A\u064F\u062D\u0641\u0638 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0648\u064A\u064F\u062D\u062F\u0651\u062B \u0639\u0627\u0626\u0644\u0627\u062A \u0627\u0644\u0645\u062A\u062C\u0631 \u0641\u0648\u0631\u0627\u064B.
      </div>
    </div>
  `;
  }
  function renderMergeDuplicatesPreviewCard(report) {
    return `
    <div style="background:#171914;color:#F7F3EB;border:1.5px solid var(--accent-brass);border-radius:var(--radius-xl);padding:1.5rem;margin-bottom:1.5rem">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1rem;flex-wrap:wrap">
        <div>
          <span class="bento-count-pill" style="margin-bottom:0.35rem">\u0645\u0639\u0627\u064A\u0646\u0629 \u062F\u0645\u062C \u0627\u0644\u062A\u0643\u0631\u0627\u0631\u0627\u062A \u0641\u064A \u0639\u0627\u0626\u0644\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A</span>
          <h4 style="font-family:var(--font-display);font-size:1.3rem;color:#FFD98E">
            \u062A\u062D\u0648\u064A\u0644 ${report.beforeRowCount} \u0635\u0641\u0627\u064B \u0625\u0644\u0649 ${report.afterFamilyCount} \u0639\u0627\u0626\u0644\u0629 \u0645\u0646\u062A\u062C \u0631\u0626\u064A\u0633\u064A\u0629 (${report.multiVariantFamiliesCount} \u0639\u0627\u0626\u0644\u0629 \u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u0645\u0648\u062F\u064A\u0644\u0627\u062A)
          </h4>
        </div>
        <div style="display:flex;gap:0.5rem">
          <button type="button" id="confirm-merge-families-btn" class="btn-primary-editorial" style="min-height:38px;font-size:0.78rem">
            \u062A\u0623\u0643\u064A\u062F \u0648\u062D\u0641\u0638 \u0645\u0641\u0627\u062A\u064A\u062D \u0627\u0644\u0639\u0627\u0626\u0644\u0627\u062A (\u0645\u0639 \u0623\u062E\u0630 \u0646\u0633\u062E\u0629 \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629)
          </button>
          <button type="button" id="close-merge-preview-btn" class="icon-action-btn" style="min-height:38px;background:rgba(255,255,255,0.1);color:#fff">
            \u0625\u063A\u0644\u0627\u0642
          </button>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:0.65rem;max-height:260px;overflow-y:auto">
        ${report.topMergedFamilies.map(
      (f) => `
            <div style="padding:0.7rem;border-radius:var(--radius-md);background:rgba(255,255,255,0.06);border:1px solid rgba(204,160,94,0.28);font-size:0.76rem">
              <strong style="color:#FFD98E;display:block">${escapeHtml(f.baseNameAr)}</strong>
              <span style="color:var(--text-on-dark-muted)">${f.variantCount} \u0645\u0648\u062F\u064A\u0644\u0627\u062A \u0645\u062F\u0645\u062C\u0629 \u2022 \u0627\u0644\u0633\u0639\u0631: <strong class="num-ltr" dir="ltr">${f.priceRangeRetail}</strong></span>
              <div class="num-ltr" style="font-size:0.68rem;opacity:0.75;margin-top:0.2rem">SKUs: ${escapeHtml(f.sampleSkus)}...</div>
            </div>
          `
    ).join("")}
      </div>
    </div>
  `;
  }
  function renderProductEditorModalCard(prod, store2) {
    return `
    <div style="background:var(--bg-elevated);border:2px solid var(--accent-terracotta);border-radius:var(--radius-xl);padding:1.5rem;margin-bottom:1.5rem;box-shadow:var(--shadow-lg)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem">
        <h4 style="font-family:var(--font-display);font-size:1.25rem;font-weight:700">
          ${prod.isNew ? "\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u062C / \u0645\u0648\u062F\u064A\u0644 \u062C\u062F\u064A\u062F" : `\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0635\u0646\u0641: ${escapeHtml(prod.nameAr)}`}
        </h4>
        <button type="button" id="cancel-edit-prod-btn" class="icon-action-btn" style="min-height:34px">\u0625\u063A\u0644\u0627\u0642</button>
      </div>

      <form id="admin-product-modal-form" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:0.85rem">
        <div>
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">\u0627\u0633\u0645 \u0627\u0644\u0635\u0646\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 *</label>
          <input type="text" name="nameAr" required value="${escapeHtml(prod.nameAr || "")}" class="control-input" />
        </div>
        <div>
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">\u0627\u0644\u0641\u0626\u0629 *</label>
          <select name="category" class="control-select">
            ${(store2.categories || []).map(
      (c) => `<option value="${escapeHtml(c.id)}" ${prod.category === c.id ? "selected" : ""}>${escapeHtml(c.shortAr || c.id)}</option>`
    ).join("")}
          </select>
        </div>
        <div>
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">\u0643\u0648\u062F \u0627\u0644\u0645\u0648\u062F\u064A\u0644 (SKU) *</label>
          <input type="text" name="sku" required value="${escapeHtml(prod.sku || "")}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">\u0631\u0642\u0645 \u0627\u0644\u0643\u0631\u062A\u0648\u0646\u0629 (Box)</label>
          <input type="text" name="box" value="${escapeHtml(prod.box || "1")}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">\u0633\u0639\u0631 \u0627\u0644\u062C\u0645\u0644\u0629 ($) *</label>
          <input type="number" step="0.05" name="wholesalePrice" required value="${Number(prod.wholesalePrice || 5).toFixed(2)}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">\u0633\u0639\u0631 \u0627\u0644\u0645\u0641\u0631\u0642 ($) *</label>
          <input type="number" step="0.05" name="retailPrice" required value="${Number(prod.retailPrice || 8).toFixed(2)}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A (Specs)</label>
          <input type="text" name="specs" value="${escapeHtml(prod.specs || "Standard")}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">\u0627\u0644\u0634\u0627\u0631\u0629 (Badge)</label>
          <input type="text" name="badge" value="${escapeHtml(prod.badge || "")}" placeholder="\u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0628\u064A\u0639\u0627\u064B / \u062C\u062F\u064A\u062F / \u0639\u0631\u0636 \u062E\u0627\u0635" class="control-input" />
        </div>
        <div style="grid-column:1/-1">
          <label style="font-size:0.74rem;font-weight:700;display:block;margin-bottom:0.25rem">\u0648\u0635\u0641 \u0627\u0644\u0635\u0646\u0641</label>
          <input type="text" name="descAr" value="${escapeHtml(prod.descAr || "")}" class="control-input" />
        </div>
        <div style="grid-column:1/-1;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;padding-top:0.5rem">
          <div style="display:flex;align-items:center;gap:0.65rem;flex-wrap:wrap">
            <label class="btn-secondary-brass" style="min-height:38px;font-size:0.76rem;cursor:pointer">
              <i data-lucide="image-plus" style="width:15px;height:15px"></i>
              <span>\u0631\u0641\u0639 \u0635\u0648\u0631\u0629 \u062D\u0642\u064A\u0642\u064A\u0629 \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u062F\u0642\u0629 (\u062A\u064F\u0636\u063A\u0637 WebP \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u2014 \u0627\u062E\u062A\u064A\u0627\u0631\u064A)</span>
              <input type="file" id="admin-upload-prod-photo" accept="image/*" class="hidden" />
            </label>
            <input
              type="text"
              name="customImageUrl"
              id="admin-custom-img-url"
              value="${escapeHtml(prod.customImageUrl || "")}"
              placeholder="\u0623\u0648 \u0627\u062A\u0631\u0643\u0647 \u0641\u0627\u0631\u063A\u0627\u064B \u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0644\u0648\u062D\u0629 \u0627\u0644\u0641\u0646 \u0627\u0644\u0645\u0634\u0631\u0642\u064A\u0629 (Art Tile)"
              class="control-input num-ltr"
              dir="ltr"
              style="min-height:38px;width:290px;font-size:0.74rem"
            />
          </div>

          <button type="submit" class="btn-primary-editorial" style="min-height:42px">
            <i data-lucide="check" style="width:16px;height:16px"></i>
            <span>\u062D\u0641\u0638 \u0627\u0644\u0635\u0646\u0641 \u0648\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0643\u062A\u0627\u0644\u0648\u062C</span>
          </button>
        </div>
      </form>
    </div>
  `;
  }
  function renderPackagesAndCategoriesTab(store2) {
    return `
    <div style="display:grid;gap:1.5rem">
      <div style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-xl);padding:1.35rem">
        <h3 style="font-family:var(--font-display);font-size:1.25rem;font-weight:700;margin-bottom:0.85rem">
          \u062A\u0639\u062F\u064A\u0644 \u0628\u0627\u0642\u0627\u062A \u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0639\u0631\u0627\u0626\u0633 \u0648\u0627\u0644\u0645\u062A\u0627\u062C\u0631 (${store2.packages.length} \u0628\u0627\u0642\u0627\u062A)
        </h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem">
          ${store2.packages.map(
      (pkg, idx) => `
              <div style="padding:1rem;border-radius:var(--radius-lg);background:var(--bg-subtle);border:1px solid var(--border-strong);display:grid;gap:0.55rem">
                <label style="font-size:0.72rem;font-weight:700">\u0627\u0633\u0645 \u0627\u0644\u0628\u0627\u0642\u0629:</label>
                <input type="text" value="${escapeHtml(pkg.nameAr)}" data-pkg-idx="${idx}" data-pkg-field="nameAr" class="control-input" style="min-height:36px;font-size:0.8rem;font-weight:700" />
                <label style="font-size:0.72rem;font-weight:700">\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u0645\u062E\u062A\u0635\u0631:</label>
                <input type="text" value="${escapeHtml(pkg.subtitleAr)}" data-pkg-idx="${idx}" data-pkg-field="subtitleAr" class="control-input" style="min-height:36px;font-size:0.76rem" />
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem">
                  <div>
                    <label style="font-size:0.72rem;font-weight:700">\u0627\u0644\u0634\u0627\u0631\u0629:</label>
                    <input type="text" value="${escapeHtml(pkg.badgeAr || "")}" data-pkg-idx="${idx}" data-pkg-field="badgeAr" class="control-input" style="min-height:36px;font-size:0.76rem" />
                  </div>
                  <div>
                    <label style="font-size:0.72rem;font-weight:700">\u0646\u0633\u0628\u0629 \u0627\u0644\u062E\u0635\u0645 (%):</label>
                    <input type="number" value="${Number(pkg.discountPct || 8)}" data-pkg-idx="${idx}" data-pkg-field="discountPct" class="control-input num-ltr" dir="ltr" style="min-height:36px;font-size:0.76rem" />
                  </div>
                </div>
                <div class="num-ltr" dir="ltr" style="font-size:0.76rem;color:var(--accent-terracotta);font-weight:800">
                  Package Price: $${pkg.packagePrice.toFixed(2)} USD (Savings: $${pkg.savingsAmount.toFixed(2)})
                </div>
              </div>
            `
    ).join("")}
        </div>
        <button type="button" id="save-packages-admin-btn" class="btn-primary-editorial" style="margin-top:1rem">
          \u062D\u0641\u0638 \u062A\u0639\u062F\u064A\u0644\u0627\u062A \u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0639\u0631\u0627\u0626\u0633
        </button>
      </div>
    </div>
  `;
  }
  function renderWhiteLabelSettingsTab(store2) {
    const s = store2.settings;
    return `
    <form id="admin-settings-form" style="background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--radius-xl);padding:1.5rem;display:grid;gap:1.25rem">
      <div>
        <h3 style="font-family:var(--font-display);font-size:1.3rem;font-weight:700">
          \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0647\u0648\u064A\u0629 \u0648\u0627\u0644\u0645\u062A\u062C\u0631 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 (White-Label Configuration)
        </h3>
        <p style="font-size:0.8rem;color:var(--text-secondary)">
          \u062C\u0645\u064A\u0639 \u0627\u0644\u0646\u0635\u0648\u0635\u060C \u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628\u060C \u0631\u0633\u0648\u0645 \u0627\u0644\u062A\u0648\u0635\u064A\u0644\u060C \u0627\u0644\u0623\u0644\u0648\u0627\u0646\u060C \u0648\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 \u062A\u064F\u0642\u0631\u0623 \u0645\u0628\u0627\u0634\u0631\u0629\u064B \u0645\u0646 \u0647\u0630\u0647 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u062F\u0648\u0646 \u0627\u0644\u062D\u0627\u062C\u0629 \u0644\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0643\u0648\u062F.
        </p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:0.9rem">
        <div>
          <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">\u0627\u0633\u0645 \u0627\u0644\u0645\u062A\u062C\u0631 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 *</label>
          <input type="text" name="storeNameAr" required value="${escapeHtml(s.storeNameAr)}" class="control-input" />
        </div>
        <div>
          <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">\u0627\u0633\u0645 \u0627\u0644\u0645\u062A\u062C\u0631 \u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 *</label>
          <input type="text" name="storeNameEn" required value="${escapeHtml(s.storeNameEn)}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">\u0631\u0642\u0645 \u0648\u0627\u062A\u0633\u0627\u0628 \u0644\u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0627\u0644\u0637\u0644\u0628\u064A\u0627\u062A (\u0645\u0639 \u0631\u0645\u0632 \u0627\u0644\u062F\u0648\u0644\u0629 \u0628\u062F\u0648\u0646 +) *</label>
          <input type="text" name="whatsappPhone" required value="${escapeHtml(s.whatsappPhone)}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">\u0635\u064A\u063A\u0629 \u0639\u0631\u0636 \u0627\u0644\u0631\u0642\u0645 \u0644\u0644\u0632\u0628\u0627\u0626\u0646</label>
          <input type="text" name="whatsappDisplay" value="${escapeHtml(s.whatsappDisplay)}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">\u062D\u062F \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u0645\u062C\u0627\u0646\u064A \u0644\u0644\u0645\u0641\u0631\u0642 ($)</label>
          <input type="number" step="1" name="freeDeliveryThresholdRetail" value="${Number(s.freeDeliveryThresholdRetail || 65)}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">\u062D\u062F \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u0645\u062C\u0627\u0646\u064A \u0644\u0644\u062C\u0645\u0644\u0629 ($)</label>
          <input type="number" step="1" name="freeDeliveryThresholdWholesale" value="${Number(s.freeDeliveryThresholdWholesale || 220)}" class="control-input num-ltr" dir="ltr" />
        </div>
        <div>
          <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">\u062B\u064A\u0645 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A (Brand Color Preset)</label>
          <select name="colorPresetId" class="control-select">
            ${BRAND_COLOR_PRESETS.map(
      (p) => `<option value="${p.id}" ${s.colorPresetId === p.id ? "selected" : ""}>${escapeHtml(p.nameAr)}</option>`
    ).join("")}
          </select>
        </div>
        <div>
          <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0648\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644</label>
          <input type="text" name="addressAr" value="${escapeHtml(s.addressAr)}" class="control-input" />
        </div>
      </div>

      <div>
        <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062A\u0631\u062D\u064A\u0628\u064A \u0627\u0644\u0631\u0626\u064A\u0633\u064A (Hero Headline)</label>
        <input type="text" name="heroHeadlineAr" value="${escapeHtml(s.heroHeadlineAr)}" class="control-input" />
      </div>

      <div>
        <label style="font-size:0.76rem;font-weight:700;display:block;margin-bottom:0.25rem">\u0627\u0644\u0646\u0635 \u0627\u0644\u062A\u0648\u0636\u064A\u062D\u064A \u062A\u062D\u062A \u0627\u0644\u0639\u0646\u0648\u0627\u0646 (Hero Subheadline)</label>
        <input type="text" name="heroSubheadlineAr" value="${escapeHtml(s.heroSubheadlineAr)}" class="control-input" />
      </div>

      <div style="display:flex;wrap:wrap;gap:0.75rem;justify-content:space-between;align-items:center;padding-top:0.75rem;border-top:1px solid var(--border-subtle)">
        <button type="button" id="reset-default-settings-btn" class="icon-action-btn" style="color:var(--accent-terracotta)">
          \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629
        </button>
        <button type="submit" class="btn-primary-editorial">
          <i data-lucide="save" style="width:17px;height:17px"></i>
          <span>\u062D\u0641\u0638 \u0648\u062A\u0637\u0628\u064A\u0642 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u062A\u062C\u0631 \u0641\u0648\u0631\u0627\u064B</span>
        </button>
      </div>
    </form>
  `;
  }
  function bindAdminDashboardEvents(rootEl, store2, showToast2) {
    rootEl.querySelector("#admin-logout-btn")?.addEventListener("click", () => {
      signOutAdmin();
      store2.adminAuthenticated = false;
      window.location.hash = "#/";
      showToast2?.("\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C \u0645\u0646 \u0644\u0648\u062D\u0629 \u0627\u0644\u0625\u062F\u0627\u0631\u0629");
    });
    rootEl.querySelectorAll("[data-admin-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        adminState.activeTab = btn.getAttribute("data-admin-tab");
        renderAdminView(store2, showToast2);
      });
    });
    rootEl.querySelectorAll("[data-period-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        adminState.periodFilter = btn.getAttribute("data-period-btn");
        renderAdminView(store2, showToast2);
      });
    });
    rootEl.querySelector("#admin-month-picker")?.addEventListener("change", (e) => {
      adminState.selectedMonth = e.target.value;
      adminState.periodFilter = "month";
      renderAdminView(store2, showToast2);
    });
    rootEl.querySelector("#toggle-include-new")?.addEventListener("change", (e) => {
      adminState.includeNewOrders = e.target.checked;
      saveSettingsToStorage({ countNewOrdersInRevenue: adminState.includeNewOrders });
      renderAdminView(store2, showToast2);
    });
    rootEl.querySelectorAll("[data-order-status-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        adminState.orderStatusFilter = btn.getAttribute("data-order-status-filter");
        renderAdminView(store2, showToast2);
      });
    });
    rootEl.querySelector("#admin-order-search")?.addEventListener("input", (e) => {
      adminState.orderSearchQuery = e.target.value;
      renderAdminView(store2, showToast2);
    });
    rootEl.querySelectorAll("[data-order-status-select]").forEach((sel) => {
      sel.addEventListener("change", async (e) => {
        const orderId = sel.getAttribute("data-order-status-select");
        const newStatus = e.target.value;
        await updateOrderStatusInBackend(orderId, newStatus);
        showToast2?.(`\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628\u064A\u0629 \u0625\u0644\u0649: ${newStatus}`);
        renderAdminView(store2, showToast2);
      });
    });
    rootEl.querySelectorAll("[data-print-order]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const orderId = btn.getAttribute("data-print-order");
        const order = adminState.orders.find((o) => o.id === orderId);
        if (order) printOrderInvoice(order, store2.settings);
      });
    });
    rootEl.querySelector("#admin-export-orders-csv")?.addEventListener("click", () => {
      exportOrdersCsv(adminState.orders);
    });
    rootEl.querySelector("#admin-product-search")?.addEventListener("input", (e) => {
      adminState.productSearchQuery = e.target.value;
      renderAdminView(store2, showToast2);
    });
    rootEl.querySelector("#admin-product-cat-filter")?.addEventListener("change", (e) => {
      adminState.productCategoryFilter = e.target.value;
      renderAdminView(store2, showToast2);
    });
    rootEl.querySelectorAll("[data-inline-field]").forEach((inp) => {
      inp.addEventListener("change", () => {
        const id = Number(inp.getAttribute("data-prod-id"));
        const field = inp.getAttribute("data-inline-field");
        const target = store2.rawProducts.find((p) => Number(p.id) === id);
        if (!target) return;
        if (field === "wholesalePrice" || field === "retailPrice") {
          target[field] = Math.max(0.1, Number(parseFloat(inp.value).toFixed(2)) || 1);
        } else {
          target[field] = inp.value.trim();
        }
        setCatalogProducts(store2.rawProducts, true, true);
        showToast2?.(`\u062A\u0645 \u062A\u062D\u062F\u064A\u062B "${target.nameAr}"`);
      });
    });
    rootEl.querySelectorAll("[data-toggle-active]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.getAttribute("data-toggle-active"));
        const target = store2.rawProducts.find((p) => Number(p.id) === id);
        if (!target) return;
        target.active = target.active === false ? true : false;
        setCatalogProducts(store2.rawProducts, true, true);
        renderAdminView(store2, showToast2);
      });
    });
    rootEl.querySelector("#admin-new-product-btn")?.addEventListener("click", () => {
      const nextId = store2.rawProducts.reduce((max, p) => Math.max(max, Number(p.id) || 0), 0) + 1;
      adminState.editingProduct = {
        isNew: true,
        id: nextId,
        sku: `BYT-${nextId}`,
        box: "1",
        nameAr: "",
        category: "\u0623\u0637\u0642\u0645 \u0627\u0644\u0637\u0646\u0627\u062C\u0631 \u0648\u0627\u0644\u0645\u0642\u0627\u0644\u064A",
        wholesalePrice: 10,
        retailPrice: 14,
        specs: "Standard",
        badge: "\u062C\u062F\u064A\u062F"
      };
      renderAdminView(store2, showToast2);
    });
    rootEl.querySelectorAll("[data-edit-prod]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.getAttribute("data-edit-prod"));
        const target = store2.rawProducts.find((p) => Number(p.id) === id);
        if (target) {
          adminState.editingProduct = { ...target, isNew: false };
          renderAdminView(store2, showToast2);
        }
      });
    });
    rootEl.querySelectorAll("[data-dup-prod]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.getAttribute("data-dup-prod"));
        const target = store2.rawProducts.find((p) => Number(p.id) === id);
        if (!target) return;
        const nextId = store2.rawProducts.reduce((max, p) => Math.max(max, Number(p.id) || 0), 0) + 1;
        const copy = { ...target, id: nextId, sku: `${target.sku}-COPY` };
        store2.rawProducts.unshift(copy);
        setCatalogProducts(store2.rawProducts, true, true);
        showToast2?.(`\u062A\u0645 \u0627\u0633\u062A\u0646\u0633\u0627\u062E \u0627\u0644\u0635\u0646\u0641 (${copy.sku})`);
        renderAdminView(store2, showToast2);
      });
    });
    rootEl.querySelectorAll("[data-del-prod]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.getAttribute("data-del-prod"));
        if (!window.confirm("\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0635\u0646\u0641\u061F \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062A\u0631\u0627\u062C\u0639 \u0639\u0628\u0631 \u0632\u0631 Undo.")) return;
        const nextRows = store2.rawProducts.filter((p) => Number(p.id) !== id);
        setCatalogProducts(nextRows, true, true);
        showToast2?.("\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0635\u0646\u0641 (\u062A\u0645 \u062D\u0641\u0638 \u0646\u0633\u062E\u0629 \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629 \u0644\u0644\u062A\u0631\u0627\u062C\u0639)");
        renderAdminView(store2, showToast2);
      });
    });
    rootEl.querySelector("#cancel-edit-prod-btn")?.addEventListener("click", () => {
      adminState.editingProduct = null;
      renderAdminView(store2, showToast2);
    });
    rootEl.querySelector("#admin-upload-prod-photo")?.addEventListener("change", async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
        showToast2?.("\u062C\u0627\u0631\u064A \u0636\u063A\u0637 \u0627\u0644\u0635\u0648\u0631\u0629 \u0625\u0644\u0649 WebP \u0648\u0631\u0641\u0639\u0647\u0627...");
        const url = await compressAndUploadProductImage(file, adminState.editingProduct?.sku || "item");
        const urlInp = rootEl.querySelector("#admin-custom-img-url");
        if (urlInp) urlInp.value = url;
        showToast2?.("\u062A\u0645 \u0636\u063A\u0637 \u0627\u0644\u0635\u0648\u0631\u0629 \u0648\u0627\u0639\u062A\u0645\u0627\u062F\u0647\u0627 \u0628\u0646\u062C\u0627\u062D");
      } catch (err) {
        showToast2?.("\u062A\u0639\u0630\u0631 \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0635\u0648\u0631\u0629: " + err.message);
      }
    });
    rootEl.querySelector("#admin-product-modal-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const updated = {
        ...adminState.editingProduct,
        nameAr: String(fd.get("nameAr") || "").trim(),
        category: String(fd.get("category") || "").trim(),
        sku: String(fd.get("sku") || "").trim(),
        box: String(fd.get("box") || "1").trim(),
        wholesalePrice: Math.max(0.1, Number(parseFloat(fd.get("wholesalePrice")).toFixed(2)) || 5),
        retailPrice: Math.max(0.1, Number(parseFloat(fd.get("retailPrice")).toFixed(2)) || 8),
        specs: String(fd.get("specs") || "Standard").trim(),
        badge: String(fd.get("badge") || "").trim(),
        descAr: String(fd.get("descAr") || "").trim(),
        customImageUrl: String(fd.get("customImageUrl") || "").trim(),
        active: true
      };
      delete updated.isNew;
      const existingIdx = store2.rawProducts.findIndex((p) => Number(p.id) === Number(updated.id));
      if (existingIdx !== -1) {
        store2.rawProducts[existingIdx] = updated;
      } else {
        store2.rawProducts.unshift(updated);
      }
      adminState.editingProduct = null;
      setCatalogProducts(store2.rawProducts, true, true);
      showToast2?.("\u062A\u0645 \u062D\u0641\u0638 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0635\u0646\u0641 \u0648\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0643\u062A\u0627\u0644\u0648\u062C");
      renderAdminView(store2, showToast2);
    });
    rootEl.querySelector("#apply-bulk-price-btn")?.addEventListener("click", () => {
      const pct = parseFloat(rootEl.querySelector("#bulk-pct-input")?.value || "0");
      if (!pct || isNaN(pct)) return;
      const cat = adminState.productCategoryFilter;
      const factor = 1 + pct / 100;
      store2.rawProducts.forEach((p) => {
        if (cat === "all" || p.category === cat) {
          p.wholesalePrice = Number(Math.max(0.25, p.wholesalePrice * factor).toFixed(2));
          p.retailPrice = Number(Math.max(0.5, p.retailPrice * factor).toFixed(2));
        }
      });
      setCatalogProducts(store2.rawProducts, true, true);
      showToast2?.(`\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0628\u0646\u0633\u0628\u0629 ${pct > 0 ? "+" : ""}${pct}% \u0628\u0646\u062C\u0627\u062D`);
      renderAdminView(store2, showToast2);
    });
    rootEl.querySelector("#admin-open-merge-preview-btn")?.addEventListener("click", () => {
      adminState.mergePreviewOpen = !adminState.mergePreviewOpen;
      renderAdminView(store2, showToast2);
    });
    rootEl.querySelector("#close-merge-preview-btn")?.addEventListener("click", () => {
      adminState.mergePreviewOpen = false;
      renderAdminView(store2, showToast2);
    });
    rootEl.querySelector("#confirm-merge-families-btn")?.addEventListener("click", () => {
      const report = previewDuplicateMerge(store2.rawProducts);
      const deduplicatedRows = [];
      report.families.forEach((fam) => {
        fam.variants.forEach((v) => {
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
            customImageUrl: v.customImageUrl || ""
          });
        });
      });
      adminState.mergePreviewOpen = false;
      setCatalogProducts(deduplicatedRows, true, true);
      showToast2?.(`\u062A\u0645 \u062F\u0645\u062C \u0627\u0644\u062A\u0643\u0631\u0627\u0631\u0627\u062A \u0648\u0627\u0639\u062A\u0645\u0627\u062F ${report.afterFamilyCount} \u0639\u0627\u0626\u0644\u0629 \u0645\u0646\u062A\u062C \u0628\u0646\u062C\u0627\u062D!`);
      renderAdminView(store2, showToast2);
    });
    rootEl.querySelector("#admin-undo-catalog-btn")?.addEventListener("click", () => {
      if (restoreCatalogUndoBackup()) {
        showToast2?.("\u062A\u0645\u062A \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629 \u0645\u0646 \u0627\u0644\u0643\u062A\u0627\u0644\u0648\u062C \u0628\u0646\u062C\u0627\u062D");
        renderAdminView(store2, showToast2);
      }
    });
    rootEl.querySelector("#admin-export-catalog-json")?.addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(store2.rawProducts, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `baytouka-catalog-backup-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });
    rootEl.querySelector("#admin-import-file-input")?.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const text = String(ev.target.result || "").replace(/^\uFEFF/, "");
          const parsed = JSON.parse(text);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setCatalogProducts(parsed, true, true);
            showToast2?.(`\u062A\u0645 \u0627\u0633\u062A\u064A\u0631\u0627\u062F ${parsed.length} \u0635\u0646\u0641\u0627\u064B \u0628\u0646\u062C\u0627\u062D`);
            renderAdminView(store2, showToast2);
          }
        } catch (err) {
          showToast2?.("\u062E\u0637\u0623 \u0641\u064A \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0645\u0644\u0641: " + err.message);
        }
      };
      reader.readAsText(file);
    });
    rootEl.querySelector("#save-packages-admin-btn")?.addEventListener("click", () => {
      const updatedPkgs = JSON.parse(JSON.stringify(store2.packages));
      rootEl.querySelectorAll("[data-pkg-idx]").forEach((inp) => {
        const idx = Number(inp.getAttribute("data-pkg-idx"));
        const field = inp.getAttribute("data-pkg-field");
        if (updatedPkgs[idx]) {
          updatedPkgs[idx][field] = field === "discountPct" ? Number(inp.value) : inp.value.trim();
        }
      });
      savePackagesToStorage(updatedPkgs);
      showToast2?.("\u062A\u0645 \u062D\u0641\u0638 \u062A\u0639\u062F\u064A\u0644\u0627\u062A \u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0639\u0631\u0627\u0626\u0633 \u0628\u0646\u062C\u0627\u062D");
      renderAdminView(store2, showToast2);
    });
    rootEl.querySelector("#admin-settings-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      saveSettingsToStorage({
        storeNameAr: String(fd.get("storeNameAr") || "\u0628\u064A\u062A\u0643").trim(),
        storeNameEn: String(fd.get("storeNameEn") || "BAYTOUKA").trim(),
        whatsappPhone: String(fd.get("whatsappPhone") || "96171840915").replace(/[^0-9]/g, ""),
        whatsappDisplay: String(fd.get("whatsappDisplay") || "+961 71 840 915").trim(),
        freeDeliveryThresholdRetail: Number(fd.get("freeDeliveryThresholdRetail")) || 65,
        freeDeliveryThresholdWholesale: Number(fd.get("freeDeliveryThresholdWholesale")) || 220,
        colorPresetId: String(fd.get("colorPresetId") || "levantine_saffron"),
        addressAr: String(fd.get("addressAr") || "").trim(),
        heroHeadlineAr: String(fd.get("heroHeadlineAr") || "").trim(),
        heroSubheadlineAr: String(fd.get("heroSubheadlineAr") || "").trim()
      });
      showToast2?.("\u062A\u0645 \u062D\u0641\u0638 \u0648\u062A\u0637\u0628\u064A\u0642 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u062A\u062C\u0631 \u0628\u0646\u062C\u0627\u062D");
    });
    rootEl.querySelector("#reset-default-settings-btn")?.addEventListener("click", () => {
      saveSettingsToStorage(DEFAULT_STORE_SETTINGS);
      showToast2?.("\u062A\u0645\u062A \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629");
      renderAdminView(store2, showToast2);
    });
  }
  function printOrderInvoice(order, settings) {
    const win = window.open("", "_blank", "width=820,height=900");
    if (!win) return;
    const rowsHtml = (order.items || []).map(
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
    ).join("");
    win.document.write(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8"/>
      <title>\u0641\u0627\u062A\u0648\u0631\u0629 \u0637\u0644\u0628\u064A\u0629 ${escapeHtml(order.orderNumber)} | ${escapeHtml(settings.storeNameEn)}</title>
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
          <h1 style="margin:0">${escapeHtml(settings.storeNameEn)} \u2022 ${escapeHtml(settings.storeNameAr)}</h1>
          <p style="margin:4px 0;font-size:13px">${escapeHtml(settings.addressAr || "")} | WhatsApp: ${escapeHtml(settings.whatsappDisplay || "")}</p>
        </div>
        <div style="text-align:left;direction:ltr">
          <h2 style="margin:0">${escapeHtml(order.orderNumber)}</h2>
          <small>${escapeHtml(String(order.createdAt).slice(0, 16).replace("T", " "))}</small>
        </div>
      </div>
      <p><strong>\u0627\u0644\u0632\u0628\u0648\u0646:</strong> ${escapeHtml(order.customerName)} | <strong>\u0627\u0644\u0647\u0627\u062A\u0641:</strong> ${escapeHtml(order.customerPhone)} | <strong>\u0627\u0644\u0645\u0646\u0637\u0642\u0629:</strong> ${escapeHtml(order.regionNameAr)} \u2014 ${escapeHtml(order.address)}</p>
      <table>
        <thead>
          <tr><th>#</th><th>\u0627\u0644\u0635\u0646\u0641</th><th>SKU / Box</th><th>\u0627\u0644\u0643\u0645\u064A\u0629</th><th>\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0625\u0641\u0631\u0627\u062F\u064A</th><th>\u0627\u0644\u0645\u062C\u0645\u0648\u0639</th></tr>
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
    const headers = ["OrderNumber", "Date", "Status", "Mode", "Customer", "Phone", "Region", "SubtotalUSD", "DeliveryUSD", "GrandTotalUSD", "NetProfitUSD"];
    const rows = orders.map((o) => [
      o.orderNumber,
      String(o.createdAt || "").slice(0, 19),
      o.status,
      o.pricingMode,
      `"${String(o.customerName || "").replace(/"/g, '""')}"`,
      `"${String(o.customerPhone || "")}"`,
      `"${String(o.regionNameAr || "")}"`,
      Number(o.subtotal || 0).toFixed(2),
      Number(o.deliveryFee || 0).toFixed(2),
      Number(o.grandTotal || 0).toFixed(2),
      Number(o.netProfit || 0).toFixed(2)
    ]);
    const csv = "\uFEFF" + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `baytouka-orders-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // js/app.js
  window.BAYTOUKA = window.BAYTOUKA || {};
  window.BAYTOUKA.state = store;
  window.BAYTOUKA.renderCatalogLoadingError = renderCatalogLoadingError;
  var quickViewState = {
    familyId: null,
    qty: 1
  };
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      document.documentElement.setAttribute("data-theme", store.theme);
      document.documentElement.setAttribute("data-pricing-mode", store.mode);
      applyRuntimeBrandSettings();
      syncThemeButtonUI();
      syncModeUI();
      renderHeroStage();
      const catalogGrid = document.getElementById("products-grid");
      if (catalogGrid) {
        catalogGrid.innerHTML = renderSkeletonCards(8);
      }
      populateRegionSelect();
      renderRegionsShowcase();
      renderFaqSection();
      applyStorefrontSettingsToDOM();
      bindGlobalEvents();
      initStickyNavbarScroll();
      await initCatalogStore(renderCatalogLoadingError);
      updateAllDynamicCounters();
      renderAllSections();
      renderCartUI();
      initWholesaleCalculator();
      subscribe((event) => {
        if (event === "catalog" || event === "categories") {
          updateAllDynamicCounters();
          renderAllSections();
          renderCartUI();
        } else if (event === "settings") {
          applyRuntimeBrandSettings();
          applyStorefrontSettingsToDOM();
          populateRegionSelect();
          renderRegionsShowcase();
          renderFaqSection();
          renderCollectionsStrip();
          renderCartUI();
        } else if (event === "packages") {
          renderBridalSection();
        }
      });
      try {
        await handleRouteChange();
      } catch (routeErr) {
        console.error("[BAYTOUKA] Route handling error:", routeErr);
      }
      window.addEventListener("hashchange", handleRouteChange);
    } catch (initErr) {
      console.error("[BAYTOUKA FATAL] Storefront initialization error:", initErr);
    } finally {
      try {
        dismissPageIntro();
      } catch (dismissErr) {
        console.error("[BAYTOUKA] Dismiss loader error:", dismissErr);
        if (typeof window !== "undefined" && typeof window.__dismissLoader === "function") {
          window.__dismissLoader();
        }
      }
    }
    try {
      initHeroParallax();
    } catch (animErr) {
      console.error("[BAYTOUKA] Hero parallax init failed:", animErr);
    }
    try {
      initDesktopCursorAndMagnetics();
    } catch (animErr) {
      console.error("[BAYTOUKA] Desktop cursor init failed:", animErr);
    }
    try {
      initMobileSwipeSheets(window.BAYTOUKA.closeQuickView, window.BAYTOUKA.closeCartDrawer);
    } catch (animErr) {
      console.error("[BAYTOUKA] Swipe sheets init failed:", animErr);
    }
    try {
      const bestsellersEl = document.getElementById("bestsellers-carousel");
      if (bestsellersEl) {
        initDraggableCarousel(bestsellersEl);
      }
    } catch (animErr) {
      console.error("[BAYTOUKA] Carousel init failed:", animErr);
    }
    try {
      observeScrollReveals();
    } catch (animErr) {
      console.error("[BAYTOUKA] Scroll reveals init failed:", animErr);
    }
  });
  function renderHeroStage() {
    const heroStage = document.getElementById("hero-collage-stage");
    if (heroStage) {
      heroStage.innerHTML = renderHeroArtComposition();
    }
  }
  function applyStorefrontSettingsToDOM() {
    const s = store.settings || {};
    document.querySelectorAll("[data-brand-en]").forEach((el) => {
      el.textContent = s.storeNameEn || "BAYTOUKA";
    });
    document.querySelectorAll("[data-brand-ar]").forEach((el) => {
      el.textContent = s.storeNameAr || "\u0628\u064A\u062A\u0643";
    });
    document.querySelectorAll("[data-brand-tagline]").forEach((el) => {
      el.textContent = s.taglineAr || "\u0635\u0627\u0644\u0629 \u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0648\u0627\u0644\u0645\u0637\u0628\u062E \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064A \u2022 \u062C\u0645\u0644\u0629 \u0648\u0645\u0641\u0631\u0642";
    });
    const heroEyebrowEl = document.getElementById("hero-eyebrow-text");
    if (heroEyebrowEl && s.heroEyebrowAr) {
      heroEyebrowEl.textContent = s.heroEyebrowAr;
    }
    if (Array.isArray(s.announcementMessages) && s.announcementMessages.length > 0) {
      const groups = document.querySelectorAll("#top-announcement-marquee .marquee-group");
      const html = s.announcementMessages.map((msg) => `<span class="marquee-item">${escapeHtml(msg)}</span><span class="marquee-dot">\u2726</span>`).join("");
      groups.forEach((g) => {
        g.innerHTML = html;
      });
    }
    const footerAddressEl = document.getElementById("footer-address-text");
    const footerHoursEl = document.getElementById("footer-hours-text");
    const footerWaLink = document.getElementById("footer-whatsapp-link");
    if (footerAddressEl && s.addressAr) footerAddressEl.textContent = `\u{1F4CD} ${s.addressAr}`;
    if (footerHoursEl && s.workingHoursAr) footerHoursEl.textContent = `\u{1F552} ${s.workingHoursAr}`;
    if (footerWaLink && s.whatsappPhone) {
      footerWaLink.href = `https://wa.me/${encodeURIComponent(s.whatsappPhone)}`;
      footerWaLink.textContent = `WhatsApp: +${s.whatsappPhone}`;
    }
  }
  function updateAllDynamicCounters() {
    const totalFamilies = store.stats.totalFamilies || store.stats.totalProducts;
    const totalVariants = store.stats.totalVariants || store.stats.totalRawRows;
    const totalCategories = store.stats.totalCategories;
    const heroProdCounter = document.getElementById("metric-total-products");
    const heroCatCounter = document.getElementById("metric-total-categories");
    if (heroProdCounter) animateCounter(heroProdCounter, totalFamilies, 850);
    if (heroCatCounter) animateCounter(heroCatCounter, totalCategories, 700);
    document.querySelectorAll("[data-total-products-text]").forEach((el) => {
      el.textContent = `${totalFamilies.toLocaleString("en-US")} \u0639\u0627\u0626\u0644\u0629 (${totalVariants.toLocaleString("en-US")} \u0645\u0648\u062F\u064A\u0644)`;
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
    const bentoContainer = document.getElementById("category-bento-grid");
    if (bentoContainer) {
      bentoContainer.innerHTML = renderCategoryBentoGrid(store);
    }
    const homeSubRow = document.getElementById("home-subfilter-pills");
    if (homeSubRow) {
      homeSubRow.innerHTML = renderHomeSubFilterPills(store);
    }
  }
  function renderBestsellersSection() {
    const carousel = document.getElementById("bestsellers-carousel");
    const countBadge = document.getElementById("bestsellers-count-badge");
    if (!carousel) return;
    const isWholesale = store.mode === "wholesale";
    const featured = store.badgedFamilies.slice(0, 16);
    if (countBadge) {
      countBadge.textContent = `${store.badgedFamilies.length} \u0639\u0627\u0626\u0644\u0629 \u0635\u0646\u0641 \u0645\u0645\u064A\u0632\u0629`;
    }
    carousel.innerHTML = featured.map((fam) => `<div class="carousel-slide-item">${renderProductCard(fam, isWholesale)}</div>`).join("");
    if (!carousel.dataset.dragBound) {
      carousel.dataset.dragBound = "1";
      initDraggableCarousel(carousel);
    }
  }
  function renderCollectionsStrip() {
    const container = document.getElementById("collections-pills-container");
    if (!container) return;
    container.innerHTML = renderCollectionsPills(store);
  }
  function renderCategoryFilterChips() {
    const container = document.getElementById("filter-chips-container");
    if (!container) return;
    const activeCat = store.filters.category;
    const totalCount = store.stats.totalFamilies;
    const categories = (store.categories || CATEGORY_META).filter((c) => c.active !== false);
    const chips = [
      { id: "all", label: "\u0643\u0644 \u0627\u0644\u0643\u062A\u0627\u0644\u0648\u062C", count: totalCount, icon: "layout-grid" },
      ...categories.map((c) => ({
        id: c.id,
        label: c.shortAr || c.short_ar,
        count: store.categoryCounts[c.id] || 0,
        icon: c.icon || "layers"
      }))
    ];
    container.innerHTML = chips.map(
      (c) => `
      <button
        type="button"
        class="cat-filter-chip ${activeCat === c.id ? "active" : ""}"
        onclick="window.BAYTOUKA.filterByCategory('${escapeHtml(c.id)}')"
      >
        <i data-lucide="${escapeHtml(c.icon)}" style="width:15px;height:15px"></i>
        <span>${escapeHtml(c.label)}</span>
        <span class="chip-count-pill num-ltr">${c.count}</span>
      </button>
    `
    ).join("");
    const catalogSubBar = document.getElementById("catalog-home-subbar");
    if (catalogSubBar) {
      if (activeCat === "\u0627\u0644\u0645\u0637\u0631\u0627\u062A \u0648\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u0632\u0644") {
        catalogSubBar.classList.remove("hidden");
        catalogSubBar.innerHTML = renderHomeSubFilterPills(store);
      } else {
        catalogSubBar.classList.add("hidden");
      }
    }
  }
  function renderCatalogGrid() {
    const grid = document.getElementById("products-grid");
    const emptyState = document.getElementById("no-products-state");
    const counterEl = document.getElementById("results-counter");
    const loadMoreWrap = document.getElementById("load-more-container");
    const loadMoreInfo = document.getElementById("load-more-progress-text");
    if (!grid) return;
    const filtered = store.filteredFamilies;
    const totalFiltered = filtered.length;
    const visibleCount = Math.min(store.filters.visibleCount, totalFiltered);
    const visibleItems = filtered.slice(0, visibleCount);
    const isWholesale = store.mode === "wholesale";
    if (counterEl) {
      counterEl.innerHTML = `\u0639\u0631\u0636 <strong class="num-ltr">${visibleCount}</strong> \u0645\u0646 \u0623\u0635\u0644 <strong class="num-ltr">${totalFiltered}</strong> \u0639\u0627\u0626\u0644\u0629 \u0635\u0646\u0641 \u0645\u0637\u0627\u0628\u0642\u0629 \u2014 \u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0643\u062A\u0627\u0644\u0648\u062C: <strong class="num-ltr">${store.stats.totalFamilies}</strong> \u0639\u0627\u0626\u0644\u0629 (<strong class="num-ltr">${store.stats.totalVariants}</strong> \u0645\u0648\u062F\u064A\u0644 \u0648\u0645\u0642\u0627\u0633 \u0645\u062A\u0648\u0641\u0631)`;
    }
    if (totalFiltered === 0) {
      grid.innerHTML = "";
      if (emptyState) emptyState.classList.remove("hidden");
      if (loadMoreWrap) loadMoreWrap.classList.add("hidden");
      return;
    }
    if (emptyState) emptyState.classList.add("hidden");
    grid.innerHTML = visibleItems.map((fam) => renderProductCard(fam, isWholesale)).join("");
    if (loadMoreWrap) {
      if (visibleCount < totalFiltered) {
        loadMoreWrap.classList.remove("hidden");
        if (loadMoreInfo) {
          loadMoreInfo.textContent = `\u062A\u0645 \u0639\u0631\u0636 ${visibleCount} \u0645\u0646 ${totalFiltered} \u0639\u0627\u0626\u0644\u0629 \u0635\u0646\u0641 \u2014 \u0645\u062A\u0628\u0642\u064A ${totalFiltered - visibleCount}`;
        }
      } else {
        loadMoreWrap.classList.add("hidden");
      }
    }
    if (window.lucide) window.lucide.createIcons();
    observeScrollReveals(grid);
  }
  function renderBridalSection() {
    const mountEl = document.getElementById("bridal-experience-mount");
    if (!mountEl) return;
    mountEl.innerHTML = renderBridalExperienceSection(store);
    if (window.lucide) window.lucide.createIcons();
  }
  function renderFaqSection() {
    const mountEl = document.getElementById("faq-accordion-mount");
    if (!mountEl) return;
    mountEl.innerHTML = renderFaqAccordion(store.settings);
    if (window.lucide) window.lucide.createIcons();
  }
  function renderRegionsShowcase() {
    const grid = document.getElementById("lebanon-regions-grid");
    if (grid) {
      grid.innerHTML = renderLebanonRegionsGrid(store.selectedRegionId, store.settings);
    }
  }
  function populateRegionSelect() {
    const select = document.getElementById("checkout-region");
    if (!select) return;
    const regions = store.settings.regions || DEFAULT_LEBANON_REGIONS;
    select.innerHTML = regions.map(
      (r) => `
      <option value="${escapeHtml(r.id)}" ${r.id === store.selectedRegionId ? "selected" : ""}>
        ${escapeHtml(r.nameAr)} \u2014 \u062A\u0648\u0635\u064A\u0644 $${Number(r.fee).toFixed(2)} (${escapeHtml(r.etaAr || "")})
      </option>
    `
    ).join("");
  }
  function renderCartUI() {
    const summary = getCartSummary();
    const isWholesale = store.mode === "wholesale";
    document.querySelectorAll(".cart-count-badge, .cart-badge-count").forEach((el) => {
      el.textContent = summary.totalPieces;
    });
    const headerTotal = document.getElementById("header-cart-total");
    const mobileBarTotal = document.getElementById("mobile-bar-cart-total");
    if (headerTotal) headerTotal.textContent = `\u200E$${summary.subtotal.toFixed(2)}`;
    if (mobileBarTotal) mobileBarTotal.textContent = `\u200E$${summary.subtotal.toFixed(2)}`;
    const freeDeliveryBanner = document.getElementById("cart-free-delivery-banner");
    if (freeDeliveryBanner) {
      if (summary.isFreeDelivery) {
        freeDeliveryBanner.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.76rem;font-weight:800;color:#18864B;margin-bottom:0.3rem">
          <span>\u{1F389} \u0645\u0628\u0631\u0648\u0643! \u0637\u0644\u0628\u064A\u062A\u0643 \u0645\u0624\u0647\u0644\u0629 \u0644\u0644\u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u0645\u062C\u0627\u0646\u064A \u0641\u064A \u0643\u0627\u0641\u0629 \u0644\u0628\u0646\u0627\u0646</span>
          <span class="num-ltr">100%</span>
        </div>
        <div class="free-delivery-track"><div class="free-delivery-fill" style="width:100%;background:#18864B"></div></div>
      `;
      } else {
        freeDeliveryBanner.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.75rem;font-weight:700;margin-bottom:0.3rem">
          <span>\u0623\u0636\u0641 \u0628\u0642\u064A\u0645\u0629 <strong class="num-ltr" dir="ltr" style="color:var(--accent-terracotta)">$${summary.remainingForFreeDelivery.toFixed(2)}</strong> \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 <strong>\u062A\u0648\u0635\u064A\u0644 \u0645\u062C\u0627\u0646\u064A</strong>!</span>
          <span class="num-ltr">${summary.freeDeliveryProgressPct}%</span>
        </div>
        <div class="free-delivery-track"><div class="free-delivery-fill" style="width:${summary.freeDeliveryProgressPct}%"></div></div>
      `;
      }
    }
    const totalPiecesEl = document.getElementById("cart-total-pieces");
    const subtotalEl = document.getElementById("cart-subtotal");
    const deliveryEl = document.getElementById("cart-delivery-fee");
    const grandTotalEl = document.getElementById("cart-grand-total");
    const savingsRowEl = document.getElementById("cart-savings-row");
    const savingsValEl = document.getElementById("cart-savings-val");
    const clearBtn = document.getElementById("clear-cart-btn");
    const saveLaterBtn = document.getElementById("save-cart-later-btn");
    const restoreSavedBtn = document.getElementById("restore-saved-cart-btn");
    const listEl = document.getElementById("cart-items-list");
    const upsellStripEl = document.getElementById("cart-upsell-strip");
    if (totalPiecesEl) totalPiecesEl.textContent = summary.totalPieces;
    if (subtotalEl) subtotalEl.textContent = `$${summary.subtotal.toFixed(2)}`;
    if (deliveryEl) {
      deliveryEl.textContent = summary.isFreeDelivery ? "\u0645\u062C\u0627\u0646\u064A ($0.00)" : `$${summary.deliveryFee.toFixed(2)}`;
    }
    if (grandTotalEl) grandTotalEl.textContent = `$${summary.grandTotal.toFixed(2)} USD`;
    if (savingsRowEl && savingsValEl) {
      const combinedSavings = summary.totalSavings + summary.tierDiscountTotal;
      savingsRowEl.classList.toggle("hidden", combinedSavings <= 0);
      savingsValEl.textContent = `$${combinedSavings.toFixed(2)} USD`;
    }
    if (clearBtn) clearBtn.classList.toggle("hidden", summary.items.length === 0);
    if (saveLaterBtn) saveLaterBtn.classList.toggle("hidden", summary.items.length === 0);
    if (restoreSavedBtn) {
      restoreSavedBtn.classList.toggle("hidden", summary.items.length > 0 || !hasSavedCartForLater());
    }
    if (!listEl) return;
    if (summary.items.length === 0) {
      listEl.innerHTML = `
      <div style="padding:2.2rem 1.15rem;text-align:center;background:var(--bg-elevated);border:1px dashed var(--border-strong);border-radius:var(--radius-lg);margin-block:0.65rem">
        <div style="width:52px;height:52px;border-radius:50%;background:var(--accent-saffron-soft);color:var(--accent-terracotta);display:flex;align-items:center;justify-content:center;margin:0 auto 0.75rem">
          <i data-lucide="shopping-bag" style="width:24px;height:24px"></i>
        </div>
        <h4 style="font-size:0.95rem;font-weight:800;margin-bottom:0.25rem">\u0633\u0644\u0629 \u0627\u0644\u062A\u0633\u0648\u0642 \u0641\u0627\u0631\u063A\u0629 \u062D\u0627\u0644\u064A\u0627\u064B</h4>
        <p style="font-size:0.78rem;color:var(--text-muted)">\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 (+) \u0628\u062C\u0627\u0646\u0628 \u0623\u064A \u0635\u0646\u0641 \u0644\u0625\u0636\u0627\u0641\u062A\u0647 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629 \u0648\u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628</p>
      </div>
    `;
    } else {
      listEl.innerHTML = summary.items.map(
        ({ index, qty, unitPrice, qualifiesQtyTier, lineTotal, product, family }) => `
        <div style="padding:0.75rem;margin-bottom:0.6rem;border-radius:var(--radius-md);background:var(--bg-elevated);border:1px solid var(--border-subtle);box-shadow:var(--shadow-sm)">
          <div style="display:flex;align-items:flex-start;gap:0.7rem">
            <div style="width:56px;height:56px;flex-shrink:0">
              ${renderArtTile(
          {
            ...family || product,
            activeSku: product.sku,
            activeBox: product.box
          },
          { size: "sm", showMeta: false }
        )}
            </div>
            <div style="flex:1;min-width:0">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:0.35rem;margin-bottom:0.2rem">
                <span class="sku-pill num-ltr">SKU: ${escapeHtml(product.sku)} | Box: ${escapeHtml(product.box)}</span>
                <button
                  type="button"
                  onclick="window.BAYTOUKA.updateCartQty(${index}, 0)"
                  style="background:none;border:none;color:var(--text-muted);cursor:pointer;padding:2px"
                  aria-label="\u062D\u0630\u0641 ${escapeHtml(product.nameAr)}"
                >
                  <i data-lucide="trash-2" style="width:14px;height:14px"></i>
                </button>
              </div>
              <h5 style="font-size:0.82rem;font-weight:800;line-height:1.35">${escapeHtml(product.nameAr)}</h5>
              ${qualifiesQtyTier ? `<span style="font-size:0.68rem;color:#18864B;font-weight:800">\u2726 \u062E\u0635\u0645 \u0643\u0645\u064A\u0629 \u0625\u0636\u0627\u0641\u064A (-5%) \u0645\u0641\u0639\u0644</span>` : ""}
            </div>
          </div>

          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:0.55rem;padding-top:0.5rem;border-top:1px solid var(--border-subtle)">
            <span class="num-ltr" dir="ltr" style="font-size:0.75rem;color:var(--text-muted)">
              $${unitPrice.toFixed(2)} (${isWholesale ? "\u062C\u0645\u0644\u0629" : "\u0645\u0641\u0631\u0642"})
            </span>

            <div style="display:inline-flex;align-items:center;gap:0.3rem;background:var(--bg-subtle);padding:2px 6px;border-radius:99px;border:1px solid var(--border-subtle)">
              <button type="button" onclick="window.BAYTOUKA.updateCartQty(${index}, ${qty - 1})" style="width:25px;height:25px;border-radius:50%;border:none;background:var(--bg-elevated);font-weight:800;cursor:pointer" aria-label="\u0625\u0646\u0642\u0627\u0635">\u2212</button>
              <span class="num-ltr" style="min-width:22px;text-align:center;font-weight:800;font-size:0.78rem">${qty}</span>
              <button type="button" onclick="window.BAYTOUKA.updateCartQty(${index}, ${qty + 1})" style="width:25px;height:25px;border-radius:50%;border:none;background:var(--bg-elevated);font-weight:800;cursor:pointer" aria-label="\u0632\u064A\u0627\u062F\u0629">+</button>
            </div>

            <strong class="num-ltr" dir="ltr" style="font-size:0.9rem;font-weight:800;color:var(--accent-terracotta)">$${lineTotal.toFixed(2)}</strong>
          </div>
        </div>
      `
      ).join("");
    }
    if (upsellStripEl) {
      const upsells = getCartUpsellFamilies(3);
      if (upsells.length > 0) {
        upsellStripEl.innerHTML = `
        <div style="font-size:0.74rem;font-weight:800;color:var(--text-secondary);margin-bottom:0.45rem;display:flex;align-items:center;gap:0.35rem">
          <i data-lucide="sparkles" style="width:13px;height:13px;color:var(--accent-saffron)"></i>
          <span>\u064A\u064F\u0637\u0644\u0628 \u063A\u0627\u0644\u0628\u0627\u064B \u0645\u0639 \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628:</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.45rem">
          ${upsells.map((u) => {
          const p = isWholesale ? u.wholesalePrice : u.retailPrice;
          return `
                <button
                  type="button"
                  onclick="window.BAYTOUKA.quickAddWithFly(event, ${u.familyId})"
                  style="padding:0.45rem;border-radius:var(--radius-sm);background:var(--bg-elevated);border:1px solid var(--border-subtle);text-align:right;cursor:pointer;display:flex;flex-direction:column;gap:0.25rem"
                  title="\u0623\u0636\u0641 ${escapeHtml(u.baseNameAr)}"
                >
                  <div style="font-size:0.7rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%">${escapeHtml(u.baseNameAr)}</div>
                  <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
                    <strong class="num-ltr" dir="ltr" style="font-size:0.72rem;color:var(--accent-terracotta)">$${p.toFixed(2)}</strong>
                    <span style="font-size:0.68rem;font-weight:800;color:#18864B">+ \u0623\u0636\u0641</span>
                  </div>
                </button>
              `;
        }).join("")}
        </div>
      `;
      } else {
        upsellStripEl.innerHTML = "";
      }
    }
    if (window.lucide) window.lucide.createIcons();
  }
  async function handleRouteChange() {
    const rawHash = window.location.hash || "#/";
    const cleanHash = rawHash.replace(/^#\/?/, "").trim();
    const storefrontEl = document.getElementById("storefront-view");
    const productPageEl = document.getElementById("product-detail-view");
    const adminEl = document.getElementById("admin-view");
    if (cleanHash === "admin" || cleanHash.startsWith("admin")) {
      store.route.view = "admin";
      if (storefrontEl) storefrontEl.classList.add("hidden");
      if (productPageEl) productPageEl.classList.add("hidden");
      if (adminEl) adminEl.classList.remove("hidden");
      document.title = `\u0644\u0648\u062D\u0629 \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0648\u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A | ${store.settings.storeNameEn || "BAYTOUKA"}`;
      renderAdminView(store, showToast);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (cleanHash.startsWith("product/")) {
      const idPart = Number(cleanHash.split("/")[1]);
      const fam = store.families.find((f) => Number(f.familyId) === idPart || Number(f.id) === idPart) || store.families.find((f) => f.variants.some((v) => Number(v.id) === idPart));
      if (fam && productPageEl) {
        store.route.view = "product";
        store.route.productId = fam.familyId;
        recordRecentlyViewed(fam.familyId);
        if (storefrontEl) storefrontEl.classList.add("hidden");
        if (adminEl) adminEl.classList.add("hidden");
        productPageEl.classList.remove("hidden");
        const related = store.families.filter((f) => f.category === fam.category && f.familyId !== fam.familyId).slice(0, 4);
        const recentFamilies = store.recentlyViewedIds.filter((id) => Number(id) !== Number(fam.familyId)).map((id) => store.families.find((f) => Number(f.familyId) === Number(id))).filter(Boolean).slice(0, 4);
        productPageEl.innerHTML = renderShareableProductPage(
          fam,
          related,
          recentFamilies,
          store.mode === "wholesale",
          store.settings
        );
        document.title = `${fam.baseNameAr} (${fam.sku}) | ${store.settings.storeNameEn} ${store.settings.storeNameAr}`;
        updateStructuredDataJsonLd(fam);
        if (window.lucide) window.lucide.createIcons();
        observeScrollReveals(productPageEl);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }
    if (cleanHash.startsWith("category/")) {
      const slug = cleanHash.split("/")[1];
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
          document.getElementById("catalog-section")?.scrollIntoView({ behavior: "smooth" });
        }, 80);
      }
      return;
    }
    showStorefrontView();
  }
  function showStorefrontView() {
    store.route.view = "home";
    const storefrontEl = document.getElementById("storefront-view");
    const productPageEl = document.getElementById("product-detail-view");
    const adminEl = document.getElementById("admin-view");
    if (storefrontEl) storefrontEl.classList.remove("hidden");
    if (productPageEl) productPageEl.classList.add("hidden");
    if (adminEl) adminEl.classList.add("hidden");
    document.title = store.settings.seoTitle || "BAYTOUKA | \u0628\u064A\u062A\u0643 \u2014 \u0627\u0644\u0645\u0627\u0626\u062F\u0629 \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064A\u0629 \u0644\u0623\u0648\u0627\u0646\u064A \u0627\u0644\u0645\u0637\u0628\u062E \u0648\u0627\u0644\u0636\u064A\u0627\u0641\u0629 \u0628\u0627\u0644\u062C\u0645\u0644\u0629 \u0648\u0627\u0644\u0645\u0641\u0631\u0642";
    updateStructuredDataJsonLd(null);
  }
  function initStickyNavbarScroll() {
    const headerWrap = document.getElementById("floating-header-wrap");
    if (!headerWrap) return;
    let lastScrollY = window.scrollY;
    window.addEventListener(
      "scroll",
      () => {
        const currentY = window.scrollY;
        if (currentY > 180 && currentY > lastScrollY + 8) {
          headerWrap.classList.add("nav-hidden");
        } else if (currentY < lastScrollY - 6 || currentY <= 120) {
          headerWrap.classList.remove("nav-hidden");
        }
        lastScrollY = currentY;
      },
      { passive: true }
    );
  }
  function initWholesaleCalculator() {
    const slider = document.getElementById("wholesale-calc-slider");
    const boxesCountEl = document.getElementById("calc-boxes-val");
    const retailValEl = document.getElementById("calc-retail-value");
    const wholesaleCostEl = document.getElementById("calc-wholesale-cost");
    const netProfitEl = document.getElementById("calc-net-profit");
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
    slider.addEventListener("input", updateCalc);
    updateCalc();
  }
  function syncModeUI() {
    const isWholesale = store.mode === "wholesale";
    const modeBadge = document.getElementById("current-mode-label");
    const drawerPill = document.getElementById("drawer-mode-pill");
    const wholesaleNotice = document.getElementById("wholesale-banner-notice");
    if (modeBadge) modeBadge.textContent = isWholesale ? "\u0645\u0628\u064A\u0639 \u0628\u0627\u0644\u062C\u0645\u0644\u0629 (Wholesale)" : "\u0645\u0628\u064A\u0639 \u0628\u0627\u0644\u0645\u0641\u0631\u0642 (Retail)";
    if (drawerPill) drawerPill.textContent = isWholesale ? "\u062C\u0645\u0644\u0629" : "\u0645\u0641\u0631\u0642";
    if (wholesaleNotice) wholesaleNotice.classList.toggle("hidden", !isWholesale);
  }
  function syncThemeButtonUI() {
    const iconEl = document.getElementById("theme-toggle-icon");
    if (iconEl) {
      iconEl.setAttribute("data-lucide", store.theme === "dark" ? "sun" : "moon");
      if (window.lucide) window.lucide.createIcons();
    }
  }
  function showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.innerHTML = `<span style="width:8px;height:8px;border-radius:50%;background:var(--accent-saffron-bright);flex-shrink:0"></span><span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
  }
  window.BAYTOUKA.setupMode = function(mode, notifyToast = true) {
    setPricingMode(mode);
    syncModeUI();
    renderBestsellersSection();
    renderCatalogGrid();
    renderBridalSection();
    renderCartUI();
    if (store.route.view === "product" && store.route.productId) {
      handleRouteChange();
    }
    if (notifyToast) {
      showToast(
        store.mode === "wholesale" ? "\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u062C\u0645\u0644\u0629 \u0648\u0625\u0638\u0647\u0627\u0631 \u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0643\u0631\u0627\u062A\u064A\u0646 (Box) \u0648\u062E\u0635\u0648\u0645\u0627\u062A \u0627\u0644\u0643\u0645\u064A\u0627\u062A" : "\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0645\u0641\u0631\u0642"
      );
    }
  };
  window.BAYTOUKA.toggleTheme = function() {
    const next = store.theme === "dark" ? "light" : "dark";
    setTheme(next);
    syncThemeButtonUI();
    showToast(next === "dark" ? "\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0644\u064A\u0644\u064A \u0627\u0644\u062F\u0627\u0641\u0626" : "\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0646\u0647\u0627\u0631\u064A");
  };
  window.BAYTOUKA.filterByCategory = function(category, scroll = false) {
    store.filters.category = category;
    store.filters.homeSubCategory = "all";
    store.filters.visibleCount = BATCH_SIZE;
    recomputeFilteredProducts();
    renderCategoryFilterChips();
    renderBentoSection();
    renderCatalogGrid();
    if (scroll) {
      document.getElementById("catalog-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };
  window.BAYTOUKA.selectCategoryBySlug = function(slug, scroll = true) {
    const cat = getCategoryBySlug(slug);
    if (!cat) return;
    window.BAYTOUKA.filterByCategory(cat.id, scroll);
  };
  window.BAYTOUKA.filterHomeSubCategory = function(subId) {
    store.filters.category = "\u0627\u0644\u0645\u0637\u0631\u0627\u062A \u0648\u0645\u0633\u062A\u0644\u0632\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u0632\u0644";
    store.filters.homeSubCategory = subId;
    store.filters.visibleCount = BATCH_SIZE;
    recomputeFilteredProducts();
    renderCategoryFilterChips();
    renderBentoSection();
    renderCatalogGrid();
    document.getElementById("catalog-section")?.scrollIntoView({ behavior: "smooth" });
  };
  window.BAYTOUKA.filterByCollection = function(colId) {
    store.filters.collectionId = colId;
    store.filters.visibleCount = BATCH_SIZE;
    recomputeFilteredProducts();
    renderCollectionsStrip();
    renderCatalogGrid();
  };
  window.BAYTOUKA.loadMoreProducts = function() {
    store.filters.visibleCount += BATCH_SIZE;
    renderCatalogGrid();
  };
  window.BAYTOUKA.onCardVariantSelect = function(event, familyId, variantIdx) {
    event?.stopPropagation();
    const fam = selectFamilyVariant(familyId, variantIdx);
    if (!fam) return;
    const isWholesale = store.mode === "wholesale";
    const activeVar = fam.activeVariant;
    const activePrice = isWholesale ? activeVar.wholesalePrice : activeVar.retailPrice;
    const comparePrice = isWholesale ? activeVar.retailPrice : activeVar.wholesalePrice;
    document.querySelectorAll(`.product-card[data-family-id="${fam.familyId}"]`).forEach((card) => {
      card.setAttribute("data-active-sku", activeVar.sku);
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
        compareEl.innerHTML = `${isWholesale ? "\u0633\u0639\u0631 \u0627\u0644\u0645\u0641\u0631\u0642:" : "\u0633\u0639\u0631 \u0627\u0644\u062C\u0645\u0644\u0629:"} <strong class="num-ltr" dir="ltr">$${comparePrice.toFixed(2)}</strong>`;
      }
      if (artSlot) {
        artSlot.innerHTML = renderArtTile(
          {
            ...fam,
            activeSku: activeVar.sku,
            activeBox: activeVar.box,
            customImageUrl: activeVar.customImageUrl || fam.customImageUrl
          },
          { size: "md", showMeta: true }
        );
      }
      const chips = card.querySelectorAll(".variant-chip:not(.variant-chip-more)");
      chips.forEach((chip, idx) => {
        chip.classList.toggle("active", idx === Number(variantIdx));
      });
    });
  };
  window.BAYTOUKA.selectModalVariant = function(familyId, variantIdx) {
    const fam = selectFamilyVariant(familyId, variantIdx);
    const content = document.getElementById("modal-product-content");
    if (!fam || !content) return;
    content.innerHTML = renderQuickViewModal(fam, store.mode === "wholesale", quickViewState.qty, store.settings);
    if (window.lucide) window.lucide.createIcons();
  };
  window.BAYTOUKA.selectPageVariant = function(familyId, variantIdx) {
    const fam = selectFamilyVariant(familyId, variantIdx);
    if (!fam) return;
    handleRouteChange();
  };
  window.BAYTOUKA.quickAddWithFly = function(event, familyId) {
    const triggerEl = event?.currentTarget || null;
    const prod = addToCart(familyId, 1);
    if (!prod) return;
    flyToCartAnimation(triggerEl);
    renderCartUI();
    showToast(`\u0623\u064F\u0636\u064A\u0641 "${prod.nameAr}" (${prod.sku}) \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629`);
  };
  window.BAYTOUKA.addToCart = function(familyId, qty = 1, explicitVariantIdx = null) {
    const prod = addToCart(familyId, qty, explicitVariantIdx);
    if (!prod) return;
    renderCartUI();
    window.BAYTOUKA.openCartDrawer();
    showToast(`\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 "${prod.nameAr}" (${prod.sku}) \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629`);
  };
  window.BAYTOUKA.updateCartQty = function(index, newQty) {
    updateCartItemQty(index, newQty);
    renderCartUI();
  };
  window.BAYTOUKA.saveCartForLater = function() {
    if (saveCartForLater()) {
      showToast("\u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u0633\u0644\u0629 \u0644\u0644\u0631\u062C\u0648\u0639 \u0625\u0644\u064A\u0647\u0627 \u0644\u0627\u062D\u0642\u0627\u064B");
    }
  };
  window.BAYTOUKA.restoreSavedCart = function() {
    if (restoreSavedCart()) {
      renderCartUI();
      showToast("\u062A\u0645\u062A \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0633\u0644\u0629 \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0629 \u0628\u0646\u062C\u0627\u062D");
    }
  };
  window.BAYTOUKA.openCartDrawer = function() {
    document.getElementById("cart-drawer")?.classList.add("open");
    document.getElementById("cart-drawer")?.classList.remove("translate-x-full");
    document.getElementById("cart-drawer-overlay")?.classList.add("open");
    document.getElementById("cart-drawer-overlay")?.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };
  window.BAYTOUKA.closeCartDrawer = function() {
    document.getElementById("cart-drawer")?.classList.remove("open");
    document.getElementById("cart-drawer")?.classList.add("translate-x-full");
    document.getElementById("cart-drawer-overlay")?.classList.remove("open");
    document.getElementById("cart-drawer-overlay")?.classList.add("hidden");
    document.body.style.overflow = "";
  };
  window.BAYTOUKA.toggleCart = function() {
    const drawer = document.getElementById("cart-drawer");
    if (drawer?.classList.contains("open")) {
      window.BAYTOUKA.closeCartDrawer();
    } else {
      window.BAYTOUKA.openCartDrawer();
    }
  };
  window.BAYTOUKA.openQuickView = function(familyOrProductId, explicitVariantIdx = null) {
    const numId = Number(familyOrProductId);
    const fam = store.families.find((f) => Number(f.familyId) === numId || Number(f.id) === numId) || store.families.find((f) => f.variants.some((v) => Number(v.id) === numId));
    const modal = document.getElementById("quick-view-modal");
    const content = document.getElementById("modal-product-content");
    if (!fam || !modal || !content) return;
    if (explicitVariantIdx !== null) {
      selectFamilyVariant(fam.familyId, explicitVariantIdx);
    }
    recordRecentlyViewed(fam.familyId);
    quickViewState = { familyId: fam.familyId, qty: 1 };
    content.innerHTML = renderQuickViewModal(fam, store.mode === "wholesale", 1, store.settings);
    modal.classList.add("open");
    if (window.lucide) window.lucide.createIcons();
  };
  window.BAYTOUKA.stepQuickViewQty = function(delta) {
    const fam = store.families.find((f) => Number(f.familyId) === Number(quickViewState.familyId));
    if (!fam) return;
    quickViewState.qty = Math.max(1, quickViewState.qty + delta);
    const qtyEl = document.getElementById("qv-qty-value");
    const totalEl = document.getElementById("qv-line-total");
    const activeVar = fam.activeVariant || fam.variants[0];
    const unitPrice = store.mode === "wholesale" ? activeVar.wholesalePrice : activeVar.retailPrice;
    if (qtyEl) qtyEl.textContent = String(quickViewState.qty);
    if (totalEl) totalEl.textContent = `$${(unitPrice * quickViewState.qty).toFixed(2)} USD`;
  };
  window.BAYTOUKA.confirmQuickViewAdd = function(familyId) {
    const qty = quickViewState.familyId === familyId ? quickViewState.qty : 1;
    window.BAYTOUKA.closeQuickView();
    window.BAYTOUKA.addToCart(familyId, qty);
  };
  window.BAYTOUKA.closeQuickView = function() {
    document.getElementById("quick-view-modal")?.classList.remove("open");
  };
  window.BAYTOUKA.openProductPage = function(familyId) {
    window.location.hash = `#/product/${familyId}`;
  };
  window.BAYTOUKA.quickSearchSku = function(sku) {
    const fam = store.families.find((f) => f.sku === sku || f.variants.some((v) => v.sku === sku));
    if (fam) {
      const vIdx = fam.variants.findIndex((v) => v.sku === sku);
      window.BAYTOUKA.openQuickView(fam.familyId, vIdx >= 0 ? vIdx : 0);
    } else {
      const inp = document.getElementById("catalog-search-input");
      if (inp) {
        inp.value = sku;
        inp.dispatchEvent(new Event("input", { bubbles: true }));
      }
      document.getElementById("catalog-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };
  window.BAYTOUKA.copyShareUrl = function() {
    navigator.clipboard?.writeText(window.location.href);
    showToast("\u062A\u0645 \u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0627\u0644\u0645\u0646\u062A\u062C \u0644\u0645\u0634\u0627\u0631\u0643\u062A\u0647");
  };
  window.BAYTOUKA.closeSearchSuggestions = function() {
    document.querySelectorAll(".search-suggestions-dropdown").forEach((el) => el.classList.add("hidden"));
  };
  window.BAYTOUKA.addReadyTierToCart = function(tierId) {
    const pkg = (store.packages || []).find((p) => p.id === tierId);
    if (!pkg || !pkg.resolvedItems) return;
    let added = 0;
    pkg.resolvedItems.forEach((item) => {
      const res = addToCart(item.familyId, item.qty || 1);
      if (res) added += item.qty || 1;
    });
    renderCartUI();
    window.BAYTOUKA.openCartDrawer();
    showToast(`\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 "${pkg.nameAr}" (${added} \u0642\u0637\u0639) \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629!`);
  };
  window.BAYTOUKA.sendReadyTierWhatsApp = function(tierId) {
    const pkg = (store.packages || []).find((p) => p.id === tierId);
    if (!pkg || !pkg.resolvedItems) return;
    const waPhone = store.settings.whatsappPhone || "96171840915";
    const lines = pkg.resolvedItems.map(
      (it) => `\u2022 ${it.nameAr} (SKU: ${it.sku}) \xD7 ${it.qty}`
    );
    const msg = `\u0645\u0631\u062D\u0628\u0627\u064B ${store.settings.storeNameAr || "\u0628\u064A\u062A\u0643"} BAYTOUKA\u060C
\u0623\u0648\u062F \u0637\u0644\u0628 \u0627\u0644\u0628\u0627\u0642\u0629 \u0627\u0644\u062C\u0627\u0647\u0632\u0629: *${pkg.nameAr}*

\u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0645\u0634\u0645\u0648\u0644\u0629:
${lines.join("\n")}

\u0633\u0639\u0631 \u0627\u0644\u0628\u0627\u0642\u0629 \u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645 (-${pkg.discountPct}%): *$${pkg.packagePrice.toFixed(2)} USD* (\u062A\u0648\u0641\u064A\u0631 $${pkg.savingsAmount.toFixed(2)})
\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0644\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628\u064A\u0629.`;
    window.open(`https://wa.me/${encodeURIComponent(waPhone)}?text=${encodeURIComponent(msg)}`, "_blank");
  };
  window.BAYTOUKA.setBridalBuilderStep = function(stepIdx) {
    store.bridalBuilder.activeStepIdx = Number(stepIdx) || 0;
    renderBridalSection();
  };
  window.BAYTOUKA.toggleBridalBuilderItem = function(familyId) {
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
  window.BAYTOUKA.changeBridalBuilderVariant = function(familyId, variantIdx) {
    const numId = Number(familyId);
    const vIdx = Number(variantIdx) || 0;
    store.bridalBuilder.selections[numId] = {
      familyId: numId,
      variantIdx: vIdx,
      qty: store.bridalBuilder.selections[numId]?.qty || 1
    };
    renderBridalSection();
  };
  window.BAYTOUKA.addBridalPackageToCart = function() {
    const selections = Object.values(store.bridalBuilder.selections || {}).filter((s) => s && s.qty > 0);
    if (selections.length === 0) {
      showToast("\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0635\u0646\u0641 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u0644\u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0628\u0627\u0642\u0629");
      return;
    }
    let added = 0;
    selections.forEach((sel) => {
      const p = addToCart(sel.familyId, sel.qty, sel.variantIdx || 0);
      if (p) added += sel.qty;
    });
    renderCartUI();
    window.BAYTOUKA.openCartDrawer();
    showToast(`\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0628\u0627\u0642\u062A\u0643 \u0627\u0644\u0645\u062E\u0635\u0635\u0629 (${added} \u0642\u0637\u0639) \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629!`);
  };
  window.BAYTOUKA.sendBridalPackageWhatsApp = function() {
    const selections = Object.values(store.bridalBuilder.selections || {}).filter((s) => s && s.qty > 0);
    if (selections.length === 0) {
      showToast("\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0623\u0648\u0644\u0627\u064B \u0644\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0628\u0627\u0642\u0629 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628");
      return;
    }
    const waPhone = store.settings.whatsappPhone || "96171840915";
    const lines = [];
    let wholesaleTotal = 0;
    selections.forEach((sel) => {
      const fam = store.families.find((f) => Number(f.familyId) === Number(sel.familyId));
      if (!fam) return;
      const v = fam.variants[sel.variantIdx || 0] || fam.variants[0];
      wholesaleTotal += v.wholesalePrice * sel.qty;
      lines.push(`\u2022 ${fam.baseNameAr} (SKU: ${v.sku} | Box: ${v.box}) \u2014 $${v.wholesalePrice.toFixed(2)}`);
    });
    const bundlePrice = (wholesaleTotal * 0.94).toFixed(2);
    const msg = `\u0645\u0631\u062D\u0628\u0627\u064B ${store.settings.storeNameAr || "\u0628\u064A\u062A\u0643"} BAYTOUKA\u060C
\u0623\u0648\u062F \u0637\u0644\u0628 \u0628\u0627\u0642\u0629 \u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0639\u0631\u0648\u0633 \u0627\u0644\u0645\u062E\u0635\u0635\u0629:

${lines.join("\n")}

\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0628\u0627\u0642\u0629 \u0628\u0639\u062F \u062E\u0635\u0645 \u0627\u0644\u0639\u0631\u0627\u0626\u0633: *$${bundlePrice} USD*
\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0644\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0628\u0627\u0642\u0629.`;
    window.open(`https://wa.me/${encodeURIComponent(waPhone)}?text=${encodeURIComponent(msg)}`, "_blank");
  };
  window.BAYTOUKA.selectDeliveryRegion = function(regionId) {
    store.selectedRegionId = regionId;
    const select = document.getElementById("checkout-region");
    if (select) select.value = regionId;
    renderRegionsShowcase();
    renderCartUI();
    showToast("\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0641\u064A \u0627\u0644\u0633\u0644\u0629");
  };
  window.BAYTOUKA.openAdminWithPassword = function() {
    window.location.hash = "#/admin";
  };
  window.BAYTOUKA.navigateTo = function(path) {
    if (path === "/admin" || path === "#admin" || path === "#/admin") {
      window.location.hash = "#/admin";
    } else {
      window.location.hash = "#/";
      showStorefrontView();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  window.BAYTOUKA.mobileNavAction = function(tab) {
    if (tab === "home") {
      window.location.hash = "#/";
      showStorefrontView();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (tab === "categories") {
      if (store.route.view !== "home") {
        window.location.hash = "#/";
        showStorefrontView();
      }
      setTimeout(() => {
        document.getElementById("bento-section")?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    } else if (tab === "search") {
      if (store.route.view !== "home") {
        window.location.hash = "#/";
        showStorefrontView();
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        const mobileInput = document.getElementById("mobile-search-input") || document.getElementById("catalog-search-input");
        mobileInput?.focus();
      }, 180);
    } else if (tab === "cart") {
      window.BAYTOUKA.openCartDrawer();
    }
  };
  function bindGlobalEvents() {
    document.querySelectorAll(".cart-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", window.BAYTOUKA.toggleCart);
    });
    document.getElementById("cart-close-btn")?.addEventListener("click", window.BAYTOUKA.closeCartDrawer);
    document.getElementById("cart-drawer-overlay")?.addEventListener("click", window.BAYTOUKA.closeCartDrawer);
    document.getElementById("clear-cart-btn")?.addEventListener("click", () => {
      clearCart();
      renderCartUI();
      showToast("\u062A\u0645 \u0625\u0641\u0631\u0627\u063A \u0633\u0644\u0629 \u0627\u0644\u062A\u0633\u0648\u0642");
    });
    const qvModal = document.getElementById("quick-view-modal");
    document.getElementById("modal-close-btn")?.addEventListener("click", window.BAYTOUKA.closeQuickView);
    qvModal?.addEventListener("click", (e) => {
      if (e.target === qvModal) window.BAYTOUKA.closeQuickView();
    });
    const searchInputs = [
      document.getElementById("search-input"),
      document.getElementById("mobile-search-input"),
      document.getElementById("catalog-search-input")
    ];
    const clearSearchBtn = document.getElementById("search-clear-btn");
    const desktopDropdown = document.getElementById("desktop-search-suggestions");
    const mobileDropdown = document.getElementById("mobile-search-suggestions");
    const handleSearchInput = debounce((val, sourceId) => {
      store.filters.searchQuery = val;
      store.filters.visibleCount = BATCH_SIZE;
      searchInputs.forEach((inp) => {
        if (inp && inp.value !== val) inp.value = val;
      });
      if (clearSearchBtn) clearSearchBtn.classList.toggle("hidden", !val);
      recomputeFilteredProducts();
      renderCatalogGrid();
      if (val.trim().length >= 1) {
        const suggestions = getSearchSuggestions(val, 6);
        const html = renderSearchSuggestionsDropdown(suggestions, val, store.mode === "wholesale");
        if (sourceId === "search-input" && desktopDropdown) {
          desktopDropdown.innerHTML = html;
          desktopDropdown.classList.remove("hidden");
        } else if (sourceId === "mobile-search-input" && mobileDropdown) {
          mobileDropdown.innerHTML = html;
          mobileDropdown.classList.remove("hidden");
        }
      } else {
        window.BAYTOUKA.closeSearchSuggestions();
      }
    }, 90);
    searchInputs.forEach((inp) => {
      if (!inp) return;
      inp.addEventListener("input", (e) => handleSearchInput(e.target.value, inp.id));
    });
    clearSearchBtn?.addEventListener("click", () => {
      handleSearchInput("", "");
      window.BAYTOUKA.closeSearchSuggestions();
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-search-shell") && !e.target.closest(".mobile-search-bar")) {
        window.BAYTOUKA.closeSearchSuggestions();
      }
    });
    document.getElementById("sort-select")?.addEventListener("change", (e) => {
      store.filters.sortBy = e.target.value;
      recomputeFilteredProducts();
      renderCatalogGrid();
    });
    document.getElementById("reset-filters-btn")?.addEventListener("click", () => {
      store.filters.category = "all";
      store.filters.homeSubCategory = "all";
      store.filters.collectionId = "all";
      store.filters.searchQuery = "";
      store.filters.sortBy = "featured";
      store.filters.visibleCount = BATCH_SIZE;
      searchInputs.forEach((inp) => {
        if (inp) inp.value = "";
      });
      const sortSel = document.getElementById("sort-select");
      if (sortSel) sortSel.value = "featured";
      recomputeFilteredProducts();
      renderCollectionsStrip();
      renderCategoryFilterChips();
      renderBentoSection();
      renderCatalogGrid();
    });
    document.getElementById("checkout-region")?.addEventListener("change", (e) => {
      store.selectedRegionId = e.target.value;
      renderRegionsShowcase();
      renderCartUI();
    });
    document.getElementById("checkout-form")?.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("checkout-name")?.value.trim();
      const phone = document.getElementById("checkout-phone")?.value.trim();
      const address = document.getElementById("checkout-address")?.value.trim();
      const notes = document.getElementById("checkout-notes")?.value.trim() || "";
      if (!name || !phone || !address) {
        showToast("\u064A\u0631\u062C\u0649 \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0627\u0633\u0645 \u0648\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0648\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062A\u0641\u0635\u064A\u0644\u064A");
        return;
      }
      const summary = getCartSummary();
      if (summary.items.length === 0) {
        showToast("\u0633\u0644\u0629 \u0627\u0644\u062A\u0633\u0648\u0642 \u0641\u0627\u0631\u063A\u0629! \u0623\u0636\u0641 \u0635\u0646\u0641\u0627\u064B \u0648\u0627\u062D\u062F\u0627\u064B \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u0644\u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628.");
        return;
      }
      const isWholesale = store.mode === "wholesale";
      const modeText = isWholesale ? "\u0645\u0628\u064A\u0639 \u0628\u0627\u0644\u062C\u0645\u0644\u0629 (Wholesale)" : "\u0645\u0628\u064A\u0639 \u0628\u0627\u0644\u0645\u0641\u0631\u0642 (Retail)";
      const waPhone = store.settings.whatsappPhone || "96171840915";
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
        showToast(orderErr.message || "\u062A\u0639\u0630\u0631 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0637\u0644\u0628\u064A\u0629\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u062C\u062F\u062F\u0627\u064B");
        return;
      }
      const orderNum = orderRecord?.orderNumber || `BYT-${Date.now().toString().slice(-6)}`;
      const itemsLines = summary.items.map(
        (item, idx) => `${idx + 1}. ${item.product.nameAr} (SKU: ${item.product.sku} | Box: ${item.product.box})
   \u0627\u0644\u0643\u0645\u064A\u0629: ${item.qty} \xD7 $${item.unitPrice.toFixed(2)} = $${item.lineTotal.toFixed(2)}`
      ).join("\n");
      const message = `\u0645\u0631\u062D\u0628\u0627\u064B ${store.settings.storeNameAr || "\u0628\u064A\u062A\u0643"} ${store.settings.storeNameEn || "BAYTOUKA"}\u060C

\u0623\u0648\u062F \u062A\u0623\u0643\u064A\u062F \u0637\u0644\u0628\u064A\u062A\u064A \u0631\u0642\u0645: *${orderNum}* (${modeText})

\u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629:
${itemsLines}

\u0627\u0644\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0641\u0631\u0639\u064A: $${summary.subtotal.toFixed(2)} USD
\u0627\u0644\u062A\u0648\u0635\u064A\u0644 (${summary.region.nameAr}): ${summary.isFreeDelivery ? "\u0645\u062C\u0627\u0646\u064A ($0.00)" : `$${summary.deliveryFee.toFixed(2)} USD`}
*\u0627\u0644\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0643\u0644\u064A: $${summary.grandTotal.toFixed(2)} USD*

\u0627\u0644\u0627\u0633\u0645: ${name}
\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641: ${phone}
\u0627\u0644\u0645\u0646\u0637\u0642\u0629: ${summary.region.nameAr}
\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062A\u0641\u0635\u064A\u0644\u064A: ${address}${notes ? `
\u0645\u0644\u0627\u062D\u0638\u0627\u062A: ${notes}` : ""}

\u0627\u0644\u0631\u062C\u0627\u0621 \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628\u064A\u0629.`;
      showToast(`\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0637\u0644\u0628\u064A\u062A\u0643 \u0631\u0642\u0645 ${orderNum} \u0628\u0646\u062C\u0627\u062D! \u062C\u0627\u0631\u064A \u0641\u062A\u062D \u0648\u0627\u062A\u0633\u0627\u0628...`);
      window.open(`https://wa.me/${encodeURIComponent(waPhone)}?text=${encodeURIComponent(message)}`, "_blank");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        window.BAYTOUKA.closeQuickView();
        window.BAYTOUKA.closeCartDrawer();
        window.BAYTOUKA.closeSearchSuggestions();
      }
    });
  }
})();
//# sourceMappingURL=app.bundle.js.map
