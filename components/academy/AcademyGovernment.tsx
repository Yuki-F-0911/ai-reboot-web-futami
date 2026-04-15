"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const AcademyGovernment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "経済産業省認定プログラム",
      description: "厳格な審査基準をクリアした高品質プログラムです。"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      ),
      title: "補助金申請可能",
      description: "企業・個人問わず補助金申請が可能です。"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      ),
      title: "修了証明書の発行",
      description: "転職活動も有利に進められます。"
    }
  ];

  return (
    <section ref={ref} id="subsidy" className="py-20 md:py-32 bg-gradient-to-b from-depth-50 to-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-depth-800 mb-4">
              経済産業省認定プログラム
            </h2>
            <p className="text-xl md:text-2xl text-depth-700 font-medium">
              本物の信頼と手厚い補助金サポート
            </p>
          </div>

          {/* 認定バッジと説明 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-elevated mb-12"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-will-primary to-will-secondary text-white px-6 py-3 rounded-full shadow-glow mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-bold">経済産業省リスキリング補助金対象</span>
              </div>
              <p className="text-lg text-depth-600 max-w-3xl mx-auto">
                国が認めた教育プログラムだから安心。複雑な補助金申請も完全サポートいたします。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-will-primary mb-3 flex justify-center">{benefit.icon}</div>
                  <h4 className="font-bold text-depth-800 mb-2">{benefit.title}</h4>
                  <p className="text-depth-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 補助金情報 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-will-primary/10 to-will-secondary/10 rounded-3xl p-8 md:p-10 mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center text-depth-800 mb-8">
              投資する価値のある、あなたの未来
            </h3>
            
            <div className="text-center mb-8">
              <div className="mb-6">
                <p className="text-lg text-depth-700 mb-2">受講料</p>
                <p className="text-3xl md:text-4xl font-bold text-depth-800">
                  300,000円<span className="text-lg text-depth-600">（税込330,000円）</span>
                </p>
              </div>
              
              <div className="bg-will-gradient text-white rounded-2xl p-6 mb-6">
                <p className="text-lg mb-2">リスキリング補助金適用後</p>
                <p className="text-4xl md:text-5xl font-bold">
                  最小99,000円〜
                </p>
                <p className="text-sm opacity-90 mt-2">最大210,000円の補助</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
              <div className="bg-white/80 rounded-2xl p-4 text-center">
                <p className="text-depth-600 mb-1">補助率</p>
                <p className="text-2xl font-bold text-will-primary">最大70%</p>
              </div>
              <div className="bg-white/80 rounded-2xl p-4 text-center">
                <p className="text-depth-600 mb-1">最大補助額</p>
                <p className="text-2xl font-bold text-will-primary">210,000円</p>
              </div>
              <div className="bg-white/80 rounded-2xl p-4 text-center">
                <p className="text-depth-600 mb-1">実質負担額</p>
                <p className="text-2xl font-bold text-will-primary">99,000円〜</p>
              </div>
            </div>
            
            <div className="bg-white/60 rounded-xl p-4 text-sm text-depth-600">
              <h4 className="font-semibold mb-2">補助金の適用条件</h4>
              <ul className="space-y-1 text-xs">
                <li>• 在職者であること（正社員・契約社員・パート・アルバイト等）</li>
                <li>• プログラムの修了（出席率80%以上）</li>
                <li>• キャリア相談への参加</li>
              </ul>
              <p className="mt-2 text-xs">※詳細な条件は説明会でご案内します</p>
            </div>
          </motion.div>

          {/* なぜ政府が支援するのか */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-depth-50 rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-xl md:text-2xl font-bold text-depth-800 mb-4">
              なぜ政府がAI教育を支援するのか
            </h3>
            <p className="text-lg text-depth-700 leading-relaxed mb-8">
              日本の国際競争力強化には、AI人材の育成が急務です。
              政府は2025年までに25万人のAI人材育成を目標に掲げ、
              質の高い教育プログラムに補助金を投入しています。
              今がまさに、国の支援を受けてスキルアップする絶好のチャンスです。
            </p>

            <div className="text-center">
              <Link href="#session">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-will-gradient text-white font-bold text-lg rounded-full shadow-elevated hover:shadow-floating transition-all duration-300"
                >
                  今すぐ無料相談会に申し込む
                </motion.button>
              </Link>
              <p className="text-depth-600 mt-4">
                ※ 補助金の詳細条件は個別相談会でご説明します。
              </p>
            </div>
          </motion.div>

          {/* 運営会社情報 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-8 text-depth-600"
          >
            <p>運営会社は株式会社ウィルフォワード</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};