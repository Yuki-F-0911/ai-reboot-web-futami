import type { AiTopicArticle } from '@/types/ai-topic'
import { monthlyAiNews202602 } from '@/data/ai-topics/articles/2026-02-26-monthly-ai-news'
import { weeklyAiNews20260324 } from '@/data/ai-topics/articles/2026-03-24-weekly-ai-news'
import { weeklyAiNews20260304 } from '@/data/ai-topics/articles/2026-03-04-weekly-ai-news'
import { weeklyAiNews20260318 } from '@/data/ai-topics/articles/2026-03-18-weekly-ai-news'

const aiTopicsArticleSource: AiTopicArticle[] = [
  weeklyAiNews20260324,
  weeklyAiNews20260318,
  weeklyAiNews20260304,
  monthlyAiNews202602,
]

export const aiTopicsArticles: AiTopicArticle[] = [...aiTopicsArticleSource].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
)
