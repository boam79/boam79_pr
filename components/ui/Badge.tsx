import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'active' | 'completed' | 'in-progress' | 'default';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    active: 'bg-zinc-200 text-ink',
    completed: 'bg-surface text-ink-secondary',
    'in-progress': 'bg-zinc-200 text-ink-body',
    default: 'bg-surface text-ink-secondary',
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
