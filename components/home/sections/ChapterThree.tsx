'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import ChapterPanels from '@/components/home/sections/shared/ChapterPanels'
import { MangaPanel } from '@/components/effects/MangaPanel'
import { MangaPanelVideo } from '@/components/effects/MangaPanelVideo'
import { chapterPanels } from '@/data/panels'
import { usePersonalization } from '@/contexts/PersonalizationContext'

// 漫画コマ風キャラクターパネル
function CharacterPanel({ side, accent, label }: { side: 'left' | 'right'; accent: 'emerald' | 'teal'; label: string }) {
  const accentColor = accent === 'emerald' ? '#10b981' : '#14b8a6' // emerald-500 / teal-500
  const frameRotate = side === 'left' ? -2 : 2
  return (
    <div
      className="relative w-28 md:w-36 aspect-[3/4] rounded-md border-2 shadow-lg overflow-hidden bg-white flex-shrink-0"
      style={{
        borderColor: accentColor,
        transform: `rotate(${frameRotate}deg)`
      }}
      aria-label={label}
    >
      {/* 網点（スクリーントーン） */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            `radial-gradient(${accentColor} 0.6px, transparent 0.8px), radial-gradient(${accentColor} 0.6px, transparent 0.8px)`,
          backgroundPosition: '0 0, 3px 3px',
          backgroundSize: '6px 6px'
        }}
      />
      {/* ライトグラデーション */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0) 80%)'
        }}
      />
      {/* キャラクターのシルエット（SVG） */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4.2" fill="#1f2937" fillOpacity="0.9" />
          <path d="M4 20c0-3.8 3.6-6.8 8-6.8s8 3 8 6.8" fill="#1f2937" fillOpacity="0.9" />
        </svg>
      </div>
      {/* 内枠ライン */}
      <div className="absolute inset-1 rounded-sm" style={{ border: '1px solid rgba(17,24,39,0.12)' }} />
    </div>
  )
}

export default function ChapterThree() {
  const { data } = usePersonalization()
  const { expectation, feeling, focus } = data.quizAnswers

  // 吹き出しセリフを軽くパーソナライズ
  const { lineLeft, lineRight } = useMemo(() => {
    // デフォルト: 気づきの瞬間
    let left = '本当は、こういうことがやりたかったんだ'
    let right = '自分の言葉で、やっと言えた'

    if (expectation === 'efficiency' || focus === 'skills') {
      left = '本当は、仕組みをつくるのが好きだった'
      right = '改善で人が楽になる——それがずっとやりたかった'
    } else if (expectation === 'possibility' || focus === 'mindset') {
      left = '本当は、ゼロから形にするのが好きだった'
      right = '未知に踏み出すことを、ずっと望んでいた'
    }

    if (feeling === 'change') {
      left = 'やっと分かった。これが、私がやりたかったこと'
    } else if (feeling === 'growth') {
      right = '昨日より深く、自分の声が聞こえた'
    }

    return { lineLeft: left, lineRight: right }
  }, [expectation, feeling, focus])
  const renderMobilePanels = (afterIndex: number) => {
    // 動画マッピング
    const videoMap: Record<string, string> = {
      '/panels/ch3-01.webp': '/panels/ch3-01.mp4',
    }
    
    return (
      <div className="md:hidden">
        {chapterPanels.ch3
          .filter(p => p.insertAfter === afterIndex)
          .map((p, idx) => {
            // 動画がある場合は動画パネルを表示
            const videoSrc = p.src && videoMap[p.src]
            if (videoSrc) {
              const sizeClass = 
                p.aspect === 'portrait' ? 'w-[72%] max-w-[260px] aspect-[2/3]' :
                p.aspect === 'landscape' ? 'w-[92%] max-w-[360px] aspect-[3/2]' :
                'w-[80%] max-w-[300px] aspect-square'
              
              return (
                <div key={`ch3-m-${afterIndex}-${idx}`} className="flex justify-center my-6">
                  <div className={sizeClass}>
                    <MangaPanelVideo 
                      src={videoSrc}
                      poster={p.src}
                      className="w-full h-full"
                      threshold={0.5}
                    />
                  </div>
                </div>
              )
            }
            // その他のパネルは通常表示
            return (
              <div key={`ch3-m-${afterIndex}-${idx}`} className="flex justify-center my-6">
                <MangaPanel {...p} yOffset={0} />
              </div>
            )
          })}
      </div>
    )
  }

  return (
    <section className="relative min-h-screen px-6 md:px-8 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50 via-emerald-50 to-green-50">
      {/* コマ（モバイル=行間カード / デスクトップ=オーバーレイ） */}
      <ChapterPanels chapter="ch3" />

      
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
            <span className="text-sm text-emerald-400 tracking-wider" style={{ writingMode: 'vertical-rl' }}>
              CHAPTER
            </span>
            <span className="text-5xl font-light text-emerald-300 mt-2">03</span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800" style={{
              fontFamily: '"Noto Serif JP", serif',
              letterSpacing: '0.08em',
              lineHeight: '1.6'
            }}>
              我々は「伴走者」です
            </h2>
          </div>
        </motion.div>

        <div className="space-y-16">
          {/* メインメッセージ（左アンカーのコールアウト） */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mx-auto md:mx-0 md:max-w-[85%]"
          >
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-emerald-300 to-teal-300" />
              <p className="text-left text-lg md:text-xl text-gray-800 font-medium" style={{
                fontFamily: '"Noto Serif JP", serif',
                letterSpacing: '0.08em',
                lineHeight: '2'
              }}>
                我々は、教壇に立つ「先生」ではありません。
              </p>
              <p className="mt-3 text-left text-base md:text-lg text-gray-600" style={{
                fontFamily: '"Noto Sans JP", sans-serif',
                letterSpacing: '0.06em',
                lineHeight: '2'
              }}>
                答えは、すべて、あなたの中にしかないからです。
              </p>
              <p className="mt-6 text-left text-lg md:text-xl text-gray-900 font-medium" style={{
                fontFamily: '"Noto Serif JP", serif',
                letterSpacing: '0.08em',
                lineHeight: '2'
              }}>
                我々は、あなたの隣に座る「伴走者」です。
              </p>
            </div>
          </motion.div>
          {renderMobilePanels(0)}

          {/* 役割の説明 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-base md:text-lg text-gray-600" style={{
              fontFamily: '"Noto Sans JP", sans-serif',
              letterSpacing: '0.08em',
              lineHeight: '2'
            }}>
              あなたが、自分でも気づいていなかった、<br />
              内なる「Will」に耳を澄ます。
            </p>
            <p className="text-base md:text-lg text-gray-600" style={{
              fontFamily: '"Noto Sans JP", sans-serif',
              letterSpacing: '0.08em',
              lineHeight: '2'
            }}>
              そして、その声を聞いたとき、<br />
              「それ、めちゃくちゃ面白いじゃん！」と、<br />
              誰よりも興奮して、一緒に形にしていく。
            </p>
          </motion.div>
          {renderMobilePanels(1)}

          {/* 受講生の声とイラスト */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-12 py-8"
          >
            {/* 受講生の声1 - 40代営業部長 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 md:gap-6"
            >
              {/* 漫画のコマ（キャラクター） */}
              <CharacterPanel side="left" accent="emerald" label="40代・営業部長のコマ" />

              {/* コマから伸びる吹き出し */}
              <div className="relative flex-1 md:flex-initial">
                <div className="relative bg-white rounded-2xl shadow-lg inline-flex items-center justify-center overflow-visible"
                     style={{
                       minHeight: '220px',
                       minWidth: '110px',
                       padding: '24px 20px'
                     }}>
                  <p
                    className="text-base md:text-lg lg:text-xl text-gray-800 block"
                    style={{
                      writingMode: 'vertical-rl',
                      WebkitWritingMode: 'vertical-rl',
                      textOrientation: 'upright',
                      WebkitTextOrientation: 'upright',
                      fontFamily: '"Noto Sans JP", sans-serif',
                      letterSpacing: '0.14em',
                      lineHeight: '2.1',
                      height: '180px',
                      maxHeight: '200px',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  >
                    {lineLeft}
                  </p>
                  {/* シームレスな尾（ダイヤ型） */}
                  <div className="absolute -left-2 top-1/3 -translate-y-1/2 w-6 h-6 bg-white rotate-45" />
                </div>
              </div>
            </motion.div>

            {/* 受講生の声2 - 30代人事担当 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 md:gap-6 flex-row-reverse"
            >
              {/* 漫画のコマ（キャラクター） */}
              <CharacterPanel side="right" accent="teal" label="30代・人事担当のコマ" />

              {/* コマから伸びる吹き出し（右から） */}
              <div className="relative flex-1 md:flex-initial">
                <div className="relative bg-white rounded-2xl shadow-lg inline-flex items-center justify-center overflow-visible"
                     style={{
                       minHeight: '220px',
                       minWidth: '110px',
                       padding: '24px 20px'
                     }}>
                  <p
                    className="text-base md:text-lg lg:text-xl text-gray-800 block"
                    style={{
                      writingMode: 'vertical-rl',
                      WebkitWritingMode: 'vertical-rl',
                      textOrientation: 'upright',
                      WebkitTextOrientation: 'upright',
                      fontFamily: '"Noto Sans JP", sans-serif',
                      letterSpacing: '0.14em',
                      lineHeight: '2.1',
                      height: '180px',
                      maxHeight: '200px',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  >
                    {lineRight}
                  </p>
                  {/* シームレスな尾（ダイヤ型） */}
                  <div className="absolute -right-2 top-1/3 -translate-y-1/2 w-6 h-6 bg-white rotate-45" />
                </div>
              </div>
            </motion.div>
          </motion.div>
          {renderMobilePanels(2)}

          {/* 最も大切なこと */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <p className="text-lg md:text-xl text-gray-800 font-medium" style={{
              fontFamily: '"Noto Serif JP", serif',
              letterSpacing: '0.1em',
              lineHeight: '2'
            }}>
              でも、最も大切なのは、<br />
              あなた自身との、静かな対話の時間。
            </p>
          </motion.div>
          {renderMobilePanels(3)}

          {/* 締めくくり */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-200 pt-12 text-center space-y-4"
          >
            <p className="text-base md:text-lg text-gray-600">「完璧じゃなくていい」</p>
            <p className="text-base md:text-lg text-gray-600">「不安があってもいい」</p>
            <p className="text-base md:text-lg text-gray-600">「みんな、そこから始めました」</p>
          </motion.div>
          {renderMobilePanels(4)}
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-400">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}