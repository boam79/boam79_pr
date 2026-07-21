import { Career } from '@/types/career';
import { formatDate } from '@/lib/utils/formatDate';
import { Github, ExternalLink } from 'lucide-react';

interface CompactCareerRowProps {
  career: Career;
}

export default function CompactCareerRow({ career }: CompactCareerRowProps) {
  const blurb = career.summary || career.description?.[0];

  return (
    <article className="group grid gap-3 border-b border-zinc-200 py-5 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6">
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-base font-semibold text-zinc-900 group-hover:text-teal-800">
            {career.title}
          </h3>
          <span className="text-xs tabular-nums text-zinc-500">
            {formatDate(career.period.start)} ~ {formatDate(career.period.end)}
          </span>
        </div>
        {blurb && <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{blurb}</p>}
        {career.techStack && career.techStack.length > 0 && (
          <p className="mt-2.5 text-xs text-zinc-500">
            {career.techStack.slice(0, 4).join(' · ')}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:justify-end">
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
