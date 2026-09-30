import Reveal from "@/components/Reveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import type { Dictionary } from "@/i18n/dictionaries/zh-TW";

export default function Process({ copy }: { copy: Dictionary["process"] }) {
  return (
    <section className="section-padding relative bg-black">
      <div className="container-yamanawa">
        <Reveal className="mb-16">
          <span className="caption-label">{copy.caption}</span>
          <h2 className="mt-4 text-[length:var(--fs-heading)] leading-[1.02] tracking-[var(--tracking-tight)] text-white">
            {copy.title}
          </h2>
        </Reveal>

        <ProcessTimeline steps={copy.steps} />
      </div>
    </section>
  );
}
