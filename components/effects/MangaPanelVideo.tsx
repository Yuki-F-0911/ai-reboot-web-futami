'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface MangaPanelVideoProps {
  src: string
  poster?: string // 動画のポスター画像
  className?: string
  width?: number
  height?: number
  threshold?: number // ビューポートのどの位置で再生を開始するか（0-1）
}

export function MangaPanelVideo({
  src,
  poster,
  className = '',
  width,
  height,
  threshold = 0.5
}: MangaPanelVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  
  // ビューポート内に入ったかを検出
  const isInView = useInView(containerRef, {
    once: true, // 一度だけトリガー
    amount: threshold // 要素の50%が見えたら
  })

  // 動画の読み込み完了を検知
  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedData = () => {
        setIsLoaded(true)
      }

      const handleEnded = () => {
        setHasPlayed(true)
      }

      const handleError = (e: Event) => {
        const video = e.target as HTMLVideoElement
        console.error('動画読み込みエラー:', src, video.error)
      }

      videoRef.current.addEventListener('loadeddata', handleLoadedData)
      videoRef.current.addEventListener('ended', handleEnded)
      videoRef.current.addEventListener('error', handleError)

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', handleLoadedData)
          videoRef.current.removeEventListener('ended', handleEnded)
          videoRef.current.removeEventListener('error', handleError)
        }
      }
    }
  }, [src])

  // ビューポートに入ったら再生
  useEffect(() => {
    if (isInView && !hasPlayed && videoRef.current) {
      // モバイルの場合は少し遅延を入れる
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      const delay = isMobile ? 500 : 0
      
      setTimeout(() => {
        if (videoRef.current && !hasPlayed) {
          // 動画を読み込んでから再生
          videoRef.current.load()
          videoRef.current.play().catch(error => {
            console.error('動画の自動再生に失敗:', error)
            // フォールバック: ユーザーインタラクション後に再生
            if (videoRef.current) {
              videoRef.current.setAttribute('controls', 'true')
            }
          })
        }
      }, delay)
    }
  }, [isInView, hasPlayed, src])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 1, scale: 1 }}
      animate={{ 
        opacity: 1,
        scale: 1
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-lg shadow-md border border-gray-300/40 bg-white ${className}`}
      style={width && height ? { width, height } : {}}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted // 自動再生のためミュート必須
        playsInline // モバイルでインライン再生
        preload="metadata" // モバイルでの読み込みを改善
        autoPlay={false} // 手動制御のため自動再生は無効
        webkit-playsinline="true" // iOS Safari対応
        className="w-full h-full object-cover"
        style={{ 
          filter: hasPlayed ? 'none' : 'brightness(0.95)',
          transition: 'filter 0.3s ease',
          WebkitTransform: 'translateZ(0)' // ハードウェアアクセラレーション
        }}
      />
      
      {/* ローディング中の表示 */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-2 border-will-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* 再生済みのオーバーレイ（オプション） */}
      {hasPlayed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </motion.div>
      )}
    </motion.div>
  )
}