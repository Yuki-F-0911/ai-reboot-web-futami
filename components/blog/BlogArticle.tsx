'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { News } from '@/lib/microcms'
import { marked } from 'marked'
import { ArticleStructuredData, BreadcrumbStructuredData } from '@/components/seo/StructuredData'

interface BlogArticleProps {
  article: News
  relatedArticles: News[]
  recommendedArticles: News[]
}

export default function BlogArticle({ 
  article, 
  relatedArticles,
  recommendedArticles 
}: BlogArticleProps) {
  const [htmlContent, setHtmlContent] = useState('')
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([])

  useEffect(() => {
    const processContent = async () => {
      if (article['md-content']) {
        // マークダウンを設定
        marked.setOptions({
          gfm: true,
          breaks: true,
        })
        
        // 見出しを抽出してTOCを生成
        const headings: { id: string; text: string; level: number }[] = []
        const renderer = new marked.Renderer()
        
        renderer.heading = ({ tokens, depth }) => {
          const text = tokens.map(token => token.raw).join('')
          const id = text.toLowerCase().replace(/[^\w]+/g, '-')
          headings.push({ id, text, level: depth })
          return `<h${depth} id="${id}">${text}</h${depth}>`
        }
        
        marked.use({ renderer })
        const html = await marked(article['md-content'])
        
        setHtmlContent(html)
        setToc(headings)
      } else {
        setHtmlContent(article.content)
      }
    }
    
    processContent()
  }, [article])

  // 読了時間の計算
  const calculateReadTime = (content: string) => {
    const text = content.replace(/<[^>]*>/g, '')
    const wordsPerMinute = 400 // 日本語の平均読書速度
    const minutes = Math.ceil(text.length / wordsPerMinute)
    return minutes
  }

  const readTime = calculateReadTime(htmlContent)

  return (
    <>
      {/* 構造化データ */}
      <ArticleStructuredData
        title={article.title}
        description={article.description || article.title}
        url={`https://ai-reboot.com/blog/${article.id}`}
        publishedTime={article.publishedAt}
        modifiedTime={article.updatedAt}
        imageUrl={article.thumbnail?.url}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'ホーム', url: 'https://ai-reboot.com' },
          { name: 'ブログ', url: 'https://ai-reboot.com/blog' },
          { name: article.title, url: `https://ai-reboot.com/blog/${article.id}` },
        ]}
      />

      <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* パンくずリスト */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-will-primary">ホーム</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-will-primary">ブログ</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium truncate max-w-xs">{article.title}</li>
            </ol>
          </nav>

          {/* タイトル部分 */}
          <header>
            <div className="flex items-center gap-3 mb-4">
              {article.category && (
                <span className="px-3 py-1 bg-will-primary/10 text-will-primary text-sm font-medium rounded-full">
                  {getCategoryLabel(typeof article.category === 'string' ? article.category : article.category[0])}
                </span>
              )}
              <time className="text-gray-500 text-sm">
                {new Date(article.publishedAt).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500 text-sm">{readTime}分で読了</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            {article.description && (
              <p className="text-lg text-gray-600 leading-relaxed">
                {article.description}
              </p>
            )}
          </header>

          {/* サムネイル画像 */}
          {article.thumbnail && (
            <div className="mt-8 -mx-4 md:mx-0">
              <img
                src={article.thumbnail.url}
                alt={article.title}
                className="w-full rounded-lg shadow-soft"
              />
            </div>
          )}
        </div>
      </section>

      {/* 本文とサイドバー */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,320px] gap-12">
            {/* メインコンテンツ */}
            <article className="max-w-4xl">
              <div 
                className="prose prose-lg prose-gray max-w-none
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-will-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 prose-strong:font-bold
                  prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                  prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                  prose-li:my-2 prose-li:text-gray-700
                  prose-blockquote:border-l-4 prose-blockquote:border-will-primary/30 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
                  prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
                  prose-img:rounded-lg prose-img:shadow-soft prose-img:my-8
                  prose-table:my-8 prose-table:w-full
                  prose-thead:border-b-2 prose-thead:border-gray-200
                  prose-th:text-left prose-th:font-bold prose-th:p-3
                  prose-td:p-3 prose-td:border-b prose-td:border-gray-100"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* タグ */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${tag}`}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* シェアボタン */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 font-medium">この記事をシェア:</span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        window.open(
                          `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`,
                          '_blank'
                        )
                      }}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                      aria-label="Twitterでシェア"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                          '_blank'
                        )
                      }}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                      aria-label="Facebookでシェア"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href)
                        alert('URLをコピーしました')
                      }}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                      aria-label="URLをコピー"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* サイドバー */}
            <aside className="lg:sticky lg:top-24 h-fit">
              {/* 目次 */}
              {toc.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="font-bold text-gray-900 mb-4">目次</h3>
                  <nav>
                    <ul className="space-y-2">
                      {toc.map((heading) => (
                        <li
                          key={heading.id}
                          style={{ paddingLeft: `${(heading.level - 1) * 1}rem` }}
                        >
                          <a
                            href={`#${heading.id}`}
                            className="text-sm text-gray-600 hover:text-will-primary transition-colors block py-1"
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}

              {/* おすすめ記事 */}
              {recommendedArticles.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
                  <h3 className="font-bold text-gray-900 mb-4">おすすめ記事</h3>
                  <div className="space-y-4">
                    {recommendedArticles.map((item) => (
                      <Link
                        key={item.id}
                        href={`/blog/${item.id}`}
                        className="block group"
                      >
                        <h4 className="text-sm font-medium text-gray-700 group-hover:text-will-primary transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                        <time className="text-xs text-gray-500 mt-1">
                          {new Date(item.publishedAt).toLocaleDateString('ja-JP')}
                        </time>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* ニュースレター登録 */}
              <div className="bg-gradient-to-br from-will-primary/10 to-will-secondary/10 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">ニュースレター</h3>
                <p className="text-sm text-gray-600 mb-4">
                  最新のAI情報をお届けします
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="メールアドレス"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-will-primary text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-will-primary text-white rounded-lg hover:bg-will-primary/90 transition-colors text-sm font-medium"
                  >
                    登録する
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      {relatedArticles.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">関連記事</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  href={`/blog/${item.id}`}
                  className="group"
                >
                  <article className="bg-white rounded-xl overflow-hidden shadow-subtle hover:shadow-soft transition-all duration-300">
                    {item.thumbnail && (
                      <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                        <img
                          src={item.thumbnail.url}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="font-medium text-gray-900 mb-2 group-hover:text-will-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <time className="text-sm text-gray-500">
                        {new Date(item.publishedAt).toLocaleDateString('ja-JP')}
                      </time>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
    </>
  )
}

function getCategoryLabel(category: string): string {
  // 日本語カテゴリーはそのまま返す
  const japaneseCategories = [
    '注目記事', 'AIトレンド', '活用事例', 'チュートリアル', 
    'プロンプト集', 'ツール紹介', 'ニュース', 'イベント', 
    'メディア掲載', 'お知らせ'
  ]
  if (japaneseCategories.includes(category)) {
    return category
  }
  
  // 英語カテゴリーは日本語に変換
  const labels: Record<string, string> = {
    'featured': '注目記事',
    'ai-trends': 'AIトレンド',
    'case-study': '活用事例',
    'tutorial': 'チュートリアル',
    'prompts': 'プロンプト集',
    'tools': 'ツール紹介',
    'news': 'ニュース',
    'event': 'イベント',
    'media': 'メディア掲載',
    'notice': 'お知らせ',
  }
  return labels[category] || category
}