import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = '', hover = false, onClick }: CardProps) {
  const baseStyles = 'bg-white rounded-xl border border-gray-200 p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-lg hover:border-blue-500 hover:scale-[1.02]' : '';
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

