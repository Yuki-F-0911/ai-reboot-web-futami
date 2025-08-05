'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export default function QuietParticles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    // クライアントサイドでのみパーティクルを生成
    setIsClient(true)
    const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1, // 1-4pxのサイズ（より繊細に）
      duration: Math.random() * 30 + 20, // 20-50秒でゆっくり動く
      delay: Math.random() * 15,
      opacity: Math.random() * 0.3 + 0.1 // 0.1-0.4の透明度（より控えめに）
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {isClient && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0, particle.opacity, particle.opacity * 1.5, particle.opacity]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.id % 3 === 0 
              ? `radial-gradient(circle, rgba(0, 255, 200, ${particle.opacity}) 0%, transparent 70%)`
              : particle.id % 3 === 1
              ? `radial-gradient(circle, rgba(255, 0, 100, ${particle.opacity}) 0%, transparent 70%)`
              : `radial-gradient(circle, rgba(100, 0, 255, ${particle.opacity}) 0%, transparent 70%)`,
          }}
        />
      ))}
      
      {/* 極薄のグラデーション背景 */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(151, 71, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.04) 0%, transparent 70%)
          `
        }}
      />
    </div>
  )
}