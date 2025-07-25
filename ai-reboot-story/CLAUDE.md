# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

AI Reboot Story - AIリブート事業のストーリーテリングプロジェクト。「リブート・フューチャー」というSF物語を通じて、AI時代の働き方と生き方の変革を描く。

### プロジェクトの位置づけ
- AI Reboot Webサイト内のコンテンツプロジェクト
- 物語を通じた教育・マーケティングコンテンツの制作
- AIキャラクター「WiLL」を活用したインタラクティブなストーリーテリング

### 技術スタック（親プロジェクトと共通）
- **Framework**: Next.js 15.4.2 (App Router)
- **UI Library**: React 19.1.0
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 3.4.17
- **Animation**: Framer Motion 12.23.6

## 開発コマンド

```bash
# 開発サーバー起動 (親ディレクトリから実行)
cd .. && npm run dev

# ビルド (親ディレクトリから実行)
cd .. && npm run build

# リント (親ディレクトリから実行)
cd .. && npm run lint

# 型チェック (親ディレクトリから実行)
cd .. && npx tsc --noEmit
```

## プロジェクト構造

```
ai-reboot-story/
├── docs/
│   └── overview.md       # ライターズ・バイブル（物語設定・ガイドライン）
├── prompt/
│   └── narrathor.md      # AI物語作成エージェント「Narrathor」の設定
└── CLAUDE.md            # このファイル
```

## 重要なドキュメント

### 1. ライターズ・バイブル (`docs/overview.md`)
- 物語の世界観、キャラクター設定、プロット構造
- AIキャラクター「WiLL」の性格・行動原則
- ストーリーの核心テーマと教育的メッセージ
- 執筆ガイドラインと制約事項

### 2. Narrathorプロンプト (`prompt/narrathor.md`)
- AI物語作成エージェントの詳細設定
- キャラクター心理の深掘り手法
- 文体とトーンの指定
- インタラクティブ要素の実装方法

## 物語コンテンツ作成時の注意事項

### 基本原則
1. **WiLLの性格**: 答えではなく「問い」を通じて導く
2. **トーン**: 希望に満ちた未来志向の物語
3. **対象読者**: AI活用を始めたい個人・企業
4. **メッセージ**: 固定観念からの脱却と成長

### コンテンツ統合時の考慮事項
- 親プロジェクトのデザインシステムに準拠
- Tailwindのカスタムテーマ（will-*, gradient系）を活用
- Framer Motionでインタラクティブな演出を追加可能

### 文体ガイドライン
- 読みやすく親しみやすい日本語
- 専門用語は最小限に、必要時は説明を付与
- 感情に訴える描写と論理的な構成のバランス

## 親プロジェクトとの連携

### スタイリング
親プロジェクトのTailwind設定を継承:
- **カラー**: `will-primary`, `will-secondary`などのブランドカラー
- **グラデーション**: `will-gradient`, `aurora`などの特殊効果
- **アニメーション**: `thought-emerge`, `organic-float`などの演出

### コンポーネント利用
必要に応じて親プロジェクトのコンポーネントを活用:
- `components/ui/` - 汎用UIコンポーネント
- `components/effects/` - ビジュアルエフェクト

## 今後の開発方針

1. **インタラクティブ要素の実装**
   - ユーザーの選択によって分岐するストーリー
   - WiLLとの対話インターフェース

2. **ビジュアライゼーション**
   - 物語の場面をビジュアル化するコンポーネント
   - アニメーションを活用した没入感の演出

3. **コンテンツ管理**
   - 物語の章立て・エピソード管理システム
   - 多言語対応の検討

## 関連リソース

- 親プロジェクトのCLAUDE.md: `../CLAUDE.md`
- AIリブート事業概要: `../../input-docs/overview.md`
- プロジェクト設定: `../../project-config.yaml`