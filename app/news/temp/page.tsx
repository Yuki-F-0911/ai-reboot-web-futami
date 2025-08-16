import { Metadata } from 'next'
import { getNewsList } from '@/lib/microcms'
import { isBlogCategory, isNewsCategory, getCategoryLabel } from '@/lib/microcms-helper'

export const metadata: Metadata = {
  title: 'お知らせ（テスト） | AI REBOOT',
  description: 'テスト用ページ - カテゴリー分析',
}

export default async function NewsTempPage() {
  // すべての記事を取得
  const { contents, totalCount } = await getNewsList(100, 0)
  
  // カテゴリー別に分析
  const categoryCounts: Record<string, number> = {}
  const blogArticles = []
  const newsArticles = []
  const unknownArticles = []
  
  for (const article of contents) {
    const category = article.category as string
    categoryCounts[category] = (categoryCounts[category] || 0) + 1
    
    if (isBlogCategory(category)) {
      blogArticles.push(article)
    } else if (isNewsCategory(category)) {
      newsArticles.push(article)
    } else {
      unknownArticles.push(article)
    }
  }
  
  return (
    <div className="min-h-screen bg-white pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">カテゴリー分析（テスト用）</h1>
        
        {/* サマリー */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-gray-100 rounded">
            <p className="text-sm text-gray-600">総記事数</p>
            <p className="text-2xl font-bold">{totalCount}</p>
          </div>
          <div className="p-4 bg-blue-100 rounded">
            <p className="text-sm text-gray-600">ブログ記事</p>
            <p className="text-2xl font-bold">{blogArticles.length}</p>
          </div>
          <div className="p-4 bg-green-100 rounded">
            <p className="text-sm text-gray-600">お知らせ記事</p>
            <p className="text-2xl font-bold">{newsArticles.length}</p>
          </div>
          <div className="p-4 bg-red-100 rounded">
            <p className="text-sm text-gray-600">不明なカテゴリー</p>
            <p className="text-2xl font-bold">{unknownArticles.length}</p>
          </div>
        </div>

        {/* カテゴリー別集計 */}
        <div className="mb-8 p-4 bg-gray-50 rounded">
          <h2 className="text-xl font-semibold mb-4">カテゴリー別集計</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {Object.entries(categoryCounts).map(([category, count]) => (
              <div key={category} className="p-2 bg-white rounded border">
                <p className="font-medium">{category || '未設定'}</p>
                <p className="text-sm text-gray-600">{count}件</p>
                <p className="text-xs text-gray-500">
                  {isBlogCategory(category) ? '→ ブログ' : 
                   isNewsCategory(category) ? '→ お知らせ' : 
                   '→ 不明'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ブログ記事 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">ブログカテゴリーの記事（{blogArticles.length}件）</h2>
          {blogArticles.length === 0 ? (
            <p className="text-red-500">ブログカテゴリーの記事がありません</p>
          ) : (
            <div className="space-y-2">
              {blogArticles.slice(0, 5).map((article) => (
                <div key={article.id} className="p-3 bg-blue-50 rounded">
                  <p className="font-medium">{article.title}</p>
                  <p className="text-sm text-gray-600">
                    カテゴリー: {article.category} ({getCategoryLabel(article.category)})
                  </p>
                </div>
              ))}
              {blogArticles.length > 5 && (
                <p className="text-sm text-gray-500">他 {blogArticles.length - 5} 件</p>
              )}
            </div>
          )}
        </div>

        {/* お知らせ記事 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">お知らせカテゴリーの記事（{newsArticles.length}件）</h2>
          {newsArticles.length === 0 ? (
            <p className="text-red-500">お知らせカテゴリーの記事がありません</p>
          ) : (
            <div className="space-y-2">
              {newsArticles.slice(0, 5).map((article) => (
                <div key={article.id} className="p-3 bg-green-50 rounded">
                  <p className="font-medium">{article.title}</p>
                  <p className="text-sm text-gray-600">
                    カテゴリー: {article.category} ({getCategoryLabel(article.category)})
                  </p>
                </div>
              ))}
              {newsArticles.length > 5 && (
                <p className="text-sm text-gray-500">他 {newsArticles.length - 5} 件</p>
              )}
            </div>
          )}
        </div>

        {/* 不明なカテゴリーの記事 */}
        {unknownArticles.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-red-600">
              不明なカテゴリーの記事（{unknownArticles.length}件）
            </h2>
            <p className="text-sm text-red-500 mb-4">
              これらの記事はブログにもお知らせにも表示されません。カテゴリーを修正してください。
            </p>
            <div className="space-y-2">
              {unknownArticles.map((article) => (
                <div key={article.id} className="p-3 bg-red-50 rounded">
                  <p className="font-medium">{article.title}</p>
                  <p className="text-sm text-red-600">
                    カテゴリー: &quot;{article.category || '未設定'}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* カテゴリー設定ガイド */}
        <div className="mt-8 p-4 bg-yellow-50 rounded">
          <h3 className="font-semibold mb-2">📝 MicroCMSでのカテゴリー設定</h3>
          <p className="text-sm mb-2">以下のカテゴリー値を正確に設定してください：</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium mb-1">ブログカテゴリー:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>featured - 注目</li>
                <li>ai-trends - AIトレンド</li>
                <li>case-study - 活用事例</li>
                <li>tutorial - チュートリアル</li>
                <li>prompts - プロンプト</li>
                <li>tools - ツール</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-1">お知らせカテゴリー:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>news - ニュース</li>
                <li>event - イベント</li>
                <li>media - メディア掲載</li>
                <li>notice - お知らせ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}