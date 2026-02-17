"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type AiCodingForBeginnersPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI コーディング 初心者", "AI プログラミング 始め方", "コード生成AI"] as const;

const tocItems = [
  { id: "what-is-ai-coding", label: "AIコーディングとは？" },
  { id: "tools", label: "代表的なAIコーディングツール" },
  { id: "what-you-can-do", label: "非エンジニアが実現できること" },
  { id: "getting-started", label: "AIコーディングの始め方5ステップ" },
  { id: "prompt-examples", label: "すぐ試せるプロンプト例" },
  { id: "limitations", label: "限界と注意点" },
  { id: "faq", label: "よくある質問" },
  { id: "cta", label: "AIリブートアカデミーへ" },
] as const;

const toolCards = [
  {
    title: "ChatGPT",
    detail: "仕様相談やコード生成を会話で進めやすい。まずは「何を作るか」を日本語で固める用途に向きます。",
  },
  {
    title: "Claude",
    detail: "文章の整理・長文の理解支援と相性がよく、要件整理→実装の流れを作りやすいのが特徴です。",
  },
  {
    title: "GitHub Copilot",
    detail: "エディタ上での補完・修正を高速化。基礎ができると手数を大幅に減らせます。",
  },
  {
    title: "Cursor",
    detail: "AIエディタとして実装の反復を回しやすい。小さな機能追加→動作確認のループに強いです。",
  },
  {
    title: "Windsurf",
    detail: "AIエディタとして、実装→修正→動作確認の反復を回しやすい。プロジェクト単位の改善ループに強い選択肢です。",
  },
  {
    title: "Replit",
    detail: "ブラウザ上で動かして試せるため、環境構築が不安な初心者でも検証しやすい選択肢です。",
  },
] as const;

const nonEngineerUseCases = [
  {
    title: "業務の小さな自動化",
    detail: "ファイル名の整形、CSVの整形、定型メールの生成など、影響範囲が小さいタスクから始めると安全です。",
  },
  {
    title: "データ処理・集計の効率化",
    detail: "スプレッドシートの集計や、簡単なグラフ作成、レポート作成の下書きなどに繋げやすい領域です。",
  },
  {
    title: "Webサイト作成（簡易LP/社内ページ）",
    detail: "HTML/CSSの雛形を生成し、文章や画像を差し替えて公開レベルに近づける、という進め方ができます。",
  },
] as const;

const gettingStartedSteps = [
  {
    step: "1. 環境不要で試す（まずはチャットAI）",
    body: "最初は環境構築をせず、ChatGPT/Claudeに「こういう自動化をしたい」と目的を投げて、手順とコードの叩き台を作ります。",
  },
  {
    step: "2. ChatGPTで小さく動かす（コピペでOK）",
    body: "いきなり大きく作らず、1ファイル・1機能の最小単位で実行して動作確認します。エラーが出たら、ログと条件を添えて切り分けを依頼します。",
  },
  {
    step: "3. 1つの小さな自動化を完成させる",
    body: "完成の定義を決め、入力→処理→出力の流れを固定します。成功体験を作ると、次に広げる判断がしやすくなります。",
  },
  {
    step: "4. ツールを選定する（チャット→エディタ統合へ）",
    body: "最初はチャットで理解を固め、慣れたらCopilot/Cursorなどのエディタ統合で速度を上げます。学習の順序を変えるだけで挫折率が下がります。",
  },
  {
    step: "5. 実務に適用する（ルールとレビューを設計）",
    body: "社内ルール（入力禁止情報、共有方法）を確認し、レビューと動作確認の手順を作ってから本番データへ適用します。",
  },
] as const;

const pythonPrompt = `あなたはPythonの実務アシスタントです。
目的: CSVを読み込み、指定列の空行を除外し、重複を削除して保存したい。
入力: input.csv（カンマ区切り、UTF-8）
要件:
- 例として「email」列が空の行を除外
- 「email」列で重複削除（先頭を残す）
- 出力: output.csv
- 初心者でも実行できるように、手順（インストール/実行コマンド）も書いて
出力形式:
1) 手順
2) 完成コード（1ファイル）
3) よくあるエラーと対処`;

const vbaPrompt = `あなたはExcel VBAのアシスタントです。
目的: シート「一覧」のA列にある値をキーに、重複行を削除したい。
前提:
- 1行目はヘッダー
- データはA列〜H列
要件:
- A列が同じ行は最初の1行だけ残す
- 処理前に「元データ」シートへバックアップを作成
出力:
- VBAコード（標準モジュールに貼るだけで動く）
- 実行手順（マクロ有効化、実行方法）`;

const gasPrompt = `あなたはGoogle Apps Script（GAS）のアシスタントです。
目的: Gmailの「未読」メールを検索し、件名・送信者・日時をスプレッドシートに追記したい。
要件:
- スプレッドシートの1行目にヘッダー（Subject, From, Date）
- 同じメールを二重で記録しない（messageIdで判定）
- 10件だけ取得
出力:
1) 完成コード（Apps Script）
2) セットアップ手順（権限付与、実行方法）`;

const htmlPrompt = `あなたはWeb制作アシスタントです。
目的: 1ページ完結のシンプルなLPを作りたい（HTML/CSSのみ）。
要件:
- ヒーロー（見出し/説明/CTAボタン）
- 特徴3つ（カード表示）
- よくある質問（アコーディオン風の見た目、JSなしでOK）
- スマホでも読みやすい余白と文字サイズ
出力:
- index.html（CSSは<style>内でOK）
- コピペでそのまま表示できる形`;

const promptExamples = [
  {
    title: "Python（CSVの整形・重複削除）",
    description: "データ処理で最も再現性が高いパターンです。まずは小さなCSVから試してください。",
    code: pythonPrompt,
  },
  {
    title: "Excel VBA（重複削除 + バックアップ）",
    description: "Excel中心の業務では、手作業の置き換えが最短で成果につながります。",
    code: vbaPrompt,
  },
  {
    title: "GAS（Gmail→スプレッドシート記録）",
    description: "社内の情報整理を自動化しやすい領域です。まずは10件取得から始めます。",
    code: gasPrompt,
  },
  {
    title: "HTML（1ページLPの雛形）",
    description: "AIに「構成」と「見た目」を同時に出させると速いです。文言は後から差し替えます。",
    code: htmlPrompt,
  },
] as const;

export default function AiCodingForBeginnersPage({ faqItems }: AiCodingForBeginnersPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIコーディング入門" },
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
            AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            結論: AIコーディングは「環境構築なしで小さく試す」→「1つの自動化を完成させる」→「ツールを選び、レビュー手順を作って実務に乗せる」が最短ルートです。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-is-ai-coding" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIコーディングとは？（コード生成AIの概要）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIコーディングは、自然言語（日本語）で目的や条件を伝え、コードの叩き台・修正案・テスト観点などを生成してもらう開発スタイルです。「ゼロから書く」よりも、
            <span className="font-semibold text-gray-900">仕様を言語化して、反復で精度を上げる</span>
            ことに強みがあります。
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-gray-700">
            <li className="rounded-lg border border-gray-200 p-4">
              <span className="font-semibold text-gray-900">従来のプログラミング:</span> 文法と設計を理解し、手で実装を進める
            </li>
            <li className="rounded-lg border border-gray-200 p-4">
              <span className="font-semibold text-gray-900">AIコーディング:</span> 目的・前提・出力形式を言語で固定し、AIに叩き台を作らせて検証/改善する
            </li>
          </ul>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            まずは
            <Link
              href="/academy/blog/chatgpt-claude-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPT・Claude初心者ガイド
            </Link>
            で「質問の型」を押さえておくと、コード生成も安定しやすくなります。
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
          <h2 id="tools" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            代表的なAIコーディングツール（ChatGPT/Claude/Copilot/Cursor/Windsurf/Replit）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            初心者はまず「チャット型」で理解と方針を固め、次に「エディタ統合」で速度を上げる順序が取り組みやすいです。各ツールの機能やプランは変わるため、必要に応じて公式情報も確認してください。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {toolCards.map((tool) => (
              <section key={tool.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{tool.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{tool.detail}</p>
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
          <h2 id="what-you-can-do" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            非エンジニアがAIコーディングで実現できること
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ポイントは「影響範囲が小さく、成果が見えやすい作業」から始めることです。最初に作るテーマ選びは、
            <Link
              href="/academy/blog/how-to-learn-generative-ai"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              生成AI学習ロードマップ
            </Link>
            の学習フェーズ設計とも相性がよいです。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {nonEngineerUseCases.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            取り組みの目的が「仕事の成果」や「キャリアの選択肢拡大」に繋がるか不安な方は、
            <Link
              href="/academy/blog/ai-career-change-cases"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              キャリアチェンジ事例集
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
          <h2 id="getting-started" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIコーディングの始め方5ステップ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            初心者がつまずきやすいのは「最初から大きく作る」「ツールを先に固定する」「レビューなしで本番に当てる」です。以下の順序で、検証しながら段階的に広げましょう。
          </p>
          <div className="mt-6 space-y-4">
            {gettingStartedSteps.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.step}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
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
          <h2 id="prompt-examples" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            すぐ試せるプロンプト例（Python / Excel VBA / GAS / HTML）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            まずは「目的」「前提」「要件」「出力形式」を固定すると、回答のブレが減ります。仕事向けのテンプレは
            <Link
              href="/academy/blog/prompt-template-for-work"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              プロンプトテンプレート集
            </Link>
            も合わせて使うと再現性が上がります。
          </p>
          <div className="mt-6 space-y-5">
            {promptExamples.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.description}</p>
                <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-white p-4 text-xs leading-6 text-gray-700">
                  <code>{item.code}</code>
                </pre>
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
          <h2 id="limitations" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIコーディングの限界と注意点（セキュリティ、レビュー）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIは便利ですが「正しさ」を保証してくれるわけではありません。特に実務では、セキュリティと品質の観点を先に決めておくと事故を防げます。
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-gray-700">
            <li className="rounded-lg border border-gray-200 p-4">
              <span className="font-semibold text-gray-900">機密情報:</span> 顧客情報・社内情報・APIキーなどはプロンプトに入れない。必要なら匿名化/ダミーデータで検証する
            </li>
            <li className="rounded-lg border border-gray-200 p-4">
              <span className="font-semibold text-gray-900">レビュー:</span> 生成コードは必ず動作確認し、例外処理・入力チェック・ログ出力などの安全策を追加する
            </li>
            <li className="rounded-lg border border-gray-200 p-4">
              <span className="font-semibold text-gray-900">権利・ライセンス:</span> 外部コードのコピペや依存ライブラリの利用条件を確認し、社外公開物は特に注意する
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
              <Link href="/academy/blog/how-to-learn-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                社会人のための生成AI学習ロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/github-copilot-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                GitHub Copilotの使い方（導入・設定・効率化のコツ）
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-claude-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT・Claude初心者ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/python-ai-intro" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Python × AI入門（環境構築〜学習ロードマップ）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-career-change-cases" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI時代のキャリアチェンジ事例集
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-agent-build-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントの作り方（実装ガイド）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/prompt-template-for-work" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                仕事で使えるプロンプトテンプレート集
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
            AIリブートアカデミーで、AIを「実務で使える型」へ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIコーディングは、ツール名よりも「入力の設計（前提・制約・出力形式）」「レビュー手順」「小さく回す運用」が成果を分けます。体系的に学び、実務へつなげたい方はアカデミーの講座一覧をご覧ください。
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
          </div>
        </motion.section>
      </article>
    </main>
  );
}
