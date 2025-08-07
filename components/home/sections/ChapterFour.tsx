'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ChapterFour() {
  return (
    <section className="relative min-h-screen px-6 md:px-8 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-rose-50/20 to-white">
      {/* 控えめな背景効果 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-rose-100/10 via-transparent to-transparent rounded-full blur-3xl" />
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
          {/* 導入 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg md:text-xl text-gray-800 font-medium" style={{
              fontFamily: '"Noto Serif JP", serif',
              letterSpacing: '0.1em',
              lineHeight: '2'
            }}>
              個人の「Will」が目覚めるとき、<br />
              まず、日常の見え方が変わる。
            </p>
          </motion.div>

          {/* 変化を実感する瞬間 - 思考バブル */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.6,
              scale: { type: "spring", damping: 15, stiffness: 100 },
              delay: 0.25
            }}
            viewport={{ once: true }}
            className="relative my-8 flex justify-center"
          >
            <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 backdrop-blur-sm shadow-lg"
                 style={{ 
                   borderRadius: '50% 50% 45% 55% / 55% 45% 45% 55%',
                   padding: '24px 28px'
                 }}>
              <p className="text-gray-600 italic text-sm"
                 style={{ 
                   writingMode: 'vertical-rl',
                   textOrientation: 'upright',
                   fontFamily: '"Noto Sans JP", sans-serif',
                   letterSpacing: '0.1em',
                   lineHeight: '1.8',
                   height: '140px'
                 }}>
                月曜が楽しみになった
              </p>
            </div>
            {/* 思考バブルの尻尾 */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-full shadow-md"></div>
              <div className="absolute -bottom-3 left-0.5 w-3 h-3 bg-rose-50/80 rounded-full shadow-sm"></div>
              <div className="absolute -bottom-5 left-1 w-2 h-2 bg-rose-50/60 rounded-full"></div>
            </div>
          </motion.div>

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
              <p className="text-lg text-gray-800 font-medium">月曜日の朝が、憂鬱じゃなくなる。</p>
              <p className="text-base text-gray-600 pl-8 mt-2">「今週は何を試してみようか」</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-800 font-medium">会議での発言が変わる。</p>
              <p className="text-base text-gray-600 pl-8 mt-2">
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
              <p className="text-lg text-gray-800 font-medium">同僚との雑談が変わる。</p>
              <p className="text-base text-gray-600 pl-8 mt-2">愚痴の時間が、アイデアを出し合う時間に。</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-800 font-medium">退屈だった仕事が、自分だけの実験場に変わる。</p>
              <p className="text-base text-gray-600 pl-8 mt-2">「こうあるべき」から「こうありたい」へ。</p>
            </motion.div>
          </motion.div>

          {/* 家族との時間 - イラスト挿入指定 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            {/* イラスト挿入位置のマーカー */}
            <div className="relative mx-auto w-64 h-48 mb-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-rose-200">
              <div className="text-center">
                <span className="text-4xl mb-2 block">🏠</span>
                <p className="text-xs text-gray-500">
                  [挿絵: 家族と過ごす温かい時間]<br/>
                  夕食を囲む家族のシルエット
                </p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-800 font-medium" style={{
              fontFamily: '"Noto Serif JP", serif',
              letterSpacing: '0.1em',
              lineHeight: '2'
            }}>
              そして、家族との時間も大切にできる。
            </p>
            <p className="text-base text-gray-600 mt-2">
              効率化で生まれた時間を、本当に大切なことに。
            </p>
          </motion.div>

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
              我々は信じています。
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