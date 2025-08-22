import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // /willtrust パスの保護
  if (request.nextUrl.pathname.startsWith('/willtrust')) {
    const authCookie = request.cookies.get('willtrust-auth')
    
    // 認証クッキーが存在し、正しい値を持っているか確認
    if (!authCookie || authCookie.value !== 'authenticated') {
      // ログインページにリダイレクト
      return NextResponse.redirect(new URL('/auth/willtrust', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/willtrust/:path*'
}