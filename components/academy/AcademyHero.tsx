"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const AcademyHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 pb-10 overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-will-lighter via-white to-wisdom-lighter">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-will-gradient rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-wisdom rounded-full blur-3xl opacity-10" />
      </div>
      
      <div className="container-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左側：テキストコンテンツ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 補助金バッジ */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-will-primary to-will-secondary text-white px-6 py-3 rounded-full mb-6 shadow-glow"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">経済産業省リスキリング補助金対象講座</span>
            </motion.div>
            
            {/* メインタイトル */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block text-depth-800">100日で、</span>
              <span className="block bg-will-gradient bg-clip-text text-transparent">
                AIを味方につける
              </span>
            </motion.h1>
            
            {/* サブタイトル */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-depth-600 mb-8"
            >
              あなたのWill（意思）を見つけ、<br />
              AIと共に実現する力を
            </motion.p>
            
            {/* 補助金情報 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-soft border border-will-primary/20"
            >
              <p className="text-lg font-bold text-depth-800 mb-2">
                最大70%（21万円）の補助
              </p>
              <p className="text-depth-600">
                受講料30万円が、実質9万円〜で受講可能
              </p>
            </motion.div>
            
            {/* CTA ボタン */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#apply">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-will-gradient text-white font-bold rounded-2xl shadow-elevated hover:shadow-floating transition-all duration-300"
                >
                  今すぐ申し込む
                </motion.button>
              </Link>
              
              <Link href="#session">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-will-primary font-bold rounded-2xl border-2 border-will-primary shadow-soft hover:shadow-elevated transition-all duration-300"
                >
                  無料説明会に参加
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* 右側：ビジュアル */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-floating">
              {/* プレースホルダー画像 */}
              <div className="absolute inset-0 bg-gradient-to-br from-will-primary/20 to-wisdom/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-depth-400 text-lg">受講生の活動写真</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};