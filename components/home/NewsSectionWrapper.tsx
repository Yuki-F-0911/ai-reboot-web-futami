import React from 'react'
import dynamic from 'next/dynamic'

// サーバーコンポーネントを動的インポート（SSRのみ）
const NewsSection = dynamic(
  () => import('./NewsSection'),
  { 
    ssr: true,
    loading: () => (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-2">
              お知らせ
            </h2>
            <div className="w-12 h-px bg-gray-300" />
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="py-4 border-b border-gray-100">
                <div className="h-5 bg-gray-100 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
)

export default function NewsSectionWrapper() {
  return <NewsSection />
}