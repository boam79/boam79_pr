'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [isEmailJSReady, setIsEmailJSReady] = useState(false);
  const hasInitialized = useRef(false); // React Strict Mode에서 중복 실행 방지

  // EmailJS 초기화 및 설정 확인
  useEffect(() => {
    // 이미 초기화되었으면 실행하지 않음 (React Strict Mode 대응)
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      // EmailJS 초기화 (v4.x에서는 선택사항이지만 안정성을 위해 추가)
      try {
        emailjs.init(publicKey);
        setIsEmailJSReady(true);
      } catch (error) {
        console.warn('EmailJS 초기화 실패:', error);
        setIsEmailJSReady(false);
      }
    } else {
      // 개발 모드에서만 콘솔 경고 표시 (프로덕션에서는 표시하지 않음)
      if (process.env.NODE_ENV === 'development') {
        console.warn('EmailJS 환경변수가 설정되지 않았습니다. 개발 모드에서는 시뮬레이션만 실행됩니다.');
      }
      setIsEmailJSReady(false);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // 입력값 검증
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage('필수 항목을 모두 입력해주세요.');
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
      return;
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage('올바른 이메일 주소를 입력해주세요.');
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
      return;
    }

    try {
      // EmailJS 설정값 (환경변수)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      // 환경변수가 설정되지 않은 경우 개발 모드에서는 시뮬레이션만 실행
      if (!serviceId || !templateId || !publicKey || !isEmailJSReady) {
        console.warn('EmailJS 환경변수가 설정되지 않았습니다. 개발 모드에서는 시뮬레이션만 실행됩니다.');
        
        // 개발 모드: 문의 내역만 저장하고 성공 시뮬레이션
        try {
          await fetch('/api/inquiries', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.name.trim(),
              email: formData.email.trim(),
              company: formData.company.trim() || '',
              type: formData.type || '',
              message: formData.message.trim(),
            }),
          });
        } catch (saveError) {
          console.error('문의 내역 저장 실패:', saveError);
        }

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
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        company: formData.company.trim() || '없음',
        inquiry_type: formData.type 
          ? (formData.type === 'recruitment' ? '채용 문의' 
            : formData.type === 'collaboration' ? '프로젝트 협업' 
            : '기타')
          : '미선택',
        message: formData.message.trim(),
        to_email: 'ckadltmfxhrxhrxhr@gmail.com', // 수신자 이메일
      };

      // EmailJS 전송 (타임아웃 설정)
      const timeoutPromise = new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error('요청 시간이 초과되었습니다.')), 10000)
      );

      const response = await Promise.race([
        emailjs.send(serviceId, templateId, templateParams, publicKey),
        timeoutPromise
      ]);

      // EmailJS 응답 확인
      if (response && typeof response === 'object' && 'status' in response) {
        const emailjsResponse = response as { status: number; text: string };
        if (emailjsResponse.status === 200) {
          // 문의 내역을 서버에 저장
          try {
            await fetch('/api/inquiries', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: formData.name.trim(),
                email: formData.email.trim(),
                company: formData.company.trim() || '',
                type: formData.type || '',
                message: formData.message.trim(),
              }),
            });
          } catch (saveError) {
            console.error('문의 내역 저장 실패:', saveError);
            // 저장 실패해도 이메일 전송은 성공했으므로 계속 진행
          }

          setIsSubmitting(false);
          setSubmitStatus('success');
          setFormData({ name: '', email: '', company: '', type: '', message: '' });
          setTimeout(() => setSubmitStatus('idle'), 5000);
        } else {
          throw new Error(`이메일 전송 실패: ${emailjsResponse.text || '알 수 없는 오류'}`);
        }
      } else {
        throw new Error('이메일 전송 응답 형식이 올바르지 않습니다.');
      }
    } catch (error: unknown) {
      console.error('이메일 전송 실패:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      // 구체적인 에러 메시지 제공
      if (error instanceof Error) {
        if (error.message.includes('timeout') || error.message.includes('시간')) {
          setErrorMessage('요청 시간이 초과되었습니다. 네트워크 연결을 확인하고 다시 시도해주세요.');
        } else if (error.message.includes('Invalid') || error.message.includes('invalid')) {
          setErrorMessage('이메일 설정이 올바르지 않습니다. 관리자에게 문의해주세요.');
        } else {
          setErrorMessage('이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
        }
      } else {
        setErrorMessage('이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
      }
      
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
                    <span className="text-gray-700">
                      ckadltmfxhrxhrxhr@gmail.com
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    문의사항이 있으시면 아래 폼을 작성해주세요.
                  </p>
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

