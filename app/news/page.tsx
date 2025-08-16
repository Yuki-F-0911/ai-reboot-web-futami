import { getNewsArticles } from '@/lib/microcms-helper'
import NewsListClient from '@/components/news/NewsListClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お知らせ一覧 | AI REBOOT',
  description: 'AI REBOOTの最新情報、イベント情報、メディア掲載情報をお届けします。',
}

// ISR設定: 60秒ごとに再検証
export const revalidate = 60

export default async function NewsListPage() {
  // サーバーサイドでお知らせ記事のみ取得（ブログカテゴリーは除外）
  const { contents, totalCount } = await getNewsArticles(12, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* ヘッダー */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            お知らせ
          </h1>
          <p className="text-lg text-gray-600">
            AI REBOOTの最新情報をお届けします
          </p>
        </div>
      </section>

      {/* ニュース一覧 */}
      <NewsListClient 
        initialNews={contents} 
        totalCount={totalCount} 
      />
    </div>
  )
}