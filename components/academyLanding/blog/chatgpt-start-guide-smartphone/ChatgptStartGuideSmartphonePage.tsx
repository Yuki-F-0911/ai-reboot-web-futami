"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type ChatgptStartGuideSmartphonePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["ChatGPT 始め方 スマホ", "ChatGPT iPhone 使い方", "ChatGPT アプリ 始め方"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "about-app", label: "スマホアプリとは？" },
  { id: "iphone-setup", label: "iPhone版の始め方" },
  { id: "android-setup", label: "Android版の始め方" },
  { id: "smartphone-features", label: "スマホ版の便利機能" },
  { id: "free-vs-paid", label: "無料と有料の違い" },
  { id: "use-cases", label: "活用シーン5選" },
  { id: "faq", label: "FAQ" },
  { id: "academy-cta", label: "次に学ぶ（CTA）" },
  { id: "related-links", label: "関連リンク" },
] as const;

const iphoneSteps = [
  {
    step: "1. App Storeで公式アプリを探す",
    body: "アプリ名が似たものもあるため、提供元（OpenAI）や説明文を確認してからインストールします。",
  },
  {
    step: "2. アカウント作成（またはログイン）",
    body: "初めての方は新規登録、すでに利用している方は同じアカウントでログインします。スマホとPCは同じアカウントで連携できます。",
  },
  {
    step: "3. 初期設定（通知・音声・プライバシー）",
    body: "通知は必要なものだけ許可し、音声機能を使う場合はマイク権限を確認します。共有端末なら履歴やログアウトも合わせて見直すのが安全です。",
  },
] as const;

const androidSteps = [
  {
    step: "1. Google Playで公式アプリを探す",
    body: "検索結果から公式アプリを選び、提供元やレビューを確認してからインストールします。",
  },
  {
    step: "2. アカウント作成（またはログイン）",
    body: "新規登録/ログインを済ませると、すぐにチャットを開始できます。端末を変えても同じアカウントで利用可能です。",
  },
  {
    step: "3. 初期設定（通知・音声・権限）",
    body: "音声入力やカメラ連携を使う場合は、必要な権限を最小限で許可します。仕事用端末なら、情報の取り扱いルールも事前に確認しましょう。",
  },
] as const;

const smartphoneFeatures = [
  {
    title: "音声入力（ハンズフリーで会話）",
    detail: "移動中や手が塞がっている場面で、短い質問→追質問の形でテンポよく使えます。",
  },
  {
    title: "カメラ連携（写真から質問）",
    detail: "メモや資料の一部を撮影して、要点整理やタスク化を依頼できます。機密情報は写り込みに注意します。",
  },
  {
    title: "ウィジェット/ショートカット（即起動）",
    detail: "ホーム画面からすぐ入力できる導線を作ると、調べものや下書き作成が習慣化しやすくなります。",
  },
] as const;

const planComparison = [
  {
    axis: "向いている人",
    freePlan: "まずはスマホで日常的に試し、用途を固めたい人。",
    paidPlan: "毎日使い、上限や追加機能の必要性が明確な人。",
  },
  {
    axis: "使い方のコツ",
    freePlan: "短い質問→追質問で精度を上げる運用が相性良い。",
    paidPlan: "業務フローに組み込み、テンプレ化して再利用すると投資対効果が出やすい。",
  },
  {
    axis: "課金/管理（スマホ）",
    freePlan: "登録だけで開始できる。",
    paidPlan:
      "アプリ内課金になることがあります。Webで契約した場合はWeb側で解約が必要なこともあるため、契約経路（どこで支払ったか）を確認して手続きします。",
  },
] as const;

const useCases = [
  {
    title: "1. 通勤中に記事・資料を要約",
    detail: "URLやテキストを貼って「3行で要点」「次アクション」など形式指定すると時短になります。",
  },
  {
    title: "2. 買い物リストを作る",
    detail: "冷蔵庫の在庫や献立を入力して、必要な食材と分量をリスト化できます。",
  },
  {
    title: "3. メールの下書きを作る",
    detail: "相手/目的/トーンを指定して初稿を作り、最後は必ず人が整えます。",
  },
  {
    title: "4. 翻訳・言い換えで伝わりやすくする",
    detail: "日本語↔英語だけでなく、丁寧語/簡潔版など相手に合わせた表現調整に便利です。",
  },
  {
    title: "5. 調べものを整理して意思決定を速くする",
    detail: "結論・根拠・注意点の形で出力させ、確認すべき点をチェックリスト化すると迷いが減ります。",
  },
] as const;

export default function ChatgptStartGuideSmartphonePage({ faqItems }: ChatgptStartGuideSmartphonePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPTをスマホで始める方法" },
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
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            スマホでChatGPTを使い始めるなら、まずは「公式アプリの導入」と「最低限の初期設定（権限・通知・プライバシー）」を押さえると迷いません。本記事では、iPhone/Android別に始め方を整理し、スマホならではの使いどころまでまとめます。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ（AIO向け：結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              iPhone/Androidともに、アプリストアで公式アプリを選び、アカウント作成（またはログイン）→初期設定の順で始めます。
            </li>
            <li className="pl-1 marker:text-gray-500">
              初期設定は「通知」「音声（マイク権限）」「履歴/プライバシー」を最優先で確認すると安全です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              スマホは音声入力やカメラ連携で時短しやすいので、短い質問→追質問で精度を上げる使い方が相性良いです。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="about-app" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ChatGPTスマホアプリとは？（公式アプリの概要、Web版との違い）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            結論: スマホでは公式アプリでチャットできます。ブラウザ版（Web）でも利用できますが、アプリは音声やカメラ連携などスマホ向け機能が使いやすいのが特徴です。一方で、権限（マイク/カメラ）や通知設定を適切に管理する必要があります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            仕事での利用を想定する場合は、まず{" "}
            <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPT・Claude初心者ガイド
            </Link>{" "}
            で基本の使い方（目的・前提・出力形式の考え方）を押さえると、スマホでも再現性が上がります。
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
          <h2 id="iphone-setup" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            iPhone版の始め方（App Store→アカウント作成→初期設定）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: App Storeで公式アプリを入れたら、ログイン→権限（マイク/カメラ/通知）を必要最小限に整えるだけで、すぐ使い始められます。
          </p>
          <div className="mt-6 space-y-4">
            {iphoneSteps.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.step}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
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
          <h2 id="android-setup" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Android版の始め方（Google Play→設定）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: Google Playで公式アプリを入れたら、ログイン→権限と通知を調整し、まずは1つの用途（要約/下書きなど）で試すのが最短です。
          </p>
          <div className="mt-6 space-y-4">
            {androidSteps.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.step}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
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
          <h2 id="smartphone-features" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            スマホ版ならではの便利機能（音声入力、カメラ連携、ウィジェット）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            結論: スマホは「入力の手間」を減らすほど継続利用しやすくなります。まずは音声とカメラ連携を試し、よく使うパターンをテンプレ化しておくのがおすすめです。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {smartphoneFeatures.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
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
          <h2 id="free-vs-paid" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            無料プランと有料プランの違い（スマホでの課金方法）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            結論: 最初は無料で「使いどころ」を固めてから、有料プランを比較するのが堅実です。業務で毎日使う/上限や追加機能が必要、という条件が揃った段階で検討するとミスマッチを減らせます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            仕事用のプロンプトは{" "}
            <Link href="/academy/blog/prompt-template-for-work" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              仕事で使えるプロンプトテンプレート集
            </Link>{" "}
            をベースに作ると、スマホでも同じ型で運用しやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[840px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">無料</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">有料</th>
                </tr>
              </thead>
              <tbody>
                {planComparison.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.freePlan}</td>
                    <td className="py-4 pl-4">{row.paidPlan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <h2 id="use-cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            スマホでの活用シーン5選（通勤中の要約/買い物リスト/メール下書き/翻訳/調べもの）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            結論: 「すぐ使えて、すぐ効果が出る」用途から始めると、スマホでも継続しやすくなります。迷ったら、要約・リスト化・下書きの3つから試すのがおすすめです。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {useCases.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
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

        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="academy-cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次に学ぶ：スマホからでも実務に繋げる
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            結論: スマホで使い方に慣れたら、次は「プロンプトの型」と「学習ロードマップ」を押さえると、実務での再現性が上がります。まずは{" "}
            <Link href="/academy/blog/how-to-learn-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AI学習ロードマップ
            </Link>{" "}
            を読み、続けてアカデミー全体像を確認するのがおすすめです。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              AIリブートアカデミーを見る
            </Link>
            <Link
              href="/academy/blog"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              他の記事も読む
            </Link>
          </div>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/chatgpt-claude-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人のための生成AI学習ロードマップ｜0→100日で実務活用レベルへ | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/prompt-template-for-work"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                仕事で使えるプロンプトテンプレート集 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/seminars" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                無料セミナー一覧（アカデミー） | AIリブート
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
