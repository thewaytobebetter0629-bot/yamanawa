import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { localePath, locales } from "@/i18n/config";
import { NAV_ROUTES, SITE_URL } from "@/lib/site";

const ROUTES = ["/", "/insights", ...NAV_ROUTES.map((route) => `/${route}`), ...projects.filter(project => !project.previewOnly).map(project => `/work/${project.slug}`)];
const absolute = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap((route) =>
    locales.map((locale) => ({
      url: absolute(localePath(locale, route)),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, absolute(localePath(l, route))])),
      },
    })),
  );
}
