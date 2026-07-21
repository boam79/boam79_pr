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
  /** UI/UX 결정 포인트 (케이스 스터디) */
  designDecisions?: { title: string; detail: string }[];
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
