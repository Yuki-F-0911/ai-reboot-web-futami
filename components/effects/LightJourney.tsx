'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type LightState = 'chaos' | 'converging' | 'path_forming' | 'clear_path' | 'focusing' | 'star_pulsing' | 'star_present'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  targetX?: number
  targetY?: number
  life: number
  size: number
  opacity: number
}

interface LightJourneyProps {
  state: LightState
  intensity?: number
}

export default function LightJourney({ state, intensity = 1 }: LightJourneyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const { scrollYProgress } = useScroll()

  // パーティクル数と設定を状態に応じて変更
  const getParticleConfig = (state: LightState) => {
    switch (state) {
      case 'chaos':
        return {
          count: 100,  // 適度な数に
          speed: 0.03,  // ゆっくりだが見える速度
          attractionForce: 0,
          targetShape: null,
          opacity: 0.25,  // 見える程度の濃さ
          sizeRange: [0.5, 1.5]  // 小さめだが視認できるサイズ
        }
      case 'converging':
        return {
          count: 80,
          speed: 0.04,
          attractionForce: 0.03,
          targetShape: 'center_axis',
          opacity: 0.3,
          sizeRange: [0.6, 1.8]
        }
      case 'path_forming':
        return {
          count: 60,
          speed: 0.05,
          attractionForce: 0.06,
          targetShape: 'vertical_path',
          opacity: 0.35,
          sizeRange: [0.8, 2]
        }
      case 'clear_path':
        return {
          count: 50,
          speed: 0.06,
          attractionForce: 0.1,
          targetShape: 'vertical_path',
          opacity: 0.4,
          sizeRange: [1, 2.5]
        }
      case 'focusing':
        return {
          count: 40,
          speed: 0.08,
          attractionForce: 0.15,
          targetShape: 'point',
          opacity: 0.45,
          sizeRange: [1.2, 3]
        }
      case 'star_pulsing':
        return {
          count: 30,
          speed: 0.03,
          attractionForce: 0.35,
          targetShape: 'star',
          opacity: 0.6,
          sizeRange: [2, 3.5]
        }
      case 'star_present':
        return {
          count: 20,  // 存在感のある数
          speed: 0.02,
          attractionForce: 0.5,
          targetShape: 'star_corner',
          opacity: 0.5,
          sizeRange: [1.5, 2.5]
        }
      default:
        return {
          count: 300,
          speed: 0.1,
          attractionForce: 0,
          targetShape: null,
          opacity: 0.3,
          sizeRange: [1, 3]
        }
    }
  }

  // パーティクルの初期化
  const initParticles = () => {
    const config = getParticleConfig(state)
    const particles: Particle[] = []
    
    for (let i = 0; i < config.count; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * config.speed,
        vy: (Math.random() - 0.5) * config.speed,
        life: 1,
        size: Math.random() * (config.sizeRange[1] - config.sizeRange[0]) + config.sizeRange[0],
        opacity: config.opacity * (0.5 + Math.random() * 0.5)
      })
    }
    
    particlesRef.current = particles
  }

  // ターゲット位置の計算
  const getTargetPosition = (particle: Particle, shape: string | null): { x: number, y: number } | null => {
    if (!shape) return null
    
    const centerX = dimensions.width / 2
    const centerY = dimensions.height / 2
    
    switch (shape) {
      case 'center_axis':
        return { x: centerX + (Math.random() - 0.5) * 100, y: particle.y }
      case 'vertical_path':
        return { x: centerX + (Math.random() - 0.5) * 50, y: particle.y }
      case 'point':
        return { x: centerX, y: dimensions.height * 0.8 }
      case 'star':
        // 星形の5つの頂点のいずれかに向かう
        const angle = (Math.PI * 2 / 5) * Math.floor(Math.random() * 5) - Math.PI / 2
        const radius = 50
        return {
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius
        }
      case 'star_corner':
        return { x: dimensions.width - 100, y: dimensions.height - 100 }
      default:
        return null
    }
  }

  // アニメーションループ
  const animate = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const config = getParticleConfig(state)
    
    // 背景をフェード
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
    ctx.fillRect(0, 0, dimensions.width, dimensions.height)
    
    // パーティクルの更新と描画
    particlesRef.current.forEach((particle) => {
      // ターゲットへの引力を計算
      if (config.targetShape) {
        const target = getTargetPosition(particle, config.targetShape)
        if (target) {
          const dx = target.x - particle.x
          const dy = target.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance > 5) {
            particle.vx += (dx / distance) * config.attractionForce
            particle.vy += (dy / distance) * config.attractionForce
          }
        }
      }
      
      // 速度を適用
      particle.x += particle.vx
      particle.y += particle.vy
      
      // 減速
      particle.vx *= 0.99
      particle.vy *= 0.99
      
      // 画面外に出たら反対側から出現
      if (particle.x < 0) particle.x = dimensions.width
      if (particle.x > dimensions.width) particle.x = 0
      if (particle.y < 0) particle.y = dimensions.height
      if (particle.y > dimensions.height) particle.y = 0
      
      // パーティクルを描画
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      
      // グラデーション効果（より繊細で美しい表現）
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 3
      )
      
      // 状態に応じて色を変化させる（ちょうど良い濃さで）
      if (state === 'chaos' || state === 'converging') {
        // 青白い光（適度な濃さ）
        gradient.addColorStop(0, `rgba(150, 180, 255, ${particle.opacity * intensity})`)
        gradient.addColorStop(0.6, `rgba(120, 150, 240, ${particle.opacity * intensity * 0.5})`)
        gradient.addColorStop(1, 'rgba(150, 180, 255, 0)')
      } else if (state === 'star_pulsing' || state === 'star_present') {
        // 暖かい白〜金色の光
        gradient.addColorStop(0, `rgba(255, 245, 220, ${particle.opacity * intensity})`)
        gradient.addColorStop(0.5, `rgba(255, 235, 180, ${particle.opacity * intensity * 0.6})`)
        gradient.addColorStop(1, 'rgba(255, 240, 200, 0)')
      } else {
        // 青紫の光（存在感のある濃さ）
        gradient.addColorStop(0, `rgba(100, 140, 220, ${particle.opacity * intensity * 0.8})`)
        gradient.addColorStop(0.5, `rgba(140, 100, 200, ${particle.opacity * intensity * 0.5})`)
        gradient.addColorStop(1, 'rgba(100, 140, 220, 0)')
      }
      
      ctx.fillStyle = gradient
      ctx.fill()
      
      // 星の脈動効果（適度な変化）
      if (state === 'star_pulsing') {
        const pulse = Math.sin(Date.now() * 0.0006 + particle.x * 0.01) * 0.2 + 0.8  // 20%の変化
        particle.opacity = particle.opacity * pulse
        particle.size = particle.size * (0.9 + pulse * 0.2)  // サイズも少し変化
      } else if (state === 'star_present') {
        // 最終状態では穏やかな輝き
        const shimmer = Math.sin(Date.now() * 0.0004 + particle.x * 0.01) * 0.1 + 0.9  // 10%の変化
        particle.opacity = particle.opacity * shimmer
      }
    })
    
    animationRef.current = requestAnimationFrame(animate)
  }

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

  // dimensions が更新されたらキャンバスサイズを更新
  useEffect(() => {
    if (canvasRef.current && dimensions.width && dimensions.height) {
      canvasRef.current.width = dimensions.width
      canvasRef.current.height = dimensions.height
      initParticles()
    }
  }, [dimensions])

  // 状態が変わったらパーティクルを再初期化
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      initParticles()
    }
  }, [state])

  // アニメーション開始
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      animate()
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [state, intensity, dimensions])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
      id="light-journey"
    />
  )
}