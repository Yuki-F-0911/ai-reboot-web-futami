---
title: "記事調査ログ｜gemini-deep-think-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-gemini-deep-think-guide.md"
  - "app/academy/blog/gemini-deep-think-guide/page.tsx"
  - "components/academyLanding/blog/gemini-deep-think-guide/GeminiDeepThinkGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["[TODO] project-config.yaml（user.name確認済み）"]
  downstream:
    - "app/academy/blog/gemini-deep-think-guide/page.tsx"
    - "components/academyLanding/blog/gemini-deep-think-guide/GeminiDeepThinkGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ要約

- 対象記事: `gemini-deep-think-guide`
- 主KW: Gemini Deep Think 使い方
- サブKW: Gemini 3 Deep Think / Google AI Ultra / 推論AI 2026 / ARC-AGI
- 調査日: 2026-02-20
- ターゲット: 中級者（高度な推論・数学・コーディング問題を解きたい人）

## 一次情報（公式）一覧

| 種別 | URL | 採用理由 | 確認日 |
|---|---|---|---|
| Google公式（The Keyword） | https://blog.google/products/gemini/google-gemini-updates-february-2026/ | Gemini 3 Deep Thinkの公開日（2026-02-12）と提供形態（AI Ultra限定）を明記 | 2026-02-20 |
| Google DeepMind公式 | https://deepmind.google/models/gemini/ | ARC-AGI-2、Codeforces、AIME、GPQAなどの比較表（Gemini/Claude/GPT同一表）を確認 | 2026-02-20 |
| Google公式（The Keyword） | https://blog.google/products/google-one/google-ai-ultra/ | Google AI Ultraの公表価格（米国月額249.99ドル）とプラン内容の根拠 | 2026-02-20 |
| Google Gemini API公式 | https://ai.google.dev/gemini-api/docs/deprecations | Gemini 1.5/2.0系の提供終了・終了予定を確認し、使い分け判断の前提を整理 | 2026-02-20 |
| OpenAI公式 | https://openai.com/index/introducing-gpt-5-2 | GPT-5.2の提供開始情報（比較対象の時系列）を確認 | 2026-02-20 |

## コミュニティ実声（SNS/コミュニティ）

| ソース | URL | 要点（要約） | バランス |
|---|---|---|---|
| Reddit（r/singularity） | https://www.reddit.com/r/singularity/comments/1ix4vss/gemini_3_with_deep_think_is_here/ | Deep Think公開直後に「難問での改善を体感した」という声がある一方、利用条件の厳しさを指摘する投稿が混在 | 肯定/懸念 |
| Reddit（r/Bard） | https://www.reddit.com/r/Bard/comments/1iwr8up/gemini_deep_think_discontinued/ | 提供条件変更やUI挙動への不満があり、安定運用前提での過信は危険という示唆 | 懸念 |
| Google サポートコミュニティ | https://support.google.com/gemini/thread/412234143/is-anyone-else-having-trouble-accessing-gemini-3-with-deep-think-after-upgrading-to-google-ai-ultra | AI Ultra契約後もDeep Thinkがすぐ有効にならないケースがあり、反映時間差や地域差への注意が必要 | つまずき |
| Reddit（r/GeminiAI） | https://www.reddit.com/r/GeminiAI/comments/1ix5f2j/it_just_hit_me_why_gemini_deep_think_is_so/ | 推論手順を可視化して比較する運用が有効という実務的な活用報告 | 肯定 |

## 指定ファクトチェック結果

### 1) リリース日・提供形態
- **確認結果**: Gemini 3 Deep Think は **2026-02-12 公開**。Geminiアプリで **Google AI Ultra サブスクライバー向け**に提供。
- 根拠: Google公式記事（The Keyword）で日付と対象プランを明記。

### 2) ARC-AGI-2 の最高スコア
- **確認結果**: Google公式記事では、Deep Thinkが **ARC-AGI-2で84.6%** を記録し、ARC Prize Foundation検証済みの最高スコアとして掲載。
- 補足: DeepMindの総合比較表では `Gemini 3.1 Pro Thinking` のARC-AGI-2は **77.1**。  
  → **評価設定が異なる**（Deep Think専用評価と通常Thinking評価）ため、本文では条件付きで明示する。

### 3) Google AI Ultra の2026年2月時点料金
- **確認結果**: Google公式で公表された米国価格は **$249.99/月（税別）**。
- 参照: Google AI Ultra発表記事（The Keyword）。
- 注記: 価格は地域・通貨・キャンペーンで変動するため、記事本文には「確認日（2026-02-20）」と「最新は購入画面確認」を併記する。

## Claim検証（2ソース照合）

| Claim | 照合ソースA | 照合ソースB | 判定 |
|---|---|---|---|
| Gemini 3 Deep Thinkは2026-02-12に公開 | Google The Keyword（2026-02-12） | DeepMind Geminiモデルページ（同時期更新） | 確認済み |
| Deep ThinkはAI Ultra限定で提供 | Google The Keyword（Gemini updates） | Google AI Ultra発表記事（プラン定義） | 確認済み |
| ARC-AGI-2で84.6（Deep Think） | Google The Keyword（Gemini updates） | ARC Prize Foundation検証済み表記（同記事内） | 確認済み |
| CodeforcesでGemini 3.1 Pro Thinkingは84.0 | DeepMind Gemini比較表 | 同表内のClaude 4.6 / GPT-5.2同列比較 | 確認済み |
| Google AI Ultraは米国$249.99/月 | Google AI Ultra発表記事 | [要確認: 直近の国別購入画面表示] | 一部確認 |
| Gemini 2.0 Flashは2026-08-26廃止予定、1.5系は2025年に多くが終了 | Gemini API deprecations | Gemini API changelog（旧版停止履歴） | 確認済み |

## 変動情報メモ（本文反映必須）

- Deep Thinkの提供範囲（国/プラン/UI）は頻繁に変わる可能性があるため、本文で確認日を明記する。
- ベンチマークは「モデル」「思考モード」「計算予算」で結果が変わる。  
  単純な順位比較ではなく、運用条件を同一化した社内検証の必要性を記載する。
- AI Ultra価格は地域差・為替・キャンペーン差があるため、米国公表価格と確認日をセットで表示する。

## 記事実装への反映メモ

- 冒頭で以下を3行で明示する:
  1. Deep Thinkは「公開済み」だが利用条件が限定的であること
  2. ARC-AGI-2 84.6は条件付きの高難度推論指標であること
  3. 実務では数学/科学/コードの検証フロー設計が成果差を生むこと
- 中盤で「Gemini 1.5/2.0との使い分け」を、提供状況（継続/廃止予定）と用途で切り分ける。
- 比較セクションで `Claude Opus 4.6` `GPT-5.2` を同一表で比較し、条件差を注記する。
- 記事末尾のアカデミーCTAは3本柱（生成AI活用力 / 自己理解・キャリアデザイン / 仲間と共に学ぶ環境）で固定。

