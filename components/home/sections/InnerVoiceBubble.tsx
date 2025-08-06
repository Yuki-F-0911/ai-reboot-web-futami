'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function InnerVoiceBubble() {
  return (
    <motion.div
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-40"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* 吹き出し本体 */}
      <div className="relative">
        {/* 思考の雲のような形状 */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-[40px] px-12 py-10 shadow-2xl">
          {/* 吹き出しの尻尾（思考バブル風） */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="w-4 h-4 bg-white/95 rounded-full shadow-lg"></div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/90 rounded-full shadow-md"></div>
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/85 rounded-full shadow-sm"></div>
          </div>
          
          {/* 縦書きテキスト */}
          <div className="flex flex-row-reverse gap-6">
            <p 
              className="text-gray-800 text-lg leading-loose"
              style={{ 
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
                fontFamily: '"Noto Sans JP", sans-serif',
                fontWeight: '400',
                letterSpacing: '0.1em',
                lineHeight: '1.8'
              }}
            >
              毎日、同じことの繰り返し。
            </p>
            <p 
              className="text-gray-700 text-lg leading-loose"
              style={{ 
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
                fontFamily: '"Noto Sans JP", sans-serif',
                fontWeight: '400',
                letterSpacing: '0.1em',
                lineHeight: '1.8'
              }}
            >
              その違和感を、見て見ぬふりしている。
            </p>
          </div>
          
          {/* 内側の装飾的な境界線 */}
          <div className="absolute inset-2 border border-gray-200/30 rounded-[35px] pointer-events-none"></div>
        </div>
        
        {/* 微細な影のレイヤー */}
        <div className="absolute inset-0 bg-black/5 rounded-[40px] blur-xl transform translate-y-4"></div>
      </div>
    </motion.div>
  )
}