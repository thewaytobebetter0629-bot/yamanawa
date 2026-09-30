import type { Localized } from "@/i18n/config";

export type Project = {
  code: string;
  slug: string;
  title: string;
  category: "Product" | "AI" | "Campaign" | "Photography" | "Space";
  categoryLabel: Localized;
  year: string;
  client?: string;
  cover: string;
  coverAlt: Localized;
  videoEmbedUrl?: string;
  videoTitle?: Localized;
  previewOnly: boolean;
  summary: Localized;
  legacySlugs?: string[];
};

// Stable archive IDs: append new entries; never renumber existing projects.
// These three requested entries have illustrative covers until approved assets arrive.
export const projects: Project[] = [
  {
    code: "YMW-001", slug: "ymw-001-ibitsu", title: "IBITSU",
    category: "AI", categoryLabel: { "zh-TW": "產品影像 / AI 視覺", en: "PRODUCT / AI VISUAL" },
    year: "2026", cover: "/work/ymw-001.svg", previewOnly: true,
    coverAlt: { "zh-TW": "IBITSU 黑銀軌道示意封面，非正式作品", en: "IBITSU silver orbit placeholder, not project photography" },
    summary: { "zh-TW": "專案影像與製作內容整理中。", en: "Project imagery and production details are being prepared." },
    legacySlugs: ["ibitsu"],
  },
  {
    code: "YMW-002", slug: "ymw-002-wonder", title: "Wonder x 大甲鎮南宮",
    category: "Product", categoryLabel: { "zh-TW": "產品視覺 / 品牌內容", en: "PRODUCT / BRAND CONTENT" },
    year: "2026", cover: "/work/ymw-002-wonder-cover.jpg", previewOnly: true,
    coverAlt: { "zh-TW": "Wonder x 大甲鎮南宮作品封面：鎮南宮屋脊", en: "Wonder x Dajia Jenn Lann Temple project cover: temple roof" },
    videoEmbedUrl: "https://drive.google.com/file/d/1AT_rVnAyk7Dh1OmW1b0S2qU2JovfmB09/preview",
    videoTitle: { "zh-TW": "Wonder x 大甲鎮南宮專案影片", en: "Wonder x Dajia Jenn Lann Temple project film" },
    summary: { "zh-TW": "專案影像與製作內容整理中。", en: "Project imagery and production details are being prepared." },
    legacySlugs: ["wonder"],
  },
  {
    code: "YMW-003", slug: "ymw-003-gauza", title: "GAUZÀ",
    category: "Space", categoryLabel: { "zh-TW": "空間 / 攝影", en: "SPACE / PHOTOGRAPHY" },
    year: "2026", cover: "/work/ymw-003.svg", previewOnly: true,
    coverAlt: { "zh-TW": "GAUZÀ 黑銀幾何示意封面，非正式作品", en: "GAUZÀ silver geometry placeholder, not project photography" },
    summary: { "zh-TW": "專案影像與製作內容整理中。", en: "Project imagery and production details are being prepared." },
    legacySlugs: ["gauza"],
  },
];
export const selectedProjects = projects.slice(0, 4);
