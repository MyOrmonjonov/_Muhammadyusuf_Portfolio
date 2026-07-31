import { Inview } from "@/components/animation/springs/in-view";
import { SkillGroup } from "@/data/mocks/home";
import { HeadingReveal } from "./heading-reveal";

interface SkillsProps {
  skillGroups: SkillGroup[];
}

export const Skills = ({ skillGroups }: SkillsProps) => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="px-6 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <HeadingReveal
          tag="h2"
          id="skills-heading"
          className="leading-display justify-start text-left text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Ko&apos;nikmalar
        </HeadingReveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <Inview
              key={group.category}
              tag="div"
              mode="once"
              delayIn={groupIndex * 100}
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-surface-border bg-surface px-3 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Inview>
          ))}
        </div>
      </div>
    </section>
  );
};
