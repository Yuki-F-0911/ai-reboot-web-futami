"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Map,
  ArrowRight,
  Target,
  Star,
  Calendar,
  Clock,
  BookOpen,
  Quote,
  MessageSquare,
  Sparkles,
  ChevronRight,
  AlertCircle,
  TrendingUp,
  Users,
  Zap,
  Lightbulb,
  Award,
  BarChart2,
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

const keywordTags = ["AI学習 ロードマップ", "AI 初心者 何から始める", "生成AI 学習 計画 2026"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-lost", label: "AI学習で挫折する本当の理由" },
  { id: "overview", label: "AI学習の全体像：4つのフェーズ" },
  { id: "phase1", label: "Phase 1（1〜30日）：触れる習慣づくり編" },
  { id: "phase2", label: "Phase 2（31〜60日）：仕事に使う実務活用編" },
  { id: "phase3", label: "Phase 3（61〜90日）：自分の武器にする独自化編" },
  { id: "phase4", label: "Phase 4（91〜100日）：習慣として定着させる仕上げ編" },
  { id: "weekly-schedule", label: "週次スケジュール例" },
  { id: "solo-vs-supported", label: "一人で進むか、サポートを受けながら進むか" },
  { id: "subsidy", label: "補助金を活用して体系的に学ぶという選択肢" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const phases = [
  {
    id: "phase1",
    number: "01",
    period: "1〜30日",
    label: "触れる習慣づくり編",
    color: "from-sky-500 to-blue-600",
    bgLight: "from-sky-50 to-blue-50",
    borderColor: "border-sky-200",
    accentColor: "text-sky-600",
    iconBg: "bg-sky-100",
    goal: "毎日AIを触ること、怖くなくなること",
    milestone: "「AIに何でも聞ける」状態になる",
    actions: [
      "ChatGPTの無料アカウントを作成し、毎日1回以上話しかける",
      "日常の疑問（レシピ・天気・言葉の意味）をAIに聞く習慣をつける",
      "プロンプト入門10本：挨拶 → 要約 → 翻訳 → メール下書き → アイデア出しを順番に試す",
      "ChatGPT・Claude・Geminiの3ツールをそれぞれ試し、相性を確かめる",
      "「ハルシネーション（AIの誤回答）」を一度意図的に体験しておく",
    ],
    checkpoints: [
      "ChatGPTに「今日の仕事で困っていること」を毎日1つ相談できている",
      "AIの回答に対して「もう少し具体的に」と追加指示を出せる",
      "3つのAIツールの特徴の違いを説明できる",
    ],
    stories: [
      {
        role: "40代・事務職",
        quote: "最初の1週間は「何を聞けばいいかわからない」状態でした。でも「今日の仕事で困ったこと」を毎日1つ相談するだけと決めたら、自然と続けられました。",
      },
    ],
  },
  {
    id: "phase2",
    number: "02",
    period: "31〜60日",
    label: "仕事に使う実務活用編",
    color: "from-emerald-500 to-green-600",
    bgLight: "from-emerald-50 to-green-50",
    borderColor: "border-emerald-200",
    accentColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    goal: "週5時間削減できるタスクを1つ見つける",
    milestone: "「AIを使って成果物を出した」経験を持つ",
    actions: [
      "議事録の自動要約：会議メモをAIに渡して要点を3分で整理",
      "ビジネスメールの下書き：状況をAIに伝えて下書きを作成→自分で編集",
      "資料・企画書のアウトライン：「〇〇の提案書の骨子を作って」と依頼",
      "情報収集・リサーチ支援：調査テーマをAIに投げて一次調査を効率化",
      "自分の業務で「週に何時間かかっているタスク」を棚卸しし、AI化できるものを3つ選ぶ",
    ],
    checkpoints: [
      "AIが作成した成果物を実際の仕事に使用した経験がある",
      "週に1つ以上「AIを使って時間が浮いた」体験を記録できている",
      "上司や同僚に「AIでこれを作った」と報告できた",
    ],
    stories: [
      {
        role: "30代・営業職",
        quote: "議事録の作成に毎回30分かかっていたのが、AIを使い始めたら5分になりました。その時間を提案書のブラッシュアップに使えるようになって、成約率が上がった気がします。",
      },
    ],
  },
  {
    id: "phase3",
    number: "03",
    period: "61〜90日",
    label: "自分の武器にする独自化編",
    color: "from-violet-500 to-purple-600",
    bgLight: "from-violet-50 to-purple-50",
    borderColor: "border-violet-200",
    accentColor: "text-violet-600",
    iconBg: "bg-violet-100",
    goal: "自分の仕事スタイルに合ったAI活用を確立",
    milestone: "「AI抜きでは考えられない」状態になる",
    actions: [
      "自分専用プロンプトテンプレートを5本作成・保存する",
      "よく使う作業のワークフローをAI込みで設計しなおす",
      "ChatGPT Plusまたは Claude Pro の試用（有料プランを試して比較）",
      "他ツール連携の入口を体験：NotionAI・Copilot・Perplexityのいずれかを1週間試す",
      "チームや同僚へのAI活用提案：「こんな使い方があります」と一人に共有する",
    ],
    checkpoints: [
      "自分専用のプロンプトが5本以上ある",
      "AIを使ったワークフローで、月10時間以上削減できている",
      "「この業務はAIでやろう」と自然に考えるようになった",
    ],
    stories: [
      {
        role: "50代・管理職",
        quote: "部下への指示メール、週報のまとめ、会議アジェンダ——全部AI使いのテンプレートを作ったら、月20時間以上浮くようになりました。最初は「70日もかかるの？」と思ってたけど、今は投資対効果が高すぎて逆に怖いくらいです。",
      },
    ],
  },
  {
    id: "phase4",
    number: "04",
    period: "91〜100日",
    label: "習慣として定着させる仕上げ編",
    color: "from-amber-500 to-orange-500",
    bgLight: "from-amber-50 to-orange-50",
    borderColor: "border-amber-200",
    accentColor: "text-amber-600",
    iconBg: "bg-amber-100",
    goal: "他の人にAI活用を教えられるレベルになる",
    milestone: "100日間の振り返りと、次の100日の計画を立てる",
    actions: [
      "100日間を振り返り：どれだけ時間削減できたか、何が一番役立ったかをメモ",
      "同僚・後輩に「初心者向けAI活用の説明」を1回やってみる",
      "次の100日の目標設定：さらに深めたい分野（動画生成・コード補助・業務自動化）を1つ選ぶ",
      "AI活用の「自分のルールブック」を簡単なメモにまとめる",
    ],
    checkpoints: [
      "100日間の振り返りレポートを作れた",
      "同僚や家族にAI活用の基本を説明できた",
      "次の100日の学習テーマを決めた",
    ],
    stories: [
      {
        role: "35歳・マーケター",
        quote: "100日後、部署でAI活用の勉強会を開いてほしいと言われました。「自分がAI詳しい人」になるとは思っていなかったので、正直びっくりしました。",
      },
    ],
  },
] as const;

const weeklySchedule = [
  {
    phase: "Phase 1",
    week: "第1週（Day 1〜7）",
    color: "bg-sky-100 text-sky-700",
    daily: "ChatGPTに毎日1つ質問する（15分）",
    weekend: "3つのAIツール（ChatGPT・Claude・Gemini）を比較体験（60分）",
    deliverable: "「AIツール使い比べメモ」を1枚書く",
  },
  {
    phase: "Phase 1",
    week: "第2週（Day 8〜14）",
    color: "bg-sky-100 text-sky-700",
    daily: "メール・文章の下書きをAIに頼む（20分）",
    weekend: "プロンプト5本を試し、一番使えるパターンをメモ（90分）",
    deliverable: "「自分のベストプロンプト3選」を保存",
  },
  {
    phase: "Phase 1",
    week: "第3〜4週（Day 15〜30）",
    color: "bg-sky-100 text-sky-700",
    daily: "今日の仕事の悩み1つをAIに相談（20分）",
    weekend: "AI × 自分の仕事の棚卸し（使えそうな業務を5つリストアップ）（60分）",
    deliverable: "「AI活用候補タスクリスト」を完成",
  },
  {
    phase: "Phase 2",
    week: "第5〜6週（Day 31〜45）",
    color: "bg-emerald-100 text-emerald-700",
    daily: "議事録・メールいずれか1つをAIで作成（30分）",
    weekend: "「AI活用ビフォーアフター」を1タスク記録（所要時間の変化）（45分）",
    deliverable: "「AIで時短できた業務レポート」1枚",
  },
  {
    phase: "Phase 2",
    week: "第7〜8週（Day 46〜60）",
    color: "bg-emerald-100 text-emerald-700",
    daily: "仕事の成果物1つをAI込みで作成（30〜45分）",
    weekend: "週次の時間削減量を計算し、次の改善ポイントを考える（60分）",
    deliverable: "「週次AI活用ログ」を継続記録",
  },
  {
    phase: "Phase 3",
    week: "第9〜10週（Day 61〜75）",
    color: "bg-violet-100 text-violet-700",
    daily: "自分専用プロンプトを1本作成・改良（20分）",
    weekend: "ワークフロー設計：業務1つをAI込みで一から設計しなおす（90分）",
    deliverable: "「自分専用プロンプトライブラリ（5本）」",
  },
  {
    phase: "Phase 3",
    week: "第11〜13週（Day 76〜90）",
    color: "bg-violet-100 text-violet-700",
    daily: "AIを使った仕事を1つ、同僚に紹介する（10分）",
    weekend: "他ツール連携を1つ体験（NotionAI・Copilot等）（60分）",
    deliverable: "「月次AI活用成果レポート」",
  },
  {
    phase: "Phase 4",
    week: "第14〜15週（Day 91〜100）",
    color: "bg-amber-100 text-amber-700",
    daily: "100日間の振り返り日記を書く（10分）",
    weekend: "同僚向けミニ勉強会を1回開催 or 「AI活用ルールブック」を作成（120分）",
    deliverable: "「100日間AI学習まとめレポート」",
  },
] as const;

const comparisonItems = [
  {
    item: "進捗スピード",
    solo: "自分のペースで進むが、迷いが多く遠回りしやすい",
    supported: "カリキュラムに沿って最短ルートで進める",
  },
  {
    item: "挫折率",
    solo: "72%が3週間以内に習慣が途切れる（一般的なeラーニングの傾向）",
    supported: "伴走者・コミュニティがあることで継続率が大幅アップ",
  },
  {
    item: "費用",
    solo: "基本無料〜月3,000円程度（有料AI利用料のみ）",
    supported: "スクール費用あり（補助金活用で実質0円も可能）",
  },
  {
    item: "質問・相談",
    solo: "AIに相談するしかない。実務応用の壁で詰まりやすい",
    supported: "専門スタッフへのQ&A・コミュニティで即解決",
  },
  {
    item: "向いている人",
    solo: "自己管理が得意・時間が柔軟・まずは無料で試したい人",
    supported: "短期で確実に成果を出したい・仕事の変化を急ぎたい人",
  },
] as const;

export default function AiLearningRoadmapPage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32 overflow-hidden">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI学習ロードマップ2026" },
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
            AI学習ロードマップ2026：<br className="hidden sm:block" />ゼロから100日間で仕事に使えるようになるまでの完全地図
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
              title="AI学習ロードマップ2026：ゼロから100日間で仕事に使えるようになるまでの完全地図"
              sourceSelector="[data-blog-article-body]"
            />
          </div>

          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-50/50 border border-slate-100 relative">
            <Quote className="absolute top-6 right-8 h-12 w-12 text-slate-200 -z-10 opacity-50" />
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 font-medium">
              「AIを学びたいけど、何から始めればいいかわからない」——この悩みを持つ方の多くは、<strong>地図なしで走り始めています</strong>。やみくもに始めたから迷う。迷うから疲れる。疲れるから辞める。
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              この記事では、AI学習の4つのフェーズと100日間の具体的なロードマップを公開します。「今自分はどこにいるか」が一目でわかり、「次に何をすべきか」が迷わなくなります。地図を持って走りましょう。
            </p>
          </div>
        </motion.header>

        {/* 関連リンク */}
        <div data-seo-internal-links="true" className="mt-12 p-6 rounded-2xl border border-will-lighter bg-will-lighter/20 flex flex-wrap items-center gap-y-3 gap-x-1">
          <BookOpen className="h-4 w-4 text-will-primary mr-2" />
          <span className="text-sm font-bold text-slate-500 mr-2">関連テーマ：</span>
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">AIが怖い・難しいを乗り越えるガイド</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">最初の30日ガイド</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/how-to-learn-generative-ai" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">生成AIの学び方【2026年版】</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">プロンプト入門</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-learning-start-now-2026" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">今学ぶべき5つの理由</Link>
        </div>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="check-box mt-20 group"
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
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>AI学習には<strong>4つの明確なフェーズ</strong>がある——触れる→使う→武器にする→定着させる</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>100日間で目指すのは「AI完全マスター」ではなく<strong>「週5時間削減できる状態」</strong></span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>各フェーズに<strong>具体的な行動リストとチェックポイント</strong>があるから、今どこにいるか常に把握できる</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>挫折の最大原因は「地図がないこと」——ロードマップがあれば<strong>継続率は大幅に改善</strong>する</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>経産省リスキリング補助金を使えば、体系的な100日プログラムを<strong>実質0円に近い費用</strong>で受けられる</span>
            </li>
          </ul>
        </motion.section>

        {/* 挫折する理由 */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="why-lost" className="scroll-mt-28">
            AI学習で挫折する最大の理由：「地図がないまま走り始める」こと
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              AI学習で挫折した方に話を聞くと、共通のパターンが浮かび上がります。
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: <AlertCircle className="h-5 w-5 text-rose-400" />, text: "「とりあえずChatGPTを使い始めたが、何に使えばいいかわからず飽きた」" },
                { icon: <AlertCircle className="h-5 w-5 text-amber-400" />, text: "「YouTubeで勉強してみたが、点と点がつながらず全体像がつかめなかった」" },
                { icon: <AlertCircle className="h-5 w-5 text-orange-400" />, text: "「自己流で進めたが、これで合っているのか不安で途中でやめた」" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-5 rounded-2xl bg-rose-50/40 border border-rose-100">
                  <span className="mt-0.5 shrink-0">{item.icon}</span>
                  <p className="text-sm leading-relaxed text-slate-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-base leading-relaxed text-slate-600">
              これらに共通するのは、<strong className="text-will-primary">「どこに向かって何をすべきか」の地図がないこと</strong>です。目的地がわからないまま走り続けるのは、誰でも疲れます。
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-will-primary">
              <p className="text-base leading-relaxed text-slate-700 font-semibold">
                ロードマップがあれば、「今日何をすべきか」が明確になります。「Phase 1の Day 12なら、今日は議事録の要約をAIに頼む練習をする日だ」——この明確さが、継続を支えます。
              </p>
            </div>
          </div>
        </motion.section>

        {/* 全体像 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="overview" className="scroll-mt-28">
            AI学習の全体像：4つのフェーズ
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            100日間を4つのフェーズに分けます。各フェーズには明確なゴールと行動があり、前のフェーズが次のフェーズの土台になります。
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {phases.map((phase) => (
              <div key={phase.id} className={`rounded-2xl border ${phase.borderColor} bg-gradient-to-br ${phase.bgLight} p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${phase.color} text-white text-sm font-black`}>
                    {phase.number}
                  </div>
                  <div>
                    <p className={`text-xs font-bold tracking-widest uppercase ${phase.accentColor}`}>{phase.period}</p>
                    <p className="text-base font-bold text-slate-900">{phase.label}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 mt-3">
                  <Target className={`h-4 w-4 mt-0.5 shrink-0 ${phase.accentColor}`} />
                  <p className="text-sm leading-relaxed text-slate-700 font-medium">{phase.goal}</p>
                </div>
                <div className="flex items-start gap-2 mt-2">
                  <Star className={`h-4 w-4 mt-0.5 shrink-0 ${phase.accentColor}`} />
                  <p className="text-sm leading-relaxed text-slate-600">{phase.milestone}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <p className="text-sm leading-relaxed text-slate-600 font-medium">
              <strong>ポイント：</strong>このロードマップは「一度に全部こなす」ためのものではありません。毎日15〜30分を積み重ねる前提で設計されています。1日でも触れる日があれば前進しています。完璧より継続を選んでください。
            </p>
          </div>
        </motion.section>

        {/* Phase 1〜4 詳細 */}
        {phases.map((phase, phaseIndex) => (
          <motion.section
            key={phase.id}
            className="mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={sectionReveal}
          >
            <div className={`flex items-center gap-4 mb-8 p-6 rounded-3xl bg-gradient-to-br ${phase.bgLight} border ${phase.borderColor}`}>
              <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${phase.color} text-white font-black text-2xl shadow-elevated`}>
                {phase.number}
              </div>
              <div>
                <p className={`text-xs font-bold tracking-widest uppercase ${phase.accentColor}`}>Phase {phaseIndex + 1} ／ {phase.period}</p>
                <h2 id={phase.id} className="scroll-mt-28 text-2xl font-black text-slate-900 m-0 border-none pb-0 mt-1">
                  {phase.label}
                </h2>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 mb-8">
              <div className={`rounded-2xl p-6 ${phase.iconBg} border ${phase.borderColor}`}>
                <div className="flex items-center gap-2 mb-3">
                  <Target className={`h-5 w-5 ${phase.accentColor}`} />
                  <span className={`text-xs font-black tracking-widest uppercase ${phase.accentColor}`}>Goal</span>
                </div>
                <p className="text-base font-bold text-slate-900">{phase.goal}</p>
              </div>
              <div className="rounded-2xl p-6 bg-white border border-slate-100 shadow-subtle">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-5 w-5 text-amber-400" />
                  <span className="text-xs font-black tracking-widest uppercase text-amber-500">Milestone</span>
                </div>
                <p className="text-base font-bold text-slate-900">{phase.milestone}</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-4 mt-10">このフェーズでやること</h3>
            <ul className="space-y-3">
              {phase.actions.map((action, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-soft transition-all duration-200">
                  <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${phase.color} text-white text-[11px] font-black`}>
                    {i + 1}
                  </span>
                  <span className="text-[15px] leading-relaxed text-slate-700 font-medium">{action}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-slate-800 mb-4 mt-10">フェーズ終了チェックポイント</h3>
            <ul className="space-y-3">
              {phase.checkpoints.map((checkpoint, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${phase.accentColor}`} />
                  <span className="text-base leading-relaxed text-slate-700">{checkpoint}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              {phase.stories.map((story) => (
                <blockquote key={story.role} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${phase.color}`} />
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`h-8 w-8 rounded-full ${phase.iconBg} flex items-center justify-center`}>
                      <MessageSquare className={`h-4 w-4 ${phase.accentColor}`} />
                    </div>
                    <span className={`text-xs font-bold tracking-widest uppercase ${phase.accentColor}`}>{story.role}</span>
                  </div>
                  <p className="text-base leading-relaxed text-slate-700 font-medium relative">
                    <Quote className="absolute -left-2 -top-2 h-8 w-8 text-slate-100 -z-10" />
                    {story.quote}
                  </p>
                  <p className="mt-4 flex items-center gap-2 text-xs text-slate-400 font-medium italic">
                    <Sparkles className="h-3 w-3" />
                    AIリブートが収集した利用者の声をもとに再構成したエピソードです。
                  </p>
                </blockquote>
              ))}
            </div>

            {/* Phase 2の後に中間CTA */}
            {phaseIndex === 1 && (
              <motion.div
                className="mt-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionReveal}
              >
                <MidArticleCtaBox slug="ai-learning-roadmap-2026" />
              </motion.div>
            )}
          </motion.section>
        ))}

        {/* 週次スケジュール */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
        >
          <h2 id="weekly-schedule" className="scroll-mt-28">
            各フェーズの具体的な週次スケジュール例
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            「具体的に何をすればいい？」という疑問に答えるため、週ごとの行動を詳細に整理しました。毎日の取り組みと週末の集中学習を組み合わせることで、着実に前進できます。
          </p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-100 shadow-soft">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left py-4 px-5 font-bold text-slate-600 whitespace-nowrap">期間</th>
                  <th className="text-left py-4 px-5 font-bold text-slate-600 whitespace-nowrap">毎日（平日）</th>
                  <th className="text-left py-4 px-5 font-bold text-slate-600 whitespace-nowrap">週末の集中学習</th>
                  <th className="text-left py-4 px-5 font-bold text-slate-600 whitespace-nowrap">週の成果物</th>
                </tr>
              </thead>
              <tbody>
                {weeklySchedule.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-50 hover:bg-slate-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/20"}`}>
                    <td className="py-4 px-5 align-top">
                      <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold ${row.color} whitespace-nowrap mb-1`}>{row.phase}</span>
                      <p className="text-xs font-semibold text-slate-500 whitespace-nowrap">{row.week}</p>
                    </td>
                    <td className="py-4 px-5 align-top text-slate-700 leading-relaxed max-w-[200px]">{row.daily}</td>
                    <td className="py-4 px-5 align-top text-slate-700 leading-relaxed max-w-[220px]">{row.weekend}</td>
                    <td className="py-4 px-5 align-top">
                      <div className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                        <span className="text-slate-700 font-medium leading-relaxed">{row.deliverable}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 flex items-center gap-2 text-xs text-slate-400">
            <AlertCircle className="h-3 w-3" />
            スケジュールはあくまで目安です。仕事の繁忙期は「毎日1質問だけ」でも十分です。完璧なペース維持より継続を優先してください。
          </p>
        </motion.section>

        {/* 一人 vs サポート */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="solo-vs-supported" className="scroll-mt-28">
            自分一人で進むか、サポートを受けながら進むかの正直な比較
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            どちらが正解ということはありません。自分の状況と目標に合わせて選んでください。
          </p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-100 shadow-soft">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left py-4 px-5 font-bold text-slate-600 w-1/4">比較項目</th>
                  <th className="text-left py-4 px-5 font-bold text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-200 text-[10px] font-black text-slate-600">自</span>
                      自己学習（一人）
                    </div>
                  </th>
                  <th className="text-left py-4 px-5 font-bold text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-will-primary/10 text-[10px] font-black text-will-primary">伴</span>
                      伴走型プログラム
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-50 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/20"}`}>
                    <td className="py-4 px-5 font-bold text-slate-700">{row.item}</td>
                    <td className="py-4 px-5 text-slate-600 leading-relaxed">{row.solo}</td>
                    <td className="py-4 px-5 text-slate-700 leading-relaxed font-medium">{row.supported}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-will-lighter/20 border border-will-primary/10">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-will-primary mt-0.5 shrink-0" />
              <p className="text-base leading-relaxed text-slate-700">
                <strong>正直な見解：</strong>「まずは無料で試してみたい」「どんなものか確認したい」という段階ならこのロードマップを自己流で進めてください。「仕事で確実に成果を出したい」「短期間でスキルを身につけたい」という場合は、伴走型のプログラムが3〜5倍のスピードをもたらします。迷ったらLINEで相談してみてください。
              </p>
            </div>
          </div>
        </motion.section>

        {/* 補助金 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="subsidy" className="scroll-mt-28">
            補助金を活用して体系的に学ぶという選択肢
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            「お金がかかるなら難しいかも」と感じる方に知っておいてほしい制度があります。
          </p>

          <div className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                <BarChart2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 m-0 border-none pb-0">経産省リスキリング補助金とは</h3>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                経済産業省が推進する「リスキリングを通じたキャリアアップ支援事業」では、AI・デジタルスキルの学習費用の一部（最大70%）が補助されます。
              </p>
              <ul className="space-y-3">
                {[
                  "対象：在職者（会社員・パート・フリーランスなど）",
                  "補助率：受講費用の最大70%（条件あり）",
                  "利用条件：補助金対象講座の受講・修了",
                  "AIリブートアカデミーの100日プログラムは補助金対象講座",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-white border border-emerald-100">
              <p className="text-sm font-medium text-slate-600">
                <strong className="text-emerald-700">例：</strong>受講料20万円のプログラムを補助金対象で受講した場合、自己負担は6万円程度になる計算です（補助率70%の場合）。詳細は申請時期や条件により異なります。
              </p>
            </div>
            <Link
              href="/academy"
              className="mt-6 inline-flex items-center gap-2 text-emerald-700 font-bold hover:gap-3 transition-all text-sm"
            >
              <span>AIリブートアカデミーの補助金対象プログラムを見る</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
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
          <Map className="absolute -right-4 -top-4 h-32 w-32 text-will-primary/5" />

          <h2 id="summary" className="scroll-mt-28 text-2xl font-black text-slate-900 m-0 border-none pb-0">
            まとめ：地図を持って、100日間を走り切ろう
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-700 font-medium">
            このロードマップで伝えたかったことをまとめます。
          </p>
          <div className="mt-10 grid gap-4">
            {[
              "Phase 1（1〜30日）：AIを毎日触れる状態にする。「怖い」を「ふつう」に変える期間",
              "Phase 2（31〜60日）：仕事に1つ適用し、「AIを使って成果物を出した」経験を積む",
              "Phase 3（61〜90日）：自分専用のプロンプトとワークフローを確立し、週10時間削減を目指す",
              "Phase 4（91〜100日）：習慣を定着させ、振り返りと次の目標設定で完走する",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-50 shadow-subtle">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-will-primary/10 text-will-primary font-black text-sm">
                  {i + 1}
                </span>
                <span className="text-base font-semibold text-slate-700">{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              地図があれば、迷いません。迷わなければ、続きます。続ければ、必ず変わります。
            </p>
            <p className="text-2xl font-black leading-tight text-slate-900 tracking-tight">
              あなたの100日間を、今日始めてみませんか。
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
            title="このロードマップを、一緒に走りませんか"
            description="「地図はわかった。でも一人で走り切れるか不安」という方のために、AIリブートアカデミーは100日間の伴走型プログラムを提供しています。経産省リスキリング補助金対象。LINEで無料相談を受け付けています。"
            buttonLabel="LINEで無料相談する（登録無料）"
          />
        </motion.section>

        {/* 次のステップ */}
        <motion.section
          className="mt-24 pt-16 border-t border-slate-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="academy-cta" className="scroll-mt-28 flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-will-primary" />
            次のステップ：Phase 1を今日から始めるために
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            まずは「Phase 1 Day 1」から。ChatGPTを開いて「こんにちは」と打つだけで始まります。不安な方は下記の入門記事を先に読んでから進んでください。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy/blog/ai-anxiety-overcome-guide"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-slate-900 px-8 py-5 text-lg font-bold text-white shadow-elevated transition-all hover:scale-[1.02] hover:bg-slate-800 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                AIが怖い方はここから読む
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-slate-200 px-8 py-5 text-lg font-bold text-slate-700 transition-all hover:border-slate-900 hover:text-slate-900 active:scale-95"
            >
              AIリブートアカデミーを見る
            </Link>
          </div>
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
              { href: "/academy/blog/ai-anxiety-overcome-guide", label: "「AIが怖い・難しい」を乗り越えるガイド" },
              { href: "/academy/blog/ai-first-30-days-work-guide", label: "AI活用 最初の30日ガイド" },
              { href: "/academy/blog/how-to-learn-generative-ai", label: "生成AIの学び方【2026年版】" },
              { href: "/academy/blog/chatgpt-prompt-beginner", label: "ChatGPTプロンプトの書き方入門" },
              { href: "/academy/blog/ai-for-non-engineers", label: "文系・非エンジニアのAI活用ガイド" },
              { href: "/academy/blog/ai-learning-start-now-2026", label: "AIを今すぐ学ぶべき5つの理由" },
              { href: "/academy/blog/ai-beginners-guide-over-50", label: "50代からのAI初心者ガイド" },
              { href: "/academy/blog/reskilling-over-40", label: "40代・50代からのAIリスキリング" },
              { href: "/academy/blog/ai-learning-cost-roi-guide-2026", label: "AI学習の費用と補助金完全ガイド2026" },
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
