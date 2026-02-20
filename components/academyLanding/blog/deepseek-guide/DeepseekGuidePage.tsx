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

type DeepseekGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["DeepSeek 使い方", "DeepSeek とは", "DeepSeek ChatGPT 違い", "DeepSeek API"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-deepseek", label: "DeepSeekとは？押さえるべき基本" },
  { id: "deepseek-vs-chatgpt", label: "DeepSeekとChatGPTの違い" },
  { id: "getting-started", label: "DeepSeekの始め方（初心者向け）" },
  { id: "operations", label: "実務運用で失敗しない注意点" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "学習を継続するための次の一歩" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody = "AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）";

const summaryPoints = [
  "DeepSeekは、WebチャットとAPIの両方から使える生成AIサービスです。個人利用の下書きから、チームの検証フローまで設計しやすい点が特徴です。",
  "使い始めは、最初からAPIに進むより、Chatで業務の問いを定義してからAPI化したほうが手戻りを減らせます。",
  "ChatGPTとの比較は優劣で決めるより、調査・整理・提出物作成で役割分担する運用が実務的です。",
  "数値や制度情報を扱う業務では、AI出力の引用確認と原典確認を運用ルールにすることが必須です。",
] as const;

const basicsCards = [
  {
    title: "提供形態",
    body: "DeepSeekは、ブラウザで使うChat利用と、開発フローへ組み込むAPI利用の2系統で整理できます。個人検証と本番運用で入口を分けられる点が実務では扱いやすくなります。",
  },
  {
    title: "モデル選定の考え方",
    body: "モデル名より先に、何を出力したいかを定義することが重要です。要約速度を重視する場面と、推論の深さを重視する場面で使い分けると、品質とコストのバランスを取りやすくなります。",
  },
  {
    title: "向いている業務",
    body: "リサーチの下書き、比較表の初稿、議事録の整形、提案文書の叩き台など、情報整理と再構成を短時間で回したい業務に向きます。最終版の確定には必ず人の確認を残します。",
  },
] as const;

const comparisonRows = [
  {
    axis: "初動の使い方",
    deepseek: "問いの分解と下書き作成を素早く回す",
    chatgpt: "文体調整や成果物化まで含めて対話で詰める",
    recommendation: "調査の初稿はDeepSeek、提出前の調整はChatGPT",
  },
  {
    axis: "実装連携",
    deepseek: "API連携前提で検証しやすい",
    chatgpt: "対話起点の検討と広い用途に強い",
    recommendation: "PoC段階では両者を並行検証して比較する",
  },
  {
    axis: "チーム運用",
    deepseek: "比較軸を固定した初稿作りに向く",
    chatgpt: "説明文・提案資料の整形に向く",
    recommendation: "役割分担で使うとレビュー時間を短縮しやすい",
  },
  {
    axis: "注意点",
    deepseek: "出力をそのまま採用せず根拠確認が必要",
    chatgpt: "同様に根拠確認と誤読チェックが必要",
    recommendation: "どのツールでも最終判断は人が行う",
  },
] as const;

const startSteps = [
  "業務課題を1文で定義する（例: 競合比較の叩き台を30分で作る）。",
  "Chatで比較軸を固定し、初稿を作る。",
  "引用元のURLと日付を確認し、誤読を修正する。",
  "社内共有向けのテンプレートへ整形する。",
  "再利用できる質問文とチェック項目を保存する。",
] as const;

const apiReadinessChecks = [
  {
    title: "入力データの分類",
    body: "機密・個人情報・公開情報を分けて、送信可能なデータ範囲を先に定義します。",
  },
  {
    title: "監査ログの設計",
    body: "誰が何を入力し、どの出力を採用したかを追える形にすると、運用事故の検証がしやすくなります。",
  },
  {
    title: "失敗時のフォールバック",
    body: "API障害や仕様変更に備え、手動運用へ戻す手順を用意しておくと業務停止を防げます。",
  },
] as const;

const operationRules = [
  "重要情報はAI出力だけで確定せず、一次情報を2件以上確認する。",
  "機密情報は入力しない。必要時は匿名化ルールを適用する。",
  "制度・価格・仕様は確認日を明記し、月1回は再検証する。",
  "自動生成テキストは必ず担当者名でレビュー承認する。",
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "業務課題に対して、どのAIをどう組み合わせるかを判断し、現場で再現可能な形に落とし込む力を育てます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AIを鏡にして、自分の強み・価値観・伸ばすべき役割を明確化し、次のキャリアを言語化します。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "同じ課題を持つ仲間と対話し、実践と振り返りを継続できる学習環境で変化を定着させます。",
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
        LINEで週1AI通信を受け取る（無料）
      </a>
    </motion.section>
  );
}

export default function DeepseekGuidePage({ faqItems }: DeepseekGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "DeepSeekとは？" },
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
            DeepSeekとは？使い方と実務活用の始め方｜ChatGPTとの違いも解説
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-20">2026年2月20日</time> 公開
            </p>
            <CopyAsMarkdownButton title="DeepSeekとは？使い方と実務活用の始め方｜ChatGPTとの違いも解説" sourceSelector="[data-blog-article-body]" />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            DeepSeekを使い始めるときに重要なのは、ツール名ではなく「どの業務課題を、どの順序で改善するか」を先に決めることです。この記事では、DeepSeekの基本、ChatとAPIの使い分け、ChatGPTとの分業、実務での注意点を確認日付きで整理します。
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
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="what-is-deepseek"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">DeepSeekとは？押さえるべき基本</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            DeepSeekは、Web利用とAPI利用の両方に対応した生成AIサービスです。個人が素早く試せる入口と、業務に組み込む入口を分けて設計できるため、検証から運用への移行を進めやすくなります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {basicsCards.map((card) => (
              <section key={card.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-subtle">
                <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{card.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            生成AIの実務活用全体像は、
            <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPT活用の実務ガイド
            </Link>
            も合わせて確認すると整理しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="deepseek-vs-chatgpt"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">DeepSeekとChatGPTの違い</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            実務では、1つのモデルだけで完結させるより、用途で分業したほうが品質が安定します。下表は、意思決定しやすい比較軸だけに絞った使い分け例です。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">比較軸</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">DeepSeek</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">ChatGPT</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">実務での使い分け</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {comparisonRows.map((row) => (
                  <tr key={row.axis}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.axis}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.deepseek}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.chatgpt}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            比較検討の観点を増やしたい場合は、
            <Link href="/academy/blog/gpt-vs-claude-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              GPTとClaudeの比較記事
            </Link>
            も併読すると、評価軸を横展開しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="getting-started"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">DeepSeekの始め方（初心者向け）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            初期段階で重要なのは、プロンプトの巧拙より運用手順の固定です。以下の順で進めると、短期間で再利用しやすい型を作れます。
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {startSteps.map((step) => (
              <li key={step} className="pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            API利用に進む前は、次の準備ができているかを確認してください。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {apiReadinessChecks.map((check) => (
              <section key={check.title} className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <h3 className="text-sm font-semibold text-amber-900">{check.title}</h3>
                <p className="mt-2 text-sm leading-7 text-amber-800">{check.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="operations"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">実務運用で失敗しない注意点</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            生成AIの失敗は、モデル品質より運用設計の不足で起きることが多くあります。次のルールをチーム共通化すると、導入初期の事故を減らせます。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {operationRules.map((rule) => (
              <li key={rule} className="pl-1 marker:text-gray-500">
                {rule}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            情報管理の実務ルールを強化したい場合は、
            <Link href="/academy/blog/ai-data-leak-patterns" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIデータ漏えいパターンの解説
            </Link>
            と
            <Link href="/academy/blog/ai-guideline-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIガイドラインテンプレート
            </Link>
            をあわせて確認してください。
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
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-will-primary/20 bg-will-lighter p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">学習を継続するための次の一歩</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIを業務に定着させるには、ツールの単発操作よりも、課題設定と判断軸を育てる学習設計が重要です。AIリブートアカデミーは、次の3本柱を一体で扱います。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {academyPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-lg border border-white/80 bg-white p-4">
                <h3 className="text-sm font-semibold text-will-primary">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            どのツールを使うかより、どの業務課題にどう適用するかを言語化できると、成果の再現性が上がります。週次で学習と実践を回せる状態を作りたい方は、無料相談で現在地を整理してください。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-growth"
            >
              アカデミーの詳細を見る
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-will-primary/30 px-6 py-3 text-sm font-semibold text-will-primary transition-colors hover:border-will-primary hover:bg-white"
            >
              無料相談を予約する
            </Link>
          </div>
        </motion.section>

        <LineCtaBox tone="green" />
      </article>
    </main>
  );
}
