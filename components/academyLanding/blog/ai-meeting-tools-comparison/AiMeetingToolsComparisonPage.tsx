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

type AiMeetingToolsComparisonPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "AI議事録",
  "Fireflies.ai",
  "Otter.ai",
  "Notion AI",
  "会議効率化",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-ai-minutes", label: "AI議事録ツールとは" },
  { id: "comparison-table", label: "主要5ツール比較表" },
  { id: "tool-details", label: "ツール別詳細解説" },
  { id: "selection-guide", label: "どれを選ぶか：判断フレーム" },
  { id: "workflow", label: "導入後のワークフロー設計" },
  { id: "pitfalls", label: "よくある失敗3パターン" },
  { id: "faq", label: "よくある質問" },
  { id: "related-links", label: "関連リンク" },
  { id: "article-summary", label: "まとめ" },
  { id: "cta", label: "次のアクション" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

const comparisonRows = [
  {
    tool: "Fireflies.ai",
    japaneseAccuracy: "△（英語主体）",
    zoomTeamsMeet: "全対応",
    freePlan: "◯（月800分）",
    paidPlan: "$10〜/月",
    summaryQuality: "◯",
    bestFor: "英語メインの国際会議・多言語チーム",
  },
  {
    tool: "Otter.ai",
    japaneseAccuracy: "×（英語専用）",
    zoomTeamsMeet: "Zoom・Meet対応",
    freePlan: "◯（月300分）",
    paidPlan: "$16.99〜/月",
    summaryQuality: "◯（英語のみ）",
    bestFor: "英語ウェビナー・インタビュー・英語チーム",
  },
  {
    tool: "Notion AI",
    japaneseAccuracy: "◯（テキスト要約）",
    zoomTeamsMeet: "×（音声非対応）",
    freePlan: "Notionプラン必要",
    paidPlan: "$8〜/月（追加）",
    summaryQuality: "◯",
    bestFor: "Notionで情報整理しているチーム",
  },
  {
    tool: "tl;dv",
    japaneseAccuracy: "△（実用可）",
    zoomTeamsMeet: "全対応",
    freePlan: "◯（録画無制限）",
    paidPlan: "$29〜/月",
    summaryQuality: "◯",
    bestFor: "無料で録画・クリッピングを試したい",
  },
  {
    tool: "Notta",
    japaneseAccuracy: "◯（高精度）",
    zoomTeamsMeet: "全対応",
    freePlan: "◯（月120分）",
    paidPlan: "¥1,650〜/月",
    summaryQuality: "◯",
    bestFor: "日本語の社内会議・商談・インタビュー",
  },
] as const;

const toolDetails = [
  {
    name: "Fireflies.ai",
    tag: "多言語会議に強い自動bot型",
    overview:
      "会議URLを共有するとFred（Fireflyのbot）が自動で参加し、録音・文字起こし・要約を生成します。SlackやCRM（Salesforce・HubSpot）との連携が充実しており、営業チームの商談記録自動化で採用事例が多いツールです。",
    strengths: [
      "Zoom・Teams・Google Meet全て自動bot参加",
      "英語の文字起こし精度が業界トップクラス",
      "会議内容のキーワード・スピーカー別検索機能",
      "SlackやCRMへの自動転送",
    ],
    weaknesses: [
      "日本語の文字起こし精度は英語の70〜80%程度",
      "botが会議に参加するため、参加者への事前説明が必要",
    ],
    pricing: "無料（800分/月）、Pro $10/月/ユーザー、Business $19/月/ユーザー",
    bestUseCase: "英語が主言語の国際チーム、営業チームの商談自動記録",
  },
  {
    name: "Otter.ai",
    tag: "英語精度No.1のリアルタイム文字起こし",
    overview:
      "英語の文字起こし精度は業界最高水準とされており、スピーカー識別・リアルタイム共有・ライブキャプション機能が特徴です。ただし日本語への対応は現時点では実用レベルに達していません。",
    strengths: [
      "英語の文字起こし精度が高い",
      "リアルタイムで文字起こしを複数人と共有",
      "Zoom会議内でライブキャプション表示（有料）",
      "OtterPilotが自動でメモを共有",
    ],
    weaknesses: ["日本語はほぼ対応なし", "有料プランのTeams連携は高コスト帯"],
    pricing: "無料（300分/月）、Pro $16.99/月/ユーザー、Business $30/月/ユーザー",
    bestUseCase: "英語チームの会議、英語インタビューの文字起こし",
  },
  {
    name: "Notion AI",
    tag: "Notionユーザー専用の議事録まとめツール",
    overview:
      "Notion AI単体では音声録音・文字起こし機能を持ちません。音声はZoom等で録音したものをテキスト化し、Notionに貼り付けたあとAIで要約・構造化するという使い方が実態です。Notionを情報の一元管理場所として使っているチームにとって、議事録とタスク・プロジェクトをシームレスに連携できる点が最大の強みです。",
    strengths: [
      "Notionデータベースと議事録を一体管理",
      "プロジェクトページに直接アクションアイテムを紐付け可能",
      "日本語テキストのAI要約・整理精度が高い",
      "テンプレートで会議録フォーマットを標準化できる",
    ],
    weaknesses: [
      "音声入力・自動録音機能なし（別ツール必要）",
      "音声文字起こしはNottaやFirefliesとの併用が必要",
    ],
    pricing: "Notionプラン（Plus $12/月〜）＋Notion AI add-on（$8/月〜）",
    bestUseCase: "Notionで情報整理しているチーム、議事録とプロジェクト管理を統合したい",
  },
  {
    name: "tl;dv",
    tag: "無料プランが最も充実したクリッピング対応ツール",
    overview:
      "「too long; didn't view（長すぎて見られない）」の略。録画を自動で会議別に保存し、重要部分をタイムスタンプ付きでクリッピング共有できます。無料プランで録画・文字起こしが無制限に使える点が他ツールにない強みです。",
    strengths: [
      "無料プランで会議録画・文字起こしが無制限",
      "タイムスタンプ付きクリッピングで要点だけ共有可能",
      "Zoom・Teams・Google Meet全対応",
      "Slack・Notion・HubSpot等と連携",
    ],
    weaknesses: [
      "日本語の文字起こし精度は実用水準だが上位ではない",
      "高度なAI要約は有料プランが必要",
    ],
    pricing: "Free（録画無制限）、Pro $29/月/ユーザー",
    bestUseCase: "まず無料で試したい、録画クリッピングを活用したい",
  },
  {
    name: "Notta",
    tag: "日本語文字起こし精度が最も高い",
    overview:
      "日本市場向けに最適化されており、日本語の文字起こし精度は比較ツールの中で最上位水準。円建てプランがあり、国内企業での採用実績が多いツールです。会議の録音・文字起こし・要約・テキスト出力をワンストップで行えます。",
    strengths: [
      "日本語の文字起こし精度が高い",
      "Zoom・Teams・Google Meet全対応",
      "円建てプランで料金予測が容易",
      "テキスト・Word・PDFへの出力に対応",
    ],
    weaknesses: [
      "国際展開は途上（英語コンテンツが少ない）",
      "無料プランは月120分と少なめ",
    ],
    pricing: "無料（120分/月）、Pro ¥1,650/月（税込）、Business ¥3,300/月（税込）",
    bestUseCase: "日本語の社内会議・商談・インタビューをメインに記録する",
  },
] as const;

const selectionGuide = [
  {
    scenario: "日本語の社内会議・商談が中心",
    recommended: "Notta",
    reason:
      "日本語精度が最も高く、Zoom・Teams・Meet全対応。円建てで料金管理しやすい。",
  },
  {
    scenario: "英語メインの国際会議や多言語チーム",
    recommended: "Fireflies.ai",
    reason:
      "英語文字起こし精度が高く、botが自動参加。SlackやCRMとの連携で記録フローを自動化できる。",
  },
  {
    scenario: "Notionで情報を一元管理している",
    recommended: "Notion AI（＋Notta/Fireflies併用）",
    reason:
      "Notionと議事録・タスクを統合管理できる。音声録音は別ツールと併用が現実的。",
  },
  {
    scenario: "まず無料で試してみたい",
    recommended: "tl;dv",
    reason:
      "無料プランで録画・文字起こしが無制限。クリッピング機能で要点だけ共有できる。",
  },
  {
    scenario: "英語ウェビナー・インタビューの精密な文字起こし",
    recommended: "Otter.ai",
    reason:
      "英語の文字起こし精度が業界最高水準。リアルタイム共有・スピーカー識別に優れる。",
  },
] as const;

const pitfalls = [
  {
    pattern: "失敗1",
    title: "botの会議参加を事前に参加者へ説明しなかった",
    situation:
      "FirefliesのbotやtldvのAIが会議に参加した際、参加者が「なぜ見知らぬ参加者がいるのか」と混乱したり、録音に対して不信感を示したりするケース。特に顧客との商談では信頼関係に影響することがある。",
    solution:
      "会議招待時または開始直後に「AI議事録ツールで録音・文字起こしを行います」と参加者に告知する。社内規程として録音同意ルールを定め、外部参加者には事前メールで案内する。個人情報保護法の観点からも同意取得は重要。",
  },
  {
    pattern: "失敗2",
    title: "文字起こし結果をそのまま議事録として配布した",
    situation:
      "AI文字起こしの精度を過信し、人名・社名・専門用語の誤認識を確認せずに議事録を送付。「田中」が「谷中」に、「Dify」が「ダイフ」に変換されていたなど、信頼性を損ねる事例が多い。",
    solution:
      "文字起こし後は必ず人名・固有名詞・数値を中心に読み直す。特に日本語の固有名詞はどのツールでも誤認識が発生しやすい。用語集・辞書機能がある場合は事前登録しておく。",
  },
  {
    pattern: "失敗3",
    title: "全ての会議を録音・保存してコストと容量が膨らんだ",
    situation:
      "便利なため全会議に自動録音を適用した結果、不要な雑談・30秒の確認会議まで記録され、有料プランの保存枠を消費。月次コストが想定の2〜3倍になるケース。",
    solution:
      "「議事録が必要な会議の基準」を事前に決める（例：外部参加者がいる・意思決定がある・30分超の会議）。ツールのフィルター設定や手動開始オプションを活用し、全自動を避ける。",
  },
] as const;

export default function AiMeetingToolsComparisonPage({
  faqItems,
}: AiMeetingToolsComparisonPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI議事録ツール比較2026" },
          ]}
        />

        {/* ヘッダー */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
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
            AI議事録ツール比較2026｜Fireflies・Otter・Notion AIの選び方と会議効率化
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-19">2026年2月19日</time> 公開
            </p>
            <CopyAsMarkdownButton
              title="AI議事録ツール比較2026｜Fireflies・Otter・Notion AIの選び方と会議効率化"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            1時間の会議が終わるたびに30分かけて議事録を書く——そのコストは年間換算で数百時間に積み上がります。AI議事録ツールは音声録音・文字起こし・要約・アクションアイテム抽出を自動化し、この問題に対処します。ただしFireflies.ai・Otter.ai・Notion
            AI・tl;dv・Nottaはそれぞれ強みが異なり、「どれでも同じ」ではありません。この記事では日本語精度・会議ツール対応・料金・要約品質の4軸で比較し、シーン別にどれを選ぶかの判断基準を示します。
          </p>
        </motion.header>

        {/* 要点まとめ */}
        <motion.section
          id="summary"
          className="scroll-mt-28 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold text-blue-900">この記事の要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            <li className="pl-1 marker:text-blue-500">
              日本語精度が高いのはNotta。英語メインの国際会議はFireflies.ai、英語精度最優先ならOtter.ai。
            </li>
            <li className="pl-1 marker:text-blue-500">
              Notion AI単体では音声録音・文字起こしができない。録音ツールと組み合わせて使うのが実態。
            </li>
            <li className="pl-1 marker:text-blue-500">
              無料で試すならtl;dv（録画・文字起こし無制限）が最もコスパが高い。
            </li>
            <li className="pl-1 marker:text-blue-500">
              会議にbotが自動参加するタイプは、参加者への録音同意告知が必要。
            </li>
            <li className="pl-1 marker:text-blue-500">
              文字起こし結果はそのまま配布せず、固有名詞・数値を中心に確認してから議事録とする。
            </li>
          </ul>
        </motion.section>

        {/* Answer Box */}
        <section className="mb-8 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">この記事の結論</p>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            日本語会議を主軸にするならNotta、英語中心や国際会議ならFireflies.ai/Otter.aiの選定が基本です。まず無料で運用検証したい場合は、録画と文字起こしを無制限で試せるtl;dvが最も始めやすい選択です。Notion AIは録音機能がないため、文字起こしツールと組み合わせて導入する前提で設計してください。
          </p>
        </section>

        <ArticleTOC items={tocItems} />

        {/* H2-1: AI議事録ツールとは */}
        <motion.section
          id="what-is-ai-minutes"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI議事録ツールとは｜録音・文字起こし・要約を自動化する仕組み
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AI議事録ツールは「音声認識（文字起こし）」と「LLM（大規模言語モデル）による要約・構造化」を組み合わせたサービスです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            会議の音声を自動でテキスト化し、発言者別に分離（スピーカーダイアライゼーション）したうえで、重要な議題・決定事項・アクションアイテムを要約します。会議後に担当者が手書きで議事録を作る作業を大幅に短縮できます。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            人間が書く議事録との違い
          </h3>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <strong>速度</strong>：会議終了と同時に文字起こしが完成。要約は数分以内に生成。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>網羅性</strong>：発言を漏れなく記録。人間が聞き逃した発言もテキスト化。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>検索性</strong>：キーワード検索で過去の発言を数秒で参照可能。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>限界</strong>
              ：日本語固有名詞・専門用語の誤認識、文脈判断の精度。人間による確認は引き続き必要。
            </li>
          </ul>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">主要機能の分類</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">機能カテゴリ</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">内容</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium text-gray-900">文字起こし</td>
                  <td className="px-4 py-3">音声をテキスト化。スピーカー識別（誰が話したか）を含む</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium text-gray-900">要約・構造化</td>
                  <td className="px-4 py-3">議題・決定事項・ネクストアクションをLLMが整理</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium text-gray-900">録画・録音</td>
                  <td className="px-4 py-3">会議映像・音声の保存。クラウドに自動アーカイブ</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium text-gray-900">検索</td>
                  <td className="px-4 py-3">キーワード・発言者・日時での過去会議検索</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium text-gray-900">外部連携</td>
                  <td className="px-4 py-3">Slack・Notion・CRM（Salesforce等）への自動転送</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            AI業務効率化の全体像については
            <Link
              href="/academy/blog/ai-business-efficiency-cases"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI業務効率化事例集
            </Link>
            も参照してください。
          </p>
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

        {/* H2-2: 主要5ツール比較表 */}
        <motion.section
          id="comparison-table"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            主要5ツール機能・料金比較表（Fireflies・Otter・Notion AI・tl;dv・Notta）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            日本語精度・会議ツール対応・料金・要約品質の4軸で一覧化します。
          </p>
          <p className="mt-2 text-xs text-gray-500">
            ※2026年2月時点の情報。最新は各公式サイトを確認してください。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">日本語精度</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Zoom/Teams/Meet</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">無料プラン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">有料プラン目安</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">最適用途</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <td className="px-4 py-4 font-medium text-gray-900">{row.tool}</td>
                    <td className="px-4 py-4">{row.japaneseAccuracy}</td>
                    <td className="px-4 py-4">{row.zoomTeamsMeet}</td>
                    <td className="px-4 py-4">{row.freePlan}</td>
                    <td className="px-4 py-4">{row.paidPlan}</td>
                    <td className="px-4 py-4">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* H2-3: ツール別詳細解説 */}
        <motion.section
          id="tool-details"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ツール別詳細解説｜強み・弱み・適用シーン
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            比較表の数値だけでは見えない、各ツールの実用上の特性を解説します。
          </p>
          <div className="mt-6 space-y-8">
            {toolDetails.map((tool) => (
              <div key={tool.name} className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                  <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-3 py-0.5 text-xs font-semibold text-orange-700">
                    {tool.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">{tool.overview}</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold text-green-700">強み</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-xs leading-6 text-gray-700">
                      {tool.strengths.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-700">弱み・注意点</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-xs leading-6 text-gray-700">
                      {tool.weaknesses.map((w) => (
                        <li key={w}>{w}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 rounded-md border border-blue-200 bg-blue-50 px-4 py-2">
                  <p className="text-xs leading-6 text-blue-800">
                    <strong>料金目安（※2026年2月時点）：</strong>
                    {tool.pricing}
                  </p>
                </div>
                <p className="mt-3 text-xs leading-6 text-gray-600">
                  <strong className="text-gray-800">最適用途：</strong>
                  {tool.bestUseCase}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* H2-4: 判断フレーム */}
        <motion.section
          id="selection-guide"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            どれを選ぶか｜シーン別判断フレーム
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「機能が多いから迷う」を解消するため、「自分はどのシーンで使うか」から逆算します。
          </p>
          <div className="mt-6 space-y-4">
            {selectionGuide.map((guide) => (
              <div key={guide.scenario} className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">
                      シーン：{guide.scenario}
                    </p>
                    <p className="mt-1 text-xs leading-6 text-gray-600">{guide.reason}</p>
                  </div>
                  <span className="inline-flex flex-shrink-0 items-center rounded-lg border border-will-primary/20 bg-will-lighter px-3 py-1 text-sm font-bold text-will-primary">
                    → {guide.recommended}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-900">ツール選択の前に確認すること</p>
            <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-7 text-amber-800">
              <li>会議の使用言語は何か（日本語のみ / 英語混在 / 英語メイン）</li>
              <li>使っている会議ツール（Zoom / Teams / Meet）は何か</li>
              <li>録音・要約結果の保存先はどこか（Notion / Slack / CRM）</li>
              <li>録音同意の取得ルールはあるか（社内規程・業界規制）</li>
            </ul>
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            会議準備から資料作成まで効率化したい場合は
            <Link
              href="/academy/blog/ai-presentation-workflow"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AIでプレゼン資料を効率的に作る方法
            </Link>
            も参照してください。
          </p>
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

        {/* H2-5: ワークフロー設計 */}
        <motion.section
          id="workflow"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI議事録ツールを導入するワークフロー設計
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            ツールを導入しただけでは効率化は起きません。「誰が何を確認して、どこに保存するか」のフローを決めることが重要です。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            標準的な議事録ワークフロー（4ステップ）
          </h3>
          <div className="mt-5 space-y-4">
            <div className="flex gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                1
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  録音・文字起こし（会議中〜終了直後）
                </p>
                <p className="mt-1 text-xs leading-6 text-gray-700">
                  ツールのbot参加またはアプリ起動で自動録音。会議終了後5〜15分以内に文字起こしが完成。
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                2
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900">AI要約・確認（終了後30分以内）</p>
                <p className="mt-1 text-xs leading-6 text-gray-700">
                  AIが生成した要約・決定事項・アクションアイテムを確認。固有名詞・数値の誤認識がないかチェック。
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                3
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900">共有・保存（当日中）</p>
                <p className="mt-1 text-xs leading-6 text-gray-700">
                  Slack・Notion・メール等で参加者に共有。CRMとの連携がある場合は自動転送で完結。
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                4
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  アクションアイテムのタスク化（翌営業日まで）
                </p>
                <p className="mt-1 text-xs leading-6 text-gray-700">
                  議事録から抽出したタスクをプロジェクト管理ツール（Notion・Jira・Asana等）に登録。担当者・期限を明記。
                </p>
              </div>
            </div>
          </div>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">社内ルール整備のポイント</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <strong>録音同意の取得</strong>
              ：社内会議でも参加者全員の同意が原則。録音開始前に口頭で告知する。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>外部との会議</strong>
              ：顧客・パートナーとの会議は、招待メールや会議開始時に録音する旨を明記する。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>保管期間</strong>
              ：録音データの保管期間を定め、期限後は削除する手順を文書化する。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>アクセス権限</strong>
              ：議事録の閲覧権限を会議参加者に限定するか、部門全体に公開するかを決める。
            </li>
          </ul>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            AI活用の業務プロンプトを使いこなしたい場合は
            <Link
              href="/academy/blog/prompt-template-for-work"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              仕事で使えるプロンプトテンプレート集
            </Link>
            も参照してください。
          </p>
        </motion.section>

        {/* H2-6: よくある失敗 */}
        <motion.section
          id="pitfalls"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある失敗3パターンと対策
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AI議事録ツールを使い始めた現場でよく起きる3つの失敗を、状況と対処法とともに整理します。
          </p>
          <div className="mt-6 space-y-8">
            {pitfalls.map((p) => (
              <div key={p.pattern} className="rounded-lg border border-red-100 bg-red-50 p-5">
                <h3 className="text-base font-bold text-red-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <strong className="text-gray-900">よくある状況：</strong>
                  {p.situation}
                </p>
                <div className="mt-3 rounded-md border border-green-200 bg-white px-4 py-3">
                  <p className="text-sm leading-7 text-gray-700">
                    <strong className="text-green-700">対処法：</strong>
                    {p.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
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
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Q. {item.question}
                </dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* LINE CTA #3 */}
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

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/prompt-template-for-work"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                仕事で使えるプロンプトテンプレート集
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-business-efficiency-cases"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI業務効率化事例集
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-presentation-workflow"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIでプレゼン資料を効率的に作る方法
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/workflow-automation-comparison"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ワークフロー自動化ツール比較｜Make・Zapier・n8nを徹底比較
              </Link>
            </li>
          </ul>
        </section>

        {/* まとめ */}
        <motion.section
          id="article-summary"
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              日本語の社内会議・商談記録が主な用途ならNottaが最適。精度・価格・日本語サポートのバランスが良い。
            </li>
            <li className="pl-1 marker:text-gray-500">
              英語メインの国際チームはFireflies.aiを選ぶとSlack・CRM連携まで含めた記録フロー自動化が実現しやすい。
            </li>
            <li className="pl-1 marker:text-gray-500">
              Notion AI単体では音声録音・文字起こしができないため、NottaやFirefliesと組み合わせて使うのが実態。
            </li>
            <li className="pl-1 marker:text-gray-500">
              まず試すならtl;dvの無料プラン（録画・文字起こし無制限）が最もリスクが低い選択肢。
            </li>
            <li className="pl-1 marker:text-gray-500">
              どのツールでも固有名詞・数値の誤認識は起きる。文字起こし後の確認ステップを省略しない。
            </li>
            <li className="pl-1 marker:text-gray-500">
              録音前の同意取得・保管期間・アクセス権限の社内ルール整備をツール導入と同時に行う。
            </li>
          </ul>
        </motion.section>

        {/* 次のアクション */}
        <motion.section
          id="cta"
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">次のアクション</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AI議事録ツールの基礎が理解できたら、次のステップに進みましょう。
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
