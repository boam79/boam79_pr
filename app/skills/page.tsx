'use client';

import { skillCategories, certifications } from '@/lib/data/skills';
import Card from '@/components/ui/Card';
import FadeInUp from '@/components/ui/FadeInUp';

export default function SkillsPage() {
  return (
    <div className="min-h-screen border-t border-zinc-200/80 bg-[#fafafa]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:px-8 lg:max-w-4xl">
        <FadeInUp>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">스킬</h1>
          <p className="mt-2 text-sm text-zinc-600">개발 · 시설 · 자격</p>
        </FadeInUp>

        <div className="mt-12 space-y-14">
          {skillCategories.map((category, categoryIndex) => (
            <FadeInUp key={category.category} delay={categoryIndex * 0.05}>
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">{category.category}</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {category.skills.map((skill) => {
                    const percentage = (skill.level / 5) * 100;
                    return (
                      <Card key={skill.name} className="p-4 shadow-none">
                        <div className="mb-2 flex items-baseline justify-between gap-2">
                          <span className="text-sm font-medium text-zinc-900">{skill.name}</span>
                          <span className="shrink-0 text-xs text-zinc-500">
                            {skill.level}/5
                            {skill.yearsOfExperience && ` · ${skill.yearsOfExperience}년`}
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200">
                          <div
                            className="h-full rounded-full bg-zinc-800"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.2}>
          <div className="mt-16 border-t border-zinc-200 pt-14">
            <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">자격증</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <Card key={cert.name} className="p-4 shadow-none">
                  <h3 className="text-sm font-semibold text-zinc-900">{cert.name}</h3>
                  <p className="mt-1 text-xs text-zinc-600">{cert.issuer}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{cert.date}</p>
                  <p className="mt-2 text-xs text-zinc-500">
                    {cert.category === 'safety' && '안전'}
                    {cert.category === 'technical' && '기술'}
                    {cert.category === 'driving' && '운전'}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
