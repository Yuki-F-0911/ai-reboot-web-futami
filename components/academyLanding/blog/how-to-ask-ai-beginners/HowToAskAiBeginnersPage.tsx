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

const keywordTags = [
  "ChatGPT 何を聞けばいい",
  "AI 質問の仕方",
  "ChatGPT 使い方 わからない",
  "生成AI 何ができる",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-stuck", label: "なぜ「何を聞けばいいかわからない」のか？" },
  { id: "pattern-1", label: "パターン1：知識を聞く" },
  { id: "pattern-2", label: "パターン2：相談する" },
  { id: "pattern-3", label: "パターン3：作業を頼む" },
  { id: "pattern-4", label: "パターン4：比較・判断の壁打ち" },
  { id: "pattern-5", label: "パターン5：深掘り・追加注文" },
  { id: "bad-question-ok", label: "「いい質問」じゃなくても大丈夫" },
  { id: "ten-ideas", label: "今日からすぐ試せる10の質問アイデア" },
  { id: "tips", label: "質問が上手くなる3つのコツ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const stuckReasons = [
  {
    icon: "🔍",
    title: "AIを「正解を教えてくれるもの」だと思っている",
    desc: "検索エンジンのように「1つの正解」を求めてしまう。AIは正解を出すのではなく、あなたと一緒に考えるパートナーです。",
  },
  {
    icon: "💎",
    title: "「すごい質問」をしなきゃいけないと思っている",
    desc: "「プロみたいな聞き方をしないとダメ」という思い込み。実は「今日の晩ご飯なに？」レベルの質問でまったくOKです。",
  },
  {
    icon: "🔄",
    title: "AIとの「対話」の経験がない",
    desc: "検索の延長で「1回入力→1回回答」と考えてしまう。AIは何度でもやり取りを続けられる「会話相手」です。",
  },
] as const;

const askPatterns = [
  {
    icon: "📚",
    title: "「〇〇について教えて」",
    subtitle: "知識を聞く",
    desc: "わからないことを質問する最もシンプルなパターン。検索と違い、あなたの理解レベルに合わせて説明してくれます。",
    examples: [
      { context: "生活", text: "ふるさと納税の仕組みを、小学生にもわかるように教えて" },
      { context: "仕事", text: "PDCAとOODAループの違いを、具体例つきで教えて" },
    ],
  },
  {
    icon: "💬",
    title: "「〇〇で困っている。どうすればいい？」",
    subtitle: "相談する",
    desc: "悩みや困りごとを打ち明けるパターン。AIはあなたの状況を聞き取りながら、一緒に解決策を考えてくれます。",
    examples: [
      { context: "生活", text: "隣の部屋の騒音がひどい。角を立てずに伝える方法を相談したい" },
      { context: "仕事", text: "転職するか今の会社に残るか迷っている。判断材料を整理してほしい" },
    ],
  },
  {
    icon: "✏️",
    title: "「〇〇を作って / 書いて」",
    subtitle: "作業を頼む",
    desc: "文章作成やアイデア出しなど、具体的な作業を依頼するパターン。下書きをAIに任せて、仕上げは自分で。",
    examples: [
      { context: "生活", text: "引っ越しの挨拶状を書いて。カジュアルなトーンで、A4半分くらいの量で" },
      { context: "仕事", text: "新商品の紹介メールを書いて。ターゲットは30代女性、500文字以内で" },
    ],
  },
  {
    icon: "⚖️",
    title: "「〇〇と△△、どっちがいい？」",
    subtitle: "比較・判断の壁打ち",
    desc: "選択に迷ったとき、メリット・デメリットを整理してもらうパターン。AIは判断を押しつけず、考える材料を出してくれます。",
    examples: [
      { context: "生活", text: "iPhone と Android、スマホ初心者にはどっちがいい？理由も教えて" },
      { context: "仕事", text: "PowerPointとCanva、社内プレゼン用にはどちらがいい？比較表で見せて" },
    ],
  },
  {
    icon: "🔎",
    title: "「もっと詳しく」「別の案は？」",
    subtitle: "深掘り・追加注文",
    desc: "最初の回答をもっと良くするパターン。AIとの会話は1回で終わらせる必要はありません。何度でも聞き直せます。",
    examples: [
      { context: "深掘り", text: "その中で一番簡単にできるものはどれ？理由も教えて" },
      { context: "追加注文", text: "いい感じだけど、もう少しカジュアルなトーンにして。あと3パターン出して" },
    ],
  },
] as const;

const conversationExamples = {
  vague: [
    { role: "user" as const, text: "なんかいいダイエットない？" },
    { role: "ai" as const, text: "ダイエットですね！いくつか質問させてください。\n\n・今の食事で気になっていることは？（間食が多い、夜遅い食事など）\n・運動は好きですか？苦手ですか？\n・過去に試して続かなかった方法はありますか？\n\nあなたに合う方法を一緒に考えましょう！" },
    { role: "user" as const, text: "間食がやめられないのが一番の問題かも。運動は苦手…" },
    { role: "ai" as const, text: "間食がメインの課題ですね。運動苦手な方向けに、食事だけで始められるアプローチを3つ提案します。\n\n1. 置き換え作戦：お菓子の代わりにナッツ・チーズ・ゆで卵など\n2. 時間を決める：15時だけOKルール（完全禁止より続く）\n3. 飲み物から変える：ジュース→炭酸水にするだけで1日200kcal減\n\nどれか気になるものはありますか？" },
  ],
  rough: [
    { role: "user" as const, text: "今日暑い。なんか飲みたい" },
    { role: "ai" as const, text: "暑い日にぴったりの飲み物、いくつか提案しますね！\n\n🧊 さっぱり系\n・レモンソーダ水（炭酸水＋レモン果汁＋はちみつ）\n・冷やし緑茶ハイボール風（緑茶＋炭酸水）\n\n☕ カフェ系\n・アイスカフェオレ\n・タピオカミルクティー\n\n🍹 フルーツ系\n・冷凍フルーツスムージー\n\n手作りしたい？それとも買いに行く前提？" },
    { role: "user" as const, text: "コンビニで買える範囲で、カロリー低めがいい" },
    { role: "ai" as const, text: "コンビニで買えてカロリー低めならこの3つ！\n\n1. 強炭酸水（0kcal）——暑い日は炭酸の爽快感が最強\n2. ルイボスティー（0kcal）——カフェインなし、ミネラル補給にも\n3. トマトジュース（約40kcal）——塩分補給もできて夏バテ予防に\n\n個人的にはこの暑さなら強炭酸水にレモン果汁を数滴がおすすめです！" },
  ],
} as const;

const questionIdeas = [
  { text: "今日の晩ご飯、冷蔵庫に鶏もも肉と玉ねぎがあるんだけど何が作れる？", category: "料理" },
  { text: "上司へのお礼メール、カジュアルすぎず堅すぎない文面を考えて", category: "仕事" },
  { text: "子どもに「なぜ空は青いの？」と聞かれた。小学生にわかるように説明して", category: "学び" },
  { text: "友人の誕生日プレゼント、予算5000円、30代女性、コスメ好き。おすすめを5つ", category: "生活" },
  { text: "確定申告のやり方、完全に初めてなんだけどまず何からすればいい？", category: "お金" },
  { text: "英語で「ありがとう」以外のお礼の言い方を5つ、使い分けも教えて", category: "語学" },
  { text: "週3回、30分でできる運動メニューを作って。40代、運動不足、器具なし", category: "健康" },
  { text: "この文章、もっと読みやすくリライトして：（自分の文章を貼り付け）", category: "文章" },
  { text: "転職するか迷っている。今の状況を伝えるから、メリットとデメリットを整理して", category: "キャリア" },
  { text: "今週末、子連れで東京近郊のおでかけスポット。3歳児OK、屋内希望", category: "おでかけ" },
] as const;

const levelUpTips = [
  {
    title: "「誰として」「何のために」を添える",
    subtitle: "コンテキストを渡す",
    bad: "プレゼン資料の構成を考えて",
    good: "私は営業3年目です。新規顧客向けに、自社サービスのメリットを15分で説明するプレゼン構成を考えて",
    why: "AIはあなたのことを何も知りません。「自分は誰か」「何のための質問か」を一言添えるだけで、回答の的確さが格段に上がります。",
  },
  {
    title: "一度で完璧を求めない",
    subtitle: "「もう少し〇〇にして」と追加注文する",
    bad: "（最初の回答を見て）うーん、なんか違う…（閉じる）",
    good: "いい感じだけど、もう少しカジュアルにして。あと、冒頭に数字を入れたインパクトのある一文を追加して",
    why: "AIとの対話は1回で終わりではありません。カフェで「もうちょっと甘めで」と注文し直すように、気軽に追加注文しましょう。",
  },
  {
    title: "AIの回答が微妙なら「違う」と言い直す",
    subtitle: "遠慮せずフィードバックする",
    bad: "（的外れな回答が返ってきた）…やっぱりAI使えないな",
    good: "違うんだよね。私が知りたいのは〇〇じゃなくて△△のほう。もう一度お願い",
    why: "AIは怒りません。「違う」と言われることで、あなたの意図をより正確に理解します。遠慮するより、はっきり伝える方がいい結果になります。",
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

function SearchVsAiCard() {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border-2 border-gray-300 bg-gray-50 p-5">
        <div className="flex items-center gap-2">
          <span className="text-xl">🔍</span>
          <p className="text-base font-bold text-gray-700">検索エンジン</p>
        </div>
        <p className="mt-3 text-sm font-semibold text-gray-500">「正解を探す」</p>
        <ul className="mt-2 space-y-1.5 text-sm leading-7 text-gray-600">
          <li>キーワードを入力 → 結果一覧から選ぶ</li>
          <li>情報の取捨選択は自分でやる</li>
          <li>1回の入力で完結</li>
        </ul>
      </div>
      <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50 p-5">
        <div className="flex items-center gap-2">
          <span className="text-xl">💬</span>
          <p className="text-base font-bold text-emerald-700">AI（ChatGPTなど）</p>
        </div>
        <p className="mt-3 text-sm font-semibold text-emerald-500">「一緒に考える」</p>
        <ul className="mt-2 space-y-1.5 text-sm leading-7 text-emerald-800">
          <li>自然な言葉で相談 → AIが整理してくれる</li>
          <li>「もっと詳しく」と会話を続けられる</li>
          <li>あなたの状況に合わせた回答が返る</li>
        </ul>
      </div>
    </div>
  );
}

export default function HowToAskAiBeginnersPage({ faqItems }: Props) {
  return (
    <main className="bg-[#f8f8f7] pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPTに何を聞けばいい？" },
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
                title="ChatGPTに何を聞けばいい？AIへの質問・相談の仕方がわかる完全入門ガイド"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1
            className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            ChatGPTに何を聞けばいい？
          </h1>
          <p className="mt-2 text-lg text-gray-600" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            AIへの質問・相談の仕方がわかる完全入門ガイド
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            ChatGPTをインストールしたものの、入力欄を前にして手が止まる——。「何を聞けばいいかわからない」のは、あなただけではありません。
            実はこの悩み、AIを使い始めた人のほとんどが通る道です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            結論からお伝えします。<strong>AIは「検索エンジン」ではなく、あなたの話を聞いてくれる「相談相手」です。</strong>
            正解を探す必要はありません。友達に話しかけるように、困っていることや気になることを伝えればOK。
            下手な質問でも、曖昧な質問でも、AIは怒りません。呆れません。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事では、「何を聞けばいいの？」という壁を超えるための考え方と、今日からすぐ使える具体的な質問パターンを紹介します。
            テンプレートの丸暗記ではなく、<strong>「AIとの対話の考え方そのもの」</strong>を身につけてもらうのがこの記事のゴールです。
          </p>
        </motion.header>

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
              AIは検索エンジンではなく「相談相手」。正解を探すのではなく、一緒に考えてもらう感覚でOK
            </li>
            <li className="pl-1 marker:text-gray-500">
              「すごい質問」は不要。「今日の晩ご飯なに？」レベルの質問で十分。下手でもOK、AIは怒らない
            </li>
            <li className="pl-1 marker:text-gray-500">
              聞き方の基本は5パターン：教えて / 相談したい / 作って / どっちがいい？ / もっと詳しく
            </li>
            <li className="pl-1 marker:text-gray-500">
              1回で完璧を求めない。「もう少し〇〇して」と追加注文するのが、AIとの対話のコツ
            </li>
            <li className="pl-1 marker:text-gray-500">
              質問が上手くなる秘訣は「自分の状況」を一言添えること。AIはあなたのことを知らないから
            </li>
          </ul>
        </motion.section>

        {/* なぜ「何を聞けばいいかわからない」のか？ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="why-stuck" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            なぜ「何を聞けばいいかわからない」のか？——3つの原因
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTの入力欄を前にして固まってしまう。その原因は、あなたの能力の問題ではありません。
            ほとんどの場合、<strong>AIに対する「思い込み」</strong>がブレーキになっています。
          </p>

          <div className="mt-6 space-y-4">
            {stuckReasons.map((reason, i) => (
              <div key={reason.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-xl">
                    {reason.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-600">原因 {i + 1}</p>
                    <h3 className="mt-1 text-base font-bold text-gray-900">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{reason.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-base leading-8 text-gray-700">
            つまり、<strong>「検索」と「AI対話」はまったく別もの</strong>です。この発想の転換が、すべてのスタートラインになります。
          </p>

          <SearchVsAiCard />

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">この記事のポイント</p>
            <p className="mt-2 text-sm leading-7 text-amber-900">
              この記事は「プロンプトテンプレート集」ではありません。テンプレートを渡されても「自分の状況に合わせてどう変えればいいかわからない」という人のための記事です。
              <strong>「考え方」さえわかれば、どんな場面でもAIに聞けるようになります。</strong>
            </p>
          </div>
        </motion.section>

        {/* 5つの基本パターン */}
        {askPatterns.map((pattern, idx) => (
          <motion.section
            key={pattern.subtitle}
            className="mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={sectionReveal}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 id={`pattern-${idx + 1}`} className="scroll-mt-28 text-2xl font-bold text-gray-900">
              パターン{idx + 1}：{pattern.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-will-primary">{pattern.subtitle}</p>
            <p className="mt-4 text-base leading-8 text-gray-700">{pattern.desc}</p>

            <div className="mt-5 rounded-xl border-2 border-will-primary/15 bg-white p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-will-primary/10 text-2xl">
                  {pattern.icon}
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">{pattern.title}</p>
                  <p className="text-xs text-gray-500">具体例</p>
                </div>
              </div>
              <div className="space-y-3">
                {pattern.examples.map((ex) => (
                  <div key={ex.text} className="rounded-lg bg-gray-50 px-4 py-3">
                    <span className="mr-2 rounded-full bg-will-primary/10 px-2 py-0.5 text-xs font-semibold text-will-primary">
                      {ex.context}
                    </span>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{ex.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        ))}

        {/* 「いい質問」じゃなくても大丈夫 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="bad-question-ok" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            「いい質問」じゃなくても大丈夫——実例で見てみよう
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「ちゃんとした質問を考えなきゃ」と構えていませんか？ 安心してください。
            <strong>AIは、どんなに曖昧な質問でも怒りません。呆れません。</strong>
            むしろ、「ざっくりした質問」のほうが自然な会話が始まりやすいんです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            実際の対話例を見てみましょう。
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">例1：超曖昧な質問でも大丈夫</h3>
          <ConversationExample messages={conversationExamples.vague} />

          <h3 className="mt-8 text-lg font-bold text-gray-900">例2：ひと言だけでもOK</h3>
          <ConversationExample messages={conversationExamples.rough} />

          <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-emerald-800">大事なこと</p>
            <p className="mt-2 text-sm leading-7 text-emerald-900">
              見てのとおり、<strong>AIは「曖昧な質問」をもらうと、自分から聞き返してくれます</strong>。
              あなたが完璧な質問を用意する必要はありません。ざっくり伝えれば、AIが足りない情報を聞いてくれる。
              このキャッチボールこそが「AI対話」の本質です。
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
          <MidArticleCtaBox slug="how-to-ask-ai-beginners" />
        </motion.section>

        {/* 今日からすぐ試せる10の質問アイデア */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="ten-ideas" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            今日からすぐ試せる！10の質問アイデア
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「何を聞こうかな」と迷ったら、ここから1つ選んで試してみてください。
            そのまま使ってもいいし、自分の状況に合わせてアレンジしてもOKです。
          </p>
          <div className="mt-6 space-y-3">
            {questionIdeas.map((idea, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-will-primary/30 hover:bg-will-lighter/30">
                <div className="flex items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                      {idea.category}
                    </span>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{idea.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">使い方のヒント</p>
            <p className="mt-2 text-sm leading-7 text-blue-900">
              上の質問を送ったあと、<strong>AIの回答に「もう少し○○して」と追加注文</strong>してみてください。
              たとえば「もっと簡単に」「予算を3000円にして」「他のパターンも見せて」など。
              1回で終わらせず、会話を続けるのがポイントです。
            </p>
          </div>
        </motion.section>

        {/* 質問が上手くなる3つのコツ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="tips" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            質問が上手くなるための3つのコツ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ここまで読んで「とりあえず何か聞いてみよう」と思えたなら、もう8割成功です。
            あとは少しだけコツを知っておくと、AIの回答がさらに的確になります。
          </p>
          <div className="mt-6 space-y-6">
            {levelUpTips.map((tip, i) => (
              <div key={tip.title} className="rounded-xl border-2 border-will-primary/15 bg-white p-6">
                <div className="flex items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{tip.title}</h3>
                    <p className="mt-1 text-xs font-medium text-will-primary">{tip.subtitle}</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                    <p className="text-xs font-semibold text-red-600">NG例</p>
                    <p className="mt-1.5 text-sm leading-7 text-red-900">{tip.bad}</p>
                  </div>
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3">
                    <p className="text-xs font-semibold text-emerald-600">OK例</p>
                    <p className="mt-1.5 text-sm leading-7 text-emerald-900">{tip.good}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-700">{tip.why}</p>
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
            まとめ：AIへの最初の一言は「何でもいい」
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事のポイントを振り返ります。
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1"><strong>AIは「検索」ではなく「相談相手」</strong>——正解を探さず、一緒に考えてもらう</li>
            <li className="pl-1"><strong>聞き方は5パターン</strong>——教えて / 相談したい / 作って / 比較して / もっと詳しく</li>
            <li className="pl-1"><strong>下手な質問でもOK</strong>——AIは怒らない。曖昧でも聞き返してくれる</li>
            <li className="pl-1"><strong>1回で終わらせない</strong>——「もう少し○○して」と追加注文するのがコツ</li>
            <li className="pl-1"><strong>自分の状況を添える</strong>——「誰として」「何のために」を一言加えると精度が上がる</li>
          </ol>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「何を聞けばいいかわからない」と感じていたのは、「完璧な質問をしなきゃ」と思い込んでいたから。
            でもAIとの対話は、友達とのLINEと同じです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            「ねえ、ちょっと聞いていい？」——その一言が、AIとの新しい関係の始まりです。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            まずは今日、1つだけ。気になったことをAIに聞いてみてください。
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
              <Link href="/academy/blog/ai-mastery-tips-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを「使えるようになった人」がやっていた5つのこと
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-templates-50" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                すぐ使える！ChatGPTプロンプトテンプレート50選
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを仕事で使い始めた人の「最初の30日」完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-hallucination-fact-check-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTが嘘をつく？｜生成AIのハルシネーションを見抜く7つの実践テクニック
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-free-plan-comparison-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude・Gemini 無料プランでどこまでできる？2026年2月最新比較
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-voice-mode-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT音声モード完全ガイド｜スマホで話しかけるだけのAI活用術
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
