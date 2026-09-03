import type { Project } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="section-shell py-14 md:py-18">
      <h2 className="text-sm font-mono text-muted mb-6">Featured engineering projects</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
