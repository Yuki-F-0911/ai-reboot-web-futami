'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LightJourney from '@/components/effects/LightJourney'
import PerspectiveShift from './strategic/PerspectiveShift'
import CoreQuestion from './strategic/CoreQuestion'
import PhilosophyApproach from './strategic/PhilosophyApproach'
import OurSolutions from './strategic/OurSolutions'
import GuidesAndInvitation from './strategic/GuidesAndInvitation'
import FinalCTA from './strategic/FinalCTA'

// 幕間コンポーネント
const Interlude = ({ 
  height = '50vh', 
  children 
}: { 
  height?: string
  children?: React.ReactNode 
}) => {
  return (
    <section 
      className="relative flex items-center justify-center"
      style={{ minHeight: height }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" />
      {children}
    </section>
  )
}

// 決意のための沈黙（幕間3）
const ReflectionPause = () => {
  return (
    <motion.section 
      className="relative flex items-center justify-center"
      style={{ minHeight: '80vh' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent" />
      
      {/* 中央で脈動する星 */}
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1.1, 1],  // 適度な脈動
          opacity: [0.5, 0.8, 0.5]  // 見える濃さ
        }}
        transition={{
          duration: 3.5,  // ゆったりとした周期
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-24 h-24 relative">  {/* ちょうど良いサイズ */}
          {/* 星の核（存在感のある光） */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full blur-xl" />
          <div className="absolute inset-3 bg-gradient-to-r from-blue-300/50 to-purple-300/50 rounded-full blur-md" />
          <div className="absolute inset-6 bg-white/60 rounded-full blur-sm" />
        </div>
      </motion.div>
      
      {/* 繊細なテキスト（オプション） */}
      <motion.p
        className="absolute bottom-20 text-gray-600 text-xs tracking-[0.3em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0] }}  // さらに薄く
        transition={{
          duration: 6,  // よりゆっくり
          repeat: Infinity,
          repeatDelay: 4
        }}
      >
        ・・・
      </motion.p>
    </motion.section>
  )
}

export default function ConversationalScroll() {
  const [lightState, setLightState] = useState<'chaos' | 'converging' | 'path_forming' | 'clear_path' | 'focusing' | 'star_pulsing' | 'star_present'>('chaos')
  const { scrollYProgress } = useScroll()
  
  // スクロール位置に応じて光の状態を変更
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest < 0.1) {
        setLightState('chaos')
      } else if (latest < 0.25) {
        setLightState('converging')
      } else if (latest < 0.4) {
        setLightState('path_forming')
      } else if (latest < 0.55) {
        setLightState('clear_path')
      } else if (latest < 0.7) {
        setLightState('focusing')
      } else if (latest < 0.85) {
        setLightState('star_pulsing')
      } else {
        setLightState('star_present')
      }
    })
    
    return () => unsubscribe()
  }, [scrollYProgress])

  // スクロール進行度に応じた光の強度
  const lightIntensity = useTransform(scrollYProgress, [0, 1], [0.5, 1.5])

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#EAEAEA]">
      {/* 持続する光のビジュアル */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <LightJourney 
          state={lightState} 
          intensity={lightIntensity.get()}
        />
      </motion.div>

      {/* コンテンツセクション */}
      <div className="relative z-10">
        {/* 序章 - 100vh */}
        <div style={{ minHeight: '100vh' }}>
          <PerspectiveShift />
        </div>

        {/* 幕間1: 混沌から問いへ */}
        <Interlude height="50vh">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-500 text-sm tracking-[0.3em] uppercase">
              Chapter I
            </p>
          </motion.div>
        </Interlude>

        {/* 第一章 - 200vh for progressive reveal */}
        <div style={{ minHeight: '200vh' }}>
          <CoreQuestion />
        </div>

        {/* 幕間2: 問いからプロセスへ */}
        <Interlude height="50vh">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-px h-20 bg-gradient-to-b from-transparent via-gray-600 to-transparent mx-auto" />
          </motion.div>
        </Interlude>

        {/* 第二章 */}
        <PhilosophyApproach />

        {/* 第三章 */}
        <OurSolutions />

        {/* 第四章 */}
        <GuidesAndInvitation />

        {/* 幕間3: 決意のための沈黙 */}
        <ReflectionPause />

        {/* 終章 */}
        <FinalCTA />
      </div>
    </div>
  )
}