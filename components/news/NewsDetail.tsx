'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Tag, ArrowLeft, ArrowRight, Share2 } from 'lucide-react'
import { News } from '@/lib/microcms'
import { format } from '@/utils/date'

interface NewsDetailProps {
  news: News
  relatedNews: News[]
}

const categoryColors: { [key: string]: string } = {
  '新着': 'bg-blue-100 text-blue-700',
  'イベント': 'bg-green-100 text-green-700',
  'メディア': 'bg-purple-100 text-purple-700',
  'お知らせ': 'bg-gray-100 text-gray-700'
}

export default function NewsDetail({ news, relatedNews }: NewsDetailProps) {
  const handleShare = async () => {
    const url = window.location.href
    
    // Web Share APIを試す
    if (navigator.share) {
      try {
        await navigator.share({
          title: news.title,
          text: news.description || news.title,
          url: url,
        })
        return
      } catch (error) {
        console.log('Share failed:', error)
      }
    }
    
    // Clipboard APIを試す
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(url)
        alert('URLをコピーしました')
        return
      } catch (error) {
        console.log('Clipboard write failed:', error)
      }
    }
    
    // 最終フォールバック：テキストエリアを使った古い方法
    const textArea = document.createElement('textarea')
    textArea.value = url
    textArea.style.position = 'fixed'
    textArea.style.left = '-999999px'
    textArea.style.top = '-999999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    
    try {
      document.execCommand('copy')
      alert('URLをコピーしました')
    } catch (error) {
      console.error('Copy failed:', error)
      alert('URLのコピーに失敗しました')
    } finally {
      document.body.removeChild(textArea)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-12 px-4"
      >
        <div className="max-w-4xl mx-auto">
          {/* パンくずリスト */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-gray-900">
              ホーム
            </Link>
            <span>/</span>
            <Link href="/news" className="hover:text-gray-900">
              お知らせ
            </Link>
            <span>/</span>
            <span className="text-gray-900">{news.title}</span>
          </nav>

          {/* カテゴリーと日付 */}
          <div className="flex items-center gap-4 mb-6">
            <span className={`
              px-3 py-1.5 text-sm font-medium rounded-full
              ${categoryColors[news.category] || 'bg-gray-100 text-gray-700'}
            `}>
              {news.category}
            </span>
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-1.5" />
              <time>{format(news.publishedAt)}</time>
            </div>
          </div>

          {/* タイトル */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {news.title}
          </h1>

          {/* シェアボタン */}
          <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              シェア
            </button>
          </div>
        </div>
      </motion.section>

      {/* メインコンテンツ */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pb-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          {/* サムネイル画像 */}
          {news.thumbnail && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={news.thumbnail.url}
                alt={news.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* 本文 */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-gray-900 
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-will-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900
              prose-ul:text-gray-700 prose-ol:text-gray-700
              prose-blockquote:text-gray-600 prose-blockquote:border-l-4 prose-blockquote:border-gray-300
              prose-img:rounded-lg
            "
            dangerouslySetInnerHTML={{ __html: news.content }}
          />

          {/* 戻るリンク */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              お知らせ一覧に戻る
            </Link>
          </div>
        </div>
      </motion.section>

      {/* 関連記事 */}
      {relatedNews.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              関連するお知らせ
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedNews.map((item) => (
                <Link key={item.id} href={`/news/${item.id}`}>
                  <article className="group bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`
                        px-2.5 py-1 text-xs font-medium rounded-full
                        ${categoryColors[item.category] || 'bg-gray-100 text-gray-700'}
                      `}>
                        {item.category}
                      </span>
                      <time className="text-sm text-gray-500">
                        {format(item.publishedAt)}
                      </time>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 line-clamp-2 group-hover:text-will-primary transition-colors">
                      {item.title}
                    </h3>
                    <div className="mt-4 flex items-center text-sm text-will-primary group-hover:text-will-secondary transition-colors">
                      <span>続きを読む</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}