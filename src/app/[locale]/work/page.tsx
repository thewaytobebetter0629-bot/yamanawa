import type { Metadata } from "next";
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
    <div className={styles.intro}><p>{locale === "en" ? "An ongoing record of images, ideas and collaborations." : "影像、想法與合作，持續累積。"}</p><span>PHOTOGRAPHY × AI × MOTION</span></div>
    <WorkArchive projects={projects} locale={locale} />
  </section>;
}
