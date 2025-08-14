'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Calendar, ArrowUpRight } from 'lucide-react'
import { format } from '@/utils/date'

interface NewsItem {
  id: string
  publishedAt: string
  category: string
  title: string
}

const categoryColors: { [key: string]: string } = {
  '新着': 'bg-blue-100 text-blue-700',
  'イベント': 'bg-green-100 text-green-700',
  'メディア': 'bg-purple-100 text-purple-700',
  'お知らせ': 'bg-gray-100 text-gray-700'
}

// 仮のデータ（microCMSが設定されるまで使用）
const fallbackNews: NewsItem[] = [
  {
    id: '1',
    publishedAt: '2025-01-14',
    category: '新着',
    title: '経済産業省リスキリング補助金の採択が決定しました'
  },
  {
    id: '2',
    publishedAt: '2025-01-10',
    category: 'イベント',
    title: '無料説明会を開催します（1/25 オンライン）'
  },
  {
    id: '3',
    publishedAt: '2025-01-05',
    category: 'メディア',
    title: '日経新聞「AI人材育成の最前線」に掲載されました'
  }
]

export default function NewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // クライアントサイドでニュースを取得
    fetch('/api/news?limit=3')
      .then(res => res.json())
      .then(data => {
        if (data.contents && data.contents.length > 0) {
          setNewsItems(data.contents)
        } else {
          // microCMSからデータが取得できない場合は仮データを使用
          setNewsItems(fallbackNews)
        }
      })
      .catch(error => {
        console.error('Failed to fetch news:', error)
        setNewsItems(fallbackNews)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-2">お知らせ</h2>
            <div className="w-12 h-px bg-gray-300" />
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="py-4 border-b border-gray-100">
                <div className="h-5 bg-gray-100 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (newsItems.length === 0) {
    return null
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* セクションタイトル（シンプルに） */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-light text-gray-900 mb-2">
            お知らせ
          </h2>
          <div className="w-12 h-px bg-gray-300" />
        </motion.div>

        {/* ニュースリスト */}
        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/news/${item.id}`}>
                <div className="group py-4 border-b border-gray-100 hover:border-gray-300 transition-colors duration-300">
                  <div className="flex items-start justify-between gap-4">
                    {/* 左側：日付とカテゴリー */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        <time className="text-sm">{format(item.publishedAt)}</time>
                      </div>
                      <span className={`
                        px-2 py-0.5 text-xs rounded-full
                        ${categoryColors[item.category] || 'bg-gray-100 text-gray-700'}
                      `}>
                        {item.category}
                      </span>
                    </div>

                    {/* 中央：タイトル */}
                    <div className="flex-grow">
                      <h3 className="text-gray-800 group-hover:text-gray-900 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>

                    {/* 右側：矢印アイコン */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* すべて見るリンク（控えめ） */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <Link href="/news" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors">
            <span>すべてのお知らせを見る</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}