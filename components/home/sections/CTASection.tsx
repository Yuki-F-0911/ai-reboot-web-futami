'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* 背景の装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-will-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-will-tertiary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            <span className="block mb-2">さあ、あなたの手で、</span>
            <span className="bg-gradient-to-r from-will-primary via-will-secondary to-will-tertiary bg-clip-text text-transparent">
              未来をリブートしよう。
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            不安や疑問、何でもお聞かせください。
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            AIの専門家であり、キャリアと組織のプロが、<br className="hidden sm:inline" />
            あなたの最初の対話相手になります。
          </p>
        </motion.div>

        {/* CTAボタン群 */}
        <div className="max-w-4xl mx-auto">
          {/* プライマリCTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full bg-gradient-to-r from-will-primary via-will-secondary to-will-tertiary text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              無料カウンセリング/事業相談を予約する
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* セカンダリCTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <Link
              href="/download/career-guide"
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-1">AI時代のキャリア設計図</h3>
                  <p className="text-sm text-gray-400">無料PDFダウンロード</p>
                </div>
                <svg className="w-8 h-8 text-will-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </Link>

            <Link
              href="/newsletter"
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-1">最新のAI活用事例</h3>
                  <p className="text-sm text-gray-400">メルマガ登録（月2回配信）</p>
                </div>
                <svg className="w-8 h-8 text-will-secondary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}