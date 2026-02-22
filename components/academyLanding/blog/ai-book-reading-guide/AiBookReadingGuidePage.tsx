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

const keywordTags = ["AI 読書活用", "ChatGPT 本 要約", "Claude PDF 要約", "読書 AI 活用術", "読書習慣 AI"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "problem", label: "読書の悩みにAIが答える理由" },
  { id: "six-ways", label: "AIで読書が変わる6つの方法" },
  { id: "prompts", label: "コピペで使えるプロンプト集" },
  { id: "claude-vs-chatgpt", label: "Claude vs ChatGPT 読書活用比較" },
  { id: "cautions", label: "注意点：AIの要約との向き合い方" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "conclusion", label: "まとめ" },
] as const;

const summaryItems = [
  "ChatGPTやClaudeに本のタイトルを伝えるだけで「概要・主要論点・読む価値」を教えてもらえる。忙しい人の「読む本を選ぶ時間」と「読み始めるハードル」を一気に下げられる",
  "ClaudeはPDFを直接アップロードして要約できる最強ツール。1冊分のPDFを渡せば「10の要点」「第3章だけ詳しく」「専門用語を平易に説明して」などの細かいリクエストに応えてくれる",
  "読んだ内容を自分の言葉でAIに説明して「間違いや抜けを指摘してもらう」ラバーダック法が、読書の定着率を劇的に高める。AIは辛抱強く何度でも付き合ってくれる",
  "「この本の内容を私の仕事（経理部門の業務改善）に活かすには？」とAIに聞くだけで、読書と実生活がつながるアイデアが次々と出てくる",
  "AIの要約はあくまで補助ツール。著作権上の問題・要約の精度・著者のニュアンス欠落などのリスクがあるため、重要な本は必ず原文と組み合わせて使うことが大切",
] as const;

const sixWays = [
  {
    number: "01",
    title: "本のタイトルだけで概要・ポイントを教えてもらう",
    icon: "📚",
    description:
      "読みたい本が見つかったとき、まずChatGPTに「この本について教えて」と聞いてみましょう。著者の主張・本が解決する問題・ターゲット読者・主要なポイント3〜5つを数秒で教えてもらえます。「読むべきか、後回しにすべきか」を判断する「読書前のナビゲーター」として使うのが最初のステップです。また「この本の批判的なレビューも教えて」と聞くと、良い面だけでなく「限界や弱点」も分かり、より客観的に本を評価できます。",
    example: "「アトミック・ハビット（ジェームズ・クリアー著）について教えて。主要な主張と、どんな人に向いているかを5点でまとめて」",
  },
  {
    number: "02",
    title: "PDFやWebページをClaudeに読み込ませて要約する",
    icon: "📄",
    description:
      "Claudeの最大の強みが、PDFファイルを直接アップロードして質問できること。購入した電子書籍をPDF変換したもの、無料で配布されている資料、論文などをそのままClaudeに渡して「第2章のポイントを3つ」「専門用語だけ抜き出して」「全体を小学生にもわかる言葉で説明して」と自在に質問できます。Webページの場合はURLを貼り付けるか、テキストをコピーして渡す方法でも対応できます。長文でも要点を的確に抽出する精度が、ClaudeはChatGPTより優れていると多くのユーザーから評判です。",
    example: "（PDFをアップロードしながら）「この書類の第2章と第4章だけ要約して。それぞれ300字以内、箇条書きで」",
  },
  {
    number: "03",
    title: "読んだ内容を自分の言葉で説明→AIにフィードバックしてもらう",
    icon: "💬",
    description:
      "「本を読んでも内容が身につかない」という悩みに最も効くのが、この「ラバーダック学習法」のAI版です。読み終えた章の内容を自分の言葉でAIに説明してみましょう。「〇〇という本を読みました。著者は〇〇と言っていると理解したのですが、正しいですか？」と入力すると、AIが「理解は正しいです。加えてこの点も重要です」「少し誤解があります。正確には…」とフィードバックしてくれます。人に説明しようとすることで「わかったつもり」が「本当の理解」に変わります。AIは何度でも、どんな質問にも嫌な顔をせず付き合ってくれる最高の勉強相手です。",
    example: "「マルコム・グラッドウェルの『アウトライアーズ』を読みました。著者の主張は『成功は才能ではなく1万時間の練習と環境で決まる』だと理解しましたが、私の解釈は正しいですか？もし抜けている視点があれば教えてください」",
  },
  {
    number: "04",
    title: "本の疑問点をAIに質問・深掘りする",
    icon: "🔍",
    description:
      "読書中に感じた「なぜ？」「本当に？」という疑問を、著者に直接聞けるとしたら最高ですよね。AIがその役割を担えます。「この著者の主張に対して反論する人たちはどんな意見を持っているの？」「この本で紹介されている研究は、今でも有効とされているの？」「第4章の概念をもっと詳しく、具体例つきで説明して」と聞くと、読書がぐっと深まります。特に専門書や難解な本を読む際に、「理解の壁」を越えるための強力なサポートになります。",
    example: "「ダニエル・カーネマンの『ファスト＆スロー』に出てくる『システム1・システム2』という概念を、日常の身近な例で3つ説明してもらえますか？」",
  },
  {
    number: "05",
    title: "読んだ内容を仕事・生活に活かすアイデアをAIに考えてもらう",
    icon: "💡",
    description:
      "「面白い本だったけど、結局どう活かせばいいの？」という問題を解決するのが、このアイデア化のステップです。「この本の内容を、私の状況（営業職・30代・月の目標達成に苦しんでいる）に当てはめると、どんな行動が有効ですか？」と聞くだけで、読書と実生活が直結したアクションリストが生成されます。本の内容を「知識」で終わらせず「行動」に変換するためのアシスタントとしてAIを使うことで、読書のROI（投資対効果）が劇的に高まります。",
    example: "「『習慣の力』を読みました。私は朝が苦手で毎日スマホを見てしまうのですが、この本の『キューとルーティン』理論を使って、スマホ依存を減らす具体的な習慣設計を手伝ってもらえますか？」",
  },
  {
    number: "06",
    title: "読書記録・感想文をAIと一緒に書く",
    icon: "✍️",
    description:
      "読書の「アウトプット」として最も効果的なのが、感想や学びを文章にすること。でも「うまく書けない」「何から書けばいいか分からない」という人も多いはず。AIに「この本のタイトルと3つの気づきを伝えるので、読書感想文の下書きを書いて」とお願いしてみましょう。AIが書いた下書きを読むと「そうそう、これが言いたかった！」と自分の言語化が進み、最終的に「自分の言葉」で仕上げやすくなります。SNS投稿・読書メーター・Notionの読書記録など、アウトプット先に合わせた文体も指定できます。",
    example: "「村上春樹の『海辺のカフカ』を読みました。印象的だった場面は①カフカが四国で経験する孤独、②大島さんの哲学的な言葉、③猫と話すナカタさんのシーンです。これを元に、Instagramの読書アカウント向けに300字の感想文を書いてください」",
  },
] as const;

const comparisonData = [
  {
    item: "PDF要約",
    chatgpt: "ChatGPT Plus以上でPDFアップロード可能。ファイルサイズに制限あり",
    claude: "◎ 長いPDFでも高精度で要約。大容量ファイル対応が強み",
  },
  {
    item: "長文理解",
    chatgpt: "△ 非常に長い文章は一部省略されることも",
    claude: "◎ 10万トークン超のコンテキスト対応で、本1冊を丸ごと処理できることも",
  },
  {
    item: "日本語の自然さ",
    chatgpt: "◎ 日本語の文章生成品質は高く、感想文・アウトプット作成に強い",
    claude: "○ 日本語も十分な品質。専門的・分析的な文章生成に強い",
  },
  {
    item: "Web検索・最新情報",
    chatgpt: "◎ Plus以上でリアルタイム検索対応。最新の書評・著者情報も取得可能",
    claude: "△ 基本的にリアルタイム検索なし（Claude.ai Proは一部対応）",
  },
  {
    item: "対話の記憶",
    chatgpt: "○ メモリ機能で読書の好みや目標を記憶できる",
    claude: "○ プロジェクト機能で読書ノートとして長期管理できる",
  },
  {
    item: "無料利用",
    chatgpt: "○ 無料プランでもテキスト要約は可能（PDFアップロードはPlus以上）",
    claude: "○ 無料プランでテキスト要約可能（PDF制限あり）",
  },
] as const;

export default function AiBookReadingGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIで読書が変わる！活用術2026" },
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
                title="AIで読書が変わる！ChatGPT・Claudeを使った本の要約・理解・アウトプット活用術【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIで読書が変わる！ChatGPT・Claudeを使った本の要約・理解・アウトプット活用術【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「読みたい本は山ほどあるのに、なかなか読む時間が取れない」「本を読んでも3日後には内容を忘れてしまう」「読んだ内容を仕事に活かせている気がしない」——読書好きなら、一度はこんな悩みを抱えたことがあるのではないでしょうか。
            実は、ChatGPTやClaudeといったAIを「読書の相棒」として使い始めると、これらの悩みがまるごと解消されます。
            本の理解が深まり、忘れにくくなり、仕事や生活にも活かしやすくなる。AI嫌いな読書家でも「これなら使ってみたい」と思える、読書×AI活用の6つの方法を具体的なプロンプト例とともに解説します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/ai-study-learning-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI×学習法の完全ガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT・Claude初心者ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-daily-life-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI日常活用ガイド
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

        {/* 読書の悩みにAIが答える理由 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="problem">読書の悩みにAIが答える理由</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            日本人の読書量は年々減少しています。「本を読む時間がない」は、忙しい現代人の共通の悩みです。
            でも考えてみると、「時間がない」以上に「読んだのに活かせない」「内容が定着しない」という問題のほうが、
            実は深刻かもしれません。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIは読書の3つの壁を取り除いてくれます。
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "壁1：時間の壁",
                before: "「1冊読むのに10時間かかる」",
                after: "AIが概要・要点を5分で提供。読む前に「地図」を持てる",
              },
              {
                label: "壁2：定着の壁",
                before: "「読んでも3日で忘れる」",
                after: "AIへのアウトプット・フィードバックで理解が深まる",
              },
              {
                label: "壁3：活用の壁",
                before: "「良い本だったが活かせない」",
                after: "AIが自分の状況に合わせた具体的な行動プランを提案",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-gray-200 p-5">
                <p className="text-sm font-bold text-will-primary">{item.label}</p>
                <p className="mt-2 text-xs leading-6 text-gray-500">Before: {item.before}</p>
                <p className="mt-1 text-xs leading-6 text-gray-700">After: {item.after}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-base leading-8 text-gray-700">
            重要なのは「AIが本の代わりになる」のではなく、「AIが読書をより豊かにするコーチになる」という発想です。
            著者の言葉に直接触れる感動はAIには代えられません。AIはあくまで「読書を深める相棒」として使いましょう。
          </p>

          <Callout type="info" title="AI嫌いな読書家へ">
            「本の良さはそのままの言葉で味わうもの」という意見には同意します。この記事で紹介する方法は、
            本の楽しみを奪うものではありません。むしろ「著者への質問ができるノート」「永遠に付き合ってくれる読書友達」
            としてAIを活用することで、本への愛着がさらに深まります。
          </Callout>
        </motion.section>

        {/* 6つの方法 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="six-ways">AIで読書が変わる6つの方法</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「読む前・読んでいる最中・読んだ後」の3つのフェーズに分けてAIを活用することで、
            読書の効果が最大化されます。それぞれのフェーズで使える方法を詳しく解説します。
          </p>

          <div className="mt-8 space-y-8">
            {sixWays.map((way) => (
              <section key={way.number} className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-will-primary text-white text-xl font-bold">
                    {way.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold tracking-widest text-gray-400">方法{way.number}</span>
                    </div>
                    <h3 className="mt-1 text-lg font-bold text-gray-900">{way.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-8 text-gray-700">{way.description}</p>
                <div className="mt-4 rounded-lg bg-amber-50 p-4">
                  <p className="text-xs font-bold text-amber-700 mb-2">プロンプト例（コピペOK）</p>
                  <p className="text-sm leading-7 text-gray-800 italic">{way.example}</p>
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
          <MidArticleCtaBox slug="ai-book-reading-guide" />
        </motion.section>

        {/* プロンプト集 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="prompts">コピペで使えるプロンプトテンプレート集</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            実際に読書×AIで使えるプロンプトをシーン別にまとめました。
            【本のタイトル】や【自分の状況】の部分を置き換えてそのまま使えます。
          </p>

          <div className="mt-6 space-y-5">
            <ArticleH3>読む前：本選びと事前準備</ArticleH3>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 space-y-3">
              {[
                "「【本のタイトル】について、どんな人に向いた本か、主要な主張を3点、著者の背景をまとめてください。読む価値があるかどうかも教えてください」",
                "「今、仕事で【課題（例：部下のマネジメントに悩んでいる）】という状況です。参考になりそうなビジネス書を5冊おすすめしてください。各本の主要な学びも1〜2行で説明してください」",
                "「【著者名】の著書一覧を教えてください。初心者が最初に読むべき本はどれですか？」",
              ].map((prompt, i) => (
                <div key={i} className="flex gap-3">
                  <span className="shrink-0 text-will-primary font-bold text-sm">▶</span>
                  <p className="text-sm leading-7 text-gray-800 italic">{prompt}</p>
                </div>
              ))}
            </div>

            <ArticleH3>読んでいる最中：理解を深める</ArticleH3>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 space-y-3">
              {[
                "「【本のタイトル】の【章や概念名】について、もっと詳しく・身近な例を使って説明してもらえますか？」",
                "「【著者名】が【本での主張】と言っているのですが、この主張に反論する立場の意見も教えてください」",
                "「以下の文章（【本の一節をコピー】）の意味をわかりやすく解説してください。特に【わからない単語や概念】の部分を重点的に」",
              ].map((prompt, i) => (
                <div key={i} className="flex gap-3">
                  <span className="shrink-0 text-will-primary font-bold text-sm">▶</span>
                  <p className="text-sm leading-7 text-gray-800 italic">{prompt}</p>
                </div>
              ))}
            </div>

            <ArticleH3>読んだ後：定着・活用・アウトプット</ArticleH3>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 space-y-3">
              {[
                "「【本のタイトル】を読みました。私の理解は『著者の主張は〇〇であり、その根拠は〇〇だ』です。この理解は正しいですか？抜けている重要な視点があれば教えてください」",
                "「【本のタイトル】の内容を、私の状況（【自分の職業・状況・悩み】）に活かすための具体的な行動プランを3つ提案してください」",
                "「【本のタイトル】の感想をSNS（Instagram）用に300字で書いてください。心に刺さったポイント：【気づき1・2・3】。ハッシュタグも5つ提案してください」",
              ].map((prompt, i) => (
                <div key={i} className="flex gap-3">
                  <span className="shrink-0 text-will-primary font-bold text-sm">▶</span>
                  <p className="text-sm leading-7 text-gray-800 italic">{prompt}</p>
                </div>
              ))}
            </div>
          </div>

          <Callout type="tip" title="効果的なプロンプトの3つのコツ">
            <ul className="space-y-2 text-sm">
              <li>① <strong>本のタイトルと著者名を必ず入れる</strong>：同名の別の本と混同を防げます</li>
              <li>② <strong>自分の文脈・状況を添える</strong>：「私は〇〇の状況です」と加えると回答が格段に具体的になります</li>
              <li>③ <strong>アウトプット形式を指定する</strong>：「箇条書き3点」「300字以内」「表形式で」と明示するとすぐ使える形で返ってきます</li>
            </ul>
          </Callout>
        </motion.section>

        {/* Claude vs ChatGPT */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="claude-vs-chatgpt">Claude vs ChatGPT：読書活用で使い分けるなら</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTとClaudeはどちらも読書活用に使えますが、それぞれの特徴に合わせた使い分けがあります。
            特に読書文脈での比較を以下にまとめました。
          </p>

          <RichTable>
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-900">機能・場面</th>
                <th className="px-4 py-3 font-semibold text-gray-900">ChatGPT</th>
                <th className="px-4 py-3 font-semibold text-gray-900 bg-will-lighter/30">Claude</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonData.map((row) => (
                <tr key={row.item}>
                  <td className="px-4 py-3 font-medium text-gray-700">{row.item}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{row.chatgpt}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 bg-will-lighter/10">{row.claude}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>

          <p className="mt-5 text-base leading-8 text-gray-700">
            <strong>結論：PDFを使って本の一部を要約・分析したいならClaudeが最強</strong>です。
            一方、最新の書評・著者情報を調べたり、読後感想文を日本語で自然に書きたいならChatGPTが使いやすい場面もあります。
            両方を無料で試せるので、用途によって使い分けるのがベストです。
          </p>
        </motion.section>

        {/* 注意点 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="cautions">注意点：AIの要約との向き合い方</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AI読書活用を始める前に、知っておくべき大切な注意点があります。
          </p>

          <div className="mt-6 space-y-5">
            <ArticleH3>① AIの要約は「完璧」ではない</ArticleH3>
            <p className="text-base leading-8 text-gray-700">
              AIは本の内容を学習データや文脈から推測して回答します。特に発売直後の新刊・マイナーな専門書・
              最新の研究結果については、情報が不正確・古い・省略されているケースがあります。
              「AIの要約を見て満足する」のではなく、「原文への興味を高める入口」として使うのが正解です。
            </p>

            <ArticleH3>② 著作権への配慮</ArticleH3>
            <p className="text-base leading-8 text-gray-700">
              本の内容を大量にAIに入力して要約させる行為は、著作権法の観点からグレーゾーンになりえます。
              個人の学習目的での使用は現時点では問題ないとされていますが、要約をSNSで公開したり、
              商業利用したりする際は注意が必要です。AIが生成した要約は「著者の言葉そのもの」ではなく、
              「AIによる解釈・要約」であることを忘れないようにしましょう。
            </p>

            <ArticleH3>③ 著者のニュアンス・感情は伝わらない</ArticleH3>
            <p className="text-base leading-8 text-gray-700">
              優れた本の価値は「論理的な情報」だけではありません。著者の体験から来る感情・文体の美しさ・
              行間に込められたメッセージ——これらはAIの要約では伝わりません。
              特に文学・エッセイ・詩のような作品は、AIによる要約で「全体を理解した」とは思わないことが大切です。
            </p>
          </div>

          <Callout type="warning" title="AI要約を使う際の3つのルール">
            <ul className="space-y-2 text-sm">
              <li>① 重要な本の内容は必ず原文と照合する</li>
              <li>② AIの要約・解説に違和感を感じたら原文を直接確認する</li>
              <li>③ 要約したコンテンツを公開・共有する際は著作権に十分配慮する</li>
            </ul>
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
          <ArticleH2 id="conclusion">まとめ：今日の通勤時間から始める読書×AI習慣</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIと読書の組み合わせは、「本を効率よく処理する」ためではなく、「本との出会いをより深くする」ためのものです。
            この記事で紹介した6つの方法を振り返りましょう。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <strong>読む前</strong>：タイトルで概要確認→「この本を読む価値があるか？」を判断する地図を手に入れる
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>読んでいる最中</strong>：PDFや抜粋をClaudeに渡して要約・深掘り→難しい箇所の壁を越える
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>読んだ後</strong>：自分の言葉で説明してフィードバック→活用アイデアを引き出す→感想文を書く
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            まず今日試してほしいのは、「今読んでいる（または積ん読している）本のタイトルをChatGPTに入力して
            『この本の主要な主張を3点教えて』と聞いてみること」です。たったこれだけで、
            読書×AIの世界が始まります。通勤時間・ランチ休憩・寝る前の5分で十分です。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            読書とAIの組み合わせをもっと深く学びたい方は、AIリブートのLINEを登録してください。
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
            title="AI×読書をもっと深める情報を毎週配信中"
            description="ChatGPTやClaudeを使った読書・学習・知識定着のコツを毎週お届けしています。AIリブートのLINE公式アカウントに登録すると、実務ですぐ使えるプロンプト集や特典教材も無料でもらえます。"
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
            読書×AIをマスターしたら、毎朝のAI活用ルーティンに組み込んでみましょう。
            日常生活のさまざまな場面でAIを使う習慣が身につきます。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/ai-morning-habits-guide"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              朝5分のAI習慣術を学ぶ
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
              <Link href="/academy/blog/ai-study-learning-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIで学習効率が劇的に上がる！ChatGPT・Claudeを使った勉強法完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-morning-habits-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIを朝の5分ルーティンに入れるだけで1日が変わる！毎朝続けたいAI活用習慣術
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者ガイド｜どちらを選ぶ？違いと使い分け完全解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-daily-life-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIを日常生活に取り入れる方法｜初心者向け活用ガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/claude-beginner-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude（クロード）初心者ガイド｜PDF要約・長文処理の使い方
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
