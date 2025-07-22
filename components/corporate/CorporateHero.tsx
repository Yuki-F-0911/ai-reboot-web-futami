"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const CorporateHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-20 pb-10 overflow-hidden bg-gradient-to-br from-harmony-lighter via-white to-will-lighter">
      {/* 背景の抽象的な形状 */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-harmony rounded-full blur-[120px] opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-will-gradient rounded-full blur-[120px] opacity-10"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="container-section relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* タイトル */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block text-depth-800">法人研修</span>
            <span className="block bg-harmony-gradient bg-clip-text text-transparent">
              「AIリブート」
            </span>
          </motion.h1>
          
          {/* サブタイトル */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-depth-700 mb-8 leading-relaxed"
          >
            座学＋実践＋伴走型OJTの三段構成で<br />
            企業と個人をAIによってアップデート
          </motion.p>
          
          {/* リスキリング補助金バッジ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-harmony to-will-secondary text-white px-8 py-4 rounded-full mb-10 shadow-elevated"
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
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-harmony text-white font-bold rounded-2xl shadow-elevated hover:shadow-floating transition-all duration-300 min-w-[200px]"
              >
                お問い合わせ
              </motion.button>
            </Link>
            
            <Link href="#download">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-harmony font-bold rounded-2xl border-2 border-harmony shadow-soft hover:shadow-elevated transition-all duration-300 min-w-[200px]"
              >
                資料ダウンロード
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};