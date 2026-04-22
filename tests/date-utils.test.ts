import { describe, expect, it } from 'vitest';
import { compareCareerEndDates, parseCareerDate } from '@/lib/utils/date';

describe('parseCareerDate', () => {
  it('parses YYYY.MM format', () => {
    const date = parseCareerDate('2024.08');
    expect(date).not.toBeNull();
    expect(date?.getUTCFullYear()).toBe(2024);
    expect(date?.getUTCMonth()).toBe(7);
    expect(date?.getUTCDate()).toBe(1);
  });

  it('parses present as current date', () => {
    const now = new Date('2026-01-01T00:00:00.000Z');
    const date = parseCareerDate('present', now);
    expect(date?.toISOString()).toBe(now.toISOString());
  });

  it('returns null for invalid date', () => {
    expect(parseCareerDate('2024.02.31')).toBeNull();
    expect(parseCareerDate('2024/08')).toBeNull();
  });
});

describe('compareCareerEndDates', () => {
  it('sorts present before older dates', () => {
    const result = compareCareerEndDates('present', '2024.12');
    expect(result).toBeLessThan(0);
  });

  it('sorts latest year-month first', () => {
    const result = compareCareerEndDates('2025.01', '2024.12');
    expect(result).toBeLessThan(0);
  });
});
