'use client';

import React from 'react';
import Link from 'next/link';

interface FluidButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const FluidButton: React.FC<FluidButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const baseClasses = `
    relative overflow-hidden group
    ${sizeClasses[size]}
    font-medium tracking-wide
    transition-all duration-300
    ${className}
  `;

  const content = (
    <>
      <span className="relative z-10">
        {children}
      </span>
      
      {variant === 'primary' ? (
        <>
          {/* 流体的な背景 */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
          
          {/* 波のようなエフェクト */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-10 bg-white/20 transform rotate-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 ease-out" />
          </div>
        </>
      ) : (
        <>
          {/* 枠線の流体的変化 */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M5,25 Q15,5 30,10 T50,15 T70,10 Q85,5 95,25 L95,75 Q85,95 70,90 T50,85 T30,90 Q15,95 5,75 Z"
              fill="none"
              stroke="url(#fluidGradient)"
              strokeWidth="1"
              className="opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              vectorEffect="non-scaling-stroke"
            />
            <defs>
              <linearGradient id="fluidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </>
      )}
    </>
  );

  const combinedClasses = `${baseClasses} ${
    variant === 'primary' 
      ? 'text-white' 
      : 'text-gray-300 hover:text-white'
  }`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};