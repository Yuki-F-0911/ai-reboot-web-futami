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

type HowToLearnGenerativeAiPageProps = {
  faqItems: readonly FAQItem[];
};

type StageItem = {
  id: string;
  title: string;
  duration: string;
  goal: string;
  tasks: readonly string[];
};

type ComparisonRow = {
  axis: string;
  selfStudy: string;
  school: string;
};

type ResourceItem = {
  name: string;
  purpose: string;
  costNote: string;
  url: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaTitle = "AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）";

const keywordTags = ["生成AI 学び方", "生成AI 勉強法", "生成AI 独学", "AI スキル 習得 方法"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "learning-stages", label: "3つの学習ステージ" },
  { id: "self-study-vs-school", label: "独学 vs スクール比較" },
  { id: "resources-2026", label: "2026年おすすめ学習リソース" },
  { id: "academy-fit", label: "アカデミーが向いている人" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "action-plan", label: "12週間アクションプラン" },
] as const;

const stageItems: readonly StageItem[] = [
  {
    id: "foundation",
    title: "基礎ステージ: 生成AIの前提を理解し、指示の型を固める",
    duration: "1〜4週",
    goal: "1つのツールで、毎日同じ品質で下書きを作れる状態にする",
    tasks: [
      "生成AIの基本原理（確率生成・ハルシネーション・文脈依存）を押さえる",
      "目的・前提・制約・出力形式の4点を明示するプロンプトの型を作る",
      "議事録要約、メール下書き、調査メモの3タスクで反復し、失敗パターンを記録する",
    ],
  },
  {
    id: "practical",
    title: "実務ステージ: 1業務に固定して成果を出す",
    duration: "5〜8週",
    goal: "学習を作業時間短縮と品質改善に接続し、再現可能な運用にする",
    tasks: [
      "対象業務を1つだけ選び、現状工数と品質課題を先に言語化する",
      "生成→レビュー→修正の工程を分け、レビュー観点をチェックリスト化する",
      "週次でBefore/Afterを記録し、改善率が低いプロンプトを捨てる",
    ],
  },
  {
    id: "advanced",
    title: "応用ステージ: 活用判断とキャリア接続を設計する",
    duration: "9〜12週",
    goal: "ツール依存を避け、業務課題ごとに最適な活用方針を選べる状態にする",
    tasks: [
      "複数ツールの比較軸（精度・速度・管理・コスト）を作り、用途別に使い分ける",
      "情報管理ルールと最終判断責任を明確にし、チーム運用に耐える形へ整理する",
      "成果物ポートフォリオを作成し、キャリア転換に使える実績として言語化する",
    ],
  },
] as const;

const comparisonRows: readonly ComparisonRow[] = [
  {
    axis: "初期コスト",
    selfStudy: "低い。無料教材と月額課金で開始できる（目安: 月0〜6,000円）",
    school: "高い。総額10〜60万円帯が中心で、給付・補助適用で実質負担が変動",
  },
  {
    axis: "学習速度",
    selfStudy: "自分次第。寄り道しやすく、設計が甘いと停滞しやすい",
    school: "比較的速い。学習順序と演習課題が定義されていることが多い",
  },
  {
    axis: "フィードバック",
    selfStudy: "自己評価中心。誤りを放置すると癖が固定化しやすい",
    school: "講師やコミュニティからのレビューを得やすい",
  },
  {
    axis: "挫折リスク",
    selfStudy: "中〜高。忙しい週に中断し、そのまま再開できないケースが多い",
    school: "中。強制力は上がるが、目的が曖昧だと受講後に失速する",
  },
  {
    axis: "向いている人",
    selfStudy: "計画設計が得意で、週次レビューを自走できる人",
    school: "短期で実務接続したい人、キャリア転換に向けた伴走が必要な人",
  },
] as const;

const freeResources: readonly ResourceItem[] = [
  {
    name: "OpenAI Academy",
    purpose: "生成AI活用の基礎〜実践の学習コンテンツ",
    costNote: "無料（確認日: 2026-02-20）",
    url: "https://academy.openai.com/",
  },
  {
    name: "Microsoft Learn（生成AI学習パス）",
    purpose: "段階的なモジュール学習で基礎から業務活用まで進める",
    costNote: "無料（確認日: 2026-02-20）",
    url: "https://learn.microsoft.com/ja-jp/training/paths/create-custom-copilots-ai-studio/",
  },
  {
    name: "Google Cloud Skills Boost（Generative AI Leader）",
    purpose: "企業活用視点の体系学習。バッジで進捗管理しやすい",
    costNote: "無料枠あり（詳細は公式で要確認）",
    url: "https://www.cloudskillsboost.google/paths/118",
  },
] as const;

const paidResources: readonly ResourceItem[] = [
  {
    name: "Coursera Plus",
    purpose: "複数の生成AI講座を横断して学びたい人向け",
    costNote: "有料サブスク（地域・時期で価格変動）",
    url: "https://www.coursera.org/courseraplus",
  },
  {
    name: "ChatGPT有料プラン",
    purpose: "日常業務に組み込みながら実践量を増やす",
    costNote: "有料（月額、最新価格は公式参照）",
    url: "https://openai.com/chatgpt/pricing/",
  },
  {
    name: "Claude有料プラン",
    purpose: "長文整理・分析用途を中心に実務検証する",
    costNote: "有料（月額、最新価格は公式参照）",
    url: "https://www.anthropic.com/pricing",
  },
  {
    name: "国内スクール例（Aidemy Premium）",
    purpose: "伴走サポート付きで短期集中したい人向け",
    costNote: "有料（受講費はプラン・時期で変動）",
    url: "https://aidemy.net/grit/premium/",
  },
] as const;

function LineCtaBox({ className }: { className: string }) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-gray-900">{lineCtaTitle}</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        何を学ぶか迷う社会人向けに、週1本で学習テーマを整理して配信しています。忙しい週でも、次にやるべきことを決めやすくなります。
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

export default function HowToLearnGenerativeAiPage({ faqItems }: HowToLearnGenerativeAiPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AIの学び方" },
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
                title="生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 blog-p text-base leading-8 text-gray-700">
            生成AIを学びたい社会人が最初に詰まるのは、ツール選びではなく学習順序です。動画を見て終わる、プロンプトを試して終わる状態だと、仕事の成果に結び付きません。
            この記事では「基礎→実務→応用」の3ステージで、独学でも進められる手順と、スクールを使うべき判断基準を整理します。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            料金・提供内容の確認日: 2026-02-20（OpenAI Academy、Microsoft Learn、Google Cloud Skills Boost、Coursera、OpenAI/Anthropic Pricing、Aidemy公式ページ）
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              生成AI学習は「基礎→実務→応用」の3段階で設計すると、業務接続までの失速を防げます。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              独学は低コストで始めやすく、スクールは学習速度と伴走支援に強みがあります。選定は予算より学習継続力を基準にしてください。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              キャリア転換を見据えるなら、応用ステージで成果物をポートフォリオ化し、提供価値として説明できる状態を目標にします。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
        </motion.section>

        <motion.section
          id="learning-stages"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            3つの学習ステージ（基礎→実務→応用）と、各ステージでやること
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            先に全体像を固定しておくと、途中でツール比較に時間を使いすぎる失敗を防げます。ここでは12週間で回す前提で、各ステージの到達目標を明確化します。
          </p>
          <div className="mt-8 space-y-6">
            {stageItems.map((stage) => (
              <section key={stage.id} className="rounded-lg border border-gray-200 p-6">
                <h3 className="blog-h3 text-xl font-semibold leading-8 text-gray-900">{stage.title}</h3>
                <p className="mt-1 text-sm font-medium text-gray-500">期間目安: {stage.duration}</p>
                <p className="blog-p mt-4 text-sm font-medium leading-7 text-gray-900">到達目標: {stage.goal}</p>
                <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {stage.tasks.map((task) => (
                    <li key={task} className="blog-li pl-1 marker:text-gray-500">
                      {task}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            基礎理解を深める場合は
            <Link href="/academy/blog/what-is-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIとは何か
            </Link>
            、指示設計の精度を上げる場合は
            <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              プロンプト入門ガイド
            </Link>
            、実務での自動化接続は
            <Link href="/academy/blog/ai-coding-for-beginners" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIコーディング入門
            </Link>
            を参照してください。
          </p>
        </motion.section>

        <motion.section
          id="self-study-vs-school"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            独学 vs スクールの比較（メリット・デメリット・コスト）
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            重要なのは「どちらが正しいか」ではなく、今の制約に合う選択をすることです。社会人は学習時間が限られるため、継続設計まで含めて判断してください。
          </p>
          <div className="blog-table mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">独学</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">スクール</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.selfStudy}</td>
                    <td className="py-4 pl-4">{row.school}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            コストは常に変動します。独学は月額課金の積み上げ、スクールは受講料と期間設計で総額が大きく変わるため、比較時は必ず最新料金を公式サイトで再確認してください。
          </p>
        </motion.section>

        <motion.section
          id="resources-2026"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            2026年版おすすめ学習リソース（無料/有料）
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            学習リソースは「何を学ぶか」より「どの段階で使うか」で選ぶと失敗しにくくなります。基礎ステージは無料教材、実務ステージ以降は必要に応じて有料化する順序が現実的です。
          </p>

          <section className="mt-8 rounded-lg border border-green-200 bg-green-50 p-6">
            <h3 className="blog-h3 text-lg font-semibold text-green-900">無料で始めるリソース</h3>
            <ul className="blog-ul mt-4 space-y-4">
              {freeResources.map((item) => (
                <li key={item.name} className="blog-li rounded-md border border-green-200 bg-white p-4">
                  <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{item.purpose}</p>
                  <p className="mt-2 text-xs font-medium text-gray-500">{item.costNote}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex text-sm font-semibold text-green-700 underline underline-offset-4 hover:text-green-800"
                  >
                    公式ページを確認する
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-6">
            <h3 className="blog-h3 text-lg font-semibold text-orange-900">有料で加速するリソース</h3>
            <ul className="blog-ul mt-4 space-y-4">
              {paidResources.map((item) => (
                <li key={item.name} className="blog-li rounded-md border border-orange-200 bg-white p-4">
                  <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{item.purpose}</p>
                  <p className="mt-2 text-xs font-medium text-gray-500">{item.costNote}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex text-sm font-semibold text-orange-700 underline underline-offset-4 hover:text-orange-800"
                  >
                    公式ページを確認する
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
        </motion.section>

        <motion.section
          id="academy-fit"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-blue-900">AIリブートアカデミーが向いている人</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-blue-900">
            次の条件に当てはまる場合、単発学習よりも学習プロセス全体を再設計したほうが成果が出やすくなります。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-900">
            <li className="blog-li pl-1">ツールを触っているが、仕事の成果に接続しきれていない</li>
            <li className="blog-li pl-1">転職・複業・社内役割拡張に向けて、実績を言語化したい</li>
            <li className="blog-li pl-1">一人学習だと継続が難しく、振り返りの場が必要</li>
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-blue-900">
            AIリブートアカデミーでは、<span className="font-semibold">生成AI活用力</span>の習得だけでなく、
            <span className="font-semibold">自己理解・キャリアデザイン</span>、<span className="font-semibold">仲間と共に学ぶ環境</span>
            を一体で設計しています。特定ツールの操作習得より、実務で継続できる判断軸を育てたい方に適した設計です。
          </p>
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

        <motion.section
          id="action-plan"
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">12週間で進める実行プラン</h2>
          <ol className="blog-ol mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1">1〜4週: 基礎ステージに集中し、毎日1タスクで出力品質を安定化させる。</li>
            <li className="blog-li pl-1">5〜8週: 実務ステージで1業務を改善し、工数削減と品質指標を記録する。</li>
            <li className="blog-li pl-1">9〜12週: 応用ステージで活用判断軸を作り、成果物をポートフォリオ化する。</li>
            <li className="blog-li pl-1">12週目: 次の3か月で伸ばす領域を決め、学習計画を更新する。</li>
          </ol>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            学習は「知識を増やす活動」ではなく「仕事の成果を変える活動」です。何を覚えたかより、何を改善できたかで評価してください。
          </p>
          <div className="mt-6">
            <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-white p-6" />
          </div>
        </motion.section>
      </article>
    </main>
  );
}
