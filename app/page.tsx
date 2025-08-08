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

export default function Home() {
  // ルート / は軽量の案内ページに切り替え
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">AI REBOOT LP は移動しました</h1>
        <p className="text-gray-600 mb-8">新しいURLはこちらです。</p>
        <a href="/rebooters" className="inline-block px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">/rebooters へ移動</a>
      </div>
    </main>
  )
}