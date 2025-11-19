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
      className={`relative ${isClickable ? 'cursor-pointer' : ''} h-full`}
      onClick={handleClick}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-1 flex items-center gap-2">
                {career.title}
                {isClickable && (
                  <ExternalLink size={16} className="text-blue-600" />
                )}
              </h3>
              <p className="text-lg text-gray-700 mb-2">{career.company}</p>
              <p className="text-base text-gray-600">{career.position}</p>
            </div>
            {career.status && (
              <Badge variant={career.status}>
                {statusLabels[career.status]}
              </Badge>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
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
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {career.responsibilities && career.responsibilities.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">주요 업무</h4>
              <ul className="space-y-1">
                {career.responsibilities.map((resp, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400 mt-1">-</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {career.achievements && career.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-green-700 mb-2">주요 성과</h4>
              <ul className="space-y-1">
                {career.achievements.map((achievement, index) => (
                  <li key={index} className="text-sm text-green-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
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
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
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
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
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
                className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
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

