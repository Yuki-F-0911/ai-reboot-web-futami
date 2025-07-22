'use client';

import React, { useRef, useEffect, useState } from 'react';

interface MorphingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const MorphingCard: React.FC<MorphingCardProps> = ({ 
  children, 
  className = '',
  delay = 0 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`relative group ${className}`}
    >
      {/* 有機的な背景形状 */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          {/* モーフィング形状 */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 200"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a1a2e" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#16213e" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path
              d={isVisible 
                ? "M20,40 Q50,20 80,30 T120,25 T160,30 Q180,40 180,60 Q180,140 160,160 Q140,180 100,180 Q60,180 40,160 Q20,140 20,60 Q20,40 20,40"
                : "M40,40 Q60,40 100,40 T140,40 T160,40 Q160,40 160,100 Q160,160 160,160 Q100,160 100,160 Q40,160 40,160 Q40,100 40,40 Q40,40 40,40"
              }
              fill="url(#morphGradient)"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          
          {/* グロー効果 */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-xl group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500" />
        </div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 p-8">
        {children}
      </div>

      {/* インタラクティブな光の粒子 */}
      <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          50% { 
            transform: translate(10px, -20px) scale(1.5);
            opacity: 1;
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};