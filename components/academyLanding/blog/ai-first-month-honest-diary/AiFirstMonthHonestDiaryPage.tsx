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

type Props = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI 始め方 体験談", "生成AI 初心者 1ヶ月", "ChatGPT リアル感想", "AI 初めて 正直"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "decision-night", label: "AI、始めてみることにしました" },
  { id: "first-3-days", label: "1日目〜3日目：最初の壁" },
  { id: "week-1", label: "1週間後：初めての「すごい！」体験" },
  { id: "week-2", label: "2週間後：コツがわかってきた" },
  { id: "month-1", label: "1ヶ月後：気がついたら日常になっていた" },
  { id: "truth", label: "AI活用の真実" },
  { id: "advice", label: "あの頃の自分へのアドバイス" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
] as const;

const diaryPhases = [
  {
    id: "decision-night",
    period: "始める前の夜",
    title: "AI、始めてみることにしました",
    icon: "📓",
    entries: [
      {
        day: "決意",
        text: `同僚のAさんが「昨日のプレゼン資料、ChatGPTで構成作ったんだよ」と話してくれた日のことを、今でも覚えています。

「え、AIって使えるもんなの？」——その晩、私はスマホを持ちながら、ChatGPTのアプリをインストールして、でも開かないまま寝ました。

翌日、また開かない。その翌日も。「難しそう」「失敗したらどうしよう」「恥ずかしい質問したらどうなる」——そんな言い訳が次々と浮かんで、3日間アプリは放置でした。

4日目、ようやく覚悟を決めたのは、取引先へのお断りメールを書こうとして2時間悩んでいたからです。「もう試してみるしかない」と思いました。`,
      },
    ],
    lesson: null,
  },
  {
    id: "first-3-days",
    period: "1日目〜3日目",
    title: "最初の壁：「え、どうすれば…」の3日間",
    icon: "😰",
    entries: [
      {
        day: "1日目",
        text: `ChatGPTを開いて、テキストボックスを見た瞬間、思いました。「何を入力すればいいんだ？」

5分間、本当に何も打てませんでした。検索エンジンじゃないとはわかっているけど、どう話しかければいいのか。変なこと聞いたら怒られる？笑われる？

最初に入力したのが「こんにちは」だったことを、今では笑い話にできます。ChatGPTは「こんにちは！何かお手伝いできることはありますか？」と明るく返してくれました。なんと優しいのか。

次に「取引先へのお断りメールを書きたい」と入力しました。すると、それなりに丁寧なメール文が出てきた。でも、なんか……堅すぎる。自分じゃ絶対こんな書き方しない感じ。「失敗したかも」と思いつつ、その日は終わりました。`,
      },
      {
        day: "2日目",
        text: `昨日の反省を活かして、もう少し詳しく状況を説明しようと思いました。

「3年付き合いのある取引先に、今回は予算の都合でお断りしたい。相手は感情的になりやすい方なので、角が立たない表現で、300字以内で書いてほしい」

…前日より全然いい文章が出てきました。思わず「え」と声が出た。

でも、一部の表現がまだ自分らしくない。「もう少し柔らかくして」と追加で打ってみたら、修正してくれた。「この部分をもっと具体的に」と言ったら、また直してくれた。

「あ、これって会話なんだ」と気づいた瞬間でした。一回で完璧な答えを求めるんじゃなくて、対話しながら作っていくもの。`,
      },
      {
        day: "3日目",
        text: `AIに「こんなこと聞いていいのかな…」と恥ずかしがっていたことを、3日目に全部聞いてみました。

「今日のランチのカロリーを計算して」「この英語のメール、何が書いてあるか教えて」「上司への報告書、箇条書きで整理して」

全部答えてくれました。ちゃんと。しかも速く。

「こんなこと聞いていいの？」という壁は、自分の中にしかなかった。AIは怒らない、笑わない、呆れない。この事実だけで、ずいぶん楽になりました。`,
      },
    ],
    lesson: {
      label: "3日間の気づき",
      text: "最初のハードルは「使い方がわからない」ではなく、「何を聞いていいかわからない」という心理的な壁でした。その壁は、一度ちゃんと話しかけてみるだけで、するっと消えました。",
    },
  },
  {
    id: "week-1",
    period: "1週間後",
    title: "初めての「すごい！」体験",
    icon: "✨",
    entries: [
      {
        day: "1週間後",
        text: `1週間が経つ頃、ちょっとした奇跡が起きました。

週一の定例会議が終わって、議事録をまとめなきゃいけなかった。いつもは30〜40分かかる作業。ノートに書いたメモをそのままChatGPTに貼り付けて「これを議事録形式にまとめて。決定事項・次のアクション・担当者を分けて書いて」と入力したら……7分で完成しました。

最初に要した時間の5分の1以下。しかも抜け漏れがない。

「うわ、なんだこれ」と思いながら、でも誰にも言えませんでした。なぜか。恥ずかしかったから。「AIに頼ってる」って思われたくなかった。「ズルしてる」みたいな気がして。

でも、その晩、一人で密かに「今月もう3時間くらい取り戻せたな」と計算していました。`,
      },
    ],
    lesson: {
      label: "1週間の気づき",
      text: "最初の「すごい！」体験は、テキスト生成より「整理・要約」の分野から来ました。自分が5〜30分かかっていた整理作業を、AIは数分でこなせる。この体験が、使い続けるモチベーションになりました。",
    },
  },
  {
    id: "week-2",
    period: "2週間後",
    title: "コツがうっすらわかってきた",
    icon: "💡",
    entries: [
      {
        day: "2週間後",
        text: `2週間目で気づいたのは、「AIへの伝え方が磨かれていく」という感覚でした。

「文章を書いて」ではなく「こういう背景で、この相手に向けて、この目的で、このトーンで書いて」と伝えると、出てくる文章のレベルが全然違う。料理で言うと、材料を渡すだけじゃなくて、レシピも渡すようなイメージ。

それと、2週間目に初めて「それは違う、そういう意味じゃない」とAIに言い返しました。最初は「AI様に反論するなんて…」みたいな謎の遠慮があったんです。でも言ってみたら、ちゃんと謝って直してくれた。

「あ、AIって対等に話せる相手なんだ」と気づいた瞬間でした。それから一気に使いやすくなった気がします。

2週間目の終わりには、友人2人に「最近ChatGPT使ってるんだよね」と話しました。1人は「私も気になってた！」、もう1人は「え、難しくない？」という反応。難しくないよ、ということを伝えるのが難しかった。`,
      },
    ],
    lesson: {
      label: "2週間の気づき",
      text: "「AIに遠慮する」という感覚が消えた頃から、使い心地が大きく変わりました。背景・目的・相手・トーンを「渡す情報」として意識するようになると、回答の質が安定してきます。",
    },
  },
  {
    id: "month-1",
    period: "1ヶ月後",
    title: "気がついたら日常になっていた",
    icon: "🌅",
    entries: [
      {
        day: "1ヶ月後",
        text: `1ヶ月後、ChatGPTはいつの間にか「ないと困る」ものになっていました。

毎朝、コーヒーを淹れながらChatGPTを開く——という習慣ができていました。その日の仕事の優先順位を整理する、昨日の打ち合わせの内容を要約する、考えをまとめる。朝15分の「AIとの対話」が、一日の密度を変えていると気づきました。

「AIなしでどうしてたんだろう」と思ったのは、ある提案書を仕上げたときでした。10年分の業界知識をAIに渡して「この会社への提案として一番刺さるアングルを探して」と聞いたら、自分では思いつかなかった切り口を3つ出してくれた。そのうち1つを使って提案書を書いたら、「久しぶりにいい提案だった」と上司に言われました。

変わったこと：仕事の仕上がりに余白が生まれた。資料の精度が上がった。「まあいいか」で出していたものを「もう一押し」できるようになった。

変わらなかったこと：最終的な判断は自分がしているという感覚。AIの出力を「ゴール」ではなく「たたき台」として扱っている。そこだけは最初から変えていません。`,
      },
    ],
    lesson: {
      label: "1ヶ月の気づき",
      text: "AIは「仕事を代わりにやってくれる機械」ではなく、「思考の速度を上げてくれる相棒」でした。自分の判断や感覚はむしろ鋭くなった気がします——AIの出力を評価するために、自分の基準を言語化する機会が増えたからかもしれません。",
    },
  },
] as const;

const truthItems = [
  {
    id: "truth-1",
    title: "「速さ」より「対話の質」が成果を決める",
    body: "最初の頃は「素早く答えが出る」ことに感動していました。でも1ヶ月使って気づいたのは、速さより「どれだけ的確に状況を伝えられるか」が成果を左右するということ。AIは賢い、でも察する力は人間より劣る。背景・目的・制約を言語化して渡す習慣が、使いこなしの鍵でした。",
  },
  {
    id: "truth-2",
    title: "期待値を変えたら、使い勝手が激変した",
    body: "「AIが完璧な答えを出してくれる」という期待を持っていた頃は、出力に不満ばかりでした。「AIはたたき台を作ってくれる」という期待に変えた瞬間、すべてがうまく回り始めた。AIの出力は「完成品」ではなく「素材」。それを自分の手で仕上げるのが仕事です。",
  },
  {
    id: "truth-3",
    title: "「完璧なプロンプト」より「試す勇気」の方が大切",
    body: "ネットに「完璧なプロンプトの書き方」はたくさんあります。でも実際は、下手くそな指示を出して、ダメだったら直して、また試す——この繰り返しが一番の上達法でした。最初から完璧を求めない。「試す→直す」のサイクルを回すことが、唯一のプロンプト上達法だと思います。",
  },
] as const;

const adviceItems = [
  {
    no: 1,
    title: "最初の5分、何も思いつかなくて当然です",
    body: "ChatGPTを開いて固まるのは、全員がやります。「何を聞けばいいかわからない」は入門者全員の通過点。まず「こんにちは」と打ってみてください。話しかけるだけで、何かが始まります。",
  },
  {
    no: 2,
    title: "「こんなこと聞いていいの？」は全部聞いていい",
    body: "AIは怒りません。笑いません。呆れません。「こんなこと聞いたら恥ずかしい」と思っていること、全部聞いていいです。むしろ、日常の些細な疑問ほどAIに向いています。",
  },
  {
    no: 3,
    title: "最初の答えが微妙でも、諦めないで",
    body: "最初の出力が「なんか違う」と感じるのは正常です。「もっと短く」「もっとカジュアルに」「この部分をより具体的に」と追加指示を出してみてください。2回目・3回目の回答の方が、ずっとよくなります。",
  },
  {
    no: 4,
    title: "3日間、続けてみてください",
    body: "初日に「使えないな」と思っても、3日続けてみてください。2日目に「あ、こう使うのか」という気づきが生まれることが多い。1日で判断するのは、初めてのスマホを1時間触って「難しい」と言うのと同じです。",
  },
  {
    no: 5,
    title: "「できたこと」を小さくメモしておいて",
    body: "「今日AIで○○が5分でできた」という小さな成功体験を記録してください。1ヶ月後に読み返すと、自分がどれだけ変化したかが見えます。それが「続ける理由」になります。",
  },
] as const;

export default function AiFirstMonthHonestDiaryPage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIを始めて1ヶ月、正直に日記にしてみた" },
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
                className="rounded-full border border-will-primary/20/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="AIを始めて1ヶ月、正直に日記にしてみた"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIを始めて1ヶ月、正直に日記にしてみた
          </h1>
          <p className="mt-1 text-sm font-medium text-gray-500">
            戸惑いから小さな奇跡まで全部書いた
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            3ヶ月前の私に教えてあげたかった、あの正直な話を書いておこうと思います。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIを始めてみたいけど、本当に自分に使えるのかな——そんな半信半疑のまま、私はChatGPTを始めました。最初の5分間、何を入力すればいいかわからなくて固まっていたこと。初めて「すごい」と思った瞬間のこと。1ヶ月後、気づいたら毎朝使うようになっていたこと。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            成功した話だけじゃなく、「全然うまくいかなかった」「恥ずかしかった」「意外だった」も全部書きました。完成された成功談より、正直な等身大の話の方が、あなたの参考になると思うから。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          合わせて読みたい：
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIが怖い・難しいを乗り越えるガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-first-30-days-work-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            仕事で使う最初の30日ガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            プロンプトの書き方入門
          </Link>
          ・
          <Link href="/academy/blog/ai-study-continue-habits" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIを続けるための習慣デザイン
          </Link>
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
            要点まとめ（先に結論を知りたい方へ）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">最初の5分は全員が固まる——「何を聞けばいいかわからない」は入門者の通過点</li>
            <li className="pl-1 marker:text-gray-500">「こんなこと聞いていいの？」は全部聞いていい。AIは怒らない、笑わない</li>
            <li className="pl-1 marker:text-gray-500">最初の答えが微妙でも大丈夫——追加指示で2回目・3回目に良くなる</li>
            <li className="pl-1 marker:text-gray-500">1週間後の「すごい！」体験が継続のエンジンになる</li>
            <li className="pl-1 marker:text-gray-500">期待値を「完成品」から「たたき台」に変えた瞬間、使い勝手が変わる</li>
            <li className="pl-1 marker:text-gray-500">1ヶ月後、気づいたら毎朝使っていた——習慣になるのはそういうもの</li>
          </ul>
        </motion.section>

        {/* 日記フェーズ */}
        {diaryPhases.map((phase) => (
          <motion.section
            key={phase.id}
            id={phase.id}
            className="mt-14 scroll-mt-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={sectionReveal}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{phase.icon}</span>
              <div>
                <p className="text-sm font-semibold tracking-wide text-will-primary">{phase.period}</p>
                <h2 className="text-2xl font-bold text-gray-900">{phase.title}</h2>
              </div>
            </div>
            <div className="mt-6 space-y-6">
              {phase.entries.map((entry) => (
                <div key={entry.day} className="rounded-xl border border-gray-200 bg-white p-6 shadow-subtle">
                  {phase.entries.length > 1 && (
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">{entry.day}</p>
                  )}
                  <div className="whitespace-pre-line text-base leading-9 text-gray-700">{entry.text}</div>
                </div>
              ))}
            </div>
            {phase.lesson && (
              <div className="mt-4 rounded-lg border border-will-primary/20 bg-will-lighter/40 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-will-primary">{phase.lesson.label}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{phase.lesson.text}</p>
              </div>
            )}
          </motion.section>
        ))}

        {/* 中間CTA（2週間後の後に配置） */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="あなたの最初の1ヶ月を、一緒に歩きましょう"
            description="AIリブートでは毎週1本、AI初心者が仕事で使えるヒントとニュース解説をLINEで届けています。LINE登録で「30日学習プランテンプレ」も無料プレゼント中。あなたのペースで始められます。"
            buttonLabel="AIリブートのLINEを追加する（無料）"
          />
        </motion.section>

        {/* AI活用の真実 */}
        <motion.section
          id="truth"
          className="mt-14 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">
            1ヶ月使って気づいた「AI活用の真実」
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            使い始める前に知っておきたかった、でも使ってみないと絶対にわからなかった、3つのことがあります。
          </p>
          <div className="mt-6 space-y-5">
            {truthItems.map((item) => (
              <div key={item.id} className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 自分へのアドバイス */}
        <motion.section
          id="advice"
          className="mt-14 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">
            AI初心者だったあの日の自分へ贈る、5つのアドバイス
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            今の私が、始める前の自分に伝えるとしたら、こう言います。
          </p>
          <ol className="mt-6 space-y-5">
            {adviceItems.map((item) => (
              <li key={item.no} className="flex gap-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* FAQ */}
        <motion.section
          id="faq"
          className="mt-14 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
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
          id="summary"
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">
            まとめ：やって良かったと思える理由
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            正直に言うと、1ヶ月後の私は「もっと早く始めればよかった」とは思っていません。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            代わりに思っているのは、「今の自分が始めたことが、ちょうどよかった」ということ。始めるタイミングに遅すぎはない。準備ができたときが、始め時です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事を読んでいるということは、あなたはもう「準備ができている」のだと思います。最初の5分間、何を打てばいいかわからなくて当然です。最初の答えが微妙でも、当然です。でも、その先に、小さな「すごい」が待っています。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">初日のハードルは「使い方がわからない」ではなく、「話しかける勇気がなかった」だった</li>
            <li className="pl-1 marker:text-gray-500">1週間後には、ひとつの「すごい！」体験が生まれる</li>
            <li className="pl-1 marker:text-gray-500">2週間後には、AIと対等に話せる感覚が生まれる</li>
            <li className="pl-1 marker:text-gray-500">1ヶ月後には、なくなったら困る道具になっている</li>
          </ul>
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
            title="あなたの最初の1ヶ月を、一緒に歩きましょう"
            description="週1本、仕事で使えるAI知識とニュース解説をLINEで届けています。LINE登録で「30日学習プランテンプレ」（bonus06）も無料でお受け取りいただけます。まずは登録だけでも、歓迎します。"
            buttonLabel="AIリブートのLINEを追加する（無料）"
          />
        </motion.section>

        {/* アカデミーCTA */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のステップ：「AI活用力」をキャリアの軸にしていきたい方へ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIリブートアカデミーは、生成AI活用力の習得にとどまらず、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまでを一体で設計しています。1ヶ月の体験で「もっとAIを武器にしたい」「これをキャリアに活かしたい」と感じた方は、学習プロセス全体を見直してみることをおすすめします。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/how-to-learn-generative-ai"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              生成AIの学び方ロードマップを見る
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
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
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
              <Link href="/academy/blog/ai-study-continue-habits" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを続けるための習慣デザイン｜初心者が3ヶ月後も使い続けられる7つのコツ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-vision-camera-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT画像認識（Vision）の使い方完全ガイド｜写真を撮るだけでAIが解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/how-to-learn-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-3month-journey" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTを3ヶ月使い続けたら、こんな変化が起きた｜AI初心者が正直に語る体験記
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
