"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";

type FAQItem = {
  question: string;
  answer: string;
};

type ChatgptGpt5GuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = ["ChatGPT GPT-5 違い", "GPT-5.2", "モデル選び", "API比較"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "status-2026", label: "2026年2月時点の提供状況" },
  { id: "mode-selection", label: "Auto/Thinkingの使い分け" },
  { id: "chatgpt-vs-api", label: "ChatGPT利用とAPI利用の違い" },
  { id: "workflow", label: "再現性を上げる3ステップ運用" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const statusRows = [
  {
    item: "ChatGPT側の既定モデル",
    status: "GPT-5.2が中心（確認日: 2026-02-20）",
    note: "旧GPT-5系と混同しやすいため、記事や社内資料に確認日を明記する",
  },
  {
    item: "旧GPT-5（Instant / Thinking）",
    status: "2026-02-13にChatGPTで退役案内",
    note: "過去記事の記述が古い可能性があるため、リンク先の日付まで確認する",
  },
  {
    item: "API側のモデル選択",
    status: "GPT-5.2 / GPT-5 / GPT-5.1系が並存",
    note: "ChatGPT UIの表示名とAPIのモデル名は一致しない場合がある",
  },
] as const;

const modeRows = [
  {
    mode: "Auto / Instant",
    bestFor: "メール下書き、議事メモ要約、短い壁打ち",
    caution: "深い比較検討や根拠整理では精度不足になりやすい",
  },
  {
    mode: "Thinking",
    bestFor: "要件整理、比較表作成、複数条件の意思決定",
    caution: "回答時間が長くなりやすいため、必要な場面だけ使う",
  },
  {
    mode: "Pro",
    bestFor: "高難度タスクの連続処理、長文コンテキスト作業",
    caution: "プラン条件と上限が変わるため、最新仕様を都度確認する",
  },
] as const;

const chatgptVsApiRows = [
  {
    axis: "課金",
    chatgpt: "プラン課金（UI利用）",
    api: "従量課金（別請求）",
  },
  {
    axis: "主な用途",
    chatgpt: "個人・チームの対話利用",
    api: "社内ツール連携、業務フロー自動化",
  },
  {
    axis: "導入難易度",
    chatgpt: "すぐ開始できる",
    api: "開発実装と運用監視が必要",
  },
  {
    axis: "運用責任",
    chatgpt: "利用ルール中心",
    api: "ログ、権限、障害対応まで設計が必要",
  },
] as const;

const workflowSteps = [
  {
    title: "ステップ1: 目的と出力形式をテンプレ化する",
    body: "案件ごとに書き方を変える前に、「目的・前提・制約・出力形式」の4点を固定します。毎回ここを変えると、モデル比較以前に再現性が崩れます。",
  },
  {
    title: "ステップ2: Autoで初稿、Thinkingで重要箇所を再生成する",
    body: "最初からThinkingに固定せず、Auto/Instantで草案を作ってから重要箇所だけThinkingで深掘りすると、時間と品質のバランスが取りやすくなります。",
  },
  {
    title: "ステップ3: 固有名詞・数値・日付・引用元をレビューする",
    body: "出力の最終品質はモデル選択だけで決まりません。レビュー項目を固定し、チームで同じチェックを回すことで、誤回答リスクを下げられます。",
  },
] as const;

type LineCtaBoxProps = {
  className: string;
};

function LineCtaBox({ className }: LineCtaBoxProps) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-gray-900">
        AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）
      </p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        ChatGPTや最新モデルのアップデートを、業務判断に使える要点だけで受け取りたい方向けに配信しています。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </section>
  );
}

export default function ChatgptGpt5GuidePage({ faqItems }: ChatgptGpt5GuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPTとGPT-5の違いを整理" },
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
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="ChatGPTとGPT-5の違いを整理｜2026年版モデル選びと使い分けガイド"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPTとGPT-5の違いを整理｜2026年版モデル選びと使い分けガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            ChatGPTを使っていると、「GPT-5」と「GPT-5.2」の情報が混在し、どのモードを選ぶべきか判断しにくくなりがちです。特に、旧記事やSNS情報だけで判断すると、現在の提供状況とズレることがあります。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事は、2026年2月20日時点の一次情報を基準に、ChatGPTのモデル選択とAPI利用の違いを実務で使える形に整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              2026年2月時点で、ChatGPT側の旧GPT-5（Instant/Thinking）は退役案内が出ており、GPT-5.2中心へ整理されています。
            </li>
            <li className="pl-1 marker:text-gray-500">
              日常の下書きはAuto/Instant、比較検討や要件整理はThinkingという使い分けで、速度と品質のバランスが取りやすくなります。
            </li>
            <li className="pl-1 marker:text-gray-500">ChatGPTプランとAPI課金は別管理です。チーム導入では予算と運用責任を分けて設計します。</li>
            <li className="pl-1 marker:text-gray-500">
              モデル名の議論より、テンプレ化とレビュー項目の固定を先に実施した方が、実務品質は安定します。
            </li>
          </ul>
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="status-2026"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            2026年2月時点で、ChatGPTのGPT-5系運用は「旧モデル情報」を除外して判断する必要がある
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            実務で最も多い失敗は、古いモデル情報を前提に運用設計してしまうことです。まずは現時点の提供状況を1枚に整理し、社内共有しておくと混乱を減らせます。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">項目</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">状態</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務での注意</th>
                </tr>
              </thead>
              <tbody>
                {statusRows.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="px-4 py-4">{row.status}</td>
                    <td className="py-4 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            ChatGPTをこれから触り始めるメンバーがいる場合は、
            <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTをスマホで始める方法
            </Link>
            と一緒に配布すると、操作とモデル理解を同時に揃えられます。
          </p>
          <p className="mt-3 text-xs leading-6 text-gray-500">情報確認日: 2026年2月20日</p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
        </motion.section>

        <motion.section
          id="mode-selection"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ChatGPTのモデルモードは、作業難易度で選ぶと速度と品質の両立がしやすい
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            モード選択で重要なのは、モデル名そのものより「この作業にどこまで考えさせるか」です。全案件をThinkingへ寄せるより、難易度で切り替える運用の方が継続しやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">モード</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いている業務</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                {modeRows.map((row) => (
                  <tr key={row.mode} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.mode}</th>
                    <td className="px-4 py-4">{row.bestFor}</td>
                    <td className="py-4 pl-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            実運用では、まず短い依頼で出力の型を固める方が安定します。プロンプト設計を体系化したい場合は、
            <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPT実践テクニック集
            </Link>
            のテンプレ運用を先に導入すると移行が速くなります。
          </p>
        </motion.section>

        <motion.section
          id="chatgpt-vs-api"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ChatGPT利用とAPI利用は、「課金」「実装自由度」「運用責任」で分けると判断しやすい
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            チーム導入で混乱しやすいのが、ChatGPT契約とAPI契約を同じ予算として扱ってしまうことです。ここを分けるだけで、導入計画の精度が上がります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">ChatGPT利用</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">API利用</th>
                </tr>
              </thead>
              <tbody>
                {chatgptVsApiRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.chatgpt}</td>
                    <td className="py-4 pl-4">{row.api}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            API実装を始める場合は、Responses API前提で設計する方が保守しやすくなります。業務テンプレの作り方は
            <Link href="/academy/blog/prompt-template-for-work" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              仕事で使えるプロンプトテンプレート集
            </Link>
            も参考になります。
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
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
        </motion.section>

        <motion.section
          id="workflow"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            仕事で再現性を上げるには、モデル選択より先に「テンプレ化→レビュー→改善」の順で運用を固定する
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            モデル比較を続けても、運用手順が曖昧だと成果は安定しません。最初に回すべきは、チームで再利用できる作業手順です。
          </p>
          <div className="mt-7 space-y-4">
            {workflowSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            他モデルとの役割分担まで整理したい場合は、
            <Link href="/academy/blog/gpt-vs-claude-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              GPT-4とClaude比較記事
            </Link>
            をあわせて読み、用途別の使い分け表を作っておくと導入判断が速くなります。
          </p>
          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-900">AIリブートアカデミーの学習設計</p>
            <p className="mt-3 text-sm leading-7 text-blue-800">
              AIリブートアカデミーでは、生成AI活用力の習得に加えて、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまでを一体で設計しています。ツール名ではなく、業務課題に対する判断軸を育てたい方に向いています。
            </p>
          </div>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.055 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            モデル仕様は更新されるため、以下のQ&Aも「確認日つきで運用する」前提で読んでください。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6">
            <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
          </div>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h3 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTを仕事で使いこなす実践テクニック集｜基本から応用まで50のTips
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/gpt-vs-claude-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                GPT-4とClaude徹底比較｜性能・得意分野・料金の違いを解説
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
