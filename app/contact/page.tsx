'use client';

import Card from '@/components/ui/Card';
import FadeInUp from '@/components/ui/FadeInUp';
import { Mail, Github, MessageCircle, Linkedin } from 'lucide-react';

const social = [
  { href: 'https://github.com/boam79', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/jae-min-park-8b475720a/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://www.threads.net/@jijijijijjijijijijijijij300?hl=ko', label: 'Threads', icon: MessageCircle },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen border-t border-zinc-200/80 bg-[#fafafa]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 md:px-8">
        <FadeInUp>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">연락</h1>
          <p className="mt-2 text-sm text-zinc-600">이메일 · 소셜</p>
        </FadeInUp>

        <FadeInUp delay={0.08}>
          <Card id="contact-primary" className="mt-10 scroll-mt-24 p-6 shadow-none">
            <h2 className="text-xs font-medium uppercase tracking-wide text-zinc-500">이메일</h2>
            <a
              href="mailto:ckadltmfxhrxhrxhr@gmail.com"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500"
            >
              <Mail className="h-4 w-4 text-zinc-500" aria-hidden />
              ckadltmfxhrxhrxhr@gmail.com
            </a>
          </Card>
        </FadeInUp>

        <FadeInUp delay={0.12}>
          <div id="contact-form" className="mt-8 scroll-mt-24">
            <h2 className="text-xs font-medium uppercase tracking-wide text-zinc-500">소셜</h2>
            <p className="mt-2 text-sm text-zinc-600">프로필·저장소는 아래 링크에서 확인할 수 있습니다.</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-800 transition-colors hover:border-zinc-300"
                    aria-label={item.label}
                  >
                    <item.icon className="h-4 w-4 text-zinc-500" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
