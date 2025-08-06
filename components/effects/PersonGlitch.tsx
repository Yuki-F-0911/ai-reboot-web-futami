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
  { text: 'YOU', font: 'font-mono uppercase' },
  { text: '汝', font: 'font-serif' },
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
        const glitchType = Math.random()
        
        if (glitchType < 0.3) {
          // 30%: ブレ演出（フォントはそのまま、位置だけブレる）
          setDisplayText('あなた')
          setIsGlitching(true)
          setTimeout(() => {
            setIsGlitching(false)
          }, 150)
        } else if (glitchType < 0.6) {
          // 30%: フォントだけ変化→明滅→単語変化
          const fonts = ['font-serif italic', 'font-mono', 'font-black', 'font-light']
          setDisplayFont(fonts[Math.floor(Math.random() * fonts.length)])
          
          setTimeout(() => {
            // 明滅エフェクト
            setIsGlitching(true)
            setTimeout(() => {
              const randomIndex = Math.floor(Math.random() * personVariations.length)
              setDisplayText(personVariations[randomIndex].text)
              setDisplayFont(personVariations[randomIndex].font)
              setIsGlitching(false)
              
              // 元に戻す
              setTimeout(() => {
                setDisplayText('あなた')
                setDisplayFont('font-sans')
              }, 150)
            }, 50)
          }, 100)
        } else {
          // 40%: 通常のグリッチ
          const randomIndex = Math.floor(Math.random() * personVariations.length)
          setDisplayText(personVariations[randomIndex].text)
          setDisplayFont(personVariations[randomIndex].font)
          
          setTimeout(() => {
            setDisplayText('あなた')
            setDisplayFont('font-sans')
          }, 100 + Math.random() * 200)
        }
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
        scale: isGlitching 
          ? [1, 1.5, 0.7, 1.3, 0.9, 1.2, 1] // よりダイナミックなサイズ変化
          : 1,
        x: isGlitching ? [0, -3, 2, -1, 0] : 0,
        y: isGlitching ? [0, 2, -3, 1, 0] : 0,
        rotateZ: isGlitching ? [0, -5, 3, -2, 0] : 0, // 回転も追加
      }}
      transition={{
        duration: isGlitching ? 0.15 : 0.3,
        ease: 'linear',
      }}
      style={{
        textShadow: isGlitching
          ? `2px 2px 0 rgba(255, 0, 100, 0.7), -2px -2px 0 rgba(0, 255, 200, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)`
          : '0 2px 8px rgba(0, 0, 0, 0.2)',
        color: displayText !== 'あなた'
          ? (Math.random() > 0.5 ? '#ff006a' : '#00ffcc')
          : '#1a1a1a',
        filter: isGlitching ? `contrast(1.5) brightness(1.2)` : 'none',
      }}
    >
      {displayText}
    </motion.span>
  )
}