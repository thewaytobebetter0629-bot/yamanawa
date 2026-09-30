"use client";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { pick } from "@/data/business";
const examples = [
  {
    zh: "詢問與報價",
    en: "Inquiry & quote",
    stepsZh: ["表單收件", "整理需求", "報價草稿", "人工確認", "寄送與追蹤"],
    stepsEn: [
      "Receive inquiry",
      "Organize needs",
      "Draft quote",
      "Human approval",
      "Send & track",
    ],
    detailZh:
      "以表單編號避免重複建檔；缺少預算或需求時提醒補件。報價與對外寄送需由負責人確認，失敗時保留紀錄並通知人工處理。",
    detailEn:
      "Use submission IDs to prevent duplicates. Flag missing details. A person approves the quote and outbound message; failures are logged and assigned for follow-up.",
    metricZh: "觀察：首次回覆時間、漏接詢問數、每筆整理時間。",
    metricEn:
      "Measure: time to first reply, missed inquiries and handling time.",
  },
  {
    zh: "內容與審稿",
    en: "Content & review",
    stepsZh: ["提交素材", "整理版本", "內容草稿", "客戶審核", "核准後交付"],
    stepsEn: [
      "Submit assets",
      "Track versions",
      "Draft content",
      "Client review",
      "Approved delivery",
    ],
    detailZh:
      "每個版本保留狀態與回饋，客戶只看得到自己的專案。未核准內容不進入交付，逾期審稿提醒負責人；AI 生成後仍需檢查品牌、產品與文字。",
    detailEn:
      "Keep feedback and status for each version. Clients access only their projects. Unapproved content stays out of delivery; overdue reviews alert the owner. Review AI output for brand, product and text accuracy.",
    metricZh: "觀察：審稿週期、版本混淆次數、返工時間。",
    metricEn: "Measure: review cycle time, version mix-ups and rework.",
  },
  {
    zh: "營運與週報",
    en: "Operations & reports",
    stepsZh: ["定時匯入", "檢查資料", "彙整指標", "異常提醒", "人工決策"],
    stepsEn: [
      "Scheduled import",
      "Validate data",
      "Summarize metrics",
      "Flag exceptions",
      "Human decisions",
    ],
    detailZh:
      "先確認來源與更新時間，缺資料時標示未完成，不產生看似完整的報表。串接失敗可重試，持續失敗則通知負責人；重要判斷由人決定。",
    detailEn:
      "Check data sources and freshness. Mark missing data rather than presenting an apparently complete report. Retry integration failures and alert an owner when they persist; people make consequential decisions.",
    metricZh: "觀察：報表準備時間、資料完整率、異常處理時間。",
    metricEn:
      "Measure: preparation time, data completeness and exception resolution time.",
  },
];
export default function WorkflowExplorer({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const item = examples[active];
  const en = locale === "en";
  return (
    <section
      className="container-yamanawa section-padding"
      id="workflow-examples"
    >
      <p className="caption-label">WORKFLOW EXAMPLES</p>
      <h2 className="mt-5 text-3xl md:text-5xl">
        {pick(locale, "工作如何變得更順？", "How could your work flow?")}
      </h2>
      <p className="mt-5 max-w-2xl text-[var(--text-body)] leading-relaxed">
        {pick(
          locale,
          "以下為流程設計示意，並非已交付案例或正在執行的系統。實際串接工具與範圍，會依你的工作方式確認。",
          "These are proposed workflow examples, not delivered case studies or live systems. Tools and scope depend on your actual process.",
        )}
      </p>
      <div
        className="mt-9 flex flex-wrap gap-3"
        aria-label={pick(locale, "選擇流程範例", "Choose a workflow example")}
      >
        {examples.map((example, i) => (
          <button
            key={example.en}
            type="button"
            aria-pressed={active === i}
            onClick={() => setActive(i)}
            className={`rounded-full border px-5 py-3 text-sm transition-colors focus-visible:outline focus-visible:outline-offset-4 ${active === i ? "bg-white text-black border-white" : "border-[var(--border)] text-[var(--text-body)] hover:border-white"}`}
          >
            {en ? example.en : example.zh}
          </button>
        ))}
      </div>
      <div
        className="mt-6 rounded-2xl border border-[var(--border)] bg-white/[0.025] p-6 md:p-10"
        aria-live="polite"
      >
        <ol className="grid gap-3 sm:grid-cols-5">
          {(en ? item.stepsEn : item.stepsZh).map((step, i) => (
            <li
              key={step}
              className="rounded-lg border border-[var(--border)] p-4"
            >
              <span className="caption-label">0{i + 1}</span>
              <p className="mt-4 text-sm leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl leading-relaxed text-[var(--text-body)]">
          {en ? item.detailEn : item.detailZh}
        </p>
        <p className="mt-5 text-sm text-[var(--silver-light)]">
          {en ? item.metricEn : item.metricZh}
        </p>
      </div>
    </section>
  );
}
