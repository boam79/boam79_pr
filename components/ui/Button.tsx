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
    'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa] disabled:cursor-not-allowed';
  
  const variants = {
    primary: disabled 
      ? 'bg-zinc-200 text-zinc-400'
      : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: disabled
      ? 'bg-zinc-100 text-zinc-400'
      : 'border border-zinc-300 bg-white text-zinc-900 hover:border-blue-300 hover:text-blue-700',
    outline: disabled
      ? 'border border-zinc-200 text-zinc-400'
      : 'border border-blue-200 bg-transparent text-blue-700 hover:border-blue-300 hover:bg-blue-50/40',
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

