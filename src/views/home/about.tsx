import { Inview } from "@/components/animation/springs/in-view";
import { Stat } from "@/data/mocks/home";
import { HeadingReveal } from "./heading-reveal";

interface AboutProps {
  bio: string[];
  stats: Stat[];
}

export const About = ({ bio, stats }: AboutProps) => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="px-6 py-24 sm:py-32"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1fr_1fr]">
        <div>
          <HeadingReveal
            tag="h2"
            id="about-heading"
            className="leading-display justify-start text-left text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Men haqimda
          </HeadingReveal>

          <div className="mt-6 space-y-4">
            {bio.map((paragraph, index) => (
              <Inview
                key={paragraph.slice(0, 24)}
                tag="p"
                mode="once"
                delayIn={index * 120}
                from={{ opacity: 0, y: 14 }}
                to={{ opacity: 1, y: 0 }}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </Inview>
            ))}
          </div>
        </div>

        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((stat, index) => (
            <Inview
              key={stat.label}
              tag="div"
              mode="once"
              delayIn={index * 100}
              from={{ opacity: 0, y: 14 }}
              to={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-surface-border bg-surface p-6"
            >
              <dt className="text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-semibold text-accent">
                {stat.value}
              </dd>
            </Inview>
          ))}
        </dl>
      </div>
    </section>
  );
};
