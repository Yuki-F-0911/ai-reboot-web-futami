'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OurSolutions() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッドライン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1]">
            哲学を、実践へ。<br className="hidden md:block" />
            <span className="inline-block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              変革を具体化する二つのプログラム。
            </span>
          </h2>
        </motion.div>

        {/* ソリューションカード */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* 個人向けプログラム */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="group relative h-full bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* 背景グラデーション */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50 group-hover:opacity-70 transition-opacity" />
              
              {/* コンテンツ */}
              <div className="relative p-8 md:p-10">
                {/* ラベル */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-6">
                  For Individuals
                </div>

                {/* タイトル */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  AI REBOOT<br />ACADEMY
                </h3>

                {/* キャッチコピー */}
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  「Willの探求」と「AIによる実現」を<br className="md:hidden" />
                  100日間で体験する、<br className="hidden md:block" />
                  自己変革プログラム。
                </p>

                {/* 特徴リスト */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">自己分析から始まる本質的な学習</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">実践的なAIスキルの習得</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">キャリア設計とポートフォリオ作成</span>
                  </li>
                </ul>

                {/* CTA */}
                <Link
                  href="/academy"
                  className="group/btn inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    アカデミーの詳細を見る
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 法人向けプログラム */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="group relative h-full bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* 背景グラデーション */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 opacity-50 group-hover:opacity-70 transition-opacity" />
              
              {/* コンテンツ */}
              <div className="relative p-8 md:p-10">
                {/* ラベル */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium mb-6">
                  For Organizations
                </div>

                {/* タイトル */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  AI REBOOT<br />FOR BIZ
                </h3>

                {/* キャッチコピー */}
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  企業の理念をAIで加速させ、<br className="md:hidden" />
                  事業成果に繋げる、<br className="hidden md:block" />
                  実践型組織変革プログラム。
                </p>

                {/* 特徴リスト */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">経営理念とAI戦略の統合</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">社内AI人材の育成と環境構築</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">具体的なビジネス成果の創出</span>
                  </li>
                </ul>

                {/* CTA */}
                <Link
                  href="/corporate"
                  className="group/btn inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    法人向けプログラムの詳細を見る
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 補足メッセージ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-lg">
            どちらのプログラムも、<span className="font-semibold text-gray-900">「目的の明確化」</span>から始まり、
            <span className="font-semibold text-gray-900">「具体的な成果」</span>で終わります。
          </p>
        </motion.div>
      </div>
    </section>
  )
}