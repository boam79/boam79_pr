import { describe, expect, it, afterEach, vi } from 'vitest';
import { mapGitHubRepoToCareer, fetchGitHubRepos, resolveGitHubDescription } from '@/lib/github';

describe('resolveGitHubDescription', () => {
  it('uses the analyzed Korean brief when GitHub About is empty', () => {
    const resolved = resolveGitHubDescription({ name: 'hem', description: null });
    expect(resolved.title).toBe('Boardroom (hem)');
    expect(resolved.summary).toContain('경영회의');
  });

  it('falls back to README text when there is no catalog brief', () => {
    const resolved = resolveGitHubDescription(
      { name: 'brand_new_tool', description: null },
      'README에서 뽑은 한 줄 소개'
    );
    expect(resolved.summary).toBe('README에서 뽑은 한 줄 소개');
  });
});

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
        pushed_at: '2026-01-10T00:00:00.000Z',
        homepage: 'https://demo.example.com',
        fork: false,
      },
      now.getTime()
    );

    expect(career.status).toBe('in-progress');
    expect(career.period.end).toBe('present');
    expect(career.title).toBe('my sample repo');
    expect(career.summary).toBe('repo description');
    expect(career.company).toBe('GitHub 공개 저장소');
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
        pushed_at: '2024-04-01T00:00:00.000Z',
        homepage: null,
        fork: false,
      },
      now.getTime()
    );

    expect(career.status).toBe('completed');
    expect(career.period.end).toBe('2024.04');
    expect(career.description?.[0]).toBe('GitHub 설명이 아직 없습니다.');
  });

  it('prefers pushed_at over updated_at for recency', () => {
    const now = new Date('2026-01-15T00:00:00.000Z');
    const career = mapGitHubRepoToCareer(
      {
        id: 3,
        name: 'quiet-repo',
        description: 'still maintained in metadata only',
        html_url: 'https://github.com/example/quiet-repo',
        language: 'TypeScript',
        created_at: '2025-01-01T00:00:00.000Z',
        updated_at: '2026-01-14T00:00:00.000Z',
        pushed_at: '2025-06-01T00:00:00.000Z',
        homepage: null,
        fork: false,
      },
      now.getTime()
    );

    expect(career.status).toBe('completed');
    expect(career.period.end).toBe('2025.06');
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
        pushed_at: '2026-01-10T00:00:00.000Z',
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
        pushed_at: '2026-01-10T00:00:00.000Z',
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
        pushed_at: '2026-01-10T00:00:00.000Z',
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

  it('fetches README only when About and catalog are both empty', async () => {
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input);
      if (url.includes('/readme')) {
        return {
          ok: true,
          json: async () => ({
            content: Buffer.from('# New\n\nREADME에서 가져온 소개 문장입니다.\n').toString('base64'),
          }),
        };
      }

      return {
        ok: true,
        json: async () => [
          {
            id: 9,
            name: 'unknown_fresh_repo',
            description: null,
            html_url: 'https://github.com/boam79/unknown_fresh_repo',
            language: 'TypeScript',
            created_at: '2025-01-01T00:00:00.000Z',
            updated_at: '2026-01-10T00:00:00.000Z',
            pushed_at: '2026-01-10T00:00:00.000Z',
            homepage: null,
            fork: false,
          },
        ],
      };
    });

    vi.stubGlobal('fetch', fetchMock);

    const careers = await fetchGitHubRepos('boam79');

    expect(careers[0].summary).toBe('README에서 가져온 소개 문장입니다.');
    expect(fetchMock.mock.calls.some((call) => String(call[0]).includes('/readme'))).toBe(true);
  });
});
