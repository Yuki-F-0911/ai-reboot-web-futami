"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import { ArticleH2, ArticleH3, SummaryBox, RichFAQ, Callout } from "@/components/blog/ArticleBody";
import { Check, X, Lightbulb, Info } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type ChatgptPromptBeginnerPageProps = {
  faqItems: readonly FAQItem[];
};

type PromptPattern = {
  name: string;
  scene: string;
  template: string;
};

type ExamplePair = {
  category: string;
  ng: string;
  ok: string;
  point: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["ChatGPT プロンプト 入門", "初心者向け", "NG/OK例", "会話設計"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-miss", label: "答えがズレる理由" },
  { id: "templates-15", label: "初心者向け15の型" },
  { id: "ng-ok", label: "NG例 vs OK例" },
  { id: "conversation-design", label: "続けて質問するコツ" },
  { id: "api-system-user", label: "GPT-5.2時代の設計とAPI補足" },
  { id: "faq", label: "よくある質問" },
] as const;

const failurePatterns = [
  {
    title: "聞き方が曖昧",
    body: "「いい感じにまとめて」のような表現だけだと、モデルは目的や読者を推測するしかありません。最初に用途を明示するとズレが減ります。",
  },
  {
    title: "一度に詰め込みすぎ",
    body: "複数タスクを1プロンプトに混ぜると、優先順位が崩れて品質が不安定になります。手順を分ける方が結果は改善します。",
  },
  {
    title: "出力形式を指定していない",
    body: "文字数、箇条書き、表形式などを指定しないと、回答が冗長になりやすいです。形式を決めるだけで読みやすさが上がります。",
  },
  {
    title: "前提情報が不足",
    body: "読者、用途、締切、制約条件がない状態では、実務で使える粒度まで届きません。必要な前提を短く添えることが重要です。",
  },
  {
    title: "1回で完成を狙う",
    body: "初稿を出してから追質問で精度を上げる方が、最終的な品質と速度が安定します。会話設計を前提に運用すると使いこなしやすくなります。",
  },
] as const;

const promptPatterns: readonly PromptPattern[] = [
  {
    name: "役割指定",
    scene: "専門家としての視点を固定したい",
    template: "あなたは{役割}です。{目的}のために、{対象}へ向けて回答してください。",
  },
  {
    name: "目的明示",
    scene: "出力の方向性を揃えたい",
    template: "目的は{達成したいこと}です。目的達成に不要な説明は省いてください。",
  },
  {
    name: "前提条件指定",
    scene: "状況依存の回答を得たい",
    template: "前提: {状況・条件}。この前提が崩れる場合は先に指摘してください。",
  },
  {
    name: "対象読者指定",
    scene: "説明レベルを調整したい",
    template: "読者は{初心者/上級者/社内向け}です。専門用語は{使う/避ける}で回答してください。",
  },
  {
    name: "ステップ分解",
    scene: "実行手順を明確にしたい",
    template: "{課題}を、準備→実行→確認の3ステップで分解して提示してください。",
  },
  {
    name: "出力形式指定",
    scene: "そのまま使える形で受け取りたい",
    template: "見出し付きの箇条書きで、各項目は2行以内で出力してください。",
  },
  {
    name: "文字数制限",
    scene: "冗長な回答を防ぎたい",
    template: "回答は{文字数}字以内。結論を先に1行で示してください。",
  },
  {
    name: "比較表作成",
    scene: "選択肢を比較したい",
    template: "{A/B/C}を、費用・難易度・効果・向いている人の4軸で表にしてください。",
  },
  {
    name: "要約変換",
    scene: "長文を短く再利用したい",
    template: "以下の文章を、結論3行 + 補足3行で要約してください: {本文}",
  },
  {
    name: "改善レビュー",
    scene: "自分の文章を改善したい",
    template: "次の文章をレビューし、改善点を3つ、修正版を1つ提示してください: {文章}",
  },
  {
    name: "質問先出し",
    scene: "精度を優先したい",
    template: "不足情報があれば、回答前に最大3つ質問してください。その後に初稿を出してください。",
  },
  {
    name: "仮定明示",
    scene: "スピードを優先したい",
    template: "追加質問はせず、必要な仮定を明示したうえで初稿を提示してください。",
  },
  {
    name: "NG条件指定",
    scene: "避けたい表現を除外したい",
    template: "次の要素は使わないでください: {禁止表現・禁止内容}。",
  },
  {
    name: "評価基準指定",
    scene: "回答の品質を一定化したい",
    template: "回答後に自己チェックを実施し、正確性・具体性・実行可能性を5点満点で自己評価してください。",
  },
  {
    name: "次アクション生成",
    scene: "行動につなげたい",
    template: "最後に、今週中に実行する具体アクションを3つ提案してください。",
  },
] as const;

const examplePairs: readonly ExamplePair[] = [
  {
    category: "実務系（メール作成）",
    ng: "取引先への返信メールを作って。",
    ok: "あなたは営業アシスタントです。取引先Aへの返信メールを作成してください。目的は納期再調整の合意です。丁寧語、200字以内、件名→本文の順で出力してください。",
    point: "役割・目的・文字数・出力形式を指定すると、そのまま使える初稿になります。",
  },
  {
    category: "学習系（資格勉強）",
    ng: "AIの勉強方法を教えて。",
    ok: "私は平日30分、土日2時間を使える初心者です。生成AIの基礎を4週間で学ぶ計画を、週ごとの目標・教材・確認テスト形式で作ってください。",
    point: "学習時間と期間を固定すると、実行可能な計画に変わります。",
  },
  {
    category: "副業系（サービス設計）",
    ng: "副業アイデアを出して。",
    ok: "副業候補を5案出してください。条件は初期費用3万円以内、平日1時間運用、在宅完結。各案に必要スキル、初月の行動、想定リスクを付けてください。",
    point: "制約条件を明示すると、現実的な選択肢だけが残ります。",
  },
] as const;

const conversationSteps = [
  {
    title: "1. 初稿依頼",
    body: "最初は完璧を狙わず、役割・目的・出力形式だけで初稿を出します。ここで方向性を確認します。",
  },
  {
    title: "2. 差分修正",
    body: "次に「どこが足りないか」を1点ずつ修正します。例: 具体例を追加、語調を変更、文字数を短縮。",
  },
  {
    title: "3. 深掘り質問",
    body: "必要に応じて、背景理由や比較軸を掘り下げます。1回で複数指示を出さず、1メッセージ1修正に分けると安定します。",
  },
  {
    title: "4. 最終化",
    body: "最後に「この回答を最終版として整形」と指示し、提出形式に合わせます。再利用テンプレとして保存すると次回が速くなります。",
  },
] as const;

const apiTips = [
  "system/developer prompt: 役割、語調、禁止事項、優先ルールなど固定指示を置く",
  "user prompt: 案件ごとの入力データ、依頼内容、出力条件を置く",
  "固定部分と可変部分を分離すると、チーム運用でレビューしやすくなる",
  "情報確認日: 2026-02-20（OpenAI Model release notes / Prompting guide）",
] as const;

export default function ChatgptPromptBeginnerPage({ faqItems }: ChatgptPromptBeginnerPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPTプロンプトの書き方入門" },
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
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
          </h1>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r-lg" id="answer-box">
            <p className="text-sm font-semibold text-amber-700 mb-1">この記事でわかること</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              ChatGPTプロンプトは、長く書くほど良いわけではなく、目的・前提・制約・出力形式を分けて指示するだけで精度が安定します。この記事では初心者向けに、15の基本型、NGとOKの書き換え例、回答がズレたときの修正順、追質問を使う場面と使わない場面、APIでsystem/developerとuserを分離する実務ルールまでを一気通貫で整理し、明日から再現できる型に落とし込みます。初学者が最短で改善を実感できる順序で学べます。
            </p>
          </div>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            ChatGPTを使い始めた直後に多い悩みは、「思い通りの答えが返ってこない」ことです。問題はモデル性能だけでなく、質問の設計にあります。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            この記事では、初心者がすぐ使える15のプロンプト型、実務・学習・副業のNG例とOK例、続けて質問する会話設計、APIでの指示分離まで一つずつ整理します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTスマホ開始ガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-plan-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT料金プラン比較
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT実践テクニック
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-templates-50" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプロンプトテンプレート50選
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-voice-mode-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT音声モード活用ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-english-learning-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI英語学習ガイド
          </Link>
          ・日常での具体的な活用例は
          <Link href="/academy/blog/ai-daily-life-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI×日常生活活用術20選
          </Link>
          ・プロンプト以前の基本的な聞き方は
          <Link href="/academy/blog/how-to-ask-ai-beginners" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIへの聞き方完全入門
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
        </p>
        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox
            title="要点まとめ"
            items={[
              "答えがズレる主因は、曖昧な依頼と条件不足です。",
              "最初は「役割指定・ステップ分解・出力形式指定」の3型だけで十分改善できます。",
              "NGとOKの差は、目的・前提・制約が言語化されているかどうかです。",
              "精度を上げるには、1回で終わらせず、追質問前提で会話を設計します。",
              "APIではsystem/developer側とuser側を分離すると、再現性と運用性が上がります。",
            ]}
          />
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="why-miss"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="why-miss">
            答えがズレる理由：モデルの問題より「質問設計の不足」
          </ArticleH2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            OpenAI公式のプロンプトガイドでも、曖昧な依頼より、目的・条件・出力形式を明示した指示が推奨されています。初心者のつまずきもこの3点に集中しています。
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {failurePatterns.map((item) => (
              <section key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>{item.title}</ArticleH3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <Callout type="tip" title="さらに詳しく学ぶ">
            まず操作に慣れたい場合は「スマホで始める方法」、仕事ですぐ使うテンプレを見たい場合は「テンプレート集」を先に読むと理解が速くなります。
          </Callout>
        </motion.section>

        <motion.section
          id="templates-15"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="templates-15">
            初心者がすぐ使える15のプロンプト型
          </ArticleH2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            15個を一度に覚える必要はありません。最初の3つを毎日使い、慣れたら他の型を追加する運用が現実的です。
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {promptPatterns.map((item, index) => (
              <section key={item.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <ArticleH3>
                  {index + 1}. {item.name}
                </ArticleH3>
                <p className="blog-p mt-2 text-sm text-gray-500 mb-4 flex items-center gap-1">
                  <Info size={14} /> 使いどころ: {item.scene}
                </p>
                <div className="overflow-x-auto rounded-xl bg-gray-900 p-4 font-mono text-xs leading-6 text-gray-300">
                  {item.template}
                </div>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="ng-ok"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="ng-ok">
            NG例 vs OK例：改善のポイント
          </ArticleH2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            実務系、学習系、副業系の3カテゴリで比較すると、改善ポイントが明確になります。
          </p>
          <div className="mt-7 space-y-6">
            {examplePairs.map((pair) => (
              <section key={pair.category} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <ArticleH3>{pair.category}</ArticleH3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-100 bg-red-50/50 p-4">
                    <p className="text-xs font-bold tracking-wide text-red-600 flex items-center gap-1 mb-2">
                      <X size={14} /> NG例
                    </p>
                    <p className="blog-p text-sm leading-7 text-gray-700">{pair.ng}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
                    <p className="text-xs font-bold tracking-wide text-emerald-600 flex items-center gap-1 mb-2">
                      <Check size={14} /> OK例
                    </p>
                    <p className="blog-p text-sm leading-7 text-gray-700">{pair.ok}</p>
                  </div>
                </div>
                <p className="blog-p mt-4 text-sm font-medium text-orange-600 flex items-center gap-2">
                  <Lightbulb size={16} /> 改善ポイント: {pair.point}
                </p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="conversation-design"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="conversation-design">
            続けて質問するコツ（会話設計）
          </ArticleH2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            1回で完成を狙うより、段階的に改善した方が再現性が高くなります。
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {conversationSteps.map((step) => (
              <section key={step.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <ArticleH3>{step.title}</ArticleH3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="api-system-user"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="api-system-user">
            GPT-5.2時代の設計とAPI補足
          </ArticleH2>
          <Callout type="info" title="指示の分離設計">
            API利用では、system/developer側に固定ルールを置き、user側で案件差分を渡す設計が運用しやすいです。
            <ul className="mt-4 space-y-2">
              {apiTips.map((tip) => (
                <li key={tip} className="flex gap-2 items-start text-sm text-blue-900 opacity-90">
                  <Check className="h-4 w-4 mt-1 shrink-0"/> {tip}
                </li>
              ))}
            </ul>
          </Callout>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.055 }}
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
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                ChatGPTスマホ始め方ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/prompt-template-for-work" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                仕事で使えるプロンプトテンプレート集
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                ChatGPT実践テクニック集
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-templates-50" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                ChatGPTプロンプトテンプレート50選
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-voice-mode-guide" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                ChatGPT音声モード活用ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-english-learning-guide" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                AI英語学習ガイド｜会話練習と添削の進め方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-hallucination-fact-check-guide" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                AIのハルシネーション対策ガイド
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white shadow-floating"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="text-2xl font-bold">
            ツール操作だけで終わらない学び方へ
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-300">
            AIリブートアカデミーでは、生成AI活用力に加えて、自己理解・キャリアデザイン、仲間と共に学ぶ環境を一体で設計しています。
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-xl bg-will-primary px-6 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-will-primary/90 active:scale-[0.98]"
            >
              アカデミーの詳細を見る
            </Link>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.98]"
            >
              無料セミナーを見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
