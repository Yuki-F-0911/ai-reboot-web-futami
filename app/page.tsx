'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import AcademyHomePage from '@/components/home/AcademyHomePage'
import OnboardingFlow from '@/components/onboarding/OnboardingFlow'
import PersistentMusicControl from '@/components/ui/PersistentMusicControl'
import { PersonalizationProvider } from '@/contexts/PersonalizationContext'

// Canvasコンポーネントをクライアントサイドでのみ読み込み
const NoiseGlitch = dynamic(() => import('@/components/effects/NoiseGlitch'), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black z-20" />
})
const MangaMontage = dynamic(() => import('@/components/effects/MangaMontage'), { 
  ssr: false 
})

export default function Home() {
  const [noiseOpacity, setNoiseOpacity] = useState(1)
  const [contentReady, setContentReady] = useState(false)
  
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
    <PersonalizationProvider>
      {/* オンボーディングフロー（質問→名前→音楽） */}
      <OnboardingFlow onComplete={() => setContentReady(true)} />
      
      {/* 永続的な音楽コントロール */}
      <PersistentMusicControl />
      
      {/* コンテンツは設定完了後に表示 */}
      {contentReady && (
        <>
          {/* ノイズエフェクト - スクロールに応じてフェードアウト */}
          <div style={{ opacity: noiseOpacity, transition: 'opacity 0.3s ease-out' }}>
            <NoiseGlitch intensity={0.8} />
          </div>
          
          {/* 漫画モンタージュエフェクト - FVエリアのみ */}
          {noiseOpacity > 0.5 && <MangaMontage />}
          
          <AcademyHomePage />
        </>
      )}
    </PersonalizationProvider>
  )
}