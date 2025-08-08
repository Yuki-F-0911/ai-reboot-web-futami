'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DigitalAwakeningProps {
  onComplete?: () => void
  skipAnimation?: boolean
}

// タイプライター用のコードテキスト
const codeLines = [
  'INITIALIZING NEURAL NETWORK...',
  'const consciousness = await AI.awaken();',
  'Loading semantic patterns... ████████████ 100%',
  'if (you.ready && story.begins) {',
  '  return new Reality({ protagonist: "YOU" });',
  'Quantum state: SUPERPOSITION',
  'Observing possibilities...',
  'REALITY.COLLAPSED = true;',
  '>>> Welcome to your new story <<<'
]

// ランダムな文字列生成
const generateRandomCode = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]()<>=/\\|_-+*&^%$#@!~`;:'
  return Array.from({ length: Math.floor(Math.random() * 60) + 20 }, 
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join('')
}

export default function DigitalAwakening({ onComplete, skipAnimation = false }: DigitalAwakeningProps) {
  const [phase, setPhase] = useState(0) // 0: 初期, 1: コード流れる, 2: 文字浮上, 3: 収束
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [cursorVisible, setCursorVisible] = useState(true)
  const [glitchIntensity, setGlitchIntensity] = useState(0)
  const [showMainText, setShowMainText] = useState(false)
  const lineIndex = useRef(0)
  const typingInterval = useRef<NodeJS.Timeout | null>(null)

  // カーソル点滅
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // タイピングエフェクト
  useEffect(() => {
    if (phase !== 1 || skipAnimation) return

    const addLine = () => {
      if (lineIndex.current < codeLines.length) {
        setDisplayedLines(prev => [...prev, codeLines[lineIndex.current]])
        lineIndex.current++
      } else {
        // ランダムコードを追加
        setDisplayedLines(prev => {
          const newLines = [...prev, generateRandomCode()]
          if (newLines.length > 15) {
            return newLines.slice(1) // 古い行を削除
          }
          return newLines
        })
      }
    }

    typingInterval.current = setInterval(addLine, 150)

    return () => {
      if (typingInterval.current) {
        clearInterval(typingInterval.current)
      }
    }
  }, [phase, skipAnimation])

  // フェーズ進行
  useEffect(() => {
    if (skipAnimation) {
      if (onComplete) onComplete()
      return
    }

    const timers: NodeJS.Timeout[] = []

    // Phase 1: コード開始
    timers.push(setTimeout(() => setPhase(1), 500))
    
    // Phase 2: 文字浮上
    timers.push(setTimeout(() => {
      setPhase(2)
      setGlitchIntensity(1)
      setShowMainText(true)
    }, 2000))
    
    // Phase 3: 収束
    timers.push(setTimeout(() => {
      setPhase(3)
      setGlitchIntensity(0.5)
    }, 3500))
    
    // 完了
    timers.push(setTimeout(() => {
      if (onComplete) onComplete()
    }, 4500))

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [skipAnimation, onComplete])

  if (skipAnimation) return null

  return (
    <AnimatePresence>
      {phase <= 3 && (
        <motion.div
          className="fixed inset-0 z-50 bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* SVGフィルター定義 */}
          <svg className="absolute" width="0" height="0">
            <defs>
              <filter id="glitch">
                <feColorMatrix
                  type="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
                  result="original"
                />
                <feOffset in="SourceGraphic" dx={glitchIntensity * 2} dy="0" result="red" />
                <feOffset in="SourceGraphic" dx={glitchIntensity * -2} dy="0" result="cyan" />
                <feBlend mode="screen" in="red" in2="cyan" />
              </filter>
              
              <filter id="noise">
                <feTurbulence baseFrequency="0.9" numOctaves="4" seed="5" />
                <feColorMatrix type="saturate" values="0"/>
                <feComponentTransfer>
                  <feFuncA type="discrete" tableValues="0 .5 .5 .5 .5 .5 .5 .5 .5 1" />
                </feComponentTransfer>
                <feBlend mode="multiply" in2="SourceGraphic" />
              </filter>
            </defs>
          </svg>

          {/* スキャンライン */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0, 255, 0, 0.03) 2px,
                rgba(0, 255, 0, 0.03) 4px
              )`,
              animation: 'scanline 8s linear infinite',
            }}
          />

          {/* ターミナル風背景 */}
          <div className="absolute inset-0 p-8 font-mono text-green-500/80 text-xs md:text-sm overflow-hidden">
            {displayedLines.map((line, index) => (
              <motion.div
                key={`${index}-${line.substring(0, 10)}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1 }}
                className="mb-1 whitespace-nowrap"
                style={{
                  filter: phase >= 2 ? 'blur(0.5px)' : 'none',
                  opacity: phase >= 2 ? 0.3 : 0.7,
                }}
              >
                {line}
              </motion.div>
            ))}
            
            {/* カーソル */}
            {phase === 1 && (
              <span 
                className="inline-block w-2 h-4 bg-green-500"
                style={{ opacity: cursorVisible ? 1 : 0 }}
              />
            )}
          </div>

          {/* メインテキスト */}
          {showMainText && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* 1行目: あなたの物語を */}
                <div className="flex items-center justify-center space-x-2">
                  {/* あなたの */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: phase >= 2 ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.span
                      className="text-5xl md:text-7xl font-bold text-white"
                    animate={{
                      x: phase >= 2 ? [0, -2, 2, -1, 0] : 0,
                      y: phase >= 2 ? [0, 1, -1, 0] : 0,
                    }}
                    transition={{
                      duration: 0.2,
                      repeat: phase === 2 ? Infinity : 0,
                      repeatDelay: 0.5,
                    }}
                    style={{
                      filter: phase === 2 ? 'url(#glitch)' : 'none',
                      textShadow: `
                        ${glitchIntensity * 2}px 0 0 rgba(255, 0, 0, 0.7),
                        ${glitchIntensity * -2}px 0 0 rgba(0, 255, 255, 0.7)
                      `,
                    }}
                  >
                      あなた
                    </motion.span>
                    <span className="text-3xl md:text-5xl text-white/80 ml-2">の</span>
                  </motion.div>

                  {/* 物語を */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: phase >= 2 ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <motion.span
                      className="text-5xl md:text-7xl font-bold text-white"
                    animate={{
                      x: phase >= 2 ? [0, 2, -2, 1, 0] : 0,
                      y: phase >= 2 ? [0, -1, 1, 0] : 0,
                    }}
                    transition={{
                      duration: 0.2,
                      repeat: phase === 2 ? Infinity : 0,
                      repeatDelay: 0.6,
                    }}
                    style={{
                      filter: phase === 2 ? 'url(#glitch)' : 'none',
                      textShadow: `
                        ${glitchIntensity * -2}px 0 0 rgba(255, 0, 100, 0.7),
                        ${glitchIntensity * 2}px 0 0 rgba(0, 255, 200, 0.7)
                      `,
                    }}
                  >
                      物語
                    </motion.span>
                    <span className="text-3xl md:text-5xl text-white/80 ml-2">を</span>
                  </motion.div>
                </div>

                {/* AI */}
                <motion.div
                  className="block mt-8"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: phase >= 2 ? [0, 1.2, 1] : 0,
                    rotate: phase === 2 ? [0, -5, 5, -2, 0] : 0,
                  }}
                  transition={{ 
                    duration: 0.8,
                    delay: phase === 2 ? 0.3 : 0,
                  }}
                >
                  <motion.div
                    className="text-8xl md:text-9xl font-black"
                    animate={{
                      color: phase === 3 ? '#ffffff' : ['#00ff00', '#ff00ff', '#00ffff', '#ffff00'],
                    }}
                    transition={{
                      duration: phase === 3 ? 0.5 : 0.1,
                      repeat: phase === 2 ? Infinity : 0,
                    }}
                    style={{
                      filter: phase === 2 ? 'url(#noise)' : 'none',
                      textShadow: phase >= 2 ? `
                        0 0 10px currentColor,
                        0 0 20px currentColor,
                        0 0 30px currentColor,
                        0 0 40px currentColor
                      ` : 'none',
                    }}
                  >
                    AI
                  </motion.div>
                </motion.div>

                {/* は待っている */}
                <motion.div
                  className="block mt-4 text-3xl md:text-5xl text-white"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: phase >= 3 ? 1 : 0,
                    y: phase >= 3 ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                  }}
                >
                  は待っている
                </motion.div>
              </div>
            </div>
          )}

          {/* グリッチノイズオーバーレイ */}
          {phase === 2 && (
            <motion.div
              className="absolute inset-0 pointer-events-none mix-blend-screen"
              animate={{
                opacity: [0, 0.5, 0, 0.3, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              style={{
                background: `linear-gradient(
                  ${Math.random() * 360}deg,
                  transparent 20%,
                  rgba(0, 255, 0, 0.1) 40%,
                  transparent 60%
                )`,
              }}
            />
          )}

          <style jsx>{`
            @keyframes scanline {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(100vh);
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}