---
title: "記事リサーチ｜generative-ai-skills-checklist"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "app/academy/blog/generative-ai-skills-checklist/page.tsx"
  - "components/academyLanding/blog/generative-ai-skills-checklist/GenerativeAiSkillsChecklistPage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/generative-ai-skills-checklist/page.tsx"
    - "components/academyLanding/blog/generative-ai-skills-checklist/GenerativeAiSkillsChecklistPage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: generative-ai-skills-checklist

## 0. 調査条件
- 対象テーマ: `生成AI スキル 身につける / AI活用スキル チェックリスト / 生成AI できること 一覧 / AIリテラシー 向上`
- 確認日: `2026-02-20`
- ターゲット: すでにAI利用経験はあるが、自分のレベルが見えない社会人
- 目的: 「今どのレベルか」を診断し、次に伸ばすべきスキルを行動に落とし込む

## 1. 一次情報（公式）ソース
1. [EU AI Act Article 4（AI Literacy）](https://artificialintelligenceact.eu/article/4/)  
   - AIシステムを扱う組織・提供者に対して、十分なAIリテラシー確保を求める要件を明記（適用日情報含む）。
2. [NIST GenAI Profile（NIST AI 600-1）](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)  
   - 生成AIのリスク管理観点（ガバナンス、評価、運用）を定義。
3. [OpenAI Docs: Prompt engineering](https://platform.openai.com/docs/guides/prompt-engineering)  
   - 指示設計の具体手法（明確化、分割、評価、反復）を学習スキルとして定義可能。
4. [Anthropic Docs: Prompt engineering overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)  
   - タスク分解やコンテキスト設計など、実務での出力安定化の実践原則を提示。
5. [Microsoft Learn: Prompt engineering techniques](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/prompt-engineering)  
   - Zero-shot/Few-shot/Chain-of-thoughtなど、難易度別の活用技術を整理。

## 2. 実利用者の声（SNS/コミュニティ）
1. [r/ArtificialInteligence: Anyone using AI tools seriously at work?](https://www.reddit.com/r/ArtificialInteligence/comments/1jq7w1i/anyone_using_ai_tools_seriously_at_work_hows_it/)  
   - 「AIの成果は利用者の理解度に左右される」という実務者の共通認識。
2. [r/careerguidance: Is anyone using AI tools seriously at work?](https://www.reddit.com/r/careerguidance/comments/1llu1se/is_anyone_using_ai_tools_seriously_at_work_hows/)  
   - 時短効果はあるが、品質担保と責任分界で詰まる傾向。
3. [r/ChatGPT: Haven't used AI at work before, what are you using it for?](https://www.reddit.com/r/ChatGPT/comments/1j6pz7j/havent_used_ai_at_work_before_what_are_you_using/)  
   - 活用領域が広い一方、「どこまでできれば実務レベルか」が曖昧という悩み。
4. [r/ChatGPTPro: best way to self learn generative AI](https://www.reddit.com/r/ChatGPTPro/comments/1jo4zn6/best_way_to_self_learn_generative_ai_no_coding/)  
   - 基礎→実践で段階的に伸ばす学習パターンが有効という現場知見。

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| 生成AIスキルは「使える/使えない」の二分法ではなく、段階評価が必要 | EU AI ActのAIリテラシー要件 | NIST GenAI Profileの成熟観点 | 採用 |
| レベル3以上は「出力を作る力」だけでなく「評価・検証力」が必須 | OpenAI Prompt engineering | Anthropic Prompt engineering overview | 採用 |
| 実務利用では速度向上だけでなく、品質責任の設計が重要 | NIST GenAI Profile | Reddit実声（品質担保の難しさ） | 採用 |
| 上位レベルは個人利用からチーム運用・再現可能な仕組み化へ移行する | NISTの運用管理観点 | Microsoft Learnの実装/運用技法整理 | 採用 |

## 4. 記事反映方針
- 5段階レベルを以下で設計
  - Lv1 入門: 基本操作と簡単な指示
  - Lv2 実用初級: 定型業務での再利用
  - Lv3 実務中級: 評価・検証・改善ループ
  - Lv4 上級: 部門内運用とリスク管理
  - Lv5 プロ: 組織展開と成果設計
- 各レベルで以下をセット化
  - できること
  - つまずきポイント
  - 習得すべきスキル
  - 練習メニュー（15〜60分）
- 自己診断セクションを中盤に配置し、「あなたは今どのレベル？」に回答できる構成にする
- レベル3以上向けCTAとして、アカデミー3本柱を明確に接続
  - 生成AI活用力
  - 自己理解・キャリアデザイン
  - 仲間と共に学ぶ環境

## 5. 不確実情報・注意点
- AIリテラシー要件の実務運用は業種・地域・組織規模で差が出るため、法的助言として断定しない
- ツール仕様・モデル性能は更新頻度が高いため、固定比較より評価観点重視で記述する
- レベル定義は学習設計の指標であり、資格認定を保証するものではない
