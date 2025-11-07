'use client';

import { skillCategories, certifications } from '@/lib/data/skills';
import Card from '@/components/ui/Card';
import FadeInUp from '@/components/ui/FadeInUp';

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeInUp>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
              스킬
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 drop-shadow-md">
              개발 및 시설관리 역량을 확인하세요
            </p>
          </div>
        </FadeInUp>

        {/* Skills by Category */}
        <div className="space-y-16 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <FadeInUp key={category.category} delay={categoryIndex * 0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 drop-shadow-md">
                  {category.category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const percentage = (skill.level / 5) * 100;
                    return (
                      <FadeInUp key={skill.name} delay={categoryIndex * 0.1 + skillIndex * 0.05}>
                        <Card className="p-6 border-2 border-white/50 bg-white/90 backdrop-blur-md hover:border-blue-200 transition-colors shadow-xl">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-semibold text-lg text-gray-900">{skill.name}</span>
                            <span className="text-base text-gray-600">
                              {skill.level}/5
                              {skill.yearsOfExperience && ` (${skill.yearsOfExperience}년)`}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </Card>
                      </FadeInUp>
                    );
                  })}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* Certifications */}
        <FadeInUp delay={0.3}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 drop-shadow-md">자격증</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <FadeInUp key={cert.name} delay={0.3 + index * 0.05}>
                  <Card className="p-6 border-2 border-white/50 bg-white/90 backdrop-blur-md hover:border-blue-200 transition-colors shadow-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                    <p className="text-base text-gray-600 mb-2">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 mb-3">{cert.date}</p>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {cert.category === 'safety' && '안전'}
                      {cert.category === 'technical' && '기술'}
                      {cert.category === 'driving' && '운전'}
                    </span>
                  </Card>
                </FadeInUp>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}

