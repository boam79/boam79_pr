import { Career } from '@/types/career';
import { parseCareerDate } from '@/lib/utils/date';
import { getGitHubRepoBrief } from '@/lib/data/github-repo-briefs';
import { extractReadmeBrief } from '@/lib/utils/readmeBrief';
import { compareCareerRecency } from '@/lib/utils/splitCareers';
import type { GitHubCareersPayload } from '@/types/github';

export const GITHUB_SYNC_REVALIDATE_SECONDS = 60;

export type { GitHubCareersPayload };

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  created_at: string;
  updated_at: string;
  pushed_at?: string;
  homepage: string | null;
  fork: boolean;
  topics?: string[];
  stargazers_count?: number;
}

const RECENT_ACTIVITY_DAYS = 30;
const EMPTY_DESCRIPTION = 'GitHub 설명이 아직 없습니다.';
const SYNC_NOTE = 'GitHub 최신 푸시 기준으로 자동 반영';

// This portfolio site's own repository should never show up as one of "my
// projects" on its own Experience page.
const EXCLUDED_REPO_NAMES = new Set(['boam79_pr']);

function githubHeaders(token?: string): HeadersInit {
  return {
    Accept: 'application/vnd.github+json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

function decodeBase64(content: string): string {
  const normalized = content.replace(/\s/g, '');
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(normalized, 'base64').toString('utf8');
  }
  return atob(normalized);
}

export async function fetchReadmeBrief(
  username: string,
  repoName: string,
  token?: string
): Promise<string | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repoName}/readme`,
      {
        headers: githubHeaders(token),
        next: { revalidate: GITHUB_SYNC_REVALIDATE_SECONDS },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as { content?: string };
    if (!data.content) {
      return null;
    }

    const brief = extractReadmeBrief(decodeBase64(data.content));
    return brief || null;
  } catch (error) {
    console.error('Failed to fetch GitHub README:', repoName, error);
    return null;
  }
}

function uniqueStack(values: Array<string | null | undefined>): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const value of values) {
    if (!value) continue;
    const key = value.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(value);
  }
  return result;
}

export function resolveGitHubDescription(
  repo: Pick<GitHubRepo, 'name' | 'description'>,
  readmeBrief?: string | null
): { title: string; summary: string; tags: string[] } {
  const brief = getGitHubRepoBrief(repo.name);
  const githubDescription = repo.description?.trim() || '';
  const summary =
    brief?.summary || githubDescription || readmeBrief?.trim() || EMPTY_DESCRIPTION;

  return {
    title: brief?.title || repo.name.replace(/[-_]/g, ' '),
    summary,
    tags: brief?.tags ?? [],
  };
}

export function mapGitHubRepoToCareer(
  repo: GitHubRepo,
  nowTimestamp = Date.now(),
  readmeBrief?: string | null
): Career {
  const startDate = new Date(repo.created_at);
  const activityDate = new Date(repo.pushed_at || repo.updated_at);
  const { title, summary, tags } = resolveGitHubDescription(repo, readmeBrief);

  const startStr = `${startDate.getUTCFullYear()}.${String(startDate.getUTCMonth() + 1).padStart(2, '0')}`;
  const endStr = `${activityDate.getUTCFullYear()}.${String(activityDate.getUTCMonth() + 1).padStart(2, '0')}`;

  const recentThreshold = nowTimestamp - RECENT_ACTIVITY_DAYS * 24 * 60 * 60 * 1000;
  const status: Career['status'] =
    activityDate.getTime() >= recentThreshold ? 'in-progress' : 'completed';

  return {
    id: `github-${repo.id}`,
    category: 'development',
    title,
    company: 'GitHub 공개 저장소',
    period: { start: startStr, end: status === 'in-progress' ? 'present' : endStr },
    position: 'Developer',
    status,
    summary,
    techStack: uniqueStack([repo.language, ...tags]),
    github: repo.html_url,
    demo: repo.homepage || undefined,
    repoName: repo.name,
    githubStars: repo.stargazers_count ?? 0,
    description: [summary, SYNC_NOTE],
    lastActivityAt: repo.pushed_at || repo.updated_at,
  };
}

function isValidCareerPeriod(career: Career): boolean {
  const start = parseCareerDate(career.period.start);
  const end = parseCareerDate(career.period.end);
  return Boolean(start && end && end.getTime() >= start.getTime());
}

export async function fetchGitHubRepos(username: string): Promise<Career[]> {
  try {
    const nowTimestamp = Date.now();
    const token = process.env.GITHUB_TOKEN;
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=100`,
      {
        headers: githubHeaders(token),
        next: { revalidate: GITHUB_SYNC_REVALIDATE_SECONDS },
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch GitHub repos:', response.statusText);
      return [];
    }

    const repos: GitHubRepo[] = await response.json();
    const originals = repos.filter(
      (repo) => !repo.fork && !EXCLUDED_REPO_NAMES.has(repo.name.toLowerCase())
    );

    const careers = await Promise.all(
      originals.map(async (repo) => {
        const resolved = resolveGitHubDescription(repo);
        const needsReadme = resolved.summary === EMPTY_DESCRIPTION;
        const readmeBrief = needsReadme
          ? await fetchReadmeBrief(username, repo.name, token)
          : null;
        return mapGitHubRepoToCareer(repo, nowTimestamp, readmeBrief);
      })
    );

    const now = Date.now();
    return careers.filter(isValidCareerPeriod).sort((a, b) => compareCareerRecency(a, b, now));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

export async function syncGitHubCareers(
  username: string
): Promise<GitHubCareersPayload> {
  const careers = await fetchGitHubRepos(username);
  return {
    careers,
    syncedAt: new Date().toISOString(),
    source: 'github',
  };
}
