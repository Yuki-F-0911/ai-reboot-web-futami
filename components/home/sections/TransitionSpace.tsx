'use client'

import React from 'react'
import { motion } from 'framer-motion'
import InnerVoiceBubble from './InnerVoiceBubble'

export default function TransitionSpace() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* 透明から序章（gray-900）へのグラデーション背景 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-900" />
      </div>
      
      {/* オプション：微細なアニメーション要素 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        {/* 浮遊する光の粒子 */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/10 rounded-full blur-sm animate-float-slow" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/10 rounded-full blur-sm animate-float-medium" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/10 rounded-full blur-sm animate-float-fast" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/10 rounded-full blur-sm animate-float-slow" />
      </motion.div>
      
      {/* 静かなスクロール誘導 */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </motion.div>
      
      {/* 内省の吹き出し - トランジションと序章の境界に配置 */}
      <InnerVoiceBubble />
    </section>
  )
}