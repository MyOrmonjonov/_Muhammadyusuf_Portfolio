import { Inview } from "@/components/animation/springs/in-view";
import { Project } from "@/data/mocks/home";

interface ProjectCardProps {
  project: Project;
  delayIn?: number;
}

export const ProjectCard = ({ project, delayIn = 0 }: ProjectCardProps) => {
  return (
    <Inview
      tag="article"
      mode="once"
      delayIn={delayIn}
      from={{ opacity: 0, y: 24 }}
      to={{ opacity: 1, y: 0 }}
      className="group flex flex-col justify-between rounded-2xl border border-surface-border bg-surface p-6 transition-colors duration-[var(--duration-fast)] ease-entrance hover:border-accent"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-foreground">
            {project.title}
          </h3>
          <span className="shrink-0 text-sm text-muted-foreground">
            {project.year}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Texnologiyalar">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-surface-border px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex items-center gap-4 text-sm">
        {project.href && (
          <a
            href={project.href}
            className="font-medium text-foreground transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-accent"
          >
            Ko&apos;rish →
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            className="text-muted-foreground transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-foreground"
          >
            Kod
          </a>
        )}
      </div>
    </Inview>
  );
};
