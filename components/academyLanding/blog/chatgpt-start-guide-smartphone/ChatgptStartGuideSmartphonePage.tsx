"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import { ArticleH2, ArticleH3, SummaryBox, RichFAQ, RichTable, Callout } from "@/components/blog/ArticleBody";

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
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "次に学ぶ" },
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
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
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
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            iPhone/Androidともに、アプリストアで公式アプリを選び、アカウント作成（またはログイン）→初期設定の順で始めます。
            この記事では、iPhone/Android別に「インストール→ログイン→初期設定」を最短手順で整理し、スマホならではの使いどころまで具体例つきでまとめます。
            スマホで始めると、公式アプリの見分け方・権限設定・通知あたりで迷いがちです。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-plan-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT料金プラン比較
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプロンプト入門
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT実践テクニック
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
        </p>
        <ArticleTOC items={tocItems} />

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox
            title="要点まとめ（AIO向け：結論先出し）"
            items={[
              "iPhone/Androidともに、アプリストアで公式アプリを選び、アカウント作成（またはログイン）→初期設定の順で始めます。",
              "初期設定は「通知」「音声（マイク権限）」「履歴/プライバシー」を最優先で確認すると安全です。",
              "スマホは音声入力やカメラ連携で時短しやすいので、短い質問→追質問で精度を上げる使い方が相性良いです。",
            ]}
          />
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="about-app">
            ChatGPTスマホアプリとは？（公式アプリの概要、Web版との違い）
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            スマホでは公式アプリでチャットできます。ブラウザ版（Web）でも利用できますが、アプリは音声やカメラ連携などスマホ向け機能が使いやすいのが特徴です。
          </p>
          <Callout type="warning" title="セキュリティと権限の管理">
            仕事での利用を想定する場合は、マイクやカメラの権限、通知設定を適切に管理する必要があります。機密情報の取り扱いには十分注意しましょう。
          </Callout>
          <p className="mt-4 text-base leading-8 text-gray-700">
            具体的なプロンプトのコツなどは{" "}
            <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700 font-bold">
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
          <ArticleH2 id="iphone-setup">
            iPhone版の始め方（App Store→アカウント作成→初期設定）
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            App Storeで公式アプリを入れたら、ログイン→権限（マイク/カメラ/通知）を必要最小限に整えるだけで、すぐ使い始められます。
          </p>
          <div className="mt-6 space-y-4">
            {iphoneSteps.map((item) => (
              <section key={item.step} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>{item.step}</ArticleH3>
                <p className="mt-3 text-sm leading-7 text-gray-700 sm:text-base">{item.body}</p>
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
          <ArticleH2 id="android-setup">
            Android版の始め方（Google Play→設定）
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Google Playで公式アプリを入れたら、ログイン→権限と通知を調整し、まずは1つの用途（要約/下書きなど）で試すのが最短です。
          </p>
          <div className="mt-6 space-y-4">
            {androidSteps.map((item) => (
              <section key={item.step} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>{item.step}</ArticleH3>
                <p className="mt-3 text-sm leading-7 text-gray-700 sm:text-base">{item.body}</p>
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
          <ArticleH2 id="smartphone-features">
            スマホ版ならではの便利機能（音声入力、カメラ連携、ウィジェット）
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            スマホは「入力の手間」を減らすほど継続利用しやすくなります。まずは音声とカメラ連携を試し、よく使うパターンをテンプレ化しておくのがおすすめです。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {smartphoneFeatures.map((item) => (
              <section key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>{item.title}</ArticleH3>
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
          <ArticleH2 id="free-vs-paid">
            無料プランと有料プランの違い（スマホでの課金方法）
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            最初は無料で「使いどころ」を固めてから、有料プランを比較するのが堅実です。
          </p>
          <RichTable className="mt-6">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 font-bold text-gray-900">比較軸</th>
                <th className="py-4 px-6 font-bold text-gray-900">無料プラン</th>
                <th className="py-4 px-6 font-bold text-gray-900">有料プラン</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {planComparison.map((row) => (
                <tr key={row.axis} className="hover:bg-gray-50/50 transition-colors">
                  <th className="py-4 px-6 font-bold text-gray-900 bg-gray-50/30 whitespace-nowrap">{row.axis}</th>
                  <td className="py-4 px-6 text-gray-700">{row.freePlan}</td>
                  <td className="py-4 px-6 text-gray-700">{row.paidPlan}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <Callout type="tip" title="スマホ課金の注意点">
            iOS/Androidのアプリ内課金と、公式サイト（Web）での直接契約では管理画面が異なります。解約時などは契約経路を確認しましょう。
          </Callout>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="use-cases">
            スマホでの活用シーン5選（通勤中の要約/買い物リスト/メール下書き/翻訳/調べもの）
          </ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「すぐ使えて、すぐ効果が出る」用途から始めると、スマホでも継続しやすくなります。迷ったら、要約・リスト化・下書きの3つから試すのがおすすめです。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {useCases.map((item) => (
              <section key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>{item.title}</ArticleH3>
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
          <ArticleH2 id="faq">よくある質問（FAQ）</ArticleH2>
          <RichFAQ items={faqItems} />
        </motion.section>

        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox
            title="本記事のまとめ"
            items={[
              "iPhone/Androidともに、公式アプリをストアからインストールして開始する。",
              "初期設定で通知、音声、プライバシー権限を確認しておく。",
              "スマホは音声やカメラを使った「即時性のある用途」で最も価値を発揮する。",
            ]}
          />
        </motion.section>

        
        <section className="mt-20 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-6 text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            関連リンク
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            <li>
              <Link
                href="/academy/blog/chatgpt-claude-beginners-guide"
                className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all"
              >
                ChatGPT・Claude初心者ガイド
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/gpt-vs-claude-comparison"
                className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all"
              >
                ChatGPTとClaudeの違いを比較
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all"
              >
                生成AI学習ロードマップ
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-advanced-tips"
                className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all"
              >
                ChatGPT実践テクニック集
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white shadow-floating"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="text-2xl font-bold">
            次に学ぶ：スマホからでも実務に繋げる
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-300">
            スマホで使い方に慣れたら、次は「プロンプトの型」と「学習ロードマップ」を押さえると、実務での再現性が上がります。まずは生成AI学習ロードマップを読み、続けてアカデミー全体像を確認するのがおすすめです。
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-xl bg-will-primary px-6 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-will-primary/90 active:scale-[0.98]"
            >
              AIリブートアカデミーを見る
            </Link>
            <Link
              href="/academy/blog"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.98]"
            >
              他の記事も読む
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
