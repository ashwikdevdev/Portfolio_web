import {
  Target,
  Users,
  Compass,
  Layers,
  type LucideIcon,
} from "lucide-react";
import type { Principle } from "@/types/portfolio";

// Extend this map as needed; "icon" in portfolio.json is looked up here.
const ICONS: Record<string, LucideIcon> = {
  Target,
  Users,
  Compass,
  Layers,
};

export function PrinciplesGrid({ principles }: { principles: Principle[] }) {
  return (
    <section className="section-shell py-14 md:py-18">
      <h2 className="text-sm font-mono text-muted mb-6">Working principles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {principles.map((p) => {
          const Icon = ICONS[p.icon] ?? Target;
          return (
            <div
              key={p.title}
              className="card-base card-hover flex flex-col gap-3 p-5"
            >
              <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
              <h3 className="text-base font-medium text-ink">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              <p className="mt-auto pt-3 border-t border-line font-mono text-xs text-zinc-400 leading-relaxed">
                {p.proof}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
