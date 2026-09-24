import Link from 'next/link';
import { Github, Mail, MessageCircle, Linkedin } from 'lucide-react';
import { routes } from '@/lib/constants/routes';
import { pageContainerClass } from '@/lib/constants/layout';
import { CONTACT_EMAIL } from '@/lib/constants/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { href: 'https://github.com/boam79', label: 'GitHub', icon: Github },
    { href: 'https://www.linkedin.com/in/jae-min-park-8b475720a/', label: 'LinkedIn', icon: Linkedin },
    { href: 'https://www.threads.net/@jijijijijjijijijijijijij300?hl=ko', label: 'Threads', icon: MessageCircle },
  ];
  const navItems = [
    { label: '소개', href: routes.about },
    { label: '경력', href: routes.experience },
    { label: '프로젝트', href: routes.projects },
    { label: '연락', href: routes.contact },
  ];

  return (
    <footer className="border-t border-zinc-800 bg-footer text-on-dark-muted">
      <div className={`${pageContainerClass} py-12`}>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-sm font-semibold text-on-dark">Boam79</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-on-dark-muted">
              시설·운영 경험과 개발. 공개 프로젝트는 AI와 함께 구현합니다.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wide text-on-dark-muted">바로가기</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-on-dark hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wide text-on-dark-muted">연락</h4>
            <div className="mt-3 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 border border-zinc-700 bg-zinc-900 px-3 py-2 text-on-dark transition hover:border-zinc-500 hover:text-white"
              >
                <Mail size={16} aria-hidden />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wide text-on-dark-muted">소셜</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-on-dark transition hover:border-zinc-500 hover:text-white"
                  aria-label={item.label}
                >
                  <item.icon size={16} aria-hidden />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-xs leading-relaxed text-on-dark-muted">
          <p>© {currentYear} Boam79. All rights reserved.</p>
          <p className="mt-2">이 사이트와 GitHub 공개 저장소는 AI 코딩 에이전트와 함께 만들었습니다.</p>
        </div>
      </div>
    </footer>
  );
}
