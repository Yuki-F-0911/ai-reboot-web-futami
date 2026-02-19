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

type CursorAiCodingGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["Cursor 使い方", "AI コーディング 入門", "非エンジニア向け"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-cursor", label: "Cursorとは？" },
  { id: "install", label: "インストール方法" },
  { id: "build-with-ai", label: "AIと対話して作る手順" },
  { id: "one-day-case", label: "1日でLPを作った実例" },
  { id: "cursor-vs-copilot", label: "Cursor vs GitHub Copilot" },
  { id: "pitfalls", label: "つまずきやすいポイント" },
  { id: "first-week-plan", label: "最初の7日間プラン" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連記事" },
  { id: "next-action", label: "次のアクション" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

const comparisonRows = [
  {
    axis: "作業の進め方",
    cursor: "チャットで「このファイルをこう直して」と依頼し、複数ファイルをまとめて編集しやすい。",
    copilot: "エディタ内の補完とインライン提案が中心。1行ずつ書き進める運用と相性がよい。",
  },
  {
    axis: "非エンジニアの学習負荷",
    cursor: "日本語で要件を渡し、実装差分を見ながら修正依頼しやすい。最初の1本を作りやすい。",
    copilot: "既存コードを読みながら補完を活かす設計。最低限の文法理解があるほど効果が出る。",
  },
  {
    axis: "向いている用途",
    cursor: "LP作成、社内ツールの小規模実装、既存UIの一括修正など「対話で前進する作業」。",
    copilot: "日常開発の速度向上、定型コードの補完、既存プロジェクトでの生産性改善。",
  },
] as const;

const oneDayStorySteps = [
  {
    time: "09:00",
    action: "目的を決める",
    detail: "「無料相談向けの1ページLPを作る。フォーム送信で自動返信まで実装する」と1文で定義。",
  },
  {
    time: "10:00",
    action: "Cursorで雛形を生成",
    detail: "ヒーロー、課題、解決策、実績、FAQ、CTAの6ブロックを最初に作り、文言は仮置きにした。",
  },
  {
    time: "12:00",
    action: "スマホ表示を調整",
    detail: "見出しの改行と余白だけに絞って修正依頼。修正後に実機表示で確認して崩れを解消。",
  },
  {
    time: "14:00",
    action: "フォームと送信完了画面を実装",
    detail: "バリデーションと送信後メッセージを実装。入力ミス時の表示文言を日本語で統一。",
  },
  {
    time: "17:00",
    action: "最終チェックと公開",
    detail: "誤字・リンク切れ・表示速度を確認して公開。初稿から公開まで約8時間で完了。",
  },
] as const;

function LineCtaBox({ tone }: { tone: "green" | "orange" | "gray" }) {
  const toneClass =
    tone === "orange"
      ? "border-orange-200 bg-orange-50"
      : tone === "gray"
        ? "border-slate-200 bg-slate-50"
        : "border-green-200 bg-green-50";
  const titleClass = tone === "orange" ? "text-orange-800" : tone === "gray" ? "text-slate-800" : "text-green-800";

  return (
    <div className={`rounded-lg border p-6 ${toneClass}`}>
      <p className={`text-base font-semibold ${titleClass}`}>📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        LINEで週1AI通信を受け取る（無料）
      </a>
    </div>
  );
}

export default function CursorAiCodingGuidePage({ faqItems }: CursorAiCodingGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Cursor × AIコーディング入門" },
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
                title="Cursor × AIコーディング入門｜非エンジニアでも使える実践ガイド"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Cursor × AIコーディング入門｜非エンジニアでも使える実践ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月19日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            結論から言うと、コード経験が少ない人でもCursorを使えば、1日でLPや小さな業務ツールの初版は作れます。重要なのは、文法を覚えることよりも
            「何を作るか」「どこまでを完成とするか」を先に決めることです。この記事では、Cursorの基本、インストール、AIと対話しながら形にする手順、実例、他ツールとの違いまでを実務目線で整理します。
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              Cursorは「AIに相談しながらコードを作る」体験に特化したエディタで、非エンジニアでも実装の入口に立ちやすい。
            </li>
            <li className="pl-1 marker:text-gray-500">
              最初はLPやCSV整形ツールなど、入力と出力が明確なテーマを選ぶと失敗しにくい。
            </li>
            <li className="pl-1 marker:text-gray-500">
              成果を出す鍵は、1回で完成を狙わず「目的定義→小さく生成→動作確認→修正依頼」を短く回すこと。
            </li>
            <li className="pl-1 marker:text-gray-500">
              GitHub Copilotは補完中心、Cursorは対話起点の編集が得意。用途を分けると判断がぶれにくい。
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="what-is-cursor"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Cursorとは？非エンジニアでも使いやすいAI統合エディタ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Cursorは、コードエディタとAIチャットが一体化しているため、編集・質問・修正依頼を1画面で完結しやすいツールです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            従来の学習では「文法を覚えてから作る」が前提でしたが、Cursorでは「作りたい画面や機能を日本語で伝え、生成されたコードを確認しながら整える」進め方が取りやすくなります。非エンジニアにとって大きいのは、わからない箇所をその場で質問できることです。「このコードは何をしているのか」「なぜエラーが出るのか」「どこを触れば見た目が変わるのか」を会話で解像度高く確認できます。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            ただし、Cursorを入れれば自動で良い成果物ができるわけではありません。成果が出る人は、作業を小さく区切り、毎回「期待する結果」を明示しています。AIコーディングの基本から押さえたい場合は
            <Link href="/academy/blog/ai-coding-for-beginners" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIコーディング入門
            </Link>
            も先に読んでおくと理解が速くなります。
          </p>
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">非エンジニアがCursorを使うときの判断基準</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
              <li className="pl-1 marker:text-slate-400">完成条件を先に決める（例: LP公開まで、フォーム送信確認まで）。</li>
              <li className="pl-1 marker:text-slate-400">変更単位を小さくする（見出しだけ、ボタンだけ、バリデーションだけ）。</li>
              <li className="pl-1 marker:text-slate-400">エラー時は再生成せず、エラー文を貼って原因特定を依頼する。</li>
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
          <LineCtaBox tone="green" />
        </motion.section>

        <motion.section
          id="install"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Cursorのインストール方法｜初回30分で準備する手順
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            最初の30分は、インストールと最小セットアップだけに集中すると、その後の学習が安定します。
          </p>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              Cursor公式サイトから自分のOS版（macOS / Windows）をダウンロードしてインストールする。
            </li>
            <li className="pl-1 marker:text-gray-500">
              起動後にサインインし、テーマと言語設定を先に整える。日本語UIにすると最初の迷いが減る。
            </li>
            <li className="pl-1 marker:text-gray-500">
              既存のVS Code設定を引き継げる場合はインポートし、フォントサイズとターミナル表示だけ先に調整する。
            </li>
            <li className="pl-1 marker:text-gray-500">
              新しいフォルダを1つ作り、最初の検証用に `index.html` を1ファイルだけ置いて起動確認する。
            </li>
          </ol>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            この段階で大きな環境構築は不要です。最初の目標は「AIに1つ依頼して、画面上に反映できる状態」を作ることです。インストール直後に学習を詰め込みすぎると、操作と概念が混ざって離脱しやすくなります。まずは「書く→確認→直す」の往復に慣れることを優先してください。
          </p>
        </motion.section>

        <motion.section
          id="build-with-ai"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIと対話しながらコードを作る具体手順｜LPを例に5ステップで実践
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            非エンジニアが最短で成果を出すには、1ページLPのように完成イメージが明確な題材を選ぶのが有効です。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">ステップ1: 目的と完成条件を1文で固定する</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            例: 「無料相談の申し込みを増やす1ページLPを作る。ファーストビュー、特徴3つ、導入事例、FAQ、問い合わせボタンを含める」。この1文がないと、見た目は整っても成果につながらないページになります。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">ステップ2: 最初のプロンプトで構成を作る</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            いきなり装飾を依頼せず、まずは構成だけ作ります。生成の精度は「誰向けか」「何をしてほしいか」「どの要素が必須か」を明示すると上がります。
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-xs leading-6 text-slate-100">
{`あなたはWeb制作アシスタントです。
目的: 個人事業主向けの無料相談LPを1ページで作成したい。
要件:
- ヒーロー（見出し・説明・CTA）
- 特徴3つ
- 導入事例2つ
- FAQ 3問
- 最後に問い合わせCTA
制約:
- スマホで読みやすい余白
- 日本語の見出しは30文字以内
- HTML/CSSのみでまず作る`}
          </pre>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">ステップ3: 1ブロックずつ修正依頼する</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            一度に全体修正を依頼すると品質が散りやすくなります。「ヒーロー見出しだけ」「CTAボタン文言だけ」「FAQの順番だけ」と分割して進めると、意図を保ったまま精度を上げられます。プロンプト設計に不安がある場合は
            <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTを仕事で使いこなす実践テクニック集
            </Link>
            の型を流用すると再現性が上がります。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">ステップ4: エラーは原因特定から依頼する</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            「動かないので直して」ではなく、エラー文・該当ファイル・期待動作をセットで渡します。例えば「送信ボタンを押すとコンソールに `undefined` が出る。期待は送信完了メッセージ表示」のように伝えると、修正が最短で返ります。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">ステップ5: 公開前に3点だけ最終確認する</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">スマホ表示で改行が崩れていないか。</li>
            <li className="pl-1 marker:text-gray-500">CTAボタンのリンク先が正しいか。</li>
            <li className="pl-1 marker:text-gray-500">フォーム送信後の表示と通知が期待どおりか。</li>
          </ul>
        </motion.section>

        <motion.section
          id="one-day-case"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            非エンジニアがCursorで1日でLPを作った実例ストーリー
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            実際に成果が出たケースでは、技術力より「作業の切り分け」が成果を左右しました。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            事例は、普段は営業資料作成が中心で、HTMLをほとんど触ったことがない個人事業主のケースです。初回は「完璧なLP」を目指さず、「相談予約を受け付ける最低限のページ」をゴールに設定。結果として、初稿作成から公開までを同日中に完了しました。途中で3回つまずきましたが、すべて「どの要素を直すか」を限定して再依頼したことで前進できています。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">時間</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">やったこと</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {oneDayStorySteps.map((step) => (
                  <tr key={step.time} className="border-b border-gray-200 align-top">
                    <td className="py-4 pr-4 font-semibold text-gray-900">{step.time}</td>
                    <td className="px-4 py-4">{step.action}</td>
                    <td className="py-4 pl-4">{step.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            このケースで効果があった運用は3つです。1つ目は、作業前に「今日やらないこと」を決めたこと。2つ目は、見た目修正と機能実装を同時に進めなかったこと。3つ目は、最後に第三者目線でスマホ表示を確認したことです。Cursorは実装速度を上げられますが、完成度は進行管理で決まるというのが現場の実感です。
          </p>
        </motion.section>

        <motion.section
          id="cursor-vs-copilot"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Cursor vs GitHub Copilot｜非エンジニア視点のシンプル比較
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            両者は優劣より役割が違います。最初にどちらを選ぶかは、あなたの作業スタイルで決めると失敗しません。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Cursor</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">GitHub Copilot</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.cursor}</td>
                    <td className="py-4 pl-4">{row.copilot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            「まずは1本作ってみたい」ならCursorの方が進めやすく、「既存開発で日々のコーディングを速くしたい」ならCopilotが強みを出しやすいです。Copilotの具体的な導入手順は
            <Link href="/academy/blog/github-copilot-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              GitHub Copilotの使い方ガイド
            </Link>
            を参照してください。CLI中心の自律実行まで含めて比較したい場合は
            <Link href="/academy/blog/claude-code-intro" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude Code入門
            </Link>
            も合わせて読むと、用途別に選びやすくなります。
          </p>
        </motion.section>

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
            非エンジニアがCursorでつまずきやすいポイントと回避策
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            つまずきの原因は技術不足より、作業設計の不足であることが多いです。先に失敗パターンを知ると、挫折をかなり減らせます。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">1. 指示が広すぎて、何が終わったか判断できない</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            典型例は「いい感じのLPを作って」の一言で進めるケースです。生成はされますが、評価基準がないため修正が無限に続きます。回避策は、完成条件を3つに固定することです。例えば「CTAクリックが機能する」「スマホで崩れない」「問い合わせ導線が1画面で見える」など、判断基準を明文化してください。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">2. エラーを再生成で押し切ってしまう</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            動かないときに再生成を繰り返すと、原因が見えないままコードだけ増えていきます。まずはエラー全文、実行条件、期待する挙動を1セットで渡し、原因候補を出してもらう方が修正コストは下がります。非エンジニアほど「いま何が壊れているか」を言語化するだけで改善速度が上がります。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">3. 見た目修正と機能実装を同時に進める</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            フォーム送信の不具合調査をしながらデザインも触ると、変更原因が追えなくなります。先に機能を固め、後から見た目を整える順番に分けるだけで、作業の迷子を防げます。これは開発経験の有無に関係なく効果がある進め方です。
          </p>

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-900">実務で使えるチェックルール（作業前に30秒で確認）</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-amber-900">
              <li className="pl-1 marker:text-amber-600">今回の依頼は1目的だけか（例: フォーム送信修正のみ）。</li>
              <li className="pl-1 marker:text-amber-600">完了条件を見れば第三者でも終了判断できるか。</li>
              <li className="pl-1 marker:text-amber-600">変更後の確認項目を3つ以内に絞れているか。</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="first-week-plan"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Cursorを仕事で使える状態にする最初の7日間プラン
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            1日で初版を作った後は、7日かけて再現性を作ると実務投入しやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">日</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">やること</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">到達目標</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <td className="py-4 pr-4 font-semibold text-gray-900">1日目</td>
                  <td className="px-4 py-4">1ページLPを生成し、文言を差し替える。</td>
                  <td className="py-4 pl-4">画面表示とCTAリンクが動く。</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <td className="py-4 pr-4 font-semibold text-gray-900">2日目</td>
                  <td className="px-4 py-4">スマホ表示の余白・見出し改行を調整する。</td>
                  <td className="py-4 pl-4">主要3画面サイズで崩れなし。</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <td className="py-4 pr-4 font-semibold text-gray-900">3日目</td>
                  <td className="px-4 py-4">フォーム項目を追加し、入力チェックを入れる。</td>
                  <td className="py-4 pl-4">未入力時に明確なエラー表示が出る。</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <td className="py-4 pr-4 font-semibold text-gray-900">4日目</td>
                  <td className="px-4 py-4">送信後の完了画面と通知文面を調整する。</td>
                  <td className="py-4 pl-4">問い合わせ導線が最後まで通る。</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <td className="py-4 pr-4 font-semibold text-gray-900">5日目</td>
                  <td className="px-4 py-4">よく使う依頼文を3本テンプレ化する。</td>
                  <td className="py-4 pl-4">同じ品質を再現できる。</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <td className="py-4 pr-4 font-semibold text-gray-900">6日目</td>
                  <td className="px-4 py-4">別テーマの小ページをもう1本作る。</td>
                  <td className="py-4 pl-4">初回以外でも再現できる。</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <td className="py-4 pr-4 font-semibold text-gray-900">7日目</td>
                  <td className="px-4 py-4">作業ログを見返し、改善ルールを3つ決める。</td>
                  <td className="py-4 pl-4">翌週から実務で継続運用できる。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            この7日間プランの狙いは、単発の成功で終わらせないことです。最初の1本だけ作れても、翌週に再現できなければ実務には定着しません。少なくとも「依頼文の型」「確認手順」「公開前チェック」の3点をテンプレ化しておくと、非エンジニアでも運用品質を保ちながら改善を続けられます。
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
          <LineCtaBox tone="orange" />
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
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連記事（内部リンク）</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-coding-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/github-copilot-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                GitHub Copilotの使い方｜導入・設定・効率化のコツを初心者向けに解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/claude-code-intro" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Codeとは？使い方・料金・始め方を完全解説【2026年版】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTを仕事で使いこなす実践テクニック集｜基本から応用まで50のTips
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          id="next-action"
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">次のアクション</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Cursorで最初の1本を作れたら、次は再現性を作る段階です。AIリブートアカデミーでは、生成AI活用力の習得だけでなく、自己理解とキャリアデザイン、仲間と学ぶ環境づくりまで含めて、仕事で継続的に成果を出す設計をサポートしています。
          </p>
          <div className="mt-7">
            <LineCtaBox tone="gray" />
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
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
