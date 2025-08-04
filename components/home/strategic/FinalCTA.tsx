'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function FinalCTA() {
  return (
    <section className="py-32 md:py-40 bg-transparent text-white relative overflow-hidden">
      {/* 前セクションから引き継いだ星（画面の片隅） */}
      <motion.div
        className="absolute top-20 right-20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#9013FE] rounded-full blur-xl opacity-60" />
          <div className="absolute inset-2 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-md" />
          <div className="absolute inset-4 bg-white rounded-full blur-sm" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 章タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-[#A0A0A0] uppercase tracking-wider mb-4">
            終章
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EAEAEA]">
            あなたの物語を、
            <br />
            私に聞かせてください
          </h2>
        </motion.div>

        {/* 創設者メッセージエリア */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-3xl border border-gray-700 overflow-hidden">
            <div className="md:flex">
              {/* 創設者の写真エリア */}
              <div className="md:w-1/3 p-8 flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className="w-44 h-44 rounded-full bg-gradient-to-br from-[#4A90E2]/20 to-[#9013FE]/20 flex items-center justify-center">
                      <svg className="w-24 h-24 text-[#A0A0A0]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-gradient-to-r from-[#4A90E2] to-[#9013FE] text-white text-xs px-3 py-1 rounded-full">
                    創設者
                  </div>
                </div>
              </div>

              {/* メッセージ本文 */}
              <div className="md:w-2/3 p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-[#EAEAEA] mb-6">
                    創設者からのメッセージ
                  </h3>
                  
                  <div className="space-y-4 text-[#A0A0A0] leading-relaxed">
                    <p>
                      「AIが全てを変える」と言われる時代。
                    </p>
                    
                    <p>
                      でも、本当に変わるべきは、
                      <span className="text-[#EAEAEA]">私たち自身の「在り方」</span>
                      なのかもしれません。
                    </p>

                    <p>
                      あなたは今、どんな想いでこのページを見ていますか？<br />
                      不安？希望？それとも、まだ言葉にできない何か？
                    </p>

                    <p className="text-[#EAEAEA] font-medium">
                      その全てが、あなたの物語の始まりです。
                    </p>

                    <p>
                      私も、かつては同じ場所に立っていました。<br />
                      AIという巨大な波の前で、<br />
                      自分の存在意義を問い直していました。
                    </p>

                    <p>
                      だからこそ、伝えたい。
                    </p>

                    <p className="text-lg text-[#EAEAEA] font-medium border-l-4 border-[#4A90E2] pl-4">
                      AIは、あなたを置き換えるものではなく、<br />
                      あなたの「Will」を増幅させる、<br />
                      最高のパートナーになれるということを。
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-700">
                    <p className="text-[#EAEAEA] mb-4">
                      まずは、あなたの物語を聞かせてください。
                    </p>
                    <p className="text-sm text-[#A0A0A0]">
                      創設者　山田太郎
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 最終CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          {/* メインCTA */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center mb-8"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#9013FE] rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
            <span className="relative bg-gradient-to-r from-[#4A90E2] to-[#9013FE] rounded-xl px-12 py-6">
              <span className="block text-white">
                <span className="block text-2xl font-bold mb-2">
                  無料個別相談を予約する
                </span>
                <span className="text-sm opacity-90">
                  創設者と直接お話しできます（60分・オンライン）
                </span>
              </span>
            </span>
          </Link>

          {/* サブCTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 text-[#A0A0A0] hover:text-[#EAEAEA] transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>詳細資料をダウンロード</span>
            </Link>

            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 text-[#A0A0A0] hover:text-[#EAEAEA] transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>最新情報を受け取る</span>
            </Link>
          </div>

          {/* 保証・信頼性要素 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-[#A0A0A0] text-sm"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              完全無料・強引な勧誘なし
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              24時間以内に返信
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              経産省認定プログラム
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}