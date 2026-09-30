import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

/**
 * Locale routing. Chinese, the default, is served without a prefix by
 * rewriting /work → /zh-TW/work; English keeps /en. An explicit /zh-TW URL
 * redirects to its unprefixed form so every page has exactly one address.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  const prefixed = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (prefixed) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // skip Next internals and anything with a file extension: public assets,
  // icon.png, robots.txt, sitemap.xml, the intro video
  matcher: ["/((?!api/|_next/|.*\\.[^/]+$).*)"],
};
