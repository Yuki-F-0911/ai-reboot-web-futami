import { getNewsList } from './microcms'
import { 
  isBlogCategoryJa, 
  isNewsCategoryJa,
  getCategoryDisplayLabel as getLabel,
  getCategoryColorClass as getColor,
  categoryJaToEn
} from './category-mapping'

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

// カテゴリー判定（日本語・英語両対応）
export function isBlogCategory(category: string): boolean {
  // 日本語カテゴリーの場合
  if (isBlogCategoryJa(category)) {
    return true
  }
  // 英語カテゴリーの場合（後方互換性）
  const categoryEn = categoryJaToEn(category)
  return BLOG_CATEGORIES.includes(categoryEn as BlogCategory)
}

export function isNewsCategory(category: string): boolean {
  // 日本語カテゴリーの場合
  if (isNewsCategoryJa(category)) {
    return true
  }
  // 英語カテゴリーの場合（後方互換性）
  const categoryEn = categoryJaToEn(category)
  return NEWS_CATEGORIES.includes(categoryEn as NewsCategory)
}

// ブログ記事のみを取得
export async function getBlogArticles(limit = 12, offset = 0) {
  const { contents, totalCount } = await getNewsList(limit * 2, offset) // 多めに取得
  
  // ブログカテゴリーの記事のみフィルタリング
  const blogArticles = contents.filter(item => 
    isBlogCategory(item.category as string)
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
  const { contents, totalCount } = await getNewsList(limit * 2, offset) // 多めに取得
  
  // お知らせカテゴリーの記事のみフィルタリング
  const newsArticles = contents.filter(item => 
    isNewsCategory(item.category as string)
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