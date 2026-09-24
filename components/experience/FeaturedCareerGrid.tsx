'use client';

import { useRef, useState } from 'react';
import type { Career } from '@/types/career';
import FeaturedCareer from '@/components/experience/FeaturedCareer';

interface FeaturedCareerGridProps {
  careers: Career[];
}

export default function FeaturedCareerGrid({ careers }: FeaturedCareerGridProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = scrollerRef.current;
    const first = el?.querySelector<HTMLElement>('[data-featured-item]');
    if (!el || !first || careers.length === 0) return;
    const styles = window.getComputedStyle(el);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 24;
    const stride = first.getBoundingClientRect().width + gap;
    const index = Math.round(el.scrollLeft / stride);
    setActive(Math.min(careers.length - 1, Math.max(0, index)));
  };

  const scrollTo = (index: number) => {
    const el = scrollerRef.current;
    const item = el?.querySelectorAll<HTMLElement>('[data-featured-item]')[index];
    item?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

  return (
    <div>
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="github-repo-scroller -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-3 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0"
        role="list"
        aria-label="대표작"
      >
        {careers.map((career, index) => (
          <div key={career.id} role="listitem" data-featured-item className="h-full">
            <FeaturedCareer career={career} index={index} />
          </div>
        ))}
      </div>
      {careers.length > 1 && (
        <div className="mt-4 flex justify-center gap-2 lg:hidden" role="group" aria-label="대표작 위치">
          {careers.map((career, index) => (
            <button
              key={career.id}
              type="button"
              aria-label={`${index + 1}번째 대표작, ${career.title}`}
              aria-current={index === active ? 'true' : undefined}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === active ? 'bg-accent' : 'bg-ink-muted hover:bg-ink-secondary'
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
