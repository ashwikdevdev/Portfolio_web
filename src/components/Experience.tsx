import { Briefcase } from "lucide-react";
import type { ExperienceEntry } from "@/types/portfolio";

export function Experience({ experience }: { experience: ExperienceEntry[] }) {
  return (
    <section className="section-shell py-14 md:py-18">
      <h2 className="text-sm font-mono text-muted mb-6">Work experience &amp; team impact</h2>
      <ol className="relative border-l border-line ml-2">
        {experience.map((entry) => (
          <li key={`${entry.company}-${entry.period}`} className="mb-8 ml-6 last:mb-0">
            <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border border-line bg-canvas">
              <Briefcase className="h-2.5 w-2.5 text-accent" />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-medium text-ink">
                {entry.role} <span className="text-muted font-normal">· {entry.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted">{entry.period}</span>
            </div>
            <ul className="mt-3 space-y-1.5">
              {entry.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-zinc-300 leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                  {h}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
