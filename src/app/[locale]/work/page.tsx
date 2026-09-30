import type { Metadata } from "next";
import HomeHeroVideo from "@/components/home/HomeHeroVideo";
import WorkArchive from "@/components/WorkArchive";
import styles from "@/components/WorkArchive.module.css";
import { projects } from "@/data/projects";
import { getLocale, pageMetadata } from "@/i18n/server";

export function generateMetadata(): Promise<Metadata> { return pageMetadata("work", "/work"); }
export default async function WorkPage() {
  const locale = await getLocale();
  return <section className={`${styles.page} container-yamanawa`}>
    <div className={styles.kicker}><span>YAMANAWA PROJECT ARCHIVE</span><span>2026 — ∞</span></div>
    <h1 className={`${styles.heading} text-gradient-silver`}>WORK</h1>
    <div className={styles.intro}><p>{locale === "en" ? "Our visual portfolio. Workflow and app examples are clearly labeled as proposed designs." : "既有影像與設計作品。工作流與 App 示意另外標示，不作為已交付案例。"}</p><span>PHOTOGRAPHY × AI × MOTION</span></div>
    <WorkArchive projects={projects} locale={locale} />
    <HomeHeroVideo locale={locale} title={{ "zh-TW": "Nike 形象動畫 - again", en: "Nike motion study - again" }} src="/video/yamanawa-home-demo.mp4" />
    <HomeHeroVideo locale={locale} title={{ "zh-TW": "Garmin 產品動畫", en: "Garmin product motion study" }} src="/video/garmin-product-animation.mp4" />
  </section>;
}
