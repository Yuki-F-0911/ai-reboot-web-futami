'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function TrustResults() {
  const experts = [
    {
      name: '山田 太郎',
      title: 'AI戦略アドバイザー',
      expertise: 'AI戦略・キャリア設計',
      photo: '/images/expert1.jpg', // プレースホルダー
      achievements: '500名以上の個人キャリア支援'
    },
    {
      name: '佐藤 花子',
      title: 'キャリアデザイナー',
      expertise: 'キャリア理論・自己分析',
      photo: '/images/expert2.jpg',
      achievements: '1000名以上のキャリア転換支援'
    },
    {
      name: '鈴木 一郎',
      title: 'メンタルコーチ',
      expertise: '自己探求・目標設定',
      photo: '/images/expert3.jpg',
      achievements: '個人の変革プロセス設計の専門家'
    }
  ]

  const testimonials = [
    {
      name: 'T.K. さん',
      age: '34歳',
      role: '元営業職 → AIプロダクトマネージャー',
      beforeAfter: {
        before: 'AIに興味はあったが、何から始めればいいか分からない',
        after: '自分のWillから逆算してAIを学び、理想のキャリアを実現'
      },
      comment: '「なぜAIを学ぶのか」という問いから始まったことで、ブレない軸ができました。単なるスキル習得ではなく、自分の人生と向き合う100日間でした。',
      result: '年収150%UP + やりがいのある仕事'
    },
    {
      name: 'M.S. さん',
      age: '28歳',
      role: '元事務職 → データアナリスト',
      beforeAfter: {
        before: 'キャリアに漠然とした不安を感じていた',
        after: '自分の強みを活かしたAI活用で新しいキャリアを開拓'
      },
      comment: '同じ志を持つ仲間との出会いが何より財産です。一人では挫折していたかもしれない道のりも、仲間と共に乗り越えられました。',
      result: 'キャリアチェンジ成功 + 充実感のある毎日'
    },
    {
      name: 'Y.T. さん',
      age: '41歳',
      role: '元マーケター → AI事業責任者',
      beforeAfter: {
        before: 'AIの波に取り残される恐怖感',
        after: 'AIを味方につけて、新たな価値を創造'
      },
      comment: '40代からでも遅くないと証明できました。自分のこれまでの経験とAIを掛け合わせることで、誰にも真似できない価値を生み出せるようになりました。',
      result: '社内新規事業立ち上げ + 経営層への昇進'
    }
  ]

  const stats = [
    { label: '累計受講者数', value: '500+', unit: '名' },
    { label: '平均満足度', value: '4.8', unit: '/5.0' },
    { label: 'キャリア転換成功率', value: '92', unit: '%' },
    { label: '卒業生ネットワーク', value: '350+', unit: '名' }
  ]

  return (
    <section className="py-32 md:py-40 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 章タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
            第四章
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            先駆者たちの声
          </h2>
        </motion.div>

        {/* ヘッドライン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed">
            あなたの変革に伴走する<br className="md:hidden" />
            プロフェッショナルと、<br className="hidden md:block" />
            先駆者たちの声。
          </p>
        </motion.div>

        {/* 実績数値 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
                <span className="text-2xl md:text-3xl">{stat.unit}</span>
              </div>
              <div className="mt-2 text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* 専門家チーム */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            専門家チーム
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{expert.name}</h4>
                <p className="text-gray-600 mb-1">{expert.title}</p>
                <p className="text-sm text-gray-500 mb-2">{expert.expertise}</p>
                <p className="text-sm text-blue-600">{expert.achievements}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 卒業生の声 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            「自分と同じだ」と感じる、先駆者たちのストーリー
          </h3>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  {/* プロフィール */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonial.name} （{testimonial.age}）
                      </h4>
                      <p className="text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* ビフォーアフター */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-sm font-semibold text-gray-500 mb-2">BEFORE</p>
                      <p className="text-gray-700">{testimonial.beforeAfter.before}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-6">
                      <p className="text-sm font-semibold text-blue-600 mb-2">AFTER</p>
                      <p className="text-gray-700">{testimonial.beforeAfter.after}</p>
                    </div>
                  </div>

                  {/* コメント */}
                  <blockquote className="border-l-4 border-blue-500 pl-6 mb-6">
                    <p className="text-gray-700 italic text-lg leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                  </blockquote>

                  {/* 成果 */}
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">{testimonial.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}