"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

export const ServiceSelectionNew = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-depth-100">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 md:text-5xl font-bold mb-6 text-depth-800">
            あなたに最適なAIリブートを
          </h2>
          <p className="text-xl text-depth-600">
            個人の成長、組織の変革。それぞれに最適なプログラムをご用意しています。
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* 個人向けカード */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseEnter={() => setHoveredCard("individual")}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative"
          >
            <Link href="/academy">
              <div className="relative bg-white rounded-3xl shadow-elevated hover:shadow-floating transition-all duration-300 overflow-hidden h-full">
                {/* 背景グラデーション */}
                <div className="absolute inset-0 bg-gradient-to-br from-will-lighter via-white to-wisdom-lighter opacity-50" />
                
                {/* コンテンツ */}
                <div className="relative p-10">
                  {/* ヘッダー */}
                  <div className="mb-8">
                    <span className="inline-block px-4 py-2 bg-will-primary text-white font-bold rounded-full text-sm mb-4">
                      個人向け
                    </span>
                    <h3 className="text-h2 font-bold text-depth-800 mb-4">
                      AIリブートアカデミー
                    </h3>
                    <p className="text-2xl font-bold bg-will-gradient bg-clip-text text-transparent">
                      100日で、AIを味方につける
                    </p>
                  </div>
                  
                  {/* 説明 */}
                  <p className="text-depth-600 mb-8 leading-relaxed">
                    経済産業省リスキリング補助金対象講座。<br />
                    最大70%（21万円）の補助で、本格的なAI活用スキルを習得。<br />
                    専属メンターが伴走し、あなたのWillを実現する力を身につけます。
                  </p>
                  
                  {/* 特徴リスト */}
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-will-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-depth-700">全国から集まる仲間との集合研修（2日間）</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-will-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-depth-700">100日間の実践型オンラインプログラム</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-will-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-depth-700">専属メンターによる個別サポート</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-will-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-depth-700">最終成果発表会（デモデー）</span>
                    </li>
                  </ul>
                  
                  {/* CTA */}
                  <motion.div
                    className="flex items-center gap-2 text-will-primary font-bold"
                    animate={{ x: hoveredCard === "individual" ? 10 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>詳しく見る</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
          
          {/* 法人向けカード */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            onMouseEnter={() => setHoveredCard("corporate")}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative"
          >
            <Link href="/corporate">
              <div className="relative bg-white rounded-3xl shadow-elevated hover:shadow-floating transition-all duration-300 overflow-hidden h-full">
                {/* 背景グラデーション */}
                <div className="absolute inset-0 bg-gradient-to-br from-harmony-lighter via-white to-will-lighter opacity-50" />
                
                {/* コンテンツ */}
                <div className="relative p-10">
                  {/* ヘッダー */}
                  <div className="mb-8">
                    <span className="inline-block px-4 py-2 bg-harmony text-white font-bold rounded-full text-sm mb-4">
                      法人向け
                    </span>
                    <h3 className="text-h2 font-bold text-depth-800 mb-4">
                      AIリブート研修
                    </h3>
                    <p className="text-2xl font-bold bg-harmony-gradient bg-clip-text text-transparent">
                      チーム全体がAIネイティブになる
                    </p>
                  </div>
                  
                  {/* 説明 */}
                  <p className="text-depth-600 mb-8 leading-relaxed">
                    社内にAI活用文化を根付かせる実践型研修プログラム。<br />
                    単なる研修で終わらせず、OJTメンターが現場に入り込み、<br />
                    実務での即活用と継続的なイノベーション創出を支援します。
                  </p>
                  
                  {/* 特徴リスト */}
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-harmony mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-depth-700">カスタマイズ可能な研修プログラム（10時間〜）</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-harmony mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-depth-700">個人環境からチーム環境まで一貫構築</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-harmony mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-depth-700">OJTメンターによる実践サポート</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-harmony mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-depth-700">共通リポジトリで知識資産を蓄積</span>
                    </li>
                  </ul>
                  
                  {/* CTA */}
                  <motion.div
                    className="flex items-center gap-2 text-harmony font-bold"
                    animate={{ x: hoveredCard === "corporate" ? 10 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>詳しく見る</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};