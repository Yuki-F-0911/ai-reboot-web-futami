---
title: "LINE特典配布 週次計測テンプレート"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs: [
  "app/briefing/page.tsx",
  "docs/content-strategy-batch3.md",
  "docs/line-bonus-04-job-hunting-template.md",
  "docs/line-bonus-05-industry-prompts-50.md",
  "docs/line-bonus-06-30day-study-plan.md"
]
status: "draft"
dependencies:
  upstream: [
    "app/briefing/page.tsx"
  ]
  downstream: [
    "[TODO] 計測ダッシュボード（GA4 / Looker Studio）",
    "[TODO] LINE登録完了イベント計測仕様"
  ]
impact_level: "medium"
---

<!-- ============Rulesを確認============ -->

# LINE特典配布 週次計測テンプレート

## 1. 計測指標定義

### 1-1. 記事別CTR（mid-article CTA クリック率）

- 指標名: `Article CTR`
- 定義: 各記事内の中間CTAクリック数 ÷ 各記事PV
- 対象: `src=blog` かつ `placement=mid` のCTA
- 算出式:

```text
Article CTR(%) = (mid-article CTA click数 / 記事PV) x 100
```

### 1-2. 特典別クリック数（bonus=bonus0X パラメータ別）

- 指標名: `Bonus Clicks`
- 定義: `/line?src=briefing&bonus=bonus0X` のクリック数
- 集計軸: `bonus01`〜`bonus06`
- 推奨確認単位: 日次・週次

### 1-3. LINE登録率（クリック→登録の転換率）

- 指標名: `LINE CVR`
- 定義: 特典リンククリック数に対するLINE登録完了数
- 算出式:

```text
LINE CVR(%) = (LINE登録完了数 / 特典リンククリック数) x 100
```

- 備考: 計測基盤上でクリックイベントと登録完了イベントのID連携を行う

## 2. 週次レビュー手順（チェックリスト）

### 2-1. UTMパラメータ確認手順

- [ ] 今週追加・変更したCTA URL一覧を抽出する
- [ ] `src` が意図どおり設定されていることを確認する（例: `briefing`, `blog`）
- [ ] `bonus` が `bonus01`〜`bonus06` の命名規則に一致していることを確認する
- [ ] 不正なパラメータ（空値、typo、大文字混在）を修正する

### 2-2. 記事別ランキング作成方法

- [ ] 記事別に `mid-article CTA click数` と `記事PV` を取得する
- [ ] 記事ごとに `Article CTR` を算出する
- [ ] CTR降順で並べ、上位3記事・下位3記事を抽出する
- [ ] 前週比で増減率を算出し、変動要因をメモする

### 2-3. 改善案PickUp基準

- [ ] 下位3記事のうち、PV上位の記事を優先して改善対象にする
- [ ] `Bonus Clicks` が偏っている場合、訴求文の差し替え候補を作る
- [ ] `LINE CVR` が低い場合、遷移後メッセージの冒頭文を見直す
- [ ] 週次では同時に2施策以上を実施せず、1施策ずつ効果検証する

## 3. 特典別配布メッセージ管理表

| 特典 | メッセージ内容（要約） | 配布条件 | 対象記事 |
|---|---|---|---|
| 特典01 | AI活用ガイドライン雛形（社内配布用テンプレート）案内 | `bonus=bonus01` クリック後の登録完了 | briefing / 法人導入系記事 |
| 特典02 | AI導入効果チェックリスト（30項目）案内 | `bonus=bonus02` クリック後の登録完了 | briefing / 比較検討系記事 |
| 特典03 | AI導入ROI試算シート（Excel形式）案内 | `bonus=bonus03` クリック後の登録完了 | briefing / ROI・稟議系記事 |
| 特典04 | AI転職・求人票チェックシート案内 | `bonus=bonus04` クリック後の登録完了 | briefing / 転職・キャリア系記事 |
| 特典05 | 業種別AIプロンプト50選案内 | `bonus=bonus05` クリック後の登録完了 | briefing / 実務活用系記事 |
| 特典06 | 30日AI学習プラン（ロードマップ付き）案内 | `bonus=bonus06` クリック後の登録完了 | briefing / 学習・リスキリング系記事 |

## 4. bonus命名規則定義表

| bonus値 | 定義 | URLパラメータ例 | 特典ファイル名（運用管理名） |
|---|---|---|---|
| `bonus01` | AI活用ガイドライン雛形（社内配布用テンプレート） | `https://bexn9pao.autosns.app/line?src=briefing&bonus=bonus01` | `line-bonus-01-ai-guideline-template` |
| `bonus02` | AI導入効果チェックリスト（30項目） | `https://bexn9pao.autosns.app/line?src=briefing&bonus=bonus02` | `line-bonus-02-ai-effect-checklist-30` |
| `bonus03` | AI導入ROI試算シート（Excel形式） | `https://bexn9pao.autosns.app/line?src=briefing&bonus=bonus03` | `line-bonus-03-ai-roi-sheet` |
| `bonus04` | AI転職・求人票チェックシート | `https://bexn9pao.autosns.app/line?src=briefing&bonus=bonus04` | `line-bonus-04-job-check-sheet` |
| `bonus05` | 業種別AIプロンプト50選 | `https://bexn9pao.autosns.app/line?src=briefing&bonus=bonus05` | `line-bonus-05-industry-prompts-50` |
| `bonus06` | 30日AI学習プラン（ロードマップ付き） | `https://bexn9pao.autosns.app/line?src=briefing&bonus=bonus06` | `line-bonus-06-30day-learning-plan` |

## 5. 週次レビュー記録テンプレート

| 週 | Article CTR 上位3 | Article CTR 下位3 | Bonus Clicks 上位 | LINE CVR | 今週の改善施策 | 次週アクション |
|---|---|---|---|---|---|---|
| YYYY-WW | [TODO] | [TODO] | [TODO] | [TODO] | [TODO] | [TODO] |

## 更新履歴

| バージョン | 更新日 | 更新者 | 更新内容 | 影響ドキュメント |
|---|---|---|---|---|
| 1.0 | 2026-02-20 | さかもと | 週次計測テンプレートとして再作成（bonus01〜06対応） | `app/briefing/page.tsx` |
