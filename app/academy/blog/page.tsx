import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "アカデミーブログ一覧 | AIリブート";
const pageDescription =
  "AIリブートアカデミーのブログ一覧です。生成AIの基礎知識、実務活用、資格・スキル、キャリア、法人向け導入ガイドまで43記事をカテゴリ別に掲載しています。";
const pageUrl = "https://ai-reboot.io/academy/blog";
const pageOgImagePath = "/academy/opengraph-image";

type BlogCategory = "AI基礎知識" | "実務活用" | "資格・スキル" | "キャリア・転職" | "法人向け";

type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  category: BlogCategory;
  thumbnail?: string;
};

const blogPosts: readonly BlogPost[] = [
  {
    slug: "what-is-generative-ai",
    title: "生成AIとは？初心者向けにわかりやすく解説",
    summary: "生成AIの定義、主要ツールの違い、最初の使い方を非技術者向けに整理した入門記事です。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/what-is-generative-ai/slide-1.png",
  },
  {
    slug: "what-is-ai-agent",
    title: "AIエージェントとは？定義・種類・作り方を解説",
    summary: "AIエージェントの基礎、従来AIとの違い、導入ステップと注意点を実務目線で整理した記事です。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/what-is-ai-agent/slide-1.png",
  },
  {
    slug: "ai-agent-build-guide",
    title: "AIエージェントの作り方｜仕組み・開発手順・活用パターンを解説",
    summary:
      "AIエージェントの基本構造、開発5ステップ、主要フレームワーク比較、ノーコード実装、実務の活用例と注意点までをまとめた実装ガイドです。",
    category: "実務活用",
    thumbnail: "/images/blog/ai-agent-build-guide/slide-01.png",
  },
  {
    slug: "dify-beginner-guide",
    title: "Difyの使い方完全ガイド｜ノーコードでAI業務ボットを最短で作る方法",
    summary:
      "Difyの定義・料金・インストール方法から、社内FAQボット作成の5ステップ、業種別5事例、失敗しない3つのポイントまでを解説。Difyスターターテンプレ（5ユースケース）配布中。",
    category: "実務活用",
    thumbnail: "/images/blog/dify-beginner-guide/slide-01.png",
  },
  {
    slug: "workflow-automation-comparison",
    title: "ワークフロー自動化ツール比較｜Make・Zapier・n8nを徹底比較【2026年版】",
    summary:
      "Make・Zapier・n8nを料金・機能・難易度・セキュリティの4軸で徹底比較。部門別おすすめ活用パターン5選と最初のフロー作成3ステップも解説。5業種対応スターターテンプレ配布中。",
    category: "実務活用",
    thumbnail: "/images/blog/workflow-automation-comparison/slide-01.png",
  },
  {
    slug: "claude-code-intro",
    title: "Claude Codeとは？使い方・料金・始め方を完全解説【2026年版】",
    summary:
      "AnthropicのCLI型AIコーディングアシスタント「Claude Code」の仕組み・料金・セットアップから、GitHub Copilot・Cursorとの違い、最初の5タスクと失敗しないポイントまでを解説。スターターキット配布中。",
    category: "実務活用",
    thumbnail: "/images/blog/claude-code-intro/slide-01.png",
  },
  {
    slug: "multimodal-ai-intro",
    title: "マルチモーダルAIとは？テキスト・画像・音声を横断する次世代AIを解説",
    summary: "マルチモーダルAIの定義、仕組み、代表モデル、業務活用と導入ステップを初心者向けに整理した入門記事です。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/multimodal-ai-intro/slide-01.png",
  },
  {
    slug: "how-to-learn-generative-ai",
    title: "社会人のための生成AI学習ロードマップ",
    summary: "0〜100日で実務活用まで到達するための学習フェーズと、つまずき回避のポイントを解説します。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/how-to-learn-generative-ai/slide-1.png",
  },
  {
    slug: "ai-for-non-engineers",
    title: "文系・非エンジニアのAI活用ガイド",
    summary: "AIが怖いと感じる理由を整理し、プログラミング不要で始める学習と実務活用の進め方を解説します。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/ai-for-non-engineers/slide-01.png",
  },
  {
    slug: "ai-coding-for-beginners",
    title: "AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方",
    summary:
      "AIコーディングの基本、代表ツール、非エンジニアができること、始め方5ステップとプロンプト例、注意点までを整理した入門ガイドです。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/ai-coding-for-beginners/slide-1.png",
  },
  {
    slug: "github-copilot-guide",
    title: "GitHub Copilotの使い方｜導入・設定・効率化のコツを初心者向けに解説",
    summary:
      "導入（VS Code等）から指示の出し方、レビュー・テストの流れ、チーム導入時の情報管理/運用ルールまでを手順化したガイドです。",
    category: "実務活用",
    thumbnail: "/images/blog/github-copilot-guide/slide-1.png",
  },
  {
    slug: "python-ai-intro",
    title: "Python×AI入門｜環境構築からはじめての機械学習までの学習ロードマップ",
    summary:
      "PythonでAI開発を始めるための環境構築、基礎文法、主要ライブラリ、最初の機械学習プロジェクト、0→3ヶ月の学習ロードマップを整理した入門記事です。",
    category: "AI基礎知識",
  },
  {
    slug: "prompt-template-for-work",
    title: "仕事で使えるプロンプトテンプレート集",
    summary: "メール・議事録・資料作成など、業務で再利用できる実践テンプレートをカテゴリ別にまとめました。",
    category: "実務活用",
    thumbnail: "/images/blog/prompt-template-for-work/slide-1.png",
  },
  {
    slug: "ai-presentation-workflow",
    title: "AIでプレゼン資料を効率的に作る方法",
    summary: "構成案作成からスライド原稿、デザイン、推敲まで、AIを使った資料作成ワークフローを段階別に解説します。",
    category: "実務活用",
    thumbnail: "/images/blog/ai-presentation-workflow/slide-1.png",
  },
  {
    slug: "ai-business-efficiency-cases",
    title: "AI業務効率化事例集",
    summary: "営業・マーケ・管理部門の一般的な活用傾向と、導入前に押さえる設計ポイントや失敗対策を整理した記事です。",
    category: "実務活用",
  },
  {
    slug: "what-is-rag",
    title: "RAG（検索拡張生成）とは？仕組み・メリット・活用事例をわかりやすく解説",
    summary:
      "RAG（Retrieval-Augmented Generation）の定義、仕組み、メリットと限界、活用事例、始め方、ファインチューニングとの違いを整理した入門記事です。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/what-is-rag/slide-1.png",
  },
  {
    slug: "rag-use-cases",
    title: "RAG（検索拡張生成）の活用事例8選｜業種・業務別に解説",
    summary: "RAGの実務ユースケース8選と、導入ステップ・注意点を要点から整理した記事です。",
    category: "実務活用",
  },
  {
    slug: "ai-data-analysis-excel",
    title: "AIでExcelデータ分析を効率化する方法",
    summary: "関数生成、データ整理、可視化、レポート作成まで、ChatGPT/Claude/Copilotでの実践手順とプロンプト例をまとめます。",
    category: "実務活用",
  },
  {
    slug: "dx-reskilling-subsidy-guide",
    title: "DXリスキリング助成金ガイド｜対象条件・申請手順・併用可否を解説",
    summary: "DXリスキリング助成金の概要、個人向け補助金との違い、申請の流れと実務上の注意点を整理した記事です。",
    category: "実務活用",
    thumbnail: "/images/blog/dx-reskilling-subsidy-guide/slide-1.png",
  },
  {
    slug: "ai-certification-guide",
    title: "AI資格おすすめ一覧｜難易度・費用を比較",
    summary: "G検定やE検定を含む主要資格を、目的・難易度・費用で比較して選び方を整理します。",
    category: "資格・スキル",
  },
  {
    slug: "generative-ai-passport-guide",
    title: "生成AIパスポート試験の合格法2026｜勉強時間・おすすめ教材・出題傾向まとめ",
    summary:
      "生成AIパスポートの難易度・勉強時間・教材・出題傾向を整理し、独学で合格を目指すための実践的な学習プランを解説します。",
    category: "資格・スキル",
    thumbnail: "/images/blog/generative-ai-passport-guide/slide-01.png",
  },
  {
    slug: "g-e-certification-comparison",
    title: "G検定とE検定の違いを徹底比較｜難易度・費用・向いている人",
    summary: "G検定とE検定（JDLA認定）の違いを比較表で整理し、目的別にどちらを選ぶべきかを解説します。",
    category: "資格・スキル",
  },
  {
    slug: "ai-course-ranking",
    title: "AI講座ランキング2026｜選び方の基準と目的別おすすめ",
    summary: "AI講座を比較する評価基準、目的別の選び方、失敗回避のポイントを整理したガイド記事です。",
    category: "資格・スキル",
    thumbnail: "/images/blog/ai-course-ranking/slide-1.png",
  },
  {
    slug: "skills-for-ai-era-career",
    title: "AI時代に必要なスキルを職種別に解説",
    summary: "営業、マーケ、管理職など職種ごとに、AI時代のキャリアに必要なスキルを整理した記事です。",
    category: "資格・スキル",
    thumbnail: "/images/blog/skills-for-ai-era-career/slide-01.png",
  },
  {
    slug: "ai-career-change-cases",
    title: "AI時代のキャリアチェンジ事例集",
    summary: "職種転換の進め方をBefore/Afterの観点で整理し、学習と実務接続の共通ポイントを紹介します。",
    category: "キャリア・転職",
  },
  {
    slug: "ai-engineer-career-change",
    title: "未経験からAIエンジニアへの転職ロードマップ",
    summary: "未経験からAIエンジニアを目指すために必要なスキル、学習段階、ポートフォリオ設計を解説した記事です。",
    category: "キャリア・転職",
  },
  {
    slug: "corporate-ai-adoption-guide",
    title: "中小企業の生成AI導入ガイド",
    summary: "導入ロードマップ、費用目安、部門別活用例を法人担当者向けに段階的に解説します。",
    category: "法人向け",
  },
  {
    slug: "ai-poc-guide",
    title: "生成AI PoCの進め方（30日テンプレ）｜成功条件と失敗パターンを先に潰す",
    summary: "30日でPoCを完了するテンプレートと失敗パターン対策。PoC計画書テンプレート付き。",
    category: "法人向け",
  },
  {
    slug: "ai-training-curriculum",
    title: "AI研修カリキュラム例（職種別）｜社内定着まで見据えた設計",
    summary: "職種別AI研修カリキュラムの設計方法。研修企画書テンプレート付き。",
    category: "法人向け",
  },
  {
    slug: "ai-agent-deployment-checklist",
    title: "AIエージェント導入チェックリスト｜権限・ログ・承認フローの作り方",
    summary: "AIエージェントの安全な導入に必要な権限・ログ・承認フローの設計チェックリスト。",
    category: "法人向け",
  },
  {
    slug: "ai-agent-operations-guide",
    title: "AI業務自動化の始め方｜AIエージェント導入を失敗させない運用設計ガイド",
    summary:
      "AI業務自動化を業務選定、権限設計、承認フロー、監査ログまで実務手順で解説。導入前チェックシートと30日運用プラン付き。",
    category: "法人向け",
  },
  {
    slug: "what-is-mcp",
    title: "MCP（Model Context Protocol）とは？できることと危険な落とし穴",
    summary: "MCPの仕組みとセキュリティリスクをわかりやすく解説。安全な連携チェックポイント付き。",
    category: "法人向け",
  },
  {
    slug: "ai-guideline-template",
    title: "生成AIの社内ガイドライン雛形｜禁止事項・権限・ログまで1枚で設計",
    summary:
      "生成AI（ChatGPT・Claude・Copilot等）の社内利用ガイドラインをコピペ可能な1枚雛形で設計。禁止事項・入力ルール・権限・ログ・例外申請・インシデント対応まで30日導入ステップ付き。",
    category: "法人向け",
  },
  {
    slug: "ai-adoption-cost-roi",
    title: "生成AI導入の費用相場とROIの考え方｜PoC予算の決め方まで",
    summary: "生成AI導入にかかる費用の相場とROI算出方法。PoC予算の決め方とROI試算シート付き。",
    category: "法人向け",
  },
  {
    slug: "llm-evaluation-guide",
    title: "生成AIの評価（LLM評価）入門｜“任せていい品質”を測る指標と運用",
    summary: "LLM評価を品質・安全性・運用性の3軸で設計する実務ガイド。週次運用できる評価シート付き。",
    category: "法人向け",
  },
  {
    slug: "shadow-ai-countermeasures",
    title: "シャドーAI対策の進め方｜\"禁止\"せず安全に使わせる統制設計",
    summary:
      "社員の無断AI利用を禁止ではなく統制で解決する方法。発見・可視化・ルール設計・監査の4段階フレームワーク。",
    category: "法人向け",
  },
  {
    slug: "ai-copyright-commercial-guide",
    title: "生成AIの著作権・商用利用ガイド（画像/動画/文章）｜現場で迷う論点を整理",
    summary: "AI生成物の著作権と商用利用の論点を網羅整理。権利チェックリスト付き。",
    category: "法人向け",
  },
  {
    slug: "corporate-ai-training",
    title: "法人向けAI研修で成果を出す完全ガイド",
    summary: "研修形式の選び方、KPI設計、社内定着の進め方を比較観点付きで整理した法人向け記事です。",
    category: "法人向け",
  },
  {
    slug: "reskilling-over-40",
    title: "40代・50代からのAIリスキリング完全ガイド",
    summary:
      "40代・50代がAIを学ぶ理由、年代別の学習アプローチ、独学の挫折対策と学習手段の比較を整理した記事です。",
    category: "キャリア・転職",
  },
  {
    slug: "education-training-benefit-ai",
    title: "教育訓練給付金でAI講座を受講するガイド",
    summary:
      "教育訓練給付金の3種の概要、リスキリング補助金との違い、AI講座の費用相場とコスパの良い選び方を整理した記事です。",
    category: "実務活用",
  },
  {
    slug: "ai-school-for-working-adults",
    title: "社会人向けAIスクールの選び方ガイド",
    summary:
      "社会人がAIスクールを選ぶ際の5つの基準、オンラインvs通学の比較、目的別の選び方と補助金活用法を整理した記事です。",
    category: "資格・スキル",
  },
  {
    slug: "chatgpt-claude-beginners-guide",
    title: "ChatGPT・Claude初心者ガイド｜最初の1週間でできること",
    summary:
      "アカウント作成から最初の質問まで、無料プランと有料プランの違い、1週間で試すべき使い方を整理した入門記事です。",
    category: "AI基礎知識",
  },
  {
    slug: "chatgpt-start-guide-smartphone",
    title: "ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド",
    summary:
      "公式アプリの入れ方、アカウント作成・ログイン、初期設定、便利機能、無料/有料の違いまでをiPhone/Android別に整理したスマホ入門ガイドです。",
    category: "AI基礎知識",
  },
  {
    slug: "gpt-vs-claude-comparison",
    title: "GPT-4とClaude徹底比較｜性能・得意分野・料金の違いを解説【2026年版】",
    summary:
      "GPT-4系とClaudeの違いを性能比較（文章/コード/分析/要約/創造性）で整理し、料金の考え方と用途別おすすめ、併用のコツまでまとめた比較記事です。",
    category: "AI基礎知識",
  },
  {
    slug: "corporate-ai-training-internal",
    title: "社内AI研修の始め方と定着の進め方",
    summary:
      "社内AI研修の設計ステップ、外部研修との比較、定着施策と効果測定の進め方を整理した法人向け記事です。",
    category: "法人向け",
  },
  {
    slug: "ai-training-kpi",
    title: "研修が\"やりっぱなし\"で終わる理由｜KPI設計と現場タスク化のコツ",
    summary: "AI研修が定着しない原因とKPI設計方法。KPIシートテンプレート付き。",
    category: "法人向け",
  },
  {
    slug: "ai-data-leak-patterns",
    title: "生成AIで情報漏えいが起きるパターン10選｜現場のNG例とルール",
    summary: "ChatGPT・Claude等で情報漏えいが起きる10パターンを現場のNG例で解説。入力ルールと防止策を整理。",
    category: "法人向け",
  },
  {
    slug: "ai-hr-recruiting",
    title: "AI × 人事・採用｜業務効率化から戦略的活用までの実践ガイド",
    summary:
      "採用・人事領域でのAI活用（求人票作成〜候補者対応、評価分析など）と導入ステップ、注意点、プロンプト例をまとめた実践ガイドです。",
    category: "法人向け",
  },
  {
    slug: "ai-side-business-guide",
    title: "副業でAIを活用する始め方ガイド",
    summary: "AIスキルで始められる副業の種類、学習ステップ、必要なスキルレベルと注意点を整理した記事です。",
    category: "キャリア・転職",
  },
  {
    slug: "ai-portfolio-guide",
    title: "AIスキルのポートフォリオ作り方2026｜転職・副業・社内評価につながる実績のまとめ方",
    summary:
      "AIポートフォリオの成果物の種類、転職・副業・社内評価のシーン別の見せ方、GitHubやNotionでの公開方法を5ステップで整理した記事です。",
    category: "キャリア・転職",
  },
  {
    slug: "gemini-beginners-guide",
    title: "Google Gemini完全入門ガイド｜使い方・ChatGPTとの違い・無料で始める方法",
    summary:
      "Google Geminiの基本操作、ChatGPT・Claudeとの違い、無料プランの始め方、業務活用パターンを整理した入門記事です。",
    category: "AI基礎知識",
  },
  {
    slug: "notebooklm-guide",
    title: "NotebookLMの使い方完全ガイド｜AIで情報整理・学習を効率化する方法",
    summary:
      "ソース取り込み→要約・質問の基本操作から、リサーチ/報告書整理/学習ノートへの活用、Audio Overviewの使い方までを整理した入門ガイドです。",
    category: "実務活用",
  },
  {
    slug: "perplexity-ai-guide",
    title: "Perplexity AIの使い方完全ガイド2026｜ChatGPTとの違いと検索AIの活用法",
    summary:
      "Google検索との違いを起点に、Perplexityの基本、無料/有料の使い分け、ChatGPTとの比較、調査・比較・要約で使える実践プロンプトをまとめた解説記事です。",
    category: "実務活用",
  },
  {
    slug: "ai-image-generation-guide",
    title: "AI画像生成おすすめツール比較｜Nano Banana・Midjourney・DALL-Eの使い方と選び方",
    summary:
      "Gemini Nano Banana、Midjourney、DALL-E、Stable Diffusionの特徴比較、始め方、業務活用パターン、著作権の注意点を整理した記事です。",
    category: "実務活用",
  },
  {
    slug: "ai-video-tool-comparison",
    title: "AI動画生成ツールおすすめ比較｜用途別の選び方と始め方",
    summary:
      "Sora/Runway/Pika/Kling/Veo/Luma Dream Machineの比較、用途別おすすめ、無料で試す始め方、著作権・商用利用の注意点を整理した記事です。",
    category: "実務活用",
  },
  {
    slug: "new-employee-ai-starter-guide",
    title: "新入社員のAI活用スタートガイド2026｜最初の1ヶ月でやること完全版",
    summary:
      "職場でのAI活用マナー・情報管理ルール・週別スケジュールを完全解説。機密情報の扱い方からプロンプト習慣化まで、入社後の最初の1ヶ月でやることをステップ別にまとめた新入社員向けガイドです。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/new-employee-ai-starter-guide/slide-01.png",
  },
  {
    slug: "ai-meeting-tools-comparison",
    title: "AI議事録ツール比較2026｜Fireflies・Otter・Notion AIの選び方と会議効率化",
    summary:
      "Fireflies.ai・Otter.ai・Notion AI・tl;dv・Nottaを日本語精度・Zoom/Teams/Meet対応・料金・要約品質の4軸で比較。シーン別おすすめと導入後のワークフロー設計を解説します。",
    category: "実務活用",
    thumbnail: "/images/blog/ai-meeting-tools-comparison/slide-01.png",
  },
] as const;

const categoryClassName: Record<BlogCategory, string> = {
  "AI基礎知識": "border border-harmony-light bg-harmony-lighter text-harmony",
  実務活用: "border border-orange-200 bg-orange-50 text-orange-700",
  "資格・スキル": "border border-wisdom-light bg-wisdom-lighter text-wisdom",
  "キャリア・転職": "border border-amber-200 bg-amber-50 text-amber-700",
  法人向け: "border border-will-primary/20 bg-will-lighter text-will-primary",
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: pageOgImagePath,
        width: 1200,
        height: 630,
        alt: "AIリブートアカデミー ブログ一覧",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageOgImagePath],
  },
};

export default function AcademyBlogPage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://ai-reboot.io" },
          { name: "アカデミー", url: "https://ai-reboot.io/academy" },
          { name: "ブログ", url: pageUrl },
        ]}
      />

      <main className="bg-slate-50 pb-20 pt-24 sm:pt-28">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AcademyBreadcrumb
            className="mb-6"
            items={[
              { label: "ホーム", href: "/" },
              { label: "アカデミー", href: "/academy" },
              { label: "ブログ" },
            ]}
          />

          <header className="rounded-2xl border border-will-primary/15 bg-gradient-to-br from-white via-will-lighter to-wisdom-lighter p-6 shadow-subtle sm:p-8">
            <p className="text-sm font-semibold tracking-wide text-will-primary">ACADEMY BLOG</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              アカデミーブログ一覧
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
              生成AIの基礎知識から、実務活用、資格・スキル、キャリア、法人向け導入まで、目的別に記事を探せます。
            </p>
          </header>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-subtle transition-all duration-300 hover:-translate-y-0.5 hover:border-will-primary/25 hover:shadow-soft"
              >
                {post.thumbnail && (
                  <Link href={`/academy/blog/${post.slug}`}>
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                )}
                <div className="p-6">
                  <p
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${categoryClassName[post.category]}`}
                  >
                    {post.category}
                  </p>
                  <h2 className="mt-4 text-xl font-bold leading-tight text-slate-900">{post.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{post.summary}</p>
                  <Link
                    href={`/academy/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center text-sm font-semibold text-will-primary transition-colors group-hover:text-growth"
                  >
                    記事を読む
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
