/**
 * Traditional Chinese (Taiwan) — the default locale. Written natively rather
 * than translated: headings 4–12 characters, Taiwan terminology (產品攝影,
 * 白底產品照, AI 情境影像, AI 模特…), AI described as a tool, not the pitch.
 * `en.ts` is typed against this shape, so a missing key fails the build.
 */
export const zhTW = {
  meta: {
    title: "YAMANAWA｜專業攝影與 AI 視覺製作的品牌影像工作室",
    titleTemplate: "%s｜YAMANAWA",
    description:
      "YAMANAWA 是位於台灣的品牌影像工作室，結合專業攝影與 AI 視覺製作，提供產品攝影、AI 情境影像與品牌內容，協助品牌持續建立一致的視覺。",
    keywords: [
      "YAMANAWA",
      "品牌影像工作室",
      "產品攝影",
      "白底產品照",
      "AI 產品影像",
      "AI 情境影像",
      "品牌視覺",
      "品牌內容",
    ],
    pages: {
      work: { title: "作品", description: "YAMANAWA 精選作品，案例整理中。" },
      services: {
        title: "服務項目",
        description: "產品視覺、AI 視覺企劃與品牌內容系統，服務詳情整理中。",
      },
      about: { title: "關於我們", description: "連結想像與真實：YAMANAWA 的品牌故事。" },
      pricing: { title: "服務方案", description: "產品商業影像、產品動畫、產品情境動畫與品牌網站服務。專業攝影結合生成式 AI，品牌網站 NT$25,000 起，基礎技術維護 NT$600／月。" },
      contact: { title: "聯絡我們", description: "與 YAMANAWA 聯絡，開始合作。" },
    },
  },
  nav: {
    homeLabel: "YAMANAWA 首頁",
    links: {
      work: "作品",
      services: "服務",
      about: "關於我們",
      pricing: "服務方案",
      contact: "聯絡我們",
    },
    cta: "開始合作",
    menu: "選單",
    close: "關閉",
    openMenu: "開啟選單",
    closeMenu: "關閉選單",
  },
  language: {
    switchLabel: "切換至英文版",
  },
  intro: {
    hud: "實拍 × AI 製作 × 品牌系統",
    skip: "略過",
  },
  hero: {
    caption: "品牌影像工作室",
    titleLines: ["從真實出發", "為品牌創作"],
    subLines: ["產品攝影 × AI 視覺 × 動態內容", "從產品形象到每月內容，讓品牌持續被看見。"],
    viewWork: "查看作品",
    startProject: "開始合作",
    scroll: "向下滑動",
  },
  realAiBrand: {
    words: ["實拍", "AI", "品牌"],
    lines: ["以攝影記錄材質與細節。", "用 AI 延伸場景與創意。", "整合產品、模特與動態影像，", "製作適合社群、廣告與網站的品牌內容。"],
  },
  limits: {
    caption: "製作方式",
    titleLines: ["依品牌需求", "選擇製作方式"],
    before: "先了解你的需求",
    after: "再安排適合的製作",
    limits: ["產品特色", "品牌風格", "使用平台", "交付數量", "現有素材", "預算範圍", "上線時程"],
    transform: ["實拍：保留材質與細節", "AI：延伸模特與場景", "內容製作：整合靜態與動態"],
    flowCaption: "我們這樣製作",
    flow: ["需求", "規劃", "素材", "製作", "交付"],
  },
  work: {
    title: "精選作品",
    counter: "02 / 08",
    viewAll: "查看全部作品",
    pending: "影像準備中",
  },
  servicesSection: {
    caption: "產品視覺・AI 企劃・品牌內容",
  },
  buildOnce: {
    titleLines: ["累積品牌素材", "持續延伸內容"],
    bodyLines: ["整理可沿用的產品素材、場景與視覺風格，", "依新品、檔期與平台需求補拍或延伸，", "從單次專案到每月合作，維持內容的一致性。"],
    elements: ["產品", "模特", "場景", "風格"],
  },
  process: {
    caption: "五個步驟",
    title: "合作流程",
    steps: [
      { title: "確認需求", description: "了解品牌、用途、預算與交付時程。" },
      { title: "規劃製作", description: "確認視覺方向、拍攝安排與交付項目。" },
      { title: "準備素材", description: "安排實拍，或評估品牌提供的既有素材。" },
      { title: "製作內容", description: "依企劃整合修圖、AI 視覺與動態製作。" },
      { title: "交付與延伸", description: "依約定格式交付，並討論後續檔期或月度合作。" },
    ],
  },
  cta: {
    eyebrow: "下一步",
    titleLines: ["下一個品牌畫面", "從這裡開始"],
    subtitle: "告訴我們品牌、用途與時程，一起安排適合的製作。",
    button: "開始合作",
  },
  footer: {
    tagline: "品牌影像工作室",
    location: "台灣",
    siteHeading: "頁面",
    connectHeading: "聯絡",
    slogan: ["在想像與真實之間", "創作自由"],
    rights: "版權所有。",
    systemLine: "實拍 × AI 製作 × 品牌系統",
  },
  comingSoon: {
    body: "頁面建置中。",
    back: "回到首頁",
  },
  pages: {
    work: { eyebrow: "作品", title: "精選作品" },
    services: { eyebrow: "服務", title: "服務項目" },
    about: { eyebrow: "關於我們", title: "連結想像與真實" },
    pricing: { eyebrow: "報價", title: "服務方案" },
  },
  contact: {
    eyebrow: "聯絡我們",
    title: "開始合作",
    body: "填寫下方表單，讓我們了解你的品牌與需求，規劃初步視覺及基礎製作方向。",
  },
  notFound: {
    eyebrow: "404",
    title: "找不到頁面",
    body: "這個網址可能已經移動或不存在。",
    back: "回到首頁",
  },
};

export type Dictionary = typeof zhTW;
