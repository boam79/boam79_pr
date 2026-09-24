import { AlertCircle, Loader2, Github } from 'lucide-react';

interface GitHubSyncStatusProps {
  isLoading: boolean;
  error: string | null;
  syncedAt: string | null;
  count?: number;
}

function formatSyncedAt(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('ko-KR', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Seoul',
  }).format(date);
}

export default function GitHubSyncStatus({
  isLoading,
  error,
  syncedAt,
  count,
}: GitHubSyncStatusProps) {
  if (isLoading) {
    return (
      <p className="flex items-center gap-2 text-xs text-ink-muted" role="status">
        <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
        GitHub 최신 공개 저장소 동기화 중
      </p>
    );
  }

  if (error) {
    return (
      <p className="flex items-start gap-2 text-xs text-amber-800" role="alert">
        <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
        {error}
      </p>
    );
  }

  const when = syncedAt ? formatSyncedAt(syncedAt) : null;

  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-muted">
      <Github className="h-3.5 w-3.5 shrink-0" aria-hidden />
      <span>
        GitHub 최신 푸시 순으로 반영
        {typeof count === 'number' ? ` · ${count}개` : ''}
        {when ? ` · ${when}` : ''}
      </span>
    </p>
  );
}
