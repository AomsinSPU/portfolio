export type Language = 'en' | 'th';
export type Theme = 'dark' | 'light';

export interface LocalizedString {
  en: string;
  th: string;
}

export interface LocalizedList {
  en: string[];
  th: string[];
}

export interface ArchitectureFlow {
  client: string;
  apiGateway: string;
  server: string;
  database: string;
  notes?: LocalizedString;
}

export interface Project {
  id: string;
  title: LocalizedString;
  category: 'all' | 'fullstack' | 'backend' | 'frontend' | 'systems';
  shortDescription: LocalizedString;
  fullDescription: LocalizedString;
  problem: LocalizedString;
  solution: LocalizedString;
  features: LocalizedList;
  technologies: string[];
  architecture?: ArchitectureFlow;
  challenges?: LocalizedString;
  learned?: LocalizedString;
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  screenshots?: string[];
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'frameworks' | 'databases' | 'tools';
  description: LocalizedString;
  tag: string;
  experience?: LocalizedString;
}

export interface ExperienceItem {
  id: string;
  role: LocalizedString;
  company: LocalizedString;
  period: LocalizedString;
  location: LocalizedString;
  type: 'freelance' | 'work' | 'academic';
  responsibilities: LocalizedList;
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: LocalizedString;
  degree: LocalizedString;
  major: LocalizedString;
  period: LocalizedString;
  gpax: string;
  status: LocalizedString;
  highlightCoursework: LocalizedList;
  achievements?: LocalizedList;
}

export interface CertificateItem {
  id: string;
  title: LocalizedString;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  image: string;
  badge: string;
}

export interface DocumentInfo {
  type: 'resume' | 'cv';
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  highlights: LocalizedList;
  pdfUrl: string;
  filename: string;
  lastUpdated: string;
}
