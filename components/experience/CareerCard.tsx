import { Career } from '@/types/career';
import Badge from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils/formatDate';
import { calculateDuration } from '@/lib/utils/calculateDuration';
import { MapPin, Calendar, Github, ExternalLink, Building2 } from 'lucide-react';

interface CareerCardProps {
  career: Career;
}

const statusLabels = {
  active: '재직중',
  completed: '완료',
  'in-progress': '진행중',
} as const;

/** 시설 경력(또는 레거시)용 — 전체 카드 onClick 없음, 링크만 명시 */
export default function CareerCard({ career }: CareerCardProps) {
  const duration = career.duration || calculateDuration(career.period.start, career.period.end);

  return (
    <article className="border-l-2 border-l-teal-600 bg-white py-1 pl-5">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center bg-teal-50 text-teal-700">
              <Building2 size={16} aria-hidden />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">{career.title}</h3>
              <p className="mt-1 text-sm text-zinc-600">{career.company}</p>
              <p className="text-sm text-zinc-500">{career.position}</p>
            </div>
          </div>
          {career.status && <Badge variant={career.status}>{statusLabels[career.status]}</Badge>}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-1">
            <Calendar size={14} aria-hidden />
            <span>
              {formatDate(career.period.start)} ~ {formatDate(career.period.end)}
            </span>
            {duration && <span className="ml-1">({duration})</span>}
          </div>
          {career.location && (
            <div className="flex items-center gap-1">
              <MapPin size={14} aria-hidden />
              <span>{career.location}</span>
            </div>
          )}
        </div>

        {career.description && career.description.length > 0 && (
          <ul className="space-y-2">
            {career.description.map((desc) => (
              <li key={desc} className="flex items-start gap-2 text-sm text-zinc-700">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" aria-hidden />
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        )}

        {career.responsibilities && career.responsibilities.length > 0 && (
          <div>
            <h4 className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500">주요 업무</h4>
            <ul className="space-y-1">
              {career.responsibilities.map((resp) => (
                <li key={resp} className="flex items-start gap-2 text-sm text-zinc-600">
                  <span className="mt-0.5 text-zinc-300">-</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {career.achievements && career.achievements.length > 0 && (
          <div>
            <h4 className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500">성과</h4>
            <ul className="space-y-1">
              {career.achievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-2 text-sm text-zinc-700">
                  <span className="mt-0.5 text-teal-600" aria-hidden>
                    ✓
                  </span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {career.techStack && career.techStack.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-2">
            {career.techStack.map((tech) => (
              <span
                key={tech}
                className="border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs text-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          {career.demo && (
            <a
              href={career.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500"
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
              GitHub 리포지토리
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
