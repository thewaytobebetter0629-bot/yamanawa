import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh-TW";

export default function ServicesSection({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Dictionary["servicesSection"];
}) {
  return (
    <section className="relative bg-black">
      <div className="container-yamanawa pt-[var(--section-padding-y)]">
        <Reveal>
          <span className="caption-label">{copy.caption}</span>
        </Reveal>
      </div>

      {services.map((service) => (
        <Link
          key={service.slug}
          href={localePath(locale, `/pricing#${service.slug}`)}
          className="group relative block border-t border-[var(--border-soft)] last:border-b"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[var(--duration-slow)] ease-[var(--ease-precise)] group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(60% 100% at 0% 50%, rgba(185,188,193,0.08) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="container-yamanawa relative flex flex-col gap-6 py-14 md:flex-row md:items-center md:gap-16 md:py-20">
            <span className="text-gradient-silver text-[clamp(3rem,7vw,6rem)] leading-none tracking-[var(--tracking-tight)]">
              {service.index}
            </span>

            <div className="flex-1">
              <h3 className="text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.05] tracking-[var(--tracking-tight)] text-white transition-transform duration-[var(--duration-base)] ease-[var(--ease-precise)] group-hover:translate-x-2">
                {service.title[locale]}
              </h3>
              <p className="mt-4 max-w-xl text-[length:var(--fs-body)] leading-relaxed text-[var(--text-body)]">
                {service.description[locale]}
              </p>
            </div>

            <div className="hidden shrink-0 flex-wrap gap-x-6 gap-y-2 md:flex md:max-w-xs">
              {service.items[locale].slice(0, 4).map((item) => (
                <span
                  key={item}
                  className="text-xs tracking-[0.04em] text-[var(--text-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
