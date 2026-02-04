'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Loader2 } from 'lucide-react'
import { News } from '@/lib/microcms'
import { format } from '@/utils/date'

interface NewsListClientProps {
  initialNews: News[]
  totalCount: number
}

const categoryColors: { [key: string]: string } = {
  '新着': 'bg-blue-100 text-blue-700',
  'イベント': 'bg-green-100 text-green-700',
  'メディア': 'bg-purple-100 text-purple-700',
  'お知らせ': 'bg-gray-100 text-gray-700'
}

export default function NewsListClient({ initialNews, totalCount }: NewsListClientProps) {
  const [news, setNews] = useState<News[]>(initialNews)
  const [loading, setLoading] = useState(false)
  const [offset, setOffset] = useState(12)
  const hasMore = offset < totalCount

  const loadMore = async () => {
    if (loading || !hasMore) return

    setLoading(true)
    try {
      const response = await fetch(`/api/news?limit=12&offset=${offset}`)
      const data = await response.json()
      
      setNews([...news, ...data.contents])
      setOffset(offset + 12)
    } catch (error) {
      console.error('Failed to load more news:', error)
    } finally {
      setLoading(false)
    }
  }

  if (news.length === 0) {
    return (
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">お知らせはまだありません。</p>
        </div>
      </section>
    )
  }

  return (
    <section className="pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* ニュースグリッド */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link href={`/news/${item.id}`}>
                <div className="group h-full bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* サムネイル画像（あれば） */}
                  {item.thumbnail && (
                    <div className="aspect-video overflow-hidden bg-gray-100 relative">
                      <Image
                        src={item.thumbnail.url}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* コンテンツ */}
                  <div className="p-6">
                    {/* カテゴリーと日付 */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`
                        px-2.5 py-1 text-xs font-medium rounded-full
                        ${categoryColors[typeof item.category === 'string' ? item.category : item.category[0]] || 'bg-gray-100 text-gray-700'}
                      `}>
                        {typeof item.category === 'string' ? item.category : item.category[0]}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        <time>{format(item.publishedAt)}</time>
                      </div>
                    </div>

                    {/* タイトル */}
                    <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-will-primary transition-colors">
                      {item.title}
                    </h3>

                    {/* 説明文（あれば） */}
                    {item.description && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                        {item.description}
                      </p>
                    )}

                    {/* 続きを読む */}
                    <div className="flex items-center text-sm text-will-primary group-hover:text-will-secondary transition-colors">
                      <span>続きを読む</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* もっと見るボタン */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              disabled={loading}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-300 rounded-lg hover:border-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  読み込み中...
                </>
              ) : (
                <>
                  もっと見る
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
