"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import { ArticleH2, ArticleH3, SummaryBox, RichFAQ, RichTable, Callout } from "@/components/blog/ArticleBody";

type FAQItem = {
  question: string;
  answer: string;
};

type AiSideBusinessGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const sideBusinessTypes = [
  {
    title: "ライティング支援",
    description:
      "記事構成、要約、下書き作成などを支援する業務です。AIの出力をそのまま納品せず、編集品質を担保する力が重要になります。",
    fit: "既存の文章業務経験がある人と相性がよい傾向があります。",
  },
  {
    title: "データ分析支援",
    description:
      "集計、可視化、分析コメント整理などを行う業務です。AIは仮説出しの補助に使い、最終判断は人が行う運用が一般的です。",
    fit: "表計算やBIツールに慣れている人が始めやすい領域です。",
  },
  {
    title: "業務自動化の構築支援",
    description:
      "ノーコードやスクリプトを使って定型作業を自動化する業務です。業務要件のヒアリングと例外処理の設計が成果を左右します。",
    fit: "業務改善経験や基本的なITリテラシーがある人に向いています。",
  },
  {
    title: "AI活用コンサル支援",
    description:
      "課題整理、導入方針の策定、運用ルール設計を支援する業務です。提案力と実行支援のバランスが求められます。",
    fit: "現職での業務知識を活かしやすい領域です。",
  },
] as const;

const learningSteps = [
  {
    step: "Step 1",
    title: "領域を絞る",
    detail:
      "副業テーマを広げすぎると学習が分散します。まずは1職種に絞り、必要スキルを明確化することが重要です。",
  },
  {
    step: "Step 2",
    title: "基礎スキルを固める",
    detail:
      "AIツールの操作だけでなく、成果物の品質基準、著作権・機密情報の扱い、レビュー手順まで学ぶ必要があります。",
  },
  {
    step: "Step 3",
    title: "小さな成果物を作る",
    detail:
      "架空案件よりも、実務に近い成果物を継続的に作るほうが評価されやすくなります。実績の再現性を示すことが大切です。",
  },
  {
    step: "Step 4",
    title: "案件獲得と改善を繰り返す",
    detail:
      "受注初期は期待値調整を丁寧に行い、納品後レビューを次案件へ反映します。継続案件を増やすには改善運用が不可欠です。",
  },
] as const;

const skillLevelRows = [
  {
    role: "ライティング支援",
    baseline: "文章構成・校正の基本を理解している",
    aiSkill: "プロンプト改善と編集ルール設計ができる",
  },
  {
    role: "データ分析支援",
    baseline: "集計・可視化の基本操作ができる",
    aiSkill: "分析観点の整理と解釈の検証ができる",
  },
  {
    role: "業務自動化支援",
    baseline: "業務フローを分解して説明できる",
    aiSkill: "自動化範囲と例外処理を設計できる",
  },
  {
    role: "AI活用コンサル支援",
    baseline: "業務課題を構造化して整理できる",
    aiSkill: "導入方針と運用ルールを提案できる",
  },
] as const;

const cautions = [
  {
    title: "就業規則の確認",
    body: "副業可否、競業避止、情報持ち出し制限を事前に確認してください。会社ごとのルール差が大きいため、必ず明文化された規定を確認します。",
  },
  {
    title: "確定申告の準備",
    body: "収入と経費の記録を早い段階で始めることで、年度末の負担を抑えやすくなります。税務の詳細は専門家への相談も検討してください。",
  },
  {
    title: "クライアントとの期待値調整",
    body: "AI活用の範囲、納品品質、修正回数のルールを最初に合意することが重要です。認識差を残したまま進めるとトラブルの原因になります。",
  },
] as const;

const keywordTags = ["副業 AI 始め方", "フリーランス AI 仕事", "キャリア・転職"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "side-business-types", label: "AIスキルで始められる副業の種類" },
  { id: "learning-steps", label: "副業を始めるまでの学習ステップ" },
  { id: "skill-level", label: "必要なスキルレベルの目安（職種別）" },
  { id: "cautions", label: "注意点（就業規則、確定申告、期待値調整）" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

export default function AiSideBusinessGuidePage({ faqItems }: AiSideBusinessGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "副業でAIを活用する始め方" },
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
              <CopyAsMarkdownButton title="副業でAIを活用する始め方ガイド" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            副業でAIを活用する始め方ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            副業でAIを活用する際は、まず対象領域を絞り、成果物の品質を担保できる運用を作ることが重要です。
            この記事では、副業タイプ・学習ステップ・必要スキルの目安・実務上の注意点を結論先出しで整理します。
            AI副業とは、「何を売ればいいか」「どこまでAIに任せていいか」で迷うと、準備が長引きがちです。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプロンプト入門
          </Link>
          ・
          <Link href="/academy/blog/ai-coding-for-beginners" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIコーディング入門
          </Link>
          ・
          <Link href="/academy/blog/ai-first-30-days-work-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AI最初の30日ガイド
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
        </p>
        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox
            title="要点まとめ（AIO向け：結論先出し）"
            items={[
              "副業でAIを活用する際は、まず対象領域を絞り、成果物の品質を担保できる運用を作ることが重要です。",
              "一般的には、学習と小規模実績の蓄積を並行するほど、継続案件へつながりやすい傾向があります。",
              "最初は「自分の経験に近い領域」から始めるのが安全です。",
              "必要スキルは「AI操作」よりも、納品品質を担保するための業務スキル（前提整理・修正対応・例外処理）で決まります。",
            ]}
          />
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="side-business-types">
            AIスキルで始められる副業の種類（ライティング支援、データ分析、自動化構築、コンサル等）
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            最初は「自分の経験に近い領域」から始めるのが安全です。提案と納品の精度が上がり、継続案件につながりやすくなります。
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {sideBusinessTypes.map((item, index) => (
              <motion.section
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow"
              >
                <ArticleH3>{item.title}</ArticleH3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.description}</p>
                <p className="mt-3 text-sm font-medium leading-7 text-gray-900">{item.fit}</p>
              </motion.section>
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
          <ArticleH2 id="learning-steps">
            副業を始めるまでの学習ステップ
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            学習を長期化させないために、最初から「実務化」を前提に段階を区切りましょう。準備と実践を並行すると進みやすくなります。
          </p>
          <div className="mt-7 space-y-4">
            {learningSteps.map((item) => (
              <section key={item.step} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <p className="text-sm font-semibold tracking-wide text-orange-600">{item.step}</p>
                <ArticleH3>{item.title}</ArticleH3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
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
          <ArticleH2 id="skill-level">
            必要なスキルレベルの目安（職種別）
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            必要スキルは「AI操作」よりも、納品品質を担保するための業務スキル（前提整理・修正対応・例外処理）で決まります。目安として整理します。
          </p>
          <RichTable className="mt-7">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 font-bold text-gray-900">職種</th>
                <th className="py-4 px-6 font-bold text-gray-900">ベーススキル</th>
                <th className="py-4 px-6 font-bold text-gray-900">AI活用で求められやすい力</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {skillLevelRows.map((row) => (
                <tr key={row.role} className="hover:bg-gray-50/50 transition-colors align-top">
                  <th className="py-4 px-6 font-bold text-gray-900 bg-gray-50/30 whitespace-nowrap">{row.role}</th>
                  <td className="py-4 px-6 text-gray-700">{row.baseline}</td>
                  <td className="py-4 px-6 text-gray-700">{row.aiSkill}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="cautions">
            注意点（就業規則、確定申告、クライアントとの期待値調整）
          </ArticleH2>
          <Callout type="warning" title="始める前に確認すべき3つのポイント">
            トラブル回避の鍵は、就業規則（副業可否）、税務（確定申告の準備）、クライアントとの期待値（AI活用範囲と品質担保）の3点を先に揃えることです。
          </Callout>
          <div className="mt-6 space-y-4">
            {cautions.map((item) => (
              <section key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>{item.title}</ArticleH3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.055 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="faq">
            よくある質問（FAQ）
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            まずは「避けるべき地雷」を先に潰すのが安全です。未経験からの始め方、説明責任、社内ルール、税務をQ&Aで整理します。
          </p>
          <RichFAQ items={faqItems} />
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-6 text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            関連リンク
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            <li>
              <Link href="/academy/blog/prompt-template-for-work" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成をAIで効率化
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-coding-for-beginners" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-course-ranking" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                AI講座ランキング2026｜選び方の基準と目的別おすすめを解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-certification-guide" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                AI資格おすすめ一覧｜難易度・費用・活かせる仕事を徹底比較【2026年版】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/g-e-certification-comparison" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                G検定とE検定の違いを徹底比較｜難易度・費用・向いている人を解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-freelance-work-guide" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                フリーランス・副業のAI活用術｜提案・作業・請求まで効率化する実践ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox
            title="まとめ"
            items={[
              "副業でAIを活用する際は、まず対象領域を絞り、成果物の品質を担保できる運用を作ることが重要です。",
              "一般的には、学習と小規模実績の蓄積を並行するほど、継続案件へつながりやすい傾向があります。",
              "最初は「自分の経験に近い領域」から始めるのが安全です。",
              "学習を長期化させないために、最初から「実務化」を前提に段階を区切りましょう。",
              "必要スキルは「AI操作」よりも、納品品質を担保するための業務スキル（前提整理・修正対応・例外処理）で決まります。",
            ]}
          />
        </motion.section>

        <motion.section
          className="mt-14 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white shadow-floating"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="text-2xl font-bold">
            副業の第一歩を具体化したい方へ
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-300">
            無理のない範囲で継続できる計画を作るのが最優先です。無料セミナー/個別相談で、あなたの経験に合う進め方を整理できます。
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-xl bg-will-primary px-6 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-will-primary/90 active:scale-[0.98]"
            >
              無料セミナーに参加する
            </Link>
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.98]"
            >
              個別相談を申し込む
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
