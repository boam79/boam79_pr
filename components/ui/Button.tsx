import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled,
  href,
  target,
  rel,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)] disabled:cursor-not-allowed';

  const variants = {
    primary: disabled
      ? 'bg-zinc-200 text-zinc-400'
      : 'bg-teal-700 text-white hover:bg-teal-800 active:bg-teal-900',
    secondary: disabled
      ? 'bg-zinc-100 text-zinc-400'
      : 'border border-zinc-300 bg-white text-zinc-900 hover:border-teal-600 hover:text-teal-800',
    outline: disabled
      ? 'border border-zinc-200 text-zinc-400'
      : 'border border-teal-200 bg-transparent text-teal-800 hover:border-teal-400 hover:bg-teal-50/50',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5',
    lg: 'px-5 py-3 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href && !disabled) {
    const isExternal = /^https?:/i.test(href) || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a href={href} target={target} rel={rel} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
