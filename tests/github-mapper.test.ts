import { describe, expect, it, afterEach, vi } from 'vitest';
import { mapGitHubRepoToCareer, fetchGitHubRepos } from '@/lib/github';

describe('mapGitHubRepoToCareer', () => {
  it('maps recent repository activity to in-progress career', () => {
    const now = new Date('2026-01-15T00:00:00.000Z');
    const career = mapGitHubRepoToCareer(
      {
        id: 1,
        name: 'my_sample_repo',
        description: 'repo description',
        html_url: 'https://github.com/example/my_sample_repo',
        language: 'TypeScript',
        created_at: '2025-01-01T00:00:00.000Z',
        updated_at: '2026-01-10T00:00:00.000Z',
        homepage: 'https://demo.example.com',
        fork: false,
      },
      now.getTime()
    );

    expect(career.status).toBe('in-progress');
    expect(career.period.end).toBe('present');
    expect(career.title).toBe('my sample repo');
    expect(career.techStack).toEqual(['TypeScript']);
  });

  it('maps stale repository activity to completed career', () => {
    const now = new Date('2026-01-15T00:00:00.000Z');
    const career = mapGitHubRepoToCareer(
      {
        id: 2,
        name: 'legacy-tool',
        description: null,
        html_url: 'https://github.com/example/legacy-tool',
        language: null,
        created_at: '2024-03-01T00:00:00.000Z',
        updated_at: '2024-04-01T00:00:00.000Z',
        homepage: null,
        fork: false,
      },
      now.getTime()
    );

    expect(career.status).toBe('completed');
    expect(career.period.end).toBe('2024.04');
    expect(career.description?.[0]).toBe('No description provided.');
  });
});

describe('fetchGitHubRepos', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('excludes forks and the portfolio site\'s own repository', async () => {
    const repos = [
      {
        id: 1,
        name: 'boam79_pr',
        description: 'This portfolio site itself',
        html_url: 'https://github.com/boam79/boam79_pr',
        language: 'TypeScript',
        created_at: '2025-01-01T00:00:00.000Z',
        updated_at: '2026-01-10T00:00:00.000Z',
        homepage: null,
        fork: false,
      },
      {
        id: 2,
        name: 'forked-repo',
        description: 'A fork, not an original project',
        html_url: 'https://github.com/boam79/forked-repo',
        language: 'JavaScript',
        created_at: '2025-01-01T00:00:00.000Z',
        updated_at: '2026-01-10T00:00:00.000Z',
        homepage: null,
        fork: true,
      },
      {
        id: 3,
        name: 'real_side_project',
        description: 'A genuine side project',
        html_url: 'https://github.com/boam79/real_side_project',
        language: 'TypeScript',
        created_at: '2025-01-01T00:00:00.000Z',
        updated_at: '2026-01-10T00:00:00.000Z',
        homepage: null,
        fork: false,
      },
    ];

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => repos,
      })
    );

    const careers = await fetchGitHubRepos('boam79');

    expect(careers).toHaveLength(1);
    expect(careers[0].title).toBe('real side project');
  });
});
