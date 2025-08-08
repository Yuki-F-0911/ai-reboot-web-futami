'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function InnerVoiceBubble() {
  const { scrollYProgress } = useScroll()
  
  // スクロールに応じた視差効果
  const bubble1Y = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const bubble2Y = useTransform(scrollYProgress, [0, 0.3], [0, -30])
  
  return (
    <>
      {/* 1つ目の思考バブル - 左寄り配置 */}
      <motion.div
        className="absolute top-[20%] left-[20%] md:left-[25%] z-40"
        initial={{ 
          opacity: 0, 
          y: 60, 
          scale: 0, 
          rotate: -15,
          filter: "blur(10px)" 
        }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotate: 0,
          filter: "blur(0px)"
        }}
        transition={{ 
          duration: 0.8,
          scale: { 
            type: "spring",
            damping: 15,
            stiffness: 100,
            mass: 1
          },
          rotate: {
            type: "spring",
            damping: 20,
            stiffness: 100
          },
          opacity: { duration: 0.5, ease: "easeOut" },
          y: { type: "spring", damping: 15, stiffness: 80 },
          filter: { duration: 0.7, ease: "easeOut" }
        }}
        viewport={{ once: true, margin: "-200px" }}
        style={{ y: bubble1Y }}
      >
        <div className="relative">
          {/* 思考バブル本体（雲の形） */}
          <div className="relative">
            {/* メインの雲 */}
            <div className="relative bg-white/90 backdrop-blur-md shadow-xl" 
                 style={{ 
                   borderRadius: '45% 55% 50% 50% / 60% 60% 40% 40%',
                   padding: '32px 36px'
                 }}>
              {/* 縦書きテキスト */}
              <p 
                className="text-gray-800 text-base md:text-lg leading-relaxed relative z-10"
                style={{ 
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.15em',
                  lineHeight: '1.8',
                  height: '200px'
                }}
              >
                このままでいいのだろうか
              </p>
            </div>
            
            {/* 思考バブルの尻尾（小さな円） */}
            <div className="absolute -bottom-3 left-10">
              <div className="w-5 h-5 bg-white/90 rounded-full shadow-md"></div>
              <div className="absolute -bottom-4 left-1 w-3 h-3 bg-white/85 rounded-full shadow-sm"></div>
              <div className="absolute -bottom-7 left-2 w-2 h-2 bg-white/80 rounded-full shadow-sm"></div>
            </div>
          </div>
          
          {/* 影 */}
          <div className="absolute inset-0 bg-black/5 blur-3xl transform translate-y-4 -z-10" 
               style={{ borderRadius: '45% 55% 50% 50% / 60% 60% 40% 40%' }}></div>
        </div>
      </motion.div>

      {/* 2つ目の思考バブル - 右寄り配置、少し下に */}
      <motion.div
        className="absolute top-[45%] right-[15%] md:right-[20%] z-40"
        initial={{ 
          opacity: 0, 
          y: 80, 
          scale: 0,
          rotate: 20,
          filter: "blur(12px)" 
        }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotate: 0,
          filter: "blur(0px)"
        }}
        transition={{ 
          delay: 0.2,
          duration: 0.9,
          scale: { 
            type: "spring",
            damping: 18,
            stiffness: 90,
            mass: 1.2,
            delay: 0.2
          },
          rotate: {
            type: "spring",
            damping: 22,
            stiffness: 90,
            delay: 0.2
          },
          opacity: { duration: 0.6, delay: 0.2, ease: "easeOut" },
          y: { type: "spring", damping: 18, stiffness: 70, delay: 0.2 },
          filter: { duration: 0.8, delay: 0.3, ease: "easeOut" }
        }}
        viewport={{ once: true, margin: "-200px" }}
        style={{ y: bubble2Y }}
      >
        <div className="relative">
          {/* 思考バブル本体（より大きな雲の形） */}
          <div className="relative">
            {/* メインの雲 - より有機的な形状 */}
            <div className="relative bg-white/85 backdrop-blur-md shadow-xl" 
                 style={{ 
                   borderRadius: '55% 45% 45% 55% / 50% 60% 40% 50%',
                   padding: '40px 44px'
                 }}>
              {/* 縦書きテキスト */}
              <p 
                className="text-gray-700 text-lg md:text-xl leading-relaxed relative z-10"
                style={{ 
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: '500',
                  letterSpacing: '0.2em',
                  lineHeight: '2',
                  height: '280px'
                }}
              >
                本当はもっと、できるはずなのに
              </p>
            </div>
            
            {/* 思考バブルの尻尾（小さな円、右側） */}
            <div className="absolute -bottom-4 right-16">
              <div className="w-6 h-6 bg-white/85 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-5 right-1 w-4 h-4 bg-white/80 rounded-full shadow-md"></div>
              <div className="absolute -bottom-9 right-2 w-2.5 h-2.5 bg-white/75 rounded-full shadow-sm"></div>
              <div className="absolute -bottom-12 right-3 w-1.5 h-1.5 bg-white/70 rounded-full"></div>
            </div>
          </div>
          
          {/* 影 */}
          <div className="absolute inset-0 bg-black/5 blur-3xl transform translate-y-5 -z-10" 
               style={{ borderRadius: '55% 45% 45% 55% / 50% 60% 40% 50%' }}></div>
        </div>
      </motion.div>

      {/* 3つ目の思考バブル - 下部やや左寄り */}
      <motion.div
        className="absolute top-[75%] left-[35%] transform -translate-x-1/2 z-40"
        initial={{ 
          opacity: 0, 
          y: 100, 
          scale: 0,
          rotate: -25,
          filter: "blur(15px)" 
        }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotate: 0,
          filter: "blur(0px)"
        }}
        transition={{ 
          delay: 0.4,
          duration: 1,
          scale: { 
            type: "spring",
            damping: 20,
            stiffness: 85,
            mass: 1.3,
            delay: 0.4
          },
          rotate: {
            type: "spring",
            damping: 25,
            stiffness: 80,
            delay: 0.4
          },
          opacity: { duration: 0.7, delay: 0.4, ease: "easeOut" },
          y: { type: "spring", damping: 20, stiffness: 60, delay: 0.4 },
          filter: { duration: 0.9, delay: 0.5, ease: "easeOut" }
        }}
        viewport={{ once: true, margin: "-150px" }}
      >
        <div className="relative">
          {/* 思考バブル本体（小さめの雲） */}
          <div className="relative">
            {/* メインの雲 - コンパクトな形状 */}
            <div className="relative bg-white/80 backdrop-blur-md shadow-lg" 
                 style={{ 
                   borderRadius: '50% 50% 45% 55% / 55% 45% 45% 55%',
                   padding: '28px 32px'
                 }}>
              {/* 縦書きテキスト */}
              <p 
                className="text-gray-600 text-sm md:text-base leading-relaxed relative z-10"
                style={{ 
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.12em',
                  lineHeight: '1.7',
                  height: '180px'
                }}
              >
                変わりたいけど、一歩が踏み出せない
              </p>
            </div>
            
            {/* 思考バブルの尻尾（小さな円、左下） */}
            <div className="absolute -bottom-2 left-12">
              <div className="w-4 h-4 bg-white/80 rounded-full shadow-md"></div>
              <div className="absolute -bottom-3 left-0.5 w-2.5 h-2.5 bg-white/75 rounded-full shadow-sm"></div>
              <div className="absolute -bottom-5 left-1 w-1.5 h-1.5 bg-white/70 rounded-full"></div>
            </div>
          </div>
          
          {/* 影 */}
          <div className="absolute inset-0 bg-black/4 blur-2xl transform translate-y-3 -z-10" 
               style={{ borderRadius: '50% 50% 45% 55% / 55% 45% 45% 55%' }}></div>
        </div>
      </motion.div>

      {/* 装飾的な思考の痕跡（連続する小さな円） */}
      <motion.div
        className="absolute top-[90%] left-[50%] z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="w-1.5 h-1.5 bg-white/30 rounded-full"
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-6 left-1 w-1 h-1 bg-white/25 rounded-full"
          animate={{ 
            opacity: [0.15, 0.4, 0.15],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{ 
            duration: 3,
            delay: 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-10 left-0.5 w-0.5 h-0.5 bg-white/20 rounded-full"
          animate={{ 
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 3,
            delay: 0.6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </>
  )
}