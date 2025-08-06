'use client'

import React, { useEffect, useState, useRef } from 'react'
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
  const [displayText, setDisplayText] = useState('物語')
  const [displayFont, setDisplayFont] = useState('font-sans')
  const [isGlitching, setIsGlitching] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const initialEffectDone = useRef(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // 初期グリッチエフェクト（一度だけ実行）
  useEffect(() => {
    if (!isClient || initialEffectDone.current) return

    let glitchInterval: NodeJS.Timeout | null = null
    let stabilizeTimeout: NodeJS.Timeout | null = null

    // 遅延後にグリッチ開始
    const startTimeout = setTimeout(() => {
      setIsGlitching(true)
      
      // グリッチアニメーション
      glitchInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * storyVariations.length)
        setDisplayText(storyVariations[randomIndex].text)
        setDisplayFont(storyVariations[randomIndex].font)
      }, 100)

      // グリッチ終了と収束
      stabilizeTimeout = setTimeout(() => {
        if (glitchInterval) {
          clearInterval(glitchInterval)
          glitchInterval = null
        }
        setIsGlitching(false)
        // 確実に「物語」に戻す
        setDisplayText('物語')
        setDisplayFont('font-sans')
        initialEffectDone.current = true
      }, 1500)
    }, delay + 300)

    return () => {
      clearTimeout(startTimeout)
      if (stabilizeTimeout) clearTimeout(stabilizeTimeout)
      if (glitchInterval) clearInterval(glitchInterval)
    }
  }, [isClient, delay])

  // 余韻グリッチエフェクト（初期エフェクト終了後）
  useEffect(() => {
    if (!isClient) return

    // 初期エフェクトが終わるまで待つ
    const waitForInitial = setTimeout(() => {
      if (!initialEffectDone.current) return

      const doGlitch = () => {
        const randomIndex = Math.floor(Math.random() * storyVariations.length)
        setDisplayText(storyVariations[randomIndex].text)
        setDisplayFont(storyVariations[randomIndex].font)
        
        // 100-300ms後に必ず「物語」に戻す
        setTimeout(() => {
          setDisplayText('物語')
          setDisplayFont('font-sans')
        }, 100 + Math.random() * 200)
      }

      // 定期的にグリッチ
      const afterglowInterval = setInterval(() => {
        // 40%の確率でグリッチ
        if (Math.random() < 0.40) {
          doGlitch()
        }
      }, 2000) // 2秒ごとにチェック

      return () => clearInterval(afterglowInterval)
    }, 2200) // 初期エフェクト終了まで2.2秒待つ（PersonGlitchより少し遅め）

    return () => clearTimeout(waitForInitial)
  }, [isClient])

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
        color: displayText !== '物語'
          ? (Math.random() > 0.5 ? '#ff006a' : '#00ffcc')
          : '#1a1a1a',
        filter: isGlitching ? `contrast(1.3)` : 'none',
      }}
    >
      {displayText}
    </motion.span>
  )
}