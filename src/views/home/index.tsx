import { profile, projects, skillGroups, stats } from "@/data/mocks/home";

import { About } from "./about";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Nav } from "./nav";
import { Projects } from "./projects";
import { Skills } from "./skills";

/**
 * Home view — the single-page developer portfolio.
 *
 * Server Component per hard rule #7; every animated piece (TextEngine,
 * Inview, the contact form) is a client leaf imported from the sections
 * below. Content lives in src/data/mocks/home.ts — edit that file, not
 * these components, to personalise the site.
 */
export const HomeView = () => {
  return (
    <>
      <Nav name={profile.name} />
      <main>
        <Hero
          role={profile.role}
          tagline={profile.tagline}
          location={profile.location}
        />
        <About bio={profile.bio} stats={stats} />
        <Projects projects={projects} />
        <Skills skillGroups={skillGroups} />
        <Contact email={profile.email} socials={profile.socials} />
      </main>
      <Footer name={profile.name} />
    </>
  );
};
