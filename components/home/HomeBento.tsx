'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { routes } from '@/lib/constants/routes';
import { pageContainerClass } from '@/lib/constants/layout';
import { CONTACT_EMAIL, SITE_AI_BUILT, SITE_TAGLINE } from '@/lib/constants/site';
import { githubVisuals, type GitHubVisual } from '@/lib/data/github-visuals';
import { skillCategories } from '@/lib/data/skills';
import { useGitHubCareers } from '@/lib/hooks/useGitHubCareers';
import { ArrowRight, Github, Mail, Star } from 'lucide-react';

const tileClass =
  'flex h-full min-h-[12rem] flex-col overflow-hidden rounded-2xl border border-line bg-white';

function VisualTile({
  visual,
  imagePriority = false,
}: {
  visual: GitHubVisual;
  imagePriority?: boolean;
}) {
  return (
    <article className={tileClass}>
      {visual.image ? (
        <div className="relative h-36 overflow-hidden bg-surface sm:h-40 lg:h-44">
          <Image
            src={visual.image}
            alt={`${visual.title} 실제 화면`}
            fill
            priority={imagePriority}
            className="object-cover object-top"
            sizes="(min-width: 768px) 66vw, 100vw"
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 bg-surface p-3">
          {visual.highlights.map((item) => (
            <p
              key={item}
              className="flex items-center justify-center rounded-xl border border-line bg-white px-2 py-3 text-center text-sm font-medium text-ink"
            >
              {item}
            </p>
          ))}
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
          {visual.repo}
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-ink">
          {visual.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-ink-secondary">{visual.summary}</p>
        {visual.image ? (
          <p className="mt-3 text-xs leading-5 text-ink-muted">{visual.highlights.join(' · ')}</p>
        ) : (
          <p className="mt-3 text-xs leading-5 text-ink-muted">{visual.imageCredit}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {visual.demo ? (
            <a
              href={visual.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent-ink hover:underline"
            >
              사이트
            </a>
          ) : null}
          <a
            href={visual.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-ink-secondary hover:text-ink"
          >
            <Github className="h-3.5 w-3.5" aria-hidden />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default function HomeBento() {
  const { careers, isLoading, error } = useGitHubCareers();
  const repoCount = careers.length;
  const recent = careers.slice(0, 3);
  const starred = [...careers]
    .filter((career) => (career.githubStars ?? 0) > 0)
    .sort((a, b) => (b.githubStars ?? 0) - (a.githubStars ?? 0))
    .slice(0, 3);
  const codingSkills = skillCategories[0]?.skills.slice(0, 3) ?? [];
  const [companyFlow, boardroom, patient] = githubVisuals;

  return (
    <section className="border-b border-line bg-surface py-10 md:py-14" aria-label="대표 작업">
      <div className={pageContainerClass}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-medium text-ink-muted">{SITE_AI_BUILT}</p>
          <p className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-accent-ink">
            AI와 함께 구현
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          <article className={`${tileClass} p-6 md:col-span-2 md:p-8`}>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-ink">
              Healthcare × Frontend
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Boam79
            </h1>
            <p className="mt-4 text-xl font-medium leading-snug text-ink-body">
              병원 현장 → 디지털 도구
            </p>
            <p className="mt-3 max-w-md text-sm leading-6 text-ink-secondary md:text-base">
              {SITE_TAGLINE}
            </p>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <Button href={routes.experience} size="md">
                대표작 보기 <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href={routes.projects} variant="secondary" size="md">
                프로젝트
              </Button>
            </div>
          </article>

          {companyFlow ? (
            <div className="md:col-span-4">
              <VisualTile visual={companyFlow} imagePriority />
            </div>
          ) : null}

          {boardroom ? (
            <div className="md:col-span-4">
              <VisualTile visual={boardroom} />
            </div>
          ) : null}

          {patient ? (
            <div className="md:col-span-2">
              <VisualTile visual={patient} />
            </div>
          ) : null}

          <article className={`${tileClass} p-5 md:col-span-2`}>
            <p className="flex items-center gap-2 text-sm font-medium text-ink">
              <Github className="h-4 w-4" aria-hidden />
              GitHub 공개 저장소
            </p>
            <p className="mt-3 font-display text-3xl font-semibold tabular-nums text-ink" aria-busy={isLoading}>
              {isLoading ? '—' : repoCount}
              <span className="ml-1 text-base font-medium text-ink-muted">개</span>
            </p>
            <p className="mt-1 text-xs text-ink-muted">boam79_pr 포트폴리오 리포는 제외</p>
            {error ? <p className="mt-3 text-sm text-ink-secondary">{error}</p> : null}
            <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
              {recent.map((career) => (
                <li key={career.id} className="truncate">
                  {career.title}
                </li>
              ))}
            </ul>
            {starred.length > 0 ? (
              <ul className="mt-4 space-y-1 text-xs text-ink-muted">
                {starred.map((career) => (
                  <li key={`star-${career.id}`} className="flex items-center justify-between gap-2">
                    <span className="truncate">{career.title}</span>
                    <span className="inline-flex items-center gap-1 tabular-nums">
                      <Star className="h-3 w-3" aria-hidden />
                      {career.githubStars}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
            <Link
              href={routes.experience}
              className="mt-auto pt-4 text-sm font-medium text-accent-ink hover:underline"
            >
              경력에서 최신 순 보기
            </Link>
          </article>

          <article className={`${tileClass} p-5 md:col-span-2`}>
            <p className="text-sm font-medium text-ink">개발 스킬</p>
            <ul className="mt-4 space-y-3">
              {codingSkills.map((skill) => (
                <li key={skill.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-medium text-ink">{skill.name}</span>
                    <span className="tabular-nums text-ink-muted">{skill.level}/5</span>
                  </div>
                  <div className="h-1.5 overflow-hidden bg-line-subtle">
                    <div
                      className="h-full bg-accent"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                      aria-hidden
                    />
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href={routes.skills}
              className="mt-auto pt-4 text-sm font-medium text-accent-ink hover:underline"
            >
              스킬 전체
            </Link>
          </article>

          <article className={`${tileClass} p-5 md:col-span-2`}>
            <p className="text-sm font-medium text-ink">연락하기</p>
            <p className="mt-3 text-sm leading-6 text-ink-secondary">
              협업·채용 문의는 폼이나 이메일로 남겨 주세요.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
            >
              <Mail className="h-4 w-4 text-ink-muted" aria-hidden />
              {CONTACT_EMAIL}
            </a>
            <div className="mt-auto pt-5">
              <Button href={`${routes.contact}#contact-form`} size="sm">
                이메일 보내기
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
