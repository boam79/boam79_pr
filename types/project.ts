export interface Project {
  id: string;
  title: string;
  status: 'in-progress' | 'completed';
  period: string;
  role: string;
  overview: string;
  summary: {
    problem: string;
    solution: string;
    impact: string;
  };
  objectives: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    dataAnalysis?: string[];
    visualization?: string[];
    deployment?: string[];
  };
  features: string[];
  challenges?: string[];
  images?: string[];
  github?: string;
  demo?: string;
}

