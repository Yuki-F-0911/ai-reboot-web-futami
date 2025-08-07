'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface QuizAnswers {
  expectation: 'efficiency' | 'possibility' | null
  feeling: 'change' | 'growth' | null
  focus: 'skills' | 'mindset' | null
}

export interface PersonalizationData {
  userName: string | null
  quizAnswers: QuizAnswers
  musicPreference: 'play' | 'mute' | null
  hasCompleted: boolean
}

interface PersonalizationContextType {
  data: PersonalizationData
  updateUserName: (name: string | null) => void
  updateQuizAnswers: (answers: QuizAnswers) => void
  updateMusicPreference: (preference: 'play' | 'mute') => void
  setCompleted: () => void
  resetData: () => void
}

const defaultData: PersonalizationData = {
  userName: null,
  quizAnswers: {
    expectation: null,
    feeling: null,
    focus: null
  },
  musicPreference: null,
  hasCompleted: false
}

const PersonalizationContext = createContext<PersonalizationContextType | undefined>(undefined)

export const PersonalizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PersonalizationData>(defaultData)

  // 初回マウント時にlocalStorageから読み込み
  useEffect(() => {
    const savedData = localStorage.getItem('aiRebootPersonalization')
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setData(parsed)
      } catch (error) {
        console.error('Failed to parse personalization data:', error)
      }
    }
  }, [])

  // データ更新時にlocalStorageに保存
  const saveData = (newData: PersonalizationData) => {
    setData(newData)
    localStorage.setItem('aiRebootPersonalization', JSON.stringify(newData))
  }

  const updateUserName = (name: string | null) => {
    saveData({ ...data, userName: name })
  }

  const updateQuizAnswers = (answers: QuizAnswers) => {
    saveData({ ...data, quizAnswers: answers })
  }

  const updateMusicPreference = (preference: 'play' | 'mute') => {
    saveData({ ...data, musicPreference: preference })
  }

  const setCompleted = () => {
    saveData({ ...data, hasCompleted: true })
  }

  const resetData = () => {
    localStorage.removeItem('aiRebootPersonalization')
    setData(defaultData)
  }

  return (
    <PersonalizationContext.Provider 
      value={{ 
        data, 
        updateUserName, 
        updateQuizAnswers, 
        updateMusicPreference,
        setCompleted,
        resetData 
      }}
    >
      {children}
    </PersonalizationContext.Provider>
  )
}

export const usePersonalization = () => {
  const context = useContext(PersonalizationContext)
  if (!context) {
    throw new Error('usePersonalization must be used within PersonalizationProvider')
  }
  return context
}