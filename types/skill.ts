export interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  yearsOfExperience?: number;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  category: 'safety' | 'technical' | 'driving';
}

