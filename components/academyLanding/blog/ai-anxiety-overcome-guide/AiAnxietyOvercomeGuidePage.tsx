"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  CreditCard,
  Calendar,
  Clock,
  BookOpen,
  Quote,
  Lock,
  MessageSquare,
  Sparkles,
  ChevronRight
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

const keywordTags = ["AI 怖い", "生成AI 不安", "AI 難しい", "AI 始め方 不安", "AI 初心者 怖い"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-anxious", label: "AIが怖いと感じるのは自然なこと" },
  { id: "five-anxieties", label: "5つの不安と正直な答え" },
  { id: "first-3-days", label: "最初の3日間でやること" },
  { id: "stories", label: "先輩たちの「最初は怖かった」エピソード" },
  { id: "privacy-settings", label: "安心して使うためのプライバシー設定" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ：一歩踏み出した人だけが見える景色" },
  { id: "related-links", label: "関連リンク" },
] as const;

const fiveAnxieties = [
  {
    id: "anxiety-job",
    icon: <Zap className="h-6 w-6 text-amber-500" />,
    question: "不安1：AIに仕事を奪われる？",
    answer: `世界経済フォーラム（WEF）の「Future of Jobs Report 2025」によると、2030年までにAI関連で1億7,000万の新しい仕事が生まれ、9,200万の仕事が置き換わると予測されています。差し引き＋7,800万の純増です。

国際労働機関（ILO）の2025年5月の報告書はさらに踏み込んで、「AIによって最もリスクが高い仕事は全体のわずか3.3%」「大半の仕事はなくなるのではなく、変わる」と結論づけています。

つまり、AIは「仕事を奪う」のではなく「仕事の中身を変える」存在です。AIを使える人は仕事が楽になり、使えない人との差が開く——これが2026年の実態です。`,
    sources: [
      { label: "WEF Future of Jobs Report 2025", url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/" },
      { label: "ILO: Generative AI and Jobs 2025", url: "https://www.ilo.org/publications/generative-ai-and-jobs-2025-update" },
    ],
  },
  {
    id: "anxiety-privacy",
    icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />,
    question: "不安2：個人情報が漏れない？",
    answer: `ChatGPT・Claude・Geminiの3大ツールはいずれもプライバシー設定を用意しています。

具体的には：
・ChatGPT → 設定 ＞ Data Controls ＞「Improve the model for everyone」をオフ
・Claude → 設定 ＞ Privacy ＞ 学習利用をオフ（2025年8月以降、デフォルトでオンに変更されたため要確認）
・Gemini → Googleアカウント ＞ Geminiアプリのアクティビティ ＞ オフ

基本ルールはシンプルです：「名前・住所・電話番号・クレジットカード番号など、個人を特定する情報は入力しない」。これだけ守れば安全に使えます。`,
    sources: [
      { label: "OpenAI: Data Controls FAQ", url: "https://help.openai.com/en/articles/7730893-data-controls-faq" },
      { label: "Anthropic: Consumer Terms更新", url: "https://www.anthropic.com/news/updates-to-our-consumer-terms" },
      { label: "Gemini: プライバシーハブ", url: "https://support.google.com/gemini/answer/13594961" },
    ],
  },
  {
    id: "anxiety-difficult",
    icon: <Smartphone className="h-6 w-6 text-blue-500" />,
    question: "不安3：使いこなせない？難しくない？",
    answer: `AIを使うのに専門知識は不要です。ChatGPTもClaudeもGeminiも、LINEやメッセンジャーと同じ感覚で「文字を打って送るだけ」で動きます。

たとえば、ChatGPTを開いて「明日の会議で使う挨拶文を考えて」と打てば、それだけで回答が返ってきます。プログラミングも英語も必要ありません。

「プロンプト（指示文）が難しそう」と感じるかもしれませんが、最初はふつうの日本語で大丈夫です。「もっと短くして」「もう少しカジュアルに」と伝えれば、AIが調整してくれます。

使いこなすコツは、最初から完璧な指示を出そうとしないこと。会話を重ねて、一緒に答えを作っていく感覚です。`,
    sources: [],
  },
  {
    id: "anxiety-hallucination",
    icon: <AlertCircle className="h-6 w-6 text-rose-500" />,
    question: "不安4：間違った情報を信じてしまう？",
    answer: `AIが事実と異なる情報を生成する現象は「ハルシネーション（幻覚）」と呼ばれます。これは確かに起こります。ただし、最新モデルでは大幅に改善されています。

Vectaraのハルシネーション評価（2025年12月更新）によると、要約タスクでの誤り率はトップモデルで0.7〜1.5%まで下がっています。2021年の約21.8%から96%もの改善です。

とはいえ、ゼロにはなりません。対策はシンプルです：

1. 重要な数字・日付・固有名詞は必ず公式サイトで確認する
2. 「この情報の出典を教えて」とAIに聞く
3. 最初は「要約して」「整理して」のような失敗しにくいタスクから始める

AIを「正解を教えてくれる先生」ではなく、「一緒に考えてくれる相談相手」と思えば、ハルシネーションも怖くありません。`,
    sources: [
      { label: "Vectara Hallucination Leaderboard", url: "https://github.com/vectara/hallucination-leaderboard" },
      { label: "AllAboutAI: AI Hallucination Report 2026", url: "https://www.allaboutai.com/resources/ai-statistics/ai-hallucinations/" },
    ],
  },
  {
    id: "anxiety-cost",
    icon: <CreditCard className="h-6 w-6 text-slate-500" />,
    question: "不安5：お金がかかる？",
    answer: `ChatGPT・Claude・Geminiはいずれも無料プランがあります。

ChatGPTの無料プラン（2026年2月時点）：
・GPT-5モデルが制限付きで利用可能
・文章作成、要約、翻訳、アイデア出し、画像認識など基本機能が使える
・一定回数を超えると制限がかかるが、日常的な用途には十分

Claudeの無料プラン：
・Sonnet 4.6モデルが利用可能
・ファイル添付、サードパーティ連携（Notion・Slackなど）にも対応

Geminiの無料プラン：
・Googleアカウントがあればすぐ使える
・Gmail・Googleドキュメントとの連携が強み

有料プランは月額20ドル（約3,000円）前後ですが、最初は無料プランだけで十分です。「毎日使って上限に引っかかるようになったら」が課金を検討するタイミングです。`,
    sources: [
      { label: "ChatGPT料金ページ", url: "https://chatgpt.com/pricing" },
      { label: "Claude料金ページ", url: "https://claude.com/pricing" },
    ],
  },
] as const;

const daySteps = [
  {
    day: "Day 1：ChatGPTに挨拶してみる",
    time: "所要時間：10分",
    steps: [
      {
        title: "ステップ1：ChatGPTを開く",
        body: "ブラウザで chatgpt.com にアクセスし、「サインアップ」からGoogleアカウントまたはメールアドレスで無料登録します。スマホの場合はApp Store/Google Playから「ChatGPT」公式アプリをインストールしてもOKです。",
      },
      {
        title: "ステップ2：最初のメッセージを送る",
        body: "入力欄に「こんにちは。AIを使うのは初めてです。よろしくお願いします」と打って送信してみましょう。AIが丁寧に返事をしてくれます。これだけで、あなたはもうAIユーザーです。",
      },
      {
        title: "ステップ3：かんたんな質問をしてみる",
        body: "「明日の東京の天気は？」「カレーの隠し味を3つ教えて」「お礼メールの書き方を教えて」——何でも構いません。気軽に話しかけてみてください。",
      },
    ],
  },
  {
    day: "Day 2：仕事の悩みを1つ相談してみる",
    time: "所要時間：15分",
    steps: [
      {
        title: "ステップ1：今日の仕事で困っていることを1つ思い浮かべる",
        body: "「メールの返信に悩んでいる」「会議の議事録をまとめたい」「提案書の構成が思いつかない」——具体的であるほどAIの回答が良くなります。",
      },
      {
        title: "ステップ2：ChatGPTにそのまま相談する",
        body: "たとえば：「取引先へのお断りメールを書きたいのですが、角が立たない文面を作ってもらえますか？相手は3年付き合いのある会社で、今回は予算の都合でお断りします」と入力します。",
      },
      {
        title: "ステップ3：「もう少し〇〇して」と追加指示を出す",
        body: "最初の回答が完璧でなくても大丈夫。「もう少し柔らかい表現にして」「結論を先に持ってきて」「3行に短くして」と伝えれば、AIが修正してくれます。この「追加指示」がAI活用のコツです。",
      },
    ],
  },
  {
    day: "Day 3：結果を誰かに見せてみる",
    time: "所要時間：5分",
    steps: [
      {
        title: "ステップ1：Day 2で作った成果物を見返す",
        body: "AIが作ってくれたメール文や議事録を読み直します。「ここは自分の言葉に直したい」「この部分は使える」と感じる箇所があるはずです。",
      },
      {
        title: "ステップ2：同僚や家族に見せる",
        body: "「AIにこんなの作ってもらったんだけど」と気軽に見せてみましょう。相手の反応を見ることで、AIの実力と限界が体感できます。",
      },
      {
        title: "ステップ3：次に試したいことをメモする",
        body: "「議事録の要約もやってみたい」「英語メールの下書きに使えそう」——3日間で見えた可能性をメモしておくと、4日目以降の活用がスムーズになります。",
      },
    ],
  },
] as const;

const stories = [
  {
    role: "40代・事務職",
    quote: "ExcelもWordも苦手な私にAIなんて無理だと思ってました。でもChatGPTに「この表のデータを要約して」と頼んだら、5秒で箇条書きにしてくれて。あ、これは便利だなと素直に思いました。今は毎朝のメールチェックに使ってます。",
  },
  {
    role: "50代・営業マネージャー",
    quote: "部下が使い始めたのを見て焦りました。部下を信頼するのと同じで、AIにも具体的な仕事を振ってみたら、提案書の骨子を作るのが劇的に速くなって。今は強力な参謀がいる感覚です。",
  },
  {
    role: "30代・フリーランスデザイナー",
    quote: "AIに仕事を奪われると思って怖かった。でも使ってみたら、アイデア出しの壁打ち相手として最強でした。デザインそのものは人間がやるけど、方向性を考えるスピードが3倍になった感じ。恐れるより使ったほうがいい。",
  },
  {
    role: "60代・定年退職後のパート勤務",
    quote: "孫にChatGPTを教えてもらいました。最初は変な答えが返ってきて笑ってましたが、旅行の計画を相談したらすごく的確なプランを出してくれて感動。今は趣味の俳句を一緒に推敲してます。",
  },
] as const;

const privacySettings = [
  {
    tool: "ChatGPT（OpenAI）",
    steps: "左下のアカウント名 → Settings → Data Controls → 「Improve the model for everyone」をオフにする",
    note: "この設定をオフにすると、あなたの会話はAIの学習には使われません。「Temporary Chat」モードを使えば、履歴にも残りません。",
    url: "https://help.openai.com/en/articles/7730893-data-controls-faq",
  },
  {
    tool: "Claude（Anthropic）",
    steps: "左下のアカウント名 → Settings → Privacy → 学習利用の設定を確認しオフにする",
    note: "2025年8月に個人プラン（Free/Pro/Max）のデフォルトが「学習利用オン」に変更されました。必ず設定を確認してください。",
    url: "https://www.anthropic.com/news/updates-to-our-consumer-terms",
  },
  {
    tool: "Gemini（Google）",
    steps: "Googleアカウント → データとプライバシー → Geminiアプリのアクティビティ → オフにする",
    note: "オフにしても、安定性とセキュリティのため最大72時間はデータが保持される場合があります。",
    url: "https://support.google.com/gemini/answer/13594961",
  },
] as const;

export default function AiAnxietyOvercomeGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32 overflow-x-clip">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIが怖い・難しいを乗り越えるガイド" },
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
          {/* 装飾的な背景 */}
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
            「AIが怖い・難しい」を<br className="hidden sm:block" />乗り越える安心スタートガイド2026
          </h1>
          
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-slate-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Published on</p>
                <time className="text-sm font-semibold text-slate-700">2026年2月21日</time>
              </div>
            </div>
            
            <CopyAsMarkdownButton
              title="「AIが怖い・難しい」を乗り越える安心スタートガイド2026"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
          
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-50/50 border border-slate-100 relative">
            <Quote className="absolute top-6 right-8 h-12 w-12 text-slate-200 -z-10 opacity-50" />
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 font-medium">
              「AIって難しそう」「情報が漏れたら怖い」「仕事がなくなるかも」——こうした不安を感じるのは、あなただけではありません。
              2025年の調査では、日本人の72.6%がAIの進化に対して不安を感じていると回答しています。しかしその不安の多くは、AIを実際に使ったことがない段階で生まれています。
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              この記事では、5つの代表的な不安にデータと公式情報で正直にお答えし、「最初の3日間」で何をすればいいかを具体的にご案内します。一緒に、最初の一歩を踏み出してみましょう。
            </p>
          </div>
        </motion.header>

        <div data-seo-internal-links="true" className="mt-12 p-6 rounded-2xl border border-will-lighter bg-will-lighter/20 flex flex-wrap items-center gap-y-3 gap-x-1">
          <BookOpen className="h-4 w-4 text-will-primary mr-2" />
          <span className="text-sm font-bold text-slate-500 mr-2">関連テーマ：</span>
          <Link href="/academy/blog/ai-for-non-engineers" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">非エンジニア向けAI活用</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">スマホ開始ガイド</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">最初の30日ガイド</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/what-is-generative-ai" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">生成AIとは？</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-beginners-guide-over-50" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">50代からのAI</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/how-to-ask-ai-beginners" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">AIへの聞き方</Link>
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
              <span>AIは仕事を「奪う」のではなく<strong>「変える」</strong>。WEFの予測では2030年までに純増+7,800万の雇用が生まれる</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>ChatGPT・Claude・Geminiは無料で始められ、プライバシー設定で<strong>学習利用をオフ</strong>にできる</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>使い方はLINEと同じ感覚——日本語で話しかけるだけ。最初の3日間の具体ステップで始められる</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>AIの間違い（ハルシネーション）は減少傾向。重要な情報は一次ソースで確認する習慣をつければ安全</span>
            </li>
          </ul>
        </motion.section>

        {/* AIが怖いと感じるのは自然なこと */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="why-anxious" className="scroll-mt-28">
            AIが怖いと感じるのは自然なこと
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              まず伝えたいのは、<strong className="text-will-primary">AIに不安を感じること自体はまったく普通の反応</strong>だということです。
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              2025年4月、男女500人を対象にした調査では、72.6%が「AIの進化に恐怖や不安を感じる」と回答しました。不安の内訳は「フェイク情報の増加」が34.2%、「人間の仕事がなくなる」が27.8%、「人間の能力が低下する」が17.6%。
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-slate-300">
              <p className="text-base leading-relaxed text-slate-700 italic">
                興味深いのは、<strong>回答者の35%が「不安のきっかけとなる具体的な経験がない」</strong>と答えている点です。つまり、多くの不安は実体験ではなく、ニュースやSNSで見聞きした情報から生まれています。
              </p>
            </div>
            <p className="text-base leading-relaxed text-slate-600">
              BCGの「AI at Work 2025」調査でも、日本のAI活用率は51%でAPAC最低水準。「使ったことがないから怖い」→「怖いから使わない」という循環が起きています。
            </p>
            <p className="text-base leading-relaxed text-slate-600 font-medium">
              この記事は、その循環を一緒に抜け出すためのガイドです。不安を否定するのではなく、一つひとつ丁寧に向き合って、安心できる材料を揃えていきましょう。
            </p>
            <p className="mt-3 flex items-center gap-2 text-xs text-slate-400">
              <AlertCircle className="h-3 w-3" />
              出典：PR TIMES（2025年4月）｜BCG: AI at Work 2025 日本語版
            </p>
          </div>
        </motion.section>

        {/* 5つの不安と正直な答え */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="five-anxieties" className="scroll-mt-28">
            AIへの5つの不安と、正直な答え
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            不安はあいまいなままだと大きく見えます。一つずつ分解して、データと事実で向き合ってみましょう。
          </p>
          <div className="mt-12 space-y-12">
            {fiveAnxieties.map((item) => (
              <section key={item.id} id={item.id} className="point-box scroll-mt-28 group hover:shadow-elevated transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-soft group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 border-none m-0">{item.question}</h4>
                </div>
                <div className="mt-4 whitespace-pre-line text-base leading-[1.8] text-slate-700">{item.answer}</div>
                {item.sources.length > 0 && (
                  <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap gap-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sources:</span>
                    {item.sources.map((src) => (
                      <a key={src.url} href={src.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-500 underline decoration-slate-300 underline-offset-4 hover:text-will-primary transition-colors">
                        {src.label}
                      </a>
                    ))}
                  </div>
                )}
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
          <MidArticleCtaBox slug="ai-anxiety-overcome-guide" />
        </motion.section>

        {/* 最初の3日間 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="first-3-days" className="scroll-mt-28">
            最初の3日間でやること
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            「いつか始めよう」だといつまでも始まりません。ここでは「今日から3日間」の具体ステップをご案内します。必要なのはスマホかパソコンと、10〜15分の時間だけです。
          </p>
          <div className="mt-12 space-y-12 relative">
            {/* 進行状況を示すライン */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-will-primary via-will-secondary to-will-tertiary opacity-10 hidden sm:block" />
            
            {daySteps.map((day, idx) => (
              <section key={day.day} className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-will-primary text-white font-black text-2xl shadow-floating shadow-will-primary/20">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 m-0 border-none pb-0">{day.day}</h3>
                    <div className="mt-1 flex items-center gap-2 text-sm font-bold text-will-primary">
                      <Clock className="h-4 w-4" />
                      <span>{day.time}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid gap-6 sm:ml-20">
                  {day.steps.map((step) => (
                    <div key={step.title} className="rounded-2xl bg-slate-50 p-6 border border-slate-100 hover:bg-white hover:shadow-soft transition-all duration-300">
                      <h4 className="text-base font-bold text-slate-900 m-0 border-none flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-will-primary/40" />
                        {step.title}
                      </h4>
                      <p className="mt-3 text-base leading-[1.8] text-slate-600">{step.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-will-primary/5 to-will-secondary/5 border border-will-primary/10">
            <p className="text-lg leading-relaxed text-slate-700 font-medium">
              3日間が終わるころには、「AIって難しい」が「AIって意外とふつう」に変わっているはずです。
            </p>
            <Link href="/academy/blog/chatgpt-prompt-beginner" className="mt-6 inline-flex items-center gap-2 text-will-primary font-bold hover:gap-3 transition-all">
              <span>次は「ChatGPTプロンプトの書き方」へ進む</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>

        {/* 先輩たちのエピソード */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="stories" className="scroll-mt-28">
            先輩たちの「最初は怖かった」エピソード
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            実際にAIを使い始めた方たちの声をご紹介します。最初は皆さん、同じように不安を感じていました。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {stories.map((story) => (
              <blockquote key={story.role} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-100 group-hover:bg-will-primary transition-colors duration-300" />
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-will-lighter flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-will-primary" />
                  </div>
                  <span className="text-xs font-bold text-will-primary tracking-widest uppercase">{story.role}</span>
                </div>
                <p className="text-base leading-[1.8] text-slate-700 font-medium relative">
                  <Quote className="absolute -left-2 -top-2 h-8 w-8 text-slate-100 -z-10" />
                  {story.quote}
                </p>
              </blockquote>
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-slate-400 font-medium italic">
            <Sparkles className="h-3 w-3" />
            AIリブートが収集した利用者の声をもとに再構成したエピソードです。
          </p>
        </motion.section>

        {/* プライバシー設定 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="privacy-settings" className="scroll-mt-28">
            安心して使うためのプライバシー設定
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            AIを使う前に、この設定だけは済ませておきましょう。どのツールも1〜2分で完了します。
          </p>
          <div className="mt-10 grid gap-6">
            {privacySettings.map((item) => (
              <section key={item.tool} className="rounded-2xl border border-slate-100 bg-slate-50/30 p-8 hover:bg-white hover:shadow-soft transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900 m-0 border-none pb-0">{item.tool}</h3>
                  <Lock className="h-5 w-5 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="shrink-0 flex h-6 w-16 items-center justify-center rounded bg-slate-200 text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Setting</span>
                    <p className="text-base font-semibold text-slate-800 leading-relaxed">{item.steps}</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="shrink-0 flex h-6 w-16 items-center justify-center rounded bg-emerald-100 text-[10px] font-bold text-emerald-700 uppercase tracking-tighter">Benefit</span>
                    <p className="text-sm leading-relaxed text-slate-600">{item.note}</p>
                  </div>
                </div>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-will-primary uppercase tracking-widest transition-colors">
                  Check official doc <ArrowRight className="h-3 w-3" />
                </a>
              </section>
            ))}
          </div>
          
          <div className="caution-box mt-12 bg-orange-50/30 border-orange-100 relative group overflow-hidden">
            <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck className="h-40 w-40 text-orange-500" />
            </div>
            <h4 className="flex items-center gap-2 text-orange-900 border-none">
              <AlertCircle className="h-5 w-5" />
              共通の基本ルール
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                "氏名・住所・電話番号・クレジットカード番号は入力しない",
                "社内の機密情報や顧客情報は入力しない",
                "会社にAI利用ガイドラインがある場合はそちらに従う"
              ].map((text) => (
                <li key={text} className="flex items-start gap-3 text-base leading-relaxed text-orange-800/80">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-400" />
                  <span className="font-semibold">{text}</span>
                </li>
              ))}
            </ul>
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
                <dd className="mt-4 pl-11 text-base leading-relaxed text-slate-600 flex items-start gap-4">
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
            まとめ：一歩踏み出した人だけが見える景色
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-700 font-medium">
            この記事では、AIに対する5つの代表的な不安を一つずつ整理しました。
          </p>
          <div className="mt-10 grid gap-4">
            {[
              "仕事は「奪われる」のではなく「変える」——WEF/ILOのデータが示すとおりです",
              "プライバシーは設定1つで守れます",
              "使い方は日本語で話しかけるだけ。専門知識は不要です",
              "AIの間違いは減っていますが、重要な情報は人が確認するのが基本です",
              "無料プランだけで十分に試せます"
            ].map((text) => (
              <div key={text} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-50 shadow-subtle">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-base font-semibold text-slate-700">{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              不安は、知ることで小さくなります。そして、触れることで消えていきます。
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              あなたが「Day 1」を始めるのに、特別な準備は必要ありません。ChatGPTを開いて「こんにちは」と打つだけです。その小さな一歩が、半年後の働き方を変えるかもしれません。
            </p>
            <p className="text-2xl font-black leading-tight text-slate-900 tracking-tight">
              AIで人生をリブートする——<br />その最初の一歩を、今日踏み出してみませんか。
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
            title="AIの第一歩を、一人で悩まないでください"
            description="「この記事を読んだけど、まだ不安がある」「自分に合った始め方を相談したい」——そんな方のために、LINEで無料相談を受け付けています。AIリブートアカデミーは経産省リスキリング補助金対象の100日間プログラム。まずは気軽にご質問ください。"
            buttonLabel="LINEで気軽に相談する（登録無料）"
          />
        </motion.section>

        {/* CTA：次に学ぶ */}
        <motion.section
          className="mt-24 pt-16 border-t border-slate-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="academy-cta" className="scroll-mt-28 flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-will-primary" />
            次のステップ：もっとAIを活用したくなったら
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            3日間の体験で「もっと使いたい」と感じたら、次のステップに進んでみましょう。
            プロンプトの書き方を学ぶと、AIの回答品質が格段に上がります。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-slate-900 px-8 py-5 text-lg font-bold text-white shadow-elevated transition-all hover:scale-[1.02] hover:bg-slate-800 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                プロンプトの書き方を学ぶ
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
              { href: "/academy/blog/chatgpt-start-guide-smartphone", label: "ChatGPTをスマホで始める方法" },
              { href: "/academy/blog/chatgpt-claude-beginners-guide", label: "ChatGPT・Claude初心者ガイド" },
              { href: "/academy/blog/chatgpt-prompt-beginner", label: "ChatGPTプロンプトの書き方入門" },
              { href: "/academy/blog/ai-for-non-engineers", label: "文系・非エンジニアのAI活用ガイド" },
              { href: "/academy/blog/how-to-learn-generative-ai", label: "生成AIの学び方【2026年版】" },
              { href: "/academy/blog/ai-beginners-guide-over-50", label: "50代からのAI初心者ガイド" },
              { href: "/academy/blog/ai-hallucination-fact-check-guide", label: "AIのハルシネーション対策ガイド" },
              { href: "/academy/blog/reskilling-over-40", label: "40代・50代からのAIリスキリング" },
              { href: "/academy/blog/ai-data-leak-patterns", label: "生成AIで情報漏えいが起きるパターン" },
              { href: "/academy", label: "AIリブートアカデミー TOP" }
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
