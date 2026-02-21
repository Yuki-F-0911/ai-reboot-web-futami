"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";

type FAQItem = {
  question: string;
  answer: string;
};

type AiContentSnsGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const blogPromptExamples = [
  {
    title: "ブログ構成案を最短で作るプロンプト",
    prompt:
      "あなたはSEO編集者です。\n目的: {主キーワード}で検索する読者向けにブログ構成案を作る。\n前提:\n- 想定読者: {読者像}\n- 読者の課題: {課題}\n- 記事で到達させる状態: {到達状態}\n制約:\n- H2は5本、各H2で結論を先に1文で書く\n- H3は各H2につき2本まで\n- 比喩を使わず、実務動詞で書く\n出力形式:\n1. 記事タイトル案3つ\n2. 導入文（120字）\n3. H2/H3構成\n4. 各H2で入れるべき具体例",
    point: "検索意図を固定してから本文を書くと、リライト回数を減らせます。",
  },
  {
    title: "本文ドラフトを作るプロンプト",
    prompt:
      "あなたは業務改善に強いライターです。\n目的: 以下の見出しに沿って本文ドラフトを書く。\n入力:\n- 見出し: {見出し}\n- 伝える結論: {結論}\n- 実務例: {実務例}\n制約:\n- 1見出しあたり450〜650字\n- 構成は「結論→背景→手順→注意点」\n- あいまい語を避け、主語を明確にする\n出力形式:\n- 本文\n- 読者が次にやる行動を1つ",
    point: "長文を一度に作らず、見出し単位で分割生成した方が品質が安定します。",
  },
  {
    title: "ブログ最終チェック用プロンプト",
    prompt:
      "次の本文を編集者視点でレビューしてください。\nチェック観点:\n1. 固有名詞・数値・日付の整合\n2. 主張と根拠の対応\n3. 読者が実行できる手順になっているか\n4. 冗長表現の削除候補\n出力形式:\n- 修正すべき箇所を優先度順で5件\n- 修正文案\n- タイトル改善案2つ",
    point: "公開前レビューをAIに任せると、見落としや重複表現を減らせます。",
  },
] as const;

const snsPromptExamples = [
  {
    channel: "X",
    title: "X向けの短文投稿を作るプロンプト",
    prompt:
      "あなたはBtoB領域のSNS編集者です。\n目的: X向けに1投稿を作成する。\n入力:\n- テーマ: {テーマ}\n- 読者: {読者像}\n- 伝えたい結論: {結論}\n制約:\n- 140〜220文字\n- 1文目で課題提起、2文目で解決策、3文目で行動提案\n- ハッシュタグは最大2つ\n出力形式:\n- 投稿本文3案\n- 冒頭フックのみ5案",
    tip: "Xは短文で反応検証しやすいので、最初に訴求軸をテストする場として使います。",
  },
  {
    channel: "Instagram",
    title: "Instagramカルーセル投稿を作るプロンプト",
    prompt:
      "あなたはInstagram運用担当です。\n目的: カルーセル8枚の投稿構成を作る。\n入力:\n- テーマ: {テーマ}\n- 保存してほしい実務ノウハウ: {ノウハウ}\n制約:\n- 1枚目は課題、2〜7枚目は手順、8枚目はCTA\n- 各スライド本文は45字以内\n- キャプションは400〜600字\n出力形式:\n1. スライドごとの見出しと本文\n2. キャプション本文\n3. 投稿後に促すコメント質問3つ",
    tip: "Instagramは保存される情報密度が重要なので、手順型コンテンツが相性良好です。",
  },
  {
    channel: "LinkedIn",
    title: "LinkedIn向け業務知見投稿を作るプロンプト",
    prompt:
      "あなたはビジネスSNSの編集者です。\n目的: LinkedIn向けに実務知見投稿を作る。\n入力:\n- テーマ: {テーマ}\n- 現場での失敗例: {失敗例}\n- 改善後の結果: {結果}\n制約:\n- 400〜700字\n- 構成は「背景→実行→学び→再現手順」\n- 誇張表現を避ける\n出力形式:\n- 本文2案\n- 末尾CTA 3案（資料DL/相談/コメント誘導）",
    tip: "LinkedInは経験からの学びを言語化すると、信頼形成につながりやすくなります。",
  },
] as const;

const youtubePromptExamples = [
  {
    title: "冒頭30秒を作るプロンプト",
    prompt:
      "あなたはビジネス系YouTubeの構成作家です。\n目的: 動画冒頭30秒の台本を作る。\n入力:\n- タイトル: {タイトル}\n- 視聴者の悩み: {悩み}\n- 動画で約束する価値: {価値}\n制約:\n- 150〜220文字\n- 1文目で課題、2文目で期待、3文目で本編予告\n出力形式:\n- 口語台本\n- テロップ案",
    tip: "冒頭で視聴継続理由を示すと、本編までの離脱を抑えやすくなります。",
  },
  {
    title: "本編の章立て台本を作るプロンプト",
    prompt:
      "あなたはYouTube台本エディターです。\n目的: 8〜12分動画の本編台本を作る。\n入力:\n- テーマ: {テーマ}\n- 伝える手順: {手順}\n- 実例: {実例}\n制約:\n- 3章構成\n- 章ごとに「要点→具体例→注意点」を入れる\n- 1章あたり500〜700文字\n出力形式:\n1. 章タイトル\n2. ナレーション台本\n3. Bロール候補",
    tip: "章ごとの目的を先に指定すると、冗長な説明を抑えられます。",
  },
  {
    title: "締めCTAと概要欄を作るプロンプト",
    prompt:
      "あなたは動画マーケ担当です。\n目的: 動画終盤CTAと概要欄を作る。\n入力:\n- 動画テーマ: {テーマ}\n- 視聴者に取ってほしい行動: {行動}\n- 案内リンク: {リンク}\n制約:\n- CTAは80〜120文字\n- 概要欄は300〜450字\n- 次回動画への接続文を入れる\n出力形式:\n- 締め台本2案\n- 概要欄1案\n- 固定コメント案1案",
    tip: "最後の行動提案まで設計すると、視聴後の離脱を減らせます。",
  },
] as const;

const productionChecklist = [
  "週の最初にテーマを1つ決め、ブログを親コンテンツとして作成する",
  "ブログからX・Instagram・LinkedInへ分岐し、媒体ごとの形式に変換する",
  "最後にYouTube台本へ落とし込み、撮影前チェックで口語に整える",
  "全媒体で共通する主張と数字を確認し、矛盾をなくして公開する",
] as const;

const keywordTags = [
  "AI ブログ 書き方",
  "SNS AI 活用",
  "YouTube 台本 AI",
  "Instagram AI 投稿",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "bottleneck", label: "時間不足とネタ切れの原因整理" },
  { id: "blog-workflow", label: "ブログ制作の進め方" },
  { id: "sns-workflow", label: "SNS制作の進め方" },
  { id: "youtube-workflow", label: "YouTube台本制作の進め方" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

type LineCtaBoxProps = {
  className: string;
  titleClassName: string;
};

function LineCtaBox({ className, titleClassName }: LineCtaBoxProps) {
  return (
    <div className={className}>
      <p className={titleClassName}>📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </div>
  );
}

export default function AiContentSnsGuidePage({ faqItems }: AiContentSnsGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI×ブログ・SNS・YouTube台本の作り方" },
          ]}
        />

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
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="AI×ブログ・SNS・YouTube台本の作り方｜コンテンツ制作を10倍速にする"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI×ブログ・SNS・YouTube台本の作り方｜コンテンツ制作を10倍速にする
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            コンテンツ制作の悩みは、時間不足とネタ切れに集約されます。AIを使うときは「速く書く」より、ブログを親コンテンツとしてSNSと動画台本に展開する設計を先に決める方が効果的です。
            この記事では、ブログ、SNS（X・Instagram・LinkedIn）、YouTube台本の3媒体別に、実務で使える作成手順とコピペ可能プロンプトを整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">ブログを先に作り、SNSとYouTubeへ分岐する順にすると、媒体横断の制作時間を短縮しやすくなります。</li>
            <li className="pl-1 marker:text-gray-500">
              ブログは構成・本文・推敲を分け、SNSは媒体別フォーマットに変換し、YouTube台本は冒頭30秒と本編を分けて生成すると品質が安定します。
            </li>
            <li className="pl-1 marker:text-gray-500">
              ネタ切れ対策には、過去投稿の反応、顧客の質問、業務で起きた失敗例をAIに渡して題材化する運用が有効です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              AIリブートアカデミーは、生成AI活用力の習得だけでなく、自己理解・キャリアデザイン、仲間と共に学ぶ環境を通じた実務定着を重視しています。
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="bottleneck"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            コンテンツ制作が遅い・ネタ切れになる原因を分解すると、AIで短縮すべき工程が明確になる
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            制作速度が上がらない原因は、執筆力不足ではなく「毎回ゼロから企画していること」です。テーマ探索、構成設計、本文執筆、投稿調整を同時に進めると、判断負荷が高くなり時間が消えます。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            まずは1週間の運用単位を決め、テーマを1つ固定してください。次に、長文のブログを親コンテンツにし、そこから短文SNSと動画台本へ展開します。この順序を固定するだけで、媒体ごとの重複作業が減ります。
            企画段階の発想が弱いと感じる場合は、
            <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTを仕事で使いこなす実践テクニック集
            </Link>
            で紹介している「目的・制約・出力形式」のフレームを先に当てると、AIへの指示品質が改善します。
          </p>
          <div className="mt-7 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-900">コンテンツ制作を回す週次チェックリスト</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              {productionChecklist.map((item) => (
                <li key={item} className="pl-1 marker:text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" titleClassName="text-base font-semibold text-green-800" />
        </motion.section>

        <motion.section
          id="blog-workflow"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ブログ制作は構成・本文・推敲をAIで分業すると、検索意図を保ちながら執筆時間を短縮できる
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            ブログ制作で時間が溶けるポイントは、構成が曖昧なまま本文を書き始めることです。先に見出し設計を固め、見出し単位で本文を作ると、後半の修正コストが下がります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            実運用では、最初に「検索意図」と「読者が取りたい行動」を定義し、次にAIへ構成案を作らせます。構成が決まったら、見出しごとに本文を生成し、最後に全体整合チェックを実行してください。
            仕事で再利用しやすい型は
            <Link href="/academy/blog/prompt-template-for-work" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              仕事で使えるプロンプトテンプレート集
            </Link>
            でも補強できます。
          </p>
          <div className="mt-8 space-y-6">
            {blogPromptExamples.map((example) => (
              <section key={example.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{example.title}</h3>
                <pre className="mt-3 overflow-x-auto rounded bg-gray-50 p-3 text-xs leading-6 text-gray-700">{example.prompt}</pre>
                <p className="mt-3 text-sm leading-7 text-gray-700">{example.point}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            ブログは単体で終わらせず、公開後にSNS・動画へ展開する前提で書くと効率が上がります。具体的には、見出しの中に「短文化しやすい要点」と「口語化しやすい説明」を意図的に入れておくと、後工程が速くなります。
          </p>
        </motion.section>

        <motion.section
          id="sns-workflow"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            SNS制作はX・Instagram・LinkedIn別テンプレにAIを当てると、1つのネタを3媒体へ展開できる
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            同じネタでも、SNSは媒体ごとに評価される形式が違います。Xは簡潔さ、Instagramは保存価値、LinkedInは実務学習が重視されるため、1本の原稿をそのまま流用しても反応が伸びにくくなります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            そこで有効なのが、媒体別テンプレートを先に決めてAIで変換する運用です。1つのブログ要点を入力し、X用短文、Instagram用カルーセル、LinkedIn用の学び投稿へ分岐します。媒体の役割を固定すると、継続投稿の難易度が大きく下がります。
          </p>
          <div className="mt-8 space-y-6">
            {snsPromptExamples.map((example) => (
              <section key={example.title} className="rounded-lg border border-gray-200 p-5">
                <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-700">
                  {example.channel}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{example.title}</h3>
                <pre className="mt-3 overflow-x-auto rounded bg-gray-50 p-3 text-xs leading-6 text-gray-700">{example.prompt}</pre>
                <p className="mt-3 text-sm leading-7 text-gray-700">{example.tip}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            SNS運用を継続したい方は、LINEの無料個別相談を活用してください。AI活用ロードマップの案内をもとに、投稿設計を業務に合わせて整理できます。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" titleClassName="text-base font-semibold text-orange-800" />
        </motion.section>

        <motion.section
          id="youtube-workflow"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            YouTube台本制作は冒頭30秒・本編・CTAをAIで分割生成すると、撮影準備を半日で終えやすい
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            YouTube台本が長引く原因は、最初から完璧な一本台本を作ろうとすることです。動画は視聴者が離脱しやすい冒頭、理解を深める本編、行動につなげる締めで役割が異なるため、分割して作る方が効率的です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            実務では、まず冒頭30秒で「誰の課題をどう解決するか」を明確化し、次に本編の章立てを作ります。最後にCTAと概要欄を作り、公開導線を整えます。副業や個人発信で案件獲得までつなげたい場合は、
            <Link href="/academy/blog/ai-freelance-work-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              フリーランス・副業のAI活用術
            </Link>
            と併せて運用設計を確認してください。
          </p>
          <div className="mt-8 space-y-6">
            {youtubePromptExamples.map((example) => (
              <section key={example.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{example.title}</h3>
                <pre className="mt-3 overflow-x-auto rounded bg-gray-50 p-3 text-xs leading-6 text-gray-700">{example.prompt}</pre>
                <p className="mt-3 text-sm leading-7 text-gray-700">{example.tip}</p>
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-900">AIリブートアカデミーの実務定着アプローチ</p>
            <p className="mt-3 text-sm leading-7 text-blue-800">
              生成AI活用力を学ぶだけで終わらせず、AIを通じた自己理解・キャリアデザインを深め、仲間と継続学習できる環境を持つことで、発信活動の継続率と実務への接続を高めます。
            </p>
          </div>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            よくある詰まりどころは、媒体ごとの書き分けと公開後の改善運用です。先に判断基準を決める前提でQ&Aを確認してください。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <p className="text-sm leading-7 text-gray-700">
              次の1週間から発信を仕組み化したい方は、LINEの無料個別相談で現在の運用課題を整理してください。
            </p>
          </div>
          <div className="mt-5">
            <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" titleClassName="text-base font-semibold text-green-800" />
          </div>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTを仕事で使いこなす実践テクニック集｜基本から応用まで50のTips
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/prompt-template-for-work" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成をAIで効率化
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-freelance-work-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                フリーランス・副業のAI活用術｜提案・作業・請求まで効率化する実践ガイド
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
