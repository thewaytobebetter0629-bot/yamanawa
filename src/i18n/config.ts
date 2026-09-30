export const locales = ["zh-TW", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh-TW";

/** A value that exists once per locale, e.g. a content entry's title. */
export type Localized<T = string> = Record<Locale, T>;

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const htmlLang: Localized = { "zh-TW": "zh-Hant-TW", en: "en" };
export const ogLocale: Localized = { "zh-TW": "zh_TW", en: "en_US" };

/**
 * The default locale lives at the root (/work, served by a proxy rewrite to
 * /zh-TW/work); every other locale keeps its prefix (/en/work).
 */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

/** Drops a non-default locale prefix from a browser pathname. */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname;
}
