'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // パーティクルシステムの実装
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
    }> = []

    const colors = ['#FF4B8B', '#9747FF', '#3B82F6']

    // パーティクル生成
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // 画面端での反射
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()
        ctx.globalAlpha = 1
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景のパーティクルキャンバス */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)' }}
      />

      {/* 中央のコンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* メインキャッチコピー */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-gray-900 mb-2">AI時代の羅針盤は、</span>
            <span className="block bg-gradient-to-r from-will-primary via-will-secondary to-will-tertiary bg-clip-text text-transparent">
              あなたの「Will」にある。
            </span>
          </h1>

          {/* サブキャッチコピー */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            AIスキルを追いかける前に。<br className="sm:hidden" />
            あなたの「本当にやりたいこと」は何ですか？
          </motion.p>

          {/* CTA ボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/academy"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-will-primary via-will-secondary to-will-tertiary"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-will-primary via-will-secondary to-will-tertiary opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                個人の方向け
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link
              href="/corporate"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 hover:scale-105"
            >
              <span className="text-gray-700 flex items-center gap-2">
                法人様向け
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* 人のシルエットと光のアニメーション */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          <div className="relative w-96 h-96">
            {/* 光の輪 */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-will-primary/20 via-will-secondary/20 to-will-tertiary/20 blur-3xl animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-will-primary/10 via-will-secondary/10 to-will-tertiary/10 blur-2xl animate-pulse animation-delay-200"></div>
            <div className="absolute inset-8 rounded-full bg-gradient-to-r from-will-primary/5 via-will-secondary/5 to-will-tertiary/5 blur-xl animate-pulse animation-delay-400"></div>
          </div>
        </motion.div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-sm">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}