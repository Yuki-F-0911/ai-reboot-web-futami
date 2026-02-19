---
title: "LINE特典配布オペレーション手順書（記事#31〜#33）"
version: "1.0"
last_updated: "2026-02-19"
author: "さかもと"
reviewers: []
related_docs: [
  "docs/content-strategy-batch3.md",
  "docs/line-bonus-04-job-hunting-template.md",
  "docs/line-bonus-05-industry-prompts-50.md",
  "docs/line-bonus-06-30day-study-plan.md",
  "components/academyLanding/blog/ai-job-hunting-guide/AiJobHuntingGuidePage.tsx",
  "components/academyLanding/blog/chatgpt-advanced-tips/ChatgptAdvancedTipsPage.tsx",
  "components/academyLanding/blog/ai-study-learning-guide/AiStudyLearningGuidePage.tsx"
]
status: "draft"
dependencies:
  upstream: [
    "docs/content-strategy-batch3.md",
    "components/academyLanding/blog/ai-job-hunting-guide/AiJobHuntingGuidePage.tsx",
    "components/academyLanding/blog/chatgpt-advanced-tips/ChatgptAdvancedTipsPage.tsx",
    "components/academyLanding/blog/ai-study-learning-guide/AiStudyLearningGuidePage.tsx"
  ]
  downstream: [
    "[TODO] LINE公式アカウント配布設定",
    "[TODO] 特典URL管理台帳（Notion/Spreadsheet）",
    "[TODO] 計測ダッシュボード（登録率・クリック率）"
  ]
impact_level: "medium"
---

<!-- ============Rulesを確認============ -->

# LINE特典配布オペレーション手順書（記事#31〜#33）

## 1. 目的

- SEO/AIO記事からLP・LINE登録へ誘導した後、**登録直後に特典を配布できる状態**を作る
- 特典配布を単発対応ではなく、**運用ルール化**して再現可能にする

---

## 2. 既存実装の確認結果（2026-02-19）

### 2-1. LINE導線（実装済み）

- #31：`components/academyLanding/blog/ai-job-hunting-guide/AiJobHuntingGuidePage.tsx`  
  `const lineUrl = "https://bexn9pao.autosns.app/line"` を使用
- #32：`components/academyLanding/blog/chatgpt-advanced-tips/ChatgptAdvancedTipsPage.tsx`  
  `const lineUrl = "https://bexn9pao.autosns.app/line"` を使用
- #33：`components/academyLanding/blog/ai-study-learning-guide/AiStudyLearningGuidePage.tsx`  
  `const lineUrl = "https://bexn9pao.autosns.app/line"` を使用

### 2-2. 現状ギャップ

- CTA文言は「週1AI通信」訴求が中心で、**記事別特典URLの出し分けは未設定**
- 特典配布ファイル（Google Docs/Notion/PDF）の**公開URL台帳が未整備**

---

## 3. 配布アセット一覧（本手順で管理）

| 記事 | slug | 特典ファイル（本リポジトリ） | 外部配布形式 | 外部URL（運用者入力） |
|---|---|---|---|---|
| #31 | `ai-job-hunting-guide` | `docs/line-bonus-04-job-hunting-template.md` | Google Docs | `[TODO]` |
| #32 | `chatgpt-advanced-tips` | `docs/line-bonus-05-industry-prompts-50.md` | Notion / PDF | `[TODO]` |
| #33 | `ai-study-learning-guide` | `docs/line-bonus-06-30day-study-plan.md` | Google Docs | `[TODO]` |

---

## 4. 外部配布ファイル準備フロー

1. Markdown原本をベースにGoogle Docs / Notionへ転記  
2. タイトルに特典番号を付与（例：`LINE特典04_職務経歴書テンプレ`）  
3. 閲覧権限を「リンクを知っている全員が閲覧可」に設定  
4. 編集権限は運用チームのみ付与  
5. 公開URLを本ドキュメントのアセット一覧へ記録  
6. PDF配布が必要な特典は同内容をPDF出力してURLも記録

---

## 5. LINE配布設定フロー

### 5-1. 配布方式

- 推奨：自動応答（キーワード配布）  
- 代替：登録直後メッセージ＋手動返信

### 5-2. キーワード設計（推奨）

| 特典 | 推奨キーワード | 返信内容 |
|---|---|---|
| #31 転職テンプレ | `転職テンプレ` | #31特典URL＋使い方1行 |
| #32 プロンプト50選 | `プロンプト50` | #32特典URL＋活用手順1行 |
| #33 30日学習プラン | `30日学習` | #33特典URL＋開始手順1行 |

### 5-3. 配布メッセージテンプレ

### #31配布文

```text
ご登録ありがとうございます。
「AI転職テンプレ（職種3種＋面接Q&A生成プロンプト）」はこちらです。
{#31配布URL}

使い方：共通インプットシート→職種別テンプレ→面接Q&Aの順で進めると最短で整います。
```

### #32配布文

```text
ご登録ありがとうございます。
「業種別プロンプト50選（営業・マーケ・総務・エンジニア・医療）」はこちらです。
{#32配布URL}

使い方：まず1職種10本を試し、使えたものだけチームテンプレに残してください。
```

### #33配布文

```text
ご登録ありがとうございます。
「30日学習プランテンプレ（資格・語学・AIスキルアップ）」はこちらです。
{#33配布URL}

使い方：Day1で目標設定→Day7/14/21/30で必ず振り返ると継続しやすくなります。
```

---

## 6. 計測設定（最低限）

### 6-1. URLパラメータ例

- #31：`[TODO] ?src=line&bonus=04&article=31`
- #32：`[TODO] ?src=line&bonus=05&article=32`
- #33：`[TODO] ?src=line&bonus=06&article=33`

### 6-2. 追う指標

- LINE登録数（記事別）
- 特典URLクリック数（特典別）
- 特典クリック率（クリック数/登録数）
- 特典経由の相談・セミナー遷移数

---

## 7. 配布前チェックリスト

- [ ] 外部URLが開ける（ログイン不要）
- [ ] スマホ表示で崩れない
- [ ] 誤字脱字・リンク切れなし
- [ ] 返信キーワードの誤配布なし
- [ ] 配布メッセージに別特典URLが混ざっていない
- [ ] 特典内容が記事CTA訴求と一致している

---

## 8. 週次運用（15分）

1. クリック率が低い特典を特定する  
2. 返信文1行目（価値訴求）をA/Bで改善する  
3. 次週は1特典だけ改善して効果検証する  
4. 更新履歴を残す（変更日・変更者・変更理由）

---

## 9. AIリブート活用方針（3本柱）

- **生成AI活用力**：特典を実務で使えるテンプレとして即配布  
- **自己理解・キャリアデザイン**：転職・学習の文脈で自己分析と将来設計を支援  
- **仲間と共に学ぶ環境**：LINE配布後も改善ヒントと対話で継続を後押し

---

## 10. 更新履歴

| バージョン | 更新日 | 更新者 | 更新内容 | 影響ドキュメント |
|---|---|---|---|---|
| 1.0 | 2026-02-19 | さかもと | 初版作成（#31〜#33の配布運用を定義） | `docs/line-bonus-04-job-hunting-template.md`, `docs/line-bonus-05-industry-prompts-50.md`, `docs/line-bonus-06-30day-study-plan.md` |
