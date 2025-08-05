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
  
  // ノイズ生成関数 - スタイリッシュ版
  const generateNoise = (ctx: CanvasRenderingContext2D, width: number, height: number, density: number, time: number) => {
    // 解像度を下げてパフォーマンス改善
    const scale = 3  // より細かいノイズ
    const scaledWidth = Math.ceil(width / scale)
    const scaledHeight = Math.ceil(height / scale)
    const imageData = ctx.createImageData(scaledWidth, scaledHeight)
    const data = imageData.data
    
    // ブロックノイズサイズ（ランダム化）
    const blockSize = 2 + Math.floor(Math.random() * 3)
    
    for (let y = 0; y < scaledHeight; y += blockSize) {
      for (let x = 0; x < scaledWidth; x += blockSize) {
        if (Math.random() < density) {
          // スタイリッシュなノイズ色（シアン・マゼンタ・白のデジタルパレット）
          const colorType = Math.random()
          let r, g, b
          if (colorType < 0.3) {
            // シアン系
            r = 0
            g = 200 + Math.floor(Math.random() * 55)
            b = 200 + Math.floor(Math.random() * 55)
          } else if (colorType < 0.6) {
            // マゼンタ系
            r = 200 + Math.floor(Math.random() * 55)
            g = 0
            b = 200 + Math.floor(Math.random() * 55)
          } else if (colorType < 0.8) {
            // 白
            r = g = b = 255
          } else {
            // 黒（アクセント）
            r = g = b = 0
          }
          const alpha = (0.08 + Math.random() * 0.15) * intensity
          
          for (let by = 0; by < blockSize && y + by < scaledHeight; by++) {
            for (let bx = 0; bx < blockSize && x + bx < scaledWidth; bx++) {
              const idx = ((y + by) * scaledWidth + (x + bx)) * 4
              if (idx < data.length - 3) {
                data[idx] = r
                data[idx + 1] = g
                data[idx + 2] = b
                data[idx + 3] = alpha * 255
              }
            }
          }
        }
      }
    }
    
    // 拡大して描画
    ctx.putImageData(imageData, 0, 0)
    ctx.imageSmoothingEnabled = false
    ctx.drawImage(ctx.canvas, 0, 0, scaledWidth, scaledHeight, 0, 0, width, height)
  }
  
  // 走査線エフェクト - スタイリッシュ版
  const drawScanlines = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    // 複数の走査線をグラデーションで描画
    const scanlineCount = 3
    for (let i = 0; i < scanlineCount; i++) {
      const scanlineY = ((time * (0.2 + i * 0.1)) % height)
      const alpha = (0.2 - i * 0.05) * intensity
      
      // グラデーション走査線
      const gradient = ctx.createLinearGradient(0, scanlineY, width, scanlineY)
      gradient.addColorStop(0, `rgba(0, 255, 200, 0)`)
      gradient.addColorStop(0.2, `rgba(0, 255, 200, ${alpha})`)
      gradient.addColorStop(0.5, `rgba(255, 255, 255, ${alpha * 0.5})`)
      gradient.addColorStop(0.8, `rgba(255, 0, 200, ${alpha})`)
      gradient.addColorStop(1, `rgba(255, 0, 200, 0)`)
      
      ctx.strokeStyle = gradient
      ctx.lineWidth = 1 + i * 0.5
      ctx.beginPath()
      ctx.moveTo(0, scanlineY)
      ctx.lineTo(width, scanlineY)
      ctx.stroke()
    }
    
    // 縦の干渉波（複数でより繊細に）
    for (let i = 0; i < 2; i++) {
      const interferenceX = ((time * (0.15 + i * 0.1)) % width)
      const alpha = (0.15 - i * 0.05) * intensity
      ctx.strokeStyle = `rgba(200, 0, 255, ${alpha})`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(interferenceX, 0)
      ctx.lineTo(interferenceX, height)
      ctx.stroke()
    }
  }
  
  // デジタルアーティファクト - スタイリッシュ版
  const drawArtifacts = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    // グリッチブロック（グラデーション付き）
    if (Math.random() > 0.96) {
      const x = Math.random() * width
      const y = Math.random() * height
      const w = 50 + Math.random() * 150
      const h = 2 + Math.random() * 8
      
      // グラデーションブロック
      const gradient = ctx.createLinearGradient(x, y, x + w, y)
      gradient.addColorStop(0, `rgba(0, 255, 200, 0)`)
      gradient.addColorStop(0.2, `rgba(0, 255, 200, ${0.4 * intensity})`)
      gradient.addColorStop(0.8, `rgba(255, 0, 200, ${0.4 * intensity})`)
      gradient.addColorStop(1, `rgba(255, 0, 200, 0)`)
      
      ctx.fillStyle = gradient
      ctx.fillRect(x, y, w, h)
      
      // エッジハイライト
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 * intensity})`
      ctx.lineWidth = 0.5
      ctx.strokeRect(x, y, w, h)
    }
    
    // デジタルパーティクル
    if (Math.random() > 0.9) {
      const particleCount = 3 + Math.floor(Math.random() * 5)
      for (let i = 0; i < particleCount; i++) {
        const px = Math.random() * width
        const py = Math.random() * height
        const size = 1 + Math.random() * 3
        
        ctx.beginPath()
        ctx.arc(px, py, size, 0, Math.PI * 2)
        const alpha = (0.3 + Math.random() * 0.4) * intensity
        ctx.fillStyle = i % 2 === 0 
          ? `rgba(0, 255, 200, ${alpha})`
          : `rgba(255, 0, 200, ${alpha})`
        ctx.fill()
        
        // グロー効果
        ctx.shadowBlur = 10
        ctx.shadowColor = ctx.fillStyle
        ctx.fill()
        ctx.shadowBlur = 0
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
    let frameCount = 0
    const animate = () => {
      time += 1
      frameCount++
      
      // 3フレームに1回だけ更新（パフォーマンス改善）
      if (frameCount % 3 === 0) {
        // キャンバスをクリア
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        // ノイズ密度を時間で変化
        const noiseDensity = 0.08 + Math.sin(time * 0.01) * 0.05
        
        // 各レイヤーを描画
        generateNoise(ctx, canvas.width, canvas.height, noiseDensity, time)
        drawScanlines(ctx, canvas.width, canvas.height, time)
        drawArtifacts(ctx, canvas.width, canvas.height, time)
      }
      
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
          opacity: 0.4 + intensity * 0.2
        }}
      />
      
      {/* グリッチオーバーレイ - 軽量版 */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-20"
        animate={{
          opacity: [0, 0.15, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 3,
          times: [0, 0.5, 1]
        }}
        style={{
          background: `linear-gradient(
            45deg,
            rgba(0, 255, 200, 0.1),
            rgba(255, 0, 100, 0.1)
          )`,
          mixBlendMode: 'screen'
        }}
      />
      
    </>
  )
}