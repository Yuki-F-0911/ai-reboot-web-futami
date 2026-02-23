"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type ClaudeSonnet46GuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "Claude Sonnet 4.6 使い方",
  "Claude Sonnet 4.6 料金",
  "Claude Sonnet 4.6 vs Opus 4.6",
  "Claude Sonnet 4.6 API",
] as const;

const tocItems = [
  { id: "answer-box", label: "結論（Answer Box）" },
  { id: "overview", label: "Claude Sonnet 4.6とは" },
  { id: "sonnet-vs-opus", label: "Opus 4.6との違い・使い分け" },
  { id: "api-implementation", label: "API実装方法（基本例）" },
  { id: "business-use-cases", label: "実務活用シーン" },
  { id: "pricing", label: "料金プラン（API / Claude.ai）" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const answerBoxPoints = [
  "Claude Sonnet 4.6は2026年2月17日に公開。Claude.aiではFree/Proの標準モデルとして案内されています。",
  "コスト効率を重視する日常業務はSonnet 4.6、高難度推論や長文文脈の精度重視はOpus 4.6が基本です。",
  "API実装はMessages APIで `model: \"claude-sonnet-4-6\"` を指定する構成が最短です。",
  "料金判断は単価だけでなく、用途別に品質・処理時間・再実行率を併せて評価してください。",
] as const;

const overviewRows = [
  { item: "公開日", detail: "2026-02-17（Anthropic公式ニュース）" },
  { item: "Claude.aiでの提供", detail: "Free / Proプランのデフォルトモデルとして案内" },
  { item: "APIモデル名", detail: "`claude-sonnet-4-6`（Messages API）" },
  { item: "設計思想", detail: "日常業務の処理量と品質のバランスを取りやすい主力モデル" },
  { item: "主な対象ユーザー", detail: "中級者、ビジネス担当者、法人AI導入チーム" },
] as const;

const comparisonRows = [
  {
    axis: "向いている用途",
    sonnet: "文書作成、要約、コード補助、社内ナレッジ整備など高頻度業務",
    opus: "複雑推論、大規模文脈の分析、難易度が高いレビュー工程",
  },
  {
    axis: "コスト効率",
    sonnet: "高い。大量処理の標準モデルとして使いやすい",
    opus: "高単価。限定投入で費用対効果を出す設計が必要",
  },
  {
    axis: "処理設計",
    sonnet: "日次運用のメインラインに載せやすい",
    opus: "品質ゲートや最終レビュー工程に置くと効果が出やすい",
  },
  {
    axis: "法人導入の実務",
    sonnet: "全社展開前の標準化に向く",
    opus: "重要案件・高難度タスクのみ選択適用が現実的",
  },
] as const;

const apiSteps = [
  {
    title: "Step 1. 最小リクエストで応答を返す",
    body: "まずは単発入力で応答を返し、モデル指定とエラー処理の基礎を固めます。",
    code: `import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 800,
  messages: [{ role: "user", content: "会議メモを5行で要約してください。" }],
});

console.log(response.content);`,
  },
  {
    title: "Step 2. 出力形式とレビュー観点を固定する",
    body: "実務では再現性を優先し、見出し・箇条書き・禁止事項をリクエスト側で固定します。",
    code: `const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 1200,
  system: "あなたは社内文書整備アシスタントです。事実と提案を分けて出力してください。",
  messages: [
    {
      role: "user",
      content:
        "営業日報を要約し、1) 要点3つ 2) 課題2つ 3) 次アクション2つ の形式で返してください。"
    }
  ]
});`,
  },
  {
    title: "Step 3. 運用ログを残し、Sonnet/Opus切替条件を決める",
    body: "品質、処理時間、コスト、再実行率を記録し、Opusへ切り替える閾値を明文化します。",
    code: `const routingRule = {
  defaultModel: "claude-sonnet-4-6",
  escalateToOpusWhen: [
    "複数文書の矛盾解消が必要",
    "重要文書の最終レビュー",
    "長文コンテキストで誤差が許容できない案件"
  ]
};`,
  },
] as const;

const businessUseCases = [
  {
    title: "文書作成: 提案書・議事録・社内通知のドラフト作成",
    body: "日常的に件数が多い文書業務では、Sonnet 4.6を標準化すると作業時間を圧縮しやすくなります。レビュー基準を先に決めると品質が安定します。",
  },
  {
    title: "要約: 会議ログ・調査メモ・長文報告書の圧縮",
    body: "一定品質で速く回せるため、定型要約や週次レポートに向きます。重要判断が絡む部分だけOpus 4.6で再確認する設計が有効です。",
  },
  {
    title: "コード補助: 実装方針整理・レビュー観点の初稿",
    body: "実装案の叩き台とレビュー観点の抽出に使いやすく、開発初期の反復速度を高められます。最終マージ前は人間レビューを必須化してください。",
  },
] as const;

const pricingRows = [
  {
    channel: "Anthropic API",
    target: "Claude Sonnet 4.6",
    price: "入力$3 / 出力$15（MTok, 200Kまで）",
    note: "200K超は入力$6 / 出力$22.50。確認日: 2026-02-21",
  },
  {
    channel: "Anthropic API",
    target: "Claude Opus 4.6",
    price: "入力$15 / 出力$75（MTok, 200Kまで）",
    note: "200K超は入力$20 / 出力$112.50。高難度工程向けに限定運用が現実的",
  },
  {
    channel: "Claude.ai",
    target: "Free / Pro / Max",
    price: "Pro: $20/月、Max: $100/月（5x）・$200/月（20x）",
    note: "利用上限は会話長・添付・混雑で変動。Sonnet 4.6はFree/Proの標準モデルとして案内",
  },
] as const;

const pricingChecklist = [
  "コスト評価は1リクエスト単価ではなく、再実行率と人手レビュー時間まで含める",
  "Sonnetを標準、Opusを高難度工程へ限定する2段階運用にする",
  "月次上限を部門単位で決め、上限到達時のフォールバックモデルを用意する",
  "価格改定に備えて確認日を運用ドキュメントに残す",
] as const;

export default function ClaudeSonnet46GuidePage({ faqItems }: ClaudeSonnet46GuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Claude Sonnet 4.6使い方ガイド" },
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
                title="Claude Sonnet 4.6使い方ガイド｜料金・Opus 4.6比較・API実装【2026年2月】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Claude Sonnet 4.6使い方ガイド｜料金・Opus 4.6比較・API実装【2026年2月】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            Claude Sonnet 4.6は、日常業務の処理量と品質のバランスを取りやすい主力モデルです。本記事では公開日、Opus 4.6との違い、API実装方法、実務活用、料金までを
            2026年2月21日時点の一次情報に基づいて整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">結論（Answer Box）</h2>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {answerBoxPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-5 text-xs leading-6 text-gray-500">確認日: 2026-02-21（価格・提供範囲は更新される可能性があります）</p>
        </motion.section>

        <motion.section
          id="overview"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Claude Sonnet 4.6とは: 2026年2月17日公開の主力モデル</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            Sonnet 4.6は、速度と品質を両立しやすい運用中心モデルです。個人利用だけでなく、法人の横展開を見据えた標準モデルとして設計しやすい点が特徴です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">項目</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">内容</th>
                </tr>
              </thead>
              <tbody>
                {overviewRows.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="py-4 pl-4">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            Claude全体の基本整理が必要な場合は、
            <Link href="/academy/blog/claude-beginner-guide" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude入門ガイド
            </Link>
            を併読すると用語の差分を把握しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="sonnet-vs-opus"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Opus 4.6との違い・使い分け: コストと性能を業務で分離する</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            実務では「どちらが上か」ではなく、どの工程にどのモデルを当てるかで成果が変わります。標準工程はSonnet、重要工程はOpusという役割分担が最も運用しやすい設計です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[880px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Sonnet 4.6</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Opus 4.6</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.sonnet}</td>
                    <td className="py-4 pl-4">{row.opus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            Opusの詳細を先に確認したい場合は、
            <Link href="/academy/blog/claude-opus-4-6-guide" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude Opus 4.6使い方ガイド
            </Link>
            でベンチマークと価格差をあわせて確認してください。
          </p>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal}>
          <LineCtaBox />
        </motion.section>

        <motion.section
          id="api-implementation"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">APIでの実装方法: Messages APIでの基本呼び出し例</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            最初は複雑なワークフローを組まず、最小リクエストから始めると失敗率を下げられます。モデル指定・出力形式・ログ方針の3点を先に固定してください。
          </p>
          <div className="mt-6 space-y-5">
            {apiSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
                <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-6 text-gray-700">
{step.code}
                </pre>
              </section>
            ))}
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            API移行を並行で進めるチームは、
            <Link href="/academy/blog/openai-responses-api-guide" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              OpenAI Responses API実装ガイド
            </Link>
            と合わせて設計比較すると、社内標準の判断がしやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="business-use-cases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">ビジネス実務での活用シーン: 文書作成・要約・コード補助</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            Sonnet 4.6は「毎日発生する業務」を高速化する使い方が効果的です。高価なモデルを常時使うより、標準モデルの定着を先に作る方がROIを出しやすくなります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {businessUseCases.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            部門横断の運用設計を進める場合は、
            <Link href="/academy/blog/corporate-ai-adoption-guide" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              法人向けAI導入ガイド
            </Link>
            で体制とガバナンス設計も併せて確認してください。
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">料金プラン（API vs Claude.ai）: 単価より運用単位で判断する</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            APIは従量課金、Claude.aiはプラン課金という前提の違いがあります。費用対効果は単価ではなく、業務1件あたりの総コストで比較する必要があります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">チャネル</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">対象</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">料金</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">補足</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={`${row.channel}-${row.target}`} className="border-b border-gray-200 align-top">
                    <td className="py-4 pr-4 font-semibold text-gray-900">{row.channel}</td>
                    <td className="px-4 py-4">{row.target}</td>
                    <td className="px-4 py-4">{row.price}</td>
                    <td className="py-4 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="blog-ul mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {pricingChecklist.map((item) => (
              <li key={item} className="blog-li pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-4 text-xs leading-6 text-gray-500">料金確認日: 2026-02-21</p>
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal}>
          <LineCtaBox />
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="mb-4 scroll-mt-28 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/claude-opus-4-6-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Opus 4.6使い方ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/gpt-vs-claude-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTとClaude比較 2026年版
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/openai-responses-api-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                OpenAI Responses API実装ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/llm-cost-optimization-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                LLM APIコスト最適化ガイド
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-will-primary/20 bg-will-lighter p-8">
          <p className="text-sm font-semibold tracking-[0.08em] text-will-primary">AIリブートアカデミー</p>
          <h2 className="blog-h2 mt-3 text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーは、特定ツールの操作習得を目的にした場ではありません。生成AI活用力を実務で使える形に整理しながら、自己理解とキャリアデザインを深め、仲間と共に学び続ける環境を一体で設計しています。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-will-primary">生成AI活用力: 業務課題に合わせてAI活用を判断し、成果へ接続する</li>
            <li className="blog-li pl-1 marker:text-will-primary">自己理解・キャリアデザイン: 強みと価値観を言語化し、次の選択を具体化する</li>
            <li className="blog-li pl-1 marker:text-will-primary">仲間と共に学ぶ環境: 対話と協働を通じて継続的に改善する</li>
          </ul>
          <div className="mt-6">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-will-primary/90"
            >
              アカデミーの学習設計を見る
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
