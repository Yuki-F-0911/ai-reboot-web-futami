'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface PersonGlitchProps {
  className?: string
  delay?: number
}

// 様々な人称のバリエーション
const personVariations = [
  { text: 'あなた', font: 'font-sans' },
  { text: '私', font: 'font-serif' },
  { text: '僕', font: 'font-mono' },
  { text: '君', font: 'font-sans font-light' },
  { text: '貴社', font: 'font-serif font-bold' },
  { text: '我々', font: 'font-black' },
  { text: '自分', font: 'font-medium' },
  { text: '俺', font: 'font-bold' },
  { text: 'きみ', font: 'font-light' },
  { text: '諸君', font: 'font-serif italic' },
  { text: 'YOU', font: 'font-mono uppercase' },
  { text: '汝', font: 'font-serif' },
  { text: '皆様', font: 'font-medium' },
  { text: '各位', font: 'font-bold' },
  { text: 'みんな', font: 'font-light' },
]

export default function PersonGlitch({ className = '', delay = 0 }: PersonGlitchProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGlitching, setIsGlitching] = useState(true)
  const [displayText, setDisplayText] = useState(personVariations[0].text)
  const [displayFont, setDisplayFont] = useState(personVariations[0].font)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    let glitchInterval: NodeJS.Timeout | null = null
    let stabilizeTimeout: NodeJS.Timeout | null = null

    // 初期遅延
    const startTimeout = setTimeout(() => {
      // グリッチ開始（最適化: バッチ更新）
      glitchInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * personVariations.length)
        // 状態更新を1回にまとめる
        requestAnimationFrame(() => {
          setCurrentIndex(randomIndex)
          setDisplayText(personVariations[randomIndex].text)
          setDisplayFont(personVariations[randomIndex].font)
        })
      }, 100) // 100msごとに変化（少し遅く）

      // 1.5秒後に「あなた」で安定
      stabilizeTimeout = setTimeout(() => {
        if (glitchInterval) clearInterval(glitchInterval)
        setIsGlitching(false)
        setCurrentIndex(0)
        setDisplayText(personVariations[0].text)
        setDisplayFont(personVariations[0].font)

        // 安定後も時々グリッチ
        const occasionalGlitch = () => {
          setTimeout(() => {
            // 短いグリッチ
            const glitchDuration = 100 + Math.random() * 200
            const glitchCount = Math.floor(glitchDuration / 50)
            let count = 0

            const tempGlitch = setInterval(() => {
              const randomIndex = Math.floor(Math.random() * personVariations.length)
              setDisplayText(personVariations[randomIndex].text)
              setDisplayFont(personVariations[randomIndex].font)
              count++

              if (count >= glitchCount) {
                clearInterval(tempGlitch)
                setDisplayText(personVariations[0].text)
                setDisplayFont(personVariations[0].font)
                occasionalGlitch() // 次のグリッチをスケジュール
              }
            }, 50)
          }, 3000 + Math.random() * 5000) // 3-8秒後に次のグリッチ
        }

        occasionalGlitch()
      }, 1500)
    }, delay)

    return () => {
      if (glitchInterval) clearInterval(glitchInterval)
      if (stabilizeTimeout) clearTimeout(stabilizeTimeout)
      clearTimeout(startTimeout)
    }
  }, [isClient, delay])

  if (!isClient) {
    return <span className={className}>あなた</span>
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