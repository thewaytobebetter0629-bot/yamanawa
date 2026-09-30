export type PricingTier = {
  name: string;
  priceFrom: string;
  suitedFor: string;
  includes: string[];
  cta: string;
  ctaHref: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "VISUAL STARTER",
    priceFrom: "NT$5,000",
    suitedFor: "首次合作／小型品牌／單一產品測試",
    includes: [
      "基本產品攝影",
      "白底產品照",
      "基本情境延伸",
      "3–8 張品牌素材",
      "基本後製",
      "基本商用授權",
    ],
    cta: "START A PROJECT",
    ctaHref: "/contact",
  },
  {
    name: "BRAND CAMPAIGN",
    priceFrom: "NT$15,000",
    suitedFor: "新品上市／品牌活動／廣告素材",
    includes: [
      "Creative Direction",
      "Moodboard",
      "Product Photography",
      "AI Environment",
      "AI Model",
      "Campaign Visual",
      "Social Content",
      "Advertising Visual",
      "Motion Visual",
    ],
    cta: "CREATE A CAMPAIGN",
    ctaHref: "/contact",
  },
  {
    name: "BRAND VISUAL SYSTEM",
    priceFrom: "NT$35,000",
    suitedFor: "需要持續產出內容的品牌",
    includes: [
      "Brand Visual Direction",
      "Product Library",
      "AI Scene Library",
      "AI Model",
      "Prompt System",
      "Campaign Visual",
      "Social Content",
      "Advertising Visual",
      "Website Visual",
    ],
    cta: "BUILD YOUR VISUAL SYSTEM",
    ctaHref: "/contact",
  },
];

export const monthlyPartnership = {
  name: "MONTHLY PARTNERSHIP",
  headline: ["ONE BRAND.", "CONTINUOUS CREATION."],
  headlineZh: "一次建立視覺系統，每月持續產出。",
  includes: [
    "新品素材",
    "社群素材",
    "廣告素材",
    "節慶檔期",
    "網站 Banner",
    "AI Motion",
    "短影片",
    "產品視覺",
  ],
  priceFrom: "NT$15,000–50,000 / Month",
  note: "依需求報價",
};
