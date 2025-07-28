"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const AcademyFeatures = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      number: "01",
      title: "Will（価値観・目的）から始まる",
      description: "自己分析ワークショップ、キャリアコンサルタントとの1on1、あなただけのWillマップ作成。まずは自分を深く理解することから始めます。",
      items: ["自己分析ワークショップ", "キャリアコンサルタントとの1on1", "あなただけのWillマップ作成"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      number: "02", 
      title: "実践的なAIスキル習得",
      description: "ChatGPT/Claude/Geminiから画像・動画生成AIまで、現場で使えるスキルを幅広く習得します。",
      items: ["ChatGPT/Claude/Geminiの実践活用", "画像生成AI（Midjourney、DALL-E）", "動画・音楽生成AI", "プログラミング支援AI"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "専属メンターの伴走支援", 
      description: "週1回のオンライン面談、Slackでの日常的な質問対応、個別の課題設定とフィードバック。あなたの成長を最後まで支えます。",
      items: ["週1回のオンライン面談", "Slackでの日常的な質問対応", "個別の課題設定とフィードバック"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "仲間との切磋琢磨",
      description: "全国から集まる多様な受講生とのチーム課題で協働体験。卒業後も続くコミュニティがあなたの成長を支え続けます。",
      items: ["全国から集まる多様な受講生", "チーム課題での協働体験", "卒業後も続くコミュニティ"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "成果発表の場（デモデー）",
      description: "100日間の集大成を発表する場。企業担当者も参加するため、新たなキャリアチャンスの創出にもつながります。",
      items: ["100日間の集大成を発表", "企業担当者も参加", "キャリアチャンスの創出"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4zM9 3v1h6V3H9zm-4 5h14v10H5V8z" />
        </svg>
      )
    }
  ]

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-depth-800 mb-8">
            AIリブートアカデミーが選ばれる5つの理由
          </h2>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-r from-depth-50 to-white rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-will-primary/20">{feature.number}</span>
                  <div className="text-will-primary">{feature.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-depth-800">{feature.title}</h3>
                  <p className="text-lg text-depth-600 leading-relaxed mb-4">{feature.description}</p>
                  {feature.items && (
                    <ul className="space-y-2">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start text-depth-700">
                          <span className="text-will-primary mr-3 mt-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-depth-700 font-medium mb-8">
            今日が、あなたの人生を変える最初の一歩です。
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-will-gradient text-white font-bold text-lg rounded-full shadow-elevated hover:shadow-floating transition-all duration-300"
            >
              無料相談で、新しい生き方を見つける
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export { AcademyFeatures }