'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TrustSection() {
  const instructors = [
    {
      name: '山田 太郎',
      role: 'AI戦略コンサルタント',
      expertise: 'AI活用戦略・DX推進',
      image: '/images/instructor-1.jpg'
    },
    {
      name: '佐藤 花子',
      role: 'キャリアコーチ',
      expertise: 'キャリア設計・自己分析',
      image: '/images/instructor-2.jpg'
    },
    {
      name: '鈴木 一郎',
      role: 'テクニカルエキスパート',
      expertise: 'AI実装・プロンプト設計',
      image: '/images/instructor-3.jpg'
    }
  ]

  const testimonials = [
    {
      type: 'academy',
      quote: 'AIリブートアカデミーで、自分の本当にやりたいことが明確になりました。今は自分のWillに従って、新しいキャリアを歩んでいます。',
      author: 'アカデミー卒業生 A様',
      role: '元営業職 → AIプロダクトマネージャー'
    },
    {
      type: 'corporate',
      quote: '社員一人ひとりがAIを味方につけることで、組織全体の創造性が飛躍的に向上しました。売上も前年比150%を達成しています。',
      author: 'B社 代表取締役',
      role: 'IT関連企業'
    }
  ]

  const mediaLogos = [
    { name: '日経新聞', image: '/images/media-nikkei.png' },
    { name: 'Forbes Japan', image: '/images/media-forbes.png' },
    { name: 'NewsPicks', image: '/images/media-newspicks.png' }
  ]

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
              専門家チームと、変革を遂げた声
            </span>
          </h2>
        </motion.div>

        {/* 講師紹介 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-800">講師・コンサルタント</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{instructor.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{instructor.role}</p>
                <p className="text-xs text-gray-500">{instructor.expertise}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* お客様の声 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-800">お客様の声</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="mb-4">
                  <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8 space-x-4">
            <Link href="/academy#testimonials" className="text-will-primary hover:text-will-secondary transition-colors">
              アカデミー卒業生の声を見る →
            </Link>
            <Link href="/corporate#cases" className="text-will-secondary hover:text-will-tertiary transition-colors">
              法人導入事例を見る →
            </Link>
          </div>
        </motion.div>

        {/* メディア掲載 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-10 text-gray-800">メディア掲載・登壇実績</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {mediaLogos.map((media, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-600 text-sm font-medium">{media.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}