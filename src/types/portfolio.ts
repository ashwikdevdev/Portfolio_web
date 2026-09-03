export interface Personal {
  name: string;
  role: string;
  tagline: string;
  location: string;
  status: string;
  github: string;
  linkedin: string;
  email: string;
  resumeUrl: string;
}

export interface Principle {
  icon: string; // key into the LucideIconMap
  title: string;
  desc: string;
  proof: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  note?: string;
}

export interface Project {
  title: string;
  description: string;
  metrics: ProjectMetric[];
  tags: string[];
  mermaid: string;
  highlight: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Skills {
  languages: string[];
  backend_ai: string[];
  frontend: string[];
  infra_tools: string[];
}

export interface PortfolioData {
  personal: Personal;
  principles: Principle[];
  projects: Project[];
  experience: ExperienceEntry[];
  skills: Skills;
}
