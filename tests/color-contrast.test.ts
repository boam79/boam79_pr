import { describe, expect, it } from 'vitest';
import { palette } from '@/lib/constants/colors';
import { contrastRatio } from '@/lib/utils/contrast';

const WCAG_AA_NORMAL = 4.5;
const WCAG_AA_LARGE = 3;
const WCAG_AAA_NORMAL = 7;

describe('palette contrast', () => {
  it('본문·캡션은 흰 바탕에서 AA 이상을 유지한다', () => {
    expect(contrastRatio(palette.ink, palette.page)).toBeGreaterThanOrEqual(WCAG_AAA_NORMAL);
    expect(contrastRatio(palette.inkBody, palette.page)).toBeGreaterThanOrEqual(WCAG_AAA_NORMAL);
    expect(contrastRatio(palette.inkSecondary, palette.page)).toBeGreaterThanOrEqual(WCAG_AAA_NORMAL);
    expect(contrastRatio(palette.inkMuted, palette.page)).toBeGreaterThanOrEqual(WCAG_AA_NORMAL);
    expect(contrastRatio(palette.inkPlaceholder, palette.page)).toBeGreaterThanOrEqual(WCAG_AA_NORMAL);
  });

  it('작은 캡션(inkMuted)은 예전 zinc-400/#fafafa보다 뚜렷하다', () => {
    const previous = contrastRatio('#a1a1aa', '#fafafa');
    const next = contrastRatio(palette.inkMuted, palette.page);
    expect(previous).toBeLessThan(WCAG_AA_NORMAL);
    expect(next).toBeGreaterThan(previous);
    expect(next).toBeGreaterThanOrEqual(WCAG_AA_NORMAL);
  });

  it('다크 푸터·문의 섹션 본문은 AA를 넘긴다', () => {
    expect(contrastRatio(palette.onDark, palette.footer)).toBeGreaterThanOrEqual(WCAG_AAA_NORMAL);
    expect(contrastRatio(palette.onDarkMuted, palette.footer)).toBeGreaterThanOrEqual(WCAG_AA_NORMAL);
  });

  it('액센트는 흰 바탕 본문·큰 글자 기준을 넘긴다', () => {
    expect(contrastRatio(palette.accentInk, palette.page)).toBeGreaterThanOrEqual(WCAG_AA_NORMAL);
    expect(contrastRatio(palette.accent, palette.page)).toBeGreaterThanOrEqual(WCAG_AA_LARGE);
  });
});
