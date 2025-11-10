import { getNewsList, News } from './microcms'
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

// ブログ記事のみを取得
export async function getBlogArticles(limit = 12, offset = 0) {
  const result = await getNewsList(limit * 2, offset) // 多めに取得
  
  // リスト形式のレスポンスかチェック
  if (!('contents' in result)) {
    return {
      contents: [],
      totalCount: 0,
      offset,
      limit
    }
  }
  
  const { contents } = result
  
  // ブログカテゴリーの記事のみフィルタリング
  const blogArticles = contents.filter((item: News) => 
    isBlogCategory(item.category)
  ).slice(0, limit)
  
  return {
    contents: blogArticles,
    totalCount: blogArticles.length,
    offset,
    limit
  }
}

// お知らせ記事のみを取得
export async function getNewsArticles(limit = 12, offset = 0) {
  const result = await getNewsList(limit * 2, offset) // 多めに取得
  
  // リスト形式のレスポンスかチェック
  if (!('contents' in result)) {
    return {
      contents: [],
      totalCount: 0,
      offset,
      limit
    }
  }
  
  const { contents } = result
  
  // お知らせカテゴリーの記事のみフィルタリング
  const newsArticles = contents.filter((item: News) => 
    isNewsCategory(item.category)
  ).slice(0, limit)
  
  return {
    contents: newsArticles,
    totalCount: newsArticles.length,
    offset,
    limit
  }
}

// カテゴリーのラベルを取得（日本語・英語両対応）
export function getCategoryLabel(category: string): string {
  return getLabel(category)
}

// カテゴリーの色を取得（日本語・英語両対応）
export function getCategoryColor(category: string): string {
  return getColor(category)
}