import type { Localized } from "@/i18n/config";

export type Service = {
  index: string;
  slug: string;
  title: Localized;
  description: Localized;
  items: Localized<string[]>;
};

export const services: Service[] = [
  {
    index: "01",
    slug: "product-visual",
    title: { "zh-TW": "產品視覺", en: "PRODUCT VISUAL" },
    description: {
      "zh-TW": "從白底、細節到情境攝影，製作適合電商、廣告與品牌形象的產品照片。",
      en: "White-background, detail and lifestyle photography for e-commerce, advertising and brand imagery.",
    },
    items: {
      "zh-TW": ["產品攝影", "白底產品照", "產品細節", "產品活動視覺", "產品情境影像", "電商視覺"],
      en: [
        "Product Photography",
        "White Background Photography",
        "Product Detail",
        "Product Campaign",
        "Product Lifestyle Visual",
        "E-commerce Visual",
      ],
    },
  },
  {
    index: "02",
    slug: "ai-visual-campaign",
    title: { "zh-TW": "AI 視覺企劃", en: "AI VISUAL CAMPAIGN" },
    description: {
      "zh-TW": "結合產品實拍與 AI 場景、模特及動態製作，延伸新品上市與行銷活動的視覺。",
      en: "Combine product photography with AI scenes, models and motion for launches and campaigns.",
    },
    items: {
      "zh-TW": ["AI 模特", "AI 場景", "AI 產品影像", "AI 活動視覺", "廣告素材", "動態視覺"],
      en: [
        "AI Model",
        "AI Environment",
        "AI Product Visual",
        "AI Campaign",
        "Advertising Creative",
        "Motion Visual",
      ],
    },
  },
  {
    index: "03",
    slug: "brand-content-system",
    title: { "zh-TW": "品牌內容系統", en: "BRAND CONTENT SYSTEM" },
    description: {
      "zh-TW": "依品牌檔期製作社群、廣告、網站與動態素材，可採單次專案或每月合作。",
      en: "Social, advertising, website and motion assets for your brand calendar, as a project or monthly partnership.",
    },
    items: {
      "zh-TW": ["社群視覺", "廣告素材", "活動視覺", "網站視覺", "動態內容", "每月內容製作"],
      en: [
        "Social Media Visual",
        "Advertising Creative",
        "Campaign",
        "Website Visual",
        "Motion Content",
        "Monthly Content Production",
      ],
    },
  },
];

export const addOns = [
  "Space Photography",
  "Food Photography",
  "Event Photography",
  "Portrait Photography",
  "Short Video",
  "Brand Film",
  "AI Motion",
  "AI Animation",
  "Website Design",
  "Landing Page",
  "Campaign Landing Page",
];
