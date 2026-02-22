"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";

type FAQItem = {
  question: string;
  answer: string;
};

type MultimodalAiIntroPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const differenceRows = [
  {
    axis: "入力（扱える情報）",
    singleModal: "テキストのみ / 画像のみ など、1種類に限定されやすい",
    multimodal: "テキスト・画像・音声など複数を同時に扱い、相互参照しながら理解できる",
  },
  {
    axis: "アウトプット",
    singleModal: "画像分類のラベル、テキスト回答など、形式が固定されやすい",
    multimodal: "画像の状況説明、音声の要約、画面操作案内など、文脈に応じて柔軟に生成できる",
  },
  {
    axis: "業務適用のしやすさ",
    singleModal: "前処理で入力を揃える必要があり、運用設計の負担が増えやすい",
    multimodal: "実際の業務データ（写真・スクショ・音声）をそのまま扱いやすい",
  },
] as const;

const mechanismSteps = [
  {
    title: "1. 各モダリティを表現に変換する",
    body: "テキストはトークン、画像はパッチ/埋め込み、音声は特徴量などに変換し、同じ空間で扱える形にします。",
  },
  {
    title: "2. 情報を統合して推論する",
    body: "テキストと画像、音声などを相互参照できるように統合し、指示文と入力の整合を取りながら推論します。",
  },
  {
    title: "3. 目的に応じて出力する",
    body: "説明文、要約、チェックリスト、次のアクション提案など、業務で使える形式に整えて出力します（重要判断は人が確認する設計が基本です）。",
  },
] as const;

const modelCards = [
  {
    name: "GPT-5（例）",
    description:
      "テキスト・画像・音声を統合的に扱えるマルチモーダルモデルの代表例として知られ、会話・要約・画像理解などを1つの体験で扱いやすい傾向があります（対応範囲はプロダクト/プランで変わります）。",
    fit: "会話型UIで「見せて・聞かせて・まとめる」を一気通貫したいケース",
  },
  {
    name: "Gemini 2.5 Pro（例）",
    description:
      "マルチモーダル入力を前提にしたモデルとして語られることが多く、画像・テキストの理解や要約などで活用されます。提供モデルや名称は更新されるため、利用中の画面で選択肢を確認してください。",
    fit: "Google Workspaceと合わせて情報整理・要約を進めたいケース",
  },
  {
    name: "Claude Sonnet 4.6（例）",
    description:
      "文章理解と指示追従の強みで選ばれることがあり、画像を含む入力からの要約・整理で活用されることがあります（対応範囲はプラン/製品により異なります）。",
    fit: "長文・資料の要点抽出や、説明文の品質を重視したいケース",
  },
] as const;

const useCaseCards = [
  {
    title: "画像分析 × テキスト生成",
    body: "不具合写真・スクリーンショット・現場写真から状況を説明し、原因候補と確認手順を文章化します。",
    example: "例: 「このエラー画面の原因候補と、切り分け手順をチェックリストで」",
  },
  {
    title: "音声 → 議事録",
    body: "会議音声から要約・決定事項・ToDoを抽出し、フォーマットに整えます。",
    example: "例: 「議事録（要点/決定/ToDo/担当/期限）で出力して」",
  },
  {
    title: "動画要約",
    body: "研修・セミナー・社内共有動画を要点化し、学習用のメモやFAQ案に変換します。",
    example: "例: 「この動画の要点を3分で読める要約に」",
  },
] as const;

const departmentRows = [
  {
    department: "営業",
    change: "商談メモ（音声）→要点整理、提案資料（画像/スライド）→改善点抽出、競合資料→比較表作成。",
    firstStep: "商談後の“要点/次アクション”のテンプレ化から開始。",
  },
  {
    department: "マーケ",
    change: "LP/バナーのスクショ→改善提案、競合クリエイティブ→訴求分解、動画→要約→記事化。",
    firstStep: "週次の競合ウォッチ（スクショ要約）を仕組みにする。",
  },
  {
    department: "カスタマーサポート",
    change: "スクショ付き問い合わせ→状況説明→一次回答案、音声通話→要約→ナレッジ化。",
    firstStep: "問い合わせ分類とテンプレ回答作成を半自動化する。",
  },
  {
    department: "製造業",
    change: "設備の写真/動画→異常の兆候説明、点検音声→記録の自動整形、作業手順の動画→要点化。",
    firstStep: "不具合写真の一次診断（“原因候補+確認手順”）から始める。",
  },
] as const;

const practiceSteps = [
  {
    title: "Step 1. 無料で試す（小さく検証）",
    body: "まずは個人環境で、画像の説明文作成や音声要約など、結果の良し悪しを判断しやすいタスクで試します。",
  },
  {
    title: "Step 2. 業務適用（1ユースケースに絞る）",
    body: "対象業務、成功条件、入力可否、確認ポイントを決め、限定範囲で運用します。品質が安定しない場合は入力条件（撮影ルールなど）を先に整えます。",
  },
  {
    title: "Step 3. 本格導入（運用とガバナンス）",
    body: "ログ、権限分離、セキュリティ、コスト監視、評価指標を組み込み、改善サイクルを回せる状態にします。",
  },
] as const;

const cautionItems = [
  {
    title: "プライバシー/機密情報",
    body: "画像・音声は個人情報や機密が含まれやすい入力です。送信可否ルール、マスキング、権限分離、ログ管理を先に決めます。",
  },
  {
    title: "精度の限界（誤認識・幻覚）",
    body: "モデルは誤認識や誤った推論をする可能性があります。重要判断は人が確認し、出力の根拠（入力のどこから判断したか）を残す設計が安全です。",
  },
  {
    title: "コスト/運用負荷",
    body: "画像や音声はデータ量が大きく、コストが読みづらくなります。対象業務を絞ってKPIを定義し、上限を決めた運用から始めます。",
  },
] as const;

const keywordTags = ["マルチモーダルAIとは", "マルチモーダルAI活用", "画像×テキスト×音声"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "definition", label: "マルチモーダルAIとは？" },
  { id: "mechanism", label: "マルチモーダルAIの仕組み" },
  { id: "models", label: "代表的なマルチモーダルAIモデル" },
  { id: "business-use", label: "ビジネス活用シーン" },
  { id: "workflow-change", label: "マルチモーダルAIで変わる業務" },
  { id: "getting-started", label: "始め方と実践ステップ" },
  { id: "future-and-cautions", label: "今後の展望と注意点" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "AIリブートアカデミー" },
] as const;

export default function MultimodalAiIntroPage({ faqItems }: MultimodalAiIntroPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "マルチモーダルAI入門" },
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
                title="マルチモーダルAIとは？テキスト・画像・音声を横断する次世代AIを解説"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            マルチモーダルAIとは？テキスト・画像・音声を横断する次世代AIを解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            マルチモーダルAIは、テキストだけでは扱いにくい「画像・音声・動画」を業務に取り込めるようにする技術です。
            この記事では、定義・仕組み・活用シーン・始め方・注意点まで、導入判断に必要なポイントを結論先出しで整理します。
            マルチモーダルAIは便利そうに見える一方で、「結局何ができるのか」「どの業務に効くのか」が掴みにくい概念です。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <figure className="my-8">
          <Image src="/images/blog/multimodal-ai-intro/slide-01.png" alt="マルチモーダルAIとは？" width={800} height={450} className="rounded-lg" />
        </figure>

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            マルチモーダルAIは、テキストだけでは扱いにくい「画像・音声・動画」を業務に取り込めるようにする技術です。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              マルチモーダルAIは、テキスト・画像・音声など複数の入力を統合して理解・生成するAIで、業務データの“現実の形”に近い入力を扱えます。
            </li>
            <li className="pl-1 marker:text-gray-500">
              効果が出やすいのは「画像分析×テキスト生成」「音声→議事録」「動画要約」など、情報の行き来が多い仕事です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              導入は無料トライアル→限定業務で運用→ガバナンス整備の順で、小さく始めると失敗しにくくなります。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="definition" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            マルチモーダルAIとは？（定義、従来のAIとの違い）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            マルチモーダルAIは、複数の情報（モダリティ）をまとめて扱い、文脈を統合して推論・生成するAIです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            これまでのAIは「テキストだけ」「画像だけ」といった単一モダリティが中心でした。一方、実務の入力は写真・スクショ・音声・資料が混ざります。ここを横断して扱えるのがマルチモーダルAIです。
          </p>
          <figure className="my-8">
            <Image src="/images/blog/multimodal-ai-intro/slide-02.png" alt="従来AI（単一モーダル）からマルチモーダルAIへ" width={800} height={450} className="rounded-lg" />
          </figure>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">従来（単一モーダル）</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">マルチモーダルAI</th>
                </tr>
              </thead>
              <tbody>
                {differenceRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.singleModal}</td>
                    <td className="py-4 pl-4">{row.multimodal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            生成AIの全体像は{" "}
            <Link href="/academy/blog/what-is-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIとは？の記事
            </Link>{" "}
            で整理しています。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="mechanism" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            マルチモーダルAIの仕組み（テキスト+画像+音声の統合処理）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            仕組みは「入力を同じ形式に変換 → 統合して推論 → 目的の形式で出力」という流れです。実装はモデルやプロダクトにより異なりますが、基本の考え方は共通します。
          </p>
          <figure className="my-8">
            <Image src="/images/blog/multimodal-ai-intro/slide-03.png" alt="仕組み: 入力→統合・推論→出力" width={800} height={450} className="rounded-lg" />
          </figure>
          <figure className="my-8">
            <Image src="/images/blog/multimodal-ai-intro/slide-04.png" alt="視覚: 画像分析×テキスト生成" width={800} height={450} className="rounded-lg" />
          </figure>
          <div className="mt-6 space-y-4">
            {mechanismSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            マルチモーダル入力を含む「自律実行」の設計は、AIエージェントの文脈と一緒に考えると整理しやすくなります。{" "}
            <Link href="/academy/blog/what-is-ai-agent" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェントとは？の記事
            </Link>{" "}
            も併せて参照してください。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="models" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            代表的なマルチモーダルAIモデル（GPT-5/Gemini 2.5 Pro/Claude Sonnet 4.6 など）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            代表例としてよく挙がるモデルを、選び方の観点で整理します。実際の対応モダリティや提供形態はプラン/製品により変わるため、導入前に必ず最新の仕様を確認してください。
          </p>
          <figure className="my-8">
            <Image src="/images/blog/multimodal-ai-intro/slide-05.png" alt="聴覚: 音声・動画→要約・議事録" width={800} height={450} className="rounded-lg" />
          </figure>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {modelCards.map((card) => (
              <section key={card.name} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.name}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.description}</p>
                <p className="mt-4 text-sm font-semibold text-gray-900">向いているケース</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{card.fit}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="business-use" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ビジネス活用シーン（画像分析×テキスト生成/音声→議事録/動画要約）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            キーワードは「入力（現場のデータ）→説明→次アクション」です。画像認識とテキスト生成をつなげると、判断と作業の前後が一気に短縮されます。
          </p>
          <figure className="my-8">
            <Image src="/images/blog/multimodal-ai-intro/slide-06.png" alt="部門別: 営業/マーケ/CS/製造" width={800} height={450} className="rounded-lg" />
          </figure>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {useCaseCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.body}</p>
                <p className="mt-3 text-xs font-semibold text-gray-900">プロンプト例</p>
                <p className="mt-1 text-sm leading-7 text-gray-700">{card.example}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            画像生成の活用は{" "}
            <Link
              href="/academy/blog/ai-image-generation-guide"
              className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI画像生成ガイド
            </Link>{" "}
            にまとめています。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="workflow-change" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            マルチモーダルAIで変わる業務（営業/マーケ/カスタマーサポート/製造業）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            “文章で指示して、画像や音声の内容を整理させる”だけでも、作業の入口が大きく変わります。部門別に、変化しやすいポイントを整理します。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">部門</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">変わるポイント</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">最初の一手</th>
                </tr>
              </thead>
              <tbody>
                {departmentRows.map((row) => (
                  <tr key={row.department} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.department}</th>
                    <td className="py-4 px-4">{row.change}</td>
                    <td className="py-4 pl-4">{row.firstStep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="getting-started" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            始め方と実践ステップ（無料で試す→業務適用→本格導入）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            導入のコツは「最初から万能にしない」ことです。1ユースケースで成功パターンを作り、横展開します。
          </p>
          <figure className="my-8">
            <Image src="/images/blog/multimodal-ai-intro/slide-07.png" alt="導入の3ステップ: 無料で試す→Pilot→Scale" width={800} height={450} className="rounded-lg" />
          </figure>
          <div className="mt-6 space-y-4">
            {practiceSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            社内ナレッジを活用する場合は、RAGの考え方も役立ちます。{" "}
            <Link href="/academy/blog/what-is-rag" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              RAGとは？の記事
            </Link>{" "}
            もあわせて参照してください。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.055 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="future-and-cautions" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            今後の展望と注意点（技術進化/プライバシー/精度限界）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            マルチモーダルは体験が分かりやすい一方、入力がリッチになるほどリスクも増えます。運用設計まで含めて考えるのが実務のポイントです。
          </p>
          <figure className="my-8">
            <Image src="/images/blog/multimodal-ai-intro/slide-08.png" alt="運用前の3チェックポイント: プライバシー/精度/コスト" width={800} height={450} className="rounded-lg" />
          </figure>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {cautionItems.map((item) => (
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
          viewport={{ once: true, amount: 0.055 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/what-is-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIとは？初心者向けにわかりやすく解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-ai-agent" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントとは？定義・種類・作り方を解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-rag" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAG（検索拡張生成）とは？仕組み・メリット・活用事例を解説
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-image-generation-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI画像生成おすすめツール比較｜使い方と選び方
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
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ
          </h2>
          <figure className="my-8">
            <Image src="/images/blog/multimodal-ai-intro/slide-09.png" alt="まとめ" width={800} height={450} className="rounded-lg" />
          </figure>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">マルチモーダルAIは、テキスト・画像・音声など複数の入力を統合して理解・生成するAIで、業務データの“現実の形”に近い入力を扱えます。</li>
            <li className="pl-1 marker:text-gray-500">効果が出やすいのは「画像分析×テキスト生成」「音声→議事録」「動画要約」など、情報の行き来が多い仕事です。</li>
            <li className="pl-1 marker:text-gray-500">導入は無料トライアル→限定業務で運用→ガバナンス整備の順で、小さく始めると失敗しにくくなります。</li>
          </ul>
        </motion.section>
<motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
	        >
	          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
	            AIリブートアカデミーで「使える活用」まで落とし込む
	          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            マルチモーダルAIは、試して終わりではなく「入力ルール」「確認ポイント」「評価指標」を決めて運用に落とすことで成果が出ます。
          </p>
	          <p className="mt-4 text-base leading-8 text-gray-700">
	            AIリブートアカデミーでは、非エンジニアでも実務に接続できる学び方に加えて、100日間の伴走で仲間と一緒に社内展開まで走り切れる環境があります。
	          </p>
          <figure className="my-8">
            <Link href="/academy/seminars">
              <Image src="/images/blog/multimodal-ai-intro/slide-10.png" alt="マルチモーダルAI活用を始める" width={800} height={450} className="rounded-lg" />
            </Link>
          </figure>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              アカデミーを見る
            </Link>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
            >
              無料セミナーを探す
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
