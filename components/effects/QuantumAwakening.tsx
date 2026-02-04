'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface QuantumAwakeningProps {
  onComplete?: () => void
  skipAnimation?: boolean
}

// 量子ノイズパーティクル
const QuantumParticle = ({ phase }: { phase: number }) => {
  const seed = useRef(Math.random())
  const position = useRef({
    x: Math.random() * 100,
    y: Math.random() * 100,
  })
  
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{
        left: `${position.current.x}%`,
        top: `${position.current.y}%`,
        backgroundColor: phase === 0 ? '#fff' : '#9747ff',
      }}
      animate={{
        opacity: phase === 0 ? [0, 1, 0] : [0, 0.8, 0],
        scale: phase === 0 ? [0, 1.5, 0] : [0, 2, 0],
      }}
      transition={{
        duration: 1 + seed.current,
        delay: seed.current * 0.5,
        repeat: phase === 0 ? Infinity : 0,
        ease: 'easeInOut',
      }}
    />
  )
}

// 重ね合わせ状態のテキスト
const SuperpositionText = ({ 
  variants, 
  phase,
  targetX,
  targetY,
  delay = 0 
}: { 
  variants: string[]
  phase: number
  targetX: number
  targetY: number
  delay?: number
}) => {
  const positions = useRef(
    variants.map(() => ({
      x: (Math.random() - 0.5) * window.innerWidth,
      y: (Math.random() - 0.5) * window.innerHeight,
    }))
  )

  return (
    <>
      {variants.map((variant, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl md:text-6xl font-bold"
          style={{
            left: '50%',
            top: '50%',
          }}
          initial={{
            x: positions.current[i].x,
            y: positions.current[i].y,
            opacity: 0,
          }}
          animate={{
            x: phase === 2 ? targetX : positions.current[i].x,
            y: phase === 2 ? targetY : positions.current[i].y,
            opacity: phase === 1 ? 0.3 + (i === 0 ? 0.4 : 0) : phase === 2 ? (i === 0 ? 1 : 0) : 0,
            scale: phase === 2 && i === 0 ? 1 : 0.8,
            filter: phase === 1 ? 'blur(2px)' : phase === 2 && i === 0 ? 'blur(0px)' : 'blur(4px)',
          }}
          transition={{
            duration: 1.5,
            delay: delay + i * 0.1,
            ease: phase === 2 ? 'easeInOut' : 'easeOut',
          }}
        >
          <span
            style={{
              color: i === 0 ? '#1a1a1a' : ['#9747ff', '#ff4b8b', '#00ffcc'][i % 3],
              textShadow: phase === 2 && i === 0 
                ? '0 4px 20px rgba(0,0,0,0.3)' 
                : `0 0 20px ${['#9747ff', '#ff4b8b', '#00ffcc'][i % 3]}`,
            }}
          >
            {variant}
          </span>
        </motion.div>
      ))}
    </>
  )
}

export default function QuantumAwakening({ onComplete, skipAnimation = false }: QuantumAwakeningProps) {
  const [phase, setPhase] = useState(0) // 0: 混沌, 1: 重ね合わせ, 2: 収束, 3: 完了
  const [isClient, setIsClient] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
    
    // モバイル判定
    setIsMobile(window.innerWidth < 768)
    
    // アクセシビリティ設定チェック
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
  }, [])

  // マウス追従
  useEffect(() => {
    if (!isClient) return

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isClient])

  // フェーズ進行
  useEffect(() => {
    if (!isClient || skipAnimation || prefersReducedMotion) {
      if (onComplete) onComplete()
      return
    }

    const timers: NodeJS.Timeout[] = []
    
    // モバイルは短縮版
    const duration = isMobile ? 0.7 : 1

    // 第1幕：混沌
    timers.push(
      setTimeout(() => setPhase(1), 1000 * duration)
    )

    // 第2幕：重ね合わせ
    timers.push(
      setTimeout(() => setPhase(2), 2000 * duration)
    )

    // 第3幕：収束
    timers.push(
      setTimeout(() => {
        setPhase(3)
        if (onComplete) {
          setTimeout(onComplete, 500)
        }
      }, 3500 * duration)
    )

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [isClient, skipAnimation, onComplete, prefersReducedMotion, isMobile])

  if (!isClient) return null
  if (skipAnimation) return null

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-50 bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* 量子ノイズ背景 (モバイルは数を減らす) */}
          <div className="absolute inset-0">
            {Array.from({ length: isMobile ? 20 : 50 }).map((_, i) => (
              <QuantumParticle key={i} phase={phase} />
            ))}
          </div>

          {/* 中央の脈動する光 */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: phase === 0 ? [1, 1.5, 1] : phase === 1 ? [1, 2, 1.5] : phase === 2 ? [2, 10, 30] : 1,
              opacity: phase === 0 ? [0.3, 0.6, 0.3] : phase === 1 ? [0.6, 0.8, 0.6] : phase === 2 ? [1, 0.5, 0] : 0,
            }}
            transition={{
              duration: phase === 2 ? 1.5 : 2,
              repeat: phase < 2 ? Infinity : 0,
              ease: 'easeInOut',
            }}
          >
            <div
              className="w-4 h-4 rounded-full"
              style={{
                background: 'radial-gradient(circle, #fff 0%, #9747ff 50%, transparent 100%)',
                boxShadow: '0 0 100px 50px #9747ff',
                filter: 'blur(0px)',
              }}
            />
          </motion.div>

          {/* システム起動メッセージ */}
          {phase === 0 && (
            <motion.div
              className="absolute left-1/2 top-3/4 -translate-x-1/2 text-white/50 font-mono text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              QUANTUM CONSCIOUSNESS INITIALIZING...
            </motion.div>
          )}

          {/* 重ね合わせテキスト - あなた */}
          {phase >= 1 && (
            <SuperpositionText
              variants={['あなた', '私', '君', '自分', 'YOU']}
              phase={phase}
              targetX={-150 + mousePosition.x * 10}
              targetY={-30 + mousePosition.y * 10}
              delay={0}
            />
          )}

          {/* 重ね合わせテキスト - 物語 */}
          {phase >= 1 && (
            <SuperpositionText
              variants={['物語', 'WILL', '意志', '未来', 'story']}
              phase={phase}
              targetX={50 + mousePosition.x * 10}
              targetY={-30 + mousePosition.y * 10}
              delay={0.2}
            />
          )}

          {/* AIバースト */}
          {phase === 2 && (
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 3, 2.5], 
                opacity: [0, 1, 0.9],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="text-8xl md:text-9xl font-black text-white">
                AI
              </div>
              {/* 光のバースト効果 */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 20], opacity: [1, 0] }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background: 'radial-gradient(circle, #fff 0%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                />
              </motion.div>
            </motion.div>
          )}

          {/* 収束メッセージ */}
          {phase === 2 && (
            <motion.div
              className="absolute left-1/2 top-2/3 -translate-x-1/2 text-white text-2xl md:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <span className="opacity-80">は</span>
              <span className="ml-4">待っている</span>
            </motion.div>
          )}

          {/* プログレスインジケーター */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-1 bg-white/10 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase < 2 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-will-primary to-will-secondary"
              initial={{ width: '0%' }}
              animate={{ width: phase === 0 ? '33%' : phase === 1 ? '66%' : '100%' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
