import { portfolio } from "@/lib/data";
import { Hero } from "@/components/Hero";
import { PrinciplesGrid } from "@/components/PrinciplesGrid";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <main>
      <Hero personal={portfolio.personal} />
      <PrinciplesGrid principles={portfolio.principles} />
      <ProjectsSection projects={portfolio.projects} />
      <Experience experience={portfolio.experience} />
      <TechStack skills={portfolio.skills} />

      <footer className="section-shell py-10 border-t border-line">
        <p className="font-mono text-xs text-muted">
          {portfolio.personal.name} — built with Next.js &amp; Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
