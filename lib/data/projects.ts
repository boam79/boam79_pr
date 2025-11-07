import { Project } from '@/types/project';

export const featuredProject: Project = {
  id: "project-001",
  title: "환자 데이터 분석 툴",
  status: "in-progress",
  period: "2024.08 ~ 현재",
  role: "Full-stack Developer",
  overview: "병원 환자 데이터를 분석하여 운영 효율화 및 의사결정 지원을 위한 탭형 대시보드 개발 (PDR v4.2)",
  objectives: [
    "탭형 구조로 대시보드 성능 최적화 (초기 로드 1.8초 이내)",
    "5개 탭 구조: 요약 / 질병 / 수술 / 지역 / 재방문",
    "히트맵 전용 탭 분리로 공간 점유 문제 해결",
    "Lazy Loading 및 Skeleton Animation으로 렌더링 성능 향상",
    "전역 필터 상태 관리로 탭 간 데이터 동기화",
    "n<5 자동 마스킹으로 개인정보 보호 강화"
  ],
  techStack: {
    frontend: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "Framer Motion"
    ],
    backend: ["Python", "FastAPI", "PostgreSQL"],
    dataAnalysis: [
      "DuckDB WASM",
      "Pandas",
      "NumPy",
      "Scikit-learn"
    ],
    visualization: [
      "Recharts",
      "Chart.js",
      "Naver Maps API"
    ],
    deployment: ["Vercel", "Docker", "AWS"]
  },
  features: [
    "탭형 대시보드 구조 (5개 탭: 요약/질병/수술/지역/재방문)",
    "Lazy Loading 및 Dynamic Import로 성능 최적화",
    "Zustand 기반 전역 필터 상태 관리",
    "Naver Maps API를 활용한 지역 히트맵 (전체화면)",
    "DuckDB WASM을 활용한 클라이언트 사이드 데이터 처리",
    "Skeleton Animation으로 로딩 UX 개선",
    "탭별 URL Fragment 지원 (#disease, #region 등)",
    "CSV/PNG/Markdown 보고서 내보내기",
    "n<5 자동 마스킹으로 개인정보 보호",
    "반응형 디자인 (Desktop/Tablet/Mobile)"
  ],
  challenges: [
    "의료 데이터 개인정보 보호 (HIPAA 준수, n<5 마스킹)",
    "대용량 데이터 렌더링 성능 최적화",
    "히트맵 공간 점유 문제 해결",
    "탭 간 필터 상태 동기화",
    "DuckDB WASM을 활용한 클라이언트 사이드 분석",
    "레거시 시스템과의 데이터 통합"
  ],
  images: [
    "/projects/patient-tool/dashboard.png",
    "/projects/patient-tool/analytics.png",
    "/projects/patient-tool/mobile.png"
  ],
  github: "https://github.com/boam79/patient-analysis-tool",
  demo: "https://patient-tool-demo.vercel.app"
};

export const projects: Project[] = [
  featuredProject
];

