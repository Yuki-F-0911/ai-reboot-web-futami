export type AiTopicContentFormat = 'markdown'

export type AiTopicClassification = {
  period: string
  topics: string[]
}

export type AiTopicRelatedLinks = {
  blogSlugs?: string[]
  glossarySlugs?: string[]
}

export type AiTopicArticle = {
  id: string
  title: string
  summary: string
  content: string
  contentFormat: AiTopicContentFormat
  thumbnail: {
    url: string
    width: number
    height: number
  }
  publishedAt: string
  updatedAt: string
  tags: string[]
  classification: AiTopicClassification
  relatedLinks?: AiTopicRelatedLinks
  seo?: {
    ogTitle?: string
    ogDescription?: string
    ogImagePath?: string
  }
  meta?: {
    sourceNote?: string
    draft?: boolean
  }
}
