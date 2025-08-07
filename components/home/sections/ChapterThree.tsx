'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ChapterThree() {
  return (
    <section className="relative min-h-screen px-6 md:px-8 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-emerald-50/20 to-white">
      {/* 控えめな背景効果 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-emerald-100/10 via-transparent to-transparent rounded-full blur-3xl" />
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
              我々は「共犯者」です
            </h2>
          </div>
        </motion.div>

        <div className="space-y-16">
          {/* メインメッセージ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              我々は、教壇に立つ「先生」ではありません。
            </p>
            <p className="text-base md:text-lg text-gray-600">
              答えは、すべて、あなたの中にしかないからです。
            </p>
            <p className="text-lg md:text-xl text-gray-800 font-medium mt-12">
              我々は、あなたの隣に座る「共犯者」です。
            </p>
          </motion.div>

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

          {/* サポート内容 - 吹き出し風カード */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4 py-8"
          >
            {/* 受講生の声1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              viewport={{ once: true }}
              className="relative max-w-xs"
            >
              <div className="bg-emerald-50 p-4 rounded-2xl shadow-md">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-bold">40代・営業部長：</span><br/>
                  「『数字を追うのが仕事』だと思ってた。<br/>
                  でも本当は『チームの成長を見るのが好き』だった。<br/>
                  15年目にして初めて、自分の本当のWillに気づいた」
                </p>
              </div>
              <div className="absolute -left-2 top-4 w-0 h-0 border-t-[10px] border-t-transparent border-r-[15px] border-r-emerald-50 border-b-[10px] border-b-transparent"></div>
            </motion.div>

            {/* 受講生の声2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              viewport={{ once: true }}
              className="relative max-w-xs ml-auto"
            >
              <div className="bg-teal-50 p-4 rounded-2xl shadow-md">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-bold">30代・人事担当：</span><br/>
                  「みんな表向きは『AI活用してます』って言うけど、<br/>
                  本音では『何から始めていいか分からない』。<br/>
                  ここでは、その本音から始められた」
                </p>
              </div>
              <div className="absolute -right-2 top-4 w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-teal-50 border-b-[10px] border-b-transparent"></div>
            </motion.div>
          </motion.div>

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