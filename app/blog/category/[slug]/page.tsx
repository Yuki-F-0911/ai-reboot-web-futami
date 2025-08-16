import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogArticles, getCategoryLabel } from '@/lib/microcms-helper'
import { BLOG_CATEGORY_MAP } from '@/lib/category-mapping'
import BlogListClient from '@/components/blog/BlogListClient'
import Link from 'next/link'
import { categoryMatchesAny } from '@/lib/category-helper'

interface PageProps {
  params: Promise<{ slug: string }>
}

// カテゴリーのメタデータ
const categoryMetadata: Record<string, { title: string; description: string }> = {
  'featured': {
    title: '注目記事',
    description: 'AI REBOOTが注目する最新のAI活用情報やトレンドをお届けします。'
  },
  'ai-trends': {
    title: 'AIトレンド',
    description: '生成AI、機械学習、ディープラーニングなど、AI技術の最新トレンドを解説します。'
  },
  'case-study': {
    title: '活用事例',
    description: '実際の企業でのAI活用事例や成功ストーリーを紹介します。'
  },
  'tutorial': {
    title: 'チュートリアル',
    description: 'AI技術の使い方やプロンプトエンジニアリングの実践的なチュートリアルです。'
  },
  'prompts': {
    title: 'プロンプト集',
    description: 'ChatGPTやClaudeなどの生成AIで使える効果的なプロンプトを紹介します。'
  },
  'tools': {
    title: 'ツール紹介',
    description: 'AI開発や活用に役立つツール、サービス、プラットフォームを紹介します。'
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const meta = categoryMetadata[slug]
  
  if (!meta) {
    return {
      title: 'カテゴリーが見つかりません | AIリブートジャーナル',
    }
  }
  
  return {
    title: `${meta.title} | AIリブートジャーナル`,
    description: meta.description,
  }
}

// 静的パスの生成
export async function generateStaticParams() {
  // 英語のカテゴリーIDをパスとして使用
  return Object.values(BLOG_CATEGORY_MAP).map((categoryEn) => ({
    slug: categoryEn,
  }))
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  
  // 有効なカテゴリーか確認
  const validCategories = Object.values(BLOG_CATEGORY_MAP)
  if (!validCategories.includes(slug as typeof validCategories[number])) {
    notFound()
  }
  
  // すべてのブログ記事を取得
  const { contents } = await getBlogArticles(100, 0)
  
  // 日本語カテゴリー名を取得
  const categoryJa = Object.entries(BLOG_CATEGORY_MAP).find(
    ([, en]) => en === slug
  )?.[0] || slug
  
  // カテゴリーでフィルタリング（配列対応）
  const categoryArticles = contents.filter(item => 
    categoryMatchesAny(item.category, [categoryJa, slug])
  )
  
  const categoryLabel = getCategoryLabel(categoryJa)
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* ヘッダー */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* パンくずリスト */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-will-primary">ホーム</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-will-primary">ブログ</Link></li>
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
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {categoryArticles.length === 0 ? (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                このカテゴリーには記事がありません
              </h2>
              <p className="text-gray-600 mb-6">
                MicroCMSで「{categoryLabel}」カテゴリーの記事を作成してください。
              </p>
              <Link href="/blog" className="text-will-primary hover:underline">
                ← ブログトップに戻る
              </Link>
            </div>
          ) : (
            <BlogListClient 
              initialArticles={categoryArticles}
              showLoadMore={false}
            />
          )}
        </div>
      </section>
    </div>
  )
}