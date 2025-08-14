'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QuizAnswers } from '@/contexts/PersonalizationContext'
import { 
  Rocket, 
  Sparkles, 
  Flame, 
  Sprout, 
  Wrench, 
  Lightbulb 
} from 'lucide-react'

interface PersonalityQuizProps {
  onComplete: (answers: QuizAnswers) => void
  onSkipAll?: () => void
}

const questions = [
  {
    id: 'expectation',
    question: 'AIに何を期待しますか？',
    options: [
      {
        value: 'efficiency',
        icon: Rocket,
        label: '今の仕事を効率化したい',
        description: 'AIツールを使って業務を改善'
      },
      {
        value: 'possibility',
        icon: Sparkles,
        label: '新しい可能性を探りたい',
        description: '未知の領域にチャレンジ'
      }
    ]
  },
  {
    id: 'feeling',
    question: '今、どんな気持ちですか？',
    options: [
      {
        value: 'change',
        icon: Flame,
        label: '変化を起こしたい',
        description: '現状を打破する行動を'
      },
      {
        value: 'growth',
        icon: Sprout,
        label: 'じっくり成長したい',
        description: '着実にスキルアップ'
      }
    ]
  },
  {
    id: 'focus',
    question: '何を学びたいですか？',
    options: [
      {
        value: 'skills',
        icon: Wrench,
        label: '実践的なスキル',
        description: 'すぐに使える技術'
      },
      {
        value: 'mindset',
        icon: Lightbulb,
        label: '新しい考え方',
        description: 'AI時代の思考法'
      }
    ]
  }
]

export default function PersonalityQuiz({ onComplete, onSkipAll }: PersonalityQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswers>({
    expectation: null,
    feeling: null,
    focus: null
  })
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleSelect = (value: string) => {
    setSelectedOption(value)
    
    // アンサーを更新
    const questionId = questions[currentQuestion].id as keyof QuizAnswers
    const newAnswers = { ...answers, [questionId]: value }
    setAnswers(newAnswers)

    // 次の質問へ（または完了）
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      } else {
        onComplete(newAnswers)
      }
    }, 600)
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(null)
    }
  }

  const question = questions[currentQuestion]

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
      <div className="w-full max-w-4xl px-4 relative">
        {/* スキップ＆リセットUI（右上の単一メニューに集約） */}
        <div className="absolute top-4 right-4 z-[120]">
          <div className="bg-white/90 backdrop-blur rounded-lg shadow flex overflow-hidden">
            {onSkipAll && (
              <button
                onClick={onSkipAll}
                className="px-3 py-2 text-xs md:text-sm text-gray-700 hover:bg-white border-r border-gray-200"
              >
                スキップ
              </button>
            )}
            <button
              onClick={() => {
                setCurrentQuestion(0)
                setAnswers({ expectation: null, feeling: null, focus: null })
                setSelectedOption(null)
              }}
              className="px-3 py-2 text-xs md:text-sm text-gray-700 hover:bg-white"
            >
              やり直す
            </button>
          </div>
        </div>
        {/* プログレスドット */}
        <div className="flex justify-center gap-2 mb-12">
          {questions.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index <= currentQuestion ? 'bg-will-primary w-8' : 'bg-gray-300'
              }`}
              animate={{ scale: index === currentQuestion ? 1.5 : 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {/* 質問 */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
              {question.question}
            </h2>

            {/* 選択肢 */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {question.options.map((option) => (
                <motion.button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`p-8 rounded-2xl border-2 transition-all ${
                    selectedOption === option.value
                      ? 'border-will-primary bg-gradient-to-br from-will-primary/10 to-will-secondary/10 scale-105 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-will-primary/50 hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-center mb-4">
                    <option.icon className="w-12 h-12 text-will-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {option.label}
                  </h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </motion.button>
              ))}
            </div>

            {/* 戻るボタン */}
            {currentQuestion > 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleBack}
                className="mt-8 text-gray-500 hover:text-gray-700 transition-colors"
              >
                ← 前の質問に戻る
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}