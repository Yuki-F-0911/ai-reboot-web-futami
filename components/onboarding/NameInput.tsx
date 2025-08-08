'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface NameInputProps {
  onComplete: (name: string | null) => void
}

export default function NameInput({ onComplete }: NameInputProps) {
  const [name, setName] = useState('')
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    if (name.length > 0) {
      setShowPreview(true)
    } else {
      setShowPreview(false)
    }
  }, [name])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onComplete(name.trim())
    }
  }

  const handleSkip = () => {
    onComplete(null)
  }

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl px-4"
      >
        <div className="text-center">
          {/* タイトル */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-light text-gray-700 mb-4"
          >
            さて、最後に...
          </motion.h2>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          >
            あなたのことを何とお呼びすればいいですか？
          </motion.h1>

          {/* 入力フォーム */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ニックネームでもOK（例：たろう）"
                className="w-full max-w-md mx-auto block px-6 py-4 text-xl text-center border-2 border-gray-200 rounded-xl focus:border-will-primary focus:outline-none transition-colors"
                maxLength={10}
                autoFocus
              />
            </motion.div>

            {/* プレビュー */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: showPreview ? 1 : 0, 
                height: showPreview ? 'auto' : 0 
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-lg text-gray-600">
                <span className="text-will-primary font-bold">{name || 'あなた'}</span>
                の物語が始まります
              </p>
            </motion.div>

            {/* ボタン */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                type="submit"
                disabled={!name.trim()}
                className={`px-8 py-3 rounded-lg font-medium transition-all ${
                  name.trim()
                    ? 'bg-gradient-to-r from-will-primary to-will-secondary text-white hover:shadow-lg hover:scale-105'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                続ける
              </button>
              
              <button
                type="button"
                onClick={handleSkip}
                className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
              >
                スキップして進む
              </button>
            </motion.div>
          </form>

          {/* 補足説明 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-sm text-gray-500"
          >
            ※ 入力された名前はこのブラウザにのみ保存されます
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}