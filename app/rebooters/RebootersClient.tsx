'use client'

import React, { useEffect, useRef, useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import AcademyHomePage from '@/components/home/AcademyHomePage'
import OnboardingFlow from '@/components/onboarding/OnboardingFlow'
import PersistentSettingsControl from '@/components/ui/PersistentSettingsControl'
import FloatingCTA from '@/components/ui/FloatingCTA'
import { PersonalizationProvider, usePersonalization } from '@/contexts/PersonalizationContext'
import { useUrlParams } from '@/hooks/useUrlParams'
import '@/utils/clearStorage'

// Canvasロード
const loadNoiseGlitch = (): Promise<{ default: React.ComponentType<unknown> }> =>
  import('@/components/effects/NoiseGlitch')
    .then((m) => ({ default: (m as { default: React.ComponentType<unknown> }).default }))
    .catch((e) => { console.warn('NoiseGlitch chunk failed:', e); return { default: () => null } })

const loadMangaMontage = (): Promise<{ default: React.ComponentType<unknown> }> =>
  import('@/components/effects/MangaMontage')
    .then((m) => ({ default: (m as { default: React.ComponentType<unknown> }).default }))
    .catch((e) => { console.warn('MangaMontage chunk failed:', e); return { default: () => null } })

const NoiseGlitch = dynamic(loadNoiseGlitch, { ssr: false, loading: () => <div className="fixed inset-0 bg-black z-20" /> }) as React.ComponentType<{ intensity?: number; active?: boolean }>
const MangaMontage = dynamic(loadMangaMontage, { ssr: false }) as React.ComponentType<{ enabled?: boolean }>

function RebootersContent() {
  const [noiseOpacity, setNoiseOpacity] = useState(1)
  const [contentReady, setContentReady] = useState(false)
  const [effectsActive, setEffectsActive] = useState(true)
  const rafRef = useRef<number | null>(null)
  const { data } = usePersonalization()
  const { isSkipped } = useUrlParams()

  useEffect(() => { if (isSkipped || data.hasCompleted) setContentReady(true) }, [isSkipped, data.hasCompleted])

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const y = window.scrollY, h = window.innerHeight
        const a = h * 3, b = h * 3.5
        if (y < a) { setNoiseOpacity(0.8); setEffectsActive(true) }
        else if (y <= b) {
          const p = (y - a) / (b - a), op = 0.8 * (1 - p)
          setNoiseOpacity(op); setEffectsActive(op > 0.2)
        } else { setNoiseOpacity(0); setEffectsActive(false) }
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true }); handleScroll()
    return () => { window.removeEventListener('scroll', handleScroll); if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  return (
    <PersonalizationProvider>
      {!contentReady && <OnboardingFlow onComplete={() => setContentReady(true)} />}
      <PersistentSettingsControl />
      <FloatingCTA />
      {contentReady && (
        <>
          {effectsActive && (<div style={{ opacity: noiseOpacity, transition: 'opacity 0.3s ease-out' }}><NoiseGlitch intensity={0.8} active={effectsActive} /></div>)}
          {effectsActive && noiseOpacity > 0.5 && <MangaMontage enabled={effectsActive} />}
          <AcademyHomePage />
        </>
      )}
    </PersonalizationProvider>
  )
}

export default function RebootersClient() { return (
  <PersonalizationProvider>
    <Suspense fallback={<div />}> <RebootersContent /> </Suspense>
  </PersonalizationProvider>
)}
