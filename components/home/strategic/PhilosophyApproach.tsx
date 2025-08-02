'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PhilosophyApproach() {
  const [activeStep, setActiveStep] = useState<'why' | 'how' | 'what'>('why')

  const steps = {
    why: {
      title: 'WHY',
      subtitle: '目的',
      description: 'Will / 企業のパーパス',
      detail: '目的（Will）が定まっていないAI導入は、羅針盤なき航海と同じです。',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50'
    },
    how: {
      title: 'HOW',
      subtitle: '手段',
      description: 'AI / テクノロジー',
      detail: '明確な目的を実現するための最短ルートとしてAI活用を設計します。',
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50'
    },
    what: {
      title: 'WHAT',
      subtitle: '成果',
      description: '事業変革 / 個人の自己実現',
      detail: '目的主導のアプローチこそが、投資を成果に変える鍵です。',
      color: 'from-pink-500 to-pink-700',
      bgColor: 'bg-pink-50'
    }
  }

  return (
    <section className="py-20 md:py-32 bg-white">
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
            <span className="block mb-4">私たちは、AIの使い方を教えません。</span>
            <span className="inline">AIを使って</span>
            <span className="inline bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">「何を成し遂げるか」</span>
            <span className="inline">を、</span><br className="hidden md:block" />
            <span className="inline">共に定義します。</span>
          </h2>
        </motion.div>

        {/* WHY-HOW-WHATの図 */}
        <div className="max-w-5xl mx-auto">
          {/* ステップナビゲーション */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              {Object.entries(steps).map(([key, step]) => (
                <button
                  key={key}
                  onClick={() => setActiveStep(key as 'why' | 'how' | 'what')}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeStep === key
                      ? 'bg-white shadow-lg scale-105'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <span className={`font-semibold ${
                    activeStep === key
                      ? `bg-gradient-to-r ${step.color} bg-clip-text text-transparent`
                      : 'text-gray-600'
                  }`}>
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* ビジュアル表現 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mb-16"
          >
            {/* 円形の関係図 */}
            <div className="relative h-96 flex items-center justify-center">
              {/* 背景の円 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute w-80 h-80 rounded-full border-2 border-gray-100"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                  className="absolute w-64 h-64 rounded-full border-2 border-gray-100"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 h-48 rounded-full border-2 border-gray-100"
                />
              </div>

              {/* 3つの要素 */}
              <div className="relative">
                {/* WHY */}
                <motion.div
                  animate={{
                    scale: activeStep === 'why' ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute -top-24 left-1/2 transform -translate-x-1/2 ${
                    activeStep === 'why' ? 'z-20' : 'z-10'
                  }`}
                >
                  <div className={`w-32 h-32 rounded-full flex items-center justify-center ${
                    activeStep === 'why' 
                      ? 'bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl' 
                      : 'bg-gray-200'
                  } transition-all duration-300`}>
                    <span className={`text-2xl font-bold ${
                      activeStep === 'why' ? 'text-white' : 'text-gray-500'
                    }`}>WHY</span>
                  </div>
                </motion.div>

                {/* HOW */}
                <motion.div
                  animate={{
                    scale: activeStep === 'how' ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute -bottom-12 -left-24 ${
                    activeStep === 'how' ? 'z-20' : 'z-10'
                  }`}
                >
                  <div className={`w-32 h-32 rounded-full flex items-center justify-center ${
                    activeStep === 'how' 
                      ? 'bg-gradient-to-br from-purple-500 to-purple-700 shadow-2xl' 
                      : 'bg-gray-200'
                  } transition-all duration-300`}>
                    <span className={`text-2xl font-bold ${
                      activeStep === 'how' ? 'text-white' : 'text-gray-500'
                    }`}>HOW</span>
                  </div>
                </motion.div>

                {/* WHAT */}
                <motion.div
                  animate={{
                    scale: activeStep === 'what' ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute -bottom-12 -right-24 ${
                    activeStep === 'what' ? 'z-20' : 'z-10'
                  }`}
                >
                  <div className={`w-32 h-32 rounded-full flex items-center justify-center ${
                    activeStep === 'what' 
                      ? 'bg-gradient-to-br from-pink-500 to-pink-700 shadow-2xl' 
                      : 'bg-gray-200'
                  } transition-all duration-300`}>
                    <span className={`text-2xl font-bold ${
                      activeStep === 'what' ? 'text-white' : 'text-gray-500'
                    }`}>WHAT</span>
                  </div>
                </motion.div>

                {/* 接続線 */}
                <svg className="absolute inset-0 w-64 h-64 -left-16 -top-16" viewBox="0 0 256 256">
                  <motion.path
                    d="M128 64 L80 176 L176 176 Z"
                    fill="none"
                    stroke={activeStep === 'why' ? '#3B82F6' : '#E5E7EB'}
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* 詳細説明 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <div className={`${steps[activeStep].bgColor} rounded-2xl p-8 md:p-12`}>
                <div className="text-center">
                  <h3 className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${steps[activeStep].color} bg-clip-text text-transparent`}>
                    {steps[activeStep].title}: {steps[activeStep].subtitle}
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-700 mb-6">
                    {steps[activeStep].description}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {steps[activeStep].detail}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 統合メッセージ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 border border-gray-200">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                私たちは、まずあなたと組織の<span className="font-semibold text-blue-600">「Will」</span>を明確化し、<br className="hidden md:block" />
                それを実現するための最短ルートとして<br className="md:hidden" />
                <span className="font-semibold text-purple-600">AI活用</span>を設計する、<br className="hidden md:block" />
                唯一のパートナーです。
              </p>
              <p className="mt-4 text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                目的主導のアプローチこそが、投資を成果に変える鍵です。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}