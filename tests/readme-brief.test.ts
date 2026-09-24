import { describe, expect, it } from 'vitest';
import { extractReadmeBrief } from '@/lib/utils/readmeBrief';

describe('extractReadmeBrief', () => {
  it('takes the first meaningful paragraph after a heading', () => {
    const markdown = `# Title

한국 기업용 회사별 맞춤형 업무관리 웹앱.

## Local
`;
    expect(extractReadmeBrief(markdown)).toBe(
      '한국 기업용 회사별 맞춤형 업무관리 웹앱.'
    );
  });

  it('uses a long blockquote when there is no other paragraph', () => {
    const markdown = `# 금융 계산기

> 연봉, 세금, 부동산, 대출 등 다양한 금융 계산을 한 곳에서!
`;
    expect(extractReadmeBrief(markdown)).toContain('연봉, 세금, 부동산');
  });

  it('truncates long text with an ellipsis', () => {
    const markdown = `A`.repeat(200);
    const brief = extractReadmeBrief(markdown, 40);
    expect(brief.endsWith('…')).toBe(true);
    expect(brief.length).toBe(40);
  });

  it('returns empty string when there is no prose', () => {
    expect(extractReadmeBrief('# Only a title\n\n```ts\nconst x = 1\n```\n')).toBe('');
  });
});
