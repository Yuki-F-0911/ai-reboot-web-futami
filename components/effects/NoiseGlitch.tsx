'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface NoiseGlitchProps {
  intensity?: number
}

export default function NoiseGlitch({ intensity = 1 }: NoiseGlitchProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number | undefined>(undefined)
  const [isClient, setIsClient] = useState(false)
  
  // ノイズ生成関数
  const generateNoise = (ctx: CanvasRenderingContext2D, width: number, height: number, density: number) => {
    const imageData = ctx.createImageData(width, height)
    const data = imageData.data
    
    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random()
      const alpha = noise < density ? Math.random() * 255 : 0
      
      // RGB値をランダムに設定
      data[i] = Math.random() * 255     // R
      data[i + 1] = Math.random() * 255 // G
      data[i + 2] = Math.random() * 255 // B
      data[i + 3] = alpha * intensity   // A
    }
    
    ctx.putImageData(imageData, 0, 0)
  }
  
  // 走査線エフェクト
  const drawScanlines = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    ctx.strokeStyle = `rgba(0, 255, 200, ${0.1 * intensity})`
    ctx.lineWidth = 1
    
    // 横走査線
    const scanlineY = (time * 0.2) % height
    ctx.beginPath()
    ctx.moveTo(0, scanlineY)
    ctx.lineTo(width, scanlineY)
    ctx.stroke()
    
    // 縦干渉波
    const interferenceX = (time * 0.15) % width
    ctx.strokeStyle = `rgba(255, 0, 100, ${0.08 * intensity})`
    ctx.beginPath()
    ctx.moveTo(interferenceX, 0)
    ctx.lineTo(interferenceX, height)
    ctx.stroke()
  }
  
  // デジタルアーティファクト
  const drawArtifacts = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const artifactCount = Math.floor(3 + Math.random() * 5)
    
    for (let i = 0; i < artifactCount; i++) {
      if (Math.random() > 0.98) {
        const x = Math.random() * width
        const y = Math.random() * height
        const w = 20 + Math.random() * 100
        const h = 2 + Math.random() * 10
        
        ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${0.3 * intensity})`
        ctx.fillRect(x, y, w, h)
      }
    }
  }
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  useEffect(() => {
    if (!isClient) return
    
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const updateCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    updateCanvas()
    window.addEventListener('resize', updateCanvas)
    
    let time = 0
    const animate = () => {
      time += 1
      
      // キャンバスをクリア
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // ノイズ密度を時間で変化
      const noiseDensity = 0.05 + Math.sin(time * 0.01) * 0.03
      
      // 各レイヤーを描画
      generateNoise(ctx, canvas.width, canvas.height, noiseDensity)
      drawScanlines(ctx, canvas.width, canvas.height, time)
      drawArtifacts(ctx, canvas.width, canvas.height, time)
      
      frameRef.current = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', updateCanvas)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [intensity, isClient])
  
  // RGB分離エフェクト用のスタイル
  const rgbShiftStyle = {
    textShadow: `
      ${2 * intensity}px 0 0 rgba(255, 0, 0, 0.5),
      ${-2 * intensity}px 0 0 rgba(0, 255, 255, 0.5),
      0 ${2 * intensity}px 0 rgba(255, 0, 255, 0.3)
    `
  }
  
  if (!isClient) {
    return null
  }
  
  return (
    <>
      {/* ノイズキャンバス */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-30"
        style={{
          mixBlendMode: 'screen',
          opacity: 0.5 + intensity * 0.3
        }}
      />
      
      {/* グリッチオーバーレイ */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-20"
        animate={{
          opacity: [0, 0.1, 0, 0.05, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 3 + Math.random() * 5,
          times: [0, 0.1, 0.2, 0.3, 1]
        }}
        style={{
          background: `linear-gradient(
            ${Math.random() * 360}deg,
            rgba(255, 0, 100, 0.1),
            rgba(0, 255, 200, 0.1),
            rgba(100, 0, 255, 0.1)
          )`,
          filter: 'blur(1px)'
        }}
      />
      
      {/* 深度レイヤー - 遠景 */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100, 255, 200, ${0.7 * intensity}) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            opacity: 0.2
          }}
        />
      </div>
      
      {/* 深度レイヤー - 中景 */}
      <div className="fixed inset-0 pointer-events-none z-15">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '-100% -100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 100, 150, ${0.5 * intensity}) 2px, transparent 2px)`,
            backgroundSize: '30px 30px',
            opacity: 0.15
          }}
        />
      </div>
      
      {/* 深度レイヤー - 近景 */}
      <div className="fixed inset-0 pointer-events-none z-25">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% -100%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 3px 3px, rgba(150, 100, 255, ${0.3 * intensity}) 3px, transparent 3px)`,
            backgroundSize: '20px 20px',
            opacity: 0.1
          }}
        />
      </div>
      
      {/* 色相シフトアニメーション */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-5"
        animate={{
          filter: [
            'hue-rotate(0deg)',
            'hue-rotate(120deg)',
            'hue-rotate(240deg)',
            'hue-rotate(360deg)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          background: `linear-gradient(45deg, 
            rgba(0, 100, 255, ${0.02 * intensity}),
            rgba(255, 0, 100, ${0.02 * intensity}),
            rgba(100, 255, 0, ${0.02 * intensity})
          )`,
          mixBlendMode: 'color-dodge'
        }}
      />
    </>
  )
}