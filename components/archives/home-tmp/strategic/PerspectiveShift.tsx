'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

export default function PerspectiveShift() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })

  // マウス追従エフェクト
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 5,  // 20→5で動きを控えめに
        y: (e.clientY / window.innerHeight - 0.5) * 5
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // スクロールに応じたパララックス効果（控えめに）
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -50])  // -150→-50
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -30])  // -100→-30
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])  // より長く表示

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 背景のグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-gray-900/50 to-[#0A0A0A]" />
      
      {/* 動的な背景エフェクト（マウス追従） */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundImage: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(74, 144, 226, 0.03) 0%, transparent 50%)`  // 0.1→0.03でさらに薄く
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.5 }}  // より滑らかに
      />

      {/* メインコンテンツ */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity }}
      >
        {/* タイトルアニメーション */}
        <motion.div style={{ y: titleY }}>
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 20 }}  // 50→20で動きを小さく
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* 1行目 - フェードイン */}
            <motion.span
              className="block text-[#EAEAEA] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}  // 横移動をなくしてシンプルに
            >
              AIに、
            </motion.span>
            
            {/* 2行目 - タイピングエフェクト風 */}
            <motion.span
              className="block text-[#EAEAEA] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              あなたの未来を
            </motion.span>

            {/* 3行目 - 強調 */}
            <motion.span
              className="block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}  // スケールを取り除いてシンプルに
            >
              <span className="text-[#EAEAEA]">任せるな。</span>
            </motion.span>
          </motion.h1>

          {/* 2つ目のメッセージ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}  // 遅延を短く
            className="mt-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
              <span className="text-[#EAEAEA]">あなたの</span>
              <motion.span 
                className="bg-gradient-to-r from-[#4A90E2] to-[#9013FE] bg-clip-text text-transparent mx-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                「Will」
              </motion.span>
              <span className="text-[#EAEAEA]">で、</span>
              <br className="hidden md:block" />
              <motion.span 
                className="text-[#EAEAEA]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.0 }}
              >
                未来を創れ。
              </motion.span>
            </h2>
          </motion.div>
        </motion.div>

        {/* サブテキスト */}
        <motion.div style={{ y: subtitleY }}>
          <motion.p
            className="mt-12 text-xl sm:text-2xl text-[#A0A0A0] max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 10 }}  // 動きを小さく
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            最高のキャリアは、スキルの習得の先にある、
            <br className="md:hidden" />
            心の底からの
            <span className="font-medium text-[#EAEAEA]">「目的」</span>
            から始まる。
          </motion.p>
        </motion.div>

        {/* CTA - 最後に現れる */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
          className="mt-16"
        >
          <Link
            href="#the_question"
            className="group relative inline-flex items-center justify-center"
          >
            {/* ボタンの光彩エフェクト */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#9013FE] rounded-lg opacity-50 blur-lg group-hover:opacity-70 transition-opacity duration-300" />
            
            {/* ボタン本体 */}
            <span className="relative px-8 py-5 bg-gradient-to-r from-[#4A90E2] to-[#9013FE] rounded-lg">
              <span className="flex items-center gap-3 text-white text-lg font-medium">
                あなたの物語を始める
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </span>
          </Link>
          
          <motion.p 
            className="mt-4 text-sm text-[#A0A0A0]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 4.5 }}
          >
            スクロールして続ける
          </motion.p>
        </motion.div>
      </motion.div>

      {/* スクロールインジケーター（画面下部） */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5 }}
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-6 h-6 text-[#A0A0A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* 装飾的な要素（極めて控えめに） */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
    </section>
  )
}