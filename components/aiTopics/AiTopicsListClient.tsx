'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import type { AiTopicArticle } from '@/types/ai-topic'

type AiTopicsListClientProps = {
  articles: AiTopicArticle[]
}

function formatDate(value: string): string {
  return new Date(value).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function AiTopicsListClient({ articles }: AiTopicsListClientProps) {
  const [selectedTag, setSelectedTag] = useState<string>('all')

  const allTags = useMemo(
    () =>
      [...new Set(articles.flatMap((article) => article.tags))].sort((a, b) => a.localeCompare(b, 'ja')),
    [articles]
  )

  const filteredArticles = useMemo(
    () =>
      articles.filter((article) => {
        if (selectedTag !== 'all' && !article.tags.includes(selectedTag)) {
          return false
        }

        return true
      }),
    [articles, selectedTag]
  )

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-gray-700">トピックタグ</span>
          <button
            type="button"
            onClick={() => setSelectedTag('all')}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              selectedTag === 'all'
                ? 'border-gray-900 bg-gray-900 text-white'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
            }`}
          >
            すべて
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                selectedTag === tag
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredArticles.map((article) => {
          return (
            <Link key={article.id} href={`/ai-topics/${article.id}`} className="group block">
              <article className="h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <Image
                    src={`/ai-topics/${article.id}/cover-image`}
                    alt={article.title}
                    width={2400}
                    height={1260}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600">
                    <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                  </div>

                  <h2 className="line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-will-primary">
                    {article.title}
                  </h2>
                  <p className="line-clamp-3 text-sm leading-relaxed text-gray-700">{article.summary}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {article.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="rounded-full bg-will-primary/10 px-2.5 py-1 text-xs text-will-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          )
        })}
      </div>

      {filteredArticles.length === 0 && (
        <p className="rounded-xl border border-dashed border-gray-300 bg-gray-50 px-6 py-8 text-center text-sm text-gray-600">
          条件に一致する記事はまだありません。
        </p>
      )}

      <section className="rounded-2xl border border-gray-200 bg-white p-5">
        <h2 className="text-sm font-bold text-gray-900">関連コンテンツ</h2>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <Link
            href="/academy/blog"
            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-gray-700 hover:border-gray-300 hover:text-gray-900"
          >
            /academy/blog AIリブートアカデミーブログ
          </Link>
          <Link
            href="/glossary"
            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-gray-700 hover:border-gray-300 hover:text-gray-900"
          >
            /glossary 生成AI用語集
          </Link>
        </div>
      </section>
    </div>
  )
}
