# 記事構成案: midjourney-guide

- 作成日: 2026-02-20
- 記事タイトル案: Midjourney v7使い方完全ガイド【2026年版】DiscordとWebの違い・料金・商用利用を解説
- 文字数目標: 5,000〜8,000字
- ペルソナ: 個人（クリエイター、デザイン初心者、副業で画像制作を試したい層）
- 検索意図:
  - Midjourney v7の始め方を短時間で把握したい
  - DiscordとWebアプリをどう使い分けるか知りたい
  - 日本語プロンプトの実態と英語推奨理由を理解したい
  - DALL·E 3 / Stable Diffusion / Canva AIと比較して選びたい
  - 商用利用・著作権リスクを先に確認したい

## 見出し設計（H2×6 / H3×3）

### H2-1: 結論｜Midjourney v7は「Webで開始 -> Discordで拡張」が最短
- TL;DRを3〜4行で提示
- リリース時期（2025-04-03公開、2025-06-17デフォルト化）を先出し
- H3-1: 迷ったときの選び方（Discord先行かWeb先行か）
- LINE CTA（1回目）をH2-1直後に配置

### H2-2: Midjourney v7（2026年最新版）の特徴と始め方
- v7の主機能: personalization、Draft Mode、Turbo/Relax
- 初期セットアップ手順（アカウント、plan、生成まで）
- つまずきやすいポイント（personalization解放）

### H2-3: Discord経由 vs Webアプリの使い分け
- 役割分担: Webは視覚操作、Discordはコマンド運用
- `/imagine` と `--ar` など実務頻出の最小セット
- H3-2: 制作フロー別（SNS素材/サムネ/副業案件）の推奨導線

### H2-4: プロンプトの書き方｜日本語対応の実態と英語推奨の理由
- 公式ベース: short, specific
- 日本語入力の可否、英語キーワード併用の実務メリット
- H3-3: 日本語 -> 英語変換テンプレ（目的・構図・質感・制約）
- LINE CTA（2回目）をH2-4後に配置

### H2-5: AI画像生成比較 2026｜Midjourney / DALL·E 3 / Stable Diffusion / Canva AI
- 開始難易度、自由度、商用利用確認コスト、業務統合で比較
- DALL·E 3の移行期注記（deprecations）
- 内部リンク3本以上（AI画像生成ガイド、著作権系、副業系）

### H2-6: 商用利用・著作権の注意点とFAQ
- Midjourney規約の実務判断ポイント（年商100万USD閾値）
- 著作権・商標・肖像権のチェックリスト
- FAQ 6問
- FAQ末尾にLINE CTA（3回目）
- 記事末尾にアカデミーCTA（3本柱準拠）

## 内部リンク設計（最低3本）

1. `/academy/blog/ai-image-generation-guide`  
   - ツール比較の補足
2. `/academy/blog/ai-legal-guide`  
   - 著作権・法務観点の深掘り
3. `/academy/blog/ai-side-business-guide`  
   - 副業文脈での活用設計
4. `/academy/blog/chatgpt-prompt-beginner`（任意）  
   - プロンプト基本設計の補足

## CTA配置

1. LINE CTA（H2-1直後）
2. LINE CTA（H2-4後）
3. LINE CTA（FAQ末尾）
4. アカデミーCTA（記事終盤）
   - 3本柱: 生成AI活用力 / 自己理解・キャリアデザイン / 仲間と学ぶ環境
   - NG: 「Midjourneyの使い方を学べる」等のツール習得訴求

## FAQ案（6問）

1. Midjourney v7は無料で使えますか？
2. Midjourney v7はDiscordなしでも使えますか？
3. 日本語プロンプトだけでも十分ですか？
4. DALL·E 3とMidjourneyはどちらが初心者向けですか？
5. Stable Diffusionと比較したときの違いは何ですか？
6. Midjourneyの商用利用で最初に確認すべき点は何ですか？

## メタ情報案

- title（60字以内）  
  `Midjourney v7使い方完全ガイド｜Discord・Web・料金・商用利用【2026年版】 | AIリブート`
- description（120〜160字）  
  `Midjourney v7の始め方を2026年版で解説。Discord経由とWebアプリの使い分け、日本語プロンプトの実態、料金プラン（Basic/Standard/Pro/Mega）、DALL·E 3・Stable Diffusion・Canva AI比較、商用利用と著作権の注意点を整理。`
- keywords（6個）  
  - Midjourney v7 使い方
  - Midjourney 日本語
  - Midjourney 始め方
  - AI 画像生成 比較 2026
  - Midjourney 料金
  - Midjourney 商用利用

## 実装メモ

- `app/academy/blog/midjourney-guide/page.tsx` を新規作成
- `components/academyLanding/blog/midjourney-guide/MidjourneyGuidePage.tsx` を新規作成
- `app/academy/blog/page.tsx` の `blogPosts` に追記
- 価格・仕様・規約には「確認日: 2026-02-20」を明記
