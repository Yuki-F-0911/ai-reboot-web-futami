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

type AiCertificationGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const mapAxes = [
  {
    axis: "ビジネス系",
    summary: "AIの仕組みと活用の共通知識を学び、企画・営業・管理職の意思決定に活かす領域です。",
    certifications: "G検定 / DS検定",
  },
  {
    axis: "技術系",
    summary: "機械学習・深層学習の理論と設計を扱い、AIエンジニアとしての基礎体力を高める領域です。",
    certifications: "E資格 / Google Cloud Professional ML Engineer",
  },
  {
    axis: "実装系",
    summary: "モデル実装やクラウド運用までを含め、実務でAIを動かすスキルを証明する領域です。",
    certifications: "AI実装検定 / AWS Certified Machine Learning - Specialty / Python 3 エンジニア認定データ分析試験",
  },
] as const;

const difficultyLevels = [
  {
    level: "入門",
    items: "G検定、DS検定、Python 3 エンジニア認定データ分析試験",
    note: "非エンジニアや初学者が最初に取り組みやすい層。",
  },
  {
    level: "中級",
    items: "AI実装検定A級",
    note: "基礎知識を前提に、実装や運用へ広げる層。",
  },
  {
    level: "上級",
    items: "E資格、AWS Certified Machine Learning - Specialty、Google Cloud Professional ML Engineer、AI実装検定S級",
    note: "理論理解と実務経験を求められやすい層。",
  },
] as const;

const comparisonRows = [
  {
    name: "G検定",
    organizer: "JDLA",
    difficulty: "入門〜中級",
    fee: "一般13,200円 / 学生5,500円",
    period: "1〜2か月",
    fit: "非エンジニア、企画・営業、社内DX推進担当",
  },
  {
    name: "E資格",
    organizer: "JDLA",
    difficulty: "上級",
    fee: "一般33,000円 / 学生22,000円 / 会員27,500円",
    period: "3〜6か月",
    fit: "AIエンジニア志望、理論を体系的に学びたい人",
  },
  {
    name: "AI実装検定",
    organizer: "AI実装検定実行委員会",
    difficulty: "B級: 入門 / A級: 中級 / S級: 上級",
    fee: "B級9,900円 / A級14,850円 / S級33,000円",
    period: "2〜6か月（級による）",
    fit: "実装力を証明したい開発職・学習者",
  },
  {
    name: "データサイエンティスト検定（DS検定）",
    organizer: "一般社団法人データサイエンティスト協会",
    difficulty: "入門〜中級",
    fee: "一般10,000円（税抜） / 学生5,000円（税抜）",
    period: "1〜3か月",
    fit: "データ活用職、DX企画、アナリティクス担当",
  },
  {
    name: "AWS Certified Machine Learning - Specialty",
    organizer: "AWS",
    difficulty: "上級",
    fee: "300 USD（Specialty/Professional試験）",
    period: "3〜6か月",
    fit: "AWS上で機械学習基盤を扱うエンジニア（2026-03-31で試験終了予定）",
  },
  {
    name: "Google Cloud Professional ML Engineer",
    organizer: "Google Cloud",
    difficulty: "上級",
    fee: "200 USD + 税",
    period: "3〜6か月",
    fit: "GCPでモデル運用・最適化を行うエンジニア",
  },
  {
    name: "Python 3 エンジニア認定データ分析試験",
    organizer: "Pythonエンジニア育成推進協会",
    difficulty: "入門〜中級",
    fee: "一般11,000円 / 学生5,500円",
    period: "1〜3か月",
    fit: "Pythonで分析業務を始めたい初学者・実務担当",
  },
] as const;

const recommendationItems = [
  {
    title: "転職に有利な資格",
    body: "G検定で基礎知識を証明し、実務での改善実績をセットで示すのが効果的です。資格だけでなく成果物が評価されます。",
  },
  {
    title: "社内DX推進に役立つ資格",
    body: "全社の共通言語を作るならG検定、データ活用を具体化するならDS検定が選びやすいです。",
  },
  {
    title: "AIエンジニアを目指す人",
    body: "E資格で理論を固めた上で、AWSまたはGCPのML系資格で運用スキルを補強すると実務に接続しやすくなります。",
  },
  {
    title: "非エンジニアの第一歩",
    body: "まずはG検定でAIの全体像を理解し、日常業務での活用テーマを1つ決めて実践するのが最短です。",
  },
] as const;

const selfStudySteps = [
  "1か月目: G検定またはDS検定の公式シラバスと問題集で基礎固め",
  "2か月目: Python演習やミニ課題で実装・分析の体験を追加",
  "3か月目以降: 目標職種に合わせてE資格/AWS/GCPへ拡張",
] as const;

const schoolBenefits = [
  "実務テーマに沿った課題で、資格学習を業務成果へ変換しやすい",
  "講師フィードバックで学習停滞を防ぎ、ロードマップを短縮しやすい",
  "補助金対象制度を活用して、学習投資の負担を調整できる",
] as const;

const keywordTags = ["AI資格おすすめ", "AI資格一覧", "AI資格難易度"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "ai-certification-map", label: "AI資格の全体マップ" },
  { id: "certification-comparison", label: "主要AI資格の詳細比較表" },
  { id: "recommended-by-goal", label: "目的別おすすめ" },
  { id: "learning-roadmap", label: "学習方法とロードマップ" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

export default function AiCertificationGuidePage({ faqItems }: AiCertificationGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI資格ガイド" },
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
                title="AI資格おすすめ一覧｜難易度・費用・活かせる仕事を徹底比較【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI資格おすすめ一覧｜難易度・費用・活かせる仕事を徹底比較【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AI資格は目的で選ぶのが正解です。
            この記事では、主要資格を難易度・費用・活かせる仕事で比較し、目的別のおすすめと学習ロードマップまで整理します。
            AI資格は種類が多く、目的が曖昧だと「勉強したのに活かせない」状態になりがちです。
          </p>
        </motion.header>

        <section className="mt-8 rounded-lg border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-base font-bold text-gray-900">この記事でわかること</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1">AI資格はビジネス系・技術系・実装系の3軸で整理でき、目的で選ぶと遠回りしません</li>
            <li className="pl-1">G検定・E検定・AI実装検定・DS検定など主要AI資格の難易度・費用・活用場面の比較</li>
            <li className="pl-1">文系・非エンジニアから始めやすい資格の選び方</li>
            <li className="pl-1">資格取得とスクール受講の使い分け方</li>
          </ul>
        </section>

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
          <p className="mt-4 text-base leading-8 text-gray-700">
            AI資格は目的で選ぶのが正解です。ビジネス活用ならG検定、技術職ならE資格、実装力ならAI実装検定がおすすめです。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="LINE登録で30日AI学習プランを受け取る"
            href="https://bexn9pao.autosns.app/line?src=blog&slug=ai-certification-guide"
          />
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="ai-certification-map" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI資格の全体マップ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AI資格は「ビジネス系」「技術系」「実装系」の3軸で見ると、選ぶべき順序が明確になります。現在の業務と目標職種に合わせて軸を決めましょう。
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {mapAxes.map((item, index) => (
              <motion.section
                key={item.axis}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-lg border border-gray-200 p-5"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.axis}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.summary}</p>
                <p className="mt-4 text-sm font-medium leading-7 text-gray-900">{item.certifications}</p>
              </motion.section>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">難易度レベル（入門 → 中級 → 上級）</h3>
            <dl className="mt-5 space-y-5">
              {difficultyLevels.map((level) => (
                <div key={level.level}>
                  <dt className="text-sm font-semibold text-gray-900">{level.level}</dt>
                  <dd className="mt-1 text-sm leading-7 text-gray-700">{level.items}</dd>
                  <dd className="text-xs leading-6 text-gray-500">{level.note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="certification-comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            主要AI資格の詳細比較表
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            受験費用は公式サイト公表値を基準に整理しています。難易度と学習期間は、公式シラバスと一般的な学習報告をもとにした目安です。
          </p>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[960px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">資格名</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">主催</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">難易度</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">費用</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">学習期間目安</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている人</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.name} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.name}</th>
                    <td className="py-4 px-4">{row.organizer}</td>
                    <td className="py-4 px-4">{row.difficulty}</td>
                    <td className="py-4 px-4">{row.fee}</td>
                    <td className="py-4 px-4">{row.period}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-6 text-gray-500">
            受験費用と制度情報は2026年2月時点の公式公表値です。学習期間目安は公式の固定値ではなく、受験者の一般的な準備期間に基づく編集部目安です。
          </p>
          <div className="mt-7 rounded-lg border border-gray-200 bg-gray-50 p-5 text-sm leading-7 text-gray-700">
            <h3 className="text-base font-semibold text-gray-900">比較表の出典（公式）</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>
                <a href="https://www.jdla.org/certificate/general/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  JDLA G検定（受験概要）
                </a>
              </li>
              <li>
                <a href="https://www.jdla.org/certificate/engineer/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  JDLA E資格（受験概要）
                </a>
              </li>
              <li>
                <a href="https://kentei.ai/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  AI実装検定 公式サイト
                </a>
              </li>
              <li>
                <a href="https://www.datascientist.or.jp/dscertification/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  データサイエンティスト検定（DS検定）
                </a>
              </li>
              <li>
                <a href="https://aws.amazon.com/jp/certification/certified-machine-learning-specialty/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  AWS Certified Machine Learning - Specialty
                </a>
              </li>
              <li>
                <a href="https://aws.amazon.com/jp/certification/faqs/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  AWS Certification FAQ（試験料金）
                </a>
              </li>
              <li>
                <a href="https://cloud.google.com/learn/certification/machine-learning-engineer" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  Google Cloud Professional ML Engineer
                </a>
              </li>
              <li>
                <a href="https://www.odyssey-com.co.jp/cbt/python/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  Python 3 エンジニア認定試験（データ分析）
                </a>
              </li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="recommended-by-goal" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            目的別おすすめ
          </h2>
          <div className="mt-6 space-y-4">
            {recommendationItems.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="learning-roadmap" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            学習方法とロードマップ
          </h2>
          <h3 className="mt-6 text-xl font-semibold text-gray-900">独学で進める場合</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {selfStudySteps.map((step) => (
              <li key={step} className="pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-xl font-semibold text-gray-900">スクールを活用する場合</h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーは資格取得のためのスクールではなく、学びを「自分の価値×AI」で実務アウトプットとキャリア再構築につなげる設計です。
            資格学習で得た知識も、Will（やりたいこと）と結びつけて現場で再現できる形に落とし込み、仲間との対話・協働で学習を加速させると効果的です。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {schoolBenefits.map((benefit) => (
              <li key={benefit} className="pl-1 marker:text-gray-500">
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-7 rounded-lg border border-blue-200 bg-blue-50 p-5 text-sm leading-7 text-gray-700">
            <p>
              先に学習の全体像を整理したい方は
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AI学習ロードマップ
              </Link>
              と
              <Link
                href="/academy/blog/skills-for-ai-era-career"
                className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI時代に必要なスキル解説
              </Link>
              もあわせて確認してください。
            </p>
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
            資格は「目的」と「実務での使いどころ」がセットです。迷いやすい論点をQ&Aで整理します。
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
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
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
                href="/academy/blog/skills-for-ai-era-career"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI時代に必要なスキルを職種別に解説
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
                href="/academy/blog/ai-course-ranking"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI講座ランキング2026｜選び方の基準と目的別おすすめを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/education-training-benefit-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                教育訓練給付金でAI講座を受講するガイド｜制度比較と費用の考え方 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/subsidy-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                補助金ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/ai-course-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI講座比較｜失敗しない選び方
              </Link>
            </li>
            <li>
              <Link
                href="/academy/ai-training-for-individuals"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                個人向けAI研修の選び方（独学 vs スクール）
              </Link>
            </li>
            <li>
              <Link href="/academy/seminars" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                無料セミナー一覧
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
          <h2 id="free-seminar-consultation" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            無料セミナー / 個別相談
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            資格で得た知識を「現場で使える形」へ落とし込むには、業務テーマと実行計画まで落とすのが近道です。無料セミナー/個別相談で整理できます。
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
      
        
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">AI資格は目的で選ぶのが正解です。</li>
            <li className="pl-1 marker:text-gray-500">ビジネス活用ならG検定、技術職ならE資格、実装力ならAI実装検定がおすすめです。</li>
            <li className="pl-1 marker:text-gray-500">AI資格は「ビジネス系」「技術系」「実装系」の3軸で見ると、選ぶべき順序が明確になります。</li>
            <li className="pl-1 marker:text-gray-500">資格は「目的」と「実務での使いどころ」がセットです。</li>
            <li className="pl-1 marker:text-gray-500">資格で得た知識を「現場で使える形」へ落とし込むには、業務テーマと実行計画まで落とすのが近道です。</li>
          </ul>
        </motion.section>
<motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のアクション
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AI活用を最短で前に進めたい方へ。無料セミナーやアカデミーの全体像から、次の一歩を選べます。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーを見る
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              アカデミーTOPへ
            </Link>
          </div>
        </motion.section>
</article>
    </main>
  );
}
