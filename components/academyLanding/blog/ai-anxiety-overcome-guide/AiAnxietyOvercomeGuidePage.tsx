"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
    question: "不安3：使いこなせない？難しくない？",
    answer: `AIを使うのに専門知識は不要です。ChatGPTもClaudeもGeminiも、LINEやメッセンジャーと同じ感覚で「文字を打って送るだけ」で動きます。

たとえば、ChatGPTを開いて「明日の会議で使う挨拶文を考えて」と打てば、それだけで回答が返ってきます。プログラミングも英語も必要ありません。

「プロンプト（指示文）が難しそう」と感じるかもしれませんが、最初はふつうの日本語で大丈夫です。「もっと短くして」「もう少しカジュアルに」と追加で指示すれば、AIが調整してくれます。

使いこなすコツは、最初から完璧な指示を出そうとしないこと。会話を重ねて、一緒に答えを作っていく感覚です。`,
    sources: [],
  },
  {
    id: "anxiety-hallucination",
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
    quote: "部下が使い始めたのを見て焦りました。でも実際に触ってみたら、提案書の骨子を作るのが劇的に速くなって。『もう少し具体的に』って追加で指示する感覚が、部下に仕事を振るのと似ていて意外と馴染みました。",
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
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
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
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="「AIが怖い・難しい」を乗り越える安心スタートガイド2026"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            「AIが怖い・難しい」を乗り越える安心スタートガイド2026
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月21日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIって難しそう」「情報が漏れたら怖い」「仕事がなくなるかも」——こうした不安を感じるのは、あなただけではありません。
            2025年の調査では、日本人の72.6%がAIの進化に対して不安を感じていると回答しています（PR
            TIMES/ビズヒッツ調査）。しかしその不安の多くは、AIを実際に使ったことがない段階で生まれています。
            この記事では、5つの代表的な不安にデータと公式情報で正直にお答えし、「最初の3日間」で何をすればいいかを具体的にご案内します。
            一緒に、最初の一歩を踏み出してみましょう。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/ai-for-non-engineers" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            非エンジニア向けAI活用
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTスマホ開始ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-first-30-days-work-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AI最初の30日ガイド
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
        </p>
        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ（AIO向け：結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              AIは仕事を「奪う」のではなく「変える」。WEFの予測では2030年までに純増+7,800万の雇用が生まれる
            </li>
            <li className="pl-1 marker:text-gray-500">
              ChatGPT・Claude・Geminiは無料で始められ、プライバシー設定で学習利用をオフにできる
            </li>
            <li className="pl-1 marker:text-gray-500">
              使い方はLINEと同じ感覚——日本語で話しかけるだけ。最初の3日間の具体ステップで始められる
            </li>
            <li className="pl-1 marker:text-gray-500">
              AIの間違い（ハルシネーション）は減少傾向。重要な情報は一次ソースで確認する習慣をつければ安全
            </li>
          </ul>
        </motion.section>

        {/* AIが怖いと感じるのは自然なこと */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="why-anxious" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIが怖いと感じるのは自然なこと
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            まず伝えたいのは、<strong>AIに不安を感じること自体はまったく普通の反応</strong>だということです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            2025年4月、男女500人を対象にした調査では、72.6%が「AIの進化に恐怖や不安を感じる」と回答しました。不安の内訳は「フェイク情報の増加」が34.2%、「人間の仕事がなくなる」が27.8%、「人間の能力が低下する」が17.6%。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            興味深いのは、<strong>回答者の35%が「不安のきっかけとなる具体的な経験がない」</strong>と答えている点です。つまり、多くの不安は実体験ではなく、ニュースやSNSで見聞きした情報から生まれています。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            BCGの「AI at Work 2025」調査でも、日本のAI活用率は51%でAPAC最低水準。「使ったことがないから怖い」→「怖いから使わない」という循環が起きています。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事は、その循環を一緒に抜け出すためのガイドです。不安を否定するのではなく、一つひとつ丁寧に向き合って、安心できる材料を揃えていきましょう。
          </p>
          <p className="mt-3 text-xs text-gray-500">
            出典：
            <a href="https://prtimes.jp/main/html/rd/p/000000029.000053076.html" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">
              PR TIMES: AI進化に対する恐怖や不安ランキング（2025年4月）
            </a>
            ｜
            <a href="https://web-assets.bcg.com/80/28/18c9f7e44966a7c286adae9a8e00/20250613-ai-at-work-2025-slides-japanese.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">
              BCG: AI at Work 2025 日本語版
            </a>
          </p>
        </motion.section>

        {/* 5つの不安と正直な答え */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="five-anxieties" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIへの5つの不安と、正直な答え
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            不安はあいまいなままだと大きく見えます。一つずつ分解して、データと事実で向き合ってみましょう。
          </p>
          <div className="mt-8 space-y-8">
            {fiveAnxieties.map((item) => (
              <section key={item.id} id={item.id} className="scroll-mt-28 rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900">{item.question}</h3>
                <div className="mt-4 whitespace-pre-line text-sm leading-8 text-gray-700">{item.answer}</div>
                {item.sources.length > 0 && (
                  <p className="mt-4 text-xs text-gray-500">
                    出典：
                    {item.sources.map((src, i) => (
                      <span key={src.url}>
                        {i > 0 && "｜"}
                        <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">
                          {src.label}
                        </a>
                      </span>
                    ))}
                  </p>
                )}
              </section>
            ))}
          </div>
        </motion.section>

        {/* 中間CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="ai-anxiety-overcome-guide" />
        </motion.section>

        {/* 最初の3日間 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="first-3-days" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            最初の3日間でやること（超具体的なステップ）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「いつか始めよう」だといつまでも始まりません。ここでは「今日から3日間」の具体ステップをご案内します。必要なのはスマホかパソコンと、10〜15分の時間だけです。
          </p>
          <div className="mt-8 space-y-10">
            {daySteps.map((day) => (
              <section key={day.day} className="rounded-xl border-2 border-will-primary/15 bg-will-lighter/30 p-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-gray-900">{day.day}</h3>
                  <span className="rounded-full bg-will-primary/10 px-3 py-1 text-xs font-semibold text-will-primary">{day.time}</span>
                </div>
                <div className="mt-5 space-y-4">
                  {day.steps.map((step) => (
                    <div key={step.title} className="rounded-lg bg-white p-4 shadow-subtle">
                      <h4 className="text-base font-semibold text-gray-900">{step.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-gray-700">{step.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            3日間が終わるころには、「AIって難しい」が「AIって意外とふつう」に変わっているはずです。もっと具体的な使い方を知りたくなったら、
            <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTプロンプトの書き方入門
            </Link>
            へ進んでみてください。
          </p>
        </motion.section>

        {/* 先輩たちのエピソード */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="stories" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            先輩たちの「最初は怖かった」エピソード
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            実際にAIを使い始めた方たちの声をご紹介します。最初は皆さん、同じように不安を感じていました。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {stories.map((story) => (
              <blockquote key={story.role} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm font-semibold text-will-primary">{story.role}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700 before:content-['「'] after:content-['」']">
                  {story.quote}
                </p>
              </blockquote>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">
            ※ AIリブートが収集した利用者の声をもとに、プライバシーに配慮して再構成したエピソードです。
          </p>
        </motion.section>

        {/* プライバシー設定 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="privacy-settings" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            安心して使うためのプライバシー設定（3ツール対応）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを使う前に、この設定だけは済ませておきましょう。どのツールも1〜2分で完了します。
          </p>
          <div className="mt-6 space-y-4">
            {privacySettings.map((item) => (
              <section key={item.tool} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.tool}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold">設定手順：</span>{item.steps}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.note}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs text-gray-500 underline hover:text-gray-700">
                  公式ドキュメントを確認する →
                </a>
              </section>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">共通の基本ルール</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-amber-900">
              <li className="pl-1 marker:text-amber-400">氏名・住所・電話番号・クレジットカード番号は入力しない</li>
              <li className="pl-1 marker:text-amber-400">社内の機密情報や顧客情報は入力しない</li>
              <li className="pl-1 marker:text-amber-400">会社にAI利用ガイドラインがある場合はそちらに従う</li>
            </ul>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
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

        {/* まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：一歩踏み出した人だけが見える景色
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事では、AIに対する5つの代表的な不安を一つずつ整理しました。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">仕事は「奪われる」のではなく「変わる」——WEF/ILOのデータが示すとおりです</li>
            <li className="pl-1 marker:text-gray-500">プライバシーは設定1つで守れます</li>
            <li className="pl-1 marker:text-gray-500">使い方は日本語で話しかけるだけ。専門知識は不要です</li>
            <li className="pl-1 marker:text-gray-500">AIの間違いは減っていますが、重要な情報は人が確認するのが基本です</li>
            <li className="pl-1 marker:text-gray-500">無料プランだけで十分に試せます</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            不安は、知ることで小さくなります。そして、触れることで消えていきます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            あなたが「Day 1」を始めるのに、特別な準備は必要ありません。ChatGPTを開いて「こんにちは」と打つだけです。その小さな一歩が、半年後の働き方を変えるかもしれません。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            AIで人生をリブートする——その最初の一歩を、今日踏み出してみませんか。
          </p>
        </motion.section>

        {/* LINE CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="AIの第一歩を、一人で悩まないでください"
            description="「この記事を読んだけど、まだ不安がある」「自分に合った始め方を相談したい」——そんな方のために、LINEで無料相談を受け付けています。AIリブートアカデミーは経産省リスキリング補助金対象の100日間プログラム。まずは気軽にご質問ください。"
            buttonLabel="LINEで気軽に相談する（登録無料）"
          />
        </motion.section>

        {/* CTA：次に学ぶ */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="academy-cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のステップ：もっとAIを活用したくなったら
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            3日間の体験で「もっと使いたい」と感じたら、次のステップに進んでみましょう。
            プロンプトの書き方を学ぶと、AIの回答品質が格段に上がります。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              プロンプトの書き方を学ぶ
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              AIリブートアカデミーを見る
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-for-non-engineers" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                文系・非エンジニアのAI活用ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/how-to-learn-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/reskilling-over-40" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                40代・50代からのAIリスキリング完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-data-leak-patterns" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIで情報漏えいが起きるパターン10選｜現場のNG例とルール
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
