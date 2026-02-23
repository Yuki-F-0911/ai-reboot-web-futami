# Academy ディレクトリ エージェント規約

このファイルは `/academy` 配下で作業するすべてのAIエージェント（Claude / Gemini / Codex）が守るべき規約を定めます。

---

## LINE CTA コンポーネント（重要）

### 共通コンポーネントを必ず使うこと

LINE登録CTAは **全記事で共通コンポーネントを使用** してください。

```tsx
import LineCtaBox from "@/components/blog/LineCtaBox";

// 使い方（props不要 — デフォルトで全記事統一テキストが入る）
<LineCtaBox />
```

**ファイル場所**: `components/blog/LineCtaBox.tsx`

### やってはいけないこと

記事コンポーネント内に `LineCtaBox` 関数をインライン定義しないこと。

```tsx
// ❌ NG — インライン定義
function LineCtaBox({ tone }) { ... }

// ❌ NG — lineUrl / lineCtaBody を記事ファイル内で定義
const lineUrl = "https://...";
const lineCtaBody = "...";
```

### LINE特典テキストを変えたいとき

`components/blog/LineCtaBox.tsx` の以下の変数だけ修正すれば全記事に反映される：

```tsx
const defaultTitle = "AIで仕事を変えたい方へ｜LINEで無料相談する";
const defaultDescription = "...";
const defaultButtonLabel = "LINEで無料相談する（登録無料）";
```

---

## ブログ記事の実装パターン

### 3ファイル構成

新しい記事を作るときは必ず以下の3ファイルセットで実装する：

| ファイル | 役割 |
|---|---|
| `app/academy/blog/{slug}/page.tsx` | メタデータ・SEO・構造化データ |
| `components/academyLanding/blog/{slug}/{ComponentName}Page.tsx` | 記事本文コンポーネント |
| `app/academy/blog/page.tsx` の `blogPosts` 配列 | 記事一覧への追加（先頭に追加） |

### カテゴリ（有効な値のみ）

- `"AI基礎知識"`
- `"AI学習"`
- `"AI活用術"`
- `"AIトレンド"`

上記以外（`"AI活用"` `"AI入門"` 等）は使用禁止。

### ブランチ・プッシュ

- ブランチ: `dev`
- プッシュ先: `origin/dev`

---

## FloatingLineCta（フローティングバナー）

`components/academyLanding/common/FloatingLineCta.tsx` は `/academy` 配下全ページに自動表示される。
記事内で個別に追加する必要はない。
