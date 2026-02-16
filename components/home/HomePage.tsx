import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import ConceptSection from '@/components/home/ConceptSection'
import WillExploration from '@/components/home/WillExploration'
import TwoPaths from '@/components/home/TwoPaths'
import NewsSection from '@/components/home/NewsSection'
import FinalCTA from '@/components/home/FinalCTA'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ファーストビュー - 問いかけから始まる */}
      <HeroSection />

      {/* コンセプト - 私たちが信じること */}
      <ConceptSection />

      {/* Willの探求セクション */}
      <WillExploration />

      {/* 2つの道 - シンプルな選択 */}
      <TwoPaths />

      {/* お知らせセクション */}
      <NewsSection />

      {/* 最後の問いかけ（CTA） */}
      <FinalCTA />
    </main>
  )
}
