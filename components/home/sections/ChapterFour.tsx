'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import ChapterPanels from '@/components/home/sections/shared/ChapterPanels'
import { MangaPanel } from '@/components/effects/MangaPanel'
import { chapterPanels } from '@/data/panels'
import { usePersonalization } from '@/contexts/PersonalizationContext'
import Image from 'next/image'

export default function ChapterFour() {
  const { data } = usePersonalization()
  const { expectation, feeling, focus } = data.quizAnswers
  
  // 心のセリフ（軽いパーソナライズ）
  const bubbleText = useMemo(() => {
    let t = '月曜が、少し楽しみになった'
    if (expectation === 'efficiency' || focus === 'skills') {
      t = '小さな改善を試すのが楽しみだ'
    } else if (expectation === 'possibility' || focus === 'mindset') {
      t = '新しい仮説を試したくなってきた'
    }
    if (feeling === 'change') {
      t = '何かが始まる、そんな気がする'
    } else if (feeling === 'growth') {
      t = '昨日より一歩、前に進めそうだ'
    }
    return t
  }, [expectation, focus, feeling])

  // 2行想定の高さで自然改行（InnerVoiceBubble と同様の実装方針）
  const bubbleHeight = 240
  
  // ライフセクションのパーソナライズ（家族に限定しない表現）
  const { familyTitle, familySub } = useMemo(() => {
    let title = 'そして、大切な時間を、大切にできる。'
    let sub = '生まれた余白を、自分や大切な人のために。'

    if (expectation === 'efficiency' || focus === 'skills') {
      title = 'そして、余白が、少しずつ増えていく。'
      sub = '小さな自動化の積み重ねが、あなたの時間を取り戻す。'
    } else if (expectation === 'possibility' || focus === 'mindset') {
      title = 'そして、日常に、新しい楽しみが増える。'
      sub = '思いついたアイデアを試す短い時間が、日々の習慣になる。'
    }

    if (feeling === 'change') {
      sub = '今夜は、いつもより少しだけ、自分のための時間をつくろう。'
    } else if (feeling === 'growth') {
      sub = '昨日より一つ、丁寧に過ごせた。'
    }

    return { familyTitle: title, familySub: sub }
  }, [expectation, focus, feeling])
  const renderMobilePanels = (afterIndex: number) => (
    <div className="md:hidden">
      {chapterPanels.ch4
        .filter(p => p.insertAfter === afterIndex)
        .map((p, idx) => (
          <div key={`ch4-m-${afterIndex}-${idx}`} className="flex justify-center my-6">
            <MangaPanel {...p} yOffset={0} />
          </div>
        ))}
    </div>
  )

  // 第4章挿絵（ユーザー提供画像）
  // 画像ファイルは public/images/ch4-illustration.webp に配置してください
  const illustrationSrc = '/images/ch4-illustration.webp'

  return (
    <section className="relative min-h-screen px-6 md:px-8 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-green-50 via-rose-50 to-pink-50">
      {/* コマ（モバイル=行間カード / デスクトップ=オーバーレイ） */}
      <ChapterPanels chapter="ch4" />

      
      <div className="relative z-30 max-w-xl mx-auto">
        {/* 章番号 - 縦書き風 */}
        <motion.div 
          className="flex items-center gap-8 mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-rose-400 tracking-wider" style={{ writingMode: 'vertical-rl' }}>
              CHAPTER
            </span>
            <span className="text-5xl font-light text-rose-300 mt-2">04</span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800" style={{
              fontFamily: '"Noto Serif JP", serif',
              letterSpacing: '0.08em',
              lineHeight: '1.6'
            }}>
              小さな変化が、<br />
              大きな違いを生む
            </h2>
          </div>
        </motion.div>

        <div className="space-y-16">
          {/* 導入 - 左にアンカーするコールアウト */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mx-auto md:mx-0 md:max-w-[80%]"
          >
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-rose-300 to-pink-300" />
              <p className="text-left text-lg md:text-2xl text-gray-800 font-medium" style={{
                fontFamily: '"Noto Serif JP", serif',
                letterSpacing: '0.1em',
                lineHeight: '2'
              }}>
                個人の「Will」が目覚めるとき、<br />
                まず、日常の見え方が変わる。
              </p>
            </div>
          </motion.div>
          {renderMobilePanels(0)}

          {/* 変化を実感する瞬間 - 思考バブル（InnerVoiceBubble準拠） */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8,
              y: { type: 'spring', damping: 18, stiffness: 70 },
              rotate: { type: 'spring', damping: 20, stiffness: 90 }
            }}
            viewport={{ once: true, margin: '-150px' }}
            className="relative my-16 flex justify-center"
          >
            <div className="relative">
              <div
                className="relative bg-white/90 backdrop-blur-md shadow-xl"
                style={{
                  borderRadius: '50% 50% 45% 55% / 60% 50% 45% 55%',
                  padding: '36px 40px'
                }}
              >
                <p
                  className="text-gray-800 text-xl md:text-2xl"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'upright',
                    fontFamily: '"Noto Sans JP", sans-serif',
                    fontWeight: 400,
                    letterSpacing: '0.14em',
                    lineHeight: '2',
                    height: `${bubbleHeight}px`
                  }}
                >
                  {bubbleText}
                </p>
              </div>
              {/* 尾（小さな円を3つ） */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                <div className="w-4 h-4 bg-white/90 rounded-full shadow-md" />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/85 rounded-full shadow-sm" />
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/80 rounded-full" />
              </div>
            </div>
          </motion.div>
          {renderMobilePanels(1)}

          {/* 変化のリスト */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-xl text-gray-800 font-medium">月曜日の朝が、憂鬱じゃなくなる。</p>
              <p className="text-base md:text-lg text-gray-600 pl-8 mt-2">「今週は何を試してみようか」</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-xl text-gray-800 font-medium">会議での発言が変わる。</p>
              <p className="text-base md:text-lg text-gray-600 pl-8 mt-2">
                「それは難しいですね」から<br />
                「こんなアプローチはどうでしょう」へ。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-xl text-gray-800 font-medium">同僚との雑談が変わる。</p>
              <p className="text-base md:text-lg text-gray-600 pl-8 mt-2">愚痴の時間が、アイデアを出し合う時間に。</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-xl text-gray-800 font-medium">退屈だった仕事が、自分だけの実験場に変わる。</p>
              <p className="text-base md:text-lg text-gray-600 pl-8 mt-2">「こうあるべき」から「こうありたい」へ。</p>
            </motion.div>
          </motion.div>
          {renderMobilePanels(2)}

          {/* 家族との時間 - イラスト（ユーザー提供） */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <div className="relative mx-auto w-full max-w-[720px] aspect-[3/2] mb-8 rounded-2xl overflow-hidden border border-rose-100 shadow-sm">
              <Image
                src={illustrationSrc}
                alt="あたたかい時間 — 自分や大切な人と過ごす静かなひととき"
                fill
                sizes="(max-width: 768px) 90vw, 720px"
                className="object-cover"
                loading="lazy"
                quality={85}
              />
            </div>
            
            <p className="text-lg md:text-xl text-gray-800 font-medium" style={{
              fontFamily: '"Noto Serif JP", serif',
              letterSpacing: '0.1em',
              lineHeight: '2'
            }}>
              {familyTitle}
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-2">
              {familySub}
            </p>
          </motion.div>
          {renderMobilePanels(3)}

          {/* 締めくくり */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center border-t border-gray-200 pt-16"
          >
            <p className="text-lg md:text-xl text-gray-800 font-medium" style={{
              fontFamily: '"Noto Serif JP", serif',
              letterSpacing: '0.12em',
              lineHeight: '2.2'
            }}>
              小さな変化の積み重ねが、<br />
              いつの間にか、あなたの人生を変えている。
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-6" style={{
              fontFamily: '"Noto Sans JP", sans-serif',
              letterSpacing: '0.08em',
              lineHeight: '2'
            }}>
              それが、本当の幸せへの道筋だと、<br />
              私たちは信じています。
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* 次章への誘導 */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-rose-400">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}