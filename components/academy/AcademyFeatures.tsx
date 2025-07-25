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
      title: "AIは目的じゃない、手段である",
      description: "AIツールは誰もが持つべき最低限のスキル。それが目的ではなく、あなたが本当にやりたいことを実現するための「パスポート」として位置づけています。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "教えない、自ら学ぶ力を",
      description: "私たちはAIの使い方を「教える」のではありません。新しいツールが出てきても、自分で学び、使いこなせるようになる「学習力」を身につけてもらいます。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      number: "03",
      title: "オーセンティックな生き方へ",
      description: "履歴書に書けない、でも大切な能力。あなたの情熱、価値観、本質的な強み。これらを発見し、AI時代でも輝き続ける「自分らしい生き方」を実現します。",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
            AIリブートアカデミーが大切にすること
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
                  <p className="text-lg text-depth-600 leading-relaxed">{feature.description}</p>
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