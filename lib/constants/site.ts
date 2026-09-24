const DEFAULT_SITE_URL = 'https://boam79.vercel.app';

export const CONTACT_EMAIL = 'ckadltmfxhrxhrxhr@gmail.com';

export const SITE_TAGLINE =
  '21년 헬스케어 시설·운영 경험을 디지털 도구와 AI 개발로 잇는 포트폴리오';

export const SITE_DIRECTION =
  '병원·시설 현장에서 반복되는 일을 화면·데이터·AI 도구로 바꿉니다. 최근 축은 병원 운영 분석, 경영회의 AI 시뮬레이터, 공공데이터·지원사업 MCP입니다.';

export const SITE_AI_BUILT =
  '이 사이트와 GitHub 공개 프로젝트는 Cursor 등 AI 코딩 에이전트와 함께 기획부터 구현·검증까지 만들었습니다.';

function normalizeSiteUrl(url: string): string {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (!envUrl) {
    return DEFAULT_SITE_URL;
  }

  return normalizeSiteUrl(envUrl);
}
