"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type SkillsForAiEraCareerPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const roleSkillSections = [
  {
    role: "営業職",
    summary: "顧客理解と提案速度を高めるため、営業プロセスへAIを組み込む力が重要です。",
    skills: [
      "AI営業支援ツール活用: 商談準備、提案下書き、フォロー文面の初稿を高速化する",
      "データ分析: 商談履歴や受注データから次アクションを判断する",
    ],
  },
  {
    role: "マーケ職",
    summary: "企画から運用、改善までの回転数を上げるためのAI活用が求められます。",
    skills: [
      "生成AIコンテンツ制作: 記事構成、広告文、LPドラフトの試作を効率化する",
      "AIアナリティクス: 施策データを要約し、改善仮説を素早く立てる",
    ],
  },
  {
    role: "管理職",
    summary: "個人活用を組織成果につなげるため、方針策定と導入推進の両方が必要です。",
    skills: [
      "AI戦略立案: 目的、対象業務、評価指標を明確にする",
      "チームへのAI導入推進: 小さな成功事例を作り、運用へ定着させる",
    ],
  },
  {
    role: "事務職",
    summary: "定型業務の効率化と品質担保を両立するため、業務分解と自動化設計が鍵になります。",
    skills: [
      "RPA×AI自動化: 入力・集計・報告作成の流れを半自動化する",
      "ドキュメントAI活用: 議事録や申請書作成の時間を短縮する",
      "運用設計: 手順とチェック項目を標準化し、チームで再現できる形に落とし込む",
    ],
  },
  {
    role: "クリエイティブ職",
    summary: "企画意図を維持しながら制作速度を上げるため、AIを補助線として使う力が重要です。",
    skills: [
      "画像/動画AI活用: コンセプト案やラフ素材の作成を加速する",
      "AIアシスト制作: 人の判断で最終品質を担保しながら工程を最適化する",
    ],
  },
] as const;

const learnOrder = [
  {
    title: "共通基礎を固める",
    body: "課題の言語化、プロンプト設計、出力検証の基本を身につけます。ClaudeのProjectsなどで業務テーマごとに指示・素材を整理すると、定着しやすくなります。",
  },
  {
    title: "職種別スキルを深める",
    body: "営業なら提案、マーケなら施策検証など、成果に直結する業務から優先して学習します。",
  },
  {
    title: "効果測定しながら運用する",
    body: "作業時間、品質、意思決定速度などを指標にし、AI活用を継続改善します。",
  },
] as const;

const keywordTags = ["AI時代 必要なスキル", "職種別AIスキル", "AI時代 キャリア戦略"] as const;

const tocItems = [
  { id: "what-changes", label: "AI時代に変わること / 変わらないこと" },
  { id: "role-based-skills", label: "職種別に必須のAIスキル" },
  { id: "career-expansion", label: "「AIに奪われる仕事」ではなく「AIで拡張される仕事」へ" },
  { id: "learning-order", label: "学習順序の提案" },
  { id: "faq", label: "FAQ" },
] as const;

export default function SkillsForAiEraCareerPage({ faqItems }: SkillsForAiEraCareerPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI時代の必須スキル" },
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
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI時代に必要なスキルを職種別に解説｜2026年版キャリア戦略
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AI時代とは、「何を学べばいいか」を間違えると、ツール収集だけが増えて成果につながりません。
            この記事では、職種別に必要なスキルと、共通基礎→職種別活用→成果物づくりの学習順序を結論先出しで整理します。
            筆者はまず「今の仕事で改善したい業務」を1つ選んで、そこから必要スキルを逆算するのが最短だと感じています。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-changes" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI時代に変わること / 変わらないこと
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            変わるのは「初動の速度」、変わらないのは「課題設定と最終判断の責任」です。だからこそ“判断をAIで拡張する力”が重要になります。
          </p>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700">
            <p>変わることは、情報収集や下書き作成の初動速度です。AIで検討サイクルを増やせます。</p>
            <p>変わらないことは、課題設定と最終判断の責任です。成果を左右するのは人の判断です。</p>
            <p>だからこそ、AI時代のキャリアでは「人の判断をAIで拡張する力」が重要になります。</p>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="role-based-skills" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            職種別に必須のAIスキル
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            共通基礎を押さえたら、職種ごとに「成果に直結する業務」からAI活用を組み込みます。抽象論より、現場のタスク単位に落とすほど習得が早くなります。
          </p>
          <div className="mt-8 space-y-9">
            {roleSkillSections.map((section, index) => (
              <motion.section
                key={section.role}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-lg border border-gray-200 p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900">{section.role}</h3>
                <p className="mt-4 text-base leading-8 text-gray-700">{section.summary}</p>
                <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-gray-700">
                  {section.skills.map((skill) => (
                    <li key={skill} className="pl-1 marker:text-gray-500">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="career-expansion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            「AIに奪われる仕事」ではなく「AIで拡張される仕事」へ
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            AIの価値は代替だけではなく「提案力・判断力へ時間を振り向ける」ことです。職種を問わず、価値の出し方を拡張できます。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="learning-order" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            学習順序の提案
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            「共通基礎 → 職種別スキル → 効果測定」の順で進めると、学習が実務成果につながりやすくなります。ツールを増やす前に、検証と改善の型を作りましょう。
          </p>
          <ol className="mt-7 space-y-7">
            {learnOrder.map((item, index) => (
              <li key={item.title} className="border-t border-gray-200 pt-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  Step {index + 1}. {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            FAQ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: まずは共通基礎と「自分の職種の始めどころ」を押さえるのが近道です。よくある疑問をQ&Aで整理します。
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

        <section className="mt-14 border-t border-slate-200 pt-12 pb-4">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-career-change-cases" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI時代のキャリアチェンジ事例（構成例）｜転換と成長のパターンを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/g-e-certification-comparison"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                G検定とE検定の違いを徹底比較｜難易度・費用・向いている人を解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-coding-for-beginners"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-engineer-career-change"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                未経験からAIエンジニアへの転職ロードマップ｜学習手順と準備を解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/reskilling-over-40" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                40代・50代からのAIリスキリング完全ガイド｜経験を強みに学び直す方法 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人のための生成AI学習ロードマップ｜0→100日で実務活用レベルへ | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-school-for-working-adults"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人向けAIスクールの選び方ガイド｜失敗しない比較ポイントを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="personalized-learning-strategy" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            職種に合う学習戦略を設計したい方へ
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            実務で使えるスキルから着実に積み上げるのが最短です。無料セミナー/個別相談で、あなたの職種に合う学習順序を整理できます。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーに参加する
            </Link>
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              個別相談を申し込む
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
