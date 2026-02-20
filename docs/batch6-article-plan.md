# batch6 記事計画

## 調査日: 2026-02-20

## リサーチサマリー

### 2026年2月の主要AIニュース
- **Claude Opus 4.6** リリース（2026年2月5日・1Mトークンコンテキスト・Anthropic評価額3,800億ドル）
- **GPT-5.3 / Codex Spark** リリース（OpenAI・高速生成・Cerebras連携）
- **Codex App**（macOS向け・2026年2月2日）
- **Gemini 3 Deep Think** 公開（2026年2月12日・推論特化・ARC-AGI-2最高スコア）
- **OpenAI Frontier**（企業向け統合基盤・HPで先行導入）
- **GitHub Agent HQ** にClaude + Codexが統合
- **OpenAI Deep Research** に2026年2月10日アップデート（MCP接続対応）
- **Vibe Coding** が2026年のAI開発キーワードとして急浮上
- **Kling AI** が動画生成分野で人気急上昇（1080p・30fps・最大3分）
- **Midjourney V1 Video** リリース（静止画→動画変換）

### 既存記事との主なギャップ
| 話題 | 検索ボリューム | 既存記事 | 判定 |
|------|-------------|---------|------|
| OpenAI Deep Research | 非常に高 | なし | **S** |
| Vibe Coding | 高 | なし | **S** |
| OpenAI Operator | 高 | なし（openai-atlas-guideはAtlas=ブラウザであり別物） | **S** |
| ElevenLabs音声合成 | 中〜高 | なし | **S** |
| AIエージェント比較2026 | 高 | what-is-ai-agentは概念説明のみ | **S** |
| Kling AI | 高 | ai-video-tool-comparisonで一部言及のみ | **A** |
| Claude Opus 4.6 | 高 | なし（claude-beginner-guideは古い） | **A** |
| Gemini 3 Deep Think | 中〜高 | gemini-3-practical-guideは汎用 | **A** |
| AI副業2026年版 | 高 | ai-side-business-guideあり（更新必要） | **A** |
| Midjourney動画生成 | 中 | midjourney-guideは静止画のみ | **A** |
| MCP実践連携ガイド | 中 | what-is-mcpは概念のみ | **B** |
| AIコーディングツール比較2026 | 中〜高 | Cursor/Claude Code/Copilotが別々に存在 | **B** |
| AI音楽生成比較2026 | 中 | suno-ai-music-guideのみ | **B** |
| Flux画像生成 | 中 | ai-image-generation-guideは総論 | **B** |
| AI情報収集術2026 | 中 | perplexity-ai-guideのみ | **B** |

---

## S優先度（5本）

| # | slug | 主KW | サブKW | ターゲット | 執筆方向 |
|---|------|------|--------|-----------|---------|
| 1 | `openai-deep-research-guide` | OpenAI Deep Research 使い方 | ChatGPT ディープリサーチ・調査AI・リサーチ自動化 | 中級者・ビジネスパーソン | Deep Researchの仕組み・起動手順・料金・実務での使いどころ（市場調査・競合分析・論文要約）を網羅。2026年2月10日のMCP接続アップデートも含む |
| 2 | `vibe-coding-beginner-guide` | Vibe Coding 入門 | バイブコーディング・AIコーディング・ノーコード開発 | 非エンジニア〜入門者 | Vibe Codingとは何か・従来開発との違い・おすすめツール5選（Cursor/Claude Code/v0等）・セキュリティ注意点・実際にアプリを作るチュートリアル付き |
| 3 | `openai-operator-guide` | OpenAI Operator 使い方 | Operatorブラウザ自動化・AIエージェント・ChatGPT Pro | 中級者・ビジネスパーソン | OperatorとAtlasの違いを明確化したうえで、Operatorの起動・Web操作自動化事例（予約・フォーム入力・ECサイト操作）・セキュリティ設定・料金（Pro必須）を解説 |
| 4 | `elevenlabs-guide` | ElevenLabs 使い方 | AI音声合成・テキスト読み上げ・ナレーション自動化 | 初心者〜中級者 | ElevenLabs完全ガイド：アカウント作成〜音声クローン作成・動画ナレーション・ポッドキャスト・日本語対応状況・料金プラン比較・VOICEVOX/NijiVoiceとの比較 |
| 5 | `ai-agent-landscape-2026` | AIエージェント 比較 2026 | ChatGPT Operator・Manus AI・Claude エージェント・Google Mariner | 中級者・IT担当者 | 2026年2月時点のAIエージェント勢力図：OpenAI（Operator/Atlas）・Google（Mariner/Deep Research）・Anthropic（Computer Use）・第三者（Manus/Genspark）の機能・料金・用途を徹底比較 |

---

## A優先度（5本）

| # | slug | 主KW | サブKW | ターゲット | 執筆方向 |
|---|------|------|--------|-----------|---------|
| 6 | `kling-ai-guide` | Kling AI 使い方 | 動画生成AI・AIビデオ作成・Kuaishou | 初心者〜中級者 | Kling AI完全ガイド：アカウント登録〜動画生成の手順・テキスト→動画・画像→動画の両パターン・料金（無料枠あり）・RunwayGen-3との比較・商用利用の注意点 |
| 7 | `claude-opus-4-6-guide` | Claude Opus 4.6 使い方 | Claude 4.6・1Mトークン・Anthropic最新モデル | 中級者・エンジニア | 2026年2月5日リリースのClaude Opus 4.6新機能：1Mトークンコンテキスト・Adaptive Thinking・effortパラメーター・前バージョンとのベンチマーク比較・料金・実務活用シーン |
| 8 | `gemini-deep-think-guide` | Gemini Deep Think 使い方 | Gemini 3・Google AI Ultra・推論AI・数学AI | 中級者 | Gemini 3 Deep Thinkの特徴：ARC-AGI-2/Codeforces結果・通常Geminiとの使い分け・AI Ultra料金・数学・科学・コード問題への活用方法・Claude/GPTとの推論能力比較 |
| 9 | `midjourney-video-guide` | Midjourney 動画生成 使い方 | Midjourney V1 Video・AI動画・静止画から動画 | 初心者〜中級者 | Midjourney V1 Video機能完全ガイド：対応プラン・Animateボタンの使い方・動画の長さ・品質設定・ダウンロード方法・Runway/Klingとの使い分け指針 |
| 10 | `ai-side-business-2026` | AI副業 2026 稼ぎ方 | AI副業おすすめ・月5万・在宅副業 | 初心者〜副業志望者 | 2026年版AI副業完全ガイド：AIエージェント丸投げ副業（記事生成・SNS運用・データ分析代行）・収益化ロードマップ・初心者が最初に取り組むべき3分野・実際の月収事例 |

---

## B優先度（5本）

| # | slug | 主KW | サブKW | ターゲット | 執筆方向 |
|---|------|------|--------|-----------|---------|
| 11 | `mcp-tool-integration-guide` | MCP 使い方 実践 | Model Context Protocol・Claude MCP設定・AIツール連携 | 中級者・エンジニア | MCPの実践活用ガイド：ClaudeにMCPサーバーを接続する手順・公式サーバー一覧・Notion/GitHub/Slack連携の設定方法・what-is-mcpの応用編として位置付け |
| 12 | `ai-coding-tool-comparison-2026` | AIコーディングツール 比較 2026 | Cursor vs Claude Code vs GitHub Copilot・Vibe Coding対応 | 入門〜中級エンジニア | 2026年版AIコーディングツール比較：Cursor（Agent）・Claude Code（Claude Opus 4.6対応）・GitHub Copilot（Agent HQ統合）の機能・料金・Vibe Coding対応力を実例で比較 |
| 13 | `ai-music-generation-2026` | AI音楽生成 比較 | Suno 最新版・Udio・Mureka V8・音楽AI | 初心者〜クリエイター | 2026年AI音楽生成ツール徹底比較：Suno最新版・Udio・Mureka V8の音質・商用利用可否・日本語歌詞対応・料金を比較。suno-ai-music-guideの発展版として差別化 |
| 14 | `flux-image-generation-guide` | Flux 画像生成 使い方 | Flux.1・Stable Diffusion後継・ローカルAI画像 | 初心者〜中級者 | Flux完全ガイド：Flux.1 Dev/Schnell/Proの違い・ローカルとクラウド（Replicate等）での使い方・Midjourney/DALL-Eとの比較・日本語プロンプト対応状況 |
| 15 | `ai-research-tool-2026` | AI情報収集 ツール 比較 | Perplexity・Deep Research・Genspark・リサーチAI | 中級者・研究者・マーケター | 2026年AI情報収集ツール比較：Perplexity（リアルタイム検索）・ChatGPT Deep Research（深掘り調査）・Genspark（AI旅行/専門特化）・用途別の最適ツール選択チャート付き |

---

## 更新推奨（既存記事のリライト候補）

| slug | 理由 | 更新の優先度 |
|------|------|------------|
| `what-is-ai-agent` | 2026年のAIエージェント事情（Operator/Atlas/Manus/Genspark）が大きく変わっており、概念説明が古い | 高 |
| `microsoft-copilot-guide` | Microsoft 365 Copilotは2025年後半〜2026年初頭に大幅アップデート（チームエージェント等）があり、最新情報が不足 | 中 |
| `ai-video-generation-comparison` | Kling AI・Midjourney V1 Video・Runway Gen-3等の新ツールが登場しており、比較表が陳腐化 | 高 |
| `suno-ai-music-guide` | 最新バージョン情報・Mureka V8との比較・商用利用条件更新が必要 | 中 |
| `gpt-vs-claude-comparison` | GPT-5.2 vs Claude Opus 4.6の最新ベンチマーク・価格比較に更新必要（gpt-vs-claude-2026が新版だが内容確認推奨） | 低 |

---

## 執筆順序の推奨

### 第1波（即時公開候補・ニュース性高）
1. `claude-opus-4-6-guide`（2月5日リリース→速報性あり）
2. `gemini-deep-think-guide`（2月12日リリース→速報性あり）
3. `openai-deep-research-guide`（検索ボリューム最大・常緑コンテンツ）

### 第2波（トレンド記事）
4. `openai-operator-guide`
5. `vibe-coding-beginner-guide`
6. `ai-agent-landscape-2026`

### 第3波（ツール系・ロングテール）
7. `kling-ai-guide`
8. `midjourney-video-guide`
9. `elevenlabs-guide`
10. `ai-side-business-2026`

### 第4波（深掘り・中級者向け）
11. `mcp-tool-integration-guide`
12. `ai-coding-tool-comparison-2026`
13. `ai-music-generation-2026`
14. `flux-image-generation-guide`
15. `ai-research-tool-2026`

---

## リサーチソース

- [2026年2月AI最新動向まとめ（フィデックス）](https://www.fidx.co.jp/%E3%80%902026%E5%B9%B4%E7%89%882%E6%9C%882%E9%80%B1%E7%9B%AE%E3%80%91%E7%94%9F%E6%88%90ai%E6%9C%80%E6%96%B0%E5%8B%95%E5%90%91%E3%81%BE%E3%81%A8%E3%82%81%EF%BD%9Cgpt-5-3%E3%83%BBgemini-3%E3%83%BBclaude/)
- [Vibe Codingとは（TD SYNNEX）](https://jp.tdsynnex.com/blog/ai/what-is-vibe-coding/)
- [OpenAI Operatorとは（AISmiley）](https://aismiley.co.jp/ai_news/what-is-operator/)
- [OpenAI Deep Research完全ガイド（福井AI研究所）](https://fc-datascience.com/openai-deep-research/)
- [2026年動画生成AIおすすめ比較（MiraLabAI）](https://miralab.co.jp/media/best_ai_video_generators/)
- [Mureka V8 vs Suno (Gaga.art)](https://gaga.art/blog/mureka-v8/)
- [2026年AI副業完全ガイド（SBbit）](https://www.sbbit.jp/article/cont1/178762)
- [AIエージェント勢力図2026（Zenken AI）](https://ai.zenken.co.jp/post/ai-agent-landscape-2026/)
