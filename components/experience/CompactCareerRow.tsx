import { Career } from '@/types/career';
import { formatDate } from '@/lib/utils/formatDate';
import { Github, ExternalLink } from 'lucide-react';

interface CompactCareerRowProps {
  career: Career;
}

export default function CompactCareerRow({ career }: CompactCareerRowProps) {
  const blurb = career.summary || career.description?.[0];

  return (
    <article className="flex h-full min-h-[15.5rem] w-[min(18.75rem,82vw)] shrink-0 snap-start flex-col border border-line bg-white p-5 transition-colors hover:border-ink-muted hover:bg-surface/70 sm:w-full sm:min-w-0">
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
        <span className="tabular-nums">
          {formatDate(career.period.start)} – {formatDate(career.period.end)}
        </span>
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">
        {career.title}
      </h3>
      {blurb && (
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-secondary">{blurb}</p>
      )}
      {career.techStack && career.techStack.length > 0 && (
        <p className="mt-3 text-xs text-ink-muted">{career.techStack.slice(0, 3).join(' · ')}</p>
      )}
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-line-subtle pt-3">
        {career.demo && (
          <a
            href={career.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-ink hover:underline"
          >
            <ExternalLink size={14} aria-hidden />
            사이트
          </a>
        )}
        {career.github && (
          <a
            href={career.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-ink-secondary hover:text-ink"
          >
            <Github size={14} aria-hidden />
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
