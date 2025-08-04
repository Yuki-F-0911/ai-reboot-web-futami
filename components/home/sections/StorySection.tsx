'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function StorySection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              私たちが「AIリブート」に込めた想い
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl"
          >
            {/* ストーリーコンテンツ */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-1 h-20 bg-gradient-to-b from-will-primary to-will-secondary rounded-full flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ウィルフォワード創業以来、私たちは一貫して信じてきました。
                  <span className="font-semibold text-gray-900">「個人のWillが社会を創造する」</span>という信念を。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-1 h-20 bg-gradient-to-b from-will-secondary to-will-tertiary rounded-full flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  そして今、AI時代の到来は、
                  <span className="font-semibold text-gray-900">その信念を加速させる最大のチャンス</span>だと確信しています。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="w-1 h-24 bg-gradient-to-b from-will-tertiary to-will-primary rounded-full flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  AIによって、これまで諦めていた個人の挑戦や、
                  リソース不足に悩む企業の変革が可能になる。
                  <span className="font-semibold text-gray-900">技術の民主化が、真の意味で実現する時代</span>が来たのです。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-8 border-t border-gray-200"
              >
                <p className="text-xl font-semibold text-gray-900 text-center leading-relaxed">
                  私たちは、テクノロジーの力で<br className="sm:hidden" />
                  <span className="bg-gradient-to-r from-will-primary via-will-secondary to-will-tertiary bg-clip-text text-transparent">
                    「誰もが自分のWillを実現できる社会」
                  </span>
                  を創りたい。
                </p>
                <p className="text-lg text-gray-700 text-center mt-4">
                  そのための具体的なアクションが、<span className="font-semibold">「AIリブート」</span>なのです。
                </p>
              </motion.div>
            </div>

            {/* ビジュアル要素 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-12 flex justify-center"
            >
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-will-primary/20 via-will-secondary/20 to-will-tertiary/20 blur-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-will-primary via-will-secondary to-will-tertiary flex items-center justify-center shadow-2xl">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}