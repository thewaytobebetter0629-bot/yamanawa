import type { Metadata } from "next";
import { inter, notoSansTC } from "@/lib/fonts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SpaceBackground from "@/components/SpaceBackground";
import BrandIntro from "@/components/BrandIntro";
import { introBootScript } from "@/lib/intro";
import { OG_IMAGE, SITE_URL } from "@/lib/site";
import { htmlLang, localePath, locales, ogLocale } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/server";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { meta } = await getDictionary();
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: meta.title, template: meta.titleTemplate },
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      type: "website",
      siteName: "YAMANAWA",
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      url: localePath(locale, "/"),
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE.url],
    },
    robots: { index: true, follow: true },
    // canonical + hreflang are set per page (see alternatesFor); icons come
    // from app/icon.png and app/apple-icon.png (file conventions)
  };
}

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <html
      lang={htmlLang[locale]}
      className={`${inter.variable} ${notoSansTC.variable}`}
      // keep smooth in-page scrolling but let route changes jump straight to the top
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* decides whether the brand intro plays, before first paint — see src/lib/intro.ts */}
        <script dangerouslySetInnerHTML={{ __html: introBootScript }} />
      </head>
      <body>
        <BrandIntro hud={dict.intro.hud} skipLabel={dict.intro.skip} />
        <div className="grain-overlay" aria-hidden="true" />
        <SpaceBackground />
        <Navigation locale={locale} nav={dict.nav} switchLabel={dict.language.switchLabel} />
        <main className="relative z-10">{children}</main>
        <Footer locale={locale} footer={dict.footer} links={dict.nav.links} />
      </body>
    </html>
  );
}
