'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function TheCompass() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [stage, setStage] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0])

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

    // アニメーション用の変数
    let willRadius = 0
    let aiRadius = 0
    let transformationOpacity = 0
    let lightParticles: Array<{
      angle: number
      radius: number
      speed: number
      opacity: number
    }> = []

    // 光の粒子を生成
    for (let i = 0; i < 50; i++) {
      lightParticles.push({
        angle: Math.random() * Math.PI * 2,
        radius: 0,
        speed: Math.random() * 0.02 + 0.01,
        opacity: 0
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Stage 1: Willの誕生
      if (stage >= 0) {
        willRadius = Math.min(willRadius + 1, 60)
        
        // Will - 内なる光の核
        const willGradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, willRadius
        )
        willGradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)')
        willGradient.addColorStop(0.4, 'rgba(224, 176, 255, 0.8)') // manifesto-core
        willGradient.addColorStop(0.7, 'rgba(221, 160, 221, 0.6)') // manifesto-glow
        willGradient.addColorStop(1, 'rgba(123, 104, 238, 0.3)') // manifesto-deep
        
        ctx.beginPath()
        ctx.arc(centerX, centerY, willRadius, 0, Math.PI * 2)
        ctx.fillStyle = willGradient
        ctx.fill()

        // "Will"テキスト
        if (willRadius > 40) {
          ctx.font = 'bold 24px Inter'
          ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText('Will', centerX, centerY)
        }
      }

      // Stage 2: AIの鏡
      if (stage >= 1) {
        aiRadius = Math.min(aiRadius + 2, 150)
        
        // AI - 増幅する鏡
        ctx.strokeStyle = `rgba(123, 104, 238, ${0.4 * (aiRadius / 150)})` // manifesto-deep
        ctx.lineWidth = 1.5
        ctx.setLineDash([15, 5])
        ctx.beginPath()
        ctx.arc(centerX, centerY, aiRadius, 0, Math.PI * 2)
        ctx.stroke()
        ctx.setLineDash([])

        // 反射効果
        if (aiRadius >= 150) {
          lightParticles.forEach((particle, i) => {
            particle.radius = Math.min(particle.radius + 2, 200)
            particle.angle += particle.speed
            particle.opacity = Math.min(particle.opacity + 0.01, 0.7)

            const x = centerX + Math.cos(particle.angle) * particle.radius
            const y = centerY + Math.sin(particle.angle) * particle.radius

            ctx.beginPath()
            ctx.arc(x, y, 3, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.5})`
            ctx.fill()
          })
        }
      }

      // Stage 3: Transformation
      if (stage >= 2) {
        transformationOpacity = Math.min(transformationOpacity + 0.01, 0.3)
        
        // 変革の光
        const transformGradient = ctx.createRadialGradient(
          centerX, centerY, 100,
          centerX, centerY, 300
        )
        transformGradient.addColorStop(0, `rgba(255, 255, 255, 0)`)
        transformGradient.addColorStop(0.3, `rgba(0, 206, 209, ${transformationOpacity * 0.3})`) // manifesto-aurora
        transformGradient.addColorStop(0.6, `rgba(75, 0, 130, ${transformationOpacity * 0.5})`) // manifesto-mystic
        transformGradient.addColorStop(1, `rgba(25, 25, 112, ${transformationOpacity})`) // manifesto-cosmos
        
        ctx.fillStyle = transformGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [stage])

  // スクロールに応じてステージを進行
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      if (value > 0.3 && value < 0.4) setStage(0)
      else if (value >= 0.4 && value < 0.6) setStage(1)
      else if (value >= 0.6) setStage(2)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black text-white">
      {/* ビジュアルキャンバス */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />

      {/* コンテンツ */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* ヘッドライン */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-light mb-12 leading-relaxed"
          >
            <span className="block mb-4">AIは「答え」ではない。</span>
            <span className="block mb-4">あなたの「Will」を映し出す「鏡」であり、</span>
            <span className="block">その実現を加速する「翼」である。</span>
          </motion.h2>

          {/* テキスト */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg sm:text-xl text-gray-300"
          >
            <p>私たちは、AIという名の「戦術」を売るのではない。</p>
            <p>あなたの、そして貴社の「Will」という名の「目的」を解放する。</p>
            <p>AIリブートとは、テクノロジーによる人間性の回復。</p>
            <p className="text-2xl font-medium text-white mt-8">
              AIによって、「本当のあなた」に還る旅路である。
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* ステージインジケーター */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              stage >= i ? 'bg-white' : 'bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  )
}