export interface HeroData {
  name: string;
  role: string;
  taglines: string[];
  email: string;
  phone: string;
}

export interface SkillGroup {
  label: string;
  icon: string;
  skills: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export interface Metric {
  value: number;
  unit: string;
  label: string;
  decimals?: number;
}

export interface ProjectEntry {
  title: string;
  description: string;
  metrics: Metric[];
  tags: string[];
  featured?: boolean;
}

export interface EducationEntry {
  degree: string;
  field: string;
  university: string;
  location: string;
  year: string;
  coursework?: string[];
}

export interface ThesisData {
  title: string;
  summary: string;
  findings: string[];
  tags: string[];
}

export interface CertEntry {
  title: string;
  issuer: string;
  date: string;
  category: "data" | "energy" | "automation" | "design";
}

export interface ResumeData {
  hero: HeroData;
  techSkills: SkillGroup;
  greenSkills: SkillGroup;
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  education: EducationEntry[];
  thesis: ThesisData;
  certifications: CertEntry[];
}
