import type { Career } from '@/types/career';
import CompactCareerRow from '@/components/experience/CompactCareerRow';

interface GitHubRepoGridProps {
  careers: Career[];
  pending?: boolean;
  label?: string;
}

export default function GitHubRepoGrid({
  careers,
  pending = false,
  label = 'GitHub 공개 저장소',
}: GitHubRepoGridProps) {
  return (
    <div
      className={`github-repo-scroller -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 ${
        pending ? 'opacity-70' : ''
      }`}
      role="list"
      aria-label={label}
    >
      {careers.map((career) => (
        <div key={career.id} role="listitem" className="h-full">
          <CompactCareerRow career={career} />
        </div>
      ))}
    </div>
  );
}
