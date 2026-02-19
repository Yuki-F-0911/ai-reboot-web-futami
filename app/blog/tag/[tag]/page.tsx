import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import BlogListClient from '@/components/blog/BlogListClient'
import { getAllBlogArticles } from '@/lib/microcms-helper'
import { News } from '@/lib/microcms'

interface PageProps {
  params: Promise<{ tag: string }>
}

const siteUrl = 'https://ai-reboot.io'
const defaultOgImageUrl = `${siteUrl}/images/ogp-default.webp`

function safeDecodeURIComponent(value: string): string {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

export async function generateStaticParams() {
  const contents = await getAllBlogArticles()
  const tags = new Set<string>()

  for (const article of contents) {
    for (const tag of article.tags ?? []) {
      if (!tag) continue
      tags.add(tag)
    }
  }

  return [...tags].map((tag) => ({ tag: encodeURIComponent(tag) }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params
  const decoded = safeDecodeURIComponent(tag)
  const title = `#${decoded} | AIリブートジャーナル`
  const description = `「#${decoded}」に関する記事一覧です。`
  const canonicalUrl = `${siteUrl}/blog/tag/${encodeURIComponent(decoded)}`

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      siteName: 'AI REBOOT',
      images: [
        {
          url: defaultOgImageUrl,
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
      images: [defaultOgImageUrl],
    },
  }
}

export const revalidate = 60

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params
  const decoded = safeDecodeURIComponent(tag)

  if (!decoded) notFound()

  const contents = await getAllBlogArticles()
  const tagArticles = contents.filter((item: News) => (item.tags ?? []).includes(decoded))

  if (contents.length > 0 && tagArticles.length === 0) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white">
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-will-primary">
                  ホーム
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-will-primary">
                  ブログ
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium">#{decoded}</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">#{decoded}</h1>
          <p className="text-lg text-gray-600">「#{decoded}」に関する記事一覧</p>

          <div className="mt-4 text-sm text-gray-500">{tagArticles.length}件の記事があります</div>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {tagArticles.length === 0 ? (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">このタグには記事がありません</h2>
              <p className="text-gray-600 mb-6">MicroCMSで「{decoded}」タグの記事を作成してください。</p>
              <Link href="/blog" className="text-will-primary hover:underline">
                ← ブログトップに戻る
              </Link>
            </div>
          ) : (
            <BlogListClient initialArticles={tagArticles} showLoadMore={false} />
          )}
        </div>
      </section>
    </div>
  )
}

