import { Github, Linkedin, Mail, FileDown, MapPin, CircleDot } from "lucide-react";
import type { Personal } from "@/types/portfolio";

export function Hero({ personal }: { personal: Personal }) {
  return (
    <header className="section-shell pt-20 pb-16 md:pt-28 md:pb-20">
      <div className="flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 w-fit">
        <CircleDot className="h-3.5 w-3.5 text-accent" />
        <span className="font-mono text-xs text-muted">{personal.status}</span>
      </div>

      <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-ink">
        {personal.name}
      </h1>

      <p className="mt-3 font-mono text-sm md:text-base text-muted">
        {personal.role}
      </p>

      <p className="mt-5 max-w-2xl text-base md:text-lg text-zinc-300 leading-relaxed">
        {personal.tagline}
      </p>

      <div className="mt-3 flex items-center gap-1.5 text-sm text-muted">
        <MapPin className="h-4 w-4" />
        <span>{personal.location}</span>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={personal.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-medium text-canvas transition-colors hover:bg-zinc-200"
        >
          <FileDown className="h-4 w-4" />
          Resume
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-zinc-600 hover:bg-surface"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-zinc-600 hover:bg-surface"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-zinc-600 hover:bg-surface"
        >
          <Mail className="h-4 w-4" />
          Email
        </a>
      </div>
    </header>
  );
}
