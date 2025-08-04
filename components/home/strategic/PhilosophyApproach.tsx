'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PhilosophyApproach() {
  const [activeStep, setActiveStep] = useState<'why' | 'how' | 'what'>('why')

  const steps = {
    why: {
      title: 'WHY',
      subtitle: '目的',
      description: 'あなたのWill / 情熱 / 価値観',
      detail: '目的（Will）が定まっていないスキル学習は、羅針盤なき航海と同じです。',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-gradient-to-br from-[#4A90E2]/10 to-[#4A90E2]/5'
    },
    how: {
      title: 'HOW',
      subtitle: '手段',
      description: 'AI / テクノロジー',
      detail: '明確な目的を実現するための最短ルートとしてAI活用を設計します。',
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-gradient-to-br from-[#9013FE]/10 to-[#9013FE]/5'
    },
    what: {
      title: 'WHAT',
      subtitle: '成果',
      description: 'キャリア変革 / 自己実現',
      detail: '目的主導のアプローチこそが、あなたの市場価値を最大化する鍵です。',
      color: 'from-pink-500 to-pink-700',
      bgColor: 'bg-gradient-to-br from-pink-500/10 to-pink-500/5'
    }
  }

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
            第二章
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EAEAEA]">
            私たちの哲学と方法論
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
            AIという<span className="font-medium">「手段」</span>からではなく、<br className="hidden md:block" />
            あなたの<span className="font-medium bg-gradient-to-r from-[#4A90E2] to-[#9013FE] bg-clip-text text-transparent">「目的」</span>から、<br className="md:hidden" />
            キャリア戦略を設計します。
          </p>
        </motion.div>

        {/* WHY-HOW-WHATの図 */}
        <div className="max-w-4xl mx-auto">
          {/* ステップナビゲーション */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-700">
              {Object.entries(steps).map(([key, step]) => (
                <button
                  key={key}
                  onClick={() => setActiveStep(key as 'why' | 'how' | 'what')}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeStep === key
                      ? 'bg-gradient-to-r ' + step.color + ' text-white shadow-lg'
                      : 'text-[#A0A0A0] hover:text-[#EAEAEA]'
                  }`}
                >
                  <span className="font-semibold">
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* ビジュアル表現（シンプルに） */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mb-16"
          >
            {/* 3つの円を並べた図 */}
            <div className="flex justify-center items-center gap-8">
              {Object.entries(steps).map(([key, step], index) => (
                <motion.div
                  key={key}
                  animate={{
                    scale: activeStep === key ? 1.1 : 1,
                    opacity: activeStep === key ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center ${
                    activeStep === key 
                      ? 'bg-gradient-to-br ' + step.color + ' shadow-2xl' 
                      : 'bg-gray-800 border border-gray-700'
                  } transition-all duration-300`}>
                    <span className={`text-lg md:text-2xl font-bold ${
                      activeStep === key ? 'text-white' : 'text-[#A0A0A0]'
                    }`}>{step.title}</span>
                  </div>
                  
                  {/* 矢印 */}
                  {index < 2 && (
                    <svg className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  )}
                </motion.div>
              ))}
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
              <div className={`${steps[activeStep].bgColor} rounded-2xl p-8 md:p-12 border border-gray-700/50 backdrop-blur-sm`}>
                <div className="text-center">
                  <h3 className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${steps[activeStep].color} bg-clip-text text-transparent`}>
                    {steps[activeStep].title}: {steps[activeStep].subtitle}
                  </h3>
                  <p className="text-xl md:text-2xl text-[#A0A0A0] mb-6">
                    {steps[activeStep].description}
                  </p>
                  <p className="text-lg text-[#A0A0A0] leading-relaxed">
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
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700">
              <p className="text-xl md:text-2xl text-[#EAEAEA] leading-relaxed">
                私たちは、まずあなたの<span className="font-semibold bg-gradient-to-r from-[#4A90E2] to-[#9013FE] bg-clip-text text-transparent">「Will」</span>を共に探求し、<br className="hidden md:block" />
                それを実現するための最短ルートとして<br className="md:hidden" />
                <span className="font-semibold text-purple-400">AI活用</span>を設計する、<br className="hidden md:block" />
                唯一のパートナーです。
              </p>
              <p className="mt-6 text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#4A90E2] via-purple-500 to-[#9013FE] bg-clip-text text-transparent">
                目的主導のアプローチこそが、<br className="md:hidden" />
                あなたの市場価値を最大化する鍵です。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}