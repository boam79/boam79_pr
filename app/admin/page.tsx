'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FadeInUp from '@/components/ui/FadeInUp';
import { Mail, Calendar, Building, MessageSquare, Lock } from 'lucide-react';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  type: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/inquiries?password=${encodeURIComponent(password)}`);
      
      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(true);
        setInquiries(data.inquiries || []);
      } else {
        setError('비밀번호가 올바르지 않습니다.');
      }
    } catch (err) {
      setError('로그인 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/inquiries?password=${encodeURIComponent(password)}`);
      if (response.ok) {
        const data = await response.json();
        setInquiries(data.inquiries || []);
      }
    } catch (err) {
      console.error('새로고침 실패:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getInquiryTypeLabel = (type: string) => {
    switch (type) {
      case 'recruitment':
        return '채용 문의';
      case 'collaboration':
        return '프로젝트 협업';
      case 'other':
        return '기타';
      default:
        return '미선택';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-md w-full mx-auto px-4">
          <FadeInUp>
            <Card className="bg-white/90 backdrop-blur-md border-2 border-white/50 shadow-xl p-8">
              <div className="text-center mb-6">
                <Lock className="mx-auto mb-4 text-gray-600" size={48} />
                <h1 className="text-2xl font-bold text-gray-900 mb-2">관리자 로그인</h1>
                <p className="text-gray-600">문의 내역을 확인하려면 비밀번호를 입력하세요</p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? '로그인 중...' : '로그인'}
                </Button>
              </form>
            </Card>
          </FadeInUp>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeInUp>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-2 drop-shadow-lg">
                문의 내역 관리
              </h1>
              <p className="text-gray-700 drop-shadow-md">
                총 {inquiries.length}개의 문의가 있습니다
              </p>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleRefresh} disabled={isLoading} variant="outline">
                새로고침
              </Button>
              <Button onClick={() => setIsAuthenticated(false)} variant="outline">
                로그아웃
              </Button>
            </div>
          </div>
        </FadeInUp>

        {inquiries.length === 0 ? (
          <FadeInUp delay={0.1}>
            <Card className="bg-white/90 backdrop-blur-md border-2 border-white/50 shadow-xl p-12 text-center">
              <MessageSquare className="mx-auto mb-4 text-gray-400" size={64} />
              <p className="text-gray-600 text-lg">아직 문의 내역이 없습니다</p>
            </Card>
          </FadeInUp>
        ) : (
          <div className="space-y-4">
            {inquiries.map((inquiry, index) => (
              <FadeInUp key={inquiry.id} delay={index * 0.05}>
                <Card className="bg-white/90 backdrop-blur-md border-2 border-white/50 shadow-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {inquiry.name}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Mail size={16} />
                              <a 
                                href={`mailto:${inquiry.email}`}
                                className="hover:text-blue-600 transition-colors"
                              >
                                {inquiry.email}
                              </a>
                            </div>
                            {inquiry.company && (
                              <div className="flex items-center gap-1">
                                <Building size={16} />
                                <span>{inquiry.company}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              <span>{formatDate(inquiry.createdAt)}</span>
                            </div>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {getInquiryTypeLabel(inquiry.type)}
                        </span>
                      </div>

                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-700 whitespace-pre-wrap">{inquiry.message}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeInUp>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

