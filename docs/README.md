# AIリブートWebサイト ドキュメント

このディレクトリには、AIリブートWebサイトプロジェクトの全ドキュメントが整理されています。

## 📁 ディレクトリ構造

```
docs/
├── README.md                    # このファイル
├── 01-project/                  # プロジェクト管理
│   ├── overview.md             # プロジェクト概要
│   ├── sitemap.md              # サイトマップ
│   └── requirements.md         # 要件定義
│
├── 02-design/                   # デザイン関連
│   ├── brand-guidelines.md     # ブランドガイドライン
│   ├── design-system.md        # デザインシステム
│   ├── ui-components.md        # UIコンポーネント仕様
│   └── improvements/           # 改善提案
│       └── design-improvement-proposal.md
│
├── 03-content/                  # コンテンツ
│   ├── pages/                  # ページ別コンテンツ
│   │   ├── home.md            # トップページ
│   │   ├── academy.md         # アカデミーページ
│   │   ├── corporate.md       # 法人向けページ
│   │   └── instructors.md     # 講師紹介ページ
│   ├── messaging/              # メッセージング
│   │   └── core-message.md    # コアメッセージ
│   └── raw/                    # 原稿・素材
│       └── wellbeing.md       # ウェルビーイング関連
│
├── 04-development/              # 開発ドキュメント
│   ├── architecture.md         # アーキテクチャ
│   ├── api-docs.md            # API仕様
│   └── deployment.md          # デプロイメント
│
├── 05-operations/               # 運用ドキュメント
│   ├── maintenance.md          # メンテナンス手順
│   └── analytics.md           # アナリティクス
│
├── 06-archives/                 # アーカイブ（古いバージョン）
│   ├── drafts/                 # 下書き
│   └── legacy/                 # レガシードキュメント
│
└── 07-assets/                   # アセット
    ├── images/                 # 画像素材
    └── presentations/          # プレゼンテーション資料
```

## 📖 ドキュメント一覧

### プロジェクト管理
- [プロジェクト概要](01-project/overview.md)
- [サイトマップ](01-project/sitemap.md)

### デザイン
- [ブランドガイドライン](02-design/brand-guidelines.md)
- [デザイン改善提案](02-design/improvements/design-improvement-proposal.md)

### コンテンツ
- [トップページ](03-content/pages/home.md)
- [アカデミーページ](03-content/pages/academy.md)
- [法人向けページ](03-content/pages/corporate.md)

## 🚀 クイックリンク

- [CLAUDE.md](/CLAUDE.md) - Claude Code向けガイドライン
- [README.md](/README.md) - プロジェクトREADME

## 📝 ドキュメント更新ルール

1. 新しいドキュメントは適切なカテゴリフォルダに配置
2. ファイル名は英語のkebab-caseを使用
3. 各ドキュメントにはメタ情報（作成日、更新日、作成者）を記載
4. 大きな変更時はarchivesフォルダに旧バージョンを保存