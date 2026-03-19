---
name: ai-topics-article-writer
description: |
  Grok API（xAI）と X（Twitter）API で最新AI情報をリサーチし、/ai-topics 向け週刊ニュース記事を生成・実装するスキル。
  Use when: 「ai-topicsの記事を書いて」「今週のAIニュースをまとめて」「ai-topics に記事を追加して」と言われたとき。
metadata:
  version: "1.3"
  project: "ai-reboot-web"
  language: "ja"
---

# AI Topics Article Writer

Grok API と X API で最新の生成AIトピックをリサーチし、初学者・一般ビジネスパーソン向けの週刊まとめ記事を生成して `data/ai-topics/articles/` に実装するスキル。

## Reference Files

- [article-template.md](references/article-template.md) — TypeScript ファイルテンプレートと記事フォーマット
- [writing-rules.md](references/writing-rules.md) — 文体・品質ルール

## 入力（任意）

- **テーマ/キーワード**: 例 `Claude 4`, `AI規制`, `画像生成` （省略時は Grok が自動選定）
- **対象日付**: 例 `2026-03-11`（省略時は今日の日付）
- **プロジェクトパス**: ai-reboot-web のパス（省略時は `/Users/mocchalera/Dev/ai-reboot-web`）

## 環境変数（事前設定が必要）

| 変数名 | 説明 | 取得先 |
|---|---|---|
| `XAI_API_KEY` | Grok API キー | https://console.x.ai |
| `X_BEARER_TOKEN` | X API v2 Bearer Token | https://developer.x.com |

どちらか一方があれば動作する。両方ない場合は WebSearch で代替。

## Workflow

```
Phase 0: 事前確認
  → .env.local から環境変数を読み込む
  → 対象日付の記事ファイルが既存かどうかを確認

Phase 1: X API でトレンドツイートを取得
  → min_faves:20 でスパム・低品質投稿を事前除外（lang:ja より有効）
  → 取得後に日本語文字フィルタを適用し有用ツイートを抽出
  → エラー（401/403）以外は全スキップ禁止。5件未満でも「情報ゼロ」として Phase 2 へ引き渡す

Phase 2: Grok API でリサーチ・分析 → WebSearch でファクトチェック
  → Grok にトピック候補を3〜5個出させる
  → 【必須】各トピックのソースURLを WebSearch で実在確認
  → URLが存在しない・内容が異なる場合はトピックを差し替えるか [要確認] を付ける

Phase 3: 記事構成と執筆
  → references/article-template.md と writing-rules.md を参照
  → Markdown で本文を書く（1,500〜3,000字）
  → 構成: 今週の要点 / トピック別解説（3〜5本） / 実践アクション（3つ） / 次に読む

Phase 4: TypeScript ファイルの実装
  → 既存ファイルがあれば内容を上書き更新（新規作成しない）
  → 新規の場合: data/ai-topics/index.ts に import とエクスポートを追記
  → meta.draft は設定しない（設定すると記事が完全非表示になる）

Phase 5: 品質チェック
  → npm run lint && npx tsc --noEmit
  → エラーがあれば修正
  → curl で記事ページ（/ai-topics/{id}）が 200 を返すことを確認
```

## 各フェーズの詳細手順

### Phase 0: 事前確認

```bash
# PROJECT_PATH = 入力パラメータ「プロジェクトパス」（デフォルト: /Users/mocchalera/Dev/ai-reboot-web）
PROJECT_PATH="${PROJECT_PATH:-/Users/mocchalera/Dev/ai-reboot-web}"

# ⚠️ set -a && source はインラインコメント前のスペースをキー値に混入させる場合がある
# 必ず下記の形式で読み込む（コメント付き行も安全に処理）
XAI_API_KEY=$(grep '^XAI_API_KEY=' "$PROJECT_PATH/.env.local" | sed 's/^XAI_API_KEY=//' | sed 's/[[:space:]]*#.*//' | tr -d '\r\n ')
X_BEARER_TOKEN=$(grep '^X_BEARER_TOKEN=' "$PROJECT_PATH/.env.local" | sed 's/^X_BEARER_TOKEN=//' | sed 's/[[:space:]]*#.*//' | tr -d '\r\n ')

# API キーの存在確認
echo "XAI_API_KEY: ${XAI_API_KEY:0:8}... (length: ${#XAI_API_KEY})"
echo "X_BEARER_TOKEN: ${X_BEARER_TOKEN:0:8}... (length: ${#X_BEARER_TOKEN})"

# 対象日付の記事ファイルが既にあるか確認
ls "$PROJECT_PATH/data/ai-topics/articles/{YYYY-MM-DD}-weekly-ai-news.ts" 2>/dev/null \
  && echo "既存ファイルあり → 内容を上書き更新する" \
  || echo "新規ファイルを作成する"
```

### Phase 1: X API でツイートを取得

**Step 1-A: ツイート取得**

`min_faves:20` は Basic/Free プランでは使用不可（400エラー）。`lang:ja` も不完全（Thai/Indonesianが混入する）。
`-is:retweet` のみでフィルタし、取得後に日本語文字で絞り込む。件数は 50 で十分。

```bash
curl -s "https://api.twitter.com/2/tweets/search/recent" \
  -H "Authorization: Bearer $X_BEARER_TOKEN" \
  -G \
  --data-urlencode 'query=生成AI OR ChatGPT OR Claude OR Gemini OR 大規模言語モデル -is:retweet' \
  --data-urlencode 'max_results=50' \
  --data-urlencode 'tweet.fields=created_at,public_metrics,author_id,text' \
  --data-urlencode 'sort_order=relevancy'
```

**Step 1-B: 取得後フィルタリング（コストを無駄にしない）**

APIのコストはすでに発生している。「全体スキップ」はせず、日本語ツイートを抽出して使える分だけ活用する。

フィルタ基準（ひらがな/カタカナ/漢字を含む = 日本語ツイートとみなす）:

```python
# 擬似コード: ツイートテキストに日本語文字が含まれるか確認
import re
ja_pattern = re.compile(r'[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]')
ja_tweets = [t for t in tweets if ja_pattern.search(t['text'])]
```

Claude が手動で確認する場合: 取得結果を走査し、ひらがな/カタカナを含む投稿のみを抽出する。

**Step 1-C: 判定と次フェーズへの引き渡し**

| 状況 | 対応 |
|---|---|
| エラー（401/403）| X_BEARER_TOKEN 未設定。Phase 2 へ直進 |
| 日本語ツイートが **5件以上** | 抽出した件数を記録し「X から {N} 件取得」として Phase 2 へ渡す |
| 日本語ツイートが **5件未満** | 「X から有用データなし」と記録し Phase 2 へ直進（スキップではなく「情報ゼロ」として扱う） |

⚠️ **「全件ノイジーだからスキップ」は禁止。** APIコストが発生したなら必ずフィルタ後の件数を記録し、Phase 2 に何件活用できたかを報告すること。

### Phase 2: Grok API で X データからトピック抽出 → Claude WebSearch でファクトチェック

**Grokの役割: Phase 1 で取得した X の生の声・トレンドを分析してトピックを抽出する。**
Grok はウェブ検索ではなく「Xのリアルな声の分析」に特化して使う。

**⚠️ 注意: Grok の組み込みウェブ検索ツール（web_search_preview / live_search）は deprecated（2026年時点）。ツールは一切付けない。**

**Step 2-A: Grok API に X 投稿データを渡してトピック抽出**

```bash
curl -s https://api.x.ai/v1/chat/completions \
  -H "Authorization: Bearer $XAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4-1-fast-non-reasoning",
    "messages": [
      {
        "role": "system",
        "content": "あなたはXの投稿データから生成AIのトレンドトピックを抽出するアナリストです。"
      },
      {
        "role": "user",
        "content": "以下はXの直近7日間の生成AI関連投稿です。話題になっているトピックを3〜5個抽出し、各トピックのXでの反応・温度感をまとめてください。\n\nX投稿データ:\n{X_POSTS_DATA}\n\n出力: JSON形式で { topics: [{ title, x_reaction_summary, importance }] }"
      }
    ]
  }'
```

X 投稿が少ない・取得できなかった場合は、このステップをスキップして Step 2-B へ。

**Step 2-B: Claude の WebSearch でファクトチェック・ソースURL取得**

Grok が抽出した各トピックについて WebSearch で実在する記事・公式発表を探す:

```
1. WebSearch で「{トピックタイトル} {YYYY}年{M}月」を検索
2. 実在する記事・公式発表が見つかれば採用（URL確定）
3. 見つからない場合:
   - トピックを差し替えるか
   - 本文中に [要確認: 詳細は各社公式サイトで確認を] を付ける
```

X 投稿が少なく Grok ステップをスキップした場合も、このステップで WebSearch からトピックを収集する。

### Phase 3: タイトル設計（SEO/AIO）

**title（H1・70字以内）:**

```
{メイントピック1}・{メイントピック2}など — 生成AI週報（{YYYY}年{M}月{D}日）
```

例: `GPT-5.3新機能・EU AI法 など — 生成AI週報（2026年3月4日）`

| ルール | 理由 |
|---|---|
| エンティティ名を先頭に（製品・企業・法律名） | AIO（AI Overviews）はエンティティで文書を引用するため |
| 年月日を明示（「今週」は禁止） | AIOは新鮮さを日付で判断。相対表現は陳腐化が速い |
| 「週報」を末尾に固定 | 週次コンテンツとして認識され、連続性のある被引用が期待できる |
| 「まとめ」「トピック」などの汎用語を先頭に置かない | 差別化できず、検索クリック率が下がる |

**seo.ogTitle（60字以内、カバー画像にも使用）:**

```
{メイントピック}など：生成AI週報 {YYYY}/{M}/{D}
```

例: `GPT-5.3・EU AI法など：生成AI週報 2026/3/4`

ogTitle は `cover-image` Route Handler が画像タイトルとして使用する。長すぎると画像内で折り返すため 60字上限を厳守すること。

### Phase 3: 本文執筆の品質基準

- **読者**: 生成AI初学者・一般ビジネスパーソン（専門知識不要で読める）
- **文体**: 「〜です/ます」調、断定より「〜が注目されています」など柔らかめ
- **禁止**: 「革命的」「ゲームチェンジャー」「まさに」などのAIスロップ表現
- **必須**: 各トピックに「なぜビジネスで重要か」の一文
- **数値**: 変動しやすい数値は「確認日: YYYY-MM-DD」を付ける
- **内部リンク**: `/glossary/` と `/academy/blog/` へ最低2本（`references/writing-rules.md` の「内部リンク候補」に記載されたスラッグのみ使用）

⚠️ writing-rules.md に載っていないスラッグは `ls data/glossary/` または `ls app/(site)/glossary/` で実在確認してから使うこと。

### Phase 4: ファイル実装

references/article-template.md のテンプレートを使用する。

**既存ファイルがある場合（上書き更新）:**

1. Write ツールで `data/ai-topics/articles/{YYYY-MM-DD}-weekly-ai-news.ts` を全文上書き
2. `data/ai-topics/index.ts` はすでに import/export が存在するため変更不要

**新規ファイルの場合:**

1. Write ツールで `data/ai-topics/articles/{YYYY-MM-DD}-weekly-ai-news.ts` を新規作成
2. Edit ツールで `data/ai-topics/index.ts` に以下を追記:

```typescript
// 既存の import 群の末尾に追加
import { weeklyAiNews{YYYYMMDD} } from '@/data/ai-topics/articles/{YYYY-MM-DD}-weekly-ai-news'

// aiTopicsArticleSource 配列の先頭に追加（新しい記事を先頭へ）
const aiTopicsArticleSource: AiTopicArticle[] = [
  weeklyAiNews{YYYYMMDD},  // ← 追加
  // 既存エントリはそのまま残す
]
```

**⛔ meta.draft の禁止:**

```typescript
// NG: draft: true を設定すると getPublishableAiTopics() でフィルタされ記事が完全非表示になる
meta: {
  sourceNote: '情報確認日: {YYYY-MM-DD}',
  draft: true,  // ← 絶対に設定しない
}

// OK: draft フィールドは省略する
meta: {
  sourceNote: '情報確認日: {YYYY-MM-DD}',
}
```

### Phase 5: 品質チェック

```bash
cd /Users/mocchalera/Dev/ai-reboot-web

# 型・lint チェック
npm run lint 2>&1 | grep -E "^(Error|error)" | head -5
npx tsc --noEmit 2>&1 | head -10

# 記事ページが正常に返るか確認
curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000/ai-topics/{YYYY-MM-DD}-weekly-ai-news"
# → 200 であれば OK。404 の場合は meta.draft や index.ts の import を確認
```

## 成果物

- `data/ai-topics/articles/{YYYY-MM-DD}-weekly-ai-news.ts`（新規 or 更新）
- `data/ai-topics/index.ts`（新規の場合のみ更新）

## 既知の制約と注意事項

| 項目 | 内容 |
|---|---|
| X API 制限 | 無料/Basicプランは直近7日・月500リクエスト。`min_faves` は有料プラン限定（フリーで使うと400エラー）。`-is:retweet` のみで取得し、日本語文字フィルタを手動適用。コスト発生後は全スキップ禁止、必ずフィルタして活用 |
| Grok ソースURL | 幻覚の可能性あり。**必ず WebSearch で実在確認** |
| `meta.draft: true` | **設定禁止**。設定すると記事が完全非表示になる |
| env 読み込み | `set -a && source .env.local && set +a` を使う（`export $(grep ...)` はNG） |
| 画像 | `cover-image` Route Handler が自動生成するため、thumbnail フィールドはそのままで OK |
| 既存ファイル | 同日付のファイルが存在する場合は新規作成せず内容を上書きする |
