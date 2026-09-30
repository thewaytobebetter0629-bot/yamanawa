import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { localePath, type Locale } from "@/i18n/config";

// Deterministic placeholder gradient per project until real photography is
// supplied — varies angle/stops by a hash of the slug so the grid doesn't
// look procedurally identical, but stays inside the black/silver palette.
function placeholderGradient(slug: string) {
  let hash = 0;
  for (const ch of slug) hash = (hash * 31 + ch.charCodeAt(0)) % 360;
  const angle = 100 + (hash % 120);
  return `linear-gradient(${angle}deg, #050505 0%, #16171a 38%, #4a4d52 62%, #050505 100%)`;
}

export default function ProjectCard({
  project,
  locale,
  pendingLabel,
}: {
  project: Project;
  locale: Locale;
  pendingLabel: string;
}) {
  const category = project.categoryLabel[locale];

  return (
    <Link
      href={localePath(locale, `/work/${project.slug}`)}
      className="group block"
      aria-label={`${project.title} — ${category}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[16/10]">
        <div
          className="absolute inset-0 transition-[transform,filter] duration-[var(--duration-slow)] ease-[var(--ease-precise)] will-change-transform group-hover:scale-[1.02] group-hover:brightness-90"
          style={{ background: placeholderGradient(project.slug) }}
        />
        {project.cover && <Image src={project.cover} alt={project.coverAlt[locale]} fill sizes="(max-width: 768px) 90vw, 45vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />}
        {project.previewOnly && (
          <span className="caption-label absolute bottom-4 right-4 text-[var(--text-caption)]">
            {pendingLabel}
          </span>
        )}
        <div
          className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[var(--silver-bright)] transition-transform duration-[var(--duration-base)] ease-[var(--ease-precise)] group-hover:scale-x-100"
          aria-hidden="true"
        />
      </div>

      <div className="mt-5 flex items-baseline justify-between overflow-hidden">
        <span className="translate-y-0 text-xl tracking-[-0.01em] text-white transition-transform duration-[var(--duration-base)] ease-[var(--ease-precise)] group-hover:-translate-y-0.5">
          {project.title}
        </span>
        <span className="caption-label">{project.year}</span>
      </div>
      <p className="mt-1 text-sm text-[var(--text-muted)]">{category}</p>
    </Link>
  );
}
