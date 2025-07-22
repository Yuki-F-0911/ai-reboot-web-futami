"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const CompanyNew = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* セクションタイトル */}
          <div className="text-center mb-12">
            <h2 className="text-h1 md:text-5xl font-bold mb-6 text-depth-800">
              AIリブートを運営する株式会社ウィルフォワードについて
            </h2>
          </div>
          
          {/* 企業理念 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-will-lighter to-white rounded-3xl p-10 md:p-12 mb-12 shadow-soft"
          >
            <h3 className="text-h2 font-bold mb-6 text-depth-800">
              企業理念
            </h3>
            <p className="text-2xl md:text-3xl font-bold bg-will-gradient bg-clip-text text-transparent mb-6">
              個人の「Will」が社会を創造する
            </p>
            <p className="text-lg text-depth-700 leading-relaxed">
              私たちは、一人ひとりが自身のWillに向き合い、<br />
              それを社会に提供することで、より良い未来を創造します。
            </p>
          </motion.div>
          
          {/* 会社概要 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* 基本情報 */}
            <div className="bg-white rounded-3xl border border-depth-200 p-8 shadow-subtle">
              <h4 className="text-xl font-bold mb-6 text-depth-800">会社概要</h4>
              <dl className="space-y-4">
                <div>
                  <dt className="text-depth-500 text-sm mb-1">会社名</dt>
                  <dd className="text-depth-800 font-medium">株式会社ウィルフォワード</dd>
                </div>
                <div>
                  <dt className="text-depth-500 text-sm mb-1">代表取締役</dt>
                  <dd className="text-depth-800 font-medium">成瀬 拓也</dd>
                </div>
                <div>
                  <dt className="text-depth-500 text-sm mb-1">設立</dt>
                  <dd className="text-depth-800 font-medium">[設立年]</dd>
                </div>
                <div>
                  <dt className="text-depth-500 text-sm mb-1">事業内容</dt>
                  <dd className="text-depth-800 font-medium">
                    AI教育事業<br />
                    コンサルティング事業
                  </dd>
                </div>
              </dl>
            </div>
            
            {/* 事業内容 */}
            <div className="bg-white rounded-3xl border border-depth-200 p-8 shadow-subtle">
              <h4 className="text-xl font-bold mb-6 text-depth-800">主な事業</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-will-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-bold text-depth-800 mb-1">AIリブートアカデミー</h5>
                    <p className="text-depth-600 text-sm">個人向けAI活用人材育成プログラム</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-harmony rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-bold text-depth-800 mb-1">AIリブート研修</h5>
                    <p className="text-depth-600 text-sm">法人向けAI導入・活用支援</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-wisdom rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-bold text-depth-800 mb-1">AI活用コンサルティング</h5>
                    <p className="text-depth-600 text-sm">DX推進・イノベーション創出支援</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* 詳しく見るリンク */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/company" className="inline-flex items-center gap-2 text-will-primary font-bold hover:gap-3 transition-all duration-300">
              <span>詳しく見る</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};