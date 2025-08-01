'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProblemSection() {
  const [selectedType, setSelectedType] = useState<'individual' | 'corporate' | null>(null)

  const individualQuestions = [
    'このままで、私の価値は保たれるのか？',
    '本当にやりたいことは、今の仕事の延長線上にあるのか？',
    '変化の波に、ただ飲まれるだけでいいのか？'
  ]

  const corporateQuestions = [
    'このままで、我々の事業は存続できるのか？',
    '本当に提供すべき価値は、今のサービスの延長線上にあるのか？',
    '変化の波を、ただ眺めているだけでいいのか？'
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
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
              AIが、あなたに問いかけている。
            </span>
          </h2>
        </motion.div>

        {/* 選択ボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={() => setSelectedType('individual')}
            className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
              selectedType === 'individual'
                ? 'bg-gradient-to-r from-will-primary to-will-secondary text-white scale-105 shadow-lg'
                : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-md'
            }`}
          >
            個人のキャリアについて
          </button>
          <button
            onClick={() => setSelectedType('corporate')}
            className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
              selectedType === 'corporate'
                ? 'bg-gradient-to-r from-will-secondary to-will-tertiary text-white scale-105 shadow-lg'
                : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-md'
            }`}
          >
            組織の未来について
          </button>
        </motion.div>

        {/* 質問表示エリア */}
        {selectedType && (
          <motion.div
            key={selectedType}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
              {(selectedType === 'individual' ? individualQuestions : corporateQuestions).map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    selectedType === 'individual'
                      ? 'bg-gradient-to-r from-will-primary/20 to-will-secondary/20'
                      : 'bg-gradient-to-r from-will-secondary/20 to-will-tertiary/20'
                  }`}>
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{question}</p>
                </motion.div>
              ))}
            </div>

            {/* クロージングメッセージ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-12"
            >
              <p className="text-2xl md:text-3xl font-bold text-gray-800">
                その答えは、外にはない。
                <span className="block mt-2 bg-gradient-to-r from-will-primary via-will-secondary to-will-tertiary bg-clip-text text-transparent">
                  あなたの、我々の「内」にある。
                </span>
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* 初期状態の表示 */}
        {!selectedType && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">上のボタンから、あなたの立場を選択してください。</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}