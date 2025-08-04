"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-will-lighter via-white to-harmony-lighter opacity-70" />
        <motion.div
          className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-will-gradient rounded-full blur-[150px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] bg-harmony-gradient rounded-full blur-[150px] opacity-20"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-section relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Main title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.2]">
              <span className="inline text-depth-900">生成AIは</span>
              <span className="inline bg-will-gradient bg-clip-text text-transparent">道具</span>
              <span className="inline text-depth-900">ではなく</span>
              <br />
              <span className="inline bg-harmony-gradient bg-clip-text text-transparent">パートナー</span>
              <span className="inline text-depth-900">へ</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-depth-700 mb-4 font-light max-w-3xl mx-auto leading-relaxed">
              AI時代の転換点で、<br className="md:hidden" />
              あなたの「Will（意志）」を現実に変える
            </p>

            {/* Core message */}
            <p className="text-base md:text-lg text-depth-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              単なるツールの使い方ではなく、<br className="md:hidden" />
              AIと共創する思考OSを身につけ、<br />
              変化し続ける時代を生き抜く力を、<br className="md:hidden" />
              実践と伴走で支援します
            </p>
          </motion.div>

          {/* Service cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
          >
            {/* Academy card */}
            <Link href="/academy" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-depth-100 hover:border-will-primary/30">
                <div className="flex items-center justify-center w-16 h-16 bg-will-lighter rounded-xl mb-6 mx-auto">
                  <svg className="w-8 h-8 text-will-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-depth-900 mb-3">個人向け</h3>
                <p className="text-lg font-semibold text-will-primary mb-2">AIリブートアカデミー</p>
                <p className="text-depth-600 mb-4">100日間の実践プログラムで、AI時代の新しい自分へ</p>
                <div className="flex items-center justify-center gap-2 text-will-primary group-hover:gap-3 transition-all">
                  <span className="text-sm font-medium">詳しく見る</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Corporate card */}
            <Link href="/corporate" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-depth-100 hover:border-harmony/30">
                <div className="flex items-center justify-center w-16 h-16 bg-harmony-lighter rounded-xl mb-6 mx-auto">
                  <svg className="w-8 h-8 text-harmony" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-depth-900 mb-3">法人向け</h3>
                <p className="text-lg font-semibold text-harmony mb-2">企業研修・コンサルティング</p>
                <p className="text-depth-600 mb-4">座学＋実践＋伴走型支援で組織をアップデート</p>
                <div className="flex items-center justify-center gap-2 text-harmony group-hover:gap-3 transition-all">
                  <span className="text-sm font-medium">詳しく見る</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="#mission">
              <button className="group px-8 py-4 bg-depth-900 text-white font-medium rounded-lg hover:bg-depth-800 transition-all duration-200 shadow-md hover:shadow-lg">
                <span className="flex items-center gap-2">
                  私たちの想いを知る
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};