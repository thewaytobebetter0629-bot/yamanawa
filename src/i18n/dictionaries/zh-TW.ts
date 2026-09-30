/**
 * Traditional Chinese (Taiwan) — the default locale. Written natively rather
 * than translated: headings 4–12 characters, Taiwan terminology (產品攝影,
 * 白底產品照, AI 情境影像, AI 模特…), AI described as a tool, not the pitch.
 * `en.ts` is typed against this shape, so a missing key fails the build.
 */
export const zhTW = {
  meta: {
    title: "YAMANAWA｜自動化工作流與數位產品設計",
    titleTemplate: "%s｜YAMANAWA",
    description:
      "YAMANAWA 為品牌與小型團隊建置自動化工作流、客製化 App 與品牌網站，從流程盤點、原型設計到上線與持續優化。",
    keywords: [
      "YAMANAWA",
      "自動化工作流",
      "客製化 App",
      "網頁應用程式",
      "品牌網站",
      "流程改善",
    ],
    pages: {
      work: {
        title: "作品",
        description: "YAMANAWA 既有攝影、視覺設計與動態影像作品。",
      },
      services: {
        title: "服務項目",
        description:
          "自動化工作流、App 與軟體製作、品牌網站與 AI 內容，從需求盤點到上線交接。",
      },
      about: {
        title: "關於我們",
        description:
          "從攝影與品牌設計出發，連結自動化工作流與數位產品的台灣工作室。",
      },
      pricing: {
        title: "服務方案",
        description:
          "從流程診斷、專案建置到持續維護，確認範圍與驗收標準後個別報價。",
      },
      contact: {
        title: "聯絡我們",
        description: "與 YAMANAWA 聯絡，開始合作。",
      },
    },
  },
  nav: {
    homeLabel: "YAMANAWA 首頁",
    links: {
      work: "作品",
      services: "服務",
      about: "關於我們",
      pricing: "合作方式",
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
    hud: "工作流 × App × 設計",
    skip: "略過",
  },
  hero: {
    caption: "品牌影像工作室",
    titleLines: ["從真實出發", "為品牌創作"],
    subLines: [
      "產品攝影 × AI 視覺 × 動態內容",
      "從產品形象到每月內容，讓品牌持續被看見。",
    ],
    viewWork: "查看作品",
    startProject: "開始合作",
    scroll: "向下滑動",
  },
  realAiBrand: {
    words: ["實拍", "AI", "品牌"],
    lines: [
      "以攝影記錄材質與細節。",
      "用 AI 延伸場景與創意。",
      "整合產品、模特與動態影像，",
      "製作適合社群、廣告與網站的品牌內容。",
    ],
  },
  limits: {
    caption: "製作方式",
    titleLines: ["依品牌需求", "選擇製作方式"],
    before: "先了解你的需求",
    after: "再安排適合的製作",
    limits: [
      "產品特色",
      "品牌風格",
      "使用平台",
      "交付數量",
      "現有素材",
      "預算範圍",
      "上線時程",
    ],
    transform: [
      "實拍：保留材質與細節",
      "AI：延伸模特與場景",
      "內容製作：整合靜態與動態",
    ],
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
    bodyLines: [
      "整理可沿用的產品素材、場景與視覺風格，",
      "依新品、檔期與平台需求補拍或延伸，",
      "從單次專案到每月合作，維持內容的一致性。",
    ],
    elements: ["產品", "模特", "場景", "風格"],
  },
  process: {
    caption: "五個步驟",
    title: "合作流程",
    steps: [
      { title: "確認需求", description: "了解品牌、用途、預算與交付時程。" },
      { title: "規劃製作", description: "確認視覺方向、拍攝安排與交付項目。" },
      {
        title: "準備素材",
        description: "安排實拍，或評估品牌提供的既有素材。",
      },
      { title: "製作內容", description: "依企劃整合修圖、AI 視覺與動態製作。" },
      {
        title: "交付與延伸",
        description: "依約定格式交付，並討論後續檔期或月度合作。",
      },
    ],
  },
  cta: {
    eyebrow: "下一步",
    titleLines: ["哪一件事", "值得先做得更好？"],
    subtitle: "告訴我們你的目標，以及目前卡住的工作。",
    button: "開始合作",
  },
  footer: {
    tagline: "自動化工作流與數位產品設計",
    location: "台灣",
    siteHeading: "頁面",
    connectHeading: "聯絡",
    slogan: ["連結想法與工具", "讓工作自動前進"],
    rights: "版權所有。",
    systemLine: "工作流 × App × 設計",
  },
  comingSoon: {
    body: "頁面建置中。",
    back: "回到首頁",
  },
  pages: {
    work: { eyebrow: "作品", title: "精選作品" },
    services: { eyebrow: "服務", title: "服務項目" },
    about: { eyebrow: "關於我們", title: "連結想像與真實" },
    pricing: { eyebrow: "報價", title: "合作方式與費用" },
  },
  contact: {
    eyebrow: "聯絡我們",
    title: "你最想改善哪一件事？",
    body: "分享你的工作流程、正在使用的工具，或想做的產品。我們會一起確認合適的起點，也可以直接來信 yamanawamugu@gmail.com。",
  },
  notFound: {
    eyebrow: "404",
    title: "找不到頁面",
    body: "這個網址可能已經移動或不存在。",
    back: "回到首頁",
  },
};

export type Dictionary = typeof zhTW;
