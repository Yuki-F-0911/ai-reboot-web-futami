'use client'

import React from 'react'
import { usePersonalization } from '@/contexts/PersonalizationContext'
import { motion } from 'framer-motion'

interface PersonalizedMessageProps {
  children: React.ReactNode
}

export function PersonalizedMessage({ children }: PersonalizedMessageProps) {
  const { data } = usePersonalization()
  const { expectation, feeling, focus } = data.quizAnswers

  // 回答パターンに基づいてメッセージを調整
  const getPersonalizedMessage = () => {
    if (expectation === 'efficiency' && focus === 'skills') {
      return (
        <div className="bg-gradient-to-r from-purple-50/50 to-indigo-50/50 p-6 rounded-lg mb-8 border border-purple-100/50">
          <p className="text-lg font-medium text-gray-800 mb-2">
            実践的なスキルを重視するあなたへ
          </p>
          <p className="text-gray-700">
            特定のツールに依存しない本質的な思考法を身につけ、どんな新しいAIが現れても使いこなせる力を養います。
          </p>
        </div>
      )
    } else if (expectation === 'possibility' && focus === 'mindset') {
      return (
        <div className="bg-gradient-to-r from-purple-50/50 to-indigo-50/50 p-6 rounded-lg mb-8 border border-purple-100/50">
          <p className="text-lg font-medium text-gray-800 mb-2">
            新しい可能性を探求するあなたへ
          </p>
          <p className="text-gray-700">
            AI時代の新しい思考法を身につけ、これまでにない価値創造の方法を一緒に探求していきます。
          </p>
        </div>
      )
    } else if (feeling === 'change') {
      return (
        <div className="bg-gradient-to-r from-purple-50/50 to-indigo-50/50 p-6 rounded-lg mb-8 border border-purple-100/50">
          <p className="text-lg font-medium text-gray-800 mb-2">
            変化を起こしたいあなたへ
          </p>
          <p className="text-gray-700">
            現状を打破するための具体的なアクションプランと、変革を実現するためのAI活用法をお伝えします。
          </p>
        </div>
      )
    } else if (feeling === 'growth') {
      return (
        <div className="bg-gradient-to-r from-purple-50/50 to-indigo-50/50 p-6 rounded-lg mb-8 border border-purple-100/50">
          <p className="text-lg font-medium text-gray-800 mb-2">
            着実に成長したいあなたへ
          </p>
          <p className="text-gray-700">
            小さな実験を重ねながら、自分のペースで確実に。AIと共に歩む新しい働き方を、一緒に見つけていきます。
          </p>
        </div>
      )
    }

    return null
  }

  return (
    <>
      {getPersonalizedMessage()}
      {children}
    </>
  )
}

export function PersonalizedCTA() {
  const { data } = usePersonalization()
  const { expectation, feeling, focus } = data.quizAnswers

  // 回答パターンに基づいてCTAメッセージを変更
  const getCTAMessage = () => {
    if (expectation === 'efficiency' && focus === 'skills') {
      return 'やり方よりも、まず目的から'
    } else if (expectation === 'possibility' && focus === 'mindset') {
      return '本当は何を変えたいのか、言葉に'
    } else if (feeling === 'change') {
      return '完璧じゃなくていい、仮で書こう'
    } else if (feeling === 'growth') {
      return '今日は一行だけ、目的を書く'
    }
    return 'ツールより先に、目的を決める'
  }

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {getCTAMessage()}
    </motion.span>
  )
}

// 章の強調表示
export function useChapterEmphasis() {
  // フックは必ずトップレベルで呼び出す
  const personalizationData = usePersonalization()
  
  // データが利用可能かチェック
  if (!personalizationData || !personalizationData.data || !personalizationData.data.quizAnswers) {
    return {
      chapter1: false,
      chapter2: false,
      chapter3: false,
      chapter4: false,
    }
  }
  
  const { expectation, feeling, focus } = personalizationData.data.quizAnswers

  // どの章を強調するか決定
  const getEmphasizedChapters = () => {
    const emphasized = {
      chapter1: false, // 「なぜ」を見せてください
      chapter2: false, // AIを使いこなす
      chapter3: false, // 共犯者
      chapter4: false, // 小さな変化
    }

    if (expectation === 'efficiency' || focus === 'skills') {
      emphasized.chapter2 = true // AIを使いこなす
      emphasized.chapter4 = true // 小さな変化
    }
    
    if (expectation === 'possibility' || focus === 'mindset') {
      emphasized.chapter1 = true // 「なぜ」を見せてください
      emphasized.chapter3 = true // 共犯者
    }

    if (feeling === 'change') {
      emphasized.chapter4 = true // 小さな変化
    }

    if (feeling === 'growth') {
      emphasized.chapter3 = true // 共犯者
    }

    return emphasized
  }

  return getEmphasizedChapters()
}