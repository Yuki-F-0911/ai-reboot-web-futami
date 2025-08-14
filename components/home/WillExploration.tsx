'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const questions = [
  {
    main: "なぜ、あなたはAIを学ぶのか？",
    sub: "効率化？キャリア？それとも..."
  },
  {
    main: "AIと共に、何を実現したいのか？",
    sub: "自分の価値観と向き合う"
  },
  {
    main: "あなたのWill（意志）は何か？",
    sub: "内なる声に耳を傾ける"
  }
]

export default function WillExploration() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // 各質問のref
  const questionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ]

  // 各質問の表示状態を監視（直接使用）
  const inView1 = useInView(questionRefs[0], { once: true, amount: 0.5 })
  const inView2 = useInView(questionRefs[1], { once: true, amount: 0.5 })
  const inView3 = useInView(questionRefs[2], { once: true, amount: 0.5 })
  
  const visibleQuestions = [inView1, inView2, inView3]

  return (
    <section ref={containerRef} className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8 text-center">
        {/* 3つの質問 */}
        <div className="space-y-24">
            {questions.map((question, index) => (
              <motion.div
                key={index}
                ref={questionRefs[index]}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: visibleQuestions[index] ? 1 : 0,
                  y: visibleQuestions[index] ? 0 : 50
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                  delay: index * 0.2
                }}
                className="relative"
              >
                {/* 質問番号（控えめに） */}
                <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden lg:block">
                  <span className="text-6xl font-light text-gray-100">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* メイン質問 */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                  {question.main}
                </h2>

                {/* サブテキスト */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: visibleQuestions[index] ? 0.7 : 0
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5
                  }}
                  className="text-lg text-gray-500 font-light"
                >
                  {question.sub}
                </motion.p>

                {/* 装飾ライン（質問間） */}
                {index < questions.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{
                      scaleY: visibleQuestions[index] ? 1 : 0
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.8
                    }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-16 w-px h-20 bg-gradient-to-b from-gray-200 to-transparent origin-top"
                  />
                )}
              </motion.div>
            ))}
        </div>

        {/* 最後のメッセージ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: visibleQuestions[2] ? 1 : 0
          }}
          transition={{
            duration: 1.5,
            delay: 1
          }}
          className="mt-16"
        >
          <p className="text-sm text-gray-400 tracking-wider">
            私たちは、あなたのWillを見つけ、実現する場所
          </p>
        </motion.div>
      </div>
    </section>
  )
}