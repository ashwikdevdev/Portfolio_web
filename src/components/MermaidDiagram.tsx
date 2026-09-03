"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Renders a Mermaid diagram client-side if the optional `mermaid` package
 * is installed. If it isn't (or rendering fails), falls back to a plain
 * monospace code block so the section never breaks.
 *
 * To enable live rendering: `npm install mermaid` — no other code changes
 * needed, this component picks it up automatically.
 */
export function MermaidDiagram({ chart, id }: { chart: string; id: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rendered, setRendered] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        // Optional dependency — resolved at runtime so the project builds
        // fine even if `mermaid` was never installed.
        const mermaidModule = await import(/* webpackIgnore: false */ "mermaid").catch(
          () => null
        );
        if (!mermaidModule) {
          if (!cancelled) setFailed(true);
          return;
        }
        const mermaid = mermaidModule.default;
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          themeVariables: {
            background: "#18181b",
            primaryColor: "#27272a",
            primaryTextColor: "#f4f4f5",
            primaryBorderColor: "#3f3f46",
            lineColor: "#52525b",
            fontFamily: "var(--font-jbmono)",
          },
        });
        const { svg } = await mermaid.render(id, chart);
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          setRendered(true);
        }
      } catch {
        if (!cancelled) setFailed(true);
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  const showFallback = failed || !rendered;

  return (
    <div className="rounded-md border border-line bg-black/40">
      {showFallback && (
        <pre className="overflow-x-auto p-4 font-mono text-xs text-zinc-400">
          <code>{chart}</code>
        </pre>
      )}
      <div
        ref={containerRef}
        className={`p-4 [&_svg]:mx-auto [&_svg]:max-w-full ${
          showFallback ? "hidden" : ""
        }`}
      />
    </div>
  );
}
