import { Fragment } from "react";
import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/i18n/dictionaries/zh-TW";

export default function IntroRealAiBrand({ copy }: { copy: Dictionary["realAiBrand"] }) {
  const [real, ai, brand] = copy.words;

  return (
    <section className="section-padding relative bg-black">
      <div className="container-yamanawa flex flex-col items-center text-center">
        <Reveal>
          <div className="flex flex-col items-center leading-[0.95]">
            <span className="text-[length:var(--fs-display)] font-medium tracking-[var(--tracking-tight)] text-white">
              {real}
            </span>
            <span className="my-2 text-[length:var(--fs-subheading)] text-[var(--silver-dark)]">
              ×
            </span>
            <span className="text-gradient-silver text-[length:var(--fs-display)] font-medium tracking-[var(--tracking-tight)]">
              {ai}
            </span>
            <span className="my-2 text-[length:var(--fs-subheading)] text-[var(--silver-dark)]">
              ×
            </span>
            <span className="text-[length:var(--fs-display)] font-medium tracking-[var(--tracking-tight)] text-[var(--text-secondary)]">
              {brand}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-14 max-w-2xl text-[length:var(--fs-subheading)] leading-relaxed text-[var(--text-body)]">
            {copy.lines.map((line, i) => (
              <Fragment key={line}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
