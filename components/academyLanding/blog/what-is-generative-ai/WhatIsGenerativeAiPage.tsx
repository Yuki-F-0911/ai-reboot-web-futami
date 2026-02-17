"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type WhatIsGenerativeAiPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const definitionEvidencePoints = [
  "従来AI: データを分類・予測して「答えを選ぶ」処理が中心",
  "生成AI: 学習したパターンを使い「新しい文章や画像を作る」処理が中心",
  "非エンジニアでも、自然な日本語で依頼すればすぐ試せる",
] as const;

const modelComparisonRows = [
  {
    service: "ChatGPT",
    strength: "情報整理、文章作成、幅広い用途のテンプレート化がしやすい",
    caution: "用途が広いぶん、目的を決めないと使い方が散らばりやすい",
    fit: "まず1つのツールで業務活用を始めたい人",
  },
  {
    service: "Claude",
    strength: "長文の読解・要約・構成整理に強く、説明文の自然さが高い",
    caution: "用途によっては追加の調整指示が必要な場面がある",
    fit: "企画書、議事録、レポートなど長文業務が多い人",
  },
  {
    service: "Gemini",
    strength: "Google系サービスとの連携を前提にした運用に組み込みやすい",
    caution: "利用環境によって使える機能差を確認する必要がある",
    fit: "Google Workspaceを業務で使っている人",
  },
] as const;

const aiChatToolRows = [
  {
    tool: "ChatGPT",
    freePlan: "あり",
    strengths: "用途の汎用性が高く、社内文書・要約・企画整理まで幅広く対応",
    caution: "継続利用時は機能上限の確認が必要",
    fit: "最初の1本を決めたい初心者",
  },
  {
    tool: "Claude",
    freePlan: "あり",
    strengths: "長文の下書き、要件整理、文章トーン調整がしやすい",
    caution: "作業内容によっては再指示で精度を上げる前提が必要",
    fit: "文章業務の比率が高い人",
  },
  {
    tool: "Gemini",
    freePlan: "あり",
    strengths: "Googleサービスとの連携を活かした作業効率化がしやすい",
    caution: "利用中のGoogle環境に応じた事前確認が必要",
    fit: "Google Workspace中心のチーム",
  },
  {
    tool: "Microsoft Copilot",
    freePlan: "あり",
    strengths: "Microsoft環境での文書・表計算作業を補助しやすい",
    caution: "組織設定や契約プランで機能差が出る場合がある",
    fit: "Microsoft 365を使う職場",
  },
  {
    tool: "Perplexity",
    freePlan: "あり",
    strengths: "調査系タスクで情報源確認を行いながら素早く要点をつかめる",
    caution: "最終判断には一次情報の確認が必要",
    fit: "リサーチを短時間で回したい人",
  },
] as const;

const promptExamples = [
  {
    heading: "例1: メール返信の下書き",
    prompt:
      "目的: 取引先への返信文を作る\n前提: 納期を2日延長したい\n制約: 丁寧語、150文字以内\n出力形式: 件名案3つ + 本文1案",
    result: "言い回しを安定させながら、短時間で返信案を作れます。",
  },
  {
    heading: "例2: 会議メモの要約",
    prompt:
      "目的: 会議メモを共有用に要約する\n前提: 箇条書きメモを渡す\n制約: 重要論点3つ、決定事項、次アクションを分ける\n出力形式: 見出し付きMarkdown",
    result: "共有しやすい形に整えられ、抜け漏れ確認もしやすくなります。",
  },
  {
    heading: "例3: 提案資料の構成案",
    prompt:
      "目的: 新規提案資料の骨子を作る\n前提: 対象は中小企業の経営層\n制約: 10枚以内、課題→解決策→効果の順\n出力形式: スライドごとの見出しと要点",
    result: "ゼロから作る時間を減らし、内容検討に集中できます。",
  },
] as const;

const nextStepItems = [
  "1つのAIチャットを選び、毎日10分だけ触る",
  "メール要約や議事録整理など、業務タスクを1つだけAI化する",
  "運用ルール（機密情報・事実確認・最終判断者）を決めて継続する",
] as const;

const keywordTags = ["生成AIとは", "ChatGPTとClaudeの違い", "AIチャット比較"] as const;

const tocItems = [
  { id: "q1-what-is-generative-ai", label: "Q1. 生成AIとは何ですか？" },
  { id: "q2-chatgpt-claude-gemini", label: "Q2. ChatGPT・Claude・Geminiは何が違いますか？" },
  { id: "q3-ai-chat-tool-comparison", label: "Q3. AIチャットのおすすめ比較を知りたいです" },
  { id: "q4-prompt-writing", label: "Q4. プロンプトはどう書けばいいですか？" },
  { id: "q5-next-step", label: "Q5. 次に何をすれば実務活用につながりますか？" },
  { id: "faq", label: "FAQ" },
] as const;

export default function WhatIsGenerativeAiPage({ faqItems }: WhatIsGenerativeAiPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AIとは？" },
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
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AIとは？初心者向けにわかりやすく解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月16日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            このページは、非技術者の方向けに「生成AIとは何か」を短時間でつかむ入門記事です。質問ごとに結論を先に示し、その後に根拠を整理しています。
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
          <h2 id="q1-what-is-generative-ai" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Q1. 生成AIとは何ですか？
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 生成AIは、文章・画像・コードなどの新しいコンテンツを作るAIです。専門知識がなくても、自然文で指示すれば使い始められます。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            「AI」と聞くと難しく感じますが、入門段階では「質問に対して下書きを作ってくれるアシスタント」と捉えると理解しやすくなります。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">根拠: 従来AIとの違い</h3>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {definitionEvidencePoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
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
          <h2 id="q2-chatgpt-claude-gemini" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Q2. ChatGPT・Claude・Geminiは何が違いますか？
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: どれが絶対に正解というより、あなたの業務に合うかで選ぶのが正解です。最初は1つに絞って使い、必要に応じて比較すると定着しやすくなります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">比較情報の更新日: 2026年2月16日</p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">根拠: 主要3サービス比較表</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">サービス</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">強み</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">注意点</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている人</th>
                </tr>
              </thead>
              <tbody>
                {modelComparisonRows.map((row) => (
                  <tr key={row.service} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.service}</th>
                    <td className="py-4 px-4">{row.strength}</td>
                    <td className="py-4 px-4">{row.caution}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
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
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="q3-ai-chat-tool-comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Q3. AIチャットのおすすめ比較を知りたいです
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 初心者は無料プランがある主要ツールから始めるのが安全です。選定基準は「使う環境との相性」と「日常業務に直結するか」の2点です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">比較情報の更新日: 2026年2月16日</p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">根拠: 主要AIチャットツール5選</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">無料プラン</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">特徴</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">注意点</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている用途</th>
                </tr>
              </thead>
              <tbody>
                {aiChatToolRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="py-4 px-4">{row.freePlan}</td>
                    <td className="py-4 px-4">{row.strengths}</td>
                    <td className="py-4 px-4">{row.caution}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
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
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="q4-prompt-writing" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Q4. プロンプトはどう書けばいいですか？
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 「目的・前提・制約・出力形式」の4点を分けて書くと、出力の質が安定します。最初は短い業務タスクで反復するのが近道です。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">根拠: まずはこの型で書く</h3>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-7 text-gray-700">
目的: 何を達成したいか
前提: 背景・対象者・文脈
制約: 文字数、トーン、NG事項
出力形式: 箇条書き、表、見出し付き文書 など
          </pre>
          <div className="mt-7 space-y-6">
            {promptExamples.map((example) => (
              <div key={example.heading} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{example.heading}</h3>
                <pre className="mt-3 overflow-x-auto rounded bg-gray-50 p-3 text-xs leading-6 text-gray-700">
{example.prompt}
                </pre>
                <p className="mt-3 text-sm leading-7 text-gray-700">{example.result}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="q5-next-step" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Q5. 次に何をすれば実務活用につながりますか？
          </h2>
          <p className="mt-4 text-base font-medium leading-8 text-gray-900">
            結論: まずは小さく使い始め、1つの業務で成果を出してから範囲を広げると失敗しにくくなります。学習順序を決めるだけでも継続率は大きく変わります。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">根拠: 初心者向け3ステップ</h3>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {nextStepItems.map((step) => (
              <li key={step} className="pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            次は
            <Link
              href="/academy/blog/how-to-learn-generative-ai"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              社会人向けの生成AI学習ロードマップ
            </Link>
            で学習順序を固め、必要に応じて
            <Link href="/academy/seminars" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              無料セミナー
            </Link>
            で相談する流れがおすすめです。
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
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
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

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人のための生成AI学習ロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-rag" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAGとは？検索拡張生成の仕組みと活用例をわかりやすく解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-agent-build-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントの作り方ガイド（業務で使える設計と導入手順）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-coding-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIコーディング入門（非エンジニア向け）
              </Link>
            </li>
            <li>
              <Link href="/academy/seminars" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                無料セミナー一覧
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
