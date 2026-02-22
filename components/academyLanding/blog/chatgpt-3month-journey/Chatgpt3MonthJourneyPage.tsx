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

const keywordTags = ["ChatGPT 使い続けた 変化", "AI 生活 変わった", "生成AI 体験談", "ChatGPT 続けるコツ", "AI習慣化"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "day-zero", label: "0日目：最初の「壁」" },
  { id: "week-one", label: "1週間後：小さな驚きの積み重ね" },
  { id: "month-one", label: "1ヶ月後：習慣になってきた" },
  { id: "month-three", label: "3ヶ月後：こんな変化が起きた" },
  { id: "advice", label: "始める前に知っておきたかった5つのこと" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ：3ヶ月後のあなたへ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const useCases = [
  {
    num: 1,
    scene: "取引先へのお断りメール",
    detail:
      "「角が立たないお断りメールを書いて」と状況を説明したら、気が利いた文面が30秒で出てきた。これだけで「元を取った」と思った。",
    category: "仕事",
  },
  {
    num: 2,
    scene: "会議の議事録まとめ",
    detail:
      "1時間の会議メモをChatGPTに貼り付けて「決定事項・宿題・議論ポイントの3つに整理して」と指示。以前は30分かかっていたが5分に縮んだ。",
    category: "仕事",
  },
  {
    num: 3,
    scene: "資料の校正・推敲",
    detail:
      "「この文章を読んで、論理が弱い部分と誤字を指摘して」と投げると、自分では気づかなかった表現のブレを指摘してくれた。",
    category: "仕事",
  },
  {
    num: 4,
    scene: "調べ物の深掘り",
    detail:
      "Googleで検索するより「〇〇について初心者向けに500字で説明して。その後、よくある誤解を3つ教えて」と聞く方が、理解が早い。",
    category: "仕事",
  },
  {
    num: 5,
    scene: "週次報告書の下書き",
    detail:
      "今週やったことをメモとして羅列して「週次報告書にまとめて」と渡すと、体裁を整えてくれる。最後に自分で微調整するだけ。",
    category: "仕事",
  },
  {
    num: 6,
    scene: "プレゼン資料の構成案",
    detail:
      "「〇〇についての10分プレゼン。聴衆は40代の非専門家。説得力のある構成を5スライドで提案して」と聞くと、意外と鋭い構成が返ってくる。",
    category: "仕事",
  },
  {
    num: 7,
    scene: "難しいメールの返信文",
    detail:
      "クレームっぽいメールへの返信に毎回頭を抱えていたが、状況とトーンの希望を伝えれば下書きが出てくる。あとは温度感を調整するだけ。",
    category: "仕事",
  },
  {
    num: 8,
    scene: "英語メールの翻訳・作成",
    detail:
      "日本語で書いた内容を英語にしてもらう。「フォーマルな英語で、感謝の気持ちを添えて」と指示するだけで十分通用する英文が返ってくる。",
    category: "仕事",
  },
  {
    num: 9,
    scene: "企画書のアイデア出し",
    detail:
      "「〇〇をテーマに10代向けの企画を10個出して」と投げて、気に入ったものを深掘りしてもらう。壁打ち相手として最強。",
    category: "仕事",
  },
  {
    num: 10,
    scene: "専門用語の噛み砕き",
    detail:
      "「この契約書の条項を中学生でもわかる言葉に翻訳して」と渡すと、法律用語をわかりやすくほぐしてくれる。",
    category: "仕事",
  },
  {
    num: 11,
    scene: "旅行計画の初稿",
    detail:
      "「3泊4日で京都と大阪。移動効率を考えたモデルコースを作って」と投げると、地図で確認したくなる行程表が出てくる。",
    category: "プライベート",
  },
  {
    num: 12,
    scene: "冷蔵庫の残り物レシピ",
    detail:
      "「鶏むね肉、ピーマン、玉ねぎ、ごま油がある。20分で作れる夕飯を教えて」。かなりの確率で使える献立が来る。",
    category: "プライベート",
  },
  {
    num: 13,
    scene: "読んだ本の内容整理",
    detail:
      "読書メモをChatGPTに貼り付けて「学んだことを3つの教訓にまとめて」と頼む。自分では気づかなかった視点で整理してくれることがある。",
    category: "プライベート",
  },
  {
    num: 14,
    scene: "モヤモヤの言語化",
    detail:
      "「なんとなく仕事がしんどい気がする。うまく言語化できないのですが、整理を手伝ってもらえますか」と話しかけると、対話しながら問題を整理してくれた。",
    category: "プライベート",
  },
  {
    num: 15,
    scene: "SNS投稿の文章チェック",
    detail:
      "「この文章、誤解を招く表現がないかチェックして。想定読者は40代のビジネスパーソン」と渡すと、思わぬ指摘が来ることがある。",
    category: "プライベート",
  },
] as const;

const threeMonthChanges = [
  {
    title: "仕事のスピードが体感で1.3〜1.5倍になった",
    detail:
      "一番実感したのは「下書き」が消えたこと。以前は白紙のWordに向かってうーんと唸っていた時間が、AIに「まず叩き台を出して」と頼むことで激減した。完璧じゃなくていい。70点の素材から削るほうが、0から作るより圧倒的に速い。",
  },
  {
    title: "「メールを書くのが怖い」がなくなった",
    detail:
      "以前は難しい返信を後回しにして、メールの未読が溜まっていた。今は「まずAIに下書きを作ってもらう」が自分の中のルールになった。怖さの正体は「どう書けばいいかわからない」だったと気づいた。",
  },
  {
    title: "「AIならどう考えるか」という視点が生まれた",
    detail:
      "3ヶ月使っていると、問題に直面したとき自然と「AIに聞いたら何が返ってくるか」を想定するようになった。これが面白くて、自分の考えを整理する前段として使えるようになった。AIを「答えを出すもの」ではなく「思考の鏡」として見るようになった。",
  },
  {
    title: "「反論役」として使い始めた",
    detail:
      "自分が作った企画を「このアイデアに対して批判的な立場から反論して」と投げると、盲点が見えてくる。上司から詰められる前に、AIに詰めてもらうイメージ。3ヶ月前の自分には想像もできなかった使い方だ。",
  },
  {
    title: "使えなかった頃には戻れない",
    detail:
      "「以前はどうやって仕事していたんだっけ」と本気で思う瞬間がある。電卓を使い始めた後に筆算で全部やれと言われたら困るのと同じで、もうAIなしの状態には戻れない気がする。これは依存かもしれないが、電卓への依存と同じくらい「正常な進化」だと思っている。",
  },
] as const;

const adviceItems = [
  {
    num: 1,
    title: "完璧なプロンプトを目指さなくていい",
    detail:
      "最初、「どう聞けばいいかわからない」という壁にぶつかった。でも試行錯誤して気づいたのは、AIは「ちょっと雑な質問」でもちゃんと動いてくれるということ。「もっと短く」「もっとやわらかく」と追加指示を出せばいい。最初の質問は6割の完成度でいい。",
  },
  {
    num: 2,
    title: "失敗してもAIは怒らない",
    detail:
      "「こんな変な質問をして恥ずかしい」という感覚は、使い始めて2週間でなくなった。AIは感情がないから、どんな質問をしても返してくれる。「馬鹿にされる」「笑われる」という恐れが、AIとの対話には存在しない。この安心感が、踏み出す勇気を支えてくれた。",
  },
  {
    num: 3,
    title: "まず「今日困っていること」を1つ聞いてみる",
    detail:
      "「AIの勉強をしよう」と意気込むより、「今日のこの仕事をAIに手伝ってもらおう」の方が続く。抽象的な練習より、リアルな困りごとの方がAIの良さを感じやすい。毎日の仕事の中に「AIを試す枠」を1つ作るだけでいい。",
  },
  {
    num: 4,
    title: "続けるコツは「習慣の棚に乗せる」",
    detail:
      "朝のコーヒーを飲みながら、毎日のメールチェックの前に——既存の習慣にAIを紐付けると、「今日も使おう」と意識しなくても自然に続く。「AIを使う時間を確保する」ではなく「今やっていることの一部をAIに渡す」が正解だった。",
  },
  {
    num: 5,
    title: "AIとの対話は「育てる」感覚",
    detail:
      "ChatGPTはメモリー機能で過去の会話を覚えてくれる。「私はXX業界で働いていて、文章は硬めより柔らかめが好み」と伝えておくと、以降の回答がそれに合わせて変わってくる。育てるほど使いやすくなる——これが3ヶ月続けた一番の収穫かもしれない。",
  },
] as const;

export default function Chatgpt3MonthJourneyPage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPTを3ヶ月使い続けた体験記" },
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
                title="ChatGPTを3ヶ月使い続けたら、こんな変化が起きた｜AI初心者が正直に語る体験記【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPTを3ヶ月使い続けたら、こんな変化が起きた｜AI初心者が正直に語る体験記【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            最初の3日間、私は何をすればいいかわからなかった。
            ChatGPTを開いて、点滅するカーソルの前で固まった。「何でも聞いていいよ」と言われても、「何を聞いていいか」がわからない——あの感覚、覚えていますか？
            この記事は、そんなAI初心者だった私が、ChatGPTを3ヶ月使い続けて実際に感じた変化を、できるだけ正直に書いたものです。
            「AIって本当に役に立つの？」「自分が続けられるか不安」——そう思っている方に、技術解説ではなく「等身大のリアル」を届けたくて書きました。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIへの不安を乗り越えるガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTスマホ開始ガイド
          </Link>
          ・
          <Link href="/academy/blog/how-to-ask-ai-beginners" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIへの聞き方完全入門
          </Link>
          ・
          <Link href="/academy/blog/ai-daily-life-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            日常生活×AI活用術20選
          </Link>
          もあわせて読むと、使い方のイメージがさらに膨らみます。
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
              最初の1週間は「何を聞けばいいかわからない」状態が続くのは普通。1つのリアルな困りごとから始めると突破口が開く
            </li>
            <li className="pl-1 marker:text-gray-500">
              1ヶ月で「当たり前の道具」になる。仕事メール・議事録・アイデア出しなど15の具体シーンで実感が生まれた
            </li>
            <li className="pl-1 marker:text-gray-500">
              3ヶ月後の最大の変化は「思考の変化」。スピードより、問題との向き合い方が変わった
            </li>
            <li className="pl-1 marker:text-gray-500">
              続けるコツは「習慣の棚に乗せる」。既存の習慣にAIを紐付けると、意識しなくても続けられる
            </li>
            <li className="pl-1 marker:text-gray-500">
              完璧なプロンプトは不要。「今日困っていること」を1つ聞くだけで十分な価値が生まれる
            </li>
          </ul>
        </motion.section>

        {/* 0日目：最初の「壁」 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="day-zero" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            0日目：最初の「壁」
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTを使い始めたのは、正直なところ「焦り」がきっかけだった。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            職場で同僚が「AIで議事録まとめたらめっちゃ速かった」と言い出したのが発端だ。
            それまで「AIとかまだ早いでしょ」と思っていたのに、気づいたら自分だけ取り残されそうな予感がした。
            curiosityというよりも、少しの危機感と、「乗り遅れたくない」という感情に背中を押されて、
            アカウントを作った。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ところがChatGPTを開いたら、何も浮かばなかった。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            入力欄が、静かに点滅している。「何でも聞いてください」という雰囲気で待ち構えている。
            でも私には、何を聞けばいいのかわからなかった。「こんなこと聞いていいの？」という謎の遠慮もあった。
            「天気を教えて」はスマホで調べれば十分だし、「仕事の相談」は何から話せばいいかわからないし、
            「小説を書いて」とかは私には関係ない気がした。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            結局、最初の3日間は「こんにちは、よろしくお願いします」と送って、返ってきた丁寧な返事を眺めただけで終わった。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            <strong>これはきっと、あなたと同じ経験だと思う。</strong>
            「AIを使おうとしたけど、何もできなかった」。その最初の壁は、多くの人が経験している。
            でも私はその壁を、ある日の「切羽詰まった状況」で突破した。
          </p>
          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm font-semibold text-will-primary">壁を突破したきっかけ</p>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              明日朝一で送らなければいけない取引先へのお断りメール。どう書いていいかわからず、
              残業で頭も疲れていた。「ダメ元で」とChatGPTに状況を打ち込んで「お断りメールを書いてほしい」と頼んだ。
              30秒で、ちゃんとしたメールが返ってきた。
              私は「これ、使えるじゃないか」と思って、それ以来毎日開くようになった。
            </p>
          </div>
        </motion.section>

        {/* 1週間後 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="week-one" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            1週間後：小さな驚きの積み重ね
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            メールの体験が良かったから、翌日も使ってみた。今度は会議のメモを放り込んで「議事録にまとめて」と頼んだ。
            箇条書きがきれいに整理されて返ってきたとき、思わず「え、これ自分でやるより全然いいじゃん」と声が出た。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この最初の1週間は、まだ使い方がぎこちない時期だった。
            「もっと短くして」「もっと丁寧に」と追加指示を出すことを覚えていなかったから、
            最初の回答がいまいちだと「やっぱりダメか」と思って使うのをやめることもあった。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            でも、「最初の回答が完成品ではなく、会話のスタート地点だ」と気づいてから変わった。
            「もう少し柔らかい言い回しにして」「箇条書きを3つに絞って」と追加で指示すると、ぐっと良くなる。
            この「追加指示で育てる」感覚をつかんだのが、1週間目の最大の収穫だった。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">「これは便利！」と思った瞬間 TOP3</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-green-900">
                <li className="pl-1">お断りメールが30秒で出てきた（1日目）</li>
                <li className="pl-1">1時間の会議メモが5分で議事録になった（3日目）</li>
                <li className="pl-1">「もう少し柔らかく」の追加指示で文章が激変した（5日目）</li>
              </ol>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm font-semibold text-amber-800">まだぎこちなかった部分</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-amber-900">
                <li className="pl-1">最初の回答が気に入らないと諦めてしまう</li>
                <li className="pl-1">「何を聞いたらいいか」に迷う時間がある</li>
                <li className="pl-1">正確な情報かどうか不安で使いきれない</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AIへの質問が不安な方は、
            <Link href="/academy/blog/how-to-ask-ai-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIへの聞き方完全入門
            </Link>
            も参考にしてみてください。「何を聞けばいいかわからない」が具体的に解決します。
          </p>
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
          <MidArticleCtaBox slug="chatgpt-3month-journey" />
        </motion.section>

        {/* 1ヶ月後 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="month-one" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            1ヶ月後：習慣になってきた｜具体的な活用シーン15選
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            1ヶ月を過ぎたころ、気づいたらChatGPTを開くのが「当たり前」になっていた。
            「困ったらまずAIに聞く」が自分のワークフローに組み込まれていたのだ。
            以下は、1ヶ月で実際に使ったシーンをまとめた15例だ。
            うまくいかなかった場面も正直に書く。
          </p>
          <div className="mt-6 space-y-3">
            {useCases.map((item) => (
              <div key={item.num} className="flex gap-4 rounded-lg border border-gray-200 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-will-primary/10 text-sm font-bold text-will-primary">
                  {item.num}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-base font-semibold text-gray-900">{item.scene}</p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        item.category === "仕事"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-7 text-gray-700">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-800">うまくいかなかった場面も正直に</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-400">
                <strong>最新情報を聞いたとき</strong>——ChatGPTは知識のカットオフがあるため、最新ニュースや株価など、リアルタイムの情報には弱い。Web検索機能を使っても完璧ではないので、重要な数字は公式サイトで確認が必要。
              </li>
              <li className="pl-1 marker:text-gray-400">
                <strong>数値計算が絡む資料の確認</strong>——財務諸表の数字の確認をお願いしたとき、計算ミスが混じっていた。ハルシネーション（AIの思い込みによる誤り）は完全にはなくなっていないので、重要な数字は自分で確認する習慣は必須。
              </li>
              <li className="pl-1 marker:text-gray-400">
                <strong>「気持ちを汲んでほしい」系の相談</strong>——愚痴を聞いてほしいとき、AIの返しはどうしても「整理されすぎ」で、人間の友人のような共感とは少し違う。感情的な寄り添いより、問題解決が得意なツールだと思った方がいい。
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIが間違いを返すことへの対処法は、
            <Link href="/academy/blog/ai-hallucination-fact-check-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIのハルシネーションを見抜く7つのテクニック
            </Link>
            が詳しいです。
          </p>
        </motion.section>

        {/* 3ヶ月後 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="month-three" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            3ヶ月後：こんな変化が起きた
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            3ヶ月後に気づいた変化は、「スピード」より「思考の変化」の方が大きかった。
            想定していたよりも、内側が変わっていた。
          </p>
          <div className="mt-6 space-y-6">
            {threeMonthChanges.map((item, i) => (
              <section key={item.title} className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-base font-bold text-orange-700">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-8 text-gray-700">{item.detail}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-orange-200 bg-orange-50 p-5">
            <p className="text-sm font-semibold text-orange-900">3ヶ月の正直な感想まとめ</p>
            <p className="mt-3 text-sm leading-7 text-orange-800">
              「AIがすごい」より「こんな使い方あったんだ」という発見の連続だった。
              魔法のツールではなく、使い込むほど手に馴染む道具という感覚が近い。
              劇的な変化より、小さな積み重ねが3ヶ月でじわじわと仕事と思考を変えていた。
            </p>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            AIが日常生活にどう溶け込むか、もっと具体例を知りたい方は
            <Link href="/academy/blog/ai-daily-life-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              日常生活×AI活用術20選
            </Link>
            もあわせてどうぞ。
          </p>
        </motion.section>

        {/* アドバイス5つ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="advice" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI初心者へ：始める前に知っておきたかった5つのこと
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            3ヶ月前の自分に伝えたいこと、を整理した。これを知っていたら、もう少し早く、
            もう少し気楽に始められたと思う。
          </p>
          <div className="mt-6 space-y-5">
            {adviceItems.map((item) => (
              <section key={item.num} className="rounded-xl border-2 border-will-primary/15 bg-will-lighter/30 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
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
            title="「3ヶ月後の自分を変えたい」方へ——まずLINEで相談してみませんか"
            description="ChatGPTを使い続けるコツも、何から始めればいいかも、LINEで気軽に相談できます。AIリブートアカデミーは経産省リスキリング補助金対象の100日間プログラム。補助金の使い方・カリキュラム・学習イメージを無料でお伝えします。"
            buttonLabel="LINEで気軽に相談する（登録無料）"
          />
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
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：3ヶ月後のあなたへ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTを3ヶ月使い続けた正直な感想を、できるだけリアルに書いてみた。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">最初の3日は「何を聞けばいいかわからない」で終わっていい</li>
            <li className="pl-1 marker:text-gray-500">突破口は「今日の困りごとを1つ聞いてみる」だけ</li>
            <li className="pl-1 marker:text-gray-500">1ヶ月で習慣になり、3ヶ月で思考が変わる</li>
            <li className="pl-1 marker:text-gray-500">完璧なプロンプトは要らない。追加指示で育てていく</li>
            <li className="pl-1 marker:text-gray-500">うまくいかない場面も正直にあるが、それより「使えた場面」の方が多い</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            今から3ヶ月後、「あの頃はAI使えなかったな」と振り返る自分がいるかもしれない。
            その3ヶ月を、今日から始めてみてほしい。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            「やってみたら意外と面白かった」——その感覚を、あなたにも体験してほしくて、この記事を書いた。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            最初の一歩は小さくていい。今日の「困りごと」を1つ、ChatGPTに聞いてみるところから。
          </p>
        </motion.section>

        {/* CTA：次に学ぶ */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="academy-cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のステップ：もっとAIを使いこなしたくなったら
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            3ヶ月の体験を経て「もっと体系的に学びたい」と感じたら、
            プロンプトの書き方を学ぶと回答品質が格段に上がります。
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
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/how-to-ask-ai-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTに何を聞けばいい？｜AIへの質問・相談の仕方がわかる完全入門ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-daily-life-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIで暮らしが変わる｜日常生活×生成AI活用術20選【2026年版】
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
                AIのハルシネーション対策ガイド｜誤情報を見抜くファクトチェック手順
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-free-guide-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT無料版でここまでできる！2026年最新
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-mastery-tips-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを「使えるようになった人」がやっていた5つのこと
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
