"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export const SmartCTA = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [ctaText, setCTAText] = useState("詳しく見る");
  const [urgency, setUrgency] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
      
      // スクロール30%で表示
      setIsVisible(progress > 0.3);
      
      // スクロール位置に応じてCTAテキストを変更
      if (progress < 0.3) {
        setCTAText("まずは概要を確認");
        setUrgency(false);
      } else if (progress < 0.6) {
        setCTAText("無料説明会で詳しく聞く");
        setUrgency(false);
      } else if (progress < 0.8) {
        setCTAText("今すぐ申し込む");
        setUrgency(true);
      } else {
        setCTAText("残席わずか！今すぐ申し込む");
        setUrgency(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初期状態を設定
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-md border-t border-depth-100 shadow-floating"
        >
          <div className="container-section">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* 進捗インジケーター */}
              <div className="flex items-center gap-4">
                <div className="hidden sm:block">
                  <div className="w-32 h-2 bg-depth-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-will-primary to-harmony"
                      style={{ width: `${scrollProgress * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
                {urgency && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 text-red-600"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span className="text-sm font-semibold">申込み締切まもなく</span>
                  </motion.div>
                )}
              </div>
              
              {/* CTAボタン */}
              <div className="flex items-center gap-3">
                <Link href="https://forms.gle/MX5sobbPkch5U2QF8" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 text-depth-700 hover:text-depth-900 transition-colors"
                  >
                    LINEで相談
                  </motion.button>
                </Link>
                <Link href="#application">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      px-6 py-3 font-bold text-white rounded-full transition-all duration-300
                      ${urgency 
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 animate-pulse-glow shadow-glow' 
                        : 'bg-gradient-to-r from-will-primary to-will-secondary shadow-elevated hover:shadow-floating'
                      }
                    `}
                  >
                    {ctaText}
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};