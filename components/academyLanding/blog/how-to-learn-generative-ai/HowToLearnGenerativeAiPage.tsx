"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import { ArticleH2, ArticleH3, SummaryBox, RichFAQ, RichTable, Callout } from "@/components/blog/ArticleBody";
import { Check, Info, Lightbulb } from "lucide-react";

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
                title="生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ
          </h1>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r-lg" id="answer-box">
            <p className="text-sm font-semibold text-amber-700 mb-1">この記事でわかること</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              生成AIの学び方は、ツール比較を先にするより「基礎→実務→応用」の順で進めた方が短期間で成果につながります。この記事では、社会人向けに1日30〜45分で回す12週間ロードマップ、独学とスクールの判断軸、無料学習リソースの使い分け、学習ログを成果物に変える振り返り方法、忙しい週でも再開しやすい運用まで具体化し、挫折しにくい実行手順として提示します。今日から着手する最初の30分タスクまで具体化します。
            </p>
          </div>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 blog-p text-base leading-8 text-gray-700">
            生成AIを学びたい社会人が最初に詰まるのは、ツール選びではなく学習順序です。動画を見て終わる、プロンプトを試して終わる状態だと、仕事の成果に結び付きません。
            この記事では「基礎→実務→応用」の3ステージで、独学でも進められる手順と、スクールを使うべき判断基準を整理します。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            料金・提供内容の確認日: 2026-02-20（OpenAI Academy、Microsoft Learn、Google Cloud Skills Boost、Coursera、OpenAI/Anthropic Pricing、Aidemy公式ページ）
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/what-is-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AIとは？
          </Link>
          ・
          <Link href="/academy/blog/ai-study-learning-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI勉強法ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-first-30-days-work-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AI最初の30日ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-for-non-engineers" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            文系・非エンジニア向けAI活用ガイド
          </Link>
          ・まず聞き方を知ろう
          <Link href="/academy/blog/how-to-ask-ai-beginners" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIへの聞き方完全入門
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
        </p>
        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox
            title="要点まとめ"
            items={[
              "生成AI学習は「基礎→実務→応用」の3段階で設計すると、業務接続までの失速を防げます。",
              "独学は低コストで始めやすく、スクールは学習速度と伴走支援に強みがあります。選定は予算より学習継続力を基準にしてください。",
              "キャリア転換を見据えるなら、応用ステージで成果物をポートフォリオ化し、提供価値として説明できる状態を目標にします。",
            ]}
          />
        </motion.section>

        <motion.section
          id="learning-stages"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="learning-stages">
            3つの学習ステージ（基礎→実務→応用）と、各ステージでやること
          </ArticleH2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            先に全体像を固定しておくと、途中でツール比較に時間を使いすぎる失敗を防げます。ここでは12週間で回す前提で、各ステージの到達目標を明確化します。
          </p>
          <div className="mt-8 space-y-6">
            {stageItems.map((stage) => (
              <section key={stage.id} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>{stage.title}</ArticleH3>
                <div className="mt-2 flex items-center gap-4 text-sm font-medium">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-orange-600">期間目安: {stage.duration}</span>
                  <span className="text-gray-500">到達目標: {stage.goal}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {stage.tasks.map((task) => (
                    <li key={task} className="flex gap-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
                      {task}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <Callout type="tip" title="関連ガイドの活用">
            基礎理解は「生成AIとは何か」、プロンプト設計は「入門ガイド」、自動化は「AIコーディング入門」など、各ステージの課題に合わせて関連記事を活用しましょう。
          </Callout>
        </motion.section>

        <motion.section
          id="self-study-vs-school"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="self-study-vs-school">
            独学 vs スクールの比較（メリット・デメリット・コスト）
          </ArticleH2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            重要なのは「どちらが正しいか」ではなく、今の制約に合う選択をすることです。社会人は学習時間が限られるため、継続設計まで含めて判断してください。
          </p>
          <RichTable className="mt-6">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 font-bold text-gray-900">比較軸</th>
                <th className="py-4 px-6 font-bold text-gray-900">独学</th>
                <th className="py-4 px-6 font-bold text-gray-900">スクール</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonRows.map((row) => (
                <tr key={row.axis} className="hover:bg-gray-50/50 transition-colors">
                  <th className="py-4 px-6 font-bold text-gray-900 bg-gray-50/30 whitespace-nowrap">{row.axis}</th>
                  <td className="py-4 px-6 text-gray-700">{row.selfStudy}</td>
                  <td className="py-4 px-6 text-gray-700">{row.school}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <Callout type="warning" title="コストの確認">
            独学は月額課金の積み上げ、スクールは受講料と期間設計で総額が大きく変わります。比較時は必ず最新料金を公式サイトで再確認してください。
          </Callout>
        </motion.section>

        <motion.section
          id="resources-2026"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="resources-2026">
            2026年版おすすめ学習リソース（無料/有料）
          </ArticleH2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            学習リソースは「何を学ぶか」より「どの段階で使うか」で選ぶと失敗しにくくなります。
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <section className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
              <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2 mb-4">
                <Info size={20} /> 無料で始める
              </h3>
              <ul className="space-y-4">
                {freeResources.map((item) => (
                  <li key={item.name} className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-gray-900">{item.name}</p>
                    <p className="mt-1 text-xs text-gray-600 line-clamp-2">{item.purpose}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex text-xs font-bold text-blue-600 hover:text-blue-700"
                    >
                      公式を確認する →
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-orange-100 bg-orange-50/30 p-6">
              <h3 className="text-lg font-bold text-orange-900 flex items-center gap-2 mb-4">
                <Lightbulb size={20} /> 有料で加速する
              </h3>
              <ul className="space-y-4">
                {paidResources.map((item) => (
                  <li key={item.name} className="rounded-xl border border-orange-100 bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-gray-900">{item.name}</p>
                    <p className="mt-1 text-xs text-gray-600 line-clamp-2">{item.purpose}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex text-xs font-bold text-orange-600 hover:text-orange-700"
                    >
                      公式を確認する →
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </motion.section>

        <motion.section
          id="academy-fit"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="academy-fit">AIリブートアカデミーが向いている人</ArticleH2>
          <Callout type="info">
            次の条件に当てはまる場合、単地学習よりも学習プロセス全体を再設計したほうが成果が出やすくなります。
            <ul className="mt-4 space-y-2">
              <li className="flex gap-2 items-start"><Check className="h-4 w-4 mt-1 text-blue-500 shrink-0"/> ツールを触っているが、仕事の成果に接続しきれていない</li>
              <li className="flex gap-2 items-start"><Check className="h-4 w-4 mt-1 text-blue-500 shrink-0"/> 転職・複業・社内役割拡張に向けて、実績を言語化したい</li>
              <li className="flex gap-2 items-start"><Check className="h-4 w-4 mt-1 text-blue-500 shrink-0"/> 一人学習だと継続が難しく、振り返りの場が必要</li>
            </ul>
          </Callout>
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
          <ArticleH2 id="faq">よくある質問（FAQ）</ArticleH2>
          <RichFAQ items={faqItems} />
        </motion.section>

        <motion.section
          id="action-plan"
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox
            title="12週間アクションプラン"
            items={[
              "1〜4週: 基礎ステージに集中し、毎日1タスクで出力品質を安定化させる。",
              "5〜8週: 実務ステージで1業務を改善し、工数削減と品質指標を記録する。",
              "9〜12週: 応用ステージで活用判断軸を作り、成果物をポートフォリオ化する。",
              "12週目: 次の3か月で伸ばす領域を決め、学習計画を更新する。",
            ]}
          />
        </motion.section>

        <section id="related-links" className="mt-12 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-bold text-gray-900">あわせて読みたい</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/what-is-generative-ai" className="text-blue-700 underline hover:text-blue-900">生成AIとは？初心者向け解説</Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-blue-700 underline hover:text-blue-900">ChatGPTプロンプト入門</Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-study-learning-guide" className="text-blue-700 underline hover:text-blue-900">AI勉強法ガイド</Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-blue-700 underline hover:text-blue-900">生成AI最初の30日ガイド</Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-blue-700 underline hover:text-blue-900">ChatGPTをスマホで始める方法</Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-beginners-guide-over-50" className="text-blue-700 underline hover:text-blue-900">50代からのAI初心者ガイド</Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-blue-700 underline hover:text-blue-900">AI不安の乗り越え方ガイド</Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
