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
            <span className="block text-depth-800">生成AI活用力研修</span>
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
            座学＋実践＋伴走型開発支援の三段構成で<br />
            企業と個人をAIによってアップデート
          </motion.p>
          
          {/* 強調メッセージ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto mb-10"
          >
            <p className="text-lg md:text-xl text-depth-700 font-bold bg-harmony-lighter p-6 rounded-2xl">
              AIの急速な進化は既存の常識を大きく変え、<br />
              企業がAIを活用せずに成長を続けることは<br />
              困難な時代です。
            </p>
          </motion.div>
          
          {/* CTA ボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-harmony text-white font-bold rounded-2xl shadow-elevated hover:shadow-floating transition-all duration-300 min-w-[200px]"
              >
                お問い合わせ
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};