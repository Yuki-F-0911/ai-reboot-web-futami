import { Metadata } from 'next'
import Link from 'next/link'
import { getNewsList } from '@/lib/microcms'

export const metadata: Metadata = {
  title: 'ブログ（テスト） | AI REBOOT',
  description: 'テスト用ページ - すべての記事を表示',
}

export default async function BlogTempPage() {
  // すべての記事を取得（フィルタリングなし）
  const { contents, totalCount } = await getNewsList(50, 0)
  
  return (
    <div className="min-h-screen bg-white pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">ブログ（テスト用 - 全記事表示）</h1>
        
        <div className="mb-8 p-4 bg-blue-50 rounded">
          <p className="text-sm">総記事数: {totalCount}</p>
          <p className="text-sm">表示記事数: {contents.length}</p>
        </div>

        {contents.length === 0 ? (
          <div className="p-8 bg-red-50 rounded">
            <p className="text-red-600">記事が見つかりません。MicroCMSに記事が登録されているか確認してください。</p>
          </div>
        ) : (
          <div className="space-y-6">
            {contents.map((article) => (
              <div key={article.id} className="border p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-xl font-semibold">{article.title}</h2>
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded">
                    カテゴリー: {article.category || '未設定'}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-2">{article.description}</p>
                
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>ID: {article.id}</span>
                  <span>公開日: {new Date(article.publishedAt).toLocaleDateString('ja-JP')}</span>
                </div>
                
                <div className="mt-4 flex gap-2">
                  <Link 
                    href={`/blog/${article.id}`}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    ブログとして表示
                  </Link>
                  <Link 
                    href={`/news/${article.id}`}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    お知らせとして表示
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}