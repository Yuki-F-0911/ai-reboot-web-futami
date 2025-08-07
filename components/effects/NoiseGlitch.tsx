'use client'

import React, { useEffect, useRef, useState } from 'react'

interface NoiseGlitchProps {
  intensity?: number
}

const NoiseGlitch = React.memo(function NoiseGlitch({ intensity = 1 }: NoiseGlitchProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number | undefined>(undefined)
  const [isClient, setIsClient] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  
  // ノイズ生成関数 - 最適化版
  const generateNoise = (ctx: CanvasRenderingContext2D, width: number, height: number, density: number) => {
    // 解像度を下げてパフォーマンス改善
    const scale = 4  // パフォーマンス重視（2から4に変更）
    const scaledWidth = Math.ceil(width / scale)
    const scaledHeight = Math.ceil(height / scale)
    
    // 一時的なキャンバスを作成
    const tempCanvas = document.createElement('canvas')
    tempCanvas.width = scaledWidth
    tempCanvas.height = scaledHeight
    const tempCtx = tempCanvas.getContext('2d')
    if (!tempCtx) return
    
    const imageData = tempCtx.createImageData(scaledWidth, scaledHeight)
    const data = imageData.data
    
    // ブロックノイズサイズ（より小さく）
    const blockSize = 1 + Math.floor(Math.random() * 2)
    
    // パフォーマンス最適化: ステップを大きくする
    const step = 2  // ピクセルをスキップ
    for (let y = 0; y < scaledHeight; y += blockSize * step) {
      for (let x = 0; x < scaledWidth; x += blockSize * step) {
        if (Math.random() < density * 0.8) {  // 密度を少し下げる
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
    
    // 一時キャンバスに描画
    tempCtx.putImageData(imageData, 0, 0)
    
    // メインキャンバスに拡大して描画
    ctx.imageSmoothingEnabled = false
    ctx.drawImage(tempCanvas, 0, 0, scaledWidth, scaledHeight, 0, 0, width, height)
  }
  
  // 走査線エフェクト - スタイリッシュ版
  const drawScanlines = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // 複数の走査線をグラデーションで描画
    const scanlineCount = 3
    for (let i = 0; i < scanlineCount; i++) {
      const scanlineY = ((Date.now() * 0.01 * (50 + i * 20)) % height)  // スピードを速く
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
      const interferenceX = ((Date.now() * 0.01 * (30 + i * 15)) % width)  // スピードを速く
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
  const drawArtifacts = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
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
    // クライアントサイドであることを確認後、即座に初期化
    setIsInitialized(true)
  }, [])
  
  // 初期描画専用のuseEffect
  useEffect(() => {
    if (!isClient || !isInitialized) return
    
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // 即座にキャンバスサイズを設定して描画
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    // 濃いノイズで即座に描画
    const strongDensity = 0.4
    generateNoise(ctx, canvas.width, canvas.height, strongDensity)
    drawScanlines(ctx, canvas.width, canvas.height)
    drawArtifacts(ctx, canvas.width, canvas.height)
  }, [isClient, isInitialized])
  
  useEffect(() => {
    if (!isClient || !isInitialized) return
    
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
    
    const startTime = Date.now()
    let lastFrameTime = 0
    const targetFPS = 30  // 30FPSに制限してパフォーマンス改善
    const frameInterval = 1000 / targetFPS
    
    // アニメーションループ
    const animate = (timestamp: number = 0) => {
      // FPS制限
      if (timestamp - lastFrameTime < frameInterval) {
        frameRef.current = requestAnimationFrame(animate)
        return
      }
      lastFrameTime = timestamp
      
      const currentTime = (Date.now() - startTime) / 1000
      
      // キャンバスをクリア
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // 固定密度でノイズを描画（時間パラメータでアニメーション）
      const noiseDensity = 0.25  // 密度を下げる
      
      // 各レイヤーを描画（アーティファクトは頻度を下げる）
      generateNoise(ctx, canvas.width, canvas.height, noiseDensity)
      drawScanlines(ctx, canvas.width, canvas.height)
      if (Math.random() > 0.7) {  // 30%の確率でのみアーティファクトを描画
        drawArtifacts(ctx, canvas.width, canvas.height)
      }
      
      frameRef.current = requestAnimationFrame(animate)
    }
    
    // アニメーション開始
    animate()
    
    return () => {
      window.removeEventListener('resize', updateCanvas)
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [intensity, isClient, isInitialized])
  
  // RGB分離エフェクト用のスタイル
  const rgbShiftStyle = {
    textShadow: `
      ${2 * intensity}px 0 0 rgba(255, 0, 0, 0.5),
      ${-2 * intensity}px 0 0 rgba(0, 255, 255, 0.5),
      0 ${2 * intensity}px 0 rgba(255, 0, 255, 0.3)
    `
  }
  
  if (!isClient || !isInitialized) {
    return null
  }
  
  return (
    <>
      {/* ノイズキャンバス */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          mixBlendMode: 'multiply',
          opacity: 0.7 + intensity * 0.2,
          width: '100%',
          height: '100%'
        }}
      />
      
      {/* グリッチオーバーレイ - 静的版 */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `linear-gradient(
            45deg,
            rgba(0, 255, 200, 0.03),
            rgba(255, 0, 100, 0.03)
          )`,
          mixBlendMode: 'overlay',
          opacity: 0.6
        }}
      />
      
      {/* ビネット効果 - 放射状グラデーション */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(
            ellipse at center,
            transparent 0%,
            transparent 40%,
            rgba(0, 0, 0, 0.1) 60%,
            rgba(0, 0, 0, 0.2) 80%,
            rgba(0, 0, 0, 0.3) 95%,
            rgba(0, 0, 0, 0.4) 100%
          )`,
          mixBlendMode: 'multiply'
        }}
      />
      
    </>
  )
})

export default NoiseGlitch