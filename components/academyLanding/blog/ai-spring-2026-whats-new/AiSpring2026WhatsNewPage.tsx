"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  Calendar,
  Clock,
  BookOpen,
  Quote,
  Sparkles,
  ChevronRight,
  TrendingUp,
  FileText,
  Eye,
  Bot,
  Brain,
} from "lucide-react";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY, ACADEMY_SPACING } from "../../sections/academyDesignTokens";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

const keywordTags = ["AI 2026年 最新", "ChatGPT 何が変わった", "生成AI 2026 初心者", "AI 最新機能 使い方"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "intro", label: "3年で想像以上に変わったAI" },
  { id: "change1", label: "変化1：回答の精度が格段に上がった" },
  { id: "change2", label: "変化2：一度に扱える情報量が増えた" },
  { id: "change3", label: "変化3：画像・音声・動画も扱えるようになった" },
  { id: "change4", label: "変化4：複雑なタスクを自律実行できるようになった" },
  { id: "change5", label: "変化5：個人専用AIとして育てられるようになった" },
  { id: "no-need-to-chase", label: "全部追いかけなくていい" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const fiveChanges = [
  {
    id: "change1",
    number: "01",
    icon: <TrendingUp className="h-6 w-6 text-emerald-500" />,
    title: "AIの回答が格段に正確になった",
    before: "以前（2023〜2024年頃）",
    beforeText: "事実と異なる情報（ハルシネーション）が頻発していました。AIが自信満々に間違えることがあり、「信用できない」と感じた方も多かったはずです。",
    after: "2026年春の現在",
    afterText: `大幅に改善されました。OpenAIのo3モデル、Anthropic Claude 3.7 Sonnet、Google Gemini 2.0 Flashなど最新モデルでは、特に事実確認が必要な質問への精度が著しく向上しています。

「確認なしで使える」場面が確実に増えました。文章の要約・整理・アイデア出しなどは、かなり安心して使えるようになっています。`,
    honest: "それでもゼロではありません。最新情報・正確な数値・専門的な医療・法律情報は、今も公式ソースでの確認が必要です。「かなり良くなった」と「完全に信頼できる」は別の話です。",
    forBeginners: "「前にAIを試して嘘をつかれた」という方、ぜひもう一度試してみてください。あの頃のAIとは別物です。",
    practice: [
      "メールの返信案を作ってもらい、自分で確認して送る",
      "会議の議事録の要約を依頼する",
      "資料の論理的な矛盾をチェックしてもらう",
    ],
  },
  {
    id: "change2",
    number: "02",
    icon: <FileText className="h-6 w-6 text-blue-500" />,
    title: "一度に処理できる情報量が増えた",
    before: "以前（2023〜2024年頃）",
    beforeText: "長い文章を貼り付けると途中で切れたり、前半の内容を忘れてしまったりしました。「コンテキスト（文脈）が足りない」とエラーになることも。",
    after: "2026年春の現在",
    afterText: `長文メール・報告書・議事録・契約書を丸ごと貼り付けても、しっかり処理できるようになりました。

Claude 3.7 SonnetやGemini 2.0は200万トークン前後のコンテキストウィンドウを持ち、文庫本数冊分のテキストを一度に読み込めます。GPT-4oも12万8千トークンに対応しています。`,
    honest: "ただし、長ければ長いほど「重要なポイントを見落とす」リスクはゼロではありません。特に重要な部分は個別に確認する習慣が安全です。",
    forBeginners: "「長すぎるから短くして貼らないといけない」という手間がなくなりました。まるごとコピペしてOKです。",
    practice: [
      "長い契約書を貼って「重要な点を箇条書きにして」と依頼する",
      "1時間の会議メモを貼って「5分で読める要約にして」と依頼する",
      "長い報告書を貼って「問題点があれば指摘して」と依頼する",
    ],
  },
  {
    id: "change3",
    number: "03",
    icon: <Eye className="h-6 w-6 text-violet-500" />,
    title: "画像・音声・動画も扱えるようになった",
    before: "以前（2023〜2024年頃）",
    beforeText: "テキスト（文字）のみでした。写真を見せることも、声で話しかけることもできませんでした。",
    after: "2026年春の現在",
    afterText: `ChatGPT（GPT-4o）、Claude 3.7 Sonnet、Gemini 2.0はいずれも「マルチモーダル」対応です。

・写真を撮って「この植物は何？」と聞けば教えてくれます
・スマホで音声入力して会話形式でやりとりできます（ChatGPT音声モード）
・画像を見せて「この資料のグラフをもとに説明文を書いて」という使い方も可能です`,
    honest: "動画の本格対応はまだ発展途上で、一部機能はβ版・限定公開の段階です（2026年2月時点）。Gemini 1.5 Proが動画対応をしていますが、安定性はケースバイケースです。",
    forBeginners: "「タイプするのが面倒」という方も、話しかければいいんです。スマホのアプリで、口頭でAIと会話する使い方が一番ハードルが低いかもしれません。",
    practice: [
      "スマホで料理の写真を撮って「この料理を再現したい。レシピを教えて」と聞く",
      "外出先で植物・商品・看板の写真を撮って「これは何？」と質問する",
      "ChatGPTアプリの音声モードで、通勤中に音声でAIに相談する",
    ],
  },
  {
    id: "change4",
    number: "04",
    icon: <Bot className="h-6 w-6 text-amber-500" />,
    title: "複雑なタスクを自律的に実行できるようになった（AI Agent）",
    before: "以前（2023〜2024年頃）",
    beforeText: "一問一答のスタイルのみでした。AIに「調べて」と頼んでも、AIはウェブを検索できないため、自分で調べた情報を貼り付ける必要がありました。",
    after: "2026年春の現在",
    afterText: `「AI Agent（AIエージェント）」という概念が普及し、複数ステップのタスクを自律的に実行できるようになりました。

ChatGPT（Operator/Deep Research機能）、Perplexity、Geminiなどが対応しています。たとえば「競合他社3社の価格を調べて表にまとめて、差別化ポイントを分析した提案メールを書いて」という複合タスクを自動実行できます。`,
    honest: "まだ完璧ではありません。途中でミスが起きることもあるため、重要なタスクでは人間の監視・確認が必要です。「全自動で任せっきり」より「AIが先行して作り、人間が確認する」が現時点での安全な使い方です。",
    forBeginners: "「複数ステップの仕事をAIにお任せ」できる場面が増えています。まずはChatGPTの「Deep Research」機能（有料版）を試してみるのがわかりやすいです。",
    practice: [
      "「○○というテーマで調べて、ブログ記事の構成を作って」と依頼する",
      "「この情報をもとに、上司へのレポートを書いて」と依頼する",
      "ChatGPTのOperator機能でウェブ操作を自動化する（β版）",
    ],
  },
  {
    id: "change5",
    number: "05",
    icon: <Brain className="h-6 w-6 text-rose-500" />,
    title: "個人のアシスタントとして機能するようになった（メモリ・カスタマイズ）",
    before: "以前（2023〜2024年頃）",
    beforeText: "毎回ゼロからの会話でした。「私は30代の営業職です」と前回伝えても、次のセッションでは完全に忘れてしまい、また自己紹介が必要でした。",
    after: "2026年春の現在",
    afterText: `ChatGPTには「メモリ機能」が追加され、過去の会話を覚えられるようになりました。「カスタム指示」で自分の仕事スタイル・好みの文体・役割などを設定すると、毎回それを踏まえた回答が返ってくるようになります。

Claudeは「Projectsの記憶機能」でプロジェクトの文脈を保持でき、Geminiも「Gemsプロジェクト」機能で専用のAIアシスタントをカスタマイズできます。`,
    honest: "メモリ機能は初期状態ではオフになっている場合もあります。設定から有効にする必要があります。また、機密情報をAIに「覚えさせる」ことには注意が必要です。",
    forBeginners: "毎回同じ自己紹介をしなくていい、というだけで使いやすさが大きく変わります。「自分専用AI」に育てていく感覚です。",
    practice: [
      "ChatGPTのカスタム指示に「私は40代の営業マネージャーです。箇条書きで簡潔に答えてください」と設定する",
      "ChatGPTのメモリ設定をオンにして、何度か会話を重ねて「○○を覚えて」と伝える",
      "Claudeの「Projects」機能を使って、特定のプロジェクト専用AIを設定する",
    ],
  },
] as const;

export default function AiSpring2026WhatsNewPage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32 overflow-x-clip">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "2026年春のAI最新5大変化" },
          ]}
        />

        {/* ヘッダー */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
          className="relative"
        >
          <div className="flex flex-wrap gap-2 mb-8">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="rounded px-2 py-0.5 text-[10px] font-bold border"
                style={{
                  backgroundColor: ACADEMY_COLORS.bgSection,
                  color: ACADEMY_COLORS.textMuted,
                  borderColor: ACADEMY_COLORS.lineSoft,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl tracking-tight mb-8"
            style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif }}
          >
            2026年春、生成AIは何が変わったか：<br className="hidden sm:block" />初心者が驚く最新5つの進化と、今すぐ試せること
          </h1>

          <div
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b pb-8"
            style={{ borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <div className="flex items-center gap-4">
              <div
                className="h-10 w-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: ACADEMY_COLORS.bgSection }}
              >
                <Calendar className="h-5 w-5" style={{ color: ACADEMY_COLORS.textMuted }} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: ACADEMY_COLORS.textMuted }}>
                  Published on
                </p>
                <time className="text-sm font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
                  2026年2月24日
                </time>
              </div>
            </div>

            <CopyAsMarkdownButton
              title="2026年春、生成AIは何が変わったか：初心者が驚く最新5つの進化と、今すぐ試せること"
              sourceSelector="[data-blog-article-body]"
            />
          </div>

          <div
            className="mt-10 p-6 sm:p-10 rounded-xl border relative"
            style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <Quote className="absolute top-6 right-8 h-12 w-12 opacity-5" style={{ color: ACADEMY_COLORS.accentMain }} />
            <p className="text-lg sm:text-xl leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              「AIって最近どう変わったの？」「乗り遅れていない？」——そんな不安を抱えている方へ。
            </p>
            <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              2023年にChatGPTが話題になってから3年。AIは想像以上に変わりました。でも全部追いかけなくていい。初心者が知っておくべき変化はこの5つです。特に2025年後半〜2026年にかけての変化は、初心者にも実感しやすいものばかりです。
            </p>
          </div>
        </motion.header>

        <div
          className="mt-12 p-6 rounded-xl border flex flex-wrap items-center gap-y-3 gap-x-1"
          style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineSoft }}
        >
          <BookOpen className="h-4 w-4 mr-2" style={{ color: ACADEMY_COLORS.accentMain }} />
          <span className="text-xs font-bold mr-2 uppercase tracking-wider" style={{ color: ACADEMY_COLORS.textMuted }}>
            Related topics:
          </span>
          <Link
            href="/academy/blog/chatgpt-claude-beginners-guide"
            className="text-sm font-bold border-b transition-opacity hover:opacity-70"
            style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
          >
            ChatGPT・Claude初心者ガイド
          </Link>
          <span className="mx-1" style={{ color: ACADEMY_COLORS.lineStrong }}>
            /
          </span>
          <Link
            href="/academy/blog/ai-overview-map-2026"
            className="text-sm font-bold border-b transition-opacity hover:opacity-70"
            style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
          >
            AI全体像マップ2026
          </Link>
        </div>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="check-box mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h4 id="conclusion" className="scroll-mt-28 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-emerald-500" />
            要点まとめ
          </h4>
          <ul className="mt-6 space-y-4">
            <li>
              AIの回答精度が大幅に向上。<strong>「以前試してダメだった」人にもう一度試してほしい</strong>
            </li>
            <li>
              長文をそのままコピペできる。<strong>短くして貼る手間が不要に</strong>
            </li>
            <li>
              画像・音声でも使えるようになった。<strong>スマホで写真を撮って聞ける</strong>
            </li>
            <li>
              複数ステップのタスクを自律実行できる<strong>「AI Agent」</strong>が普及しつつある
            </li>
            <li>
              自分の好みを覚えてくれる<strong>「自分専用AI」</strong>に育てられるようになった
            </li>
          </ul>
        </motion.section>

        {/* イントロ */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="intro" className="scroll-mt-28">
            3年で想像以上に変わったAI
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              2023年末、ChatGPTが日本でも一大ブームになりました。
            </p>
            <p style={{ color: ACADEMY_COLORS.textBody }}>
              あれから2年と少し。AIを「試したことはある」という方は多いですが、「今もちゃんと使っている」という方は意外と少ないかもしれません。「一度使ったけどあまり使えなかった」「なんとなく興味があるけど最新情報を追えていない」——そういう方のために、この記事を書きました。
            </p>
            <div
              className="p-6 rounded-xl border-l-2"
              style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.accentMain }}
            >
              <p className="font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
                2026年現在のAIは、2023年のAIとは別物と言っても過言ではありません。
              </p>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
                回答の正確さ、扱える情報量、使えるモダリティ（テキスト・画像・音声）、自動化の度合い——すべてが大きく進化しています。ただ、情報が多すぎて「何が変わったのか」「自分に関係あるのか」がわかりにくい状況でもあります。
              </p>
            </div>
            <p style={{ color: ACADEMY_COLORS.textBody }}>
              この記事では、初心者の方が「これは自分に関係ある」と感じられる5つの変化を、具体的な実践例とともに解説します。
            </p>
          </div>
        </motion.section>

        {/* 5つの変化 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 className="scroll-mt-28">初心者が知っておくべき5つの変化</h2>
          <div className="mt-12 space-y-16">
            {fiveChanges.map((change) => (
              <section key={change.id} id={change.id} className="scroll-mt-28">
                <div className="flex items-start gap-6 mb-8">
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl font-black text-2xl text-white"
                    style={{ backgroundColor: ACADEMY_COLORS.accentMain }}
                  >
                    {change.number}
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-slate-900 m-0 border-none pb-0 leading-tight"
                      style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif }}
                    >
                      {change.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-2">
                      {change.icon}
                      <span className="text-sm font-bold" style={{ color: ACADEMY_COLORS.textMuted }}>
                        初心者にとっての変化
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mb-8">
                  <div
                    className="rounded-xl p-6 border"
                    style={{ backgroundColor: "#fef2f2", borderColor: "#fecaca" }}
                  >
                    <p className="text-[11px] font-bold uppercase tracking-widest text-rose-400 mb-3">
                      {change.before}
                    </p>
                    <p className="text-sm leading-relaxed text-rose-900">{change.beforeText}</p>
                  </div>
                  <div
                    className="rounded-xl p-6 border"
                    style={{ backgroundColor: "#f0fdf4", borderColor: "#bbf7d0" }}
                  >
                    <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 mb-3">
                      {change.after}
                    </p>
                    <p className="text-sm leading-relaxed text-emerald-900 whitespace-pre-line">{change.afterText}</p>
                  </div>
                </div>

                <div
                  className="rounded-xl p-6 border mb-6"
                  style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}
                >
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: ACADEMY_COLORS.textMuted }}>
                    正直なところ
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
                    {change.honest}
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-sm font-bold mb-3" style={{ color: ACADEMY_COLORS.accentMain }}>
                    ✔ 初心者への意味：{change.forBeginners}
                  </p>
                </div>

                <div
                  className="rounded-xl border p-6"
                  style={{ borderColor: ACADEMY_COLORS.lineSoft }}
                >
                  <p
                    className="text-[11px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2"
                    style={{ color: ACADEMY_COLORS.textMuted }}
                  >
                    <Clock className="h-3.5 w-3.5" />
                    今すぐ試せる実践例
                  </p>
                  <ul className="space-y-3">
                    {change.practice.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <ArrowRight
                          className="h-4 w-4 mt-0.5 shrink-0"
                          style={{ color: ACADEMY_COLORS.accentMain }}
                        />
                        <span className="text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 中間CTA */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <MidArticleCtaBox slug="ai-spring-2026-whats-new" />
        </motion.section>

        {/* 全部追いかけなくていい */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="no-need-to-chase" className="scroll-mt-28">
            「全部追いかけなくていい」という大事なメッセージ
          </h2>
          <div className="mt-8 space-y-6">
            <p style={{ color: ACADEMY_COLORS.textBody }}>
              AIの世界では、毎週のように新機能・新モデルが発表されます。SNSを見れば「○○が革命的」「これを知らないと乗り遅れる」という情報が溢れています。
            </p>
            <div
              className="p-6 rounded-xl border-l-2"
              style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.accentMain }}
            >
              <p className="text-lg font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
                でも、全部試す必要はありません。
              </p>
              <p className="mt-3 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
                「今困っていること」に合う機能を一つ試す。それだけで十分です。
              </p>
            </div>
            <p style={{ color: ACADEMY_COLORS.textBody }}>
              AIトレンドを追うことが目的になってしまうと、消耗します。大切なのは、自分の仕事や生活の中で「これがあると助かる」を一つ見つけること。それを小さく試してみること。
            </p>
            <p style={{ color: ACADEMY_COLORS.textBody }}>
              そして、「乗り遅れた」ということは絶対にありません。2026年の今始めても、半年後には「あの頃始めてよかった」と感じるはずです。AIの習得に「遅すぎる」タイミングは存在しません。
            </p>

            <div className="grid gap-4 sm:grid-cols-3 mt-8">
              {[
                { step: "Step 1", text: "今困っていること・手間に感じていることを1つ書き出す" },
                { step: "Step 2", text: "ChatGPT（無料版でOK）を開いて、その悩みをそのまま相談してみる" },
                { step: "Step 3", text: "結果を見て「使えそう」と感じたら、その1点だけを毎日使い続ける" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl border p-6"
                  style={{ backgroundColor: ACADEMY_COLORS.bgPanel, borderColor: ACADEMY_COLORS.lineSoft }}
                >
                  <p
                    className="text-[11px] font-black uppercase tracking-widest mb-3"
                    style={{ color: ACADEMY_COLORS.accentMain }}
                  >
                    {item.step}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="faq" className="scroll-mt-28">
            よくある質問（FAQ）
          </h2>
          <div className="mt-10 divide-y border-t" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
            {faqItems.map((item) => (
              <div key={item.question} className="py-8 group">
                <dt className="text-lg font-bold leading-relaxed text-slate-900 flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-stone-100 text-[12px] font-bold text-stone-400 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                    Q
                  </span>
                  {item.question}
                </dt>
                <dd
                  className="mt-4 pl-11 text-base leading-relaxed"
                  style={{ color: ACADEMY_COLORS.textBody }}
                >
                  {item.answer}
                </dd>
              </div>
            ))}
          </div>
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-24 rounded-xl border p-10 sm:p-14 relative overflow-hidden"
          style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <Sparkles
            className="absolute -right-4 -top-4 h-32 w-32 opacity-5"
            style={{ color: ACADEMY_COLORS.accentMain }}
          />

          <h2
            id="summary"
            className="scroll-mt-28 text-2xl font-bold m-0 border-none pb-0"
            style={{ color: ACADEMY_COLORS.textStrong }}
          >
            まとめ：今のAIは、あの頃のAIとは別物です
          </h2>
          <p className="mt-8 text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
            2026年春現在の生成AIは、3年前とは別物です。
          </p>
          <div className="mt-10 grid gap-4">
            {[
              "回答の精度が大幅に上がった（一度諦めた方にもう一度試してほしい）",
              "長文をそのままコピペして処理できるようになった",
              "写真・音声でも使えるようになった",
              "複雑なタスクをAIが自律実行できるようになってきた",
              "自分の好みを覚えてくれる「自分専用AI」に育てられるようになった",
            ].map((text) => (
              <div
                key={text}
                className="flex items-center gap-4 p-4 rounded-lg border bg-white"
                style={{ borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-base" style={{ color: ACADEMY_COLORS.textBody }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-12 space-y-6">
            <p className="text-lg leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              全部追いかける必要はありません。「今困っていること」に合う機能を一つ選んで、今日試してみてください。
            </p>
            <p
              className="text-2xl font-bold leading-tight tracking-tight"
              style={{ color: ACADEMY_COLORS.textStrong, fontFamily: ACADEMY_TYPOGRAPHY.serif }}
            >
              AIは待ってくれません。でも、<br />遅すぎることもありません。
            </p>
          </div>
        </motion.section>

        {/* LINE CTA */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <LineCtaBox
            title="最新AIを自分のペースで学びたい方へ"
            description="「記事を読んだけど、どこから始めればいいか迷っている」という方へ。LINEで無料相談を受け付けています。あなたの状況に合わせた最初の一歩を一緒に考えます。"
            buttonLabel="LINEで気軽に相談する（登録無料）"
          />
        </motion.section>

        {/* CTA：アカデミー */}
        <motion.section
          className="mt-24 pt-16 border-t"
          style={{ borderColor: ACADEMY_COLORS.lineSoft }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2
            id="academy-cta"
            className="scroll-mt-28 flex items-center gap-3 text-2xl font-bold"
            style={{ color: ACADEMY_COLORS.textStrong, fontFamily: ACADEMY_TYPOGRAPHY.serif }}
          >
            <Lightbulb className="h-8 w-8" style={{ color: ACADEMY_COLORS.accentMain }} />
            最新のAIトレンドを追いながら、自分のペースで学べる環境
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            AIリブートアカデミーでは、最新のAI動向をキャッチアップしながら、実務で使えるスキルを身につけるカリキュラムを提供しています。初心者から始めて、自分のペースで確実に成長できます。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-slate-900 px-8 py-5 text-lg font-bold text-white transition-all hover:opacity-90 active:scale-95 sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                AIリブートアカデミーを見る
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/academy/blog/chatgpt-start-guide-smartphone"
              className="inline-flex items-center justify-center rounded-lg border px-8 py-5 text-lg font-bold transition-all hover:opacity-70 active:scale-95"
              style={{
                backgroundColor: ACADEMY_COLORS.bgPanel,
                borderColor: ACADEMY_COLORS.lineSoft,
                color: ACADEMY_COLORS.textBody,
              }}
            >
              ChatGPTをスマホで始める
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section
          id="related-links"
          className={ACADEMY_SPACING.sectionPy + " border-t mt-24"}
          style={{ borderColor: ACADEMY_COLORS.lineSoft }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div
              className="h-10 w-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: ACADEMY_COLORS.bgSection }}
            >
              <BookOpen className="h-5 w-5" style={{ color: ACADEMY_COLORS.textMuted }} />
            </div>
            <h2
              className="scroll-mt-28 m-0 border-none pb-0 text-2xl font-bold"
              style={{ color: ACADEMY_COLORS.textStrong }}
            >
              関連リンク
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { href: "/academy/blog/chatgpt-start-guide-smartphone", label: "ChatGPTをスマホで始める方法" },
              { href: "/academy/blog/chatgpt-claude-beginners-guide", label: "ChatGPT・Claude初心者ガイド" },
              { href: "/academy/blog/ai-overview-map-2026", label: "AI全体像マップ2026" },
              { href: "/academy/blog/ai-anxiety-overcome-guide", label: "AIが怖い・難しいを乗り越えるガイド" },
              { href: "/academy", label: "AIリブートアカデミー TOP" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between p-5 rounded-xl border transition-all group"
                  style={{ backgroundColor: ACADEMY_COLORS.bgPanel, borderColor: ACADEMY_COLORS.lineSoft }}
                >
                  <span
                    className="text-sm font-bold transition-colors group-hover:text-[#d46a1f]"
                    style={{ color: ACADEMY_COLORS.textBody }}
                  >
                    {link.label}
                  </span>
                  <ChevronRight className="h-4 w-4 text-stone-300 group-hover:text-[#d46a1f] group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
