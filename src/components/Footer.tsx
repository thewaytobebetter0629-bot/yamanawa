import Link from "next/link";
import Logo from "./Logo";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh-TW";
import { NAV_ROUTES } from "@/lib/site";

// Keep only verified contact destinations.
const SOCIALS = [{ label: "Email", href: "mailto:yamanawamugu@gmail.com" }];

export default function Footer({
  locale,
  footer,
  links,
}: {
  locale: Locale;
  footer: Dictionary["footer"];
  links: Dictionary["nav"]["links"];
}) {
  return (
    <footer className="relative border-t border-[var(--border-soft)] bg-black">
      <div className="container-yamanawa pt-20 pb-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
          <div>
            <Logo width={196} />
            <p className="mt-3 text-xs tracking-[0.1em] text-[var(--text-muted)] uppercase">
              {footer.tagline}
            </p>
            <p className="mt-1 text-xs tracking-[0.1em] text-[var(--text-caption)] uppercase">
              {footer.location}
            </p>
          </div>

          <div>
            <p className="caption-label mb-4">{footer.siteHeading}</p>
            <ul className="space-y-2">
              {NAV_ROUTES.map((route) => (
                <li key={route}>
                  <Link
                    href={localePath(locale, `/${route}`)}
                    className="text-sm text-[var(--text-body)] transition-colors hover:text-white"
                  >
                    {links[route]}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={localePath(locale, "/insights")}
                  className="text-sm text-[var(--text-body)] hover:text-white"
                >
                  {locale === "en" ? "Market notes" : "市場觀察"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="caption-label mb-4">{footer.connectHeading}</p>
            <ul className="space-y-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-[var(--text-body)] transition-colors hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline-soft my-14" />

        <p className="text-gradient-silver text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
          {footer.slogan.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <div className="mt-14 flex flex-col gap-3 text-xs text-[var(--text-caption)] sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} YAMANAWA. {footer.rights}
          </span>
          <span className="tracking-[0.12em] uppercase">
            {footer.systemLine}
          </span>
        </div>
      </div>
    </footer>
  );
}
