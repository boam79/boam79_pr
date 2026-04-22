import Link from 'next/link';
import { Github, Mail, MessageCircle, Linkedin } from 'lucide-react';
import { routes } from '@/lib/constants/routes';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { href: 'https://github.com/boam79', label: 'GitHub', icon: Github },
    { href: 'https://www.linkedin.com/in/jae-min-park-8b475720a/', label: 'LinkedIn', icon: Linkedin },
    { href: 'https://www.threads.net/@jijijijijjijijijijijijij300?hl=ko', label: 'Threads', icon: MessageCircle },
  ];

  return (
    <footer className="border-t border-zinc-200 bg-zinc-100 text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Boam79</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              시설·운영 경험과 개발
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wide text-zinc-500">연락</h4>
            <div className="mt-3 space-y-3 text-sm">
              <Link
                href={routes.contact}
                className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-800 transition hover:border-zinc-300"
              >
                <Mail size={16} />
                ckadltmfxhrxhrxhr@gmail.com
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wide text-zinc-500">소셜</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-800 transition hover:border-zinc-300"
                  aria-label={item.label}
                >
                  <item.icon size={16} />
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-center text-xs text-zinc-500">
          <p>© {currentYear} Boam79. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

