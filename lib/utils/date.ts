export type CareerDateInput = string | 'present';

function buildDate(year: number, month = 1, day = 1): Date {
  return new Date(Date.UTC(year, month - 1, day));
}

export function parseCareerDate(input: CareerDateInput, now = new Date()): Date | null {
  if (input === 'present') {
    return now;
  }

  const normalized = input.trim();
  const match = normalized.match(/^(\d{4})(?:\.(\d{1,2}))?(?:\.(\d{1,2}))?$/);
  if (!match) {
    return null;
  }

  const year = Number(match[1]);
  const month = match[2] ? Number(match[2]) : 1;
  const day = match[3] ? Number(match[3]) : 1;

  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return null;
  }

  const parsed = buildDate(year, month, day);

  // Reject overflow dates like 2024.02.31.
  if (
    parsed.getUTCFullYear() !== year ||
    parsed.getUTCMonth() !== month - 1 ||
    parsed.getUTCDate() !== day
  ) {
    return null;
  }

  return parsed;
}

export function compareCareerDatesDesc(a: CareerDateInput, b: CareerDateInput): number {
  const parsedA = parseCareerDate(a);
  const parsedB = parseCareerDate(b);

  if (!parsedA && !parsedB) return 0;
  if (!parsedA) return 1;
  if (!parsedB) return -1;

  return parsedB.getTime() - parsedA.getTime();
}

export const compareCareerEndDates = compareCareerDatesDesc;
