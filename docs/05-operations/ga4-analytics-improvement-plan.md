# GA4 分析に基づく改善計画
> 対象ドメイン: ai-reboot.io
> 分析期間: 2025年11月〜2026年2月（90日間 + 比較期間）
> 作成日: 2026-02-28
> 改訂日: 2026-02-28（Codexレビュー指摘対応）
> GA4 プロパティID: 501149490

---

## 1. 現状分析サマリー

### GA4 概要（直近90日: 2025年12月〜2026年2月）

| 指標 | 直近90日 | 前90日 | 変化 |
|------|----------|--------|------|
| セッション数 | 2,879 | 194 | **+1,384%** |
| ユーザー数 | 2,363 | 118 | +1,902% |
| 直帰率 | **81%** | 46% | **+35pt 悪化** |
| 平均セッション時間 | **55秒** | 138秒 | **-60% 悪化** |
| PV数 | 3,442 | - | - |

### 月次トレンド

| 月 | セッション | ユーザー | 直帰率 | PV |
|----|-----------|---------|--------|-----|
| 2025年11月 | 59 | 30 | 44% | 121 |
| 2025年12月 | 73 | 42 | 62% | 152 |
| 2026年1月 | **1,872** | 1,625 | **87%** | 2,176 |
| 2026年2月 | 915 | 732 | 69% | 1,113 |

> **観察**: 1月から広告（Instagram/Facebook有料）の大量投入が始まり、セッション数は急増。しかし直帰率・滞在時間は急激に悪化。

---

## 2. 発見された主要課題

### 🚨 課題1: 有料ソーシャル広告が予算を浪費している（最優先）

**データ根拠:**
| 流入元 | セッション数 | 直帰率 | 平均滞在時間 |
|--------|------------|--------|------------|
| Instagram 広告 (ig/paid) | 1,176 | **98%** | **2秒** |
| Facebook 広告 (fb/paid) | 556 | **99%** | **0秒** |
| 合計Paid Social | **1,732** (全体の60%) | 98% | 2秒 |

全セッションの60%を占めているにもかかわらず、ほぼ全員が2秒以内に離脱。
これは以下のいずれかを示す：
- **ランディングページがモバイル表示で致命的な問題**（広告流入の大半はモバイル）
- 広告のターゲティング・クリエイティブとLPの内容が不一致
- ページロードが遅すぎて表示前に離脱

**推定インパクト**: 月間広告費の50〜60%が無駄になっている可能性
**実装難易度**: 中

---

### 🔴 課題2: モバイル体験が壊滅的

**データ根拠:**
| デバイス | セッション | 割合 | 直帰率 | ユーザー数 |
|---------|----------|------|--------|----------|
| モバイル | 2,100 | 73% | **92%** | 1,982 |
| デスクトップ | 713 | 25% | 48% | 331 |
| タブレット | 52 | 2% | 88% | 52 |

モバイルの直帰率92% vs デスクトップ48%。この44ptの差は深刻。
デスクトップではエンゲージメントが良好なのに、モバイルでは機能していない。

**推定インパクト**: モバイル改善で直帰率を20〜30pt削減できれば、エンゲージするユーザーが約600人増加
**実装難易度**: 中〜高

---

### 🔴 課題3: コンバージョントラッキングが未設定

**データ根拠:**
- GA4上の全コンバージョン数: **0件**（設定なし）
- 問い合わせフォーム、セミナー申込などのイベントが計測できていない

現状、どのページ・チャネルがリード獲得に貢献しているか完全に不明。
広告効果の正確な測定も不可能。

**推定インパクト**: 意思決定の根拠がゼロ。改善の優先度判断ができない
**実装難易度**: 低

---

### 🟡 課題4: /academy と /webtoon がランディングページとして機能していない

**データ根拠:**

| ランディングページ | セッション | 直帰率 | 平均滞在時間 |
|----------------|----------|--------|------------|
| /webtoon | 894 | 92% | 18秒 |
| /academy | 844 | 95% | **16秒** |
| /seminars/career-design | 178 | 92% | 24秒 |
| /seminars/career-design-ad | 86 | 92% | **9秒** |
| / (トップページ) | 134 | 45% | 258秒 ✅ |
| /corporate/ax1 | 58 | 40% | 225秒 ✅ |
| /rebooters | 17 | **6%** | **334秒** 🏆 |

`/rebooters` は直帰率6%・滞在時間334秒という突出したエンゲージメントを示している。
一方、最も流入の多い `/academy` はLP機能として最低のパフォーマンス。

**推定インパクト**: LPを最適化すれば問い合わせ率が大幅に向上
**実装難易度**: 中

---

### 🟡 課題5: Vercel.comからの内部トラフィックが混入

**データ根拠:**
- vercel.com / referral: 100セッション（32%直帰率、329秒滞在）
- 開発・確認作業と推測される

実際のユーザー行動の測定に誤差が生じている。
**実装難易度**: 低

---

### 🟢 課題6: Search Console連携ができていない

GA4の内部データでは、どのキーワードで流入しているか不明。
Google Search Console連携により、SEO改善の根拠となるキーワードデータが取得可能。

---

## 3. 改善施策（優先順位付き）

---

### P0フェーズ（Week 1 並行実施）: 計測基盤 × 広告費保全を同時着手

> Priority 1（計測基盤）と Priority 2（広告LP改修）は直列でなく**並行実施**する。
> 計測ゼロの状態で広告費浪費を放置するリスクを回避するため。

| タスク | 担当 | 目安工数 |
|-------|------|---------|
| 主要CVイベント3件のみ先行実装（contact_form_submit / line_register_click / seminar_apply_click） | エンジニア | 0.5日 |
| /academy モバイルFV緊急レビュー → CTA追加 | デザイン/エンジニア | 1日 |
| 広告配信先を暫定で / (トップページ) に切替 | 広告担当 | 即時 |
| Vercel内部トラフィック除外フィルタ設定 | GA管理者 | 15分 |

---

### Priority 1: GA4コンバージョントラッキング実装
**目的**: 意思決定の根拠となるデータ取得
**期待効果**: 各施策のROI測定が可能になる

#### 1-1. GA4イベント設計

計測すべきコンバージョンイベント:
1. `contact_form_submit` - 問い合わせフォーム送信完了（API成功後）
2. `seminar_apply_click` - セミナー申込ボタンクリック
3. `line_register_click` - LINE登録ボタンクリック
4. `briefing_apply_click` - 説明会申込クリック
5. `scroll_depth_50` - ページ50%スクロール（エンゲージメント指標）
6. `scroll_depth_90` - ページ90%スクロール

#### 1-2. 型定義の準備（先に作成すること）

`window.gtag` は TypeScript strict mode では型不明のためコンパイルエラーになる。
**`types/global.d.ts` を新規作成**してから `lib/analytics.ts` を実装する。

```typescript
// types/global.d.ts（新規作成）
export {}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      params?: Record<string, string | number | boolean>
    ) => void
    dataLayer: unknown[]
  }
}
```

#### 1-3. analytics.ts の実装

```typescript
// lib/analytics.ts（新規作成）
// ※ 'use client' は不要 — このファイルはサーバー/クライアント両方からimport可能
//    実際の window.gtag 呼び出しはクライアント側コンポーネントから行うこと

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

// GA4イベント送信ユーティリティ
export function sendGAEvent(
  eventName: string,
  params?: Record<string, string | number>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

// よく使うイベントの型安全ラッパー
export const trackEvent = {
  // ContactForm.tsx の fetch('/api/contact') 成功後に呼び出す
  contactFormSubmit: () =>
    sendGAEvent('contact_form_submit', { event_category: 'conversion' }),

  seminarApplyClick: (seminarName: string) =>
    sendGAEvent('seminar_apply_click', { seminar_name: seminarName }),

  // FloatingLineCta / briefing ページの外部LINEリンクで呼び出す
  lineRegisterClick: (source: string) =>
    sendGAEvent('line_register_click', { source }),

  briefingApplyClick: () =>
    sendGAEvent('briefing_apply_click', { event_category: 'conversion' }),

  scrollDepth: (depth: 50 | 90) =>
    sendGAEvent(`scroll_depth_${depth}`, {
      page_path: window.location.pathname,
    }),
}
```

#### 1-4. コンバージョン発火ポイント（実装場所の正解）

| イベント | 発火場所 | 発火条件 |
|---------|---------|---------|
| `contact_form_submit` | `components/contact/ContactForm.tsx` L97付近 `if (response.ok)` ブロック内 | `fetch('/api/contact')` の成功レスポンス後 |
| `line_register_click` | `components/academyLanding/common/FloatingLineCta.tsx` | 外部LINEリンクのクリック時 |
| `seminar_apply_click` | 各セミナー申込ボタン | 申込ボタンクリック時 |
| `briefing_apply_click` | 説明会申込ボタン | 申込ボタンクリック時 |

**ContactForm.tsx への組み込み例:**
```typescript
// components/contact/ContactForm.tsx（修正箇所のみ）
import { trackEvent } from '@/lib/analytics'

// handleSubmit 内の response.ok ブロックに追加
if (response.ok) {
  trackEvent.contactFormSubmit()  // ← ここに追加（送信完了後）
  setSubmitStatus('success')
  // ...既存のリセット処理
}
```

**FloatingLineCta.tsx への組み込み例:**
```typescript
// components/academyLanding/common/FloatingLineCta.tsx（修正箇所のみ）
import { trackEvent } from '@/lib/analytics'

// LINEリンクの onClick に追加
<a
  href={lineUrl}
  onClick={() => trackEvent.lineRegisterClick('floating_cta')}
  target="_blank"
  rel="noopener noreferrer"
>
```

#### 1-5. App Router でのページ遷移計測（page_view）

App Router は SPA 遷移のため、デフォルトの gtag `page_view` は初回ロードしか発火しない。
以下の2方式のどちらかを選択すること（**どちらかに一本化し、両立させないこと**）:

**方式A（推奨）: GA4 Enhanced Measurement に依存**
- GA4 管理 → データストリーム → Enhanced Measurement で「ページビュー」をON
- `history.pushState` を監視するため App Router の遷移も自動検知される
- 実装コスト: ゼロ（GA4管理画面の設定のみ）

**方式B: `usePathname` で手動送信**
```typescript
// components/GoogleAnalytics.tsx に追加（'use client' 必須）
'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { sendGAEvent, GA_MEASUREMENT_ID } from '@/lib/analytics'

// GoogleAnalytics コンポーネント内に追加
const pathname = usePathname()
useEffect(() => {
  if (GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, { page_path: pathname })
  }
}, [pathname])
```

> **注意**: 現行の `components/GoogleAnalytics.tsx` は `'use client'` 指定で `NEXT_PUBLIC_GA_MEASUREMENT_ID` を使用しており、引数なしで `app/layout.tsx` からインポートされている。この I/F を変更しないこと。

#### 1-6. Measurement Protocol（Phase 2 以降）

サーバーサイドからの計測（二重計測防止・広告ブロッカー回避）は **Phase 2** に分離する。
理由: `client_id`（`_ga` クッキー由来）の受け渡し設計が必要で、先にクライアント計測を安定させてから着手すべきため。

Phase 2 の方針（参考）:
- `client_id` はクライアントから Server Action または API Route に渡す
- `app/actions/tracking.ts` を新規作成
- `/api/contact` の成功処理内で Measurement Protocol API に POST

#### 1-7. GA4コンバージョン設定（管理画面）

GA4管理画面で以下を「コンバージョン」として設定:
- `contact_form_submit`
- `seminar_apply_click`
- `line_register_click`
- `briefing_apply_click`

---

### Priority 2: 有料広告ランディングページの緊急修正
**目的**: Instagram/Facebook広告からの直帰率98%を改善し、広告費のROIを回復
**期待効果**: 直帰率を98% → 60%以下に改善（エンゲージするユーザー660人/月増加の試算）

#### 2-1. 広告専用LPの作成（Route Groupによるレイアウト分離）

現行 `app/layout.tsx` は全ページに `Header`/`Footer` を描画しているため、
`app/lp/*` を追加するだけでは「ヘッダー/フッターなし」要件を満たせない。
**Route Group を使ってレイアウトを分離する**。

```
app/
├── (site)/                     # 既存サイト全体（Header/Footer あり）
│   ├── layout.tsx              # Header + MainWrapper + Footer を描画
│   ├── page.tsx                # トップページ
│   ├── academy/
│   ├── corporate/
│   └── ...
└── (lp)/                       # 広告LP専用（Header/Footer なし）
    ├── layout.tsx              # ヘッダー/フッターを描画しないシンプルなlayout
    └── lp/
        ├── academy-ig/
        │   └── page.tsx        # Instagram広告専用LP
        └── academy-fb/
            └── page.tsx        # Facebook広告専用LP
```

**`app/(lp)/layout.tsx` の実装方針:**
```typescript
// app/(lp)/layout.tsx（新規作成）
import type { ReactNode } from 'react'

export default function LpLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
```

> **注意**: Route Group 導入時は既存の `app/layout.tsx` を `app/(site)/layout.tsx` に移動するか、
> `app/layout.tsx` を最小構成にして各 Route Group の layout で差分を設定する方式を取る。
> 移行時に既存ページのルーティングが壊れないことを必ず確認すること。

**広告専用LPの要件:**
- ファーストビューに価値提案を凝縮: 「何ができるようになるか」を3秒で伝える
- ヘッダー/フッターなし: 離脱ポイントを減らす
- CTAを最上部に配置: スクロールなしで申込ボタンが見える
- スマホ最適化: フォントサイズ最小16px、ボタン高さ最小56px

#### 2-2. /academyページのモバイルFVを改修

```typescript
// 改修対象ファイル（実際にレンダリングされるファイル）:
// components/academyLanding/sections/HeroSection.tsx
// ※ app/academy/page.tsx が import しているのはこのファイル
// ※ components/academy/AcademyHero.tsx は /academy では使用されていないため修正しても効果なし

// 改修ポイント:
// 1. H1テキストをモバイルで24px以上に（text-2xl 以上を保証）
// 2. CTAボタンをFV内（fold内）に必ず表示
// 3. ページロード時のLCP最適化（FV画像を next/image の priority 付きで読み込み）
// 4. Framer Motion のアニメーションを prefers-reduced-motion で削減
```

#### 2-3. ページ速度の改善

```bash
# 現状診断
npx lighthouse https://ai-reboot.io/academy --view
```

```typescript
// FV画像の優先読み込み設定（HeroSection.tsx 内）
import Image from 'next/image'
<Image src="/hero.webp" alt="..." priority width={1200} height={600} />

// Framer Motionの動的インポート（バンドルサイズ削減）
import dynamic from 'next/dynamic'
const MotionDiv = dynamic(
  () => import('framer-motion').then((m) => m.motion.div),
  { ssr: false }
)
```

---

### Priority 3: モバイルUX改善
**目的**: モバイル直帰率92%をデスクトップ並み(48%)に近づける
**期待効果**: モバイルユーザーのエンゲージメント向上、有機流入の質改善

#### 3-1. モバイルCTA固定バー実装

スクロール中でも常にCTAにアクセスできる固定バーをモバイルのみ表示:

```typescript
// components/ui/MobileStickyBar.tsx（新規作成）
'use client'
import { useState, useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

export function MobileStickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`
      fixed bottom-0 left-0 right-0 z-50 p-4
      bg-white border-t border-gray-100 shadow-lg
      md:hidden transition-transform duration-300
      ${visible ? 'translate-y-0' : 'translate-y-full'}
    `}>
      <a
        href="/contact"
        className="block w-full bg-will-primary text-white text-center
                   py-4 rounded-xl font-bold text-lg"
        onClick={() => trackEvent.contactFormSubmit()}
      >
        無料相談を申し込む
      </a>
    </div>
  )
}
```

配置ファイル: `app/layout.tsx` または各ページの layout

#### 3-2. タップターゲットサイズの確保

グローバルな `button, a[role="button"]` への一括適用は既存UIのレイアウトを崩すリスクがある。
**CTA系コンポーネントに限定したユーティリティクラスで段階適用する**。

```css
/* app/globals.css に追加 */
/* CTA専用タップターゲット確保クラス — 全体適用は行わない */
.tap-target-lg {
  min-height: 44px;
  min-width: 44px;
}
```

```typescript
// 使用例: CTA系コンポーネントのボタンにのみ適用
<button className="tap-target-lg bg-will-primary text-white ...">
  無料相談を申し込む
</button>
```

#### 3-3. フォントサイズのモバイル対応

Tailwind設定で本文の最小フォントサイズを保証:
```typescript
// tailwind.config.ts
theme: {
  extend: {
    fontSize: {
      'base': ['16px', { lineHeight: '1.75' }], // モバイルで最小16px
    }
  }
}
```

---

### Priority 4: /rebooters ページの活用強化
**目的**: 直帰率6%・滞在334秒という最高エンゲージメントページへの流入を増やす
**期待効果**: 質の高いユーザーとのタッチポイント増加

#### 4-1. 内部リンク強化

高流入ページ（/academy, /corporate, /）から /rebooters への導線を追加:
```typescript
// components/sections/ の各ページにリンクカードを追加
// 例: 「受講生の声・実績を見る → /rebooters」
```

#### 4-2. /rebooters ページのSEO最適化

```typescript
// app/rebooters/page.tsx
export const metadata: Metadata = {
  title: 'AIリブート受講生の声・成果 | AI REBOOT',
  description: 'AIリブートで学んだ受講生のリアルな声と成果を掲載。...',
  openGraph: {
    title: 'AIリブート受講生の声・成果',
    description: '...',
    images: ['/og/rebooters.jpg'],
  }
}
```

---

### Priority 5: 内部トラフィック除外とデータクレンジング
**目的**: 正確な分析データの確保
**実装難易度**: 低

#### 5-1. GA4管理画面での除外設定（IPフィルタ）

GA4管理画面 → データストリーム → フィルタ設定:
- 「内部トラフィック」フィルタを追加
- 開発環境のIPアドレスを登録して除外

#### 5-2. クッキーによる内部トラフィック除外（IP依存の補完）

Vercel運用ではIPが変動しやすいため、クッキー方式を併用する:

```typescript
// 開発・確認時に以下をブラウザコンソールで実行してクッキーをセット
document.cookie = 'ga_traffic_type=internal; path=/'

// components/GoogleAnalytics.tsx で読み取り、内部トラフィックを除外
const isInternal = document.cookie.includes('ga_traffic_type=internal')
if (!isInternal) {
  window.gtag('set', 'traffic_type', 'internal')  // GA4フィルタと連携
}
```

GA4管理画面の「内部トラフィックの定義」で `traffic_type` = `internal` のルールを設定することで、
クッキーがセットされた端末のセッションを自動除外できる。

#### 5-3. Next.jsで開発環境のGA無効化

`components/GoogleAnalytics.tsx` は現在、本番/開発環境の区別なく動作している。
環境変数 `NEXT_PUBLIC_GA_MEASUREMENT_ID` が未設定の開発環境では自動的に `null` を返すため、
実質的に無効化されているが、明示的に制御するには以下を追加する:

```typescript
// app/layout.tsx（修正）
{process.env.NODE_ENV === 'production' && (
  <GoogleAnalytics />
)}
```

---

### Priority 6: Search Console 連携とSEO計測
**目的**: オーガニック検索の詳細データ取得（現状は完全に不明）

#### 6-1. Search Console設定

1. Google Search Console で `ai-reboot.io` を登録
2. GA4とSearch Consoleをリンク:
   - GA4管理 → プロパティ設定 → Search Consoleのリンク

#### 6-2. GA4での検索クエリ確認

連携後、GA4 → レポート → 集客 → Search Console で確認可能:
- 検索クエリ別クリック数・表示回数・CTR
- ランディングページ別オーガニックパフォーマンス

**現状のOrganicパフォーマンス（GA4ベース）:**
| ソース | セッション | 直帰率 | 滞在時間 |
|--------|----------|--------|--------|
| google / organic | 393 | 44% | 150秒 |
| yahoo / organic | 19 | 11% | 236秒 |

→ Organicユーザーは質が高い。SEO強化が有効な戦略。

---

## 4. 実装アーキテクチャ（Next.js 15 App Router）

### GA4設定の全体構造

```
app/
├── (site)/
│   ├── layout.tsx          # Header + Footer を含むサイト共通レイアウト
│   ├── page.tsx            # トップページ
│   ├── academy/            # academyLanding コンポーネントを使用
│   │   └── page.tsx        # ← HeroSection は components/academyLanding/sections/HeroSection.tsx
│   ├── corporate/
│   └── contact/
│       └── page.tsx        # ContactForm を含むページ
└── (lp)/
    ├── layout.tsx          # ヘッダー/フッターなしのLP専用レイアウト
    └── lp/
        ├── academy-ig/
        │   └── page.tsx    # Instagram広告専用LP
        └── academy-fb/
            └── page.tsx    # Facebook広告専用LP

lib/
└── analytics.ts            # GA4イベント送信ユーティリティ（新規作成）

types/
└── global.d.ts             # window.gtag の型宣言（新規作成）

components/
├── GoogleAnalytics.tsx     # 既存。引数なし。NEXT_PUBLIC_GA_MEASUREMENT_ID を参照
├── contact/
│   └── ContactForm.tsx     # response.ok 後に trackEvent.contactFormSubmit() を追加
├── academyLanding/
│   ├── common/
│   │   └── FloatingLineCta.tsx  # onClick に trackEvent.lineRegisterClick() を追加
│   └── sections/
│       └── HeroSection.tsx      # /academy のFV（LCP最適化対象）
└── ui/
    └── MobileStickyBar.tsx  # モバイル固定CTAバー（新規作成）
```

### 環境変数設定

```bash
# .env.local（実際の変数名。NEXT_PUBLIC_GA_ID ではない）
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
GA_API_SECRET=xxxxxxxxxxxx  # Phase 2 の Measurement Protocol用（今は不要）
```

> **重要**: `NEXT_PUBLIC_GA_ID` という変数名は本プロジェクトに**存在しない**。
> `.env.example` および `components/GoogleAnalytics.tsx` で確認済みの正しい変数名は
> `NEXT_PUBLIC_GA_MEASUREMENT_ID` である。

---

## 5. ページ別改善優先マトリクス

| ページ | LP Sessions | 直帰率 | 滞在時間 | 優先度 | 改善アクション |
|--------|------------|--------|--------|--------|--------------|
| /academy | 844 | 95% | 16秒 | 🔴最高 | HeroSection モバイルFV刷新、CTA追加 |
| /webtoon | 894 | 92% | 18秒 | 🔴最高 | 内容とLPの整合性確認 |
| /seminars/career-design-ad | 86 | 92% | 9秒 | 🔴最高 | 広告専用LP作成（Route Group (lp)） |
| /seminars/career-design | 178 | 92% | 24秒 | 🔴高 | CTA最適化 |
| /corporate/ax1-special | 130 | 57% | 179秒 | 🟡中 | 申込フローの明確化 |
| / (トップ) | 134 | 45% | 258秒 | 🟢現状維持 | コンバージョン追加 |
| /corporate/ax1 | 58 | 40% | 225秒 | 🟢良好 | 内部リンク強化 |
| /rebooters | 17 | 6% | 334秒 | 🟢良好 | 流入強化（内部リンク） |

---

## 6. 成功指標（KPI）

### 3ヶ月後の目標値

| 指標 | 現状 | 3ヶ月目標 | 達成手段 |
|------|------|---------|---------|
| 有料広告直帰率 | 98% | **60%以下** | LP刷新、広告設定最適化 |
| モバイル直帰率 | 92% | **65%以下** | モバイルUX改善 |
| 平均セッション時間 | 55秒 | **90秒以上** | LP改善、内部リンク強化 |
| コンバージョン数 | 0（未計測） | **計測開始** | GA4イベント実装 |
| Organic Search セッション | 393/90日 | **600/90日** | SEO強化 |
| /rebooters 流入 | 17/90日 | **50/90日** | 内部リンク追加 |

### 週次モニタリング指標

```
毎週確認:
□ Paid Social 直帰率（98%から改善しているか）
□ コンバージョンイベント発火数
□ モバイル vs デスクトップの直帰率差
□ /academy, /webtoon のLP直帰率

毎月確認:
□ チャネル別セッション数と質の変化
□ Organic Searchの成長
□ コンバージョン率（チャネル別）
```

---

## 7. 実装完了条件（受け入れテスト）

### GA4イベント計測の受け入れテスト

| # | テスト内容 | 確認方法 | 合格条件 |
|---|-----------|---------|---------|
| 1 | contact_form_submit が送信完了後に1回だけ発火する | GA4 DebugView で確認 | フォーム送信後にイベントが1件のみ表示される |
| 2 | ページ遷移ごとに page_view が発火する | GA4 DebugView でページ移動を確認 | 各ページ遷移でイベントが表示される |
| 3 | line_register_click が LINEリンククリック時に発火する | GA4 DebugView で確認 | FloatingLineCta クリック後にイベントが表示される |
| 4 | 開発環境（NODE_ENV=development）でGAが送信されない | ブラウザのネットワークタブ確認 | `/collect` へのリクエストが発生しない |
| 5 | TypeScript のビルドエラーがゼロ | `npx tsc --noEmit` | エラーなし |
| 6 | 内部トラフィック（ga_traffic_type=internal クッキー）が除外される | GA4 DebugView + フィルタ確認 | クッキーセット後のセッションがレポートに含まれない |

### DebugView での確認手順

1. Chrome拡張「Google Analytics Debugger」を有効化
2. サイトを開き、GA4管理 → DebugView でリアルタイムイベントを確認
3. 各CTAをクリックしてイベントが正しいパラメータで発火することを確認

### UTMパラメータの動作確認

```
確認URL例（広告LP向け）:
https://ai-reboot.io/lp/academy-ig?utm_source=instagram&utm_medium=paid&utm_campaign=academy_2026q1

確認事項:
□ GA4 でセッションが utm_source=instagram, utm_medium=paid で記録される
□ 広告LP（/lp/academy-ig）でヘッダー/フッターが非表示
□ CTAクリック後にイベントが発火する
```

---

## 8. 重要な発見・メモ

### 注目データポイント

1. **ChatGPT からの流入が出現**: chatgpt.com / referral で8セッション。AI検索エンジンからの流入が始まっており、今後急増する可能性がある。AI REBOOT というブランドはAI系コンテンツとの親和性が高く、AI検索での上位表示を狙う価値がある。

2. **note.com / referral**: 9セッション、44%直帰率。Noteでのコンテンツマーケティングが実を結びつつある。発信を強化する余地あり。

3. **/corporate/ax1-2 が隠れた優良LP**: 12セッションのみだが滞在時間213秒。コンテンツの質が高い証拠。露出を増やすことで成果が期待できる。

4. **Yahoo! organic が最高品質**: 19セッション・11%直帰・236秒滞在。Yahoo!経由のユーザーは非常に意欲的。Yahoo!広告やYahoo!コンテンツへの出稿も検討価値あり。

5. **Search Consoleスコープ未設定**: GASの現行スコープではSearch Console APIにアクセス不可。`https://www.googleapis.com/auth/webmasters.readonly` スコープの追加が必要。

---

## 9. 即座に実行できるアクション（コーディング不要）

1. **GA4でコンバージョンイベントを手動設定** → 問い合わせページへのページビューをコンバージョンに設定（実装なしでも可能）
2. **Vercel内部トラフィック除外フィルタ** → GA4管理画面で設定（5分で完了）
3. **Instagram/Facebook広告のターゲティング見直し** → 広告マネージャーで現在の設定を確認し、LPとのミスマッチを解消
4. **Search Console登録** → ai-reboot.io をSearch Consoleに追加し、GA4にリンク
5. **広告配信先を一時的に / (トップページ) に変更** → 直帰率98%の /academy への配信を停止し、45%直帰のトップページへ迂回（即時効果）

---

*このドキュメントはGA4プロパティ `501149490`（AI REBOOT）の実データに基づいて作成されました。*
*Search ConsoleデータはAPI権限不足により取得できなかったため、GA4データのみで分析しています。*
*改訂版（2026-02-28）: Codexレビュー指摘 MUST FIX 6件・SHOULD FIX 5件を反映。*
