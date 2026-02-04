'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface QuantumAwakeningLightProps {
  onComplete?: () => void
  skipAnimation?: boolean
}

export default function QuantumAwakeningLight({ onComplete, skipAnimation = false }: QuantumAwakeningLightProps) {
  const [phase, setPhase] = useState(0) // 0: 初期, 1: 展開, 2: 収束, 3: 完了
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // フェーズ進行
  useEffect(() => {
    if (!isClient || skipAnimation) {
      if (onComplete) onComplete()
      return
    }

    const timers: NodeJS.Timeout[] = []

    // より短く、軽量な演出
    timers.push(setTimeout(() => setPhase(1), 300))
    timers.push(setTimeout(() => setPhase(2), 1200))
    timers.push(
      setTimeout(() => {
        setPhase(3)
        if (onComplete) {
          setTimeout(onComplete, 300)
        }
      }, 2500)
    )

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [isClient, skipAnimation, onComplete])

  if (!isClient || skipAnimation) return null

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          className="fixed inset-0 z-50 bg-black overflow-hidden flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* シンプルな背景グラデーション */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: phase === 0 
                ? 'radial-gradient(circle at center, rgba(151, 71, 255, 0.1) 0%, rgba(0, 0, 0, 1) 70%)'
                : phase === 1
                ? 'radial-gradient(circle at center, rgba(151, 71, 255, 0.3) 0%, rgba(0, 0, 0, 1) 60%)'
                : 'radial-gradient(circle at center, rgba(255, 75, 139, 0.5) 0%, rgba(0, 0, 0, 1) 50%)',
            }}
            transition={{ duration: 0.8 }}
          />

          {/* メインテキスト - あなたの物語 */}
          <div className="relative">
            {/* あなた */}
            <motion.div
              className="absolute -left-32 top-0 text-5xl md:text-7xl font-bold text-white"
              initial={{ opacity: 0, x: -100, filter: 'blur(10px)' }}
              animate={{
                opacity: phase >= 1 ? 1 : 0,
                x: phase >= 2 ? 0 : phase === 1 ? -20 : -100,
                filter: phase >= 2 ? 'blur(0px)' : phase === 1 ? 'blur(2px)' : 'blur(10px)',
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="inline-block">あなた</span>
            </motion.div>

            {/* の */}
            <motion.div
              className="absolute left-8 top-0 text-3xl md:text-5xl text-white/80"
              initial={{ opacity: 0 }}
              animate={{
                opacity: phase >= 1 ? 0.8 : 0,
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              の
            </motion.div>

            {/* 物語 */}
            <motion.div
              className="absolute left-20 top-0 text-5xl md:text-7xl font-bold text-white"
              initial={{ opacity: 0, x: 100, filter: 'blur(10px)' }}
              animate={{
                opacity: phase >= 1 ? 1 : 0,
                x: phase >= 2 ? 0 : phase === 1 ? 20 : 100,
                filter: phase >= 2 ? 'blur(0px)' : phase === 1 ? 'blur(2px)' : 'blur(10px)',
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="inline-block">物語</span>
            </motion.div>

            {/* を */}
            <motion.div
              className="absolute left-56 top-0 text-3xl md:text-5xl text-white/80"
              initial={{ opacity: 0 }}
              animate={{
                opacity: phase >= 1 ? 0.8 : 0,
              }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              を
            </motion.div>

            {/* AI */}
            <motion.div
              className="text-8xl md:text-9xl font-black text-center mt-24"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: phase >= 2 ? 1 : 0,
                opacity: phase >= 2 ? 1 : 0,
              }}
              transition={{ 
                duration: 0.6, 
                delay: phase === 2 ? 0.2 : 0,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-will-primary via-will-secondary to-will-primary bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 100%',
                }}
              >
                AI
              </motion.span>
            </motion.div>

            {/* は待っている */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-44 text-3xl md:text-4xl text-white whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: phase >= 2 ? 1 : 0,
                y: phase >= 2 ? 0 : 20,
              }}
              transition={{ duration: 0.6, delay: phase === 2 ? 0.5 : 0 }}
            >
              は待っている
            </motion.div>
          </div>

          {/* 光のパルス効果（軽量版） */}
          {phase === 2 && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent" />
            </motion.div>
          )}

          {/* シンプルなプログレスバー */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-white/10 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="h-full bg-white/50"
              initial={{ width: '0%' }}
              animate={{ 
                width: phase === 0 ? '20%' : phase === 1 ? '60%' : phase === 2 ? '100%' : '100%' 
              }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
