import { NextResponse } from 'next/server'
import { getNewsList } from '@/lib/microcms'
import { getBlogArticles, getNewsArticles, isBlogCategory, isNewsCategory } from '@/lib/microcms-helper'

export async function GET() {
  try {
    // 全記事を取得
    const allArticles = await getNewsList(100, 0)
    
    // ブログ記事のみ取得
    const blogArticles = await getBlogArticles(50, 0)
    
    // お知らせ記事のみ取得
    const newsArticles = await getNewsArticles(50, 0)
    
    // カテゴリー分析
    const categoryAnalysis = allArticles.contents.map(item => ({
      id: item.id,
      title: item.title,
      category: item.category,
      isBlog: isBlogCategory(item.category as string),
      isNews: isNewsCategory(item.category as string),
    }))
    
    // カテゴリー別の集計
    const categoryCounts: Record<string, number> = {}
    allArticles.contents.forEach(item => {
      const cat = item.category as string
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1
    })
    
    return NextResponse.json({
      summary: {
        totalArticles: allArticles.totalCount,
        blogArticlesFound: blogArticles.contents.length,
        newsArticlesFound: newsArticles.contents.length,
        categoryCounts,
      },
      allArticles: {
        count: allArticles.contents.length,
        items: allArticles.contents.slice(0, 5), // 最初の5件のみ表示
      },
      blogArticles: {
        count: blogArticles.contents.length,
        items: blogArticles.contents.slice(0, 3), // 最初の3件のみ表示
      },
      newsArticles: {
        count: newsArticles.contents.length,
        items: newsArticles.contents.slice(0, 3), // 最初の3件のみ表示
      },
      categoryAnalysis: categoryAnalysis.slice(0, 10), // 最初の10件のみ表示
    }, null, 2)
  } catch (error) {
    console.error('Debug API Error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to fetch debug data',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}