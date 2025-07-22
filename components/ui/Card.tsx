import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
}) => {
  const hoverClasses = hover ? 'hover:-translate-y-1 hover:shadow-lg' : '';
  
  return (
    <div className={`bg-white rounded-xl p-6 shadow-md border border-ai-purple/10 transition-all duration-base ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};