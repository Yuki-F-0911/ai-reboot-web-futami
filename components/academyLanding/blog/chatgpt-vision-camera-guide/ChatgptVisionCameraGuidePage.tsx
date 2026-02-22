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

const keywordTags = ["ChatGPT 画像認識 使い方", "ChatGPT カメラ 機能", "AI 画像 分析", "ChatGPT Vision 入門"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-vision", label: "ChatGPT画像認識とは" },
  { id: "how-to-use", label: "スマホからの使い方（3ステップ）" },
  { id: "use-cases", label: "今すぐ試せる10の活用シーン" },
  { id: "tips", label: "より良い結果を得るコツ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const useCases = [
  {
    number: "01",
    title: "料理のカロリー・栄養を分析してもらう",
    prompt: "この料理の写真から、おおよそのカロリーと主な栄養素を推定してください。",
    scene: "外食メニューや自炊した料理の写真を送るだけ。健康管理・ダイエット中の方に。",
  },
  {
    number: "02",
    title: "英語の看板・メニューを翻訳してもらう",
    prompt: "この看板（メニュー）の文字を日本語に翻訳し、意味を説明してください。",
    scene: "海外旅行・外国料理レストランで即使える。英語アレルギーが一瞬で消える。",
  },
  {
    number: "03",
    title: "複雑な書類・請求書を解読してもらう",
    prompt: "この書類の内容を要約し、特に注意すべき重要な点を教えてください。",
    scene: "難解な契約書・保険書類・医療明細書の意味がわかる。ただし個人情報は隠してから。",
  },
  {
    number: "04",
    title: "植物・花の名前を教えてもらう",
    prompt: "この植物（花）の名前と特徴、育て方のポイントを教えてください。",
    scene: "道端で見かけた花、庭の植物、観葉植物の識別に。",
  },
  {
    number: "05",
    title: "手書きメモをテキスト化してもらう",
    prompt: "この手書きメモを読み取り、テキストに変換してください。",
    scene: "会議のホワイトボード・手書きメモのデジタル化に。議事録作成が格段に楽になる。",
  },
  {
    number: "06",
    title: "グラフ・表のデータを読み解いてもらう",
    prompt: "このグラフ（表）の内容を説明し、主なトレンドと重要な数字を教えてください。",
    scene: "資料のグラフをスクショして送るだけで、会議前のデータ把握が一瞬に。",
  },
  {
    number: "07",
    title: "服装のコーディネートを相談する",
    prompt: "このコーディネートを評価し、改善できる点やおすすめの組み合わせを教えてください。",
    scene: "鏡の前での「これで合ってる？」をAIに相談。",
  },
  {
    number: "08",
    title: "部屋・インテリアのアドバイスをもらう",
    prompt: "この部屋の写真を見て、インテリア改善のアドバイスを3つ教えてください。予算感も考慮してください。",
    scene: "引っ越し・模様替えの前に。プロのデザイナー視点が無料でもらえる感覚。",
  },
  {
    number: "09",
    title: "レシートの金額を集計してもらう",
    prompt: "このレシートの品目と金額を読み取り、合計を計算してください。また、費目別に分類してください。",
    scene: "経費精算・家計管理に。複数のレシートをまとめて送ることもできる。",
  },
  {
    number: "10",
    title: "数式や問題の解き方を教えてもらう",
    prompt: "この数学の問題（数式）を解いてください。解き方の手順も説明してください。",
    scene: "子どもの宿題サポートや資格試験の勉強に。計算過程まで丁寧に説明してくれる。",
  },
] as const;

const useTips = [
  {
    title: "写真は明るく・はっきりと撮る",
    body: "暗い・ぼやけた写真は認識精度が下がります。テキストを読み取るときは特に、真正面から明るく撮影しましょう。",
  },
  {
    title: "何を分析してほしいか明確に指示する",
    body: "「この写真について教えて」より「この料理のカロリーを推定して」の方が的確な回答が返ってきます。",
  },
  {
    title: "個人情報は隠してから送る",
    body: "名前・住所・クレジットカード番号・マイナンバーが映っている部分は隠してから送りましょう。",
  },
  {
    title: "追加質問で深掘りする",
    body: "「この食材のアレルギー情報も教えて」「もっと詳しく」と追加指示を出すと、より詳細な情報が得られます。",
  },
] as const;

export default function ChatgptVisionCameraGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPT画像認識（Vision）完全ガイド" },
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
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="ChatGPT画像認識（Vision）の使い方完全ガイド"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPT画像認識（Vision）の使い方完全ガイド｜スマホで写真を撮るだけでAIが解説してくれる
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            ChatGPTは文字を入力するだけじゃありません。<strong>スマホで撮った写真をそのまま送れば</strong>、
            料理のカロリー計算・英語の看板翻訳・手書きメモのテキスト化まで、何でも分析してくれます。
            この画像認識機能（Vision）の使い方を、初心者向けに完全解説します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          あわせて読みたい：
          <Link href="/academy/blog/chatgpt-wow-moments-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTに感動した10の瞬間
          </Link>
          ・
          <Link href="/academy/blog/ai-30min-challenge-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            30分で体験できる7つのAIチャレンジ
          </Link>
        </p>
        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ（結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">ChatGPTは無料プランでも画像を送って分析できる（2026年2月時点）</li>
            <li className="pl-1 marker:text-gray-500">スマホアプリならカメラで直接撮影→即送信が可能</li>
            <li className="pl-1 marker:text-gray-500">料理・翻訳・書類・植物・手書きメモなど日常の幅広い場面で活用できる</li>
            <li className="pl-1 marker:text-gray-500">個人情報が映った画像を送る前に隠すことが重要</li>
          </ul>
        </motion.section>

        {/* ChatGPT画像認識とは */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-is-vision" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ChatGPT画像認識（Vision）とは
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTのVision機能とは、<strong>テキストだけでなく画像も入力として扱える機能</strong>です。
            2024年以降、無料プランを含む全ユーザーが利用できるようになりました。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            使い方はシンプルです。ChatGPTのチャット画面で画像をアップロードし、
            「この写真について〇〇を教えて」と質問するだけ。スマホアプリなら、カメラで直接撮影して即送信できます。
          </p>
          <div className="mt-6 rounded-lg border border-gray-200 p-5">
            <p className="text-sm font-semibold text-gray-700">対応している画像形式</p>
            <p className="mt-2 text-sm leading-6 text-gray-700">JPEG / PNG / GIF / WebP など一般的な形式に対応。スクリーンショットもOK。</p>
          </div>
        </motion.section>

        {/* 使い方3ステップ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="how-to-use" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            スマホからの使い方（3ステップ）
          </h2>
          <div className="mt-6 space-y-4">
            {[
              {
                step: "Step 1",
                title: "ChatGPTアプリを開く",
                body: "スマホのChatGPTアプリを開き、新しいチャットを始めます。アプリがない場合はApp Store / Google Playから「ChatGPT」を検索してインストール。",
              },
              {
                step: "Step 2",
                title: "カメラアイコンをタップして撮影",
                body: "入力欄の左側にあるカメラ（または「＋」）アイコンをタップ。カメラで直接撮影するか、写真ライブラリから選択して添付します。",
              },
              {
                step: "Step 3",
                title: "質問を入力して送信",
                body: "「この料理のカロリーを教えて」「この英語を日本語に訳して」など、聞きたいことを入力して送信するだけ。AIが画像を分析して回答してくれます。",
              },
            ].map((item) => (
              <section key={item.step} className="flex gap-4 rounded-xl border-2 border-will-primary/15 p-5">
                <span className="flex-shrink-0 rounded-full bg-will-primary px-3 py-1 text-sm font-bold text-white h-fit">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{item.body}</p>
                </div>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 10の活用シーン */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="use-cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            今すぐ試せる10の活用シーン
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            プロンプト例はそのままコピペして使えます。
          </p>
          <div className="mt-6 space-y-4">
            {useCases.map((item) => (
              <section key={item.number} className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 rounded-full bg-will-primary px-2.5 py-0.5 text-sm font-bold text-white">
                    {item.number}
                  </span>
                  <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="mt-3 text-xs leading-6 text-gray-500">{item.scene}</p>
                <pre className="mt-3 whitespace-pre-wrap rounded-lg bg-gray-900 p-3 text-xs leading-5 text-green-300">
                  {item.prompt}
                </pre>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 中間CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="chatgpt-vision-camera-guide" />
        </motion.section>

        {/* コツ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="tips" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            より良い結果を得るコツ
          </h2>
          <div className="mt-6 space-y-4">
            {useTips.map((tip) => (
              <section key={tip.title} className="rounded-lg border border-gray-200 p-4">
                <h3 className="text-base font-semibold text-gray-900">✓ {tip.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{tip.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：スマホのカメラがAIの目になる
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTの画像認識機能を使えば、スマホのカメラが最強のAIアシスタントの「目」になります。
            翻訳・分析・テキスト化・コーディネート相談——日常の様々な場面で活用できます。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            まず今日、身の回りの何かを写真に撮ってChatGPTに送ってみてください。
          </p>
        </motion.section>

        {/* LINE CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="自分の業種・職種でChatGPTを活かすプロンプト集を受け取ろう"
            description="ChatGPTの活用幅をさらに広げたい方へ。AIリブートのLINEでは「業種別プロンプト50選」を無料配布しています。画像認識以外の活用法も含め、すぐ使えるプロンプトが揃っています。"
            buttonLabel="LINEで業種別プロンプト50選を受け取る（無料）"
          />
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-wow-moments-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTに「すごい」と感じた瞬間10選
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-30min-challenge-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                初心者でも30分で体験できる7つのチャレンジ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-voice-mode-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT音声モード完全ガイド
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
