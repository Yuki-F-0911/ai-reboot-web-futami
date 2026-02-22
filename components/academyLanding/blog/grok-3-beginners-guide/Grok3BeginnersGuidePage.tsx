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

const keywordTags = ["Grok 3", "xAI", "Grok 3 初心者", "ChatGPT Grok 比較"] as const;

const tocItems = [
  { id: "answer-box", label: "要点まとめ" },
  { id: "what-is-grok3", label: "Grok 3とは" },
  { id: "how-to-start", label: "無料で始める方法" },
  { id: "strengths", label: "使って分かった強み・弱み" },
  { id: "comparison", label: "主要AIとの比較" },
  { id: "faq", label: "FAQ" },
  { id: "summary", label: "まとめ" },
] as const;

const startSteps = [
  "xAI公式サイト（x.ai/grok）またはXアプリからGrokを開く",
  "Googleアカウントまたはメールで登録し、無料枠で利用開始する",
  "最初は短い質問で応答スタイルを確認し、必要に応じて追質問する",
  "業務用途では出力の事実確認と社内ルール確認をセットで行う",
] as const;

const strengths = [
  {
    title: "強み1：時事・話題文脈への反応が速い",
    body: "トレンドや最新ニュースの整理で、要点の抽出スピードが速く、一次把握に向いています。",
  },
  {
    title: "強み2：率直な回答スタイル",
    body: "曖昧な表現を避け、はっきりした回答が返るため、論点整理の初速を上げやすいです。",
  },
  {
    title: "強み3：数理・コーディング系の壁打ち",
    body: "複数案を短時間で出させる用途では実用性が高く、試行回数を増やしやすいです。",
  },
] as const;

const weaknesses = [
  "日本語の自然さは質問内容によってばらつくため、最終文面は人が整える前提が必要",
  "業務SaaS連携やテンプレート資産は、他ツールに比べると用途ごとの設計が必要",
  "新しい情報ほど真偽確認が必須。出典確認の運用を先に決めておくと安全",
] as const;

const comparisonRows = [
  {
    tool: "Grok 3",
    bestAt: "リアルタイム話題の把握、率直な壁打ち",
    caution: "日本語の仕上げと事実確認は必須",
  },
  {
    tool: "ChatGPT",
    bestAt: "汎用用途、周辺機能、学習コストの低さ",
    caution: "用途設計なしだと使い分けが曖昧になりやすい",
  },
  {
    tool: "Claude",
    bestAt: "長文整理、論点分解、読みやすい文体",
    caution: "時事性が必要な調査では確認プロセスが重要",
  },
  {
    tool: "Gemini",
    bestAt: "Google Workspace連携、情報整理の業務導線",
    caution: "運用ルールを決めないと部署ごとに使い方が分散しやすい",
  },
] as const;

export default function Grok3BeginnersGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Grok 3完全入門ガイド2026" },
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
                title="Grok 3完全入門ガイド2026：イーロン・マスクの最新AIを初心者が試した正直レポート"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Grok 3完全入門ガイド2026：イーロン・マスクの最新AIを初心者が試した正直レポート
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Grok 3は、xAIが提供する最新世代の対話AIです。話題性だけで判断せず、実際に触って「何が得意で、どこに注意が必要か」を把握することが、
            ツール選定の最短ルートになります。本記事は初心者目線で、導入前に押さえるべきポイントを絞って解説します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマは
          <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT・Claude初心者比較
          </Link>
          ・
          <Link href="/academy/blog/ai-overview-map-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            2026年AI全体マップ
          </Link>
          ・
          <Link href="/academy/blog/ai-free-plan-comparison-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            無料プラン比較ガイド
          </Link>
          もあわせて読むと理解が深まります。
        </p>
        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-14 rounded-xl border border-amber-200 bg-amber-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ（結論先出し）</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">Grok 3は「時事性」と「率直な回答」を重視したい人に向く</li>
            <li className="pl-1 marker:text-gray-500">無料枠でも体験可能。まずは短い質問で回答特性を確認するのが安全</li>
            <li className="pl-1 marker:text-gray-500">業務利用では、出力のファクトチェックと社内ガイドライン順守が必須</li>
          </ul>
        </motion.section>

        <motion.section
          id="what-is-grok3"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Grok 3とは？</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Grok 3は、xAIが公開する対話AIモデルです。情報収集、要約、文章作成、コード支援など汎用タスクに対応しつつ、
            最新トピックへの反応速度を強みとしています。ツール選定では「面白いか」より「業務に再現性があるか」で判断してください。
          </p>
        </motion.section>

        <motion.section
          id="how-to-start"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">無料で始める方法</h2>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {startSteps.map((step) => (
              <li key={step} className="pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">使って分かった強み・弱み</h2>
          <div className="mt-6 space-y-4">
            {strengths.map((item) => (
              <section key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-base font-semibold text-gray-900">弱みとして感じたポイント</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              {weaknesses.map((item) => (
                <li key={item} className="pl-1 marker:text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">ChatGPT・Claude・Geminiとの比較</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">向いている用途</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="py-4 px-4">{row.bestAt}</td>
                    <td className="py-4 pl-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">FAQ（よくある質問）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item, index) => (
              <details key={item.question} className="group rounded-xl border border-gray-200 bg-white p-5" open={index === 0}>
                <summary className="cursor-pointer list-none text-base font-semibold text-gray-900">{item.question}</summary>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="summary"
          className="mt-14 rounded-xl border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">まとめ</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Grok 3は、時事文脈を含む情報整理や率直な壁打ちに強みがあります。一方で、業務活用では他AIと同様に運用ルールと検証プロセスが前提です。
            「どれが最強か」より、目的ごとに使い分ける視点が成果につながります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力を高めるだけでなく、自己理解・キャリアデザインを深め、仲間と共に学び続ける環境づくりを重視しています。
          </p>
          <div className="mt-8">
            <MidArticleCtaBox slug="grok-3-beginners-guide" />
          </div>
          <LineCtaBox className="mt-6 rounded-lg border border-green-200 bg-green-50 p-6" />
        </motion.section>
      </article>
    </main>
  );
}
