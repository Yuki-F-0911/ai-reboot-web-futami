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

type PerplexityPagesGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = ["Perplexity Pages 使い方", "Pages 公開", "Pages SEO活用", "情報共有"] as const;

const tocItems = [
  { id: "answer-box", label: "結論（Answer Box）" },
  { id: "difference", label: "Perplexity一般利用との違い" },
  { id: "build-flow", label: "Pages作成フロー" },
  { id: "publish", label: "公開・共有の実務設定" },
  { id: "seo", label: "SEOを意識した構成設計" },
  { id: "operations", label: "運用ルールと更新管理" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "学習を継続する次の一歩" },
] as const;

const answerPoints = [
  "Perplexity Pagesは、単発回答ではなく「公開可能な調査ページ」を短時間で作る機能です。",
  "公開前に、対象読者・更新頻度・責任者を決めると運用が崩れにくくなります。",
  "SEOを意識する場合は、タイトル、導入3行、見出し構造、FAQを先に固定します。",
  "LINE特典の業種別プロンプト50選（bonus05）を使うと、Pages本文の初稿作成が速くなります。",
] as const;

const flowSteps = [
  {
    title: "Step 1. 調査クエリを定義する",
    body: "読者が知りたい問いを1つに絞り、比較軸を3〜5項目に固定します。",
  },
  {
    title: "Step 2. セクション構成を先に作る",
    body: "導入、比較、示唆、FAQの順で見出しを作ると、公開後の読みやすさが安定します。",
  },
  {
    title: "Step 3. 根拠リンクを明示する",
    body: "主張ごとに根拠元を残し、更新日を併記します。公開後の信頼性に直結します。",
  },
  {
    title: "Step 4. 公開範囲を設定する",
    body: "外部公開か限定共有かを決め、誤って機密情報が含まれないように最終確認します。",
  },
  {
    title: "Step 5. 配布導線を設計する",
    body: "SNS、社内共有、ブログ転用の導線を作り、ページ公開後の活用を先に決めます。",
  },
] as const;

const publishRows = [
  {
    item: "公開範囲",
    point: "全体公開 / 限定共有を明確化",
    mistake: "意図せず全体公開してしまう",
  },
  {
    item: "更新日",
    point: "見出し近くに記載",
    mistake: "古い情報が新しい情報として読まれる",
  },
  {
    item: "責任者",
    point: "更新担当を1人決める",
    mistake: "誰も更新せず陳腐化する",
  },
  {
    item: "再利用導線",
    point: "ブログ化/SNS展開を事前設計",
    mistake: "公開して終わりになる",
  },
] as const;

const seoRows = [
  {
    area: "タイトル",
    rule: "検索意図と対象読者を明示",
    example: "Perplexity Pages使い方｜公開・共有・SEO活用",
  },
  {
    area: "冒頭3行",
    rule: "結論を先出しし、読む価値を明示",
    example: "何がわかるか、誰向けか、どこまで扱うかを短く書く",
  },
  {
    area: "見出し構造",
    rule: "問い→答えの順で並べる",
    example: "何ができるか → どう作るか → どう運用するか",
  },
  {
    area: "FAQ",
    rule: "実務で迷う点を6問以上入れる",
    example: "公開範囲、更新頻度、SEO、共同編集など",
  },
] as const;

const operationChecklist = [
  "公開前レビュー担当を固定する",
  "月1回はリンク切れと古い数値を確認する",
  "更新履歴に変更理由を残す",
  "Pagesの成果をブログへ転用し、検索流入を積み上げる",
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "調査から公開までを短時間で回し、情報発信を業務成果へつなげる力を育てます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "得意分野をテーマ化し、発信実績をキャリア資産として積み上げます。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "公開物を相互レビューし、精度と再現性を継続的に高めます。",
  },
] as const;

function MidArticleCtaBox() {
  return (
    <motion.section
      className="mt-14 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="text-base font-semibold text-emerald-900">Pages初稿を速く作るなら、業種別プロンプトを先に用意する</p>
      <p className="mt-2 text-sm leading-7 text-emerald-900/90">
        LINE登録で「業種別プロンプト50選（bonus05）」を配布中です。Pagesの見出し・要約・FAQ作成を短時間で進められます。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        LINEで特典を受け取る
      </a>
    </motion.section>
  );
}

function LineCtaBox() {
  return (
    <motion.section
      className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="text-base font-semibold text-green-800">Pages運用に効くプロンプト50選を配布中</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        AIリブート通信（無料）で、業種別プロンプト50選（bonus05）を受け取れます。Perplexity Pagesの継続運用を仕組み化したい方におすすめです。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐLINEで受け取る
      </a>
    </motion.section>
  );
}

export default function PerplexityPagesGuidePage({ faqItems }: PerplexityPagesGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Perplexity Pages使い方ガイド" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
                title="Perplexity Pages使い方ガイド｜公開・共有・SEO活用の実務手順【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Perplexity Pages使い方ガイド｜公開・共有・SEO活用の実務手順【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Perplexity Pagesは、調査結果を公開可能な構造に変換できる点が強みです。一般的なPerplexity入門とは役割が違い、
            情報公開と更新運用まで含めて設計する必要があります。確認日: 2026-02-20。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-blue-900">結論（Answer Box）</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {answerPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="difference"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Perplexity一般利用との違い。Pagesは「公開資産化」が目的</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            通常のPerplexity活用は一問一答が中心です。一方Pagesは、調査結果を見出し構造付きで共有できるため、
            社内ナレッジ化や外部公開の土台に使えます。基本操作を確認したい場合は
            <Link href="/academy/blog/perplexity-ai-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Perplexity一般ガイド
            </Link>
            を先に確認してください。
          </p>
        </motion.section>

        <motion.section
          id="build-flow"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Pages作成フロー。5ステップで公開可能な形に整える</h2>
          <div className="mt-6 space-y-4">
            {flowSteps.map((step) => (
              <section key={step.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-subtle">
                <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="publish"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">公開・共有の実務設定。事故を防ぐための4チェック</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">設定項目</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">推奨方針</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">よくある失敗</th>
                </tr>
              </thead>
              <tbody>
                {publishRows.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="px-4 py-3">{row.point}</td>
                    <td className="py-3 pl-4">{row.mistake}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <MidArticleCtaBox />

        <motion.section
          id="seo"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">SEOを意識した構成設計。公開後の見つかりやすさを上げる</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">要素</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">実装ルール</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">記述例</th>
                </tr>
              </thead>
              <tbody>
                {seoRows.map((row) => (
                  <tr key={row.area} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.area}</th>
                    <td className="px-4 py-3">{row.rule}</td>
                    <td className="py-3 pl-4">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="operations"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">運用ルールと更新管理。公開後に価値を落とさない</h2>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {operationChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
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
              <section key={item.question} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <LineCtaBox />

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-orange-900">発信を成果につなげるには、公開後の運用設計まで学ぶ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {academyPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-lg border border-orange-200 bg-white p-4">
                <h3 className="text-base font-semibold text-gray-900">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              アカデミーの学習設計を見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}

