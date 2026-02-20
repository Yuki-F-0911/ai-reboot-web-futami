---
title: "記事構成案｜Midjourney V1 Video使い方ガイド"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-research-midjourney-video-guide.md"
  - "app/academy/blog/midjourney-video-guide/page.tsx"
status: "draft"
dependencies:
  upstream: ["docs/article-research-midjourney-video-guide.md"]
  downstream:
    - "app/academy/blog/midjourney-video-guide/page.tsx"
    - "components/academyLanding/blog/midjourney-video-guide/MidjourneyVideoGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# Midjourney V1 Video使い方ガイド｜静止画から動画化する手順と比較判断

## 1. 記事メタ情報
- slug: `midjourney-video-guide`
- 主KW:
  - Midjourney 動画生成 使い方
- サブKW:
  - Midjourney V1 Video
  - AI動画 静止画から動画
  - Midjourney アニメーション
- カテゴリ: 最新AIツール
- 想定読者:
  - Midjourneyをすでに使っている初心者〜中級者
  - 静止画をそのまま短尺動画に展開したい人
- 想定文字数: 5,500〜7,500字

## 2. 検索意図と回答方針
- 検索意図:
  - V1 Videoが何か、いつ出たのかを最短で知りたい
  - Basic/Standard/Pro/Megaで何が違うか知りたい
  - WebとDiscordのAnimate操作手順を知りたい
  - 秒数・解像度・品質設定を先に把握したい
  - Runway/Klingとどう使い分けるか判断したい
- 回答方針:
  - 冒頭で「正式公開日は2025-06-18」を明記し、日付混同を解消
  - 操作手順はWeb/Discordで分けて図解的に記述
  - 仕様は表で提示し、確認日 `2026-02-20` を全セクションに付記
  - 比較は優劣断定ではなく「向いている工程」で提示

## 3. 見出し構成（H2）
1. 要点まとめ（TL;DR）
2. Midjourney V1 Videoとは？できること・リリース時期
3. 対応プランと料金の見方（Basic/Standard/Pro/Mega）
4. Animateボタンの使い方（Web / Discord）
5. 動画の長さ・品質・解像度設定（最大秒数・HD条件）
6. ダウンロード・共有・商用利用の注意点
7. Runway Gen-3・Kling AIとの使い分け
8. FAQ（6問）
9. アカデミーCTA（3本柱ベース）

## 4. 各H2の要点
- H2-1 要点まとめ:
  - V1 Video正式公開: 2025-06-18
  - 4秒開始、Extendで最大21秒
  - HD（VideoUpscale）はStandard以上
  - 動画生成は全プランFastで利用可
  - 使い分け: Midjourney=静止画起点、Runway=編集込み、Kling=表現探索
- H2-2 V1 Video概要:
  - 静止画を起点にAuto/Manualで動きを付与
  - Low/High motionの違いと実務での使い分け
- H2-3 プラン:
  - Basicでも動画生成は可能
  - Standard以上でHD対応、Pro/Megaで運用自由度が増える
- H2-4 Animate手順:
  - Web操作ステップ
  - Discord操作ステップ
  - 失敗しやすい点（元画像構図・動き指定）
- H2-5 スペック:
  - 秒数/解像度/Motion/Auto-Manualの表
  - 生成コスト感（画像比8倍）を注記
- H2-6 配布と商用:
  - 保存方法、共有前チェック
  - 商用条件（年商1M USD閾値）
- H2-7 比較:
  - Runway Gen-3: 長尺化・編集導線
  - Kling: 多彩なモーション探索
  - 目的別の選定チャート

## 5. 内部リンク設計（最低3本）
1. `/academy/blog/midjourney-guide`  
   - Midjourney静止画生成の基礎導線
2. `/academy/blog/ai-video-generation-comparison`  
   - 動画生成AIの全体比較
3. `/academy/blog/ai-image-generation-guide`  
   - 画像生成ツール比較の補強
4. `/academy/blog/ai-legal-guide`（任意）  
   - 商用利用時の法務補強

## 6. LINE CTA設計（必須統一）
- タイトル:
  - `AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）`
- ボタン:
  - `LINEで週1AI通信を受け取る（無料）`
- 配置:
  - CTA #1: 要点まとめ直後
  - CTA #2: Animate手順セクション後
  - CTA #3: FAQ後

## 7. FAQ案（6問）
1. Midjourney V1 Videoはいつ正式リリースされましたか？
2. Basicプランでも動画生成は使えますか？
3. Midjourney動画は最長何秒まで生成できますか？
4. 720p（HD）で出力するにはどのプランが必要ですか？
5. WebとDiscordはどちらが初心者向けですか？
6. Midjourney動画は商用利用できますか？

## 8. アカデミーCTA方針（CRITICAL）
- 必ず3本柱で表現:
  - 生成AI活用力
  - 自己理解・キャリアデザイン
  - 仲間と共に学ぶ環境
- NG回避:
  - 「Midjourney操作を学べる」「動画生成を実装できる」等の訴求は禁止
- 記載方針:
  - ツールの手順習得ではなく、AI活用の判断軸とキャリア設計へ接続する

## 9. 注意書き
- 仕様・料金・規約は `2026-02-20` 時点で確認
- Klingのグローバル価格詳細は `[要確認]` 注記を残す

