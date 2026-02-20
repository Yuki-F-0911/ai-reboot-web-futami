---
title: "記事リサーチ｜mcp-tool-integration-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-mcp-tool-integration-guide.md"
  - "app/academy/blog/mcp-tool-integration-guide/page.tsx"
  - "components/academyLanding/blog/mcp-tool-integration-guide/McpToolIntegrationGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "docs/article-draft-mcp-tool-integration-guide.md"
    - "app/academy/blog/mcp-tool-integration-guide/page.tsx"
    - "components/academyLanding/blog/mcp-tool-integration-guide/McpToolIntegrationGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: mcp-tool-integration-guide

## 0. 調査条件
- 対象テーマ: `MCP 使い方 実践`
- 主KW: `MCP 使い方 実践`
- サブKW:
  - `Model Context Protocol 設定`
  - `Claude MCP サーバー`
  - `AIツール連携 実践`
- ターゲット: 中級者・エンジニア（Claudeに外部ツールを接続して活用したい層）
- 確認日: `2026-02-20`
- 記事目的:
  - what-is-mcpの次の一歩として、概念説明を最小化し実装手順に集中する
  - Claude Desktop / Claude Codeでの接続差分を設定ファイル単位で整理する
  - Notion / GitHub / Slackの実接続手順と、詰まりやすいポイントを潰す
  - 自作MCPサーバーの最小実装（Node.js / Python）まで導線を作る

## 1. 一次情報（公式）ソース
1. [Connect local MCP servers (Anthropic Docs)](https://docs.anthropic.com/en/docs/claude-code/mcp)
   - `claude mcp add` の基本構文、`-s user/project/local` スコープ、`claude mcp add-json`、Claude Desktop設定のimport手順
2. [Configure MCP connectors (Anthropic Docs)](https://docs.anthropic.com/en/docs/claude-code/mcp-connectors)
   - リモートMCPサーバー接続とOAuth前提の公式ガイド
3. [MCP Quickstart for Claude Desktop (modelcontextprotocol.io)](https://modelcontextprotocol.io/quickstart/user)
   - Claude Desktop設定ファイルパス（macOS/Windows）と `mcpServers` JSON構造
4. [MCP Specification Versioning](https://modelcontextprotocol.io/specification/versioning)
   - 現行プロトコルバージョン（`2025-11-25`）の明記
5. [MCP Specification 2024-11-05](https://modelcontextprotocol.io/specification/2024-11-05)
   - 旧安定版として参照されるリビジョン本文
6. [MCP Reference Servers repository (modelcontextprotocol/servers)](https://github.com/modelcontextprotocol/servers)
   - 公式リファレンスサーバー群（filesystem/fetch/git/github/gitlab/google-drive/memory/...）とメンテナンス状況
7. [Notion MCP (Notion Developers)](https://developers.notion.com/docs/mcp)
   - `https://mcp.notion.com/mcp`、`Notion-Version` ヘッダー、インテグレーションCapabilities
8. [GitHub MCP server is now generally available (GitHub Changelog)](https://github.blog/changelog/2026-01-14-the-github-mcp-server-is-now-generally-available/)
   - GitHub公式MCPサーバーURL（`https://api.githubcopilot.com/mcp/`）とOAuthスコープ
9. [Slack MCP server setup (Slack Docs)](https://docs.slack.dev/ai/mcp-in-slack/)
   - Slack公式MCPサーバーURL（`https://mcp.slack.com`）と接続要件

## 2. コミュニティ実声（補助根拠）
1. [Claude MCP setup for beginners (DEV Community)](https://dev.to/johnorji0/getting-started-setting-up-mcp-in-claude-desktop-a-beginners-guide-35pg)
   - つまずき: JSON整形エラーと再起動漏れで接続できない報告
2. [Claude CodeにMCPサーバー接続（Zenn）](https://zenn.dev/masacento/articles/claude-code-how-to-use-mcp)
   - 肯定: `claude mcp add` で導入ハードルが下がったという実践報告
3. [Claude DesktopでMCP連携（note）](https://note.com/kumokookinawa/n/n332266118fd2)
   - 肯定: ローカル検証の立ち上がりが速いという利用メモ
4. [Researchers backdoor AI tool standards proposal (TechRadar)](https://www.techradar.com/pro/security/researchers-have-found-a-way-to-backdoor-claude-and-other-popular-ai-assistants)
   - 懸念: 権限設計とサーバー信頼性が不十分な場合のリスク指摘

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| Claude DesktopのMCP設定は `claude_desktop_config.json` の `mcpServers` で行う | MCP Quickstart（Claude Desktop設定） | Claude Code docsのDesktop import機能 | 採用 |
| macOSのClaude Desktop設定パスは `~/Library/Application Support/Claude/claude_desktop_config.json` | MCP Quickstart | コミュニティ導入報告（DEV/note） | 採用 |
| WindowsのClaude Desktop設定パスは `%APPDATA%\\Claude\\claude_desktop_config.json` | MCP Quickstart | コミュニティ導入報告（DEV） | 採用 |
| Claude Codeは `claude mcp add` / `add-json` でstdioサーバーを登録できる | Anthropic docs（mcp） | Anthropic docs（mcp-connectors） | 採用 |
| Claude CodeはDesktop設定を `claude mcp add-from-claude-desktop` で取り込める | Anthropic docs（mcp） | MCP Quickstart（Desktop設定構造） | 採用 |
| Notionの公式MCPエンドポイントは `https://mcp.notion.com/mcp` | Notion公式Docs | Anthropic docsのMCP connector例（Notion） | 採用 |
| GitHub公式MCPサーバーは `https://api.githubcopilot.com/mcp/` でGA済み | GitHub Changelog（2026-01-14） | GitHub Docs（MCP server setup） | 採用 |
| Slack公式MCPサーバーは `https://mcp.slack.com` | Slack Docs | Anthropic connector設定例（Slack OAuth） | 採用 |
| MCP仕様は2026-02-20時点で `2025-11-25` が現行、`2024-11-05` は旧リビジョン | MCP Versioning | MCP 2024-11-05仕様本文 | 採用 |
| 公式参照サーバー群はmodelcontextprotocol/serversで公開される | modelcontextprotocol/servers README | Anthropic docs（official/community servers案内） | 採用 |

## 4. 記事への反映方針
- 冒頭で「2026-02-20確認」の実務前提を明示し、古い情報混在を避ける
- what-is-mcpとの差分として「手を動かす設定」中心に構成する
- DesktopとCodeの違いは、設定ファイル形式・コマンド・認証フローを表で切り分ける
- Notion/GitHub/Slackは「前提権限」「設定JSON」「認証」「確認コマンド」の順に固定
- 公式サーバー一覧は「MCP Steering Group管理の参照実装」である点を明記し、導入可否は用途別で示す
- アカデミーCTAは3本柱のみで締め、特定ツール習得訴求を排除する

## 5. 変動情報・注意点
- MCP仕様は日付バージョンで更新されるため、`2024-11-05` 固定での解説は古くなる
- GitHub/Slack/NotionのリモートMCPはOAuth仕様や必要スコープが更新される可能性がある
- サードパーティMCPサーバーの品質差が大きく、検証環境での権限制限が必須
- 公式リファレンスサーバーの一部は運用ステータスが変更される可能性があるため、README更新日を確認する

## 6. 未確定・要確認メモ
- `[要確認: 「Anthropic公式MCPサーバー」の定義]`
  Anthropic docsでは「official/community servers」の案内が中心で、個別サーバー提供主体はMCP Steering Groupや各ベンダーが混在する。本文では「公式参照実装」「ベンダー公式提供」を分離して記述する。
- `[要確認: Claude Desktop Linux版の標準設定パス]`
  公式QuickstartはmacOS/Windowsを明示。Linux運用時は環境差分を注記する。
