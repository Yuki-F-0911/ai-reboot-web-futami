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

type AnthropicCoworkGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody =
  "AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。";

const keywordTags = [
  "Anthropic Cowork 使い方",
  "Cowork AI とは",
  "Claude Teams 活用",
  "Anthropic チーム向け AI",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-cowork", label: "AnthropicのCoworkとは何か" },
  { id: "how-to-use", label: "Coworkの使い方（個人向け）" },
  { id: "use-cases", label: "個人で成果が出る活用シーン" },
  { id: "comparison", label: "ChatGPT・Geminiとの使い分け" },
  { id: "limitations", label: "導入前に知る制約と注意点" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy", label: "AIリブートで実務定着する" },
] as const;

const summaryPoints = [
  "AnthropicのCoworkは、Claude Desktopでファイル操作や情報整理を複数ステップで進める研究プレビュー機能です。",
  "Team向け機能として注目されていますが、実際は個人のリサーチ・資料作成・下書き生成を高速化する用途でも効果が出ます。",
  "Coworkは有料プラン限定で、無料プランでは使えません。環境はmacOS版とWindows x64版のClaude Desktopです。",
  "運用時は、監査ログやエクスポートにCowork活動が含まれない点を理解した上で、低リスク業務から導入するのが安全です。",
] as const;

const featureRows = [
  {
    axis: "提供形態",
    detail: "Claude Desktop内の研究プレビュー機能として提供。",
    practical: "Web版ではなくデスクトップ作業を前提に運用する。",
  },
  {
    axis: "対応プラン",
    detail: "Pro / Max / Team / Enterprise（無料プランは対象外）。",
    practical: "まずは個人でProまたはMaxを使い、運用が固まってからチーム展開する。",
  },
  {
    axis: "対応環境",
    detail: "macOS版とWindows x64版のClaude Desktop。Windows arm64は非対応。",
    practical: "PC環境を先に統一し、導入前に端末条件を確認する。",
  },
  {
    axis: "主要価値",
    detail: "ローカルファイルへアクセスし、調査・整理・下書き作成を連続実行できる。",
    practical: "議事録整理、要件ドラフト、比較表作成など「手順がある業務」で効果が出やすい。",
  },
] as const;

const personalSetupSteps = [
  {
    title: "Step 1. 対象業務を1つに絞る",
    body: "最初は「会議メモを要点化する」「競合情報を表にまとめる」のように、入力と出力が定義しやすい作業だけで試します。複数用途を同時に始めると、品質評価が難しくなります。",
  },
  {
    title: "Step 2. ファイル構造を整理してから実行する",
    body: "Coworkはローカルファイルを扱えるため、作業フォルダを事前に分けるだけで結果の再利用性が上がります。業務資料と個人メモを分け、読み込み対象を明確にします。",
  },
  {
    title: "Step 3. 指示は『目的・前提・出力形式』で固定する",
    body: "「何を決めるための作業か」「何を参照してよいか」「どの形式で出すか」の3点を毎回固定すると、出力のブレが減ります。個人活用でもテンプレート化が有効です。",
  },
  {
    title: "Step 4. 1回目の結果を評価基準で見直す",
    body: "時短だけでなく、誤り数・抜け漏れ・修正時間を記録します。速度だけで判断すると導入効果を誤認しやすいため、品質指標を同時に見るのが実務的です。",
  },
  {
    title: "Step 5. 低リスク業務から反復運用する",
    body: "外部送信前提の資料、契約、法務関連など高リスク業務は初期対象から外します。まず週次で繰り返す定型業務に限定し、再現性が確認できたら範囲を広げます。",
  },
] as const;

const personalUseCases = [
  {
    title: "活用シーン1: 長文資料の整理と要点抽出",
    detail:
      "複数の議事録や調査メモを読み込み、意思決定に必要な論点だけを抽出する用途です。個人で抱え込む情報整理を短時間で終えられるため、思考時間を確保しやすくなります。",
    output: "成果物例: 要点サマリー、未決事項一覧、次アクションの叩き台",
  },
  {
    title: "活用シーン2: 提案・報告の下書き作成",
    detail:
      "既存メモをもとに、報告書や提案資料の初稿を作る使い方です。最終文体は人が整える前提で使うと、ゼロから書く時間を削減できます。",
    output: "成果物例: 報告書ドラフト、顧客向け説明文、社内共有文の原稿",
  },
  {
    title: "活用シーン3: ツール比較と選定整理",
    detail:
      "複数サービスの公式情報を比較軸に沿って整理する用途です。評価軸を先に定めることで、結論の根拠を説明しやすい比較表を作れます。",
    output: "成果物例: 比較表、選定メモ、導入可否の判断材料",
  },
  {
    title: "活用シーン4: 学習内容の業務転用メモ化",
    detail:
      "学んだAI知識を、自分の業務に当てはめて次の行動に変換する使い方です。知識の蓄積だけで終わらず、実行可能なタスクに落とし込めます。",
    output: "成果物例: 実践チェックリスト、週次改善メモ、運用ルール草案",
  },
] as const;

const toolComparisonRows = [
  {
    axis: "向いている工程",
    cowork: "ローカル資料を前提に、調査から下書きまで連続処理したい工程。",
    chatgpt: "壁打ち、文章推敲、複数モデル比較、共有ワークスペースでのコラボ工程。",
    gemini: "Google Workspace（Gmail/Docs/Drive/Meet）と連携した日常業務工程。",
    recommendation: "個人の深い作業はCowork、対話と仕上げはChatGPT、日常オペレーションはGeminiで分担する。",
  },
  {
    axis: "実行環境",
    cowork: "Claude Desktop（macOS / Windows x64）で利用。",
    chatgpt: "Web・モバイル・デスクトップなど複数環境で利用しやすい。",
    gemini: "GeminiアプリとWorkspace連携で利用する構成が中心。",
    recommendation: "PC中心で深く使うならCowork、マルチデバイス中心ならChatGPT/Geminiが扱いやすい。",
  },
  {
    axis: "組織利用の性格",
    cowork: "Team/Enterpriseにも展開可能だが、研究プレビュー前提で監査対象を要確認。",
    chatgpt: "ChatGPT Teamは2025-08-29にBusinessへ改称。共有ワークスペース運用を前提に設計。",
    gemini: "Workspace管理コンソール配下で導入しやすく、既存Google環境と接続しやすい。",
    recommendation: "既存の管理基盤に合わせて選ぶと、導入後の運用コストが下がる。",
  },
  {
    axis: "個人での立ち上げやすさ",
    cowork: "対象業務を絞ると早く成果が出るが、環境依存の確認が必要。",
    chatgpt: "初学者向けの情報が多く、比較的始めやすい。",
    gemini: "Googleアカウント資産を活かしやすく、業務連携の導入が早い。",
    recommendation: "最初の1週間はChatGPT/Geminiで基礎、次にCoworkで深作業へ拡張すると移行しやすい。",
  },
] as const;

const communityVoices = [
  "新機能公開直後のコミュニティでは「使いたいが、環境側に表示されない」という初期セットアップの声が複数見られました。",
  "Windows版対応の更新に対して、作業導線が改善したという肯定的な反応が増えています。",
  "一部投稿ではVMエラーや実行中断の報告があり、研究プレビュー段階として安定性の見極めが必要という意見がありました。",
  "共通点として、成果を出している利用者は『用途を1つに絞る』『低リスク業務から始める』運用を徹底しています。",
] as const;

const riskChecklist = [
  "機密情報や個人情報を含むファイルは、初期運用では読み込み対象から外す。",
  "社外提出物は必ず人間レビューを通す。AI出力を直接提出しない。",
  "研究プレビュー機能である点をチームに共有し、期待値を合わせる。",
  "運用ログ（対象業務、所要時間、修正時間、誤り数）を残し、週次で評価する。",
  "規制対応が必要な業務は、監査要件と記録要件を満たせるまで対象外にする。",
] as const;

function LineCtaBox({ tone }: { tone: "green" | "orange" | "gray" }) {
  const className =
    tone === "green"
      ? "mt-12 rounded-lg border border-green-200 bg-green-50 p-6"
      : tone === "orange"
        ? "mt-12 rounded-lg border border-orange-200 bg-orange-50 p-6"
        : "mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6";

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="text-sm font-semibold text-gray-900">📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-3 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
      <div className="mt-4">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="line-cta-button inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
        >
          LINEで週1AI通信を受け取る（無料）
        </a>
      </div>
    </motion.section>
  );
}

export default function AnthropicCoworkGuidePage({ faqItems }: AnthropicCoworkGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Anthropic Coworkガイド" },
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
                title="AnthropicのCoworkとは？使い方と活用シーン完全ガイド"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AnthropicのCoworkとは？使い方と活用シーン完全ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月19日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AnthropicのCoworkは、Claude Desktop上で情報収集、ファイル整理、下書き作成を一連で実行できる研究プレビュー機能です。名前から「チーム機能だけ」と
            誤解されがちですが、実際は個人の知的作業を短縮する用途で効果が出ます。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事は
            <span className="font-semibold text-gray-900">2026年2月時点</span>
            の公式情報を基準に、個人での使い方を中心に解説します。仕様や料金のように更新があり得る項目は、導入前に必ず公式ページを再確認してください。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="mt-14 scroll-mt-28 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">要点まとめ</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Coworkは「AIと会話する」から一歩進んで、「AIで実務を進める」ための機能です。個人運用では、対象業務を絞ることが成功条件になります。
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <LineCtaBox tone="gray" />

        <motion.section
          id="what-is-cowork"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">AnthropicのCoworkとは何かを30秒で定義する</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AnthropicのCoworkは、Claude Desktopでローカルファイルを扱いながら複数ステップの業務を進めるエージェント機能です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            ポイントは、チャット回答だけで終わらず、資料の読解、比較整理、下書き作成までを連続実行できることです。機能名に「Team向け」の印象がありますが、
            個人の資料整理や業務下書きにも適しています。公式情報では有料プラン向け研究プレビューとして案内されています。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">項目</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">公式情報の要点</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">個人利用での判断基準</th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.detail}</td>
                    <td className="py-4 pl-4">{row.practical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-xs text-gray-500">
            情報基準: Anthropic公式（Cowork紹介ページ / Getting started with Cowork / Release Notes）確認日: 2026年2月19日
          </p>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            Claude全体の基礎を先に押さえる場合は、
            <Link
              href="/academy/blog/chatgpt-claude-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPT・Claude初心者ガイド
            </Link>
            を先に読むと、Coworkの位置づけが理解しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="how-to-use"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Coworkの使い方（個人向け）は5ステップで十分</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            個人でCoworkを使い始めるときは、難しい設計より「対象業務を絞って反復する」ことが重要です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            いきなり全業務へ広げるより、まず週次で繰り返す定型業務1つで評価する方が成果を測りやすくなります。下記の5ステップで初期運用を組むと、効果検証まで
            迷いにくくなります。
          </p>
          <div className="mt-7 space-y-4">
            {personalSetupSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            プロンプト設計を強化するなら、
            <Link
              href="/academy/blog/chatgpt-advanced-tips"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPTを仕事で使いこなす実践テクニック集
            </Link>
            の「目的・前提・出力形式」を固定する型を、そのままCoworkにも転用できます。
          </p>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="use-cases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">個人で成果が出る活用シーンは「整理・下書き・比較」の3系統</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Coworkは、個人の作業時間を圧迫しやすい知的業務を先に任せると効果が見えやすくなります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            特に、複数資料を跨ぐ情報整理、文書の初稿作成、比較表作成の3系統は再現性が高く、改善サイクルを回しやすい領域です。
          </p>
          <div className="mt-6 space-y-4">
            {personalUseCases.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.detail}</p>
                <p className="mt-3 text-xs leading-6 text-gray-600">{card.output}</p>
              </section>
            ))}
          </div>
          <h3 className="mt-10 text-xl font-semibold text-gray-900">コミュニティ投稿から見える初期運用の現実</h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            2026年2月時点のコミュニティ投稿（Reddit等）を要約すると、肯定と懸念の両方があります。公式情報だけでは見えにくい実運用の摩擦として、以下は押さえておく
            価値があります。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {communityVoices.map((voice) => (
              <li key={voice} className="pl-1 marker:text-gray-500">
                {voice}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ChatGPT・Geminiとの使い分けは「工程分担」で決めるのが最短
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            CoworkとChatGPT/Geminiを比較するときは、性能の優劣ではなく「どの工程を任せるか」で判断すると失敗が減ります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Coworkは深い作業、ChatGPTは対話と仕上げ、GeminiはWorkspace連携という分担が実務で機能しやすい構成です。ツールを1つに固定するより、工程で切り替える方が
            成果が安定します。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Anthropic Cowork</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">ChatGPT</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Gemini</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">使い分けの結論</th>
                </tr>
              </thead>
              <tbody>
                {toolComparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.cowork}</td>
                    <td className="px-4 py-4">{row.chatgpt}</td>
                    <td className="px-4 py-4">{row.gemini}</td>
                    <td className="px-4 py-4">{row.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            ClaudeとChatGPTの土台比較を先に確認したい場合は、
            <Link
              href="/academy/blog/gpt-vs-claude-comparison"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              GPT-4とClaude徹底比較
            </Link>
            を参照してください。比較軸を揃えてからCoworkを評価すると、導入判断の精度が上がります。
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="limitations"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">導入前に知る制約と注意点を先に確認する</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Coworkは便利ですが、研究プレビュー機能としての制約を理解しないまま導入すると、運用上のリスクが先に出ます。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            公式ヘルプでは、Team/Enterprise環境においてCowork活動が監査ログ・Compliance API・Data Exportsに含まれないことが明示されています。
            コンプライアンス要件が厳しい業務では、対象範囲を限定して使う判断が必要です。
          </p>
          <h3 className="mt-8 text-xl font-semibold text-gray-900">初期運用で必ず入れるべきチェック項目</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {riskChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-gray-500">
            情報基準: Anthropic support.claude.com（Getting started with Cowork / Cowork for Team and Enterprise plans）確認日: 2026年2月19日
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Coworkの導入判断で特に質問が多い論点を、2026年2月時点の公式情報ベースで簡潔に整理します。
          </p>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">Q. {item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="academy"
          className="mt-14 rounded-lg border border-will-primary/20 bg-will-lighter p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">AIリブートアカデミーで実務に定着させる</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            ツール理解だけでは成果が続かないため、生成AI活用力・自己理解とキャリア設計・仲間と学ぶ環境の3つを同時に設計することが重要です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、単に使い方を学ぶだけでなく、仕事で使える運用設計、強みや価値観の再整理、継続学習できるコミュニティを組み合わせて定着を支援します。
            Coworkのような新機能も、個人最適で終わらせず、キャリアと業務成果に接続する形で運用できます。
          </p>
        </motion.section>

        <LineCtaBox tone="green" />
      </article>
    </main>
  );
}
