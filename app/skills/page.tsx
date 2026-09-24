'use client';

import { skillCategories, certifications } from '@/lib/data/skills';
import FadeInUp from '@/components/ui/FadeInUp';
import PageHeader from '@/components/ui/PageHeader';
import { pageContainerClass } from '@/lib/constants/layout';

const certLabels = {
  safety: '안전',
  technical: '기술',
  driving: '운전',
} as const;

export default function SkillsPage() {
  return (
    <div className="min-h-screen border-t border-line bg-page">
      <div className={`${pageContainerClass} py-16 lg:py-20`}>
        <FadeInUp>
          <PageHeader title="스킬" description="개발 · 시설 · 자격. 현장에서 쓰는 것만 적습니다." />
        </FadeInUp>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <FadeInUp key={category.category} delay={categoryIndex * 0.05}>
              <div>
                <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                  {category.category}
                </h2>
                <ul className="mt-5 divide-y divide-line border-y border-line">
                  {category.skills.map((skill) => {
                    const percentage = (skill.level / 5) * 100;
                    return (
                      <li key={skill.name} className="py-4">
                        <div className="mb-2 flex items-baseline justify-between gap-3">
                          <span className="text-sm font-medium text-ink">{skill.name}</span>
                          <span className="shrink-0 text-xs tabular-nums text-ink-muted">
                            {skill.level}/5
                            {skill.yearsOfExperience ? ` · ${skill.yearsOfExperience}년` : ''}
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden bg-line-subtle">
                          <div
                            className="h-full bg-accent"
                            style={{ width: `${percentage}%` }}
                            aria-hidden
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.2}>
          <div className="mt-16 border-t border-line pt-14">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">자격증</h2>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{cert.name}</h3>
                    <p className="mt-1 text-xs text-ink-secondary">{cert.issuer}</p>
                  </div>
                  <p className="shrink-0 text-xs tabular-nums text-ink-muted">
                    {cert.date}
                    <span className="ml-2 text-ink-muted">{certLabels[cert.category]}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
