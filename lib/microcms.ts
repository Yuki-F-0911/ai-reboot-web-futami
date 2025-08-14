import { createClient } from 'microcms-js-sdk'

// サーバーサイドでのみクライアントを作成
function getClient() {
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN
  const apiKey = process.env.MICROCMS_API_KEY

  if (!serviceDomain || !apiKey) {
    console.warn('microCMS環境変数が設定されていません')
    // ダミークライアントを返す（エラーを防ぐため）
    return {
      get: async () => ({ contents: [], totalCount: 0, offset: 0, limit: 10 }),
    }
  }

  return createClient({
    serviceDomain,
    apiKey,
  })
}

export const client = getClient()

// お知らせの型定義
export type NewsCategory = '新着' | 'イベント' | 'メディア' | 'お知らせ'

export interface News {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  category: NewsCategory
  content: string
  'md-content'?: string  // マークダウンコンテンツフィールド
  description?: string
  thumbnail?: {
    url: string
    height: number
    width: number
  }
}

// お知らせ一覧を取得
export const getNewsList = async (limit = 10, offset = 0) => {
  try {
    console.log('Fetching news from microCMS:', {
      endpoint: 'news',
      limit,
      offset,
      domain: process.env.MICROCMS_SERVICE_DOMAIN,
      hasApiKey: !!process.env.MICROCMS_API_KEY
    })
    
    const data = await client.get({
      endpoint: 'news',
      queries: {
        limit,
        offset,
        orders: '-publishedAt',
      },
    })
    
    console.log('microCMS response:', data)
    return data
  } catch (error) {
    console.error('Failed to fetch news list:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    return { contents: [], totalCount: 0, offset: 0, limit: 10 }
  }
}

// お知らせ詳細を取得
export const getNewsDetail = async (contentId: string) => {
  try {
    const data = await client.get({
      endpoint: 'news',
      contentId,
    })
    return data
  } catch (error) {
    console.error('Failed to fetch news detail:', error)
    return null
  }
}

// 最新のお知らせを取得（トップページ用）
export const getLatestNews = async (limit = 3) => {
  return getNewsList(limit, 0)
}