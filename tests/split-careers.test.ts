import { describe, expect, it } from 'vitest';
import {
  splitDevelopmentCareers,
  filterCareersByStack,
  collectStackChips,
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
