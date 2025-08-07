'use client'

import React, { useEffect, useState } from 'react'
import AcademyHomePage from '@/components/home/AcademyHomePage'
import NoiseGlitch from '@/components/effects/NoiseGlitch'

export default function Home() {
  const [noiseOpacity, setNoiseOpacity] = useState(1)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // DawnTransitionのあたり（画面3つ分下）からフェードアウト開始
      const fadeStartPoint = windowHeight * 3
      const fadeEndPoint = windowHeight * 3.5
      
      if (scrollY < fadeStartPoint) {
        setNoiseOpacity(0.8)
      } else if (scrollY >= fadeStartPoint && scrollY <= fadeEndPoint) {
        // フェードアウト
        const fadeProgress = (scrollY - fadeStartPoint) / (fadeEndPoint - fadeStartPoint)
        setNoiseOpacity(0.8 * (1 - fadeProgress))
      } else {
        setNoiseOpacity(0)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初期値を設定
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>
      {/* ノイズエフェクト - スクロールに応じてフェードアウト */}
      <div style={{ opacity: noiseOpacity, transition: 'opacity 0.3s ease-out' }}>
        <NoiseGlitch intensity={0.8} />
      </div>
      <AcademyHomePage />
    </>
  )
}