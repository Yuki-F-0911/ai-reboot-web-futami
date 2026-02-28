# 設計書レビュー結果

## 総合評価: REJECT
理由: 現行コードベース（Next.js 15 App Router / TypeScript strict）に対して、そのまま実装するとビルドエラーまたは計測欠損が発生する箇所が複数あります。特に GA 変数名・コンポーネントI/F不整合、計測ポイントの誤設計、LPレイアウト前提の不一致は着手前に修正が必須です。

## 必須修正 (MUST FIX)
### 1. GA環境変数名と既存コンポーネントI/Fの不整合
- 問題: 設計書は `NEXT_PUBLIC_GA_ID` と `<GoogleAnalytics gaId={...} />` を前提にしていますが、現行実装は `NEXT_PUBLIC_GA_MEASUREMENT_ID` を参照し、`GoogleAnalytics` は引数なしです。設計書どおりに実装すると `app/layout.tsx` 側で型不整合になります。
- 修正案: 変数名を `NEXT_PUBLIC_GA_MEASUREMENT_ID` に統一し、`GoogleAnalytics` のI/Fを「引数なし」か「`gaId`必須」のどちらかに一本化する。関連記述（環境変数例、実装例、配置例）を一括で同期更新する。

### 2. TypeScript strict でコンパイル不可のコード例が含まれている
- 問題: `window.gtag` の型宣言がなく strict mode でエラーになります。加えて `router.push` を使うサンプルに `router` の取得がなく、Framer Motion動的読込の例は `dynamic` の import が抜けています。
- 修正案: `global.d.ts` 等で `window.gtag` を宣言し、`router` 使用例は `useRouter` を明示する。`dynamic` サンプルには `import dynamic from "next/dynamic"` を必ず含める。

### 3. コンバージョン計測ポイントが実態とズレており誤計測を誘発する
- 問題: `contact_form_submit` を「問い合わせページへ遷移したクリック」で発火する設計になっており、実送信件数と乖離します。現行の実送信は `components/contact/ContactForm.tsx` の `fetch('/api/contact')` 成功時です。
- 修正案: `contact_form_submit` は API 成功レスポンス後に限定発火する。`line_register_click` は `FloatingLineCta` や `/briefing` の外部LINEリンクで発火、`seminar_apply_click` は実際の申込導線に限定発火するようイベント設計を修正する。

### 4. Measurement Protocol実装案が不完全で、属性連携不能リスクが高い
- 問題: `sessionId` だけを受ける関数案では GA4 連携に必要な `client_id` 取得経路が不明です。さらに記載先の `app/contact/complete/page.tsx` は現状存在せず、`app/actions/tracking.ts` も未作成です。
- 修正案: まずはクライアントイベントで計測を先行し、サーバー送信は第2段階に分離する。MP実装時は `client_id`（`_ga` 由来）を確実に受け渡し、`/api/*` または Server Action のどちらで送るかを1方式に固定する。存在しないパス前提の記述を撤回する。

### 5. 「広告LPはヘッダー/フッターなし」要件が現行レイアウト構成で満たせない
- 問題: 現在の `app/layout.tsx` は全ページに `Header`/`Footer` を常時描画します。`app/lp/*` を追加するだけでは要件を満たせません。
- 修正案: Route Group を導入し、`(site)` と `(lp)` でレイアウトを分離する設計に改める。LP専用レイアウトでのみヘッダー/フッターを非表示にする。

### 6. 変更対象ファイル指定が現行実装と不一致
- 問題: 設計書は `/academy` 改修対象を `components/academy/AcademyHero.tsx` としていますが、現行 `/academy` で使われているのは `components/academyLanding/sections/HeroSection.tsx` です。誤ファイルを修正すると効果が出ません。
- 修正案: 実際にレンダリングされるコンポーネントを起点に対象を再定義する（`app/academy/page.tsx` の import ツリーを正として更新）。

## 推奨修正 (SHOULD FIX)
### 1. 優先順位を「計測基盤」と「広告費保全」の並行実行に再設計
- 問題: Priority 1→2 の直列実行だと、広告費浪費（課題1）の是正が遅れる可能性があります。
- 修正案: Week 1で「最小計測（主要CVイベントのみ）」と「広告LP緊急改修/配信先調整」を並行実施するP0フェーズを追加する。

### 2. モバイルタップ領域のグローバルCSS指定が広すぎる
- 問題: `button, a[role="button"], .btn` への一括 `min-height/min-width` は既存UIの密度・レイアウトを崩すリスクがあります。
- 修正案: CTA系コンポーネントに限定したユーティリティクラス（例: `.tap-target-lg`）で段階適用し、全体適用は避ける。

### 3. 内部トラフィック除外方法をIP依存だけにしない
- 問題: Vercel運用ではIPベース除外が不安定になりやすく、計測ノイズが残る可能性があります。
- 修正案: デバッグ専用クエリ/クッキーで `traffic_type=internal` を付与する仕組みを実装し、GA4フィルタと併用する。

### 4. App Router遷移時のページ計測方針が未定義
- 問題: SPA遷移時の `page_view` 取得ルールが設計書に明示されていません。
- 修正案: `usePathname` ベースの page_view 送信方針（または GA4 Enhanced Measurement依存方針）を設計書に明記し、検証手順を追加する。

### 5. 実装後の検証手順が不足
- 問題: DebugView確認、イベント重複検知、UTM別検証、ロールバック条件が不足しています。
- 修正案: 「実装完了条件」を追加し、最低限の受け入れテスト（イベント名・パラメータ・発火回数）を定義する。

## 承認事項 (OK)
- 課題をデータ根拠つきで整理し、ビジネスインパクトまで明示している点は良い。
- KPI と週次/月次モニタリング項目が明確で、運用フェーズを見据えた構成になっている。
- 内部トラフィック除外、Search Console連携、即時にできるノーコード施策まで含めている点は実行性が高い。
- `/rebooters` の高エンゲージメントを次施策に接続する視点は妥当。
