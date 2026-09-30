import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { localePath } from "@/i18n/config";
import { getDictionary, getLocale, pageMetadata } from "@/i18n/server";

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("about", "/about");
}

export default async function AboutPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  return (
    <ComingSoon
      eyebrow={dict.pages.about.eyebrow}
      title={dict.pages.about.title}
      body={dict.comingSoon.body}
      backLabel={dict.comingSoon.back}
      backHref={localePath(locale, "/")}
    />
  );
}
