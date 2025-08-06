'use client'

import AcademyHomePage from '@/components/home/AcademyHomePage'
import NoiseGlitch from '@/components/effects/NoiseGlitch'

export default function Home() {
  return (
    <>
      {/* ノイズエフェクト - 画面全体に固定表示 */}
      <NoiseGlitch intensity={0.8} />
      <AcademyHomePage />
    </>
  )
}