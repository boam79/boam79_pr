import Link from 'next/link';
import { Github, Mail, MessageCircle, Linkedin } from 'lucide-react';
import { routes } from '@/lib/constants/routes';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      href: 'https://github.com/boam79',
      label: 'GitHub',
      icon: Github,
      className: 'hover:border-slate-500 hover:text-white',
    },
    {
      href: 'https://www.linkedin.com/in/jae-min-park-8b475720a/',
      label: 'LinkedIn',
      icon: Linkedin,
      className: 'hover:border-blue-400 hover:text-blue-200',
    },
    {
      href: 'https://www.threads.net/@jijijijijjijijijijijijij300?hl=ko',
      label: 'Threads',
      icon: MessageCircle,
      className: 'hover:border-slate-500 hover:text-white',
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-white">Boam79 포트폴리오</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Healthcare Facility × Digital Transformation Specialist
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">빠른 연락</h4>
            <div className="mt-4 space-y-3 text-sm">
              <Link
                href={routes.contact}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:border-blue-400/70 hover:bg-blue-500/10 hover:text-white"
              >
                <Mail size={16} />
                ckadltmfxhrxhrxhr@gmail.com
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">소셜</h4>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition ${item.className}`}
                  aria-label={item.label}
                >
                  <item.icon size={16} />
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          <p>© {currentYear} Boam79. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

