import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import SilverButton from "@/components/SilverButton";
import { selectedProjects } from "@/data/projects";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh-TW";

export default function SelectedWork({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Dictionary["work"];
}) {
  return (
    <section className="section-padding relative bg-black">
      <div className="container-yamanawa">
        <Reveal className="mb-16 flex items-end justify-between">
          <h2 className="text-[length:var(--fs-heading)] leading-[1] tracking-[var(--tracking-tight)] text-white">
            {copy.title}
          </h2>
          <span className="hidden text-sm text-[var(--text-muted)] md:block">
            {String(selectedProjects.length).padStart(2, "0")} / SELECTED
          </span>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
          {selectedProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} locale={locale} pendingLabel={copy.pending} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-16 flex justify-center">
          <SilverButton href={localePath(locale, "/work")} variant="ghost">
            {copy.viewAll}
          </SilverButton>
        </Reveal>
      </div>
    </section>
  );
}
