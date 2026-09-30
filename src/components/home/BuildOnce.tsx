import { Fragment } from "react";
import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/i18n/dictionaries/zh-TW";

const withBreaks = (lines: string[]) =>
  lines.map((line, i) => (
    <Fragment key={line}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));

export default function BuildOnce({ copy }: { copy: Dictionary["buildOnce"] }) {
  return (
    <section className="section-padding relative overflow-hidden bg-black">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, rgba(227,227,227,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-yamanawa relative grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
        <Reveal>
          <h2 className="text-[length:var(--fs-heading)] leading-[1.02] tracking-[var(--tracking-tight)] text-white">
            {withBreaks(copy.titleLines)}
          </h2>
          <p className="mt-8 max-w-md text-[length:var(--fs-body)] leading-relaxed text-[var(--text-body)]">
            {withBreaks(copy.bodyLines)}
          </p>
        </Reveal>

        <div className="flex flex-col">
          {copy.elements.map((word, i) => (
            <Reveal key={word} delay={i * 0.12}>
              <div className="flex items-center gap-6 border-b border-[var(--border-soft)] py-6">
                <span className="caption-label text-[var(--silver-dark)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[clamp(1.75rem,4vw,3rem)] tracking-[var(--tracking-tight)] text-[var(--silver-bright)]">
                  {word}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
