'use client'

import React, { useEffect, useState, useRef } from 'react'
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
  const [displayText, setDisplayText] = useState('あなた')
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
        const randomIndex = Math.floor(Math.random() * personVariations.length)
        setDisplayText(personVariations[randomIndex].text)
        setDisplayFont(personVariations[randomIndex].font)
      }, 100)

      // グリッチ終了と収束
      stabilizeTimeout = setTimeout(() => {
        if (glitchInterval) {
          clearInterval(glitchInterval)
          glitchInterval = null
        }
        setIsGlitching(false)
        // 確実に「あなた」に戻す
        setDisplayText('あなた')
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
        const randomIndex = Math.floor(Math.random() * personVariations.length)
        setDisplayText(personVariations[randomIndex].text)
        setDisplayFont(personVariations[randomIndex].font)
        
        // 100-300ms後に必ず「あなた」に戻す
        setTimeout(() => {
          setDisplayText('あなた')
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
    }, 2000) // 初期エフェクト終了まで2秒待つ

    return () => clearTimeout(waitForInitial)
  }, [isClient])

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
        color: displayText !== 'あなた'
          ? (Math.random() > 0.5 ? '#ff006a' : '#00ffcc')
          : '#1a1a1a',
        filter: isGlitching ? `contrast(1.3)` : 'none',
      }}
    >
      {displayText}
    </motion.span>
  )
}