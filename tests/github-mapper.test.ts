import { describe, expect, it } from 'vitest';
import { mapGitHubRepoToCareer } from '@/lib/github';

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
