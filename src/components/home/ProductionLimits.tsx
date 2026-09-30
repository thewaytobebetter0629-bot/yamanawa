import { Fragment } from "react";
import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/i18n/dictionaries/zh-TW";

export default function ProductionLimits({ copy }: { copy: Dictionary["limits"] }) {
  return (
    <section className="section-padding relative overflow-hidden bg-black">
      {/* faint technical grid, used sparingly per spec */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="container-yamanawa relative">
        <Reveal>
          <span className="caption-label">{copy.caption}</span>
          <h2 className="mt-4 max-w-3xl text-[length:var(--fs-heading)] leading-[1.02] tracking-[var(--tracking-tight)] text-white">
            {copy.titleLines.map((line, i) => (
              <Fragment key={line}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2">
          <Reveal delay={0.1}>
            <p className="caption-label mb-6">{copy.before}</p>
            <ul className="space-y-4">
              {copy.limits.map((item) => (
                <li
                  key={item}
                  className="border-b border-[var(--border-soft)] pb-4 text-xl tracking-[-0.01em] text-[var(--text-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="caption-label mb-6">{copy.after}</p>
            <ul className="space-y-4">
              {copy.transform.map((item) => (
                <li
                  key={item}
                  className="border-b border-[var(--border)] pb-4 text-2xl tracking-[-0.01em] text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-32">
          <p className="caption-label mb-10 text-center">{copy.flowCaption}</p>
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            {copy.flow.map((step, i) => (
              <div key={step} className="flex items-center gap-6">
                <span className="text-sm tracking-[-0.01em] text-[var(--text-secondary)]">
                  <span className="mr-2 text-[var(--silver)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </span>
                {i < copy.flow.length - 1 && (
                  <span
                    className="hidden text-[var(--silver-dark)] md:inline"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
