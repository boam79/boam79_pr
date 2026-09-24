import { describe, expect, it } from 'vitest';
import {
  experienceTabHref,
  parseExperienceTab,
  readExperienceTabFromSearch,
} from '@/lib/utils/experienceTab';

describe('parseExperienceTab', () => {
  it('시설관리 쿼리만 facility로 본다', () => {
    expect(parseExperienceTab('facility')).toBe('facility');
    expect(parseExperienceTab('development')).toBe('development');
    expect(parseExperienceTab(null)).toBe('development');
    expect(parseExperienceTab('')).toBe('development');
  });
});

describe('experienceTabHref', () => {
  it('개발 탭 주소를 만든다', () => {
    expect(experienceTabHref('development')).toBe('/experience?tab=development');
  });

  it('시설관리에서 개발로 바꿀 때 기존 tab을 덮어쓴다', () => {
    expect(experienceTabHref('development', 'tab=facility')).toBe(
      '/experience?tab=development'
    );
  });

  it('다른 쿼리는 유지한다', () => {
    const href = experienceTabHref('facility', 'stack=Next.js');
    const params = new URLSearchParams(href.split('?')[1]);
    expect(params.get('tab')).toBe('facility');
    expect(params.get('stack')).toBe('Next.js');
  });
});

describe('readExperienceTabFromSearch', () => {
  it('현재 주소에서 탭을 읽는다', () => {
    expect(readExperienceTabFromSearch('?tab=facility')).toBe('facility');
    expect(readExperienceTabFromSearch('tab=development')).toBe('development');
  });
});
