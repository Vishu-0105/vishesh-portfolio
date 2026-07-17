export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  featured: boolean;
  category: string[];
  accuracy: string;
  dataset: string;
  github: string;
  demo: string | null;
  overview: string;
  problem: string;
  features: string[];
  architecture: string;
  tech: string[];
  challenges: string[];
  learnings: string[];
  impact: string;
  future: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  bullets: string[];
  tech: string[];
  certificate: boolean;
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  credentialId: string | null;
  valid: string | null;
  type: "certification" | "patent";
  description?: string;
  icon: string;
}

export type ThemeType = "light" | "dark" | "system";
export type FormStatus = "idle" | "loading" | "success" | "error";
