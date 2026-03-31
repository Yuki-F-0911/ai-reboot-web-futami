import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// AX1 イベント一覧（eventDate = 開催日 JST、翌日から自動リダイレクト）
const ax1Events = [
  { path: '/corporate/ax1',         eventDate: '2025-12-01' },
  { path: '/corporate/ax1-2',       eventDate: '2026-01-15' },
  { path: '/corporate/ax1-special', eventDate: '2026-02-25' },
  { path: '/corporate/ax1-0415',    eventDate: '2026-04-15' },
] as const

function getJSTDate(): string {
  return new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Tokyo' })
}

function handleAX1Redirect(request: NextRequest): NextResponse | null {
  const pathname = request.nextUrl.pathname
  const matched = ax1Events.find((e) => e.path === pathname)
  if (!matched) return null

  const today = getJSTDate()

  // 開催日当日まではアクセス可能（翌日からリダイレクト）
  if (today <= matched.eventDate) return null

  // 終了済み → 直近の未来イベントにリダイレクト
  const upcoming = ax1Events.find((e) => e.eventDate >= today)
  const destination = upcoming ? upcoming.path : '/'

  if (destination === pathname) return null
  return NextResponse.redirect(new URL(destination, request.url))
}

export function middleware(request: NextRequest) {
  // AX1 イベント日付ベースのリダイレクト
  const ax1 = handleAX1Redirect(request)
  if (ax1) return ax1

  // /willtrust パスの保護
  if (request.nextUrl.pathname.startsWith('/willtrust')) {
    const authCookie = request.cookies.get('willtrust-auth')
    if (!authCookie || authCookie.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/auth/willtrust', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/willtrust/:path*', '/corporate/ax1', '/corporate/ax1-2', '/corporate/ax1-special', '/corporate/ax1-0415'],
}