'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface StoryGlitchProps {
  className?: string
  delay?: number
}

// 物語に関連する様々なバリエーション - メッセージの本質を補強
const storyVariations = [
  { text: '物語', font: 'font-sans' },
  { text: 'WILL', font: 'font-mono uppercase tracking-wider' },
  { text: '意志', font: 'font-serif font-bold' },
  { text: '未来', font: 'font-bold' },
  { text: 'story', font: 'font-mono' },
  { text: '意思', font: 'font-black' },
  { text: 'will', font: 'font-mono italic' },
  { text: '可能性', font: 'font-medium' },
  { text: '創造', font: 'font-serif' },
  { text: 'future', font: 'font-mono lowercase' },
  { text: '変革', font: 'font-bold' },
  { text: 'vision', font: 'font-mono' },
  { text: '志', font: 'font-black' },
  { text: '挑戦', font: 'font-medium' },
  { text: '革新', font: 'font-serif font-bold' },
]

export default function StoryGlitch({ className = '', delay = 0 }: StoryGlitchProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGlitching, setIsGlitching] = useState(false)
  const [displayText, setDisplayText] = useState(storyVariations[0].text)
  const [displayFont, setDisplayFont] = useState(storyVariations[0].font)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    let glitchInterval: NodeJS.Timeout | null = null
    let stabilizeTimeout: NodeJS.Timeout | null = null

    // 初期遅延（最低100ms確保して初期表示を保証）
    const startTimeout = setTimeout(() => {
      setIsGlitching(true)
      // グリッチ開始（最適化: バッチ更新）
      glitchInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * storyVariations.length)
        // 状態更新を1回にまとめる
        requestAnimationFrame(() => {
          setCurrentIndex(randomIndex)
          setDisplayText(storyVariations[randomIndex].text)
          setDisplayFont(storyVariations[randomIndex].font)
        })
      }, 100) // 100msごとに変化

      // 1.5秒後に「物語」で安定
      stabilizeTimeout = setTimeout(() => {
        if (glitchInterval) clearInterval(glitchInterval)
        setIsGlitching(false)
        setCurrentIndex(0)
        setDisplayText(storyVariations[0].text)
        setDisplayFont(storyVariations[0].font)
      }, 1500)
    }, Math.max(100, delay))

    return () => {
      if (glitchInterval) clearInterval(glitchInterval)
      if (stabilizeTimeout) clearTimeout(stabilizeTimeout)
      clearTimeout(startTimeout)
    }
  }, [isClient, delay])

  if (!isClient) {
    return <span className={className}>物語</span>
  }

  return (
    <motion.span
      className={`inline-block ${displayFont} ${className}`}
      animate={{
        opacity: isGlitching ? [0.7, 1, 0.8, 1] : 1,
        scale: isGlitching ? [1, 1.05, 0.95, 1] : 1,
        x: isGlitching ? [0, -1, 1, 0] : 0,
        y: isGlitching ? [0, 1, -1, 0] : 0,
      }}
      transition={{
        duration: isGlitching ? 0.1 : 0.3,
        ease: 'linear',
      }}
      style={{
        textShadow: isGlitching
          ? `1px 1px 0 rgba(255, 0, 100, 0.5), -1px -1px 0 rgba(0, 255, 200, 0.5)`
          : '0 2px 8px rgba(0, 0, 0, 0.2)',
        color: isGlitching
          ? currentIndex % 3 === 0
            ? '#ff006a'
            : currentIndex % 3 === 1
            ? '#00ffcc'
            : '#1a1a1a'
          : '#1a1a1a',
        filter: isGlitching
          ? `contrast(1.3)`  // シンプルなフィルターに最適化
          : 'none',
      }}
    >
      {displayText}
    </motion.span>
  )
}