import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import AiTopicArticle from '@/components/aiTopics/AiTopicArticle'
import AiTopicsSidebar from '@/components/aiTopics/AiTopicsSidebar'
import { BreadcrumbStructuredData, ArticleStructuredData } from '@/components/seo/StructuredData'
import { getAiTopicById, getAllAiTopics, getRelatedAiTopics } from '@/lib/ai-topics'

type AiTopicDetailPageProps = {
  params: Promise<{ id: string }>
}

const siteUrl = 'https://ai-reboot.io'

export const dynamicParams = false
export const revalidate = 3600

function getPopularTags(limit = 12): string[] {
  const tagCountMap = new Map<string, number>()

  for (const article of getAllAiTopics()) {
    for (const tag of article.tags) {
      tagCountMap.set(tag, (tagCountMap.get(tag) ?? 0) + 1)
    }
  }

  return [...tagCountMap.entries()]
    .sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1]
      return a[0].localeCompare(b[0], 'ja')
    })
    .slice(0, limit)
    .map(([tag]) => tag)
}

export async function generateMetadata({ params }: AiTopicDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const article = getAiTopicById(id)

  if (!article) {
    return {
      title: '記事が見つかりません | AI Topics',
    }
  }

  const canonicalUrl = `${siteUrl}/ai-topics/${id}`
  const title = article.seo?.ogTitle ?? `${article.title} | AI Topics`
  const description = article.seo?.ogDescription ?? article.summary

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: canonicalUrl,
      siteName: 'AI REBOOT',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export function generateStaticParams() {
  return getAllAiTopics().map((article) => ({
    id: article.id,
  }))
}

export default async function AiTopicDetailPage({ params }: AiTopicDetailPageProps) {
  const { id } = await params
  const article = getAiTopicById(id)

  if (!article) {
    notFound()
  }

  const articleUrl = `${siteUrl}/ai-topics/${article.id}`
  const articleImageUrl = `${siteUrl}/ai-topics/${article.id}/opengraph-image`
  const relatedArticles = getRelatedAiTopics(article, 4)
  const popularTags = getPopularTags(12)

  return (
    <>
      <ArticleStructuredData
        title={article.title}
        description={article.summary}
        url={articleUrl}
        publishedTime={article.publishedAt}
        modifiedTime={article.updatedAt}
        imageUrl={articleImageUrl}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'ホーム', url: siteUrl },
          { name: 'AI Topics', url: `${siteUrl}/ai-topics` },
          { name: article.title, url: articleUrl },
        ]}
      />

      <main className="min-h-screen bg-gradient-to-b from-white via-gray-50/40 to-white">
        <section className="px-4 pb-8 pt-28 sm:pt-32">
          <div className="mx-auto max-w-6xl">
            <nav aria-label="パンくず" className="mb-6 text-sm text-gray-600">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-gray-900">
                    ホーム
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/ai-topics" className="hover:text-gray-900">
                    AI Topics
                  </Link>
                </li>
                <li>/</li>
                <li className="line-clamp-1 text-gray-900">{article.title}</li>
              </ol>
            </nav>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
              <AiTopicArticle article={article} />
              <AiTopicsSidebar
                article={article}
                relatedArticles={relatedArticles}
                popularTags={popularTags}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
