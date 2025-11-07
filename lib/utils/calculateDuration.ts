/**
 * 두 날짜 사이의 기간을 계산합니다.
 * @param start 시작 날짜 (형식: "YYYY.MM" 또는 "YYYY.MM.DD")
 * @param end 종료 날짜 (형식: "YYYY.MM" 또는 "YYYY.MM.DD" 또는 "present")
 * @returns 기간 문자열 (예: "2년 3개월", "6개월")
 */
export function calculateDuration(start: string, end: string | 'present'): string {
  // 날짜 형식 변환: "YYYY.MM" 또는 "YYYY.MM.DD" -> "YYYY-MM-DD"
  const parseDate = (dateStr: string): Date => {
    // 모든 점을 하이픈으로 치환
    const normalized = dateStr.replace(/\./g, '-');
    // "YYYY-MM" 형식인 경우 "-01"을 추가하여 "YYYY-MM-01"로 만듦
    const parts = normalized.split('-');
    if (parts.length === 2) {
      return new Date(`${parts[0]}-${parts[1]}-01`);
    }
    return new Date(normalized);
  };

  const startDate = parseDate(start);
  const endDate = end === 'present' ? new Date() : parseDate(end);
  
  // 날짜 유효성 검사
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    console.warn(`Invalid date format: start=${start}, end=${end}`);
    return '';
  }
  
  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();
  
  let totalMonths = years * 12 + months;
  
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

