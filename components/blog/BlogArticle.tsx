import Link from 'next/link'
import Image from 'next/image'
import { News } from '@/lib/microcms'
import { Marked, Tokens } from 'marked'
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from '@/components/seo/StructuredData'
import ArticleShareButtons from '@/components/blog/ArticleShareButtons'
import CopyAsMarkdownButton from '@/components/blog/CopyAsMarkdownButton'
import { renderReadableJapaneseText } from '@/components/typography/ReadableText'

interface BlogArticleProps {
  article: News
  relatedArticles: News[]
  recommendedArticles: News[]
}

const siteUrl = 'https://ai-reboot.io'
const defaultArticleImageUrl = `${siteUrl}/images/ogp-default.webp`

type TocItem = {
  id: string
  text: string
  level: number
}

function buildHeadingId(rawText: string, index: number, usedIds: Map<string, number>): string {
  const base = rawText
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

  const fallbackId = `section-${index + 1}`
  const safeBase = base || fallbackId
  const count = usedIds.get(safeBase) ?? 0
  usedIds.set(safeBase, count + 1)

  return count === 0 ? safeBase : `${safeBase}-${count + 1}`
}

async function renderContent(article: News): Promise<{ htmlContent: string; toc: TocItem[] }> {
  if (!article['md-content']) {
    return { htmlContent: article.content, toc: [] }
  }

  const toc: TocItem[] = []
  const usedIds = new Map<string, number>()
  const marked = new Marked({
    gfm: true,
    breaks: true,
  })
  const renderer = new marked.Renderer()

  renderer.heading = ({ tokens, depth }) => {
    const text = tokens.map((token: Tokens.Generic) => token.raw).join('')
    const id = buildHeadingId(text, toc.length, usedIds)

    toc.push({
      id,
      text,
      level: depth,
    })

    return `<h${depth} id="${id}">${text}</h${depth}>`
  }

  marked.use({ renderer })
  const parsed = marked.parse(article['md-content'])
  const htmlContentRaw = typeof parsed === 'string' ? parsed : await parsed
  const htmlContent = htmlContentRaw.replace(/<img\\b([^>]*)>/g, (_match, attrs: string) => {
    const hasLoading = /\\sloading=/.test(attrs)
    const hasDecoding = /\\sdecoding=/.test(attrs)
    const nextAttrs = `${attrs}${hasLoading ? '' : ' loading="lazy"'}${hasDecoding ? '' : ' decoding="async"'}`
    return `<img${nextAttrs}>`
  })

  return { htmlContent, toc }
}

function calculateReadTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, '')
  const charsPerMinute = 400
  return Math.max(1, Math.ceil(text.length / charsPerMinute))
}

function toPlainText(input: string): string {
  return input
    .replace(/<[^>]*>/g, ' ')
    .replace(/!\[[^\]]*]\([^)]+\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*_>#-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function extractFaqItemsFromMarkdown(markdown?: string): Array<{ question: string; answer: string }> {
  if (!markdown) return []

  const lines = markdown.split('\n')
  const faqHeadingRegex = /^#{2,6}\s*(faq|ｆａｑ|よくある質問|よくあるご質問)(\s|$)/i

  let startIndex = -1
  let startHeadingLevel = 0

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim()
    if (!faqHeadingRegex.test(line)) continue

    const m = line.match(/^(#{2,6})\s+/)
    startHeadingLevel = m?.[1]?.length ?? 2
    startIndex = i + 1
    break
  }

  if (startIndex < 0) return []

  let endIndex = lines.length
  for (let i = startIndex; i < lines.length; i += 1) {
    const line = lines[i].trim()
    const headingMatch = line.match(/^(#{1,6})\s+/)
    if (!headingMatch) continue
    const level = headingMatch[1].length
    if (level <= startHeadingLevel) {
      endIndex = i
      break
    }
  }

  const sectionLines = lines.slice(startIndex, endIndex)
  const sectionText = sectionLines.join('\n').trim()
  if (!sectionText) return []

  const items: Array<{ question: string; answer: string }> = []
  let currentQuestion: string | null = null
  let currentAnswerLines: string[] = []

  const flush = () => {
    if (!currentQuestion) return
    const question = toPlainText(currentQuestion)
    const answer = toPlainText(currentAnswerLines.join('\n'))
    if (!question || !answer) {
      currentQuestion = null
      currentAnswerLines = []
      return
    }
    items.push({ question, answer })
    currentQuestion = null
    currentAnswerLines = []
  }

  const questionHeadingRegex = /^#{3,6}\s*(?:q(?:\d+)?[.：:]?\s*)?(.+)\s*$|^[-*]?\s*\*\*\s*q(?:\d+)?[.：:]?\s*(.+?)\s*\*\*\s*$/i
  const questionLineRegex = /^[-*]?\s*(?:q(?:\d+)?[.：:]|\*\*q(?:\d+)?[.：:]\*\*)\s*(.+)\s*$/i
  const answerLineRegex = /^[-*]?\s*(?:a[.：:]|\*\*a[.：:]\*\*)\s*(.+)\s*$/i

  for (const rawLine of sectionLines) {
    const line = rawLine.trim()
    if (!line) {
      if (currentQuestion) currentAnswerLines.push('')
      continue
    }

    const headingMatch = line.match(questionHeadingRegex)
    if (headingMatch) {
      flush()
      currentQuestion = (headingMatch[1] ?? headingMatch[2] ?? '').trim()
      continue
    }

    const questionMatch = line.match(questionLineRegex)
    if (questionMatch) {
      flush()
      currentQuestion = questionMatch[1].trim()
      continue
    }

    const answerMatch = line.match(answerLineRegex)
    if (answerMatch) {
      if (!currentQuestion) continue
      currentAnswerLines.push(answerMatch[1].trim())
      continue
    }

    if (currentQuestion) {
      currentAnswerLines.push(line)
    }
  }

  flush()

  return items.filter((item) => item.question.length >= 4 && item.answer.length >= 10)
}

export default async function BlogArticle({
  article,
  relatedArticles,
  recommendedArticles
}: BlogArticleProps) {
  const articleUrl = `${siteUrl}/blog/${article.id}`
  const articleDescription = article.description || article.title
  const articleImageUrl = article.thumbnail?.url ?? defaultArticleImageUrl
  const faqItems = extractFaqItemsFromMarkdown(article['md-content'])
  const { htmlContent, toc } = await renderContent(article)
  const readTime = calculateReadTime(htmlContent)
  const modifiedTime = article.revisedAt || article.updatedAt || article.publishedAt

  return (
    <>
      {/* 構造化データ */}
      <ArticleStructuredData
        title={article.title}
        description={articleDescription}
        url={articleUrl}
        publishedTime={article.publishedAt}
        modifiedTime={modifiedTime}
        imageUrl={articleImageUrl}
        articleType="BlogPosting"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'ホーム', url: siteUrl },
          { name: 'ブログ', url: `${siteUrl}/blog` },
          { name: article.title, url: articleUrl },
        ]}
      />
      {faqItems.length >= 2 && <FAQStructuredData items={faqItems} />}

      <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* パンくずリスト */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-will-primary">ホーム</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-will-primary">ブログ</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium truncate max-w-xs">{article.title}</li>
            </ol>
          </nav>

          {/* タイトル部分 */}
          <header>
            <div className="flex items-center gap-3 mb-4">
              {article.category && (
                <span className="px-3 py-1 bg-will-primary/10 text-will-primary text-sm font-medium rounded-full">
                  {getCategoryLabel(typeof article.category === 'string' ? article.category : article.category[0])}
                </span>
              )}
              <time className="text-gray-500 text-sm">
                {new Date(article.publishedAt).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500 text-sm">{readTime}分で読了</span>
            </div>

            <div className="mb-6 flex">
              <div className="ml-auto w-full sm:w-auto">
                <CopyAsMarkdownButton title={article.title} sourceSelector="[data-blog-article-body]" />
              </div>
            </div>
            
            <h1 className="text-balance-ja text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {renderReadableJapaneseText(article.title)}
            </h1>
            
            {article.description && (
              <p className="text-pretty-ja text-lg text-gray-600 leading-relaxed">
                {renderReadableJapaneseText(article.description)}
              </p>
            )}
          </header>

          {/* サムネイル画像 */}
          {article.thumbnail && (
            <div className="mt-8 -mx-4 md:mx-0">
              <Image
                src={article.thumbnail.url}
                alt={article.title}
                width={1200}
                height={675}
                sizes="(max-width: 768px) 100vw, 1024px"
                priority
                className="w-full rounded-lg shadow-soft"
              />
            </div>
          )}
        </div>
      </section>

      {/* 本文とサイドバー */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,320px] gap-12">
            {/* メインコンテンツ */}
            <article className="max-w-4xl">
              <div 
                className="prose prose-lg prose-gray max-w-none
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-0 prose-h2:border-b-0 prose-h2:relative prose-h2:pl-4
                  before:prose-h2:absolute before:prose-h2:left-0 before:prose-h2:top-1 before:prose-h2:bottom-1 before:prose-h2:w-1.5 before:prose-h2:bg-gradient-to-b before:prose-h2:from-will-primary before:prose-h2:to-will-secondary before:prose-h2:rounded-full before:prose-h2:opacity-80
                  prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:flex prose-h3:items-center prose-h3:gap-2
                  before:prose-h3:content-[''] before:prose-h3:h-1.5 before:prose-h3:w-1.5 before:prose-h3:rounded-full before:prose-h3:bg-will-primary
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-will-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 prose-strong:font-bold
                  prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                  prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                  prose-li:my-2 prose-li:text-gray-700
                  prose-blockquote:not-italic prose-blockquote:border-l-4 prose-blockquote:border-will-primary/30 prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:text-gray-600
                  prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800 before:prose-code:content-[''] after:prose-code:content-['']
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6 prose-pre:overflow-x-auto prose-pre:shadow-lg
                  prose-img:rounded-xl prose-img:shadow-soft prose-img:my-10
                  prose-table:my-10 prose-table:w-full prose-table:border-collapse prose-table:rounded-xl prose-table:overflow-hidden prose-table:shadow-sm prose-table:border prose-table:border-gray-100
                  prose-thead:bg-gray-50 prose-thead:border-b prose-thead:border-gray-200
                  prose-th:text-gray-900 prose-th:font-bold prose-th:py-4 prose-th:px-6
                  prose-td:py-4 prose-td:px-6 prose-td:text-gray-700 prose-td:border-b prose-td:border-gray-100"
                data-blog-article-body
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* タグ */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${encodeURIComponent(tag)}`}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* シェアボタン */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <ArticleShareButtons title={article.title} />
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-will-primary/5 via-white to-will-secondary/5 p-6">
                  <h2 className="text-balance-ja text-xl font-bold text-gray-900">{renderReadableJapaneseText('次の一手')}</h2>
                  <p className="text-pretty-ja mt-2 text-gray-700">
                    {renderReadableJapaneseText('この記事の内容を、自社のAI活用に落とし込みたい方へ。状況に合わせて最短ルートをご提案します。')}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-will-primary px-5 py-2 text-sm font-medium text-white hover:bg-will-primary/90 transition-colors"
                    >
                      相談する（お問い合わせ）
                    </Link>
                    <Link
                      href="/briefing"
                      className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-800 hover:border-will-primary hover:bg-will-primary/5 transition-colors"
                    >
                      ブリーフィングを見る
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* サイドバー */}
            <aside className="lg:sticky lg:top-24 h-fit">
              {/* 目次 */}
              {toc.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-balance-ja font-bold text-gray-900 mb-4">{renderReadableJapaneseText('目次')}</h3>
                  <nav>
                    <ul className="space-y-2">
                      {toc.map((heading) => (
                        <li
                          key={heading.id}
                          style={{ paddingLeft: `${(heading.level - 1) * 1}rem` }}
                        >
                          <a
                            href={`#${heading.id}`}
                            className="text-sm text-gray-600 hover:text-will-primary transition-colors block py-1"
                          >
                            {renderReadableJapaneseText(heading.text)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}

              {/* おすすめ記事 */}
              {recommendedArticles.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
                  <h3 className="text-balance-ja font-bold text-gray-900 mb-4">{renderReadableJapaneseText('おすすめ記事')}</h3>
                  <div className="space-y-4">
                    {recommendedArticles.map((item) => (
                      <Link
                        key={item.id}
                        href={`/blog/${item.id}`}
                        className="block group"
                      >
                        <h4 className="text-pretty-ja text-sm font-medium text-gray-700 group-hover:text-will-primary transition-colors line-clamp-2">
                          {renderReadableJapaneseText(item.title)}
                        </h4>
                        <time className="text-xs text-gray-500 mt-1">
                          {new Date(item.publishedAt).toLocaleDateString('ja-JP')}
                        </time>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-will-primary/10 to-will-secondary/10 rounded-xl p-6">
                <h3 className="text-balance-ja font-bold text-gray-900 mb-2">{renderReadableJapaneseText('AI活用を前に進める')}</h3>
                <p className="text-pretty-ja text-sm text-gray-700 mb-4">
                  {renderReadableJapaneseText('課題整理から社内展開まで、状況に合わせて伴走します。')}
                </p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="block text-center px-4 py-2 bg-will-primary text-white rounded-lg hover:bg-will-primary/90 transition-colors text-sm font-medium"
                  >
                    お問い合わせ
                  </Link>
                  <Link
                    href="/academy"
                    className="block text-center px-4 py-2 bg-white/70 border border-white/40 text-gray-900 rounded-lg hover:bg-white transition-colors text-sm font-medium"
                  >
                    学習コンテンツを見る
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      {relatedArticles.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-balance-ja text-2xl font-bold text-gray-900 mb-8">{renderReadableJapaneseText('関連記事')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  href={`/blog/${item.id}`}
                  className="group"
                >
                  <article className="bg-white rounded-xl overflow-hidden shadow-subtle hover:shadow-soft transition-all duration-300">
                    {item.thumbnail && (
                      <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                        <Image
                          src={item.thumbnail.url}
                          alt={item.title}
                          width={800}
                          height={500}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="text-pretty-ja font-medium text-gray-900 mb-2 group-hover:text-will-primary transition-colors line-clamp-2">
                        {renderReadableJapaneseText(item.title)}
                      </h3>
                      <time className="text-sm text-gray-500">
                        {new Date(item.publishedAt).toLocaleDateString('ja-JP')}
                      </time>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
    </>
  )
}

function getCategoryLabel(category: string): string {
  // 日本語カテゴリーはそのまま返す
  const japaneseCategories = [
    '注目記事', 'AIトレンド', '活用事例', 'チュートリアル', 
    'プロンプト集', 'ツール紹介', 'ニュース', 'イベント', 
    'メディア掲載', 'お知らせ'
  ]
  if (japaneseCategories.includes(category)) {
    return category
  }
  
  // 英語カテゴリーは日本語に変換
  const labels: Record<string, string> = {
    'featured': '注目記事',
    'ai-trends': 'AIトレンド',
    'case-study': '活用事例',
    'tutorial': 'チュートリアル',
    'prompts': 'プロンプト集',
    'tools': 'ツール紹介',
    'news': 'ニュース',
    'event': 'イベント',
    'media': 'メディア掲載',
    'notice': 'お知らせ',
  }
  return labels[category] || category
}
