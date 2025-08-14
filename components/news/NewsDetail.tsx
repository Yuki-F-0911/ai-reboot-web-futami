'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Tag, ArrowLeft, ArrowRight, Share2 } from 'lucide-react'
import { News } from '@/lib/microcms'
import { format } from '@/utils/date'
import { marked } from 'marked'

interface NewsDetailProps {
  news: News
  relatedNews: News[]
}

const categoryColors: { [key: string]: string } = {
  '新着': 'from-will-primary/10 to-will-secondary/10 text-will-primary',
  'イベント': 'from-harmony/10 to-wisdom/10 text-harmony',
  'メディア': 'from-wisdom/10 to-will-secondary/10 text-wisdom',
  'お知らせ': 'from-depth-100 to-depth-200 text-depth-600'
}

export default function NewsDetail({ news, relatedNews }: NewsDetailProps) {
  // マークダウンをHTMLに変換（md-contentがある場合は優先的に使用）
  const contentHtml = useMemo(() => {
    if (news['md-content']) {
      // マークダウンの設定
      marked.setOptions({
        breaks: true,  // 改行を<br>に変換
        gfm: true,     // GitHub Flavored Markdown
      })
      return marked(news['md-content'])
    }
    // フォールバック：通常のHTMLコンテンツ
    return news.content
  }, [news])

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
    <div className="min-h-screen bg-gradient-to-b from-white via-depth-100/30 to-white">
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
              px-4 py-2 text-sm font-medium rounded-full shadow-sm
              bg-gradient-to-r ${categoryColors[news.category] || 'from-depth-100 to-depth-200 text-depth-700'}
            `}>
              {news.category}
            </span>
            <div className="flex items-center text-depth-500">
              <Calendar className="w-4 h-4 mr-1.5" />
              <time className="font-light">{format(news.publishedAt)}</time>
            </div>
          </div>

          {/* タイトル */}
          <h1 className="text-3xl md:text-5xl font-light text-depth-900 mb-8 leading-tight tracking-tight">
            {news.title}
          </h1>

          {/* シェアボタン */}
          <div className="flex items-center gap-4 pb-8 border-b border-depth-200">
            <button
              onClick={handleShare}
              className="group flex items-center gap-2 px-5 py-2.5 text-sm text-depth-600 hover:text-white 
                bg-white hover:bg-gradient-to-r hover:from-will-primary hover:to-will-secondary 
                border border-depth-200 hover:border-transparent rounded-full 
                shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <Share2 className="w-4 h-4" />
              <span className="font-medium">シェア</span>
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
            className="markdown-content max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* 戻るリンク */}
          <div className="mt-16 pt-8 border-t border-depth-200">
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-depth-500 hover:text-will-primary transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-light">お知らせ一覧に戻る</span>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* 関連記事 */}
      {relatedNews.length > 0 && (
        <section className="py-20 px-4 bg-gradient-to-b from-depth-100/50 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-depth-900 mb-3">
              関連するお知らせ
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-will-primary to-will-secondary rounded-full mb-12" />
            <div className="grid md:grid-cols-3 gap-6">
              {relatedNews.map((item) => (
                <Link key={item.id} href={`/news/${item.id}`}>
                  <article className="group h-full bg-white rounded-xl border border-depth-200 p-6 
                    hover:border-transparent hover:shadow-2xl hover:shadow-will-primary/10 
                    transition-all duration-500 relative overflow-hidden">
                    {/* ホバー時の背景グラデーション */}
                    <div className="absolute inset-0 bg-gradient-to-br from-will-lighter to-harmony-lighter 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`
                          px-3 py-1 text-xs font-medium rounded-full shadow-sm
                          bg-gradient-to-r ${categoryColors[item.category] || 'from-depth-100 to-depth-200 text-depth-600'}
                        `}>
                          {item.category}
                        </span>
                        <time className="text-sm text-depth-400 font-light">
                          {format(item.publishedAt)}
                        </time>
                      </div>
                      <h3 className="text-lg font-medium text-depth-800 line-clamp-2 
                        group-hover:bg-gradient-to-r group-hover:from-will-primary group-hover:to-will-secondary 
                        group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {item.title}
                      </h3>
                      <div className="mt-4 flex items-center text-sm text-will-primary 
                        group-hover:text-will-secondary transition-colors">
                        <span className="font-medium">続きを読む</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
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