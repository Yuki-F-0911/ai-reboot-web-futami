'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FinalChapter() {
  return (
    <section className="relative min-h-screen px-6 md:px-8 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-white">
      {/* 控えめな背景効果 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-purple-100/10 via-transparent to-indigo-100/10 rounded-full blur-3xl" />
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
            <span className="text-sm text-purple-400 tracking-wider" style={{ writingMode: 'vertical-rl' }}>
              FINAL
            </span>
            <span className="text-sm text-purple-400 tracking-wider mt-2">CHAPTER</span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800" style={{
              fontFamily: '"Noto Serif JP", serif',
              letterSpacing: '0.08em',
              lineHeight: '1.6'
            }}>
              選ぶのは、あなただ
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
            <p className="text-lg md:text-xl text-gray-800 font-medium">
              ここまで読んでくれた、あなたへ。
            </p>
          </motion.div>

          {/* 気づき */}
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
              たぶん、あなたは、もう気づいている。<br />
              AIに仕事を奪われる人間と、<br />
              AIを最高の相棒にする人間の、<br />
              決定的な違いを。
            </p>
            <p className="text-lg md:text-xl text-gray-800 font-medium" style={{
              fontFamily: '"Noto Serif JP", serif',
              letterSpacing: '0.1em',
              lineHeight: '2'
            }}>
              それは、自分の「なぜ」を知っているかどうか。<br />
              つまり、何のために生きて、何のために働いているのか。<br />
              自分の「Will」に正直かどうか。
            </p>
          </motion.div>

          {/* 我々について */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-y border-gray-200 py-12 text-center"
          >
            <p className="text-lg text-gray-800 font-medium">
              我々は、その「Will」を一緒に見つける、<br />
              小さな秘密基地です。
            </p>
            <p className="text-sm text-gray-600 mt-6">
              経済産業省認定で、最大70%の受講料支援。
            </p>
          </motion.div>

          {/* 投資について */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-base md:text-lg text-gray-600" style={{
              fontFamily: '"Noto Sans JP", sans-serif',
              letterSpacing: '0.08em',
              lineHeight: '2'
            }}>
              でも、本当の投資は、あなた自身との時間。<br />
              もし、ピンと来たら。<br />
              まずは、あなたの「なぜ」を、聞かせてください。
            </p>
          </motion.div>

          {/* リアルな体験 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-gray-800 font-medium text-center">
              うまい話も、正解も、ここにはありません。
            </p>
            <p className="text-base md:text-lg text-gray-600" style={{
              fontFamily: '"Noto Sans JP", sans-serif',
              letterSpacing: '0.08em',
              lineHeight: '2'
            }}>
              あるのは、あなたの物語を面白がる、最高の聞き手。<br />
              そして、毎日AIと新しい可能性を探っている、現役の実践者たち。
            </p>
            <p className="text-base md:text-lg text-gray-600" style={{
              fontFamily: '"Noto Sans JP", sans-serif',
              letterSpacing: '0.08em',
              lineHeight: '2'
            }}>
              「それ、私も悩んだなぁ」と共感しながら、<br />
              「こんな使い方もあるよ」と、実例を見せてくれる。
            </p>
            <p className="text-lg md:text-xl text-gray-800 font-medium text-center mt-10">
              理論じゃない、リアルな体験の共有が、ここにあります。
            </p>
          </motion.div>

          {/* 決意の瞬間 - 思考バブル */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.7,
              scale: { type: "spring", damping: 15, stiffness: 100 },
              delay: 0.65
            }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-md my-12"
          >
            <div className="relative bg-gradient-to-br from-purple-50 to-indigo-50 backdrop-blur-sm shadow-lg p-6 rounded-3xl"
                 style={{ borderRadius: '55% 45% 45% 55% / 50% 60% 40% 50%' }}>
              <p className="text-center text-gray-700 italic text-sm leading-relaxed font-medium">
                「もう十分悩んだ。<br/>
                完璧になってから始めるんじゃなくて、<br/>
                始めながら完璧に近づけばいい。<br/>
                今、動き出そう」
              </p>
            </div>
            {/* 思考バブルの尻尾 */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-full shadow-md"></div>
              <div className="absolute -bottom-3 left-0.5 w-3 h-3 bg-purple-50/80 rounded-full shadow-sm"></div>
              <div className="absolute -bottom-5 left-1 w-2 h-2 bg-purple-50/60 rounded-full"></div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <Link 
              href="/academy#contact"
              className="inline-block border-2 border-gray-800 text-gray-800 px-10 py-5 text-xl font-medium hover:bg-gray-800 hover:text-white transition-all duration-300 hover:shadow-lg tracking-tight rounded-lg"
            >
              → 今のモヤモヤを聞かせてください（無料説明会）
            </Link>
          </motion.div>

          {/* 締めくくり */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center pt-16"
          >
            <p className="font-bold text-gray-800 mb-4 text-2xl tracking-wider">-AI REBOOT-</p>
            <p className="text-base text-gray-600">
              あなたの「Will」が、静かに待っている。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}