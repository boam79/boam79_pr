import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  id?: string;
}

export default function Card({ children, className = '', hover = false, onClick, id }: CardProps) {
  const baseStyles =
    'rounded-lg border border-zinc-200/90 bg-white p-6 transition-[box-shadow,transform] duration-200';
  const hoverStyles = hover
    ? 'cursor-pointer hover:border-zinc-300 hover:shadow-sm active:scale-[0.99]'
    : '';
  
  return (
    <div 
      id={id}
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

