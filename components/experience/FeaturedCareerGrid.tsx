import type { Career } from '@/types/career';
import FeaturedCareer from '@/components/experience/FeaturedCareer';

interface FeaturedCareerGridProps {
  careers: Career[];
}

export default function FeaturedCareerGrid({ careers }: FeaturedCareerGridProps) {
  return (
    <div
      className="github-repo-scroller -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-3 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0"
      role="list"
      aria-label="대표작"
    >
      {careers.map((career, index) => (
        <div key={career.id} role="listitem" className="h-full">
          <FeaturedCareer career={career} index={index} />
        </div>
      ))}
    </div>
  );
}
