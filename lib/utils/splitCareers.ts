import type { Career } from '@/types/career';
import { compareCareerEndDates } from '@/lib/utils/date';

/**
 * 개발 경력을 Featured / More builds 로 나눕니다.
 * featured === true 인 항목을 우선하고, 없으면 featuredIds 로 보완합니다.
 */
export function splitDevelopmentCareers(
  careers: Career[],
  featuredIds: string[] = []
): { featured: Career[]; rest: Career[] } {
  const featuredSet = new Set(
    careers
      .filter((c) => c.featured || featuredIds.includes(c.id))
      .map((c) => c.id)
  );

  // featured 플래그 항목을 원본 배열 순서 유지
  const featured = careers.filter((c) => featuredSet.has(c.id));
  const rest = careers.filter((c) => !featuredSet.has(c.id));

  return { featured, rest };
}

/** 스택 칩 필터 — 대소문자 무시, 부분 일치 */
export function filterCareersByStack(careers: Career[], stack: string | null): Career[] {
  if (!stack) return careers;
  const needle = stack.toLowerCase();
  return careers.filter((c) =>
    (c.techStack ?? []).some((t) => t.toLowerCase().includes(needle))
  );
}

/** 경력 목록에서 유니크 스택 칩 추출 (빈도 높은 순) */
export function collectStackChips(careers: Career[], limit = 8): string[] {
  const counts = new Map<string, number>();
  for (const career of careers) {
    for (const tech of career.techStack ?? []) {
      counts.set(tech, (counts.get(tech) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([name]) => name);
}

function normalizeTitle(title: string): string {
  return title.toLowerCase().replace(/[-_\s]+/g, ' ').trim();
}

function isSameGitHubCareer(staticCareer: Career, githubCareer: Career): boolean {
  if (staticCareer.github && githubCareer.github && staticCareer.github === githubCareer.github) {
    return true;
  }

  if (!staticCareer.title || !githubCareer.title) {
    return false;
  }

  return normalizeTitle(staticCareer.title) === normalizeTitle(githubCareer.title);
}

/** 정적 경력과 GitHub에서 가져온 최신 공개 저장소를 합칩니다. */
export function mergeGitHubCareers(
  staticCareers: Career[],
  githubCareers: Career[]
): Career[] {
  const extras = githubCareers.filter(
    (repo) => !staticCareers.some((staticCareer) => isSameGitHubCareer(staticCareer, repo))
  );

  return [...staticCareers, ...extras].sort((a, b) =>
    compareCareerEndDates(a.period.end, b.period.end)
  );
}
