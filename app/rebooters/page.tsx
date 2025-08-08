'use client'

import React, { useEffect, useRef, useState } from 'react'
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

export default function RebootersPage() {
  const [noiseOpacity, setNoiseOpacity] = useState(1)
  const [contentReady, setContentReady] = useState(false)
  const [effectsActive, setEffectsActive] = useState(true)
  const rafRef = useRef<number | null>(null)
  
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const scrollY = window.scrollY
        const windowHeight = window.innerHeight
        
        const fadeStartPoint = windowHeight * 3
        const fadeEndPoint = windowHeight * 3.5
        
        if (scrollY < fadeStartPoint) {
          setNoiseOpacity(0.8)
          setEffectsActive(true)
        } else if (scrollY >= fadeStartPoint && scrollY <= fadeEndPoint) {
          const fadeProgress = (scrollY - fadeStartPoint) / (fadeEndPoint - fadeStartPoint)
          const nextOpacity = 0.8 * (1 - fadeProgress)
          setNoiseOpacity(nextOpacity)
          setEffectsActive(nextOpacity > 0.2)
        } else {
          setNoiseOpacity(0)
          setEffectsActive(false)
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
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
          {effectsActive && (
            <div style={{ opacity: noiseOpacity, transition: 'opacity 0.3s ease-out' }}>
              <NoiseGlitch intensity={0.8} active={effectsActive} />
            </div>
          )}
          
          {/* 漫画モンタージュエフェクト - FVエリアのみ */}
          {effectsActive && noiseOpacity > 0.5 && <MangaMontage enabled={effectsActive} />}
          
          <AcademyHomePage />
        </>
      )}
    </PersonalizationProvider>
  )
}
