import { NextRequest, NextResponse } from 'next/server'
import { getNewsList } from '@/lib/microcms'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const limit = parseInt(searchParams.get('limit') || '10', 10)
  const offset = parseInt(searchParams.get('offset') || '0', 10)

  console.log('API Route called with:', { limit, offset })
  console.log('Environment variables:', {
    domain: process.env.MICROCMS_SERVICE_DOMAIN,
    hasApiKey: !!process.env.MICROCMS_API_KEY
  })

  try {
    const data = await getNewsList(limit, offset)
    console.log('API Response:', data)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Failed to fetch news:', error)
    return NextResponse.json(
      { error: 'Failed to fetch news', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}