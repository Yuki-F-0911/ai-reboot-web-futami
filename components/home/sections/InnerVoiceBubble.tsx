'use client'

import React, { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { usePersonalization } from '@/contexts/PersonalizationContext'

export default function InnerVoiceBubble() {
  const { scrollYProgress } = useScroll()
  const { data } = usePersonalization()
  const { expectation, feeling, focus } = data.quizAnswers
  
  // スクロールに応じた視差効果
  const bubble1Y = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const bubble2Y = useTransform(scrollYProgress, [0, 0.3], [0, -30])
  
  // パーソナライズ文言（初回選択肢に"少し寄せる"）
  const { bubble1Text, bubble2Text, bubble3Text } = useMemo(() => {
    // デフォルト文言（改行とインデント付き）
    let b1 = ['このままで', '　いいのだろうか']
    let b2 = ['本当はもっと、', '　　できるはずなのに']  // インデントを増やす
    let b3 = ['変わりたいけど、', '一歩が踏み出せない']  // インデントなし

    // 期待/フォーカス寄せ
    const isEfficiency = expectation === 'efficiency' || focus === 'skills'
    const isPossibility = expectation === 'possibility' || focus === 'mindset'

    if (isEfficiency) {
      b1 = ['このやり方、', '　もっと良くできる']
      b2 = ['無駄を減らして', '　　本質に集中したい']
      b3 = ['小さく試して、', '　確実に前へ']
    } else if (isPossibility) {
      b1 = ['本当はもっと', '面白くできるはず']
      b2 = ['まだ見ぬ可能性を', '　　形にしたい']
      b3 = ['考え方を変えれば', '　　景色も変わる']
    }

    // 感情寄せ（軽く上書き）
    if (feeling === 'change') {
      b1 = ['今のままじゃ', '　　終われない']  // インデントを増やす
      b3 = ['怖さより', 'ワクワクを信じたい']  // インデントなし
    } else if (feeling === 'growth') {
      b2 = ['　積み上げれば、', '　　　　きっと届く']
      b3 = ['　焦らず、', '　　　でも止まらず']
    }

    return { bubble1Text: b1, bubble2Text: b2, bubble3Text: b3 }
  }, [expectation, feeling, focus])

  return (
    <>
      {/* モバイル専用レイアウト（PC同様に位置ずらし＋順番表示＋尻尾付き） */}
      <div className="md:hidden absolute inset-0 z-40 px-4">
        {/* 1: 左上（小） */}
        <motion.div
          className="absolute top-[18%] left-[8%]"
          initial={{ opacity: 0, y: 24, scale: 0.95, rotate: -10 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.0 }}
        >
          <div className="relative">
            <div className="relative bg-white/90 backdrop-blur-md shadow-lg [--ivs:8ch] rounded-[40%_60%_55%_45%_/_60%_50%_50%_40%] px-5 py-5">
              <p
                className="text-gray-800 text-[16px] leading-relaxed"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.14em',
                  lineHeight: 1.8,
                  inlineSize: 'var(--ivs)'
                }}
              >
                {bubble1Text[0]}
                <br />
                {bubble1Text[1]}
              </p>
            </div>
            {/* 尻尾（左下） */}
            <div className="absolute -bottom-2 left-10">
              <div className="w-4 h-4 bg-white/90 rounded-full shadow-md" />
              <div className="absolute -bottom-3 left-1 w-2.5 h-2.5 bg-white/85 rounded-full shadow" />
              <div className="absolute -bottom-5 left-2 w-1.5 h-1.5 bg-white/80 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* 2: 右中（中） */}
        <motion.div
          className="absolute top-[44%] right-[6%]"
          initial={{ opacity: 0, y: 28, scale: 0.95, rotate: 12 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="relative">
            <div className="relative bg-white/85 backdrop-blur-md shadow-lg [--ivs:12ch] rounded-[55%_45%_45%_55%_/_50%_60%_40%_50%] px-6 py-7">
              <p
                className="text-gray-700 text-[16px] leading-relaxed"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  lineHeight: 2,
                  inlineSize: 'var(--ivs)'
                }}
              >
                {bubble2Text[0]}
                <br />
                {bubble2Text[1]}
              </p>
            </div>
            {/* 尻尾（右下） */}
            <div className="absolute -bottom-3 right-10">
              <div className="w-5 h-5 bg-white/85 rounded-full shadow-lg" />
              <div className="absolute -bottom-3 right-1 w-3 h-3 bg-white/80 rounded-full shadow" />
              <div className="absolute -bottom-6 right-2 w-2 h-2 bg-white/75 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* 3: 下段中央（小） */}
        <motion.div
          className="absolute top-[74%] left-1/3 -translate-x-1/2"
          initial={{ opacity: 0, y: 32, scale: 0.95, rotate: -15 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
        >
          <div className="relative">
            <div className="relative bg-white/80 backdrop-blur-md shadow-md [--ivs:11ch] rounded-[45%_55%_50%_50%_/_60%_60%_40%_40%] px-5 py-6">
              <p
                className="text-gray-600 text-[14px] leading-relaxed"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  lineHeight: 1.7,
                  inlineSize: 'var(--ivs)'
                }}
              >
                {bubble3Text[0]}
                <br />
                {bubble3Text[1]}
              </p>
            </div>
            {/* 尻尾（左下） */}
            <div className="absolute -bottom-2 left-12">
              <div className="w-4 h-4 bg-white/80 rounded-full shadow-md" />
              <div className="absolute -bottom-3 left-1 w-2.5 h-2.5 bg-white/75 rounded-full shadow" />
              <div className="absolute -bottom-5 left-2 w-1.5 h-1.5 bg-white/70 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 1つ目の思考バブル - 左寄り配置 */}
      <motion.div
        className="hidden md:block absolute top-[18%] left-[10%] sm:left-[15%] md:top-[20%] md:left-[25%] z-40"
        initial={{ 
          opacity: 0, 
          y: 60, 
          scale: 0, 
          rotate: -15,
          filter: "blur(10px)" 
        }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotate: 0,
          filter: "blur(0px)"
        }}
        transition={{ 
          duration: 0.8,
          scale: { 
            type: "spring",
            damping: 15,
            stiffness: 100,
            mass: 1
          },
          rotate: {
            type: "spring",
            damping: 20,
            stiffness: 100
          },
          opacity: { duration: 0.5, ease: "easeOut" },
          y: { type: "spring", damping: 15, stiffness: 80 },
          filter: { duration: 0.7, ease: "easeOut" }
        }}
        viewport={{ once: true, margin: "-200px" }}
        style={{ y: bubble1Y }}
      >
        <div className="relative">
          {/* 思考バブル本体（雲の形） */}
          <div className="relative">
            {/* メインの雲 */}
            <div className="relative bg-white/90 backdrop-blur-md shadow-xl [--ivs:7ch] sm:[--ivs:9ch] md:[--ivs:10ch]" 
                 style={{ 
                   borderRadius: '45% 55% 50% 50% / 60% 60% 40% 40%',
                   padding: '28px 32px'
                 }}>
              {/* 縦書きテキスト */}
              <p 
                className="text-gray-800 text-lg md:text-xl leading-relaxed relative z-10"
                style={{ 
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.15em',
                  lineHeight: '1.8',
                  inlineSize: 'var(--ivs, 10ch)'
                }}
              >
                {bubble1Text[0]}
                <br />
                {bubble1Text[1]}
              </p>
            </div>
            
            {/* 思考バブルの尻尾（小さな円） */}
            <div className="absolute -bottom-3 left-10">
              <div className="w-5 h-5 bg-white/90 rounded-full shadow-md"></div>
              <div className="absolute -bottom-4 left-1 w-3 h-3 bg-white/85 rounded-full shadow-sm"></div>
              <div className="absolute -bottom-7 left-2 w-2 h-2 bg-white/80 rounded-full shadow-sm"></div>
            </div>
          </div>
          
          {/* 影 */}
          <div className="absolute inset-0 bg-black/5 blur-3xl transform translate-y-4 -z-10" 
               style={{ borderRadius: '45% 55% 50% 50% / 60% 60% 40% 40%' }}></div>
        </div>
      </motion.div>

      {/* 2つ目の思考バブル - 右寄り配置、少し下に */}
      <motion.div
        className="hidden md:block absolute top-[45%] right-[8%] sm:right-[12%] md:right-[20%] z-40"
        initial={{ 
          opacity: 0, 
          y: 80, 
          scale: 0,
          rotate: 20,
          filter: "blur(12px)" 
        }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotate: 0,
          filter: "blur(0px)"
        }}
        transition={{ 
          delay: 0.2,
          duration: 0.9,
          scale: { 
            type: "spring",
            damping: 18,
            stiffness: 90,
            mass: 1.2,
            delay: 0.2
          },
          rotate: {
            type: "spring",
            damping: 22,
            stiffness: 90,
            delay: 0.2
          },
          opacity: { duration: 0.6, delay: 0.2, ease: "easeOut" },
          y: { type: "spring", damping: 18, stiffness: 70, delay: 0.2 },
          filter: { duration: 0.8, delay: 0.3, ease: "easeOut" }
        }}
        viewport={{ once: true, margin: "-200px" }}
        style={{ y: bubble2Y }}
      >
        <div className="relative">
          {/* 思考バブル本体（より大きな雲の形） */}
          <div className="relative">
            {/* メインの雲 - より有機的な形状 */}
            <div className="relative bg-white/85 backdrop-blur-md shadow-xl [--ivs:8ch] sm:[--ivs:10ch] md:[--ivs:12ch]" 
                 style={{ 
                   borderRadius: '55% 45% 45% 55% / 50% 60% 40% 50%',
                   padding: '36px 40px'
                 }}>
              {/* 縦書きテキスト */}
              <p 
                className="text-gray-700 text-lg md:text-xl leading-relaxed relative z-10"
                style={{ 
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: '500',
                  letterSpacing: '0.2em',
                  lineHeight: '2',
                  inlineSize: 'var(--ivs, 12ch)'
                }}
              >
                {bubble2Text[0]}
                <br />
                {bubble2Text[1]}
              </p>
            </div>
            
            {/* 思考バブルの尻尾（小さな円、右側） */}
            <div className="absolute -bottom-4 right-16">
              <div className="w-6 h-6 bg-white/85 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-5 right-1 w-4 h-4 bg-white/80 rounded-full shadow-md"></div>
              <div className="absolute -bottom-9 right-2 w-2.5 h-2.5 bg-white/75 rounded-full shadow-sm"></div>
              <div className="absolute -bottom-12 right-3 w-1.5 h-1.5 bg-white/70 rounded-full"></div>
            </div>
          </div>
          
          {/* 影 */}
          <div className="absolute inset-0 bg-black/5 blur-3xl transform translate-y-5 -z-10" 
               style={{ borderRadius: '55% 45% 45% 55% / 50% 60% 40% 50%' }}></div>
        </div>
      </motion.div>

      {/* 3つ目の思考バブル - 下部やや左寄り */}
      <motion.div
        className="hidden md:block absolute top-[75%] left-[50%] sm:left-[45%] md:left-[35%] transform -translate-x-1/2 z-40"
        initial={{ 
          opacity: 0, 
          y: 100, 
          scale: 0,
          rotate: -25,
          filter: "blur(15px)" 
        }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotate: 0,
          filter: "blur(0px)"
        }}
        transition={{ 
          delay: 0.4,
          duration: 1,
          scale: { 
            type: "spring",
            damping: 20,
            stiffness: 85,
            mass: 1.3,
            delay: 0.4
          },
          rotate: {
            type: "spring",
            damping: 25,
            stiffness: 80,
            delay: 0.4
          },
          opacity: { duration: 0.7, delay: 0.4, ease: "easeOut" },
          y: { type: "spring", damping: 20, stiffness: 60, delay: 0.4 },
          filter: { duration: 0.9, delay: 0.5, ease: "easeOut" }
        }}
        viewport={{ once: true, margin: "-150px" }}
      >
        <div className="relative">
          {/* 思考バブル本体（小さめの雲） */}
          <div className="relative">
            {/* メインの雲 - コンパクトな形状 */}
            <div className="relative bg-white/80 backdrop-blur-md shadow-lg [--ivs:8ch] sm:[--ivs:9ch] md:[--ivs:11ch]" 
                 style={{ 
                   borderRadius: '45% 55% 50% 50% / 60% 60% 40% 40%',
                   padding: '30px 34px'
                 }}>
              {/* 縦書きテキスト */}
              <p 
                className="text-gray-600 text-sm md:text-base leading-relaxed relative z-10"
                style={{ 
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.12em',
                  lineHeight: '1.7',
                  inlineSize: 'var(--ivs, 9ch)'
                }}
              >
                {bubble3Text[0]}
                <br />
                {bubble3Text[1]}
              </p>
            </div>
            
            {/* 思考バブルの尻尾（小さな円、左下） */}
            <div className="absolute -bottom-2 left-12">
              <div className="w-4 h-4 bg-white/80 rounded-full shadow-md"></div>
              <div className="absolute -bottom-3 left-0.5 w-2.5 h-2.5 bg-white/75 rounded-full shadow-sm"></div>
              <div className="absolute -bottom-5 left-1 w-1.5 h-1.5 bg-white/70 rounded-full"></div>
            </div>
          </div>
          
          {/* 影 */}
          <div className="absolute inset-0 bg-black/4 blur-2xl transform translate-y-3 -z-10" 
               style={{ borderRadius: '50% 50% 45% 55% / 55% 45% 45% 55%' }}></div>
        </div>
      </motion.div>

      {/* 装飾的な思考の痕跡（連続する小さな円） */}
      <motion.div
        className="absolute top-[90%] left-[50%] z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="w-1.5 h-1.5 bg-white/30 rounded-full"
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-6 left-1 w-1 h-1 bg-white/25 rounded-full"
          animate={{ 
            opacity: [0.15, 0.4, 0.15],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{ 
            duration: 3,
            delay: 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-10 left-0.5 w-0.5 h-0.5 bg-white/20 rounded-full"
          animate={{ 
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 3,
            delay: 0.6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </>
  )
}
