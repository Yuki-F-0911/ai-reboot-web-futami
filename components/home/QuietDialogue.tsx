'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'
import GlitchText from '@/components/effects/GlitchText'
// import QuietParticles from '@/components/effects/QuietParticles'
import { usePersonalization } from '@/contexts/PersonalizationContext'

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
  
  // PersonalizationContextを使用（Providerで囲まれていない場合はデフォルト値）
  const personalizationData = usePersonalization()
  
  // userNameを初回のみ設定して固定化（再レンダリングを防ぐ）
  const [fixedUserName, setFixedUserName] = useState<string>('あなた')
  const [isNameSet, setIsNameSet] = useState(false)
  
  useEffect(() => {
    // 名前が設定されたら一度だけ更新
    if (!isNameSet && personalizationData?.data?.userName) {
      setFixedUserName(personalizationData.data.userName)
      setIsNameSet(true)
    }
  }, [personalizationData?.data?.userName, isNameSet])
  
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
  const [currentPhase, setCurrentPhase] = useState<'chaos' | 'question' | 'awakening' | 'transition' | 'confidence' | 'silence'>('chaos')
  const [showMainMessage, setShowMainMessage] = useState(true)
  const [currentMessage, setCurrentMessage] = useState<1 | 2>(1)
  const [messageTransition, setMessageTransition] = useState<'first' | 'switching' | 'second'>('first')
  
  // 初期マウント時の設定
  useEffect(() => {
    // コンポーネントマウント時の設定
    setCurrentPhase('chaos')
    setShowMainMessage(true)
    setCurrentMessage(1)
  }, [])  // 空の依存配列で初回のみ実行
  
  // FVエリアのスクロールでメッセージを制御
  useEffect(() => {
    const unsub = fvProgress.on("change", () => {
      const value = fvProgress.get()
      setFvScrollValue(value)
      
      
      // スクロール値に応じてメッセージを制御
      if (value < 0.1) {
        setCurrentPhase('chaos')  // 初期表示時はカオス
        setShowMainMessage(true)
        setCurrentMessage(1)
      } else if (value < 15) {
        setCurrentPhase('chaos')  // デジタルカオス継続
        setShowMainMessage(true)
        setCurrentMessage(1)
      } else if (value < 30) {
        setCurrentPhase('question')  // 問いかけ
        setShowMainMessage(true)
        setCurrentMessage(1)
      } else if (value < 45) {
        setCurrentPhase('awakening')  // 覚醒前
        setShowMainMessage(true)
        setCurrentMessage(1)
      } else if (value < 55) {
        setCurrentPhase('transition')  // メッセージ切り替わり
        setShowMainMessage(true)
        setCurrentMessage(2)
      } else if (value < 70) {
        setCurrentPhase('confidence')  // 確信
        setShowMainMessage(true)
        setCurrentMessage(2)
      } else if (value < 90) {
        setCurrentPhase('silence')  // 静寂へ
        setShowMainMessage(true)
        setCurrentMessage(2)
      } else {
        // 序章部分
        setCurrentPhase('silence')
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
      <div 
        ref={containerRef}
        className="min-h-screen text-gray-900 relative z-20"
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
      
      
      {/* 序章 - FVエリア with グリッチエフェクト - 高さ固定 */}
      <div ref={fvRef} className="relative" style={{ height: '150vh' }}>
        {/* メッセージ表示エリア - FVエリア内では固定表示 */}
        <div className={`${fvScrollValue < 100 ? 'fixed' : 'absolute'} top-0 left-0 right-0 h-screen flex items-center justify-center z-30`}
             style={{ 
               top: fvScrollValue >= 100 ? '150vh' : '0',
               opacity: fvScrollValue >= 100 ? 0 : 1,
               transition: 'opacity 0.5s'
             }}>
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

          </motion.div>
          
          {/* メッセージ切り替え表示 */}
          <AnimatePresence mode="wait">
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
                        intensity={0.3}
                      />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text={`${fixedUserName}の未来を`}
                        className="text-6xl lg:text-8xl font-bold"
                        delay={200}
                        fontMix="mixed"
                        intensity={0.3}
                      />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="任せるな。"
                        className="text-6xl lg:text-8xl font-bold"
                        delay={400}
                        fontMix="impact"
                        intensity={0.4}
                      />
                    </div>
                  </div>
                  
                  {/* モバイル: 縦書き */}
                  <div className="lg:hidden flex flex-row-reverse gap-6 md:gap-8">
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="AIに、"
                        className="text-3xl md:text-4xl font-bold"
                        delay={0}
                        fontMix="tech"
                        intensity={0.3}
                      />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text={`${fixedUserName}の未来を`}
                        className="text-4xl md:text-5xl font-bold"
                        delay={200}
                        fontMix="mixed"
                        intensity={0.3}
                      />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="任せるな。"
                        className="text-4xl md:text-5xl font-bold"
                        delay={400}
                        fontMix="impact"
                        intensity={0.4}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
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
                        intensity={0.2}
                      />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="主役は、"
                        className="text-6xl lg:text-8xl font-bold"
                        delay={200}
                        fontMix="mixed"
                        intensity={0.3}
                      />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text={`${fixedUserName}自身だ。`}
                        className="text-6xl lg:text-8xl font-bold"
                        delay={400}
                        fontMix="impact"
                        intensity={0.4}
                      />
                    </div>
                  </div>
                  
                  {/* モバイル: 縦書き */}
                  <div className="lg:hidden flex flex-row-reverse gap-6 md:gap-8">
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="物語の"
                        className="text-3xl md:text-4xl font-bold"
                        delay={0}
                        fontMix="serif"
                      />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text="主役は、"
                        className="text-4xl md:text-5xl font-bold"
                        delay={200}
                        fontMix="mixed"
                      />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      <GlitchText
                        text={`${fixedUserName}自身だ。`}
                        className="text-4xl md:text-5xl font-bold"
                        delay={400}
                        fontMix="impact"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>{/* FVエリア end */}
      
      {/* FVエリアとコンテンツの間のスペーサー */}
      <div className="h-screen" />
      
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
                        text={`${fixedUserName}の未来を`}
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
                        text={`${fixedUserName}自身だ。`}
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
        
        {/* モバイル用の縦書きタイトル */}
        <motion.div
          className="text-gray-600 lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
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
              <GlitchText
                text="生成AIが変えていく世界のルール"
                className="text-2xl md:text-3xl font-light text-gray-900"
                delay={800}
                scrollTrigger={true}
                fontMix="tech"
              />
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
            
            <motion.p 
              className="mb-6 italic text-gray-700 pl-4 border-l-2 border-gray-200"
              initial={{ opacity: 0.7 }}
              whileInView={{ 
                opacity: 1,
                transition: { duration: 1 }
              }}
              viewport={{ once: true }}
            >
              「今までのスキルではもう通用しないかもしれない」
            </motion.p>
            
            <motion.p 
              className="mb-6 italic text-gray-700 pl-4 border-l-2 border-gray-200"
              initial={{ opacity: 0.5 }}
              whileInView={{ 
                opacity: [0.5, 0.8, 0.6, 0.9, 0.7, 1],
                x: [0, -1, 1, -0.5, 0.5, 0]
              }}
              transition={{ 
                duration: 1.5,
                ease: "easeInOut"
              }}
              viewport={{ once: true }}
            >
              「この変化のスピードに、正直ついていけるか不安だ」
            </motion.p>
            
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
              <GlitchText
                text="それは、「静観していることは既に退化をしている」ということ。"
                className="text-xl font-medium text-gray-900"
                delay={200}
                scrollTrigger={true}
                fontMix="impact"
              />
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
        
        {/* モバイル用の縦書きタイトル */}
        <motion.div
          className="absolute right-4 top-1/3 -translate-y-1/3 lg:hidden"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="text-gray-400 text-xs"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '0.2em',
              fontWeight: 300
            }}
          >
            第一章｜すべては、一つの問いから始まる
          </div>
        </motion.div>
        
        <Section delay={0.3}>
          
          <TextBlock size="lg">
            <motion.h2 
              className="text-2xl md:text-3xl font-light mb-8 text-gray-900"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { duration: 1.5, ease: "easeOut" }
              }}
              viewport={{ once: true }}
            >
              すべては、一つの問いから始まる
            </motion.h2>
            
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
              <motion.span
                className="block mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ 
                  opacity: 1,
                  transition: { duration: 2, ease: "easeOut" }
                }}
                viewport={{ once: true }}
              >
                AIを使って、あなたは本当は何がしたいのか？
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0 }}
                whileInView={{ 
                  opacity: 1,
                  transition: { duration: 2, delay: 0.5, ease: "easeOut" }
                }}
                viewport={{ once: true }}
              >
                どんな自分になりたいのか？
              </motion.span>
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
        
        {/* モバイル用の縦書きタイトル */}
        <motion.div
          className="absolute left-4 top-1/3 -translate-y-1/3 lg:hidden"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="text-gray-400 text-xs"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '0.2em',
              fontWeight: 300
            }}
          >
            第二章｜私たちの哲学と方法論
          </div>
        </motion.div>
        
        <Section delay={0.3}>
          
          <TextBlock size="lg">
            <motion.h2 
              className="text-2xl md:text-3xl font-light mb-8 text-gray-900"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { duration: 1.5, ease: "easeOut" }
              }}
              viewport={{ once: true }}
            >
              私たちの哲学と方法論
            </motion.h2>
            
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
        
        {/* モバイル用の縦書きタイトル */}
        <motion.div
          className="absolute right-4 top-1/3 -translate-y-1/3 lg:hidden"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="text-gray-400 text-xs"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '0.2em',
              fontWeight: 300
            }}
          >
            第三章｜探求の末に見つけた、新しい景色
          </div>
        </motion.div>
        
        <Section delay={0.3}>
          
          <TextBlock size="lg">
            <motion.h2 
              className="text-2xl md:text-3xl font-light mb-8 text-gray-900"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { duration: 1.5, ease: "easeOut" }
              }}
              viewport={{ once: true }}
            >
              探求の末に見つけた、新しい景色
            </motion.h2>
            
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
        
        {/* モバイル用の縦書きタイトル */}
        <motion.div
          className="absolute left-4 top-1/3 -translate-y-1/3 lg:hidden"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="text-gray-400 text-xs"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '0.2em',
              fontWeight: 300
            }}
          >
            第四章｜あなただけの「答え」を、共に見つける旅
          </div>
        </motion.div>
        
        <Section delay={0.3}>
          
          <TextBlock size="lg">
            <motion.h2 
              className="text-2xl md:text-3xl font-light mb-8 text-gray-900"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { duration: 1.5, ease: "easeOut" }
              }}
              viewport={{ once: true }}
            >
              あなただけの「答え」を、共に見つける旅
            </motion.h2>
            
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
        
        {/* モバイル用の縦書きタイトル */}
        <motion.div
          className="absolute right-4 top-1/3 -translate-y-1/3 lg:hidden"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="text-gray-400 text-xs"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '0.2em',
              fontWeight: 300
            }}
          >
            最終章｜あなたの物語を、ここから始めよう
          </div>
        </motion.div>
        
        <Section delay={0.3}>
          
          <TextBlock size="lg">
            <motion.h2 
              className="text-2xl md:text-3xl font-light mb-8 text-gray-900"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { duration: 1.5, ease: "easeOut" }
              }}
              viewport={{ once: true }}
            >
              <GlitchText
                text={`${fixedUserName}の物語を、`}
                className="text-2xl md:text-3xl font-light text-gray-900 inline"
                delay={500}
                scrollTrigger={true}
                fontMix="serif"
              />
              <GlitchText
                text="ここから始めよう"
                className="text-2xl md:text-3xl font-light text-gray-900 inline"
                delay={800}
                scrollTrigger={true}
                fontMix="impact"
              />
            </motion.h2>

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

            <motion.h3 
              className="text-xl md:text-2xl font-light mt-16 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { duration: 2, ease: "easeOut" }
              }}
              viewport={{ once: true }}
            >
              <GlitchText
                text="創設メンバーへの招待状"
                className="text-xl md:text-2xl font-light"
                delay={1000}
                scrollTrigger={true}
                fontMix="serif"
              />
            </motion.h3>
            
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

            {/* 思索から行動への自然な架け橋 */}
            <motion.div
              className="mt-20 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-xl font-light text-gray-700 mb-8 text-center">
                ここまで読んでいただいた、あなたへ。
              </p>
              
              <p className="text-base md:text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                長い物語にお付き合いいただき、ありがとうございます。<br />
                もしかしたら、あなたの中に小さな変化の兆しが生まれているかもしれません。
              </p>
              
              <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                その感覚を大切にしてください。<br />
                それは、あなた自身の物語が動き始めた証かもしれません。
              </p>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-800 font-medium text-center mb-12"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              >
                もし、その一歩を踏み出す準備ができたなら。
              </motion.p>
            </motion.div>
            
            {/* CTAボタンエリア - 強化されたエフェクト */}
            <motion.div 
              className="relative mt-20 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* 背景のデジタルグリッド */}
              <div className="absolute inset-0 -z-10">
                <motion.div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(90deg, #6366f1 1px, transparent 1px),
                                     linear-gradient(#6366f1 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }}
                  animate={{
                    backgroundPosition: ['0px 0px', '40px 40px']
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
              </div>

              {/* パーティクルエフェクト */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-indigo-400 rounded-full"
                    style={{
                      left: `${20 + i * 10}%`,
                      top: '50%'
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 0.6, 0],
                      scale: [0, 1.5, 0]
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                {/* メインCTAボタン - グリッチエフェクト付き */}
                <motion.div className="relative group cursor-pointer">
                  {/* 常時アニメーション - グリッチレイヤー */}
                  <motion.div 
                    className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"
                    animate={{
                      x: [0, -1, 1, -0.5, 0.5, 0],
                      y: [0, 0.5, -0.5, 1, -1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-sm mix-blend-screen" />
                  </motion.div>

                  <motion.a
                    href="/contact"
                    className="relative block overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg cursor-pointer"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* 常時アニメーション - グロー効果 */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(255,255,255,0.1), transparent 70%)'
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />

                    {/* ボタンテキスト */}
                    <span className="relative z-10 flex items-center gap-2">
                      <motion.span
                        className="text-lg"
                        animate={{
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      >
                        ▶
                      </motion.span>
                      <span className="relative">
                        <span className="relative z-10">AIリブートアカデミー無料説明会</span>
                        {/* ホバー時のみ表示 - グリッチテキストシャドウ */}
                        <span 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{
                            textShadow: '2px 2px 0 rgba(255,0,100,0.5), -2px -2px 0 rgba(0,255,200,0.5)'
                          }}
                        >
                          AIリブートアカデミー無料説明会
                        </span>
                      </span>
                    </span>

                    {/* 常時アニメーション - スキャンライン効果 */}
                    <motion.div
                      className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'linear-gradient(transparent 50%, rgba(255,255,255,0.05) 50%)',
                        backgroundSize: '100% 4px'
                      }}
                      animate={{
                        backgroundPosition: ['0 0', '0 8px']
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    />
                  </motion.a>

                  {/* 常時アニメーション - パルスリング */}
                  <motion.div
                    className="absolute -inset-2 rounded-xl border border-indigo-400/30 group-hover:border-indigo-400/60 transition-all duration-300 pointer-events-none"
                    animate={{
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                  
                  {/* ホバー時のみ - 追加パルスリング */}
                  <motion.div
                    className="absolute -inset-4 rounded-xl border border-indigo-400 opacity-0 group-hover:opacity-100 pointer-events-none"
                    animate={{
                      scale: [1, 1.1, 1.2],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity
                    }}
                  />
                </motion.div>
                
                {/* セカンダリCTAボタン */}
                <motion.div className="relative group cursor-pointer">
                  <motion.a
                    href="/academy"
                    className="relative inline-flex items-center gap-2 px-6 py-3 text-gray-700 hover:text-indigo-600 transition-colors duration-300 cursor-pointer"
                    whileHover={{ 
                      x: 3
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="relative">
                      <span className="relative z-10">アカデミーの詳細を見る</span>
                      {/* 常時アニメーション - アンダーライン */}
                      <motion.div 
                        className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"
                        animate={{
                          width: ['20%', '40%', '20%'],
                          x: ['0%', '30%', '60%', '30%', '0%']
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      />
                      {/* ホバー時 - フルアンダーライン */}
                      <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </span>
                    <motion.span
                      className="text-lg"
                      animate={{
                        x: [0, 2, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      →
                    </motion.span>
                  </motion.a>

                  {/* 常時アニメーション - 繊細なデジタルノイズ */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none mix-blend-screen">
                    <motion.div
                      className="w-full h-full"
                      style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence baseFrequency="0.9" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4"/%3E%3C/svg%3E")'
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* 企業向けCTAセクション */}
              <motion.div 
                className="mt-12 pt-12 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-center text-gray-600 mb-6">
                  企業のAI活用をお考えの方へ
                </p>
                
                <motion.div className="relative group max-w-md mx-auto cursor-pointer">
                  <motion.a
                    href="/corporate"
                    className="relative block text-center px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-indigo-500 transition-all duration-300 cursor-pointer"
                    whileHover={{ 
                      y: -2,
                      boxShadow: '0 10px 30px rgba(99, 102, 241, 0.1)'
                    }}
                  >
                    {/* 常時アニメーション - 背景グラデーション */}
                    <motion.div 
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.02), rgba(168, 85, 247, 0.02))'
                      }}
                      animate={{
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                    
                    {/* ホバー時の強調背景 */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(168, 85, 247, 0.05))'
                      }}
                    />
                    
                    <span className="relative z-10 flex items-center justify-center gap-2 text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">
                      <motion.span
                        className="text-2xl"
                        animate={{
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      >
                        🏢
                      </motion.span>
                      企業向けAI活用コンサルティング
                    </span>
                  </motion.a>

                  {/* 常時アニメーション - コーナーデコレーション */}
                  <motion.div 
                    className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-indigo-400/30 group-hover:border-indigo-400 transition-all duration-300 pointer-events-none"
                    animate={{
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                  <motion.div 
                    className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-indigo-400/30 group-hover:border-indigo-400 transition-all duration-300 pointer-events-none"
                    animate={{
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-indigo-400/30 group-hover:border-indigo-400 transition-all duration-300 pointer-events-none"
                    animate={{
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      delay: 1,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-indigo-400/30 group-hover:border-indigo-400 transition-all duration-300 pointer-events-none"
                    animate={{
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      delay: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </TextBlock>
        </Section>
      </div>
    </div>
  )
}