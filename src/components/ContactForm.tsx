"use client";

import { FormEvent, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";

const copy = {
  "zh-TW": {
    intro: "告訴我們這次的需求，我們會在收到後盡快回覆。",
    required: "必填",
    name: "你的姓名與品牌／公司名稱是什麼？",
    contactMethod: "請留下方便聯絡你的方式",
    contactHint: "Email、LINE、Instagram 或電話皆可",
    services: "這次想合作的服務是什麼？",
    projectBrief: "請簡單介紹這次的專案需求",
    projectHint:
      "例如：詢問資料整理、報價追蹤、客戶審稿、內部管理工具，或品牌網站。請描述目前使用的工具與最花時間的步驟。",
    quantity: "使用人數、每月處理量或預計製作範圍？",
    outcomes: "希望最後取得哪些成果？",
    channels: "這套成果主要會用在哪裡？",
    budget: "這次專案的預算範圍約為多少？",
    timeline: "希望什麼時候完成這個專案？",
    references: "請提供參考圖片、品牌資料或想補充的資訊",
    referencesHint:
      "可提供流程圖、介面參考或網站連結。請勿提交密碼、API 金鑰或客戶個資。",
    files: "上傳圖片或 PDF",
    filesHint:
      "JPEG、PNG、WEBP 或 PDF；最多 5 個檔案，每個檔案 3MB，總計 5MB。",
    send: "送出合作需求",
    sending: "傳送中…",
    success: "已收到你的合作需求，我們會盡快回覆。",
    error: "目前無法送出，請稍後再試，或直接來信至 yamanawamugu@gmail.com。",
    configError:
      "表單寄送服務正在設定中，請先直接來信至 yamanawamugu@gmail.com。",
    select: "請選擇",
    other: "其他需求（選填）",
  },
  en: {
    intro: "Tell us about your project and we will be in touch shortly.",
    required: "Required",
    name: "What is your name and brand / company?",
    contactMethod: "How should we contact you?",
    contactHint: "Email, LINE, Instagram or phone number",
    services: "What would you like to work on?",
    projectBrief: "Tell us a little about the project",
    projectHint:
      "For example: inquiry handling, quote follow-up, client review, an internal tool or a website. Describe your current tools and the most time-consuming steps.",
    quantity: "How many users, monthly tasks or deliverables are involved?",
    outcomes: "What would you like to receive?",
    channels: "Where will the result be used?",
    budget: "What is the approximate budget?",
    timeline: "When would you like to complete the project?",
    references: "References, brand materials or anything else to share",
    referencesHint:
      "Share a process diagram, interface reference or website link. Do not submit passwords, API keys or customer personal data.",
    files: "Upload images or PDFs",
    filesHint: "JPEG, PNG, WEBP or PDF; up to 5 files, 3MB each, 5MB total.",
    send: "Send project request",
    sending: "Sending…",
    success:
      "Your project request has been received. We will be in touch shortly.",
    error:
      "We could not send your request. Please try again or email yamanawamugu@gmail.com.",
    configError:
      "The form email service is being set up. Please email yamanawamugu@gmail.com directly for now.",
    select: "Select one",
    other: "Other details (optional)",
  },
} as const;

const serviceOptions = {
  "zh-TW": [
    "自動化工作流",
    "App 與軟體製作",
    "品牌網站",
    "AI 視覺與內容",
    "維護與優化",
    "還不確定",
  ],
  en: [
    "Workflow automation",
    "Apps & software",
    "Brand website",
    "AI visuals & content",
    "Care & improvement",
    "Not sure yet",
  ],
};
const outcomeOptions = {
  "zh-TW": [
    "減少人工整理",
    "改善客戶體驗",
    "串接現有工具",
    "App 或管理介面",
    "品牌網站與內容",
    "其他／待討論",
  ],
  en: [
    "Reduce manual work",
    "Improve customer experience",
    "Connect existing tools",
    "App or management interface",
    "Website & content",
    "Other / to discuss",
  ],
};
const channelOptions = {
  "zh-TW": [
    "團隊內部",
    "客戶入口",
    "品牌官網",
    "電商與社群",
    "手機或平板",
    "其他／待討論",
  ],
  en: [
    "Internal team",
    "Client portal",
    "Brand website",
    "Commerce & social",
    "Phone or tablet",
    "Other / to discuss",
  ],
};
const budgetOptions = {
  "zh-TW": [
    "NT$30,000 以下",
    "NT$30,000–80,000",
    "NT$80,000–150,000",
    "NT$150,000 以上",
    "希望先評估範圍",
  ],
  en: [
    "Under NT$30,000",
    "NT$30,000–80,000",
    "NT$80,000–150,000",
    "Over NT$150,000",
    "Scope first",
  ],
};

function FieldLabel({
  children,
  required = false,
  htmlFor,
}: {
  children: React.ReactNode;
  required?: boolean;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-3 block text-base leading-relaxed text-white md:text-lg"
    >
      {children}{" "}
      {required && <span className="caption-label ml-2 align-middle">*</span>}
    </label>
  );
}

function CheckboxGroup({ name, options }: { name: string; options: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => (
        <label
          key={option}
          className="flex cursor-pointer items-center gap-3 border border-[var(--border)] px-4 py-3 text-sm text-[var(--text-body)] transition-colors hover:border-[var(--silver-dark)] hover:text-white"
        >
          <input
            name={name}
            type="checkbox"
            value={option}
            className="h-4 w-4 accent-white"
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error" | "configuration"
  >("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = formRef.current;
    if (!form || !form.reportValidity()) return;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });
      const result = await response.json();
      if (!response.ok) {
        setStatus(
          result.code === "configuration_missing" ? "configuration" : "error",
        );
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-4 py-3.5 text-base text-white outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--silver-bright)]";

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      className="mt-12 space-y-12 text-left"
      encType="multipart/form-data"
    >
      <input
        aria-hidden="true"
        className="hidden"
        name="website"
        tabIndex={-1}
        autoComplete="off"
      />
      <p className="border-l border-[var(--silver-dark)] pl-4 text-[length:var(--fs-body)] leading-relaxed text-[var(--text-body)]">
        {t.intro}
      </p>

      <div>
        <FieldLabel required htmlFor="name">
          {t.name}
        </FieldLabel>
        <input
          className={inputClass}
          id="name"
          name="name"
          required
          autoComplete="name"
        />
      </div>

      <div>
        <FieldLabel required htmlFor="contactMethod">
          {t.contactMethod}
        </FieldLabel>
        <p className="mb-3 text-sm text-[var(--text-muted)]">{t.contactHint}</p>
        <input
          className={inputClass}
          id="contactMethod"
          name="contactMethod"
          required
        />
      </div>

      <fieldset>
        <legend className="mb-4 text-base leading-relaxed text-white md:text-lg">
          {t.services}{" "}
          <span className="caption-label ml-2 align-middle">*</span>
        </legend>
        <CheckboxGroup name="services" options={serviceOptions[locale]} />
      </fieldset>

      <div>
        <FieldLabel required htmlFor="projectBrief">
          {t.projectBrief}
        </FieldLabel>
        <p className="mb-3 text-sm text-[var(--text-muted)]">{t.projectHint}</p>
        <textarea
          className={`${inputClass} min-h-36 resize-y`}
          id="projectBrief"
          name="projectBrief"
          required
        />
      </div>

      <div>
        <FieldLabel required htmlFor="quantity">
          {t.quantity}
        </FieldLabel>
        <input className={inputClass} id="quantity" name="quantity" required />
      </div>

      <fieldset>
        <legend className="mb-4 text-base leading-relaxed text-white md:text-lg">
          {t.outcomes}{" "}
          <span className="caption-label ml-2 align-middle">*</span>
        </legend>
        <CheckboxGroup name="outcomes" options={outcomeOptions[locale]} />
      </fieldset>

      <fieldset>
        <legend className="mb-4 text-base leading-relaxed text-white md:text-lg">
          {t.channels}{" "}
          <span className="caption-label ml-2 align-middle">*</span>
        </legend>
        <CheckboxGroup name="channels" options={channelOptions[locale]} />
      </fieldset>

      <div>
        <FieldLabel required htmlFor="budget">
          {t.budget}
        </FieldLabel>
        <select
          className={inputClass}
          id="budget"
          name="budget"
          required
          defaultValue=""
        >
          <option value="" disabled>
            {t.select}
          </option>
          {budgetOptions[locale].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <FieldLabel required htmlFor="timeline">
          {t.timeline}
        </FieldLabel>
        <input
          className={inputClass}
          id="timeline"
          name="timeline"
          required
          placeholder={
            locale === "zh-TW"
              ? "例如：2026 年 10 月底前"
              : "For example: by the end of October 2026"
          }
        />
      </div>

      <div>
        <FieldLabel htmlFor="references">{t.references}</FieldLabel>
        <p className="mb-3 text-sm text-[var(--text-muted)]">
          {t.referencesHint}
        </p>
        <textarea
          className={`${inputClass} min-h-28 resize-y`}
          id="references"
          name="references"
        />
        <label className="mt-4 block cursor-pointer border border-dashed border-[var(--border)] px-4 py-5 text-sm text-[var(--text-body)] transition-colors hover:border-[var(--silver-dark)]">
          <span className="block text-white">{t.files}</span>
          <span className="mt-1 block text-[var(--text-muted)]">
            {t.filesHint}
          </span>
          <input
            className="sr-only"
            name="files"
            type="file"
            accept="image/jpeg,image/png,image/webp,application/pdf"
            multiple
          />
        </label>
      </div>

      <div className="border-t border-[var(--border)] pt-8">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full border border-[var(--silver-dark)] bg-white px-7 py-4 text-sm tracking-[0.08em] uppercase text-black transition-colors hover:bg-[var(--silver-bright)] disabled:cursor-wait disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? t.sending : t.send}
        </button>
        {status === "success" && (
          <p
            className="mt-5 text-sm leading-relaxed text-[var(--silver-bright)]"
            role="status"
          >
            {t.success}
          </p>
        )}
        {status === "error" && (
          <p className="mt-5 text-sm leading-relaxed text-red-300" role="alert">
            {t.error}
          </p>
        )}
        {status === "configuration" && (
          <p
            className="mt-5 text-sm leading-relaxed text-[var(--text-body)]"
            role="alert"
          >
            {t.configError}
          </p>
        )}
      </div>
    </form>
  );
}
