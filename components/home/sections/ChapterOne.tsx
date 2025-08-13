'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { MangaPanel } from '@/components/effects/MangaPanel'
import { MangaPanelVideo } from '@/components/effects/MangaPanelVideo'
import { chapterPanels } from '@/data/panels'
import ChapterPanels from '@/components/home/sections/shared/ChapterPanels'
import { useChapterEmphasis } from '@/components/home/PersonalizedContent'
import { usePersonalization } from '@/contexts/PersonalizationContext'

export default function ChapterOne() {
  const emphasis = useChapterEmphasis()
  const isEmphasized = emphasis.chapter1
  const { data } = usePersonalization()
  const { expectation, feeling, focus } = data.quizAnswers
  // 読者のWillの具体化（本文の流れに直結）
  // ねらい: 隠してきた情熱の喚起（短文・ためらい調） + パーソナライズ
  const { bubbleA, bubbleB } = useMemo(() => {
    let a = '数字に落ちない執着に、\n意味はあるのかな。'; 
    let b = '誰も評価しなかったこだわり、\nまだ捨てたくない。'

    const isEfficiency = expectation === 'efficiency' || focus === 'skills'
    const isPossibility = expectation === 'possibility' || focus === 'mindset'

    if (isEfficiency) {
      a = '手順はあとで。\n今は「なぜ」を探る。'
      b = '　粗さが気になる。\n　　　その理由を言葉に。'
    } else if (isPossibility) {
      a = ' 　うまく説明できない。\n　　　でも諦められない。'
      b = '「本当はこうしたい」を\n言っていい。'
    }

    if (feeling === 'change') {
      a = '今のままじゃ終われない。\n　　なぜ、そう思うのか？'
    } else if (feeling === 'growth') {
      b = '　たった一言でいい。\n　　「手放せない理由」を。'
    }

    return { bubbleA: a, bubbleB: b }
  }, [expectation, feeling, focus])

  const renderMobilePanels = (afterIndex: number) => {
    // 動画マッピング（webpファイル名 -> 動画ファイル名）
    const videoMap: Record<string, string> = {
      '/panels/ch1-01.webp': '/panels/ch1-01.mp4',
      '/panels/ch1-04.webp': '/panels/ch1-04.mp4',
    }
    
    return (
      <div className="md:hidden">
        {chapterPanels.ch1
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
                <div key={`ch1-m-${afterIndex}-${idx}`} className="flex justify-center my-6">
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
              <div key={`ch1-m-${afterIndex}-${idx}`} className="flex justify-center my-6">
                <MangaPanel {...p} yOffset={0} />
              </div>
            )
          })}
      </div>
    )
  }

  return (
    <section className="relative min-h-screen px-6 md:px-8 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-slate-50">
      {/* コマ（モバイル=行間カード / デスクトップ=オーバーレイ） */}
      <ChapterPanels chapter="ch1" />
      {/* 微細な背景パターン */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(0,0,0,0.03) 35px,
            rgba(0,0,0,0.03) 70px
          )`
        }} />
      </div>
      
      {/* 強調表示用のハイライト */}
      {isEmphasized && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-will-primary/5 to-will-secondary/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      )}
      
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
            <span className="text-sm text-gray-400 tracking-wider" style={{ writingMode: 'vertical-rl' }}>
              CHAPTER
            </span>
            <span className="text-5xl font-light text-gray-300 mt-2">01</span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800" style={{
              fontFamily: '"Noto Serif JP", serif',
              letterSpacing: '0.08em',
              lineHeight: '1.6'
            }}>
              あなたの「なぜ」を、<br />
              見せてください
            </h2>
          </div>
        </motion.div>

        

        <div className="space-y-16">
          {/* 導入 - 問いかけ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-gray-600" style={{
              fontFamily: '"Noto Sans JP", sans-serif',
              letterSpacing: '0.08em',
              lineHeight: '2'
            }}>
              仮に、AIに何かを教えるとしたら。<br />
              それは、教科書に載ってる正解じゃないですよね。
            </p>
            
            <p className="text-lg text-gray-700 font-medium" style={{
              fontFamily: '"Noto Sans JP", sans-serif',
              letterSpacing: '0.08em',
              lineHeight: '2'
            }}>
              我々が、最初に聞きたいこと。<br />
              それは、あなたの輝かしい成功体験でもありません。
            </p>
          </motion.div>
          {renderMobilePanels(0)}

          {/* 中核メッセージ - カード風 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative py-12 px-8 -mx-4 md:-mx-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-indigo-100 to-purple-100 opacity-50" />
            <div className="relative space-y-6">
              <motion.p 
                className="text-lg md:text-xl text-gray-600"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: '"Noto Sans JP", sans-serif',
                  letterSpacing: '0.1em',
                  lineHeight: '2.2'
                }}
              >
                履歴書に書けなかった情熱。
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl text-gray-600"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: '"Noto Sans JP", sans-serif',
                  letterSpacing: '0.1em',
                  lineHeight: '2.2'
                }}
              >
                損益計算書に載らなかった執着。
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl text-gray-600"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: '"Noto Sans JP", sans-serif',
                  letterSpacing: '0.1em',
                  lineHeight: '2.2'
                }}
              >
                誰も評価しなかった、あなただけの「なぜ」。
              </motion.p>
            </div>
          </motion.div>
          {renderMobilePanels(1)}

          

          {/* 読者の心の声 - 思考バブル（2つ・パーソナライズ） */}
          <div className="relative my-12 h-[440px] md:my-16 md:h-[440px] lg:h-[440px]">
            {/* 左：バブルA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-120px' }}
              className="absolute top-52 left-5 md:top-52 md:left-8 lg:top-52 lg:left-0"
            >
              <div className="relative bg-gradient-to-br from-purple-50 to-indigo-50 backdrop-blur-sm shadow-lg [--ivs:14ch] md:[--ivs:14ch] lg:[--ivs:14ch] px-4 py-5 md:px-6 md:py-6 lg:pt-10"
                   style={{ 
                    borderRadius: '45% 55% 50% 50% / 60% 60% 40% 40%'
                   }}>
                <p className="text-gray-600 italic text-base md:text-lg lg:text-xl"
                   style={{ 
                     writingMode: 'vertical-rl',
                     textOrientation: 'upright',
                     fontFamily: '"Noto Sans JP", sans-serif',
                     letterSpacing: '0.1em',
                     lineHeight: '1.9',
                     inlineSize: 'var(--ivs)'
                   }}>
                  {bubbleA.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </p>
              </div>
              {/* 尻尾（左下） */}
              <div className="absolute -bottom-2 left-8 md:left-10">
                <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-purple-50 rounded-full shadow-md"></div>
                <div className="absolute -bottom-3 left-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-indigo-50/80 rounded-full shadow-sm"></div>
                <div className="absolute -bottom-5 left-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-50/60 rounded-full"></div>
              </div>
            </motion.div>

            {/* 右：バブルB */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-120px' }}
              className="absolute top-0 right-4 md:top-20 md:right-12 lg:top-10 lg:right-0"
            >
              <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 backdrop-blur-sm shadow-lg [--ivs:14ch] md:[--ivs:14ch] lg:[--ivs:15ch] px-5 py-6 md:px-6 md:py-7 lg:pt-10 whitespace-nowrap"
                   style={{ 
                    borderRadius: '55% 45% 45% 55% / 50% 60% 40% 50%'
                   }}>
                <p className="text-gray-700 italic text-base md:text-lg lg:text-xl"
                   style={{ 
                     writingMode: 'vertical-rl',
                     textOrientation: 'upright',
                     fontFamily: '"Noto Sans JP", sans-serif',
                     letterSpacing: '0.12em',
                    lineHeight: '2.0',
                     inlineSize: 'var(--ivs)'
                   }}>
                  {bubbleB.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </p>
              </div>
              {/* 尻尾（右下） */}
              <div className="absolute -bottom-3 right-10 md:right-12">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-indigo-50 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-3 right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-purple-50/80 rounded-full shadow"></div>
                <div className="absolute -bottom-6 right-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-50/60 rounded-full"></div>
              </div>
            </motion.div>
          </div>
          {renderMobilePanels(2)}

          {/* つまり... - 強調セクション */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <p className="text-sm text-gray-400 mb-8 tracking-widest">つまり、</p>
            <div className="space-y-4">
              <motion.p 
                className="text-xl md:text-2xl text-gray-700"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  fontWeight: '300',
                  letterSpacing: '0.15em'
                }}
              >
                「なぜ、それにこだわるのか」
              </motion.p>
              <motion.p 
                className="text-xl md:text-2xl text-gray-700"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  fontWeight: '300',
                  letterSpacing: '0.15em'
                }}
              >
                「なぜ、それを諦められないのか」
              </motion.p>
              <motion.p 
                className="text-xl md:text-2xl text-gray-700"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  fontWeight: '300',
                  letterSpacing: '0.15em'
                }}
              >
                「なぜ、それに心が動くのか」
              </motion.p>
            </div>
          </motion.div>
          {renderMobilePanels(3)}

          {/* 核心 - Will */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative py-16 text-center"
          >
            <p className="relative text-lg md:text-xl text-gray-800" style={{
              fontFamily: '"Noto Serif JP", serif',
              fontWeight: '400',
              letterSpacing: '0.12em',
              lineHeight: '2.2'
            }}>
              その答えこそが、AIが逆立ちしても作れない、<br />
              あなただけの「
              <span className="text-purple-600 font-medium">
                <ruby>Will<rt className="text-xs text-gray-500 align-top" style={{ fontSize: '0.7em', marginLeft: '2px' }}>意志</rt></ruby>
              </span>
              」だから。
            </p>
          </motion.div>
          {renderMobilePanels(4)}

          {/* 締めくくり - 線で区切り */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-200 pt-16"
          >
            
            <div className="space-y-8">
              <p className="text-base md:text-lg text-gray-600" style={{
                fontFamily: '"Noto Sans JP", sans-serif',
                letterSpacing: '0.08em',
                lineHeight: '2.2'
              }}>
                「どうやって」や「何を」は、AIが得意とする領域。<br />
                でも「なぜ」は、永遠にあなたのものだ。
              </p>
              
              <p className="text-base md:text-lg text-gray-600" style={{
                fontFamily: '"Noto Sans JP", sans-serif',
                letterSpacing: '0.08em',
                lineHeight: '2.2'
              }}>
                教科書には載っていない、<br />
                正解のない、あなただけの物語。<br />
                AI時代の価値は、そこからしか生まれない。
              </p>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-800 font-medium pt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  letterSpacing: '0.15em'
                }}
              >
                我々は、そう確信しています。
              </motion.p>

              
            </div>
          </motion.div>
        </div>
      </div>
      
      

      {/* 次章への誘導 - 控えめな矢印 */}
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}