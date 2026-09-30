import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SilverButton from "@/components/SilverButton";
import DeliveryProcess from "@/components/business/DeliveryProcess";
import WorkflowExplorer from "@/components/business/WorkflowExplorer";
import { businessServices, pick } from "@/data/business";
import { localePath } from "@/i18n/config";
import { alternatesFor, getLocale } from "@/i18n/server";
export async function generateMetadata(): Promise<Metadata> {
  return { alternates: alternatesFor(await getLocale(), "/") };
}
export default async function Home() {
  const locale = await getLocale();
  const p = (zh: string, en: string) => pick(locale, zh, en);
  return (
    <>
      <section className="container-yamanawa relative flex min-h-[88vh] flex-col justify-center py-36 md:py-44">
        <Reveal>
          <p className="caption-label">
            YAMANAWA / AUTOMATION & DIGITAL PRODUCTS
          </p>
          <h1 className="mt-9 max-w-5xl text-[clamp(2.7rem,6.5vw,6rem)] font-medium leading-[1.12] tracking-[-0.05em]">
            {p("讓工作，自動前進。", "Make work flow.")}
            <br />
            <span className="text-[var(--silver-dark)]">
              {p("讓想法，成為產品。", "Turn ideas into products.")}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--text-body)]">
            {p(
              "為品牌與小型團隊建置自動化工作流、客製化 App 與品牌網站。從最值得改善的一件事開始，做出每天用得上的系統。",
              "Automation, custom apps and brand websites for brands and small teams. Start with the problem that matters most and build a system people use every day.",
            )}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-7">
            <SilverButton href={localePath(locale, "/contact")}>
              {p("聊聊你想改善的工作", "Tell us what needs to work better")}
            </SilverButton>
            <Link
              className="text-sm underline underline-offset-8"
              href={localePath(locale, "/services")}
            >
              {p("探索服務與流程", "Explore services & workflows")} ↗
            </Link>
          </div>
          <p className="mt-12 text-xs tracking-widest text-[var(--text-muted)]">
            {p(
              "理解需求 → 做出原型 → 建置上線 → 持續優化",
              "UNDERSTAND → PROTOTYPE → BUILD → IMPROVE",
            )}
          </p>
        </Reveal>
      </section>
      <section className="container-yamanawa section-padding border-t border-[var(--border)]">
        <p className="caption-label">WHAT WE BUILD</p>
        <h2 className="mt-5 max-w-3xl text-3xl md:text-5xl leading-tight">
          {p(
            "少一點重複操作，多一點成長空間。",
            "Less repetitive work. More room to grow.",
          )}
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {businessServices.map((service) => (
            <article
              key={service.slug}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-white/[0.02] p-7"
            >
              <span className="caption-label">{service.index}</span>
              <h3 className="mt-7 text-2xl">{service.title[locale]}</h3>
              <p className="mt-4 leading-relaxed text-[var(--silver-light)]">
                {service.summary[locale]}
              </p>
              <p className="mt-4 text-sm leading-loose text-[var(--text-body)]">
                {service.description[locale]}
              </p>
              <Link
                className="mt-auto pt-8 text-sm underline underline-offset-8"
                href={localePath(locale, `/services#${service.slug}`)}
              >
                {p("了解這項服務", "Explore this service")} ↗
              </Link>
            </article>
          ))}
        </div>
      </section>
      <WorkflowExplorer locale={locale} />
      <DeliveryProcess locale={locale} />
      <section className="container-yamanawa section-padding">
        <div className="grid gap-10 border-y border-[var(--border)] py-12 md:grid-cols-2">
          <div>
            <p className="caption-label">BUILT TO EVOLVE</p>
            <h2 className="mt-5 text-3xl leading-tight">
              {p(
                "需求會變，系統也應該能成長。",
                "Needs evolve. Your system should too.",
              )}
            </h2>
          </div>
          <div>
            <p className="leading-loose text-[var(--text-body)]">
              {p(
                "我們持續研究工具與市場的變化，先用小範圍試行驗證價值，再依實際使用擴充。以節省時間、減少錯誤與使用體驗決定下一步。",
                "We follow market and technology changes, validate value in a focused pilot, and expand based on real use. Time saved, fewer errors and usability guide the next step.",
              )}
            </p>
            <Link
              href={localePath(locale, "/insights")}
              className="mt-7 inline-block text-sm underline underline-offset-8"
            >
              {p("閱讀市場觀察與服務方向", "Read our market perspective")} ↗
            </Link>
          </div>
        </div>
      </section>
      <section className="container-yamanawa section-padding text-center">
        <p className="caption-label">LET’S START WITH ONE THING</p>
        <h2 className="mx-auto mt-6 max-w-3xl text-3xl md:text-5xl leading-tight">
          {p("哪一件事，值得先做得更好？", "What should work better first?")}
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-[var(--text-body)]">
          {p(
            "告訴我們你現在怎麼工作、卡在哪裡，以及想達成什麼。我們一起找出適合的起點。",
            "Tell us how you work, where it gets difficult, and what you want to achieve. We’ll identify a practical starting point together.",
          )}
        </p>
        <div className="mt-9">
          <SilverButton href={localePath(locale, "/contact")}>
            {p("開始需求討論", "Start a conversation")}
          </SilverButton>
        </div>
      </section>
    </>
  );
}
