'use client'

import { useState, useEffect } from 'react'

export default function DebugPage() {
  const [data, setData] = useState<Record<string, unknown> | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/debug')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json()
      })
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="p-8">Loading...</div>
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Debug: MicroCMS データ確認</h1>
        
        {/* サマリー */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">サマリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-600">全記事数</p>
              <p className="text-2xl font-bold">{data?.summary?.totalArticles || 0}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">ブログ記事</p>
              <p className="text-2xl font-bold">{data?.summary?.blogArticlesFound || 0}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">お知らせ記事</p>
              <p className="text-2xl font-bold">{data?.summary?.newsArticlesFound || 0}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">カテゴリー数</p>
              <p className="text-2xl font-bold">{Object.keys(data?.summary?.categoryCounts || {}).length}</p>
            </div>
          </div>
        </div>

        {/* カテゴリー分析 */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">カテゴリー別集計</h2>
          <div className="space-y-2">
            {Object.entries(data?.summary?.categoryCounts || {}).map(([category, count]) => (
              <div key={category} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="font-medium">{category}</span>
                <span className="text-gray-600">{count as number}件</span>
              </div>
            ))}
          </div>
        </div>

        {/* カテゴリー分析詳細 */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">記事カテゴリー分析（最初の10件）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">ID</th>
                  <th className="text-left p-2">タイトル</th>
                  <th className="text-left p-2">カテゴリー</th>
                  <th className="text-center p-2">ブログ？</th>
                  <th className="text-center p-2">お知らせ？</th>
                </tr>
              </thead>
              <tbody>
                {data?.categoryAnalysis?.map((item: Record<string, unknown>) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-2 font-mono text-xs">{item.id}</td>
                    <td className="p-2">{item.title}</td>
                    <td className="p-2">
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                        {item.category}
                      </span>
                    </td>
                    <td className="text-center p-2">
                      {item.isBlog ? '✅' : '❌'}
                    </td>
                    <td className="text-center p-2">
                      {item.isNews ? '✅' : '❌'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 全記事サンプル */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">全記事（最初の5件）</h2>
          <pre className="bg-gray-50 p-4 rounded overflow-x-auto text-xs">
            {JSON.stringify(data?.allArticles?.items || [], null, 2)}
          </pre>
        </div>

        {/* ブログ記事サンプル */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">ブログ記事（最初の3件）</h2>
          {data?.blogArticles?.count === 0 ? (
            <p className="text-red-500">ブログカテゴリーの記事が見つかりません</p>
          ) : (
            <pre className="bg-gray-50 p-4 rounded overflow-x-auto text-xs">
              {JSON.stringify(data?.blogArticles?.items || [], null, 2)}
            </pre>
          )}
        </div>

        {/* お知らせ記事サンプル */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">お知らせ記事（最初の3件）</h2>
          {data?.newsArticles?.count === 0 ? (
            <p className="text-red-500">お知らせカテゴリーの記事が見つかりません</p>
          ) : (
            <pre className="bg-gray-50 p-4 rounded overflow-x-auto text-xs">
              {JSON.stringify(data?.newsArticles?.items || [], null, 2)}
            </pre>
          )}
        </div>
      </div>
    </div>
  )
}