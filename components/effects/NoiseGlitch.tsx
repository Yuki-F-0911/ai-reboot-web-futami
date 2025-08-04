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
  
  // ノイズ生成関数 - パフォーマンス最適化版
  const generateNoise = (ctx: CanvasRenderingContext2D, width: number, height: number, density: number, time: number) => {
    // 解像度を下げてパフォーマンス改善
    const scale = 4
    const scaledWidth = Math.ceil(width / scale)
    const scaledHeight = Math.ceil(height / scale)
    const imageData = ctx.createImageData(scaledWidth, scaledHeight)
    const data = imageData.data
    
    // ブロックノイズサイズ
    const blockSize = 4
    
    for (let y = 0; y < scaledHeight; y += blockSize) {
      for (let x = 0; x < scaledWidth; x += blockSize) {
        if (Math.random() < density) {
          // より視認性の高いノイズ色
          const r = Math.random() > 0.5 ? 255 : 0
          const g = Math.random() > 0.5 ? 255 : 0  
          const b = Math.random() > 0.5 ? 255 : 0
          const alpha = (0.15 + Math.random() * 0.2) * intensity
          
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
  
  // 走査線エフェクト - 軽量版
  const drawScanlines = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    // 単一の走査線
    const scanlineY = ((time * 0.3) % height)
    
    // RGB分離エフェクト（軽量）
    ctx.strokeStyle = `rgba(0, 255, 200, ${0.4 * intensity})`
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(0, scanlineY)
    ctx.lineTo(width, scanlineY)
    ctx.stroke()
    
    // 縦の干渉波（1本のみ）
    const interferenceX = ((time * 0.2) % width)
    ctx.strokeStyle = `rgba(255, 0, 100, ${0.3 * intensity})`
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(interferenceX, 0)
    ctx.lineTo(interferenceX, height)
    ctx.stroke()
  }
  
  // デジタルアーティファクト - 軽量版
  const drawArtifacts = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    // グリッチブロック（数を制限）
    if (Math.random() > 0.95) {
      const x = Math.random() * width
      const y = Math.random() * height
      const w = 100 + Math.random() * 200
      const h = 5 + Math.random() * 15
      
      // シンプルなカラー
      ctx.fillStyle = `rgba(0, 255, 200, ${0.5 * intensity})`
      ctx.fillRect(x, y, w, h)
    }
    
    // 時々発生する横線
    if (Math.random() > 0.98) {
      const y = Math.random() * height
      ctx.fillStyle = `rgba(255, 0, 100, ${0.6 * intensity})`
      ctx.fillRect(0, y, width, 3)
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