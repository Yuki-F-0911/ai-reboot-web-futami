import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getNewsArticles, getCategoryLabel } from '@/lib/microcms-helper'
import { NEWS_CATEGORY_MAP } from '@/lib/category-mapping'
import NewsListClient from '@/components/news/NewsListClient'
import Link from 'next/link'
import { categoryMatchesAny } from '@/lib/category-helper'

interface PageProps {
  params: Promise<{ slug: string }>
}

// カテゴリーのメタデータ
const categoryMetadata: Record<string, { title: string; description: string }> = {
  'news': {
    title: 'ニュース',
    description: 'AI REBOOTの最新ニュースや業界動向をお届けします。'
  },
  'event': {
    title: 'イベント',
    description: 'セミナー、ワークショップ、カンファレンスなどのイベント情報です。'
  },
  'media': {
    title: 'メディア掲載',
    description: 'メディアに掲載された記事や取材情報をご紹介します。'
  },
  'notice': {
    title: 'お知らせ',
    description: 'サービスアップデートや重要なお知らせです。'
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const meta = categoryMetadata[slug]
  
  if (!meta) {
    return {
      title: 'カテゴリーが見つかりません | AI REBOOT',
    }
  }
  
  return {
    title: `${meta.title} | AI REBOOT`,
    description: meta.description,
  }
}

// 静的パスの生成
export async function generateStaticParams() {
  // 英語のカテゴリーIDをパスとして使用
  return Object.values(NEWS_CATEGORY_MAP).map((categoryEn) => ({
    slug: categoryEn,
  }))
}

export default async function NewsCategoryPage({ params }: PageProps) {
  const { slug } = await params
  
  // 有効なカテゴリーか確認
  const validCategories = Object.values(NEWS_CATEGORY_MAP)
  if (!validCategories.includes(slug as typeof validCategories[number])) {
    notFound()
  }
  
  // すべてのお知らせ記事を取得
  const { contents } = await getNewsArticles(100, 0)
  
  // 日本語カテゴリー名を取得
  const categoryJa = Object.entries(NEWS_CATEGORY_MAP).find(
    ([, en]) => en === slug
  )?.[0] || slug
  
  // カテゴリーでフィルタリング（配列対応）
  const categoryArticles = contents.filter(item => 
    categoryMatchesAny(item.category, [categoryJa, slug])
  )
  
  const categoryLabel = getCategoryLabel(categoryJa)
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* ヘッダー */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* パンくずリスト */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-will-primary">ホーム</Link></li>
              <li>/</li>
              <li><Link href="/news" className="hover:text-will-primary">お知らせ</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">{categoryLabel}</li>
            </ol>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            {categoryLabel}
          </h1>
          <p className="text-lg text-gray-600">
            {categoryMetadata[slug]?.description}
          </p>
          
          <div className="mt-4 text-sm text-gray-500">
            {categoryArticles.length}件の記事があります
          </div>
        </div>
      </section>
      
      {/* 記事一覧 */}
      <section className="pb-20">
        {categoryArticles.length === 0 ? (
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                このカテゴリーには記事がありません
              </h2>
              <p className="text-gray-600 mb-6">
                MicroCMSで「{categoryLabel}」カテゴリーの記事を作成してください。
              </p>
              <Link href="/news" className="text-will-primary hover:underline">
                ← お知らせトップに戻る
              </Link>
            </div>
          </div>
        ) : (
          <NewsListClient 
            initialNews={categoryArticles}
            totalCount={categoryArticles.length}
          />
        )}
      </section>
    </div>
  )
}