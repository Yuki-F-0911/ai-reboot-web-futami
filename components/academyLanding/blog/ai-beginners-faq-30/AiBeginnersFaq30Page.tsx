"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  CreditCard,
  Calendar,
  BookOpen,
  Quote,
  MessageSquare,
  Sparkles,
  ChevronRight,
  HelpCircle,
  Briefcase,
  GraduationCap,
  DollarSign,
} from "lucide-react";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "../../sections/academyDesignTokens";

const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

const keywordTags = ["AI初心者", "AI よくある質問", "生成AI 始め方", "ChatGPT 安全", "AI 疑問"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "group1", label: "グループ1：基本・安全性（Q1〜8）" },
  { id: "group2", label: "グループ2：費用・プラン（Q9〜14）" },
  { id: "group3", label: "グループ3：使い方・習慣（Q15〜20）" },
  { id: "group4", label: "グループ4：仕事・将来（Q21〜27）" },
  { id: "group5", label: "グループ5：学び方・AIリブートとの関係（Q28〜30）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

type QAItem = {
  q: string;
  a: string;
  caution?: boolean;
};

const group1: QAItem[] = [
  {
    q: "Q1. AIって何ですか？難しいですか？",
    a: "AIとは、人間の言葉を理解して、文章・翻訳・要約・アイデア出しなどをこなすソフトウェアです。ChatGPTやGemini、Claudeが代表例。難しくありません——LINEでメッセージを送れる方なら今日から使えます。ただし、万能でもありません。計算ミスや事実誤認（ハルシネーション）が起きることがあるため、重要な情報は必ず確認する習慣が必要です。",
  },
  {
    q: "Q2. 入力した情報は外部に漏れますか？",
    a: "正直に言います：ChatGPTはデフォルトで会話内容をAIの学習に利用する設定になっています（設定からオフにできます）。ClaudeとGeminiも同様の設定があります。「絶対に漏れない」とは言えませんが、個人情報・機密情報を入力しない＋学習設定をオフにする、この2つで大幅にリスクを下げられます。",
    caution: true,
  },
  {
    q: "Q3. AIは嘘をつきますか？",
    a: "はい、つきます。「ハルシネーション」と呼ばれる現象で、AIが事実と異なる情報を自信ありげに出力することがあります。ただし、最新モデルでは大幅に改善されており、要約・言い換え・アイデア出しなど「正解がない系」のタスクでは非常に高精度です。重要な数字・日付・固有名詞は必ず一次ソースで確認してください。",
    caution: true,
  },
  {
    q: "Q4. スマホだけでも使えますか？",
    a: "はい、使えます。ChatGPT・Claude・Geminiはすべてスマホアプリがあり（iOS/Android対応）、ブラウザ版でも利用可能です。音声入力もできるので、文字を打つのが苦手な方にも便利です。",
  },
  {
    q: "Q5. 英語が苦手でも使えますか？",
    a: "問題ありません。日本語で質問すれば日本語で返ってきます。ただし正直に言うと、英語で質問した場合の方が精度がやや高いケースがあります（特に専門的な内容）。日本語で十分に使えるので、まずは日本語でOKです。",
  },
  {
    q: "Q6. プログラミングが分からなくても使える？",
    a: "完全に大丈夫です。AIとのやり取りは普通の日本語（自然言語）だけで成立します。「メールの下書きを作って」「この文章を要約して」と話しかけるだけです。プログラミングはAIを使うための必須スキルではありません。",
  },
  {
    q: "Q7. 会社でAIを使っていいですか？",
    a: "会社によって方針が異なります。まずは社内のガイドラインやIT部門のルールを確認してください。明示的な禁止がなければ使えることが多いですが、機密情報や顧客データを入力することは避けるのが原則です。わからない場合は上司やIT担当者に確認するのが最も安全です。",
    caution: true,
  },
  {
    q: "Q8. 個人情報や機密情報を入れるのは危険ですか？",
    a: "リスクがあります。入れてよい情報の目安：公開情報・一般的な業務の悩み・匿名化された内容。入れてはいけない情報：氏名・住所・電話番号・クレジットカード番号・社内の機密事項・顧客の個人情報・未公表のプロジェクト情報。「ニュースに出しても困らない情報か？」を判断基準にするとわかりやすいです。",
    caution: true,
  },
];

const group2: QAItem[] = [
  {
    q: "Q9. 無料で使えますか？",
    a: "はい。ChatGPT・Claude・Geminiはすべて無料プランがあります。ChatGPT無料版はGPT-4oモデルが制限付きで利用可能。Claudeの無料版はSonnet 4.6が使えます。Geminiは無料でGoogleサービスとの連携が便利です。最初は無料で十分です。",
  },
  {
    q: "Q10. 有料プランはいつから入るべき？",
    a: "週5時間以上使うようになってきたらサインです。有料プランの目安は月2,500〜3,000円前後（約20ドル）。利用上限への到達が増えてきた、もっと高性能なモデルを使いたいと感じ始めたら、そのタイミングで検討してください。焦って入る必要はありません。",
  },
  {
    q: "Q11. ChatGPT PlusとClaude Proはどちらがおすすめ？",
    a: "用途次第です。ChatGPT Plusは画像生成・データ分析・GPT-4o系モデルを使いたい人向け。Claude Proは長い文章の読み込み・執筆・コード生成が得意で、文字数の多い作業が多い人に向いています。どちらか1つ選ぶなら、まずChatGPT Plusが汎用性が高いです。",
  },
  {
    q: "Q12. 複数のAIを使い分けるべき？",
    a: "最初は1つに集中することを強くおすすめします。慣れてきたら2つ目を試す、という順序が理想的です。「どれが最強か」よりも「自分が使いこなせているか」の方がはるかに重要です。",
  },
  {
    q: "Q13. AIサービスはいつ突然終了したり有料化したりしますか？",
    a: "正直に：可能性はゼロではありません。無料プランの縮小・終了は過去にも起きています。ただし、ChatGPT・Claude・Geminiは大企業が運営しており、急な終了はあまり考えにくいです。1つのサービスに過度に依存しないことが長期的なリスク管理になります。",
    caution: true,
  },
  {
    q: "Q14. 経費計上できますか？",
    a: "業務で使っているなら経費計上できることが多いです。ただし、個人と業務の混合利用の場合は按分が必要な場合があります。詳細は税理士や会計担当者にご確認ください。領収書はクレジットカードの明細や各サービスの請求書で保存してください。",
  },
];

const group3: QAItem[] = [
  {
    q: "Q15. AIへの質問の書き方に決まりはありますか？",
    a: "形式的な決まりはありません。普通の日本語で大丈夫です。ただし「具体的に」「役割を与える」と精度が上がります。たとえば「メールを書いて」より「営業担当として取引先へのお断りメールを丁寧な表現で書いて」の方が良い結果が出ます。最初は難しく考えずに気軽に話しかけてみてください。",
  },
  {
    q: "Q16. 何回くらい使えば慣れますか？",
    a: "10〜20回で基本的な感覚は掴めます。最初の10回は「失敗してもいい練習」だと思って使い倒してください。AIへの指示の出し方（プロンプト）は、使いながら自然と上手くなります。",
  },
  {
    q: "Q17. 毎日使わないと上達しませんか？",
    a: "週3回程度でも十分に上達します。「頻度」より「深さ」の方が大事です。毎日5分形式的に使うよりも、週2回でも「今日の仕事の本当の困りごと」をAIに相談する方が活用の質が高まります。",
  },
  {
    q: "Q18. AIが間違えたとき、どうすればいいですか？",
    a: "「違います、〇〇のように修正してください」と伝えるだけです。AIは会話の続きとして修正を受け付けます。怒らず、具体的に何が違ったかを教えるのがコツ。「もっと短く」「もっと丁寧に」「例を入れて」など、方向を示すと効果的です。",
  },
  {
    q: "Q19. ChatGPTとGeminiとClaudeの使い分けは？",
    a: "ChatGPT：画像生成・データ分析・幅広い用途で最も汎用性が高い。Gemini：GoogleドキュメントやGmailとの連携が便利。Claude：長い文章の読み込み・詳細な執筆・コード生成が得意。迷ったらChatGPTから始めるのが一番無難です。",
  },
  {
    q: "Q20. AIを使い続けるコツは？",
    a: "「今日の仕事の困りごと」をAIに聞く習慣を作ることです。「AIで何か面白いことをしよう」ではなく、目の前の仕事に使うのが長続きのコツ。目標を高く設定せず、「今日1つだけAIに頼む」から始めてみてください。",
  },
];

const group4: QAItem[] = [
  {
    q: "Q21. AIに仕事を奪われますか？",
    a: "正直に：一部の定型的な仕事は変容します。WEF「Future of Jobs Report 2025」によると、2030年までに9,200万の仕事が置き換わる一方、1億7,000万の新しい仕事が生まれると予測しています（純増+7,800万）。「仕事が消える」よりも「AIを使える人が仕事を得やすくなる」という変化が起きています。今から学んでおく価値はあります。",
  },
  {
    q: "Q22. AIが使えないと将来まずいですか？",
    a: "危機感を煽るつもりはありませんが、正直に言えば「学ぶ価値はある」と思います。スマートフォンやメールが普及したとき、使える人と使えない人で仕事の効率に差が出たのと同じことが、今AIで起きています。急ぐ必要はありませんが、少しずつ慣れておくことは将来の自分への投資になります。",
  },
  {
    q: "Q23. AIスキルの資格や証明書はありますか？",
    a: "あります。「G検定（深層学習の基礎知識）」「AIパスポート」「AWS AI Practitioner」などが代表的です。ただし、資格の価値は会社や業種によって大きく異なります。資格より「実際に使いこなせる」実績を積む方が評価されるケースも多いです。まず使ってみることが先決です。",
  },
  {
    q: "Q24. AIで副業はできますか？",
    a: "できます。ライティング（AI補助で記事や文章を作成）、デザイン補助（Canva＋AI）、プログラミング補助（GitHub Copilot）、動画編集の自動化など、AIを使った副業は増えています。ただし、AIだけで副業が成立するわけではなく、人間のディレクション力や専門知識との組み合わせが必要です。",
  },
  {
    q: "Q25. どんな職種でもAIは役立ちますか？",
    a: "ほぼYESです。事務・営業・教育・クリエイティブ・エンジニアリング、どの職種でも文章作成・要約・調査・アイデア出しには使えます。ただし、医療・法律・会計など専門職では、AIの出力を鵜呑みにせず必ず専門家による検証が必須です。補助ツールとして使う分には、どんな職種でも効果があります。",
  },
  {
    q: "Q26. AIを使うと思考力が落ちますか？",
    a: "使い方次第です。AIに「答えを出してもらう」だけでは思考力は鍛えられません。しかし「AIに仮説を出してもらい、自分で検証・批判する」使い方をすれば、むしろ思考の幅が広がります。電卓を使って計算能力が完全に失われないのと同じで、AIを使うことで深く考える時間が増える可能性もあります。",
  },
  {
    q: "Q27. AIツールのセキュリティ設定で最低限すべきことは？",
    a: "3つだけ覚えてください。①学習利用をオフにする（各ツールの設定から変更可能）。②AIツール用に強固なパスワードを設定し、二段階認証を有効にする。③怪しいサードパーティ連携アプリを許可しない（「ChatGPTと連携します」という表示が出るサービスは慎重に）。この3つで基本的なセキュリティは確保できます。",
    caution: true,
  },
];

const group5: QAItem[] = [
  {
    q: "Q28. 独学とスクール、どちらで学べばいいですか？",
    a: "条件で分かれます。独学が向いている人：自己管理が得意・試行錯誤が楽しい・費用を抑えたい・すでにある程度PCスキルがある。スクールが向いている人：一人だと続かない・体系的に学びたい・フィードバックが欲しい・短期間で習得したい。どちらが正しいかではなく、自分の性格と状況に合う方を選んでください。詳しい比較は「AIを独学で学ぶ vs スクールで学ぶ」の記事も参考にどうぞ。",
  },
  {
    q: "Q29. AIを「使いこなせた」と感じるのはいつ？",
    a: "「AIなしでは難しかった仕事をやり遂げたとき」です。たとえば、苦手だった英語メールをAIの助けで書き上げたとき。議事録の要約が10分で終わったとき。アイデアが浮かばなかった企画書の骨子をAIと一緒に作れたとき。「できた」という体験が積み重なるほど自信につながります。最初の「これ使えた！」を早めに体験することが大切です。",
  },
  {
    q: "Q30. AIリブートアカデミーはどんな人向けですか？",
    a: "AIを仕事に活かしたいと思っている、すべての社会人の方です。特に「独学では続かない」「体系的に学びたい」「周囲にAIを教えてもらえる人がいない」という方に合っています。経産省リスキリング補助金の対象プログラムで、100日間のカリキュラムで実務活用レベルを目指します。まずはLINEで気軽にご相談ください。",
  },
];

const groupConfig = [
  {
    id: "group1",
    label: "グループ1：基本・安全性",
    icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />,
    questions: group1,
    range: "Q1〜8",
  },
  {
    id: "group2",
    label: "グループ2：費用・プラン",
    icon: <CreditCard className="h-6 w-6 text-blue-500" />,
    questions: group2,
    range: "Q9〜14",
  },
  {
    id: "group3",
    label: "グループ3：使い方・習慣",
    icon: <Smartphone className="h-6 w-6 text-violet-500" />,
    questions: group3,
    range: "Q15〜20",
  },
  {
    id: "group4",
    label: "グループ4：仕事・将来",
    icon: <Briefcase className="h-6 w-6 text-amber-500" />,
    questions: group4,
    range: "Q21〜27",
  },
  {
    id: "group5",
    label: "グループ5：学び方・AIリブートとの関係",
    icon: <GraduationCap className="h-6 w-6 text-rose-500" />,
    questions: group5,
    range: "Q28〜30",
  },
] as const;

export default function AiBeginnersFaq30Page() {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32 overflow-x-clip">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI初心者30の疑問に正直に答えます" },
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
            AIを始める前に知っておきたい<br className="hidden sm:block" />
            30の疑問に、全部正直に答えます<br className="hidden sm:block" />
            <span className="text-2xl sm:text-3xl text-slate-500 font-semibold">【2026年最新版】</span>
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
              title="AIを始める前に知っておきたい30の疑問に、全部正直に答えます【2026年最新版】"
              sourceSelector="[data-blog-article-body]"
            />
          </div>

          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-50/50 border border-slate-100 relative">
            <Quote className="absolute top-6 right-8 h-12 w-12 text-slate-200 -z-10 opacity-50" />
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 font-medium">
              「AIって安全なの？」「無料で使える？」「英語が苦手でも大丈夫？」「仕事を奪われる？」
              AI初心者が最初に感じるリアルな疑問30個を、マーケティングトークなしで正直に答えます。
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              都合の悪い事実も隠しません。不安を和らげながらも、過剰に楽観的にもなりません。
              この記事を読み終えたとき、「よし、始めてみよう」と思える材料が揃っていることを目指しています。
            </p>
          </div>
        </motion.header>

        {/* 内部リンク */}
        <div data-seo-internal-links="true" className="mt-12 p-6 rounded-2xl border border-will-lighter bg-will-lighter/20 flex flex-wrap items-center gap-y-3 gap-x-1">
          <BookOpen className="h-4 w-4 text-will-primary mr-2" />
          <span className="text-sm font-bold text-slate-500 mr-2">関連テーマ：</span>
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">AIが怖い・難しいを乗り越える</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-learning-diy-vs-school-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">独学 vs スクール比較</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-free-plan-comparison-2026" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">無料プラン比較2026</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">スマホ開始ガイド</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-first-3days-action-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">最初の3日間アクション</Link>
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
            要点まとめ（読む前に確認）
          </h4>
          <ul className="mt-6 space-y-4">
            {[
              "AIへの質問はLINEと同じ感覚の日本語でOK。プログラミング・英語は不要",
              "ChatGPT・Claude・Geminiはすべて無料プランあり。まず無料で試せる",
              "入力情報の学習利用は「設定オフ」で対応可能。個人情報・機密は入れないのが基本",
              "AIは嘘をつく（ハルシネーション）。重要な情報は一次ソースで確認する習慣を",
              "仕事は「奪われる」より「変わる」。AIを使える人が有利になる時代が来ている",
              "最初は1つのAIに集中。慣れたら2つ目を試す順序がおすすめ",
            ].map((text) => (
              <li key={text} className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Q&A グループ */}
        {groupConfig.map((group) => (
          <motion.section
            key={group.id}
            className="mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={sectionReveal}
          >
            <div id={group.id} className="scroll-mt-28 flex items-center gap-4 mb-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-soft">
                {group.icon}
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">{group.range}</span>
                <h2 className="text-2xl font-bold text-slate-900 m-0 border-none pb-0">{group.label}</h2>
              </div>
            </div>

            <div className="divide-y divide-slate-100 border-t border-slate-100">
              {group.questions.map((item) => (
                <div key={item.q} className="py-8 group">
                  <dt className="text-lg font-bold leading-relaxed text-slate-900 flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[12px] font-black text-slate-500 group-hover:bg-will-primary/10 group-hover:text-will-primary transition-colors">
                      <HelpCircle className="h-4 w-4" />
                    </span>
                    {item.q}
                  </dt>
                  <dd className="mt-4 pl-12 text-base leading-[1.8] text-slate-600">
                    {item.caution ? (
                      <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                          <span>{item.a}</span>
                        </div>
                      </div>
                    ) : (
                      item.a
                    )}
                  </dd>
                </div>
              ))}
            </div>

            {/* group2の後に中間CTA */}
            {group.id === "group2" && (
              <motion.div
                className="mt-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionReveal}
              >
                <MidArticleCtaBox slug="ai-beginners-faq-30" />
              </motion.div>
            )}
          </motion.section>
        ))}

        {/* まとめ */}
        <motion.section
          className="mt-24 rounded-2xl border p-10 sm:p-14 relative overflow-hidden"
          style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <Sparkles className="absolute -right-4 -top-4 h-32 w-32 opacity-5" style={{ color: ACADEMY_COLORS.accentMain }} />

          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold m-0 border-none pb-0" style={{ color: ACADEMY_COLORS.textStrong }}>
            まとめ：正直に知った上で、始めよう
          </h2>
          <p className="mt-8 text-lg leading-relaxed font-medium" style={{ color: ACADEMY_COLORS.textStrong }}>
            30の疑問を通じて伝えたかったことは、シンプルです。
          </p>
          <div className="mt-10 grid gap-4">
            {[
              "AIは完璧ではない。でも、使いこなす価値がある",
              "無料で始められる。最初は1つのツールに集中する",
              "プライバシーは設定でコントロールできる",
              "AIは嘘をつく。だから批判的に使うことが大事",
              "仕事は奪われるのではなく、変わる。変化に乗る選択肢がある",
              "スクールか独学かより、今日1回使うことの方が大切",
            ].map((text) => (
              <div
                key={text}
                className="flex items-center gap-4 p-4 rounded-xl border"
                style={{ backgroundColor: ACADEMY_COLORS.bgPanel, borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-base font-semibold" style={{ color: ACADEMY_COLORS.textBody }}>{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 space-y-6">
            <p className="text-lg leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              不安は、知ることで小さくなります。この記事で30の疑問が少しでも解消されたなら、次は実際に使ってみてください。
            </p>
            <p className="text-2xl font-bold leading-tight tracking-tight" style={{ color: ACADEMY_COLORS.textStrong, fontFamily: ACADEMY_TYPOGRAPHY.serif }}>
              正直に知った上で、一歩踏み出す——<br />それが、AIリブートの始まりです。
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
            title="疑問が解消されても、まだ不安なら"
            description="「記事を読んだけど、自分のケースはどうなんだろう」「どのAIから始めればいいか相談したい」——そんな方はLINEで無料相談できます。AIリブートアカデミーは経産省リスキリング補助金対象の100日間プログラムです。まずは気軽にどうぞ。"
            buttonLabel="LINEで気軽に相談する（登録無料）"
          />
        </motion.section>

        {/* 次のステップ */}
        <motion.section
          className="mt-24 pt-16 border-t"
          style={{ borderColor: ACADEMY_COLORS.lineSoft }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="academy-cta" className="scroll-mt-28 flex items-center gap-3 text-2xl font-bold" style={{ color: ACADEMY_COLORS.textStrong, fontFamily: ACADEMY_TYPOGRAPHY.serif }}>
            <Lightbulb className="h-8 w-8" style={{ color: ACADEMY_COLORS.accentMain }} />
            次のステップ：まず動いてみる
          </h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            疑問が解消されたら、次は実際に動いてみましょう。最初の3日間でやること、スマホでの始め方など、具体的なガイドがあります。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy/blog/ai-first-3days-action-guide"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-slate-900 px-8 py-5 text-lg font-bold text-white transition-all hover:opacity-90 active:scale-95 sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                最初の3日間ガイドを読む
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
        <section id="related-links" className="mt-24 border-t pt-16 pb-12" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: ACADEMY_COLORS.bgSection }}>
              <BookOpen className="h-5 w-5" style={{ color: ACADEMY_COLORS.textMuted }} />
            </div>
            <h2 className="scroll-mt-28 m-0 border-none pb-0 text-2xl font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>関連リンク</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { href: "/academy/blog/ai-anxiety-overcome-guide", label: "「AIが怖い・難しい」を乗り越える安心スタートガイド" },
              { href: "/academy/blog/ai-first-3days-action-guide", label: "AI入門、最初の3日間でやるべき5つのこと" },
              { href: "/academy/blog/ai-learning-diy-vs-school-guide", label: "AIを独学で学ぶ vs スクールで学ぶ" },
              { href: "/academy/blog/ai-free-plan-comparison-2026", label: "ChatGPT・Claude・Gemini 無料プラン比較2026" },
              { href: "/academy/blog/chatgpt-start-guide-smartphone", label: "ChatGPTをスマホで始める方法" },
              { href: "/academy/blog/chatgpt-prompt-beginner", label: "ChatGPTプロンプトの書き方入門" },
              { href: "/academy/blog/ai-for-non-engineers", label: "文系・非エンジニアのAI活用ガイド" },
              { href: "/academy/blog/ai-beginners-guide-over-50", label: "50代からのAI初心者ガイド" },
              { href: "/academy/blog/ai-hallucination-fact-check-guide", label: "AIのハルシネーション対策ガイド" },
              { href: "/academy", label: "AIリブートアカデミー TOP" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between p-5 rounded-xl border transition-all group"
                  style={{ backgroundColor: ACADEMY_COLORS.bgPanel, borderColor: ACADEMY_COLORS.lineSoft }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = ACADEMY_COLORS.accentMain;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = ACADEMY_COLORS.lineSoft;
                  }}
                >
                  <span className="text-sm font-semibold transition-colors group-hover:text-[#d46a1f]" style={{ color: ACADEMY_COLORS.textBody }}>{link.label}</span>
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
