'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FadeInUp from '@/components/ui/FadeInUp';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // EmailJS 설정값 (환경변수 또는 하드코딩)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      // 환경변수가 설정되지 않은 경우 개발 모드에서는 콘솔 경고만 표시
      if (!serviceId || !templateId || !publicKey) {
        console.warn('EmailJS 환경변수가 설정되지 않았습니다. 개발 모드에서는 시뮬레이션만 실행됩니다.');
        // 개발 모드: 실제 전송 없이 성공 시뮬레이션
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          setFormData({ name: '', email: '', company: '', type: '', message: '' });
          setTimeout(() => setSubmitStatus('idle'), 5000);
        }, 1000);
        return;
      }

      // EmailJS로 이메일 전송
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || '없음',
        inquiry_type: formData.type 
          ? (formData.type === 'recruitment' ? '채용 문의' 
            : formData.type === 'collaboration' ? '프로젝트 협업' 
            : '기타')
          : '미선택',
        message: formData.message,
        to_email: 'ckadltmfxhrxhrxhr@gmail.com', // 수신자 이메일
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', type: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('이메일 전송 실패:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage('이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <FadeInUp delay={0.1}>
            <div className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-md border-2 border-white/50 shadow-xl">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">연락처 정보</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-600" size={20} />
                    <a 
                      href="mailto:ckadltmfxhrxhrxhr@gmail.com"
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      ckadltmfxhrxhrxhr@gmail.com
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">소셜 미디어</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/boam79"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="https://linkedin.com/in/jaemin-park"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </FadeInUp>

          {/* Contact Form */}
          <FadeInUp delay={0.2}>
            <Card className="bg-white/90 backdrop-blur-md border-2 border-white/50 shadow-xl">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">문의하기</h2>
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">문의가 전송되었습니다. 곧 연락드리겠습니다.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">{errorMessage || '이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.'}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    회사명
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                    문의 유형
                  </label>
                  <select
                    id="type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">선택하세요</option>
                    <option value="recruitment">채용 문의</option>
                    <option value="collaboration">프로젝트 협업</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    메시지 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? '전송 중...' : '전송하기'}
                </Button>
              </form>
            </Card>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}

