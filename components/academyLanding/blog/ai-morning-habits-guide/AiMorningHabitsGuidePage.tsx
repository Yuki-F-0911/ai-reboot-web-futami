"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";
import {
  ArticleH2,
  ArticleH3,
  Callout,
  SummaryBox,
  RichTable,
  RichFAQ,
} from "@/components/blog/ArticleBody";

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

const keywordTags = ["AI 朝活", "ChatGPT 朝ルーティン", "AI 習慣化", "毎朝 AI 活用", "生産性 AI"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "problem", label: "朝の悩みとAIが解決できること" },
  { id: "six-routines", label: "朝5分でできるAI活用ルーティン6選" },
  { id: "prompts", label: "毎朝使えるプロンプトテンプレート" },
  { id: "week-experience", label: "1週間続けたら何が変わったか" },
  { id: "habit-tips", label: "習慣化のコツ：ゆるく続ける" },
  { id: "custom-instructions", label: "ChatGPTのカスタム指示でさらに便利に" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "conclusion", label: "まとめ" },
] as const;

const summaryItems = [
  "朝の5分間AIルーティンは「今日のTODO整理」から始めるのが最も効果的。前日の夜に頭の中でぐるぐる考えていたことを、AIとの会話で言語化するだけで、頭がすっきりして1日のスタートが変わる",
  "毎日のルーティンに「昨日の振り返り1分日記→AIフィードバック」を組み合わせると、自己成長の記録が積み上がる。PDCAサイクルをAIが支援する形で回せる",
  "気になるニュースの要約、気分に合わせたアドバイス、学習ウォームアップの1問1答——これらは全て1〜2行の入力で完了する。完璧を目指さず「今日できたこと」だけやればいい",
  "ChatGPTのカスタム指示（Custom Instructions）に自分の職業・目標・朝の習慣を設定しておくと、毎回長い説明なしにパーソナライズされた回答が得られる",
  "AI習慣化の最大のコツは「続かなくても自分を責めない」こと。1日サボっても翌日また使えばOK。スマホのホーム画面にChatGPTを置くだけで、使い続けやすくなる",
] as const;

const sixRoutines = [
  {
    number: "01",
    title: "今日のTODOをAIと一緒に整理する",
    icon: "📋",
    timeNeeded: "約2分",
    difficulty: "★☆☆",
    description:
      "朝の最初の作業として、頭の中にある「今日やること・気になること・心配なこと」をAIに打ち明けてみましょう。「今日はこんなことがあります。優先順位をつけてTODOリストを作ってください」と伝えるだけで、散らばっていた思考が整理されます。AIは余計なアドバイスをせず、あなたの言葉を整理してリスト化してくれます。「重要度」と「緊急度」のマトリクスで分類してもらうのも効果的。朝一番に「今日やること」が明確になるだけで、1日の生産性が大きく変わります。",
    example: "「今日やらないといけないこと：①企画書の修正②部長への報告メール③ランチの予約。プラス気になること：今月の目標達成が怖い。優先順位をつけてTODOリストにしてください」",
  },
  {
    number: "02",
    title: "昨日の振り返り日記をAIに手伝ってもらう",
    icon: "📓",
    timeNeeded: "約2分",
    difficulty: "★☆☆",
    description:
      "振り返り日記は「書き続けること」が大変なのが悩みですよね。AIを使えば、「昨日良かったこと・悪かったこと・明日への一言」を10秒で伝えるだけで、AIが日記の形に整えてくれます。さらに「昨日の振り返りから、今日の改善点を1つ提案して」と続けると、PDCAが自然に回り始めます。完璧な文章じゃなくていい。箇条書きでAIに渡し、AIが整えてくれる——そのやり取り自体が振り返りになります。",
    example: "「昨日：会議うまくいった。でも資料の準備が遅くてギリギリだった。夜は疲れてしまって何もできなかった。今日の改善点を1つアドバイスして」",
  },
  {
    number: "03",
    title: "気になるニュースをAIにまとめてもらう",
    icon: "📰",
    timeNeeded: "約1〜2分",
    difficulty: "★☆☆",
    description:
      "毎朝ニュースをチェックしたいけど、どれを読めばいいか分からない・読む時間がない——という方に最適。ChatGPTに「今日の日本のビジネスニュースで重要なものを3つ教えて」と聞くだけで、主要なトピックとその要点が返ってきます。業界特有のニュース（例：IT業界・医療・不動産）を指定することもでき、毎朝3分で「今日の重要情報」を把握できます。ただし、ChatGPTの無料版は情報がリアルタイムでない場合があるため、速報性が重要な場合はPlus版（ウェブ検索対応）を使いましょう。",
    example: "「今日のAI・テクノロジー業界の重要ニュースを3つ、それぞれ2〜3行で教えてください。私は【自分の業界・職種】に関心があります」",
  },
  {
    number: "04",
    title: "今日の気分・体調に合わせたアドバイスをもらう",
    icon: "🌅",
    timeNeeded: "約1分",
    difficulty: "★☆☆",
    description:
      "「今日なんかやる気が出ない」「昨夜眠れなかった」「大事なプレゼンがあって緊張している」——そんな朝の正直な気持ちをAIに打ち明けると、状況に合わせた実用的なアドバイスをもらえます。AIはあなたの状況を責めることなく、「そういうときは〇〇するのが効果的です」と穏やかに提案してくれます。「今日の調子に合わせた、無理のない1日の過ごし方を提案して」というプロンプトが特に効果的です。AIを「頼れる朝の相棒」として擬人化してみると、ハードルが下がります。",
    example: "「今日は睡眠不足で少し頭が重いです。大事な商談が15時にあります。午前中の過ごし方と、商談前の気持ちの切り替え方をアドバイスしてください」",
  },
  {
    number: "05",
    title: "学習したいことの「1問1答」でウォームアップ",
    icon: "🧠",
    timeNeeded: "約2〜3分",
    difficulty: "★★☆",
    description:
      "資格勉強・語学学習・業界知識——「毎日少しずつ勉強したいけど続かない」という方にぴったり。朝の脳がフレッシュな時間帯に「今日の英語の1問を出して」「簿記2級の仕訳問題を1問出して」「Pythonの基礎問題を1問出して」と依頼するだけで、ゲーム感覚のウォームアップになります。正解後には「この概念の実務での応用例を教えて」と続けると、記憶への定着がさらに高まります。1日1問・毎朝5分だけでも、1年続ければ365問の積み重ねになります。",
    example: "「毎朝の英語ウォームアップとして、ビジネス英語の短文を1文出してください。まず日本語で内容を考えさせ、その後正解英文と解説をお願いします。難易度：中級」",
  },
  {
    number: "06",
    title: "今日の目標をAIに宣言してモチベーションを上げる",
    icon: "🎯",
    timeNeeded: "約1分",
    difficulty: "★☆☆",
    description:
      "心理学的に「目標を誰かに宣言する」ことで達成率が高まることが知られています。「誰かに言うのは恥ずかしい」という人でも、AIなら安心して宣言できます。「今日の目標：〇〇を達成します」と書くと、AIが「いいですね！達成のためのポイントは…」と背中を押してくれます。夜、同じセッションに戻って「今日の結果を報告します」と振り返ると、自己管理サイクルが完成します。宣言→実行→報告という流れで、AIをコーチとして活用する方法です。",
    example: "「今日の目標：1時間で企画書の初稿を書き上げる。モチベーションを上げる一言と、達成のためのシンプルなアドバイスを教えてください」",
  },
] as const;

const weekChanges = [
  { day: "1日目", change: "最初は「これだけ？」と拍子抜け。でもTODOが整理されて午前中が意外とスムーズだった" },
  { day: "2〜3日目", change: "昨日の振り返りを入力するのが面倒に感じる。でも「一言でいい」と気づいてから続けられた" },
  { day: "4日目", change: "「今日やる気ない」とAIに正直に言ったら、無理のないスケジュールを提案してくれて楽になった" },
  { day: "5日目", change: "英語1問チャレンジが習慣になってきた。「昨日より少し成長した感覚」が積み重なる" },
  { day: "7日目", change: "1週間続けたことで、朝のルーティンが「AIを開く」から始まるように変わっていた" },
] as const;

export default function AiMorningHabitsGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIを朝の5分ルーティンに入れるだけで1日が変わる！" },
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
                title="AIを朝の5分ルーティンに入れるだけで1日が変わる！毎朝続けたいAI活用習慣術"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIを朝の5分ルーティンに入れるだけで1日が変わる！毎朝続けたいAI活用習慣術
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「朝、何から始めていいか分からない」「スマホを開いてもSNSをダラダラ見てしまう」「朝活したいけど、何をすればいいの？」——
            そんな朝の悩みを持つ方に伝えたいことがあります。
            ChatGPTやClaudeへの「一言」を朝の最初のアクションにするだけで、1日の質が変わります。
            準備もスキルも不要です。スマホとAIツールだけで始められる、「続く朝のAIルーティン」を6つご紹介します。
            完璧にやろうとしなくて大丈夫。「ゆるく続ける」が最大のコツです。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/ai-mindset-3habits" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI活用を習慣にする3つのマインドセット
          </Link>
          ・
          <Link href="/academy/blog/ai-daily-life-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI日常活用ガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-custom-instructions-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTカスタム指示の設定方法
          </Link>
          もあわせてご覧ください。
        </p>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox title="要点まとめ（結論先出し）" items={summaryItems} />
        </motion.section>

        {/* 朝の悩みとAI */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="problem">朝の悩みとAIが解決できること</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            多くの人が「朝の時間をもっと有効に使いたい」と思いながら、なかなか習慣が続きません。
            その理由のひとつは「何をすべきかが決まっていない」こと。やることが決まっていないと、
            スマホのSNSを開くという「最も抵抗の少ない行動」に流されてしまいます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIを朝のルーティンに加えることで、3つの変化が起きます。
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "思考の整理",
                icon: "🧩",
                desc: "頭の中でぐるぐるしていることを言語化することで、朝の「モヤモヤ」が消える",
              },
              {
                label: "意図的な始まり",
                icon: "🎯",
                desc: "AIとやりとりすることで「今日は〇〇する」という意図を持って1日を始められる",
              },
              {
                label: "小さな達成感",
                icon: "✅",
                desc: "「AIに一言打った」という行動が、朝の最初の小さな達成感になる",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-gray-200 p-5 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-bold text-gray-900">{item.label}</p>
                <p className="mt-2 text-xs leading-6 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <Callout type="info" title="「5分だけ」から始めるのが鉄則">
            朝活に失敗する最大の原因は「完璧にやろうとすること」です。この記事で紹介するルーティンは、
            どれも1〜3分で完結します。「今日は1個だけやる」でも立派な習慣の第一歩。
            完璧主義を手放すことが、AI活用を長続きさせる一番大切なコツです。
          </Callout>
        </motion.section>

        {/* 6つのルーティン */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="six-routines">朝5分でできるAI活用ルーティン6選</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            6つすべてをやる必要はありません。「これならできそう」と思うものを1〜2個選んで、
            まず1週間試してみてください。それだけで朝の質が変わり始めます。
          </p>

          <div className="mt-8 space-y-8">
            {sixRoutines.map((routine) => (
              <section key={routine.number} className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-will-primary text-white text-2xl">
                    {routine.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-gray-400">ルーティン{routine.number}</span>
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">⏱ {routine.timeNeeded}</span>
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">難易度 {routine.difficulty}</span>
                    </div>
                    <h3 className="mt-1 text-lg font-bold text-gray-900">{routine.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-8 text-gray-700">{routine.description}</p>
                <div className="mt-4 rounded-lg bg-amber-50 p-4">
                  <p className="text-xs font-bold text-amber-700 mb-2">プロンプト例（コピペOK）</p>
                  <p className="text-sm leading-7 text-gray-800 italic">{routine.example}</p>
                </div>
              </section>
            ))}
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
          <MidArticleCtaBox slug="ai-morning-habits-guide" />
        </motion.section>

        {/* プロンプトテンプレート */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="prompts">毎朝コピペして使えるプロンプトテンプレート</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            毎朝使えるプロンプトをシーン別にまとめました。【】の部分を自分の内容に変えて使ってください。
          </p>

          <div className="mt-6 space-y-5">
            <ArticleH3>月曜日：1週間のスタートに</ArticleH3>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 space-y-3">
              {[
                "「今週の目標：【目標】。今日のTODO：【箇条書き】。月曜日らしいポジティブなスタートのために、短い一言をください」",
                "「今週やるべきことのリスト：【リスト】。優先順位をつけて、月曜・火曜・水〜金に振り分けてください」",
              ].map((prompt, i) => (
                <div key={i} className="flex gap-3">
                  <span className="shrink-0 text-will-primary font-bold text-sm">▶</span>
                  <p className="text-sm leading-7 text-gray-800 italic">{prompt}</p>
                </div>
              ))}
            </div>

            <ArticleH3>毎日のルーティン：汎用テンプレート</ArticleH3>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 space-y-3">
              {[
                "「今日の気分：【一言で表現】。今日やること：【3つ以内】。今日うまくいってほしいこと：【1つ】。この情報をもとに、今日の朝の一言アドバイスをください」",
                "「昨日よかったこと：【一言】、改善したいこと：【一言】。今日の最初のアクションを1つ提案してください」",
                "「今日の目標を一文で宣言します：【宣言】。達成確率を高めるためのシンプルなコツを1つ教えてください」",
              ].map((prompt, i) => (
                <div key={i} className="flex gap-3">
                  <span className="shrink-0 text-will-primary font-bold text-sm">▶</span>
                  <p className="text-sm leading-7 text-gray-800 italic">{prompt}</p>
                </div>
              ))}
            </div>

            <ArticleH3>金曜日：1週間の締めくくりに</ArticleH3>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 space-y-3">
              {[
                "「今週できたこと：【箇条書き】、できなかったこと：【一言】。来週に活かせるポイントを1つ教えてください」",
                "「今週最も頑張ったことを【一言】としてAIに共有します。労いの言葉と週末の過ごし方のアドバイスをください」",
              ].map((prompt, i) => (
                <div key={i} className="flex gap-3">
                  <span className="shrink-0 text-will-primary font-bold text-sm">▶</span>
                  <p className="text-sm leading-7 text-gray-800 italic">{prompt}</p>
                </div>
              ))}
            </div>
          </div>

          <Callout type="tip" title="スマホのメモアプリに保存しておこう">
            よく使うプロンプトはiPhoneのメモアプリ・Androidのメモ帳・Notionなどに保存しておくと便利です。
            毎朝コピペするだけで使えます。「朝のAIプロンプト」というフォルダを作って管理するのがおすすめです。
          </Callout>
        </motion.section>

        {/* 1週間続けたら */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="week-experience">1週間続けたら何が変わったか（体験談）</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            実際に朝のAIルーティンを1週間続けた場合、どんな変化が起きるのかをリアルな体験談風にまとめました。
            「最初はうまくいかなくて当然」というリアルな経緯も含めてお伝えします。
          </p>

          <div className="mt-6 space-y-3">
            {weekChanges.map((item) => (
              <div key={item.day} className="flex gap-4 rounded-xl border border-gray-200 p-4">
                <div className="shrink-0 w-20 text-center">
                  <span className="text-xs font-bold text-will-primary bg-will-lighter px-2 py-1 rounded-full">{item.day}</span>
                </div>
                <p className="text-sm leading-7 text-gray-700">{item.change}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-base leading-8 text-gray-700">
            1週間後、多くの人が気づくのは「AIを開くことへの抵抗感がなくなった」ということです。
            最初は「なんとなく難しそう」だったツールが、気づけば「朝の歯磨きと同じ感覚」になります。
            習慣化のゴールは「自動化」——考えなくても自然に使い始める状態を目指しましょう。
          </p>
        </motion.section>

        {/* 習慣化のコツ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="habit-tips">習慣化のコツ：完璧を求めず「ゆるく続ける」</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AI活用を習慣化するための鍵は「ゆるさ」です。厳しいルールを作ればするほど、
            一度サボったときに「もうやめよう」となりがちです。
          </p>

          <div className="mt-6 space-y-4">
            <ArticleH3>コツ1：「トリガー」を決める</ArticleH3>
            <p className="text-base leading-8 text-gray-700">
              習慣化の鉄則は「すでにある習慣にくっつける」こと（習慣スタッキング）。
              「朝のコーヒーを淹れた直後にChatGPTを開く」「歯磨きしながらAIへの1問を考える」のように、
              すでに定着している行動の直後にAI利用を紐付けます。
              新しい習慣のハードルが一気に下がります。
            </p>

            <ArticleH3>コツ2：「最低限の行動」を決める</ArticleH3>
            <p className="text-base leading-8 text-gray-700">
              「今日は疲れているからやらない」を防ぐために、「最低限これだけやれば今日はOK」というラインを決めておきます。
              例えば「ChatGPTを開いて今日の一言を入力するだけ」。
              それ以上はおまけ。最低限の行動を達成するだけで「今日も続けた」という達成感が積み重なります。
            </p>

            <ArticleH3>コツ3：サボっても翌日また使えばOK</ArticleH3>
            <p className="text-base leading-8 text-gray-700">
              「3日坊主でも、また3日やればいい」——これがAI習慣化の真髄です。
              1日サボった自分を責める必要はゼロ。翌朝また開けばそれでOK。
              AIはあなたがいつ戻ってきても、文句を言わず迎えてくれます。
              「毎日続けること」より「やめないこと」を目標にしましょう。
            </p>

            <ArticleH3>コツ4：スマホのホーム画面最前線に置く</ArticleH3>
            <p className="text-base leading-8 text-gray-700">
              スマホのホーム画面の一番目につく場所にChatGPTアプリを置きましょう。
              朝起きてスマホを開いた瞬間に目に入ることで、「AIを開くこと」が反射的な行動になります。
              SNSアプリを2ページ目に移動させて、ChatGPTを1ページ目の中央に置くだけで、
              朝の行動パターンが自然と変わります。
            </p>
          </div>

          <Callout type="tip" title="スランプの時の「緊急プロンプト」">
            「AIを使う気力もない朝」に試してほしいのが、このひとこと：<br />
            「今日は気力がないです。元気が出る一言をください」<br />
            たった一言入力するだけでOK。AIが返してくれた言葉に「ちょっと動こうかな」という気持ちになることがあります。
          </Callout>
        </motion.section>

        {/* カスタム指示 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="custom-instructions">ChatGPTのカスタム指示でさらに便利に</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPT Plus以上の方には、「カスタム指示（Custom Instructions）」という機能があります。
            ここに自分の情報を登録しておくと、毎回説明しなくてもパーソナライズされた回答が返ってきます。
            朝のルーティンに特化した設定例を紹介します。
          </p>

          <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <p className="text-xs font-bold text-gray-500 mb-3">カスタム指示の設定例（「ChatGPTについて」欄）</p>
            <div className="text-sm leading-8 text-gray-800 space-y-2">
              <p>私は【職業・役割】です。毎朝のAIルーティンとして活用しています。</p>
              <p>・朝のTODO整理は簡潔に箇条書きで回答してください</p>
              <p>・振り返りのフィードバックは100字以内で、ポジティブな視点を重視してください</p>
              <p>・学習サポートは具体例を必ず含めてください</p>
              <p>・私の現在の目標：【目標を一言で】</p>
              <p>・私が苦手なこと：【例：継続すること・朝が弱い】</p>
            </div>
          </div>

          <p className="mt-4 text-base leading-8 text-gray-700">
            この設定をしておくと、「今日のTODOを整理して」の一言だけで、
            あなたの職業・目標・スタイルに合わせた回答が返ってきます。
            毎朝のプロンプト入力が大幅に短縮されます。
          </p>

          <RichTable>
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-900">設定項目</th>
                <th className="px-4 py-3 font-semibold text-gray-900">入力例</th>
                <th className="px-4 py-3 font-semibold text-gray-900">効果</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { item: "職業・役割", example: "「営業職・30代・チームリーダー」", effect: "ビジネス文脈での回答に最適化される" },
                { item: "朝の目的", example: "「毎朝のTODO整理と自己振り返りに使いたい」", effect: "余計な雑談なしで本題に入ってくれる" },
                { item: "回答スタイル", example: "「短く・箇条書き・ポジティブな視点で」", effect: "いつも同じスタイルで返ってくる" },
                { item: "現在の目標", example: "「今期の売上目標を達成すること・部下育成」", effect: "目標に関連したアドバイスになる" },
                { item: "苦手なこと", example: "「継続が苦手・完璧主義になりがち」", effect: "弱点を踏まえた現実的な提案をしてくれる" },
              ].map((row) => (
                <tr key={row.item}>
                  <td className="px-4 py-3 font-medium text-gray-700 text-sm">{row.item}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 italic">{row.example}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{row.effect}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
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
          <ArticleH2 id="faq">よくある質問（FAQ）</ArticleH2>
          <RichFAQ items={faqItems} />
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="conclusion">まとめ：今日の朝から始める最初の一歩</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            朝5分のAIルーティンは、今日から始められます。この記事で紹介した6つの方法を振り返りましょう。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <strong>TODOの整理</strong>：頭の中を整理するだけで、午前中の生産性が変わる
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>振り返り日記</strong>：1行でAIに伝えるだけで、PDCAが自然に回り始める
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>ニュースまとめ</strong>：3分で今日の重要情報を把握できる朝の情報収集
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>気分・体調アドバイス</strong>：今の自分の状態に合わせた、リアルな一言をもらう
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>学習ウォームアップ</strong>：1問1答で脳をアクティブにする朝の知的体操
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>目標宣言</strong>：AIへの宣言がコミットメントになる、最もシンプルなモチベーション術
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            今日試してほしい最初の一歩はこれだけです：<strong>「今日やることを3つ書いて、ChatGPTに整理してもらう」</strong>。
            それだけで十分。完璧じゃなくていいし、毎日じゃなくてもいい。
            AIはいつでも待っていてくれます。まず今朝、一言打ってみましょう。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            毎朝使えるAI活用のヒントを週1回お届けしています。AIリブートのLINEに登録してください。
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
          <LineCtaBox
            title="毎朝使えるAI活用ヒントを毎週配信中"
            description="朝のAIルーティンに使えるプロンプト集・習慣化のコツ・最新AIツール情報を毎週LINEでお届けしています。AIリブートのLINE公式アカウントに登録すると、特典教材も無料でもらえます。"
            buttonLabel="LINEで登録する（無料）"
            href="/line"
          />
        </motion.section>

        {/* 次のステップ */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">次のステップ</h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            朝のルーティンが定着したら、読書×AIや学習×AIにも挑戦してみましょう。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/ai-book-reading-guide"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              AI×読書活用術を学ぶ
            </Link>
            <Link
              href="/academy/blog/ai-study-learning-guide"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              AI×学習法の完全ガイド
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-book-reading-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIで読書が変わる！ChatGPT・Claudeを使った本の要約・理解・アウトプット活用術【2026年版】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-mindset-3habits" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI活用を習慣にする3つのマインドセット｜続けるための思考法
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-custom-instructions-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTカスタム指示（Custom Instructions）完全ガイド｜設定方法と活用例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-daily-life-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIを日常生活に取り入れる方法｜初心者向け活用ガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者ガイド｜どちらを選ぶ？違いと使い分け完全解説
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
