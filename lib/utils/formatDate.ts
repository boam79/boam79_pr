export function formatDate(date: string | 'present'): string {
  if (date === 'present') return '현재';
  return date;
}

// calculateDuration은 lib/utils/calculateDuration.ts로 이동되었습니다.
// 중복을 피하기 위해 여기서는 제거합니다.

