import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getNewsDetail, News } from '@/lib/microcms'
import { getBlogArticles, isBlogCategory } from '@/lib/microcms-helper'
import BlogArticle from '@/components/blog/BlogArticle'

interface PageProps {
  params: Promise<{ id: string }>
}

const siteUrl = 'https://ai-reboot.io'
const defaultOgImageUrl = `${siteUrl}/images/ogp-default.webp`
const maxDescriptionLength = 160

function toPlainText(input: string): string {
  return input
    .replace(/<[^>]*>/g, ' ')
    .replace(/!\[[^\]]*]\([^)]+\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*_>#-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function toSeoDescription(article: News): string {
  const candidates = [article.description, article['md-content'], article.content, article.title]

  for (const candidate of candidates) {
    if (!candidate) continue
    const plainText = toPlainText(candidate)
    if (!plainText) continue

    if (plainText.length <= maxDescriptionLength) {
      return plainText
    }

    return `${plainText.slice(0, maxDescriptionLength - 1).trimEnd()}…`
  }

  return article.title
}

// メタデータ生成（SEO最適化）
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const result = await getNewsDetail(id)
  
  if (!result || !('id' in result)) {
    return {
      title: '記事が見つかりません | AIリブート',
    }
  }

  const article = result as News
  const title = `${article.title} | AIリブート`
  const description = toSeoDescription(article)
  const imageUrl = article.thumbnail?.url ?? defaultOgImageUrl
  const canonicalUrl = `${siteUrl}/blog/${id}`
  const publishedTime = article.publishedAt
  const modifiedTime = article.updatedAt || article.publishedAt

  return {
    title,
    description,
    keywords: article.tags?.join(', ') || 'AI, 生成AI, ChatGPT, Claude, AI活用',
    authors: [{ name: 'AIリブート編集部' }],
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: ['AIリブート編集部'],
      url: canonicalUrl,
      siteName: 'AI REBOOT',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

// 静的パスの生成
export async function generateStaticParams() {
  const { contents } = await getBlogArticles(100, 0)
  
  // ブログカテゴリーの記事のみ
  return contents.map((article: News) => ({
    id: article.id,
  }))
}

// ISR設定: 60秒ごとに再検証
export const revalidate = 60

export default async function BlogArticlePage({ params }: PageProps) {
  const { id } = await params
  const result = await getNewsDetail(id)

  if (!result || !('id' in result)) {
    notFound()
  }

  const article = result as News

  // ブログカテゴリーの記事でない場合は404
  if (!isBlogCategory(article.category as string)) {
    notFound()
  }

  // 関連記事を取得（ブログ記事のみ）
  const { contents: allArticles } = await getBlogArticles(20, 0)
  
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
