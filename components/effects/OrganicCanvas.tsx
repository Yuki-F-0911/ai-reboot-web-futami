'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
  depth: number
  size: number
  pulse: number
}

interface OrganicCanvasProps {
  focusLevel: number // 0 (完全にぼやけ) から 1 (完全にフォーカス)
}

export default function OrganicCanvas({ focusLevel = 0 }: OrganicCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const nodesRef = useRef<Node[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const frameSkipRef = useRef<number>(0)

  // ニューロンのようなノードを生成
  const generateNodes = (width: number, height: number) => {
    const nodes: Node[] = []
    const nodeCount = 30 // パフォーマンス改善のためノード数を削減
    
    for (let i = 0; i < nodeCount; i++) {
      const node: Node = {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        connections: [],
        depth: Math.random(),
        size: 2 + Math.random() * 3,
        pulse: Math.random() * Math.PI * 2
      }
      nodes.push(node)
    }

    // 近いノード同士を接続
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 200) { // 200px以内のノードを接続（ノード数削減に対応）
          nodes[i].connections.push(j)
        }
      }
    }

    return nodes
  }

  // アニメーションループ
  const animate = (timestamp?: number) => {
    // 見えていない時は停止
    if (!isVisible) {
      animationRef.current = 0
      return
    }

    // スクロール中は描画を間引く
    if (isScrolling) {
      frameSkipRef.current++
      if (frameSkipRef.current < 3) { // 3フレームに1回だけ描画
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      frameSkipRef.current = 0
    }

    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // キャンバスをクリア
    ctx.fillStyle = '#121828' // 深い藍色の背景
    ctx.fillRect(0, 0, dimensions.width, dimensions.height)

    // ぼかしフィルターを適用
    const blurAmount = 16 * (1 - focusLevel) // focusLevelに応じてぼかしを調整
    ctx.filter = `blur(${blurAmount}px)`

    // 接続線を描画
    nodesRef.current.forEach((node, i) => {
      node.connections.forEach(j => {
        const connectedNode = nodesRef.current[j]
        if (!connectedNode) return

        const gradient = ctx.createLinearGradient(
          node.x, node.y,
          connectedNode.x, connectedNode.y
        )
        
        // 生命感のあるティール〜シアンのグラデーション
        const opacity = 0.1 + (focusLevel * 0.3) * node.depth
        gradient.addColorStop(0, `rgba(56, 232, 211, ${opacity})`)
        gradient.addColorStop(1, `rgba(0, 178, 255, ${opacity})`)
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = 0.5 + focusLevel * 1.5
        ctx.beginPath()
        ctx.moveTo(node.x, node.y)
        
        // 有機的な曲線を描く（パフォーマンス改善: timestampを使用）
        const time = timestamp || 0
        const cx = (node.x + connectedNode.x) / 2 + Math.sin(time * 0.00002 + i) * 10
        const cy = (node.y + connectedNode.y) / 2 + Math.cos(time * 0.00002 + i) * 10
        ctx.quadraticCurveTo(cx, cy, connectedNode.x, connectedNode.y)
        ctx.stroke()
      })
    })

    // ノードを描画
    nodesRef.current.forEach((node, i) => {
      // ノードを移動
      node.x += node.vx
      node.y += node.vy
      node.pulse += 0.01

      // 境界で反射
      if (node.x < 0 || node.x > dimensions.width) node.vx *= -1
      if (node.y < 0 || node.y > dimensions.height) node.vy *= -1

      // ノードを描画
      const pulseFactor = 1 + Math.sin(node.pulse) * 0.2
      const size = node.size * pulseFactor * (0.8 + focusLevel * 0.4)
      
      const gradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, size * 3
      )
      
      const opacity = 0.3 + (focusLevel * 0.5) * node.depth
      gradient.addColorStop(0, `rgba(56, 232, 211, ${opacity})`)
      gradient.addColorStop(0.5, `rgba(0, 178, 255, ${opacity * 0.6})`)
      gradient.addColorStop(1, 'rgba(56, 232, 211, 0)')
      
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(node.x, node.y, size, 0, Math.PI * 2)
      ctx.fill()
    })

    // フォーカスレベルに応じて中央を明るくする
    if (focusLevel > 0.2) {
      const centerGradient = ctx.createRadialGradient(
        dimensions.width / 2, dimensions.height / 2, 0,
        dimensions.width / 2, dimensions.height / 2, dimensions.width / 2
      )
      centerGradient.addColorStop(0, `rgba(240, 244, 248, ${focusLevel * 0.05})`)
      centerGradient.addColorStop(0.7, 'rgba(240, 244, 248, 0)')
      centerGradient.addColorStop(1, 'rgba(240, 244, 248, 0)')
      
      ctx.fillStyle = centerGradient
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)
    }

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

  // IntersectionObserver のセットアップ
  useEffect(() => {
    if (!canvasRef.current) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting)
        })
      },
      {
        threshold: 0.1 // 10%見えたらアクティブ化
      }
    )

    if (canvasRef.current) {
      observerRef.current.observe(canvasRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // スクロールイベントの検出
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)
      
      // スクロール終了検出
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, 150) // 150ms後にスクロール終了と判定
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  // dimensions が変更されたときにノードを再生成
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      nodesRef.current = generateNodes(dimensions.width, dimensions.height)
    }
  }, [dimensions])

  // アニメーション開始
  useEffect(() => {
    if (dimensions.width && dimensions.height && nodesRef.current.length > 0 && isVisible) {
      animate()
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, focusLevel, isVisible])

  return (
    <motion.canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="fixed inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{
        filter: `contrast(${1 + focusLevel * 0.3})` // フォーカスレベルに応じてコントラストも調整
      }}
    />
  )
}