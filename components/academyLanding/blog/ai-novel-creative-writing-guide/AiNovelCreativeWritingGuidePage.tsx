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

const keywordTags = ["AI 小説 創作", "ChatGPT 物語", "Claude 創作文章", "AI 創作入門", "プロンプト 創作"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "why-ai-writing", label: "AIは「創作の敵」ではなく「最高の相棒」" },
  { id: "five-scenes", label: "創作活動でAIが役立つ5つの場面" },
  { id: "prompt-collection", label: "今すぐ試せるプロンプト集（ジャンル別）" },
  { id: "chatgpt-vs-claude", label: "ChatGPT vs Claude 創作適性の比較" },
  { id: "mindset", label: "「AIに書かせた」ではなく「AIと一緒に書いた」" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "conclusion", label: "まとめ：今日から始める3ステップ" },
] as const;

const summaryItems = [
  "AIは「アイデアが出ない」「書き始めが怖い」「途中で止まった」——小説あるあるを全部助けてくれる相棒。プロを目指す人も、趣味で書きたい人も使える",
  "創作でAIが役立つ場面は5つ：①プロット設計、②キャラクター設定、③場面描写のヒント、④セリフ磨き、⑤行き詰まりの打開",
  "ジャンル別プロンプト（ファンタジー・恋愛・ミステリー）をそのままコピーして試せる。完璧なプロンプトより「とりあえず試してみる」が最速",
  "ChatGPTは構成・プロット整理が得意。Claudeは文体の繊細さ・感情描写が得意。用途で使い分けるのがコツ",
  "大切なのは「AIが書いた」ではなく「AIと一緒に書いた」という姿勢。著作権はあなたのもの、魂もあなたが込める",
] as const;

const fiveScenes = [
  {
    title: "①プロット（あらすじ）の設計",
    icon: "🗺️",
    description:
      "「何を書けばいいかわからない」「物語の全体像が見えない」——創作の最初の壁がプロット設計です。AIは「こんな話を書きたい」という断片的なアイデアを受け取って、起承転結のある物語の骨格を一緒に作ってくれます。「主人公が魔法使いで、裏切り者がいて、最後は感動的な結末にしたい」という程度の情報でも、AIは具体的な物語の流れを提案してくれます。あなたはそこから「この展開は気に入らない。こうしたい」と修正しながら、自分の物語を育てていけばいい。",
    promptExample: "「高校生の魔法使いが師匠を失い、復讐を誓うが、最後に赦しを選ぶ」という設定で、5章構成のプロットを作ってください。第2章に裏切り者の伏線を入れてください。",
  },
  {
    title: "②キャラクター設定の深掘り",
    icon: "🎭",
    description:
      "「主人公を作ったけど、なんか薄い気がする」——そんなとき、AIはキャラクターのインタビュアーになってくれます。生い立ち・口癖・コンプレックス・大切にしているもの・失いたくないもの……キャラクターの内面を一緒に掘り下げることで、「この人なら絶対こう行動する」という確信が持てるキャラクターが育っていきます。また、サブキャラクターの設計や、主人公と敵役の関係性の構築にもAIは力を発揮します。",
    promptExample: "28歳の女性探偵・橘凜を設計してください。幼少期に経験した喪失体験、職業を選んだ理由、仕事上の癖、親友との関係、絶対に譲れない信念を含めてください。",
  },
  {
    title: "③場面描写のアイデア出し",
    icon: "🌅",
    description:
      "「会話文は書けるけど、風景や情景描写が苦手」という人は多いです。AIに「この場面をもっと情感豊かに描写して」と頼むと、さまざまな描写例を提案してくれます。あなたはそれを参考に、自分の言葉に翻訳すればいい。「夜の港」「廃墟の教室」「初雪が降る朝」など、シチュエーションを渡すだけで複数の表現候補を出してくれるため、描写のバリエーションが一気に広がります。",
    promptExample: "主人公が5年ぶりに故郷に帰ってきた夜の駅のシーンを、感傷的で詩的な文体で200字程度で描写してください。駅の古さと時間の経過を感じさせてください。",
  },
  {
    title: "④セリフを磨く",
    icon: "💬",
    description:
      "キャラクターの個性はセリフに出ます。「なんかセリフが棒読みになる」「このキャラはもっと面白い言い方をしそう」——そんなときにAIが役立ちます。「このキャラは皮肉屋で博識な老探偵」「この子は純粋だけど少し天然」などと個性を伝えてセリフを提案させると、そのキャラらしい言い回しのヒントがもらえます。最終的に自分の言葉に直す前段階として、AIのセリフを「ブレインストーミングの素材」として使う感覚です。",
    promptExample: "「真実なんて、知りたい人間だけが知ればいい」というセリフを、①皮肉屋の老探偵、②純粋な少女、③元詐欺師の主人公、それぞれのキャラクターの口調で言い直してください。",
  },
  {
    title: "⑤行き詰まりを打開する",
    icon: "🔓",
    description:
      "書いていると必ず来る「この先どうすればいい？」という壁。そのとき、AIに「今こういう状況で詰まっている。3つ展開候補を出して」と相談すると、自分では思いつかなかった方向性が見えてきます。AIの提案がそのまま使えなくても、「これは違う」と感じることで、「じゃあ自分はどうしたいのか」が逆に明確になることも多い。創作の行き詰まりは「AIに解決させる」のではなく、「AIと壁打ちして自分の答えを引き出す」のが理想的な使い方です。",
    promptExample: "主人公と幼馴染が5年ぶりに再会したシーンで詰まっています。①感動の再会パターン、②気まずい沈黙パターン、③すれ違いパターン、の3つの展開案を書いてください。",
  },
] as const;

const genrePrompts = [
  {
    genre: "ファンタジー",
    icon: "⚔️",
    prompts: [
      {
        label: "世界観の設計",
        text: "魔法が「感情」をエネルギー源にする世界を設計してください。魔法の種類・制約・社会への影響・禁忌となる魔法を含めてください。",
      },
      {
        label: "プロット骨格",
        text: "「記憶を失った魔法使いが、自分の過去の罪を知っていく旅」を5章構成のプロットにまとめてください。",
      },
      {
        label: "場面描写",
        text: "古代の魔法が封印された図書館に、初めて踏み入れた主人公の場面を、神秘的で息を飲むような文体で描写してください。",
      },
    ],
  },
  {
    genre: "恋愛",
    icon: "💕",
    prompts: [
      {
        label: "設定の構築",
        text: "「大雨の夜に同じコンビニで雨宿りをした二人」から始まる恋愛短編のあらすじを3パターン提案してください。",
      },
      {
        label: "告白シーン",
        text: "10年片思いしてきた主人公が、相手の引越し前日に告白するシーンを書いてください。セリフと心理描写を丁寧に。",
      },
      {
        label: "すれ違い",
        text: "「好きなのに素直になれない」二人のすれ違いを、第三者（友人）の視点から描写してください。",
      },
    ],
  },
  {
    genre: "ミステリー",
    icon: "🔍",
    prompts: [
      {
        label: "謎の設計",
        text: "「密室で発見された遺体、しかし凶器は部屋の外にあった」という謎を成立させるトリックを3つ考えてください。",
      },
      {
        label: "伏線の配置",
        text: "第1章で読者にわからないように張る伏線を5つ提案してください。犯人は管理人の田中、動機は遺産争いです。",
      },
      {
        label: "探偵キャラ",
        text: "「人の感情が色として見える」という特殊な能力を持つ女性探偵のキャラクター設定を作ってください。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    item: "得意な創作タイプ",
    chatgpt: "長編の構成・プロット整理・アイデア量産",
    claude: "繊細な感情描写・詩的な文体・キャラクター内面の掘り下げ",
  },
  {
    item: "文体の特徴",
    chatgpt: "明快でわかりやすい。構造的",
    claude: "ニュアンスが豊か。文学的な表現が得意",
  },
  {
    item: "プロンプトへの応答",
    chatgpt: "「箇条書き」「表形式」など構造化されやすい",
    claude: "より「物語として」応答しやすい",
  },
  {
    item: "長文の一貫性",
    chatgpt: "長いプロットも整理・管理しやすい",
    claude: "文体の統一感が保たれやすい",
  },
  {
    item: "対話的な創作",
    chatgpt: "ChatGPT Canvasで「AIと共同編集」が可能",
    claude: "会話形式でキャラクターの声を探りやすい",
  },
  {
    item: "無料プラン",
    chatgpt: "利用可能（制限あり）",
    claude: "利用可能（制限あり）",
  },
] as const;

const threeSteps = [
  {
    step: "Step 1: まず「小さく始める」",
    detail:
      "最初から長編小説を書こうとすると心が折れます。「400字の短いシーンを1つ書く」ところから始めてください。ChatGPTに「夏の公園で一人でいる少女の場面を400字で書いて」と頼んで、出てきた文章に自分なりの手を加えてみる。それだけで十分です。「AIと一緒に創作する」感覚をまず体験することが第一歩です。",
  },
  {
    step: "Step 2: 「自分が書きたいもの」を言語化する",
    detail:
      "「なんとなく書きたいけど何を書けばいいかわからない」人は、AIに「インタビューして」と頼むのが効果的です。「どんなジャンルが好きですか？」「どんな感情を読者に残したいですか？」「過去に心を動かされた物語は？」——AIが引き出してくれる答えの中に、あなたが書きたいものの種が眠っています。",
  },
  {
    step: "Step 3: 完成より「続けること」を優先する",
    detail:
      "初心者がよくやる失敗は「完璧な第一章を書こうとして永遠に始まらない」ことです。雑でいい。矛盾があってもいい。AIと一緒にとにかく書き進める。後から修正すれば。「下書きは完璧でなくていい、完成させることが才能だ」という言葉通り、まず1本書き上げることを目標にしてください。AIはその「とにかく書き続ける」を強力にサポートしてくれます。",
  },
] as const;

export default function AiNovelCreativeWritingGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI小説・創作文章入門ガイド2026" },
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
                title="AIで小説・創作文章が書ける！ChatGPT・Claudeを使った創作入門ガイド【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIで小説・創作文章が書ける！ChatGPT・Claudeを使った創作入門ガイド【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「物語のアイデアはあるのに、どうしても書き出せない」「途中まで書いたけど、行き詰まって放置している」——そんな経験、ありませんか？
            実は、AIはそういった創作の悩みをまるごと受け止めてくれる相棒になれます。アイデアが出ないときのブレインストーミング、
            キャラクター設定の深掘り、書き始めの一言、行き詰まったときの新展開の提案——。AIは「代わりに書いてくれる機械」ではなく、
            「あなたの創作を後ろから全力で押してくれるパートナー」です。
            この記事では、小説や創作文章にAIを活用する具体的な方法を、今すぐコピーして使えるプロンプトと一緒に紹介します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          AIの基本的な使い方も押さえるなら
          <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT・Claude初心者ガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            プロンプトの書き方入門
          </Link>
          ・
          <Link href="/academy/blog/ai-hobby-lifestyle-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIで趣味を楽しむ活用術
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

        {/* AIは創作の敵ではなく相棒 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="why-ai-writing">AIは「創作の敵」ではなく「最高の相棒」</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「AIに小説を書かせる」と聞いて、少し抵抗を感じた方もいるかもしれません。「それって自分が書いたことになるの？」
            「本物の創作じゃない気がする」——その気持ち、とてもよくわかります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            でも、少し考えてみてください。作家の多くは「編集者との対話」を通じて物語を磨きます。
            脚本家はプロデューサーや監督の意見を取り入れながら脚本を書きます。
            音楽家は仲間のミュージシャンとセッションしながら曲を作ります。
            <strong>「他者との対話」を通じて創作が深まることは、昔からずっと当たり前のことでした。</strong>
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIはその「対話の相手」の一つです。24時間眠らず、どんな設定にも付き合ってくれて、
            「こんな展開どう？」という問いかけに何十通りもの答えを返してくれる。
            それを受け取って「いや、私が書きたいのはこっちじゃない」と感じたとき、
            あなたはすでに自分の創作の方向性を一歩見つけています。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIは物語の「魂」は込められません。そこにいる人物の痛みも、喜びも、あなたが経験してきたこと、感じてきたことから生まれるものです。
            AIはその魂を運ぶ「言葉の骨格」を一緒に作るパートナーです。
          </p>

          <Callout type="info" title="創作でよく使われるAIツール">
            現在、創作活動に最もよく使われているのはChatGPT（OpenAI）とClaude（Anthropic）の2つです。
            どちらも無料プランがあり、まず試すハードルは低いです。この記事では両者を使い分けるコツも紹介します。
          </Callout>
        </motion.section>

        {/* 創作でAIが役立つ5つの場面 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="five-scenes">創作活動でAIが役立つ5つの場面</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「どの場面でAIを使えばいいの？」という疑問に答えるために、
            創作のプロセスでAIが特に力を発揮する5つの場面を整理しました。
            各場面には、そのまま使えるプロンプト例も添えています。
          </p>
          <div className="mt-8 space-y-8">
            {fiveScenes.map((scene) => (
              <section key={scene.title} className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{scene.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{scene.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-8 text-gray-700">{scene.description}</p>
                <div className="mt-5 rounded-lg bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">プロンプト例</p>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{scene.promptExample}</p>
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
          <MidArticleCtaBox slug="ai-novel-creative-writing-guide" />
        </motion.section>

        {/* ジャンル別プロンプト集 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="prompt-collection">今すぐ試せるプロンプト集（ジャンル別）</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ジャンル別に「コピーしてそのまま使える」プロンプトをまとめました。
            プロンプトはカスタマイズしてOK。まずはそのまま試してみて、気に入った部分を自分の設定に変えてみてください。
          </p>
          <div className="mt-8 space-y-10">
            {genrePrompts.map((genre) => (
              <section key={genre.genre}>
                <div className="flex items-center gap-2 border-b border-gray-200 pb-3">
                  <span className="text-xl">{genre.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{genre.genre}</h3>
                </div>
                <div className="mt-5 space-y-4">
                  {genre.prompts.map((p) => (
                    <div key={p.label} className="rounded-lg border border-gray-200 p-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{p.label}</p>
                      <p className="mt-2 text-sm leading-7 text-gray-800">{p.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <Callout type="tip" title="プロンプトを使いこなすコツ">
            <ul className="space-y-2">
              <li>最初から完璧を求めない。「3パターン出して」と複数案を出してもらい、気に入ったものをベースに磨く</li>
              <li>「もっと悲しい雰囲気で」「主人公をもっと弱くして」など、感情・方向性の修正指示を重ねることで理想に近づく</li>
              <li>AIの出力を「そのまま使う」のではなく、「自分の言葉に書き直す素材」として使うのが長続きするコツ</li>
            </ul>
          </Callout>
        </motion.section>

        {/* ChatGPT vs Claude */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="chatgpt-vs-claude">ChatGPT vs Claude 創作適性の比較</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            創作活動では主にChatGPTとClaudeが使われます。どちらを使えばいいか迷っている方のために、
            創作の観点からの違いを整理しました。
          </p>

          <RichTable>
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-900">比較項目</th>
                <th className="px-4 py-3 font-semibold text-gray-900">ChatGPT</th>
                <th className="px-4 py-3 font-semibold text-gray-900 bg-will-lighter/30">Claude</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonRows.map((row) => (
                <tr key={row.item}>
                  <td className="px-4 py-3 font-medium text-gray-700">{row.item}</td>
                  <td className="px-4 py-3 text-gray-600">{row.chatgpt}</td>
                  <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">{row.claude}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>

          <p className="mt-5 text-base leading-8 text-gray-700">
            結論として、<strong>プロット設計・アイデア量産にはChatGPT、繊細な感情描写・文体の磨き込みにはClaude</strong>がそれぞれ向いています。
            どちらか一方を選ぶより、「プロットはChatGPTで作って、実際の文章をClaudeに磨いてもらう」という使い分けが効果的です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            なお、両方とも無料プランから使い始められます。まずどちらか一方で試してみて、もう一方も気になったら試してみるという流れがスムーズです。
          </p>
        </motion.section>

        {/* 「AIと一緒に書いた」という姿勢 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="mindset">「AIに書いてもらった」ではなく「AIと一緒に書いた」という姿勢の大切さ</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを創作に使うとき、よく聞かれる不安が2つあります。
          </p>

          <ArticleH3>「著作権はどうなるの？」</ArticleH3>
          <p className="mt-3 text-base leading-8 text-gray-700">
            現時点（2026年）では、AIが生成した文章の著作権については法整備が進んでいる段階です。
            ただし、重要なのは<strong>「あなたがどう関わったか」</strong>です。プロンプトを設計して、出力を選択・編集して、
            自分の表現に書き直した場合、その「創作的貢献」があなたにあることは明らかです。
            「ボタン一発で全部出力させてそのまま使う」のではなく、
            AIの出力を素材として自分で手を加える——この姿勢が著作権の観点でも、創作の質の観点でも大切です。
          </p>

          <ArticleH3>「AIに頼り過ぎてもいい？」</ArticleH3>
          <p className="mt-3 text-base leading-8 text-gray-700">
            「AIに頼り過ぎると、自分で書く力がなくなるのでは」という心配も自然な感覚です。
            でも、包丁を使って料理する人が「包丁に頼り過ぎると手料理の腕が落ちる」とは考えませんよね。
            AIはあくまでも道具です。その道具を使いながら、<strong>何を書くかの判断・どんな感情を届けたいかの選択・物語の核になるテーマ</strong>——
            それはすべてあなたの中にある。AIに委ねてはいけない部分をちゃんと持っていれば、
            どれだけ活用しても「あなたの創作」であることは変わりません。
          </p>

          <Callout type="tip" title="AIと長く付き合うための黄金ルール">
            「AIが書いたものを読んで、自分が何を感じたか」を大切にしてください。
            「なんか違う」という感覚がある限り、あなたの創作の軸はちゃんとそこにあります。
            その感覚を信じて、「違う、こっちだ」と書き直す——それが創作の本質です。
          </Callout>
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
          <ArticleH2 id="conclusion">まとめ：今日から始める3ステップ</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIで創作を始めるのに、特別な準備は必要ありません。今日から始められる3ステップをまとめます。
          </p>
          <div className="mt-6 space-y-5">
            {threeSteps.map((step, index) => (
              <div key={step.step} className="flex gap-5 rounded-xl border border-gray-200 bg-white p-5">
                <div>
                  <h3 className="text-base font-bold text-gray-900">{step.step}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            完璧な物語は、最初の一文を書いた人にしか生まれません。
            AIという最高の相棒と一緒に、今日、その最初の一文を書いてみてください。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            AIリブートでは、こういった実践的なAI活用法を毎週LINEでお届けしています。ぜひ登録してください。
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
            title="AIで創作をもっと楽しく。毎週実践TIPSを無料配信中"
            description="ChatGPTやClaudeを使った創作活用法・プロンプトテクニック・AI最新情報を毎週お届けします。登録は無料、いつでも解除できます。AIリブートのLINE公式アカウントをぜひご登録ください。"
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
            創作以外でもAIを活用したい方は、日常の趣味でのAI活用術もあわせてチェックしてみてください。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              プロンプトの書き方を学ぶ
            </Link>
            <Link
              href="/academy/blog/ai-hobby-lifestyle-guide"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              AIで趣味を楽しむ活用術
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者ガイド｜2つのAIの違いと選び方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/claude-beginner-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude完全入門2026｜特徴・使い方・ChatGPTとの違い
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-hobby-lifestyle-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIで趣味が10倍楽しくなる！日常活用術55選
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-canvas-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT Canvas完全ガイド｜AIと一緒に文書を作り込む方法
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-study-learning-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIで勉強が変わる！学習・自己啓発へのAI活用術
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
