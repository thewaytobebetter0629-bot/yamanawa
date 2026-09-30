import { deliverySteps, pick } from "@/data/business";
import type { Locale } from "@/i18n/config";
export default function DeliveryProcess({ locale }: { locale: Locale }) {
  return (
    <section
      id="process"
      className="container-yamanawa section-padding scroll-mt-24"
    >
      <p className="caption-label">HOW WE WORK</p>
      <h2 className="mt-5 text-3xl md:text-5xl leading-tight">
        {pick(
          locale,
          "從一個問題，到一套可用的系統。",
          "From one problem to a working system.",
        )}
      </h2>
      <ol className="mt-12 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
        {deliverySteps.map((step, i) => (
          <li
            key={step.title.en}
            className="border-t border-[var(--border)] py-8"
          >
            <span className="caption-label">0{i + 1}</span>
            <h3 className="mt-4 text-xl">{step.title[locale]}</h3>
            <p className="mt-3 leading-relaxed text-[var(--text-body)]">
              {step.description[locale]}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
