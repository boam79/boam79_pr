import { describe, expect, it, afterEach } from 'vitest';
import { calculateDuration } from '@/lib/utils/calculateDuration';

describe('calculateDuration', () => {
  it('returns months for periods under a year', () => {
    expect(calculateDuration('2024.03', '2024.09')).toBe('6개월');
  });

  it('returns years for whole-year periods', () => {
    expect(calculateDuration('2020.01', '2022.01')).toBe('2년');
  });

  it('returns years and months for mixed periods', () => {
    expect(calculateDuration('2019.02', '2023.05')).toBe('4년 3개월');
  });

  it('returns empty string for invalid input', () => {
    expect(calculateDuration('invalid', '2024.01')).toBe('');
  });

  it('returns empty string when end predates start', () => {
    expect(calculateDuration('2024.06', '2024.01')).toBe('');
  });

  describe('timezone independence', () => {
    const originalTz = process.env.TZ;

    afterEach(() => {
      process.env.TZ = originalTz;
    });

    // Regression test: parseCareerDate anchors "YYYY.MM" dates at UTC midnight
    // on the 1st. Reading them back with local getters (getFullYear/getMonth)
    // instead of UTC getters used to roll the 1st-of-month date back into the
    // previous month for any negative-UTC-offset timezone, while day-specific
    // dates (no month-boundary crossing) were unaffected — silently skewing
    // the computed duration by a month. This runs client-side (CareerCard),
    // so it depends on each visitor's local timezone, not the server's.
    it('matches the UTC-computed duration across offsets', () => {
      process.env.TZ = 'Pacific/Kiritimati'; // UTC+14
      const eastResult = calculateDuration('2024.01', '2024.03.15');

      process.env.TZ = 'Etc/GMT+12'; // UTC-12
      const westResult = calculateDuration('2024.01', '2024.03.15');

      expect(eastResult).toBe('2개월');
      expect(westResult).toBe('2개월');
    });
  });
});
