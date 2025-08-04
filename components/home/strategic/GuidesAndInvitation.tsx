'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function GuidesAndInvitation() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  // スクロール進行度に応じた演出
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const guidesOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
  const invitationOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])

  const guides = [
    {
      name: '山田 太郎',
      title: 'チーフメンター',
      expertise: 'AI戦略・キャリア設計',
      message: '「あなたのWillを見つけ、AIで実現する道筋を一緒に創ります」',
      achievements: '500名以上の個人キャリア支援'
    },
    {
      name: '佐藤 花子',
      title: 'キャリアデザイナー',
      expertise: 'キャリア理論・自己分析',
      message: '「内なる声に耳を傾け、本当の強みを発見する旅をサポートします」',
      achievements: '1000名以上のキャリア転換支援'
    },
    {
      name: '鈴木 一郎',
      title: 'メンタルコーチ',
      expertise: '自己探求・目標設定',
      message: '「変革への不安を、成長のエネルギーに変える伴走者です」',
      achievements: '個人の変革プロセス設計の専門家'
    }
  ]

  return (
    <section ref={sectionRef} className="py-32 md:py-40 bg-transparent text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 章タイトル */}
        <motion.div
          style={{ opacity: titleOpacity }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-[#A0A0A0] uppercase tracking-wider mb-4">
            第四章
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EAEAEA]">
            あなたのガイドと、
            <br />
            創設メンバーへの招待状
          </h2>
        </motion.div>

        {/* ガイド紹介 */}
        <motion.div
          style={{ opacity: guidesOpacity }}
          className="mb-24"
        >
          <h3 className="text-2xl md:text-3xl font-light text-center text-[#EAEAEA] mb-12">
            あなたの変革に伴走する、プロフェッショナル
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                {/* プロフィール写真エリア */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#4A90E2]/20 to-[#9013FE]/20 flex items-center justify-center">
                      <svg className="w-16 h-16 text-[#A0A0A0]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                  {/* 光のエフェクト */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4A90E2]/10 to-[#9013FE]/10 blur-xl" />
                </div>

                {/* 情報 */}
                <h4 className="text-xl font-bold text-[#EAEAEA] mb-1">{guide.name}</h4>
                <p className="text-[#A0A0A0] mb-2">{guide.title}</p>
                <p className="text-sm text-[#A0A0A0] mb-4">{guide.expertise}</p>
                
                {/* メッセージ */}
                <blockquote className="border-t border-gray-700 pt-4">
                  <p className="text-sm italic text-[#A0A0A0] leading-relaxed">
                    {guide.message}
                  </p>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 創設メンバーへの招待状 */}
        <motion.div
          style={{ opacity: invitationOpacity }}
          className="relative"
        >
          {/* 背景のグラデーション */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/5 to-[#9013FE]/5 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-3xl border border-gray-700 p-12 md:p-16">
            {/* タイトル */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#4A90E2] to-[#9013FE] bg-clip-text text-transparent">
                  創設メンバー
                </span>
                <span className="text-[#EAEAEA]">への招待状</span>
              </h3>
              
              <p className="text-xl md:text-2xl text-[#EAEAEA] font-light leading-relaxed">
                今、このタイミングで出会えたあなたへ
              </p>
            </motion.div>

            {/* メッセージ本文 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-[#A0A0A0] leading-relaxed"
            >
              <p>
                私たちは、AIという巨大な波の中で、
                <span className="text-[#EAEAEA] font-medium">「人間らしさ」を見失わない</span>
                という信念のもと、このプログラムを立ち上げました。
              </p>
              
              <p>
                最初の100名の方々は、単なる受講生ではありません。
                <span className="text-[#EAEAEA] font-medium">共に時代を創る、創設メンバー</span>です。
              </p>

              <p>
                あなたの挑戦が、次の誰かの勇気になります。<br />
                あなたの成功が、新しい時代の証明になります。
              </p>

              <div className="border-t border-gray-700 pt-8 mt-8">
                <p className="text-lg md:text-xl text-[#EAEAEA]">
                  私たちと一緒に、<br className="md:hidden" />
                  <span className="font-bold bg-gradient-to-r from-[#4A90E2] to-[#9013FE] bg-clip-text text-transparent">
                    AI時代の新しいキャリアの形
                  </span>
                  を、<br className="md:hidden" />
                  創りませんか？
                </p>
              </div>
            </motion.div>

            {/* 特別オファー */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 p-8 bg-gradient-to-r from-[#4A90E2]/10 to-[#9013FE]/10 rounded-2xl border border-gray-700"
            >
              <div className="text-center">
                <p className="text-sm text-[#A0A0A0] mb-2">創設メンバー限定特典</p>
                <p className="text-2xl md:text-3xl font-bold text-[#EAEAEA] mb-4">
                  最大70%の補助金適用
                </p>
                <p className="text-[#A0A0A0]">
                  経済産業省リスキリング支援事業認定プログラム
                </p>
                <p className="text-sm text-[#A0A0A0] mt-4">
                  ※残り枠：<span className="text-[#EAEAEA] font-bold">23名</span>（2025年1月現在）
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}