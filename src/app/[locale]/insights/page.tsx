import type { Metadata } from "next";
import Link from "next/link";
import { marketSources, pick } from "@/data/business";
import { getLocale, alternatesFor } from "@/i18n/server";
import { localePath } from "@/i18n/config";
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const title = pick(locale, "市場觀察與服務方向", "Market perspective");
  const description = pick(
    locale,
    "YAMANAWA 如何從市場研究出發，規劃自動化工作流與數位產品服務。",
    "How market research informs YAMANAWA automation and digital product services.",
  );
  return {
    title,
    description,
    alternates: alternatesFor(locale, "/insights"),
    openGraph: { title, description },
    twitter: { title, description },
  };
}
export default async function InsightsPage() {
  const locale = await getLocale();
  const p = (z: string, e: string) => pick(locale, z, e);
  return (
    <>
      <section className="container-yamanawa pb-20 pt-36 md:pt-48">
        <p className="caption-label">MARKET NOTES / 2026.09.30</p>
        <h1 className="mt-7 max-w-4xl text-4xl md:text-6xl leading-tight">
          {p(
            "從使用 AI，到改善整個工作流程。",
            "From using AI to improving how work gets done.",
          )}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-loose text-[var(--text-body)]">
          {p(
            "我們的判斷：值得投入的機會，是協助小型團隊把分散的工具、資料與人工步驟接起來，再用容易操作的介面讓系統被持續使用。",
            "Our assessment: a practical opportunity is to connect fragmented tools, data and manual steps for small teams, with interfaces people can keep using.",
          )}
        </p>
        <p className="mt-5 max-w-3xl leading-loose text-[var(--text-muted)]">
          {p(
            "這是研究支持的服務假設，尚不代表台灣特定產業的付費意願或投資回報。國際調查、政策資訊與供應商案例的樣本不同，不合併解讀為同一市場數據。",
            "This is a research-informed service hypothesis, not proof of willingness to pay or ROI in a particular Taiwanese industry. Global surveys, policy sources and vendor cases have different populations and should not be combined into one market statistic.",
          )}
        </p>
      </section>
      <section className="container-yamanawa pb-20">
        <h2 className="text-3xl">
          {p("研究依據與我們的解讀", "Evidence and our interpretation")}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {marketSources.map((s) => (
            <article
              key={s.url}
              className="rounded-xl border border-[var(--border)] p-7"
            >
              <p className="caption-label">{s.date}</p>
              <h3 className="mt-5 text-xl">
                <a
                  className="underline underline-offset-4"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.title} ↗
                </a>
              </h3>
              <p className="mt-5 leading-loose text-[var(--text-body)]">
                {s.finding[locale]}
              </p>
              <p className="mt-5 border-t border-[var(--border)] pt-5 leading-loose text-[var(--silver-light)]">
                {p("對服務的意義：", "Service implication: ")}
                {s.implication[locale]}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="container-yamanawa pb-28">
        <h2 className="text-3xl">
          {p("以小範圍驗證，決定下一步。", "Validate in a focused pilot.")}
        </h2>
        <ol className="mt-8 max-w-3xl list-decimal space-y-5 pl-5 leading-loose text-[var(--text-body)]">
          <li>
            {p(
              "每月整理客戶問題、工具變化與可能改善的流程；優先評估高頻、可衡量、範圍明確的工作。",
              "Review customer problems, tool changes and candidate workflows monthly. Prioritize frequent, measurable, well-scoped work.",
            )}
          </li>
          <li>
            {p(
              "用單一流程做付費試點，先記錄人工耗時與錯誤，再比較上線後的執行成功率、使用情況與維護成本。",
              "Run a paid pilot for one workflow. Record manual effort and errors, then compare completion rates, adoption and operating costs.",
            )}
          </li>
          <li>
            {p(
              "每季檢視是否值得擴充、調整或停止；有持續需求與交付成果，才整理成標準服務。",
              "Review quarterly whether to expand, revise or stop. Standardize only after repeat demand and delivery evidence.",
            )}
          </li>
        </ol>
        <Link
          href={localePath(locale, "/services")}
          className="mt-10 inline-block underline underline-offset-8"
        >
          {p("看看可以從哪些流程開始", "Explore possible starting points")} ↗
        </Link>
      </section>
    </>
  );
}
