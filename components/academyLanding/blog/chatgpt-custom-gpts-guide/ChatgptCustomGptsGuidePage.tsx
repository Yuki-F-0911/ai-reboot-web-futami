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

const keywordTags = ["GPTs 使い方", "カスタムGPT", "GPT Store", "ChatGPT Plus", "GPTs 初心者"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-gpts", label: "GPTsとは何か" },
  { id: "difference", label: "通常のChatGPTとGPTsの違い" },
  { id: "gpt-store", label: "GPT Storeとは？どこにある？" },
  { id: "recommended-gpts", label: "おすすめGPT15選" },
  { id: "how-to-use", label: "GPTsの使い方ステップバイステップ" },
  { id: "create-gpt", label: "自分専用GPTを作るには" },
  { id: "cautions", label: "GPTsを使う際の注意点" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const differenceTable = [
  {
    item: "目的",
    normal: "汎用的な質問・会話・文章作成",
    gpts: "特定の目的・タスクに特化",
  },
  {
    item: "カスタマイズ",
    normal: "なし（毎回同じ状態で始まる）",
    gpts: "ペルソナ・指示・知識ファイルを設定済み",
  },
  {
    item: "最初の設定",
    normal: "不要",
    gpts: "作成者が事前に設定（使う側は不要）",
  },
  {
    item: "対話スタート",
    normal: "ゼロから指示を入力する必要あり",
    gpts: "専用のウェルカムメッセージと選択肢が表示",
  },
  {
    item: "知識・情報",
    normal: "ChatGPTの学習データのみ",
    gpts: "作成者が追加したPDFや文書も参照できる",
  },
  {
    item: "作成・利用",
    normal: "全プラン利用可",
    gpts: "利用は全プラン可、作成はPlus以上",
  },
] as const;

const recommendedGpts = [
  {
    category: "英語学習",
    gpts: [
      { name: "English Tutor", description: "英会話練習・文法チェック・発音ガイドを提供する英語家庭教師GPT。日本語で質問してもOK" },
      { name: "Language Teacher", description: "英語以外の言語にも対応。フランス語・中国語・スペイン語なども学べる" },
      { name: "English Email Pro", description: "ビジネス英語メールの下書き・校正に特化。件名から本文まで丸ごと生成" },
    ],
  },
  {
    category: "料理・レシピ",
    gpts: [
      { name: "Chef's Assistant", description: "冷蔵庫の余り食材を入力するとレシピを提案。アレルギー対応・カロリー計算も可" },
      { name: "Meal Planner", description: "週間献立を自動作成。買い物リストも一緒に出力してくれる時短GPT" },
    ],
  },
  {
    category: "プログラミング・IT",
    gpts: [
      { name: "Code Copilot", description: "コードレビュー・バグ修正・コードの説明に特化。Python・JavaScript・TypeScript対応" },
      { name: "SQL Expert", description: "SQLクエリの作成・最適化に特化。データベース初心者でも使いやすい" },
      { name: "Data Analyst", description: "CSVやExcelデータを読み込み、グラフ作成・統計分析・インサイト抽出を自動化" },
    ],
  },
  {
    category: "文章・ライティング",
    gpts: [
      { name: "Write For Me", description: "記事・ブログ・プレスリリースなど多様な文章を高品質に生成。文体・長さの指定も可" },
      { name: "Copywriter Pro", description: "広告コピー・LP文章・SNS投稿文の作成に特化。コンバージョン最適化の視点で文章を作る" },
    ],
  },
  {
    category: "デザイン・画像",
    gpts: [
      { name: "DALL-E 3 Artist", description: "DALL-E 3を活用した画像生成に特化。プロンプトの作り方を教えてくれながら高品質な画像を生成" },
      { name: "Canva", description: "Canvaと連携して、チャットだけでSNS画像・プレゼン・名刺などを作成できる公式GPT" },
    ],
  },
  {
    category: "ビジネス・仕事効率化",
    gpts: [
      { name: "PDF Analyzer", description: "PDFをアップロードして要約・Q&A・重要点抽出。英語の論文や契約書の読み込みにも最適" },
      { name: "Presentation Creator", description: "テーマを伝えるだけでプレゼン構成・スライド内容を自動生成" },
      { name: "Meeting Summarizer", description: "議事録テキストを貼り付けると、決定事項・アクションアイテム・次回課題を整理" },
    ],
  },
] as const;

const howToUseSteps = [
  {
    step: "ステップ1：ChatGPTにログインする",
    body: "chatgpt.com にアクセスし、アカウントでログインします。無料プランでもGPT Storeの閲覧・利用（回数制限あり）は可能です。",
  },
  {
    step: "ステップ2：GPT Storeを開く",
    body: "左サイドバーの上部にある「GPTを探索する（Explore GPTs）」をクリックします。スマホアプリでは画面下のメニューから「GPTを探索」を選びます。",
  },
  {
    step: "ステップ3：使いたいGPTを選ぶ",
    body: "カテゴリ別に並んでいるGPTを探すか、検索バーにキーワードを入力して探します。「Featured（注目）」「Trending（人気急上昇）」のタブもあります。気になるGPTをクリックするとプレビューが表示されます。",
  },
  {
    step: "ステップ4：「Chat」ボタンで会話開始",
    body: "GPTのページで「Chat」ボタンをクリックすると、そのGPT専用のチャット画面が開きます。通常のChatGPTとは見た目が少し違い、ウェルカムメッセージや選択肢が表示されることがあります。",
  },
  {
    step: "ステップ5：GPTの指示に従ってやり取りする",
    body: "GPTによっては「まず〇〇を教えてください」といった案内が出ます。それに従って情報を入力すれば、専用の回答が返ってきます。会話の仕方は通常のChatGPTとまったく同じです。",
  },
  {
    step: "ステップ6：よく使うGPTは「ピン留め」する",
    body: "会話一覧の左サイドバーに、使ったGPTが「最近使用したGPT」として表示されます。よく使うGPTは3点メニューから「ピン留め」しておくとすぐアクセスできます。",
  },
] as const;

const createGptSteps = [
  {
    step: "ステップ1：GPT Builderを開く",
    body: "左サイドバーの「GPTを探索する」→ 右上の「作成（Create）」ボタンをクリックします。「GPT Builder」という対話型の作成ツールが開きます（Plusプラン以上が必要）。",
  },
  {
    step: "ステップ2：どんなGPTにしたいか日本語で伝える",
    body: "GPT Builderが「どんなGPTを作りたいですか？」と聞いてきます。例えば「私の会社の採用FAQに答えるGPTを作りたい。丁寧で親しみやすいトーンで」と日本語で入力するだけで、自動的に名前・説明・指示を提案してくれます。",
  },
  {
    step: "ステップ3：プレビューで動作確認する",
    body: "右側のプレビューエリアで実際にチャットして動作を確認できます。「もっと丁寧に」「専門用語を使わないで」などのフィードバックをBuildサイドに入力すると、GPT Builderが自動で調整してくれます。",
  },
  {
    step: "ステップ4：「Configure（設定）」タブで詳細調整",
    body: "名前・アイコン・説明文・詳細な指示（Instructions）・会話の開始サジェスト・Web検索や画像生成などの機能オン/オフを手動で細かく設定できます。PDFや文書ファイルをアップロードして、GPTの知識として参照させることも可能です。",
  },
  {
    step: "ステップ5：公開範囲を選んで保存",
    body: "右上の「保存（Save）」ボタンをクリックし、「自分のみ」「リンクを知っている人」「全員に公開」の3種類から選びます。初めてなら「自分のみ」で試運転がおすすめです。",
  },
] as const;

const cautions = [
  {
    title: "プライバシー：個人情報や機密情報は入力しない",
    body: "GPTsを使う際も、通常のChatGPTと同様に氏名・住所・クレジットカード番号・会社の機密情報は入力しないのが基本ルールです。特にサードパーティが作ったGPTは、どのような設定になっているか確認が難しいため注意が必要です。",
  },
  {
    title: "信頼性：作成者を確認する",
    body: "GPT Storeには誰でもGPTを公開できます。OpenAIや有名企業が作った「認証バッジ付き」のGPTは信頼性が高いですが、一般ユーザーが作ったGPTは情報の正確性に差があります。重要な情報は必ず一次ソースで確認しましょう。",
  },
  {
    title: "利用規約：商業利用に注意",
    body: "GPTsで生成したコンテンツの商業利用はOpenAIの利用規約に従います。また、他のサービスと連携するGPT（ActionやAPIを使うもの）は、そのサービスの利用規約も別途確認が必要です。",
  },
  {
    title: "品質：ハルシネーションのリスク",
    body: "GPTsもChatGPTと同様に事実と異なる情報（ハルシネーション）を生成する可能性があります。特に最新情報・数値・医療・法律情報は公式ソースで必ず確認してください。",
  },
] as const;

export default function ChatgptCustomGptsGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPTのGPTs完全入門2026" },
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
                title="ChatGPTのGPTs（カスタムGPT）完全入門2026"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPTのGPTs（カスタムGPT）完全入門2026｜無料で使える便利GPT15選と自分専用GPTの作り方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPT Plusにしたけど、GPTsって何？」「GPT Storeって聞いたことあるけどどこにあるの？」——そんな疑問を持つ方は多いはずです。
            GPTs（カスタムGPT）は、ChatGPTの機能の中でも特に実用性が高い機能ですが、見落とされがちです。
            この記事では、GPTsとは何かという基礎から、今すぐ使えるおすすめGPT15選、さらには自分専用GPTの作り方まで、
            初心者でも迷わず始められるよう丁寧に解説します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプロンプト入門
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-plan-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプラン比較
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT上級活用テクニック
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-memory-feature-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTメモリ機能ガイド
          </Link>
          もあわせてご覧ください。
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
            要点まとめ（AIO向け：結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              GPTs（カスタムGPT）は特定の目的に特化したChatGPTのカスタム版。英語学習・料理・プログラミングなど用途別に使い分けられる
            </li>
            <li className="pl-1 marker:text-gray-500">
              GPT Storeの利用（他者のGPTを使う）は無料プランでも可能。自分でGPTを作成するにはPlusプラン（月額$20）が必要
            </li>
            <li className="pl-1 marker:text-gray-500">
              2026年時点でGPT Storeには300万以上のGPTが公開されており、カテゴリ検索やキーワード検索で見つけられる
            </li>
            <li className="pl-1 marker:text-gray-500">
              自分専用GPTの作成はプログラミング不要。GPT Builderに日本語で話しかけるだけで30分以内に作れる
            </li>
          </ul>
        </motion.section>

        {/* GPTsとは何か */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-is-gpts" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            GPTsとは何か
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            GPTs（ジーピーティーズ）とは、<strong>特定の目的・用途に特化してカスタマイズされたChatGPT</strong>のことです。
            OpenAIが2023年11月に発表した機能で、2026年現在も急速に拡大中です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            もう少し噛み砕いて言うと、「英語を教えることだけに特化したChatGPT」「料理レシピの提案だけをするChatGPT」「あなたの会社のFAQに答えるChatGPT」——
            こうした<strong>用途別の専用AIアシスタント</strong>を、誰でも作れる・使えるようにした仕組みです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            通常のChatGPTは「何でも答えられる汎用型」ですが、GPTsは「特定のことに特化した専門型」です。
            たとえ同じGPT-5モデルを使っていても、事前に「英語の先生として振る舞う」「日本語でわかりやすく説明する」
            「提供されたPDFの内容を参照して答える」といった指示が組み込まれているため、
            最初から目的に沿った会話ができます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            GPTsには大きく2種類の使い方があります：
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-base font-semibold text-blue-900">① 他の人が作ったGPTを使う</p>
              <p className="mt-2 text-sm leading-7 text-blue-800">
                GPT Storeに公開されている300万以上のGPTを検索して使う。無料プランでも利用可能（回数制限あり）。英語学習・料理・プログラミングなど目的別に最適なGPTがすでに公開されている。
              </p>
            </div>
            <div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
              <p className="text-base font-semibold text-purple-900">② 自分だけのGPTを作る</p>
              <p className="mt-2 text-sm leading-7 text-purple-800">
                Plusプラン以上で「GPT Builder」を使い、自分専用またはチーム向けのカスタムGPTを作成。プログラミング不要で、日本語で話しかけるだけで作れる。業務マニュアルや社内FAQをGPTに組み込むことも可能。
              </p>
            </div>
          </div>
        </motion.section>

        {/* 通常のChatGPTとGPTsの違い */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="difference" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            通常のChatGPTとGPTsの違い
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「通常のChatGPTで十分じゃないの？」と思う方のために、具体的な違いを整理します。
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">比較項目</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">通常のChatGPT</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">GPTs（カスタムGPT）</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {differenceTable.map((row) => (
                  <tr key={row.item} className="bg-white">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                    <td className="px-4 py-3 leading-6 text-gray-700">{row.normal}</td>
                    <td className="px-4 py-3 leading-6 text-gray-700">{row.gpts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-base leading-8 text-gray-700">
            特に大きな違いは<strong>「毎回指示を書かなくていい」</strong>点です。
            通常のChatGPTで「英語の先生として、中学生レベルの英語で、例文を使いながら教えてください」と毎回入力するのは手間がかかります。
            GPTsならその設定が最初から組み込まれているため、「go の過去形を教えて」と送るだけで最適な回答が返ってきます。
          </p>
        </motion.section>

        {/* GPT Storeとは */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="gpt-store" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            GPT Storeとは？どこにある？
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            GPT Storeは、世界中のユーザーや企業が作成したGPTsを公開・共有するプラットフォームです。
            スマホのアプリストアのようなイメージで、<strong>検索して気に入ったGPTを使える</strong>場所です。
          </p>
          <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">GPT Storeへのアクセス方法</p>
            <div className="mt-3 space-y-3 text-sm leading-7 text-amber-900">
              <div>
                <p className="font-semibold">PCブラウザの場合：</p>
                <p>chatgpt.com にログイン → 左サイドバーの「GPTを探索する（Explore GPTs）」をクリック</p>
              </div>
              <div>
                <p className="font-semibold">スマホアプリの場合：</p>
                <p>ChatGPTアプリを開く → 画面下のメニューバーの「GPTを探索」アイコンをタップ</p>
              </div>
            </div>
          </div>
          <p className="mt-5 text-base leading-8 text-gray-700">
            GPT Storeには以下のようなカテゴリが用意されています：
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-400">DALL-E（画像生成）</li>
            <li className="pl-1 marker:text-gray-400">Writing（文章作成）</li>
            <li className="pl-1 marker:text-gray-400">Productivity（生産性向上）</li>
            <li className="pl-1 marker:text-gray-400">Research & Analysis（調査・分析）</li>
            <li className="pl-1 marker:text-gray-400">Programming（プログラミング）</li>
            <li className="pl-1 marker:text-gray-400">Education（教育・学習）</li>
            <li className="pl-1 marker:text-gray-400">Lifestyle（生活・趣味）</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            OpenAI公式が開発・認証したGPTには「認証バッジ」が表示されるため、信頼性の高いGPTを見分けることができます。
            2026年現在、Canva・Spotify・Zapierなど有名企業も公式GPTを提供しています。
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
          <MidArticleCtaBox slug="chatgpt-custom-gpts-guide" />
        </motion.section>

        {/* おすすめGPT15選 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="recommended-gpts" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            今すぐ使えるおすすめGPT15選（カテゴリ別）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            2026年2月時点で特に人気・実用性の高いGPTをカテゴリ別に15個紹介します。
            GPT Storeで名前を検索してすぐに使えます。
          </p>
          <div className="mt-6 space-y-6">
            {recommendedGpts.map((cat) => (
              <section key={cat.category} className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-bold text-gray-900">
                  <span className="mr-2 rounded-full bg-will-primary/10 px-3 py-1 text-sm font-semibold text-will-primary">
                    {cat.category}
                  </span>
                </h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <th className="py-2 pl-3 pr-4 text-left font-semibold text-gray-800">GPT名</th>
                        <th className="py-2 pl-3 pr-4 text-left font-semibold text-gray-800">特徴・使い方</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {cat.gpts.map((gpt) => (
                        <tr key={gpt.name}>
                          <td className="py-3 pl-3 pr-4 font-medium text-gray-900 whitespace-nowrap">{gpt.name}</td>
                          <td className="py-3 pl-3 pr-4 leading-6 text-gray-700">{gpt.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">検索のコツ</p>
            <p className="mt-2 text-sm leading-7 text-blue-800">
              GPT名が英語でも、GPT Storeの検索バーに日本語で「英語学習」「PDFまとめ」などと入力すると関連するGPTが表示されます。
              また、OpenAI公式の認証バッジ（青いチェックマーク）があるGPTから試すと安心です。
            </p>
          </div>
        </motion.section>

        {/* GPTsの使い方ステップバイステップ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="how-to-use" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            GPTsの使い方ステップバイステップ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            初めてGPTsを使う方向けに、具体的な手順を順番に解説します。
          </p>
          <div className="mt-6 space-y-4">
            {howToUseSteps.map((item, index) => (
              <div key={item.step} className="flex gap-4 rounded-xl border border-gray-200 p-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900">{item.step}</p>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-base leading-8 text-gray-700">
            GPTsを使うのは、通常のChatGPTを使うのと基本的に同じです。難しいことは何もありません。
            まずは「PDF Analyzer」や「Canva」のような公式・著名GPTから試してみるのがおすすめです。
          </p>
        </motion.section>

        {/* 自分専用GPTを作るには */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="create-gpt" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            自分専用GPTを作るには？（Plusプラン限定機能）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPT Plusプラン（月額$20）以上に加入していれば、オリジナルのGPTを作成できます。
            プログラミング不要で、日本語で話しかけるだけで作れます。
          </p>
          <div className="mt-5 rounded-lg border border-purple-200 bg-purple-50 p-4">
            <p className="text-sm font-semibold text-purple-800">こんな人に特におすすめ</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-purple-800">
              <li className="pl-1 marker:text-purple-400">毎回同じような指示をChatGPTに出している</li>
              <li className="pl-1 marker:text-purple-400">特定の業務（採用FAQ、顧客対応、議事録作成など）に特化したAIが欲しい</li>
              <li className="pl-1 marker:text-purple-400">社内マニュアルや商品情報をAIに参照させたい</li>
              <li className="pl-1 marker:text-purple-400">家族や同僚と専用のAIアシスタントを共有したい</li>
            </ul>
          </div>
          <div className="mt-6 space-y-4">
            {createGptSteps.map((item, index) => (
              <div key={item.step} className="flex gap-4 rounded-xl border-2 border-will-primary/15 bg-will-lighter/30 p-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900">{item.step}</p>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-base leading-8 text-gray-700">
            カスタムGPTの活用例として、<strong>「自分の業務マニュアルPDFをアップロードして、新入社員の質問に答えるGPT」</strong>や
            <strong>「自社の商品カタログを参照して顧客の質問に答えるサポートGPT」</strong>なども作成できます。
            社内ツールとしての活用も広がっています。
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
          <h2 id="cautions" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            GPTsを使う際の注意点
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            便利なGPTsですが、使い方にはいくつか気をつけるポイントがあります。
          </p>
          <div className="mt-6 space-y-4">
            {cautions.map((item) => (
              <section key={item.title} className="rounded-lg border border-amber-200 bg-amber-50 p-5">
                <h3 className="text-base font-semibold text-amber-900">⚠️ {item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-amber-800">{item.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-base leading-8 text-gray-700">
            プライバシーや信頼性に注意しながら使えば、GPTsは仕事の効率を大きく改善する強力なツールです。
            まずは認証バッジ付きの安全なGPTから試してみてください。
          </p>
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
            まとめ：GPTsはChatGPTを10倍便利にする機能
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事では、ChatGPTのGPTs（カスタムGPT）について基礎から実践まで解説しました。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">GPTsは特定の目的に特化したChatGPTのカスタム版。毎回指示を書く手間が省ける</li>
            <li className="pl-1 marker:text-gray-500">GPT Storeには300万以上のGPTが公開されており、無料プランでも使える（回数制限あり）</li>
            <li className="pl-1 marker:text-gray-500">英語学習・料理・プログラミング・文章作成など用途別に最適なGPTがすでに揃っている</li>
            <li className="pl-1 marker:text-gray-500">自分専用GPTの作成はPlusプラン以上が必要だが、プログラミング不要で30分で作れる</li>
            <li className="pl-1 marker:text-gray-500">使う際は個人情報を入力しない、作成者を確認するなどの基本的な注意を守ることが大切</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            まずはGPT Storeを開いて、興味のあるカテゴリのGPTを1つ試してみましょう。
            使ってみると「これは便利だ」と実感できるはずです。
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
            title="ChatGPTをさらに使いこなすヒントをLINEで毎週配信中"
            description="AIリブートのLINE公式アカウントでは、ChatGPTをさらに使いこなすためのヒントを週1回お届けしています。GPTsの活用法、おすすめプロンプト、最新AI情報など、実践ですぐ使えるノウハウをまとめてお届けします。ぜひ登録してください。"
            buttonLabel="LINEで登録する（無料）"
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のステップ：ChatGPTをもっと活用したくなったら
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            GPTsを使いこなしたら、プロンプト（指示文）の書き方を学ぶとさらに効果が上がります。
            また、メモリ機能を活用するとChatGPTがあなたのことを覚えてくれて、毎回の説明が不要になります。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              プロンプトの書き方を学ぶ
            </Link>
            <Link
              href="/academy/blog/chatgpt-memory-feature-guide"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              メモリ機能の使い方を見る
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-plan-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT無料・Plus・Teamプラン比較｜2026年最新版
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-memory-feature-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTのメモリ機能完全ガイド｜設定方法から活用術まで
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT上級活用テクニック｜効率化のための25のコツ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-free-guide-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT無料版でここまでできる！2026年最新｜有料版との違い
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/gpt-vs-claude-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                GPT vs Claude 2026年版｜使い分けガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-voice-mode-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT音声モード完全ガイド｜スマホで話しかけるだけのAI活用術
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
