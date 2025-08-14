'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Compass, Users, Sparkles } from 'lucide-react'

const concepts = [
  {
    icon: Compass,
    title: "Will（意志）から始まる",
    description: "技術の前に、まずあなたの内なる意志と向き合う。それがAI活用の出発点。"
  },
  {
    icon: Heart,
    title: "人間中心のAI活用",
    description: "AIは道具。大切なのは、人間らしさを失わず、むしろ増幅させること。"
  },
  {
    icon: Users,
    title: "共に歩む、共に成長",
    description: "一人ひとりの物語が、社会全体のWell-beingにつながる。"
  },
  {
    icon: Sparkles,
    title: "可能性を解き放つ",
    description: "AIと共に、今まで見えなかった自分の可能性を発見し、実現する。"
  }
]

export default function ConceptSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            私たちが信じること
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI REBOOTは、単なる技術習得の場ではありません。<br />
            あなたのWill（意志）を見つけ、AIと共に人間らしく生きる道を探求する場所です。
          </p>
        </motion.div>

        {/* コンセプトグリッド */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="flex gap-4">
                {/* アイコン */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-will-primary/10 to-will-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <concept.icon className="w-6 h-6 text-will-primary" />
                  </div>
                </div>

                {/* テキスト */}
                <div className="flex-grow">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {concept.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {concept.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 引用メッセージ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <blockquote className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-gray-100 font-serif">"</div>
            <p className="text-xl md:text-2xl font-light text-gray-700 italic max-w-4xl mx-auto leading-relaxed">
              AIが「どのように」や「何を」を代替していく中で、<br className="hidden md:block" />
              人間にとって究極の差別化要因は<br className="md:hidden" />
              <span className="text-will-primary font-medium">「なぜやるのか」という深いWill</span>になる
            </p>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-6xl text-gray-100 font-serif rotate-180">"</div>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}