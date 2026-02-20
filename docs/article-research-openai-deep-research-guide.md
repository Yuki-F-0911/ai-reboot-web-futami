---
title: "記事リサーチ｜openai-deep-research-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-openai-deep-research-guide.md"
  - "app/academy/blog/openai-deep-research-guide/page.tsx"
  - "components/academyLanding/blog/openai-deep-research-guide/OpenaiDeepResearchGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/openai-deep-research-guide/page.tsx"
    - "components/academyLanding/blog/openai-deep-research-guide/OpenaiDeepResearchGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: openai-deep-research-guide

## 0. 調査条件
- 対象テーマ: `OpenAI Deep Research 使い方 / ChatGPT ディープリサーチ / 調査AI 2026 / Deep Research MCP`
- 確認日: `2026-02-20`
- 目的: 中級者・ビジネスパーソンが市場調査と競合分析でDeep Researchを安全かつ再現性高く使える判断材料を整理する
- 方針: 機能・提供プラン・MCPは一次情報（OpenAI公式）を優先。比較対象（Perplexity/Gemini）は各社公式情報で照合。SNS実声は補助根拠として扱う

## 1. 一次情報（公式）ソース
1. [OpenAI Help: Deep research in ChatGPT](https://help.openai.com/en/articles/10500283-deep-research-faq)  
   - Deep Researchの起動方法、レポート仕様、利用状況確認方法を確認
2. [OpenAI Help: Connectors in ChatGPT](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt)  
   - Plus/Pro/Business/Enterprise/Eduでのコネクタ利用可否、Custom connectors（MCP）可否を確認
3. [OpenAI Help: ChatGPT usage limits（Release notes）](https://help.openai.com/en/articles/6825453-chatgpt-usage-limits)  
   - `2026-02-10` のDeep Researchアップデート（MCP接続、接続アプリ活用、サイト指定）を確認
4. [OpenAI: Introducing deep research](https://openai.com/index/introducing-deep-research/)  
   - 1回の調査時間目安（5〜30分）と初期提供範囲の背景を確認
5. [ChatGPT Pricing](https://chatgpt.com/pricing)  
   - Plus/Pro/Business/Enterpriseの料金体系と「Deep research access」がプラン機能に含まれる点を確認
6. [Google Help: Use Deep Research in Gemini Apps](https://support.google.com/gemini/answer/15719111?hl=en)  
   - Gemini Deep Researchの利用可能プランと処理時間（通常5〜10分）を確認
7. [Perplexity Help: What is Perplexity Deep Research?](https://www.perplexity.ai/help-center/en/articles/10354919-what-is-perplexity-deep-research)  
   - Perplexity Deep Researchの処理時間目安（2〜4分）と出力仕様を確認
8. [Perplexity Help: Perplexity Pro](https://www.perplexity.ai/help-center/en/articles/11147468-perplexity-pro)  
   - Deep Research関連機能のプラン差分を確認

## 2. SNS・コミュニティ実声（補助根拠）
1. [Reddit r/OpenAI: ChatGPT deep research released](https://www.reddit.com/r/OpenAI/comments/1j3kj6v/chatgpt_deep_research_released/)  
   - 公開初期の期待感と、出力品質への高評価コメント
2. [Reddit r/ChatGPTPro: Tried deep research. Painfully slow and bad output](https://www.reddit.com/r/ChatGPTPro/comments/1j5ykdn/tried_deep_research_painfully_slow_and_bad_output/)  
   - 処理待ち時間と品質ムラへの不満
3. [Reddit r/OpenAI: ChatGPT Deep Research is a game changer for LLM competition](https://www.reddit.com/r/OpenAI/comments/1j7i6md/chatgpt_deep_research_is_a_game_changer_for/)  
   - 市場調査用途での高評価と業務時間短縮の声
4. [Reddit r/OpenAI: Deep Research and Ollama. It's the future.](https://www.reddit.com/r/OpenAI/comments/1j7634r/deep_research_and_ollama_its_the_future/)  
   - 既存調査フローと組み合わせる実務的な活用感
5. [Reddit r/ChatGPT: The new Deep Research update is pretty underwhelming](https://www.reddit.com/r/ChatGPT/comments/1j7h2qa/the_new_deep_research_update_is_pretty/)  
   - 更新後の期待値とのギャップ、改善要望

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| Deep Researchは通常チャットと異なり、複数ソース横断の長時間調査を前提とした機能 | OpenAI Help: Deep research in ChatGPT | OpenAI: Introducing deep research | 採用 |
| `2026-02-10` にDeep Researchで「MCP接続」「接続アプリ活用」「調査対象サイト指定」が更新された | OpenAI Help: ChatGPT usage limits（2026-02-10項目） | OpenAI: Introducing deep research（Plus/Pro/Team/EnterpriseでMCP/アプリ接続対応） | 採用 |
| Deep Researchの提供対象は有料プラン全体（Plus/Pro/Business/Enterprise/Edu）で、MCPカスタム接続も同プラン群で案内されている | OpenAI Help: Connectors in ChatGPT（Plan availability表） | OpenAI Help: ChatGPT usage limits（2026-02-10項目） | 採用 |
| 1回の調査時間は数分ではなく、タスク次第で数十分かかる | OpenAI: Introducing deep research（5〜30分） | Google Gemini Deep Research（通常5〜10分）、Perplexity Deep Research（2〜4分）との比較 | 採用 |
| 1回あたりの「追加従量課金」は公式に明記されず、実効コストは「月額費用÷実行回数」で見積もるのが妥当 | ChatGPT Pricing（Deep researchはプラン機能として記載） | OpenAI Help: Deep research in ChatGPT（利用状況はusage pageで確認） | 採用（計算式として提示） |

## 4. MCP接続アップデート（2026-02-10）で変わった点
- 変更日: `2026-02-10`
- 変更内容（OpenAI公式）
  - Deep Researchの調査時に「接続済みアプリ」を参照可能
  - 「任意のMCPサーバー」や連携アプリを調査対象に指定可能
  - レポート作成時の調査対象を「特定Webサイト」に絞り込み可能
- 対応ツール解釈
  - 公式既定コネクタ: Google Drive / SharePoint / Dropbox / Box / Outlook / Gmail / Google Calendar / Linear / GitHub / HubSpot / Teams（過去公開済みの接続群）
  - 追加拡張: MCP経由で社内ナレッジや独自システムを接続可能（Plus/Pro/Business/Enterprise/Edu）

## 5. 時間・コスト見積もり（記事反映用）
- 時間目安（1回）
  - OpenAI Deep Research: 5〜30分（タスク依存）
  - Gemini Deep Research: 通常5〜10分
  - Perplexity Deep Research: 通常2〜4分
- コスト目安（1回）
  - 公式で「1回ごとの固定従量課金」は明示されていない
  - 実務上は `月額プラン費用 ÷ 月間Deep Research実行回数` で管理
  - 例: Plus $20/月で10回実行なら約$2/回、25回実行なら約$0.8/回
  - [要確認: 各プランの月間実行上限は変更されるため、執筆時点のusage表示を都度確認]

## 6. 記事反映方針
- 冒頭で「Deep Researchは検索拡張ではなく、時間をかける調査エージェント」である点を明示
- 起動手順はPlus/Pro/Business(旧Team)/Enterpriseを並列表で整理
- 市場調査・競合分析・論文要約・投資リサーチの4業務で、入力テンプレとレビュー基準を提示
- 2026-02-10のMCP更新は日付を固定表記し、旧情報との混同を防止
- ハルシネーション対策は「引用確認」「数値再計算」「反証プロンプト」を標準手順として記載
- 比較は「速度」「根拠透明性」「社内データ接続」「ガバナンス」の4軸で整理

## 7. 変動情報・不確実情報
- プラン別回数上限、連携可能アプリ、モデル品質は継続的に変動
- ChatGPT Team表記は運用上Businessへ統合される情報が混在するため、本文では「Business（旧Team）」と併記
- 投資判断は法務・コンプライアンス要件に依存するため、記事では一般的な調査プロセスまでに限定
