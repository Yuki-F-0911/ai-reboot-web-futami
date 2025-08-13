'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PersonalityQuiz from './PersonalityQuiz'
import NameInput from './NameInput'
import { usePersonalization, QuizAnswers } from '@/contexts/PersonalizationContext'
import { playGlobalMusic } from '@/components/ui/PersistentMusicControl'

interface OnboardingFlowProps {
  onComplete: () => void
}

type OnboardingStep = 'quiz' | 'name' | 'music' | 'complete'

export default function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const { data, updateQuizAnswers, updateUserName, updateMusicPreference, setCompleted } = usePersonalization()
  
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('quiz')
  const [showMusicDialog, setShowMusicDialog] = useState(false)

  // 既に完了している場合はスキップ
  useEffect(() => {
    if (data.hasCompleted) {
      onComplete()
    }
  }, [data.hasCompleted, onComplete])


  const handleQuizComplete = (answers: QuizAnswers) => {
    updateQuizAnswers(answers)
    setCurrentStep('name')
  }

  const handleNameComplete = (name: string | null) => {
    // nullの場合は「あなた」をデフォルトとして設定
    updateUserName(name || 'あなた')
    setCurrentStep('music')
    setShowMusicDialog(true)
  }

  const handlePlayMusic = () => {
    updateMusicPreference('play')
    
    // PersistentMusicControlが音楽を管理するため、少し待ってから再生
    setTimeout(() => {
      playGlobalMusic()
      setShowMusicDialog(false)
      setCompleted()
      onComplete()
    }, 100)
  }

  const handleMuteMusic = () => {
    updateMusicPreference('mute')
    setTimeout(() => {
      setShowMusicDialog(false)
      setCompleted()
      onComplete()
    }, 100)
  }

  // すでに完了している場合は何も表示しない
  if (data.hasCompleted) {
    return null
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {currentStep === 'quiz' && (
          <PersonalityQuiz 
            key="quiz" 
            onComplete={handleQuizComplete}
            onSkipAll={() => {
              setCompleted()
              onComplete()
            }}
          />
        )}
        
        {currentStep === 'name' && (
          <NameInput key="name" onComplete={handleNameComplete} />
        )}
        
        {currentStep === 'music' && showMusicDialog && (
          <motion.div
            key="music"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-md w-full mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* ヘッダー部分 */}
              <div className="relative bg-gradient-to-r from-will-primary to-will-secondary p-6">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white">テーマ音楽</h2>
                  </div>
                  <p className="text-white/90 text-sm">
                    {data.userName ? `${data.userName}の` : 'あなたの'}物語を音楽でも体験
                  </p>
                </div>
              </div>

              {/* コンテンツ部分 */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {data.quizAnswers.expectation === 'efficiency' || data.quizAnswers.focus === 'skills' ? (
                    <>
                      {data.userName ? `${data.userName}の` : 'あなたの'}
                      実践的な学びの旅を彩る、
                      集中力を高めるBGMをご用意しました。
                    </>
                  ) : (
                    <>
                      {data.userName ? `${data.userName}の` : 'あなたの'}
                      物語により没入していただくため、
                      オリジナルのテーマ音楽をご用意しました。
                    </>
                  )}
                </p>
                
                <p className="text-xs text-gray-500 mb-4 text-center">
                  ※ 音量は50%に設定されています
                </p>

                {/* 選択ボタン */}
                <div className="flex gap-3">
                  <button
                    onClick={handlePlayMusic}
                    className="flex-1 bg-gradient-to-r from-will-primary to-will-secondary text-white py-3 px-6 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-will-primary focus:ring-offset-2"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>音楽を再生</span>
                    </div>
                  </button>

                  <button
                    onClick={handleMuteMusic}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium transition-all hover:bg-gray-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                      <span>音楽なしで続ける</span>
                    </div>
                  </button>
                </div>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  ※ 後から設定変更可能です
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}