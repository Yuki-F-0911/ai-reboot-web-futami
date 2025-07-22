import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  as: Component = 'span',
}) => {
  return (
    <Component className={`bg-ai-gradient bg-clip-text text-transparent ${className}`}>
      {children}
    </Component>
  );
};