'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function DawnTransition() {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      {/* 紫から白へのシンプルなグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-white" />
      
      {/* 夜明け前の静寂を表現する微細な光 */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-indigo-100/10 via-purple-200/5 to-transparent" />
      </div>
      
      {/* 光の粒子 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-200/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      
      {/* 縦書きの「今がその時だ」 */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p 
          className="text-white text-lg md:text-xl lg:text-2xl whitespace-nowrap"
          style={{ 
            fontFamily: '"Noto Serif JP", serif',
            fontWeight: '400',
            letterSpacing: '0.2em',
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}
        >
          今がその時だ
        </p>
      </motion.div>
      
      {/* スクロール誘導 */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}