'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OurSolutions() {
  return (
    <section className="py-32 md:py-40 bg-transparent text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 章タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-[#A0A0A0] uppercase tracking-wider mb-4">
            第三章
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EAEAEA]">
            あなたの変革を実現する場所
          </h2>
        </motion.div>

        {/* ヘッドライン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-2xl md:text-3xl font-light text-[#EAEAEA] leading-relaxed">
            哲学を、実践へ。<br className="md:hidden" />
            あなたの変革を実現するプログラムが、<br className="hidden md:block" />
            ここにあります。
          </p>
        </motion.div>

        {/* AI REBOOT ACADEMY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-3xl border border-gray-700 overflow-hidden">
            {/* 背景の装飾 */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-[#4A90E2]/10 to-[#9013FE]/10 rounded-full blur-3xl transform translate-x-48 -translate-y-48" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-[#9013FE]/10 to-[#4A90E2]/10 rounded-full blur-3xl transform -translate-x-48 translate-y-48" />
            </div>

            <div className="relative p-12 md:p-16">
              {/* プログラム名 */}
              <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
                  AI REBOOT<br />ACADEMY
                </h3>
                <p className="text-xl md:text-2xl font-light text-[#A0A0A0] leading-relaxed">
                  「Willの探求」と「AIによる実現」を<br className="md:hidden" />
                  100日間で体験する、自己変革プログラム。
                </p>
              </div>

              {/* 提供価値 */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 transition-all"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#4A90E2]/20 to-[#4A90E2]/10 rounded-lg mb-4">
                    <svg className="w-6 h-6 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-[#EAEAEA] mb-2">
                    キャリアの方向性の明確化
                  </h4>
                  <p className="text-[#A0A0A0]">
                    あなたの強みと情熱を見つけ、AI時代のキャリア戦略を設計
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 transition-all"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#9013FE]/20 to-[#9013FE]/10 rounded-lg mb-4">
                    <svg className="w-6 h-6 text-[#9013FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-[#EAEAEA] mb-2">
                    AIを活用した問題解決能力
                  </h4>
                  <p className="text-[#A0A0A0]">
                    実践的なプロジェクトを通じて、AI活用の本質を習得
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 transition-all"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500/20 to-pink-500/10 rounded-lg mb-4">
                    <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-[#EAEAEA] mb-2">
                    同じ志を持つ仲間とのネットワーク
                  </h4>
                  <p className="text-[#A0A0A0]">
                    共に学び、高め合う、一生涯の仲間との出会い
                  </p>
                </motion.div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link
                  href="/academy"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#4A90E2] to-[#9013FE] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    アカデミーの詳細を見る
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}