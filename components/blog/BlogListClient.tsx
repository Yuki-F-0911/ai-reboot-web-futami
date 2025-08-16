'use client'

import { useState } from 'react'
import Link from 'next/link'
import { News } from '@/lib/microcms'

interface BlogListClientProps {
  initialArticles: News[]
  category?: string
  showLoadMore?: boolean
}

export default function BlogListClient({ 
  initialArticles, 
  category,
  showLoadMore = false 
}: BlogListClientProps) {
  const [articles, setArticles] = useState(initialArticles)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(showLoadMore)

  const loadMore = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/blog?category=${category}&offset=${articles.length}`)
      const data = await response.json()
      
      if (data.contents.length > 0) {
        setArticles([...articles, ...data.contents])
        setHasMore(data.contents.length === 6)
      } else {
        setHasMore(false)
      }
    } catch (error) {
      console.error('Failed to load more articles:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.id}`}
            className="group"
          >
            <article className="h-full bg-white rounded-xl overflow-hidden shadow-subtle hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5">
              {article.thumbnail && (
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={article.thumbnail.url}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  {article.category && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                      {getCategoryLabel(article.category)}
                    </span>
                  )}
                  <time className="text-xs text-gray-500">
                    {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                  </time>
                </div>
                <h3 className="font-medium text-gray-900 mb-2 group-hover:text-will-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {article.description}
                </p>
                <div className="mt-3 text-will-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  続きを読む →
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 text-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-8 py-3 bg-white border border-gray-200 rounded-full hover:border-will-primary hover:bg-will-primary/5 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                読み込み中...
              </span>
            ) : (
              'もっと見る'
            )}
          </button>
        </div>
      )}
    </>
  )
}

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    'ai-trends': 'AIトレンド',
    'case-study': '活用事例',
    'tutorial': 'チュートリアル',
    'prompts': 'プロンプト',
    'tools': 'ツール',
    'featured': '注目',
    'news': 'ニュース',
    'event': 'イベント',
  }
  return labels[category] || category
}