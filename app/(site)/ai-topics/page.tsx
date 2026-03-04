import type { Metadata } from 'next'
import AiTopicsListClient from '@/components/aiTopics/AiTopicsListClient'
import { getAllAiTopics } from '@/lib/ai-topics'

const siteUrl = 'https://ai-reboot.io'
const defaultOgImagePath = '/opengraph-image'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const title = 'AI Topics | 生成AIトピックまとめ'
  const description =
    '生成AIの重要トピックを整理。業務活用、自己理解・キャリアデザイン、仲間と共に学ぶ実践の観点で、今押さえるべき論点をまとめます。'

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/ai-topics`,
      types: {
        'application/rss+xml': '/ai-topics/feed.xml',
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/ai-topics`,
      type: 'website',
      siteName: 'AI REBOOT',
      images: [
        {
          url: defaultOgImagePath,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [defaultOgImagePath],
    },
  }
}

export default function AiTopicsPage() {
  const articles = getAllAiTopics()

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50/40 to-white">
      <section className="px-4 pb-12 pt-28 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-5">
            <p className="inline-flex rounded-full bg-will-primary/10 px-3 py-1 text-xs font-semibold text-will-primary">
              AI TOPICS
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              生成AIトピックを、
              <br className="hidden sm:block" />
              実務に活かす視点で整理する
            </h1>
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              生成AI活用力を実務に接続し、自己理解・キャリアデザインを深め、仲間と共に学ぶ実践に落とし込むための要点をわかりやすくまとめています。
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-600">
              <span className="rounded-full bg-gray-100 px-3 py-1">記事数: {articles.length}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-6xl">
          <AiTopicsListClient articles={articles} />
        </div>
      </section>
    </main>
  )
}
