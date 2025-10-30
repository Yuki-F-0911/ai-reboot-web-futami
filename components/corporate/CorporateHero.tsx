"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const CorporateHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-16 pb-8 overflow-hidden bg-gradient-to-br from-harmony-lighter via-white to-will-lighter">
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
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 leading-[1.2] tracking-tight"
            style={{ fontFamily: "'Noto Sans JP','Noto Sans','Hiragino Kaku Gothic ProN','Hiragino Kaku Gothic Pro','Yu Gothic','Meiryo',sans-serif" }}
          >
            <span className="block bg-harmony-gradient bg-clip-text text-transparent">
              AIツールの使い方を教えない
            </span>
            <span className="block bg-harmony-gradient bg-clip-text text-transparent mt-2">
              AI活用力強化プログラム
            </span>
          </motion.h1>
          
          {/* サブタイトル */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-depth-700 mb-12 leading-[1.7] font-medium"
          >
            「自ら学び、自ら突破する生成AI活用力」を身につけ、
            <br className="hidden md:block" />
            組織全体がAI時代を生き抜く力を獲得する。
          </motion.p>
          
          {/* 強調メッセージ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-elevated border border-harmony/10">
              <p className="text-base md:text-lg text-depth-700 leading-[1.9] font-normal">
                単なるツールの使い方を教える研修ではありません。
              </p>
              <p className="text-base md:text-lg text-depth-800 leading-[1.9] font-semibold mt-4">
                <span className="text-harmony">できるかできないかではなく、『できる』を前提にどうすべきかを考えるパラダイムシフト</span>
              </p>
              <p className="text-base md:text-lg text-depth-700 leading-[1.9] font-normal mt-4">
                技術の進歩や環境の変化に無理なく対応する変化適応力と、
                生成AIがすべきことか、人間がすべきことかを考える新時代サービス設計力を、
                組織と個人が身につける実践型プログラムです。
              </p>
            </div>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-harmony text-white text-lg md:text-xl font-bold rounded-2xl shadow-glow hover:shadow-glow-hover transition-all duration-300 min-w-[240px]"
              >
                無料相談を申し込む
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};