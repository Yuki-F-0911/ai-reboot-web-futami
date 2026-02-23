"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type AiGuideForSeniorsPageProps = {
  faqItems: readonly FAQItem[];
};

type UseCaseItem = {
  id: string;
  number: string;
  title: string;
  scene: string;
  example: string;
  tip: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["シニア AI 入門", "高齢者 ChatGPT 使い方", "60代 AI 初めて", "シニア 生成AI"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "intro", label: "「AIって難しそう」という不安に答えます" },
  { id: "why-seniors", label: "シニア世代こそAIが便利な理由" },
  { id: "first-step", label: "はじめての一歩：スマートフォンで今日から使う" },
  { id: "top5-uses", label: "シニアにおすすめの使い方TOP5" },
  { id: "anxiety-qa", label: "よくある不安への正直な回答" },
  { id: "for-family", label: "子ども・孫世代へ：教える側へのアドバイス" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "AIをもっと安心して使えるようになりたい方へ" },
] as const;

const quickSummaryPoints = [
  "AIは「難しいもの」ではなく、普通に話しかけるだけで答えてくれる道具です。",
  "スマートフォンが使えれば、今日からでもすぐ始められます。無料で使えます。",
  "シニア世代の日常生活（健康相談・孫への手紙・旅行計画・趣味）にとても役立ちます。",
  "個人情報（名前・住所・電話番号）を入力しなければ、プライバシーも守れます。",
  "最初は「1つだけ」試してみる。それだけで十分です。",
];

const useCases: readonly UseCaseItem[] = [
  {
    id: "use-1",
    number: "1",
    title: "体の不調を相談する",
    scene: "「最近、膝が痛い。何が原因として考えられますか？」",
    example:
      "こんにちは。最近、歩くと右ひざが痛みます。考えられる原因と、日常生活で気をつけることを教えてください。",
    tip: "AIは「考えられる原因」や「日常の注意点」を丁寧に教えてくれます。ただし、AIの答えはあくまで参考です。実際の診断・治療は必ず医師に相談してください。「AIで調べてから、病院に行く」という使い方が理想的です。",
  },
  {
    id: "use-2",
    number: "2",
    title: "昔の記憶を整理する",
    scene: "「昭和40年代の東京の暮らしを教えて」",
    example:
      "昭和40年代（1965年〜1974年頃）の東京の日常生活について教えてください。当時の物価、子どもたちの遊び、食べ物など、生活の様子を詳しく教えてください。",
    tip: "AIは昔の出来事や時代の様子を詳しく教えてくれます。「自分が子どものころはこうだったなあ」と懐かしく振り返りながら、会話を楽しんでみてください。思い出を話す「回想」は、心の健康にも良いとされています。",
  },
  {
    id: "use-3",
    number: "3",
    title: "孫・子どもへのメッセージを書く",
    scene: "「孫の大学入学お祝いに、気持ちが伝わるメッセージを書きたい」",
    example:
      "75歳の祖父から、春に大学に入学する孫（18歳）へ、お祝いのメッセージを考えてください。「夢を持って頑張ってほしい」「いつでも応援している」という気持ちを伝えたいです。200字くらいで。",
    tip: "文章を考えるのが苦手な方でも、「こんな気持ちを伝えたい」というざっくりとした要望を伝えるだけで、温かいメッセージ案を作ってくれます。AIが作った文章を参考に、自分らしい言葉に直して使ってみてください。",
  },
  {
    id: "use-4",
    number: "4",
    title: "趣味をもっと楽しむ",
    scene: "「俳句を始めたいけど、作り方がわからない」",
    example:
      "俳句を初めて作ろうとしています。基本的なルール（5・7・5のリズム、季語など）をわかりやすく教えてください。初心者でも作れる簡単な例も見せてください。",
    tip: "俳句・絵画・料理・手芸・囲碁・将棋など、どんな趣味でも「入門から教えて」と頼めます。趣味のアドバイスをもらう先生として使うと、とても便利です。「もっと上手になりたい」と思ったときにも、練習法を教えてもらえます。",
  },
  {
    id: "use-5",
    number: "5",
    title: "気になるニュースを分かりやすく解説してもらう",
    scene: "「最近よく聞く『AI』って、そもそも何ですか？」",
    example:
      "最近テレビや新聞でよく「AI（人工知能）」という言葉を聞きます。AIとは何か、私たちの生活とどう関係があるのか、難しい言葉を使わずに分かりやすく教えてください。",
    tip: "難しいニュースや専門用語も「わかりやすく教えて」と一言添えるだけで、ゆっくりと丁寧に説明してくれます。「もう少し詳しく教えて」「別の言い方でもう一度教えて」と続けて質問しても大丈夫です。",
  },
];

const anxietyItems = [
  {
    q: "個人情報を取られないか心配です",
    a: "名前・住所・電話番号・マイナンバーなどの個人情報は入力しないようにしましょう。これを守るだけで、プライバシーのリスクは大きく減らせます。「最近膝が痛い」「旅行先を探したい」といった一般的な内容を話すだけなら、個人が特定されることはありません。銀行口座やパスワードなど大切な情報は、絶対に入力しないでください。",
  },
  {
    q: "難しいことを聞かれたらどうしよう",
    a: "AIがあなたに難しいことを聞いてくることはありません。AIは、あなたの質問に答えるためにあります。もし答えの意味がよくわからなければ「もっと簡単に教えてください」と言えば、もう一度わかりやすく説明してくれます。「分かりません」と打ち込んでも大丈夫です。会話は何度でも最初からやり直せます。",
  },
  {
    q: "誤字があったり、変な質問をしてしまったら大変なことになりますか？",
    a: "大丈夫です。誤字があってもAIは意味を読み取ってくれます。変な質問をしても、怒ったり、誰かに通報したりしません。失敗しても何も起きません。むしろ「失敗しながら慣れる」のが、AIを上手に使えるようになる一番の近道です。気軽に、失敗を恐れずに試してみてください。",
  },
  {
    q: "AIを使うとスマートフォンが壊れますか？",
    a: "壊れません。AIはスマートフォンのアプリやブラウザで使うサービスです。電話やメールを使っても端末が壊れないのと同じように、AIを使うことで端末が壊れることはありません。アプリを間違えてインストールしてしまった場合は削除できます。不安な場合は、家族に一緒に確認してもらいながら使ってみてください。",
  },
];

function UseCaseSection({ item }: { item: UseCaseItem }) {
  return (
    <motion.div
      id={item.id}
      className="mt-8 rounded-xl border border-gray-200 bg-white p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
          {item.number}
        </span>
        <h3 className="blog-h3 text-lg font-bold text-gray-900">{item.title}</h3>
      </div>
      <p className="mt-3 text-base font-medium text-gray-700">{item.scene}</p>
      <div className="mt-4">
        <p className="text-xs font-semibold tracking-wide text-gray-500">実際の入力例（コピーして使えます）</p>
        <div className="mt-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4 text-sm leading-7 text-gray-800">
          {item.example}
        </div>
      </div>
      <div className="mt-4 rounded-lg border-l-4 border-will-primary bg-will-lighter px-5 py-4">
        <p className="text-sm font-semibold text-will-primary">使い方のポイント</p>
        <p className="mt-1 text-sm leading-7 text-gray-700">{item.tip}</p>
      </div>
    </motion.div>
  );
}

export default function AiGuideForSeniorsPage({ faqItems }: AiGuideForSeniorsPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "60代・70代がはじめてAIを使う：シニア世代のための優しいAI入門ガイド" },
          ]}
        />

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
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="60代・70代がはじめてAIを使う：シニア世代のための優しいAI入門ガイド"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            60代・70代がはじめてAIを使う：シニア世代のための優しいAI入門ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月24日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            「AIって難しそう、自分には関係ない…」そう思っていませんか？
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            実は、AIはシニア世代こそ便利に使える道具なんです。スマートフォンが使えれば、今日からでもすぐ始められます。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            この記事では、60代・70代の方が「これは私にもできそう」と感じられるよう、具体的な使い方と手順をやさしく丁寧に解説します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          AIの基本的な使い方をもう少し詳しく知りたい方は
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            スマホでChatGPTを始めるガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT・Claude初心者ガイド
          </Link>
          もあわせてご覧ください。
        </p>
        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-blue-900">要点まとめ</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {quickSummaryPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* はじめに */}
        <motion.section
          id="intro"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">「AIって難しそう」という不安に答えます</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            「AI」という言葉を聞いてどんなイメージを持ちますか？「難しそう」「若い人のもの」「自分には関係ない」。そう思う方は多いと思います。でも、実際に使ってみると、多くの方が「え、こんなに簡単なの？」と驚かれます。
          </p>
          <p className="blog-p mt-4 text-base leading-8 text-gray-700">
            AIに話しかけるのは、<strong>普通のメッセージを送るのと同じです。</strong>「最近膝が痛いんですが、どうすれば楽になりますか？」と打ち込むだけで、親切に答えてくれます。専門知識も、英語も、特別な操作も必要ありません。
          </p>
          <p className="blog-p mt-4 text-base leading-8 text-gray-700">
            むしろ、60代・70代のシニア世代にこそ、AIは役に立つ道具です。豊富な人生経験を持つ皆さんが、AIという「いつでも相談できる知識の引き出し」を持つことで、毎日がもっと豊かになります。
          </p>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">この記事を読むのに必要なもの</p>
            <ul className="mt-3 space-y-2 pl-1 text-sm leading-7 text-amber-700">
              <li>✓ スマートフォン（iPhoneでもAndroidでも大丈夫）</li>
              <li>✓ インターネット接続（自宅のWi-FiやスマートフォンのLTE通信）</li>
              <li>✓ メールアドレス（新しく作らなくても、お持ちのものでOK）</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-amber-700">パソコンがなくても、タブレットでも使えます。</p>
          </div>
        </motion.section>

        {/* なぜシニア世代に便利か */}
        <motion.section
          id="why-seniors"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">シニア世代こそAIが便利な理由</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            「なぜ、シニア世代にこそAIが役に立つのか」。それには、いくつかの理由があります。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: "🕐",
                title: "時間を有効に使える",
                body: "退職後やセカンドライフで時間が増えた今、AIを使えばやりたいことをもっとスムーズに進められます。調べ物、手紙の文章考え、趣味の研究など、一人でできることが広がります。",
              },
              {
                icon: "🏥",
                title: "病院・健康の相談がしやすい",
                body: "「この薬の副作用は？」「この症状、病院に行くべき？」など、気になることをすぐに調べられます。もちろん最終的な判断は医師に確認しますが、「予備知識を持って受診する」ことができます。",
              },
              {
                icon: "✉️",
                title: "気持ちを伝える言葉を見つけやすい",
                body: "孫への手紙、年賀状の一言、お礼の文章。「気持ちはあるけど、うまく言葉にできない」ときにAIが手助けしてくれます。自分の気持ちを伝えるための道具として、とても役立ちます。",
              },
              {
                icon: "🎨",
                title: "趣味をもっと深められる",
                body: "俳句・短歌・絵画・手芸・囲碁・料理…。長年の趣味をさらに深めたり、新しい趣味を始めるときの「先生」として使えます。24時間いつでも答えてくれる、無限の知識を持つ先生です。",
              },
              {
                icon: "🌸",
                title: "旅行や外出の計画が立てやすい",
                body: "「車椅子でも行きやすい京都の観光地は？」「バリアフリーの温泉旅館を探したい」。個別の事情に合わせた情報収集が、AIならスムーズにできます。",
              },
              {
                icon: "💬",
                title: "日常の「ちょっとした疑問」をすぐ解決",
                body: "「最近よく聞くSDGsって何？」「マイナンバーカードって作った方がいいの？」。テレビや新聞で気になった言葉を、すぐに分かりやすく説明してもらえます。",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="text-2xl">{item.icon}</p>
                <h3 className="blog-h3 mt-2 text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* はじめての一歩 */}
        <motion.section
          id="first-step"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">はじめての一歩：スマートフォンで今日から使う</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            最初に試してほしいのは「ChatGPT（チャットジーピーティー）」というAIです。世界で最も多く使われているAIのひとつで、日本語で会話できます。無料で始められます。
          </p>
          <div className="mt-8 space-y-6">
            {[
              {
                step: "STEP 1",
                title: "アプリをダウンロードする",
                body: "スマートフォンの「App Store」（iPhoneの方）または「Google Play」（Androidの方）で「ChatGPT」と検索してください。「OpenAI」という会社が作ったアプリが出てきます。「インストール」または「入手」ボタンをタップするだけで、無料でダウンロードできます。",
                note: "アプリが見つからない場合は、スマートフォンのブラウザ（SafariやChromeなど）で「ChatGPT」と検索すると、Webサイトからも使えます。",
              },
              {
                step: "STEP 2",
                title: "アカウントを作る",
                body: "アプリを開いたら「Sign up（新規登録）」または「アカウントを作成」をタップします。お持ちのメールアドレスを入力して、パスワードを決めるだけです。「Google（グーグル）でサインアップ」という選択肢があれば、Gmailアドレスをお持ちの方はそちらが簡単です。",
                note: "登録に困ったら、ご家族に手伝ってもらいながら最初の1回だけセットアップしてもらうのがおすすめです。",
              },
              {
                step: "STEP 3",
                title: "最初の一言を打つ",
                body: "画面の下に文字を入力するところが出てきます。そこに日本語で話しかけてみましょう。「こんにちは。はじめて使います。自己紹介してください。」でも大丈夫です。送信ボタン（矢印のマーク）をタップすると、AIが答えてくれます。",
                note: "難しい言葉は使わなくていいです。普通に話しかけるだけ。「何でも聞いていいですか？」と聞くと、「もちろんです！」と答えてくれます。",
              },
              {
                step: "STEP 4",
                title: "気になることを何でも聞いてみる",
                body: "最初の会話が終わったら、気になることを何でも聞いてみてください。「最近、肩こりがひどいのですが、自分でできるストレッチを教えてください」でも、「来月、温泉旅行を考えています。静岡でおすすめの温泉地はどこですか？」でも大丈夫です。",
                note: "答えが長すぎてわからない場合は「もっと短く、3行にまとめてください」と言えば、短く答え直してくれます。",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-will-primary text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold tracking-widest text-will-primary">{item.step}</p>
                  <h3 className="blog-h3 mt-1 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="blog-p mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                  {item.note && (
                    <p className="mt-3 rounded-md bg-gray-50 px-4 py-3 text-xs leading-6 text-gray-600">
                      💡 {item.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-5">
            <p className="text-sm font-semibold text-green-900">まず試してほしい最初の一言</p>
            <p className="mt-2 text-sm leading-7 text-green-800">
              「こんにちは。私は60代です。AIを初めて使います。自己紹介と、私でも使いやすい機能を教えてください。」
            </p>
            <p className="mt-2 text-xs text-green-700">
              ↑ この文章をコピーして貼り付けるだけで大丈夫です。AIが丁寧に案内してくれます。
            </p>
          </div>
        </motion.section>

        <LineCtaBox />

        {/* TOP5 */}
        <motion.section
          id="top5-uses"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">シニアにおすすめの使い方TOP5</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            「何を聞いていいのかわからない」という方のために、特に役立つ使い方を5つ紹介します。入力例もそのままコピーして使えます。
          </p>
          {useCases.map((item) => (
            <UseCaseSection key={item.id} item={item} />
          ))}
        </motion.section>

        <LineCtaBox />

        {/* 不安への回答 */}
        <motion.section
          id="anxiety-qa"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある不安への正直な回答</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            「始めてみたいけど、やっぱり怖い」。その不安、ひとつひとつ答えます。
          </p>
          <div className="mt-6 space-y-5">
            {anxietyItems.map((item) => (
              <div key={item.q} className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="text-base font-semibold text-gray-900">
                  <span className="mr-2 text-will-primary">Q.</span>
                  {item.q}
                </p>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
                  <span className="mr-2 font-semibold text-gray-600">A.</span>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-5">
            <p className="text-base font-semibold text-blue-900">AIを安全に使うための3つのルール</p>
            <ul className="mt-3 space-y-2 pl-1 text-sm leading-7 text-blue-800">
              <li>✓ 名前・住所・電話番号・マイナンバーは入力しない</li>
              <li>✓ 銀行口座・クレジットカード番号は絶対に入力しない</li>
              <li>✓ 「怪しいな」と感じたら、使うのをやめてご家族に相談する</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-blue-700">
              この3つを守るだけで、安全に楽しく使えます。
            </p>
          </div>
        </motion.section>

        {/* 子ども・孫世代へ */}
        <motion.section
          id="for-family"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">子ども・孫世代へ：教える側へのアドバイス</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            「親にAIを教えたいけど、どうすればいいか分からない」という30〜40代の方へ。親世代がAIと仲良くなるためのポイントをお伝えします。
          </p>
          <div className="mt-6 space-y-4">
            {[
              {
                title: "焦らない・急かさない",
                body: "「なんでそんなことも分からないの」は禁句です。初めてのことには時間がかかります。同じことを何度聞かれても、笑顔で答えてあげてください。焦りや圧力があると、せっかくの興味が萎んでしまいます。",
              },
              {
                title: "「難しいよ」と言わない",
                body: "「これは難しいから」と先に伝えると、本人が「やっぱり自分には無理だ」と思ってしまいます。「簡単だよ、話しかけるだけ」という言い方で誘ってみてください。実際に使い始めると、多くの方が「あら、簡単ね」と言います。",
              },
              {
                title: "一緒に使う体験から始める",
                body: "「使い方を教える」より「一緒に使ってみる」から始める方が成功しやすいです。「お母さんの好きな旅行先、一緒にAIで調べてみようか？」のように、本人が興味を持つテーマで一緒に体験してみてください。",
              },
              {
                title: "最初の設定だけ手伝う",
                body: "アプリのインストールとアカウント作成は、一緒にやってあげると安心です。最初の設定が終われば、あとは本人でも使えることがほとんどです。「いつでも聞いてね」と声をかけておくと、疑問が出たときに相談しやすくなります。",
              },
              {
                title: "失敗を一緒に楽しむ",
                body: "変な答えが返ってきたり、うまく使えなかったりしても、「おもしろいね」と一緒に笑えるくらいの気軽さで取り組むのが一番です。AIの面白いところは、失敗しても何も困らないことです。",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-will-primary text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <LineCtaBox />

        {/* FAQ */}
        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">Q. {item.question}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                スマホでChatGPTを始める方法｜初心者向けステップガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者完全ガイド｜どっちを使うべき？
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-spring-2026-whats-new" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                2026年春、生成AIは何が変わったか：初心者が驚く最新5つの進化
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-free-vs-paid-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTに課金すべき？無料と有料（Plus/Pro）の違いを正直に解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-study-learning-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI×勉強・資格・語学学習完全ガイド
              </Link>
            </li>
          </ul>
        </section>

        {/* Academy CTA */}
        <motion.section
          id="academy-cta"
          className="mt-14 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">AIをもっと安心して使えるようになりたい方へ</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            「一人で使い続けるのが不安」「もっと上手に使えるようになりたい」。そう感じている方は、学ぶ環境を整えることが次のステップです。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、AIを初めて使う方から仕事に本格活用したい方まで、自分のペースで学べる環境を提供しています。シニア世代の方も含め、様々なバックグラウンドの方が学んでいます。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "やさしく・丁寧に学べる",
                body: "専門用語を使わず、「なぜそうなるか」からていねいに説明します。「分からなかった」ではなく「わかった！」という体験を積み重ねられます。",
              },
              {
                title: "自分のペースで進められる",
                body: "「急かされる」「ついていけない」という心配はありません。自分が興味を持ったことから始めて、無理なく続けられる学習スタイルです。",
              },
              {
                title: "日常生活ですぐ使えるスキル",
                body: "教科書的な知識より、「明日の生活ですぐ役に立つ」使い方を中心に学びます。健康・趣味・コミュニケーションなど、日常に寄り添った内容です。",
              },
            ].map((pillar) => (
              <section key={pillar.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{pillar.title}</h3>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-7">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              アカデミーの詳細を見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
