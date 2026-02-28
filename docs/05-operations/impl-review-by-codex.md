# 実装レビュー結果

## 総合評価: CONDITIONAL_PASS
理由:
- Route Group 移行、LP noindex、ContactForm の成功時トラッキング、TypeScript strict チェックは問題ありません。
- ただし、スクロール深度トラッキングがページ遷移後に欠落する実装上の不具合があり、修正が必要です。

## 必須修正 (MUST FIX)
### 1. ScrollDepth が初回ページ以降で欠落する
- 問題:
- `components/layout/ScrollDepthTracker.tsx:11-30` では `fired` の初期化が `useEffect([])` で一度しか行われません。
- `app/(site)/layout.tsx:16` に配置されているため、App Router のクライアント遷移後もコンポーネントが再マウントされず、既に発火済みの深度 (25/50/75/90) が次ページで再送信されません。
- 結果として、GA4 のページ別スクロール深度データが欠落します。
- 修正案:
- `usePathname()` を使い、`pathname` 変更時に `fired.current = new Set()` でリセットする。
- 遷移直後に `handleScroll()` を一度実行し、戻る遷移や途中位置からの閲覧でも正しく判定する。

## 推奨修正 (SHOULD FIX)
### 1. `window.gtag` 型が実ランタイムと乖離
- 問題:
- `types/global.d.ts:5-10` で `gtag` / `dataLayer` が必須になっていますが、GA未読込時には `undefined` になり得ます。
- 修正案:
- `gtag?: ...` / `dataLayer?: ...` の optional 化を推奨します。
- 必要に応じて `gtag` のコマンド別オーバーロード型を定義し、型安全性を改善してください。

### 2. モバイル固定CTAのセーフエリア対応不足
- 問題:
- `components/ui/MobileStickyBar.tsx:17` の固定バーは iOS safe-area を考慮しておらず、端末によっては下端が詰まって見える可能性があります。
- 修正案:
- `pb-[calc(env(safe-area-inset-bottom)+1rem)]` 相当を追加し、必要ならページ末尾コンテンツとの重なり回避余白も設ける。

## 承認事項 (OK)
- `app/layout.tsx` のみが `html/body` を持ち、`app/(site)/layout.tsx` と `app/(lp)/layout.tsx` は二重定義になっていません。
- Route Group (`(site)`, `(lp)`) は URL 非露出のため、公開URL変更は発生しません。`generateStaticParams` も `app/(site)` 配下で継続定義を確認しました。
- `lib/analytics.ts` は `window.gtag` の存在チェック後のみ送信し、`window` 未定義環境を回避しています。
- `components/contact/ContactForm.tsx:98-101` で `trackEvent.contactFormSubmit()` は `response.ok` 成功時のみ発火します。
- 追加イベントの payload にメール・氏名などの個人情報は含まれていません。
- `app/(lp)/lp/academy-ig/page.tsx:8` に `robots: { index: false, follow: false }` が設定されています。
- LPはモバイルファーストな構成で、共通ヘッダー/フッターの自動挿入はありません。

## 実行確認ログ
- `npm run lint`: 既存ファイルで `@typescript-eslint/no-unused-vars` Warning のみ（今回レビュー対象外）。
- `npx tsc --noEmit`: エラーなし。
