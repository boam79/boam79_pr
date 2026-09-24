import { Career } from '@/types/career';
import Badge from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils/formatDate';
import { calculateDuration } from '@/lib/utils/calculateDuration';
import { Calendar, Github, ExternalLink } from 'lucide-react';

interface FeaturedCareerProps {
  career: Career;
  index?: number;
}

const statusLabels = {
  active: '재직중',
  completed: '완료',
  'in-progress': '진행중',
} as const;

export default function FeaturedCareer({ career, index = 0 }: FeaturedCareerProps) {
  const duration = career.duration || calculateDuration(career.period.start, career.period.end);
  const lead = career.summary || career.description?.[0];
  const points = (career.description ?? []).filter((line) => line !== lead);
  const rank = String(index + 1).padStart(2, '0');

  return (
    <article className="flex h-full min-h-[28rem] w-[min(26rem,88vw)] shrink-0 snap-start flex-col border border-zinc-200 border-l-[3px] border-l-teal-700 bg-white p-8 lg:w-full lg:min-w-0 lg:p-9">
      <div className="flex items-start justify-between gap-3">
        <p className="font-display text-sm font-semibold tabular-nums tracking-[0.18em] text-teal-800">
          {rank}
        </p>
        {career.status && (
          <Badge variant={career.status}>{statusLabels[career.status]}</Badge>
        )}
      </div>

      <h3 className="mt-5 font-display text-[1.7rem] font-semibold leading-snug tracking-tight text-zinc-900 md:text-[1.85rem]">
        {career.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-zinc-500">
        {career.company} · {career.position}
      </p>

      {lead && (
        <p className="mt-6 text-[1.125rem] leading-8 text-zinc-800">{lead}</p>
      )}

      {points.length > 0 && (
        <ul className="mt-5 space-y-3">
          {points.map((desc) => (
            <li key={desc} className="flex gap-3 text-base leading-7 text-zinc-600">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" aria-hidden />
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-6">
        <p className="inline-flex items-center gap-1.5 text-sm text-zinc-500">
          <Calendar size={15} aria-hidden />
          {formatDate(career.period.start)} ~ {formatDate(career.period.end)}
          {duration ? ` · ${duration}` : ''}
        </p>

        {career.techStack && career.techStack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {career.techStack.map((tech) => (
              <span
                key={tech}
                className="border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-zinc-100 pt-4">
          {career.demo && (
            <a
              href={career.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-medium text-teal-800 underline decoration-teal-300 underline-offset-4 hover:decoration-teal-600"
            >
              <ExternalLink size={17} aria-hidden />
              사이트 보기
            </a>
          )}
          {career.github && (
            <a
              href={career.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base text-zinc-600 hover:text-zinc-900"
            >
              <Github size={17} aria-hidden />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
