# ブログ・用語集 SEO改善計画書

> 作成日: 2026-03-01
> データ期間: Search Console 7日間 + GA4
> 担当: SEO / コンテンツ

---

## エグゼクティブサマリー

Search Consoleの分析により、**197ページ追加したうち75%がインデックス未登録**という深刻な状態が判明した。調査の結果、その根本原因は `app/sitemap.ts` の**ファイルパスバグ**であることが確定している。このバグを修正することで最大193ページをGoogleクローラーが**発見できる状態**になる（インデックス候補への追加）。ただし実際のインデックス登録はコンテンツ品質・重複判定・クロール頻度にも依存するため、登録を保証するものではない。CTR改善・記事リライトは、このバグ修正が最優先。

---

## 現状サマリー

| 指標 | 値 |
|------|-----|
| クリック (7日) | 149回 |
| 表示回数 | 9,350回 |
| 平均CTR | 1.6% |
| 平均順位 | 8.2位 |
| インデックス登録済 | 63ページ |
| **インデックス未登録** | **193ページ (75%)** |
| ブログ記事数 | 221記事（URL換算: 222、一覧ページ含む） |
| 用語集エントリ数 | 471件 |

---

## 1. インデックス促進施策（最優先）

### 1.1 根本原因：sitemap.ts のパスバグ

**調査結果**：`app/sitemap.ts` のアカデミーブログ読み取り処理が、**Route Group `(site)` を考慮していないパスを参照している**。

```
実際のファイル場所: app/(site)/academy/blog/{slug}/page.tsx
sitemap.ts が参照:  app/academy/blog/{slug}/page.tsx  ← 存在しない
```

**該当コード**（`app/sitemap.ts` L151-154）:

```typescript
// 現状（バグあり）
const academyBlogSlugs = await getAppRouteSlugs("academy/blog");
// ↓ 内部で以下のパスを生成
// app/academy/blog/{slug}/page.tsx  ← app/(site)/academy/blog/ が正しい

const pagePath = path.join(process.cwd(), "app", "academy", "blog", slug, "page.tsx");
```

`getAppRouteSlugs("academy/blog")` は `app/academy/blog/` ディレクトリを探すが、このディレクトリは存在しない（`app/` 直下には `(lp)/`, `(site)/`, `api/`, `globals.css`, `layout.tsx` のみ）。

結果として `academyBlogPages` は**空配列**になり、221記事（ブログ一覧URLを含むと222URL）が全てsitemapから除外されている。

### 1.2 修正内容

**ファイル**: `app/sitemap.ts`

**修正箇所1** (L151): `getAppRouteSlugs` の引数

```typescript
// Before
const academyBlogSlugs = await getAppRouteSlugs("academy/blog");

// After
const academyBlogSlugs = await getAppRouteSlugs("(site)/academy/blog");
```

**修正箇所2** (L154): `pagePath` の構築

```typescript
// Before
const pagePath = path.join(process.cwd(), "app", "academy", "blog", slug, "page.tsx");

// After
const pagePath = path.join(process.cwd(), "app", "(site)", "academy", "blog", slug, "page.tsx");
```

**修正後の期待動作**:
- `getAppRouteSlugs("(site)/academy/blog")` → 221スラッグを返す（個別記事のみ、一覧ページは別途追加）
- `academyBlogPages` → 221エントリのSitemap配列が生成される
- サイトマップURL例: `https://ai-reboot.io/academy/blog/generative-ai-passport-guide`

### 1.3 修正後の確認手順（デプロイ前後で分離）

```bash
# ── デプロイ前: ローカルURLで差分検証 ──────────────────────────────

# 1. ローカルでビルド
npm run build

# 2. 本番ビルドをローカル起動（別ターミナル）
npm run start

# 3. ローカルsitemapに記事URLが含まれるか確認（URLアクセス方式）
node -e "
(async () => {
  const res = await fetch('http://localhost:3000/sitemap.xml');
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const xml = await res.text();
  const count = (xml.match(/<loc>https:\/\/ai-reboot\.io\/academy\/blog\/[^<]+<\/loc>/g) || []).length;
  console.log('academy/blog 記事URL数 (local):', count);
  if (count < 200) process.exit(1); // 200件未満なら異常終了
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
"
# → 220+ が期待値（記事URLのみ）

# ── デプロイ後: 本番URLで最終確認 ────────────────────────────────────

# 4. 本番sitemapに記事URLが含まれるか確認（URLアクセス方式）
node -e "
(async () => {
  const res = await fetch('https://ai-reboot.io/sitemap.xml');
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const xml = await res.text();
  const count = (xml.match(/<loc>https:\/\/ai-reboot\.io\/academy\/blog\/[^<]+<\/loc>/g) || []).length;
  console.log('academy/blog 記事URL数 (prod):', count);
  if (count < 200) process.exit(1); // 200件未満なら異常終了
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
"
# → 220+ が期待値（記事URLのみ）

# 5. Googleが読み込める状態かチェック
curl -I https://ai-reboot.io/sitemap.xml
```

### 1.4 サイトマップ回帰チェック（再発防止）

`sitemap.ts` のパスバグが再発しないよう、以下の回帰チェックを実施する。

**方針A: `package.json` に `validate:sitemap` スクリプトを追加**

```json
// package.json の scripts に追加
"validate:sitemap": "node scripts/validate-sitemap.js"
```

```javascript
// scripts/validate-sitemap.js（新規作成）
const sitemapUrl = process.env.SITEMAP_URL ?? "http://localhost:3000/sitemap.xml";

(async () => {
  const res = await fetch(sitemapUrl);
  if (!res.ok) throw new Error(`HTTP ${res.status} (${sitemapUrl})`);
  const xml = await res.text();

  const blogCount = (xml.match(/<loc>https:\/\/ai-reboot\.io\/academy\/blog\/[^<]+<\/loc>/g) || []).length;
  const glossaryCount = (xml.match(/<loc>https:\/\/ai-reboot\.io\/glossary\/[^<]+<\/loc>/g) || []).length;

  console.log(`sitemap: ${sitemapUrl}`);
  console.log(`academy/blog 記事URL数: ${blogCount}`);
  console.log(`glossary URL数: ${glossaryCount}`);

  if (blogCount < 200) {
    console.error(`ERROR: academy/blog URL数が少なすぎます (${blogCount} < 200)`);
    process.exit(1);
  }
  if (glossaryCount < 400) {
    console.error(`ERROR: glossary URL数が少なすぎます (${glossaryCount} < 400)`);
    process.exit(1);
  }
  console.log("✅ sitemap 検証OK");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

実行手順:
```bash
npm run build
npm run start
SITEMAP_URL=http://localhost:3000/sitemap.xml npm run validate:sitemap
# デプロイ後の最終確認
SITEMAP_URL=https://ai-reboot.io/sitemap.xml npm run validate:sitemap
```

**方針B: CI/CD パイプライン（GitHub Actions）に組み込む**

```yaml
# .github/workflows/sitemap-check.yml（概略）
- name: Build
  run: npm run build
- name: Validate sitemap
  run: npm run validate:sitemap
```

CI で毎ビルド時に `academy/blog` 200件以上・`glossary` 400件以上を自動チェックし、不足時はビルドを失敗させる。

**実装推奨**: 方針Aのスクリプトを `npm run build` の次に実行するだけで即時効果あり。CI/CD構築前でも手動運用として取り入れられる。

### 1.5 Search Console への再送信手順

1. Google Search Console (https://search.google.com/search-console) にログイン
2. プロパティ: `https://ai-reboot.io`
3. 左メニュー「サイトマップ」→ `sitemap.xml` を入力 → 「送信」
4. ステータスが「成功しました」になることを確認
5. 24-72時間後にインデックス登録状況の変化を確認

### 1.6 robots.ts の確認

**確認済み**: `app/robots.ts:12` でsitemapのURLが正しく指定されていることを確認済み。追加対応不要。

---

## 2. CTR改善（タイトル・メタディスクリプション最適化）

### 2.1 ai-trends-february-2026（CTR 0.9% → 目標 3%以上）

**現状メタデータ** (`app/(site)/academy/blog/ai-trends-february-2026/page.tsx`):

```
Title: 【2026年2月】生成AIの最新トレンド5選｜初心者が"今"知っておくべきこと | AIリブート
Description: 2026年2月の生成AIトレンド5選を、初心者にもわかる言葉で整理。
             Claude・GPT・Geminiの変化と、あなたの仕事や学習への影響を具体的に解説します。
             まずは1トレンドを押さえ...
```

**問題点**:
- 「最新トレンド5選」は汎用的すぎてクリック動機が薄い
- バウンス率65%・GA4表示回数549（最多）なのにCTR0.9%は、タイトルと検索意図のミスマッチが原因
- 「今知っておくべきこと」は陳腐化が早い表現

**改善案**:

```
Title: GPT-5・Claude Opus 4.6・Gemini 3が揃った2026年2月のAI最前線｜初心者向けまとめ | AIリブート
Description: GPT-5（ChatGPT）、Claude Opus 4.6（Anthropic）、Gemini 3（Google）が
             出揃った2026年2月。各モデルの変化点と「無料プランで使えるか」を
             具体的な数字で比較。5分で把握できる初心者向けまとめです。
```

**改善ポイント**:
- 具体的なモデル名（GPT-5・Claude Opus 4.6・Gemini 3）をタイトルに入れる → 検索意図マッチ向上
- 「5分で把握できる」で短時間コミットの訴求
- descriptionに「無料プランで使えるか」という実用的な情報を示す

### 2.2 gpt-5-3-guide（滞在32秒問題 / バウンス43%）

**現状メタデータ** (`app/(site)/academy/blog/gpt-5-3-guide/page.tsx`):

```
Title: GPT-5.2使い方ガイド｜thinkingレベルとGPT-5.3-codexの使い分け【2026年2月版】 | AIリブート
Description: GPT-5.2（standard / thinking）と、Codex CLI専用のGPT-5.3-codexを
             2026年2月時点の公開情報ベースで整理。thinkingレベルごとの選び方、
             Claude Opus 4.6との比較、実務運用ルールを解説します。
```

**問題点**:
- スラッグ名は `gpt-5-3-guide`（GPT-5.3への検索意図）だが、タイトルはGPT-5.2中心 → 大きな検索意図ミスマッチ
- 「thinkingレベル」「Codex CLI」は初心者には難解
- 滞在32秒 = 記事の冒頭を見てすぐ離脱 → 導入部が検索ユーザーの期待と乖離

**改善案**:

```
Title: GPT-5.3とは？ChatGPTの最新モデルの違い・使い方・無料で使えるか【2026年2月】 | AIリブート
Description: OpenAIのGPT-5系最新モデル（GPT-5.2・GPT-5.3-codex）の違いをわかりやすく解説。
             「どれを使えばいい？」に答える用途別の選び方、Claude Opus 4.6との比較、
             無料・有料プランの差を2026年2月時点でまとめました。
```

**改善ポイント**:
- 「GPT-5.3とは？」でスラッグ（gpt-5-3-guide）との一貫性を持たせる
- 「無料で使えるか」を冒頭に
- descriptionで「どれを使えばいい？」という典型的な疑問に直接答える

### 2.3 ai-music-generation-2026（バウンス60%）

**現状メタデータ** (`app/(site)/academy/blog/ai-music-generation-2026/page.tsx`):

```
Title: AI音楽生成ツール比較2026｜Suno最新版・Udio・Mureka V8の違いと選び方 | AIリブート
Description: AI音楽生成ツールを比較したい初心者とクリエイター向けに、
             Suno最新版・Udio・Mureka V8を音質、スタイル幅、歌詞対応、
             日本語対応、商用利用条件、料金で整理。
```

**問題点**:
- 「Mureka V8」は一般認知度が低い → タイトルで疑問符を誘発
- バウンス60%はコンテンツと検索意図のミスマッチか、記事の読みにくさが原因
- 「BGM・ポップス・ボカロ風」という用途訴求が弱い

**改善案**:

```
Title: AI音楽生成おすすめツール3選2026｜Suno・Udio・Murekaを無料/商用で比較 | AIリブート
Description: AIで音楽を作りたい初心者向けに、Suno最新版・Udio・Murekaを徹底比較。
             無料で始められるか、日本語歌詞は使えるか、BGM・ポップス・ボカロ風の
             作り方を具体例付きで解説。2026年最新の商用利用条件もチェック。
```

### 2.4 生成AIパスポート（「生成AIパスポート 勉強時間」CTR強化）

**現状メタデータ** (`app/(site)/academy/blog/generative-ai-passport-guide/page.tsx`):

```
Title: 生成AIパスポート試験の合格法2026｜勉強時間・おすすめ教材・出題傾向まとめ | AIリブート
Description: 生成AIパスポート試験の合格法を2026年版で解説。
             難易度・合格率・費用、勉強時間の目安（20/30/40時間）、
             独学向け教材、頻出テーマ、合格後の活かし方まで1ページで整理します。
```

**現状評価**: SC表示945・CTR3.1%・GA4バウンス27%・97秒 → すでに優良コンテンツ

**「生成AIパスポート 勉強時間」クエリ対策**（表示96回・クリック1回・CTR1.0%）:
- タイトル先頭に「勉強時間」を移動するだけでCTRが大幅改善する可能性が高い

**改善案**:

```
Title: 生成AIパスポートの勉強時間は20〜40時間｜2026年合格法・教材・出題傾向まとめ | AIリブート
Description: 「生成AIパスポート 勉強時間」の目安を具体的に解説。
             普段AIを使う人は20時間・これから学ぶ人は40時間が目安です。
             週5〜7時間確保で1〜6週間で合格圏内へ。独学向け教材・頻出テーマ・
             合格後の活かし方まで2026年版で1ページにまとめました。
```

---

## 3. 記事リライト計画

### 3.1 ai-trends-february-2026（バウンス65%対策）

**問題診断**: 表示549回（最多）なのにCTR0.9%、さらにバウンス65%は「記事内容が検索意図を満たせていない」。

**改善箇所**:

1. **冒頭（0〜300文字）を完全リライト**
   - 現状: 「5つのトレンドを整理しました」→ 抽象的
   - 改善: 「2026年2月時点でChatGPT/Claude/Geminiに何が起きたか」を箇条書き3行で結論先出し

2. **各トレンドに「あなたへの影響」セクションを追加**
   - 「これがあなたの仕事にどう関係するか」を各トレンドに1〜2文追加
   - バウンス改善に直結

3. **「今すぐできること」CTAを各セクション末尾に追加**
   - 内部リンク（関連記事）への誘導 → バウンス → 回遊率改善

4. **日付更新と鮮度担保**
   - modifiedTime を定期更新し、「最終更新日」をファーストビューに表示

5. **モデル比較表を追加**（視覚的スキャン対応）
   - GPT-5・Claude Opus 4.6・Gemini 3の特徴を3列表にする
   - バウンス率は画像・表があると改善傾向

### 3.2 gpt-5-3-guide（記事構成の再設計）

**問題診断**: 滞在32秒はファーストビュー離脱。「GPT-5.3」で検索したユーザーが、冒頭でGPT-5.2の話が始まることで離脱している可能性が高い。

**記事構成再設計案**:

```markdown
## 再設計後の構成

### H1: GPT-5.3とは？ChatGPTの最新モデルを初心者向けに解説【2026年2月】

### 【冒頭サマリー（スキャン対応）】
- GPT-5.3は「コード特化モデル（GPT-5.3-codex）」として登場
- 一般チャット向けはGPT-5.2を継続利用
- 「どれを使うべきか」→ 2分でわかる早見表（ここに表を挿入）

### H2: GPT-5.2とGPT-5.3-codexの違い（表形式）
→ ユーザーが最初に知りたいことを先に

### H2: GPT-5.2 thinking/standardの選び方
→ サブ情報に移動

### H2: 実務運用ルール
→ ここから先はエンゲージメント高いユーザー向け

### H2: Claude Opus 4.6との比較
→ 内部リンクも活用

### H2: よくある質問（FAQ）
```

---

## 4. 内部リンク強化計画

### 4.1 mcp-tool-integration-guide（高品質記事の活用）

**現状**: CTR5.7%・バウンス13%・滞在195秒 → サイト最高品質コンテンツ

**発リンク先候補**（関連性の高い記事へ）:

| 元記事 | リンク先 | アンカーテキスト |
|--------|---------|-----------------|
| mcp-tool-integration-guide | claude-code-beginners-guide | 「Claude Codeの始め方はこちら」 |
| mcp-tool-integration-guide | claude-code-intro | 「Claude Code公式ガイド」 |
| mcp-tool-integration-guide | context-engineering-guide | 「コンテキストエンジニアリングとは」 |
| mcp-tool-integration-guide | n8n-beginner-guide | 「n8nとMCPの組み合わせ」 |
| mcp-tool-integration-guide | dify-beginner-guide | 「Difyとの連携も確認」 |

**実装方法**: 記事コンポーネント (`McpToolIntegrationGuidePage.tsx`) の各セクション末尾に `<RelatedArticleLink>` または シンプルな `<a>` タグで追加。

### 4.2 glossary ↔ blog 相互リンク戦略

**現状の問題**: 用語集471件とブログ222記事が孤立しており、相互流入が発生していない。

**戦略**:

**Blog → Glossary（用語初出時にリンク）**:
- 各ブログ記事内で「LLM」「RAG」「MCP」「プロンプトエンジニアリング」等の専門用語が初出する箇所に、対応する用語集ページへのリンクを追加
- 実装例: `<a href="/glossary/llm">LLM（大規模言語モデル）</a>`

**Glossary → Blog（関連記事の誘導）**:
- 各用語集ページの末尾に「詳しく学ぶ」セクションを設け、関連ブログ記事へリンク
- 例: `/glossary/model-context-protocol` → 「MCPを実際に使う → [MCP使い方実践ガイド](/academy/blog/mcp-tool-integration-guide)」

**優先対応用語（高検索ボリューム推定）**:
- `llm`, `rag`, `model-context-protocol`, `prompt-engineering`, `fine-tuning`, `agent`
- これらをまず対応し、blog記事との双方向リンクを確立

### 4.3 generative-ai-passport-guide の関連リンク追加

- → `ai-course-ranking`（AIスクール比較記事）
- → `reskilling-over-40`（40代向けリスキリング）
- → `education-training-benefit-ai`（教育訓練給付金）
- 「試験合格後のキャリア」から法人ページ `/corporate` への誘導も検討

---

## 5. 実装優先順位と工数見積もり

### 優先度 High（即座に実施 / 高インパクト）

| タスク | ファイル | 実装難易度 | 期待インパクト |
|--------|---------|-----------|---------------|
| **sitemap.ts パスバグ修正** | `app/sitemap.ts` L151, L154 | ⭐ 低（2行変更） | 🔥 最大（193ページがインデックス対象に） |
| **Search Consoleへのsitemap再送信** | SC管理画面 | ⭐ 低 | 高（インデックス促進） |
| **generative-ai-passport-guide タイトル改善** | `app/(site)/academy/blog/generative-ai-passport-guide/page.tsx` | ⭐ 低（文字変更のみ） | 高（「生成AIパスポート 勉強時間」CTR改善） |
| **ai-trends-february-2026 タイトル改善** | `app/(site)/academy/blog/ai-trends-february-2026/page.tsx` | ⭐ 低 | 高（表示549回への訴求力強化） |

### 優先度 Medium（1〜2週間以内）

| タスク | ファイル | 実装難易度 | 期待インパクト |
|--------|---------|-----------|---------------|
| **gpt-5-3-guide タイトル + 記事構成リライト** | `app/(site)/academy/blog/gpt-5-3-guide/page.tsx` + コンポーネント | ⭐⭐ 中（構成変更要） | 高（滞在時間改善） |
| **ai-trends-february-2026 コンテンツリライト** | `components/academyLanding/blog/ai-trends-february-2026/AiTrendsFebruary2026Page.tsx` | ⭐⭐ 中 | 中〜高（バウンス65%改善） |
| **mcp-tool-integration-guide 内部リンク追加** | `components/academyLanding/blog/mcp-tool-integration-guide/McpToolIntegrationGuidePage.tsx` | ⭐ 低 | 中（高品質ページからの回遊促進） |
| **ai-music-generation-2026 タイトル + 冒頭改善** | `app/(site)/academy/blog/ai-music-generation-2026/page.tsx` | ⭐ 低〜中 | 中（バウンス60%改善） |

### 優先度 Low（1ヶ月以内）

| タスク | ファイル | 実装難易度 | 期待インパクト |
|--------|---------|-----------|---------------|
| **glossary ↔ blog 相互リンク（優先6用語）** | 各glossaryページ + 関連blogページ | ⭐⭐⭐ 高（多数ファイル対象） | 中（長期的なページ権威向上） |
| **全ブログ記事のmodifiedTime更新ルール策定** | `app/(site)/academy/blog/*/page.tsx` | ⭐⭐ 中 | 中（鮮度シグナル改善） |
| ~~**robots.ts 確認と最適化**~~ | ~~`app/robots.ts`~~ | — | **確認済み**（`robots.ts:12` で正しく設定済み、対応不要） |

---

## 6. 効果測定計画

### sitemap修正後の追跡指標

```
確認タイミング: 修正デプロイから 7日後・30日後・60日後
確認場所: Search Console > インデックス > ページ

期待値（あくまでインデックス候補増加の目安、登録保証ではない）:
- 7日後: インデックス登録数 63 → 100+（クロール発見性の改善効果）
- 30日後: インデックス登録数 → 150+
- 60日後: インデックス登録数 → 200+ (63から3倍以上)

※ 実際の登録数はコンテンツ品質・重複判定・クロール頻度にも依存する。
  登録数が伸び悩む場合はコンテンツ品質・正規化（canonical）の見直しを検討すること。
```

### CTR改善後の追跡指標

```
確認タイミング: タイトル変更から 14日後（Googleが認識するまで7〜14日かかる）

対象クエリ:
- 「生成AIパスポート 勉強時間」: CTR 1.0% → 目標 5%以上
- 「ai-trends-february-2026」全体: CTR 0.9% → 目標 2.5%以上
- 「gpt-5-3-guide」全体: CTR 4.2%維持しつつ滞在時間 32秒 → 90秒以上
```

---

## 付録: 実装コード（sitemap修正）

修正対象箇所の完全なコード（`app/sitemap.ts` L151-167）:

```typescript
// Before（バグあり）
const academyBlogSlugs = await getAppRouteSlugs("academy/blog");
const academyBlogPages: MetadataRoute.Sitemap = await Promise.all(
  academyBlogSlugs.map(async (slug) => {
    const pagePath = path.join(process.cwd(), "app", "academy", "blog", slug, "page.tsx");
    // ...
  })
);

// After（修正後）
const academyBlogSlugs = await getAppRouteSlugs("(site)/academy/blog");
const academyBlogPages: MetadataRoute.Sitemap = await Promise.all(
  academyBlogSlugs.map(async (slug) => {
    const pagePath = path.join(process.cwd(), "app", "(site)", "academy", "blog", slug, "page.tsx");
    // ...
  })
);
```
