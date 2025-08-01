'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function SolutionSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            <span className="block text-gray-900 mb-2">スキルより、Willを。</span>
            <span className="block bg-gradient-to-r from-will-primary via-will-secondary to-will-tertiary bg-clip-text text-transparent">
              戦術より、目的を。
            </span>
          </h2>
        </motion.div>

        {/* コンセプト図 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-3xl mx-auto mb-16"
        >
          <div className="relative h-96 flex items-center justify-center">
            {/* 外側の円 - TRANSFORMATION */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full rounded-full border-2 border-dashed border-gray-300"
            >
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-gray-600">
                TRANSFORMATION
              </span>
            </motion.div>

            {/* 中間の円 - AI */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-will-primary/10 via-will-secondary/10 to-will-tertiary/10 flex items-center justify-center"
            >
              <div className="absolute w-full h-full rounded-full border-2 border-will-secondary/30"></div>
              <span className="absolute -right-16 text-lg font-semibold text-will-secondary">
                AI
              </span>
            </motion.div>

            {/* 中心の円 - Will */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-40 h-40 rounded-full bg-gradient-to-r from-will-primary via-will-secondary to-will-tertiary flex items-center justify-center shadow-2xl"
            >
              <span className="text-2xl font-bold text-white">Will</span>
            </motion.div>

            {/* 光の粒子 */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-will-primary to-will-secondary rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 45}deg) translateX(120px)`
                  }}
                  animate={{
                    transform: [
                      `rotate(${i * 45}deg) translateX(120px)`,
                      `rotate(${i * 45 + 360}deg) translateX(120px)`
                    ]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* テキストコンテンツ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto space-y-6 text-center"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            私たちは、AIの使い方を教えるだけのスクールではありません。
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            私たちは、AIツールを導入するだけのコンサルではありません。
          </p>
          <p className="text-lg md:text-xl text-gray-900 font-semibold leading-relaxed">
            あなたの、そして貴社の「Will」を解放し、<br className="hidden sm:inline" />
            AIという翼を授けるパートナーです。
          </p>
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl font-bold pt-8"
          >
            <span className="bg-gradient-to-r from-will-primary via-will-secondary to-will-tertiary bg-clip-text text-transparent">
              AIリブートとは、AIで「本当の自分・本当の価値」を再起動すること。
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}