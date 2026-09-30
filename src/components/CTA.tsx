import Reveal from "@/components/Reveal";
import SilverButton from "@/components/SilverButton";

type CTAProps = {
  eyebrow?: string;
  titleLines: string[];
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
};

/**
 * Full-black closing screen with a single slow drifting light source behind
 * the type — the site's final, most restrained moment before the footer.
 */
export default function CTA({
  eyebrow,
  titleLines,
  subtitle,
  ctaLabel,
  ctaHref,
}: CTAProps) {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-black py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 animate-[drift_18s_ease-in-out_infinite] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(227,227,227,0.16) 0%, rgba(13,13,13,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-yamanawa relative flex flex-col items-center text-center">
        {eyebrow && (
          <Reveal>
            <span className="caption-label mb-6">{eyebrow}</span>
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <h2 className="text-[length:var(--fs-display)] leading-[1.02] tracking-[var(--tracking-tight)] text-white">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg text-[length:var(--fs-body)] leading-relaxed text-[var(--text-body)]">
              {subtitle}
            </p>
          </Reveal>
        )}

        <Reveal delay={0.3} className="mt-12">
          <SilverButton href={ctaHref}>{ctaLabel}</SilverButton>
        </Reveal>
      </div>

      <style>{`
        @keyframes drift {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-46%, -54%) scale(1.08); }
        }
      `}</style>
    </section>
  );
}
