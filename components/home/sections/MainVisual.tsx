'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GlitchText from '@/components/effects/GlitchText'
import PersonGlitch from '@/components/effects/PersonGlitch'

export default function MainVisual() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* メインテキスト */}
      <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <div className="space-y-6 mb-12">
            <motion.div 
              className="text-depth-800 font-bold leading-none whitespace-nowrap tracking-tight text-ja-heading"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {mounted && (
                <>
                  <PersonGlitch delay={0} />
                  <span>の物語を、</span>
                </>
              )}
            </motion.div>
            <motion.div 
              className="text-depth-800 font-bold leading-none whitespace-nowrap tracking-tight text-ja-heading"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {mounted && <GlitchText text="AIが待っている" delay={0.3} intensity={0.7} />}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-12"
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-depth-700 whitespace-nowrap tracking-wide">
              さあ、人生を<ruby className="text-will-primary font-bold">再起動<rt className="text-sm font-normal">リブート</rt></ruby>しよう
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 border-2 border-depth-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-4 bg-depth-400 rounded-full mt-2"
          />
        </motion.div>
        <p className="text-depth-400 text-sm mt-3 text-center tracking-wider uppercase">scroll</p>
      </motion.div>
    </section>
  )
}