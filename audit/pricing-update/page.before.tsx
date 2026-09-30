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
    title: string;
    suitedFor: string;
    description: string;
    includes: string[];
  }>;
  process: { title: string; items: string[] };
  cta: { title: string; body: string; label: string };
};

const pricingContent: Record<Locale, PricingContent> = {
  "zh-TW": {
    intro: "從單一產品拍攝到持續的品牌內容製作，依品牌目標、素材需求與使用情境規劃合適的合作方式。",
    note: "每個品牌的需求不同，製作範圍與授權方式將於討論後提供專屬報價。",
    packages: [
      {
        number: "01",
        title: "產品視覺方案",
        suitedFor: "適合新品上架、單一產品或首次合作",
        description: "以產品實拍為核心，建立可直接用於電商、社群與品牌頁面的乾淨視覺。",
        includes: ["產品攝影", "白底與細節照片", "情境影像規劃", "基礎後製與交付格式"],
      },
      {
        number: "02",
        title: "AI 視覺企劃",
        suitedFor: "適合新品上市、檔期活動與廣告素材",
        description: "結合產品實拍、AI 場景與模特製作，延伸一組完整且一致的活動視覺。",
        includes: ["視覺方向與情緒版", "產品實拍素材", "AI 場景或模特", "社群、廣告與動態素材"],
      },
      {
        number: "03",
        title: "品牌內容系統",
        suitedFor: "適合需要持續產出內容的品牌",
        description: "先建立能重複延伸的視覺基礎，再依新品與檔期持續製作品牌內容。",
        includes: ["品牌視覺方向", "可延伸的產品與場景素材", "社群、網站與廣告內容", "單次專案或每月合作"],
      },
    ],
    process: {
      title: "合作從一封信開始",
      items: ["告訴我們品牌、產品與預計使用的地方", "確認時程、製作範圍與交付素材", "收到專屬提案與依需求報價"],
    },
    cta: {
      title: "找到適合的合作方式",
      body: "來信告訴我們你的品牌、產品與時程，我們會協助你安排下一步。",
      label: "來信洽談",
    },
  },
  en: {
    intro: "From a single product shoot to ongoing content production, we shape the right partnership around your brand goals, assets and intended use.",
    note: "Every brand is different. Scope, deliverables and licensing are quoted after we discuss your needs.",
    packages: [
      {
        number: "01",
        title: "PRODUCT VISUAL",
        suitedFor: "For launches, a single product or a first project together",
        description: "Product-led photography made for e-commerce, social content and brand pages.",
        includes: ["Product photography", "White-background and detail images", "Lifestyle visual direction", "Basic retouching and delivery formats"],
      },
      {
        number: "02",
        title: "AI VISUAL CAMPAIGN",
        suitedFor: "For launches, seasonal campaigns and advertising",
        description: "Product photography, AI environments and models brought together as one cohesive campaign world.",
        includes: ["Visual direction and moodboard", "Product photography assets", "AI environments or models", "Social, advertising and motion assets"],
      },
      {
        number: "03",
        title: "BRAND CONTENT SYSTEM",
        suitedFor: "For brands that need a continuous stream of content",
        description: "Build an adaptable visual foundation, then create content around product releases and key moments.",
        includes: ["Brand visual direction", "Reusable product and scene assets", "Social, website and advertising content", "Project or monthly partnership"],
      },
    ],
    process: {
      title: "START WITH A CONVERSATION",
      items: ["Share your brand, product and intended use", "Align on timing, scope and deliverables", "Receive a tailored proposal and quote"],
    },
    cta: {
      title: "FIND THE RIGHT WAY TO WORK TOGETHER",
      body: "Tell us about your brand, product and timeline. We will help plan the next step.",
      label: "EMAIL US",
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
              <article className="grid gap-8 border-b border-[var(--border)] py-10 md:grid-cols-[7rem_minmax(0,1fr)_minmax(16rem,0.7fr)] md:gap-12 md:py-14">
                <span className="caption-label pt-1">{item.number}</span>
                <div>
                  <h2 className="text-[length:var(--fs-subheading)] leading-tight tracking-[var(--tracking-tight)] text-white">
                    {item.title}
                  </h2>
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
