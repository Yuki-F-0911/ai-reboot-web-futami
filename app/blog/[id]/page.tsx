import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getNewsDetail, getNewsList, News } from '@/lib/microcms'
import BlogArticle from '@/components/blog/BlogArticle'

interface PageProps {
  params: Promise<{ id: string }>
}

// メタデータ生成（SEO最適化）
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const article = await getNewsDetail(id)
  
  if (!article) {
    return {
      title: '記事が見つかりません | AIリブートジャーナル',
    }
  }

  const publishedTime = article.publishedAt
  const modifiedTime = article.updatedAt || article.publishedAt

  return {
    title: `${article.title} | AIリブートジャーナル`,
    description: article.description || article.title,
    keywords: article.tags?.join(', ') || 'AI, 生成AI, ChatGPT, Claude, AI活用',
    authors: [{ name: 'AI REBOOT編集部' }],
    openGraph: {
      title: article.title,
      description: article.description || article.title,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: ['AI REBOOT編集部'],
      images: article.thumbnail ? [
        {
          url: article.thumbnail.url,
          width: 1200,
          height: 630,
          alt: article.title,
        }
      ] : undefined,
      siteName: 'AIリブートジャーナル',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description || article.title,
      images: article.thumbnail ? [article.thumbnail.url] : undefined,
    },
    alternates: {
      canonical: `https://ai-reboot.com/blog/${id}`,
    },
  }
}

// 静的パスの生成
export async function generateStaticParams() {
  const { contents } = await getNewsList(100, 0)
  
  return contents.map((article: News) => ({
    id: article.id,
  }))
}

// ISR設定: 60秒ごとに再検証
export const revalidate = 60

export default async function BlogArticlePage({ params }: PageProps) {
  const { id } = await params
  const article = await getNewsDetail(id)

  if (!article) {
    notFound()
  }

  // 関連記事を取得
  const { contents: allArticles } = await getNewsList(20, 0)
  
  // 同じカテゴリーの記事を優先
  const relatedArticles = allArticles
    .filter((item: News) => item.id !== id)
    .sort((a: News, b: News) => {
      // 同じカテゴリーを優先
      if (a.category === article.category && b.category !== article.category) return -1
      if (a.category !== article.category && b.category === article.category) return 1
      // 公開日の新しい順
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })
    .slice(0, 6)

  // おすすめ記事（人気記事や注目記事）
  const recommendedArticles = allArticles
    .filter((item: News) => item.category === 'featured' && item.id !== id)
    .slice(0, 3)

  return (
    <>
      <BlogArticle 
        article={article} 
        relatedArticles={relatedArticles}
        recommendedArticles={recommendedArticles}
      />
    </>
  )
}