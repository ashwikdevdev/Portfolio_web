import { ExternalLink, Github, TrendingDown } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { MermaidDiagram } from "./MermaidDiagram";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const diagramId = `mermaid-project-${index}`;

  return (
    <article className="card-base card-hover p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium text-ink">{project.title}</h3>
          <p className="mt-2 max-w-2xl text-sm text-zinc-300 leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View source on GitHub"
              className="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-xs text-ink transition-colors hover:border-zinc-600 hover:bg-surface"
            >
              <Github className="h-3.5 w-3.5" />
              Repo
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open live demo"
              className="inline-flex items-center gap-1.5 rounded-md bg-ink px-3 py-1.5 text-xs font-medium text-canvas transition-colors hover:bg-zinc-200"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live demo
            </a>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="pill">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <MermaidDiagram chart={project.mermaid} id={diagramId} />
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {project.metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-md border border-line bg-black/20 px-4 py-3"
          >
            <div className="flex items-center gap-1.5 text-muted">
              <TrendingDown className="h-3.5 w-3.5" />
              <span className="font-mono text-xs">{m.label}</span>
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-mono text-lg text-ink">{m.value}</span>
              {m.note && (
                <span className="font-mono text-xs text-muted">{m.note}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-line pt-5">
        <p className="eyebrow-label mb-1.5">Architecture &amp; leadership</p>
        <p className="text-sm text-zinc-300 leading-relaxed">{project.highlight}</p>
      </div>
    </article>
  );
}
