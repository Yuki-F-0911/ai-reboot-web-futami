// MicroCMSのセレクトフィールドの制限により、
// 表示名（日本語）しか設定できないため、マッピングで対応

// ブログカテゴリーのマッピング（日本語 -> 英語ID）
export const BLOG_CATEGORY_MAP = {
  '注目記事': 'featured',
  'AIトレンド': 'ai-trends',
  '活用事例': 'case-study',
  'チュートリアル': 'tutorial',
  'プロンプト集': 'prompts',
  'ツール紹介': 'tools',
} as const

// お知らせカテゴリーのマッピング（日本語 -> 英語ID）
export const NEWS_CATEGORY_MAP = {
  'ニュース': 'news',
  'イベント': 'event',
  'メディア掲載': 'media',
  'お知らせ': 'notice',
} as const

// 全カテゴリーマッピング
export const ALL_CATEGORY_MAP = {
  ...BLOG_CATEGORY_MAP,
  ...NEWS_CATEGORY_MAP,
} as const

// 逆引きマッピング（英語ID -> 日本語）
export const CATEGORY_LABEL_MAP = Object.entries(ALL_CATEGORY_MAP).reduce(
  (acc, [ja, en]) => ({ ...acc, [en]: ja }),
  {} as Record<string, string>
)

// 型定義
export type BlogCategoryJa = keyof typeof BLOG_CATEGORY_MAP
export type NewsCategoryJa = keyof typeof NEWS_CATEGORY_MAP
export type CategoryJa = keyof typeof ALL_CATEGORY_MAP

export type BlogCategoryEn = typeof BLOG_CATEGORY_MAP[BlogCategoryJa]
export type NewsCategoryEn = typeof NEWS_CATEGORY_MAP[NewsCategoryJa]
export type CategoryEn = typeof ALL_CATEGORY_MAP[CategoryJa]

// ヘルパー関数

// 日本語カテゴリーがブログカテゴリーかどうか判定
export function isBlogCategoryJa(category: string): category is BlogCategoryJa {
  return category in BLOG_CATEGORY_MAP
}

// 日本語カテゴリーがお知らせカテゴリーかどうか判定
export function isNewsCategoryJa(category: string): category is NewsCategoryJa {
  return category in NEWS_CATEGORY_MAP
}

// 日本語カテゴリーを英語IDに変換
export function categoryJaToEn(categoryJa: string): string {
  return ALL_CATEGORY_MAP[categoryJa as CategoryJa] || categoryJa
}

// 英語IDを日本語カテゴリーに変換
export function categoryEnToJa(categoryEn: string): string {
  return CATEGORY_LABEL_MAP[categoryEn] || categoryEn
}

// カテゴリーの表示ラベルを取得（日本語・英語両対応）
export function getCategoryDisplayLabel(category: string): string {
  // まず日本語として扱ってみる
  if (category in ALL_CATEGORY_MAP) {
    return category // 既に日本語
  }
  // 英語IDの場合は日本語に変換
  if (category in CATEGORY_LABEL_MAP) {
    return CATEGORY_LABEL_MAP[category]
  }
  // どちらでもない場合はそのまま返す
  return category
}

// カテゴリーの色を取得（日本語・英語両対応）
export function getCategoryColorClass(category: string): string {
  // 日本語の場合は英語に変換
  const categoryEn = categoryJaToEn(category)
  
  const colors: Record<string, string> = {
    // ブログカテゴリー
    'featured': 'bg-yellow-500',
    'ai-trends': 'bg-blue-500',
    'case-study': 'bg-green-500',
    'tutorial': 'bg-purple-500',
    'prompts': 'bg-orange-500',
    'tools': 'bg-pink-500',
    // お知らせカテゴリー
    'news': 'bg-gray-500',
    'event': 'bg-red-500',
    'media': 'bg-indigo-500',
    'notice': 'bg-teal-500',
  }
  
  return colors[categoryEn] || 'bg-gray-500'
}