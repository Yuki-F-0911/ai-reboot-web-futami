import Link from 'next/link'
import { glossaryTerms } from '@/data/glossary'
import type { AiTopicArticle } from '@/types/ai-topic'

type AiTopicsSidebarProps = {
  article: AiTopicArticle
  relatedArticles: AiTopicArticle[]
  popularTags: string[]
}

function formatDate(value: string): string {
  return new Date(value).toLocaleDateString('ja-JP', {
    month: 'numeric',
    day: 'numeric',
  })
}

function formatSlugLabel(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function getGlossaryLabel(slug: string): string {
  const term = glossaryTerms.find((item) => item.slug === slug)
  return term?.term ?? slug
}

export default function AiTopicsSidebar({ article, relatedArticles, popularTags }: AiTopicsSidebarProps) {
  const relatedBlogSlugs = article.relatedLinks?.blogSlugs ?? []
  const relatedGlossarySlugs = article.relatedLinks?.glossarySlugs ?? []

  return (
    <aside className="space-y-6">
      <section className="rounded-2xl border border-gray-200 bg-white p-5">
        <h2 className="mb-3 text-sm font-bold text-gray-900">関連記事</h2>
        <ul className="space-y-3 text-sm">
          {relatedArticles.map((related) => (
            <li key={related.id}>
              <Link href={`/ai-topics/${related.id}`} className="group block">
                <p className="line-clamp-2 font-medium text-gray-800 group-hover:text-will-primary">
                  {related.title}
                </p>
                <p className="mt-1 text-xs text-gray-500">{formatDate(related.publishedAt)}</p>
              </Link>
            </li>
          ))}
          {relatedArticles.length === 0 && <li className="text-xs text-gray-500">関連記事は準備中です。</li>}
        </ul>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5">
        <h2 className="mb-3 text-sm font-bold text-gray-900">人気タグ</h2>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5">
        <h2 className="mb-3 text-sm font-bold text-gray-900">次に読む</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          {relatedBlogSlugs.slice(0, 2).map((slug) => (
            <li key={slug}>
              <Link href={`/academy/blog/${slug}`} className="hover:text-will-primary">
                /academy/blog/{formatSlugLabel(slug)}
              </Link>
            </li>
          ))}
          {relatedGlossarySlugs.slice(0, 2).map((slug) => (
            <li key={slug}>
              <Link href={`/glossary/${slug}`} className="hover:text-will-primary">
                /glossary/{getGlossaryLabel(slug)}
              </Link>
            </li>
          ))}
          {relatedBlogSlugs.length === 0 && relatedGlossarySlugs.length === 0 && (
            <li className="text-xs text-gray-500">関連リンクは準備中です。</li>
          )}
        </ul>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <h2 className="mb-3 text-sm font-bold text-gray-900">固定導線</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>
            <Link href="/academy/blog" className="hover:text-will-primary">
              /academy/blog AIリブートアカデミーブログ
            </Link>
          </li>
          <li>
            <Link href="/glossary" className="hover:text-will-primary">
              /glossary 生成AI用語集
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  )
}
