'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CoreQuestion() {
  const [selectedType, setSelectedType] = useState<'individual' | 'corporate' | null>(null)

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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            AIが、私たちに問いかけている。
          </h2>
        </motion.div>

        {/* 選択ボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-6 justify-center mb-16"
        >
          <button
            onClick={() => setSelectedType('individual')}
            className={`px-8 py-6 rounded-xl font-medium text-lg transition-all duration-300 ${
              selectedType === 'individual'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg'
            }`}
          >
            <span className="block text-sm text-gray-500 mb-1">For Individuals</span>
            個人のキャリアに関する問い
          </button>

          <button
            onClick={() => setSelectedType('corporate')}
            className={`px-8 py-6 rounded-xl font-medium text-lg transition-all duration-300 ${
              selectedType === 'corporate'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg'
            }`}
          >
            <span className="block text-sm text-gray-500 mb-1">For Organizations</span>
            組織の未来に関する問い
          </button>
        </motion.div>

        {/* 問いの表示 */}
        <AnimatePresence mode="wait">
          {selectedType && (
            <motion.div
              key={selectedType}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                {/* アイコン */}
                <div className="flex justify-center mb-8">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                    selectedType === 'individual' 
                      ? 'bg-gradient-to-r from-blue-100 to-purple-100'
                      : 'bg-gradient-to-r from-purple-100 to-pink-100'
                  }`}>
                    <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* 問い */}
                <p className="text-2xl md:text-3xl lg:text-4xl text-center font-light text-gray-800 leading-relaxed">
                  {selectedType === 'individual' 
                    ? '今のスキルの延長線上に、本当に望むキャリアはあるか？'
                    : '今の事業の延長線上に、本当に創りたい未来はあるか？'
                  }
                </p>

                {/* クロージングメッセージ */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mt-12 pt-8 border-t border-gray-200"
                >
                  <p className="text-xl text-center text-gray-700">
                    その答えは、新しいツールの中にはない。
                  </p>
                  <p className="text-xl text-center font-semibold text-gray-900 mt-2">
                    あなたと、組織の内側にある。
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 初期状態 */}
        {!selectedType && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-500 text-lg">
              あなたの立場に合わせて、問いを選択してください。
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}