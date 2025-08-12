'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import AcademyHomePage from '@/components/home/AcademyHomePage'
import OnboardingFlow from '@/components/onboarding/OnboardingFlow'
import PersistentMusicControl from '@/components/ui/PersistentMusicControl'
import { PersonalizationProvider } from '@/contexts/PersonalizationContext'

// Canvasコンポーネントをクライアントサイドでのみ読み込み（チャンク失敗時は無効化）
const loadNoiseGlitch = (): Promise<{ default: React.ComponentType<unknown> }> =>
  import('@/components/effects/NoiseGlitch')
    .then((m) => ({ default: (m as { default: React.ComponentType<unknown> }).default }))
    .catch((e) => {
      console.warn('NoiseGlitch chunk failed, disabling effect:', e)
      return { default: () => null }
    })

const loadMangaMontage = (): Promise<{ default: React.ComponentType<unknown> }> =>
  import('@/components/effects/MangaMontage')
    .then((m) => ({ default: (m as { default: React.ComponentType<unknown> }).default }))
    .catch((e) => {
      console.warn('MangaMontage chunk failed, disabling effect:', e)
      return { default: () => null }
    })

type NoiseGlitchProps = { intensity?: number; active?: boolean }
type MangaMontageProps = { enabled?: boolean }

const NoiseGlitch = dynamic(loadNoiseGlitch, {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black z-20" />
}) as React.ComponentType<NoiseGlitchProps>

const MangaMontage = dynamic(loadMangaMontage, {
  ssr: false
}) as React.ComponentType<MangaMontageProps>

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
      {!contentReady && (
        <OnboardingFlow onComplete={() => setContentReady(true)} />
      )}
      
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
          
          {/* 締めくくり - ノイズエフェクトを表示 */}
          <div className="relative z-10 py-24 md:py-32 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="font-bold text-gray-800 mb-4 text-2xl tracking-wider">-AI REBOOT-</p>
              <p className="text-base md:text-lg text-gray-600">
                あなたの「Will」が、静かに待っている。
              </p>
            </motion.div>
          </div>
        </>
      )}
    </PersonalizationProvider>
  )
}
