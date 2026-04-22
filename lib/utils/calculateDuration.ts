import { parseCareerDate } from '@/lib/utils/date';

/**
 * 두 날짜 사이의 기간을 계산합니다.
 * @param start 시작 날짜 (형식: "YYYY.MM" 또는 "YYYY.MM.DD")
 * @param end 종료 날짜 (형식: "YYYY.MM" 또는 "YYYY.MM.DD" 또는 "present")
 * @returns 기간 문자열 (예: "2년 3개월", "6개월")
 */
export function calculateDuration(start: string, end: string | 'present'): string {
  const startDate = parseCareerDate(start);
  const endDate = end === 'present' ? new Date() : parseCareerDate(end);

  // 날짜 유효성 검사
  if (!startDate || !endDate) {
    console.warn(`Invalid date format: start=${start}, end=${end}`);
    return '';
  }

  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();

  const totalMonths = years * 12 + months;

  // 종료일이 시작일보다 이전인 경우
  if (totalMonths < 0) {
    return '';
  }

  if (totalMonths < 12) {
    return `${totalMonths}개월`;
  }

  const y = Math.floor(totalMonths / 12);
  const m = totalMonths % 12;

  if (m === 0) {
    return `${y}년`;
  }

  return `${y}년 ${m}개월`;
}

