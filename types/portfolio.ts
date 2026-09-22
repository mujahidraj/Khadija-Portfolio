// =============================================================================
// Portfolio Data Types
// =============================================================================
// These TypeScript interfaces define the shape of all data in /data/portfolio.json.
// When adding new fields to the JSON, update these types to maintain type safety.

export interface Social {
  instagram: string;
  linkedin: string;
  email: string;
}

export interface Designer {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  yearsExperience: number;
  profileImage: string;
  socials: Social;
}

export type ProjectCategory = "Wood" | "Metal" | "Hybrid";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: number;
  materials: string[];
  description: string;
  thumbnail: string;
  gallery: string[];
  client: string;
  featured: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Client {
  name: string;
  type: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PortfolioData {
  designer: Designer;
  skills: string[];
  experience: Experience[];
  stats: Stat[];
  process: ProcessStep[];
  clients: Client[];
  projects: Project[];
  testimonials: Testimonial[];
  faq: FAQ[];
}
