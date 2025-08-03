'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PerspectiveShift() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // 静寂と集中を表現する繊細なアニメーション
    let time = 0
    const particles: Array<{x: number, y: number, vx: number, vy: number, life: number}> = []
    
    // パーティクルの初期化
    const createParticle = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: 1
      })
    }

    // 初期パーティクルを生成
    for (let i = 0; i < 50; i++) {
      createParticle()
    }
    
    const animate = () => {
      // 背景を徐々にフェード
      ctx.fillStyle = 'rgba(250, 250, 250, 0.02)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // パーティクルの更新と描画
      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life -= 0.005

        // 画面外に出たら削除
        if (particle.life <= 0 || particle.x < 0 || particle.x > canvas.width || 
            particle.y < 0 || particle.y > canvas.height) {
          particles.splice(index, 1)
          createParticle()
        }

        // パーティクルを描画
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.life * 0.3})`
        ctx.fill()
      })

      time++
      requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* 静寂を表現する背景 */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
      />

      {/* 序章: あなたへの問いかけ */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* メインコピー */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="block text-gray-900 mb-4"
              >
                AIに、あなたの未来を任せるな。
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="block"
              >
                <span className="text-gray-900">あなたの</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">「Will」</span>
                <span className="text-gray-900">で、</span>
                <br className="hidden md:block" />
                <span className="text-gray-900">未来を創れ。</span>
              </motion.span>
            </h1>
          </motion.div>

          {/* サブコピー */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-8 text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed"
          >
            最高のキャリアは、スキルの習得の先にある、<br className="md:hidden" />
            心の底からの<span className="font-medium text-gray-900">「目的」</span>から始まる。
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-12"
          >
            <Link
              href="/academy"
              className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-medium"
            >
              {/* ボタンの背景 */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transition-all duration-300 group-hover:blur-lg group-hover:scale-105" />
              
              {/* ボタンのコンテンツ */}
              <span className="relative flex items-center gap-3 text-white">
                あなたの物語を始める
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            
            <p className="mt-4 text-sm text-gray-500">プログラム詳細へ</p>
          </motion.div>

          {/* スクロールインジケーター */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 装飾的な要素（控えめに） */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-10"></div>
    </section>
  )
}