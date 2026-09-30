import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { projects } from "@/data/projects";
import { localePath, ogLocale } from "@/i18n/config";
import { OG_IMAGE } from "@/lib/site";
import { alternatesFor, getLocale } from "@/i18n/server";
import styles from "@/components/WorkArchive.module.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return {};
  const locale = await getLocale();
  const title = `${project.code} — ${project.title}`;
  const description = project.summary[locale];
  return {
    title, description,
    alternates: alternatesFor(locale, `/work/${project.slug}`),
    robots: project.previewOnly ? { index: false, follow: true } : undefined,
    openGraph: { type: "website", siteName: "YAMANAWA", locale: ogLocale[locale], title, description, url: localePath(locale, `/work/${project.slug}`), images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const legacy = projects.find(p => p.legacySlugs?.includes(slug));
  if (legacy) permanentRedirect(localePath(locale, `/work/${legacy.slug}`));
  const index = projects.findIndex(p => p.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const en = locale === "en";
  return <article className={`${styles.detail} container-yamanawa`}>
    <Link className={styles.back} href={localePath(locale, "/work")}>← {en ? "ALL PROJECTS" : "所有作品"}</Link>
    <div className={styles.kicker}><span>{project.code}</span><span>YAMANAWA PROJECT ARCHIVE</span></div>
    <h1 className={styles.detailTitle}>{project.title}</h1>
    <div className={styles.detailMeta}><span>{project.categoryLabel[locale]}</span><span>{project.year}</span></div>
    <div className={styles.detailCover}>
      {project.videoEmbedUrl ? (
        <iframe
          className={styles.detailVideo}
          src={project.videoEmbedUrl}
          title={project.videoTitle?.[locale] ?? project.title}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      ) : (
        <Image src={project.cover} alt={project.coverAlt[locale]} fill priority sizes="(max-width: 1600px) 90vw, 1472px" />
      )}
    </div>
    <div className={styles.note}><p>{project.summary[locale]}</p>{project.videoEmbedUrl ? <span>{en ? "Project film" : "專案影片"}</span> : project.previewOnly && <span>{en ? "Illustrative cover · Project imagery pending" : "示意封面 · 正式作品影像待補"}</span>}</div>
    <nav className={styles.next} aria-label={en ? "Project navigation" : "專案導覽"}><Link href={localePath(locale, "/work")}>{en ? "Back to archive" : "返回作品索引"} ↗</Link>{projects.length > 1 && <Link href={localePath(locale, `/work/${next.slug}`)}>{en ? "NEXT" : "下一個專案"} / {next.code} — {next.title} ↗</Link>}</nav>
  </article>;
}
