---
title: "記事構成案｜mcp-tool-integration-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-research-mcp-tool-integration-guide.md"
  - "app/academy/blog/mcp-tool-integration-guide/page.tsx"
  - "components/academyLanding/blog/mcp-tool-integration-guide/McpToolIntegrationGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/mcp-tool-integration-guide/page.tsx"
    - "components/academyLanding/blog/mcp-tool-integration-guide/McpToolIntegrationGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# 記事構成案: mcp-tool-integration-guide

## 1. 記事メタ情報
- slug: `mcp-tool-integration-guide`
- タイトル案:
  - `MCP使い方実践ガイド｜Claude Desktop・Claude CodeでNotion/GitHub/Slack連携【2026年2月版】`
- 主KW:
  - `MCP 使い方 実践`
- サブKW:
  - `Model Context Protocol 設定`
  - `Claude MCP サーバー`
  - `AIツール連携 実践`
- カテゴリ: `実務活用`
- ターゲット:
  - Claudeに外部ツールを接続したい中級者・エンジニア
  - ローカルMCPとリモートMCPを使い分けたい人
  - Notion/GitHub/Slackを業務フローに組み込みたい人
- 想定文字数: 5,800〜8,000字

## 2. 検索意図
- MCPの概念より、接続と運用の具体手順を知りたい
- Claude DesktopとClaude Codeの設定差分を短時間で把握したい
- 公式MCPサーバーを用途別に選びたい
- Notion/GitHub/Slack連携を手順化して再現したい
- 自作サーバーの最小コードと、よくあるエラーの直し方を確認したい

## 3. 見出し構成（H2自己完結）
1. 要点まとめ（確認日: 2026-02-20）
2. MCPとは何か（応用編）: 構成要素を実装目線で再確認
3. Claude Desktop / Claude CodeにMCPサーバーを接続する手順
4. 公式MCPサーバー一覧と使い道（参照実装＋ベンダー公式）
5. Notion・GitHub・Slack連携を設定する（ステップバイステップ）
6. 自作MCPサーバーの作り方（Node.js / Python最小例）
7. よくあるエラーとトラブルシューティング
8. FAQ

## 4. 各H2に入れる要素
- H2-1（要点まとめ）
  - Desktop/Codeの設定差分
  - 公式サーバー選定の判断軸
  - 連携前に必須の権限設計
- H2-2（応用編）
  - Host / Client / Server / Tool / Resourceを実装側の責務で整理
  - `2024-11-05` と `2025-11-25` のバージョン関係
- H2-3（接続手順）
  - Claude Desktopの設定ファイルパス（macOS/Windows）
  - `mcpServers` JSONの基本形式
  - Claude Codeの `claude mcp add` / `add-json` / import
- H2-4（公式サーバー一覧）
  - filesystem / fetch / memory / github / gitlab / slack など用途別
  - 「参照実装」と「各社公式リモートMCP」の違い
- H2-5（Notion/GitHub/Slack）
  - 事前準備（API権限、OAuth）
  - 設定例（JSON/コマンド）
  - 接続確認の流れ
- H2-6（自作サーバー）
  - Node.js最小サーバー（tool 1つ）
  - Python最小サーバー（tool 1つ）
  - ローカル検証→段階的拡張の順序
- H2-7（トラブルシュート）
  - JSON構文エラー
  - コマンドパス不整合
  - OAuth失敗・403
  - タイムアウトと再試行

## 5. 内部リンク配置（最低3本）
- `/academy/blog/what-is-mcp`
- `/academy/blog/claude-code-intro`
- `/academy/blog/context-engineering-guide`
- `/academy/blog/ai-agent-build-guide`
- `/academy/blog/openai-responses-api-guide`

## 6. LINE CTA配置
- H2-3直後（接続手順を終えたタイミング）
- H2-5直後（実連携の中盤）
- FAQ末尾

### 統一文言
- タイトル:
  - `AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）`
- ボタン:
  - `LINEで週1AI通信を受け取る（無料）`

## 7. FAQ案（6問）
1. Claude DesktopのMCP設定ファイルはどこにありますか？
2. Claude CodeとClaude DesktopはどちらでMCPを使うべきですか？
3. 2024-11-05版MCP仕様は今も有効ですか？
4. Notion/GitHub/Slack連携で最初に確認すべき権限は何ですか？
5. 自作MCPサーバーはNode.jsとPythonのどちらが始めやすいですか？
6. MCP接続時に `server not found` や `spawn ENOENT` が出たときは？

## 8. 構成メモ
- 「概念」より「設定の再現性」に比重を置く
- 変動しやすい仕様は確認日を本文中に明記
- 公式情報とコミュニティ実声を分離して提示
- アカデミーCTAは3本柱で締め、特定ツール習得訴求をしない
