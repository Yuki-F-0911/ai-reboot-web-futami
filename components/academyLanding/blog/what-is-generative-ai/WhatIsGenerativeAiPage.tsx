"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import { ArticleH2, ArticleH3, SummaryBox, RichFAQ, RichTable, Callout, RichBlockquote } from "@/components/blog/ArticleBody";
import { Check, Lightbulb } from "lucide-react";

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
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

export default function WhatIsGenerativeAiPage({ faqItems }: WhatIsGenerativeAiPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6" data-blog-article-body>
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
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton title="生成AIとは？初心者向けにわかりやすく解説" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AIとは？初心者向けにわかりやすく解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            生成AIという言葉は聞くけれど、仕組みや違いがぼんやりして不安…という方向けです。
            このページでは、質問ごとに結論を先に示し、ChatGPT/Claude/Geminiの違いと始め方まで一気に整理します。
            まず「メール下書き→要点抽出→チェックリスト化」の順で試すと、仕事に落とす感覚を掴みやすいです。
          </p>
        </motion.header>

        <figure className="my-8">
          <Image src="/images/blog/what-is-generative-ai/slide-1.png" alt="生成AIスタートガイド タイトル" width={800} height={450} className="rounded-lg" />
        </figure>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT・Claude初心者ガイド
          </Link>
          ・
          <Link href="/academy/blog/how-to-learn-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AI学習ロードマップ
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-plan-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT料金プラン比較
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
        </p>
        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="q1-what-is-generative-ai">
            Q1. 生成AIとは何ですか？
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900 italic border-l-4 border-gray-200 pl-4 bg-gray-50/50 py-2">
            生成AIは、文章・画像・コードなどの新しいコンテンツを作るAIです。専門知識がなくても、自然文で指示すれば使い始められます。
          </p>
          <Callout type="info" title="初心者向けの捉え方">
            「AI」と聞くと難しく感じますが、入門段階では「質問に対して下書きを作ってくれるアシスタント」と捉えると理解しやすくなります。
          </Callout>
          
          <ArticleH3>根拠: 従来AIとの違い</ArticleH3>
          <ul className="mt-5 space-y-3">
            {definitionEvidencePoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                <Check className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
                {point}
              </li>
            ))}
          </ul>
          <figure className="my-8">
            <Image src="/images/blog/what-is-generative-ai/slide-2.png" alt="従来AIと生成AIの違い比較図" width={800} height={450} className="rounded-xl shadow-soft" />
          </figure>
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="q2-chatgpt-claude-gemini">
            Q2. ChatGPT・Claude・Geminiは何が違いますか？
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            どれが絶対に正解というより、あなたの業務に合うかで選ぶのが正解です。最初は1つに絞って使い、必要に応じて比較すると定着しやすくなります。
          </p>
          
          <ArticleH3>根拠: 主要3サービス比較表</ArticleH3>
          <RichTable className="mt-6">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 font-bold text-gray-900">サービス</th>
                <th className="py-4 px-6 font-bold text-gray-900">強み</th>
                <th className="py-4 px-6 font-bold text-gray-900">注意点</th>
                <th className="py-4 px-6 font-bold text-gray-900">向いている人</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {modelComparisonRows.map((row) => (
                <tr key={row.service} className="hover:bg-gray-50/50 transition-colors">
                  <th className="py-4 px-6 font-bold text-gray-900 bg-gray-50/30 whitespace-nowrap">{row.service}</th>
                  <td className="py-4 px-6 text-gray-700">{row.strength}</td>
                  <td className="py-4 px-6 text-gray-700">{row.caution}</td>
                  <td className="py-4 px-6 text-gray-700">{row.fit}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <figure className="my-8">
            <Image src="/images/blog/what-is-generative-ai/slide-3.png" alt="ChatGPT・Claude・Geminiの特徴比較カード" width={800} height={450} className="rounded-xl shadow-soft" />
          </figure>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="q3-ai-chat-tool-comparison">
            Q3. AIチャットのおすすめ比較を知りたいです
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            初心者は無料プランがある主要ツールから始めるのが安全です。選定基準は「使う環境との相性」と「日常業務に直結するか」の2点です。
          </p>
          
          <ArticleH3>根拠: 主要AIチャットツール5選</ArticleH3>
          <RichTable className="mt-6">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 font-bold text-gray-900">ツール</th>
                <th className="py-4 px-6 font-bold text-gray-900">無料プラン</th>
                <th className="py-4 px-6 font-bold text-gray-900">特徴</th>
                <th className="py-4 px-6 font-bold text-gray-900">向いている用途</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {aiChatToolRows.map((row) => (
                <tr key={row.tool} className="hover:bg-gray-50/50 transition-colors">
                  <th className="py-4 px-6 font-bold text-gray-900 bg-gray-50/30 whitespace-nowrap">{row.tool}</th>
                  <td className="py-4 px-6 text-gray-700">{row.freePlan}</td>
                  <td className="py-4 px-6 text-gray-700">{row.strengths}</td>
                  <td className="py-4 px-6 text-gray-700">{row.fit}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <figure className="my-8">
            <Image src="/images/blog/what-is-generative-ai/slide-4.png" alt="AIツール選定フローチャート" width={800} height={450} className="rounded-xl shadow-soft" />
          </figure>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="q4-prompt-writing">
            Q4. プロンプトはどう書けばいいですか？
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「目的・前提・制約・出力形式」の4点を分けて書くと、出力の質が安定します。最初は短い業務タスクで反復するのが近道です。
          </p>
          
          <ArticleH3>根拠: まずはこの型で書く</ArticleH3>
          <RichBlockquote>
            <div className="font-mono text-sm leading-7 space-y-1">
              <div>目的: 何を達成したいか</div>
              <div>前提: 背景・対象者・文脈</div>
              <div>制約: 文字数、トーン、NG事項</div>
              <div>出力形式: 箇条書き、表、見出し付き文書 など</div>
            </div>
          </RichBlockquote>
          
          <figure className="my-8">
            <Image src="/images/blog/what-is-generative-ai/slide-5.png" alt="プロンプトの書き方 4つの要素" width={800} height={450} className="rounded-xl shadow-soft" />
          </figure>
          
          <div className="mt-7 space-y-6">
            {promptExamples.map((example) => (
              <div key={example.heading} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <ArticleH3>{example.heading}</ArticleH3>
                <div className="mt-3 overflow-x-auto rounded-xl bg-gray-900 p-4 font-mono text-xs leading-6 text-gray-300">
                  {example.prompt}
                </div>
                <p className="mt-4 text-sm font-medium text-orange-600 flex items-center gap-2">
                  <Lightbulb size={16} /> 活用効果: {example.result}
                </p>
              </div>
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
          <ArticleH2 id="q5-next-step">
            Q5. 次に何をすれば実務活用につながりますか？
          </ArticleH2>
          <SummaryBox
            title="初心者向け3ステップ"
            items={nextStepItems}
          />
          <figure className="my-8">
            <Image src="/images/blog/what-is-generative-ai/slide-7.png" alt="AI活用ロードマップ 3つのステップ" width={800} height={450} className="rounded-xl shadow-soft" />
          </figure>
          <Callout type="tip" title="さらに詳しく学ぶ">
            次は「社会人向けの生成AI学習ロードマップ」で学習順序を固め、必要に応じて無料セミナーで相談する流れがおすすめです。
          </Callout>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2>AI利用時の注意点</ArticleH2>
          <figure className="my-8">
            <Image src="/images/blog/what-is-generative-ai/slide-8.png" alt="AI利用時の安全ルール" width={800} height={450} className="rounded-xl shadow-soft" />
          </figure>
          <Callout type="warning" title="セキュリティと正確性">
            機密情報の入力は避け、AIの回答は必ず人間が事実確認（ファクトチェック）を行う運用を徹底しましょう。
          </Callout>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="faq">よくある質問（FAQ）</ArticleH2>
          <RichFAQ items={faqItems} />
        </motion.section>

        <section className="mt-20 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-6 text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            関連リンク
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            <li>
              <Link href="/academy" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                AIリブートアカデミー TOP
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/how-to-learn-generative-ai" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                社会人のための生成AI学習ロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-rag" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                RAGとは？仕組みと活用例
              </Link>
            </li>
            <li>
              <Link href="/academy/seminars" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                無料セミナー一覧
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14 rounded-2xl bg-orange-50/50 border-2 border-orange-100 p-8 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="summary" className="mt-0! mb-6!">
            まとめ
          </ArticleH2>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              <Check className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
              生成AIは、文章・画像・コードなどの新しいコンテンツを作るAIです。
            </li>
            <li className="flex gap-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              <Check className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
              あなたの業務に合うサービス（ChatGPT, Claude, Geminiなど）を選びましょう。
            </li>
            <li className="flex gap-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              <Check className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
              「目的・前提・制約・出力形式」のプロンプトの型を使いこなしましょう。
            </li>
          </ul>
          <figure className="relative overflow-hidden rounded-xl shadow-soft">
            <Link href="/academy/seminars">
              <Image src="/images/blog/what-is-generative-ai/slide-9.png" alt="生成AI活用まとめ" width={800} height={450} className="hover:scale-105 transition-transform duration-500" />
            </Link>
          </figure>
        </motion.section>

        <motion.section
          className="mt-14 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white shadow-floating"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="text-2xl font-bold">
            次のアクション
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-300">
            AI活用を最短で前に進めたい方へ。無料セミナーやアカデミーの全体像から、次の一歩を選べます。
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-xl bg-will-primary px-6 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-will-primary/90 active:scale-[0.98]"
            >
              無料セミナーを見る
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.98]"
            >
              アカデミーTOPへ
            </Link>
          </div>
        </motion.section>
</article>
    </main>
  );
}
