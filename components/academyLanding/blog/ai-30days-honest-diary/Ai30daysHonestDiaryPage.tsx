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

const keywordTags = ["AI 30日間 体験", "ChatGPT 使い続けた 感想", "AI 仕事 効果 正直", "生成AI 使った結果"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "declaration", label: "正直な宣言：30日間の記録を公開します" },
  { id: "week-1", label: "第1週：新鮮な驚きと最初の失望（1〜7日目）" },
  { id: "week-2", label: "第2週：慣れてくる（8〜14日目）" },
  { id: "week-3", label: "第3週：習慣化する（15〜21日目）" },
  { id: "week-4", label: "第4週：「これがAIの使い方か」（22〜30日目）" },
  { id: "honest-eval", label: "30日間のまとめ：正直な評価" },
  { id: "advice", label: "初心者へのアドバイス（30日経験者から）" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
] as const;

const diaryPhases = [
  {
    id: "week-1",
    period: "第1週（1〜7日目）",
    title: "新鮮な驚きと最初の失望",
    icon: "🌱",
    entries: [
      {
        day: "1〜3日目",
        text: `最初に試したのは、溜まっていたメールの返信です。「この取引先へのお断りメール、3パターン書いて」と入力したら、1分もかからずに3つの文案が出てきました。

「え、本当に使えるじゃないか」——正直、かなり驚きました。3パターンのうち2つはそのまま使えるレベル。残り1つは少し手を入れて送りました。30分かかっていた作業が、5分で終わった。

ただ、2日目に早くも失望も経験しました。先週の会議の議事録を「まとめて」と頼んだのですが、音声起こしツールから書き出したテキストを貼り付けたところ、なぜか存在しない決定事項が混じって出てきた。

「A社との契約について来月中に最終判断」と書かれていたが、そんな話は会議で一切出ていない。慌てて元のテキストを見直しても、やはりない。AIが「それっぽい内容」を補完してしまったのです。

3日目、同僚に「AIって使ってる？」と聞いてみたら、「使ってるけど、議事録は怖くて使えない」と言われました。同じ失敗をしているんだと気づいた。`,
      },
      {
        day: "4〜7日目",
        text: `4日目以降は、何が得意で何が苦手かを意識しながら使い始めました。

「知っていること」と「知らないこと」がはっきりある道具なんだ、と理解できてきた。文章の型を作るのは得意。でも「実際に起きたこと」を正確に再現するのは苦手——そう割り切ったら、急に使い心地が良くなってきました。

1週間の収穫として一番大きかったのは、「コピペで使えるメールの返信文を3パターン出してもらう」ことが最も時短になる使い方だという発見です。お断りメール、依頼メール、お礼メール。どれも「状況を説明して3パターン」と入力するだけで、たたき台がすぐ揃う。

ちょっとした計算を頼んでみたところ（消費税の計算、粗利率の計算）、何度やっても間違いが混じってくるのも気づきました。「AIに数字の計算を任せるな」という教訓は、1週間で学んだ最重要事項でした。`,
      },
    ],
    lesson: {
      label: "第1週の気づき",
      text: "AIは「知っていること」と「知らないこと」がある。文章の型を作るのは得意。でも「実際に起きたこと」を正確に再現したり、数値計算をするのは苦手。この性質を把握するだけで、使い方の精度が一気に上がります。",
    },
  },
  {
    id: "week-2",
    period: "第2週（8〜14日目）",
    title: "慣れてくる：「質問の仕方」が変わった週",
    icon: "💡",
    entries: [
      {
        day: "8〜11日目",
        text: `2週目に入って、最初の大きな変化がありました。「最初の回答をそのまま使うのをやめた」のです。

1週目は、AIが出してきた文章に「なんか違う」と感じながらも、「直す方が面倒」という気持ちでそのまま使っていました。でも、少し追加指示を出してみたら、見違えるほど良くなる。

「もっと柔らかいトーンにして」
「箇条書きじゃなく、一段落にまとめて」
「相手は60代の役員なので、もう少し丁寧な表現に」

たったこれだけで、全然違う文章が出てきた。AIは「最初の回答」が完成品ではなく、「一緒に作っていくもの」だとようやく体感できました。

もう一つ気づいたのは、「質問の仕方を変えると答えが変わる」ということ。「企画書を書いて」より「〇〇という会社への提案書として、メリットを3点挙げて」の方が、圧倒的に使える回答が返ってくる。`,
      },
      {
        day: "12〜14日目",
        text: `うまくいった使い方として、会議前の議題整理があります。「明日の打ち合わせでは、A案とB案を比較して決める。それぞれのメリット・デメリットを整理してほしい」と頼んだら、自分の思考がかなりクリアになった。

AIの回答を「正解」として使うのではなく、「自分の考えを整理するためのたたき台」として使う——この感覚が2週目に定着してきました。

一方でうまくいかなかったのは、専門的な数値を含む仕事です。業界特有の数値や、自社の過去データが必要な計算は、AIに渡す情報が少なすぎて的外れな答えが返ってきます。「数字が絡む仕事はAIを信用しない」というルールが、2週目で完全に固まりました。`,
      },
    ],
    lesson: {
      label: "第2週の気づき",
      text: "AIは「一度で完璧な答えを出してくれる機械」ではない。追加指示を出すと格段に良くなる。また「自分の思考を整理するツール」として使うと、意外なほど力を発揮します。最初の回答に満足できなくても、諦めずに一言追加してみることが大切。",
    },
  },
  {
    id: "week-3",
    period: "第3週（15〜21日目）",
    title: "習慣化する：「ないと困る」になってきた",
    icon: "🔄",
    entries: [
      {
        day: "15〜18日目",
        text: `3週目に入ったある日、気づいたことがあります。「もはやAIなしの仕事を想像できなくなってきた」ということ。

ただ、面白い変化も起きていました。最初と比べて、AIへの期待値が下がっていたのです。1週目は「なんでもできる！」と興奮していたのに、3週目には「できることとできないことがある、普通のツール」という認識になっていた。

でも、これが逆に使いやすさにつながっていました。期待値が適正になると、「ここはAIに頼む、ここは自分でやる」という判断が迷いなくできるようになる。ハンマーに「スクリュードライバーとしても使えないか」と期待しなくなる、みたいな感覚。

「AIが苦手な仕事」の輪郭が見えてきたことで、使う場面が明確になりました。文章の型作り・アイデア出し・情報整理・翻訳・要約——これらはほぼ毎日使えるレベル。でも、数値計算・固有名詞の確認・社内事情を含む判断——これらはAIに頼ると逆に非効率でした。`,
      },
      {
        day: "19〜21日目",
        text: `3週目に一番意外だった発見は、「今日の気分に合わせて相談する」という使い方でした。

仕事のことじゃなく、たとえば「最近なんとなくモヤモヤしているのだが、整理したい」と話しかけてみたら、AIが「何がモヤモヤの原因だと思いますか？」と聞き返してきた。

それに答えていたら、自分で「あ、そういうことか」と気づいた。

AIが解決策を出したわけではない。でも、AIに話しかけることで、自分の思考が整理されていく——この体験が、3週目の一番の収穫でした。「一日一回、困ったことをAIに話すだけで気が楽になる」という習慣が、この週から始まりました。`,
      },
    ],
    lesson: {
      label: "第3週の気づき",
      text: "AIへの期待値が適正になると、逆に使いやすくなる。「なんでもできる魔法」ではなく「いつでも相談できる賢い道具」として扱うようになった頃から、毎日の仕事への組み込み方が自然になってきました。思考整理ツールとしての価値も意外に大きい。",
    },
  },
  {
    id: "week-4",
    period: "第4週（22〜30日目）",
    title: "「これがAIの使い方か」：道具として見えてきた",
    icon: "🎯",
    entries: [
      {
        day: "22〜26日目",
        text: `4週目に入ると、AIへの接し方が「道具として見る」ようになっていました。

1週目は「すごい技術！」という感情があった。2週目は「思ったより使いにくい」という不満があった。3週目は「意外と使える」という再評価があった。4週目は、ただの道具として見えている。

エクセルと同じ感覚になった、と言えば伝わるでしょうか。エクセルも最初は難しくて、使えれば「すごい」と思って、いつしか「ないと困る道具」になる。AIも同じプロセスをたどっていた。

4週目で「AIが苦手な仕事」がさらに明確になりました。最終的な判断・責任が伴う文書・相手の感情を読む仕事・社内固有の情報が必要な仕事——これらは人間がやった方が速い。でも、「たたき台を作る」「構成を整理する」「文章を整える」「別の視点を探す」——これらはAIが圧倒的に速い。`,
      },
      {
        day: "27〜30日目",
        text: `30日目を迎えたとき、ふと思いました。「30日前の自分に戻りたいかと言われたら、戻りたくない」——その感覚が、一番正直な答えかもしれません。

すごく変わったわけじゃない。毎日劇的な時短が起きているわけでもない。でも、地味に、着実に、仕事の「詰まる場所」が減っていた。

メールを書くときの「さて、どう書こう」という数分間のロスがなくなった。企画書の骨子を「とりあえず出す」ことへの心理的ハードルが下がった。「どう説明しようか」と考え込む前に、AIにたたき台を出してもらう習慣がついた。

1日あたりに換算すると大した時間じゃない。でも、30日積み重なると、週に3〜5時間は確実に取り戻せている感覚があります。それ以上に、「仕事で詰まる感覚」が減ったことのほうが、精神的に大きかった。`,
      },
    ],
    lesson: {
      label: "第4週の気づき",
      text: "「道具として見る」ことができるようになると、AIの使い方が安定します。「すごい技術への期待」でも「使えない道具への不満」でもなく、「得意不得意がある普通のツール」として扱う。そうなると、自分の仕事への組み込み方が自然に決まってきます。",
    },
  },
] as const;

const honestEvalItems = [
  {
    id: "eval-1",
    icon: "⏱",
    title: "時短効果",
    label: "業種・用途による、週3〜5時間の感覚",
    body: "正直に言うと、「劇的な時短」は私の場合ありませんでした。でも、週単位で積み重ねると確実に3〜5時間は節約できている感覚があります。特に効果が大きかったのは、メール作成・会議前の議題整理・レポートのたたき台作成の3つ。逆に、数字を使う仕事・専門知識が必要な仕事では時短どころか確認作業が増えることもあった。",
  },
  {
    id: "eval-2",
    icon: "📝",
    title: "品質",
    label: "「たたき台」として優秀、そのまま使えるのは7割",
    body: "最終的に自分で手を入れる必要があるのは変わりません。でも、「ゼロから考える」疲労がなくなった。AIの出力は「完成品の7割」くらいの精度で、残り3割を自分で磨く——この分業が、私の中で一番うまくいくパターンでした。そのまま使えると感じたのは提案メールや依頼メールなど、型が決まっているものだけ。",
  },
  {
    id: "eval-3",
    icon: "🧠",
    title: "疲労感",
    label: "最初の2週間は「AIに何を頼めばいいか」考えることで逆に疲れた",
    body: "これは正直に書いておきたい。最初の2週間は、AIを使うこと自体に認知的なコストがかかっていました。「どう聞けばいいか」「この仕事はAIに向いているか」——これを毎回考えるのが地味に疲れる。3週目以降は考えなくても判断できるようになりますが、最初は「AIを使う練習をする疲れ」があると知っておくと安心です。",
  },
  {
    id: "eval-4",
    icon: "🔥",
    title: "継続意欲",
    label: "30日経っても使い続けたいと思っている（今も使い続けている）",
    body: "30日経った今も、使い続けています。最初の熱が冷めて「やっぱり要らないか」となる人も多いと聞きますが、私の場合は「道具として見える」ようになった3週目以降に逆に継続率が上がりました。期待値を下げたことが、長続きの秘訣だったと思います。",
  },
] as const;

const adviceItems = [
  {
    no: 1,
    title: "最初の1週間はとにかく「小さいことを頼む」",
    body: "「すごい使い方」を探さなくていいです。メールの返信・議事録の要約・アイデア出しの壁打ちなど、5〜10分かかっていた小さな作業を頼む。それだけで最初の1週間の成功体験は十分に積めます。大きなことを頼もうとして失敗する方が、やる気を削ぎます。",
  },
  {
    no: 2,
    title: "「使えない」と感じたら、質問の仕方を変えてみる",
    body: "AIの回答が期待外れだったとき、「AIが使えない」と結論づける前に、質問の情報量を増やしてみてください。状況・目的・相手・制約——これらを追加するだけで、全然違う回答が返ってきます。まず「もう少し詳しく言うと…」と追加指示を試すことが、一番のデバッグです。",
  },
  {
    no: 3,
    title: "30日続けると、自分なりの「得意なAIの使い方」が見つかる",
    body: "30日使うと、自分の仕事のどの部分にAIが向いているかが見えてきます。人によってそれは違う。メールが得意な人、会議準備が得意な人、思考整理が得意な人——自分の「AIのツボ」を見つけるのに、最低でも3週間はかかると思っておく方が良いです。",
  },
] as const;

export default function Ai30daysHonestDiaryPage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIと30日間使い続けた正直な記録" },
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
                title="AIと30日間使い続けた正直な記録：速くなったこと、期待外れだったこと、続けて気づいたこと【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIと30日間使い続けた正直な記録：速くなったこと、期待外れだったこと、続けて気づいたこと【2026年版】
          </h1>
          <p className="mt-1 text-sm font-medium text-gray-500">
            「すごい！」でも「全然ダメ」でもなく、「正直言うと、こんな感じ」
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月23日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIって本当に使えるのか？」——30日間、仕事でAIを使い続けて気づいた、良かったこと・悪かったこと・意外な発見を正直にまとめます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            結論を先に言います：<strong>使える場面と使えない場面があります。</strong>ただ、30日続けてわかったことがある。「使えないと感じた場面」の多くは、AIが悪いのではなく、頼み方が悪かった。そして「使える場面」は、使い続けるほど増えていく。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事は、「試してみたけど効果がわからない」と感じている人に、特に読んでほしいです。30日前の私も、まさにそうでした。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          合わせて読みたい：
          <Link href="/academy/blog/ai-first-month-honest-diary" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIを始めて1ヶ月の正直な日記
          </Link>
          ・
          <Link href="/academy/blog/ai-first-week-mistakes-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            最初の1週間でやりがちな5つのミス
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
            <li className="pl-1 marker:text-gray-500">AIは「使える場面」と「使えない場面」がある——この2つを区別するのに1週間かかった</li>
            <li className="pl-1 marker:text-gray-500">最初の1週間の最大の収穫：メールのたたき台作成が最も時短になる使い方</li>
            <li className="pl-1 marker:text-gray-500">2週目で気づいた：最初の回答をそのまま使うのをやめたら、使い心地が劇変した</li>
            <li className="pl-1 marker:text-gray-500">3週目で気づいた：期待値を下げたことで、逆に使いやすくなった</li>
            <li className="pl-1 marker:text-gray-500">4週目：道具として見えてきた。エクセルと同じ感覚になった</li>
            <li className="pl-1 marker:text-gray-500">30日後：週3〜5時間の節約感覚。でも一番大きかったのは「詰まる感覚」が減ったこと</li>
          </ul>
        </motion.section>

        {/* 正直な宣言 */}
        <motion.section
          id="declaration"
          className="mt-14 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">📓</span>
            <div>
              <p className="text-sm font-semibold tracking-wide text-will-primary">はじめに</p>
              <h2 className="text-2xl font-bold text-gray-900">正直な宣言：30日間の記録を公開します</h2>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-subtle">
            <div className="whitespace-pre-line text-base leading-9 text-gray-700">{`AIって本当に使えるのか、30日間試し続けた記録を公開します。

すごい成功談を書くつもりはありません。全然ダメだったという否定もしません。「正直言うと、こんな感じでした」という記録を残しておきたかった。

私自身、AIを始める前は「なんとなく怪しい」「試してみたけどよくわからなかった」という状態でした。でも30日続けてみたら、確かに変わったことがあった。

この記録が、同じように「試してみたけど効果がわからない」と感じている人の参考になれば、それだけで書いた価値があります。`}</div>
          </div>
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
              <div className="mt-4 rounded-lg border-l-4 border-will-primary bg-will-lighter/40 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-will-primary">{phase.lesson.label}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{phase.lesson.text}</p>
              </div>
            )}
          </motion.section>
        ))}

        {/* 中間CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="あなたの30日間を、一緒に歩きましょう"
            description="AIリブートでは毎週1本、AI初心者が仕事で使えるヒントとニュース解説をLINEで届けています。LINE登録で「30日学習プランテンプレ」も無料プレゼント中。あなたのペースで、始められます。"
            buttonLabel="AIリブートのLINEを追加する（無料）"
          />
        </motion.section>

        {/* 30日間の正直な評価 */}
        <motion.section
          id="honest-eval"
          className="mt-14 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">
            30日間のまとめ：4つの視点で正直に評価する
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            「時短効果」「品質」「疲労感」「継続意欲」——この4つの軸で、30日間を正直に総括します。
          </p>
          <div className="mt-6 space-y-5">
            {honestEvalItems.map((item) => (
              <div key={item.id} className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-will-primary">{item.label}</p>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 初心者へのアドバイス */}
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
            初心者へのアドバイス：30日経験者から正直に伝えたい3つのこと
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            「もしあの頃の自分に会えたら」という気持ちで、書きます。
          </p>
          <ol className="mt-6 space-y-5">
            {adviceItems.map((item) => (
              <li key={item.no} className="flex gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                  {item.no}
                </span>
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
            まとめ：30日間の正直な結論
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「AIって本当に使えるのか？」——30日前の私が持っていた問いへの答えは、こうです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            <strong>使えます。ただし、使い方を見つけるのに30日かかります。</strong>
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            1週間で「使えない」と判断するのは早すぎます。最初の2週間は「AIの使い方を学ぶ期間」で、効率が上がるのは3週目以降。30日続けてはじめて、自分の仕事への組み込み方が見えてくる。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">1週目：AIの得意・不得意がわかる</li>
            <li className="pl-1 marker:text-gray-500">2週目：「追加指示」の力がわかる</li>
            <li className="pl-1 marker:text-gray-500">3週目：期待値が適正になり、使いやすくなる</li>
            <li className="pl-1 marker:text-gray-500">4週目：道具として見えてくる。自分なりの使い方が定まる</li>
          </ul>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事を読んでいる時点で、あなたはもう「30日間試してみる準備」ができていると思います。完璧な使い方を探さずに、まず小さいことを一つ頼んでみてください。
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
            title="この30日間で一番良かったのは、コミュニティで同じ立場の人と話せたこと"
            description="AIリブートのLINEでは、同じように「試してみたけど効果がわからない」と感じている人が集まっています。週1本のAI活用ヒントと最新情報をお届けしています。LINE登録で「30日学習プランテンプレ」（bonus06）も無料でお受け取りいただけます。"
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
            30日間の体験で「もっとAIを仕事に活かしたい」と感じた方に、AIリブートアカデミーをおすすめします。生成AI活用の基礎から応用まで、同じ立場の仲間と一緒に学べる環境を用意しています。一人で試行錯誤するより、仲間と学んだほうが30日間の質が変わります。
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
              <Link href="/academy/blog/ai-first-month-honest-diary" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIを始めて1ヶ月、正直に日記にしてみた
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-first-week-mistakes-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIを使い始めた最初の1週間でやりがちな5つのミス【2026年版】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-study-continue-habits" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを続けるための習慣デザイン｜初心者が3ヶ月後も使い続けられる7つのコツ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-3month-journey" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTを3ヶ月使い続けたら、こんな変化が起きた｜AI初心者が正直に語る体験記
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-results-gap-honest-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIへの期待と現実のギャップ正直ガイド
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
