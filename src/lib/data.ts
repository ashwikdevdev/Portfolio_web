import portfolioJson from "@data/portfolio.json";
import type { PortfolioData } from "@/types/portfolio";

// Single source of truth. Every section in the UI reads from this object,
// which is a typed cast of /data/portfolio.json. To update site content,
// edit the JSON file only — no component code should need to change.
export const portfolio: PortfolioData = portfolioJson as PortfolioData;
