'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import OrganicCanvas from '@/components/effects/OrganicCanvas'
import PerspectiveShift from './strategic/PerspectiveShift'
import CoreQuestion from './strategic/CoreQuestion'
import PhilosophyApproach from './strategic/PhilosophyApproach'
import OurSolutions from './strategic/OurSolutions'
import GuidesAndInvitation from './strategic/GuidesAndInvitation'
import FinalCTA from './strategic/FinalCTA'

// AIレンズコンポーネント（パフォーマンス最適化版）
const AILens = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)
  const rafRef = useRef<number>()
  
  useEffect(() => {
    let lastX = 0
    let lastY = 0
    
    const handleMouseMove = (e: MouseEvent) => {
      lastX = e.clientX
      lastY = e.clientY
      
      // requestAnimationFrameで更新を制限
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          setMousePos({ x: lastX, y: lastY })
          rafRef.current = undefined
        })
      }
    }
    
    const handleMouseDown = () => setIsActive(true)
    const handleMouseUp = () => setIsActive(false)
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])
  
  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: mousePos.x - 75,
        top: mousePos.y - 75,
      }}
      animate={{
        scale: isActive ? 1.2 : 1,
        opacity: isActive ? 1 : 0.6
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div 
        className="relative w-[150px] h-[150px]"
        style={{
          backdropFilter: isActive ? 'blur(0px) contrast(1.5)' : 'blur(0px) contrast(1.2)',
          WebkitBackdropFilter: isActive ? 'blur(0px) contrast(1.5)' : 'blur(0px) contrast(1.2)',
          maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
        }}
      >
        {/* レンズの縁 */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #38E8D3, #00B2FF)',
            opacity: 0.3,
            filter: 'blur(2px)',
          }}
        />
        <div 
          className="absolute inset-2 rounded-full"
          style={{
            border: '1px solid',
            borderColor: 'rgba(56, 232, 211, 0.5)',
            boxShadow: 'inset 0 0 20px rgba(0, 178, 255, 0.2)',
          }}
        />
      </div>
    </motion.div>
  )
}

// 幕間コンポーネント
const Interlude = ({ 
  height = '50vh',
  focusLevel,
  children 
}: { 
  height?: string
  focusLevel: number
  children?: React.ReactNode 
}) => {
  return (
    <section 
      className="relative flex items-center justify-center"
      style={{ minHeight: height }}
    >
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, 
            rgba(18, 24, 40, ${0.7 - focusLevel * 0.2}), 
            rgba(18, 24, 40, ${0.9 - focusLevel * 0.1}))`
        }}
      />
      {children}
    </section>
  )
}

// 決意のための沈黙
const ReflectionPause = ({ focusLevel }: { focusLevel: number }) => {
  return (
    <motion.section 
      className="relative flex items-center justify-center"
      style={{ minHeight: '80vh' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      {/* 完全にフォーカスが合った状態での呼吸するような効果 */}
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.6, 0.7, 0.6]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-32 h-32 relative">
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(56, 232, 211, 0.3), transparent)',
              filter: `blur(${20 * (1 - focusLevel)}px)`
            }}
          />
          <div 
            className="absolute inset-4 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0, 178, 255, 0.4), transparent)',
              filter: `blur(${10 * (1 - focusLevel)}px)`
            }}
          />
        </div>
      </motion.div>
      
      <motion.p
        className="absolute bottom-20 text-[#7F8C9B] text-sm tracking-[0.3em]"
        animate={{ 
          opacity: [0, focusLevel * 0.5, 0] 
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatDelay: 2
        }}
      >
        内なる宇宙との対話
      </motion.p>
    </motion.section>
  )
}

export default function InnerScapeContainer() {
  const { scrollYProgress } = useScroll()
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()
  
  // スクロール進行度に応じてフォーカスレベルを計算（パフォーマンス最適化）
  const focusLevel = useTransform(scrollYProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 0.2, 0.4, 0.6, 0.8, 1]
  )
  
  const [currentFocus, setCurrentFocus] = useState(0)
  
  useEffect(() => {
    const unsubscribe = focusLevel.on('change', (latest) => {
      // requestAnimationFrameで更新頻度を制限
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          setCurrentFocus(Math.round(latest * 100) / 100) // 小数点2桁に丸める
          rafRef.current = undefined
        })
      }
    })
    return () => {
      unsubscribe()
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [focusLevel])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#121828] text-[#F0F4F8]">
      {/* 有機的な背景 */}
      <OrganicCanvas focusLevel={currentFocus} />
      
      {/* AIレンズエフェクト */}
      <AILens />
      
      {/* コンテンツセクション */}
      <div className="relative z-10">
        {/* 序章 - out_of_focus */}
        <div style={{ minHeight: '100vh' }}>
          <PerspectiveShift />
        </div>

        {/* 幕間1: 混沌から問いへ - focusing_center */}
        <Interlude height="50vh" focusLevel={currentFocus}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[#7F8C9B] text-sm tracking-[0.3em] uppercase">
              Chapter I
            </p>
          </motion.div>
        </Interlude>

        {/* 第一章 - focusing_center */}
        <div style={{ minHeight: '200vh' }}>
          <CoreQuestion />
        </div>

        {/* 幕間2: 問いからプロセスへ - revealing_patterns */}
        <Interlude height="50vh" focusLevel={currentFocus}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div 
              className="w-px h-20 mx-auto"
              style={{
                background: 'linear-gradient(to bottom, transparent, #7F8C9B, transparent)',
                filter: `blur(${2 * (1 - currentFocus)}px)`
              }}
            />
          </motion.div>
        </Interlude>

        {/* 第二章 - revealing_patterns */}
        <PhilosophyApproach />

        {/* 第三章 - sharpening_clarity */}
        <OurSolutions />

        {/* 第四章 - full_focus */}
        <GuidesAndInvitation />

        {/* 幕間3: 決意のための沈黙 - serene_clarity */}
        <ReflectionPause focusLevel={currentFocus} />

        {/* 終章 - serene_clarity_subtle */}
        <FinalCTA />
      </div>
    </div>
  )
}