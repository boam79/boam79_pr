/** 대표작/경력에서 라이브 사이트 링크를 만들지 않는 GitHub 저장소 이름 */
export const REPOS_WITHOUT_LIVE_SITE = new Set(['hem']);

export function githubRepoSlug(
  repoOrUrl: string | null | undefined
): string | undefined {
  if (!repoOrUrl) return undefined;
  return repoOrUrl.split('/').filter(Boolean).pop()?.toLowerCase();
}

export function omitsLiveSiteLink(
  repoOrUrl: string | null | undefined
): boolean {
  const slug = githubRepoSlug(repoOrUrl);
  return Boolean(slug && REPOS_WITHOUT_LIVE_SITE.has(slug));
}
