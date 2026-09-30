import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locale as localeParam } from "next/root-params";
import {
  defaultLocale,
  isLocale,
  localePath,
  locales,
  ogLocale,
  type Locale,
} from "./config";
import { OG_IMAGE } from "@/lib/site";
import { zhTW, type Dictionary } from "./dictionaries/zh-TW";
import { en } from "./dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = { "zh-TW": zhTW, en };

/** The [locale] root param, read from any Server Component. */
export async function getLocale(): Promise<Locale> {
  const value = await localeParam();
  if (!isLocale(value)) notFound();
  return value;
}

export async function getDictionary(): Promise<Dictionary> {
  return dictionaries[await getLocale()];
}

/** Canonical URL plus hreflang alternates for one route, e.g. "/work". */
export function alternatesFor(locale: Locale, path: string): Metadata["alternates"] {
  return {
    canonical: localePath(locale, path),
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, localePath(l, path)])),
      "x-default": localePath(defaultLocale, path),
    },
  };
}

/**
 * Title, description, canonical, hreflang and social cards for a secondary
 * page. openGraph/twitter are restated in full because a child segment's
 * object replaces the layout's rather than merging with it.
 */
export async function pageMetadata(
  page: keyof Dictionary["meta"]["pages"],
  path: string,
): Promise<Metadata> {
  const locale = await getLocale();
  const { meta } = dictionaries[locale];
  const { title, description } = meta.pages[page];
  const socialTitle = meta.titleTemplate.replace("%s", title);
  return {
    title,
    description,
    alternates: alternatesFor(locale, path),
    openGraph: {
      type: "website",
      siteName: "YAMANAWA",
      locale: ogLocale[locale],
      url: localePath(locale, path),
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
