'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const messages = [
  "あなたの物語を、AIは待っている",
  "AIと共に歩む、新しい自分へ",
  "物語の主人公は、あなた自身"
]

export default function HeroSection() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [showSubMessage, setShowSubMessage] = useState(false)
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    // メッセージを順番に表示
    const timer1 = setTimeout(() => {
      if (currentMessage < messages.length - 1) {
        setCurrentMessage(1)
      }
    }, 3000)

    const timer2 = setTimeout(() => {
      if (currentMessage < messages.length - 1) {
        setCurrentMessage(2)
      }
    }, 6000)

    const timer3 = setTimeout(() => {
      setShowSubMessage(true)
    }, 8000)

    const timer4 = setTimeout(() => {
      setShowCTA(true)
    }, 9000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* 背景の微細なパーティクル（控えめ） */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-will-primary/5 via-transparent to-will-secondary/5" />
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* メインメッセージ */}
        <div className="min-h-[200px] flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight"
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                {messages[currentMessage]}
              </span>
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* サブメッセージ */}
        <AnimatePresence>
          {showSubMessage && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-600 mb-12 font-light"
            >
              Will（意志）から始まる、本当のAI活用
            </motion.p>
          )}
        </AnimatePresence>

        {/* CTA（控えめ） */}
        <AnimatePresence>
          {showCTA && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex flex-col items-center gap-4"
            >
              <button
                onClick={scrollToNext}
                className="group text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                <span className="text-sm tracking-wider">自分のWillを見つける</span>
              </button>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 下部のグラデーション（次のセクションへの自然な遷移） */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}