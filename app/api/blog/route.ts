import { NextRequest, NextResponse } from 'next/server'
import { getNewsList, News } from '@/lib/microcms'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const category = searchParams.get('category')
  const offset = parseInt(searchParams.get('offset') || '0')
  const limit = parseInt(searchParams.get('limit') || '6')

  try {
    const result = await getNewsList(limit, offset)
    
    // 単一記事の場合はエラーを返す（リスト取得エンドポイントなので）
    if (!('contents' in result)) {
      return NextResponse.json(
        { error: 'Invalid response from API' },
        { status: 500 }
      )
    }
    
    const { contents, totalCount } = result
    
    // カテゴリーでフィルタリング
    const filteredContents = category 
      ? contents.filter((item: News) => item.category === category)
      : contents

    return NextResponse.json({
      contents: filteredContents,
      totalCount: totalCount,
    })
  } catch (error) {
    console.error('Failed to fetch blog articles:', error)
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    )
  }
}