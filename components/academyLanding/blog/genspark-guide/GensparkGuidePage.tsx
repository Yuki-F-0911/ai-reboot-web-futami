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

type GensparkGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "Genspark 使い方",
  "Genspark とは",
  "Genspark Perplexity 違い",
  "AI検索 比較 2026",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-genspark", label: "Gensparkとは？AI検索で評価される理由" },
  { id: "genspark-vs-perplexity", label: "GensparkとPerplexityの違い比較" },
  { id: "scene-use-cases", label: "ビジネス情報収集シーン別の使い方" },
  { id: "pricing-and-japanese", label: "無料プラン・日本語対応・注意点" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連リンク" },
  { id: "next-action", label: "次のアクション" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody =
  "AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。";

const summaryPoints = [
  "Gensparkは、AIエージェント型で情報収集を進める検索サービスです。リンク探索より、要点整理と次の深掘りを連続で進める用途に向きます。",
  "Perplexityは根拠確認と再検索の再現性が高く、Gensparkは調査の初速を出しやすい設計です。両者は競合というより役割分担で使うと効率が上がります。",
  "市場調査や競合比較では、先に比較観点を固定してから使うと、AI検索の出力品質が安定します。",
  "無料利用は可能ですが、クレジットや機能制限があります。料金・仕様は更新されるため、確認日を基準に運用する必要があります。",
  "重要な意思決定で使う場合は、どのAI検索でも最終的な原典確認が必須です。",
] as const;

const definitionPoints = [
  "公式サイトでは「AI Agent Engine」を掲げ、複数情報源の統合と回答生成を中核価値として説明しています。",
  "公式規約では、無料利用が可能である一方、日次クレジットや機能制限があることを明記しています。",
] as const;

const comparisonRows = [
  {
    axis: "強みの出る場面",
    genspark: "広めの問いを起点に論点を素早く集めたいとき",
    perplexity: "引用元を確認しながら事実ベースで整理したいとき",
    recommendation: "初期探索はGenspark、検証と精緻化はPerplexity",
  },
  {
    axis: "調査フロー",
    genspark: "エージェント的に追加探索を回しやすい",
    perplexity: "質問と再質問で比較軸を詰めやすい",
    recommendation: "仮説出しはGenspark、比較表の詰めはPerplexity",
  },
  {
    axis: "情報の扱い方",
    genspark: "統合された回答を起点に全体像を把握しやすい",
    perplexity: "回答と引用を同時に確認しやすい",
    recommendation: "結論前に必ず引用元を2件以上確認する",
  },
  {
    axis: "チーム共有",
    genspark: "叩き台の作成速度を上げやすい",
    perplexity: "根拠付き共有の運用を作りやすい",
    recommendation: "会議前はGenspark、資料確定はPerplexity",
  },
  {
    axis: "向いているユーザー",
    genspark: "新規テーマを短時間で俯瞰したい人",
    perplexity: "調査品質を安定させたい人",
    recommendation: "役割を分けて併用すると手戻りが減る",
  },
] as const;

const sceneCards = [
  {
    title: "市場調査の初動",
    body: "新サービス企画の調査では、最初に論点が散らばると工数が増えます。Gensparkで市場トレンド・主要プレイヤー・規制論点の叩き台を作り、次にPerplexityで引用確認を行う2段構えが有効です。",
  },
  {
    title: "競合比較の下書き",
    body: "価格、機能、導入難易度など比較軸を固定して質問すると、Gensparkで比較の初稿を短時間で作れます。意思決定に使う前に、公式ページと一次情報へ戻って数字を検証する運用をセットにしてください。",
  },
  {
    title: "提案資料の事前整理",
    body: "営業提案や社内稟議では、情報収集と要約で時間がかかります。Gensparkで要点を抽出し、Perplexityで根拠を補強し、最後にChatGPTで資料文体に整える流れが実務で回しやすいです。",
  },
  {
    title: "週次の業界キャッチアップ",
    body: "毎週の情報収集は、範囲が広すぎると継続しにくくなります。Gensparkで週次トピックを集約し、Notionやスプレッドシートへ3行要約で蓄積すると、翌週の比較が速くなります。",
  },
] as const;

const practicalSteps = [
  "最初に目的を1文で定義する（例: 競合A/Bの導入判断をしたい）。",
  "比較軸を3〜5項目で固定して、Gensparkで初稿を作る。",
  "Perplexityで同じ比較軸を再検証し、引用元を確認する。",
  "社内提出前に、公式一次情報の数値・日付を最終確認する。",
  "運用ログを残し、次回以降の質問テンプレートに反映する。",
] as const;

const pricingRows = [
  {
    item: "無料利用",
    genspark: "可能（無料枠あり、日次クレジット制限あり）",
    perplexity: "可能（Freeプランあり）",
  },
  {
    item: "有料プラン",
    genspark: "追加機能・利用枠の拡張あり（詳細は公式更新を確認）",
    perplexity: "Pro / Max / Enterpriseを公式ヘルプで案内",
  },
  {
    item: "仕様の更新頻度",
    genspark: "新機能追加と制限変更の可能性が高い",
    perplexity: "モデル提供や上限が更新される可能性がある",
  },
  {
    item: "実務運用の注意点",
    genspark: "探索結果を鵜呑みにせず、原典で裏取りする",
    perplexity: "引用付きでも最終判断前に原典確認する",
  },
] as const;

const cautionPoints = [
  "料金やクレジット上限は定期的に更新されるため、社内資料には確認日を明記する。",
  "日本語運用では固有名詞の表記揺れが起きるため、正式名称を辞書化しておく。",
  "対外資料に転記する前に、引用元URL・発行日・地域条件を確認する。",
  "AI検索の出力を直接意思決定に使わず、担当者が責任を持って最終判断する。",
] as const;

function LineCtaBox({ tone }: { tone: "green" | "orange" }) {
  const boxClass =
    tone === "green"
      ? "mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
      : "mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6";
  const titleClass = tone === "green" ? "text-base font-semibold text-green-800" : "text-base font-semibold text-orange-800";

  return (
    <motion.section
      className={boxClass}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className={titleClass}>📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </motion.section>
  );
}

export default function GensparkGuidePage({ faqItems }: GensparkGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Gensparkとは？" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-4 flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl">
            Gensparkとは？AI検索の新世代ツールを徹底解説｜Perplexityとの違いと使い分け
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-20">2026年2月20日</time> 公開
            </p>
            <CopyAsMarkdownButton
              title="Gensparkとは？AI検索の新世代ツールを徹底解説｜Perplexityとの違いと使い分け"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Gensparkは、AIエージェント型で情報探索を進める新世代の検索サービスです。従来の検索のようにリンクを順番に読むだけでなく、論点整理と追加調査を一連の流れで進めやすい点が特徴です。この記事では、Perplexityとの違い、ビジネスでの使い分け、無料利用と日本語運用の注意点まで実務目線で整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="scroll-mt-28 mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold text-blue-900">要点まとめ</h2>
          <p className="mt-4 text-sm leading-7 text-blue-800">先に用途を決めて役割分担で使うと、GensparkとPerplexityの併用効果を出しやすくなります。</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="what-is-genspark"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Gensparkとは？AI検索で評価される理由</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Gensparkは、広い問いの全体像を短時間で組み立てる場面で評価されるAI検索サービスです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            公式サイトでは、AIエージェントエンジンを中核に、複数ソースの統合と回答生成を行う設計が示されています。実務では「まず状況を俯瞰し、次に根拠確認へ進む」初動の速さが価値になります。調査結果の正確性を担保するには、最初の出力を完成版として扱わず、原典確認を前提に運用することが重要です。
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {definitionPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            情報整理型AIの運用を強化したい場合は、
            <Link
              href="/academy/blog/notebooklm-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              NotebookLMの使い方完全ガイド
            </Link>
            も合わせて確認すると、用途別の分担が明確になります。
          </p>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="genspark-vs-perplexity"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">GensparkとPerplexityの違い比較</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            GensparkとPerplexityの差は、性能の優劣より「どの工程を速くするか」にあります。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[880px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Genspark</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Perplexity</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">使い分けの基準</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.genspark}</td>
                    <td className="px-4 py-4">{row.perplexity}</td>
                    <td className="px-4 py-4">{row.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            Perplexityの操作画面や実践プロンプトを先に確認したい場合は、
            <Link
              href="/academy/blog/perplexity-ai-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              Perplexity AIの使い方完全ガイド2026
            </Link>
            を参照してください。比較観点をそろえて読むと、導入判断の精度が上がります。
          </p>
        </motion.section>

        <motion.section
          id="scene-use-cases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">ビジネス情報収集シーン別の使い方</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            実務で成果を出すには、ツール単体の理解より、業務シーンに合わせた順序設計が重要です。
          </p>
          <div className="mt-6 space-y-4">
            {sceneCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.body}</p>
              </section>
            ))}
          </div>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">運用を定着させる5ステップ</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {practicalSteps.map((step) => (
              <li key={step} className="pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            仕上げの文章化を効率化したい場合は、
            <Link
              href="/academy/blog/chatgpt-advanced-tips"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPT上級テクニック集
            </Link>
            と組み合わせると、調査結果から成果物までの接続がスムーズになります。
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="pricing-and-japanese"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">無料プラン・日本語対応・導入時の注意点</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            無料利用は可能ですが、実務導入では制限条件と検証手順を先に決めることが不可欠です。
          </p>
          <p className="mt-2 text-xs text-gray-500">
            確認日: 2026-02-20（Genspark公式Terms/Help、Perplexity公式Helpを参照）
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">項目</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Genspark</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Perplexity</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="px-4 py-4">{row.genspark}</td>
                    <td className="px-4 py-4">{row.perplexity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">日本語運用で失敗しないための確認項目</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {cautionPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            仕様更新が速い領域では、社内テンプレートに「確認日」「参照URL」「未検証項目」を残すだけで、再調査コストを下げられます。
          </p>
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            先に短い結論を確認し、無料枠・上限・規約の更新有無は運用開始前に公式ヘルプで再確認してください。
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

        <LineCtaBox tone="green" />

        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <p className="mb-4 text-sm leading-7 text-gray-700">AI検索の比較と実務導入を深掘りしたい場合は、次の関連記事が有効です。</p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/perplexity-ai-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                Perplexity AIの使い方完全ガイド2026｜ChatGPTとの違いと検索AIの活用法
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/notebooklm-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                NotebookLMの使い方完全ガイド｜AIで情報整理・学習を効率化する方法
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-advanced-tips"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT上級テクニック集｜業務で差がつく実践プロンプト
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          id="next-action"
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">次のアクション</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまで一体で設計しています。Difyのようなツールをどの業務課題に当てるか、活用の判断軸と実務への組み込み方を考えたい方は、学習プロセス全体を見直すことが有効です。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#06C755] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
            >
              今すぐ無料で登録する（30秒）
            </a>
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
