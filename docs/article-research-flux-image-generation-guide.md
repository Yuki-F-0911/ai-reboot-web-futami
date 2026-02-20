---
title: "記事リサーチ｜flux-image-generation-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-flux-image-generation-guide.md"
  - "app/academy/blog/flux-image-generation-guide/page.tsx"
  - "components/academyLanding/blog/flux-image-generation-guide/FluxImageGenerationGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "docs/article-draft-flux-image-generation-guide.md"
    - "app/academy/blog/flux-image-generation-guide/page.tsx"
    - "components/academyLanding/blog/flux-image-generation-guide/FluxImageGenerationGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: flux-image-generation-guide

## 0. 調査条件
- 対象テーマ: `Flux 画像生成 使い方`
- 主KW: `Flux 画像生成 使い方`
- サブKW:
  - `Flux.1 Dev Schnell Pro 比較`
  - `Stable Diffusion 後継`
  - `ローカル AI画像生成`
- ターゲット: 初心者〜中級者（Stable Diffusion経験者・ローカル運用志向）
- 確認日: `2026-02-20`
- 記事目的:
  - Flux.1 系列（Dev / Schnell / Pro / Ultra）の違いを、ライセンスと運用先（ローカル/クラウド）で判断できる形にする
  - ComfyUI / Forge と Replicate / fal.ai / Hugging Face の使い分けを、実行難易度と責任範囲で整理する
  - Midjourney / DALL·E系との比較は「得意領域と制約」を中心に、断定しすぎない形で提示する

## 1. 一次情報（公式・準公式）ソース
1. [FLUX 1.1 Pro | Black Forest Labs](https://bfl.ai/models/flux-pro)
2. [FLUX 1.1 Pro Ultra | Black Forest Labs](https://bfl.ai/models/flux-pro-ultra)
3. [FLUX [dev] Non-Commercial License v2.0](https://bfl.ai/legal/non-commercial-license-terms)
4. [Self-Serve Dev License Overview & Pricing（BFL Help）](https://help.bfl.ai/articles/9272590838-self-serve-dev-license-overview-pricing)
5. [black-forest-labs/FLUX.1-dev（Hugging Face）](https://huggingface.co/black-forest-labs/FLUX.1-dev)
6. [black-forest-labs/FLUX.1-schnell（Hugging Face）](https://huggingface.co/black-forest-labs/FLUX.1-schnell)
7. [ComfyUI Flux Examples（公式Examples）](https://comfyanonymous.github.io/ComfyUI_examples/flux/)
8. [ComfyUI Wiki: GPU Buying Guide（Flux VRAM目安）](https://comfyui-wiki.com/en/install/install-comfyui/gpu-buying-guide)
9. [Stable Diffusion WebUI Forge Discussion #981（maintainer発信）](https://github.com/lllyasviel/stable-diffusion-webui-forge/discussions/981)
10. [fal.ai: FLUX.1 dev API](https://fal.ai/models/fal-ai/flux/dev/api)
11. [fal.ai: FLUX.1 schnell API](https://fal.ai/models/fal-ai/flux/schnell/api)
12. [fal.ai: FLUX1.1 pro API](https://fal.ai/models/fal-ai/flux-pro/v1.1/api)
13. [OpenAI Image generation guide](https://platform.openai.com/docs/guides/image-generation/)
14. [Midjourney Art of Prompting（公式）](https://docs.midjourney.com/hc/en-us/articles/32835253061645-Art-of-Prompting)
15. [STRICT: Stress Test of Rendering Images Containing Text（arXiv 2025）](https://arxiv.org/abs/2505.18985)

## 2. コミュニティ実声（補助根拠）
> 個人情報や固有IDは記載せず論点のみ要約。

1. [How different is the quality between Dev and Schnell?（r/FluxAI）](https://www.reddit.com/r/FluxAI/comments/1elukyl)
   - 肯定/比較: Devは品質重視、Schnellは速度重視という体感が多い。
2. [How to improve the text quality on FLUX.1-Schnell model?（r/FluxAI）](https://www.reddit.com/r/FluxAI/comments/1gy8ztf)
   - つまずき: 長い文字列生成で精度が落ちる、複数回試行が必要という声。
3. [Text is broken in Flux Dev for me but Flux Schnell works correctly（r/StableDiffusion）](https://www.reddit.com/r/StableDiffusion/comments/1ffiz8l)
   - 懸念: 量子化/チェックポイント差で文字生成品質が変動しやすい。
4. [How to get Text into Flux Images?（r/StableDiffusion）](https://www.reddit.com/r/StableDiffusion/comments/1fgmerx)
   - つまずき: Forge設定とプロンプト書式で結果差が大きい。
5. [Testing FLUX comprehension in different languages（r/StableDiffusion）](https://www.reddit.com/r/StableDiffusion/comments/1ep3ovb)
   - 論点: 日本語含む多言語入力は可能だが、再現性は一様ではないという報告。

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| Flux.1には Dev / Schnell / Pro 系統があり、役割が異なる | BFLモデルページ（FLUX 1.1 Pro） | HF model cards（dev/schnell） | 採用 |
| SchnellはApache-2.0で商用利用可能 | HF FLUX.1-schnell（License: apache-2.0） | HF FLUX.1-schnell Key Features（commercial purposes） | 採用 |
| Devは非商用ライセンスが基本で、商用には別契約が必要 | HF FLUX.1-dev（non-commercial license） | BFL Non-Commercial License / Self-Serve Dev License FAQ | 採用 |
| Pro / UltraはAPI提供が主軸で、利用時は提供元の規約順守が必要 | BFLモデルページ（Pro/Ultra） | fal.ai FLUX1.1 pro（PRO Terms of Service順守） | 採用 |
| ComfyUIでローカル運用可能。メモリ不足時はFP8等の軽量化が有効 | HF model card（ComfyUI導線） | ComfyUI Examples（fp8 / weight_dtype tips） | 採用 |
| Forge経由でもFlux運用可能で、NF4/FP8の選択が性能差に効く | Forge Discussion #981（対応checkpoint） | Forge Discussion #981（6GB/8GB/12GBでNF4速度差） | 採用 |
| VRAMの厳密「最低値」は公式統一基準が乏しく、実運用はモデル/量子化依存 | ComfyUI Wiki（Flux VRAM目安） | Forge Discussion #981（低VRAM実運用ノウハウ） | 条件付き採用 |
| 2026-02時点の最新動向はFlux.2系登場で、Flux.1は継続運用ライン | BFLモデル一覧（FLUX.2 Max/2/Klein掲載） | FLUX [dev] license v2.0改定日（2025-11-25） | 採用 |
| DALL·E 2/3はOpenAI API上でdeprecated扱い（終了予定日あり） | OpenAI image generation guide（deprecated記載） | 同ガイドのモデル比較節 | 採用 |
| 日本語プロンプトは入力可能だが、文字レンダリング/厳密配置は依然難所が残る | STRICT（拡散モデルの文字生成課題） | Reddit実声（Flux日本語/テキスト再現の揺れ） | 条件付き採用 |

## 4. 記事本文へ反映する要点
- 冒頭で「最短導線」を明示:
  - 速く試す: `Schnell`（クラウド or 軽量ローカル）
  - 品質寄り: `Dev`（ローカル検証 + ライセンス確認）
  - 本番品質/API運用: `Pro/Ultra`
- バリアント比較は「品質/速度/ライセンス/実行場所」の4軸テーブル化。
- ローカル導入はComfyUIとForgeを分けて説明:
  - ComfyUI: 公式workflow導線
  - Forge: 低VRAM向け量子化選択の実務メモ
- クラウドは Replicate / fal.ai / Hugging Face を「初速・管理・料金更新頻度」で整理。
- Midjourney・DALL·E比較は優劣断定でなく、用途別の向き不向きで記述。

## 5. 変動情報（本文で確認日明記）
- ライセンス条件（特に Dev 商用可否）は更新されやすい。
- API価格と提供モデル（Pro/Ultra含む）は月次で変更される可能性がある。
- OpenAIのDALL·E系提供終了日は仕様変更対象になりうる。
- Fluxファミリーの現行主軸（Flux.1 / Flux.2）は製品追加で更新される。

## 6. 不確実・要確認
- [要確認: Black Forest Labs公式が示す「Flux.1ローカル運用の最低VRAM」単一基準]
  - 現状はコミュニティ/実装依存情報が中心で、公式の統一最小要件が見当たらない。
- [要確認: Flux.1 Devの商用利用条件のうち、2026年以降の改定差分]
  - Non-Commercial License v2.0 と Self-Serve Dev Licenseの両方確認が必要。
- [要確認: 日本語プロンプトに関する公式ベンチ（Flux.1 Dev/Schnell比較）]
  - 公開ベンチが不足しているため、記事では「実務上の運用指針」を優先する。

## 7. 反映方針メモ（CTA含む）
- LINE CTAは標準文言を2〜3回配置する。
- 記事末尾のアカデミーCTAは3本柱準拠:
  - 生成AI活用力
  - 自己理解・キャリアデザイン
  - 仲間と共に学ぶ環境
- 特定ツール操作の習得訴求（「Fluxを学べる」等）は書かない。
