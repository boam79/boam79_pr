import { describe, expect, it } from 'vitest';
import {
  splitDevelopmentCareers,
  filterCareersByStack,
  collectStackChips,
  mergeGitHubCareers,
} from '@/lib/utils/splitCareers';
import type { Career } from '@/types/career';

const base = (overrides: Partial<Career> & Pick<Career, 'id' | 'title'>): Career => ({
  category: 'development',
  company: '개인 프로젝트',
  period: { start: '2025.08', end: 'present' },
  position: 'Full-stack Developer',
  ...overrides,
});

describe('splitDevelopmentCareers', () => {
  it('featured 플래그 항목을 Featured로 분리한다', () => {
    const careers = [
      base({ id: 'a', title: 'A', featured: true }),
      base({ id: 'b', title: 'B' }),
      base({ id: 'c', title: 'C', featured: true }),
    ];
    const { featured, rest } = splitDevelopmentCareers(careers);
    expect(featured.map((c) => c.id)).toEqual(['a', 'c']);
    expect(rest.map((c) => c.id)).toEqual(['b']);
  });

  it('More builds는 최근 푸시 순으로 정렬한다', () => {
    const careers = [
      base({
        id: 'finder',
        title: 'finder',
        lastActivityAt: '2026-04-19T05:17:20.000Z',
      }),
      base({
        id: 'featured',
        title: 'featured',
        featured: true,
        lastActivityAt: '2025-11-16T00:00:00.000Z',
      }),
      base({
        id: 'companyflow',
        title: 'companyflow',
        lastActivityAt: '2026-09-24T00:11:57.000Z',
      }),
      base({
        id: 'hem',
        title: 'hem',
        lastActivityAt: '2026-09-14T12:25:10.000Z',
      }),
    ];
    const { featured, rest } = splitDevelopmentCareers(careers);
    expect(featured.map((c) => c.id)).toEqual(['featured']);
    expect(rest.map((c) => c.id)).toEqual(['companyflow', 'hem', 'finder']);
  });

  it('featuredIds로 보완한다', () => {
    const careers = [base({ id: 'x', title: 'X' }), base({ id: 'y', title: 'Y' })];
    const { featured, rest } = splitDevelopmentCareers(careers, ['y']);
    expect(featured.map((c) => c.id)).toEqual(['y']);
    expect(rest.map((c) => c.id)).toEqual(['x']);
  });
});

describe('filterCareersByStack', () => {
  it('스택이 null이면 전체를 반환한다', () => {
    const careers = [base({ id: 'a', title: 'A', techStack: ['Next.js'] })];
    expect(filterCareersByStack(careers, null)).toHaveLength(1);
  });

  it('부분 일치로 필터한다', () => {
    const careers = [
      base({ id: 'a', title: 'A', techStack: ['Next.js', 'TypeScript'] }),
      base({ id: 'b', title: 'B', techStack: ['Python'] }),
    ];
    expect(filterCareersByStack(careers, 'next').map((c) => c.id)).toEqual(['a']);
  });
});

describe('collectStackChips', () => {
  it('빈도 순으로 칩을 반환한다', () => {
    const careers = [
      base({ id: 'a', title: 'A', techStack: ['TypeScript', 'Next.js'] }),
      base({ id: 'b', title: 'B', techStack: ['TypeScript'] }),
      base({ id: 'c', title: 'C', techStack: ['Python'] }),
    ];
    expect(collectStackChips(careers, 2)).toEqual(['TypeScript', 'Next.js']);
  });
});

describe('mergeGitHubCareers', () => {
  it('dedupes by GitHub URL even when titles differ', () => {
    const staticCareers = [
      base({
        id: 'dev-002',
        title: '의료비 비교 시스템',
        github: 'https://github.com/boam79/noncorverd',
      }),
    ];
    const githubCareers = [
      base({
        id: 'github-1',
        title: '의료기관 비급여 비교',
        github: 'https://github.com/boam79/noncorverd',
      }),
      base({
        id: 'github-2',
        title: 'CompanyFlow',
        github: 'https://github.com/boam79/companyflow',
      }),
    ];

    const merged = mergeGitHubCareers(staticCareers, githubCareers);
    expect(merged.map((c) => c.id)).toEqual(['dev-002', 'github-2']);
  });

  it('lists GitHub extras from the latest push, not metadata-updated repos', () => {
    const staticCareers = [
      base({
        id: 'dev-old',
        title: '금융 계산기',
        github: 'https://github.com/boam79/salary_cal',
        period: { start: '2025.10', end: 'present' },
      }),
    ];
    const githubCareers = [
      base({
        id: 'github-finder',
        title: '공공데이터 API Finder',
        github: 'https://github.com/boam79/public-data-api-finder',
        lastActivityAt: '2026-04-19T05:17:20.000Z',
      }),
      base({
        id: 'github-companyflow',
        title: 'CompanyFlow',
        github: 'https://github.com/boam79/companyflow',
        lastActivityAt: '2026-09-24T00:11:57.000Z',
      }),
      base({
        id: 'github-hem',
        title: 'Boardroom (hem)',
        github: 'https://github.com/boam79/hem',
        lastActivityAt: '2026-09-14T12:25:10.000Z',
      }),
      base({
        id: 'github-salary',
        title: '금융 계산기',
        github: 'https://github.com/boam79/salary_cal',
        lastActivityAt: '2026-04-12T11:09:04.000Z',
      }),
    ];

    const merged = mergeGitHubCareers(staticCareers, githubCareers);
    expect(merged.map((c) => c.id)).toEqual([
      'github-companyflow',
      'github-hem',
      'github-finder',
      'dev-old',
    ]);
    expect(merged.find((c) => c.id === 'dev-old')?.lastActivityAt).toBe(
      '2026-04-12T11:09:04.000Z'
    );
  });
});
