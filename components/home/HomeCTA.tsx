"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const HomeCTA = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-depth-900 to-depth-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-will-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-harmony/10 rounded-full blur-[150px]" />
      </div>

      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main message */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            AI時代の転換点で、
            <br />
            <span className="bg-gradient-to-r from-will-primary to-harmony bg-clip-text text-transparent">
              共に未来を創りませんか
            </span>
          </h2>

          <p className="text-lg md:text-xl text-depth-100 mb-12 max-w-2xl mx-auto">
            「この時代を一緒に創っていきたい」と思っていただける方と
            出会えることを楽しみにしています
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/academy">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-white text-depth-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[240px]"
              >
                <span className="flex items-center justify-center gap-2">
                  個人の方はこちら
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.button>
            </Link>

            <Link href="/corporate">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-300 min-w-[240px]"
              >
                <span className="flex items-center justify-center gap-2">
                  法人の方はこちら
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.button>
            </Link>
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 pt-16 border-t border-white/20"
          >
            <p className="text-depth-200 mb-4">
              まずは無料説明会・お問い合わせから
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-depth-300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>オンライン開催</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>約2時間</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>24時間以内にご連絡</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};