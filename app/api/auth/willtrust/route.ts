import { NextRequest, NextResponse } from 'next/server'

// パスワードは環境変数から取得（本番環境では必ず環境変数を使用）
const CORRECT_PASSWORD = process.env.WILLTRUST_PASSWORD || 'willtrust2025'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password } = body
    
    if (password === CORRECT_PASSWORD) {
      // 認証成功 - クッキーを設定
      const response = NextResponse.json({ success: true })
      response.cookies.set('willtrust-auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 7日間有効
        path: '/'
      })
      return response
    } else {
      // 認証失敗
      return NextResponse.json(
        { success: false, error: 'パスワードが正しくありません' },
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: '認証処理中にエラーが発生しました' },
      { status: 500 }
    )
  }
}

// ログアウト用
export async function DELETE(request: NextRequest) {
  const response = NextResponse.json({ success: true })
  response.cookies.delete('willtrust-auth')
  return response
}