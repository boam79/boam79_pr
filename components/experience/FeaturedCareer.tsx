import { Career } from '@/types/career';
import Badge from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils/formatDate';
import { calculateDuration } from '@/lib/utils/calculateDuration';
import { Calendar, Github, ExternalLink } from 'lucide-react';

interface FeaturedCareerProps {
  career: Career;
}

const statusLabels = {
  active: '재직중',
  completed: '완료',
  'in-progress': '진행중',
} as const;

export default function FeaturedCareer({ career }: FeaturedCareerProps) {
  const duration = career.duration || calculateDuration(career.period.start, career.period.end);

  return (
    <article className="relative overflow-hidden border-b border-zinc-200 pb-10 last:border-b-0 last:pb-0">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-600/40 to-transparent"
        aria-hidden
      />

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-700">Featured</p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
            {career.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-500">
            {career.company} · {career.position}
          </p>
        </div>
        {career.status && (
          <Badge variant={career.status}>{statusLabels[career.status]}</Badge>
        )}
      </div>

      {(career.summary || career.description?.[0]) && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-700">
          {career.summary || career.description?.[0]}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
        <span className="inline-flex items-center gap-1.5">
          <Calendar size={14} aria-hidden />
          {formatDate(career.period.start)} ~ {formatDate(career.period.end)}
          {duration ? ` · ${duration}` : ''}
        </span>
      </div>

      {career.description && career.description.length > 1 && (
        <ul className="mt-5 space-y-2">
          {career.description.slice(1).map((desc) => (
            <li key={desc} className="flex gap-2 text-sm leading-relaxed text-zinc-600">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-600" aria-hidden />
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      )}

      {career.techStack && career.techStack.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {career.techStack.map((tech) => (
            <span
              key={tech}
              className="border border-zinc-200 bg-zinc-50/80 px-2.5 py-1 text-xs font-medium text-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-4">
        {career.demo && (
          <a
            href={career.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-800 underline decoration-teal-300 underline-offset-4 hover:decoration-teal-600"
          >
            <ExternalLink size={16} aria-hidden />
            사이트 보기
          </a>
        )}
        {career.github && (
          <a
            href={career.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900"
          >
            <Github size={16} aria-hidden />
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
