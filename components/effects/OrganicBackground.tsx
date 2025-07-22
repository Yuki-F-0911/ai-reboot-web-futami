"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface OrganicBackgroundProps {
  variant?: "primary" | "secondary" | "subtle";
  className?: string;
}

export const OrganicBackground = ({ variant = "primary", className = "" }: OrganicBackgroundProps) => {
  const [shapes, setShapes] = useState<Array<{ id: number; size: number; x: number; y: number }>>([]);
  
  useEffect(() => {
    // ランダムな有機的形状を生成
    const generateShapes = () => {
      const newShapes = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        size: Math.random() * 400 + 200,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }));
      setShapes(newShapes);
    };
    
    generateShapes();
  }, []);
  
  const getGradient = (index: number) => {
    const gradients = {
      primary: [
        "from-will-primary/20 to-transparent",
        "from-will-secondary/20 to-transparent",
        "from-harmony/20 to-transparent",
      ],
      secondary: [
        "from-wisdom/20 to-transparent",
        "from-growth/20 to-transparent",
        "from-warmth/20 to-transparent",
      ],
      subtle: [
        "from-depth-200/30 to-transparent",
        "from-depth-300/20 to-transparent",
        "from-depth-100/40 to-transparent",
      ],
    };
    
    return gradients[variant][index % gradients[variant].length];
  };
  
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {shapes.map((shape, index) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full bg-gradient-radial ${getGradient(index)} blur-3xl`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* SVGフィルターで有機的な効果 */}
      <svg className="absolute inset-0 w-full h-full" style={{ filter: "blur(40px)" }}>
        <defs>
          <filter id="organic">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" />
            <feColorMatrix values="0 0 0 0 0.9 0 0 0 0 0.4 0 0 0 0 0.6 0 0 0 0.1 0" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#organic)" opacity="0.1" />
      </svg>
    </div>
  );
};