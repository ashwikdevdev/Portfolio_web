import type { Skills } from "@/types/portfolio";

const CATEGORY_LABELS: Record<keyof Skills, string> = {
  languages: "Languages",
  backend_ai: "Backend & AI",
  frontend: "Frontend",
  infra_tools: "Infrastructure & Tools",
};

export function TechStack({ skills }: { skills: Skills }) {
  const categories = Object.keys(skills) as (keyof Skills)[];

  return (
    <section className="section-shell py-14 md:py-24">
      <h2 className="text-sm font-mono text-muted mb-6">System matrix</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div key={cat} className="card-base p-5">
            <h3 className="text-sm text-ink mb-3">{CATEGORY_LABELS[cat]}</h3>
            <div className="flex flex-wrap gap-2">
              {skills[cat].map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
