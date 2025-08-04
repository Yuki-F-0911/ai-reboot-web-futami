'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TheEcho() {
  const [selectedType, setSelectedType] = useState<'individual' | 'corporate' | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showClosingMessage, setShowClosingMessage] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ripplesRef = useRef<Array<{ x: number; y: number; radius: number; opacity: number }>>([])

  const questions = {
    individual: [
      'このままの自分で、本当に価値があるのだろうか…？',
      '心の底から「これだ」と言える仕事は、どこにある…？',
      '変わりたいと願いながら、何も変えられない日々…',
    ],
    corporate: [
      '我々の事業は、時代に求められ続けるだろうか…？',
      '利益の先に、我々が本当に成し遂げたいことは何だ…？',
      '変革を叫びながら、旧態依然とした組織のまま…',
    ]
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 波紋アニメーション
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // 波紋を描画
      ripplesRef.current = ripplesRef.current.filter(ripple => {
        ripple.radius += 3
        ripple.opacity -= 0.008

        if (ripple.opacity > 0) {
          // 複数の波紋リングを描画
          for (let i = 0; i < 3; i++) {
            ctx.beginPath()
            ctx.arc(ripple.x, ripple.y, ripple.radius + i * 15, 0, Math.PI * 2)
            const opacity = ripple.opacity * (0.3 - i * 0.1) * 0.5
            ctx.strokeStyle = `rgba(224, 176, 255, ${opacity})` // manifesto-core
            ctx.lineWidth = 1.5 - i * 0.3
            ctx.stroke()
          }
          return true
        }
        return false
      })

      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  const handleSelection = (type: 'individual' | 'corporate') => {
    setSelectedType(type)
    setCurrentQuestionIndex(0)
    setShowClosingMessage(false)
    
    // 選択時に波紋を追加
    const canvas = canvasRef.current
    if (canvas) {
      ripplesRef.current.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 0,
        opacity: 1
      })
    }
  }

  useEffect(() => {
    if (selectedType && currentQuestionIndex < questions[selectedType].length) {
      const timer = setTimeout(() => {
        if (currentQuestionIndex < questions[selectedType].length - 1) {
          setCurrentQuestionIndex(prev => prev + 1)
        } else {
          setTimeout(() => setShowClosingMessage(true), 2000)
        }
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [selectedType, currentQuestionIndex])

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* 水面エフェクト */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)' }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* ヘッドライン */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light mb-16"
          >
            その問いは、あなたの中から響いている。
          </motion.h2>

          {/* 選択肢 */}
          {!selectedType && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-8 justify-center"
            >
              <button
                onClick={() => handleSelection('individual')}
                className="group relative transition-all duration-700 hover:scale-105"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E0B0FF]/10 to-[#7B68EE]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                <span className="relative block rounded-full border border-white/10 hover:border-white/30 bg-black/30 backdrop-blur-sm px-12 py-6 overflow-hidden transition-all duration-500">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#E0B0FF]/5 to-[#7B68EE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative z-10 text-white/70 group-hover:text-white text-base font-light tracking-wider">
                    [ 個人の心の声に耳を澄ます ]
                  </span>
                </span>
              </button>

              <button
                onClick={() => handleSelection('corporate')}
                className="group relative transition-all duration-700 hover:scale-105"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7B68EE]/10 to-[#00CED1]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                <span className="relative block rounded-full border border-white/10 hover:border-white/30 bg-black/30 backdrop-blur-sm px-12 py-6 overflow-hidden transition-all duration-500">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#7B68EE]/5 to-[#00CED1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative z-10 text-white/70 group-hover:text-white text-base font-light tracking-wider">
                    [ 組織の魂の叫びを聞く ]
                  </span>
                </span>
              </button>
            </motion.div>
          )}

          {/* 質問表示 */}
          <AnimatePresence mode="wait">
            {selectedType && !showClosingMessage && (
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="mt-16"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-light italic leading-relaxed text-gray-300">
                  {questions[selectedType][currentQuestionIndex]}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* クロージングメッセージ */}
          <AnimatePresence>
            {showClosingMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="mt-16"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
                  その答えは、AIが知っているのではない。
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-medium">
                  あなた自身が、すでに知っている。
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* リセットボタン（表示中のみ） */}
          {selectedType && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: 2 }}
              onClick={() => {
                setSelectedType(null)
                setCurrentQuestionIndex(0)
                setShowClosingMessage(false)
              }}
              className="mt-16 text-sm text-gray-600 hover:text-gray-400 transition-colors"
            >
              [ もう一度 ]
            </motion.button>
          )}
        </div>
      </div>
    </section>
  )
}