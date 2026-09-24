/**
 * 홈 벤토에 쓰는 화면은 GitHub 공개 저장소(또는 그 homepage 배포)에서만 가져온다.
 * 목업용 가짜 칸반·KPI·인물 사진은 넣지 않는다.
 */
export type GitHubVisual = {
  repo: string;
  careerId: string;
  title: string;
  summary: string;
  github: string;
  demo?: string;
  /** public/ 기준. 저장소에 스크린샷이 없으면 null */
  image: string | null;
  imageCredit: string;
  highlights: string[];
};

export const githubVisuals: GitHubVisual[] = [
  {
    repo: 'companyflow',
    careerId: 'dev-companyflow',
    title: 'CompanyFlow',
    summary: '한국 기업용, 회사별 맞춤 업무관리 웹앱',
    github: 'https://github.com/boam79/companyflow',
    demo: 'https://companyflow-opal.vercel.app',
    image: '/github-visuals/companyflow-home.jpg',
    imageCredit:
      'github.com/boam79/companyflow 배포 홈. 히어로 사진은 저장소 public/home/origin.jpg',
    highlights: ['회사별 지정 PC 업무 원본', '구매·재고 · 자산 · 계약 · 회사 설정'],
  },
  {
    repo: 'hem',
    careerId: 'dev-hem',
    title: 'Boardroom (hem)',
    summary: '병원 경영 지표로 AI 3인이 임원 역할 토론하는 경영회의 시뮬레이터',
    github: 'https://github.com/boam79/hem',
    demo: 'https://boardroom-six-delta.vercel.app',
    image: '/github-visuals/hem-boardroom-ui.jpg',
    imageCredit:
      'github.com/boam79/hem 배포 홈. CFO·마케터·의료진 캐릭터는 저장소 디자인 에셋',
    highlights: ['CFO · 마케터 · 의료진', '회의록 · 지표 대시보드 · AI 인사이트'],
  },
  {
    repo: 'patient_analysis',
    careerId: 'dev-001',
    title: '병원 CRM · 환자 데이터 분석',
    summary: '방문·질병·수술 데이터로 병원 운영 인사이트를 보는 대시보드',
    github: 'https://github.com/boam79/patient_analysis',
    image: null,
    imageCredit:
      '저장소 public/에는 CSV만 있고 UI 스크린샷이 없음. README 분석 축만 표시',
    highlights: ['재방문 분석', '공간 분석', '질병 분석', '수술 분석'],
  },
];

export function getGitHubVisual(careerId: string): GitHubVisual | undefined {
  return githubVisuals.find((item) => item.careerId === careerId);
}
