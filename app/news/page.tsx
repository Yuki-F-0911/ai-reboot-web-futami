import { getNewsList } from '@/lib/microcms'
import NewsListClient from '@/components/news/NewsListClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お知らせ一覧 | AI REBOOT',
  description: 'AI REBOOTの最新情報、イベント情報、メディア掲載情報をお届けします。',
}

export default async function NewsListPage() {
  // サーバーサイドでニュース一覧を取得
  const { contents, totalCount } = await getNewsList(12, 0)

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