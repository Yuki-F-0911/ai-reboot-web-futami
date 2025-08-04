'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  targetX?: number
  targetY?: number
}

export default function TheAwakening() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isTextVisible, setIsTextVisible] = useState(false)
  const [isCtaVisible, setIsCtaVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationIdRef = useRef<number>()
  const coreIntensityRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // キャンバスサイズ設定
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // パーティクル初期化
    const initParticles = () => {
      particlesRef.current = []
      const particleCount = 200
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.3 + 0.1
        })
      }
    }
    initParticles()

    // アニメーションループ
    const animate = () => {
      // より滑らかなトレイル効果のため、背景を薄く塗りつぶす
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // 光のコアの描画（パーティクルの前に描画して背景効果を作る）
      if (coreIntensityRef.current > 0 && mousePos.x > 0 && mousePos.y > 0) {
        // 外側の光輪（より大きく、より明るく）
        const outerGradient = ctx.createRadialGradient(
          mousePos.x, mousePos.y, 0,
          mousePos.x, mousePos.y, 300 * coreIntensityRef.current
        )
        outerGradient.addColorStop(0, `rgba(224, 176, 255, ${coreIntensityRef.current * 0.3})`) // manifesto-core
        outerGradient.addColorStop(0.3, `rgba(123, 104, 238, ${coreIntensityRef.current * 0.2})`) // manifesto-deep
        outerGradient.addColorStop(0.6, `rgba(75, 0, 130, ${coreIntensityRef.current * 0.1})`) // manifesto-mystic
        outerGradient.addColorStop(1, 'rgba(25, 25, 112, 0)') // manifesto-cosmos
        
        ctx.fillStyle = outerGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // 内側の強い光（より明るく）
        const innerGradient = ctx.createRadialGradient(
          mousePos.x, mousePos.y, 0,
          mousePos.x, mousePos.y, 100 * coreIntensityRef.current
        )
        innerGradient.addColorStop(0, `rgba(255, 255, 255, ${coreIntensityRef.current * 0.9})`)
        innerGradient.addColorStop(0.3, `rgba(224, 176, 255, ${coreIntensityRef.current * 0.7})`) // manifesto-core
        innerGradient.addColorStop(0.6, `rgba(221, 160, 221, ${coreIntensityRef.current * 0.5})`) // manifesto-glow
        innerGradient.addColorStop(1, 'rgba(123, 104, 238, 0)') // manifesto-deep
        
        ctx.fillStyle = innerGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      particlesRef.current.forEach((particle) => {
        // マウスに向かって引き寄せられる
        if (particle.targetX !== undefined && particle.targetY !== undefined) {
          const dx = particle.targetX - particle.x
          const dy = particle.targetY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance > 10) {
            particle.vx += dx * 0.03
            particle.vy += dy * 0.03
          } else {
            // コアに到達したパーティクルは光を強める
            coreIntensityRef.current = Math.min(coreIntensityRef.current + 0.03, 1)
            // 到達したパーティクルは明るくなる
            particle.opacity = Math.min(particle.opacity + 0.2, 1)
          }
        }

        // 速度減衰
        particle.vx *= 0.96
        particle.vy *= 0.96

        // 位置更新
        particle.x += particle.vx
        particle.y += particle.vy

        // 境界チェック
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // パーティクル描画（光る効果を追加）
        const distanceToMouse = Math.sqrt(
          Math.pow(particle.x - mousePos.x, 2) + 
          Math.pow(particle.y - mousePos.y, 2)
        )
        const glowIntensity = distanceToMouse < 200 ? 1 - (distanceToMouse / 200) : 0

        // グロー効果（より大きく、より明るく）
        if (glowIntensity > 0) {
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 5, 0, Math.PI * 2)
          const glowGradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 5
          )
          glowGradient.addColorStop(0, `rgba(224, 176, 255, ${glowIntensity * 0.6})`)
          glowGradient.addColorStop(0.5, `rgba(221, 160, 221, ${glowIntensity * 0.3})`)
          glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
          ctx.fillStyle = glowGradient
          ctx.fill()
        }

        // メインパーティクル
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        const brightness = particle.opacity + glowIntensity * 0.7
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(brightness, 1)})`
        ctx.fill()
      })

      // テキスト表示トリガー
      if (coreIntensityRef.current > 0.3 && !isTextVisible) {
        setIsTextVisible(true)
        setTimeout(() => setIsCtaVisible(true), 3000)
      }

      animationIdRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [mousePos, isTextVisible])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })

    // 近くのパーティクルをマウス位置に引き寄せる
    particlesRef.current.forEach((particle) => {
      const dx = x - particle.x
      const dy = y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < 250) { // より広い範囲のパーティクルを引き寄せる
        particle.targetX = x
        particle.targetY = y
      }
    })
  }

  const handleTouch = (e: React.TouchEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return

    const touch = e.touches[0]
    const x = touch.clientX - rect.left
    const y = touch.clientY - rect.top
    setMousePos({ x, y })

    particlesRef.current.forEach((particle) => {
      const dx = x - particle.x
      const dy = y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < 250) {
        particle.targetX = x
        particle.targetY = y
      }
    })
  }

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* パーティクルキャンバス */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 cursor-crosshair"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouch}
      />

      {/* コンテンツ */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatePresence>
            {isTextVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {/* メインコピー */}
                <h1 className="mb-8">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                  >
                    AIに、未来を任せるな。
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                  >
                    「Will」で、未来を創れ。
                  </motion.span>
                </h1>

                {/* サブコピー */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2.5 }}
                  className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12"
                >
                  最高のAI活用は、スキルの先にある「なりたい自分」から始まる。
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA */}
          <AnimatePresence>
            {isCtaVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link
                  href="/academy"
                  className="group relative px-10 py-5 transition-all duration-700 hover:scale-105"
                >
                  {/* 背景のグロー効果 */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E0B0FF]/20 to-[#7B68EE]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                  
                  {/* ボタン本体 */}
                  <span className="relative block rounded-full border border-white/20 bg-black/50 backdrop-blur-sm px-8 py-4 overflow-hidden">
                    {/* ホバー時の内側グラデーション */}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#E0B0FF]/10 via-[#7B68EE]/10 to-[#4B0082]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    
                    {/* テキスト */}
                    <span className="relative z-10 text-white/90 group-hover:text-white font-light tracking-wider text-sm">
                      [ 自分の物語を始める ]
                    </span>
                  </span>
                </Link>

                <Link
                  href="/corporate"
                  className="group relative px-10 py-5 transition-all duration-700 hover:scale-105"
                >
                  {/* 背景のグロー効果 */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7B68EE]/20 to-[#00CED1]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                  
                  {/* ボタン本体 */}
                  <span className="relative block rounded-full border border-white/20 bg-black/50 backdrop-blur-sm px-8 py-4 overflow-hidden">
                    {/* ホバー時の内側グラデーション */}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#7B68EE]/10 via-[#4B0082]/10 to-[#00CED1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    
                    {/* テキスト */}
                    <span className="relative z-10 text-white/90 group-hover:text-white font-light tracking-wider text-sm">
                      [ 組織の未来を再定義する ]
                    </span>
                  </span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* インストラクション（初期表示） */}
      {!isTextVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.p 
            className="text-white/30 text-sm font-light tracking-widest mb-4"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            あなたの動きが、光を生む
          </motion.p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="opacity-40"
          >
            <svg className="w-5 h-5 mx-auto text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2z" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}