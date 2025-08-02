'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function TrustResults() {
  const experts = [
    {
      name: '山田 太郎',
      title: 'AI戦略コンサルタント',
      expertise: 'AI戦略・DX推進',
      photo: '/images/expert1.jpg', // プレースホルダー
      achievements: '大手企業20社以上のAI導入支援'
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
      title: '組織開発スペシャリスト',
      expertise: '組織変革・人材育成',
      photo: '/images/expert3.jpg',
      achievements: '組織変革プロジェクト50件以上'
    }
  ]

  const testimonials = [
    {
      type: 'individual',
      name: 'T.K. さん',
      role: '元営業職 → AIプロダクトマネージャー',
      comment: '自分の「やりたいこと」から逆算してAIを学んだことで、明確な目標を持って転職できました。',
      result: '年収150%UP達成'
    },
    {
      type: 'corporate',
      company: '製造業A社',
      scale: '従業員300名',
      comment: '経営理念に基づいたAI活用で、単なる効率化を超えた新事業創出に成功しました。',
      result: '新規事業で売上20%増'
    }
  ]

  const stats = [
    { label: '累計受講者数', value: '500+', unit: '名' },
    { label: '企業導入実績', value: '50+', unit: '社' },
    { label: '平均満足度', value: '4.8', unit: '/5.0' },
    { label: '転職成功率', value: '92', unit: '%' }
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッドライン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            変革のプロフェッショナルと、
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              確かな実績。
            </span>
          </h2>
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

        {/* お客様の声 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            お客様の声・導入事例
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    testimonial.type === 'individual' 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500' 
                      : 'bg-gradient-to-br from-purple-500 to-pink-500'
                  }`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.type === 'individual' ? testimonial.name : testimonial.company}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.type === 'individual' ? testimonial.role : testimonial.scale}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-900">{testimonial.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}