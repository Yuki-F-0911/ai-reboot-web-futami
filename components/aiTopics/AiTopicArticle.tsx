import Image from 'next/image'
import LineCtaBox from '@/components/blog/LineCtaBox'
import { renderAiTopicMarkdown } from '@/lib/ai-topics-markdown'
import type { AiTopicArticle } from '@/types/ai-topic'

type AiTopicArticleProps = {
  article: AiTopicArticle
}

function formatDate(value: string): string {
  return new Date(value).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function splitMarkdownAtProgress(content: string, progressRatio = 0.65): {
  before: string
  after: string
} {
  const blocks = content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)

  if (blocks.length <= 1) {
    return { before: content, after: '' }
  }

  const totalLength = blocks.reduce((sum, block) => sum + block.length, 0)
  const threshold = Math.floor(totalLength * progressRatio)

  let runningLength = 0
  let insertIndex = blocks.length - 1

  for (let i = 0; i < blocks.length; i += 1) {
    runningLength += blocks[i].length
    if (runningLength >= threshold) {
      insertIndex = i + 1
      break
    }
  }

  const safeIndex = Math.min(Math.max(insertIndex, 1), blocks.length - 1)

  return {
    before: blocks.slice(0, safeIndex).join('\n\n'),
    after: blocks.slice(safeIndex).join('\n\n'),
  }
}

export default function AiTopicArticle({ article }: AiTopicArticleProps) {
  const { before, after } = splitMarkdownAtProgress(article.content, 0.65)

  const beforeHtml = article.contentFormat === 'markdown' ? renderAiTopicMarkdown(before) : before
  const afterHtml = article.contentFormat === 'markdown' ? renderAiTopicMarkdown(after) : after

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <span>公開: {formatDate(article.publishedAt)}</span>
          <span>更新: {formatDate(article.updatedAt)}</span>
        </div>
        <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">{article.title}</h1>
        <p className="text-base leading-relaxed text-gray-700">{article.summary}</p>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-will-primary/10 px-2.5 py-1 text-xs text-will-primary">
              {tag}
            </span>
          ))}
        </div>
        <div className="overflow-hidden rounded-xl">
          <Image
            src={`/ai-topics/${article.id}/cover-image`}
            alt={article.title}
            width={2400}
            height={1260}
            className="w-full object-cover"
            priority
          />
        </div>
      </header>

      <div className="markdown-content" dangerouslySetInnerHTML={{ __html: beforeHtml }} />

      <LineCtaBox analyticsSource="ai_topics_mid_cta" className="my-8" />

      {after && <div className="markdown-content" dangerouslySetInnerHTML={{ __html: afterHtml }} />}

      <LineCtaBox analyticsSource="ai_topics_end_cta" className="mt-8" />

      {article.meta?.sourceNote && (
        <p className="text-xs text-gray-500">{article.meta.sourceNote}</p>
      )}
    </article>
  )
}
