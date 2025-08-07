'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ChapterTwo() {
  return (
    <section className="relative min-h-screen px-6 md:px-8 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-indigo-50/30 to-white">
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
                <p className="text-gray-600">今日覚えたAIツールが、明日には別のものに置き換わる。</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[33px] top-2 w-2 h-2 bg-indigo-400 rounded-full" />
                <p className="text-gray-600">毎朝のニュースで、また新しいサービスが生まれている。</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[33px] top-2 w-2 h-2 bg-indigo-400 rounded-full" />
                <p className="text-gray-600">
                  ChatGPTの使い方だけ覚えても、<br />
                  来週にはもっとすごいツールが出てくるかもしれない。
                </p>
              </motion.div>
            </div>
          </motion.div>

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
                だから我々は、「使い方」ではなく、<br />
                「使いこなし方の発想法」を、<br />
                あなたの中に育てます。
              </p>
            </div>
          </motion.div>

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
            className="relative ml-auto mr-4 max-w-sm my-8"
          >
            <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-5 rounded-2xl shadow-xl">
              <p className="text-sm leading-relaxed">
                <span className="font-bold">💭 気づきの瞬間：</span><br/>
                「ChatGPTの使い方を覚えるんじゃなくて、<br/>
                『私が解決したい課題』を言語化することが先だった。<br/>
                そうしたら、どんなAIツールでも応用できるようになった」
              </p>
              {/* 吹き出しの三角形 */}
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 rotate-45 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
            </div>
          </motion.div>

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
                <span className="text-indigo-600 text-xl">🎯</span>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 font-medium">
                  まず必要なのは、自分の軸を見つけること。
                </p>
                <p className="text-gray-600">
                  「私は本当は何がしたいんだっけ？」<br />
                  散らばった経験や想いを整理して、<br />
                  あなたの中にある「Will」を言語化する。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="mt-2 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 text-xl">🔄</span>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 font-medium">
                  そうすると、AIとの関係が変わる。
                </p>
                <p className="text-gray-600">
                  「このAIで何ができるか」じゃなくて、<br />
                  「私のやりたいことに、このAIをどう使うか」<br />
                  という発想に自然と切り替わる。
                </p>
              </div>
            </div>
          </motion.div>

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
              「ああ、これは私のやりたいことに、こう使える」と、<br />
              自然に結びつけられる思考の習慣。
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
              波を読んで、自分の行きたい方向へ進む。<br />
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