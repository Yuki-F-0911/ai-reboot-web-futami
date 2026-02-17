"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type WhatIsRagPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["RAGとは", "検索拡張生成", "社内データ活用"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "definition", label: "RAGとは？（基本概念）" },
  { id: "how-it-works", label: "RAGの仕組み（検索→コンテキスト→生成）" },
  { id: "why-now", label: "RAGが注目される背景" },
  { id: "pros-cons", label: "メリットと限界" },
  { id: "use-cases", label: "活用事例" },
  { id: "getting-started", label: "RAGを始めるには" },
  { id: "rag-vs-finetuning", label: "RAGとファインチューニングの違い" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "cta", label: "AIリブートアカデミーで学ぶ" },
] as const;

const flowSteps = [
  {
    title: "1. 検索（Retrieval）",
    body: "質問に関連する文書を、ナレッジベース（社内規程・FAQ・Wikiなど）から探して取り出します。",
    hint: "例: ベクトル検索（意味検索）/ キーワード検索",
  },
  {
    title: "2. コンテキスト付与（Augmentation）",
    body: "取り出した文書の一部を「根拠」として、LLMに渡す入力（プロンプト）へ組み込みます。",
    hint: "例: チャンク（分割）/ 重要箇所の抽出 / 引用の整形",
  },
  {
    title: "3. 生成（Generation）",
    body: "LLMがコンテキストを参照しながら回答を生成します。必要に応じて参照元を提示します。",
    hint: "例: 回答 + 根拠（引用） + 次アクション",
  },
] as const;

const benefitItems = [
  {
    title: "精度（根拠）を上げやすい",
    body: "回答の土台となる文書を先に渡せるため、社内ルールや製品仕様など「根拠がある領域」で品質を安定させやすくなります。",
  },
  {
    title: "最新情報に追従しやすい",
    body: "モデルを再学習しなくても、ナレッジベースを更新すれば反映できます（ただし索引更新や権限設計は必要です）。",
  },
  {
    title: "説明責任を持たせやすい",
    body: "参照文書（引用）を残せる設計にすると、レビューや監査、運用改善が進めやすくなります。",
  },
] as const;

const limitationItems = [
  {
    title: "検索品質に依存する",
    body: "検索で適切な文書が取れないと、生成品質も上がりません。データ整備（重複、古い版、表記揺れ）と評価が重要です。",
  },
  {
    title: "構築・運用コストが増える",
    body: "データ取り込み、分割（チャンク）、埋め込み、索引、権限制御、ログ分析などの運用が必要になります。",
  },
  {
    title: "遅延・コストが増えやすい",
    body: "検索と生成を組み合わせるため、単純なチャットよりレイテンシとコストが増える傾向があります。",
  },
] as const;

const useCaseCards = [
  {
    title: "社内FAQ / ヘルプデスク",
    body: "人事・総務・情シスの問い合わせ一次回答を、社内規程や申請手順を根拠にしながら支援します。",
  },
  {
    title: "ナレッジベース検索",
    body: "Wiki、議事録、設計書などから「関連資料をまとめて提示」し、意思決定の初動を速くします。",
  },
  {
    title: "カスタマーサポート",
    body: "製品マニュアルや過去の回答を参照しながら、返信文の下書き・FAQ提案・担当者への引き継ぎを支援します。",
  },
  {
    title: "法務・契約文書の検索",
    body: "条項の探し当てや類似契約の参照を補助します（最終判断は必ず専門家が行う前提で運用します）。",
  },
] as const;

const gettingStartedChecklist = [
  "対象データを決める（規程/FAQ/手順書など、根拠となる資料）",
  "アクセス権限を定義する（誰が何を検索できるか）",
  "文書を整備する（重複排除、版管理、表記揺れの抑制）",
  "検索方式を選ぶ（キーワード/ベクトル/ハイブリッド）",
  "評価指標を決める（正答率、根拠一致、回答時間、一次解決率など）",
] as const;

const frameworkRows = [
  {
    name: "LangChain",
    description:
      "LLMアプリの部品（検索、プロンプト、ツール連携）を組み合わせてRAGを組むためのフレームワークです。",
  },
  {
    name: "LlamaIndex",
    description:
      "ドキュメント取り込み（インデクシング）や検索、評価を中心に、RAGの基盤づくりを支援するフレームワークです。",
  },
  {
    name: "Azure AI Search",
    description:
      "検索基盤（インデックス、フィルタ、権限制御など）をマネージドで提供するサービスで、企業環境の検索実装に使われることがあります。",
  },
] as const;

export default function WhatIsRagPage({ faqItems }: WhatIsRagPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "RAG（検索拡張生成）とは？" },
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
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            RAG（検索拡張生成）とは？仕組み・メリット・活用事例をわかりやすく解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            RAGは「社内データを使いたいが、LLMがもっともらしい誤りを言うのが不安」という場面で検討されがちです。
            この記事では、RAGの定義・仕組み・メリットと限界・活用事例・始め方まで、導入判断に必要なポイントを結論先出しで整理します。
            筆者はまず、検索対象となる“正本”の資料を決めるところから着手するのが最短だと感じています。
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
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              RAGは、検索で根拠を取り出し、その情報を参照しながらLLMが回答を生成するアーキテクチャです。
            </li>
            <li className="pl-1 marker:text-gray-500">
              効果は「検索品質」と「データ整備」に強く依存するため、運用設計（権限・更新・ログ）が成功の鍵になります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              知識の更新が頻繁な領域ではRAGが有利で、文章トーンや手順の型を固定したい場合はファインチューニングが有利になり得ます。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="definition" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            RAGとは？（Retrieval-Augmented Generation の基本概念）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: RAGは「検索で関連文書を取り出し、その内容を参照して生成する」ことで、回答の根拠を外部データに持たせる方式です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            生成AI（LLM）は学習済みパラメータに知識を持ちますが、社内規程や最新仕様などは学習時点に存在しない場合があります。RAGは、その不足を検索で補う設計です。用語としてのRAGは、Lewis et al.
            (2020) が提案した Retrieval-Augmented Generation を指します。
          </p>
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
            <p className="font-semibold text-slate-900">用語メモ</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li className="pl-1">
                <span className="font-semibold text-slate-900">検索（Retrieval）</span>: 質問に関連する文書を探して取り出す処理
              </li>
              <li className="pl-1">
                <span className="font-semibold text-slate-900">コンテキスト</span>: LLMに渡す参照情報（根拠）で、回答の材料になる文章断片
              </li>
              <li className="pl-1">
                <span className="font-semibold text-slate-900">ベクトル検索</span>: 文章を埋め込み（数値ベクトル）に変換し、意味の近さで検索する方法
              </li>
            </ul>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            関連理解として、まずは{" "}
            <Link href="/academy/blog/what-is-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIとは
            </Link>
            を押さえ、次に{" "}
            <Link href="/academy/blog/what-is-ai-agent" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェントとは
            </Link>
            で「検索やツールを使うAI」の全体像を見ると理解が早くなります。
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
          <h2 id="how-it-works" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            RAGの仕組み（検索→コンテキスト付与→生成の3ステップ）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: RAGは「検索 → 参照情報をプロンプトへ追加 → 生成」の3ステップで、生成の前提を“根拠付き”にします。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            図解風に言うと、LLMにいきなり回答を作らせるのではなく、先に「材料（根拠）」を集めてから文章化させる流れです。これにより、社内ルールや製品仕様のような外部知識を回答へ織り込めます。
          </p>

          <div className="mt-7 rounded-xl border border-slate-200 bg-white p-5">
            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
              {flowSteps.map((step, index) => (
                <div key={step.title} className="contents">
                  <section className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700">{step.body}</p>
                    <p className="mt-3 text-xs font-medium leading-6 text-slate-600">{step.hint}</p>
                  </section>
                  {index < flowSteps.length - 1 ? (
                    <div className="hidden items-center justify-center md:flex">
                      <span className="text-2xl font-semibold text-slate-300">→</span>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">実装の勘所（よく出る用語）</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">チャンク（chunk）</span>: 長い文書を検索しやすい単位に分割した断片。分割が粗すぎるとノイズが増え、細かすぎると文脈が欠けやすくなります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">埋め込み（embedding）</span>: 文章を意味を保った数値表現に変換する処理。ベクトル検索の前提になります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">再ランキング（reranking）</span>: 取得した候補文書を別モデルで並べ替え、より関連性の高い根拠を上位にする手法です。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="why-now" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            RAGが注目される背景（ハルシネーション対策、社内データ活用）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: RAGが注目される理由は、(1) 根拠を参照させて誤りを減らす、(2) 社内データを安全に使う入口になる、の2点です。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">ハルシネーション（もっともらしい誤り）対策</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                LLMは、回答の“形”は上手でも、根拠のない断定をしてしまうことがあります。RAGは検索で根拠を与え、回答の前提を固定しやすくします（ただし検索が外れると逆効果になることもあります）。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">社内データ活用（学習させずに参照する）</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                ファイルをモデルに学習させず、必要なときに必要な範囲だけ参照させる運用ができます。権限管理やログ設計と組み合わせることで、企業利用での現実解になりやすいアプローチです。
              </p>
            </section>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            企業側の進め方は{" "}
            <Link
              href="/academy/blog/corporate-ai-adoption-guide"
              className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              企業AI導入ガイド
            </Link>
            も参考になります。
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
          <h2 id="pros-cons" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            RAGのメリットと限界（精度向上・最新情報対応 vs 構築コスト・検索精度依存）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: RAGは「根拠で精度を上げる」点が強みですが、検索・データ整備・運用のコストが増えます。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-lg font-semibold text-emerald-950">メリット</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-950/90">
                {benefitItems.map((item) => (
                  <li key={item.title} className="pl-1 marker:text-emerald-700/60">
                    <span className="font-semibold">{item.title}</span>: {item.body}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-lg border border-rose-200 bg-rose-50 p-5">
              <h3 className="text-lg font-semibold text-rose-950">限界 / 注意点</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-950/90">
                {limitationItems.map((item) => (
                  <li key={item.title} className="pl-1 marker:text-rose-700/60">
                    <span className="font-semibold">{item.title}</span>: {item.body}
                  </li>
                ))}
              </ul>
            </section>
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
          <h2 id="use-cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            RAGの活用事例（社内FAQ、ナレッジベース、カスタマーサポート、法務文書検索）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: RAGは「参照すべき資料がある業務」で効果が出やすく、問い合わせ対応・検索・下書き作成のような反復作業と相性が良いです。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {useCaseCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.body}</p>
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
          <h2 id="getting-started" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            RAGを始めるには（主要フレームワーク: LangChain, LlamaIndex, Azure AI Search 等）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 最初は「対象データ」「権限」「評価」を決め、検索の小さな成功（答えられる質問が増える）を積み上げるのが安全です。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">最小チェックリスト</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {gettingStartedChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">実務でよく使う設計ポイント（2026年の定番）</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">検索はハイブリッドが基本:</span> キーワード（BM25等）+ ベクトル検索を組み合わせ、必要なら再ランキング（reranking）で根拠の質を上げます。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">ベクトルDBは要件で選ぶ:</span> まずはPostgres（pgvector）で小さく始め、スケールや運用要件でPinecone / Weaviate / Qdrant / Milvusなどを検討します。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">チャンキングは「見出し+意味のまとまり」重視:</span> 固定長だけでなく、見出し/段落で分割し、必要に応じて重なり（overlap）を入れると文脈欠けが減ります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">評価は「検索」と「回答」を分ける:</span> まず検索のRecall@k等で根拠取得を検証し、その上で回答の根拠一致（faithfulness）や再質問率など運用指標で改善します。
            </li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">主要フレームワーク / 検索基盤</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">名称</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">概要</th>
                </tr>
              </thead>
              <tbody>
                {frameworkRows.map((row) => (
                  <tr key={row.name} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.name}</th>
                    <td className="py-4 pl-4">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            学習の進め方は{" "}
            <Link
              href="/academy/blog/how-to-learn-generative-ai"
              className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              生成AIの学習ロードマップ
            </Link>
            に沿って、まずは小さな実装と評価から始めるのがおすすめです。
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
          <h2 id="rag-vs-finetuning" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            RAGとファインチューニングの違い（使い分け判断基準）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 知識を最新化したいならRAG、文章の型や判断基準を“学習”で固定したいならファインチューニング、という整理が基本です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">観点</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">RAG</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">ファインチューニング</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">知識の更新頻度</th>
                  <td className="py-4 px-4">更新が頻繁でも、データ差し替えで追従しやすい</td>
                  <td className="py-4 pl-4">再学習が必要になりやすい</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">目的</th>
                  <td className="py-4 px-4">根拠を参照して回答する（社内規程、仕様、FAQ）</td>
                  <td className="py-4 pl-4">出力の癖や手順を学習する（トーン、分類、定型判断）</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">失敗しやすい点</th>
                  <td className="py-4 px-4">検索が外れると、根拠のない回答になる</td>
                  <td className="py-4 pl-4">データ品質が悪いと、誤った癖を学習してしまう</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">運用の中心</th>
                  <td className="py-4 px-4">データ整備、検索評価、権限、ログ改善</td>
                  <td className="py-4 pl-4">学習データ設計、評価、再学習サイクル</td>
                </tr>
              </tbody>
            </table>
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
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/rag-use-cases" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAG（検索拡張生成）の活用事例8選｜業種・業務別に解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-ai-agent" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントとは？定義・種類・作り方を初心者向けに解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-agent-build-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントの作り方（実装ガイド）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/python-ai-intro" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Python × AI入門（学習ロードマップ）
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
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIリブートアカデミーで学ぶ（体系化して実務へつなげる）
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            RAGは「検索」「データ整備」「評価」「運用」の設計まで含めて考えると、成果が出やすくなります。AIを体系的に学び、実務に落とし込む全体像を整理したい方はアカデミーの案内もご覧ください。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              AIリブートアカデミーを見る
            </Link>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              無料セミナーを見る
            </Link>
            <Link
              href="/academy/blog"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              ブログ一覧へ
            </Link>
          </div>
        </motion.section>

        <section className="mt-12 border-t border-slate-200 pb-4 pt-10">
          <h2 className="text-lg font-bold text-slate-900">監修・更新日</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            監修: AI REBOOT編集部 / 最終更新日: 2026年2月17日
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            参考: Lewis et al. (2020) Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks（RAG原論文）
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            <a
              href="https://arxiv.org/abs/2005.11401"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              論文（arXiv）を見る
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
