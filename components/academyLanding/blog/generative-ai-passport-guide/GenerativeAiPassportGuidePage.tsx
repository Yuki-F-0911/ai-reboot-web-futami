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

type GenerativeAiPassportGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "生成AIパスポート 合格",
  "生成AIパスポート 難易度",
  "生成AIパスポート 勉強法",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "exam-overview", label: "試験概要（主催・難易度・合格率・費用）" },
  { id: "study-hours", label: "勉強時間の目安（20/30/40時間）" },
  { id: "materials-roadmap", label: "おすすめ教材と学習ロードマップ" },
  { id: "question-trends", label: "出題傾向と頻出テーマ" },
  { id: "career-application", label: "取得後の活かし方" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連リンク" },
] as const;

const examOverviewRows = [
  {
    axis: "主催",
    value: "一般社団法人 生成AI活用普及協会（GUGA）",
    note: "試験実施回ごとの要項で最新情報を確認",
  },
  {
    axis: "難易度",
    value: "入門〜初中級（非エンジニアでも対策可能）",
    note: "暗記だけでなく、運用判断を問う設問が出やすい",
  },
  {
    axis: "合格率",
    value: "[要確認: 70〜80%台]（回次で変動）",
    note: "公表値は毎回変わるため、申込前に必ず確認",
  },
  {
    axis: "受験費用",
    value: "一般・学生の区分料金（公式要項を確認）",
    note: "年度・回次で改定される可能性あり",
  },
] as const;

const studyTimeRows = [
  {
    level: "20時間プラン",
    target: "普段からAIチャットを業務で使っている人",
    schedule: "2週間（1日60〜90分）",
    focus: "問題演習中心。弱点分野だけ要点復習して得点効率を上げる",
  },
  {
    level: "30時間プラン",
    target: "AIを断続的に使っているが体系理解が曖昧な人",
    schedule: "3〜4週間（週7〜8時間）",
    focus: "基礎理解と演習を半々で実施。模擬問題で判断問題の精度を上げる",
  },
  {
    level: "40時間プラン",
    target: "これから本格的に学ぶ人・文系初学者",
    schedule: "5〜6週間（週6〜7時間）",
    focus: "用語理解から開始し、後半に問題演習へ移行。復習時間を先に確保する",
  },
] as const;

const roadmapSteps = [
  {
    title: "Step 1: 試験範囲を把握する（最初の2〜3時間）",
    details: [
      "公式シラバスと試験要項を読み、出題カテゴリを一覧化する",
      "「プロンプト設計」「著作権」「リスク管理」の3領域に印を付ける",
      "分からない用語を後回しにせず、最初に定義を確認する",
    ],
  },
  {
    title: "Step 2: 1冊を軸に基礎を固める（8〜15時間）",
    details: [
      "参考書は1冊に絞り、1周目は全体把握、2周目で苦手を重点学習",
      "各章で「何が禁止か」「どう運用するか」を自分の言葉で要約する",
      "理解が曖昧な箇所は、業務シーンを想定して判断基準を整理する",
    ],
  },
  {
    title: "Step 3: 問題演習で正答率を上げる（8〜15時間）",
    details: [
      "間違えた設問は「知識不足」か「読み違い」かを分けて記録する",
      "頻出テーマの設問を繰り返し解き、判断スピードを上げる",
      "週1回は時間を計って解き、本番と同じ条件に慣れる",
    ],
  },
  {
    title: "Step 4: 最終調整（2〜6時間）",
    details: [
      "試験3日前からは新教材を増やさず、間違いノートを優先する",
      "著作権・商用利用・情報漏えいなど、ミスしやすい論点を再確認する",
      "当日の受験環境と開始時刻を事前に確認して、直前トラブルを防ぐ",
    ],
  },
] as const;

const trendCards = [
  {
    title: "プロンプト設計",
    point:
      "目的・前提・制約・出力形式を分けて考える設問が出やすく、曖昧な指示を改善する判断力が問われます。",
    practice: "短いプロンプトを改善して、回答品質がどう変わるかを練習する",
  },
  {
    title: "著作権・商用利用",
    point:
      "AI生成物の利用範囲や権利侵害リスクを問う設問が頻出です。特に画像・文章の二次利用条件は整理して覚える必要があります。",
    practice: "商用利用の可否をケースで判断し、根拠を言語化する",
  },
  {
    title: "リスク管理・ガイドライン",
    point:
      "情報漏えい、機密データ入力、ファクトチェック責任など、実務での運用設計を問う問題が出題されやすいです。",
    practice: "社内利用を想定し、入力NG情報と確認フローを表にして覚える",
  },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

export default function GenerativeAiPassportGuidePage({ faqItems }: GenerativeAiPassportGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AIパスポート試験の合格法2026" },
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
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="生成AIパスポート試験の合格法2026｜勉強時間・おすすめ教材・出題傾向まとめ"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AIパスポート試験の合格法2026｜勉強時間・おすすめ教材・出題傾向まとめ
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月19日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            生成AIパスポートは、AIツールを安全かつ実務で使うための基礎リテラシーを証明しやすい資格です。最短で合格するには、
            「試験範囲を把握する」「勉強時間を自分のレベルに合わせる」「頻出テーマを先に固める」の3点が重要です。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            この記事では、試験概要、勉強時間の目安（20時間/30時間/40時間）、教材の選び方、出題傾向、合格後の活かし方までを一括で整理します。
            独学で進める人が途中で迷わないよう、学習順序も具体化しています。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              難易度は入門〜初中級で、非エンジニアでも計画的に学べば合格を狙える
            </li>
            <li className="pl-1 marker:text-gray-500">
              勉強時間の目安は、AI経験に応じて20時間/30時間/40時間で設計すると進めやすい
            </li>
            <li className="pl-1 marker:text-gray-500">
              頻出は「プロンプト設計」「著作権・商用利用」「リスク管理」。問題演習で判断基準を固める
            </li>
            <li className="pl-1 marker:text-gray-500">
              合格後は資格単体ではなく、業務改善実績と組み合わせると副業・転職で評価されやすい
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="exam-overview" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            生成AIパスポート試験の概要（主催・難易度・合格率・費用）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            最初に試験概要を押さえると、教材選びと学習時間の見積もりが正確になります。特に合格率と費用は回次で変動するため、目安と最新情報の切り分けが重要です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">項目</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">概要</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">確認ポイント</th>
                </tr>
              </thead>
              <tbody>
                {examOverviewRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.value}</td>
                    <td className="py-4 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            「生成AIパスポートは自分に必要か」で迷う場合は、まず
            <Link href="/academy/blog/what-is-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIの基本概念
            </Link>
            を押さえたうえで、資格学習に入ると理解が速くなります。
          </p>
          <p className="mt-4 text-xs leading-6 text-gray-500">※2026年2月時点の情報。最新はJDLA公式サイトを確認</p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="study-hours" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            合格に必要な勉強時間の目安（20時間/30時間/40時間）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            合格率だけを見て学習時間を短く設定すると、判断問題で失点しやすくなります。自分のAIリテラシーに合わせて、最初に時間予算を決めるのが安全です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[880px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">プラン</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">対象者</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">学習期間の目安</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">学習の重点</th>
                </tr>
              </thead>
              <tbody>
                {studyTimeRows.map((row) => (
                  <tr key={row.level} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.level}</th>
                    <td className="py-4 px-4">{row.target}</td>
                    <td className="py-4 px-4">{row.schedule}</td>
                    <td className="py-4 pl-4">{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="mt-10 text-lg font-semibold text-gray-900">学習時間を確保する実務的なコツ</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">平日は30〜45分、休日に90分を固定して、合計時間を先に確保する</li>
            <li className="pl-1 marker:text-gray-500">インプットだけで終わらせず、毎回5問でも演習を入れて定着させる</li>
            <li className="pl-1 marker:text-gray-500">苦手テーマは「用語カード化」して短時間で反復できる形にする</li>
          </ul>
        </motion.section>

        {/* LINE CTA #1 */}
        <motion.section
          className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base font-semibold text-green-800">📩 LINEで毎週AI知識を配信中</p>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
          >
            今すぐ無料で登録する（30秒）
          </a>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="materials-roadmap" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            おすすめ教材と学習ロードマップ（独学向け）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            独学で合格率を上げるには、教材を増やすより学習順序を固定する方が効果的です。最初に1冊を軸にし、足りない論点だけ補助教材を追加します。
          </p>
          <div className="mt-7 space-y-5">
            {roadmapSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {step.details.map((detail) => (
                    <li key={detail} className="pl-1 marker:text-gray-500">
                      {detail}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5 text-sm leading-7 text-gray-700">
            <p>
              学習順序で迷う人は、
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人向け生成AI学習ロードマップ
              </Link>
              と
              <Link
                href="/academy/blog/ai-for-non-engineers"
                className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                文系・非エンジニア向けAI活用ガイド
              </Link>
              を先に読むと、教材選びの精度が上がります。
            </p>
          </div>
        </motion.section>

        {/* LINE CTA #2 */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base font-semibold text-orange-800">📩 LINEで毎週AI知識を配信中</p>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
          >
            今すぐ無料で登録する（30秒）
          </a>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="question-trends" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            出題傾向と頻出テーマ（プロンプト設計/著作権/リスク）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            生成AIパスポートは、単純な用語暗記だけでなく「現場でどの判断が妥当か」を問う設問が増えています。頻出テーマを先に固めると、短時間でも得点効率が上がります。
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {trendCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.point}</p>
                <p className="mt-4 text-xs leading-6 text-gray-500">演習の型: {card.practice}</p>
              </section>
            ))}
          </div>
          <h3 className="mt-10 text-lg font-semibold text-gray-900">失点しやすいポイント</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">「便利だから使う」だけで、利用ルールや責任分担を押さえていない</li>
            <li className="pl-1 marker:text-gray-500">著作権・ライセンスの論点を画像と文章で区別できていない</li>
            <li className="pl-1 marker:text-gray-500">プロンプト改善の設問で、制約条件を読み落としてしまう</li>
          </ul>
          <p className="mt-5 text-xs leading-6 text-gray-500">※2026年2月時点の情報。最新はJDLA公式サイトを確認</p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="career-application" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            取得後にどう活かすか（副業・転職・社内評価）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            合格そのものよりも、資格で得た知識をどう実務成果に変えるかが評価につながります。履歴書に書くだけでなく、成果物と改善実績をセットで提示するのが効果的です。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900">社内評価で活かす</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                業務改善提案、議事録・文書作成の効率化、ガイドライン整備など、部署内で再現できる形で報告すると評価されやすくなります。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900">転職で活かす</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                「資格+実務ポートフォリオ」の組み合わせが有効です。改善前後の工数や品質の変化を数値で示すと、面接での説明が明確になります。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900">副業で活かす</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                プロンプト作成支援、業務マニュアル整備、簡易AI導入アドバイスなど、非開発領域でも受注できる案件を選びやすくなります。
              </p>
            </section>
          </div>
          <div className="mt-8 rounded-lg border border-will-primary/20 bg-will-lighter p-6">
            <h3 className="text-lg font-semibold text-gray-900">資格学習をキャリアに接続する3本柱</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">
                生成AI活用力: 試験知識を日常業務へ落とし、使えるスキルとして定着させる
              </li>
              <li className="pl-1 marker:text-gray-500">
                自己理解・キャリアデザイン: 得意領域と価値観を整理し、次の職種や役割を具体化する
              </li>
              <li className="pl-1 marker:text-gray-500">
                仲間と共に学ぶ環境: 対話と相互レビューで学習継続率を高め、実装速度を上げる
              </li>
            </ul>
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
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            受験直前に迷いやすい論点をQ&Aで整理します。勉強時間、独学、参考書、出題傾向の順で確認してください。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>

          {/* LINE CTA #3（FAQ末尾） */}
          <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-6">
            <p className="text-base font-semibold text-green-800">📩 LINEで毎週AI知識を配信中</p>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
            </p>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
            >
              今すぐ無料で登録する（30秒）
            </a>
          </div>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/what-is-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AIとは？初心者向けにわかりやすく解説
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人のための生成AI学習ロードマップ
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-for-non-engineers"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                文系・非エンジニアのAI活用ガイド
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-certification-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI資格おすすめ一覧｜難易度・費用を比較
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/g-e-certification-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                G検定とE検定の違いを徹底比較
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
