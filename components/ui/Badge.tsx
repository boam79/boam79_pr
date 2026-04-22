import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'active' | 'completed' | 'in-progress' | 'default';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    active: 'bg-zinc-200 text-zinc-900',
    completed: 'bg-zinc-100 text-zinc-700',
    'in-progress': 'bg-zinc-200 text-zinc-800',
    default: 'bg-zinc-100 text-zinc-700',
  };
  
  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

