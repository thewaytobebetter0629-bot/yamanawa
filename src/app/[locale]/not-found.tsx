import { locale as localeParam } from "next/root-params";
import ComingSoon from "@/components/ComingSoon";
import { defaultLocale, isLocale, localePath } from "@/i18n/config";
import { en } from "@/i18n/dictionaries/en";
import { zhTW } from "@/i18n/dictionaries/zh-TW";

export default async function NotFound() {
  // read the param directly: getLocale() would itself call notFound()
  const value = await localeParam();
  const locale = isLocale(value) ? value : defaultLocale;
  const copy = (locale === "en" ? en : zhTW).notFound;

  return (
    <ComingSoon
      eyebrow={copy.eyebrow}
      title={copy.title}
      body={copy.body}
      backLabel={copy.back}
      backHref={localePath(locale, "/")}
    />
  );
}
