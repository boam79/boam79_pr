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
  /** 개발 탭 Featured 영역에 우선 노출 */
  featured?: boolean;
  location?: string;
  duration?: string;
  /** 한 줄 가치 요약 (Featured/컴팩트 공통) */
  summary?: string;
  description?: string[];
  responsibilities?: string[];
  achievements?: string[];
  techStack?: string[];
  endReason?: string;
  github?: string;
  demo?: string;
}
