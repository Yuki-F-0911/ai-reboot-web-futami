'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CoreQuestion() {
  const [isThinking, setIsThinking] = useState(false)

  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 章タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
            第一章
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            すべては、一つの問いから始まる
          </h2>
        </motion.div>

        {/* ヘッドライン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            AIという強力な<span className="font-medium">「手段」</span>を手にする前に、<br className="hidden md:block" />
            あなたには、答えるべき<span className="font-medium">「目的」</span>についての問いがある。
          </p>
        </motion.div>

        {/* コアメッセージ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            それは、あなたのキャリアと人生にとって、<br />
            最もシンプルで、最も重要な問い。
          </p>

          <div className="relative">
            {/* 問いかけのボックス */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 md:p-16 border border-gray-200">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-relaxed"
              >
                <span className="block mb-4">
                  AIを使って、あなたは本当は何がしたいのか？
                </span>
                <span className="block text-blue-600">
                  どんな自分になりたいのか？
                </span>
              </motion.h3>
            </div>

            {/* インタラクティブな要素 */}
            <motion.button
              onClick={() => setIsThinking(!isThinking)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="text-sm">この問いについて考える</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>

            {/* 考えるための余白 */}
            <AnimatePresence>
              {isThinking && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-8 overflow-hidden"
                >
                  <div className="bg-blue-50 rounded-lg p-8">
                    <p className="text-gray-700 leading-relaxed">
                      少し立ち止まって、考えてみてください。<br />
                      AIツールの使い方を学ぶ前に、<br />
                      あなたが本当に実現したいことは何ですか？
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* クロージングメッセージ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="border-t border-gray-200 pt-12">
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              この根源的な問いに、AIは答えてくれません。
            </p>
            <p className="text-lg md:text-xl text-gray-900 font-medium">
              だからこそ私たちは、まず、<br className="md:hidden" />
              あなたの<span className="text-blue-600">「Will」</span>を明確に定義することから始めます。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}