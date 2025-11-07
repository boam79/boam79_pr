import { Career } from '@/types/career';

export const developmentCareers: Career[] = [
  {
    id: "dev-001",
    category: "development",
    title: "환자 데이터 분석 툴",
    company: "개인 프로젝트",
    period: { start: "2024.08", end: "present" },
    position: "Full-stack Developer",
    status: "in-progress",
    techStack: ["Next.js", "TypeScript", "Python", "Pandas", "PostgreSQL", "Chart.js"],
    description: [
      "병원 환자 데이터를 분석하고 시각화하는 웹 애플리케이션",
      "Python Pandas를 활용한 데이터 처리 및 PostgreSQL 데이터베이스 연동",
      "Chart.js를 이용한 인터랙티브 데이터 시각화",
      "커서 AI 개발툴을 활용한 효율적인 개발"
    ]
  },
  {
    id: "dev-002",
    category: "development",
    title: "의료비 비교 시스템",
    company: "개인 프로젝트",
    period: { start: "2025.10", end: "present" },
    position: "Full-stack Developer",
    status: "in-progress",
    techStack: ["TypeScript"],
    github: "https://github.com/boam79/medical_price_comparison",
    demo: "https://medical-price-comparison.vercel.app",
    description: [
      "의료기관별 의료비를 비교하고 분석할 수 있는 웹 애플리케이션",
      "사용자가 쉽게 의료비 정보를 확인하고 비교할 수 있는 인터페이스 제공",
      "커서 AI 개발툴을 활용한 빠른 프로토타이핑 및 개발"
    ]
  },
  {
    id: "dev-003",
    category: "development",
    title: "Prom Hub",
    company: "개인 프로젝트",
    period: { start: "2025.10", end: "present" },
    position: "Full-stack Developer",
    status: "in-progress",
    techStack: ["TypeScript"],
    github: "https://github.com/boam79/prom_hub",
    demo: "https://prom-hub.vercel.app",
    description: [
      "프로모션 정보를 중앙에서 관리하고 공유하는 플랫폼",
      "다양한 프로모션 정보를 한 곳에서 확인할 수 있는 통합 서비스",
      "커서 AI 개발툴을 활용한 현대적인 웹 애플리케이션 개발"
    ]
  },
  {
    id: "dev-004",
    category: "development",
    title: "SunPath Shadow Simulator",
    company: "개인 프로젝트",
    period: { start: "2025.10", end: "present" },
    position: "Full-stack Developer",
    status: "in-progress",
    techStack: ["TypeScript"],
    github: "https://github.com/boam79/SunPath_Shadow_Simulator",
    demo: "https://sunpathshadowsimulator.vercel.app",
    description: [
      "태양의 경로와 그림자를 시뮬레이션하는 웹 애플리케이션",
      "건축 및 설계 분야에서 일조량 분석에 활용 가능한 도구",
      "실시간 태양 위치 계산 및 그림자 시각화 기능 제공",
      "커서 AI 개발툴을 활용한 복잡한 수학 계산 로직 구현"
    ]
  },
  {
    id: "dev-006",
    category: "development",
    title: "Salary Calculator",
    company: "개인 프로젝트",
    period: { start: "2025.10", end: "present" },
    position: "Full-stack Developer",
    status: "in-progress",
    techStack: ["JavaScript"],
    github: "https://github.com/boam79/salary_cal",
    demo: "https://salary-cal.vercel.app",
    description: [
      "급여 계산을 간편하게 수행할 수 있는 웹 애플리케이션",
      "세금, 공제액 등을 자동으로 계산하여 실수령액을 제공",
      "사용자 친화적인 인터페이스로 빠른 급여 계산 가능",
      "커서 AI 개발툴을 활용한 실용적인 유틸리티 개발"
    ]
  },
  {
    id: "dev-008",
    category: "development",
    title: "AI Meet",
    company: "개인 프로젝트",
    period: { start: "2025.10", end: "present" },
    position: "Full-stack Developer",
    status: "in-progress",
    techStack: ["TypeScript"],
    github: "https://github.com/boam79/ai_meet",
    demo: "https://ai-meet-beige.vercel.app",
    description: [
      "AI 기반 온라인 미팅 및 협업 플랫폼",
      "실시간 화상 회의 기능과 AI 어시스턴트 통합",
      "효율적인 원격 협업을 위한 다양한 기능 제공",
      "커서 AI 개발툴을 활용한 AI 통합 웹 애플리케이션 개발"
    ]
  }
];

export const facilityCareers: Career[] = [
  {
    id: "fac-001",
    category: "facility",
    title: "원내 시설물 및 전산 통합 관리",
    company: "좋은아침병원",
    period: { start: "2024.07", end: "present" },
    position: "관리팀 팀장",
    status: "active",
    location: "경기",
    description: [
      "원내 시설물 및 전산 관리 총괄",
      "의료가스 안전 관리 및 점검",
      "각종 공사 프로젝트 매니지먼트"
    ],
    responsibilities: [
      "전기/기계 설비 유지보수 (125RT 냉온수기, 진공보일러)",
      "의료가스 안전관리 (산소, 진공, 압축공기)",
      "협력업체 관리 및 공사 감독",
      "전산 시스템 운영 관리"
    ]
  },
  {
    id: "fac-002",
    category: "facility",
    title: "병원 시설 및 자산 통합 관리",
    company: "호산여성병원",
    period: { start: "2024.03", end: "2024.06" },
    position: "차장/총무",
    status: "completed",
    duration: "4개월",
    description: [
      "병원 내외부 자산관리",
      "외부 협력사 관리",
      "시설 및 전산 재구축"
    ]
  },
  {
    id: "fac-003",
    category: "facility",
    title: "성형외과 시설 및 총무 업무",
    company: "디에이성형외과",
    period: { start: "2023.05", end: "2023.10" },
    position: "차장/팀장",
    status: "completed",
    location: "서울",
    duration: "6개월",
    description: [
      "병원 내외부 자산관리",
      "의료장비 계약 및 구매",
      "의료소모품 조달 관리",
      "시설물 유지보수"
    ]
  },
  {
    id: "fac-004",
    category: "facility",
    title: "종합병원 시설관리 및 의료기기 관리",
    company: "세경의료재단 (새빛안과병원)",
    period: { start: "2019.02", end: "2023.05" },
    position: "관리팀 대리",
    status: "completed",
    location: "경기 일산",
    duration: "4년 4개월",
    description: [
      "병원 시설 유지보수 총괄",
      "의료기기 시설 유지보수 및 업체 관리",
      "공사 PM 및 월 고정비용 정산",
      "전문병원인증평가 대응"
    ],
    achievements: [
      "전문병원인증평가 통과",
      "시설 유지보수 비용 15% 절감"
    ]
  },
  {
    id: "fac-005",
    category: "facility",
    title: "LG화학 파주공장 기숙사 관리",
    company: "프로에스콤",
    period: { start: "2011.11", end: "2016.12" },
    position: "주임 (4년차)",
    status: "completed",
    location: "경기 파주",
    duration: "5년 2개월",
    description: [
      "LG화학 파주공장 기숙사 전기 및 기계설비 유지보수",
      "기숙사 임직원 인원 관리 (300명 규모)",
      "기숙사 주변 체육시설 및 환경 정비"
    ],
    endReason: "경영악화"
  }
];

// Helper functions
export function getAllCareers(): Career[] {
  return [...developmentCareers, ...facilityCareers].sort((a, b) => {
    const aDate = a.period.end === 'present' ? new Date() : new Date(a.period.end);
    const bDate = b.period.end === 'present' ? new Date() : new Date(b.period.end);
    return bDate.getTime() - aDate.getTime();
  });
}

export function getCareersByCategory(category: 'development' | 'facility'): Career[] {
  return category === 'development' ? developmentCareers : facilityCareers;
}

