import { getBlogArticles } from '@/lib/microcms-helper'
import { getNewsList } from '@/lib/microcms'

export default async function BlogDebugPage() {
  // すべての記事を取得
  const allArticles = await getNewsList(100, 0)
  // ブログ記事のみ取得
  const blogArticles = await getBlogArticles(100, 0)
  
  // カテゴリー別に分類
  const categoryCounts: Record<string, number> = {}
  const categoryArticles: Record<string, any[]> = {}
  
  allArticles.contents.forEach((article: any) => {
    const category = article.category as string
    categoryCounts[category] = (categoryCounts[category] || 0) + 1
    
    if (!categoryArticles[category]) {
      categoryArticles[category] = []
    }
    categoryArticles[category].push({
      id: article.id,
      title: article.title,
      publishedAt: article.publishedAt
    })
  })
  
  // AIトレンド記事のフィルタリングテスト
  const aiTrendsTest1 = allArticles.contents.filter((item: any) => 
    item.category === 'AIトレンド'
  )
  const aiTrendsTest2 = allArticles.contents.filter((item: any) => 
    item.category === 'ai-trends'
  )
  const aiTrendsTest3 = blogArticles.contents.filter((item: any) => 
    item.category === 'AIトレンド' || item.category === 'ai-trends'
  )
  
  return (
    <div className="min-h-screen bg-white pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">ブログデバッグページ</h1>
        
        {/* 記事の総数 */}
        <div className="mb-8 p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-semibold mb-4">記事数</h2>
          <p>全記事数: {allArticles.totalCount}</p>
          <p>ブログ記事として認識: {blogArticles.contents.length}</p>
        </div>
        
        {/* カテゴリー別集計 */}
        <div className="mb-8 p-4 bg-blue-50 rounded">
          <h2 className="text-xl font-semibold mb-4">カテゴリー別記事数</h2>
          <div className="space-y-2">
            {Object.entries(categoryCounts).map(([category, count]) => (
              <div key={category} className="flex justify-between p-2 bg-white rounded">
                <span className="font-mono">"{category}"</span>
                <span>{count}件</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* AIトレンドのフィルタリングテスト */}
        <div className="mb-8 p-4 bg-yellow-50 rounded">
          <h2 className="text-xl font-semibold mb-4">AIトレンド記事のフィルタリングテスト</h2>
          <div className="space-y-2 text-sm">
            <p>category === 'AIトレンド': {aiTrendsTest1.length}件</p>
            <p>category === 'ai-trends': {aiTrendsTest2.length}件</p>
            <p>blogArticles内で両方チェック: {aiTrendsTest3.length}件</p>
          </div>
          
          {aiTrendsTest1.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold mb-2">「AIトレンド」カテゴリーの記事:</h3>
              <div className="space-y-1 text-sm">
                {aiTrendsTest1.map((article: any) => (
                  <div key={article.id} className="p-2 bg-white rounded">
                    {article.title}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* 各カテゴリーの記事詳細 */}
        <div className="mb-8 p-4 bg-green-50 rounded">
          <h2 className="text-xl font-semibold mb-4">カテゴリー別記事一覧</h2>
          {Object.entries(categoryArticles).map(([category, articles]) => (
            <div key={category} className="mb-6">
              <h3 className="font-semibold mb-2 bg-white p-2 rounded">
                カテゴリー: "{category}" ({articles.length}件)
              </h3>
              <div className="space-y-1 text-sm pl-4">
                {articles.slice(0, 3).map((article: any) => (
                  <div key={article.id} className="flex justify-between">
                    <span className="truncate flex-1">{article.title}</span>
                    <span className="text-gray-500 ml-2">
                      {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                    </span>
                  </div>
                ))}
                {articles.length > 3 && (
                  <p className="text-gray-500">...他{articles.length - 3}件</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* ブログページで使用しているフィルタリングロジックの確認 */}
        <div className="mb-8 p-4 bg-purple-50 rounded">
          <h2 className="text-xl font-semibold mb-4">ブログページのフィルタリングロジック</h2>
          <pre className="text-xs bg-white p-4 rounded overflow-x-auto">
{`// ブログページで使用中のコード:
const aiTrends = contents.filter(item => 
  item.category === 'AIトレンド' || item.category === 'ai-trends'
).slice(0, 6)

// 結果:
AIトレンド記事: ${blogArticles.contents.filter((item: any) => 
  item.category === 'AIトレンド' || item.category === 'ai-trends'
).length}件`}
          </pre>
        </div>
        
        {/* 生データサンプル */}
        <div className="mb-8 p-4 bg-red-50 rounded">
          <h2 className="text-xl font-semibold mb-4">記事の生データ（最初の3件）</h2>
          <pre className="text-xs bg-white p-4 rounded overflow-x-auto">
            {JSON.stringify(allArticles.contents.slice(0, 3).map((article: any) => ({
              id: article.id,
              title: article.title,
              category: article.category,
              categoryType: typeof article.category,
            })), null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}