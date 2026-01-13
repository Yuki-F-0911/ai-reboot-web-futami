"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const CorporateHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center bg-slate-50 overflow-hidden">
      {/* Mobile: Image at top */}
      <div className="lg:hidden absolute top-0 left-0 w-full h-[40vh] z-0">
        <Image
          src="/images/hero-slide-v2-1.png"
          alt="AI研修の様子"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-50/50 to-slate-50" />
      </div>

      {/* Desktop: Right Side Image with Diagonal Cut */}
      <div className="hidden lg:block absolute top-0 right-0 w-[50%] h-full z-0">
        <div
          className="absolute inset-0 z-10"
          style={{
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)"
          }}
        >
          <Image
            src="/images/hero-slide-v2-1.png"
            alt="AI研修の様子"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay for brand tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-will-primary/20 to-harmony/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 via-transparent to-transparent" />
        </div>
      </div>

      {/* Background Decoration Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-will-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-[10%] right-[40%] w-[30%] h-[30%] bg-harmony/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 pt-[35vh] lg:pt-0 w-full px-4 sm:px-6 lg:px-0 lg:pl-16 xl:pl-24">
        <div className="w-full lg:max-w-[55%] xl:max-w-[50%]">
          {/* ロゴ・タイトル */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 lg:mb-8"
          >
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-harmony/10 to-will-primary/10 border border-harmony/20 text-harmony-dark font-bold rounded-full text-sm mb-6 tracking-wider backdrop-blur-sm">
              法人向けAI研修プログラム
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900"
              style={{ fontFamily: "'Noto Sans JP','Noto Sans','Hiragino Kaku Gothic ProN','Hiragino Kaku Gothic Pro','Yu Gothic','Meiryo',sans-serif" }}
            >
              AIリブート研修
            </h1>
          </motion.div>

          {/* キャッチコピー */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl text-slate-800 mb-8 leading-[1.5] font-bold"
          >
            組織の常識を書き換え、<br className="hidden lg:block" />
            10年先も生き残る<span className="text-harmony-dark bg-harmony/10 px-1 rounded">「自走力」</span>を。
          </motion.p>

          {/* サブコピー */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-600 mb-10 leading-[1.8] max-w-2xl font-medium"
          >
            ツールの使い方ではなく、
            <span className="font-bold text-slate-800 border-b-2 border-harmony/30 pb-0.5">AI時代の思考法</span>を身につける。<br className="hidden lg:block" />
            組織全体が自ら学び、自ら突破する力を獲得する実践プログラム。
          </motion.p>

          {/* CTA ボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-harmony to-harmony-dark text-white text-lg font-bold rounded-full shadow-lg hover:shadow-harmony/50 transition-all duration-300 w-full sm:w-auto min-w-[240px] flex items-center justify-center gap-2"
              >
                無料相談を申し込む
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};