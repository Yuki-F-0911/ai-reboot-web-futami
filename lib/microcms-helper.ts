import { getAllNewsContents, getNewsList, News } from './microcms'
import { 
  isBlogCategoryJa, 
  isNewsCategoryJa,
  getCategoryDisplayLabel as getLabel,
  getCategoryColorClass as getColor,
  categoryJaToEn
} from './category-mapping'
import { normalizeCategory } from './category-helper'

// 後方互換性のためのエクスポート（英語カテゴリー）
export const BLOG_CATEGORIES = [
  'featured',
  'ai-trends', 
  'case-study',
  'tutorial',
  'prompts',
  'tools'
] as const

export const NEWS_CATEGORIES = [
  'news',
  'event',
  'media',
  'notice'
] as const

export type BlogCategory = typeof BLOG_CATEGORIES[number]
export type NewsCategory = typeof NEWS_CATEGORIES[number]

// カテゴリー判定（日本語・英語両対応、配列対応）
export function isBlogCategory(category: string | string[]): boolean {
  const normalizedCategory = normalizeCategory(category)
  if (!normalizedCategory) return false
  
  // 日本語カテゴリーの場合
  if (isBlogCategoryJa(normalizedCategory)) {
    return true
  }
  // 英語カテゴリーの場合（後方互換性）
  const categoryEn = categoryJaToEn(normalizedCategory)
  return BLOG_CATEGORIES.includes(categoryEn as BlogCategory)
}

export function isNewsCategory(category: string | string[]): boolean {
  const normalizedCategory = normalizeCategory(category)
  if (!normalizedCategory) return false
  
  // 日本語カテゴリーの場合
  if (isNewsCategoryJa(normalizedCategory)) {
    return true
  }
  // 英語カテゴリーの場合（後方互換性）
  const categoryEn = categoryJaToEn(normalizedCategory)
  return NEWS_CATEGORIES.includes(categoryEn as NewsCategory)
}

function sanitizePaging(limit: number, offset: number) {
  return {
    safeLimit: Math.max(0, Math.floor(limit)),
    safeOffset: Math.max(0, Math.floor(offset)),
  }
}

async function getCategoryArticles(
  isTarget: (category: string | string[]) => boolean,
  limit = 12,
  offset = 0
) {
  const { safeLimit, safeOffset } = sanitizePaging(limit, offset)

  if (safeLimit === 0) {
    return {
      contents: [],
      totalCount: 0,
      offset: safeOffset,
      limit: safeLimit,
    }
  }

  const needed = safeOffset + safeLimit
  let fetchSize = Math.max(needed, 50)
  let total = 0

  while (true) {
    const result = await getNewsList(fetchSize, 0)

    if (!('contents' in result)) {
      return {
        contents: [],
        totalCount: 0,
        offset: safeOffset,
        limit: safeLimit,
      }
    }

    const pool = result.contents as News[]
    total = result.totalCount
    const filtered = pool.filter((item: News) => isTarget(item.category))

    const fetchedAll = pool.length >= total || fetchSize >= total
    if (filtered.length >= needed || fetchedAll) {
      return {
        contents: filtered.slice(safeOffset, safeOffset + safeLimit),
        totalCount: fetchedAll ? filtered.length : Math.max(filtered.length, needed),
        offset: safeOffset,
        limit: safeLimit,
      }
    }

    const nextFetchSize = Math.min(fetchSize * 2, total)
    if (nextFetchSize === fetchSize) {
      return {
        contents: filtered.slice(safeOffset, safeOffset + safeLimit),
        totalCount: Math.max(filtered.length, needed),
        offset: safeOffset,
        limit: safeLimit,
      }
    }
    fetchSize = nextFetchSize
  }
}

// ブログ記事のみを取得
export async function getBlogArticles(limit = 12, offset = 0) {
  return getCategoryArticles(isBlogCategory, limit, offset)
}

// お知らせ記事のみを取得
export async function getNewsArticles(limit = 12, offset = 0) {
  return getCategoryArticles(isNewsCategory, limit, offset)
}

export async function getAllBlogArticles(): Promise<News[]> {
  const all = await getAllNewsContents()
  return all.filter((item: News) => isBlogCategory(item.category))
}

export async function getAllNewsArticles(): Promise<News[]> {
  const all = await getAllNewsContents()
  return all.filter((item: News) => isNewsCategory(item.category))
}

// カテゴリーのラベルを取得（日本語・英語両対応）
export function getCategoryLabel(category: string): string {
  return getLabel(category)
}

// カテゴリーの色を取得（日本語・英語両対応）
export function getCategoryColor(category: string): string {
  return getColor(category)
}
