import Reveal from "@/components/Reveal";

export type ProcessStep = {
  title: string;
  description: string;
};

/**
 * Vertical technical-interface timeline: a 1px silver spine with numbered
 * nodes, used for the homepage process section (and reusable wherever else
 * a step sequence is needed). Deliberately not a card grid.
 */
export default function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative">
      <div
        className="absolute left-[0.5px] top-0 hidden h-full w-px bg-[var(--border)] md:block"
        aria-hidden="true"
      />
      {steps.map((step, i) => {
        const index = String(i + 1).padStart(2, "0");
        return (
          <Reveal key={index} delay={i * 0.08}>
            <div className="relative grid grid-cols-1 gap-4 border-t border-[var(--border-soft)] py-10 last:border-b md:grid-cols-[1fr_2fr] md:gap-16 md:py-12">
              <div className="flex items-center gap-4 md:pl-10">
                <span
                  className="absolute left-[-4.5px] top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[var(--silver-bright)] md:block"
                  aria-hidden="true"
                />
                <span className="caption-label text-[var(--silver)]">{index}</span>
                <h3 className="text-2xl tracking-[-0.01em] text-white md:text-3xl">
                  {step.title}
                </h3>
              </div>
              <p className="max-w-md text-[length:var(--fs-body)] leading-relaxed text-[var(--text-body)] md:pt-1">
                {step.description}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
