"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type Gpt54PageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "OpenAI GPT-5.4",
  "ChatGPT 最新モデル",
  "GPT-5.4 使い方 2026",
] as const;

const tocItems = [
  { id: "answer-box", label: "要点まとめ（Answer Box）" },
  { id: "overview", label: "GPT-5.4とは？3行で理解する最大の変化" },
  { id: "models", label: "3モデルの使い分け：標準・Thinking・Pro" },
  { id: "performance", label: "GPT-5.2から何が変わったか：数値で確認" },
  { id: "howto", label: "今すぐ使える：プラン別の利用方法" },
  { id: "usecases", label: "ビジネス現場での活用シーン" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const answerPoints = [
  "GPT-5.4は2026年3月5日にOpenAIがリリース。GPT-5.4 Thinking（難度の高い推論向け）とGPT-5.4 Pro（最高性能）の2バリアントを同日公開。",
  "GPT-5.4 ThinkingはChatGPT Plus・Team・Proプランで利用可。GPT-5.4 Proはプロ・エンタープライズ専用。",
  "前モデル（GPT-5.2）比でエラー率33%減、GDPvalベンチマーク83%（人間の専門家水準超）。初めてコンピュータ操作機能をメインラインモデルに内包。",
] as const;

const modelComparisonRows = [
  {
    model: "GPT-5.4（標準）",
    target: "一般的なチャット・日常業務",
    plan: "全有料プラン",
    context: "最大1Mトークン（API）",
    thinking: "非推論型",
  },
  {
    model: "GPT-5.4 Thinking",
    target: "難度の高い分析・複雑な推論タスク",
    plan: "Plus・Team・Pro",
    context: "最大1Mトークン（API）",
    thinking: "推論型",
  },
  {
    model: "GPT-5.4 Pro",
    target: "最高精度が求められるプロ・企業業務",
    plan: "Pro・Enterprise限定",
    context: "最大1Mトークン（API）",
    thinking: "推論型（最高性能）",
  },
] as const;

const performanceRows = [
  {
    benchmark: "個別主張のエラー率",
    gpt54: "33%減（GPT-5.2比）",
    gpt52: "基準",
    note: "OpenAI発表値",
  },
  {
    benchmark: "全体回答のエラー率",
    gpt54: "18%減（GPT-5.2比）",
    gpt52: "基準",
    note: "OpenAI発表値",
  },
  {
    benchmark: "GDPval（44職種・知識労働）",
    gpt54: "83.0%（専門家比較）",
    gpt52: "71.0%",
    note: "OpenAI内部評価",
  },
  {
    benchmark: "OSWorld-Verified（PC操作）",
    gpt54: "75.0%（人間: 72.4%超）",
    gpt52: "47.3%",
    note: "State-of-the-art",
  },
  {
    benchmark: "スプレッドシートモデリング",
    gpt54: "87.5%",
    gpt52: "68.4%",
    note: "投資銀行アナリスト相当タスク",
  },
  {
    benchmark: "BrowseComp（ウェブ調査）",
    gpt54: "+17pt（絶対値）",
    gpt52: "基準",
    note: "粘り強いウェブ検索精度",
  },
] as const;

const planRows = [
  {
    plan: "ChatGPT Free",
    models: "GPT-5.4（標準）",
    note: "利用枠あり",
  },
  {
    plan: "ChatGPT Plus（月額$20）",
    models: "GPT-5.4 Thinking を含む",
    note: "推論モデルが使える最低プラン",
  },
  {
    plan: "ChatGPT Pro（月額$200）",
    models: "GPT-5.4 Pro を含む",
    note: "最高性能モデルが使えるプラン",
  },
  {
    plan: "ChatGPT Enterprise",
    models: "GPT-5.4 Pro を含む",
    note: "法人契約・データプライバシー強化版",
  },
  {
    plan: "OpenAI API",
    models: "GPT-5.4（標準）",
    note: "1Mトークンコンテキスト、従量課金",
  },
] as const;

const useCaseItems = [
  {
    title: "長文ドキュメントの一括処理",
    body: "APIで最大100万トークンのコンテキストを扱えるようになったことで、数百ページの契約書・技術仕様書・年次報告書をまるごと投入して要約・比較・チェックが可能になりました。従来は複数回に分けて処理していた作業が1リクエストで完結します。",
  },
  {
    title: "Excelモデリングとスプレッドシート業務",
    body: "ChatGPT for Excel・Google Sheets（ベータ）が同日公開されました。GPT-5.4を直接スプレッドシートに組み込み、財務モデルの構築・修正・数式の説明をチャット形式で実行できます。スプレッドシートモデリングのベンチマーク87.5%は、ジュニア投資銀行アナリスト相当のタスクで計測された値です。",
  },
  {
    title: "PC操作の自動化（コンピュータ使用）",
    body: "GPT-5.4は汎用モデルとして初めてコンピュータ操作（Computer Use）機能をネイティブで搭載。スクリーンショットを認識しながらマウス・キーボードを操作し、複数アプリをまたいだワークフローを実行できます。OSWorld-VerifiedのスコアはGPT-5.2の47.3%から75.0%へ大幅改善し、人間の72.4%を上回りました。",
  },
  {
    title: "調査・リサーチ業務の効率化",
    body: "BrowseCompベンチマーク（困難な情報をウェブで粘り強く探す能力）でGPT-5.2比+17ptを達成。競合調査・市場リサーチ・論文収集など、複数ページをまたいで情報を探す業務での精度が上がりました。",
  },
  {
    title: "メール・提案書・報告書の作成支援",
    body: "ビジネスメールの下書き作成や報告書の骨格生成での活用が広がっています。エラー率33%減により敬語表現や文体の一貫性が向上し、「作成時間が半分以下になった」という声が日本語ユーザーの間でも多く報告されています。定型的な案内メールや週次報告書、提案書の初稿生成で効果が出やすいため、初めてビジネス用途でAIを試す場合のエントリーポイントとしても最適です。",
  },
  {
    title: "会議録・長文ドキュメントの要約・構造化",
    body: "1Mトークンのコンテキストを活かし、1時間分の会議録をそのまま入力して「決定事項・宿題・次回アジェンダ」を自動抽出するユースケースがビジネスパーソンの間で広まっています。フォーマットを固定したプロンプト（出力形式をテーブル・マークダウン箇条書きで指定）を使うと安定した出力が得やすく、議事録テンプレートへの流用がそのまま可能になるという実践知見も蓄積されています。",
  },
] as const;

export default function Gpt54Page({ faqItems }: Gpt54PageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "GPT-5.4とは？【2026年3月速報】" },
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
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="GPT-5.4とは？【2026年3月速報】3つのモデルの違い・性能・今すぐ使える方法を解説"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            GPT-5.4とは？【2026年3月速報】3つのモデルの違い・性能・今すぐ使える方法を解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">
            公開日: 2026年3月6日
          </p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            OpenAIは2026年3月5日（日本時間3月6日未明）、新しいフラッグシップモデル「GPT-5.4」を公開しました。
            同時に推論特化版の「GPT-5.4 Thinking」と最高性能版の「GPT-5.4 Pro」も発表し、3モデルが揃ってリリースされています。
            （出典:{" "}
            <a
              href="https://openai.com/index/introducing-gpt-5-4/"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link"
            >
              OpenAI公式ブログ「Introducing GPT-5.4」2026-03-05
            </a>
            ）
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            前モデル（GPT-5.2）比でエラー率33%減、44職種の知識労働ベンチマークで人間の専門家水準を超えた83%というスコアが目立ちます。
            また、汎用モデルとして初めてコンピュータ操作（マウス・キーボード制御）機能をネイティブで搭載しました。
            本記事では「自分のプランで使えるか」「3モデルをどう使い分けるか」を中心に、今すぐ役立つ情報を整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        {/* Answer Box */}
        <motion.section
          id="answer-box"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-blue-900">要点まとめ（Answer Box）</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-900">
            {answerPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-600">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* LINE CTA ① */}
        <motion.section
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </motion.section>

        {/* Overview */}
        <motion.section
          id="overview"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            GPT-5.4とは？3行で理解する最大の変化
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            GPT-5.4は、OpenAIが「プロフェッショナルな仕事向けに最も高性能かつ効率的なフロンティアモデル」と位置付ける2026年3月時点の最新モデルです。
            GPT-5.3-Codexで培われたコーディング能力を初めて汎用モデルに統合したもので、コーディング・推論・コンピュータ操作を1つのモデルで扱える設計になっています。
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "① 精度の向上",
                body: "GPT-5.2比でエラー率33%減。知識労働44職種のベンチマーク（GDPval）で83%の専門家比較スコアを達成。",
              },
              {
                label: "② コンピュータ操作（初搭載）",
                body: "画面を認識しマウス・キーボードを操作する汎用モデルとして初めて「Computer Use」をネイティブで搭載。PC作業の自動化が可能に。",
              },
              {
                label: "③ 1Mトークンコンテキスト",
                body: "APIで最大100万トークンのコンテキストを処理可能。数百ページの文書を丸ごと扱えるのはOpenAIモデルとして過去最大。",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-lg border border-gray-200 bg-gray-50 p-5"
              >
                <p className="text-sm font-bold text-gray-900">{card.label}</p>
                <p className="mt-2 text-sm leading-7 text-gray-600">{card.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-base leading-8 text-gray-700">
            なお、GPT-5.2 ThinkingはGPT-5.4 Thinkingに置き換わり、3ヶ月後に廃止される予定です。
            現在GPT-5.2 Thinkingを使っている場合は、移行タイミングを確認しておくとよいでしょう。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            2026年のOpenAIモデル全体の動向については、{" "}
            <Link href="/academy/blog/gemini-vs-chatgpt-2026" className="blog-link">
              Gemini 3.1 vs ChatGPT 2026：どちらを選ぶべきか完全比較
            </Link>{" "}
            もあわせて参照ください。
          </p>
        </motion.section>

        {/* Models */}
        <motion.section
          id="models"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            3モデルの使い分け：標準・Thinking・Proの違い
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            GPT-5.4は同日リリースの3種類を含め、用途・プランによって選択肢が分かれます。
            混乱しやすいポイントなので、一覧表で整理します。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[640px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">モデル名</th>
                  <th className="py-3 pr-4 font-semibold text-gray-900">向いているタスク</th>
                  <th className="py-3 pr-4 font-semibold text-gray-900">利用可能プラン</th>
                  <th className="py-3 pr-4 font-semibold text-gray-900">コンテキスト（API）</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">タイプ</th>
                </tr>
              </thead>
              <tbody>
                {modelComparisonRows.map((row) => (
                  <tr key={row.model} className="border-b border-gray-200 align-top">
                    <td className="py-3 pr-4 font-semibold">{row.model}</td>
                    <td className="py-3 pr-4">{row.target}</td>
                    <td className="py-3 pr-4">{row.plan}</td>
                    <td className="py-3 pr-4">{row.context}</td>
                    <td className="py-3 pl-4">{row.thinking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-6 text-gray-500">
            ※ プラン・料金情報は変更される場合があります。最新の対応状況は
            <a
              href="https://chatgpt.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link"
            >
              ChatGPT公式料金ページ
            </a>
            をご確認ください（確認日: 2026-03-06）。
          </p>

          <h3 className="blog-h3 mt-8">Thinkingはいつ使うか</h3>
          <p className="mt-3 text-base leading-8 text-gray-700">
            GPT-5.4 Thinkingは「難度の高いリアルワールドの業務タスク」向けに設計された推論モデルです。
            複数ステップにわたる問題分析・法律・財務・医療分野の専門的な判断・コードのデバッグと仕様の矛盾検出など、
            通常のチャットでは答えが曖昧になりやすいタスクに向いています。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            日常的なメール文面の修正・簡単な要約・翻訳などには、レスポンス速度の速いGPT-5.4（標準）で十分です。
            Thinkingはトークン消費が大きいため、難度に応じて使い分けると費用対効果が上がります。
          </p>

          <h3 className="blog-h3 mt-8">Proが必要なケース</h3>
          <p className="mt-3 text-base leading-8 text-gray-700">
            GPT-5.4 ProはPro・Enterpriseプラン専用で、最高性能が必要な場面に限定されます。
            コンテキスト全体を使った複雑なエージェントワークフロー・大規模なコードベースの一括解析・
            複数の専門文書を参照しながらの高精度な法務・財務レビューなどが該当します。
            月額$200のProプランの場合、コスト対効果を考慮した上で利用するとよいでしょう。
          </p>
        </motion.section>

        {/* Performance */}
        <motion.section
          id="performance"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            GPT-5.2から何が変わったか：数値で確認
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            OpenAIはGPT-5.4の発表時に複数のベンチマーク結果を公開しています。
            数値はすべて
            <a
              href="https://openai.com/index/introducing-gpt-5-4/"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link"
            >
              OpenAI公式発表（2026-03-05）
            </a>
            に基づきます。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[600px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">評価軸</th>
                  <th className="py-3 pr-4 font-semibold text-gray-900">GPT-5.4</th>
                  <th className="py-3 pr-4 font-semibold text-gray-900">GPT-5.2</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">備考</th>
                </tr>
              </thead>
              <tbody>
                {performanceRows.map((row) => (
                  <tr key={row.benchmark} className="border-b border-gray-200 align-top">
                    <td className="py-3 pr-4 font-semibold">{row.benchmark}</td>
                    <td className="py-3 pr-4 text-will-primary font-semibold">{row.gpt54}</td>
                    <td className="py-3 pr-4">{row.gpt52}</td>
                    <td className="py-3 pl-4 text-xs text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="blog-h3 mt-8">GDPval 83%が示すこと</h3>
          <p className="mt-3 text-base leading-8 text-gray-700">
            GDPvalは法律・財務・医療・ITなど44職種の現役専門家が実際に行う業務タスクを再現した評価指標です。
            GPT-5.4がこれらのタスクで83%の比較スコアを出したということは、特定の定型業務では専門家水準の判断ができる場面が増えているを示しています。
            一方で「AIが専門家を完全に代替する」という意味ではなく、繰り返し性の高いタスクや情報の整理・構造化に特に強い、という解釈が適切です。
          </p>

          <h3 className="blog-h3 mt-8">コンピュータ操作の精度</h3>
          <p className="mt-3 text-base leading-8 text-gray-700">
            OSWorld-Verifiedはデスクトップ上での複雑な操作タスクを評価するベンチマークです。
            GPT-5.4のスコア75.0%は人間の72.4%を上回り、GPT-5.2の47.3%から大幅に向上しました。
            不動産税・資産税ポータル約3万件の入力タスクでは初回成功率95%、3回以内の成功率100%という実測値も示されています。
            これは定型的なフォーム入力・データ転記・ウェブ上の繰り返し操作を自動化できる水準を意味します。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            AIの精度・比較の基礎知識については
            <Link href="/academy/blog/what-is-generative-ai" className="blog-link">
              生成AIとは何か？仕組みと基礎を初心者向けに解説
            </Link>
            もあわせてご覧ください。
          </p>
        </motion.section>

        {/* How to use */}
        <motion.section
          id="howto"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            今すぐ使える：プラン別の利用方法
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            GPT-5.4は現在のChatGPTアカウントで、プランに応じたモデルをすぐに選択できます。
            追加のアプリインストールや特別な設定は不要です。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[560px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">プラン</th>
                  <th className="py-3 pr-4 font-semibold text-gray-900">使えるモデル</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {planRows.map((row) => (
                  <tr key={row.plan} className="border-b border-gray-200 align-top">
                    <td className="py-3 pr-4 font-semibold">{row.plan}</td>
                    <td className="py-3 pr-4">{row.models}</td>
                    <td className="py-3 pl-4 text-sm text-gray-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-6 text-gray-500">
            ※ 各プランの利用枠・制限は変更される場合があります。最新情報は
            <a
              href="https://chatgpt.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link"
            >
              ChatGPT公式料金ページ
            </a>
            をご確認ください（確認日: 2026-03-06）。
          </p>

          <h3 className="blog-h3 mt-8">ChatGPTでのモデル切り替え手順</h3>
          <ol className="blog-ol mt-4">
            {[
              "chatgpt.comにアクセスし、ログイン",
              "新しいチャットを開始",
              "入力欄上部のモデル名（例: GPT-5.2）をクリック",
              "「GPT-5.4 Thinking」または「GPT-5.4 Pro」を選択",
              "そのまま質問を入力して送信",
            ].map((step, i) => (
              <li key={i} className="blog-li">
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-base leading-8 text-gray-700">
            APIから利用する場合はモデルIDを <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">gpt-5.4</code> に指定します。
            API経由では最大100万トークンのコンテキストが利用可能です。
            APIの料金はOpenAIのインプット$2.50/1Mトークン・アウトプット$20/1Mトークンがサードパーティ情報として流通していますが、
            公式の最新料金は
            <a
              href="https://openai.com/api/pricing/"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link"
            >
              OpenAI API料金ページ
            </a>
            でご確認ください（確認日: 2026-03-06）[要確認: 公式価格は変動する可能性あり]。
          </p>

          <h3 className="blog-h3 mt-8">Xで共有されている実践Tips</h3>
          <ul className="blog-ul mt-4">
            {[
              "モデルはタスクの難度で使い分ける：日常的なメール・要約はGPT-5.4（標準）、法務・財務・複雑な分析はThinkingへ切り替えると費用対効果が上がる",
              "プロンプトに出力フォーマットを指定する：「箇条書き・テーブル・マークダウン形式で出力してください」と明示するとビジネス文書への流用がそのままできる",
              "1Mトークンを活かす：長大な文書を分割せず一括で送り「全体を読んだ上で要約・矛盾点の抽出」を1プロンプトで依頼するワークフローが好評",
              "Computer Use機能は事前確認が先決：企業利用の場合、組織のセキュリティポリシーとOpenAIの利用規約を確認し、権限を絞った環境でのテストを先行させる",
            ].map((tip, i) => (
              <li key={i} className="blog-li">{tip}</li>
            ))}
          </ul>

          {/* LINE CTA ② */}
          <div className="mt-10">
            <LineCtaBox />
          </div>
        </motion.section>

        {/* Use cases */}
        <motion.section
          id="usecases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ビジネス現場での活用シーン
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            GPT-5.4の性能向上は、特定の業務カテゴリに具体的な効果をもたらします。
            以下に、日本語のビジネス現場で試しやすいシーンを整理しました。
          </p>

          <div className="mt-6 space-y-6">
            {useCaseItems.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-gray-200 p-5"
              >
                <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>

          <h3 className="blog-h3 mt-8">Xユーザーが報告する活用の声</h3>
          <p className="mt-3 text-base leading-8 text-gray-700">
            Xユーザーの間では、GPT-5.4のリリースに対して「コンピュータ操作の自動化が実用レベルになった」という驚きの声が多く見られます。
            特にComputer Use機能については、「Excel入力やウェブフォームへの定型入力を任せられる」という具体的な業務自動化への期待が高まっています。
            一方で「誤操作で重要データを変更される可能性があるので、企業利用前にセキュリティポリシーの確認が必要」という慎重な意見も根強く、
            試験的に権限を絞った環境で動作確認してから本番運用に移行するアプローチが推奨されています。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            モデル比較の議論では、「コーディングや複雑な推論ではGPT-5.4 Thinkingが優位」「日本語の文章の自然さはClaudeと競合レベルまで向上した」
            という声が増えています。用途と予算に応じて複数のモデルを使い分けるユーザーが増えており、
            「日常業務はGPT-5.4標準、難易度の高い分析タスクにはThinkingを切り替える」という運用パターンが定着しつつあります。
          </p>

          <h3 className="blog-h3 mt-8">日本語での使い勝手</h3>
          <p className="mt-3 text-base leading-8 text-gray-700">
            GPT-5.4は日本語の文章生成・要約・翻訳でも前モデルからの改善が継続しています。
            ChatGPTの言語設定を日本語に変更することでUIも日本語化できます（設定 → Language → 日本語を選択）。
            エラー率の低下は日本語の長文処理でも効果が現れるため、
            社内報告書や法務文書の要約など、精度が求められる業務での活用が期待できます。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            Xユーザーの間では、ビジネスメールの敬語表現の自然さが改善されたという声が多く、
            「日本語の長文でもGPT-5.2より文脈が崩れにくくなった」という報告が見られます。
            一方で「機密情報の入力には注意が必要」「回答の正確性は必ず自分でチェックする」といった慎重な意見も根強く共有されており、
            補助ツールとして使いつつ最終確認は人間が行うスタイルが定着しています。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            AIを仕事に組み込む具体的な方法については、{" "}
            <Link href="/academy/blog/ai-prompt-writing-basics" className="blog-link">
              AIプロンプトの書き方入門：初心者が知っておくべき10のコツ
            </Link>
            も参考にしてください。
          </p>
        </motion.section>

        {/* FAQ */}
        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <dl className="mt-6 space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-lg border border-gray-200 p-5">
                <dt className="text-base font-bold text-gray-900">{item.question}</dt>
                <dd className="mt-2 text-sm leading-7 text-gray-700">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* LINE CTA ③ */}
        <motion.section
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </motion.section>

        {/* Academy CTA */}
        <motion.section
          className="mt-14 rounded-xl border border-will-primary/20 bg-will-lighter p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold text-gray-900">
            AI活用力とキャリアを同時に設計する
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            GPT-5.4のような新モデルが登場するたびに「使えているか、使えていないか」の差が広がっていきます。
            ツールの名前より大切なのは、どのビジネス課題に当てるかを判断する思考軸です。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、
            AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまで一体で設計しています。
            最新モデルをどの業務課題に当てるか、活用の判断軸と実務への組み込み方を
            考えたい方は、ぜひ学習プロセス全体を見直すことを検討してみてください。
          </p>
          <a
            href="https://ai-reboot.io/academy"
            className="mt-5 inline-block rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white hover:bg-will-primary/90"
          >
            AIリブートアカデミーの詳細を見る
          </a>
        </motion.section>
      </article>
    </main>
  );
}
