'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { User, Building2, ArrowRight } from 'lucide-react'

export default function TwoPaths() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const paths = [
    {
      icon: User,
      title: "AIリブートアカデミー",
      subtitle: "100日間の自己変革",
      features: [
        "Willの発見から始まる",
        "メンターとの対話",
        "実践を通じた成長"
      ],
      href: "/academy",
      gradient: "from-will-primary/10 to-will-secondary/10",
      iconColor: "text-will-primary"
    },
    {
      icon: Building2,
      title: "法人向けAI研修",
      subtitle: "チームのWillを形にする",
      features: [
        "組織の価値観を再定義",
        "全員がAIネイティブへ",
        "継続的イノベーション"
      ],
      href: "/corporate",
      gradient: "from-will-secondary/10 to-will-primary/10",
      iconColor: "text-will-secondary"
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* セクションタイトル（控えめに） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            サービス
          </h2>
          <p className="text-gray-500 font-light">
            あなたに合った学びの形を選ぶ
          </p>
        </motion.div>

        {/* 2つのパス */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {paths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link href={path.href}>
                <div className="group relative h-full">
                  {/* カード */}
                  <div className={`
                    relative h-full p-8 lg:p-10 rounded-2xl
                    bg-white border border-gray-100
                    hover:border-gray-200 hover:shadow-xl
                    transition-all duration-500 ease-out
                    overflow-hidden
                  `}>
                    {/* 背景グラデーション（ホバー時に表示） */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-br ${path.gradient}
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                    `} />

                    {/* コンテンツ */}
                    <div className="relative z-10">
                      {/* アイコン */}
                      <div className="mb-6">
                        <path.icon className={`w-10 h-10 ${path.iconColor}`} />
                      </div>

                      {/* タイトル */}
                      <h3 className="text-2xl font-medium text-gray-900 mb-2">
                        {path.title}
                      </h3>

                      {/* サブタイトル */}
                      <p className="text-lg text-gray-600 mb-6">
                        {path.subtitle}
                      </p>

                      {/* 特徴リスト */}
                      <ul className="space-y-3 mb-8">
                        {path.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="flex items-center text-gray-500 group-hover:text-gray-700 transition-colors">
                        <span className="text-sm tracking-wider">詳細を見る</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}