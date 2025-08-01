'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TheJourneys() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center">
      {/* 背景のグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッドライン */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-20"
        >
          二つの旅路。一つの目的地。
        </motion.h2>

        {/* カード */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* AI REBOOT ACADEMY */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E0B0FF]/5 to-[#7B68EE]/5 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative bg-black/40 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/5 hover:border-[#E0B0FF]/20 transition-all duration-700">
              {/* 光のアクセント */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#E0B0FF]/10 to-transparent rounded-tl-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                  AI REBOOT ACADEMY
                </h3>
                <h4 className="text-2xl md:text-3xl font-light mb-6">
                  個の覚醒
                </h4>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  100日間で、本当の自分を再発見し、<br />
                  AIという翼を手に入れる。
                </p>
                
                <Link
                  href="/academy"
                  className="inline-flex items-center text-[#E0B0FF]/60 hover:text-[#E0B0FF] transition-all duration-500"
                >
                  <span className="mr-2 font-light tracking-wider text-sm">[ アカデミーという旅へ ]</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* AI REBOOT FOR BIZ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#7B68EE]/5 to-[#00CED1]/5 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative bg-black/40 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/5 hover:border-[#00CED1]/20 transition-all duration-700">
              {/* 光のアクセント */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#00CED1]/10 to-transparent rounded-tr-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                  AI REBOOT FOR BIZ
                </h3>
                <h4 className="text-2xl md:text-3xl font-light mb-6">
                  組織の進化
                </h4>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  AIを「導入」するのではない。<br />
                  組織の「目的」そのものを、AIで進化させる。
                </p>
                
                <Link
                  href="/corporate"
                  className="inline-flex items-center text-[#00CED1]/60 hover:text-[#00CED1] transition-all duration-500"
                >
                  <span className="mr-2 font-light tracking-wider text-sm">[ 法人向けプログラムという冒険へ ]</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 装飾的な要素 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#E0B0FF]/5 via-[#7B68EE]/5 to-[#00CED1]/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}