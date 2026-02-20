"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";

type FAQItem = {
  question: string;
  answer: string;
};

type GoogleAiStudioGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "Google AI Studio 使い方",
  "Google AI Studio とは",
  "Gemini API 始め方",
  "Google AI Studio 無料",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "q1-what-is-google-ai-studio", label: "Q1. Google AI Studioとは？Geminiアプリ/ChatGPTとの違い" },
  { id: "q2-quickstart-10-steps", label: "Q2. 無料で始める10ステップ" },
  { id: "q3-core-features", label: "Q3. プロンプト・画像入力・会話テストの使い方" },
  { id: "q4-non-engineer", label: "Q4. 非エンジニアでも使える？" },
  { id: "q5-next-step", label: "Q5. App Buildに進む前の学習導線" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody =
  "AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。";

const summaryPoints = [
  "Google AI Studioは、Geminiモデルを「実装前に試す」ための開発向けワークスペースです。日常会話向けのGeminiアプリとは役割が異なります。",
  "無料で始めるには、Googleアカウントでログインし、プロンプト実験とAPIキー作成までを10ステップで一度通すのが最短です。",
  "プロンプトテスト・画像入力テスト・会話テストを順番に実施すると、仕様理解と業務適用の判断がしやすくなります。",
  "非エンジニアでも検証までは実行できますが、社内ツール連携や本番運用にはAPI設計とセキュリティ理解が必要です。",
  "App Buildを触る前に、入門編として本記事で検証の型を固めると、次の実装ステップで迷いにくくなります。",
] as const;

const serviceComparisonRows = [
  {
    tool: "Google AI Studio",
    mainUse: "Geminiモデル検証・APIキー発行・コード生成",
    target: "開発前検証を行う学習者/実務担当者",
    keyDifference: "モデル設定やプロンプト評価など、実装前の検証導線がある",
  },
  {
    tool: "Geminiアプリ",
    mainUse: "日常利用の対話、要約、情報整理",
    target: "個人利用・業務の軽い相談をしたい人",
    keyDifference: "開発設定よりも日常利用体験が中心",
  },
  {
    tool: "ChatGPT",
    mainUse: "汎用対話、文章作成、構成支援",
    target: "文章業務や思考整理を幅広く回す人",
    keyDifference: "開発ワークスペースではなく、対話ベースの汎用利用が中心",
  },
] as const;

const quickstartSteps = [
  {
    step: "Step 1. Google AI Studioにアクセスしてログインする",
    action:
      "ブラウザでGoogle AI Studioを開き、業務用か個人用かを決めたGoogleアカウントでサインインします。最初に利用規約や利用地域条件を確認してください。",
    screenPoint: "画面で見るポイント: ログイン直後に表示されるワークスペースの初期テンプレートとモデル選択エリア。",
  },
  {
    step: "Step 2. 新規プロンプト画面を開く",
    action:
      "まずは空の入力欄に短い質問を入れて、応答の速度と粒度を確認します。最初の検証は「1質問1目的」に絞ると比較しやすくなります。",
    screenPoint: "画面で見るポイント: 入力欄、送信ボタン、応答表示エリアの位置関係。",
  },
  {
    step: "Step 3. モデルを選ぶ",
    action:
      "Geminiモデルの候補から、速度重視か精度重視かで1つ選択します。モデル差分を把握するため、同じプロンプトで2種類を比較すると判断が早くなります。",
    screenPoint: "画面で見るポイント: モデル切り替えドロップダウンと現在選択中モデル名。",
  },
  {
    step: "Step 4. 出力設定を調整する",
    action:
      "応答の揺れを抑えたい場合は設定値を低めに、発想案を広げたい場合は高めに調整します。ここを変えずにプロンプトだけ直すと、検証がぶれにくくなります。",
    screenPoint: "画面で見るポイント: 生成設定（温度など）とトークン関連の設定項目。",
  },
  {
    step: "Step 5. 1本目の業務プロンプトを固定する",
    action:
      "例として「会議メモ要約」や「メール返信下書き」を選び、目的・前提・制約・出力形式を分けて入力します。以後の比較はこの型を基準に進めます。",
    screenPoint: "画面で見るポイント: 再実行時に同じ入力を使えるよう、プロンプトを保存する導線。",
  },
  {
    step: "Step 6. 応答を比較し、評価メモを残す",
    action:
      "良い/悪いを感覚で判断せず、「正確性」「読みやすさ」「そのまま使える度合い」の3項目で採点します。評価軸を固定すると上達が早くなります。",
    screenPoint: "画面で見るポイント: 実行結果を見比べる際の履歴と編集可能な入力欄。",
  },
  {
    step: "Step 7. APIキーを作成する",
    action:
      "Gemini APIを外部ツールから呼び出す予定がある場合は、AI StudioからAPIキーを作成します。キーは公開リポジトリや共有チャットに貼らない運用を徹底します。",
    screenPoint: "画面で見るポイント: APIキー作成メニューと作成後の表示フロー。",
  },
  {
    step: "Step 8. Get codeでサンプルを取得する",
    action:
      "作成したプロンプトをコードで再現するサンプルを確認し、どの言語で呼び出せるかを把握します。非エンジニアでも「入力と出力の対応」を読むだけで理解が進みます。",
    screenPoint: "画面で見るポイント: コード生成パネル、言語切り替え、モデル名とAPIキー参照箇所。",
  },
  {
    step: "Step 9. 無料枠と課金条件を確認する",
    action:
      "Gemini APIはFree tierとPaid tierがあり、条件はモデルごとに異なります。料金や上限は変動するため、検証前に公式ページの日付を確認します。",
    screenPoint: "画面で見るポイント: 料金ページ/利用条件ページへの導線と現在のプラン表示。",
  },
  {
    step: "Step 10. 次の学習タスクを1つ決める",
    action:
      "最後に「画像入力を試す」「会話テストを回す」「App Buildに進む」のどれか1つだけ選びます。1回で全部やろうとせず、1テーマずつ定着させるのが実務的です。",
    screenPoint: "画面で見るポイント: 新規実験の開始導線と、既存プロンプトの再利用導線。",
  },
] as const;

const promptTestCards = [
  {
    title: "1. プロンプトテスト: まずは比較可能な型で入力する",
    body:
      "「目的・前提・制約・出力形式」の4ブロックで入力すると、改善ポイントが可視化しやすくなります。応答品質が不安定な場合は、最初に指示文を短くし、条件を後から追加するほうが安定します。",
    prompt:
      "目的: 社内向け議事録の要点を共有したい\n前提: 箇条書きメモを貼り付ける\n制約: 300文字以内、専門用語は注釈付き\n出力形式: 決定事項/未決事項/次アクション",
  },
  {
    title: "2. 画像入力テスト: 画像の説明と改善提案を同時に依頼する",
    body:
      "Google AI Studioでは画像を含むマルチモーダル入力を試せます。画像を渡して「何が写っているか」だけでなく「業務で使うなら何を補足すべきか」を聞くと、説明品質を評価しやすくなります。",
    prompt:
      "目的: 添付画像を社内報告用に説明したい\n指示: 画像の内容を3行で要約し、リスク/不足情報/追加で確認すべき点を箇条書きで示してください\n出力形式: 要約 + チェックリスト",
  },
  {
    title: "3. 会話テスト: 多ターンで意図保持を確認する",
    body:
      "単発回答だけでは実務再現性を判断できません。2〜4ターンで追質問し、前の文脈を保持したまま回答できるかを確認すると、実運用に近い評価ができます。",
    prompt:
      "1ターン目: 企画案を3つ出してください\n2ターン目: 2案目だけ具体化してください\n3ターン目: 予算5万円以内に修正してください",
  },
] as const;

const conversationChecklist = [
  "1ターン目の条件を2ターン目で保持できるか",
  "条件変更を入れたときに矛盾せず更新できるか",
  "出力形式（表/箇条書き）を会話途中でも維持できるか",
  "長文の後でも要点を正しく再要約できるか",
  "最終回答をそのまま業務文書に転用できる品質か",
] as const;

const communityVoices = [
  {
    title: "実声1: APIキー作成でつまずくケース",
    detail:
      "コミュニティでは、モバイル端末からAPIキー作成が進まないという相談があり、PCブラウザでの実行で解消したという報告が見られます。最初の設定はPC環境で行うのが安全です。",
  },
  {
    title: "実声2: 料金認識のズレ",
    detail:
      "「AI Studioは無料だと思っていたが課金表示が出た」という投稿もあります。実際は、Free tier/Paid tierの条件や有料キーの利用有無で挙動が変わるため、検証前に公式のBillingページ確認が必須です。",
  },
  {
    title: "実声3: 地域・アカウント条件による差分",
    detail:
      "利用地域やアカウント状態によって、同じ手順でも表示される画面が異なるという声があります。チーム展開時は、1人分の成功手順をそのまま全員に当てはめない運用が重要です。",
  },
] as const;

const nonEngineerRows = [
  {
    area: "できること（非エンジニアでも可能）",
    detail:
      "プロンプト検証、画像入力テスト、会話品質の評価、業務ユースケースの仮説作成。ここまではコード不要で進められます。",
  },
  {
    area: "学習すればできること",
    detail:
      "APIキーを使った簡易連携、スプレッドシートやノーコードツールとの接続、社内向けの小規模自動化。基礎的なAPI理解があれば対応可能です。",
  },
  {
    area: "エンジニア協力が必要なこと",
    detail:
      "本番システム連携、認証設計、監査ログ、可用性設計、アクセス権管理。業務導入ではセキュリティと運用設計をセットで進める必要があります。",
  },
] as const;

const nonEngineerRoadmap = [
  "1週目: Google AI Studioでプロンプト検証を毎日1本実施する",
  "2週目: 画像入力と会話テストを用途別に記録し、評価表を作る",
  "3週目: APIキーと簡易コード例を読み、入力/出力の構造を理解する",
  "4週目: App Buildに進み、1機能だけミニアプリ化する",
] as const;

const sourceLinks = [
  {
    name: "Google AI Studio クイックスタート",
    href: "https://ai.google.dev/gemini-api/docs/ai-studio-quickstart",
  },
  {
    name: "Gemini API 料金ページ（Free tier / Paid tier）",
    href: "https://ai.google.dev/gemini-api/docs/pricing",
  },
  {
    name: "Gemini API Billing FAQ",
    href: "https://ai.google.dev/gemini-api/docs/billing",
  },
  {
    name: "Gemini Apps Privacy Hub（Gemini Appsの定義）",
    href: "https://support.google.com/gemini/answer/15716076",
  },
] as const;

function LineCtaBox({ tone }: { tone: "green" | "orange" }) {
  const boxClass =
    tone === "green"
      ? "mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
      : "mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6";
  const titleClass = tone === "green" ? "text-base font-semibold text-green-800" : "text-base font-semibold text-orange-800";

  return (
    <motion.section
      className={boxClass}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className={titleClass}>📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </motion.section>
  );
}

export default function GoogleAiStudioGuidePage({ faqItems }: GoogleAiStudioGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Google AI Studio使い方完全ガイド" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-4 flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl">
            Google AI Studio使い方完全ガイド｜Geminiモデルをすぐ試せるAI開発環境
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-20">2026年2月20日</time> 公開
            </p>
            <CopyAsMarkdownButton
              title="Google AI Studio使い方完全ガイド｜Geminiモデルをすぐ試せるAI開発環境"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Google AI Studioは、Geminiモデルをブラウザで試しながら、プロンプト検証とAPI連携準備を同時に進められる開発向け環境です。この記事は「Google AI
            Studioとは何か」を最短で把握したい方向けに、Geminiアプリ・ChatGPTとの違い、無料クイックスタート10ステップ、画像入力や会話テストの実践手順を入門目線で整理しています。まず全体像をつかみ、その後に
            <Link
              href="/academy/blog/google-ai-studio-app-build-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              App Build特化ガイド
            </Link>
            へ進む構成です。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="scroll-mt-28 mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold text-blue-900">要点まとめ</h2>
          <p className="mt-4 text-sm leading-7 text-blue-800">最初に役割の違いを理解し、次に10ステップで検証フローを固定すると学習効率が上がります。</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="q1-what-is-google-ai-studio"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Q1. Google AI Studioとは？GeminiアプリやChatGPTと何が違う？
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Google AI Studioは「AIを使う場所」ではなく「AI機能を作る前に検証する場所」です。Geminiアプリが日常利用向けなのに対し、AI
            Studioはモデル選択、プロンプト評価、APIキー管理など実装前の工程に向いています。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            ChatGPTとの違いも同様で、ChatGPTは汎用的な対話体験が中心、Google AI StudioはGemini API前提の開発・検証導線が中心です。どちらが優れているかではなく、用途が違います。文章業務中心なら
            <Link
              href="/academy/blog/chatgpt-claude-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPT・Claude初心者ガイド
            </Link>
            、Google環境中心なら
            <Link
              href="/academy/blog/gemini-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              Gemini完全入門ガイド
            </Link>
            もあわせて読むと判断しやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">比較対象</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">主な用途</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">主な利用者</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">使い分けのポイント</th>
                </tr>
              </thead>
              <tbody>
                {serviceComparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.mainUse}</td>
                    <td className="px-4 py-4">{row.target}</td>
                    <td className="px-4 py-4">{row.keyDifference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            公式情報確認日: 2026年2月20日。料金・仕様・提供地域は変動するため、以下の一次情報を起点にしてください。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {sourceLinks.map((source) => (
              <li key={source.href} className="pl-1 marker:text-gray-500">
                <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  {source.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="q2-quickstart-10-steps"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q2. Google AI Studioを無料で始める10ステップ</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            初回は「触って終わり」にしないことが重要です。下記10ステップを上から順に実施し、最後に検証メモまで残すと、次のApp Build段階で再利用できます。
          </p>
          <p className="mt-2 text-xs text-gray-500">
            ※2026年2月20日確認。Free tier / Paid tierの条件や対応モデルは更新される可能性があります。
          </p>
          <div className="mt-6 space-y-4">
            {quickstartSteps.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.step}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.action}</p>
                <p className="mt-2 text-sm leading-7 text-gray-600">{item.screenPoint}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            10ステップの中で特に差が出るのは、Step 5の「業務プロンプト固定」とStep
            6の「評価メモ」です。ここを省略すると、モデル変更や設定変更の効果検証ができず、なんとなくの評価で終わりやすくなります。
          </p>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="q3-core-features"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Q3. プロンプトテスト・マルチモーダル（画像入力）・会話テストはどう使う？
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Google AI Studioで最初に使うべき機能は3つです。単発の回答精度より、複数ターンで再現できるかを重視すると、実務適用しやすいワークフローになります。
          </p>
          <div className="mt-6 space-y-6">
            {promptTestCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.body}</p>
                <pre className="mt-4 overflow-x-auto rounded bg-white p-4 text-xs leading-6 text-gray-700">{card.prompt}</pre>
              </section>
            ))}
          </div>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">会話テストの評価チェックリスト</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {conversationChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            プロンプト設計を深めたい場合は
            <Link
              href="/academy/blog/chatgpt-claude-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPT・Claude初心者ガイド
            </Link>
            のテンプレート整理も参考になります。Google環境での使い分けは
            <Link
              href="/academy/blog/gemini-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              Gemini完全入門ガイド
            </Link>
            とセットで読むと理解しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="q4-non-engineer"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q4. Google AI Studioは非エンジニアでも使える？</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、検証目的なら非エンジニアでも使えます。実務導入まで一人で完結するのは難しい場面があるため、使える範囲と支援が必要な範囲を分けて進めるのが現実的です。
          </p>
          <div className="mt-6 space-y-4">
            {nonEngineerRows.map((row) => (
              <section key={row.area} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{row.area}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{row.detail}</p>
              </section>
            ))}
          </div>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">コミュニティで見られる実利用者のつまずき</h3>
          <div className="mt-4 space-y-4">
            {communityVoices.map((voice) => (
              <section key={voice.title} className="rounded-lg border border-amber-200 bg-amber-50 p-5">
                <h4 className="text-base font-semibold text-amber-900">{voice.title}</h4>
                <p className="mt-2 text-sm leading-7 text-amber-800">{voice.detail}</p>
              </section>
            ))}
          </div>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">非エンジニア向けの4週間ロードマップ</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {nonEngineerRoadmap.map((step) => (
              <li key={step} className="pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            独学で進めるときは、毎週の学習目標を「操作」ではなく「業務成果物」で置くのが重要です。例えば「会議要約テンプレートを作る」「画像説明フォーマットを作る」のように、実務で再利用できる形に落としてください。
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="q5-next-step"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q5. 入門の次に何を学ぶ？App Build機能へ進む導線</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            本記事（#38）は全体像の入門編です。次はApp Buildに進み、実際に入力画面と出力ロジックを組み合わせた小さなアプリを作るフェーズに移ると理解が定着します。
          </p>
          <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-lg font-semibold text-gray-900">次に読む記事</h3>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              さらにApp Build機能を使いたい方は
              <Link
                href="/academy/blog/google-ai-studio-app-build-guide"
                className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                Google AI Studio App Build特化ガイド
              </Link>
              へ進んでください。全体像の復習が必要になったときは、本記事に戻って「10ステップ」と「評価チェックリスト」を再確認すると進行が安定します。
            </p>
          </div>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">関連記事（内部リンク）</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/gemini-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Gemini完全入門ガイド
              </Link>
              : Geminiの基本概念と使い始めを整理
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/chatgpt-claude-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT・Claude初心者ガイド
              </Link>
              : 対話AIの基礎運用を比較しながら理解
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/google-ai-studio-app-build-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                Google AI Studio App Build特化ガイド
              </Link>
              : 入門後に実装段階へ進むための実践編
            </li>
          </ul>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、AIを鏡にした自己理解・キャリアデザイン、さらに仲間と共に学ぶ環境づくりまで一体で設計しています。ツール操作だけで終わらず、仕事とキャリアに接続する学び方を取りたい方は、この3軸で学習計画を組むのが有効です。
          </p>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            先に結論を確認し、料金・対応モデル・提供地域は公式ドキュメントの更新日とあわせて判断してください。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <LineCtaBox tone="green" />
      </article>
    </main>
  );
}
