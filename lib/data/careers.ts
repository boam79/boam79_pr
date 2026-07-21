import { Career } from '@/types/career';
import { parseCareerDate } from '@/lib/utils/date';

export const developmentCareers: Career[] = [
  {
    id: 'dev-001',
    category: 'development',
    title: '환자 데이터 분석 툴',
    company: '개인 프로젝트',
    period: { start: '2025.08', end: 'present' },
    position: 'Full-stack Developer',
    status: 'in-progress',
    featured: true,
    summary: '병원 운영 지표를 탭형 대시보드로 빠르게 탐색하는 분석 워크플로우',
    techStack: ['Next.js', 'TypeScript', 'Python', 'Pandas', 'PostgreSQL', 'Chart.js'],
    github: 'https://github.com/boam79/patient_analysis',
    demo: 'https://patientanalysis.vercel.app',
    description: [
      '수작업 중심이던 환자·운영 데이터 분석을 탭형 대시보드로 재구성',
      'Lazy Loading·전역 필터로 탭 전환 체감 지연을 줄이고 핵심 지표를 우선 노출',
      'n<5 마스킹과 보고서 보내기로 현장 보안·공유 요구를 함께 충족',
    ],
  },
  {
    id: 'dev-002',
    category: 'development',
    title: '의료비 비교 시스템',
    company: '개인 프로젝트',
    period: { start: '2025.10', end: 'present' },
    position: 'Full-stack Developer',
    status: 'in-progress',
    featured: true,
    summary: '기관별 의료비를 한 화면에서 비교·탐색하는 인터페이스',
    techStack: ['TypeScript', 'Next.js'],
    // GitHub 저장소가 비공개 전환/삭제되어 링크가 깨져 있어 데모 링크만 유지합니다.
    demo: 'https://medical-price-comparison.vercel.app',
    description: [
      '의료기관별 수가·비용을 나란히 비교할 수 있는 웹 UI',
      '검색·필터 중심으로 비교 흐름을 단순화해 의사결정 전 탐색 비용을 줄임',
    ],
  },
  {
    id: 'dev-003',
    category: 'development',
    title: 'Prom Hub',
    company: '개인 프로젝트',
    period: { start: '2025.10', end: 'present' },
    position: 'Full-stack Developer',
    status: 'in-progress',
    summary: '프로모션 정보를 한곳에서 모아보는 허브',
    techStack: ['TypeScript', 'Next.js'],
    github: 'https://github.com/boam79/prom_hub',
    demo: 'https://prom-hub.vercel.app',
    description: [
      '흩어진 프로모션 정보를 카드·리스트로 모아 탐색',
      '반응형 레이아웃으로 모바일에서도 빠른 스캔이 가능하도록 구성',
    ],
  },
  {
    id: 'dev-004',
    category: 'development',
    title: 'SunPath Shadow Simulator',
    company: '개인 프로젝트',
    period: { start: '2025.10', end: 'present' },
    position: 'Full-stack Developer',
    status: 'in-progress',
    summary: '일조·그림자 경로를 시각적으로 시뮬레이션',
    techStack: ['TypeScript'],
    github: 'https://github.com/boam79/SunPath_Shadow_Simulator',
    demo: 'https://sunpathshadowsimulator.vercel.app',
    description: [
      '태양 위치 계산 결과를 그림자 궤적으로 시각화',
      '건축·시설 검토에 쓸 수 있도록 시점·날짜 조작 UI 제공',
    ],
  },
  {
    id: 'dev-006',
    category: 'development',
    title: 'Salary Calculator',
    company: '개인 프로젝트',
    period: { start: '2025.10', end: 'present' },
    position: 'Full-stack Developer',
    status: 'in-progress',
    summary: '공제·세금을 반영한 실수령액 계산기',
    techStack: ['JavaScript'],
    github: 'https://github.com/boam79/salary_cal',
    demo: 'https://salary-cal.vercel.app',
    description: [
      '입력 즉시 실수령액을 보여주는 단일 목적 유틸리티',
      '불필요한 단계를 줄인 폼·결과 레이아웃으로 계산 흐름을 단순화',
    ],
  },
  {
    id: 'dev-008',
    category: 'development',
    title: 'AI Meet',
    company: '개인 프로젝트',
    period: { start: '2025.10', end: 'present' },
    position: 'Full-stack Developer',
    status: 'in-progress',
    summary: 'AI 어시스턴트를 붙인 미팅·협업 프로토타입',
    techStack: ['TypeScript'],
    github: 'https://github.com/boam79/ai_meet',
    demo: 'https://ai-meet-beige.vercel.app',
    description: [
      '화상·협업 흐름에 AI 보조 레이어를 결합한 프로토타입',
      '핵심 액션(입장·요약·공유)을 전면 CTA로 배치해 온보딩을 짧게 유지',
    ],
  },
];

export const facilityCareers: Career[] = [
  {
    id: 'fac-001',
    category: 'facility',
    title: '원내 시설물 및 전산 통합 관리',
    company: '좋은아침병원',
    period: { start: '2024.07', end: 'present' },
    position: '관리팀 팀장',
    status: 'active',
    location: '경기',
    description: [
      '원내 시설물 및 전산 관리 총괄',
      '의료가스 안전 관리 및 점검',
      '각종 공사 프로젝트 매니지먼트',
    ],
    responsibilities: [
      '전기/기계 설비 유지보수 (125RT 냉온수기, 진공보일러)',
      '의료가스 안전관리 (산소, 진공, 압축공기)',
      '협력업체 관리 및 공사 감독',
      '전산 시스템 운영 관리',
    ],
  },
  {
    id: 'fac-002',
    category: 'facility',
    title: '병원 시설 및 자산 통합 관리',
    company: '호산여성병원',
    period: { start: '2024.03', end: '2024.06' },
    position: '차장/총무',
    status: 'completed',
    duration: '4개월',
    description: ['병원 내외부 자산관리', '외부 협력사 관리', '시설 및 전산 재구축'],
  },
  {
    id: 'fac-003',
    category: 'facility',
    title: '성형외과 시설 및 총무 업무',
    company: '디에이성형외과',
    period: { start: '2023.05', end: '2023.10' },
    position: '차장/팀장',
    status: 'completed',
    location: '서울',
    duration: '6개월',
    description: [
      '병원 내외부 자산관리',
      '의료장비 계약 및 구매',
      '의료소모품 조달 관리',
      '시설물 유지보수',
    ],
  },
  {
    id: 'fac-004',
    category: 'facility',
    title: '종합병원 시설관리 및 의료기기 관리',
    company: '세경의료재단 (새빛안과병원)',
    period: { start: '2019.02', end: '2023.05' },
    position: '관리팀 대리',
    status: 'completed',
    location: '경기 일산',
    duration: '4년 4개월',
    description: [
      '병원 시설 유지보수 총괄',
      '의료기기 시설 유지보수 및 업체 관리',
      '공사 PM 및 월 고정비용 정산',
      '전문병원인증평가 대응',
    ],
    achievements: ['전문병원인증평가 통과', '시설 유지보수 비용 15% 절감'],
  },
  {
    id: 'fac-005',
    category: 'facility',
    title: 'LG화학 파주공장 기숙사 관리',
    company: '프로에스콤',
    period: { start: '2011.11', end: '2016.12' },
    position: '주임 (4년차)',
    status: 'completed',
    location: '경기 파주',
    duration: '5년 2개월',
    description: [
      'LG화학 파주공장 기숙사 전기 및 기계설비 유지보수',
      '기숙사 임직원 인원 관리 (300명 규모)',
      '기숙사 주변 체육시설 및 환경 정비',
    ],
    endReason: '경영악화',
  },
];

export function getAllCareers(): Career[] {
  return [...developmentCareers, ...facilityCareers].sort((a, b) => {
    const aDate = parseCareerDate(a.period.end);
    const bDate = parseCareerDate(b.period.end);
    if (!aDate && !bDate) return 0;
    if (!aDate) return 1;
    if (!bDate) return -1;
    return bDate.getTime() - aDate.getTime();
  });
}

export function getCareersByCategory(category: 'development' | 'facility'): Career[] {
  return category === 'development' ? developmentCareers : facilityCareers;
}
