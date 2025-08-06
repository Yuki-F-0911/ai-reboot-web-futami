'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Prologue() {
  return (
    <section className="relative section-padding px-6 md:px-8 overflow-hidden bg-gray-900">
      {/* 夜明けのグラデーション - 上部は暗闇、下部に向かって朝焼け */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-indigo-900/50" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-900/20 via-purple-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-amber-900/10 to-transparent" />
      </div>
      
      {/* 背景に大きく「序章」 */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
      >
        <span 
          className="text-[12rem] md:text-[20rem] lg:text-[28rem] font-bold select-none"
          style={{ 
            fontFamily: '"Noto Serif JP", serif',
            letterSpacing: '0.3em',
            color: 'rgba(255, 255, 255, 0.02)',
            transform: 'translateY(-5%)',
            fontWeight: '200'
          }}
        >
          序章
        </span>
      </motion.div>
      
      <div className="relative z-30">
        {/* モバイル用横書きタイトル */}
        <div className="md:hidden mb-12">
          <motion.h2 
            className="text-xl text-white/70 text-center"
            style={{ 
              fontFamily: '"Noto Serif JP", serif',
              fontWeight: '200',
              letterSpacing: '0.2em'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            その違和感が、始まりのサイン
          </motion.h2>
        </div>
        
        <div className="max-w-6xl mx-auto flex items-start gap-12">
          {/* 左側：縦書きタイトル */}
          <motion.div 
            className="hidden md:block pt-12 flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-lg lg:text-xl text-white/60"
              style={{ 
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
                fontFamily: '"Noto Serif JP", serif',
                fontWeight: '200',
                letterSpacing: '0.5em',
                lineHeight: '2.2',
                height: '350px'
              }}
            >
              その違和感が、始まりのサイン
            </h2>
          </motion.div>
          
          {/* 右側：本文 */}
          <div className="flex-1 max-w-prose mx-auto">
            <div className="space-y-10 text-lg leading-loose text-white/70 text-ja-body">
              <motion.blockquote 
                className="border-l-4 border-white/20 pl-6 py-4 italic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p>毎日、同じことの繰り返し。</p>
                <p>その違和感を、見て見ぬふりしている。</p>
              </motion.blockquote>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                世界の変化とか、未来の不安とか、そういう大きな話は、もう聞き飽きた。
              </motion.p>

              <motion.p 
                className="text-lead font-medium text-white/90"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                問題は、いつだって、私自身に、あなた自身の中にある。<br />
                それは、一人ひとりの小さな叫びだ。
              </motion.p>

              <motion.div 
                className="space-y-3 my-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <p>仕事の合間にふと感じる「もっと違う方法があるはず」</p>
                <p>会議中に浮かぶ「本当はこうしたい」</p>
                <p>帰り道の「明日も同じなのか」という、ため息。</p>
              </motion.div>

              <motion.p 
                className="text-lead font-medium text-white/90 my-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.1 }}
                viewport={{ once: true }}
              >
                その小さな違和感の中にこそ、<br />
                あなたの「<span className="text-will-primary">Will</span>」ー本当の意志ーが眠っている。
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.3 }}
                viewport={{ once: true }}
              >
                AIという時代の大きな変化が、それを浮き彫りにし始めている。
              </motion.p>

              {/* 夜明けの演出 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3, delay: 1.5 }}
                viewport={{ once: true }}
                className="relative mt-20 py-12"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/10 to-amber-900/20 rounded-3xl" />
                <p className="relative text-center text-lead font-medium text-white/90">
                  静かな革命は、いつも夜明け前に始まる。<br />
                  <span className="text-amber-200/80">まだ暗いうちに動き出す者が、朝日を味方にする。</span>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}