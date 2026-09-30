import Reveal from "@/components/Reveal";
import SilverButton from "@/components/SilverButton";

/**
 * Placeholder screen for routes scheduled for a later phase (Work,
 * Services, About, Pricing) and the 404 page. Keeps every nav link
 * resolving to a real, on-brand page while those pages are built out.
 */
export default function ComingSoon({
  eyebrow,
  title,
  body,
  backLabel,
  backHref,
}: {
  eyebrow: string;
  title: string;
  body: string;
  backLabel: string;
  backHref: string;
}) {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center py-32 text-center">
      <div className="container-yamanawa flex flex-col items-center">
        <Reveal>
          <span className="caption-label">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-[length:var(--fs-display)] leading-[1.02] tracking-[var(--tracking-tight)] text-white">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-md text-[length:var(--fs-body)] leading-relaxed text-[var(--text-body)]">
            {body}
          </p>
        </Reveal>
        <Reveal delay={0.3} className="mt-10">
          <SilverButton href={backHref} variant="ghost">
            {backLabel}
          </SilverButton>
        </Reveal>
      </div>
    </section>
  );
}
