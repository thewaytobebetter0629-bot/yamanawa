"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { localePath, type Locale } from "@/i18n/config";
import styles from "./WorkArchive.module.css";

export default function WorkArchive({ projects, locale }: { projects: Project[]; locale: Locale }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);
  const active = hovered ?? focused;
  const preview = projects.find(p => p.code === active);
  const en = locale === "en";

  return <div className={styles.archive}>
    <div className={styles.index}>
      <div className={styles.columns} aria-hidden="true"><span>PROJECT INDEX</span><span>{en ? "DISCIPLINE" : "類別"}</span><span>{en ? "YEAR" : "年份"}</span><span>↗</span></div>
      <ol className={styles.list} onPointerLeave={() => setHovered(null)}>
        {projects.map(project => <li key={project.code} className={`${styles.item} ${active && active !== project.code ? styles.dimmed : ""}`}>
          <Link href={localePath(locale, `/work/${project.slug}`)} className={`${styles.row} ${active === project.code ? styles.active : ""}`}
            onPointerEnter={e => { if (e.pointerType === "mouse") setHovered(project.code); }}
            onFocus={() => { setHovered(null); setFocused(project.code); }} onBlur={() => setFocused(null)}>
            <span className={styles.identity}><span className={styles.code}>{project.code}</span><span className={styles.dash}>—</span><span className={styles.name}>{project.title}</span></span>
            <span className={styles.category}>{project.categoryLabel[locale]}</span>
            <span className={styles.year}>{project.year}</span><span className={styles.arrow} aria-hidden="true">↗</span>
          </Link>
        </li>)}
      </ol>
      <div className={styles.indexFooter}><span>{String(projects.length).padStart(3, "0")} PROJECTS</span><span>TO BE CONTINUED — ∞</span></div>
    </div>
    <aside className={styles.preview} aria-label={en ? "Project preview" : "作品預覽"}>
      <div className={styles.previewFrame}>
        <div className={`${styles.idle} ${preview ? styles.hidden : ""}`} aria-hidden={!!preview}><span className={styles.orbit} aria-hidden="true"/><span>YMW / ARCHIVE</span><p>{en ? "Explore the index" : "探索專案索引"}</p><small>{en ? "Hover or focus on a project to preview" : "移至專案，預覽影像"}</small></div>
        {preview && <div key={preview.code} className={`${styles.previewImage} ${styles.visible}`}>
          <Image src={preview.cover} alt={preview.coverAlt[locale]} fill sizes="(min-width: 1024px) 32vw, 1px" />
        </div>}
      </div>
      <div className={styles.previewCaption}><span>{preview ? `${preview.code} — ${preview.title}` : "SELECTED VISUALS"}</span><span>{preview?.previewOnly ? (en ? "ILLUSTRATIVE COVER" : "示意封面") : "YAMANAWA"}</span></div>
    </aside>
  </div>;
}
