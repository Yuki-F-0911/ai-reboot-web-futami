'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { motion, MotionValue, useTransform } from 'framer-motion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  life: number
}

interface SubtleParticlesProps {
  scrollProgress: MotionValue<number>
}

export default function SubtleParticles({ scrollProgress }: SubtleParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
  // スクロールに応じて粒子の明るさを変化
  const particleOpacity = useTransform(
    scrollProgress,
    [0, 0.3, 0.6, 1],
    [0.3, 0.4, 0.2, 0]
  )
  
  const [currentOpacity, setCurrentOpacity] = useState(0.3)
  
  useEffect(() => {
    const unsubscribe = particleOpacity.on("change", setCurrentOpacity)
    return () => unsubscribe()
  }, [particleOpacity])
  
  // 粒子を生成
  const generateParticles = (width: number, height: number) => {
    const particles: Particle[] = []
    const particleCount = 15 // 非常に少ない粒子数でCPU負荷を最小に
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.05, // 非常にゆっくりした動き
        vy: (Math.random() - 0.5) * 0.05,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.5,
        life: Math.random() * 100
      })
    }
    
    return particles
  }
  
  // アニメーションループ
  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // キャンバスをクリア
    ctx.clearRect(0, 0, dimensions.width, dimensions.height)
    
    // 粒子を描画
    particlesRef.current.forEach(particle => {
      // 粒子を移動
      particle.x += particle.vx
      particle.y += particle.vy
      particle.life += 0.5
      
      // 境界での反射（スムーズに）
      if (particle.x < 0 || particle.x > dimensions.width) {
        particle.vx *= -0.9
      }
      if (particle.y < 0 || particle.y > dimensions.height) {
        particle.vy *= -0.9
      }
      
      // 境界内に保つ
      particle.x = Math.max(0, Math.min(dimensions.width, particle.x))
      particle.y = Math.max(0, Math.min(dimensions.height, particle.y))
      
      // パルス効果
      const pulse = Math.sin(particle.life * 0.02) * 0.3 + 0.7
      
      // 粒子を描画
      ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * pulse * currentOpacity})`
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size * pulse, 0, Math.PI * 2)
      ctx.fill()
      
      // ぼかし効果のために二重に描画
      ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * pulse * currentOpacity * 0.1})`
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size * pulse * 3, 0, Math.PI * 2)
      ctx.fill()
    })
    
    animationRef.current = requestAnimationFrame(animate)
  }, [dimensions.width, dimensions.height, currentOpacity])
  
  // 初期化とリサイズ処理
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])
  
  // dimensions が変更されたときに粒子を再生成
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      particlesRef.current = generateParticles(dimensions.width, dimensions.height)
    }
  }, [dimensions.width, dimensions.height])
  
  // アニメーション開始
  useEffect(() => {
    if (dimensions.width && dimensions.height && particlesRef.current.length > 0) {
      animate()
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions.width, dimensions.height, animate])
  
  return (
    <motion.canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="fixed inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      style={{
        mixBlendMode: 'screen' // 光の粒子を美しく表示
      }}
    />
  )
}
