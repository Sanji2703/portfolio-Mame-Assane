export type SkillLevel = 'pratique' | 'notion';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  levelLabel: string;
  description: string;
  category: 'web' | 'programming' | 'stats' | 'systems' | 'tools';
}

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'stats' | 'security' | 'app';
  categoryLabel: string;
  status: 'functional' | 'in_progress' | 'concept';
  statusLabel: string;
  summary: string;
  problem: string;
  objective: string;
  technologies: string[];
  features: string[];
  learnings: string;
  image?: string;
  interactiveDemoId?: string;
  githubNote?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  missions: string[];
  keyStrengths: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  status: 'en_cours' | 'admission';
  statusLabel: string;
  description: string;
  highlights: string[];
}

export interface CertificationGoal {
  title: string;
  issuer: string;
  status: 'en_cours' | 'objectif';
  statusLabel: string;
  focusArea: string;
}

export interface DataSample {
  id: number;
  label: string;
  value: number;
  secondaryValue: number;
  category: string;
}
