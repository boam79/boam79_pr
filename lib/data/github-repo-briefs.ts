export type GitHubRepoBrief = {
  title: string;
  summary: string;
  tags?: string[];
};

/**
 * GitHub About가 비어 있는 공개 저장소를 README 기준으로 분석한 한 줄 소개.
 * 키는 저장소 이름을 소문자로 정규화합니다.
 */
export const githubRepoBriefs: Record<string, GitHubRepoBrief> = {
  companyflow: {
    title: 'CompanyFlow',
    summary: '한국 기업용, 회사별 맞춤 업무관리 웹앱',
    tags: ['Next.js', 'TypeScript'],
  },
  'public-data-api-finder': {
    title: '공공데이터 API Finder',
    summary: '공공데이터포털 API를 자연어로 찾아 주는 MCP 서버',
    tags: ['MCP', 'TypeScript'],
  },
  hem: {
    title: 'Boardroom (hem)',
    summary: '병원 경영 지표로 AI 3인이 임원 역할 토론하는 경영회의 시뮬레이터',
    tags: ['Next.js', 'AI'],
  },
  property_management: {
    title: 'QR 자산관리',
    summary: 'QR 라벨로 비품·IT 자산을 등록·조회하는 자산관리 앱',
    tags: ['Next.js', 'Supabase'],
  },
  inventory_control: {
    title: '스프링의원 재고관리',
    summary: '의료소모품을 오프라인에서 다루는 Windows 재고 프로그램',
    tags: ['C#', '.NET'],
  },
  doculenslocal: {
    title: 'DocuLens Local',
    summary: 'PDF 본문·스캔 OCR을 PC 안에서만 검색하는 로컬 문서 검색기',
    tags: ['C#', 'Avalonia'],
  },
  'meet-bot': {
    title: 'Meet Bot',
    summary: '회의 보조를 위한 Swift 앱 프로토타입',
    tags: ['Swift'],
  },
  gov_support_mcp: {
    title: '정부지원사업 MCP',
    summary: '지원사업 탐색·자격·신청 준비를 자연어로 돕는 MCP 서버',
    tags: ['MCP', 'TypeScript'],
  },
  noncorverd: {
    title: '의료기관 비급여 비교',
    summary: '전국 병원 비급여 수가를 검색·비교하는 웹서비스',
    tags: ['Next.js', 'TypeScript'],
  },
  patient_analysis: {
    title: '병원 CRM · 환자 데이터 분석',
    summary: '방문·질병·수술 데이터로 병원 운영 인사이트를 보는 대시보드',
    tags: ['Next.js', 'TypeScript'],
  },
  sunpath_shadow_simulator: {
    title: 'SunPath Shadow Simulator',
    summary: '위치·날짜 기준 일조량과 그림자 경로를 시각화하는 시뮬레이터',
    tags: ['Next.js', 'TypeScript'],
  },
  'chongmu-wiki': {
    title: '총무위키',
    summary: '카카오톡 오픈채팅을 파싱해 위키로 만드는 총무 지식 허브',
    tags: ['Next.js', 'Supabase'],
  },
  law_twin: {
    title: 'LawTwin',
    summary: '자연어 상황으로 관련 법령과 검토 체크리스트를 보여주는 앱',
    tags: ['Next.js', 'AI'],
  },
  policy_fund: {
    title: '지원둥지',
    summary: '정부지원사업을 검색·매칭하고 신청 문서를 만드는 웹서비스',
    tags: ['Next.js', 'TypeScript'],
  },
  'depreciation-mcp': {
    title: '감가상각 MCP',
    summary: '법인세법 기준 내용연수·감가상각 참고값을 주는 MCP 서버',
    tags: ['MCP', 'TypeScript'],
  },
  salary_cal: {
    title: '금융 계산기',
    summary: '연봉·세금·부동산·대출을 한곳에서 계산하는 금융 유틸리티',
    tags: ['JavaScript'],
  },
  ai_interview: {
    title: 'AI 음성 면접',
    summary: 'AI 면접관과 음성으로 연습하는 면접 시뮬레이터',
    tags: ['TypeScript', 'AI'],
  },
  naver_map_geocoding: {
    title: '환자 주소 분석',
    summary: '환자 주소를 지오코딩해 지도 히트맵과 리포트로 보여주는 도구',
    tags: ['Next.js', 'TypeScript'],
  },
  prom_hub: {
    title: 'PromHub',
    summary: 'AI 프롬프트를 사고파는 마켓플레이스',
    tags: ['Next.js', 'Supabase'],
  },
  ai_meet: {
    title: 'AI 회의록',
    summary: '음성을 전사하고 GPT로 회의록을 자동 생성하는 웹앱',
    tags: ['Next.js', 'AI'],
  },
  'youtube-sum': {
    title: 'YouTube 요약기',
    summary: '유튜브 영상을 웹훅으로 보내 AI 요약을 받는 크롬 확장',
    tags: ['JavaScript'],
  },
  'stock-information-visualization': {
    title: '주식 정보 시각화',
    summary: '네이버 금융 데이터로 종목을 조회·시각화하는 대시보드',
    tags: ['Python'],
  },
  'coin-dashborad': {
    title: '암호화폐 대시보드',
    summary: '업비트 시세로 암호화폐를 분석하는 클라이언트 대시보드',
    tags: ['HTML'],
  },
};

export function getGitHubRepoBrief(repoName: string): GitHubRepoBrief | undefined {
  return githubRepoBriefs[repoName.toLowerCase()];
}
