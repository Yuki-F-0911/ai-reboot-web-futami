import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getNewsDetail, getNewsList, News } from '@/lib/microcms'
import NewsDetail from '@/components/news/NewsDetail'

interface PageProps {
  params: Promise<{ id: string }>
}

// メタデータ生成
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const news = await getNewsDetail(id)
  
  if (!news) {
    return {
      title: 'お知らせが見つかりません | AI REBOOT',
    }
  }

  return {
    title: `${news.title} | AI REBOOT`,
    description: news.description || news.title,
    openGraph: {
      title: news.title,
      description: news.description || news.title,
      images: news.thumbnail ? [news.thumbnail.url] : undefined,
    },
  }
}

// 静的パスの生成（ビルド時に事前生成）
export async function generateStaticParams() {
  const { contents } = await getNewsList(100, 0)
  
  return contents.map((news: News) => ({
    id: news.id,
  }))
}

// ISR設定: 60秒ごとに再検証
export const revalidate = 60

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params
  const news = await getNewsDetail(id)

  if (!news) {
    notFound()
  }

  // 関連記事を取得（同じカテゴリーの記事）
  const { contents: relatedNews } = await getNewsList(4, 0)
  const filteredRelated = relatedNews
    .filter((item: News) => item.id !== id && item.category === news.category)
    .slice(0, 3)

  return <NewsDetail news={news} relatedNews={filteredRelated} />
}