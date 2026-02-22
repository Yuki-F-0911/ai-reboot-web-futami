"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  DollarSign,
  BookOpen,
  Quote,
  Sparkles,
  ChevronRight,
  Calendar,
  Clock,
  BarChart3,
  Banknote,
  GraduationCap,
  Youtube,
  FileText,
  Users,
  Calculator,
  Gift,
} from "lucide-react";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";

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

const keywordTags = ["AI学習 費用", "リスキリング補助金", "AI スクール 比較", "経産省 補助金 AI"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ（アンサーボックス）" },
  { id: "cost-categories", label: "AI学習費用の4段階分類" },
  { id: "free-learning", label: "無料学習リソースの正直な評価" },
  { id: "signs-for-paid", label: "有料学習が必要になる3つのサイン" },
  { id: "school-comparison", label: "AI学習スクールの費用相場比較" },
  { id: "subsidy-guide", label: "経産省リスキリング補助金とは？" },
  { id: "actual-cost", label: "補助金でAIリブートを受講した場合の実質コスト" },
  { id: "roi-calculation", label: "学習投資のROIを計算する" },
  { id: "why-now", label: "今すぐ始めるべき理由" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const costCategories = [
  {
    level: "無料",
    range: "0円",
    icon: <Youtube className="h-6 w-6 text-red-500" />,
    color: "border-slate-200 bg-slate-50/50",
    badgeColor: "bg-slate-100 text-slate-600",
    resources: ["YouTube動画", "ブログ・記事", "AI公式ドキュメント", "Udemyの無料コース（一部）"],
    pros: "コストゼロでいつでも始められる",
    cons: "体系的でなく、何から学べばいいか迷いやすい",
  },
  {
    level: "低コスト",
    range: "月額500〜3,000円",
    icon: <BookOpen className="h-6 w-6 text-blue-500" />,
    color: "border-blue-100 bg-blue-50/30",
    badgeColor: "bg-blue-100 text-blue-700",
    resources: ["ChatGPT Plus（月額3,000円）", "Udemy有料コース（1,500〜3,000円/本）", "Kindle Unlimited（月額980円）", "note有料マガジン"],
    pros: "手軽に試せる。特定スキルの習得に向いている",
    cons: "孤独な学習になりがち。実践フィードバックがない",
  },
  {
    level: "中価格",
    range: "3〜30万円",
    icon: <GraduationCap className="h-6 w-6 text-amber-500" />,
    color: "border-amber-100 bg-amber-50/30",
    badgeColor: "bg-amber-100 text-amber-700",
    resources: ["オンラインスクール（3〜10万円）", "Udemy/Coursera体系コース", "プログラミングスクールのAIコース", "AIリブートアカデミー（補助金適用前）"],
    pros: "体系的なカリキュラム。質問・フィードバックあり",
    cons: "自己負担額がある。継続意思が必要",
  },
  {
    level: "高価格",
    range: "30〜100万円以上",
    icon: <Users className="h-6 w-6 text-purple-500" />,
    color: "border-purple-100 bg-purple-50/30",
    badgeColor: "bg-purple-100 text-purple-700",
    resources: ["大手転職系スクール（50〜100万円）", "大学院・MBAプログラム", "企業向けAI研修", "個別コーチング契約"],
    pros: "転職保証や手厚いサポートがある場合も",
    cons: "費用対効果が高いとは限らない。目的が明確でないと過剰投資になる",
  },
] as const;

const freeResources = [
  {
    name: "YouTube（無料）",
    icon: <Youtube className="h-5 w-5 text-red-500" />,
    pros: "最新情報が豊富。ビジュアルで学べる",
    cons: "質のばらつきが大きい。体系的でない",
    verdict: "「何となく触ってみる」段階には最適。ただし体系的な学習には不向き",
    rating: 3,
  },
  {
    name: "ブログ・Qiita・Zenn（無料）",
    icon: <FileText className="h-5 w-5 text-blue-500" />,
    pros: "具体的な実装例が多い。検索で見つけやすい",
    cons: "初心者向けの体系的コンテンツが少ない",
    verdict: "特定のツール・テクニックを調べるときに強い。入門学習には不向き",
    rating: 3,
  },
  {
    name: "OpenAI・Anthropic公式ドキュメント（無料）",
    icon: <BookOpen className="h-5 w-5 text-emerald-500" />,
    pros: "一次情報で信頼性が高い。最新仕様に沿っている",
    cons: "英語が多い。初心者には難しい表現が多い",
    verdict: "中級者以上のリファレンスとして有用。初心者の最初の学習には向かない",
    rating: 2,
  },
  {
    name: "Udemy無料コース・Coursera無料枠（無料〜）",
    icon: <GraduationCap className="h-5 w-5 text-amber-500" />,
    pros: "体系的に学べるものもある。著名な講師の講義も",
    cons: "無料コースは内容が限定的。英語コースが多い",
    verdict: "日本語の良質な無料コースは少ない。数千円のUdemy有料コースのほうがコスパが高い場合も",
    rating: 3,
  },
] as const;

const signsForPaid = [
  {
    icon: <AlertCircle className="h-7 w-7 text-amber-500" />,
    title: "サイン1：「何から学べばいいかわからない」状態が続いている",
    body: "無料リソースは情報が散らばっており、学習の順序が不明確です。「ChatGPTの使い方はわかったけど、次に何を学べばいいかわからない」という状態が2週間以上続いているなら、体系的なカリキュラムが必要なサインです。",
  },
  {
    icon: <Clock className="h-7 w-7 text-rose-500" />,
    title: "サイン2：3ヶ月以上学習しているのに仕事で使えない",
    body: "独学で知識は増えているのに、「実際の業務でどう使うかイメージできない」「試してみたけど成果が出ない」という状況は、フィードバックの欠如が原因です。メンターや講師のフィードバックがあれば、同じ時間で格段に伸びます。",
  },
  {
    icon: <TrendingUp className="h-7 w-7 text-blue-500" />,
    title: "サイン3：「AI活用をキャリアの武器にしたい」という目標がある",
    body: "趣味や好奇心でAIを触るなら無料で十分です。しかし「転職に活かしたい」「業務効率化で評価を上げたい」「副業収入を得たい」という具体的な目標があるなら、有料の体系的学習への投資は十分に回収できます。",
  },
] as const;

const schoolComparison = [
  {
    name: "独学（YouTube・書籍）",
    cost: "0〜5,000円",
    duration: "自己ペース",
    support: "なし",
    subsidy: "×",
    bestFor: "とりあえず試したい人",
  },
  {
    name: "Udemy有料コース",
    cost: "1,500〜30,000円",
    duration: "自己ペース",
    support: "Q&A掲示板のみ",
    subsidy: "×",
    bestFor: "特定スキルを安く習得したい人",
  },
  {
    name: "オンラインスクール（中価格帯）",
    cost: "5〜30万円",
    duration: "3〜6ヶ月",
    support: "チャット・レビューあり",
    subsidy: "一部◯",
    bestFor: "体系的に学びたい・副業志向",
  },
  {
    name: "AIリブートアカデミー",
    cost: "補助金適用で大幅割引",
    duration: "100日間",
    support: "個別フィードバック・LINE相談",
    subsidy: "◎（対象講座）",
    bestFor: "実務活用・最短で成果を出したい人",
  },
  {
    name: "大手プログラミングスクール",
    cost: "50〜100万円",
    duration: "3〜12ヶ月",
    support: "手厚いが費用も高い",
    subsidy: "△（一部）",
    bestFor: "転職保証が欲しい・エンジニア志望",
  },
] as const;

const subsidySteps = [
  {
    step: "STEP 1",
    title: "ハローワークで相談",
    body: "最寄りのハローワーク（公共職業安定所）を訪問し、教育訓練給付制度の利用相談を行います。「訓練前キャリアコンサルティング」の予約が必要です（所要時間：30〜60分）。",
  },
  {
    step: "STEP 2",
    title: "受給資格の確認",
    body: "雇用保険加入期間が3年以上（初回は1年以上でも可）あれば対象です。ハローワークで「教育訓練給付金支給要件照会票」を発行してもらい、自分が対象かどうか確認できます。",
  },
  {
    step: "STEP 3",
    title: "対象講座を受講",
    body: "厚生労働省の「教育訓練給付制度　検索システム」で対象講座を確認し、受講を開始します。AIリブートアカデミーについてはLINEでご相談ください。",
  },
  {
    step: "STEP 4",
    title: "修了後に申請",
    body: "講座修了後、1ヶ月以内にハローワークへ申請書類を提出します。書類は講座提供機関が案内してくれます。審査後、指定口座に給付金が振り込まれます。",
  },
] as const;

const roiExamples = [
  {
    title: "メール・報告書作成の時間削減",
    before: "週5時間（1通30分×10通）",
    after: "週2時間（AIドラフト→修正で12分/通）",
    saving: "週3時間 × 48週 = 144時間/年",
    value: "時給2,000円換算で年288,000円相当",
    icon: <FileText className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "情報収集・リサーチの効率化",
    before: "週3時間（ニュース・資料調査）",
    after: "週1時間（AI要約・検索補助）",
    saving: "週2時間 × 48週 = 96時間/年",
    value: "時給2,500円換算で年240,000円相当",
    icon: <BarChart3 className="h-5 w-5 text-amber-500" />,
  },
  {
    title: "副業・フリーランス収入への活用",
    before: "月0円（副業なし）",
    after: "月3〜5万円（AIを使ったライティング・コンサル）",
    saving: "月3〜5万円 × 12 = 年36〜60万円",
    value: "投資回収期間：1〜3ヶ月",
    icon: <Banknote className="h-5 w-5 text-emerald-500" />,
  },
] as const;

export default function AiLearningCostRoiGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32 overflow-hidden">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI学習費用と補助金の完全ガイド2026" },
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
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-will-primary/5 rounded-full blur-3xl -z-10" />

          <div className="flex flex-wrap gap-2 mb-8">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-will-primary/10 bg-will-lighter/50 px-4 py-1.5 text-[11px] font-bold tracking-widest text-will-primary uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl tracking-tight">
            AI学習にいくらかかる？<br className="hidden sm:block" />
            無料と有料の境界線と、<br className="hidden sm:block" />
            補助金で実質0円になる方法2026
          </h1>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-slate-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Published on</p>
                <time className="text-sm font-semibold text-slate-700">2026年2月23日</time>
              </div>
            </div>

            <CopyAsMarkdownButton
              title="AI学習にいくらかかる？無料と有料の境界線と、補助金で実質0円になる方法2026"
              sourceSelector="[data-blog-article-body]"
            />
          </div>

          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-50/50 border border-slate-100 relative">
            <Quote className="absolute top-6 right-8 h-12 w-12 text-slate-200 -z-10 opacity-50" />
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 font-medium">
              「AI学習にお金をかける価値があるのかどうか、判断できない」——そう感じているあなたへ。
              無料の情報が溢れている時代に、有料スクールにお金を払う意味はあるのか。正直に、数字で比較します。
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              この記事では、AI学習の費用を「無料〜高額スクール」まで4段階で整理し、
              経産省リスキリング補助金を使えば実質負担が大幅に下がる仕組みを具体的な金額で解説します。
              「自分はどこで学ぶべきか」の判断軸を、一緒に作っていきましょう。
            </p>
          </div>
        </motion.header>

        <div data-seo-internal-links="true" className="mt-12 p-6 rounded-2xl border border-will-lighter bg-will-lighter/20 flex flex-wrap items-center gap-y-3 gap-x-1">
          <BookOpen className="h-4 w-4 text-will-primary mr-2" />
          <span className="text-sm font-bold text-slate-500 mr-2">関連テーマ：</span>
          <Link href="/academy/blog/how-to-learn-generative-ai" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">生成AIの学び方2026</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/reskilling-over-40" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">40代・50代からのAIリスキリング</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">AIが怖い・難しいを乗り越えるガイド</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-for-non-engineers" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">非エンジニア向けAI活用</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-beginners-guide-over-50" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">50代からのAI初心者ガイド</Link>
        </div>

        <ArticleTOC items={tocItems} />

        {/* アンサーボックス */}
        <motion.section
          className="check-box mt-20 group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h4 id="conclusion" className="scroll-mt-28 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-emerald-500" />
            AI学習の費用と補助金：要点まとめ
          </h4>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>AI学習の費用は<strong>「無料〜100万円以上」まで幅広い</strong>。まず無料ツールで試し、限界を感じてから有料を検討するのが合理的</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>独学の限界は明確：「体系的に学べない」「フィードバックがない」「実務で使えない」の3つ</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>経産省の<strong>教育訓練給付制度（リスキリング補助金）</strong>を使えば受講料の最大70%が補助される</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>AI活用で週3〜5時間の業務効率化が実現できれば、<strong>年間24〜40万円相当</strong>の価値が生まれる</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>補助金の条件は今後変更される可能性あり。<strong>「今が使い時」という認識で動くのが賢明</strong></span>
            </li>
          </ul>
        </motion.section>

        {/* 費用分類 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="cost-categories" className="scroll-mt-28">
            AI学習費用の4段階分類
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            まず「AI学習にかかるお金」を整理しましょう。費用は大きく4つのレベルに分けられます。どのレベルが自分に合っているかを判断するために、それぞれのメリット・デメリットを正直に記載します。
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {costCategories.map((cat, idx) => (
              <div
                key={cat.level}
                className={`rounded-3xl border p-8 ${cat.color} hover:shadow-soft transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute -right-4 -top-4 text-7xl font-black text-slate-100 select-none">
                  {idx + 1}
                </div>
                <div className="flex items-center gap-3 mb-4 relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-soft">
                    {cat.icon}
                  </div>
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${cat.badgeColor}`}>
                      {cat.level}
                    </span>
                    <p className="mt-1 text-xl font-black text-slate-900">{cat.range}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-1.5 relative">
                  {cat.resources.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-2 pt-4 border-t border-white/50 relative">
                  <p className="text-sm text-emerald-700 font-semibold flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                    {cat.pros}
                  </p>
                  <p className="text-sm text-slate-500 flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-amber-400" />
                    {cat.cons}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 無料リソースの評価 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="free-learning" className="scroll-mt-28">
            無料で学べる方法の正直な評価
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            「無料で学べるのに、なぜお金を払う必要があるの？」——それはもっともな疑問です。無料リソースを正直に評価します。★は活用しやすさの目安です（5段階）。
          </p>
          <div className="mt-10 grid gap-6">
            {freeResources.map((resource) => (
              <div
                key={resource.name}
                className="rounded-2xl border border-slate-100 bg-white p-8 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 m-0 border-none pb-0">{resource.name}</h3>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${i < resource.rating ? "text-amber-400" : "text-slate-200"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 mb-4">
                  <div className="flex items-start gap-2 text-sm text-emerald-700 bg-emerald-50/50 rounded-xl p-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                    <span className="font-medium">{resource.pros}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-amber-700 bg-amber-50/50 rounded-xl p-3">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span className="font-medium">{resource.cons}</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-widest text-[10px]">総評</p>
                  <p className="text-sm leading-relaxed text-slate-700 font-semibold">{resource.verdict}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-8 rounded-3xl bg-amber-50/50 border border-amber-100">
            <h4 className="flex items-center gap-2 text-amber-900 font-bold text-lg m-0 border-none pb-0">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              無料学習の本当の問題点
            </h4>
            <p className="mt-4 text-base leading-relaxed text-amber-800/80">
              無料リソースの最大の問題は「コンテンツの質」ではなく、<strong>「学習設計の欠如」</strong>です。
              何を、どの順番で、どこまで学べばいいかが不明確なため、多くの人が「学んでいるが身についていない」状態になります。
              また、実際の業務に活かすための「実践フィードバック」が得られないのも大きなデメリットです。
            </p>
          </div>
        </motion.section>

        {/* 有料が必要なサイン */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="signs-for-paid" className="scroll-mt-28">
            有料学習が必要になる3つのサイン
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            無料学習で「十分」な人も、「物足りない」人もいます。以下の3つのサインがあれば、有料学習への投資を検討するタイミングです。
          </p>
          <div className="mt-10 grid gap-6">
            {signsForPaid.map((sign, idx) => (
              <div
                key={sign.title}
                className="rounded-2xl border border-slate-100 bg-white p-8 hover:shadow-soft transition-all duration-300 flex gap-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50">
                  {sign.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 m-0 border-none pb-0">{sign.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{sign.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* スクール費用比較表 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="school-comparison" className="scroll-mt-28">
            AI学習スクールの費用相場比較表（2026年版）
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            主要な学習手段の費用・期間・サポート・補助金対応を比較します。「どこで学ぶか」の判断にご活用ください。
          </p>
          <div className="mt-10 overflow-x-auto -mx-5 sm:mx-0">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 text-left font-bold rounded-tl-xl">学習手段</th>
                  <th className="p-4 text-left font-bold">費用（目安）</th>
                  <th className="p-4 text-left font-bold">期間</th>
                  <th className="p-4 text-left font-bold">サポート</th>
                  <th className="p-4 text-left font-bold rounded-tr-xl">補助金</th>
                </tr>
              </thead>
              <tbody>
                {schoolComparison.map((row, idx) => (
                  <tr
                    key={row.name}
                    className={`border-b border-slate-100 transition-colors hover:bg-will-lighter/20 ${
                      row.name === "AIリブートアカデミー"
                        ? "bg-will-lighter/30 font-semibold border-will-primary/20"
                        : idx % 2 === 0
                        ? "bg-white"
                        : "bg-slate-50/50"
                    }`}
                  >
                    <td className="p-4">
                      <div className="font-bold text-slate-800">{row.name}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{row.bestFor}</div>
                    </td>
                    <td className="p-4 text-slate-700">{row.cost}</td>
                    <td className="p-4 text-slate-700">{row.duration}</td>
                    <td className="p-4 text-slate-700">{row.support}</td>
                    <td className="p-4">
                      <span className={`font-bold text-base ${
                        row.subsidy === "◎（対象講座）" ? "text-emerald-600" :
                        row.subsidy === "一部◯" ? "text-amber-600" :
                        row.subsidy === "△（一部）" ? "text-amber-400" :
                        "text-slate-300"
                      }`}>
                        {row.subsidy}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            ※ 費用は2026年2月時点の相場。スクールにより異なります。AIリブートアカデミーの料金はLINEにてご案内します。
          </p>
        </motion.section>

        {/* 補助金説明 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="subsidy-guide" className="scroll-mt-28">
            経産省リスキリング補助金とは？
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            「リスキリング補助金」は正式には<strong>「教育訓練給付制度」</strong>と呼ばれる厚生労働省の制度です。
            対象の講座を受講すると、受講料の一定割合が給付されます。
          </p>

          <div className="mt-10 p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-green-50/50 border border-emerald-100">
            <div className="flex items-center gap-3 mb-6">
              <Gift className="h-8 w-8 text-emerald-600" />
              <h3 className="text-xl font-black text-slate-900 m-0 border-none pb-0">補助制度の種類と補助率</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  type: "一般教育訓練",
                  rate: "20%",
                  max: "上限10万円",
                  note: "600時間未満の講座など",
                  color: "border-blue-200 bg-blue-50/50",
                },
                {
                  type: "特定一般教育訓練",
                  rate: "40%",
                  max: "上限20万円",
                  note: "短期的なキャリア形成",
                  color: "border-amber-200 bg-amber-50/50",
                },
                {
                  type: "専門実践教育訓練",
                  rate: "最大70%",
                  max: "上限56万円/年",
                  note: "中長期的なキャリア形成",
                  color: "border-emerald-200 bg-emerald-50/50",
                },
              ].map((item) => (
                <div key={item.type} className={`rounded-2xl border p-6 ${item.color}`}>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{item.type}</p>
                  <p className="text-4xl font-black text-slate-900">{item.rate}</p>
                  <p className="text-sm font-bold text-emerald-700 mt-1">{item.max}</p>
                  <p className="text-xs text-slate-500 mt-2">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-slate-900">申請の流れ（4ステップ）</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {subsidySteps.map((step, idx) => (
                <div key={step.step} className="rounded-2xl bg-white border border-slate-100 p-6 hover:shadow-soft transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-will-primary text-white font-black text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-will-primary uppercase tracking-widest">{step.step}</p>
                      <h4 className="text-base font-bold text-slate-900 m-0 border-none pb-0">{step.title}</h4>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{step.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
            <p className="text-sm leading-relaxed text-blue-800">
              <strong>対象者の確認方法：</strong>
              ハローワークのWebサイト「教育訓練給付制度　検索システム」でご自身の受給資格を照会できます。
              また、AIリブートアカデミーのLINEにご相談いただければ、対象かどうかを一緒に確認します。
            </p>
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
          <MidArticleCtaBox slug="ai-learning-cost-roi-guide-2026" />
        </motion.section>

        {/* 実質コスト計算 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="actual-cost" className="scroll-mt-28">
            補助金でAIリブートアカデミーを受講した場合の実質コスト
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            「補助金があることはわかったけど、実際いくらかかるの？」という疑問にお答えします。
            具体的な数字で、補助金を活用した場合の「実質負担額」をイメージしてください。
          </p>

          <div className="mt-10 rounded-3xl border border-slate-100 bg-white overflow-hidden shadow-soft">
            <div className="bg-slate-800 p-6">
              <div className="flex items-center gap-3">
                <Calculator className="h-6 w-6 text-white" />
                <h3 className="text-lg font-bold text-white m-0 border-none pb-0">補助金適用シミュレーション（例）</h3>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                {[
                  {
                    label: "受講料（例）",
                    value: "100,000円",
                    note: "実際の料金はLINEにてご案内",
                    highlight: false,
                  },
                  {
                    label: "補助金（40%の場合）",
                    value: "−40,000円",
                    note: "特定一般教育訓練の場合",
                    highlight: false,
                  },
                  {
                    label: "補助金（70%の場合）",
                    value: "−70,000円",
                    note: "専門実践教育訓練の場合",
                    highlight: false,
                  },
                  {
                    label: "自己負担額（40%補助の場合）",
                    value: "60,000円",
                    note: "←これが実質の出費",
                    highlight: true,
                  },
                  {
                    label: "自己負担額（70%補助の場合）",
                    value: "30,000円",
                    note: "←最大補助の場合の実質出費",
                    highlight: true,
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between p-4 rounded-2xl ${
                      row.highlight
                        ? "bg-emerald-50 border border-emerald-200"
                        : "bg-slate-50 border border-slate-100"
                    }`}
                  >
                    <div>
                      <p className={`font-bold ${row.highlight ? "text-emerald-900" : "text-slate-700"}`}>{row.label}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{row.note}</p>
                    </div>
                    <p className={`text-2xl font-black ${row.highlight ? "text-emerald-700" : "text-slate-600"}`}>
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-slate-400 leading-relaxed">
                ※ 上記は説明用のシミュレーションです。AIリブートアカデミーの実際の受講料・補助金区分・
                ご自身の受給資格はLINEにてご確認ください。補助金は受講完了後の申請により給付されます。
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-amber-50/50 border border-amber-100">
            <p className="text-sm font-bold text-amber-900 flex items-start gap-2">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-amber-500" />
              補助金は「受講後に申請して受け取る」仕組みです。受講料は一度全額支払い、修了後に補助金が振り込まれます。申請書類の準備が必要なため、事前にLINEでご相談ください。
            </p>
          </div>
        </motion.section>

        {/* ROI計算 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="roi-calculation" className="scroll-mt-28">
            「学習投資のROI」を計算する
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            投資対効果（ROI）を考えるとき、「何に活かすか」によって数字は大きく変わります。
            代表的な3つの活用パターンで計算してみます。
          </p>

          <div className="mt-10 grid gap-6">
            {roiExamples.map((example) => (
              <div
                key={example.title}
                className="rounded-2xl border border-slate-100 bg-white p-8 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 group-hover:bg-will-lighter/50 transition-colors">
                    {example.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 m-0 border-none pb-0">{example.title}</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">学習前</p>
                    <p className="text-sm font-semibold text-slate-700">{example.before}</p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-4">
                    <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">学習後</p>
                    <p className="text-sm font-semibold text-emerald-700">{example.after}</p>
                  </div>
                  <div className="rounded-xl bg-will-lighter/30 p-4">
                    <p className="text-[10px] font-bold text-will-primary uppercase tracking-widest mb-1">年間削減</p>
                    <p className="text-sm font-semibold text-will-primary">{example.saving}</p>
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-slate-900 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">推計価値</span>
                  <span className="text-lg font-black text-white">{example.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-8 rounded-3xl bg-gradient-to-br from-will-primary/5 to-will-secondary/5 border border-will-primary/10">
            <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2 m-0 border-none pb-0">
              <TrendingUp className="h-6 w-6 text-will-primary" />
              まとめ：投資回収の考え方
            </h4>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              補助金を使った場合の自己負担が3〜6万円の場合、月に2時間の業務時間を節約できれば
              <strong>6〜12ヶ月で元が取れる</strong>計算になります（時給2,500円換算）。
              副業収入の場合は、月3万円の副業を1回達成するだけで元が取れます。
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              AI学習への投資は「お金を使う」ではなく「時間と収入を買う」という視点で考えると、
              ROIは非常に高い投資になる可能性があります。
            </p>
          </div>
        </motion.section>

        {/* 今すぐ始めるべき理由 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="why-now" className="scroll-mt-28">
            「今すぐ始めるべき理由」：補助金の締切と今後の方向性
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            「急がなくてもいいかな」と感じているあなたへ。今行動するべき具体的な理由をお伝えします。
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: <DollarSign className="h-6 w-6 text-emerald-500" />,
                title: "補助金の条件が変わる可能性",
                body: "現在の最大70%という補助率は、政府の政策判断で変更される場合があります。「条件が良い今」に動くのが合理的です。",
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
                title: "AI活用格差が広がっている",
                body: "BCGの調査では、AIを業務活用している人とそうでない人の生産性差が拡大しています。早く始めた人ほど経験値が積み上がります。",
              },
              {
                icon: <Clock className="h-6 w-6 text-amber-500" />,
                title: "学習に必要な時間は「今日から」始まる",
                body: "「3ヶ月後に始めよう」と決めても、その3ヶ月は取り戻せません。1日15分でも、今日から始めることに大きな意味があります。",
              },
              {
                icon: <Users className="h-6 w-6 text-rose-500" />,
                title: "採用市場でのAI人材優遇",
                body: "リクルートの2025年度調査では、転職市場でのAIスキル保有者へのオファー数が前年比1.8倍。AIスキルはキャリアの差別化要因になっています。",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-slate-100 p-6 hover:shadow-soft transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 m-0 border-none pb-0">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{item.body}</p>
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
          <h2 id="faq" className="scroll-mt-28">
            よくある質問（FAQ）
          </h2>
          <div className="mt-10 divide-y divide-slate-100 border-t border-slate-100">
            {faqItems.map((item) => (
              <div key={item.question} className="py-8 group">
                <dt className="text-lg font-bold leading-relaxed text-slate-900 flex items-start gap-4 transition-colors group-hover:text-will-primary">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[12px] font-black text-slate-400 group-hover:bg-will-primary/10 group-hover:text-will-primary transition-colors">Q</span>
                  {item.question}
                </dt>
                <dd className="mt-4 pl-11 text-base leading-relaxed text-slate-600">
                  {item.answer}
                </dd>
              </div>
            ))}
          </div>
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-24 rounded-[2.5rem] border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-10 sm:p-14 shadow-soft relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <Sparkles className="absolute -right-4 -top-4 h-32 w-32 text-will-primary/5" />

          <h2 id="summary" className="scroll-mt-28 text-2xl font-black text-slate-900 m-0 border-none pb-0">
            まとめ：AI学習への投資判断
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-700 font-medium">
            AI学習に「いくらかけるべきか」の答えは、あなたのゴールによって違います。
          </p>
          <div className="mt-10 grid gap-4">
            {[
              "「試してみたい」なら→無料のChatGPTから今日始める",
              "「仕事で使えるようになりたい」なら→体系的なスクールへの投資を検討",
              "「費用を抑えたい」なら→経産省リスキリング補助金で最大70%を取り戻す",
              "「投資対効果を重視する」なら→週2〜3時間の業務効率化で1年以内に元が取れる",
              "「今すぐ動く」なら→まずLINEで補助金の対象かどうかを確認する",
            ].map((text) => (
              <div key={text} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-50 shadow-subtle">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-base font-semibold text-slate-700">{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              「AI学習は高い」というイメージは、補助金を知らないときの話です。
              正しい情報を持ったうえで判断すれば、AI学習は今できる最高のコスパ投資になり得ます。
            </p>
            <p className="text-2xl font-black leading-tight text-slate-900 tracking-tight">
              補助金を使えば、AI学習のスタートラインは<br className="hidden sm:block" />
              あなたが思っているより、ずっと近くにあります。
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
            title="補助金を使って、AIを学ぶ最善の方法を相談しませんか"
            description="経産省リスキリング補助金の活用方法や、AIリブートアカデミーの詳細についてLINEで無料相談を受け付けています。「自分は対象か？」「いくらかかる？」などのご質問もお気軽にどうぞ。"
            buttonLabel="LINEで補助金を相談する（無料）"
          />
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-24 border-t border-slate-100 pt-16 pb-12">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-slate-500" />
            </div>
            <h2 className="scroll-mt-28 m-0 border-none pb-0 text-2xl font-bold text-slate-900">関連リンク</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { href: "/academy/blog/how-to-learn-generative-ai", label: "生成AIの学び方【2026年版】" },
              { href: "/academy/blog/reskilling-over-40", label: "40代・50代からのAIリスキリング完全ガイド" },
              { href: "/academy/blog/ai-anxiety-overcome-guide", label: "「AIが怖い・難しい」を乗り越えるガイド" },
              { href: "/academy/blog/ai-first-30-days-work-guide", label: "AI活用最初の30日ガイド" },
              { href: "/academy/blog/ai-for-non-engineers", label: "文系・非エンジニアのAI活用ガイド" },
              { href: "/academy/blog/chatgpt-start-guide-smartphone", label: "ChatGPTをスマホで始める方法" },
              { href: "/academy/blog/ai-beginners-guide-over-50", label: "50代からのAI初心者ガイド" },
              { href: "/academy/blog/ai-learning-dropout-prevention-guide", label: "AI学習を続けるための習慣術" },
              { href: "/academy/blog/what-is-generative-ai", label: "生成AIとは？わかりやすく解説" },
              { href: "/academy", label: "AIリブートアカデミー TOP" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 bg-white hover:border-will-primary/30 hover:shadow-soft transition-all group"
                >
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-will-primary transition-colors">{link.label}</span>
                  <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-will-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
