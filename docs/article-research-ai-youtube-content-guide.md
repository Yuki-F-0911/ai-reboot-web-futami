---
title: "記事リサーチ｜ai-youtube-content-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-youtube-content-guide.md"
  - "app/academy/blog/ai-youtube-content-guide/page.tsx"
  - "components/academyLanding/blog/ai-youtube-content-guide/AiYoutubeContentGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/ai-youtube-content-guide/page.tsx"
    - "components/academyLanding/blog/ai-youtube-content-guide/AiYoutubeContentGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: ai-youtube-content-guide

## 0. 調査条件
- 対象テーマ: `YouTube AI 動画制作`
- 主KW: `YouTube AI 動画制作`
- サブKW:
  - `AI 動画編集 2026`
  - `YouTubeショート AI`
  - `動画 台本 AI生成`
- 確認日: `2026-02-20`
- ターゲット: 個人（YouTuber・コンテンツクリエイター・副業希望者）
- 方針: 料金・仕様・対応言語は一次情報を優先し、SNS実声は補助根拠として扱う

## 1. 一次情報（公式）ソース
1. [Best practices for prompt engineering with the OpenAI API](https://help.openai.com/en/articles/6654000-best-practices-for-promptengineering-with-openai-api)
2. [Prompting | OpenAI API](https://platform.openai.com/docs/guides/prompting)
3. [Prompt design strategies | Gemini API](https://ai.google.dev/guide/prompt_best_practices)
4. [Pricing & Plans | Descript](https://www.descript.com/pricing)
5. [Supported transcription languages – Descript Help](https://help.descript.com/hc/en-us/articles/10249408168845-Supported-transcription-languages)
6. [Dub speech to add translated voiceover – Descript Help](https://help.descript.com/hc/en-us/articles/37194900295821-Dub-speech-to-add-translated-voiceover)
7. [How Do I Fix Inaccurate Auto-Captions in CapCut?](https://www.capcut.com/help/auto-captions-in-capcut)
8. [How can I enjoy the CapCut Pro Free Trial](https://www.capcut.com/help/enjoy-capcut-pro-free-trail)
9. [Why Is There No 2K/4K Export Option in CapCut?](https://www.capcut.com/help/no-2k-or-4k-option-for-export)
10. [Why can't I find the "AI Video Maker" in CapCut Desktop?](https://www.capcut.com/help/find-ai-video-maker-in-capcut-desktop)
11. [Get started with Creator Music - YouTube Help](https://support.google.com/youtube/answer/11610212?hl=en)
12. [Creator Music eligibility and restrictions - YouTube Help](https://support.google.com/youtube/answer/11623091?hl=en)
13. [Creator Music FAQ - YouTube Help](https://support.google.com/youtube/answer/11610609?hl=en)
14. [Use automatic dubbing - YouTube Help](https://support.google.com/youtube/answer/15569972?hl=en)
15. [Create content for Shorts using AI-generated features - YouTube Help](https://support.google.com/youtube/answer/15531401?hl=en)
16. [Powering the Future: YouTube's New AI & Creator Tools - YouTube Blog](https://blog.youtube/news-and-events/made-on-youtube-2025/)
17. [Unpacking the magic of our new creative tools - YouTube Blog](https://blog.youtube/news-and-events/generative-ai-creation-tools-made-on-youtube-2025/)

## 2. SNS・コミュニティ実声（補助根拠）
1. [r/PartneredYoutube: Auto dubbing increased traffic](https://www.reddit.com/r/PartneredYoutube/comments/1m5inxx/auto_dubbing_increased_traffic/)  
   - 傾向: 肯定。多言語露出が増えた体感。
2. [r/PartneredYoutube: negative results with auto dubbing](https://www.reddit.com/r/PartneredYoutube/comments/1m9wcam/has_anyone_else_had_negative_results_with_auto/)  
   - 傾向: 懸念。視聴維持率や違和感への言及。
3. [r/PartneredYoutube: auto dubbing cut RPM after 6 months](https://www.reddit.com/r/PartneredYoutube/comments/1n8ffyx/auto_dubbing_cut_my_rpm_in_half_after_6_months/)  
   - 傾向: 懸念。収益指標の悪化報告。
4. [r/ShortsCreators: Is auto dubbing dead views?](https://www.reddit.com/r/ShortsCreators/comments/1n87iv9/is_auto_dubbing_dead_views/)  
   - 傾向: 中立〜懸念。チャンネル特性で効果差。
5. [r/descript: Is Descript even usable for you people?](https://www.reddit.com/r/descript/comments/1kmjv27/is_descript_even_usable_for_you_people/)  
   - 傾向: 懸念。安定性やワークフロー相性のばらつき。

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| 台本生成は「目的・制約・出力形式」を先頭で固定すると品質が安定しやすい | OpenAI Prompt Best Practices | Gemini Prompt Design Strategies | 採用 |
| Descriptの2026年主要価格帯は Hobbyist / Creator / Business で段階化されている | Descript Pricing | Descript Pricing（メディア時間・AIクレジット比較表） | 採用 |
| Descriptは文字起こしで日本語未対応だが、Dub speechでは日本語がサポート対象に含まれる | Supported transcription languages | Dub speech to add translated voiceover | 採用（用途別に切り分け必須） |
| CapCutのAI機能・高解像度書き出しは端末/OS/地域/ロールアウト状況で差が出る | No 2K/4K option in CapCut | AI Video Maker in testing phase | 採用 |
| CapCut Pro無料トライアルは全地域一律ではなく、対象地域・バージョン条件がある | Enjoy CapCut Pro Free Trial | No 2K/4K option（機能差分の前提） | 採用 |
| Creator Musicは米国YPP中心で、ライセンス購入型と収益分配型が混在する | Get started with Creator Music | Creator Music FAQ / Eligibility & restrictions | 採用 |
| YouTubeの自動吹替は日本語を含むが、言語ごとの実験提供があり手動レビュー設定が重要 | Use automatic dubbing | YouTube Studio設定手順（同ヘルプ内） | 採用 |
| Shorts向けAI生成機能（Veo系、Edit with AI等）は段階展開で、地域差を前提に設計する必要がある | YouTube Blog: Made on YouTube 2025 | YouTube Blog: Generative AI creation tools | 採用 |

## 4. 記事反映方針
- 企画→台本→編集→サムネ→公開後検証までを1本の運用フローとして提示する
- 台本生成は ChatGPT と Gemini の「共通テンプレ」と「使い分け」を明示する
- 編集ツール比較は Descript / CapCut AI の2軸（用途適合・制限）で整理する
- Shorts向けは「尺・フック・字幕・多言語」の運用論に寄せる
- LINE CTAは統一文言で2〜3箇所、アカデミーCTAは3本柱のみで接続する
- 内部リンクは最低3本（`ai-video-tool-comparison`、`ai-content-sns-guide`、`ai-image-generation-guide`）

## 5. 変動情報・不確実情報
- CapCut Proの正確な月額/年額は地域・端末・配布チャネルで差分があるため、本文では固定価格を断定しない（購入画面確認を推奨）
- YouTubeのAI機能は段階展開が続いており、同一機能でもアカウントごとに表示差がありうる
- Reddit実声は個別体験であり、一般化の根拠には使わない（補助根拠扱い）
- 上記はすべて確認日 `2026-02-20` 時点
