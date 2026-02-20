---
# batch7 記事・改善計画

## 目的
SEO/AIOによる集客 → LPへ誘導 → LINE登録 のコンバージョン率を改善する。
記事数は128本と充分なため、batch7は「質の改善」と「CVR改善」に注力する。

## Priority 1: コンバージョン強化（LINE登録に直結）

### 1-1. AI講座比較ランディングページ
- URL: /academy/ai-course-comparison  
- 目的: 「AI講座 比較」検索ユーザーの受け皿。検討最終段階でLINE登録に誘導
- 形式: 比較表＋FAQ＋LINE登録CTA

### 1-2. 評判・口コミ記事
- slug: aireboot-academy-reviews  
- 主KW: AIリブートアカデミー 評判, AIリブートアカデミー 口コミ
- 目的: 指名検索の最終確認ユーザーを安心させてLINE登録へ

### 1-3. LINE登録CTA改善
- 対象: 全記事の末尾LineCtaBox
- 改善案: コピー「無料で相談する」→「今すぐLINEで無料相談（30秒で完了）」等

## Priority 2: 技術的SEO改善

### 2-1. robots.ts 実装
- app/robots.ts を新規作成
- Allow: すべて公開 / Disallow: /api/, /test/
- sitemap URLを明示

### 2-2. /academy layout.tsx SEO強化
- app/academy/layout.tsx を新規作成
- OpenGraph設定 + canonical URL設定

### 2-3. 構造化データ（JSON-LD）追加
- /academy 主要ページに Course, FAQPage の JSON-LD を追加

## Priority 3: 新規記事（購入検討層向け）

| # | slug | 主KW | 優先 |
|---|------|------|------|
| 1 | how-to-learn-generative-ai | 生成AI 学び方 | 高 |
| 2 | generative-ai-skills-checklist | 生成AIスキル 身につける | 高 |
| 3 | gpt-5-3-guide | GPT-5.3 使い方 | 中 |
| 4 | claude-code-beginners-guide | Claude Code 入門 | 中 |

## Priority 4: 既存記事リライト

| # | slug | 更新内容 | 優先 |
|---|------|---------|------|
| 1 | what-is-ai-agent | Operator/Atlas/Manus追記、2026年版に刷新 | 高 |
| 2 | ai-video-generation-comparison | Kling AI・Midjourney V1 Video追加 | 高 |
| 3 | suno-ai-music-guide | Mureka V8比較、最新バージョン情報追加 | 中 |

## 実施順序
1. feat/ai-writing-tool-article マージ（即時）
2. robots.ts + /academy layout.tsx（技術SEO・即時）
3. how-to-learn-generative-ai 記事
4. ai-course-comparison ページ
5. aireboot-academy-reviews 記事
6. 既存記事リライト
7. LINE登録CTA改善
8. gpt-5-3-guide, claude-code-beginners-guide
---
