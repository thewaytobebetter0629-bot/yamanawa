import type { Metadata } from "next";
import SilverButton from "@/components/SilverButton";
import DeliveryProcess from "@/components/business/DeliveryProcess";
import WorkflowExplorer from "@/components/business/WorkflowExplorer";
import { businessServices, pick } from "@/data/business";
import { getLocale, pageMetadata } from "@/i18n/server";
import { localePath } from "@/i18n/config";
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("services", "/services");
}
export default async function ServicesPage() {
  const locale = await getLocale();
  const p = (z: string, e: string) => pick(locale, z, e);
  return (
    <>
      <section className="container-yamanawa pb-20 pt-36 md:pt-48">
        <p className="caption-label">SERVICES</p>
        <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl leading-tight">
          {p(
            "從工作流程，到你的數位產品。",
            "From workflows to digital products.",
          )}
        </h1>
        <p className="mt-8 max-w-2xl leading-loose text-[var(--text-body)]">
          {p(
            "先釐清要改善的問題，再選擇工具與開發方式。每個專案都會確認範圍、操作情境、費用與驗收標準。",
            "Clarify the problem first, then choose tools and an implementation. Every project starts with an agreed scope, usage scenarios, costs and acceptance criteria.",
          )}
        </p>
      </section>
      <section className="container-yamanawa">
        {businessServices.map((s) => (
          <article
            id={s.slug}
            key={s.slug}
            className="scroll-mt-28 grid gap-8 border-t border-[var(--border)] py-14 md:grid-cols-2"
          >
            <div>
              <span className="caption-label">{s.index}</span>
              <h2 className="mt-5 text-3xl">{s.title[locale]}</h2>
              <p className="mt-5 text-lg">{s.summary[locale]}</p>
              <p className="mt-4 max-w-xl leading-loose text-[var(--text-body)]">
                {s.description[locale]}
              </p>
            </div>
            <div>
              <p className="caption-label">
                {p("可依需求規劃的交付", "DELIVERABLES WE CAN SCOPE")}
              </p>
              <ul className="mt-6 space-y-4">
                {s.items[locale].map((item) => (
                  <li
                    className="border-b border-[var(--border)] pb-4 text-[var(--text-body)]"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
      <WorkflowExplorer locale={locale} />
      <DeliveryProcess locale={locale} />
      <section className="container-yamanawa section-padding">
        <p className="mb-8 max-w-2xl leading-loose text-[var(--text-body)]">
          {p(
            "既有作品呈現我們的攝影與視覺設計經驗。工作流與 App 服務會以實際交付逐步累積案例；網站上的流程圖為規劃示意。",
            "Our existing portfolio demonstrates photography and visual design experience. Workflow and app case studies will grow from actual delivery; the diagrams here illustrate proposed workflows.",
          )}
        </p>
        <SilverButton href={localePath(locale, "/contact")}>
          {p("討論你的需求", "Discuss your needs")}
        </SilverButton>
      </section>
    </>
  );
}
