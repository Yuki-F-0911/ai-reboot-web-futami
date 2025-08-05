'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServiceSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              あなたの「再起動」を、ここから。
            </span>
          </h2>
        </motion.div>

        {/* サービスカード */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* AIリブートアカデミー */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="group h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-8 md:p-10 h-full flex flex-col">
                {/* ヘッダー */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-will-primary/20 to-will-secondary/20 mb-4">
                    <svg className="w-8 h-8 text-will-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    AI REBOOT ACADEMY
                  </h3>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    for Individuals
                  </p>
                </div>

                {/* コンテンツ */}
                <div className="flex-grow space-y-4">
                  <p className="text-lg font-semibold text-gray-800">
                    個人のための、100日間の自己変革プログラム
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    「なりたい自分」を発見し、AIで実現する力を手に入れる。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-will-primary/10 text-will-primary">
                      #キャリアチェンジ
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-will-secondary/10 text-will-secondary">
                      #自己実現
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      #リスキリング補助金
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/academy"
                  className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-will-primary to-will-secondary text-white font-semibold group-hover:shadow-lg transition-all duration-300"
                >
                  アカデミーの詳細を見る
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 法人向けサービス */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="group h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-8 md:p-10 h-full flex flex-col">
                {/* ヘッダー */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-will-secondary/20 to-will-tertiary/20 mb-4">
                    <svg className="w-8 h-8 text-will-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    AI REBOOT FOR BIZ
                  </h3>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    for Corporations
                  </p>
                </div>

                {/* コンテンツ */}
                <div className="flex-grow space-y-4">
                  <p className="text-lg font-semibold text-gray-800">
                    組織のための、実践型AI導入・人材育成
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    「ありたい姿」を定義し、AIで事業を飛躍させる。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-will-secondary/10 text-will-secondary">
                      #DX推進
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-will-tertiary/10 text-will-tertiary">
                      #イノベーション
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      #生産性向上
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/corporate"
                  className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-will-secondary to-will-tertiary text-white font-semibold group-hover:shadow-lg transition-all duration-300"
                >
                  法人研修の詳細を見る
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}