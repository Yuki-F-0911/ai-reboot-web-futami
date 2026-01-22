import { createClient } from 'microcms-js-sdk'
import { staticNews, getStaticNewsById, isStaticNews, mergeWithStaticNews } from '@/data/static-news'

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

// お知らせ一覧を取得（静的ニュースを含む）
export const getNewsList = async (limit = 10, offset = 0) => {
  try {
    // 環境変数チェック
    const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN
    const apiKey = process.env.MICROCMS_API_KEY
    
    // microCMSが設定されていない場合は静的ニュースのみ返す
    if (!serviceDomain || !apiKey) {
      console.warn('MicroCMS環境変数が設定されていません。静的ニュースのみ使用します。')
      const sortedStatic = [...staticNews].sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
      const paginatedStatic = sortedStatic.slice(offset, offset + limit)
      return { 
        contents: paginatedStatic, 
        totalCount: staticNews.length, 
        offset, 
        limit 
      }
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
      console.warn('MicroCMS client is not properly initialized。静的ニュースのみ使用します。')
      const sortedStatic = [...staticNews].sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
      const paginatedStatic = sortedStatic.slice(offset, offset + limit)
      return { 
        contents: paginatedStatic, 
        totalCount: staticNews.length, 
        offset, 
        limit 
      }
    }
    
    const data = await client.get({
      endpoint: 'news',
      queries: {
        limit: limit + staticNews.length, // 静的ニュース分を考慮して多めに取得
        offset: 0, // マージ後にページネーション
        orders: '-publishedAt',
      },
    })
    
    // 静的ニュースとマージ
    const mergedContents = mergeWithStaticNews(data.contents || [])
    const paginatedContents = mergedContents.slice(offset, offset + limit)
    
    console.log('microCMS response (merged with static):', {
      microCmsCount: data.contents?.length || 0,
      staticCount: staticNews.length,
      totalMerged: mergedContents.length,
      returned: paginatedContents.length
    })
    
    return {
      contents: paginatedContents,
      totalCount: mergedContents.length,
      offset,
      limit
    }
  } catch (error) {
    console.error('Failed to fetch news list:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      error: error
    })
    
    // エラー時は静的ニュースのみ返す
    console.log('Falling back to static news only')
    const sortedStatic = [...staticNews].sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    const paginatedStatic = sortedStatic.slice(offset, offset + limit)
    return { 
      contents: paginatedStatic, 
      totalCount: staticNews.length, 
      offset, 
      limit 
    }
  }
}

// お知らせ詳細を取得（静的ニュース対応）
export const getNewsDetail = async (contentId: string) => {
  try {
    // 静的ニュースの場合は直接返す
    if (isStaticNews(contentId)) {
      const staticArticle = getStaticNewsById(contentId)
      if (staticArticle) {
        console.log('Returning static news:', contentId)
        return staticArticle
      }
      console.warn('Static news not found:', contentId)
      return null
    }
    
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