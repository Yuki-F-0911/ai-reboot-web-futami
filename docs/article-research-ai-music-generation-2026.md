---
title: "リサーチメモ｜ai-music-generation-2026"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-music-generation-2026.md"
  - "app/academy/blog/ai-music-generation-2026/page.tsx"
  - "components/academyLanding/blog/ai-music-generation-2026/AiMusicGeneration2026Page.tsx"
status: "draft"
dependencies:
  upstream: []
  downstream:
    - "app/academy/blog/ai-music-generation-2026/page.tsx"
    - "components/academyLanding/blog/ai-music-generation-2026/AiMusicGeneration2026Page.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチメモ: ai-music-generation-2026

## 1. 一次情報（公式）まとめ

確認日: **2026-02-20**

### Suno（最新版・料金・商用利用）

1. Suno Blog: v5 launch（2025-09-17）
- URL: `https://suno.com/blog/v5`
- 主要確認点:
  - v5が公開済みで、ジャンル・ボーカル再現性・サウンド品質の改善が案内されている。

2. Suno Blog: Studio 1.2（2026-01-06）
- URL: `https://suno.com/blog/studio1-2`
- 主要確認点:
  - Studio 1.2が案内され、Premier向け機能拡張（多トラック関連機能）が告知されている。

3. Suno Help: Plans and credits
- URL: `https://help.suno.com/en/articles/34804144567831-suno-plans-and-credits`
- 主要確認点:
  - Basicは1日50クレジット。
  - Proは月2,500クレジット、Premierは月10,000クレジット。
  - 有料プランは「$10から」と明記。

4. Suno Help: Commercial use
- URL: `https://help.suno.com/en/articles/28720773309591-commercial-use`
- 主要確認点:
  - Basic生成曲は非商用のみ。
  - Pro/Premier加入中に作成した曲は商用利用可能。
  - 無料時に作成した曲の商用化は原則不可（例外はサポート審査）。

5. Suno Help: Copyright ownership
- URL: `https://help.suno.com/en/articles/33602178879911-copyright-ownership`
- 主要確認点:
  - Basic作成曲はSuno所有、Pro/Premier作成曲はユーザー所有。
  - AI生成物の著作権保護可否は法域差がある旨を明記。

### Udio（最新機能・料金・商用利用）

6. Udio Help: Answers to common usage questions（更新: 2025-11）
- URL: `https://help.udio.com/en/articles/10739216-answers-to-common-usage-questions`
- 主要確認点:
  - 公式FAQで「作成楽曲の利用範囲」について説明。
  - 有料ユーザーは原則として商用利用可能という案内。

7. Udio Help: How credits work on Udio（更新: 2025-11）
- URL: `https://help.udio.com/en/articles/10551264-how-credits-work-on-udio`
- 主要確認点:
  - Free月100クレジット、Standard月1,200、Pro月4,800の枠が案内されている。

8. Udio Help: Can I buy more credits?（更新: 2025-08）
- URL: `https://help.udio.com/en/articles/10739337-can-i-buy-more-credits`
- 主要確認点:
  - クレジット追加購入仕様。
  - Standard（$10/月）・Pro（$30/月）表記の確認。

9. Udio Help: Updates to Udio's Terms of Service（2024-06-24）
- URL: `https://help.udio.com/en/articles/11042765-updates-to-udio-s-terms-of-service`
- 主要確認点:
  - 権利者契約（UMG等）に伴う運用制約変更の告知。
  - 既存楽曲のダウンロード条件など、利用条件が時期で変動する事例。

10. Udio Help: Changelog
- URL: `https://help.udio.com/en/articles/13281613-changelog`
- 主要確認点:
  - 2025-11以降の機能追加履歴（リミックス改善、拡張、テキスト入力体験など）。
  - 「2026年版比較」で最新版運用を語る際の根拠として利用。

### Mureka V8（公開状況・日本語対応・商用利用）

11. Mureka Official Site
- URL: `https://www.mureka.ai/`
- 主要確認点:
  - トップで「Best of v8」表記があり、V8モデルが一般UIで提供されている状況を確認。
  - 「Lyrics in 10+ languages」表記を確認（多言語歌詞対応）。

12. Mureka API Docs: Quickstart
- URL: `https://docs.mureka.ai/quickstart/introduction`
- 主要確認点:
  - API経由で多言語生成（日本語含む）対応が明示。
  - Paid planでcommercial use可と明示。

13. 36Kr / iimedia（第三者メディア）
- URL: `https://iimedia.cn/c1088/106970.html`
- 主要確認点:
  - 2026-01-28にMureka V8公開と報道。
  - ただし公式プレスリリースページで同日の英語一次資料は確認できず、日付断定には注意。

## 2. コミュニティ実声（SNS/掲示板）

確認日: **2026-02-20**

1. Reddit（Udio規約変更への反応）
- URL: `https://www.reddit.com/r/udiomusic/comments/1dlki4h/here_are_some_key_details_regarding_the_udioumg/`
- 声の要点:
  - 懸念: 既存生成曲の扱いが規約変更で変わることへの不安。
  - 示唆: 商用運用では、生成時の規約スナップショット保存が必要。

2. Reddit（Suno v4.5 vs Udio比較）
- URL: `https://www.reddit.com/r/singularity/comments/1ivtlcv/suno_v45_vs_udio_my_verdict_after_days_of_testing/`
- 声の要点:
  - 肯定: 用途次第で使い分け可能という実務的評価。
  - 懸念: 生成品質の好み差が大きく、単純な優劣がつけにくい。

3. Linux.do（Mureka V8利用メモ）
- URL: `https://linux.do/t/topic/834636`
- 声の要点:
  - 肯定: V8で音質が上がったとの体感報告。
  - つまずき: 無料枠運用と課金判断の分岐がわかりにくいという実務課題。

4. Product Hunt（Mureka公開ページ）
- URL: `https://www.producthunt.com/products/mureka/reviews`
- 声の要点:
  - 肯定: 初心者でも短時間で楽曲雛形を作れる評価。
  - 懸念: 作品品質よりも「用途適合（BGM/歌もの/配信）」で満足度が分かれる。

## 3. Claim別ファクトチェック

| Claim | 検証結果 | 根拠 |
|---|---|---|
| Suno最新バージョンはv5系で、2026年2月時点でStudio 1.2の機能拡張が告知済み | Confirmed | Suno Blog v5 / Studio 1.2 |
| Suno Basicは非商用、Pro/Premier生成曲は商用利用可能 | Confirmed | Suno Help: Commercial use |
| Sunoの無料/有料で所有権区分が異なる | Confirmed | Suno Help: Copyright ownership |
| Udioは有料プランで商用利用できる案内がある | Confirmed | Udio Help: usage questions |
| Udioの代表プラン価格はStandard $10 / Pro $30 | Confirmed（確認日付き） | Udio Help: buy more credits |
| Udioの機能・利用条件はアップデートで変わる | Confirmed | Udio Help: changelog / terms update |
| Mureka V8は一般向けサービス上で稼働している | Confirmed | mureka.aiトップのV8表記 |
| Mureka V8の正式リリース日（正確な日付） | Partial | 36Kr系報道あり、公式英語一次発表日が未確認 |
| Murekaの日本語対応は実運用でも可能 | Partial | API docsで日本語対応明記。Web UI側の精度差は用途依存で要検証 |
| Murekaの商用利用条件はPaid planで許可される | Confirmed（API文脈） | docs.mureka.ai quickstart |

## 4. 変動情報の扱い

- 料金・無料枠・クレジットは更新が速いため、本文比較表に **確認日: 2026-02-20** を明記。
- 商用利用は「生成時のプラン」が重要なため、公開前チェックとして「生成日時・契約プラン・利用規約版」を記録する運用を提案。
- Mureka V8の正式リリース日は一次資料が不足しているため、本文では
  - 「一般公開UIでV8表記を確認」
  - 「報道ベースの日付は補助情報」
  と分離して記載する。
- 不確実項目:
  - `[要確認: Murekaコンシューマー向け有料プランの公式価格表（2026-02-20時点で公開画面から即時確認できず）]`
  - `[要確認: Udio無料プランの商用可否に関する将来改定（規約更新頻度が高い）]`

## 5. 執筆時の差別化メモ（suno-ai-music-guide補完）

- 既存 `suno-ai-music-guide` は「Suno単体の始め方・プロンプト設計」が主軸。
- 本記事は以下を差分価値にする:
  - Suno / Udio / Mureka V8の3強比較を一枚で判断できる表
  - 料金と商用利用を「プラン条件」まで分解して比較
  - 用途別（BGM・ポップス・ボカロ風・プロ品質）で選定フローを提示
  - 最後にアカデミーCTAを3本柱で接続し、特定ツール講座誤認を避ける
