'use client';

import { useState } from 'react';
import FadeInUp from '@/components/ui/FadeInUp';
import PageHeader from '@/components/ui/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import { readingContainerClass } from '@/lib/constants/layout';
import { CONTACT_EMAIL } from '@/lib/constants/site';
import { Check, Copy, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const social = [
  { href: 'https://github.com/boam79', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/jae-min-park-8b475720a/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://www.threads.net/@jijijijijjijijijijijijij300?hl=ko', label: 'Threads', icon: MessageCircle },
];

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={() => void copy()}
      className="inline-flex items-center gap-2 border border-line bg-white px-3 py-2 text-sm text-ink-secondary transition-colors hover:border-ink-muted hover:text-ink"
    >
      {copied ? <Check className="h-4 w-4 text-accent" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
      {copied ? '복사됨' : '주소 복사'}
    </button>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen border-t border-line bg-page">
      <div className={`${readingContainerClass} py-16 lg:py-20`}>
        <FadeInUp>
          <PageHeader title="연락" description="협업·채용 문의는 폼이나 이메일로 남겨 주세요." />
        </FadeInUp>

        <div className="space-y-12">
          <FadeInUp delay={0.06}>
            <section id="contact-primary" className="scroll-mt-24">
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">이메일</h2>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
                >
                  <Mail className="h-4 w-4 text-ink-muted" aria-hidden />
                  {CONTACT_EMAIL}
                </a>
                <CopyEmailButton />
              </div>
            </section>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <section id="contact-form" className="scroll-mt-24 border-t border-line pt-10">
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">문의하기</h2>
              <p className="mt-2 text-sm leading-6 text-ink-secondary">
                아래 양식을 작성해 주시면 이메일로 답변드립니다.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </section>
          </FadeInUp>

          <FadeInUp delay={0.14}>
            <section className="border-t border-line pt-10">
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">소셜</h2>
              <p className="mt-2 text-sm leading-6 text-ink-secondary">
                프로필·저장소는 아래 링크에서 확인할 수 있습니다.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {social.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-line bg-white px-3 py-2 text-sm text-ink-body transition-colors hover:border-ink-muted"
                      aria-label={item.label}
                    >
                      <item.icon className="h-4 w-4 text-ink-muted" aria-hidden />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
