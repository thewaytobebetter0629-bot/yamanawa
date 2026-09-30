"use client";

import { Fragment, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { localePath, locales, stripLocale, type Locale } from "@/i18n/config";

const LABELS: Record<Locale, string> = { "zh-TW": "中文", en: "EN" };
const subscribeNever = () => () => {};

/**
 * 中文 / EN toggle that links to the same page in the other language. The
 * current path is read from window.location after hydration — behind the
 * proxy rewrite, usePathname() can disagree with the browser URL — so the
 * server render falls back to the other locale's home page.
 */
export default function LanguageSwitcher({
  locale,
  switchLabel,
  className = "",
}: {
  locale: Locale;
  switchLabel: string;
  className?: string;
}) {
  usePathname(); // re-render on client-side navigation so the target stays current
  const path = useSyncExternalStore(
    subscribeNever,
    () => stripLocale(window.location.pathname) + window.location.hash,
    () => "/",
  );

  return (
    <div className={`flex items-center gap-2 text-xs tracking-[0.08em] ${className}`}>
      {locales.map((l, i) => (
        <Fragment key={l}>
          {i > 0 && (
            <span aria-hidden="true" className="text-[var(--text-caption)]">
              /
            </span>
          )}
          {l === locale ? (
            <span aria-current="true" className="text-white">
              {LABELS[l]}
            </span>
          ) : (
            <a
              href={localePath(l, path)}
              hrefLang={l}
              lang={l}
              aria-label={switchLabel}
              className="text-[var(--text-muted)] transition-colors duration-[var(--duration-fast)] hover:text-white"
            >
              {LABELS[l]}
            </a>
          )}
        </Fragment>
      ))}
    </div>
  );
}
