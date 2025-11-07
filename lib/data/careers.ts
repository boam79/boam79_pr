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
    techStack: ["Next.js", "TypeScript", "Python", "Pandas", "PostgreSQL", "Chart.js"]
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
    demo: "https://medical-price-comparison.vercel.app"
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
    demo: "https://prom-hub.vercel.app"
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
    demo: "https://sunpathshadowsimulator.vercel.app"
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
    demo: "https://salary-cal.vercel.app"
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
    demo: "https://ai-meet-beige.vercel.app"
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

