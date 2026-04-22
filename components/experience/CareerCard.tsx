import { Career } from '@/types/career';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils/formatDate';
import { calculateDuration } from '@/lib/utils/calculateDuration';
import { MapPin, Calendar, Github, ExternalLink } from 'lucide-react';

interface CareerCardProps {
  career: Career;
}

export default function CareerCard({ career }: CareerCardProps) {
  const statusLabels = {
    active: '재직중',
    completed: '완료',
    'in-progress': '진행중',
  };

  const duration = career.duration || calculateDuration(career.period.start, career.period.end);

  // 개발 경력이고 demo URL이 있는 경우에만 클릭 가능하게
  const isClickable = career.category === 'development' && career.demo;

  const handleClick = () => {
    if (isClickable && career.demo) {
      window.open(career.demo, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card 
      hover 
      className={`relative ${isClickable ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 flex items-center gap-2">
                {career.title}
                {isClickable && <ExternalLink size={16} className="text-zinc-400" aria-hidden />}
              </h3>
              <p className="mt-1 text-sm text-zinc-600">{career.company}</p>
              <p className="text-sm text-zinc-500">{career.position}</p>
            </div>
            {career.status && (
              <Badge variant={career.status}>
                {statusLabels[career.status]}
              </Badge>
            )}
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-zinc-500">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>
                {formatDate(career.period.start)} ~ {formatDate(career.period.end)}
              </span>
              {duration && <span className="ml-2">({duration})</span>}
            </div>
            {career.location && (
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{career.location}</span>
              </div>
            )}
          </div>

          {career.description && career.description.length > 0 && (
            <div className="mb-4">
              <ul className="space-y-2">
                {career.description.map((desc, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-zinc-700">
                    <span className="mt-0.5 text-zinc-400">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {career.responsibilities && career.responsibilities.length > 0 && (
            <div className="mb-4">
              <h4 className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500">주요 업무</h4>
              <ul className="space-y-1">
                {career.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-zinc-600">
                    <span className="mt-0.5 text-zinc-300">-</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {career.achievements && career.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500">성과</h4>
              <ul className="space-y-1">
                {career.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-zinc-700">
                    <span className="mt-0.5 text-zinc-400">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {career.techStack && career.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {career.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs text-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-4 mt-4">
            {career.demo && (
              <a
                href={career.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500"
              >
                <ExternalLink size={16} />
                <span>사이트 보기</span>
              </a>
            )}
            {career.github && (
              <a
                href={career.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900"
              >
                <Github size={16} />
                <span>GitHub 리포지토리</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

