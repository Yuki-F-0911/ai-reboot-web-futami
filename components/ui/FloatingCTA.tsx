'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface CTAConfig {
  id: string
  text: string
  href: string
  scrollThreshold: number // スクロール位置（0-1）
}

const ctaConfigs: CTAConfig[] = [
  {
    id: 'academy-details',
    text: 'AIリブートアカデミーの詳細をみる',
    href: '/academy',
    scrollThreshold: 0.25, // Chapter 2付近（25%）
  },
  {
    id: 'free-session',
    text: '無料説明会に申し込む',
    href: '/academy#application',
    scrollThreshold: 0.55, // Chapter 4付近（55%）
  },
]

export default function FloatingCTA() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeCTA, setActiveCTA] = useState<CTAConfig | null>(null)
  const [hideTemporarily, setHideTemporarily] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollTop = window.scrollY
      const progress = scrollTop / scrollHeight
      setScrollProgress(progress)

      // アクティブなCTAを決定
      let newActiveCTA: CTAConfig | null = null
      for (let i = ctaConfigs.length - 1; i >= 0; i--) {
        if (progress >= ctaConfigs[i].scrollThreshold) {
          newActiveCTA = ctaConfigs[i]
          break
        }
      }
      
      if (newActiveCTA?.id !== activeCTA?.id) {
        setActiveCTA(newActiveCTA)
        setHideTemporarily(false) // CTAが変わったら再表示
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初期値設定

    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeCTA])

  const handleClose = () => {
    setHideTemporarily(true)
  }

  return (
    <AnimatePresence mode="wait">
      {activeCTA && !hideTemporarily && (
        <motion.div
          key={activeCTA.id}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}
          className="fixed bottom-4 right-4 sm:right-20 md:bottom-4 md:right-24 z-40 flex items-center gap-2 pr-5"
        >
          {/* CTAボタンコンテナ（パルスエフェクト用） */}
          <div className="relative">
            {/* パルスエフェクト */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(151, 71, 255, 0.4)',
                  '0 0 0 20px rgba(151, 71, 255, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
            
            {/* CTAボタン本体 */}
            <Link
              href={activeCTA.href}
              className="group relative block"
            >
              <motion.div
                className="relative bg-gradient-to-r from-will-primary to-will-secondary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg flex items-center gap-2 sm:gap-3 hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              {/* 背景のアニメーション */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-will-secondary to-will-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              {/* テキスト */}
              <span className="relative font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">
                {activeCTA.text}
              </span>
              
              {/* 矢印アイコン */}
              <motion.svg
                className="relative w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>

              </motion.div>
            </Link>
          </div>

          {/* 閉じるボタン */}
          <button
            onClick={handleClose}
            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-white transition-colors group"
            aria-label="CTAを閉じる"
          >
            <svg
              className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}