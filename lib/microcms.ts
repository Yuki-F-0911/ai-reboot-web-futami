import { createClient } from 'microcms-js-sdk'

// カテゴリーの型定義（英語で統一）
export type Category = 
  // ブログカテゴリー
  | 'featured'
  | 'ai-trends'
  | 'case-study'
  | 'tutorial'
  | 'prompts'
  | 'tools'
  // お知らせカテゴリー
  | 'news'
  | 'event'
  | 'media'
  | 'notice'

export interface News {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  category: string[] | string  // カテゴリーは配列または文字列
  content: string
  'md-content'?: string  // マークダウンコンテンツフィールド
  description?: string
  thumbnail?: {
    url: string
    height: number
    width: number
  }
  tags?: string[]  // タグフィールド追加
}

// サーバーサイドでのみクライアントを作成
function getClient() {
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN
  const apiKey = process.env.MICROCMS_API_KEY

  if (!serviceDomain || !apiKey) {
    console.warn('microCMS環境変数が設定されていません', {
      MICROCMS_SERVICE_DOMAIN: serviceDomain ? '設定済み' : '未設定',
      MICROCMS_API_KEY: apiKey ? '設定済み（長さ: ' + apiKey.length + '）' : '未設定'
    })
    // ダミークライアントを返す（エラーを防ぐため）
    return {
      get: async () => {
        console.warn('ダミークライアントが呼び出されました')
        return { contents: [], totalCount: 0, offset: 0, limit: 10 }
      },
    }
  }

  try {
    return createClient({
      serviceDomain,
      apiKey,
    })
  } catch (error) {
    console.error('MicroCMSクライアントの作成に失敗しました:', error)
    return {
      get: async () => ({ contents: [], totalCount: 0, offset: 0, limit: 10 }),
    }
  }
}

export const client = getClient()

// お知らせ一覧を取得
export const getNewsList = async (limit = 10, offset = 0) => {
  try {
    // 環境変数チェック
    const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN
    const apiKey = process.env.MICROCMS_API_KEY
    
    if (!serviceDomain || !apiKey) {
      console.warn('MicroCMS環境変数が設定されていません', {
        serviceDomain: serviceDomain ? '設定済み' : '未設定',
        apiKey: apiKey ? '設定済み' : '未設定'
      })
      return { contents: [], totalCount: 0, offset: 0, limit: 10 }
    }
    
    console.log('Fetching news from microCMS:', {
      endpoint: 'news',
      limit,
      offset,
      domain: serviceDomain,
      hasApiKey: !!apiKey
    })
    
    // clientがダミークライアントの場合の処理
    if (!client.get || typeof client.get !== 'function') {
      console.warn('MicroCMS client is not properly initialized')
      return { contents: [], totalCount: 0, offset: 0, limit: 10 }
    }
    
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
      stack: error instanceof Error ? error.stack : undefined,
      error: error
    })
    
    // エラー時もアプリケーションが動作するようにデフォルト値を返す
    return { contents: [], totalCount: 0, offset: 0, limit: 10 }
  }
}

// お知らせ詳細を取得
export const getNewsDetail = async (contentId: string) => {
  try {
    // 環境変数チェック
    const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN
    const apiKey = process.env.MICROCMS_API_KEY
    
    if (!serviceDomain || !apiKey) {
      console.warn('MicroCMS環境変数が設定されていません（getNewsDetail）')
      return null
    }
    
    // clientがダミークライアントの場合の処理
    if (!client.get || typeof client.get !== 'function') {
      console.warn('MicroCMS client is not properly initialized（getNewsDetail）')
      return null
    }
    
    const data = await client.get({
      endpoint: 'news',
      contentId,
    })
    return data
  } catch (error) {
    console.error('Failed to fetch news detail:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      contentId,
    })
    return null
  }
}

// 最新のお知らせを取得（トップページ用）
export const getLatestNews = async (limit = 3) => {
  return getNewsList(limit, 0)
}