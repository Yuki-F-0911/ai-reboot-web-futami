"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "Bolt.new 使い方",
  "Bolt.new 入門",
  "AIでWebサイト作成",
  "ノーコード AI",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-bolt", label: "Bolt.newとは？" },
  { id: "tool-comparison", label: "他ツールとの違い（比較表）" },
  { id: "hands-on", label: "実際に作ってみよう（ハンズオン）" },
  { id: "prompt-tips", label: "プロンプトのコツ" },
  { id: "use-cases", label: "活用事例5選" },
  { id: "pricing", label: "料金プランと無料枠" },
  { id: "troubleshooting", label: "初心者がつまずきやすいポイント" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

/* ---------- データ定数 ---------- */

const boltFeatures = [
  {
    title: "ブラウザだけで完結",
    desc: "StackBlitz独自のWebContainers技術により、Node.jsがブラウザ内で動作します。パソコンへのインストールや環境構築は一切不要。ブラウザを開いてURLにアクセスするだけで開発環境が整います。",
    emoji: "🌐",
  },
  {
    title: "AIに話しかけるだけでコード生成",
    desc: "チャット欄に「こんなサイトを作りたい」と日本語で入力するだけで、AIがHTML・CSS・JavaScriptのコードを自動生成。プログラミング言語を覚える必要はありません。",
    emoji: "💬",
  },
  {
    title: "リアルタイムプレビュー",
    desc: "コードが生成されると同時に、画面右側にサイトの完成形がリアルタイムで表示されます。「思っていたのと違う」と思ったら、その場でAIに修正を依頼できます。",
    emoji: "👁️",
  },
  {
    title: "ワンクリックで公開",
    desc: "作ったサイトはBolt Hostingで即座にインターネット上に公開できます。ドメイン取得やサーバー設定といった面倒な作業は不要です。",
    emoji: "🚀",
  },
  {
    title: "複数フレームワーク対応",
    desc: "React、Next.js、Vue、Svelte、Astroなど主要なWebフレームワークに対応。初心者は意識する必要はありませんが、技術に詳しい方は好みの技術スタックを指定できます。",
    emoji: "🔧",
  },
] as const;

const toolComparison = [
  {
    tool: "Bolt.new",
    maker: "StackBlitz",
    target: "非エンジニア〜初心者",
    strength: "ブラウザ完結、最速でMVP完成、多フレームワーク対応",
    weakness: "大規模プロジェクトはトークン消費大",
    free: "月100万トークン",
    price: "$25〜/月",
  },
  {
    tool: "v0",
    maker: "Vercel",
    target: "デザイナー〜開発者",
    strength: "UIの品質が最高、Next.js特化で本番レベル",
    weakness: "Next.js以外不可、コード知識があると有利",
    free: "月200クレジット",
    price: "$20〜/月",
  },
  {
    tool: "Lovable",
    maker: "Lovable（旧GPT Engineer）",
    target: "非技術者・起業家",
    strength: "React出力コードが美しい、Supabase連携が簡単",
    weakness: "フレームワーク選択肢が少ない",
    free: "月5クレジット",
    price: "$20〜/月",
  },
  {
    tool: "Replit Agent",
    maker: "Replit",
    target: "幅広い開発者",
    strength: "Python等も対応、自律的にDB構築まで完結",
    weakness: "Web UIに特化していない",
    free: "制限付き無料",
    price: "$25〜/月",
  },
] as const;

const handsonSteps = [
  {
    step: 1,
    title: "bolt.newにアクセス",
    desc: "ブラウザで bolt.new を開きます。Chrome（またはChromium系ブラウザ）の最新版が推奨です。FirefoxやSafariはベータ対応のため、Chrome系が安定します。",
  },
  {
    step: 2,
    title: "アカウントを作成",
    desc: "画面右上の「Sign Up」をクリック。Googleアカウントで1クリック登録できます。メールアドレスでの登録も可能です。登録が完了すると、月100万トークン（約3〜5回のプロジェクト作成分）の無料枠がもらえます。",
  },
  {
    step: 3,
    title: "プロンプトを入力",
    desc: "画面中央のチャット欄に、作りたいサイトの説明を入力します。日本語でOKです。最初は「シンプルな自己紹介ポートフォリオサイトを作って」くらいのシンプルな依頼から始めましょう。",
  },
  {
    step: 4,
    title: "AIがコードを自動生成",
    desc: "送信ボタンを押すと、AIがコードを書き始めます。画面左側にファイルツリーとコードエディタ、右側にリアルタイムプレビューが表示されます。通常1〜2分で完成形が見えます。",
  },
  {
    step: 5,
    title: "チャットで修正を依頼",
    desc: "プレビューを見て「ヘッダーの色を青に変えて」「問い合わせフォームを追加して」など、日本語で追加の指示を出します。何度でもやり取りできます。",
  },
  {
    step: 6,
    title: "完成したらデプロイ（公開）",
    desc: "「Deploy」ボタンをクリックするだけで、作成したサイトがインターネット上に公開されます。自動でURLが発行され、誰でもアクセスできるようになります。",
  },
] as const;

const promptExamples = [
  {
    level: "初級",
    label: "bg-emerald-100 text-emerald-700",
    title: "シンプルなポートフォリオサイト",
    prompt:
      "フリーランスのWebデザイナー用のポートフォリオサイトを作ってください。\n・ヘッダーに名前とナビゲーション\n・自己紹介セクション\n・実績を3つカード形式で表示\n・問い合わせフォーム\n・フッター\nカラーはネイビーと白を基調に、モダンでクリーンなデザインにしてください。",
    tip: "「誰のため」「何を載せるか」「デザインの雰囲気」の3点を伝えるのがコツ。最初から完璧を目指さず、ざっくり依頼して後から修正するのが効率的です。",
  },
  {
    level: "中級",
    label: "bg-blue-100 text-blue-700",
    title: "カフェのLP（ランディングページ）",
    prompt:
      "東京・渋谷にあるカフェのランディングページを作ってください。\n・ファーストビューに大きな写真エリアとキャッチコピー「一杯のコーヒーが、あなたの1日を変える」\n・メニューセクション（コーヒー、スイーツ、フードを3列で）\n・店舗情報（住所、営業時間、アクセス）\n・Google Maps埋め込みエリア（プレースホルダーでOK）\n・Instagram風の写真ギャラリー\nカラーはブラウンとクリームの温かみのある配色で。日本語フォントを使って。",
    tip: "セクションを箇条書きで列挙すると、AIが構造を正確に把握できます。写真は後から差し替えられるので、まずはプレースホルダーで構成を固めましょう。",
  },
  {
    level: "上級",
    label: "bg-purple-100 text-purple-700",
    title: "タスク管理ツール（フル機能）",
    prompt:
      "個人用のタスク管理Webアプリを作ってください。\n【機能要件】\n・タスクの追加・編集・削除\n・ステータス管理（未着手 / 進行中 / 完了）をドラッグ&ドロップで変更\n・期限の設定とカレンダー表示\n・優先度（高/中/低）のラベル付け\n・タスクの検索・フィルタリング\n【技術要件】\n・Reactで構築\n・ローカルストレージでデータを保存\n・レスポンシブ対応\n・ダークモード切り替え\nデザインはNotion風のミニマルなUIにしてください。",
    tip: "複雑なアプリは「機能要件」と「技術要件」を分けて記述すると精度が上がります。一度に全部盛り込むよりも、まずコア機能で作って段階的に追加するのがトークン節約のコツ。",
  },
] as const;

const useCases = [
  {
    title: "ポートフォリオサイト",
    desc: "フリーランスや就活生の自己紹介・実績紹介サイト。テキストと構成を伝えるだけで、プロ品質のポートフォリオが30分で完成します。",
    time: "約30分",
    difficulty: "★☆☆",
    emoji: "👤",
  },
  {
    title: "LP（ランディングページ）",
    desc: "小規模ビジネスの集客ページや、イベント告知ページ。ファーストビュー・特徴・料金・CTAの基本構成を指定するだけで本格的なLPに。",
    time: "約1時間",
    difficulty: "★☆☆",
    emoji: "📄",
  },
  {
    title: "ブログ・メディアサイト",
    desc: "記事一覧・カテゴリ分け・サイドバー付きのブログサイト。Markdownで記事を管理する仕組みまで一括で生成可能です。",
    time: "約1〜2時間",
    difficulty: "★★☆",
    emoji: "📝",
  },
  {
    title: "ECサイトモック（プロトタイプ）",
    desc: "投資家向けプレゼンやクライアント提案用のECサイトモック。商品一覧・カート・決済画面のUIを素早く形にできます（実際の決済連携は別途開発が必要）。",
    time: "約2〜3時間",
    difficulty: "★★☆",
    emoji: "🛒",
  },
  {
    title: "社内ツール・管理画面",
    desc: "タスク管理、顧客リスト、在庫管理などの社内向けツール。ローカルストレージやSupabase連携でデータの保存も可能です。",
    time: "約2〜4時間",
    difficulty: "★★★",
    emoji: "🏢",
  },
] as const;

const pricingPlans = [
  {
    plan: "Free（無料）",
    price: "0円",
    tokens: "月100万トークン（1日30万上限）",
    features: [
      "パブリック/プライベートプロジェクト",
      "10MBファイルアップロード",
      "Webサイトホスティング",
      "データベース（無制限）",
    ],
    limit: "サイトにBoltブランドロゴ表示、トークン繰り越し不可",
    best: "AIでWeb制作を試してみたい人。月に3〜5プロジェクト程度",
    highlight: false,
  },
  {
    plan: "Pro（月$25）",
    price: "約3,750円/月",
    tokens: "月1,000万トークン〜（日次上限なし）",
    features: [
      "Boltブランドロゴなし",
      "100MBファイルアップロード",
      "カスタムドメイン対応",
      "SEO最適化",
      "AI画像編集",
      "トークン繰り越し（最大2ヶ月）",
    ],
    limit: "年払いで月$20に割引",
    best: "本格的にWeb制作をAIで行いたい人",
    highlight: true,
  },
  {
    plan: "Teams（月$30/人）",
    price: "約4,500円/人/月",
    tokens: "1人あたり月1,000万トークン",
    features: [
      "Proの全機能",
      "チーム管理・請求の一元化",
      "デザインシステム共有",
      "プライベートNPMレジストリ",
    ],
    limit: "トークンはチーム内で共有不可（個人割当）",
    best: "チームでAI Web制作を導入する企業",
    highlight: false,
  },
] as const;

const troubleshootingItems = [
  {
    problem: "生成されたサイトが真っ白（ブランクスクリーン）",
    cause: "ビルドエラーや依存パッケージの不整合が原因のことがほとんどです。",
    solution:
      "チャット欄に「画面が真っ白です。ターミナルのエラーを確認して修正してください」と送信しましょう。AIがエラーログを解析して自動修正してくれます。それでも直らない場合は、チャット履歴で正常に動作していた段階まで「Rollback」するのが確実です。",
  },
  {
    problem: "トークンがすぐに無くなる",
    cause: "大きなプロジェクトほど、1回のやり取りで消費するトークンが増えます。AIはプロジェクト全体のコードを毎回読み込むため、ファイルが増えるほど消費量が上がります。",
    solution:
      "「Lock」機能で変更不要なファイルをロック、「Target」機能で修正対象のファイルだけを指定しましょう。また、小さな修正を複数回に分けるよりも、まとめて1つのプロンプトで依頼する方がトークン効率が良い場合もあります。",
  },
  {
    problem: "AIの修正がどんどん壊れていく（修正ループ）",
    cause: "バグを直そうとして別のバグが発生し、そのバグを直そうとしてさらに壊れる——という悪循環です。",
    solution:
      "「Rollback」で正常に動いていた状態に戻り、問題の箇所だけを具体的に指示しましょう。「Attempt Fix」ボタンの連打は避け、問題を整理してからプロンプトを書くのがコツです。",
  },
  {
    problem: "日本語のフォントやレイアウトが崩れる",
    cause: "AIが生成するデフォルトのフォント設定が英語向けの場合があります。",
    solution:
      "「フォントはNoto Sans JPを使ってください。日本語テキストが正しく表示されるようにしてください」と指示を追加しましょう。最初のプロンプトに含めておくのがベストです。",
  },
  {
    problem: "デプロイ後に動かない部分がある",
    cause: "プレビュー環境とデプロイ環境で、環境変数やAPI接続設定が異なることが原因です。",
    solution:
      "デプロイ前に、環境変数が正しく設定されているかチャットで確認しましょう。「デプロイ前のチェックリストを教えて」とAIに聞くのも有効です。",
  },
] as const;

const uiParts = [
  { name: "チャットパネル", desc: "左〜中央に表示。ここにプロンプトを入力してAIと対話します。", emoji: "💬" },
  { name: "ファイルツリー", desc: "左サイドバー。生成されたファイルとフォルダが一覧表示されます。右クリックでLock/Target設定が可能。", emoji: "📁" },
  { name: "コードエディタ", desc: "中央エリア。VS Codeのような構文ハイライト付きエディタ。手動でのコード編集も可能です。", emoji: "📝" },
  { name: "プレビューパネル", desc: "右側に表示。作成中のサイトがリアルタイムで動的にプレビューされます。", emoji: "👁️" },
  { name: "ターミナル", desc: "画面下部。ビルド出力やエラーログが表示されます。問題解決のヒントがここに出ます。", emoji: "⚡" },
  { name: "デプロイボタン", desc: "画面上部。ワンクリックでBolt HostingまたはNetlifyに公開できます。", emoji: "🚀" },
] as const;

export default function BoltNewBeginnersGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-[#f8f8f7] pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        {/* パンくず */}
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Bolt.new完全入門ガイド" },
          ]}
        />

        {/* ヘッダー */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="Bolt.new完全入門ガイド｜AIでWebサイトを一瞬で作る方法【2026年最新版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1
            className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            Bolt.new完全入門ガイド
          </h1>
          <p className="mt-2 text-lg text-gray-600" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            AIでWebサイトを一瞬で作る方法【2026年最新版】
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>

          <p className="mt-6 text-base leading-8 text-gray-700">
            「Webサイトを作りたいけど、プログラミングなんて自分には無理」——そう思っていませんか？
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            2026年の今、<strong>AIに日本語で話しかけるだけで、本格的なWebサイトが完成する時代</strong>が来ています。そのための最も手軽なツールが「Bolt.new（ボルト・ニュー）」です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            Bolt.newは、StackBlitz社が開発したAI Web開発ツール。2024年10月のリリースからわずか2ヶ月で年間売上2,000万ドル（約30億円）を突破し、世界中で月間900万人以上が利用しています。プログラミング経験ゼロの方でも、ブラウザを開いてAIに指示を出すだけで、ポートフォリオ、ランディングページ、さらには業務ツールまで作れてしまうのです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事では、Bolt.newの始め方をステップバイステップで解説し、プロンプト（指示文）の書き方のコツ、料金プラン、つまずきやすいポイントまで、初心者が知りたいことをすべてまとめました。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/vibe-coding-beginner-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            Vibe Coding入門ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-coding-for-beginners" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIコーディング入門
          </Link>
          ・
          <Link href="/academy/blog/cursor-ai-coding-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            Cursor AIコーディングガイド
          </Link>
          もあわせて読むと、AI開発ツールの全体像がつかめます。
        </p>

        <ArticleTOC items={tocItems} />

        {/* ===== 要点まとめ ===== */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ（結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              Bolt.newはブラウザだけで完結するAI Web開発ツール。プログラミング経験ゼロでもWebサイトが作れる
            </li>
            <li className="pl-1 marker:text-gray-500">
              無料プランで月100万トークン使える。ポートフォリオやLPなら3〜5サイト分に相当
            </li>
            <li className="pl-1 marker:text-gray-500">
              「作りたいものを日本語で説明→AIがコード生成→プレビューで確認→修正依頼」のサイクルで完成
            </li>
            <li className="pl-1 marker:text-gray-500">
              v0、Lovable、Replit Agentと比較して「最も手軽に始められ、最も速くMVPが完成する」のが強み
            </li>
            <li className="pl-1 marker:text-gray-500">
              プロンプトは「誰のため・何を載せるか・デザインの雰囲気」の3点を伝えるのがコツ
            </li>
          </ul>
        </motion.section>

        {/* ===== Bolt.newとは ===== */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-is-bolt" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Bolt.newとは？——AIでWebサイトを作れるツール
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Bolt.new（ボルト・ニュー）は、StackBlitz社が提供する<strong>AI搭載のWeb開発プラットフォーム</strong>です。従来のWeb制作では、HTML・CSS・JavaScriptなどのプログラミング言語を学ぶ必要がありましたが、Bolt.newでは「こんなサイトを作りたい」と日本語で指示を出すだけでAIが自動的にコードを生成してくれます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            2024年10月3日にリリースされ、わずか1週間で年間売上100万ドルを突破。2025年1月には1億500万ドルの資金調達を完了し、企業評価額は7億ドル（約1,050億円）に達しました。AIのモデルにはAnthropicの「Claude」を採用しており、2025年10月の大型アップデート「Bolt V2」で、データベース・認証機能・Figma連携などが追加されました。
          </p>

          <div className="mt-8 space-y-4">
            {boltFeatures.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-2xl">{feature.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">「Vibe Coding」という新しい開発スタイル</p>
            <p className="mt-2 text-sm leading-7 text-blue-900">
              Bolt.newのように「AIに話しかけてコードを書いてもらう」スタイルは、2025年から<strong>「Vibe Coding（バイブコーディング）」</strong>と呼ばれ、テック業界で大きな話題になっています。プログラミングの知識がなくても、「こんな感じで」という雰囲気（Vibe）を伝えるだけで形にできる。その入口として最も手軽なツールがBolt.newです。
            </p>
          </div>

          {/* UI解説 */}
          <h3 className="mt-10 text-lg font-bold text-gray-900">Bolt.newの画面構成</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            Bolt.newの画面は、大きく6つのエリアに分かれています。最初はチャットパネルとプレビューパネルだけ意識すればOKです。
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {uiParts.map((part) => (
              <div key={part.name} className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-sm font-bold text-gray-900">
                  <span className="mr-2">{part.emoji}</span>
                  {part.name}
                </p>
                <p className="mt-1 text-xs leading-6 text-gray-600">{part.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ===== 他ツール比較 ===== */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="tool-comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            他ツールとの違い（比較表）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「AIでWebサイトを作るツール」は複数あります。それぞれ特徴が異なるので、自分に合ったツールを選ぶことが大切です。Bolt.newは<strong>「プログラミング経験ゼロの人が、最も速くWebサイトを公開できるツール」</strong>として際立っています。
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">ツール</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">ターゲット</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">強み</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">無料枠</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">有料プラン</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {toolComparison.map((row) => (
                  <tr key={row.tool} className={row.tool === "Bolt.new" ? "bg-orange-50/50" : ""}>
                    <td className="whitespace-nowrap px-4 py-3 font-bold text-gray-900">{row.tool}</td>
                    <td className="px-4 py-3 text-gray-700">{row.target}</td>
                    <td className="px-4 py-3 text-gray-700">{row.strength}</td>
                    <td className="px-4 py-3 text-gray-700">{row.free}</td>
                    <td className="px-4 py-3 text-gray-700">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">どれを選べばいい？</p>
            <p className="mt-2 text-sm leading-7 text-amber-900">
              <strong>プログラミング経験ゼロで、とにかく最初の1ページを作りたい</strong>→ Bolt.new（この記事でガイドします）。
              UIの品質を最優先にしたい開発者 → v0。
              Reactで本格的なアプリを作りたい → Lovable。
              Python等も使いたい → Replit Agent。
              迷ったらまずBolt.newの無料枠で試してみましょう。
            </p>
          </div>
        </motion.section>

        {/* ===== ハンズオン ===== */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="hands-on" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            実際に作ってみよう（ハンズオン6ステップ）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ここからは実際にBolt.newを使ってWebサイトを作る手順を、初めての方でも迷わないようにステップバイステップで解説します。所要時間は約30分です。
          </p>

          <div className="mt-8 space-y-6">
            {handsonSteps.map((s) => (
              <div key={s.step} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-start gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-emerald-800">うまくいかなくても大丈夫</p>
            <p className="mt-2 text-sm leading-7 text-emerald-900">
              最初のプロンプトで思い通りのサイトが出来上がることは稀です。<strong>「指示→確認→修正依頼」を3〜5回繰り返す</strong>のが普通のワークフローです。何度でもやり直せるので、気楽にいきましょう。もし生成結果がおかしくなったら「Rollback」で前の状態に戻せます。トークンも消費しません。
            </p>
          </div>
        </motion.section>

        {/* ===== プロンプトのコツ ===== */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="prompt-tips" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            プロンプト（指示文）のコツ＆実例3パターン
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Bolt.newで良い結果を得るために最も重要なのが「プロンプト（AIへの指示文）の書き方」です。ChatGPTと同じく、具体的に伝えるほど精度が上がります。ここでは、初級・中級・上級の3パターンのプロンプト例を紹介します。
          </p>

          <div className="mt-6 rounded-lg border border-gray-200 bg-white p-5">
            <h3 className="text-base font-bold text-gray-900">プロンプト3つの基本ルール</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li><strong>誰のためのサイトか</strong>を伝える（例：「フリーランスデザイナー向け」）</li>
              <li><strong>何を載せるか</strong>をセクション単位で箇条書きにする</li>
              <li><strong>デザインの雰囲気</strong>を指定する（例：「ネイビーと白、モダンでクリーン」）</li>
            </ol>
          </div>

          <div className="mt-8 space-y-8">
            {promptExamples.map((example) => (
              <div key={example.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${example.label}`}>
                    {example.level}
                  </span>
                  <h3 className="text-base font-bold text-gray-900">{example.title}</h3>
                </div>
                <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs font-semibold text-gray-500">コピペで使えるプロンプト例</p>
                  <p className="mt-2 whitespace-pre-line text-sm leading-7 text-gray-700">{example.prompt}</p>
                </div>
                <div className="mt-3 rounded-lg border border-blue-100 bg-blue-50 p-3">
                  <p className="text-xs font-semibold text-blue-700">ポイント</p>
                  <p className="mt-1 text-sm leading-7 text-blue-800">{example.tip}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">Bolt.newの「Prompt Enhancer」を活用しよう</p>
            <p className="mt-2 text-sm leading-7 text-blue-900">
              チャット欄の横にある「Enhance」ボタンを押すと、あなたのプロンプトをAIが自動的に改善してくれます。「何を書けばいいかわからない」という方は、まずざっくりした指示を書いてからEnhanceボタンを押してみましょう。
            </p>
          </div>
        </motion.section>

        {/* ===== MidArticleCTA ===== */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="bolt-new-beginners-guide" />
        </motion.section>

        {/* ===== 活用事例5選 ===== */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="use-cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Bolt.new活用事例5選
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「Bolt.newで何が作れるの？」という方に、代表的な活用事例を5つ紹介します。すべて無料プランでも着手可能です。
          </p>

          <div className="mt-8 space-y-4">
            {useCases.map((uc, idx) => (
              <div key={uc.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl">
                    {uc.emoji}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-gray-900">
                      <span className="mr-1 text-will-primary">{idx + 1}.</span>
                      {uc.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{uc.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <span className="inline-block rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                        所要時間: {uc.time}
                      </span>
                      <span className="inline-block rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                        難易度: {uc.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">Bolt.newが向かないケース</p>
            <p className="mt-2 text-sm leading-7 text-amber-900">
              Python・PHPなどJavaScript以外の言語を使うプロジェクト、大規模なエンタープライズアプリ、高トラフィックが見込まれる本番サービスには向いていません。そういった用途には
              <Link href="/academy/blog/cursor-ai-coding-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Cursor
              </Link>
              や従来の開発手法が適しています。
            </p>
          </div>
        </motion.section>

        {/* ===== 料金プラン ===== */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="pricing" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            料金プランと無料枠の使い方（2026年2月時点）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Bolt.newは無料プランだけでも十分に使えます。ここでは2026年2月時点の料金体系を整理します。
          </p>

          <div className="mt-8 space-y-4">
            {pricingPlans.map((plan) => (
              <div
                key={plan.plan}
                className={`rounded-xl border p-5 ${
                  plan.highlight
                    ? "border-will-primary/30 bg-will-lighter/30"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-gray-900">{plan.plan}</h3>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-bold text-gray-700">
                    {plan.price}
                  </span>
                  {plan.highlight && (
                    <span className="rounded-full bg-will-primary px-3 py-1 text-xs font-bold text-white">
                      おすすめ
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm font-medium text-gray-600">トークン: {plan.tokens}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                  {plan.features.map((f) => (
                    <li key={f} className="pl-1 marker:text-gray-400">{f}</li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-gray-500">注意: {plan.limit}</p>
                <p className="mt-2 text-sm font-medium text-will-primary">{plan.best}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-emerald-800">無料枠の賢い使い方</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-emerald-900">
              <li>トークンは毎月1日にリセット。繰り越しはできないので月内に使い切るのがお得</li>
              <li>1日あたりの上限は30万トークン。一気に使わず、数日に分けるのが安定</li>
              <li>「Lock」「Target」機能を活用すると、不要なトークン消費を抑えられる</li>
              <li>まずは無料枠で試して、「毎月トークンが足りない」と感じたらProプランを検討</li>
            </ul>
          </div>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            ※ 価格は2026年2月時点の情報です。最新の料金は
            <a
              href="https://bolt.new/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              Bolt.new公式サイト
            </a>
            でご確認ください。年払いの場合、Proプランは月$20に割引されます。
          </p>
        </motion.section>

        {/* ===== つまずきポイント ===== */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="troubleshooting" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            初心者がつまずきやすいポイントと解決法
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Bolt.newは直感的なツールですが、初めて使うときにつまずきやすいポイントがあります。事前に知っておけば焦らずに対処できます。
          </p>

          <div className="mt-8 space-y-4">
            {troubleshootingItems.map((item) => (
              <div key={item.problem} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-base font-bold text-red-700">{item.problem}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  <span className="font-semibold text-gray-700">原因: </span>
                  {item.cause}
                </p>
                <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                  <p className="text-xs font-semibold text-emerald-700">解決法</p>
                  <p className="mt-1 text-sm leading-7 text-emerald-900">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ===== FAQ ===== */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Q. {item.question}
                </dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">
                  A. {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* ===== まとめ ===== */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-white p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：Bolt.newで「作る側」になろう
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            かつてWebサイトを作るには、プログラミングスクールに通うか、プロに高いお金を払って依頼するしかありませんでした。それが今では、ブラウザを開いてAIに話しかけるだけで、プロトタイプからLP、さらには業務ツールまで作れてしまいます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            Bolt.newは、そんな「AIでモノづくりを始める」最も手軽な入口です。無料プランでも月100万トークンが使えるので、まずは1つ、シンプルなポートフォリオやLPを作ってみてください。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            <strong>「プログラミングができないから無理」という時代は終わりました。</strong>大切なのは「何を作りたいか」というアイデアと、AIに伝える言葉。あなたの頭の中にある「こんなサイトがあったらいいな」を、今日、形にしてみませんか？
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            もし「AIをもっと体系的に学びたい」「仕事で使える実践力を身につけたい」と思ったら、AIリブートアカデミーの100日間プログラムもぜひチェックしてみてください。Bolt.newのようなツールを使いこなすためのAI活用力を、プロと一緒に身につけることができます。
          </p>
        </motion.section>

        {/* ===== LINE CTA ===== */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </motion.section>

        {/* ===== 関連リンク ===== */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/vibe-coding-beginner-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Vibe Coding入門｜非エンジニアがAIでWebアプリを作る手順とツール比較
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-coding-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/cursor-ai-coding-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Cursor AIコーディング入門｜非エンジニアでも使える実践ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-coding-tool-comparison-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIコーディングツール比較 2026年版｜Cursor・Claude Code・GitHub Copilotの選び方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIとは？初心者向けにわかりやすく解説
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
