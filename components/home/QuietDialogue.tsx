'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'
import NoiseGlitch from '@/components/effects/NoiseGlitch'
import GlitchText from '@/components/effects/GlitchText'
import QuietParticles from '@/components/effects/QuietParticles'

// セクションコンポーネント
const Section = ({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number
}) => {
  const [isInView, setIsInView] = useState(false)
  
  return (
    <motion.section
      className={`max-w-[800px] mx-auto px-8 md:px-16 relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.2, 
        ease: "easeOut",
        delay
      }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => setIsInView(true)}
    >
      {children}
    </motion.section>
  )
}

// テキストブロックコンポーネント
const TextBlock = ({ 
  children, 
  size = "base",
  className = "" 
}: { 
  children: React.ReactNode
  size?: "sm" | "base" | "lg" | "xl"
  className?: string
}) => {
  const sizeClasses = {
    sm: "text-sm md:text-base leading-relaxed",
    base: "text-base md:text-lg leading-relaxed",
    lg: "text-lg md:text-xl leading-relaxed",
    xl: "text-xl md:text-2xl leading-relaxed"
  }
  
  return (
    <div className={`${sizeClasses[size]} tracking-wide text-gray-800 ${className}`}>
      {children}
    </div>
  )
}

export default function QuietDialogue() {
  const containerRef = useRef<HTMLDivElement>(null)
  const fvRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  // FVエリア専用のスクロール進行度
  const { scrollYProgress: fvScrollProgress } = useScroll({
    target: fvRef,
    offset: ["start start", "end start"]
  })
  
  // スクロール進行度による演出
  const readingProgress = useTransform(scrollYProgress, [0, 1], [0, 100])
  const fvProgress = useTransform(fvScrollProgress, [0, 1], [0, 100])
  const [progress, setProgress] = useState(0)
  const [fvScrollValue, setFvScrollValue] = useState(0)
  const [currentPhase, setCurrentPhase] = useState<'chaos' | 'question' | 'awakening' | 'confidence' | 'silence'>('chaos')
  const [showMainMessage, setShowMainMessage] = useState(true)
  const [currentMessage, setCurrentMessage] = useState<1 | 2>(1)
  const [messageTransition, setMessageTransition] = useState<'first' | 'switching' | 'second'>('first')
  const [noiseLevel, setNoiseLevel] = useState(1)
  
  // FVエリアのスクロールでメッセージを制御
  useEffect(() => {
    const unsub = fvProgress.on("change", () => {
      const value = fvProgress.get()
      setFvScrollValue(value)
      
      
      // FVエリア内のスクロール位置に応じてフェーズを更新
      if (value < 5) {
        setCurrentPhase('chaos')
        setNoiseLevel(1)
        // 最初からメッセージ1を表示
        setShowMainMessage(true)
        setCurrentMessage(1)
      } else if (value < 15) {
        setCurrentPhase('question')
        setNoiseLevel(0.8)
        setShowMainMessage(true)
        setCurrentMessage(1)
      } else if (value < 35) {
        setCurrentPhase('awakening')
        setNoiseLevel(0.6)
        // 第1メッセージを継続表示
        setShowMainMessage(true)
        setCurrentMessage(1)
      } else if (value < 60) {
        setCurrentPhase('confidence')
        setNoiseLevel(0.3)
        // 第2メッセージに切り替え（FVエリアの35%から）
        setShowMainMessage(true)
        setCurrentMessage(2)
      } else {
        setCurrentPhase('silence')
        setNoiseLevel(0.1)
        setShowMainMessage(true)
        setCurrentMessage(2)
      }
    })
    return () => unsub()
  }, [fvProgress, currentPhase, currentMessage, showMainMessage])
  
  // ページ全体のスクロール進行度（読書体験用）
  useEffect(() => {
    const unsub = readingProgress.on("change", () => {
      const value = readingProgress.get()
      setProgress(value)
      
      // メッセージの切り替え演出
      if (value > 20 && value < 30 && messageTransition === 'first') {
        setMessageTransition('switching')
        setTimeout(() => setMessageTransition('second'), 1000)
      }
    })
    return () => unsub()
  }, [readingProgress, messageTransition])
  
  return (
    <>
      {/* 背景演出 - 最背面に配置 */}
      <QuietParticles />
      
      {/* ノイズグリッチエフェクト */}
      <NoiseGlitch intensity={noiseLevel} />
      
      <div 
        ref={containerRef}
        className="min-h-screen text-gray-900 relative"
      >
      
      {/* 読書進行インジケーター - 共通コンポーネント */}
      <ScrollProgressIndicator />
      
      {/* 左側の章インジケーター - 洗練されたデザイン */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:block z-40">
        <div className="flex flex-col items-center space-y-8">
          {['序章', 'I', 'II', 'III', 'IV', '終章'].map((chapter, i) => {
            const isActive = progress > (i * 100 / 6)
            return (
              <motion.div
                key={chapter}
                className="relative group cursor-pointer flex items-center justify-center"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: isActive ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              >
                {/* 外側のリング - アクティブ時のみ表示 */}
                {isActive && (
                  <motion.div
                    className="absolute w-5 h-5 rounded-full border border-indigo-400"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                )}
                
                {/* 中心のドット - サイズ固定で色のみ変更 */}
                <motion.div
                  className="w-2 h-2 rounded-full relative z-10"
                  animate={{
                    backgroundColor: isActive ? '#6366f1' : '#e5e7eb'
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* ホバー時のラベル */}
                <span className="absolute left-10 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {chapter}
                </span>
                
                {/* アクティブ時の縦線（次の章への接続） */}
                {i < 5 && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-px h-8 origin-top"
                    style={{
                      background: isActive 
                        ? 'linear-gradient(to bottom, #6366f1, transparent)'
                        : 'linear-gradient(to bottom, #e5e7eb, transparent)'
                    }}
                    animate={{
                      scaleY: isActive ? 1 : 0.5,
                      opacity: isActive ? 0.5 : 0.2
                    }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
      
      {/* 背景の微細なパターン */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* 序章 - FVエリア with グリッチエフェクト */}
      <div ref={fvRef} className="relative">
        {/* 第1メッセージボックス - 100vh */}
        <div className="h-screen relative flex items-center justify-center overflow-hidden">
          {/* 背景画像レイヤー */}
          <motion.div 
            className="absolute inset-0 z-0"
            animate={{
              opacity: 0.05,
            }}
            transition={{ duration: 2 }}
          >
            <img 
              src="/images/fv_bg_image01.png" 
              alt="" 
              className="w-full h-full object-cover"
              style={{
                filter: 'blur(20px)',
                transform: 'scale(1.1)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90" />
          </motion.div>
          
          {/* 第1メッセージ表示 */}
          <AnimatePresence>
            {showMainMessage && currentMessage === 1 && (
              <motion.div
                key="message-1"
                className="relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-16">
                  {/* デスクトップ: 縦書き */}
                  <div className="hidden lg:flex flex-row-reverse gap-12">
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="AIに、"
                        className="text-5xl lg:text-7xl font-bold"
                        delay={0}
                        fontMix="tech"
                      />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="あなたの未来を"
                        className="text-6xl lg:text-8xl font-bold"
                        delay={200}
                        fontMix="mixed"
                      />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="任せるな。"
                        className="text-6xl lg:text-8xl font-bold"
                        delay={400}
                        fontMix="impact"
                      />
                    </div>
                  </div>
                  
                  {/* モバイル: 横書き */}
                  <div className="lg:hidden">
                    <GlitchText
                      text="AIに、あなたの未来を任せるな。"
                      className="text-3xl md:text-5xl font-bold text-center"
                      delay={0}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* 第2メッセージボックス - 100vh */}
        <div className="h-screen relative flex items-center justify-center overflow-hidden">
          <AnimatePresence>
            {showMainMessage && currentMessage === 2 && (
              <motion.div
                key="message-2"
                className="relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-16">
                  {/* デスクトップ: 縦書き */}
                  <div className="hidden lg:flex flex-row-reverse gap-12">
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="物語の"
                        className="text-5xl lg:text-7xl font-bold"
                        delay={0}
                        fontMix="serif"
                      />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="主役は、"
                        className="text-6xl lg:text-8xl font-bold"
                        delay={200}
                        fontMix="mixed"
                      />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="あなた自身だ。"
                        className="text-6xl lg:text-8xl font-bold"
                        delay={400}
                        fontMix="impact"
                      />
                    </div>
                  </div>
                  
                  {/* モバイル: 横書き */}
                  <div className="lg:hidden">
                    <GlitchText
                      text="物語の主役は、あなた自身だ。"
                      className="text-3xl md:text-5xl font-bold text-center"
                      delay={0}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>{/* FVエリア end */}
      
      {/* 以下の古い実装は削除 */}
      {false && (
        <div>
          {false && currentPhase === 'question' && messageTransition === 'switching' && (
            <motion.div
              key="switching"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1, 1, 1.2],
                rotateZ: [0, 0, 0, 10]
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="relative">
                {/* 最初のメッセージが消える */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    opacity: [1, 0],
                    scale: [1, 0.8],
                    filter: ['blur(0px)', 'blur(20px)']
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                    <div className="hidden lg:block">
                      <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                        <span className="text-6xl lg:text-8xl font-bold">AIに、あなたの未来を任せるな。</span>
                      </div>
                    </div>
                    <div className="lg:hidden">
                      <span className="text-3xl md:text-5xl font-bold">AIに、あなたの未来を任せるな。</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
          
          {/* 第1メッセージ: AIに、あなたの未来を任せるな。 - 旧実装を無効化 */}
          {false && showMainMessage && currentMessage === 1 && (
            <motion.div
              key="message1"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-12 lg:gap-20">
                {/* デスクトップ: 縦書き（右から左へ） - 1つ目のメッセージ */}
                <div className="hidden lg:flex flex-row-reverse gap-12 relative">
                  {/* 背景にデジタルグリッチライン */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                      className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                      animate={{
                        y: ['-100%', '200vh'],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: 'linear',
                      }}
                      style={{ filter: 'blur(1px)' }}
                    />
                    <motion.div
                      className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent"
                      animate={{
                        y: ['200vh', '-100%'],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: 'linear',
                      }}
                      style={{ filter: 'blur(1px)' }}
                    />
                  </div>
                  
                  {/* 第1メッセージ: AIに、あなたの未来を任せるな。 */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="AIに、"
                        className="text-5xl lg:text-7xl font-bold"
                        delay={300}
                        fontMix="tech"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="あなたの未来を"
                        className="text-6xl lg:text-8xl font-bold"
                        delay={600}
                        fontMix="mixed"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  >
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="任せるな。"
                        className="text-6xl lg:text-8xl font-bold"
                        delay={900}
                        fontMix="impact"
                      />
                    </div>
                  </motion.div>
                </div>
                
                {/* モバイル: 横書き */}
                <div className="lg:hidden">
                  <GlitchText
                    text="AIに、あなたの未来を任せるな。"
                    className="text-3xl md:text-5xl font-bold text-center"
                    delay={300}
                    scrollTrigger={true}
                  />
                </div>
              </div>
            </motion.div>
          )}
          
          {/* 第2メッセージ: 物語の主役は、あなた自身だ。 - 旧実装を無効化 */}
          {false && showMainMessage && currentMessage === 2 && (
            <motion.div
              key="message2"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-12 lg:gap-20">
                {/* デスクトップ: 縦書き（右から左へ） */}
                <div className="hidden lg:flex flex-row-reverse gap-12 relative">
                  {/* 背景にデジタルグリッチライン */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                      className="absolute w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                      animate={{
                        y: ['-100%', '200vh'],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                        ease: 'linear',
                      }}
                      style={{ filter: 'blur(1px)' }}
                    />
                    <motion.div
                      className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
                      animate={{
                        y: ['200vh', '-100%'],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        repeatDelay: 2.5,
                        ease: 'linear',
                      }}
                      style={{ filter: 'blur(1px)' }}
                    />
                  </div>
                  
                  {/* 第2メッセージ: 物語の主役は、あなた自身だ。 */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="物語の"
                        className="text-5xl lg:text-7xl font-bold"
                        delay={500}
                        fontMix="serif"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="主役は、"
                        className="text-6xl lg:text-8xl font-bold"
                        delay={800}
                        fontMix="mixed"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                  >
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="あなた自身だ。"
                        className="text-6xl lg:text-8xl font-bold"
                        delay={1100}
                        fontMix="impact"
                      />
                    </div>
                  </motion.div>
                </div>
                
                {/* モバイル: 横書き */}
                <div className="lg:hidden">
                  <GlitchText
                    text="物語の主役は、あなた自身だ。"
                    className="text-3xl md:text-5xl font-bold text-center"
                    delay={500}
                    scrollTrigger={true}
                  />
                </div>
              </div>
            </motion.div>
          )}
          
          {false && currentPhase === 'confidence' && false && (
            <motion.div
              key="confidence"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative"
                animate={{
                  scale: [1, 1.5, 1.8, 1.5, 1.2, 1],
                }}
                transition={{ duration: 2 }}
              >
                {/* 漫画的なエフェクト背景 */}
                <motion.div
                  className="absolute inset-0 -z-10"
                  animate={{
                    background: [
                      'radial-gradient(circle, rgba(255, 215, 0, 0) 0%, transparent 50%)',
                      'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, transparent 70%)',
                      'radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 90%)',
                    ]
                  }}
                  transition={{ duration: 2 }}
                  style={{
                    filter: 'blur(60px)',
                    transform: 'scale(2)'
                  }}
                />
                
                {/* デスクトップ: 縦書き漫画風（右から左へ） */}
                <div className="hidden lg:flex flex-row-reverse items-center justify-center gap-16">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [-2, 2, -2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div style={{ 
                      writingMode: 'vertical-rl', 
                      textOrientation: 'upright',
                      textShadow: '5px 5px 0 rgba(0,0,0,0.1), 10px 10px 0 rgba(0,0,0,0.05)'
                    }}>
                      <span className="text-7xl lg:text-9xl font-black">物語の</span>
                    </div>
                  </motion.div>
                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      rotate: [2, -2, 2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <div style={{ 
                      writingMode: 'vertical-rl', 
                      textOrientation: 'upright',
                      textShadow: '5px 5px 0 rgba(0,0,0,0.1), 10px 10px 0 rgba(0,0,0,0.05)'
                    }}>
                      <span className="text-8xl lg:text-[10rem] font-black">主役は、</span>
                    </div>
                  </motion.div>
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [-2, 2, -2],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <div style={{ 
                      writingMode: 'vertical-rl', 
                      textOrientation: 'upright',
                      textShadow: '5px 5px 0 rgba(0,0,0,0.1), 10px 10px 0 rgba(0,0,0,0.05)'
                    }}>
                      <span className="text-8xl lg:text-[10rem] font-black bg-gradient-to-b from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                        あなた自身だ。
                      </span>
                    </div>
                  </motion.div>
                </div>
                
                {/* モバイル: 横書き */}
                <div className="lg:hidden">
                  <motion.div
                    animate={{
                      textShadow: [
                        '0 0 0px rgba(255, 215, 0, 0)',
                        '0 0 20px rgba(255, 215, 0, 0.8)',
                        '0 0 40px rgba(255, 215, 0, 0.6)',
                        '0 0 60px rgba(255, 215, 0, 0.4)',
                        '0 0 20px rgba(255, 215, 0, 0.2)',
                        '0 0 0px rgba(255, 215, 0, 0)'
                      ]
                    }}
                    transition={{ duration: 2, delay: 0.5 }}
                  >
                    <h1 className="text-4xl md:text-6xl font-black tracking-wide text-center">
                      物語の主役は
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-black tracking-wide mt-4 text-center">
                      あなた自身だ
                    </h1>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
          
          {false && currentPhase === 'silence' && currentMessage === 2 && (
            <motion.div
              key="silence"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
            >
              {/* デスクトップ: 縦書き明朝体（右から左へ） */}
              <div className="hidden lg:flex flex-row-reverse items-center justify-center gap-20">
                <motion.div
                  animate={{
                    opacity: [0.9, 1, 0.9],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                >
                  <div style={{ 
                    writingMode: 'vertical-rl', 
                    textOrientation: 'upright',
                    letterSpacing: '0.3em'
                  }}>
                    <span className="text-6xl lg:text-8xl font-serif font-light text-gray-900">
                      物語の主役は、
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  animate={{
                    opacity: [0.95, 1, 0.95],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 0.5
                  }}
                >
                  <div style={{ 
                    writingMode: 'vertical-rl', 
                    textOrientation: 'upright',
                    letterSpacing: '0.4em'
                  }}>
                    <span className="text-7xl lg:text-9xl font-serif font-light text-gray-900">
                      あなた自身だ。
                    </span>
                  </div>
                </motion.div>
              </div>
              
              {/* モバイル: 横書き */}
              <motion.h1
                className="lg:hidden text-3xl md:text-5xl font-serif font-light tracking-widest text-gray-900 text-center px-8"
                animate={{
                  opacity: [1, 0.95, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                style={{
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.5)'
                }}
              >
                物語の主役は、あなた自身だ。
              </motion.h1>
            </motion.div>
          )}
        </div>
      )}
      
      {/* 以下の古いスティッキーコンテナ実装は削除 */}
      {false && (
        <div className="sticky top-0 h-screen flex items-center justify-center z-50 pointer-events-none">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* 初期ノイズエフェクト */}
            <AnimatePresence>
              {currentPhase === 'chaos' && !showMainMessage && (
                <motion.div
                  key="initial-noise"
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-16">
                    {/* デスクトップ: 縦書き */}
                    <div className="hidden lg:flex flex-row-reverse gap-12">
                      <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                        <GlitchText
                          text="AIに、"
                          className="text-5xl lg:text-7xl font-bold"
                          delay={0}
                          fontMix="tech"
                        />
                      </div>
                      <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                        <GlitchText
                          text="あなたの未来を"
                          className="text-6xl lg:text-8xl font-bold"
                          delay={200}
                          fontMix="mixed"
                        />
                      </div>
                      <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                        <GlitchText
                          text="任せるな。"
                          className="text-6xl lg:text-8xl font-bold"
                          delay={400}
                          fontMix="impact"
                        />
                      </div>
                    </div>
                    {/* モバイル: 横書き */}
                    <div className="lg:hidden">
                      <GlitchText
                        text="AIに、あなたの未来を任せるな。"
                        className="text-3xl md:text-5xl font-bold text-center"
                        delay={0}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* 第1メッセージ */}
            <AnimatePresence>
              {showMainMessage && currentMessage === 1 && (
                <motion.div
                  key="glitch-message-1"
                  className="pointer-events-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-12 lg:gap-20">
                  {/* デスクトップ: 縦書き */}
                  <div className="hidden lg:flex flex-row-reverse gap-12">
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="AIに、"
                        className="text-4xl lg:text-6xl font-bold"
                        delay={0}
                        fontMix="tech"
                      />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="あなたの未来を"
                        className="text-5xl lg:text-7xl font-bold"
                        delay={200}
                        fontMix="mixed"
                      />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="任せるな。"
                        className="text-5xl lg:text-7xl font-bold"
                        delay={400}
                        fontMix="impact"
                      />
                    </div>
                  </div>
                  {/* モバイル: 横書き */}
                  <div className="lg:hidden">
                    <GlitchText
                      text="AIに、あなたの未来を任せるな。"
                      className="text-2xl md:text-4xl font-bold text-center"
                      delay={0}
                      scrollTrigger={false}
                    />
                  </div>
                </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* 第2メッセージ */}
            <AnimatePresence>
              {showMainMessage && currentMessage === 2 && (
                <motion.div
                  key="glitch-message-2"
                  className="pointer-events-auto"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  onAnimationStart={() => console.log('Message 2 animation started!')}
                  onAnimationComplete={() => console.log('Message 2 animation completed!')}
                >
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-12 lg:gap-20">
                  {/* デスクトップ: 縦書き */}
                  <div className="hidden lg:flex flex-row-reverse gap-12">
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="物語の"
                        className="text-4xl lg:text-6xl font-bold"
                        delay={0}
                        fontMix="serif"
                      />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="主役は、"
                        className="text-5xl lg:text-7xl font-bold"
                        delay={200}
                        fontMix="mixed"
                      />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="あなた自身だ。"
                        className="text-5xl lg:text-7xl font-bold"
                        delay={400}
                        fontMix="impact"
                      />
                    </div>
                  </div>
                  {/* モバイル: 横書き */}
                  <div className="lg:hidden">
                    <GlitchText
                      text="物語の主役は、あなた自身だ。"
                      className="text-2xl md:text-4xl font-bold text-center"
                      delay={0}
                      scrollTrigger={false}
                    />
                  </div>
                </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
        
      {/* 既存の縦書きレイアウトは一旦非表示 */}
      <div style={{ display: 'none' }}>
        {/* デスクトップ用: 縦書きレイアウト - 黄金比配置 */}
        <div className="hidden lg:flex items-start justify-center w-full h-full pt-32">
          {/* 第二メッセージ: 中央より左寄り、下寄り */}
          <motion.div
            className="relative mr-20 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <div
              className="text-gray-900 relative"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
              }}
            >
              {/* 物語の - 導入 */}
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.8, delay: 2.7 }}
                style={{
                  fontSize: 'clamp(2rem, 3vw, 3.5rem)',
                  fontWeight: 300,
                  letterSpacing: '0.15em',
                  marginBottom: '1rem',
                  display: 'block'
                }}
              >
                物語の
              </motion.span>
              
              {/* 主役は、 - 強調 */}
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3 }}
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 5rem)',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  marginBottom: '1.5rem',
                  display: 'block'
                }}
              >
                主役は、
              </motion.span>
              
              {/* あなた自身だ。 - 結論 */}
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3.3 }}
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 5rem)',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  display: 'block'
                }}
              >
                あなた<br/>自身だ。
              </motion.span>
              
              {/* 筆の跡のようなアクセントライン */}
              <motion.div
                className="absolute -right-6 top-0 w-[3px]"
                style={{ height: '100%' }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ 
                  duration: 1.5, 
                  delay: 3.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <div className="h-full bg-gradient-to-b from-transparent via-purple-600 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
          
          {/* 第一メッセージ: 中央より右寄り、上寄り */}
          <motion.div
            className="relative ml-20 -mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div
              className="text-gray-900 relative"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
              }}
            >
              {/* AIに、 - 問いかけ */}
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                  fontWeight: 300,
                  letterSpacing: '0.2em',
                  marginBottom: '1.5rem',
                  display: 'block'
                }}
              >
                AIに、
              </motion.span>
              
              {/* あなたの - 語りかけ */}
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.85, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{
                  fontSize: 'clamp(2rem, 3vw, 3.5rem)',
                  fontWeight: 300,
                  letterSpacing: '0.15em',
                  marginBottom: '1rem',
                  display: 'block'
                }}
              >
                あなたの
              </motion.span>
              
              {/* 未来を - 重要な対象 */}
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 5rem)',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  marginBottom: '1.5rem',
                  display: 'block'
                }}
              >
                未来を
              </motion.span>
              
              {/* 任せるな。 - 核心メッセージ */}
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                style={{
                  fontSize: 'clamp(3rem, 5vw, 6rem)',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  display: 'block'
                }}
              >
                任せるな。
              </motion.span>
              
              {/* 筆の跡のようなアクセントライン */}
              <motion.div
                className="absolute -right-6 top-0 w-[3px]"
                style={{ height: '100%' }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ 
                  duration: 1.5, 
                  delay: 2,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <div className="h-full bg-gradient-to-b from-transparent via-indigo-600 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
        
        {/* モバイル・タブレット用: 横書きレイアウト - グリッチ版 */}
        <div className="lg:hidden flex items-center justify-center min-h-screen px-6" style={{ display: 'none' }}>
          <motion.div 
            className="font-light tracking-tight leading-[1.3] text-gray-900 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="mb-8 md:mb-12"
              style={{
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                fontWeight: 200,
                letterSpacing: '0.02em',
                lineHeight: '1.3'
              }}
            >
              <span className="block mb-2 opacity-70" style={{ fontSize: '0.8em' }}>AIに、</span>
              <span className="block mb-2">あなたの未来を</span>
              <span className="block relative font-normal">
                任せるな。
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                />
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1 }}
              style={{
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                fontWeight: 200,
                letterSpacing: '0.02em',
                lineHeight: '1.3'
              }}
            >
              <span className="block mb-2">物語の主役は、</span>
              <span className="block relative font-normal">
                あなた自身だ。
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 2.2 }}
                />
              </span>
            </motion.h2>
          </motion.div>
        </div>

      {/* 序章への自然な導入 - より余白を設けた静かな空間 */}
      <div className="relative h-[50vh] flex items-end justify-center pb-20">
        {/* 縦書きの章タイトル - デスクトップのみ */}
        <motion.div
          className="text-gray-600 hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            letterSpacing: '0.3em',
            fontSize: '0.875rem',
            fontWeight: 400
          }}
        >
          序章｜あなたの物語の始まり
        </motion.div>
        
        {/* モバイル用の横書きタイトル */}
        <motion.div
          className="text-gray-600 lg:hidden text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            letterSpacing: '0.2em',
            fontSize: '0.875rem',
            fontWeight: 400
          }}
        >
          序章｜あなたの物語の始まり
        </motion.div>
      </div>

      {/* 生成AIが変えていく世界のルール */}
      <div className="min-h-screen flex items-center justify-center py-20">
        <Section delay={0.3}>
          <TextBlock size="lg">
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-900">
              生成AIが変えていく世界のルール
            </h2>
            
            <p className="mb-6">
              生成AIの登場により、世界のルールが根底から塗り替えられようとしています。
            </p>
            
            <p className="mb-6">
              かつては「安定」の象徴とされていたホワイトカラーの頂点とも言えるエンジニアやコンサルタントの仕事も、世界各地でリストラの波に直面しています。
            </p>
            
            <p className="mb-6">
              生成AIと共に働くことが当たり前の時代に急速にシフトする中で、これまでの経験やスキルは通用しなくなってきています。
            </p>
          </TextBlock>
        </Section>
      </div>

      {/* 不安の前に立って */}
      <div className="min-h-screen flex items-center justify-center py-20">
        <Section delay={0.3}>
          <TextBlock size="lg">
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-900">
              不安の前に立って
            </h2>
            
            <p className="mb-6 italic text-gray-700 pl-4 border-l-2 border-gray-200">
              「今までのスキルではもう通用しないかもしれない」
            </p>
            
            <p className="mb-6 italic text-gray-700 pl-4 border-l-2 border-gray-200">
              「この変化のスピードに、正直ついていけるか不安だ」
            </p>
            
            <p className="mb-6">
              と感じているのはむしろ正常で、決してあなただけが感じているものではありません。
            </p>
            
            <p className="mb-6">
              何を隠そうこの講座を開講する私たちも同様に、変化の早さに不安を感じています。
            </p>
            
            <p className="mb-6">
              それでも一つ確信していることがあります。
            </p>
            
            <motion.p 
              className="mb-6 font-medium text-xl text-gray-900 pl-4 border-l-4 border-transparent"
              whileInView={{
                borderLeftColor: ["transparent", "#ef4444", "transparent"],
                transition: { duration: 2 }
              }}
              viewport={{ once: true }}
            >
              それは、「静観していることは既に退化をしている」ということ。
            </motion.p>
            
            <p className="mb-6">
              なので、私たちは動き続けることを選びました。
            </p>
            
            <p className="mb-6">
              むしろ、不安の中だからこそ、歩みを止めてはいけないのではないかと思います。
            </p>
            
            <p>
              もし、あなたも心のどこかでそう感じているなら、是非とも私たちの想いを知ってほしいと思います。
            </p>
          </TextBlock>
        </Section>
      </div>
      
      {/* 章の区切り */}
      <div className="relative w-full h-24 flex items-center justify-center">
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
      
      {/* 第一章 - 問いかけ */}
      <div className="min-h-screen flex items-center justify-center py-20 relative">
        {/* 縦書きの章タイトル - 右寄り配置 */}
        <motion.div
          className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="text-gray-400"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '0.3em',
              fontSize: '0.875rem',
              fontWeight: 300
            }}
          >
            第一章｜すべては、一つの問いから始まる
          </div>
        </motion.div>
        
        <Section delay={0.3}>
          
          <TextBlock size="lg">
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-900">
              すべては、一つの問いから始まる
            </h2>
            
            <p className="mb-8">
              AIという強力な「手段」を手にする前に、
              あなたには、答えるべき「目的」についての問いがある。
            </p>
            
            <p className="mb-8">
              それは、あなたのキャリアと人生にとって、
              最もシンプルで、最も重要な問い。
            </p>
            
            <motion.div
              className="my-16 text-xl md:text-2xl font-light border-l-4 border-indigo-500 pl-8 py-4 bg-gradient-to-r from-indigo-50 to-transparent"
              whileInView={{
                borderLeftWidth: ["0px", "4px"],
                paddingLeft: ["0px", "32px"]
              }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              AIを使って、あなたは本当は何がしたいのか？<br />
              どんな自分になりたいのか？
            </motion.div>
            
            <p className="mb-8">
              この根源的な問いに、AIは答えてくれません。
            </p>
            
            <p className="mb-8">
              だからこそ私たちは、まず、あなたの<motion.span 
                className="font-medium inline-block"
                whileInView={{ 
                  color: ["#1a1a1a", "#4f46e5", "#1a1a1a"],
                  transition: { duration: 2, delay: 0.5 }
                }}
                viewport={{ once: true }}
              >「Will」</motion.span>を明確に定義することから始めます。
            </p>

            <h3 className="text-xl md:text-2xl font-light mt-16 mb-8">
              生成AIとどう向き合うか
            </h3>
            
            <p className="mb-6">
              「生成AIとの未来」を誰かに委ねることができたかもしれません。
            </p>
            
            <p className="mb-6">
              でも、私たちは自分たちもその変化に向き合い続ける道を選びました。
            </p>
            
            <p className="mb-6">
              なぜなら、私たちウィルフォワードは2011年の創業以来、「世界を一つの家族にする」というビジョンを掲げ、常に働き方・生き方のあり方を問い続け、トライしつづけてきたという歴史があるからです。
            </p>
            
            <p>
              そして、力がある無しに関係なく、私たち一人ひとりには、この時代をつくる責任があると考えているからです。
            </p>
          </TextBlock>
        </Section>
      </div>
      
      {/* 章の区切り */}
      <div className="relative w-full h-24 flex items-center justify-center">
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
      
      {/* 第二章 - 私たちの哲学と方法論 */}
      <div className="min-h-screen flex items-center justify-center py-20 relative">
        {/* 縦書きの章タイトル - 左寄り配置 */}
        <motion.div
          className="absolute left-12 top-1/2 -translate-y-1/2 hidden lg:block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="text-gray-400"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '0.3em',
              fontSize: '0.875rem',
              fontWeight: 300
            }}
          >
            第二章｜私たちの哲学と方法論
          </div>
        </motion.div>
        
        <Section delay={0.3}>
          
          <TextBlock size="lg">
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-900">
              私たちの哲学と方法論
            </h2>
            
            <p className="mb-8 text-xl">
              AIという「手段」からではなく、
              あなたの「目的」から、キャリア戦略を設計します。
            </p>
            
            <p className="mb-8">
              私たちは、まずあなたの<span className="font-medium">「Will（目的）」</span>を共に探求し、
              それを実現するための最短ルートとして<span className="font-medium">「AI活用（手段）」</span>を設計し、
              <span className="font-medium">「キャリア変革（成果）」</span>へと導きます。
            </p>

            <h3 className="text-xl md:text-2xl font-light mt-16 mb-8">
              「スキル」ではなく「思考OS」のアップデートを
            </h3>
            
            <p className="mb-6">
              私たちが提供したいのは、明日には陳腐化するかもしれない小手先のAI活用「スキル」ではありません。
            </p>
            
            <p className="mb-6">
              それは、未知の課題に直面したとき、自ら問い、学び、AIと共に答えを導き出し、乗り越えていく力そのものです。
            </p>
            
            <p className="mb-6">
              文明の進化で、剣が銃に、馬が自動車に変わったように、時代は常に移り変わります。本当に重要なのは、新しい道具の使い方を覚えることだけではありません。<span className="font-medium">これまでの常識や成功体験に固執せず、これまでの経験という土台の上に、新しい思考のOSをインストールし、自らをアップデートし続ける能力</span>です。
            </p>
            
            <p>
              それこそが、私たちAIリブートアカデミーが提供する、本当の価値です。
            </p>
          </TextBlock>
        </Section>
      </div>
      
      {/* 章の区切り */}
      <div className="relative w-full h-24 flex items-center justify-center">
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
      
      {/* 第三章 - 探求の末に見つけた、新しい景色 */}
      <div className="min-h-screen flex items-center justify-center py-20 relative">
        {/* 縦書きの章タイトル - 右寄り配置 */}
        <motion.div
          className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="text-gray-400"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '0.3em',
              fontSize: '0.875rem',
              fontWeight: 300
            }}
          >
            第三章｜探求の末に見つけた、新しい景色
          </div>
        </motion.div>
        
        <Section delay={0.3}>
          
          <TextBlock size="lg">
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-900">
              探求の末に見つけた、新しい景色
            </h2>
            
            <p className="mb-8 text-xl">
              思考OSがアップデートされると、見える世界は一変します。
            </p>
            
            <p className="mb-6">
              私たちは、その本質を解き明かすために、生成AIの可能性に、時間を忘れて没頭しました。
            </p>
            
            <p className="mb-6">
              それは、昨日までの常識が、今日にはもう通用しなくなるような、目まぐるしくも刺激的な発見の連続。事業を減速させてまで、その探求に夢中になる。未来への確信があったからこそ、私たちはその知的な冒険に夢中になれたのです。
            </p>
            
            <p className="mb-6">
              そして、その探求の末に、一つの確信にたどり着きました。
              これは単なる便利ツールではなく、<span className="font-medium">「人類の未来そのものを左右する転換点になる」</span>ということです。
            </p>
            
            <p className="mb-8">
              その濃密な探求の時間が、私たちに何より貴重なものを与えてくれました。それは、混沌としたテクノロジーを、<span className="font-medium">あなただけの優秀なパートナーに変えるための『再現可能な方法論』</span>です。
            </p>
            
            <p className="mb-6">
              想像してみてください。
              あなたの頭の中にある漠然としたアイデアをAIに話すだけで、数分後にはそれが企画書やデザイン案として目の前に現れる。退屈な情報収集や資料作成はパートナーであるAIに任せ、あなたは、あなた自身の感性と価値観が活きる、より創造的な対話や、本当にやりたかったプロジェクトに没頭する。
            </p>
            
            <p className="mb-6">
              これは、一部の天才だけの未来ではありません。
              <span className="font-medium">私たちが探求の末に見つけた『思考OS』を正しく使えば、誰にでも手に入れられる、これからの時代の『新しい当たり前』なのです。</span>
            </p>
            
            <p>
              私たちが提供するのは、この魔法のような体験の「再現方法」そのものです。
            </p>
          </TextBlock>
        </Section>
      </div>
      
      {/* 章の区切り */}
      <div className="relative w-full h-24 flex items-center justify-center">
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
      
      {/* 第四章 - あなただけの「答え」を、共に見つける旅 */}
      <div className="min-h-screen flex items-center justify-center py-20 relative">
        {/* 縦書きの章タイトル - 左寄り配置 */}
        <motion.div
          className="absolute left-12 top-1/2 -translate-y-1/2 hidden lg:block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="text-gray-400"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '0.3em',
              fontSize: '0.875rem',
              fontWeight: 300
            }}
          >
            第四章｜あなただけの「答え」を、共に見つける旅
          </div>
        </motion.div>
        
        <Section delay={0.3}>
          
          <TextBlock size="lg">
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-900">
              あなただけの「答え」を、共に見つける旅
            </h2>
            
            <p className="mb-6">
              私たちが提供する「思考OS」は、それだけでは完成しません。
            </p>
            
            <p className="mb-6">
              なぜなら、それはどんな扉でも開けられる可能性を秘めた<span className="font-medium">「鍵」</span>のようなものだからです。どの扉を開け、その先で何を成し遂げたいのかという、あなただけの<span className="font-medium">「答え」</span>がなければ、その鍵は意味をなさないのです。
            </p>
            
            <p className="mb-6">
              そして、その「何を望み、何に幸福を感じるか」という答えは、あなたの内側にしかありません。
            </p>
            
            <p className="mb-6">
              だから私たちは「教える教育」だけではなく、あえて「教えない」教育を大切にします。私たちは、答えを与える講師ではなく、あなたに問いを投げつづける<span className="font-medium">「伴走者」</span>です。
            </p>
            
            <p>
              あなたが自己認知を深め、本当の自分自身に出会えるように。キャリアコンサルタントやメンターとの対話を通じて、あなただけの「答え」を見つける旅を、共に歩ませてください。
            </p>
          </TextBlock>
        </Section>
      </div>
      
      {/* 章の区切り */}
      <div className="relative w-full h-24 flex items-center justify-center">
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
      
      {/* 最終章 - あなたの物語を、ここから始めよう */}
      <div className="min-h-screen flex items-center justify-center py-20 relative">
        {/* 縦書きの章タイトル - 右寄り配置 */}
        <motion.div
          className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="text-gray-400"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '0.3em',
              fontSize: '0.875rem',
              fontWeight: 300
            }}
          >
            最終章｜あなたの物語を、ここから始めよう
          </div>
        </motion.div>
        
        <Section delay={0.3}>
          
          <TextBlock size="lg">
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-900">
              あなたの物語を、ここから始めよう
            </h2>

            <h3 className="text-xl md:text-2xl font-light mt-12 mb-8">
              同志を求めています
            </h3>
            
            <p className="mb-6">
              私たちは、教壇に立つ「先生」ではありません。今この瞬間も挑戦を続ける現役の「実践者集団」です。今この瞬間に進化している世界に、今この瞬間挑んでいる私たちだからこそ、まだ教科書には載っていない「生きた知見」で、あなたの成長をブーストできるのだと確信しています。
            </p>
            
            <p className="mb-6">
              生成AIを身につけて、キャリアアップしたいという方も歓迎です。それ以上に、私たちの想いに共感し、「この時代を一緒に創っていきたい」と思っていただける方と出会えることを楽しみにしています。
            </p>
            
            <p className="mb-12">
              そして、もし同志になっていただけたら、この上なく嬉しい思い限りです。
            </p>

            <h3 className="text-xl md:text-2xl font-light mt-16 mb-8">
              創設メンバーへの招待状
            </h3>
            
            <p className="mb-6">
              今、このタイミングで出会えたあなたへ。
            </p>
            
            <p className="mb-6">
              AIが答えを提示する時代だからこそ、
              「自分は何を望み、どこへ向かうのか」という問いの価値が、何よりも高まっています。
            </p>
            
            <p className="mb-6">
              私たちは、単なるスキルの提供者ではありません。
              まだ誰も正解を知らないこの時代を、自らの意志で定義し、未来を創造していく
              最初の実践者たちのコミュニティです。
            </p>
            
            <p className="mb-6">
              創設メンバーは、単なる受講生ではありません。
              あなたの物語が、次の時代のプロローグになる。
              あなたの挑戦が、誰かの希望の光になる。
            </p>
            
            <p className="mb-16">
              共に、AI時代の新しい生き方を、定義しませんか。
            </p>

            <h3 className="text-xl md:text-2xl font-light mt-16 mb-8">
              あなたの次の一歩
            </h3>
            
            <p className="mb-6">
              さあ、あなたの変革に向けた対話を始めましょう。
            </p>
            
            <p className="mb-12">
              まずは、あなたの現状やキャリアへの想いについてお聞かせください。専門家が、具体的な情報提供や次のステップをご提案します。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-16">
              <motion.a
                href="/contact"
                className="group inline-block relative overflow-hidden px-6 py-3 rounded-lg border border-indigo-500 transition-all duration-300"
                whileHover={{ 
                  y: -2,
                  scale: 1.02
                }}
              >
                <span className="relative z-10 block transition-all duration-300 group-hover:text-white">
                  → AIリブートアカデミー無料説明会に申し込む
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.a
                href="/academy"
                className="inline-block pb-2 border-b border-current opacity-70 transition-all duration-300"
                whileHover={{ 
                  y: -2,
                  borderColor: "#333333",
                  opacity: 1
                }}
              >
                → AIリブートアカデミーの詳細を見る
              </motion.a>
            </div>
          </TextBlock>
        </Section>
      </div>
    </div>
    </>
  )
}