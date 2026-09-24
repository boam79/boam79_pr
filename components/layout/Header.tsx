'use client';

import Link from 'next/link';
import { routes } from '@/lib/constants/routes';
import { pageContainerClass } from '@/lib/constants/layout';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const navItems = [
    { label: '홈', href: routes.home },
    { label: '소개', href: routes.about },
    { label: '경력', href: routes.experience },
    { label: '스킬', href: routes.skills },
    { label: '프로젝트', href: routes.projects },
    { label: '연락', href: routes.contact },
  ];

  const isActive = (href: string) =>
    href === routes.home ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  const linkClassName = (href: string, isCta = false) => {
    const active = isActive(href);
    if (isCta) {
      return [
        'px-3 py-2 text-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2',
        active
          ? 'border border-teal-700 bg-teal-700 text-white'
          : 'border border-zinc-200 text-zinc-800 hover:border-teal-600 hover:text-teal-800',
      ].join(' ');
    }

    return [
      'px-3 py-2 text-sm font-medium transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2',
      active ? 'text-teal-800 underline decoration-teal-500/80 decoration-2 underline-offset-8' : 'text-zinc-600 hover:text-zinc-900',
    ].join(' ');
  };

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !mobileMenuRef.current) return;

      const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const firstFocusable = mobileMenuRef.current?.querySelector<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-sm ${
        elevated ? 'border-zinc-200 shadow-sm shadow-zinc-900/5' : 'border-zinc-200/80'
      }`}
    >
      <nav className={pageContainerClass} aria-label="주요">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={routes.home}
            className="font-display text-lg font-semibold tracking-tight text-zinc-900 transition-colors hover:text-teal-800"
          >
            Boam79
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClassName(item.href, item.label === '연락')}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            ref={menuButtonRef}
            className="p-2 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            className="border-t border-zinc-200 pb-4 pt-3 md:hidden"
            role="menu"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${linkClassName(item.href, item.label === '연락')} justify-start ${
                    isActive(item.href) && item.label !== '연락' ? 'border-l-2 border-l-teal-700 pl-2.5' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
