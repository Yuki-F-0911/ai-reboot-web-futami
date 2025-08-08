'use client'

import React, { useEffect, useState, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'

interface UserNameGlitchProps {
  userName: string
  className?: string
  delay?: number
}

// ユーザー名のバリエーション生成
const generateVariations = (userName: string) => {
  // デフォルトのバリエーション
  const defaultVariations = [
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
  
  // ユーザー名が入力されている場合は、それも含める
  if (userName && userName !== '君' && userName !== 'あなた') {
    // ユーザー名のバリエーションとデフォルトを混ぜる
    return [
      { text: userName, font: 'font-sans' },
      { text: '君', font: 'font-sans font-light' },
      { text: userName.toUpperCase(), font: 'font-mono uppercase' },
      { text: 'YOU', font: 'font-mono uppercase' },
      { text: `${userName}様`, font: 'font-serif' },
      { text: '汝', font: 'font-serif' },
      { text: userName, font: 'font-bold' },
      { text: '私', font: 'font-serif' },
      { text: `${userName}さん`, font: 'font-light' },
      { text: 'きみ', font: 'font-light' },
      { text: userName, font: 'font-black' },
    ]
  }
  
  return defaultVariations
}

export default function UserNameGlitch({ userName, className = '', delay = 0 }: UserNameGlitchProps) {
  const [displayText, setDisplayText] = useState(userName)
  const [displayFont, setDisplayFont] = useState('font-sans')
  const [isGlitching, setIsGlitching] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [glitchChars, setGlitchChars] = useState<string[]>([])
  const [isTransitioning, setIsTransitioning] = useState(false)
  const initialEffectDone = useRef(false)
  // useMemoで配列の再生成を防ぐ
  const personVariations = useMemo(() => generateVariations(userName), [userName])

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
        // ユーザー名に戻す
        setDisplayText(userName)
        setDisplayFont('font-sans')
        initialEffectDone.current = true
      }, 1500)
    }, delay + 300)

    return () => {
      clearTimeout(startTimeout)
      if (stabilizeTimeout) clearTimeout(stabilizeTimeout)
      if (glitchInterval) clearInterval(glitchInterval)
    }
  }, [isClient, delay, userName, personVariations])

  // 余韻グリッチエフェクト（初期エフェクト終了後）
  useEffect(() => {
    if (!isClient) return

    // 初期エフェクトが終わるまで待つ
    const waitForInitial = setTimeout(() => {
      if (!initialEffectDone.current) return

      const doGlitch = () => {
        const glitchType = Math.random()
        
        if (glitchType < 0.3) {
          // 30%: ブレ演出（現在の表示テキストのまま）
          setIsGlitching(true)
          setTimeout(() => {
            setIsGlitching(false)
          }, 150)
        } else if (glitchType < 0.6) {
          // 30%: フォントだけ変化→明滅→単語変化
          const fonts = ['font-serif italic', 'font-mono', 'font-black', 'font-light']
          setDisplayFont(fonts[Math.floor(Math.random() * fonts.length)])
          
          setTimeout(() => {
            setIsGlitching(true)
            setTimeout(() => {
              const randomIndex = Math.floor(Math.random() * personVariations.length)
              setDisplayText(personVariations[randomIndex].text)
              setDisplayFont(personVariations[randomIndex].font)
              setIsGlitching(false)
              
              // 時々元に戻す（50%の確率）
              if (Math.random() > 0.5) {
                setTimeout(() => {
                  setDisplayText(userName)
                  setDisplayFont('font-sans')
                }, 150)
              }
            }, 50)
          }, 100)
        } else {
          // 40%: デジタルグリッチ演出付き切り替え
          const randomIndex = Math.floor(Math.random() * personVariations.length)
          const targetText = personVariations[randomIndex].text
          const targetFont = personVariations[randomIndex].font
          
          // デジタルグリッチ開始
          setIsTransitioning(true)
          const glitchDuration = 300
          const glitchSteps = 8
          const stepDuration = glitchDuration / glitchSteps
          
          let currentStep = 0
          const glitchInterval = setInterval(() => {
            currentStep++
            
            if (currentStep < glitchSteps / 2) {
              // 前半：現在の文字が崩れていく
              const chars = displayText.split('').map((char, i) => {
                if (Math.random() > 0.5) {
                  const glitchSet = '█▓▒░╳╱╲┃━┏┓┗┛┣┫┳┻╋'
                  return glitchSet[Math.floor(Math.random() * glitchSet.length)]
                }
                return char
              })
              setGlitchChars(chars)
            } else if (currentStep === Math.floor(glitchSteps / 2)) {
              // 中間：完全にグリッチ
              setDisplayText(targetText)
              setDisplayFont(targetFont)
              setIsGlitching(true)
            } else {
              // 後半：新しい文字が形成されていく
              const chars = targetText.split('').map((char, i) => {
                if (Math.random() > (currentStep - glitchSteps / 2) / (glitchSteps / 2)) {
                  const glitchSet = '▓▒░╬═║'
                  return glitchSet[Math.floor(Math.random() * glitchSet.length)]
                }
                return char
              })
              setGlitchChars(chars)
            }
            
            if (currentStep >= glitchSteps) {
              clearInterval(glitchInterval)
              setGlitchChars([])
              setIsTransitioning(false)
              setIsGlitching(false)
              
              // 30%の確率で元に戻す、70%はそのまま
              if (Math.random() < 0.3) {
                setTimeout(() => {
                  setIsTransitioning(true)
                  let returnStep = 0
                  const returnInterval = setInterval(() => {
                    returnStep++
                    
                    if (returnStep < 4) {
                      const chars = targetText.split('').map((char) => {
                        if (Math.random() > 0.6) {
                          return '░▒▓'[Math.floor(Math.random() * 3)]
                        }
                        return char
                      })
                      setGlitchChars(chars)
                    } else {
                      setDisplayText(userName)
                      setDisplayFont('font-sans')
                      setGlitchChars([])
                      setIsTransitioning(false)
                      clearInterval(returnInterval)
                    }
                  }, 30)
                }, 150)
              }
            }
          }, stepDuration)
        }
      }

      // 定期的にグリッチ（PersonGlitchと同じ頻度）
      const afterglowInterval = setInterval(() => {
        // 40%の確率でグリッチ
        if (Math.random() < 0.40) {
          doGlitch()
        }
      }, 2000) // 2秒ごとにチェック

      return () => clearInterval(afterglowInterval)
    }, 2000) // 初期エフェクト終了まで2秒待つ

    return () => clearTimeout(waitForInitial)
  }, [isClient, userName, personVariations])

  if (!isClient) {
    return <span className={className}>{userName}</span>
  }

  return (
    <motion.span
      className={`inline-block ${displayFont} ${className}`}
      animate={{
        opacity: isGlitching ? [0.7, 1, 0.8, 1] : 1,
        scale: isGlitching 
          ? [1, 1.5, 0.7, 1.3, 0.9, 1.2, 1]
          : 1,
        x: isGlitching ? [0, -3, 2, -1, 0] : 0,
        y: isGlitching ? [0, 2, -3, 1, 0] : 0,
        rotateZ: isGlitching ? [0, -5, 3, -2, 0] : 0,
      }}
      transition={{
        duration: isGlitching ? 0.15 : 0.3,
        ease: 'linear',
      }}
      style={{
        textShadow: isGlitching || isTransitioning
          ? `2px 2px 0 rgba(255, 0, 100, 0.7), -2px -2px 0 rgba(0, 255, 200, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)`
          : '0 2px 8px rgba(0, 0, 0, 0.2)',
        color: isTransitioning 
          ? '#00ffcc'
          : displayText !== userName
          ? (Math.random() > 0.5 ? '#ff006a' : '#00ffcc')
          : '#1a1a1a',
        filter: isGlitching || isTransitioning ? `contrast(1.5) brightness(1.2)` : 'none',
      }}
    >
      {isTransitioning && glitchChars.length > 0 ? (
        // デジタルグリッチ表示
        glitchChars.map((char, i) => (
          <span 
            key={i} 
            style={{ 
              display: 'inline-block',
              animation: `glitch-${i} 0.1s infinite`,
              color: Math.random() > 0.5 ? '#ff006a' : '#00ffcc',
            }}
          >
            {char}
          </span>
        ))
      ) : (
        displayText
      )}
    </motion.span>
  )
}