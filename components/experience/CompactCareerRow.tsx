import { Career } from '@/types/career';
import { formatDate } from '@/lib/utils/formatDate';
import { Github, ExternalLink } from 'lucide-react';

interface CompactCareerRowProps {
  career: Career;
}

export default function CompactCareerRow({ career }: CompactCareerRowProps) {
  const blurb = career.summary || career.description?.[0];

  return (
    <article className="flex h-full min-h-[15.5rem] w-[min(18.75rem,82vw)] shrink-0 snap-start flex-col border border-zinc-200 bg-white p-5 sm:w-full sm:min-w-0">
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400">
        <span className="tabular-nums">
          {formatDate(career.period.start)} – {formatDate(career.period.end)}
        </span>
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-zinc-900">
        {career.title}
      </h3>
      {blurb && (
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-600">{blurb}</p>
      )}
      {career.techStack && career.techStack.length > 0 && (
        <p className="mt-3 text-xs text-zinc-500">{career.techStack.slice(0, 3).join(' · ')}</p>
      )}
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-zinc-100 pt-3">
        {career.demo && (
          <a
            href={career.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-800 hover:underline"
          >
            <ExternalLink size={14} aria-hidden />
            Demo
          </a>
        )}
        {career.github && (
          <a
            href={career.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-900"
          >
            <Github size={14} aria-hidden />
            Code
          </a>
        )}
      </div>
    </article>
  );
}
