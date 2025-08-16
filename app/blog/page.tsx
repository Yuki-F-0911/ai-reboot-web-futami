import { Metadata } from 'next'
import Link from 'next/link'
import { getBlogArticles } from '@/lib/microcms-helper'
import BlogListClient from '@/components/blog/BlogListClient'
import { categoryMatches, categoryMatchesAny } from '@/lib/category-helper'

export const metadata: Metadata = {
  title: 'AIリブートジャーナル | AI活用の最前線から',
  description: 'AI活用の実践的なノウハウ、成功事例、最新トレンドをお届けする、AIリブートのオウンドメディア。生成AI時代のビジネス変革について深く掘り下げます。',
  keywords: 'AI活用, 生成AI, ChatGPT, Claude, ビジネス変革, DX推進, AIリテラシー, プロンプトエンジニアリング, AI人材育成',
  openGraph: {
    title: 'AIリブートジャーナル | AI活用の最前線から',
    description: 'AI活用の実践的なノウハウ、成功事例、最新トレンドをお届けする、AIリブートのオウンドメディア。',
    type: 'website',
    siteName: 'AI REBOOT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIリブートジャーナル',
    description: 'AI活用の実践的なノウハウ、成功事例、最新トレンドをお届け',
  },
  alternates: {
    canonical: 'https://ai-reboot.com/blog',
    types: {
      'application/rss+xml': '/blog/feed.xml',
    },
  },
}

// ISR設定: 60秒ごとに再検証
export const revalidate = 60

export default async function BlogPage() {
  // ブログ記事のみを取得（お知らせカテゴリーは除外）
  const { contents } = await getBlogArticles(50, 0)
  
  // カテゴリー別に記事を分類（配列対応）
  const featuredArticles = contents.filter(item => 
    categoryMatchesAny(item.category, ['注目記事', 'featured'])
  ).slice(0, 3)
  const aiTrends = contents.filter(item => 
    categoryMatchesAny(item.category, ['AIトレンド', 'ai-trends'])
  ).slice(0, 6)
  const caseStudies = contents.filter(item => 
    categoryMatchesAny(item.category, ['活用事例', 'case-study'])
  ).slice(0, 4)
  const tutorials = contents.filter(item => 
    categoryMatchesAny(item.category, ['チュートリアル', 'tutorial'])
  ).slice(0, 4)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* ヒーローセクション */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-will-primary/5 via-transparent to-will-secondary/5" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              AI REBOOT
              <span className="block text-3xl md:text-4xl mt-2 text-will-primary">
                Journal
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              生成AI時代のビジネス変革を加速する、
              <br className="hidden md:block" />
              実践的なノウハウと最新情報をお届けします
            </p>
          </div>

          {/* カテゴリーナビゲーション */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { label: '注目記事', href: '/blog/category/featured', color: 'bg-yellow-500' },
              { label: 'AIトレンド', href: '/blog/category/ai-trends', color: 'bg-blue-500' },
              { label: '活用事例', href: '/blog/category/case-study', color: 'bg-green-500' },
              { label: 'チュートリアル', href: '/blog/category/tutorial', color: 'bg-purple-500' },
              { label: 'プロンプト集', href: '/blog/category/prompts', color: 'bg-orange-500' },
              { label: 'ツール紹介', href: '/blog/category/tools', color: 'bg-pink-500' },
            ].map((category) => (
              <Link
                key={category.label}
                href={category.href}
                className="px-5 py-2 rounded-full bg-white border border-gray-200 hover:border-will-primary hover:bg-will-primary/5 transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${category.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-will-primary">
                    {category.label}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 記事がない場合のメッセージ */}
      {contents.length === 0 && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                まだブログ記事がありません
              </h2>
              <p className="text-gray-600 mb-6">
                MicroCMSでブログカテゴリーの記事を作成してください。
              </p>
              <div className="text-left max-w-md mx-auto">
                <p className="text-sm text-gray-600 mb-2">ブログカテゴリー：</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>注目記事</li>
                  <li>AIトレンド</li>
                  <li>活用事例</li>
                  <li>チュートリアル</li>
                  <li>プロンプト集</li>
                  <li>ツール紹介</li>
                </ul>
              </div>
              <div className="mt-6">
                <Link href="/blog/temp" className="text-will-primary hover:underline">
                  → テストページで全記事を確認
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* すべての記事を表示（カテゴリー分けできない場合） */}
      {contents.length > 0 && featuredArticles.length === 0 && aiTrends.length === 0 && 
       caseStudies.length === 0 && tutorials.length === 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-light text-gray-900">
                最新記事
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent ml-8" />
            </div>
            
            <BlogListClient 
              initialArticles={contents}
              showLoadMore={contents.length >= 12}
            />
          </div>
        </section>
      )}

      {/* 注目記事 */}
      {featuredArticles.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-light text-gray-900">
                注目の記事
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent ml-8" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="group"
                >
                  <article className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                    {article.thumbnail && (
                      <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                        <img
                          src={article.thumbnail.url}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-will-primary/10 text-will-primary text-xs font-medium rounded-full">
                          注目
                        </span>
                        <time className="text-sm text-gray-500">
                          {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                        </time>
                      </div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-will-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3">
                        {article.description}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AIトレンド */}
      <section id="ai-trends" className="py-16 px-4 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-light text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-500 rounded-full" />
              AIトレンド
            </h2>
            <Link href="/blog/category/ai-trends" className="text-will-primary hover:underline text-sm">
              すべて見る →
            </Link>
          </div>

          <BlogListClient 
            initialArticles={aiTrends}
            category="ai-trends"
            showLoadMore={aiTrends.length >= 6}
          />
        </div>
      </section>

      {/* 活用事例 */}
      <section id="case-studies" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-light text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-green-500 rounded-full" />
              活用事例
            </h2>
            <Link href="/blog/category/case-study" className="text-will-primary hover:underline text-sm">
              すべて見る →
            </Link>
          </div>

          <BlogListClient 
            initialArticles={caseStudies}
            category="case-study"
            showLoadMore={caseStudies.length >= 4}
          />
        </div>
      </section>

      {/* チュートリアル */}
      <section id="tutorials" className="py-16 px-4 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-light text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-purple-500 rounded-full" />
              チュートリアル
            </h2>
            <Link href="/blog/category/tutorial" className="text-will-primary hover:underline text-sm">
              すべて見る →
            </Link>
          </div>

          <BlogListClient 
            initialArticles={tutorials}
            category="tutorial"
            showLoadMore={tutorials.length >= 4}
          />
        </div>
      </section>

      {/* ニュースレター登録 */}
      <section className="py-20 px-4 bg-gradient-to-br from-will-primary/5 via-transparent to-will-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            最新情報をお届けします
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            AI活用の最新トレンドや実践的なノウハウを
            <br className="hidden md:block" />
            メールでお届けします（週1回配信）
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="メールアドレス"
              className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-will-primary"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-will-primary text-white rounded-full hover:bg-will-primary/90 transition-colors font-medium"
            >
              登録する
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}