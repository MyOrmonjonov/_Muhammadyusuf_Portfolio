import { Project } from "@/data/mocks/home";
import { HeadingReveal } from "./heading-reveal";
import { ProjectCard } from "./project-card";

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="px-6 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <HeadingReveal
          tag="h2"
          id="projects-heading"
          className="leading-display justify-start text-left text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Loyihalar
        </HeadingReveal>

        <p className="mt-4 max-w-xl text-muted-foreground">
          So&apos;nggi ishlaridan bir nechtasi — har biri muammoni yechish uchun
          qurilgan.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delayIn={(index % 2) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
