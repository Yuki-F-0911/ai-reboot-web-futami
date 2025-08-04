'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TheInvitation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 星のような粒子
    const stars: Array<{
      x: number
      y: number
      size: number
      speed: number
      opacity: number
    }> = []

    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.8 + 0.2
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        star.y -= star.speed
        if (star.y < -10) {
          star.y = canvas.height + 10
          star.x = Math.random() * canvas.width
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center">
      {/* 星空のキャンバス */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-50"
      />

      {/* グラデーション背景 */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* ヘッドライン */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-light mb-12"
        >
          さあ、あなたの物語を始めよう。
        </motion.h2>

        {/* コンテンツ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">
            私たちが提供するのは、サービスではない。
          </p>
          <p className="text-xl sm:text-2xl text-gray-300">
            あなたのWillが、この世界と共鳴するための最初の「対話」だ。
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* プライマリCTA */}
          <div>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-12 py-6 text-lg font-medium rounded-full overflow-hidden transition-all duration-700 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-will-primary via-will-secondary to-will-tertiary opacity-80"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-will-primary via-will-secondary to-will-tertiary opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></span>
              <span className="relative z-10 text-white">
                [ 自分の可能性について話を聞く（無料対話） ]
              </span>
            </Link>
          </div>

          {/* セカンダリCTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/download/future-blueprint"
              className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-500"
            >
              <span className="absolute inset-0 bg-white/5 backdrop-blur-sm"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition-opacity duration-500"></span>
              <span className="relative z-10 text-sm text-gray-300 group-hover:text-white transition-colors">
                [ 人類とAIの未来設計図（限定レポート）を手に入れる ]
              </span>
            </Link>

            <Link
              href="/newsletter"
              className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-500"
            >
              <span className="absolute inset-0 bg-white/5 backdrop-blur-sm"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition-opacity duration-500"></span>
              <span className="relative z-10 text-sm text-gray-300 group-hover:text-white transition-colors">
                [ 変革の最前線からの便り（ニュースレター）を受け取る ]
              </span>
            </Link>
          </div>
        </motion.div>

        {/* エピローグ */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-sm text-gray-600 italic"
        >
          この物語の主人公は、あなただ。
        </motion.p>
      </div>

      {/* 装飾的な光 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 3, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-will-primary/10 via-transparent to-transparent pointer-events-none"
      />
    </section>
  )
}