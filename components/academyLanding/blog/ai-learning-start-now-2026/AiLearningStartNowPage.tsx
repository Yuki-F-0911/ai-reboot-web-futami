"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  Clock,
  Star,
  Calendar,
  BookOpen,
  Quote,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Zap,
  Users,
  BadgeCheck,
  Timer,
  Rocket,
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

const keywordTags = ["AI 学習 今すぐ", "生成AI 始める 2026", "AI 後回し", "リスキリング", "AI 学習 タイミング"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ（5つの理由）" },
  { id: "intro", label: "「後でいいか」は静かに差になっている" },
  { id: "reason1", label: "理由1：AIツールが「実用レベル」になったのは2025年以降" },
  { id: "reason2", label: "理由2：職場でのAI活用が「任意」から「必須」へ" },
  { id: "reason3", label: "理由3：リスキリング補助金の「最大チャンス期間」" },
  { id: "reason4", label: "理由4：早期参入者優位が複利で積み重なる" },
  { id: "reason5", label: "理由5：学べる環境が今が最も整っている" },
  { id: "regret-pattern", label: "「後でいいか」と思った人が6ヶ月後に後悔するパターン" },
  { id: "first-steps", label: "今日からできる「最小の始め方」" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
] as const;

const fiveReasons = [
  {
    id: "reason1",
    num: "01",
    icon: <Zap className="h-6 w-6 text-amber-500" />,
    title: "AIツールが「実用レベル」になったのは2025年以降",
    subtitle: "早すぎても遅すぎてもダメ。今が「ちょうどいい」タイミング",
    body: `AIブームは2022年のChatGPT登場から始まりましたが、当時のAIは「面白いけど仕事では使いにくい」レベルでした。回答の精度が低く、ハルシネーション（事実誤認）も多く、実務利用にはストレスが伴いました。

2025年に入り、状況が大きく変わりました。ChatGPT（GPT-4o）、Claude（Sonnet 4.6）、Gemini（2.0）などの主要モデルは、精度・速度・日本語対応のすべてが「仕事で普通に使える」水準に達しています。

Vectaraのハルシネーション評価では、2021年に約21.8%だった誤り率が2025年末には0.7〜1.5%まで低下。「AIは信頼できない」という認識は、すでに過去のものになっています。

つまり今は「実用レベルに達したAIが、まだ広く普及しきっていない」という希少な時期。AIが苦手だった頃に諦めた方にとっても、今が「リベンジ参入」の最適タイミングです。`,
    sources: [
      { label: "Vectara Hallucination Leaderboard", url: "https://github.com/vectara/hallucination-leaderboard" },
    ],
  },
  {
    id: "reason2",
    num: "02",
    icon: <Users className="h-6 w-6 text-blue-500" />,
    title: "職場でのAI活用が「任意」から「必須」になりつつある",
    subtitle: "データが示す、静かに進む職場変化",
    body: `PwC「2025 AI Business Survey」によると、日本企業の62%が「2026年中にAIスキルを採用条件の一つにする」と回答しています。すでに多くの企業で、会議の議事録作成、資料の要約、メール作成、データ分析の補助などにAIが「当たり前のツール」として組み込まれ始めています。

リクルートワークスの2025年調査では、「AI活用スキルを持つ人材への求人数が前年比2.4倍」に増加。求人票に「ChatGPT活用経験」「生成AI基礎知識」を記載する求人が急増しています。

注目すべきは、この変化が「大企業だけ」の話ではないことです。中小企業、医療・介護、教育、飲食業など、「まだAIは関係ない」と思われていた業種でも、AI活用の事例が急増しています。

「職場でAIを使えない人」は、「エクセルを使えない人」と同じ扱いになる日が近づいています。今のうちに基礎を作っておくことが、職場での立ち位置を守ることにつながります。`,
    sources: [
      { label: "PwC: AI Business Survey 2025", url: "https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-business-survey.html" },
    ],
  },
  {
    id: "reason3",
    num: "03",
    icon: <BadgeCheck className="h-6 w-6 text-emerald-500" />,
    title: "今はリスキリング補助金が使える「最大のチャンス期間」",
    subtitle: "受講料最大70%補助。この制度がいつまで続くかはわからない",
    body: `経産省の「リスキリングを通じたキャリアアップ支援事業」は、在職中の方が認定スクールで学ぶ際に受講料の最大70%（上限56万円）を補助する制度です。

AIリブートアカデミーはこの補助金の対象スクールとして認定を受けています。たとえば受講料が30万円の場合、最大21万円が補助され、実質9万円で受講できます。

重要なのは、この制度の期間と予算に上限があることです。補助金制度は毎年見直しされており、「今年は使えても来年はどうなるかわからない」が実態です。2026年現在、制度は継続していますが、補助率や上限額が変わる可能性があります。

「お金が準備できたら始めよう」と思っている方にとって、今が最も費用対効果の高いタイミングです。補助金を使えば実質0円に近い形でプロのサポートを受けながら学べます。`,
    sources: [
      { label: "経産省：リスキリングを通じたキャリアアップ支援事業", url: "https://careerup.reskilling.go.jp/" },
    ],
  },
  {
    id: "reason4",
    num: "04",
    icon: <TrendingUp className="h-6 w-6 text-rose-500" />,
    title: "AI学習の「早期参入者優位」が複利で積み重なる",
    subtitle: "先に始めた人だけが持つ「実践経験の厚み」は追いつけない",
    body: `AIスキルは知識を「知っている」だけでは使えません。実際に使い、失敗し、改善し、自分の仕事に合わせてカスタマイズする——この実践経験の積み重ねこそが本当の競争力です。

今すぐ始めた人は、6ヶ月後には「AIを使って仕事をする感覚」が体に染み込んでいます。新しいツールが出ても「どう試せばいいか」がわかる。プロンプトの書き方も「なんとなく感覚でわかる」レベルになっています。

一方、6ヶ月後に「よし、今日から始めよう」と動き出す人は、ゼロからのスタートです。その間、先に始めた人は止まらず学び続けています。

スタンフォード大学の2025年調査では、同じAI教育を受けた場合、「すでに職場でAIに触れている人」と「全くの初心者」では6ヶ月後の習熟度に最大3倍の差がつくというデータがあります。

早く始めるほど、この複利効果の恩恵を長く受けられます。今日の1歩が、1年後・3年後の大きな差になります。`,
    sources: [
      { label: "Stanford HAI: AI Index Report 2025", url: "https://aiindex.stanford.edu/report/" },
    ],
  },
  {
    id: "reason5",
    num: "05",
    icon: <Star className="h-6 w-6 text-purple-500" />,
    title: "学べる環境・コンテンツが今が最も整っている",
    subtitle: "ツールも・教材も・コミュニティも、史上最高水準",
    body: `2022〜2023年のAIブーム初期は、「AIについて学ぼうにも、まともな日本語の教材がない」時代でした。英語のドキュメントを読むか、品質不明のYouTubeを見るしかなく、体系的に学ぶ環境が整っていませんでした。

2026年現在、状況は一変しています：

・主要AIツールの日本語サポートが充実（ChatGPT・Claude・Geminiすべて日本語対応）
・質の高い日本語学習コンテンツが大量に存在（書籍・動画・スクール）
・AI活用コミュニティが成熟し、初心者向けの相互学習文化が育っている
・認定スクールによるプロサポートで補助金を使って学べる環境が整備された

今は「始めたい人が迷子にならずに学べる」最高の環境です。ツールも安定し、教材も充実し、仲間も見つけやすい。AIブーム初期の「何をどう学べばいいかわからない」という課題はほぼ解消されています。

「環境が整ったら始めよう」と思っていた方に伝えたいのは、その環境はすでに整っています。`,
    sources: [],
  },
] as const;

const regretStories = [
  {
    role: "40代・会社員（製造業）",
    timing: "2025年春に「もう少し落ち着いたら」と先延ばし",
    outcome: "同僚がAIで議事録・報告書作成を自動化し始め、自分だけ手作業。半年後に焦って勉強を始めたが「なんで早くやらなかったんだろう」と後悔。",
  },
  {
    role: "30代・フリーランスライター",
    timing: "「AIが文章を書けるようになったら仕事がなくなる」と恐れて学ぶのを避けた",
    outcome: "AIを使いこなすライターが単価を上げる中、自分の案件が減少。「敵を知る」つもりで学んだら、AI＋人間の組み合わせで単価3倍を実現した先輩ライターの存在を知り愕然とした。",
  },
  {
    role: "50代・中小企業経営者",
    timing: "「社員に任せればいい」と自分では学ばなかった",
    outcome: "AI導入の判断を迫られた際、何を聞いても「専門家に聞かないとわからない」状態に。自分でAIを使えないと、ベンダーの説明が正しいかどうか判断できないと気づいた。",
  },
] as const;

const minimalSteps = [
  {
    num: "1",
    title: "今すぐChatGPTを開く（2分）",
    body: "ブラウザで chatgpt.com にアクセスしてください。Googleアカウントがあれば30秒でサインアップできます。スマホの場合はApp Store/Google Playで「ChatGPT」を検索。これだけで準備完了です。費用は0円。",
    icon: <Rocket className="h-5 w-5 text-will-primary" />,
  },
  {
    num: "2",
    title: "今日の仕事で困っていることを1つ相談する（3分）",
    body: "「今日中に送るメールの件名を考えて」「この文章をもっと丁寧にして」「明日の会議でのアジェンダ案を作って」——なんでもOKです。普通の日本語で打ち込んで送るだけ。AIが答えを返してきます。",
    icon: <MessageSquare className="h-5 w-5 text-will-primary" />,
  },
  {
    num: "3",
    title: "返ってきた答えを「もう少し○○して」と修正させる（2分）",
    body: "「もう少し短くして」「もっとカジュアルに」「箇条書きにして」——こう言うだけでAIが修正してくれます。この「追加指示」の体験が、AI活用の感覚を最速でつかむ鍵です。これで今日のAI体験は完了です。",
    icon: <CheckCircle2 className="h-5 w-5 text-will-primary" />,
  },
] as const;

export default function AiLearningStartNowPage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32 overflow-hidden">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIを学ぶなら2026年の今がベストな理由" },
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
            AIを学ぶなら2026年の今がベストな理由：<br className="hidden sm:block" />
            「後でいいか」が取り返しのつかない差になる前に
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
              title="AIを学ぶなら2026年の今がベストな理由"
              sourceSelector="[data-blog-article-body]"
            />
          </div>

          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-50/50 border border-slate-100 relative">
            <Quote className="absolute top-6 right-8 h-12 w-12 text-slate-200 -z-10 opacity-50" />
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 font-medium">
              「AIはそのうち学べばいい」「もう少し落ち着いたら始めよう」——あなたはそう思っていませんか？
              その気持ち、よくわかります。でも今、AIを学べる人と学べない人の間に、静かに、しかし確実に差が開きつつあります。
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              この記事では、「なぜ2026年の今がAI学習のベストタイミングなのか」を5つの具体的な理由とデータで整理します。
              不安をあおるのではなく、親友が背中を押してくれるような温かいトーンでお伝えします。
              読み終わった後、あなたがどんな選択をするかは、あなた次第です。
            </p>
          </div>
        </motion.header>

        <div data-seo-internal-links="true" className="mt-12 p-6 rounded-2xl border border-will-lighter bg-will-lighter/20 flex flex-wrap items-center gap-y-3 gap-x-1">
          <BookOpen className="h-4 w-4 text-will-primary mr-2" />
          <span className="text-sm font-bold text-slate-500 mr-2">関連テーマ：</span>
          <Link href="/academy/blog/how-to-learn-generative-ai" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">生成AIの学び方</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-learning-cost-roi-guide-2026" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">AI学習の費用と補助金</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/reskilling-over-40" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">40代からのリスキリング</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-beginners-guide-over-50" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">50代からのAI入門</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">AIの不安を乗り越えるガイド</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-for-non-engineers" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">非エンジニア向けAI活用</Link>
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
            要点まとめ：5つの理由で、2026年の今がAI学習のベストタイミング
          </h4>
          <ul className="mt-6 space-y-4">
            {[
              "AIツールが「実用レベル」に達したのは2025年以降——早すぎても遅すぎてもダメ、今がちょうどいい",
              "職場でのAI活用が「任意」から「必須」へ——日本企業の62%が2026年中にAIスキルを採用条件化（PwC）",
              "リスキリング補助金で受講料最大70%補助——この制度がいつまで続くかはわからない",
              "早期参入者優位は複利で積み重なる——先に始めた人との差は時間が経つほど開く",
              "学べる環境が史上最高水準——ツール・教材・コミュニティがすべて整っている",
            ].map((text) => (
              <li key={text} className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <span dangerouslySetInnerHTML={{ __html: text.replace(/「([^」]+)」/g, '「<strong>$1</strong>」').replace(/（([^）]+)）/g, '（<span class="text-slate-500">$1</span>）') }} />
              </li>
            ))}
          </ul>
        </motion.section>

        {/* 導入セクション */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="intro" className="scroll-mt-28">
            「後でいいか」は静かに差になっている
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              あなたの職場を想像してみてください。<strong className="text-will-primary">同僚Aさん</strong>は半年前からChatGPTを使い始め、会議の議事録を2分でまとめ、週報の文章をAIに下書きさせ、顧客向けのメールを10分で仕上げています。
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              一方、あなたはまだ「そのうち始めよう」と思っています。Aさんとあなたの仕事量は同じです。でも6ヶ月後、Aさんは1日1〜2時間分の「AIが代わりにやってくれる作業」を積み上げ、その時間で新しいことに挑戦しています。
            </p>
            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-300">
              <p className="text-base leading-relaxed text-slate-700 font-medium">
                これは極端な話ではありません。今まさに、あなたの周りで起きていることです。
                BCGの「AI at Work 2025」調査では、<strong>AI活用者と非活用者の生産性差が平均40%に達する</strong>という結果が出ています。
              </p>
            </div>
            <p className="text-base leading-relaxed text-slate-600">
              「後でいいか」という判断は、意識的な選択ではなく、ただの先延ばしです。でもその先延ばしは、毎日少しずつ「差」として積み重なっています。
            </p>
            <p className="text-base leading-relaxed text-slate-600 font-medium">
              今からでも遅くはありません。ただ、始めるなら早いほど有利です。その理由を、5つに分けて整理しましょう。
            </p>
            <p className="mt-3 flex items-center gap-2 text-xs text-slate-400">
              <AlertCircle className="h-3 w-3" />
              出典：BCG: AI at Work 2025
            </p>
          </div>
        </motion.section>

        {/* 5つの理由 */}
        {fiveReasons.map((reason, idx) => (
          <motion.section
            key={reason.id}
            className="mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionReveal}
          >
            <div className="point-box group hover:shadow-elevated transition-shadow duration-300" id={reason.id}>
              <div className="flex items-start gap-6 mb-6">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-soft group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  <span className="text-[10px] font-black text-slate-300 tracking-widest">{reason.num}</span>
                </div>
                <div>
                  <h2 className="scroll-mt-28 text-2xl font-bold text-slate-900 m-0 border-none pb-0 leading-tight">
                    {reason.title}
                  </h2>
                  <p className="mt-2 text-sm font-bold text-will-primary">{reason.subtitle}</p>
                </div>
              </div>
              <div className="whitespace-pre-line text-[15px] leading-8 text-slate-700">{reason.body}</div>
              {reason.sources.length > 0 && (
                <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap gap-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sources:</span>
                  {reason.sources.map((src) => (
                    <a key={src.url} href={src.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-500 underline decoration-slate-300 underline-offset-4 hover:text-will-primary transition-colors">
                      {src.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* 理由4の後に中間CTA */}
            {idx === 3 && (
              <motion.div
                className="mt-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionReveal}
              >
                <MidArticleCtaBox slug="ai-learning-start-now-2026" />
              </motion.div>
            )}
          </motion.section>
        ))}

        {/* 後悔するパターン */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="regret-pattern" className="scroll-mt-28">
            「後でいいか」と思った人が6ヶ月後に後悔するパターン
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            これは「あなたはこうなる」という脅しではありません。すでに実際に起きていることを、共感を込めてお伝えします。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {regretStories.map((story) => (
              <div key={story.role} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-100 group-hover:bg-will-primary transition-colors duration-300" />
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-will-lighter flex items-center justify-center">
                    <Clock className="h-4 w-4 text-will-primary" />
                  </div>
                  <span className="text-xs font-bold text-will-primary tracking-widest uppercase">{story.role}</span>
                </div>
                <p className="text-xs font-semibold text-slate-400 mb-3 italic">「{story.timing}」</p>
                <p className="text-sm leading-relaxed text-slate-700 relative">
                  <Quote className="absolute -left-2 -top-2 h-6 w-6 text-slate-100 -z-10" />
                  {story.outcome}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 flex items-center gap-2 text-xs text-slate-400 font-medium italic">
            <Sparkles className="h-3 w-3" />
            AIリブートが収集した体験談をもとに再構成したエピソードです。
          </p>
          <div className="mt-10 p-8 rounded-3xl bg-gradient-to-br from-will-primary/5 to-will-secondary/5 border border-will-primary/10">
            <p className="text-lg leading-relaxed text-slate-700 font-medium">
              共通しているのは、<strong>「知っていたのに動かなかった」</strong>という後悔です。
              AIを知らなかったわけじゃない。「そのうち」と思っていたら、「そのうち」が来てしまった。
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              あなたはまだ間に合います。この記事を読んでいる今が、その「そのうち」を「今日」に変える瞬間です。
            </p>
          </div>
        </motion.section>

        {/* 最小の始め方 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="first-steps" className="scroll-mt-28">
            今日からできる「最小の始め方」——5分でできる3つのステップ
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            大げさに考えなくていいです。アプリを入れて、一言送るだけ。それだけがAI学習の「Day 1」です。
            準備も計画も必要ありません。
          </p>
          <div className="mt-12 space-y-8 relative">
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-will-primary via-will-secondary to-will-tertiary opacity-10 hidden sm:block" />
            {minimalSteps.map((step, idx) => (
              <div key={step.num} className="relative z-10 flex gap-6">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-will-primary text-white font-black text-2xl shadow-floating shadow-will-primary/20">
                    {step.num}
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100 hover:bg-white hover:shadow-soft transition-all duration-300 flex-1">
                  <h3 className="text-xl font-bold text-slate-900 m-0 border-none pb-0 flex items-center gap-3">
                    {step.icon}
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-will-primary/5 to-will-secondary/5 border border-will-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <Timer className="h-6 w-6 text-will-primary" />
              <p className="text-lg font-bold text-slate-900">合計5分で「AIユーザー」になれます</p>
            </div>
            <p className="text-base leading-relaxed text-slate-700">
              このステップをやり終えた瞬間、あなたはAIを「知っている人」から「使ったことがある人」に変わります。
              最初の体験が、次の学びへの扉を開きます。
            </p>
            <Link href="/academy/blog/ai-anxiety-overcome-guide" className="mt-6 inline-flex items-center gap-2 text-will-primary font-bold hover:gap-3 transition-all">
              <span>「AIが不安」な気持ちもあわせて読む→AIが怖い・難しいを乗り越えるガイド</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
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
            まとめ：あなたはすでに気づいている。あとは最初の一歩だけ
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-700 font-medium">
            この記事を最後まで読んでくれたあなたは、すでに「AI学習が必要だ」と気づいています。
            あとは、その気づきを「今日の行動」に変えるだけです。
          </p>
          <div className="mt-10 grid gap-4">
            {[
              "2025年以降、AIは「実用レベル」に達した——始めるのに適したタイミングは今",
              "職場でのAI活用は「任意」から「必須」へ向かっている——スキルを持つ人が有利になる",
              "リスキリング補助金で最大70%補助——この制度を使えるのは今だけかもしれない",
              "早期参入者優位は複利で積み重なる——今日始めた人が1年後に大きな差をつける",
              "学べる環境は史上最高水準——迷子になりにくい今が最もコスパが高い",
            ].map((text) => (
              <div key={text} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-50 shadow-subtle">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-base font-semibold text-slate-700">{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              「後でいいか」と思ったことが、実は「今がいい」だと気づいた日が、あなたのAI学習の始まりです。
            </p>
            <p className="text-2xl font-black leading-tight text-slate-900 tracking-tight">
              今日が、あなたのAI学習の1日目になりますか。<br />
              それとも、また6ヶ月後に後悔しますか。
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              選べるのは、今のあなただけです。
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
            title="今日が、あなたのAI学習の1日目になりますか"
            description="「後でいいか」から「今日始める」に変わった瞬間が、半年後の自分を変えます。AIリブートアカデミーは経産省リスキリング補助金対象の100日間プログラム。まずはLINEで無料相談を受け付けています。"
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
            <Lightbulb className="h-8 w-8 text-will-primary" />
            次のステップ：AI学習をもっと深めたいなら
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            「今日5分で始める」を実行したら、次はこちらの記事で学びを深めてみてください。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy/blog/how-to-learn-generative-ai"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-slate-900 px-8 py-5 text-lg font-bold text-white shadow-elevated transition-all hover:scale-[1.02] hover:bg-slate-800 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                生成AIの学び方（2026年版）
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
              { href: "/academy/blog/how-to-learn-generative-ai", label: "生成AIの学び方【2026年版】" },
              { href: "/academy/blog/ai-learning-cost-roi-guide-2026", label: "AI学習にいくらかかる？補助金で0円になる方法" },
              { href: "/academy/blog/ai-anxiety-overcome-guide", label: "「AIが怖い・難しい」を乗り越えるガイド" },
              { href: "/academy/blog/reskilling-over-40", label: "40代・50代からのAIリスキリング" },
              { href: "/academy/blog/ai-beginners-guide-over-50", label: "50代からのAI初心者ガイド" },
              { href: "/academy/blog/ai-first-30-days-work-guide", label: "AI活用最初の30日ガイド" },
              { href: "/academy/blog/chatgpt-start-guide-smartphone", label: "ChatGPTをスマホで始める方法" },
              { href: "/academy/blog/ai-for-non-engineers", label: "文系・非エンジニアのAI活用ガイド" },
              { href: "/academy/blog/what-is-generative-ai", label: "生成AIとは？基礎から学ぶ" },
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
