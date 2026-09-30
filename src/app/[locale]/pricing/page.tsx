import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SilverButton from "@/components/SilverButton";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary, getLocale, pageMetadata } from "@/i18n/server";

type PricingContent = {
  intro: string;
  note: string;
  packages: Array<{
    number: string;
    slug: string;
    summary: string;
    price: string;
    title: string;
    suitedFor: string;
    description: string;
    includes: string[];
  }>;
  faqTitle: string;
  faqs: Array<{ q: string; a: string }>;
  process: { title: string; items: string[]; note: string };
  maintenance: {
    title: string;
    price: string;
    intro: string;
    includedTitle: string;
    included: string[];
    excludedTitle: string;
    excluded: string[];
    note: string;
  };
  cta: { title: string; body: string; label: string };
};

const pricingContent: Record<Locale, PricingContent> = {
  "zh-TW": {
    intro:
      "從一個值得改善的流程開始。先釐清問題、做出小範圍驗證，再決定完整建置與後續維護。自動化、App 與品牌網站皆依實際範圍報價。",
    note: "報價會列出交付項目、修改範圍、時程、付款階段與驗收標準。第三方訂閱、主機、網域、API 用量及維護另列，確認後才開始執行。",
    packages: [
      {
        number: "01",
        slug: "discovery",
        summary: "把問題與範圍先說清楚",
        price: "依診斷範圍報價",
        title: "需求診斷與原型",
        suitedFor: "有重複工作，或有產品想法但尚未確定範圍",
        description:
          "盤點現有流程、資料與工具，挑選一個優先場景，製作流程圖或可操作原型，確認是否值得投入建置。",
        includes: [
          "需求訪談與現況流程圖",
          "資料、工具與權限需求盤點",
          "優先改善場景與原型範圍",
          "交付清單、驗收指標與建置估算",
        ],
      },
      {
        number: "02",
        slug: "implementation",
        summary: "完成一條流程，或一個核心產品",
        price: "確認規格後專案報價",
        title: "工作流與 App 建置",
        suitedFor: "已確認需求，準備讓流程或產品實際運作",
        description:
          "依原型與規格完成串接、介面及必要功能。先以限定範圍試行，驗證正常流程與異常情況，再正式上線。",
        includes: [
          "約定的工具串接與核心功能",
          "人工審核、權限與錯誤處理",
          "範例資料測試與使用者驗收",
          "部署、操作文件與交接",
        ],
      },
      {
        number: "03",
        slug: "care",
        summary: "讓上線後的系統持續有用",
        price: "依維護範圍月費報價",
        title: "維護與持續優化",
        suitedFor: "已有網站、工作流或 App，需要持續照顧與調整",
        description:
          "以使用紀錄與業務目標檢視成效，處理約定範圍的異常與小幅調整，再評估值得追加的功能。",
        includes: [
          "約定頻率的運作檢查與問題處理",
          "第三方工具與串接變更評估",
          "使用成效與成本檢視",
          "優化建議與下一階段規劃",
        ],
      },
    ],
    process: {
      title: "先確認成果，再開始製作",
      items: [
        "分享現況｜說明目前的工作方式、工具、卡點與目標。",
        "需求盤點｜確認資料來源、操作人員與優先流程。",
        "範圍與報價｜確認交付清單、預算、修改次數及驗收標準。",
        "原型與建置｜先走通核心情境，再完成必要功能。",
        "測試與上線｜驗證權限、失敗情境與人工接手後試行。",
        "交接與檢視｜交付文件，依約定安排維護與成效回顧。",
      ],
      note: "時程依串接複雜度、資料完整度與回饋速度評估；追加範圍會先確認影響與費用。",
    },
    faqTitle: "合作前，你可能想知道",
    faqs: [
      {
        q: "還不確定需要自動化還是 App，可以討論嗎？",
        a: "可以。先描述目前怎麼工作、哪個步驟最花時間。我們會先評估現有工具能否改善；需要客戶或團隊直接操作時，再規劃合適的介面。",
      },
      {
        q: "可以串接現有的工具嗎？",
        a: "先確認工具提供的介面、帳號方案、資料權限與使用限制。可行性確認後才列入交付範圍，不承諾所有工具都能直接串接。",
      },
      {
        q: "App 一定需要上架手機商店嗎？",
        a: "不一定。客戶入口、審稿與內部工具可先採網頁 App。若需要手機原生功能或商店上架，會另行確認開發、審核與維護範圍。",
      },
      {
        q: "AI 產生的內容會直接寄出或發布嗎？",
        a: "依流程確認人工審核點。報價、對外內容與重要決策通常保留負責人確認；異常會記錄並交由人工處理。",
      },
      {
        q: "系統、資料與帳號如何交接？",
        a: "合作前確認帳號持有人、資料儲存位置、權限與可匯出方式。依合約交付程式碼或工作流設定、操作文件與必要的交接資訊。第三方平台條款仍適用。",
      },
      {
        q: "還有提供攝影與 AI 動畫嗎？",
        a: "有。這些是品牌網站與 AI 內容服務的一部分，可獨立討論，依拍攝、素材、片長、授權與交付規格報價。",
      },
      {
        q: "可以保證省下多少時間嗎？",
        a: "需先量測現況，透過試行比較處理時間、成功率、錯誤與使用成本。實際效果依資料品質、工具限制與團隊使用方式而定。",
      },
    ],
    cta: {
      title: "先從最值得改善的一件事開始",
      body: "分享你目前的工作方式與想達成的成果，我們一起確認適合的合作範圍。",
      label: "討論需求",
    },
    maintenance: {
      title: "上線後的維護，範圍先說清楚",
      price: "依系統規模與服務範圍報價",
      intro:
        "依流程數量、工具依賴、使用量與回應需求安排，不使用單一月費涵蓋所有系統。",
      includedTitle: "可約定的維護內容",
      included: [
        "運作檢查與執行異常追蹤",
        "約定範圍的 Bug 修正",
        "既有流程或內容的小幅調整",
        "使用量、成本與成效檢視",
      ],
      excludedTitle: "另外評估與報價",
      excluded: [
        "新功能、新流程與大幅改版",
        "新工具串接與資料搬遷",
        "全天候支援或指定回應時效",
        "第三方訂閱、API 用量、主機及網域",
      ],
      note: "維護頻率、處理窗口、支援時段與排除項目會寫入合作範圍；未約定的即時支援不包含在內。",
    },
  },
  en: {
    intro:
      "Start with one workflow worth improving. Diagnose the problem, validate a focused scope, then plan implementation and ongoing care. Automation, apps and websites are quoted to scope.",
    note: "Your quote defines deliverables, revisions, timing, payment stages and acceptance criteria. Subscriptions, hosting, domains, API usage and maintenance are itemized before work begins.",
    packages: [
      {
        number: "01",
        slug: "discovery",
        summary: "Make the problem and scope clear",
        price: "Quoted to discovery scope",
        title: "Discovery & prototype",
        suitedFor: "Repetitive work or a product idea without a defined scope",
        description:
          "Map processes, data and tools. Choose one priority scenario and create a workflow map or interactive prototype to evaluate implementation.",
        includes: [
          "Discovery and current process map",
          "Data, tool and permission requirements",
          "Priority scenario and prototype scope",
          "Deliverables, acceptance metrics and implementation estimate",
        ],
      },
      {
        number: "02",
        slug: "implementation",
        summary: "One complete workflow or core product",
        price: "Project quote after scoping",
        title: "Workflow & app implementation",
        suitedFor: "A defined need ready for implementation",
        description:
          "Build agreed integrations, interfaces and features. Pilot in a limited scope, verify normal and exception scenarios, then launch.",
        includes: [
          "Agreed integrations and core features",
          "Human approval, permissions and error handling",
          "Sample-data testing and user acceptance",
          "Deployment, operating documentation and handover",
        ],
      },
      {
        number: "03",
        slug: "care",
        summary: "Keep the system useful after launch",
        price: "Monthly quote to care scope",
        title: "Care & continuous improvement",
        suitedFor: "Existing websites, workflows or apps needing ongoing care",
        description:
          "Review actual use against business goals, handle scoped issues and small changes, and evaluate additional features.",
        includes: [
          "Agreed operational checks and issue handling",
          "Third-party integration change review",
          "Usage, outcomes and cost review",
          "Improvement recommendations and next-step planning",
        ],
      },
    ],
    process: {
      title: "Agree on the outcome before building",
      items: [
        "Share the current process, tools, friction and goals.",
        "Map data sources, users and the priority workflow.",
        "Agree on deliverables, budget, revisions and acceptance criteria.",
        "Prototype the core scenario and build agreed features.",
        "Test permissions, failures and human handoff before launch.",
        "Hand over documentation and arrange agreed care and reviews.",
      ],
      note: "Timing depends on integration complexity, data readiness and feedback. Scope changes are assessed and agreed before implementation.",
    },
    faqTitle: "Before we begin",
    faqs: [
      {
        q: "What if I do not know whether I need automation or an app?",
        a: "Describe how the work happens and which steps take the most effort. We assess existing tools first and plan an interface when customers or team members need to operate the system.",
      },
      {
        q: "Can you connect our existing tools?",
        a: "We review available interfaces, account plans, permissions and usage limits before including an integration in scope. Not every tool supports direct integration.",
      },
      {
        q: "Does an app need an app-store release?",
        a: "Client portals, review systems and internal tools can start as web apps. Native features and app-store releases require a separate development, review and maintenance scope.",
      },
      {
        q: "Will AI output be sent or published automatically?",
        a: "Approval points are agreed in the workflow. Quotes, external content and consequential decisions typically retain a responsible human reviewer, with exceptions logged for follow-up.",
      },
      {
        q: "How are systems, data and accounts handed over?",
        a: "We agree account ownership, data locations, permissions and export options upfront. Code or workflow configuration, operating documentation and handover details follow the contract and third-party platform terms.",
      },
      {
        q: "Do you still offer photography and AI animation?",
        a: "Yes. These remain part of our brand website and AI content practice and can be scoped independently around production, assets, duration, licensing and delivery specifications.",
      },
      {
        q: "Can you guarantee a specific time saving?",
        a: "We baseline the current process and compare handling time, completion rates, errors and operating costs in a pilot. Results depend on data quality, tool constraints and adoption.",
      },
    ],
    cta: {
      title: "Start with one thing worth improving",
      body: "Share how you work and the outcome you want. We will define a practical engagement together.",
      label: "Discuss your needs",
    },
    maintenance: {
      title: "Define care before launch",
      price: "Quoted to system and support scope",
      intro:
        "Care depends on workflows, dependencies, usage and response requirements.",
      includedTitle: "Care we can scope",
      included: [
        "Operational checks and exception tracking",
        "Scoped bug fixes",
        "Small updates to existing workflows or content",
        "Usage, cost and outcome review",
      ],
      excludedTitle: "Separately assessed and quoted",
      excluded: [
        "New features, workflows and major redesigns",
        "New integrations and data migration",
        "Round-the-clock support or specific response guarantees",
        "Subscriptions, API usage, hosting and domains",
      ],
      note: "Frequency, support hours, contacts and exclusions are defined in the agreement. Unspecified immediate support is not included.",
    },
  },
};

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("pricing", "/pricing");
}

export default async function PricingPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const content = pricingContent[locale];
  const contactHref = localePath(locale, "/contact");

  return (
    <>
      <section className="container-yamanawa pb-16 pt-36 md:pb-24 md:pt-48">
        <Reveal>
          <span className="caption-label">{dict.pages.pricing.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-5xl text-[length:var(--fs-display)] leading-[1.02] tracking-[var(--tracking-tight)] text-white">
            {dict.pages.pricing.title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-2xl text-[length:var(--fs-body)] leading-relaxed text-[var(--text-body)]">
            {content.intro}
          </p>
        </Reveal>
      </section>

      <section className="container-yamanawa pb-[var(--section-padding-y)]">
        <div className="border-t border-[var(--border)]">
          {content.packages.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article
                id={item.slug}
                className="scroll-mt-28 grid gap-8 border-b border-[var(--border)] py-10 lg:grid-cols-[5rem_minmax(0,1fr)_minmax(16rem,0.7fr)] lg:gap-12 md:py-14"
              >
                <span className="caption-label pt-1">{item.number}</span>
                <div>
                  <h2 className="text-[length:var(--fs-subheading)] leading-tight tracking-[var(--tracking-tight)] text-white">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-xl tracking-tight text-[var(--silver-light)] md:text-2xl">
                    {item.price}
                  </p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-body)] md:text-base">
                    {item.description}
                  </p>
                </div>
                <div className="border-l border-[var(--border-soft)] pl-5 md:pl-7">
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item.suitedFor}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.includes.map((include) => (
                      <li key={include} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="text-[var(--silver-dark)]"
                        >
                          —
                        </span>
                        <span>{include}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-[var(--text-muted)]">
          {content.note}
        </p>
      </section>

      <section className="border-y border-[var(--border)] bg-[rgba(255,255,255,0.02)] py-16 md:py-24">
        <div className="container-yamanawa grid gap-10 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:gap-20">
          <Reveal>
            <h2 className="text-[length:var(--fs-heading)] leading-[1.04] tracking-[var(--tracking-tight)] text-white">
              {content.process.title}
            </h2>
          </Reveal>
          <ol className="space-y-0 border-t border-[var(--border)]">
            {content.process.items.map((item, index) => (
              <li key={item}>
                <Reveal delay={index * 0.08}>
                  <div className="flex gap-5 border-b border-[var(--border)] py-5 text-[length:var(--fs-body)] leading-relaxed text-[var(--text-secondary)]">
                    <span className="caption-label pt-1">0{index + 1}</span>
                    <span>{item}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="md:col-span-2 text-sm leading-loose text-[var(--text-muted)]">
            {content.process.note}
          </p>
        </div>
      </section>

      <section className="container-yamanawa py-16 md:py-24">
        <div className="rounded-xl border border-[var(--border)] p-7 md:p-10">
          <p className="caption-label">ONGOING CARE</p>
          <h2 className="mt-5 text-3xl">{content.maintenance.title}</h2>
          <p className="mt-5 text-lg">{content.maintenance.price}</p>
          <p className="mt-4 leading-loose text-[var(--text-body)]">
            {content.maintenance.intro}
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {[
              {
                title: content.maintenance.includedTitle,
                items: content.maintenance.included,
              },
              {
                title: content.maintenance.excludedTitle,
                items: content.maintenance.excluded,
              },
            ].map((group) => (
              <div key={group.title}>
                <h3 className="text-lg">{group.title}</h3>
                <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed text-[var(--text-body)]">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-loose text-[var(--text-muted)]">
            {content.maintenance.note}
          </p>
        </div>
      </section>

      <section className="container-yamanawa py-16 md:py-24">
        <h2 className="text-[length:var(--fs-heading)] leading-tight tracking-[var(--tracking-tight)] text-white">
          {content.faqTitle}
        </h2>
        <div className="mt-10 border-t border-[var(--border)]">
          {content.faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border-b border-[var(--border)] py-6"
            >
              <summary className="cursor-pointer text-base leading-relaxed text-white focus-visible:outline focus-visible:outline-offset-4 md:text-lg">
                {faq.q}
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-loose text-[var(--text-body)] md:text-base">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="container-yamanawa py-[var(--section-padding-y)] text-center">
        <Reveal>
          <span className="caption-label">YAMANAWA</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-6 max-w-4xl text-[length:var(--fs-heading)] leading-[1.04] tracking-[var(--tracking-tight)] text-white">
            {content.cta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-[length:var(--fs-body)] leading-relaxed text-[var(--text-body)]">
            {content.cta.body}
          </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-10">
          <SilverButton href={contactHref}>{content.cta.label}</SilverButton>
        </Reveal>
      </section>
    </>
  );
}
