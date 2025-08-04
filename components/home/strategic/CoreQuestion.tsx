'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CoreQuestion() {
  const [isThinking, setIsThinking] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  // スクロール進行度に応じた要素の表示
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.35], [0, 1])
  const opacity3 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
  const opacity4 = useTransform(scrollYProgress, [0.45, 0.65], [0, 1])
  const opacity5 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1])

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 bg-transparent text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 章タイトル - スクロール進行度で表示 */}
        <motion.div
          style={{ opacity: opacity1 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            第一章
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            すべては、一つの問いから始まる
          </h2>
        </motion.div>

        {/* ヘッドライン - 遅延表示 */}
        <motion.div
          style={{ opacity: opacity2 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            AIという強力な<span className="font-medium text-white">「手段」</span>を手にする前に、<br className="hidden md:block" />
            あなたには、答えるべき<span className="font-medium text-white">「目的」</span>についての問いがある。
          </p>
        </motion.div>

        {/* コアメッセージ */}
        <motion.div
          style={{ opacity: opacity3 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-12"
            style={{ opacity: opacity3 }}
          >
            それは、あなたのキャリアと人生にとって、<br />
            最もシンプルで、最も重要な問い。
          </motion.p>

          <div className="relative">
            {/* 問いかけのボックス */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-12 md:p-16 border border-gray-700">
              <motion.h3
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed"
              >
                <motion.span 
                  className="block mb-4 text-white"
                  style={{ opacity: opacity4 }}
                >
                  AIを使って、あなたは本当は何がしたいのか？
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  style={{ opacity: opacity5 }}
                >
                  どんな自分になりたいのか？
                </motion.span>
              </motion.h3>
            </div>

            {/* インタラクティブな要素 */}
            <motion.button
              onClick={() => setIsThinking(!isThinking)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors"
              style={{ opacity: opacity5 }}
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
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
                    <p className="text-gray-300 leading-relaxed">
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
          style={{ opacity: opacity5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="border-t border-gray-700 pt-12">
            <p className="text-lg md:text-xl text-gray-400 mb-4">
              この根源的な問いに、AIは答えてくれません。
            </p>
            <p className="text-lg md:text-xl text-white font-medium">
              だからこそ私たちは、まず、<br className="md:hidden" />
              あなたの<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">「Will」</span>を明確に定義することから始めます。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}