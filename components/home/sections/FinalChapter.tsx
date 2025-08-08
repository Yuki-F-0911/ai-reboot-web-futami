'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PersonalizedCTA, PersonalizedMessage } from '@/components/home/PersonalizedContent'
import { usePersonalization } from '@/contexts/PersonalizationContext'

export default function FinalChapter() {
  // PersonalizationContextを使用
  const personalizationData = usePersonalization()
  const userName = personalizationData?.data?.userName || 'あなた'
  
  // 長い名前は省略表示（視覚の収まり改善）
  const displayName = useMemo(() => {
    const max = 12
    if (!userName) return 'あなた'
    return userName.length > max ? `${userName.slice(0, max)}…` : userName
  }, [userName])
  
  return (
    <section className="relative min-h-screen px-6 md:px-8 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-pink-50 via-purple-50 to-gray-50">
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
              選ぶのは、{userName}だ
            </h2>
          </div>
        </motion.div>

        <div className="space-y-16">
          {/* 導入（左アンカー・ネームチップで視線集中） */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mx-auto md:mx-0 md:max-w-[85%]"
          >
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-purple-300 to-indigo-300" />
              <p className="text-left text-xl md:text-2xl text-gray-900 font-medium tracking-wide" style={{
                fontFamily: '"Noto Serif JP", serif',
                lineHeight: '1.8',
                letterSpacing: '0.06em'
              }}>
                ここまで読んでくれた、
                <span className="align-middle inline-flex items-center mx-2 px-3 py-1 rounded-full border border-indigo-100/60 bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-900 shadow-sm">
                  {displayName}
                </span>
                へ。
              </p>
            </div>
          </motion.div>

          {/* パーソナライズされたメッセージ */}
          <PersonalizedMessage>
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
          </PersonalizedMessage>

          {/* 我々について */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-y border-gray-200 py-12 text-center"
          >
            <p className="text-lg md:text-xl text-gray-800 font-medium">
              我々は、その「Will」を一緒に見つける、<br />
              小さな秘密基地です。
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-6">
              経済産業省認定で、最大70%の受講料支援。
            </p>
          </motion.div>

          {/* 投資について（左アンカー） */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative mx-auto md:mx-0 md:max-w-[85%]"
          >
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-indigo-300 to-purple-300" />
              <p className="text-left text-base md:text-lg text-gray-700" style={{
                fontFamily: '"Noto Sans JP", sans-serif',
                letterSpacing: '0.08em',
                lineHeight: '2'
              }}>
                でも、本当の投資は、あなた自身との時間。<br />
                もし、ピンと来たら。<br />
                まずは、あなたの「なぜ」を、聞かせてください。
              </p>
            </div>
          </motion.div>

          {/* リアルな体験（左アンカー） */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative mx-auto md:mx-0 md:max-w-[85%]"
          >
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-indigo-300 to-purple-300" />
              <p className="text-left text-lg md:text-xl text-gray-900 font-medium">
                うまい話も、正解も、ここにはありません。
              </p>
              <div className="space-y-4 mt-4">
                <p className="text-left text-base md:text-lg text-gray-600" style={{
                  fontFamily: '"Noto Sans JP", sans-serif',
                  letterSpacing: '0.08em',
                  lineHeight: '2'
                }}>
                  あるのは、あなたの物語を面白がる、最高の聞き手。<br />
                  そして、毎日AIと新しい可能性を探っている、現役の実践者たち。
                </p>
                <p className="text-left text-base md:text-lg text-gray-600" style={{
                  fontFamily: '"Noto Sans JP", sans-serif',
                  letterSpacing: '0.08em',
                  lineHeight: '2'
                }}>
                  「それ、私も悩んだなぁ」と共感しながら、<br />
                  「こんな使い方もあるよ」と、実例を見せてくれる。
                </p>
                <p className="text-left text-lg md:text-xl text-gray-800 font-medium mt-6">
                  理論じゃない、リアルな体験の共有が、ここにあります。
                </p>
              </div>
            </div>
          </motion.div>

          {/* 決意の瞬間 - 思考バブル（拡大版） */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8,
              y: { type: 'spring', damping: 18, stiffness: 70 },
              rotate: { type: 'spring', damping: 22, stiffness: 90 }
            }}
            viewport={{ once: true, margin: '-150px' }}
            className="relative my-16 flex justify-center"
          >
            <div className="relative bg-white/90 backdrop-blur-md shadow-xl"
                 style={{ 
                   borderRadius: '50% 50% 45% 55% / 60% 50% 45% 55%',
                   padding: '36px 40px'
                 }}>
              <p className="text-gray-800 text-2xl md:text-3xl"
                 style={{ 
                   writingMode: 'vertical-rl',
                   textOrientation: 'upright',
                   fontFamily: '"Noto Sans JP", sans-serif',
                   letterSpacing: '0.14em',
                   lineHeight: '2.1',
                   whiteSpace: 'nowrap'
                 }}>
                今、動き出そう
              </p>
            </div>
            {/* 思考バブルの尻尾（白・シームレス） */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-white/90 rounded-full shadow-md"></div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/85 rounded-full shadow-sm"></div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/80 rounded-full"></div>
            </div>
          </motion.div>

          {/* CTA - Googleフォームへ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <Link 
              href={process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || '/academy#application'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-gray-800 text-gray-800 px-10 py-5 text-xl font-medium hover:bg-gray-800 hover:text-white transition-all duration-300 hover:shadow-lg tracking-tight rounded-lg"
            >
              → <PersonalizedCTA />（Googleフォーム）
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
            <p className="text-base md:text-lg text-gray-600">
              あなたの「Will」が、静かに待っている。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}