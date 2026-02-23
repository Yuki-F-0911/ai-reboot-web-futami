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

type N8nBeginnerGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["n8n 使い方", "n8n 初心者", "ワークフロー自動化", "セルフホスト"] as const;

const tocItems = [
  { id: "conclusion", label: "結論: 最初の1本を小さく作る" },
  { id: "what-is-n8n", label: "n8nの基本を押さえる" },
  { id: "first-flow", label: "最初のフローを作る3ステップ" },
  { id: "operation-design", label: "止まらない運用設計" },
  { id: "common-mistakes", label: "初心者がつまずく3パターン" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連記事" },
  { id: "cta", label: "LINEで継続学習する" },
] as const;

const firstFlowSteps = [
  {
    title: "Step 1: 自動化対象を1つに絞る",
    detail:
      "最初は通知や転記など、判断条件が少ない作業を選びます。対象業務を広げるほど設定が増え、原因切り分けが難しくなります。",
    output: "例: 「問い合わせフォーム送信をSlackへ通知する」",
  },
  {
    title: "Step 2: トリガー→処理→アクションで最小構成を作る",
    detail:
      "トリガー（開始条件）、処理（必要なら整形）、アクション（通知/登録）だけで1本を完成させます。条件分岐や複数連携は後から足します。",
    output: "まずは成功ログが安定して残る状態を作る。",
  },
  {
    title: "Step 3: 失敗時の通知と再実行を先に設定する",
    detail:
      "自動化は「動くこと」より「止まったときにすぐ戻せること」が重要です。エラー通知先、復旧担当、再実行ルールを1ページで決めます。",
    output: "運用負荷を最小化し、継続利用しやすくする。",
  },
] as const;

const operationChecklist = [
  "認証情報の作成者・更新責任者を決める",
  "失敗時の通知先（Slack/メール）を設定する",
  "再実行手順を1ページで文書化する",
  "フロー名とノード名を業務単位で命名する",
  "運用ログの確認頻度（毎日/毎週）を固定する",
  "料金・実行回数上限を月次で確認する",
] as const;

const commonMistakes = [
  {
    title: "失敗1: 最初から複雑な分岐を組む",
    detail:
      "複数サービス連携と条件分岐を同時に作ると、どこで失敗したかを追いにくくなります。まずは1トリガー1アクションで成功率を上げる方が実務で定着します。",
  },
  {
    title: "失敗2: 認証情報を個人依存のまま運用する",
    detail:
      "担当者の権限変更や退職でフローが止まる原因になります。共有管理を前提に、更新手順を最初から決めておくことが必要です。",
  },
  {
    title: "失敗3: エラー通知なしで本番化する",
    detail:
      "外部API側の仕様変更や一時障害でフローが停止しても気付けません。通知・再実行・代替手順を揃えてから本番化すると復旧時間を短縮できます。",
  },
] as const;

export default function N8nBeginnerGuidePage({ faqItems }: N8nBeginnerGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "n8n入門ガイド" },
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
                title="n8n入門ガイド｜初心者が業務自動化を最初の1本から実装する手順【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            n8n入門ガイド｜初心者が業務自動化を最初の1本から実装する手順【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            n8nは、ノードをつないで業務フローを自動化できるプラットフォームです。自由度が高い一方で、最初の設計を誤ると「動くが続かない」状態になりやすい特徴があります。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            本記事は、n8nを初めて触る方向けに「最初の1本を確実に動かす」ことへ焦点を当てます。料金や仕様は更新されるため、本文は判断軸中心で整理しています（確認日: 2026-02-20）。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            結論: n8n初心者は「小さな成功を作る順番」を守ると定着しやすい
          </h2>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              最初は複雑フローを避け、1業務1フローで成功ログを作る。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              トリガー・処理・アクションの3層だけで構成し、運用時に必要な通知設計を先に入れる。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              Cloud/セルフホストの選択は、技術好みではなく運用責任とコスト構造で決める。
            </li>
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            先に比較軸を整理したい場合は
            <Link href="/academy/blog/workflow-automation-comparison" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ワークフロー自動化ツール比較
            </Link>
            を確認すると、n8nの位置づけをつかみやすくなります。
          </p>
        </motion.section>

        <div className="mt-10">
          <LineCtaBox />
        </div>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-is-n8n" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            n8nとは何か: 初心者が押さえるべき基本は「接続」と「運用」の2点
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            n8nの本質は、アプリ間の橋渡しを自動化し、業務の手戻りを減らすことです。
          </p>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            例えば「フォーム送信を受けて、内容を整形し、Slackへ通知する」というフローは、n8nでは視覚的に組み立てられます。ここで重要なのは、画面上で組めること以上に、運用担当者が継続できる設計にすることです。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            自動化ツール全体での役割を把握したい方は、
            <Link href="/academy/blog/ai-business-efficiency-cases" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI業務効率化事例集
            </Link>
            と
            <Link href="/academy/blog/what-is-ai-agent" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェントとは
            </Link>
            もあわせて確認してください。
          </p>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">Cloudとセルフホストの見方</h3>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">Cloud:</span> 検証開始が速く、インフラ管理を最小化しやすい。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">セルフホスト:</span> 運用責任は増えるが、管理ポリシーとコスト最適化を自社要件で設計しやすい。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">共通:</span> 認証情報管理、ログ確認、再実行の設計がないと運用が不安定になる。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="first-flow" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            最初のワークフローを作る3ステップ: 1時間で「動く」まで到達する
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            初心者向けのコツは、成果物を小さく固定することです。以下の3ステップなら、はじめてでも1時間以内に最初の自動化を完成させやすくなります。
          </p>

          <div className="mt-7 space-y-4">
            {firstFlowSteps.map((step, index) => (
              <section key={step.title} className="rounded-lg border border-emerald-200 bg-white p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-emerald-600 px-2 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="blog-h3 text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{step.detail}</p>
                <p className="blog-p mt-3 text-sm font-semibold leading-7 text-emerald-700">{step.output}</p>
              </section>
            ))}
          </div>

          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            他ツール比較を前提にn8nを選ぶ場合は、
            <Link href="/academy/blog/workflow-automation-comparison" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Make・Zapier・n8n比較
            </Link>
            で判断軸を揃えておくと、導入後のやり直しが減ります。
          </p>
        </motion.section>

        <div className="mt-10">
          <LineCtaBox />
        </div>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="operation-design" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            止まらない運用設計: 実装前に決めるべきチェックリスト
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            n8nの効果は、作成時ではなく運用継続で決まります。次のチェックリストを先に決めると、停止時の復旧を短時間で回せます。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {operationChecklist.map((item) => (
              <li key={item} className="blog-li pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            ノーコード構築の入り口を押さえたい場合は
            <Link href="/academy/blog/dify-beginner-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Difyの使い方完全ガイド
            </Link>
            も参考になります。目的別にツールを使い分けると、運用コストを抑えながら成果を出しやすくなります。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="common-mistakes" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            初心者がつまずく3パターン: 回避策を先に仕込む
          </h2>
          <div className="mt-6 space-y-4">
            {commonMistakes.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-6">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
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
          <h2 id="faq" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            FAQ
          </h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="related-links" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            関連記事
          </h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/workflow-automation-comparison" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ワークフロー自動化ツール比較｜Make・Zapier・n8nを徹底比較【2026年版】
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/dify-beginner-guide" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Difyの使い方完全ガイド｜ノーコードでAI業務ボットを最短で作る方法
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-business-efficiency-cases" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI業務効率化事例集
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/what-is-ai-agent" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントとは？定義・種類・作り方を解説
              </Link>
            </li>
          </ul>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまでを一体で設計しています。
            特定ツール名を追うだけでなく、業務課題に対して何を自動化し、どこまで運用責任を持つかの判断軸を育てたい方に向いた学習設計です。
          </p>
        </motion.section>

        <section id="cta" className="mt-14">
          <LineCtaBox />
        </section>
      </article>
    </main>
  );
}
