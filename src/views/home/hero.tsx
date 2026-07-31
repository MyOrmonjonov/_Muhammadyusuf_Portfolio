import { Inview } from "@/components/animation/springs/in-view";
import { HeadingReveal } from "./heading-reveal";

interface HeroProps {
  role: string;
  tagline: string;
  location: string;
}

export const Hero = ({ role, tagline, location }: HeroProps) => {
  return (
    <section
      id="top"
      aria-label="Kirish"
      className="flex min-h-lvh flex-col justify-center px-6 pt-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Inview
          tag="p"
          mode="once"
          from={{ opacity: 0, y: 12 }}
          to={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-accent"
          />
          {location} · Ishga tayyorman
        </Inview>

        <HeadingReveal
          tag="h1"
          className="leading-display justify-start text-left text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          {role}
        </HeadingReveal>

        <Inview
          tag="p"
          mode="once"
          delayIn={200}
          from={{ opacity: 0, y: 16 }}
          to={{ opacity: 1, y: 0 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          {tagline}
        </Inview>

        <Inview
          tag="div"
          mode="once"
          delayIn={350}
          from={{ opacity: 0, y: 16 }}
          to={{ opacity: 1, y: 0 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors duration-[var(--duration-fast)] ease-entrance hover:bg-accent-hover"
          >
            Loyihalarni ko&apos;rish
          </a>
          <a
            href="#contact"
            className="rounded-full border border-surface-border px-6 py-3 text-sm font-medium text-foreground transition-colors duration-[var(--duration-fast)] ease-entrance hover:border-accent hover:text-accent"
          >
            Bog&apos;lanish
          </a>
        </Inview>
      </div>
    </section>
  );
};
