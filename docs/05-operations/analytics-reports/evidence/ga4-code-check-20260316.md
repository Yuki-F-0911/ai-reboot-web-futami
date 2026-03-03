# GA4 計測健全性チェック（コードレベル）

> **作成日**: 2026-03-16
> **担当**: Claude Code（コード静的解析）
> **対象プロパティ**: ai-reboot.io (ID: 501149490)
> **計測ID**: G-ZLQ46ESV8H（action-plan参照値）

---

## A-1. GA4タグ実装確認

### 実装ファイル一覧

| ファイル | 役割 | ステータス |
|---------|------|-----------|
| `components/GoogleAnalytics.tsx` | gtag.js スクリプト注入 | ✅ 正常 |
| `lib/analytics.ts` | カスタムイベントヘルパー | ✅ 正常 |
| `components/layout/ScrollDepthTracker.tsx` | スクロール深度計測 | ✅ 正常 |
| `app/layout.tsx` | ルートレイアウト（全ページ共通） | ✅ 正常 |
| `app/(site)/layout.tsx` | サイトレイアウト（サイト系全ページ） | ✅ 正常 |

### GoogleAnalytics コンポーネント（components/GoogleAnalytics.tsx）

```
- strategy: "afterInteractive"（非ブロッキング実装 ✅）
- env var: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
- env var未設定時: return null（ローカル環境でGA4送信しない安全ガード ✅）
- gtag('config', GA_MEASUREMENT_ID) を正常呼び出し ✅
```

**実装評価**: 標準的な Next.js + GA4 実装として問題なし。

### NEXT_PUBLIC_GA_MEASUREMENT_ID 設定状況

```
.env.example: NEXT_PUBLIC_GA_MEASUREMENT_ID=（空欄 - テンプレートのみ）
.env.local: 存在しない（ローカルではGA4未送信 = 意図的な設計）
本番環境: Vercel Environment Variables で設定されているはず（要Vercel管理画面確認）
```

**⚠️ 注意**: コードレベルではG-IDの値を確認できない。本番環境の実際の値はVercel管理画面
（Settings → Environment Variables）で `NEXT_PUBLIC_GA_MEASUREMENT_ID` を確認すること。

### app/layout.tsx でのマウント

```tsx
<body>
  <GoogleAnalytics />   ← 全ページ（LP含む）で発火
  ...
</body>
```

**評価**: ルートレイアウトに配置されているため、全ページで確実にGA4タグが発火する ✅

---

## A-2. ScrollDepthTracker 実装確認

**ファイル**: `components/layout/ScrollDepthTracker.tsx`

### 実装仕様

| 項目 | 値 | 評価 |
|-----|-----|------|
| 計測閾値 | 25 / 50 / 75 / 90% | ✅ action-planの想定通り |
| イベント名 | `scroll_depth_25`, `scroll_depth_50`, `scroll_depth_75`, `scroll_depth_90` | ✅ |
| 重複発火防止 | `useRef<Set<number>>` で各閾値を1回のみ発火 | ✅ |
| SPA対応 | `usePathname()` の変化でSetをリセット（ページ遷移後も正確計測） | ✅ |
| パフォーマンス | `{ passive: true }` scroll listener | ✅ |
| マウント箇所 | `app/(site)/layout.tsx` のみ（LPページは対象外） | ✅ 意図的 |

### カスタムイベント一覧（lib/analytics.ts）

| 関数 | GA4イベント名 | パラメータ |
|-----|------------|-----------|
| `trackEvent.contactFormSubmit()` | `contact_form_submit` | `event_category: 'conversion'` |
| `trackEvent.seminarApplyClick(name)` | `seminar_apply_click` | `seminar_name` |
| `trackEvent.lineRegisterClick(source)` | `line_register_click` | `source` |
| `trackEvent.briefingApplyClick()` | `briefing_apply_click` | `event_category: 'conversion'` |
| `trackEvent.scrollDepth(depth)` | `scroll_depth_25/50/75/90` | `page_path` |

---

## A-3. ボット除外設定（コードレベル）

GA4のボット除外はGA4管理画面設定であり、コードに実装するものではない。

**コード側での対応**: なし（GA4デフォルト機能に委任）

GA4は標準で IAB/ABC の既知ボットリストを自動除外する。追加の設定確認はGA4管理画面で行う。
→ **GA4管理画面確認が必要**: 管理 → データストリーム → ウェブストリーム詳細 → 「ボットのフィルタリング」

---

## 総合評価

| 確認項目 | 結果 | 詳細 |
|---------|------|------|
| GA4タグ実装 | ✅ **正常** | 全ページにGoogleAnalyticsコンポーネント配置済み |
| Measurement ID設定（コード） | ⚠️ **Vercel要確認** | ローカルには.env.localなし（本番はVercel管理） |
| ScrollDepthTracker | ✅ **正常** | 25/50/75/90%、SPA対応、重複防止すべて実装済み |
| カスタムイベント | ✅ **正常** | line_register_click / briefing_apply_click 等4種 |
| ボット除外（コード） | N/A | GA4管理画面設定（コード外） |

---

## 今週の13セッション急落に関する暫定評価（コードレベル）

コード静的解析の範囲では、**計測欠損を示すバグは見当たらない**。

- GA4タグは正常に全ページで発火する実装
- ScrollDepthTrackerもSPAナビゲーション対応済み
- `sendGAEvent()` は `window.gtag` の存在確認付きで安全

**結論**: セッション急落はコード側の問題ではなく、以下のいずれかと推定:
1. 実際のトラフィック減少（コンテンツ・SEO要因）
2. ボット/クローラーの減少（前週に含まれていた場合）
3. Vercel本番ビルドのenv var設定変更（可能性低）

本番環境での実際の計測確認はGA4リアルタイムレポートで実施すること。

---

## 次アクション

- [ ] Vercel管理画面で `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-ZLQ46ESV8H` を目視確認
- [ ] GA4管理画面 → データストリーム → ボットフィルタリング有効確認（手動）
- [ ] GA4管理画面 → データフィルター → 内部トラフィック除外確認（手動）
