import { NextRequest, NextResponse } from 'next/server'
import { getNewsList } from '@/lib/microcms'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const category = searchParams.get('category')
  const offset = parseInt(searchParams.get('offset') || '0')
  const limit = parseInt(searchParams.get('limit') || '6')

  try {
    const { contents, totalCount } = await getNewsList(limit, offset)
    
    // カテゴリーでフィルタリング
    const filteredContents = category 
      ? contents.filter((item: any) => item.category === category)
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