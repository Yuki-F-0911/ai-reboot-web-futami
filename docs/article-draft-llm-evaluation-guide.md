---
title: "記事構成案｜生成AIの評価（LLM評価）入門"
version: "1.0"
last_updated: "2026-02-19"
author: "さかもと"
reviewers: []
related_docs:
  - "app/academy/blog/page.tsx"
  - "docs/content-strategy-2026-02.md"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/llm-evaluation-guide/page.tsx"
    - "components/academyLanding/blog/llm-evaluation-guide/LlmEvaluationGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# 記事構成案: llm-evaluation-guide

## 1. 記事メタ情報
- slug: `llm-evaluation-guide`
- 主KW: `LLM 評価`
- サブKW:
  - `生成AI 品質 テスト`
  - `AI出力評価 指標`
  - `LLM 運用監視`
  - `生成AI ガバナンス 企業`
- ターゲット: 法人（DX推進、人事、情シス、業務部門責任者）
- 想定文字数: 5,000〜7,000字

## 2. 検索意図
- 生成AIを業務に入れたが、品質をどう測るべきか分からない
- PoC後に「本番運用できる品質か」を説明できる評価軸がほしい
- 監査/説明責任に耐える評価運用の型を探している

## 3. 見出し構成（H2/H3）

## H2-1 結論: LLM評価は「正解率」ではなく「業務リスク」で設計する
### H3 先に決めるべき3点（用途/失敗コスト/責任者）
### H3 評価指標を分ける（品質・安全・運用）

## H2-2 何を測るか: 品質・安全性・運用性の3レイヤー
### H3 品質（正確性、再現性、根拠）
### H3 安全性（機密、著作権、バイアス）
### H3 運用性（速度、コスト、介入率）

## H2-3 【コピペ可】LLM評価シート（週次運用テンプレ）
### H3 スコアカード
### H3 失敗時エスカレーション欄

## H2-4 導入30日の評価運用ロードマップ
### H3 0〜7日: 基準値作成
### H3 8〜14日: しきい値設定
### H3 15〜30日: 本番監視

## H2-5 部門別の実務例（営業/人事/CS）
### H3 「どこまで任せるか」の境界線
### H3 レビュー責任の置き方

## H2-6 FAQ

## 4. 内部リンク候補
- `/academy/blog/ai-poc-guide`
- `/academy/blog/ai-guideline-template`
- `/academy/blog/ai-agent-deployment-checklist`
- `/academy/blog/ai-data-leak-patterns`

## 5. LINE CTA方針
- 本文前半: 週1AI通信（無料）
- 本文中盤: 評価シートの使い方と合わせて導線
- 記事末尾: `/academy` への導線 + LINE登録

## 6. FAQ案（6問）
1. LLM評価は何件サンプルを用意すればよいですか？
2. 正答率だけではダメな理由は何ですか？
3. 幻覚をどう定義すれば運用しやすいですか？
4. 承認フローはどこに入れるべきですか？
5. 週次運用で最低限見るべき指標は何ですか？
6. 小規模チームでも評価運用は回せますか？
