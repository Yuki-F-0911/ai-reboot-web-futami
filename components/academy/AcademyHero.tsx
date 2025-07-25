"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const AcademyHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-10 overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-will-lighter via-white to-wisdom-lighter">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-will-gradient rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-wisdom rounded-full blur-3xl opacity-10" />
      </div>
      
      <div className="container-section relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* メインタイトル */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="block bg-will-gradient bg-clip-text text-transparent mb-2">
              AIを学ぶ。
            </span>
            <span className="block text-depth-800">
              生き方を、変える。
            </span>
          </motion.h1>
          
          {/* サブタイトル */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-depth-700 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            これは、AIスクールではありません。
            <br />
            変化の時代を生きる、あなたのための人生の学校です。
          </motion.p>
          
          {/* 補助金バッジ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-will-primary to-will-secondary text-white px-8 py-4 rounded-full mb-12 shadow-glow"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-bold text-lg">経済産業省リスキリング補助金対象講座</span>
          </motion.div>
          
          {/* CTA ボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link href="#session">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-will-gradient text-white font-bold text-lg rounded-full shadow-elevated hover:shadow-floating transition-all duration-300"
              >
                無料説明会に参加
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};