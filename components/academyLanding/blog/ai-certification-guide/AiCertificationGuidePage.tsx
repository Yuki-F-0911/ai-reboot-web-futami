"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
    certifications: "E検定 / Google Cloud Professional ML Engineer",
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
    items: "E検定、AWS Certified Machine Learning - Specialty、Google Cloud Professional ML Engineer、AI実装検定S級",
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
    name: "E検定",
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
    organizer: "DS協会",
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
    body: "E検定で理論を固めた上で、AWSまたはGCPのML系資格で運用スキルを補強すると実務に接続しやすくなります。",
  },
  {
    title: "非エンジニアの第一歩",
    body: "まずはG検定でAIの全体像を理解し、日常業務での活用テーマを1つ決めて実践するのが最短です。",
  },
] as const;

const selfStudySteps = [
  "1か月目: G検定またはDS検定の公式シラバスと問題集で基礎固め",
  "2か月目: Python演習やミニ課題で実装・分析の体験を追加",
  "3か月目以降: 目標職種に合わせてE検定/AWS/GCPへ拡張",
] as const;

const schoolBenefits = [
  "実務テーマに沿った課題で、資格学習を業務成果へ変換しやすい",
  "講師フィードバックで学習停滞を防ぎ、ロードマップを短縮しやすい",
  "補助金対象制度を活用して、学習投資の負担を調整できる",
] as const;

export default function AiCertificationGuidePage({ faqItems }: AiCertificationGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold tracking-wide text-gray-500">AI資格 おすすめ / AI資格 一覧 / AI資格 難易度</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI資格おすすめ一覧｜難易度・費用・活かせる仕事を徹底比較【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">この記事は2026年2月16日に更新されました</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AI資格選びで迷う人向けに、主要資格を「難易度」「費用」「活かせる仕事」で整理しました。結論として、AI資格は目的で選ぶのが正解です。
            ビジネス活用ならG検定、技術職ならE検定、実装力ならAI実装検定が有力候補です。
          </p>
        </motion.header>

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">結論先出し</h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AI資格は目的で選ぶのが正解です。ビジネス活用ならG検定、技術職ならE検定、実装力ならAI実装検定がおすすめです。
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
          <h2 className="text-2xl font-bold text-gray-900">AI資格の全体マップ</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AI資格は「ビジネス系」「技術系」「実装系」の3軸で見ると、選ぶべき順序が明確になります。まず現在の業務と目標職種を決めた上で、
            軸と難易度を合わせるのが失敗しにくい選び方です。
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
          <h2 className="text-2xl font-bold text-gray-900">主要AI資格の詳細比較表</h2>
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
            受験費用と制度情報は2026年2月16日時点の公式公表値です。学習期間目安は公式の固定値ではなく、受験者の一般的な準備期間に基づく編集部目安です。
            {/* TODO: 要ファクト確認 - G検定公式サイトで最新情報を確認 */}
            {/* TODO: 要ファクト確認 - E検定公式サイトで最新情報を確認 */}
            {/* TODO: 要ファクト確認 - AI実装検定公式サイトで最新情報を確認 */}
            {/* TODO: 要ファクト確認 - DS検定公式サイトで最新情報を確認 */}
            {/* TODO: 要ファクト確認 - AWS Certified Machine Learning - Specialty公式ページで最新情報を確認 */}
            {/* TODO: 要ファクト確認 - Google Cloud Professional ML Engineer公式ページで最新情報を確認 */}
            {/* TODO: 要ファクト確認 - Python 3 エンジニア認定データ分析試験公式ページで最新情報を確認 */}
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
                <a href="https://www.datascientist.or.jp/dss/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
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
          <h2 className="text-2xl font-bold text-gray-900">目的別おすすめ</h2>
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
          <h2 className="text-2xl font-bold text-gray-900">学習方法とロードマップ</h2>
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
            AIリブートアカデミーは資格取得特化ではなく、現場で使える実務活用力を伸ばす設計です。資格学習で得た知識を実務成果へ変える補助線として使うと効果的です。
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
          <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
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
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
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
              <Link href="/academy/subsidy-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                補助金ガイド
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
          <h2 className="text-2xl font-bold text-gray-900">無料セミナー / 個別相談</h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            資格の勉強で得た知識を「現場で使える形」に落とし込みたい方は、無料セミナーで学習戦略を整理できます。受講前の個別相談では、現職・目標に合わせた実務ロードマップを確認できます。
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
