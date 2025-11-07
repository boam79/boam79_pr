export interface Career {
  id: string;
  category: 'development' | 'facility';
  title: string;
  company: string;
  period: {
    start: string;
    end: string | 'present';
  };
  position: string;
  status?: 'active' | 'completed' | 'in-progress';
  location?: string;
  duration?: string;
  description?: string[];
  responsibilities?: string[];
  achievements?: string[];
  techStack?: string[];
  endReason?: string;
  github?: string;
  demo?: string;
}

