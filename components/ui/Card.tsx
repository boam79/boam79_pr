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
    'border border-zinc-200/90 bg-white p-6 transition-[box-shadow,border-color] duration-200';
  const hoverStyles = hover
    ? 'hover:border-teal-600/40 hover:shadow-md hover:shadow-zinc-900/5'
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

