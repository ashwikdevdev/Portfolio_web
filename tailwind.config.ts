import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jbmono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        canvas: "#09090b", // zinc-950
        surface: "#18181b", // zinc-900
        line: "#27272a", // zinc-800
        muted: "#a1a1aa", // zinc-400
        ink: "#f4f4f5", // zinc-100
        accent: "#22d3ee", // cyan-400, used sparingly
      },
      boxShadow: {
        "glow-sm": "0 0 0 1px rgba(34,211,238,0.15), 0 0 24px -8px rgba(34,211,238,0.25)",
      },
      maxWidth: {
        content: "72rem",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
