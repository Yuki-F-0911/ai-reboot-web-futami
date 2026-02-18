import { createClient } from 'microcms-js-sdk'
import { staticNews, getStaticNewsById, isStaticNews, mergeWithStaticNews } from '@/data/static-news'

const MICROCMS_LIST_MAX_LIMIT = 100

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

function isMicroCmsConfigured(): boolean {
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN
  const apiKey = process.env.MICROCMS_API_KEY
  return Boolean(serviceDomain && apiKey && client?.get && typeof client.get === 'function')
}

function getSortedStaticNews(): News[] {
  return [...staticNews].sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

async function fetchMicroCmsNewsPage(limit: number, offset: number) {
  const safeLimit = Math.min(MICROCMS_LIST_MAX_LIMIT, Math.max(0, limit))
  const safeOffset = Math.max(0, offset)

  const data = await client.get({
    endpoint: 'news',
    queries: {
      limit: safeLimit,
      offset: safeOffset,
      orders: '-publishedAt',
    },
  })

  return data as { contents?: News[]; totalCount?: number; offset?: number; limit?: number }
}

async function fetchMicroCmsNewsUpTo(count: number): Promise<{ contents: News[]; totalCount: number }> {
  const safeCount = Math.max(0, Math.floor(count))
  if (safeCount === 0) {
    return { contents: [], totalCount: 0 }
  }

  const contents: News[] = []
  let offset = 0
  let totalCount = 0

  while (contents.length < safeCount) {
    const remaining = safeCount - contents.length
    const pageLimit = Math.min(MICROCMS_LIST_MAX_LIMIT, remaining)
    const data = await fetchMicroCmsNewsPage(pageLimit, offset)

    if (typeof data.totalCount === 'number') {
      totalCount = data.totalCount
    }

    const pageContents = (data.contents ?? []) as News[]
    if (pageContents.length === 0) break

    contents.push(...pageContents)
    offset += pageContents.length

    if (totalCount && offset >= totalCount) break
    if (!totalCount && pageContents.length < pageLimit) break
  }

  return { contents, totalCount }
}

async function fetchMicroCmsNewsAll(): Promise<{ contents: News[]; totalCount: number }> {
  const first = await fetchMicroCmsNewsPage(MICROCMS_LIST_MAX_LIMIT, 0)
  const totalCount = typeof first.totalCount === 'number' ? first.totalCount : 0
  const contents: News[] = [...((first.contents ?? []) as News[])]

  let offset = contents.length
  while (totalCount && offset < totalCount) {
    const data = await fetchMicroCmsNewsPage(MICROCMS_LIST_MAX_LIMIT, offset)
    const pageContents = (data.contents ?? []) as News[]
    if (pageContents.length === 0) break
    contents.push(...pageContents)
    offset += pageContents.length
  }

  return { contents, totalCount }
}

export async function getAllNewsContents(): Promise<News[]> {
  if (!isMicroCmsConfigured()) {
    return getSortedStaticNews()
  }

  const microCms = await fetchMicroCmsNewsAll()
  return mergeWithStaticNews(microCms.contents)
}

// お知らせ一覧を取得（静的ニュースを含む）
export const getNewsList = async (limit = 10, offset = 0) => {
  try {
    const safeLimit = Math.max(0, Math.floor(limit))
    const safeOffset = Math.max(0, Math.floor(offset))

    if (!isMicroCmsConfigured()) {
      const sortedStatic = getSortedStaticNews()
      const paginatedStatic = sortedStatic.slice(safeOffset, safeOffset + safeLimit)
      return {
        contents: paginatedStatic,
        totalCount: staticNews.length,
        offset: safeOffset,
        limit: safeLimit,
      }
    }

    const fetchCount = safeOffset + safeLimit
    const microCms = await fetchMicroCmsNewsUpTo(fetchCount)
    const mergedContents = mergeWithStaticNews(microCms.contents)
    const paginatedContents = mergedContents.slice(safeOffset, safeOffset + safeLimit)

    return {
      contents: paginatedContents,
      totalCount: (microCms.totalCount || microCms.contents.length) + staticNews.length,
      offset: safeOffset,
      limit: safeLimit,
    }
  } catch (error) {
    console.error('Failed to fetch news list:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      error: error
    })
    
    // エラー時は静的ニュースのみ返す
    const sortedStatic = getSortedStaticNews()
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
    if (!isMicroCmsConfigured()) {
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
