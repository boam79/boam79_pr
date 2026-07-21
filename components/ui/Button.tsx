import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa] disabled:cursor-not-allowed';

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

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
