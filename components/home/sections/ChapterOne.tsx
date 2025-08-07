'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ChapterOne() {
  return (
    <section className="relative min-h-screen px-6 md:px-8 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
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

          {/* 中核メッセージ - カード風 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative py-12 px-8 -mx-4 md:-mx-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 opacity-50" />
            <div className="relative space-y-6">
              <motion.p 
                className="text-base md:text-lg text-gray-600"
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
                className="text-base md:text-lg text-gray-600"
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
                className="text-base md:text-lg text-gray-600"
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

          {/* 読者の心の声 - 思考バブル */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.6,
              scale: { type: "spring", damping: 15, stiffness: 100 },
              delay: 0.35
            }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-md my-12"
          >
            <div className="relative bg-gradient-to-br from-purple-50 to-indigo-50 backdrop-blur-sm shadow-lg p-6 rounded-3xl"
                 style={{ borderRadius: '45% 55% 50% 50% / 60% 60% 40% 40%' }}>
              <p className="text-center text-gray-600 italic text-sm leading-relaxed">
                「部下のミスをフォローした徹夜も、<br/>
                誰も気づかなかった業務改善も、<br/>
                評価面談では一言も話せなかった...」
              </p>
            </div>
            {/* 思考バブルの尻尾 */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-full shadow-md"></div>
              <div className="absolute -bottom-3 left-0.5 w-3 h-3 bg-purple-50/80 rounded-full shadow-sm"></div>
              <div className="absolute -bottom-5 left-1 w-2 h-2 bg-purple-50/60 rounded-full"></div>
            </div>
          </motion.div>

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

          {/* 核心 - Will */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative py-16 text-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full blur-3xl" />
            </div>
            <p className="relative text-lg md:text-xl text-gray-800" style={{
              fontFamily: '"Noto Serif JP", serif',
              fontWeight: '400',
              letterSpacing: '0.12em',
              lineHeight: '2.2'
            }}>
              その答えこそが、AIが逆立ちしても作れない、<br />
              あなただけの「<span className="text-purple-600 font-medium">Will</span>」<span className="text-sm">（意志）</span>だから。
            </p>
          </motion.div>

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