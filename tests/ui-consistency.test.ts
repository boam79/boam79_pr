import { describe, expect, it } from 'vitest';
import { pageContainerClass, readingContainerClass } from '@/lib/constants/layout';
import { skillCategories } from '@/lib/data/skills';
import { splitDevelopmentCareers } from '@/lib/utils/splitCareers';
import { developmentCareers } from '@/lib/data/careers';
import { githubVisuals } from '@/lib/data/github-visuals';

describe('layout containers', () => {
  it('본문과 헤더가 같은 최대 너비를 쓴다', () => {
    expect(pageContainerClass).toContain('max-w-6xl');
    expect(readingContainerClass).toContain('max-w-3xl');
  });
});

describe('skills copy', () => {
  it('카테고리 이름을 한글로 둔다', () => {
    expect(skillCategories.map((c) => c.category)).toEqual(['개발', '시설관리', 'AI · 데이터']);
  });
});

describe('home featured works', () => {
  it('홈에 올릴 대표작 순서가 경력 페이지와 같다', () => {
    expect(splitDevelopmentCareers(developmentCareers).featured.map((c) => c.id)).toEqual([
      'dev-companyflow',
      'dev-hem',
      'dev-001',
    ]);
  });

  it('홈 벤토도 같은 대표작을 GitHub 화면으로 보여 준다', () => {
    expect(githubVisuals.map((visual) => visual.careerId)).toEqual([
      'dev-companyflow',
      'dev-hem',
      'dev-001',
    ]);
  });

  it('홈 스킬 타일은 실제 개발 스킬 레벨을 쓴다', () => {
    expect(skillCategories[0]?.skills.slice(0, 3).map((skill) => [skill.name, skill.level])).toEqual([
      ['Next.js', 4],
      ['TypeScript', 4],
      ['Python', 3],
    ]);
  });
});
