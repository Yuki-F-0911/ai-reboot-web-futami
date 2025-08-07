'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// 実際の画像パス（16枚）
const mangaPanels = [
  { id: 1, src: '/fv-manga/manga_1.webp', alt: '深夜のオフィスで企画書を書く人' },
  { id: 2, src: '/fv-manga/manga_2.webp', alt: 'プレゼンで情熱的に語る女性' },
  { id: 3, src: '/fv-manga/manga_3.webp', alt: 'チームメンバーと議論する瞬間' },
  { id: 4, src: '/fv-manga/manga_4.webp', alt: 'コードを書くエンジニアの横顔' },
  { id: 5, src: '/fv-manga/manga_5.webp', alt: 'アイデアがひらめく瞬間' },
  { id: 6, src: '/fv-manga/manga_6.webp', alt: '資料を見つめて考え込む人' },
  { id: 7, src: '/fv-manga/manga_7.webp', alt: '窓の外を見つめる後ろ姿' },
  { id: 8, src: '/fv-manga/manga_8.webp', alt: '手を握りしめる決意の瞬間' },
  { id: 9, src: '/fv-manga/manga_9.webp', alt: '早朝のジョギング、自己投資の瞬間' },
  { id: 10, src: '/fv-manga/manga_10.webp', alt: 'スマホで学習動画を見る瞬間' },
  { id: 11, src: '/fv-manga/manga_11.webp', alt: 'ホワイトボードに戦略を描く' },
  { id: 12, src: '/fv-manga/manga_12.webp', alt: '同僚と成功を喜ぶハイタッチ' },
  { id: 13, src: '/fv-manga/manga_13.webp', alt: '鏡の前で自分と向き合う' },
  { id: 14, src: '/fv-manga/manga_14.webp', alt: 'カフェでノートPCに向かう週末起業家' },
  { id: 15, src: '/fv-manga/manga_15.webp', alt: '子供に勉強を教える親の姿' },
  { id: 16, src: '/fv-manga/manga_16.webp', alt: 'オンライン会議で発言する勇気' },
]


interface GlitchPanelProps {
  panel: typeof mangaPanels[0]
  isActive: boolean
  isLoading: boolean
}

const GlitchPanel: React.FC<GlitchPanelProps> = ({ panel, isActive, isLoading }) => {
  // ランダム値をstateで管理（SSR対応、初期値は画面外）
  const [randomValues, setRandomValues] = useState({
    x: -100,
    y: -100,
    scale: 1
  })
  const [isPositioned, setIsPositioned] = useState(false)
  
  useEffect(() => {
    // 中央を避けて配置（画面の四隅や端に配置）
    const positions = [
      // 左上エリア
      { x: -35 + Math.random() * 15, y: -30 + Math.random() * 15 },
      // 右上エリア
      { x: 20 + Math.random() * 15, y: -30 + Math.random() * 15 },
      // 左下エリア
      { x: -35 + Math.random() * 15, y: 15 + Math.random() * 15 },
      // 右下エリア
      { x: 20 + Math.random() * 15, y: 15 + Math.random() * 15 },
      // 左端中央
      { x: -40 + Math.random() * 10, y: -10 + Math.random() * 20 },
      // 右端中央
      { x: 30 + Math.random() * 10, y: -10 + Math.random() * 20 },
      // 上端中央
      { x: -10 + Math.random() * 20, y: -35 + Math.random() * 10 },
      // 下端中央
      { x: -10 + Math.random() * 20, y: 25 + Math.random() * 10 },
    ]
    
    const selectedPos = positions[Math.floor(Math.random() * positions.length)]
    
    setRandomValues({
      x: selectedPos.x,
      y: selectedPos.y,
      scale: 0.6 + Math.random() * 0.4 // 0.6 to 1.0
    })
    setIsPositioned(true)
  }, [panel.id])
  
  // グリッチアニメーションのバリエーション（トランジションなし版）
  const glitchVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: isLoading ? 1 : 0.4, // ローディング後は透明度を下げる
      transition: {
        duration: 0
      }
    }
  }
  
  // RGB分離用のランダム値
  const [rgbOffset, setRgbOffset] = useState({ r: 0, g: 0, b: 0 })
  
  useEffect(() => {
    if (isActive) {
      // 初期のRGB分離を設定
      setRgbOffset({
        r: (Math.random() - 0.5) * 20,
        g: (Math.random() - 0.5) * 20,
        b: (Math.random() - 0.5) * 20
      })
      
      // 0.05秒後に収束
      const timer = setTimeout(() => {
        setRgbOffset({ r: 0, g: 0, b: 0 })
      }, 50)
      
      return () => clearTimeout(timer)
    }
  }, [isActive])
  
  if (!isActive || !isPositioned) return null
  
  return (
    <motion.div
      className="absolute w-[250px] md:w-[300px] lg:w-[350px] h-auto"
      style={{
        left: `${50 + randomValues.x}%`,
        top: `${50 + randomValues.y}%`,
        transform: `translate(-50%, -50%) scale(${randomValues.scale})`
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={glitchVariants}
    >
      {/* メイン画像 */}
      <div className="relative w-full h-auto">
        {/* 赤チャンネル */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateX(${rgbOffset.r}px)`,
            transition: 'transform 0.05s linear'
          }}
        >
          <Image
            src={panel.src}
            alt=""
            width={350}
            height={250}
            className="w-full h-auto object-contain"
            style={{ 
              filter: 'grayscale(1) contrast(1.5) brightness(0.9)',
              mixBlendMode: 'screen',
              opacity: 0.33,
              color: 'red'
            }}
          />
        </div>
        
        {/* 緑チャンネル */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateX(${rgbOffset.g}px)`,
            transition: 'transform 0.05s linear'
          }}
        >
          <Image
            src={panel.src}
            alt=""
            width={350}
            height={250}
            className="w-full h-auto object-contain"
            style={{ 
              filter: 'grayscale(1) contrast(1.5) brightness(0.9)',
              mixBlendMode: 'screen',
              opacity: 0.33,
              color: 'green'
            }}
          />
        </div>
        
        {/* 青チャンネル */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateX(${rgbOffset.b}px)`,
            transition: 'transform 0.05s linear'
          }}
        >
          <Image
            src={panel.src}
            alt=""
            width={350}
            height={250}
            className="w-full h-auto object-contain"
            style={{ 
              filter: 'grayscale(1) contrast(1.5) brightness(0.9)',
              mixBlendMode: 'screen',
              opacity: 0.33,
              color: 'blue'
            }}
          />
        </div>
        
        {/* ベース画像 */}
        <Image
          src={panel.src}
          alt={panel.alt}
          width={350}
          height={250}
          className="w-full h-auto object-contain relative z-10"
          style={{ 
            filter: 'grayscale(1) contrast(1.5) brightness(0.9)',
            mixBlendMode: 'multiply'
          }}
          priority
        />
      </div>
    </motion.div>
  )
}

export default function MangaMontage() {
  const [activeIndices, setActiveIndices] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  
  // クライアントサイドでのみマウント
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  useEffect(() => {
    // 3秒後にローディング完了とみなす
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    
    return () => clearTimeout(loadingTimer)
  }, [])
  
  useEffect(() => {
    // グリッチ的なランダムな表示パターン
    const showPanel = () => {
      const numPanels = isLoading 
        ? (Math.random() > 0.4 ? 3 : Math.random() > 0.7 ? 2 : 4) // ローディング中は複数枚
        : (Math.random() > 0.7 ? 1 : 2) // ローディング後は1-2枚
      const indices: number[] = []
      
      for (let i = 0; i < numPanels; i++) {
        indices.push(Math.floor(Math.random() * mangaPanels.length))
      }
      
      setActiveIndices(indices)
      
      // 表示時間もランダム
      const displayTime = isLoading 
        ? 30 + Math.random() * 270  // ローディング中は高速（0.03-0.3秒）
        : 500 + Math.random() * 1000 // ローディング後はゆっくり（0.5-1.5秒）
      
      setTimeout(() => {
        setActiveIndices([])
      }, displayTime)
    }
    
    // 不規則なグリッチパターンを作成
    const scheduleGlitch = () => {
      const rand = Math.random()
      
      if (isLoading) {
        // ローディング中は激しいグリッチ
        if (rand < 0.5) {
          // 50% - 連続グリッチ
          const burstCount = 5 + Math.floor(Math.random() * 6)
          for (let i = 0; i < burstCount; i++) {
            setTimeout(showPanel, i * (20 + Math.random() * 50))
          }
          setTimeout(scheduleGlitch, burstCount * 50 + Math.random() * 300)
        } else {
          // 50% - 高速グリッチ
          showPanel()
          setTimeout(scheduleGlitch, 50 + Math.random() * 150)
        }
      } else {
        // ローディング後は穏やかに
        if (rand < 0.3) {
          // 30% - 短い連続グリッチ
          const burstCount = 2 + Math.floor(Math.random() * 2)
          for (let i = 0; i < burstCount; i++) {
            setTimeout(showPanel, i * (200 + Math.random() * 300))
          }
          setTimeout(scheduleGlitch, burstCount * 500 + Math.random() * 3000)
        } else if (rand < 0.5) {
          // 20% - 単発グリッチ
          showPanel()
          setTimeout(scheduleGlitch, 2000 + Math.random() * 3000)
        } else {
          // 50% - 長い休止期間
          setTimeout(scheduleGlitch, 3000 + Math.random() * 5000)
        }
      }
    }
    
    // 初回開始
    setTimeout(scheduleGlitch, 200)
    
    return () => {} // クリーンアップは特に必要なし
  }, [isLoading])
  
  // サーバーサイドでは何も表示しない
  if (!isMounted) {
    return null
  }
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-25">
      <AnimatePresence mode="sync">
        {activeIndices.map((idx, i) => (
          <GlitchPanel
            key={`${idx}-${Date.now()}-${i}`}
            panel={mangaPanels[idx]}
            isActive={true}
            isLoading={isLoading}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}