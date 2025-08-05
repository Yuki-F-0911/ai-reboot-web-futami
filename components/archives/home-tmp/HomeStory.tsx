"use client";

import { motion } from "framer-motion";

export const HomeStory = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-white to-depth-50/30">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Chapter 1: 変革の必然性 */}
          <div className="mb-20">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-will-gradient mb-8"
            />
            <h3 className="text-2xl md:text-3xl font-bold text-depth-900 mb-6">
              変革の必然性
            </h3>
            <p className="text-lg text-depth-700 leading-relaxed mb-6">
              AIの急速な進化は既存の常識を大きく変え、企業がAIを活用せずに成長を続けることは困難な時代になりました。
            </p>
            <p className="text-lg text-depth-700 leading-relaxed mb-8">
              多くの企業が変革を求められる中で、私たちウィルフォワードは特に
              <span className="font-semibold text-will-primary">「成長の可能性が縮小し、変革を必要とする企業」</span>
              を重点的に支援しています。
            </p>
            
            <div className="bg-gradient-to-r from-will-lighter/50 to-wisdom-lighter/50 p-6 rounded-2xl">
              <h4 className="text-lg font-semibold text-depth-900 mb-3">私たちが解決する課題</h4>
              <ul className="space-y-2 text-depth-700">
                <li className="flex items-start gap-3">
                  <span className="text-will-primary mt-1">•</span>
                  <span>顧客への価値提供の再定義</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-will-primary mt-1">•</span>
                  <span>AI時代の人材採用と育成</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-will-primary mt-1">•</span>
                  <span>組織文化の根本的な変革</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Chapter 2: 私たちの哲学 */}
          <div className="mb-20">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-harmony-gradient mb-8"
            />
            <h3 className="text-2xl md:text-3xl font-bold text-depth-900 mb-6">
              私たちの哲学
            </h3>
            <p className="text-lg text-depth-700 leading-relaxed mb-8">
              ウィルフォワードはAIを単なるツールとして教えるのではありません。
              AIが当たり前になった社会で、私たちは問いかけます。
            </p>

            {/* 三つの問い */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-soft text-center"
              >
                <div className="w-12 h-12 bg-harmony-lighter rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-harmony" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="font-semibold text-depth-800">
                  企業として<br />どうあるべきか
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-soft text-center"
              >
                <div className="w-12 h-12 bg-will-lighter rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-will-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="font-semibold text-depth-800">
                  どのように<br />働くべきか
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-soft text-center"
              >
                <div className="w-12 h-12 bg-wisdom-lighter rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-wisdom" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-depth-800">
                  どんな価値を<br />社会に生み出すか
                </p>
              </motion.div>
            </div>

            <p className="text-lg text-depth-700 leading-relaxed mb-8">
              創業以来、私たちは
              <span className="font-semibold text-harmony">「個人や企業の意思（ウィル）を尊重し、未来を創る」</span>
              という信念を持ち続けています。
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-harmony-lighter to-will-lighter p-8 rounded-2xl text-center"
            >
              <p className="text-2xl md:text-3xl font-bold bg-will-gradient bg-clip-text text-transparent mb-2">
                AIと人類が共存する未来
              </p>
              <p className="text-depth-700">
                それが、私たちが目指す世界です。
              </p>
            </motion.div>
          </div>

          {/* Chapter 3: AIリブートという解決策 */}
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-wisdom-gradient mb-8"
            />
            <h3 className="text-2xl md:text-3xl font-bold text-depth-900 mb-6">
              AIリブートという解決策
            </h3>
            <p className="text-lg text-depth-700 leading-relaxed mb-8">
              AIリブートは、企業と個人をAIによってアップデートし、
              イノベーションを起こすための実践的プログラムです。
            </p>

            {/* 三段構成 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-soft p-8 mb-8"
            >
              <h4 className="text-xl font-bold text-center mb-8 text-depth-800">
                座学＋実践＋伴走型支援の三段構成
              </h4>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-will-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                    1
                  </div>
                  <h5 className="font-semibold text-depth-800 mb-1">座学</h5>
                  <p className="text-sm text-depth-600">AIの基礎知識と<br />活用方法を学ぶ</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-harmony-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                    2
                  </div>
                  <h5 className="font-semibold text-depth-800 mb-1">実践</h5>
                  <p className="text-sm text-depth-600">実際の業務で<br />AIを活用する</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-wisdom-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                    3
                  </div>
                  <h5 className="font-semibold text-depth-800 mb-1">伴走</h5>
                  <p className="text-sm text-depth-600">メンターが<br />完成まで支援</p>
                </div>
              </div>
            </motion.div>

            <p className="text-center text-depth-700">
              詳しいプログラム内容は、それぞれの専用ページでご確認ください
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};