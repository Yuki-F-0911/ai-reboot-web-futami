"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { easings } from "../lib/animations";

export type EmotionType = "empathy" | "curiosity" | "possibility" | "trust" | "excitement" | "determination";

interface ChapterSectionProps {
  id: string;
  children: React.ReactNode;
  emotionalTrigger: EmotionType;
}

export function ChapterSection({ id, children, emotionalTrigger }: ChapterSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // スクロール位置に基づくパララックス効果
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // 感情トリガーに基づく背景グラデーション
  const getBackgroundClass = () => {
    const baseClasses = "relative min-h-screen py-20 md:py-32 transition-colors duration-1000";
    switch (emotionalTrigger) {
      case "empathy":
        return `${baseClasses} ${isVisible ? 'bg-gradient-to-b from-white via-gray-50/50 to-white' : 'bg-white'}`;
      case "curiosity":
        return `${baseClasses} ${isVisible ? 'bg-gradient-to-b from-white via-amber-50/20 to-white' : 'bg-white'}`;
      case "possibility":
        return `${baseClasses} ${isVisible ? 'bg-gradient-to-b from-white via-blue-50/20 to-white' : 'bg-white'}`;
      case "trust":
        return `${baseClasses} ${isVisible ? 'bg-gradient-to-b from-white via-green-50/20 to-white' : 'bg-white'}`;
      case "excitement":
        return `${baseClasses} ${isVisible ? 'bg-gradient-to-b from-white via-orange-50/20 to-white' : 'bg-white'}`;
      case "determination":
        return `${baseClasses} ${isVisible ? 'bg-gradient-to-b from-white via-purple-50/20 to-white' : 'bg-white'}`;
      default:
        return baseClasses;
    }
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={getBackgroundClass()}
      style={{ opacity, scale }}
    >
      {/* 装飾的な背景要素 */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y }}
      >
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{
            background: `radial-gradient(circle, ${
              emotionalTrigger === 'empathy' ? '#6b7280' :
              emotionalTrigger === 'curiosity' ? '#f59e0b' :
              emotionalTrigger === 'possibility' ? '#3b82f6' :
              emotionalTrigger === 'trust' ? '#10b981' :
              emotionalTrigger === 'excitement' ? '#f97316' :
              '#9333ea'
            } 0%, transparent 70%)`,
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ 
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 40,
          }}
          transition={{ 
            duration: 0.8,
            ease: easings.smoothOut,
            delay: 0.1
          }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}