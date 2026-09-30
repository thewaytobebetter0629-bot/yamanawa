import type { Locale } from "@/i18n/config";

export const businessServices = [
  {
    index: "01",
    slug: "automation",
    title: {
      "zh-TW": "自動化工作流",
      en: "Workflow automation",
    },
    summary: {
      "zh-TW": "把重複操作，變成有紀錄的流程。",
      en: "Turn repetitive work into traceable workflows.",
    },
    description: {
      "zh-TW":
        "適合每天在表單、試算表、Email 與管理工具之間來回整理資料的團隊。先串好一條流程，再逐步擴充。",
      en: "For teams moving information between forms, spreadsheets, email and management tools. Start with one complete workflow and expand from actual use.",
    },
    items: {
      "zh-TW": [
        "流程盤點與現況基準",
        "既有工具與資料串接",
        "人工確認、失敗提醒與執行紀錄",
        "操作文件、交接與成效檢視",
      ],
      en: [
        "Process mapping and baseline",
        "Existing tool and data integrations",
        "Human approval, failure alerts and run history",
        "Documentation, handover and outcome review",
      ],
    },
  },
  {
    index: "02",
    slug: "apps",
    title: {
      "zh-TW": "App 與軟體製作",
      en: "Apps & software",
    },
    summary: {
      "zh-TW": "把分散的工作，集中在好用的介面。",
      en: "Bring scattered work into a usable interface.",
    },
    description: {
      "zh-TW":
        "從客戶入口、審稿平台到內部管理工具，以網頁 App 優先驗證核心功能。需要手機原生功能時，再評估 iOS／Android 開發。",
      en: "Start with a web app for client portals, review systems and internal tools. Evaluate native iOS or Android development when device-specific features are needed.",
    },
    items: {
      "zh-TW": [
        "需求與使用流程設計",
        "可操作原型與核心功能",
        "資料、帳號與權限規劃",
        "測試、部署與維護交接",
      ],
      en: [
        "Requirements and user journeys",
        "Interactive prototype and core features",
        "Data, accounts and permission design",
        "Testing, deployment and maintenance handover",
      ],
    },
  },
  {
    index: "03",
    slug: "creative",
    title: {
      "zh-TW": "品牌網站與 AI 內容",
      en: "Brand websites & AI content",
    },
    summary: {
      "zh-TW": "讓內容與品牌入口，一起發揮作用。",
      en: "Connect content with your brand’s digital home.",
    },
    description: {
      "zh-TW":
        "延續攝影、視覺設計與 AI 動態製作的能力，依專案整合網站、素材與內容流程，支援品牌的實際營運。",
      en: "Combine photography, visual design and AI motion with websites and content processes to support everyday brand operations.",
    },
    items: {
      "zh-TW": [
        "品牌網站與內容架構",
        "產品攝影與 AI 視覺",
        "內容審核與交付流程",
        "素材整理與後續延伸",
      ],
      en: [
        "Brand websites and content structure",
        "Product photography and AI visuals",
        "Content review and delivery workflows",
        "Asset organization and reuse",
      ],
    },
  },
];

export const deliverySteps = [
  {
    title: {
      "zh-TW": "理解現況",
      en: "Understand",
    },
    description: {
      "zh-TW":
        "盤點每個步驟、使用工具、負責人與每週耗時，找出最值得改善的一段。",
      en: "Map steps, tools, owners and weekly effort to identify the best starting point.",
    },
  },
  {
    title: {
      "zh-TW": "確認範圍",
      en: "Define",
    },
    description: {
      "zh-TW": "共同確認流程圖、交付項目、費用、時程與驗收標準。",
      en: "Agree on the workflow, deliverables, costs, schedule and acceptance criteria.",
    },
  },
  {
    title: {
      "zh-TW": "製作原型",
      en: "Prototype",
    },
    description: {
      "zh-TW": "用範例資料走完核心流程，先確認介面、輸入與輸出符合需求。",
      en: "Run the core journey with sample data and validate inputs, outputs and interface.",
    },
  },
  {
    title: {
      "zh-TW": "建置與測試",
      en: "Build & test",
    },
    description: {
      "zh-TW": "完成串接與功能，測試權限、重複資料、異常情況與人工接手。",
      en: "Implement integrations and features; test permissions, duplicates, errors and human handoff.",
    },
  },
  {
    title: {
      "zh-TW": "上線與交接",
      en: "Launch & hand over",
    },
    description: {
      "zh-TW": "以限定範圍試行，確認後上線，交付文件與操作說明。",
      en: "Pilot within an agreed scope, then launch with documentation and operating guidance.",
    },
  },
  {
    title: {
      "zh-TW": "觀察與優化",
      en: "Review & improve",
    },
    description: {
      "zh-TW": "依使用紀錄檢視節省時間、成功率與維護成本，再決定下一步。",
      en: "Review time saved, completion rates and operating costs before expanding.",
    },
  },
];

export const marketSources = [
  {
    title: "Microsoft · 2026 Work Trend Index",
    date: "2026-05-05",
    url: "https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization",
    finding: {
      "zh-TW": "企業的流程與組織準備度，往往跟不上員工使用 AI 的能力。",
      en: "Organizational readiness and processes often lag behind individual AI capability.",
    },
    implication: {
      "zh-TW":
        "服務需包含流程設計、使用方式與交接，才能讓工具真正進入日常工作。",
      en: "Services should include process design, adoption and handover so tools become part of daily work.",
    },
  },
  {
    title: "經濟部中小及新創企業署 · 中小企業 AI 普及應用落地",
    date: "2026-08-18 更新",
    url: "https://www.sme.gov.tw/article-tw-2877-13892",
    finding: {
      "zh-TW": "台灣的推動方向涵蓋數位診斷、需求痛點、適切工具導入與人才培育。",
      en: "Taiwan’s adoption program covers digital diagnosis, business needs, suitable tools and practical skills.",
    },
    implication: {
      "zh-TW":
        "先理解需求，再建置小範圍應用；政策方向不等於個別客戶已有採購預算。",
      en: "Start with diagnosis and a focused implementation. Policy support does not establish individual buyers’ budgets.",
    },
  },
  {
    title: "McKinsey · The state of AI in 2025",
    date: "2025-11-05",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2025",
    finding: {
      "zh-TW":
        "高成效受訪企業更常重新設計工作流程，AI 使用普及與產生規模化價值仍有落差。",
      en: "High-performing respondents more often redesign workflows; adoption and scaled value remain different milestones.",
    },
    implication: {
      "zh-TW": "以完整流程與可衡量成果驗收，避免只以「有使用 AI」作為交付。",
      en: "Measure an end-to-end outcome instead of treating AI usage itself as the deliverable.",
    },
  },
  {
    title: "n8n · BeGlobal case study",
    date: "2026-09-30 查閱",
    url: "https://n8n.io/case-studies/beglobal/",
    finding: {
      "zh-TW":
        "供應商案例呈現以客製前端搭配後端工作流，串接需求輸入與提案製作。",
      en: "The vendor case study describes a custom frontend connected to workflows for proposal creation.",
    },
    implication: {
      "zh-TW":
        "App 與自動化可以一起設計；案例屬供應商自述，不能當作 YAMANAWA 的成果保證。",
      en: "Apps and automation can be designed together. Vendor-reported outcomes are not YAMANAWA performance guarantees.",
    },
  },
];

export const pick = (locale: Locale, zh: string, en: string) =>
  locale === "en" ? en : zh;
