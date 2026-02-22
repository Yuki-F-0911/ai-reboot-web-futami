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

const keywordTags = ["生成AI 使いこなす コツ", "ChatGPT うまく使えない", "AI 使い方 初心者", "生成AI 挫折"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "everyone-struggles", label: "「うまく使えない」は全員が通る道" },
  { id: "habit-1", label: "習慣1：最初の質問は「雑談」から始めた" },
  { id: "habit-2", label: "習慣2：「もう少し○○して」と会話を重ねた" },
  { id: "habit-3", label: "習慣3：面倒な作業からAIに任せた" },
  { id: "habit-4", label: "習慣4：3つのツールを無料で試した" },
  { id: "habit-5", label: "習慣5：週に1つ新しい使い方を試した" },
  { id: "mindset", label: "挫折を防ぐ3つのマインドセット" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const conversationExamples = {
  casual: [
    { role: "user" as const, text: "今日やる気が出ないんだけど、なんかいい方法ない？" },
    { role: "ai" as const, text: "やる気が出ない日、ありますよね。いくつかアプローチがありますが、まず今の状況を教えてもらえますか？\n・体が疲れている感じ？\n・やることが多すぎて手がつかない？\n・なんとなくモヤモヤしている？" },
    { role: "user" as const, text: "やることが多すぎて何から手をつけていいかわからない感じ" },
    { role: "ai" as const, text: "なるほど、タスクが多いと脳がフリーズしますよね。まず「今日やること」を全部教えてもらえますか？一緒に優先順位をつけましょう。5分で頭がスッキリしますよ。" },
  ],
  refine: [
    { role: "user" as const, text: "取引先へのお断りメールを書いて" },
    { role: "ai" as const, text: "株式会社○○ ○○様\n\nいつもお世話になっております。\nこのたびはご提案いただきありがとうございます。\n社内で慎重に検討いたしましたが、\n誠に残念ながら今回は見送らせていただきたく..." },
    { role: "user" as const, text: "もう少し柔らかい表現にして。あと、今後も関係を続けたい気持ちを入れて" },
    { role: "ai" as const, text: "株式会社○○ ○○様\n\nいつも大変お世話になっております。\nこのたびは素晴らしいご提案をいただき、心より感謝申し上げます。\n社内にて検討を重ねましたが、現時点では...\n\n今後も○○様とのお取引を大切にしていきたいと考えておりますので、\nまた機会がございましたらぜひお声がけいただけますと幸いです。" },
  ],
  tasks: [
    {
      category: "メール・文書作成",
      before: "30分",
      after: "5分",
      prompt: "以下の会議メモから議事録を作ってください。参加者、決定事項、次のアクションに分けて整理して。\n\n（会議メモを貼り付け）",
    },
    {
      category: "情報整理・リサーチ",
      before: "2時間",
      after: "15分",
      prompt: "「リモートワーク 生産性 調査 2025」について、最新の調査結果を3つ教えてください。それぞれ調査元・サンプル数・主な結論を含めてください。",
    },
    {
      category: "アイデア出し",
      before: "1時間",
      after: "10分",
      prompt: "社内の忘年会の企画を考えています。予算は一人5,000円、参加者30人、会場は都内です。ユニークなテーマを5つ提案して。それぞれ具体的な進行イメージも添えて。",
    },
  ],
} as const;

const toolComparison = [
  {
    name: "ChatGPT",
    company: "OpenAI",
    freeModel: "GPT-5.2（5時間10回まで）→ GPT-5 mini（継続利用可）",
    strength: "万能型。画像生成・音声会話・データ分析に対応。利用者が最多で情報が豊富",
    bestFor: "迷ったらまずこれ。汎用的なビジネス用途全般に強い",
    url: "https://chatgpt.com",
  },
  {
    name: "Claude",
    company: "Anthropic",
    freeModel: "Sonnet 4.6（2026年2月17日〜標準モデル）",
    strength: "長文の文章品質が高い。指示の意図を正確に汲む。Notion・Slack連携にも対応",
    bestFor: "文章作成・企画書・レポートなど「書く仕事」が多い人",
    url: "https://claude.ai",
  },
  {
    name: "Gemini",
    company: "Google",
    freeModel: "Gemini 3 Flash（回数無制限）＋ 3 Pro（1日3回まで）",
    strength: "Gmail・Googleドキュメントとの連携が強み。動画・長文の処理にも対応",
    bestFor: "Google Workspaceをメインで使っている人",
    url: "https://gemini.google.com",
  },
] as const;

const weeklyChallenge = [
  { week: "Week 1", task: "メールの下書きをAIに作ってもらう", detail: "返信に悩むメールを1通、AIに下書きさせてみる" },
  { week: "Week 2", task: "会議メモから議事録を自動生成する", detail: "箇条書きのメモを貼り付けて「議事録にして」と頼む" },
  { week: "Week 3", task: "プレゼン資料の構成案を作る", detail: "テーマと対象者を伝えて「スライド10枚の構成案を出して」" },
  { week: "Week 4", task: "Excelデータの分析をAIに相談する", detail: "売上データを貼り付けて「傾向と改善案を教えて」と聞く" },
  { week: "Week 5", task: "英語メールの翻訳＋ニュアンス調整", detail: "「カジュアルすぎず、でも堅すぎないトーンで」と指示してみる" },
  { week: "Week 6", task: "SNS投稿のアイデア出し", detail: "商品やサービスの情報を伝えて「投稿案を5パターン」" },
  { week: "Week 7", task: "自分の業務マニュアルを作る", detail: "日々の作業を口語で説明し「マニュアル化して」と頼む" },
  { week: "Week 8", task: "ブレスト相手としてAIを使う", detail: "新しい企画のアイデアを壁打ち。「批判的な視点でフィードバックして」" },
] as const;

const mindsets = [
  {
    title: "「80点の下書き」を目指す",
    body: "AIに完璧なアウトプットを求めると挫折します。AIの役割は「80点の下書きを高速で作ること」。残りの20点は自分で調整する——この分業の感覚を持つだけで、AIの使い心地が劇的に変わります。",
  },
  {
    title: "「失敗」は存在しない",
    body: "AIとの対話に失敗はありません。変な回答が返ってきたら、それは「この聞き方だとこうなるのか」という発見です。何度でもやり直せますし、どんな質問をしても怒られません。気軽に試行錯誤できるのがAIの最大の長所です。",
  },
  {
    title: "「人に聞けないこと」をAIに聞く",
    body: "「こんなこと聞いたら恥ずかしい」——仕事ではそう感じる場面がありますよね。AIには遠慮は不要です。基本的な用語の意味、メールの敬語の使い方、Excelの関数——何を聞いても恥ずかしくないのがAIの素晴らしさです。",
  },
] as const;

function ConversationExample({ messages }: { messages: readonly { role: "user" | "ai"; text: string }[] }) {
  return (
    <div className="mt-4 space-y-3 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
      {messages.map((msg, i) => (
        <div key={i} className={`flex gap-3 ${msg.role === "user" ? "" : ""}`}>
          <div
            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
              msg.role === "user" ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"
            }`}
          >
            {msg.role === "user" ? "You" : "AI"}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-gray-500">{msg.role === "user" ? "あなた" : "AIの回答"}</p>
            <p className="mt-1 whitespace-pre-line text-sm leading-7 text-gray-700">{msg.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AiMasteryTipsForBeginnersPage({ faqItems }: Props) {
  return (
    <main className="bg-[#f8f8f7] pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AIを使えるようになった人の5つの習慣" },
          ]}
        />

        {/* ヘッダー */}
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
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="生成AIを「使えるようになった人」がやっていた5つのこと"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1
            className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            生成AIを&ldquo;使えるようになった人&rdquo;がやっていた5つのこと
          </h1>
          <p className="mt-2 text-lg text-gray-600" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            挫折しないためのリアルな始め方
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPTを使ってみたけど、思ったほど便利じゃなかった」「何を聞けばいいかわからなくて、結局使わなくなった」——そんな経験はありませんか？
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            安心してください。<strong>最初からAIをうまく使えた人は、ほぼいません。</strong>
            使えるようになった人たちには共通する「やり方」がありました。特別な才能でもITスキルでもなく、ちょっとした習慣の違いです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事では、AIを使いこなせるようになった人たちが実際にやっていた5つの行動パターンを、
            コピペで使えるプロンプト例つきで紹介します。2026年2月時点のChatGPT・Claude・Geminiの最新情報も反映しています。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/ai-beginners-guide-over-50" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            50代からのAI初心者ガイド
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
          <Link href="/academy/blog/ai-hallucination-fact-check-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIのハルシネーション対策ガイド
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
        </p>
        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ（結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              AIを使いこなす人は「完璧な指示」ではなく「雑談」から始めている——気軽に話しかけることがスタートライン
            </li>
            <li className="pl-1 marker:text-gray-500">
              一発で正解を求めず「もう少し○○して」と会話を重ねる。追加指示こそがAI活用のコア技術
            </li>
            <li className="pl-1 marker:text-gray-500">
              身近な「面倒な作業」（メール・議事録・リサーチ）からAIに任せるのが挫折しない秘訣
            </li>
            <li className="pl-1 marker:text-gray-500">
              ChatGPT・Claude・Geminiは3つとも無料で使える。同じ質問を投げ比べて「自分に合うツール」を見つける
            </li>
            <li className="pl-1 marker:text-gray-500">
              週に1つ新しい使い方を試す——この小さな習慣が、3か月後の大きな差になる
            </li>
          </ul>
        </motion.section>

        {/* 「うまく使えない」は全員が通る道 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="everyone-struggles" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            「うまく使えない」は、全員が通る道
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            日本リサーチセンター（NRC）の2025年9月調査によると、生成AIの利用経験率は38.9%に達しました。2023年3月の3.4%から、2年半で35ポイント以上の急増です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            一方で、MM総研の調査では生成AIサービスの個人利用率は21.8%にとどまっています。この差が意味するのは、<strong>「試してみたけど、使い続けていない人」がかなりの割合で存在する</strong>ということです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            よくある挫折パターンは3つあります。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: "パターン1", title: "何を聞けばいいかわからない", desc: "画面を開いたものの、入力欄を前に固まってしまう" },
              { label: "パターン2", title: "期待した回答が返ってこない", desc: "一度試して「使えない」と判断し、そのままアプリを閉じる" },
              { label: "パターン3", title: "仕事にどう活かすかイメージできない", desc: "すごそうだけど自分の業務との接点が見つからない" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="text-xs font-semibold text-will-primary">{item.label}</p>
                <p className="mt-2 text-base font-bold text-gray-900">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            もしあなたがこのどれかに当てはまっていても、それは普通のことです。
            <strong>AIを使いこなしている人も、最初はまったく同じ場所からスタートしています。</strong>
            違いは、ちょっとした「やり方」を知っていたかどうかだけ。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ここからは、使えるようになった人たちに共通する5つの行動パターンを、具体的なプロンプト例とともに紹介していきます。
          </p>
          <p className="mt-3 text-xs text-gray-500">
            出典：
            <a href="https://www.nrc.co.jp/report/251009.html" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">
              NRC: 生成AIについて 2025年9月調査
            </a>
            ｜
            <a href="https://www.m2ri.jp/release/detail.html?id=691" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">
              MM総研: 生成AIサービスの個人利用率調査
            </a>
          </p>
        </motion.section>

        {/* 習慣1 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="habit-1" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            習慣1：最初の質問は「雑談」から始めた
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを使えるようになった人に「最初に何を聞きましたか？」と尋ねると、意外な答えが返ってきます。「完璧なビジネスプロンプト」ではなく、<strong>「今日やる気が出ないんだけど」「おすすめのランチ教えて」</strong>のような雑談です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            これには理由があります。最初から「完璧な指示を出さなきゃ」と構えると、入力欄の前で固まってしまう。でも雑談なら、LINEで友達に話しかけるのと同じ感覚で始められます。
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">実際の会話例：「やる気が出ない」とAIに相談</h3>
          <ConversationExample messages={conversationExamples.casual} />

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">ポイント</p>
            <p className="mt-2 text-sm leading-7 text-amber-900">
              最初の一言は何でもOKです。「こんにちは」だけでも構いません。大切なのは<strong>「完璧な質問を考える前に、まず話しかけてみる」</strong>こと。AIとの対話に正解はなく、気軽に始めた人ほど続いています。
            </p>
          </div>

          <h3 className="mt-8 text-lg font-bold text-gray-900">コピペで使える「最初の一言」5選</h3>
          <div className="mt-4 space-y-2">
            {[
              "今日の仕事でやることが多すぎて困ってます。優先順位を一緒に考えてもらえますか？",
              "来週の歓迎会で乾杯の挨拶をすることになりました。カジュアルで30秒くらいの例文を作って。",
              "最近話題のAIニュースを3つ、初心者にもわかるように教えて。",
              "私は営業職です。AIを仕事に活かしたいのですが、何から始めればいいですか？",
              "昨日読んだ本の感想をSNSに投稿したいです。〇〇という本について、共感を呼ぶ投稿文を考えて。",
            ].map((prompt, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-white px-4 py-3">
                <p className="text-sm leading-7 text-gray-700">
                  <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-will-primary/10 text-xs font-bold text-will-primary">{i + 1}</span>
                  {prompt}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 習慣2 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="habit-2" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            習慣2：「もう少し○○して」と会話を重ねた
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを「うまく使えない」と感じる人の多くが、<strong>1回の質問で完璧な答えを期待しています</strong>。
            でも、AIを使いこなしている人はそうしません。最初の回答を「たたき台」と考え、そこから会話を重ねて理想のアウトプットに近づけていきます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            これは「イテレーション（反復改善）」と呼ばれるAI活用の核心テクニックです。
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">実際の会話例：お断りメールを一緒に磨き上げる</h3>
          <ConversationExample messages={conversationExamples.refine} />

          <h3 className="mt-8 text-lg font-bold text-gray-900">使える追加指示フレーズ10選</h3>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {[
              "もう少し短くして（3行以内で）",
              "もっとカジュアルな表現にして",
              "もっとフォーマルにして",
              "具体例を3つ追加して",
              "メリットとデメリットに分けて",
              "初心者にもわかる言葉で言い換えて",
              "箇条書きで整理して",
              "結論を最初に持ってきて",
              "〇〇の観点を加えて",
              "ターゲットを30代の会社員に変えて",
            ].map((phrase, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-white px-4 py-2.5">
                <p className="text-sm text-gray-700">
                  <span className="mr-2 text-xs font-bold text-will-primary">{i + 1}.</span>
                  {phrase}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">覚えておきたいこと</p>
            <p className="mt-2 text-sm leading-7 text-blue-900">
              AIとの対話は「1問1答」ではなく「会話のキャッチボール」です。回答に対して「もう少し○○して」と伝えるだけで、AIの回答品質は驚くほど上がります。<strong>追加指示の回数に制限はない</strong>ので、納得がいくまで何度でも調整しましょう。
            </p>
          </div>
        </motion.section>

        {/* 習慣3 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="habit-3" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            習慣3：自分の仕事の「面倒な作業」からAIに任せた
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「AIで何ができるか」を考えすぎると、逆に動けなくなります。使いこなしている人は、もっとシンプルに始めていました。
            <strong>「自分の仕事で一番面倒だと感じている作業」を1つ選んで、それをAIに任せてみた</strong>のです。
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">AIに任せて劇的に時短できる3つの業務</h3>
          <div className="mt-4 space-y-4">
            {conversationExamples.tasks.map((task) => (
              <div key={task.category} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h4 className="text-base font-bold text-gray-900">{task.category}</h4>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-red-100 px-2.5 py-1 font-semibold text-red-700">手作業 {task.before}</span>
                    <span className="text-gray-400">→</span>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 font-semibold text-emerald-700">AI活用 {task.after}</span>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-gray-50 p-4">
                  <p className="text-xs font-semibold text-gray-500">コピペで使えるプロンプト例</p>
                  <p className="mt-2 whitespace-pre-line text-sm leading-7 text-gray-700">{task.prompt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">始め方のコツ</p>
            <p className="mt-2 text-sm leading-7 text-amber-900">
              「一番高度な使い方」ではなく、<strong>「一番面倒な作業」から始める</strong>のがポイントです。面倒だった作業が楽になる体験こそ、AIを使い続けるモチベーションになります。まずは今週の業務で「これ、毎回だるいな」と感じるものを1つ選んでみてください。
            </p>
          </div>
        </motion.section>

        {/* 中間CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="ai-mastery-tips-for-beginners" />
        </motion.section>

        {/* 習慣4 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="habit-4" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            習慣4：3つのツールを無料で試して「自分に合うもの」を見つけた
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「ChatGPTだけ使っていればいい」と思っていませんか？ もちろんChatGPTは素晴らしいツールですが、AIを使いこなしている人は<strong>最低でも2〜3つのツールを試しています</strong>。なぜなら、ツールごとに得意分野が異なるからです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            以下は2026年2月時点の3大AIツールの無料プラン比較です。すべて無料で、アカウント登録だけで使い始められます。
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm leading-6 text-gray-700 sm:text-base">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-900">ツール</th>
                    <th className="px-4 py-3 font-semibold text-gray-900">無料で使えるモデル</th>
                    <th className="px-4 py-3 font-semibold text-gray-900">強み</th>
                    <th className="px-4 py-3 font-semibold text-gray-900">こんな人向け</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {toolComparison.map((tool) => (
                    <tr key={tool.name}>
                      <td className="px-4 py-4 font-semibold text-gray-900 whitespace-nowrap">
                        <a href={tool.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-will-primary">
                          {tool.name}
                        </a>
                        <br />
                        <span className="text-xs font-normal text-gray-500">{tool.company}</span>
                      </td>
                      <td className="px-4 py-4 text-sm">{tool.freeModel}</td>
                      <td className="px-4 py-4 text-sm">{tool.strength}</td>
                      <td className="px-4 py-4 text-sm">{tool.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            ※ 2026年2月22日時点の情報です。各社の公式サイト（
            <a href="https://chatgpt.com/pricing" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">ChatGPT</a>・
            <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">Claude</a>・
            <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">Gemini</a>
            ）で最新情報をご確認ください。
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">30分で3つ全部試す方法</h3>
          <div className="mt-4 space-y-3">
            {[
              { step: "1", time: "10分", title: "同じ質問を3つに投げる", body: "たとえば「来週の社内プレゼンの構成案を作って。テーマは〇〇、聴衆は部長クラス10名、持ち時間15分」と同じ文面を3つのツールに送ります。" },
              { step: "2", time: "10分", title: "回答を比較する", body: "構成の切り口、言葉遣い、具体性——それぞれ個性があることがわかるはずです。「この回答が好き」と感じたツールが、あなたに合っているツールです。" },
              { step: "3", time: "10分", title: "追加指示を試す", body: "気に入った回答に「もう少しカジュアルに」「データを入れたスライドも提案して」と追加指示を出してみましょう。ツールごとの対応力の違いが体感できます。" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-will-primary/10">
                  <span className="text-sm font-bold text-will-primary">{item.step}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">{item.time}</span>
                  </div>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">有料プランは必要？</p>
            <p className="mt-2 text-sm leading-7 text-blue-900">
              最初は無料プランで十分です。毎日使って「回数制限に頻繁に引っかかる」ようになったら、そのときに課金を検討してください。有料プランはChatGPT Plus・Claude Proともに月額約3,000円（$20）、Gemini AI Proは月額2,900円です。
              詳しくは
              <Link href="/academy/blog/ai-free-plan-comparison-2026" className="text-blue-700 underline underline-offset-4 hover:text-blue-900">
                無料プラン比較記事
              </Link>
              をご覧ください。
            </p>
          </div>
        </motion.section>

        {/* 習慣5 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="habit-5" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            習慣5：週に1つ新しい使い方を試す習慣をつけた
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを使いこなしている人に共通するもう1つの特徴は、<strong>「小さな実験」を継続している</strong>ことです。毎日使わなくてもいい。週に1回、「今まで試したことのない使い方」を1つだけ試す。この習慣が、3か月後のAIスキルを大きく変えます。
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">8週間チャレンジ：週1の「新しい使い方」リスト</h3>
          <div className="mt-4 space-y-3">
            {weeklyChallenge.map((item) => (
              <div key={item.week} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100">
                  <span className="text-xs font-bold text-orange-700">{item.week.replace("Week ", "W")}</span>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">{item.task}</h4>
                  <p className="mt-1 text-sm leading-7 text-gray-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">続けるコツ</p>
            <p className="mt-2 text-sm leading-7 text-amber-900">
              全部やる必要はありません。<strong>興味があるものから1つ選んで試すだけ</strong>で十分です。「やってみた→便利だった/思ったほどでもなかった」という体験の積み重ねが、あなた独自のAI活用スタイルを作っていきます。
            </p>
          </div>
        </motion.section>

        {/* 挫折を防ぐマインドセット */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="mindset" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            挫折を防ぐ3つのマインドセット
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            5つの習慣と同じくらい大切なのが、AIに対する「考え方」です。この3つを意識するだけで、挫折する確率がぐっと下がります。
          </p>
          <div className="mt-6 space-y-4">
            {mindsets.map((item, i) => (
              <div key={item.title} className="rounded-xl border-2 border-will-primary/15 bg-white p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-8 text-gray-700">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
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
          className="mt-14 rounded-lg border border-gray-200 bg-white p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：「使えるようになった人」は、特別じゃなかった
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事で紹介した5つの習慣を振り返ります。
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1"><strong>雑談から始めた</strong>——完璧な指示より、まず話しかけること</li>
            <li className="pl-1"><strong>会話を重ねた</strong>——一発で完璧を求めず、追加指示で磨き上げる</li>
            <li className="pl-1"><strong>面倒な作業から任せた</strong>——身近な「だるい仕事」がAI活用のスタートライン</li>
            <li className="pl-1"><strong>3つのツールを試した</strong>——無料で比較して、自分に合うものを見つける</li>
            <li className="pl-1"><strong>週1で新しい使い方を試した</strong>——小さな実験の積み重ねがスキルになる</li>
          </ol>
          <p className="mt-5 text-base leading-8 text-gray-700">
            どれも特別なことではありません。プログラミングも英語も不要です。必要なのは、「今日、AIに1つ話しかけてみる」という小さな行動だけ。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            3か月後、あなたは「AIが使える人」になっています。そしてそのとき、「なんでもっと早く始めなかったんだろう」と思うはずです。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            最初の一歩は、今日のあなたの「雑談」から。
          </p>
        </motion.section>

        {/* LINE CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-free-plan-comparison-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude・Gemini 無料プランでどこまでできる？2026年2月最新比較
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを仕事で使い始めた人の「最初の30日」完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/how-to-learn-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-for-non-engineers" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                文系・非エンジニアのAI活用ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-beginners-guide-over-50" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                50代からのAI初心者ガイド｜スマホだけで始める活用法
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-templates-50" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトテンプレート50選｜仕事で使える例文集
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-voice-mode-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT音声モード活用ガイド｜移動中でも学べる実践法
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
