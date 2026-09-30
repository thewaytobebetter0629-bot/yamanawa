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
    price: string;
    title: string;
    suitedFor: string;
    description: string;
    includes: string[];
  }>;
  faqTitle: string;
  faqs: Array<{ q: string; a: string }>;
  process: { title: string; items: string[] };
  cta: { title: string; body: string; label: string };
};

const pricingContent: Record<Locale, PricingContent> = {
  "zh-TW": {
    "intro": "YAMANAWA 不是傳統攝影工作室。我們結合專業攝影與生成式 AI，以真實產品為基礎，減少實景拍攝中場地、模特、人力與器材的成本及限制，創造難以實拍的商業畫面。",
    "note": "以上為方案起價。實際費用依產品數量、畫面複雜度、影片長度、交付規格及授權範圍另行確認；製作前會確認報價與修改次數。",
    "packages": [
      {
        "number": "01",
        "title": "產品商業影像",
        "price": "NT$12,800 起",
        "suitedFor": "新品上架／電商／社群與廣告靜態素材",
        "description": "先以產品白底與細節拍攝建立 AI 製作基礎，再延伸 AI 商業情境圖。讓產品外型、材質、Logo 與細節有真實依據。",
        "includes": [
          "1 款產品，白底與細節拍攝 4–8 張",
          "1 組視覺方向，AI 商業情境圖 4 張",
          "人工精修與 2 次小幅修改",
          "JPG／PNG 交付；約 3–5 個工作天"
        ]
      },
      {
        "number": "02",
        "title": "產品動畫",
        "price": "NT$18,800 起",
        "suitedFor": "產品展示／材質細節／動態廣告",
        "description": "以產品本身為主角，透過運鏡、光影與動態設計，呈現造型與材質，製作聚焦產品的動態商業素材。",
        "includes": [
          "產品白底與細節建檔，或沿用既有素材",
          "產品動態方向與鏡頭規劃",
          "AI 動態製作、人工修正與剪輯",
          "片長、比例、鏡頭數與時程依需求確認"
        ]
      },
      {
        "number": "03",
        "title": "產品情境動畫",
        "price": "NT$32,000 起",
        "suitedFor": "品牌故事／情境廣告／虛擬模特演繹",
        "description": "讓產品進入完整的場景與敘事，依企劃結合虛擬模特或人物互動，延伸實景拍攝難以完成的商業想像。",
        "includes": [
          "產品白底與細節建檔，或沿用既有素材",
          "情境概念、分鏡與敘事規劃",
          "AI 場景；可依需求加入虛擬模特",
          "動畫合成與剪輯；規格、時程另行確認"
        ]
      },
      {
        "number": "04",
        "title": "品牌網站設計與建置",
        "price": "NT$25,000 起",
        "suitedFor": "品牌形象官網／產品與服務展示",
        "description": "整合品牌內容與視覺，建立清楚、易用的數位入口。基礎方案約 4–6 頁，兼顧桌機與手機瀏覽。",
        "includes": [
          "網站架構、視覺方向與基礎文案整理",
          "首頁、品牌、產品／服務、案例與聯絡表單",
          "響應式設計、基礎互動與 SEO 設定",
          "部署與網域串接協助；約 2–4 週",
          "另收 NT$600／月基礎技術維護費"
        ]
      }
    ],
    "process": {
      "title": "合作，從填寫表單開始",
      "items": [
        "填寫合作表單，提供品牌、產品、用途、預算與參考方向。",
        "YAMANAWA 依表單進行初步視覺規劃，整理基礎製作方向，確認範圍、報價與時程。",
        "確認合作後寄送產品，進行白底與細節拍攝建檔；網站專案則整理品牌內容與架構。",
        "進入 AI 影像、動畫或網站製作，經人工修正與確認後交付。"
      ]
    },
    "faqTitle": "合作前，你可能想知道",
    "faqs": [
      {
        "q": "為什麼 AI 製作仍需要產品拍攝？",
        "a": "白底與細節拍攝是 01–03 的共同建檔製程，為產品形狀、材質與標誌提供真實參考。它已整合於影像方案，不是重複加購的攝影服務。生成後仍會人工檢查與修正。"
      },
      {
        "q": "同款產品再製作動畫，需要重新拍攝嗎？",
        "a": "若既有產品素材足以支援新畫面，可沿用建檔資產。若包裝、外觀改變或缺少必要角度，再評估補拍範圍與費用。"
      },
      {
        "q": "NT$600／月的維護包含什麼？",
        "a": "網站上線後另收基礎技術維護費，包含運作與表單檢查、基礎錯誤修復、套件及部署維護，以及每月合計 30 分鐘內的文字修改與既有圖片替換。大型異常處理會先評估範圍。"
      },
      {
        "q": "網站有哪些需要另外報價的項目？",
        "a": "改版、新頁面、新功能、電商、會員、多語系、大量內容更新與新影像製作另行報價。網域、主機及其他第三方平台、API 或付費插件費用不包含在 NT$600 月費內。"
      },
      {
        "q": "填完表單就會開始正式製作嗎？",
        "a": "表單是初步規劃的起點。我們會先整理視覺與基礎製作方向，再確認報價、交付內容、授權及修改範圍後開始正式製作。時程由素材到齊與方向確認後計算，並依回覆速度調整。"
      }
    ],
    "cta": {
      "title": "讓產品，走進你的想像",
      "body": "先填寫合作表單，分享產品與目標。由 YAMANAWA 協助規劃初步視覺與基礎製作方向。",
      "label": "填寫合作表單"
    }
  },
  "en": {
    "intro": "YAMANAWA goes beyond a traditional photography studio. We combine professional photography with generative AI to reduce the costs and constraints of locations, models, crews and equipment, creating commercial imagery that is difficult to shoot in real life.",
    "note": "Starting prices vary with product quantity, visual complexity, film length, deliverables and licensing. Scope, revisions and the final quote are agreed before production.",
    "packages": [
      {
        "number": "01",
        "title": "COMMERCIAL PRODUCT IMAGERY",
        "price": "From NT$12,800",
        "suitedFor": "Launches / e-commerce / social and advertising images",
        "description": "White-background and detail photography builds the product reference for AI commercial scenes, grounding shape, materials, logos and details in the real product.",
        "includes": [
          "1 product; 4–8 white-background and detail images",
          "1 visual direction; 4 AI commercial scene images",
          "Human retouching and 2 minor revision rounds",
          "JPG / PNG delivery; approximately 3–5 business days"
        ]
      },
      {
        "number": "02",
        "title": "PRODUCT ANIMATION",
        "price": "From NT$18,800",
        "suitedFor": "Product showcases / material details / motion ads",
        "description": "Keep the product at the center through camera movement, lighting and motion that highlight its form and materials.",
        "includes": [
          "Product reference photography or reuse of existing assets",
          "Motion direction and shot planning",
          "AI animation, manual refinement and editing",
          "Duration, format, shots and timing agreed per project"
        ]
      },
      {
        "number": "03",
        "title": "PRODUCT SCENE ANIMATION",
        "price": "From NT$32,000",
        "suitedFor": "Brand stories / scene-led ads / virtual models",
        "description": "Place products in a complete setting and narrative, with optional virtual models or character interaction shaped around the concept.",
        "includes": [
          "Product reference photography or reuse of existing assets",
          "Scene concepts, storyboards and narrative",
          "AI environments with optional virtual models",
          "Animation compositing and editing; scope and timing quoted"
        ]
      },
      {
        "number": "04",
        "title": "BRAND WEBSITE DESIGN & BUILD",
        "price": "From NT$25,000",
        "suitedFor": "Brand websites / product and service showcases",
        "description": "Bring brand content and visuals together in a clear digital home. The base scope covers approximately 4–6 pages for desktop and mobile.",
        "includes": [
          "Site structure, visual direction and basic copy organization",
          "Home, about, products / services, work and contact form",
          "Responsive design, basic interactions and SEO setup",
          "Deployment and domain setup; approximately 2–4 weeks",
          "Additional basic technical maintenance: NT$600 / month"
        ]
      }
    ],
    "process": {
      "title": "START WITH A PROJECT FORM",
      "items": [
        "Share your brand, products, intended use, budget and references through our form.",
        "We develop an initial visual plan and production direction, then align on scope, pricing and timing.",
        "After confirmation, send products for white-background and detail photography; website projects begin with content and site structure.",
        "We produce the AI visuals, animation or website, refine the work and deliver after review."
      ]
    },
    "faqTitle": "BEFORE WE BEGIN",
    "faqs": [
      {
        "q": "Why does AI production include photography?",
        "a": "White-background and detail photography provides a reliable reference for product shape, materials and branding across services 01–03. It is included in the production foundation, followed by human review and retouching."
      },
      {
        "q": "Does the same product need another shoot?",
        "a": "Existing assets can be reused when suitable. Changes to packaging or appearance, or missing angles, may require additional photography with scope and costs agreed first."
      },
      {
        "q": "What does NT$600 per month cover?",
        "a": "Basic technical maintenance after launch includes website and form checks, basic bug fixes, package and deployment maintenance, plus up to 30 minutes of text edits and existing image replacements per month. Major incidents are assessed separately."
      },
      {
        "q": "What is quoted separately for websites?",
        "a": "Redesigns, new pages or features, e-commerce, memberships, multilingual support, bulk updates and new visual production are quoted separately. Domains, hosting, third-party platforms, APIs and paid plugins are excluded from the monthly fee."
      },
      {
        "q": "Does submitting the form start production?",
        "a": "The form starts initial planning. Production begins after scope, pricing, deliverables, licensing and revisions are agreed. Timelines start once materials and direction are confirmed and depend on feedback turnaround."
      }
    ],
    "cta": {
      "title": "BRING YOUR PRODUCT INTO YOUR IMAGINATION",
      "body": "Share your product and goals through the project form. We will help shape the initial visual plan and production direction.",
      "label": "FILL OUT THE PROJECT FORM"
    }
  }
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
              <article className="grid gap-8 border-b border-[var(--border)] py-10 lg:grid-cols-[5rem_minmax(0,1fr)_minmax(16rem,0.7fr)] lg:gap-12 md:py-14">
                <span className="caption-label pt-1">{item.number}</span>
                <div>
                  <h2 className="text-[length:var(--fs-subheading)] leading-tight tracking-[var(--tracking-tight)] text-white">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-xl tracking-tight text-[var(--silver-light)] md:text-2xl">{item.price}</p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-body)] md:text-base">
                    {item.description}
                  </p>
                </div>
                <div className="border-l border-[var(--border-soft)] pl-5 md:pl-7">
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{item.suitedFor}</p>
                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.includes.map((include) => (
                      <li key={include} className="flex gap-3">
                        <span aria-hidden="true" className="text-[var(--silver-dark)]">—</span>
                        <span>{include}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-[var(--text-muted)]">{content.note}</p>
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
              <Reveal key={item} delay={index * 0.08}>
                <li className="flex gap-5 border-b border-[var(--border)] py-5 text-[length:var(--fs-body)] leading-relaxed text-[var(--text-secondary)]">
                  <span className="caption-label pt-1">0{index + 1}</span>
                  <span>{item}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-yamanawa py-16 md:py-24">
        <h2 className="text-[length:var(--fs-heading)] leading-tight tracking-[var(--tracking-tight)] text-white">{content.faqTitle}</h2>
        <div className="mt-10 border-t border-[var(--border)]">
          {content.faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-[var(--border)] py-6">
              <summary className="cursor-pointer text-base leading-relaxed text-white focus-visible:outline focus-visible:outline-offset-4 md:text-lg">{faq.q}</summary>
              <p className="mt-4 max-w-3xl text-sm leading-loose text-[var(--text-body)] md:text-base">{faq.a}</p>
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
