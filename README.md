# Dev Portfolio Skeleton

A data-driven, single-page developer portfolio. Next.js 14 (App Router) +
TypeScript + Tailwind CSS + lucide-react. Dark, Vercel/GitHub-style,
monospace-accented UI. All content is pulled from one JSON file — no
component ever hardcodes copy.

## Project layout

```
portfolio-skeleton/
├── data/
│   └── portfolio.json        ← EDIT THIS to update all site content
├── public/
│   └── resume.pdf            ← add your resume here (see below)
├── src/
│   ├── app/
│   │   ├── layout.tsx        Root layout, fonts, metadata
│   │   ├── page.tsx          Composes all sections in order
│   │   └── globals.css       Tailwind base + shared utility classes
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── PrinciplesGrid.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── MermaidDiagram.tsx
│   │   ├── Experience.tsx
│   │   └── TechStack.tsx
│   ├── lib/
│   │   └── data.ts           Typed loader for portfolio.json
│   └── types/
│       └── portfolio.ts      Shared TypeScript interfaces
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## 1. Drop it into a fresh Next.js project

Two options:

**A. Use this folder as-is.** It's already a complete Next.js App Router
project — `cd` into it and skip to step 2.

**B. Merge into an existing `create-next-app` project:**
1. Copy `data/portfolio.json` into your project's `data/` folder.
2. Copy everything under `src/components`, `src/lib`, `src/types` into
   your project's `src/` (or `app/`-sibling) folder.
3. Copy `src/app/page.tsx` and merge `src/app/layout.tsx` / `globals.css`
   with your existing versions.
4. Copy the `paths` block from `tsconfig.json` (`@/*` and `@data/*`
   aliases) into your project's `tsconfig.json`.
5. Merge `tailwind.config.ts` (custom `canvas` / `surface` / `line` /
   `muted` / `ink` / `accent` colors, `font-mono` mapping, `glow-sm`
   shadow) into your existing Tailwind config.

## 2. Install dependencies

```bash
npm install
```

Mermaid rendering is optional. The `MermaidDiagram` component tries to
`import("mermaid")` at runtime and falls back to a plain code block if
the package isn't installed — so the project works out of the box. To
get rendered diagrams instead of the code-block fallback:

```bash
npm install mermaid
```

## 3. Add your resume

Place your resume PDF at `public/resume.pdf` (or update
`personal.resumeUrl` in `data/portfolio.json` to point elsewhere, e.g.
an external link).

## 4. Run it

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Editing content

Everything visible on the page — name, tagline, principles, projects,
metrics, mermaid diagrams, experience, tech stack — comes from
`data/portfolio.json`. Add a new project by adding an object to the
`projects` array; a new card renders automatically, no component
changes required.

The `icon` field on each entry in `principles` is looked up against a
small map in `PrinciplesGrid.tsx` (`Target`, `Users`, `Compass`,
`Layers` by default). To use a different Lucide icon, import it there
and add it to the `ICONS` map.

## Design tokens

| Token | Value | Use |
|---|---|---|
| `canvas` | `#09090b` (zinc-950) | page background |
| `surface` | `#18181b` (zinc-900) | card background |
| `line` | `#27272a` (zinc-800) | borders/dividers |
| `muted` | `#a1a1aa` (zinc-400) | secondary text |
| `ink` | `#f4f4f5` (zinc-100) | primary text |
| `accent` | `#22d3ee` (cyan-400) | icons, focus rings, status dot |

Body copy uses Inter; tech tags, metrics, labels, and code use
JetBrains Mono — both loaded via `next/font/google` with zero
layout-shift.
