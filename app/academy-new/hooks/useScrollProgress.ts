"use client";

import { useState, useEffect, useCallback } from "react";

interface ScrollProgress {
  percentage: number;
  currentSection: string;
  isScrolling: boolean;
}

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    percentage: 0,
    currentSection: "hero",
    isScrolling: false,
  });

  const calculateProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;

    // セクションの判定
    let currentSection = "hero";
    if (scrollPercentage > 10) currentSection = "prologue";
    if (scrollPercentage > 25) currentSection = "chapter1";
    if (scrollPercentage > 40) currentSection = "chapter2";
    if (scrollPercentage > 55) currentSection = "chapter3";
    if (scrollPercentage > 70) currentSection = "chapter4";
    if (scrollPercentage > 85) currentSection = "finale";

    setScrollProgress({
      percentage: Math.min(scrollPercentage, 100),
      currentSection,
      isScrolling: true,
    });

    // スクロール終了の検知
    setTimeout(() => {
      setScrollProgress(prev => ({ ...prev, isScrolling: false }));
    }, 150);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(calculateProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    calculateProgress(); // 初期値を設定

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [calculateProgress]);

  return scrollProgress;
}