'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { createRNG } from './utils/seededRandom'

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
  rng: () => number
}

const GlitchPanel = React.memo<GlitchPanelProps>(function GlitchPanel({ panel, isActive, isLoading, rng }) {
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
      { x: -35 + rng() * 15, y: -30 + rng() * 15 },
      // 右上エリア
      { x: 20 + rng() * 15, y: -30 + rng() * 15 },
      // 左下エリア
      { x: -35 + rng() * 15, y: 15 + rng() * 15 },
      // 右下エリア
      { x: 20 + rng() * 15, y: 15 + rng() * 15 },
      // 左端中央
      { x: -40 + rng() * 10, y: -10 + rng() * 20 },
      // 右端中央
      { x: 30 + rng() * 10, y: -10 + rng() * 20 },
      // 上端中央
      { x: -10 + rng() * 20, y: -35 + rng() * 10 },
      // 下端中央
      { x: -10 + rng() * 20, y: 25 + rng() * 10 },
    ]
    
    const selectedPos = positions[Math.floor(rng() * positions.length)]
    
    setRandomValues({
      x: selectedPos.x,
      y: selectedPos.y,
      scale: 0.5 + rng() * 0.35 // 0.5 to 0.85 (モバイルでさらに小さく)
    })
    setIsPositioned(true)
  }, [panel.id])
  
  // グリッチアニメーションのバリエーション（トランジションなし版）
  const glitchVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: isLoading ? 1 : 0.6, // ローディング後は少し濃く（0.4→0.6）
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
        r: (rng() - 0.5) * 20,
        g: (rng() - 0.5) * 20,
        b: (rng() - 0.5) * 20
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
      className="absolute w-[180px] sm:w-[220px] md:w-[280px] lg:w-[350px] h-auto"
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
          loading="lazy"
        />
      </div>
    </motion.div>
  )
})

interface ActivePanel {
  id: string
  index: number
}

interface MangaMontageProps {
  enabled?: boolean
}

const MangaMontage = React.memo(function MangaMontage({ enabled = true }: MangaMontageProps) {
  const [activePanels, setActivePanels] = useState<ActivePanel[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const [isActive, setIsActive] = useState(true) // アクティブ状態を管理
  const reduceMotion = useReducedMotion()
  const panelCounterRef = React.useRef(0)
  const isLoadingRef = React.useRef(true) // isLoadingの現在値を保持
  const isActiveRef = React.useRef(true) // isActiveの現在値を保持
  const timersRef = React.useRef<Set<NodeJS.Timeout>>(new Set()) // タイマーを管理するSet
  // Initialize a dedicated RNG instance once
  const localRNGRef = useRef<() => number>(createRNG(0xA11CE))
  
  // クライアントサイドでのみマウント
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  // Refの値を更新
  useEffect(() => {
    isLoadingRef.current = isLoading
  }, [isLoading])
  
  useEffect(() => {
    isActiveRef.current = isActive
  }, [isActive])
  
  useEffect(() => {
    // reduce motion や disabled の場合は即停止
    if (reduceMotion || !enabled) {
      setIsActive(false)
      isActiveRef.current = false
      setIsLoading(false)
      isLoadingRef.current = false
      setActivePanels([])
      // 予約済みタイマーのクリーンアップ
      timersRef.current.forEach(timer => clearTimeout(timer))
      timersRef.current.clear()
      return
    }

    // 3秒後にローディング完了とみなす
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
      isLoadingRef.current = false
    }, 3000)
    
    // 12秒で停止（以前の20sから短縮）
    const stopTimer = setTimeout(() => {
      setIsActive(false)
      isActiveRef.current = false
      timersRef.current.forEach(timer => clearTimeout(timer))
      timersRef.current.clear()
      setActivePanels([])
    }, 12000)
    
    return () => {
      clearTimeout(loadingTimer)
      clearTimeout(stopTimer)
      timersRef.current.forEach(timer => clearTimeout(timer))
      timersRef.current.clear()
    }
  }, [reduceMotion, enabled])
  
  useEffect(() => {
    if (!isMounted || !isActive) return // マウント前またはアクティブでない場合は実行しない
    if (reduceMotion || !enabled) return
    
    const localTimers: NodeJS.Timeout[] = []
    
    // グリッチ的なランダムな表示パターン
    const showPanel = () => {
      if (!isActiveRef.current) return // アクティブでない場合は何もしない
      
      if (!isLoadingRef.current) {
        // ローディング後は1枚ずつ追加（最大5枚まで）
        const newIndex = Math.floor(localRNGRef.current() * mangaPanels.length)
        const panelId = `panel-${panelCounterRef.current++}`
        
        setActivePanels(prev => {
          // モバイルでは最大3枚、デスクトップでは5枚に制限
          const maxPanels = window.innerWidth < 768 ? 3 : 5
          const updated = [...prev, { id: panelId, index: newIndex }]
          if (updated.length > maxPanels) {
            return updated.slice(-maxPanels) // 最新分のみ保持
          }
          return updated
        })
        
        // 個別に削除（確実に削除）
        const displayTime = 1500 + localRNGRef.current() * 1500 // 1.5-3秒後に削除
        const hideTimer = setTimeout(() => {
          setActivePanels(prev => prev.filter(p => p.id !== panelId))
          timersRef.current.delete(hideTimer) // タイマーをSetから削除
        }, displayTime)
        localTimers.push(hideTimer)
        timersRef.current.add(hideTimer) // タイマーをSetに追加
        
      } else {
        // ローディング中は複数枚を一度にセット
        const r1 = localRNGRef.current()
        const r2 = localRNGRef.current()
        // モバイルでは表示枚数を減らす
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
        const numPanels = isMobile ? (r1 > 0.5 ? 2 : 1) : (r1 > 0.4 ? 3 : r2 > 0.7 ? 2 : 4)
        const newPanels: ActivePanel[] = []
        for (let i = 0; i < numPanels; i++) {
          newPanels.push({
            id: `panel-${panelCounterRef.current++}`,
            index: Math.floor(localRNGRef.current() * mangaPanels.length)
          })
        }
        setActivePanels(newPanels)
        
        // まとめて削除
        const displayTime = 30 + localRNGRef.current() * 270 // 0.03-0.3秒
        const hideTimer = setTimeout(() => {
          setActivePanels([])
          timersRef.current.delete(hideTimer) // タイマーをSetから削除
        }, displayTime)
        localTimers.push(hideTimer)
        timersRef.current.add(hideTimer) // タイマーをSetに追加
      }
    }
    
    // 不規則なグリッチパターンを作成
    const scheduleGlitch = () => {
      if (!isActiveRef.current) return // アクティブでない場合は終了
      
      const rand = localRNGRef.current()
      
      if (isLoadingRef.current) {
        // ローディング中は激しいグリッチ
        if (rand < 0.5) {
          // 50% - 連続グリッチ
          const burstCount = 5 + Math.floor(localRNGRef.current() * 6)
          for (let i = 0; i < burstCount; i++) {
            const timer = setTimeout(showPanel, i * (20 + localRNGRef.current() * 50))
            localTimers.push(timer)
            timersRef.current.add(timer)
          }
          const nextTimer = setTimeout(scheduleGlitch, burstCount * 50 + localRNGRef.current() * 300)
          localTimers.push(nextTimer)
          timersRef.current.add(nextTimer)
        } else {
          // 50% - 高速グリッチ
          showPanel()
          const nextTimer = setTimeout(scheduleGlitch, 50 + localRNGRef.current() * 150)
          localTimers.push(nextTimer)
          timersRef.current.add(nextTimer)
        }
      } else {
        // ローディング後は適度な間隔で表示
        const nextDelay = localRNGRef.current() * 800 + 200 // 0.2-1.0秒のランダム間隔
        showPanel()
        const nextTimer = setTimeout(scheduleGlitch, nextDelay)
        localTimers.push(nextTimer)
        timersRef.current.add(nextTimer)
      }
    }
    
    // 初回開始
    const startTimer = setTimeout(scheduleGlitch, 200)
    localTimers.push(startTimer)
    timersRef.current.add(startTimer)
    
    // クリーンアップ - すべてのローカルタイマーをクリア
    return () => {
      localTimers.forEach(timer => {
        clearTimeout(timer)
        timersRef.current.delete(timer)
      })
      // アクティブでなくなったら表示中の画像もクリア
      if (!isActive) {
        setActivePanels([])
      }
    }
  }, [isLoading, isMounted, isActive, reduceMotion, enabled])
  
  // サーバーサイドでは何も表示しない
  if (!isMounted || reduceMotion || !enabled) {
    return null
  }
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-25">
      <AnimatePresence>
        {activePanels.map((panel) => (
          <GlitchPanel
            key={panel.id}
            panel={mangaPanels[panel.index]}
            isActive={true}
            isLoading={isLoading}
            rng={localRNGRef.current}
          />
        ))}
      </AnimatePresence>
    </div>
  )
})

export default MangaMontage
