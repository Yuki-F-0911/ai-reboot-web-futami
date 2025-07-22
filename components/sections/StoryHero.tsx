"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const StoryHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  
  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-depth-100">
      {/* 背景の抽象的なグラデーション */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-will-gradient rounded-full blur-[100px] opacity-10"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-harmony-gradient rounded-full blur-[100px] opacity-10"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <motion.div
        style={{ opacity, scale }}
        className="container-section relative z-10 text-center"
      >
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-depth-800">あなたのWillが、</span>
            <span className="block bg-will-gradient bg-clip-text text-transparent">
              AIで現実になる
            </span>
          </h1>
        </motion.div>
        
        {/* 導入文 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl text-depth-700 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          使い方を学ぶだけじゃない。100日間で、
          本当に実現したいことを形にする。
        </motion.p>
        
        {/* スクロールプロンプト */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-depth-600">私たちの想いをお読みください</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-16 bg-gradient-to-b from-depth-400 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};