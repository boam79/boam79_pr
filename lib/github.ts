import { Career } from '@/types/career';
import { parseCareerDate } from '@/lib/utils/date';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  created_at: string;
  updated_at: string;
  homepage: string | null;
  fork: boolean;
}

const RECENT_ACTIVITY_DAYS = 30;

export function mapGitHubRepoToCareer(repo: GitHubRepo, nowTimestamp = Date.now()): Career {
  const startDate = new Date(repo.created_at);
  const endDate = new Date(repo.updated_at);

  const startStr = `${startDate.getUTCFullYear()}.${String(startDate.getUTCMonth() + 1).padStart(2, '0')}`;
  const endStr = `${endDate.getUTCFullYear()}.${String(endDate.getUTCMonth() + 1).padStart(2, '0')}`;

  const recentThreshold = nowTimestamp - RECENT_ACTIVITY_DAYS * 24 * 60 * 60 * 1000;
  const status: Career['status'] = endDate.getTime() >= recentThreshold ? 'in-progress' : 'completed';

  return {
    id: `github-${repo.id}`,
    category: 'development',
    title: repo.name.replace(/[-_]/g, ' '),
    company: 'Personal Project (GitHub)',
    period: { start: startStr, end: status === 'in-progress' ? 'present' : endStr },
    position: 'Developer',
    status,
    techStack: repo.language ? [repo.language] : [],
    github: repo.html_url,
    demo: repo.homepage || undefined,
    description: [repo.description || 'No description provided.', 'Automatically fetched from GitHub'],
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
      `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        next: { revalidate: 60 * 30 },
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch GitHub repos:', response.statusText);
      return [];
    }

    const repos: GitHubRepo[] = await response.json();

    return repos
      .filter((repo) => !repo.fork)
      .map((repo) => mapGitHubRepoToCareer(repo, nowTimestamp))
      .filter(isValidCareerPeriod);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}
