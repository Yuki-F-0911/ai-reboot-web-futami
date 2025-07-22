"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export const HeroNew = () => {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // マウスの動きに応じた視差効果
  const backgroundX = useTransform(mouseX, [-1, 1], [-20, 20]);
  const backgroundY = useTransform(mouseY, [-1, 1], [-20, 20]);
  
  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.body.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x * 2);
      mouseY.set(y * 2);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
  
  if (!mounted) return null;
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-depth-100 via-white to-will-lighter">
      {/* 背景の有機的なグラデーション要素 */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          x: backgroundX,
          y: backgroundY,
        }}
      >
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-will-gradient rounded-full blur-3xl opacity-20 animate-organic-float" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-growth-gradient rounded-full blur-3xl opacity-20 animate-organic-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-harmony-gradient rounded-full blur-3xl opacity-15 animate-pulse-glow" />
      </motion.div>
      
      {/* メインコンテンツ */}
      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* メインキャッチコピー */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="block text-depth-800">AIと共に歩む、</span>
            <span className="block bg-will-gradient bg-clip-text text-transparent">
              新しい自分へ
            </span>
          </motion.h1>
          
          {/* サブキャッチコピー */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-depth-600 mb-12 font-medium"
          >
            Will（意思）から始まる、本当のAI活用
          </motion.p>
          
          {/* CTA ボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/academy">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-will-gradient text-white font-bold rounded-2xl shadow-elevated hover:shadow-floating transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  個人の方はこちら
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-will-gradient-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
            
            <Link href="/corporate">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-white text-will-primary font-bold rounded-2xl border-2 border-will-primary shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  法人の方はこちら
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>
            </Link>
          </motion.div>
          
          {/* スクロールインジケーター */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-depth-400 rounded-full flex justify-center"
            >
              <motion.div 
                className="w-1 h-3 bg-depth-400 rounded-full mt-2"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};