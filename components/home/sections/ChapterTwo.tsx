'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import ChapterPanels from '@/components/home/sections/shared/ChapterPanels'
import { usePersonalization } from '@/contexts/PersonalizationContext'
import { MangaPanel } from '@/components/effects/MangaPanel'
import { chapterPanels } from '@/data/panels'

export default function ChapterTwo() {
  const { data } = usePersonalization()
  const { expectation, focus, feeling } = data.quizAnswers

  // 吹き出し文言（パーソナライズ）
  const bubbleText = useMemo(() => {
    const isEfficiency = expectation === 'efficiency' || focus === 'skills'
    const isPossibility = expectation === 'possibility' || focus === 'mindset'

    // ベース（優先度: Efficiency > Possibility > Default）
    let text = 'まず、何を良くしたい？'
    if (isEfficiency) {
      text = 'やり方は後で。先にゴール。'
    } else if (isPossibility) {
      text = '本当はどうしたい？'
    }

    // 感情で上書き（初動を促す・等身大）
    if (feeling === 'change') {
      text = '仮でいいから、書こう。'
    } else if (feeling === 'growth') {
      text = '正解はない。まず試す。'
    }

    return text
  }, [expectation, focus, feeling])
  const renderMobilePanels = (afterIndex: number) => (
    <div className="md:hidden">
      {chapterPanels.ch2
        .filter(p => p.insertAfter === afterIndex)
        .map((p, idx) => (
          <div key={`ch2-m-${afterIndex}-${idx}`} className="flex justify-center my-6">
            <MangaPanel {...p} yOffset={0} />
          </div>
        ))}
    </div>
  )

  return (
    <section className="relative min-h-screen px-6 md:px-8 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-indigo-50 to-blue-50">
      {/* コマ（モバイル=行間カード / デスクトップ=オーバーレイ） */}
      <ChapterPanels chapter="ch2" />
      {/* 動的な背景要素 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-indigo-100/20 via-transparent to-purple-100/20 blur-3xl" />
        </motion.div>
      </div>
      
      <div className="relative z-30 max-w-2xl mx-auto">
        {/* 章番号 - 縦書き風 */}
        <motion.div 
          className="flex items-center gap-8 mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-indigo-400 tracking-wider" style={{ writingMode: 'vertical-rl' }}>
              CHAPTER
            </span>
            <span className="text-5xl font-light text-indigo-300 mt-2">02</span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800" style={{
              fontFamily: '"Noto Serif JP", serif',
              letterSpacing: '0.08em',
              lineHeight: '1.6'
            }}>
              どんな新しいAIが現れても、<br />
              使いこなせる自分になる
            </h2>
          </div>
        </motion.div>

        <div className="space-y-16">
          {/* 現状の課題 - タイムライン風 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-indigo-100"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[33px] top-2 w-2 h-2 bg-indigo-400 rounded-full" />
                <p className="text-base md:text-lg text-gray-600">今日覚えたAIツールが、明日には別のものに置き換わる。</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[33px] top-2 w-2 h-2 bg-indigo-400 rounded-full" />
                <p className="text-base md:text-lg text-gray-600">毎朝のニュースで、また新しいサービスが生まれている。</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[33px] top-2 w-2 h-2 bg-indigo-400 rounded-full" />
                <p className="text-base md:text-lg text-gray-600">
                  ChatGPTの使い方だけ覚えても、<br />
                  来週にはもっとすごいツールが出てくるかもしれない。
                </p>
              </motion.div>
            </div>
          </motion.div>
          {renderMobilePanels(0)}

          {/* 中核メッセージ - グラデーションカード */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-20" />
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center shadow-lg">
              <p className="text-lg md:text-xl text-gray-800 font-medium" style={{
                fontFamily: '"Noto Serif JP", serif',
                letterSpacing: '0.12em',
                lineHeight: '2'
              }}>
                だから私たちは、「使い方」ではなく、<br />
                「使いこなすための思考OS」を、<br />
                あなたの内側にインストールします。
              </p>
            </div>
          </motion.div>
          {renderMobilePanels(1)}

          {/* AIからのアドバイス - 吹き出し風 */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ 
              duration: 0.6,
              type: "spring", 
              damping: 15, 
              stiffness: 100,
              delay: 0.45
            }}
            viewport={{ once: true }}
            className="relative my-8 flex justify-end mr-4"
          >
            <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl shadow-xl inline-block"
                 style={{ padding: '24px 32px' }}>
              <p className="text-sm font-medium"
                 style={{ 
                   writingMode: 'vertical-rl',
                   textOrientation: 'upright',
                   fontFamily: '"Noto Sans JP", sans-serif',
                   letterSpacing: '0.12em',
                   lineHeight: '2',
                   height: '180px'
                 }}>
                {bubbleText}
              </p>
              {/* 吹き出しの三角形 */}
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 rotate-45 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
            </div>
          </motion.div>
          {renderMobilePanels(2)}

          {/* 変化の説明 - アイコン付き */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-start gap-6">
              <div className="mt-2 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                {/* ターゲットアイコン（絵文字非使用） */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-indigo-600" aria-hidden="true">
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 font-medium">
                  まず必要なのは、自分の軸を見つけること。
                </p>
                <p className="text-base md:text-lg text-gray-600">
                  「私は何を成し遂げたいのか」を明確にする。<br />
                  断片的な経験と想いを編み直し、<br />
                  内側の「Will（目的）」を言語化する。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="mt-2 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                {/* 循環矢印アイコン（絵文字非使用） */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-600" aria-hidden="true">
                  <path d="M4 12a8 8 0 0 1 13.657-5.657" />
                  <path d="M18 6v4H14" />
                  <path d="M20 12a8 8 0 0 1-13.657 5.657" />
                  <path d="M6 18v-4h4" />
                </svg>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 font-medium">
                  そうすると、AIとの関係が変わる。
                </p>
                <p className="text-base md:text-lg text-gray-600">
                  「このAIで何ができるか」ではなく、<br />
                  「自分の目的に、このAIをどう設計して使うか」へと、<br />
                  思考が自然にシフトする。
                </p>
              </div>
            </div>
          </motion.div>
          {renderMobilePanels(3)}

          {/* ビジョン - 中央寄せ強調 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent mb-12"
            />
            
            <p className="text-xl md:text-2xl text-gray-800" style={{
              fontFamily: '"Noto Serif JP", serif',
              fontWeight: '300',
              letterSpacing: '0.15em',
              lineHeight: '2'
            }}>
              どんな新しいツールが現れても、<br />
              「これは自分の目的にこう接続できる」と、<br />
              即座に結びつけられる思考の習慣。
            </p>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent mt-12"
            />
          </motion.div>

          {/* 締めくくり */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="relative py-12 text-center"
          >
            <p className="text-lg md:text-xl text-gray-700" style={{
              fontFamily: '"Noto Sans JP", sans-serif',
              letterSpacing: '0.1em',
              lineHeight: '2'
            }}>
              技術の波に振り回されるのではなく、<br />
              波を読み、自分の針路を選ぶ。<br />
              <span className="font-medium text-indigo-600">それが、本当の「AI活用力」です。</span>
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-indigo-400">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}