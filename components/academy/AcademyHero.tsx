"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ValuePropositionCards } from "./ValuePropositionCards";
import { TrustIndicators } from "./TrustIndicators";

export const AcademyHero = () => {

  return (
    <section className="relative min-h-screen pt-20 pb-10 overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-will-lighter via-white to-wisdom-lighter">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-will-gradient rounded-full blur-3xl opacity-10 animate-organic-float" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-wisdom rounded-full blur-3xl opacity-10 animate-organic-float-delayed" />
      </div>
      
      <div className="container-section relative z-10">
        {/* メインメッセージ */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-depth-800 mb-2">
                AIに仕事を奪われる不安から
              </span>
              <span className="block bg-will-gradient bg-clip-text text-transparent">
                AIと共に創る未来へ
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-depth-700 mb-2"
          >
            100日間で、生成AI時代を生き抜く「思考OS」をインストール
          </motion.p>
        </div>

        {/* 価値提案カード */}
        <ValuePropositionCards />
        
        {/* 信頼性指標 */}
        <TrustIndicators />
        
        {/* CTA セクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#application">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-white font-bold text-lg rounded-full shadow-elevated hover:shadow-floating transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">
                  無料説明会に申し込む
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7043] to-[#FF5722] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
            
            <Link href="#video">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white border-2 border-harmony text-harmony font-semibold text-lg rounded-full hover:bg-harmony hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                30秒でわかる動画を見る
              </motion.button>
            </Link>
          </div>
          
          {/* 補助金情報 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-6 text-depth-600"
          >
            <span className="font-semibold text-will-primary">最大70%（21万円）</span>の補助金で
            <span className="font-semibold">実質18万円〜</span>受講可能
          </motion.p>
        </motion.div>
      </div>
      
      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-depth-400">
          <span className="text-sm">詳しく見る</span>
          <motion.svg
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </div>
      </motion.div>
    </section>
  );
};