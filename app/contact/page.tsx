'use client';

import Card from '@/components/ui/Card';
import FadeInUp from '@/components/ui/FadeInUp';
import { Mail, Github, MessageCircle, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeInUp>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 drop-shadow-lg">
              연락하기
            </h1>
            <p className="text-xl text-gray-700 drop-shadow-md">
              프로젝트 협업이나 채용 문의를 환영합니다
            </p>
          </div>
        </FadeInUp>

        <div className="max-w-2xl mx-auto">
          <FadeInUp delay={0.1}>
            <Card className="bg-white/90 backdrop-blur-md border-2 border-white/50 shadow-xl">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">연락처 정보</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <span className="text-gray-700">
                    ckadltmfxhrxhrxhr@gmail.com
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">소셜 미디어</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/boam79"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                      aria-label="GitHub"
                    >
                      <Github size={24} />
                      <span className="text-sm font-medium text-gray-700">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jae-min-park-8b475720a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-2"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} className="text-blue-600" />
                      <span className="text-sm font-medium text-blue-700">LinkedIn</span>
                    </a>
                    <a
                      href="https://www.threads.net/@jijijijijjijijijijijijij300?hl=ko"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                      aria-label="Threads"
                    >
                      <MessageCircle size={24} />
                      <span className="text-sm font-medium text-gray-700">Threads</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
