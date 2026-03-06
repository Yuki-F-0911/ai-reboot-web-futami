"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type Gpt54VsClaudeGemini2026PageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const infoCheckedDate = "2026-03-06";

const keywordTags = [
  "GPT-5.4 Claude Gemini 比較",
  "GPT-5.4 vs Claude",
  "ChatGPT Gemini 違い 2026",
  "AIモデル選び方",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "strengths", label: "3モデルの強み一覧" },
  { id: "routing", label: "用途別おすすめ早見表" },
  { id: "coding", label: "コーディング比較" },
  { id: "documents", label: "ビジネス文書比較" },
  { id: "pricing", label: "価格・プラン比較" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related", label: "関連記事" },
  { id: "academy-cta", label: "AIリブートアカデミーのご案内" },
] as const;

const summaryPoints = [
  "結論は1つです。2026年3月時点でGPT-5.4・Claude・Geminiを比較するなら、最強を1本に決めるより用途別にルーティングしたほうが失敗しにくくなります。",
  "GPT-5.4は、OpenAI公式が professional work・coding・computer use を前面に出しており、試行回数を多く回す開発・マルチモーダル作業の母艦に向きます。",
  "Claudeは Sonnet 4.6 / Opus 4.6 ともに長文処理、enterprise workflows、trust and safety を強く打ち出しており、レビューや高精度文書の最終確認で優位が出ます。",
  "Geminiは Google AI Pro と Workspace の直結が強く、Gmail・Docs・Meet・スマホ中心の業務では導入コストと運用の軽さで選ばれやすい構図です。",
] as const;

const strengthCards = [
  {
    model: "GPT-5.4",
    accent: "border-sky-200 bg-sky-50",
    title: "コーディング・マルチモーダル・回転速度の母艦",
    body:
      "OpenAIはGPT-5.4を professional work 向けの標準モデルとして位置づけ、1M context、computer use、web development、spreadsheet・presentation workflows を同時に押し出しています。日常の実装、画面理解を伴う修正、画像や資料も混ざる作業を1つの会話にまとめやすいのが強みです。",
    bestFor: "向いている用途: 日常コーディング、プロトタイプ、画像や画面を含む作業、短いサイクルでの改善",
  },
  {
    model: "Claude",
    accent: "border-amber-200 bg-amber-50",
    title: "倫理寄りの推論・長文精度・安全性の軸",
    body:
      "AnthropicはClaude Sonnet 4.6 / Opus 4.6の両方で enterprise workflows と trust and safety を前面に出しており、1M context beta/API、Google Workspace、calendar、email、Q&A などの長い文脈をまたぐ業務に強い設計です。結論を急ぎすぎず、長文の整合性を保ったままレビューする場面で差が出ます。",
    bestFor: "向いている用途: 長文レビュー、役員向け文書、法務・監査寄りの確認、複雑な大規模コードレビュー",
  },
  {
    model: "Gemini",
    accent: "border-emerald-200 bg-emerald-50",
    title: "Google Workspace・モバイル・導入コストのバランス",
    body:
      "Google AI Pro は Gemini in Gmail / Docs / Vids、Gemini app、Gemini Code Assist の拡張を含み、Workspace Business Standard 以上では Gemini AI assistant in Gmail, Docs, Meet, and more が最初から入ります。原本がGoogle側にある業務では、貼り付け・転記の手間を減らせるのが最大の利点です。",
    bestFor: "向いている用途: Gmail/Docs/Sheets 中心業務、モバイル活用、Google環境でのコスト最適化",
  },
] as const;

const routingRows = [
  {
    useCase: "日常コーディングと試作",
    firstChoice: "GPT-5.4",
    secondChoice: "Claude Sonnet 4.6",
    note: "まず速く叩き台を出し、難所やレビューだけClaudeに回す運用が安定します。",
  },
  {
    useCase: "大規模コードベースの設計レビュー",
    firstChoice: "Claude Sonnet 4.6 / Opus 4.6",
    secondChoice: "GPT-5.4",
    note: "長文の仕様差分・レビュー観点を整えたい場面ではClaudeが強いです。",
  },
  {
    useCase: "提案書・議事録・稟議の初稿作成",
    firstChoice: "GPT-5.4",
    secondChoice: "Claude Sonnet 4.6",
    note: "初稿はGPT-5.4、最終トーン調整と論理整合はClaudeの二段構えが現実的です。",
  },
  {
    useCase: "法務・監査・対外文書のレビュー",
    firstChoice: "Claude",
    secondChoice: "GPT-5.4",
    note: "安全寄りの出力と長文の一貫性を優先するならClaudeが先です。",
  },
  {
    useCase: "Gmail・Docs・Meetが主戦場",
    firstChoice: "Gemini",
    secondChoice: "Claude",
    note: "Google側に原本があるなら、連携コストの低さだけで選ぶ価値があります。",
  },
  {
    useCase: "スマホ中心の利用",
    firstChoice: "Gemini",
    secondChoice: "GPT-5.4",
    note: "Gemini app とGoogleエコシステムの連続性が強く、外出先利用と相性がよいです。",
  },
  {
    useCase: "APIコストを抑えたい",
    firstChoice: "Gemini 3.1 Pro Preview",
    secondChoice: "GPT-5.4",
    note: "公式価格ベースでは Gemini 3.1 Pro Preview が input/output ともに軽めです。",
  },
] as const;

const codingRows = [
  {
    axis: "叩き台の速さ",
    gpt54: "最も合わせやすい。短いループで何度も直す前提と相性が良い。",
    claude: "速度より整合性寄り。レビュー・設計説明で効く。",
    gemini: "Google系スクリプトや補助用途では十分だが、主戦力にするかは業務次第。",
  },
  {
    axis: "大規模コード理解",
    gpt54: "1M context と computer use を活かした横断作業がしやすい。",
    claude: "長い文脈を保ったレビューと差分整理に強みが出やすい。",
    gemini: "Gemini 3.1 Pro Preview でも対応できるが、Workspace文脈がないと優先度は下がる。",
  },
  {
    axis: "フロントエンドの発散",
    gpt54: "UI案や複数案の発散、画像込みの改善指示に向く。",
    claude: "完成度を安定させたいときの詰めで有効。",
    gemini: "Google素材との接続前提なら便利だが、創造的な発散は一歩控えめ。",
  },
  {
    axis: "レビューの慎重さ",
    gpt54: "速い分、確認前提で回す必要がある。",
    claude: "最終レビューや根拠整理の役回りを持たせやすい。",
    gemini: "レビューより連携効率で選ぶモデル。",
  },
] as const;

const documentRows = [
  {
    scenario: "議事録の初稿",
    gpt54: "構造化が速く、箇条書きや表形式への変換がしやすい。",
    claude: "長文議事録からの論点整理で安定しやすい。",
    gemini: "Meet・Docs前提なら共有まで一気通貫にしやすい。",
  },
  {
    scenario: "提案書・企画書",
    gpt54: "たたき台とスライド化まで一気に進めやすい。",
    claude: "論点の抜け漏れ確認やトーンの安定化で強い。",
    gemini: "社内資料がGoogle Driveに集約されている場合に強い。",
  },
  {
    scenario: "法務・規程・役員向け文書",
    gpt54: "骨格作成は速いが、人間レビュー前提。",
    claude: "慎重な文体と長文整合性で第一候補になりやすい。",
    gemini: "Google原本との接続は便利だが、最終品質ではClaude優先。",
  },
  {
    scenario: "メール運用",
    gpt54: "下書きは速い。テンプレ化も得意。",
    claude: "配慮が必要な文面の言い回し調整に向く。",
    gemini: "Gmailから直接使えるので運用コストが最も低い。",
  },
] as const;

const personalPlanRows = [
  {
    service: "ChatGPT",
    plan: "Free / Plus / Pro",
    monthly: "Free / $20 / $200",
    note: "PlusでGPT-5.4 Thinking、Proで最高上限。確認日: 2026-03-06",
  },
  {
    service: "Claude",
    plan: "Free / Pro / Max",
    monthly: "Free / $20（月払い）・$17（年払い換算） / from $100",
    note: "長文・高頻度利用・高い上限が必要ならMaxも選択肢。確認日: 2026-03-06",
  },
  {
    service: "Gemini",
    plan: "Free / Google AI Pro",
    monthly: "Free / ¥2,900",
    note: "Gemini in Gmail / Docs / Vids、Gemini app、Code Assist拡張を含む。確認日: 2026-03-06",
  },
] as const;

const teamPlanRows = [
  {
    service: "ChatGPT Business",
    monthly: "$25 / user / month（年払い）",
    strength: "ChatGPTの高い上限と管理機能を業務導入しやすい。",
  },
  {
    service: "Claude Team / Enterprise",
    monthly: "Team は $25 / seat / month billed annually、Enterprise は要問い合わせ",
    strength: "SSO、SCIM、監査ログ、権限管理など安全寄りの管理機能が厚い。",
  },
  {
    service: "Workspace Business Standard / Plus",
    monthly: "¥1,600 / user / month、¥2,500 / user / month",
    strength: "Gemini AI assistant in Gmail, Docs, Meet, and more が標準で入るため、追加導入の摩擦が小さい。",
  },
] as const;

const apiPriceRows = [
  {
    model: "GPT-5.4",
    input: "$2.50 / 1M",
    output: "$15.00 / 1M",
    note: "OpenAI API pricing",
  },
  {
    model: "Claude Sonnet 4.6",
    input: "$3 / 1M",
    output: "$15 / 1M",
    note: "Anthropic Sonnet 4.6",
  },
  {
    model: "Claude Opus 4.6",
    input: "$5 / 1M",
    output: "$25 / 1M",
    note: "Anthropic Opus 4.6",
  },
  {
    model: "Gemini 3.1 Pro Preview",
    input: "$2 / 1M（<=200k）",
    output: "$12 / 1M（<=200k）",
    note: "Google Gemini API pricing",
  },
] as const;

export default function Gpt54VsClaudeGemini2026Page({ faqItems }: Gpt54VsClaudeGemini2026PageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "GPT-5.4・Claude・Gemini比較 2026" },
          ]}
        />

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
                title="GPT-5.4・Claude・Gemini比較 2026｜最強決定ではなく、用途別の使い分けで選ぶ"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            GPT-5.4・Claude・Gemini比較 2026｜最強決定ではなく、用途別の使い分けで選ぶ
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年3月6日 / 確認日: {infoCheckedDate}</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            2026年3月の比較で一番ズレやすいのは、「GPT-5.4・Claude・Geminiのどれが一番強いか」を先に決めようとすることです。
            実務では、コーディング、長文レビュー、Google Workspace、モバイル利用、APIコストで必要な強みが違います。
            そのため、今の正解は1本化ではなく、用途別のルーティングです。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            この記事では、
            <a
              href="https://openai.com/index/introducing-gpt-5-4/"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link mx-1"
            >
              OpenAIのGPT-5.4発表
            </a>
            、
            <a
              href="https://www.anthropic.com/claude/sonnet"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link mx-1"
            >
              AnthropicのClaude Sonnet 4.6 / Opus 4.6
            </a>
            、
            <a
              href="https://gemini.google/subscriptions/"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link mx-1"
            >
              Google AI Pro / Gemini
            </a>
            の公式情報を基準に、既存AIユーザーとIT担当者向けに使い分けを整理します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-5 text-sm leading-7 text-gray-700">
          個別記事を先に確認したい場合は
          <Link href="/academy/blog/gpt-5-4" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            GPT-5.4速報
          </Link>
          ・
          <Link href="/academy/blog/gemini-vs-chatgpt-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            Gemini vs ChatGPT比較
          </Link>
          ・
          <Link href="/academy/blog/claude-beginner-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            Claude入門ガイド
          </Link>
          を参照してください。
        </p>

        <section className="mb-8 mt-8 rounded-xl border border-blue-500 bg-blue-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Answer Box</p>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            日常コーディングとマルチモーダル作業の主力はGPT-5.4、長文レビューと安全寄りの判断はClaude、Google
            Workspace とモバイル運用はGeminiが第一候補です。
            1つだけに統一するより、標準モデル1本とレビュー用1本を分けるほうが、既存AIユーザーには現実的です。
          </p>
        </section>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="mt-14 rounded-lg border border-slate-200 bg-slate-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="strengths"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">3モデルの強み一覧</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            3モデルは、性能差より「どの業務のどこを担当させるか」で差が出ます。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            GPT-5.4は
            <a
              href="https://openai.com/index/introducing-gpt-5-4/"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link mx-1"
            >
              OpenAI公式発表
            </a>
            で professional work、coding、computer use を一体で打ち出しています。
            Claudeは
            <a
              href="https://www.anthropic.com/claude/sonnet"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link mx-1"
            >
              Sonnet 4.6
            </a>
            と
            <a
              href="https://www.anthropic.com/claude/opus"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link mx-1"
            >
              Opus 4.6
            </a>
            の両方で enterprise workflows と trust and safety を前面に出しています。
            Geminiは
            <a
              href="https://gemini.google/subscriptions/"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link mx-1"
            >
              Google AI Pro
            </a>
            と
            <a
              href="https://workspace.google.com/pricing.html"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link mx-1"
            >
              Workspace pricing
            </a>
            から、Googleツールへの直結と導入摩擦の低さが明確です。
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {strengthCards.map((card) => (
              <section key={card.model} className={`rounded-xl border p-5 ${card.accent}`}>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">{card.model}</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.body}</p>
                <p className="mt-4 text-sm font-medium leading-7 text-gray-900">{card.bestFor}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </motion.section>

        <motion.section
          id="routing"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">用途別おすすめ早見表</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            社内標準を1つに固定する前に、まずは「標準モデル」と「補助モデル」を分けて考えるほうが、現場では運用しやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">用途</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">第一候補</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">第二候補</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">判断理由</th>
                </tr>
              </thead>
              <tbody>
                {routingRows.map((row) => (
                  <tr key={row.useCase} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.useCase}</th>
                    <td className="py-4 px-4">{row.firstChoice}</td>
                    <td className="py-4 px-4">{row.secondChoice}</td>
                    <td className="py-4 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            すでにGoogle環境が強い会社なら、Geminiを標準にしてコーディングとレビューだけ別モデルに回す設計も現実的です。
            一方、開発部門が強い組織ではGPT-5.4を標準にし、役員資料や法務レビューだけClaudeに寄せるほうが齟齬が減ります。
          </p>
        </motion.section>

        <motion.section
          id="coding"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">コーディング比較</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            コーディングでは「精度」だけでなく、修正ループの回しやすさとレビューのしやすさを分けて見るべきです。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            GPT-5.4は
            <a
              href="https://openai.com/index/introducing-gpt-5-4/"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link mx-1"
            >
              OpenAI公式
            </a>
            が web development と computer use を同列に扱っており、日々の実装やUI修正、画像や画面を見ながらのやり取りに向きます。
            Claude Sonnet 4.6 / Opus 4.6は
            <a
              href="https://www.anthropic.com/claude/sonnet"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link mx-1"
            >
              1M context beta/API
            </a>
            と enterprise workflows が強く、大規模コードベースのレビューや設計説明で優位が出ます。
            Geminiは
            <a
              href="https://gemini.google/subscriptions/"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link mx-1"
            >
              Gemini Code Assist / CLI
            </a>
            がGoogle AI Proで拡張されるため、Google中心の開発フローでは候補に残ります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">GPT-5.4</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Claude</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Gemini</th>
                </tr>
              </thead>
              <tbody>
                {codingRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.gpt54}</td>
                    <td className="py-4 px-4">{row.claude}</td>
                    <td className="py-4 pl-4">{row.gemini}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-gray-900">実務での結論</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1">毎日コードを書くチームなら、標準はGPT-5.4で始めると回転数を確保しやすいです。</li>
              <li className="pl-1">仕様の長さやレビュー負荷が高いチームでは、Claudeをレビュー専用2本目として置く価値があります。</li>
              <li className="pl-1">Apps Script や Workspace自動化が多いなら、Geminiを切り捨てずに残したほうが運用コストを抑えられます。</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="gpt-5-4-vs-claude-gemini-2026" />
        </motion.section>

        <motion.section
          id="documents"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">ビジネス文書比較</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            ビジネス文書では、文体の好みより「原本がどこにあるか」「誰が最終責任を持つか」で選ぶと判断しやすくなります。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            GPT-5.4は OpenAI が spreadsheet / presentation workflows まで含めて訴求しており、初稿と構造化が速いです。
            Claudeは長文の整合性と慎重なレビューで優位が出やすく、社内レビューや役員向け文書と相性がよいです。
            Geminiは Gmail / Docs / Meet に直接入り込めるため、文書の中身以上に作業動線を短くできる点が強みです。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">文書シーン</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">GPT-5.4</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Claude</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Gemini</th>
                </tr>
              </thead>
              <tbody>
                {documentRows.map((row) => (
                  <tr key={row.scenario} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.scenario}</th>
                    <td className="py-4 px-4">{row.gpt54}</td>
                    <td className="py-4 px-4">{row.claude}</td>
                    <td className="py-4 pl-4">{row.gemini}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-gray-900">迷ったときの実務ルール</p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1">初稿を速く出したいならGPT-5.4</li>
              <li className="pl-1">根拠の抜け漏れや表現の慎重さを優先するならClaude</li>
              <li className="pl-1">Gmail / Docs / Meetの中でそのまま回したいならGemini</li>
            </ol>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Claudeの基本的な使い方を社内メンバーに共有するなら、
            <Link href="/academy/blog/claude-beginner-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude入門ガイド
            </Link>
            を横に置いておくと、評価基準のズレを減らせます。
          </p>
        </motion.section>

        <motion.section
          id="pricing"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">価格・プラン比較</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            価格だけを見るとGeminiが安く見えますが、実際は「既に何に払っているか」で差が変わります。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            個人契約なら ChatGPT Plus $20、Claude Pro $20、Google AI Pro ¥2,900 が比較の起点です。
            ただし会社ですでに Google Workspace Business Standard 以上を契約しているなら、Geminiの追加負担は小さくなります。
            API価格では GPT-5.4 と Gemini 3.1 Pro Preview が軽く、Claude は精度と安全性に寄せた分だけ高めです。
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">個人プラン比較</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="blog-table w-full min-w-[720px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">サービス</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">プラン</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">月額</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">補足</th>
                </tr>
              </thead>
              <tbody>
                {personalPlanRows.map((row) => (
                  <tr key={row.service} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.service}</th>
                    <td className="py-4 px-4">{row.plan}</td>
                    <td className="py-4 px-4">{row.monthly}</td>
                    <td className="py-4 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-xl font-semibold text-gray-900">チーム導入の比較</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="blog-table w-full min-w-[720px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">サービス</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">目安料金</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている組織</th>
                </tr>
              </thead>
              <tbody>
                {teamPlanRows.map((row) => (
                  <tr key={row.service} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.service}</th>
                    <td className="py-4 px-4">{row.monthly}</td>
                    <td className="py-4 pl-4">{row.strength}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-xl font-semibold text-gray-900">API価格の比較</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="blog-table w-full min-w-[720px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">モデル</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Input</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Output</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">出典</th>
                </tr>
              </thead>
              <tbody>
                {apiPriceRows.map((row) => (
                  <tr key={row.model} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.model}</th>
                    <td className="py-4 px-4">{row.input}</td>
                    <td className="py-4 px-4">{row.output}</td>
                    <td className="py-4 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-6 text-gray-500">
            価格情報の確認日: {infoCheckedDate}。出典:
            <a href="https://help.openai.com/en/articles/6950777-chatgpt-plus" target="_blank" rel="noopener noreferrer" className="blog-link mx-1">
              ChatGPT Plus
            </a>
            ・
            <a href="https://help.openai.com/en/articles/9793128/" target="_blank" rel="noopener noreferrer" className="blog-link mx-1">
              ChatGPT Pro
            </a>
            ・
            <a href="https://www.anthropic.com/pricing" target="_blank" rel="noopener noreferrer" className="blog-link mx-1">
              Anthropic Pricing
            </a>
            ・
            <a href="https://gemini.google/subscriptions/" target="_blank" rel="noopener noreferrer" className="blog-link mx-1">
              Google AI Pro
            </a>
            ・
            <a href="https://workspace.google.com/pricing.html" target="_blank" rel="noopener noreferrer" className="blog-link mx-1">
              Workspace Pricing
            </a>
            ・
            <a href="https://openai.com/api/pricing/" target="_blank" rel="noopener noreferrer" className="blog-link mx-1">
              OpenAI API Pricing
            </a>
            ・
            <a href="https://ai.google.dev/gemini-api/docs/pricing" target="_blank" rel="noopener noreferrer" className="blog-link mx-1">
              Gemini API Pricing
            </a>
          </p>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-6">
            <LineCtaBox />
          </div>
        </motion.section>

        <motion.section
          id="related"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">関連記事</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/gpt-5-4" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                GPT-5.4とは？3つのモデルの違い・性能・使い方を整理
              </Link>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/gemini-vs-chatgpt-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Gemini 3.1 vs ChatGPT 2026｜料金と用途の比較
              </Link>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/claude-beginner-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude入門ガイド｜使い方・料金・始め方
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            GPT-5.4かClaudeかGeminiか、という比較は出発点にすぎません。本質は「どのツール名を選ぶか」ではなく、
            自分やチームの業務課題に対して、どの判断軸でAIを組み込むかです。AIリブートアカデミーでは、生成AI活用力だけでなく、
            AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまで一体で設計しています。
            ツール比較で終わらず、実務への組み込み方と次のキャリア判断まで整理したい方は、学習プロセス全体を見直す価値があります。
          </p>
          <div className="mt-6">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              AIリブートアカデミーの詳細を見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
