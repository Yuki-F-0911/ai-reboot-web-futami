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

type OllamaLocalLlmGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["Ollama 使い方", "ローカルLLM", "モデル選定", "安全運用"] as const;

const tocItems = [
  { id: "conclusion", label: "結論: 小さく始めて運用を先に決める" },
  { id: "what-is-ollama", label: "Ollamaの基本と向いているケース" },
  { id: "setup", label: "インストールから初回実行まで" },
  { id: "model-selection", label: "モデル選定の実務判断" },
  { id: "security-ops", label: "セキュリティと運用設計" },
  { id: "hybrid-decision", label: "ローカル単独かCloud/API併用か" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連記事" },
  { id: "academy-cta", label: "アカデミーで次の一歩へ" },
  { id: "cta", label: "LINEで継続学習する" },
] as const;

const setupRows = [
  {
    os: "macOS",
    steps: "公式インストーラーを導入し、ターミナルで `ollama run llama3.2` を実行して動作確認する。",
    checkpoint: "初回実行時にモデルの取得が完了し、対話応答が返ることを確認する。",
  },
  {
    os: "Windows",
    steps: "公式配布のインストーラーでセットアップし、PowerShellから `ollama run llama3.2` を実行する。",
    checkpoint: "GPU未認識時はCPU実行へ切り替わるため、応答遅延とリソース使用率を確認する。",
  },
  {
    os: "Linux",
    steps: "公式ドキュメントに沿って導入し、CLIでモデルを取得して実行する。",
    checkpoint: "ドライバと実行環境の整合性を確認し、再起動後もサービスが起動することを確認する。",
  },
] as const;

const modelSelectionRows = [
  {
    phase: "Step 1: 用途を固定する",
    details: "要約、草案作成、分類、コード支援など対象業務を1つに絞る。最初から複数用途を混ぜない。",
    output: "評価する業務と指標（正確性・速度・コスト）が明確になる。",
  },
  {
    phase: "Step 2: 小さいモデルから検証する",
    details: "端末スペックに合わせて軽量モデルから開始し、必要なら段階的に大きいモデルへ移行する。",
    output: "推論速度と品質のバランスを短期間で把握できる。",
  },
  {
    phase: "Step 3: 量子化タグを比較する",
    details: "同一モデルでもタグ差で速度・品質が変わるため、2〜3パターンで同じ評価セットを回す。",
    output: "再現性のある選定理由をチームで共有できる。",
  },
] as const;

const operationChecklist = [
  "API待受アドレスを確認し、意図しない外部公開を防ぐ",
  "機密データを扱う入力ルール（禁止・匿名化・承認）を決める",
  "モデル更新時の評価手順とロールバック手順を文書化する",
  "障害時の一次対応者と復旧期限を明確にする",
  "週次で遅延、失敗率、再実行率を確認する",
  "利用ログの保管期間とアクセス権限を定義する",
] as const;

const decisionMatrix = [
  {
    axis: "優先事項",
    localOnly: "機密性、低遅延、オフライン実行を優先したい",
    hybrid: "共有運用、拡張性、外部連携を優先したい",
  },
  {
    axis: "向いている開始フェーズ",
    localOnly: "個人検証、部門PoC、社内限定運用",
    hybrid: "複数部門展開、共通基盤化、スケール運用",
  },
  {
    axis: "注意点",
    localOnly: "端末依存の性能差、更新作業の運用負荷",
    hybrid: "認証設計、料金変動、権限管理の複雑化",
  },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaTitle = "AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）";
const lineCtaBody =
  "業務で再利用できるAI活用の型、導入判断で迷いやすい論点、最新ニュースの要点を毎週1本で整理して届けます。";
const lineCtaButtonLabel = "今すぐ無料で登録する（30秒）";

function LineCtaBox({ className = "blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" }: { className?: string }) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-green-900">{lineCtaTitle}</p>
      <p className="mt-3 text-sm leading-7 text-green-900">{lineCtaBody}</p>
      <div className="mt-4">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="line-cta-button inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
        >
          {lineCtaButtonLabel}
        </a>
      </div>
    </section>
  );
}

export default function OllamaLocalLlmGuidePage({ faqItems }: OllamaLocalLlmGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "OllamaローカルLLM実務ガイド" },
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
                title="Ollamaで始めるローカルLLM実務ガイド｜導入手順・モデル選定・安全運用【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Ollamaで始めるローカルLLM実務ガイド｜導入手順・モデル選定・安全運用【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            ローカルLLMは、データ管理と応答速度を自分たちで制御しやすい一方で、モデル更新・公開設定・運用責任まで含めて設計しないと継続利用が難しくなります。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            本記事では、Ollamaの導入手順を最短で押さえつつ、モデル選定とセキュリティ運用の判断軸を整理します。料金や仕様は更新されるため、本文は2026年2月20日時点の公式情報を基準に構成しています。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            結論: Ollamaは「小さく始めて運用ルールを先に固定する」と失敗しにくい
          </h2>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              最初は1業務に絞り、軽量モデルで評価セットを回してから段階的に拡張する。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              モデル性能より先に、公開設定・ログ管理・更新手順を決めると運用が安定する。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              ローカル単独かCloud/API併用かは、機密性・共有運用・拡張要件で判断する。
            </li>
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            生成AI全体の基礎整理が必要な場合は
            <Link href="/academy/blog/what-is-generative-ai" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIとは？初心者向けにわかりやすく解説
            </Link>
            から先に確認すると、ツール選定の判断がしやすくなります。
          </p>
        </motion.section>

        <div className="mt-10">
          <LineCtaBox />
        </div>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-is-ollama" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            Ollamaとは何か: ローカルLLM運用のメリットと前提を最初に確認する
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            Ollamaは、ローカル環境でLLMを実行し、CLIとローカルAPIで扱える実行基盤です。
          </p>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            業務で使う際の価値は「外部送信を抑えたデータ取り扱い」「待ち時間の予測」「自社基準での運用設計」にあります。反対に、モデル更新管理や端末性能差への対応は自分たちの責任になります。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              機密性を重視し、外部サービスへの送信を最小化したいチームに向いている。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              PoC段階で短い検証ループを回したいチームに向いている。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              運用責任者を置かずに導入すると、更新停止や性能劣化の検知遅れが起きやすい。
            </li>
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            AIエージェント運用まで視野に入れる場合は、
            <Link href="/academy/blog/what-is-ai-agent" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェントとは
            </Link>
            と
            <Link href="/academy/blog/ai-agent-deployment-checklist" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェント導入チェックリスト
            </Link>
            をあわせて参照してください。
          </p>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="setup" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            インストールから初回実行まで: OS別に最短導線を固定する
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            公式ドキュメントに沿って導入し、最初の確認は `ollama run llama3.2` の実行可否で統一すると切り分けが速くなります。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">OS</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">導入の要点</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">確認ポイント</th>
                </tr>
              </thead>
              <tbody>
                {setupRows.map((row) => (
                  <tr key={row.os} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.os}</th>
                    <td className="py-4 px-4">{row.steps}</td>
                    <td className="py-4 pl-4">{row.checkpoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">初回セットアップで詰まりやすいポイント</h3>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">モデル取得中のネットワーク制限で初回実行が完了しない。</li>
            <li className="blog-li pl-1 marker:text-gray-500">GPU未検出でCPU実行になり、体感速度が想定より遅くなる。</li>
            <li className="blog-li pl-1 marker:text-gray-500">環境更新後に再起動手順が未整備で、動作確認が属人化する。</li>
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            端末側の情報管理ルールが未整備な場合は、
            <Link href="/academy/blog/ai-data-leak-patterns" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIの情報漏えいパターンと対策
            </Link>
            を先に整備しておくと導入後の手戻りを減らせます。
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
          <h2 id="model-selection" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            モデル選定で失敗しない方法: サイズ・量子化・用途を同時に見る
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            モデル選定は「大きいほど良い」ではなく、業務要件と端末制約の両立で決める必要があります。公式モデル一覧のタグ情報を見ながら、同一タスクで比較検証してください。
          </p>
          <div className="mt-7 space-y-4">
            {modelSelectionRows.map((row, index) => (
              <section key={row.phase} className="rounded-lg border border-gray-200 bg-white p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-gray-900 px-2 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="blog-h3 text-lg font-semibold text-gray-900">{row.phase}</h3>
                </div>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{row.details}</p>
                <p className="blog-p mt-3 text-sm font-semibold leading-7 text-gray-900">{row.output}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            価格・モデルラインナップ・Cloud利用条件は更新されるため、実装前に公式ページを必ず確認してください（確認日: 2026-02-20）。
          </p>
        </motion.section>

        <div className="mt-10">
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
        </div>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="security-ops" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            セキュリティと運用設計: 公開設定・更新手順・ログ管理を先に決める
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            ローカル運用の失敗は、モデル品質より公開設定と運用体制の未整備で発生するケースが多くあります。API待受設定と責任分担を先に固定してください。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {operationChecklist.map((item) => (
              <li key={item} className="blog-li pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            特に待受アドレスを変更して外部公開する場合は、ネットワーク制御と認証方針を同時に設計しないと情報漏えいリスクが高まります。公開前のチェック項目は
            <Link href="/academy/blog/ai-agent-deployment-checklist" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェント導入チェックリスト
            </Link>
            と共通化しておくと運用しやすくなります。
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
          <h2 id="hybrid-decision" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            ローカル単独運用とCloud/API併用の判断基準: 先に運用体制を決める
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            ローカル運用とCloud併用は優劣ではなく、要件の違いです。次の比較表で自社の優先事項を確認してから構成を選ぶと、後戻りを減らせます。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">ローカル単独</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Cloud/API併用</th>
                </tr>
              </thead>
              <tbody>
                {decisionMatrix.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.localOnly}</td>
                    <td className="py-4 pl-4">{row.hybrid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            多くのチームは、ローカルで業務検証を行い、運用基準が固まってからCloud/APIを併用する段階移行が現実的です。どの構成でも、評価指標と更新手順を先に決めることが成果を左右します。
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
          <h2 id="faq" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            FAQ
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

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="related-links" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            関連記事
          </h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/what-is-generative-ai" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIとは？初心者向けにわかりやすく解説
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/what-is-ai-agent" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントとは？定義・種類・作り方を解説
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-data-leak-patterns" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの情報漏えいパターンと対策
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-agent-deployment-checklist" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェント導入チェックリスト｜権限・ログ・承認フローの作り方
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまで一体で設計しています。
            Ollamaのような個別ツール名の習得にとどまらず、業務課題へどう適用するかの判断軸を育て、実務アウトプットと次のキャリアへつなげたい方に向いた学習設計です。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              生成AI活用力: 実務で即使えるAIスキルを体系的に習得
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              自己理解・キャリアデザイン: AIを鏡に強みと価値観を整理し、キャリアを再設計
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              仲間と共に学ぶ環境: 対話と協働で学習定着と変化速度を高める
            </li>
          </ul>
        </motion.section>

        <section id="cta" className="mt-14">
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
        </section>
      </article>
    </main>
  );
}
