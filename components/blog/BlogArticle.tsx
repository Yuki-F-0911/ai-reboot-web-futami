import Link from 'next/link'
import Image from 'next/image'
import { News } from '@/lib/microcms'
import { Marked, Tokens } from 'marked'
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from '@/components/seo/StructuredData'
import ArticleShareButtons from '@/components/blog/ArticleShareButtons'

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

  return (
    <>
      {/* 構造化データ */}
      <ArticleStructuredData
        title={article.title}
        description={articleDescription}
        url={articleUrl}
        publishedTime={article.publishedAt}
        modifiedTime={article.updatedAt}
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
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            {article.description && (
              <p className="text-lg text-gray-600 leading-relaxed">
                {article.description}
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
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-will-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 prose-strong:font-bold
                  prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                  prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                  prose-li:my-2 prose-li:text-gray-700
                  prose-blockquote:border-l-4 prose-blockquote:border-will-primary/30 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
                  prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
                  prose-img:rounded-lg prose-img:shadow-soft prose-img:my-8
                  prose-table:my-8 prose-table:w-full
                  prose-thead:border-b-2 prose-thead:border-gray-200
                  prose-th:text-left prose-th:font-bold prose-th:p-3
                  prose-td:p-3 prose-td:border-b prose-td:border-gray-100"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* タグ */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${tag}`}
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
            </article>

            {/* サイドバー */}
            <aside className="lg:sticky lg:top-24 h-fit">
              {/* 目次 */}
              {toc.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="font-bold text-gray-900 mb-4">目次</h3>
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
                            {heading.text}
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
                  <h3 className="font-bold text-gray-900 mb-4">おすすめ記事</h3>
                  <div className="space-y-4">
                    {recommendedArticles.map((item) => (
                      <Link
                        key={item.id}
                        href={`/blog/${item.id}`}
                        className="block group"
                      >
                        <h4 className="text-sm font-medium text-gray-700 group-hover:text-will-primary transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                        <time className="text-xs text-gray-500 mt-1">
                          {new Date(item.publishedAt).toLocaleDateString('ja-JP')}
                        </time>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* ニュースレター登録 */}
              <div className="bg-gradient-to-br from-will-primary/10 to-will-secondary/10 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">ニュースレター</h3>
                <p className="text-sm text-gray-600 mb-4">
                  最新のAI情報をお届けします
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="メールアドレス"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-will-primary text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-will-primary text-white rounded-lg hover:bg-will-primary/90 transition-colors text-sm font-medium"
                  >
                    登録する
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      {relatedArticles.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">関連記事</h2>
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
                      <h3 className="font-medium text-gray-900 mb-2 group-hover:text-will-primary transition-colors line-clamp-2">
                        {item.title}
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
