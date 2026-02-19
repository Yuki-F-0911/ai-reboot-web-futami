import { NextRequest, NextResponse } from 'next/server'
import { News } from '@/lib/microcms'
import { getBlogArticles } from '@/lib/microcms-helper'
import { categoryMatchesAny } from '@/lib/category-helper'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const rawCategory = searchParams.get('category')
  const category = rawCategory && !['undefined', 'null', ''].includes(rawCategory) ? rawCategory : null
  const offset = parseInt(searchParams.get('offset') || '0')
  const limit = parseInt(searchParams.get('limit') || '6')

  try {
    if (category) {
      const { contents: pool } = await getBlogArticles(200, 0)
      const allFiltered = pool.filter((item: News) => categoryMatchesAny(item.category, [category]))
      const filteredContents = allFiltered.slice(offset, offset + limit)

      return NextResponse.json({
        contents: filteredContents,
        totalCount: allFiltered.length,
      })
    }

    const result = await getBlogArticles(limit, offset)

    return NextResponse.json({
      contents: result.contents,
      totalCount: result.totalCount,
    })
  } catch (error) {
    console.error('Failed to fetch blog articles:', error)
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    )
  }
}
