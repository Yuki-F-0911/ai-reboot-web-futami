"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const HomeServices = () => {
  const commonFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "実践重視",
      description: "理論だけでなく、実際の業務や生活で使える実践的なスキル",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "伴走支援",
      description: "専門メンターによる継続的なサポートで挫折させない",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "思考の変革",
      description: "ツールの使い方だけでなく、AI時代の思考法を体得",
    },
  ];

  return (
    <section className="section-spacing">
      <div className="container-section">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-depth-900">２つのアプローチで</span>
            <span className="bg-harmony-gradient bg-clip-text text-transparent">AIリブート</span>
          </h2>
          <p className="text-lg md:text-xl text-depth-700 max-w-3xl mx-auto">
            個人の成長と組織の変革、それぞれのニーズに合わせた最適なプログラムを提供
          </p>
        </motion.div>

        {/* Common features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-depth-50 to-white rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-depth-900 mb-6 text-center">
              両プログラム共通の特徴
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {commonFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-soft text-will-primary">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-depth-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-depth-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Service comparison */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Academy service */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-elevated overflow-hidden"
          >
            <div className="bg-gradient-to-br from-will-primary to-will-secondary p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">AIリブートアカデミー</h3>
              <p className="text-will-lighter">個人向け100日間プログラム</p>
            </div>
            <div className="p-8">
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-depth-900 mb-2">こんな方におすすめ</h4>
                  <ul className="space-y-2 text-depth-700">
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary mt-1">•</span>
                      <span>AI時代に取り残されたくない</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary mt-1">•</span>
                      <span>新しいキャリアを切り開きたい</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary mt-1">•</span>
                      <span>自己成長を加速させたい</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-depth-900 mb-2">プログラムの流れ</h4>
                  <ol className="space-y-2 text-depth-700">
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-will-primary">1.</span>
                      <span>2日間の集合研修（キャンプ）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-will-primary">2.</span>
                      <span>100日間の実践とメンタリング</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-will-primary">3.</span>
                      <span>DEMO DAYでの成果発表</span>
                    </li>
                  </ol>
                </div>
                <div className="bg-will-lighter rounded-xl p-4">
                  <p className="text-sm font-semibold text-will-primary mb-1">経済産業省認定講座</p>
                  <p className="text-sm text-depth-700">リスキリング補助金で最大70%補助</p>
                </div>
              </div>
              <Link href="/academy">
                <button className="w-full py-4 bg-will-primary text-white font-medium rounded-xl hover:bg-will-primary/90 transition-all duration-200 shadow-md hover:shadow-lg">
                  詳細を見る
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Corporate service */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-elevated overflow-hidden"
          >
            <div className="bg-gradient-to-br from-harmony to-harmony-dark p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">法人向け研修</h3>
              <p className="text-harmony-lighter">組織全体のAI活用力向上</p>
            </div>
            <div className="p-8">
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-depth-900 mb-2">こんな企業におすすめ</h4>
                  <ul className="space-y-2 text-depth-700">
                    <li className="flex items-start gap-2">
                      <span className="text-harmony mt-1">•</span>
                      <span>AIを活用して競争力を高めたい</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-harmony mt-1">•</span>
                      <span>社内にAI人材を育成したい</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-harmony mt-1">•</span>
                      <span>業務プロセスを革新したい</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-depth-900 mb-2">三段構成プログラム</h4>
                  <ol className="space-y-2 text-depth-700">
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-harmony">1.</span>
                      <span>初回集中研修（座学）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-harmony">2.</span>
                      <span>オンライン講座（実践）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-harmony">3.</span>
                      <span>伴走型開発支援</span>
                    </li>
                  </ol>
                </div>
                <div className="bg-harmony-lighter rounded-xl p-4">
                  <p className="text-sm font-semibold text-harmony mb-1">カスタマイズ可能</p>
                  <p className="text-sm text-depth-700">企業の課題に応じて最適化</p>
                </div>
              </div>
              <Link href="/corporate">
                <button className="w-full py-4 bg-harmony text-white font-medium rounded-xl hover:bg-harmony/90 transition-all duration-200 shadow-md hover:shadow-lg">
                  詳細を見る
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};