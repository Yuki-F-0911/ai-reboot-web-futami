"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  ShieldAlert,
  FileText,
  ClipboardList,
  BookOpen,
  Quote,
  Sparkles,
  ChevronRight,
  Calendar,
  Info,
  MessageSquare,
} from "lucide-react";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";
import PromptBlock from "@/components/blog/blocks/PromptBlock";
import ResultBlock from "@/components/blog/blocks/ResultBlock";
import AlertBlock from "@/components/blog/blocks/AlertBlock";
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

const keywordTags = ["確定申告 AI", "ChatGPT 確定申告", "確定申告 2026", "AI 税務 初心者"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-ai-can-do", label: "AIが確定申告で実際に役立つこと・役立たないこと" },
  { id: "step1", label: "STEP 1：自分の申告パターンをAIに整理してもらう" },
  { id: "step2", label: "STEP 2：経費かどうか迷う項目をAIに相談する" },
  { id: "step3", label: "STEP 3：AIに確認チェックリストを作ってもらう" },
  { id: "step4", label: "STEP 4：難しい用語・計算式を平易に説明してもらう" },
  { id: "step5", label: "STEP 5：国税庁ツールと組み合わせる" },
  { id: "cautions", label: "注意事項：AIを使う前に知っておくこと" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const aiCanDo = [
  {
    icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
    type: "できること",
    color: "emerald",
    items: [
      "自分の状況（会社員・フリーランス・副業）に応じた必要書類のリストアップ",
      "「これは経費になるか？」という判断基準の確認と整理",
      "国税庁サイトの難しい用語を平易な言葉で解説してもらう",
      "申告漏れを防ぐためのチェックリストの作成",
      "「所得控除」「青色申告」などの概念を何度でも丁寧に説明してもらう",
    ],
  },
  {
    icon: <AlertCircle className="h-5 w-5 text-rose-500" />,
    type: "できないこと",
    color: "rose",
    items: [
      "実際の申告書への記入（国税庁の「確定申告書等作成コーナー」を使う必要があります）",
      "e-Taxやマイナポータルへのログインや操作の代行",
      "最終的な税額の確定（特に複雑なケースは税理士の確認が必要）",
      "あなたの個人情報を入力しての正確な計算（プライバシーリスクあり）",
    ],
  },
] as const;

const steps = [
  {
    id: "step1",
    number: "01",
    title: "STEP 1：自分の申告パターンをAIに整理してもらう",
    icon: <FileText className="h-6 w-6" />,
    lead: "確定申告に何が必要かは、あなたの状況によって大きく異なります。AIに自分の状況を伝えることで、必要書類をリストアップしてもらえます。",
    prompt: `【プロンプト例】
私は会社員（年収約450万円）で、副業としてクラウドソーシングでライティングの仕事をしています。2025年の副業収入は約60万円でした。2025年分の確定申告に必要な書類を教えてください。`,
    result: `【AIの回答イメージ】
あなたの状況では、以下の書類が必要になります。

■ 会社員分（給与）
・源泉徴収票（勤務先から年末か翌年1月に受け取れます）

■ 副業分（事業所得 or 雑所得）
・各クラウドソーシングサイトの年間支払い明細（サイト内の「支払い履歴」からDL）
・経費の領収書・レシート類

■ 控除関係
・医療費の領収書（10万円超の場合）
・ふるさと納税の寄附金受領証明書
・iDeCo・生命保険料・地震保険料の控除証明書

副業収入が20万円を超えるため、確定申告が必要です。
※青色申告を検討する場合は事前に税務署への届出が必要です。`,
    point: "AIは「なぜその書類が必要か」まで説明してくれます。1つずつ「これはどこで入手できますか？」と追加で聞くこともできます。",
  },
  {
    id: "step2",
    number: "02",
    title: "STEP 2：経費かどうか迷う項目をAIに相談する",
    icon: <MessageSquare className="h-6 w-6" />,
    lead: "「これは経費になる？ならない？」という判断は、確定申告でよくある悩みです。AIに相談することで、判断基準を理解しやすくなります。",
    prompt: `【プロンプト例①：フリーランスの場合】
フリーランスとして翻訳の仕事をしています。
以下の支出は経費として認められますか？
・仕事でカフェで作業したときのコーヒー代（月5,000円程度）
・自宅の電気代（在宅ワーク比率：全体の60%）
・仕事に使うパソコンの購入費（15万円）`,
    result: `【AIの回答イメージ】
一般的な解釈をお伝えします（最終判断は税理士か国税庁にご確認ください）。

・カフェのコーヒー代：「業務に関連する会議費・打合せ費」として計上できる可能性があります。ただし「仕事のための場所代」として使った場合は領収書に「作業場所として利用」とメモを残しておくと安心です。
・電気代：在宅ワーク割合（60%）に応じた家事按分（60%）が認められることが多いです。
・パソコン：10万円以上の場合は一括経費ではなく「減価償却」になります（耐用年数4年→年約3.75万円ずつ計上）。`,
    point: "AIでもグレーゾーンの経費は断言できません。「この回答は一般的な解釈です」という前置きがつくのが正直なAIです。最終確認は税理士か国税庁のチャットボットで行いましょう。",
    warning: "注意：「絶対に経費になります」と断言するAIの回答は過信禁物。判断が難しいものは必ず専門家に確認を。",
  },
  {
    id: "step3",
    number: "03",
    title: "STEP 3：AIに確認チェックリストを作ってもらう",
    icon: <ClipboardList className="h-6 w-6" />,
    lead: "「あの控除を入れ忘れた！」という申告漏れを防ぐために、AIにチェックリストを作成してもらいましょう。",
    prompt: `【プロンプト例】
会社員で、副業収入が年50万円あります。
医療費が年15万円かかり、ふるさと納税もしています。
2025年分の確定申告の申告漏れを防ぐためのチェックリストを、
Markdown形式で作成してください。`,
    result: `【AIが作成するチェックリストのイメージ】
## 確定申告チェックリスト（会社員・副業あり）

### 📁 書類収集
- [ ] 源泉徴収票（勤務先より入手）
- [ ] 副業の年間収入明細（クラウドソーシングサイトより）
- [ ] 副業の経費領収書・レシート
- [ ] 医療費の領収書（総額15万円分）
- [ ] ふるさと納税の寄附金受領証明書

### 📊 控除の確認
- [ ] 医療費控除：10万円を超える分（5万円）が控除対象
- [ ] 寄附金控除（ふるさと納税）
- [ ] 生命保険料控除証明書の確認

### 🖥️ 申告作業
- [ ] 国税庁「確定申告書等作成コーナー」にアクセス
- [ ] e-Taxまたは印刷して郵送を選択
- [ ] 提出期限：2026年3月16日（月）まで`,
    point: "チェックリスト形式で出力してもらうことで、視覚的に「何が終わっていて何が残っているか」がわかります。「もっと詳しく教えて」と続けて聞くことも可能です。",
  },
  {
    id: "step4",
    number: "04",
    title: "STEP 4：難しい用語・計算式を平易に説明してもらう",
    icon: <BookOpen className="h-6 w-6" />,
    lead: "国税庁のWebサイトは正確ですが、言葉が難しい。AIは同じ内容を何度でも、わかりやすい言葉で説明してくれます。",
    prompt: `【プロンプト例①】
「所得控除」と「税額控除」の違いを、小学生でもわかるように例えて説明してください。

【プロンプト例②】
「青色申告特別控除（65万円）」を受けるには何が必要ですか？
会社員の副業でも使えますか？

【プロンプト例③】
源泉徴収票の「給与所得控除後の金額」という欄は何ですか？`,
    result: `【AIの回答イメージ（所得控除 vs 税額控除）】
わかりやすい例えで説明します。

あなたの年収が500万円だとします。

■ 所得控除（医療費控除・基礎控除など）
→ 課税対象の金額を減らします。
「500万円の収入があるけど、医療費を50万円使ったから、税金の計算は450万円を基準にしてね」という仕組みです。

■ 税額控除（住宅ローン控除など）
→ 計算した税金そのものを減らします。
「計算したら税金が30万円だけど、住宅ローン控除で10万円引いて、実際は20万円ね」という仕組みです。

税額控除の方が直接税金が減るため、一般的にインパクトが大きいです。`,
    point: "「もっと簡単に」「具体的な数字で」「私の場合（副業60万円）だとどうなりますか？」など、納得するまで聞き直せるのがAIの最大のメリットです。",
  },
  {
    id: "step5",
    number: "05",
    title: "STEP 5：国税庁の公式ツールと組み合わせる",
    icon: <Info className="h-6 w-6" />,
    lead: "実際の申告書作成は、国税庁の公式ツール「確定申告書等作成コーナー」を使います。AIはあくまで「理解を助ける相談役」として活用しましょう。",
    prompt: `【活用の流れ】

① AIで「何が必要か」「用語の意味」を事前に理解する
    ↓
② 国税庁「確定申告書等作成コーナー」で実際に入力する
   （https://www.keisan.nta.go.jp/）
    ↓
③ 入力中に「この欄に何を書けばいい？」とAIに聞きながら進める
    ↓
④ 完成した申告書をAIに説明してもらい、最終確認する

【最終確認のプロンプト例】
確定申告書等作成コーナーで入力を終えました。
提出前に確認すべきポイントを教えてください。
特に見落としやすい箇所があれば教えてください。`,
    result: `【AIの回答イメージ（提出前チェック）】
提出前の最終確認ポイントです。

■ 数字の確認
・源泉徴収票の数字と入力値が一致しているか
・医療費控除の金額は領収書の合計と一致しているか

■ 添付書類
・医療費控除：医療費控除の明細書（申告書と一緒に提出）
・ふるさと納税：寄附金受領証明書

■ よくある漏れ
・配偶者控除・扶養控除の確認
・iDeCoの所得控除（小規模企業共済等掛金控除）

■ 提出方法の確認
・e-Tax：マイナンバーカードまたはID・パスワード方式
・書面提出：税務署への持参または郵送（消印有効）`,
    point: "AIは「申告書の作成代行」はできませんが、「理解のサポート」「最終チェックの視点提供」には非常に有効です。",
  },
] as const;

export default function AiTaxReturnGuide2026Page({ faqItems }: Props) {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32 overflow-x-clip">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "2026年確定申告をAIで乗り越える完全ガイド" },
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
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl tracking-tight mb-8"
            style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif }}
          >
            2026年確定申告をAIで乗り越える：<br className="hidden sm:block" />
            書類整理から申告まで、初心者でもできる完全ガイド
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
                  2026年2月23日
                </time>
              </div>
            </div>

            <CopyAsMarkdownButton
              title="2026年確定申告をAIで乗り越える完全ガイド"
              sourceSelector="[data-blog-article-body]"
            />
          </div>

          {/* リード文 */}
          <div
            className="mt-10 p-6 sm:p-10 rounded-xl border relative"
            style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <Quote className="absolute top-6 right-8 h-12 w-12 opacity-5" style={{ color: ACADEMY_COLORS.accentMain }} />
            <p className="text-lg sm:text-xl leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              毎年2月になると憂鬱になる確定申告...。書類が多い、用語が難しい、何から手をつければいいかわからない。
            </p>
            <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              でも今年は違います。ChatGPTやClaudeというAIという強力な助っ人が登場しました。ただし正直に言います：<strong>AIで申告書が自動作成されるわけではありません。</strong>でも、準備・整理・理解のかなりの部分が楽になります。このガイドでは、AI初心者でも実践できる5つのSTEPで具体的に解説します。
            </p>
          </div>
        </motion.header>

        {/* 関連トピック */}
        <div
          className="mt-12 p-6 rounded-xl border flex flex-wrap items-center gap-y-3 gap-x-1"
          style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineSoft }}
        >
          <BookOpen className="h-4 w-4 mr-2" style={{ color: ACADEMY_COLORS.accentMain }} />
          <span className="text-xs font-bold mr-2 uppercase tracking-wider" style={{ color: ACADEMY_COLORS.textMuted }}>
            Related topics:
          </span>
          <Link
            href="/academy/blog/ai-accounting-guide"
            className="text-sm font-bold border-b transition-opacity hover:opacity-70"
            style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
          >
            AI×経理・会計活用ガイド
          </Link>
          <span className="mx-1" style={{ color: ACADEMY_COLORS.lineStrong }}>
            /
          </span>
          <Link
            href="/academy/blog/chatgpt-prompt-beginner"
            className="text-sm font-bold border-b transition-opacity hover:opacity-70"
            style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
          >
            ChatGPTプロンプト入門
          </Link>
          <span className="mx-1" style={{ color: ACADEMY_COLORS.lineStrong }}>
            /
          </span>
          <Link
            href="/academy/blog/ai-freelance-work-guide"
            className="text-sm font-bold border-b transition-opacity hover:opacity-70"
            style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
          >
            フリーランスのAI活用ガイド
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
            <li>AIは申告書を「代わりに作る」のではなく、<strong>「理解と準備をサポートする」</strong>ツールです</li>
            <li>必要書類のリストアップ・経費判断の相談・用語解説に<strong>具体的なプロンプト</strong>が使えます</li>
            <li>実際の申告書作成は<strong>国税庁「確定申告書等作成コーナー」</strong>を使います（AIとの二刀流が最強）</li>
            <li>マイナンバーや口座番号など<strong>個人情報はAIに入力しないこと</strong>が大原則</li>
          </ul>
        </motion.section>

        {/* AIができること・できないこと */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="what-ai-can-do" className="plain-h2 scroll-mt-28">
            AIが確定申告で実際に役立つこと・役立たないこと
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            まず「何ができて、何ができないのか」を正直に整理しておきましょう。ここを理解しておくと、AIをより効果的に、かつ適切に使えます。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {aiCanDo.map((section) => (
              <div
                key={section.type}
                className={`rounded-xl border p-8 ${section.color === "emerald" ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200"}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  {section.icon}
                  <h3
                    className={`text-lg font-bold m-0 border-none pb-0 ${section.color === "emerald" ? "text-emerald-800" : "text-rose-800"}`}
                  >
                    AIで{section.type}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
                      <span
                        className={`mt-0.5 shrink-0 h-4 w-4 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${section.color === "emerald" ? "bg-emerald-500" : "bg-rose-400"}`}
                      >
                        {section.color === "emerald" ? "○" : "×"}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
            💡 AIは「有能なアシスタント」であり「公認会計士の代替」ではありません。
          </p>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            この認識を持った上で使うと、AIは本当に頼もしい存在になります。それでは、具体的な使い方を5つのSTEPで見ていきましょう。
          </p>
        </motion.section>

        {/* STEP 1〜2 */}
        {steps.slice(0, 2).map((step) => (
          <motion.section
            key={step.id}
            className="mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionReveal}
          >
            <div className="mb-8">
              <h2 id={step.id} className="plain-h2 scroll-mt-28 text-2xl font-bold text-slate-900 m-0 border-none pb-0">
                {step.title}
              </h2>
            </div>
            <p className="text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              {step.lead}
            </p>

            <div className="mt-8">
              <PromptBlock>{step.prompt}</PromptBlock>
            </div>

            <div className="mt-4">
              <ResultBlock>{step.result}</ResultBlock>
            </div>

            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACADEMY_COLORS.accentMain }} />
              <span>{step.point}</span>
            </p>

            {"warning" in step && step.warning && (
              <div className="mt-3">
                <AlertBlock>{step.warning}</AlertBlock>
              </div>
            )}
          </motion.section>
        ))}

        {/* 中間CTA */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <MidArticleCtaBox slug="ai-tax-return-guide-2026" />
        </motion.section>

        {/* STEP 3〜5 */}
        {steps.slice(2).map((step) => (
          <motion.section
            key={step.id}
            className="mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionReveal}
          >
            <div className="mb-8">
              <h2 id={step.id} className="plain-h2 scroll-mt-28 text-2xl font-bold text-slate-900 m-0 border-none pb-0">
                {step.title}
              </h2>
            </div>
            <p className="text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              {step.lead}
            </p>

            <div className="mt-8">
              <PromptBlock>{step.prompt}</PromptBlock>
            </div>

            <div className="mt-4">
              <ResultBlock>{step.result}</ResultBlock>
            </div>

            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACADEMY_COLORS.accentMain }} />
              <span>{step.point}</span>
            </p>
          </motion.section>
        ))}

        {/* 注意事項 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="cautions" className="plain-h2 scroll-mt-28">
            注意事項：AIを使う前に知っておくこと
          </h2>
          <div className="mt-10 grid gap-6">
            {[
              {
                icon: <AlertCircle className="h-5 w-5 text-amber-600" />,
                bg: "bg-amber-50 border-amber-200",
                title: "AIの回答は「2026年時点の一般情報」です",
                body: "税制は毎年改正されます。AIの学習データには最新情報が含まれていない場合があります。「2025年分の申告に関して」と明示して質問し、重要な税務情報は必ず国税庁公式サイト（nta.go.jp）または税理士に確認してください。",
              },
              {
                icon: <ShieldAlert className="h-5 w-5 text-rose-600" />,
                bg: "bg-rose-50 border-rose-200",
                title: "個人情報はAIに入力しないこと",
                body: "マイナンバー、口座番号、氏名・住所、勤務先名などの個人を特定する情報は、AIチャットに入力しないでください。「副業収入が約60万円」「医療費が15万円程度」のように、金額を概数にして相談するのが安全です。",
              },
              {
                icon: <Info className="h-5 w-5 text-blue-600" />,
                bg: "bg-blue-50 border-blue-200",
                title: "複雑なケースは税理士に相談を",
                body: "海外収入・不動産収入・相続・事業継承・仮想通貨の損益など、複雑なケースはAIの回答を参考程度にとどめ、税理士や税務署に相談することを強くおすすめします。初回相談が無料の税理士事務所も多くあります。",
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl border p-6 ${item.bg}`}>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h3 className="text-base font-bold m-0 border-none pb-0 text-slate-800">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
          <h2 id="faq" className="plain-h2 scroll-mt-28">
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
                <dd className="mt-4 pl-11 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
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
          <Sparkles className="absolute -right-4 -top-4 h-32 w-32 opacity-5" style={{ color: ACADEMY_COLORS.accentMain }} />

          <h2 id="summary" className="plain-h2 scroll-mt-28 text-2xl font-bold m-0 border-none pb-0" style={{ color: ACADEMY_COLORS.textStrong }}>
            まとめ：AIは「税務の先生」ではなく「賢い相談相手」
          </h2>
          <p className="mt-8 text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
            AIを使えば、確定申告の「怖い」「難しい」が大幅に和らぎます。
          </p>
          <div className="mt-10 grid gap-4">
            {[
              "自分の申告パターンに合わせた必要書類をリストアップできる",
              "「これは経費になる？」という判断基準を気軽に相談できる",
              "難しい税務用語を何度でも丁寧に説明してもらえる",
              "申告漏れを防ぐチェックリストを自分専用に作成できる",
              "ただし実際の申告書作成は国税庁の公式ツールを使うこと",
            ].map((text) => (
              <div
                key={text}
                className="flex items-center gap-4 p-4 rounded-lg border bg-white"
                style={{ borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-base font-bold" style={{ color: ACADEMY_COLORS.textBody }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-12 space-y-6">
            <p className="text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              そして気づいていますか？確定申告でAIを使いこなすスキルは、仕事のメール作成、情報収集、企画書作りにもそのまま活きます。今年の確定申告を、AI活用の最初の実践の場にしてみませんか。
            </p>
            <p className="text-2xl font-bold leading-tight tracking-tight" style={{ color: ACADEMY_COLORS.textStrong, fontFamily: ACADEMY_TYPOGRAPHY.serif }}>
              AIで確定申告を乗り越えた先に、<br />
              毎日の仕事を変えるスキルが待っています。
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
            title="「AIの使い方、もっと詳しく教えてほしい」"
            description="確定申告以外でもAIをもっと活用したい方へ。LINEで無料相談受け付けています。アカデミーの内容や受講前の不安を、専門スタッフが一緒に整理します。"
            buttonLabel="LINEで気軽に相談する（登録無料）"
          />
        </motion.section>

        {/* CTA：次に学ぶ */}
        <motion.section
          className="mt-24 pt-16 border-t"
          style={{ borderColor: ACADEMY_COLORS.lineSoft }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="academy-cta" className="plain-h2 scroll-mt-28 flex items-center gap-3 text-2xl font-bold" style={{ color: ACADEMY_COLORS.textStrong, fontFamily: ACADEMY_TYPOGRAPHY.serif }}>
            <Lightbulb className="h-8 w-8" style={{ color: ACADEMY_COLORS.accentMain }} />
            次のステップ：AIをもっと使いこなしたくなったら
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            確定申告でAIの便利さを体感したなら、次は仕事・学習・副業にAIを活用するスキルを体系的に学んでみましょう。AIリブートアカデミーでは、AI初心者から実践レベルまで学べるカリキュラムを提供しています。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-slate-900 px-8 py-5 text-lg font-bold text-white transition-all hover:opacity-90 active:scale-95 sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                プロンプトの書き方を学ぶ
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border px-8 py-5 text-lg font-bold transition-all hover:opacity-70 active:scale-95"
              style={{ backgroundColor: ACADEMY_COLORS.bgPanel, borderColor: ACADEMY_COLORS.lineSoft, color: ACADEMY_COLORS.textBody }}
            >
              AIリブートアカデミーを見る
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className={ACADEMY_SPACING.sectionPy + " border-t mt-24"} style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: ACADEMY_COLORS.bgSection }}>
              <BookOpen className="h-5 w-5" style={{ color: ACADEMY_COLORS.textMuted }} />
            </div>
            <h2 className="plain-h2 scroll-mt-28 m-0 border-none pb-0 text-2xl font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              関連リンク
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { href: "/academy/blog/ai-accounting-guide", label: "AI×経理・会計活用完全ガイド" },
              { href: "/academy/blog/ai-freelance-work-guide", label: "フリーランスのためのAI活用ガイド" },
              { href: "/academy/blog/chatgpt-prompt-beginner", label: "ChatGPTプロンプトの書き方入門" },
              { href: "/academy/blog/freelancer-ai-checklist", label: "フリーランスAIチェックリスト" },
              { href: "/academy", label: "AIリブートアカデミー TOP" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between p-5 rounded-xl border transition-all group"
                  style={{ backgroundColor: ACADEMY_COLORS.bgPanel, borderColor: ACADEMY_COLORS.lineSoft }}
                >
                  <span className="text-sm font-bold transition-colors group-hover:text-[#d46a1f]" style={{ color: ACADEMY_COLORS.textBody }}>
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
