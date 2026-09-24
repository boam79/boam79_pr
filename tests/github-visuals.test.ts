import { existsSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { githubVisuals } from '@/lib/data/github-visuals';
import { githubRepoBriefs } from '@/lib/data/github-repo-briefs';
import { developmentCareers } from '@/lib/data/careers';
import { splitDevelopmentCareers } from '@/lib/utils/splitCareers';

describe('github visuals for home bento', () => {
  it('대표작 순서와 GitHub 저장소 이름이 실제 경력 데이터와 같다', () => {
    const featuredIds = splitDevelopmentCareers(developmentCareers).featured.map((career) => career.id);
    expect(githubVisuals.map((visual) => visual.careerId)).toEqual(featuredIds);
    expect(githubVisuals.map((visual) => visual.repo)).toEqual([
      'companyflow',
      'hem',
      'patient_analysis',
    ]);
  });

  it('제목·한 줄 소개는 GitHub README 카탈로그를 쓴다', () => {
    for (const visual of githubVisuals) {
      const brief = githubRepoBriefs[visual.repo];
      expect(brief).toBeDefined();
      expect(visual.title).toBe(brief.title);
      expect(visual.summary).toBe(brief.summary);
      expect(visual.github).toBe(`https://github.com/boam79/${visual.repo}`);
    }
  });

  it('목업 KPI·가짜 병원·가짜 칸반을 넣지 않는다', () => {
    const blob = JSON.stringify(githubVisuals);
    expect(blob).not.toMatch(/99\.2|청담서울|칸반|kanban/i);
  });

  it('스크린샷 파일이 있는 리포만 이미지를 연결한다', () => {
    for (const visual of githubVisuals) {
      if (!visual.image) continue;
      const file = path.join(process.cwd(), 'public', visual.image.replace(/^\//, ''));
      expect(existsSync(file), file).toBe(true);
    }
  });

  it('patient_analysis는 저장소에 UI 이미지가 없고 배포도 없으므로 스크린샷·사이트 링크를 만들지 않는다', () => {
    const patient = githubVisuals.find((visual) => visual.repo === 'patient_analysis');
    expect(patient?.image).toBeNull();
    expect(patient?.demo).toBeUndefined();
    expect(patient?.highlights).toEqual(['재방문 분석', '공간 분석', '질병 분석', '수술 분석']);
  });
});
