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

const keywordTags = [
  "ChatGPT カスタム指示",
  "Custom Instructions",
  "ChatGPT パーソナライズ",
  "ChatGPT 毎回設定 不要",
  "ChatGPT 効率化",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-custom", label: "Custom Instructionsとは何か" },
  { id: "how-to-setup", label: "設定方法（PC・スマホ別）" },
  { id: "two-fields", label: "2つの項目の意味と書き方" },
  { id: "templates", label: "すぐ使えるテンプレート15例" },
  { id: "before-after", label: "設定前後の比較：回答がどう変わるか" },
  { id: "vs-memory", label: "メモリ機能との違いと使い分け" },
  { id: "five-tips", label: "うまく使いこなすコツ5つ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
] as const;

const templates = [
  {
    occupation: "会社員（事務・総務）",
    knownField: "東京都内の中小企業で総務・人事を担当。社員数50名規模。ExcelとWordは中級者、ITは苦手。",
    respondField: "専門用語を避けて平易な言葉で。手順は箇条書きとステップ番号で示してください。",
  },
  {
    occupation: "営業職・セールス",
    knownField: "BtoBソフトウェアの法人営業を10年。担当は中小企業〜中堅企業。毎週20件の商談をこなしています。",
    respondField: "結論を最初に述べ、その後に根拠を示す構成で。提案書はビジネスライクな敬語で。",
  },
  {
    occupation: "エンジニア",
    knownField: "Webバックエンドエンジニア（Python/Django、AWS）。経験8年。フロントはReactをある程度書ける。",
    respondField: "技術的な詳細を省かずに説明してください。コードはコードブロックで、コメント付きで示すこと。",
  },
  {
    occupation: "フリーランス（ライター・クリエイター）",
    knownField: "フリーランスのWebライター。得意分野はビジネス・キャリア系。月に20〜25本の記事を執筆中。",
    respondField: "読者目線のわかりやすい文章で。見出し・箇条書きを積極的に使って読みやすくしてください。",
  },
  {
    occupation: "主婦・主夫（子育て中）",
    knownField: "専業主婦。小学生と幼稚園の子ども2人を育てています。料理・家事・育児の効率化に関心があります。",
    respondField: "フレンドリーで温かみのある言葉遣いで。難しい言葉より日常的な表現を使ってください。",
  },
  {
    occupation: "学生（大学生・院生）",
    knownField: "経営学部3年生。就職活動と卒業論文（テーマ：中小企業のDX）を並行中。英語はTOEIC 720点。",
    respondField: "論理的・構造的に整理して説明してください。レポートや論文に転用しやすい形式で。",
  },
  {
    occupation: "医療関係者",
    knownField: "看護師として病棟勤務10年。内科・循環器科が専門。医療用語・薬の一般的な知識は十分にある。",
    respondField: "医療専門用語は略さず正式名称で。根拠（エビデンス）のレベルを示してください。",
  },
  {
    occupation: "教師・教育関係者",
    knownField: "中学校の数学教員（教職10年）。生徒は中学1〜3年生。ICTを活用した授業改善に取り組み中。",
    respondField: "授業で使いやすい表現・例えを心がけて。難しい内容は中学生にも伝わるレベルに噛み砕いてください。",
  },
  {
    occupation: "経営者・役員",
    knownField: "製造業の中小企業（社員30名）の2代目社長。財務・人事・営業すべてを兼務。月2回の取締役会あり。",
    respondField: "エグゼクティブサマリー形式で結論を先に。判断に必要な情報を箇条書きでコンパクトにまとめて。",
  },
  {
    occupation: "マーケター・広報",
    knownField: "BtoCマーケター（デジタルマーケティング専門）。SNS・SEO・Web広告が得意。Canvaはほぼ毎日使用。",
    respondField: "マーケティング用語はそのまま使ってOK。ファクトと数字を含めたデータドリブンな回答を優先して。",
  },
  {
    occupation: "管理職・チームリーダー",
    knownField: "IT企業のプロダクトマネージャー。10名のチームを率いる。毎週1on1・デイリースタンドアップを実施。",
    respondField: "マネジメントの視点を含めた回答で。チームへの伝え方・フィードバックの言葉も提案してください。",
  },
  {
    occupation: "50代以上・定年後・シニア",
    knownField: "62歳・元銀行員。定年退職後、趣味の家庭菜園とボランティア活動を続けています。スマホはiPhone利用。",
    respondField: "ゆっくり丁寧に、専門用語を使わずに説明してください。短い文章で、一度に伝えることを絞って。",
  },
  {
    occupation: "副業・複業ワーカー",
    knownField: "会社員（マーケティング）をしながら、週末にWebデザインの副業を行っています。月5〜10万円が目標。",
    respondField: "本業と副業のバランスを意識した現実的なアドバイスを。時間効率を優先した提案を含めてください。",
  },
  {
    occupation: "語学学習者",
    knownField: "英語を独学中（現在B1レベル）。英語のビジネスメールと会議での英会話を伸ばしたい。日本語ネイティブ。",
    respondField: "日本語と英語を併記して回答してください。英語の説明には日本語訳と文法ポイントも加えてください。",
  },
  {
    occupation: "クリエイター・デザイナー",
    knownField: "UI/UXデザイナー（経験5年）。FigmaとAdobe CCを日常使用。現在アプリのリデザインプロジェクト担当。",
    respondField: "デザインの理由（なぜそうするか）を必ず添えてください。ユーザビリティの観点を含めた提案で。",
  },
] as const;

const beforeAfterExamples = [
  {
    type: "カスタム指示なし",
    prompt: "「会議のまとめを作ってください」",
    response:
      "一般的な会議まとめのフォーマットが返ってくる。出席者・議題・決定事項などの汎用テンプレート。自分の業界や職種に合っていない場合も。",
  },
  {
    type: "カスタム指示あり（営業マネージャー設定）",
    prompt: "「会議のまとめを作ってください」",
    response:
      "BtoB営業の文脈で、アクションアイテムと期日を明確にしたフォーマットで出力。次回MTGまでの担当者別タスクリストも自動追加される。",
  },
] as const;

const fiveTips = [
  {
    title: "最初は「短く・具体的に」書く",
    body: "1,500文字フルに書こうとする必要はありません。まず「職業：〇〇」「出力形式：箇条書き300字以内」程度の短い設定から始めましょう。使いながら少しずつ追記するのが継続のコツです。",
  },
  {
    title: "数値・形式を指定すると精度が上がる",
    body: '「わかりやすく説明して」より「箇条書き5項目・各50字以内」、「丁寧な文体で」より「敬語・ですます調・400字以内」のように、数値と形式を具体的に指定するほど、期待通りの回答が返ってきやすくなります。',
  },
  {
    title: "定期的に見直す（月1回ルール）",
    body: "職業・担当業務・スキルレベルなどは変わることがあります。月に1回程度、設定内容を見直して古くなった情報を更新しましょう。「現在のプロジェクト」や「今期の目標」など、時限性のある情報は特に定期更新が重要です。",
  },
  {
    title: "指示が効かないときは「この会話では〇〇して」と追加指示",
    body: "Custom Instructionsの設定が特定の会話で思い通りに機能しないことがあります。そのときは会話の冒頭に「この会話では英語で答えて」「今回だけ長めに詳しく説明して」と一時的な上書き指示を入れましょう。",
  },
  {
    title: "用途別にGPTsを使い分ける",
    body: "Custom Instructionsは1セットしか保存できません。「仕事用」「趣味用」「英語学習用」など複数のプロファイルを使い分けたい場合は、GPTsで目的別のカスタムAIを作成するのがおすすめです。",
  },
] as const;

export default function ChatgptCustomInstructionsGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPTカスタム指示完全ガイド" },
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
                title="ChatGPTのカスタム指示（Custom Instructions）完全ガイド｜設定するだけで毎回の回答が劇的に変わる方法"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPTのカスタム指示（Custom Instructions）完全ガイド｜設定するだけで毎回の回答が劇的に変わる方法
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            ChatGPTを開くたびに「私は〇〇という仕事をしていて……」と自己紹介するのは、時間がもったいない。そう思ったことはありませんか？
            ChatGPTの「Custom Instructions（カスタム指示）」は、一度設定するだけで<strong>すべての会話に自動的に適用される「自分専用の設定」</strong>です。
            職業・好みのフォーマット・専門知識レベルなどを登録しておくことで、毎回説明しなくても最初から自分に合った回答が返ってくるようになります。
            この記事では、設定方法から職業別テンプレート・設定前後の比較・メモリ機能との使い分けまで、初めての方にもわかるよう詳しく解説します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-memory-feature-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTメモリ機能完全ガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            プロンプトの書き方入門
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTスマホ開始ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-free-plan-comparison-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI無料プラン比較2026
          </Link>
          もあわせて参照ください。
        </p>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox
            title="要点まとめ（結論先出し）"
            items={[
              "Custom Instructionsは一度設定すると全会話に自動適用される「自分専用の設定」——毎回の自己紹介が不要になる",
              "設定は「設定 → パーソナライゼーション → カスタム指示」から3ステップで完了。PC・スマホ共通の操作",
              "「自分についての情報」欄と「回答の仕方」欄、2つの項目に入力する。各欄1,500文字まで",
              "テンプレートをそのまま活用すれば今日から設定できる。最初は100〜200文字でOK",
              "メモリ機能は自動蓄積・変動情報向け、Custom Instructionsは固定情報・常に守るルール向け。両方を組み合わせるのが最強",
            ]}
          />
        </motion.section>

        {/* Custom Instructionsとは何か */}
        <motion.section
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="what-is-custom">Custom Instructionsとは何か</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            Custom Instructions（カスタム指示）は、OpenAIが2023年7月に追加したChatGPTの機能です。一度設定すると、新しく始めたすべての会話に自動的に適用される「個人設定」として機能します。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            たとえば「私はマーケターで、回答は常に箇条書き300字以内で」と設定しておけば、毎回同じことを伝えなくてもChatGPTは最初からその前提で回答してくれます。
            <strong>毎回の自己紹介・フォーマット指定・専門レベルの説明が一切不要</strong>になるわけです。
          </p>
          <ArticleH3>Custom Instructionsが特に役立つシーン</ArticleH3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { icon: "💼", title: "仕事で毎日使っている人", body: "職業・業界・担当業務を設定しておくと、すべての相談が仕事の文脈で最適化される" },
              { icon: "📝", title: "出力フォーマットにこだわりがある人", body: "「必ず箇条書き」「表形式で」「200字以内で要約」など、好みの形式を固定できる" },
              { icon: "🎓", title: "スキルレベルを毎回説明している人", body: "「Pythonは初心者」「英語はビジネスレベル」など、適切な難易度の回答を自動設定" },
              { icon: "🌐", title: "日英両対応が必要な人", body: "「英語と日本語を併記して」などの言語設定を固定でき、都度の指示が不要に" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 p-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                </div>
                <p className="mt-2 text-sm leading-7 text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
          <Callout type="info" title="Custom Instructionsはいつから？無料プランでも使える？">
            Custom Instructionsは2023年7月（Plus向け）→2023年8月（無料プランにも拡大）で全ユーザー対応となりました。
            現在は無料プラン・Plusプラン・Proプランのいずれでも利用可能です。一度設定すれば全会話に適用されます。
          </Callout>
        </motion.section>

        {/* 設定方法 */}
        <motion.section
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="how-to-setup">設定方法（PC・スマホ別の手順）</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            Custom Instructionsの設定はとても簡単で、PCでもスマホでも3〜4ステップで完了します。
          </p>
          <ArticleH3>PCブラウザ（ChatGPT.com）での設定手順</ArticleH3>
          <div className="mt-4 space-y-3">
            {[
              { step: "1", title: "ChatGPT.comにサインインする", body: "ブラウザでChatGPT.comにアクセスし、アカウントにサインインします。" },
              { step: "2", title: "左下のアカウント名をクリック", body: "画面左下にあるアカウント名（またはプロフィールアイコン）をクリックして、メニューを開きます。" },
              { step: "3", title: "「設定（Settings）」を選択", body: "ポップアップメニューから「Settings（設定）」をクリックします。" },
              { step: "4", title: "「パーソナライゼーション」→「カスタム指示」を開く", body: "設定パネルの「Personalization（パーソナライゼーション）」→「Custom Instructions（カスタム指示）」をクリックします。" },
              { step: "5", title: "2つの欄に入力して保存", body: "「What would you like ChatGPT to know about you?」と「How would you like ChatGPT to respond?」の2つの欄に入力し、「Save（保存）」をクリックして完了です。" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 rounded-lg border border-gray-200 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <ArticleH3>スマホアプリ（iOS・Android）での設定手順</ArticleH3>
          <div className="mt-4 space-y-3">
            {[
              { step: "1", title: "ChatGPTアプリを開く", body: "公式のChatGPTアプリ（App Store / Google Play）を起動してサインインします。" },
              { step: "2", title: "左上のハンバーガーメニューをタップ", body: "画面左上の三本線（ハンバーガーメニュー）をタップしてサイドバーを開きます。" },
              { step: "3", title: "アカウント名 → 「設定（Settings）」へ", body: "サイドバー下部のアカウント名をタップ → 「Settings（設定）」を選択します。" },
              { step: "4", title: "「カスタム指示（Custom Instructions）」をタップ", body: "「Personalization（パーソナライゼーション）」→「Custom Instructions（カスタム指示）」の順にタップします。" },
              { step: "5", title: "2つの欄に入力して保存", body: "2つの入力欄にそれぞれ内容を入力し、右上の「Save（保存）」をタップして完了です。" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 rounded-lg border border-gray-200 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <Callout type="tip" title="設定を一時的にオフにしたい場合">
            Custom Instructionsを有効にしたまま、特定の会話だけ設定を無効にしたい場合は、会話の冒頭に「この会話ではカスタム指示を無視して」と伝えれば機能をスキップさせることができます。設定画面でトグルをオフにすることでも同様に無効化できます。
          </Callout>
        </motion.section>

        {/* 中間CTA */}
        <motion.section
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="chatgpt-custom-instructions-guide" />
        </motion.section>

        {/* 2つの項目の意味 */}
        <motion.section
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="two-fields">設定欄の2項目の意味と書き方</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            Custom Instructionsには2つの入力欄があります。それぞれの役割を理解して使い分けることで、より精度の高いパーソナライズが実現します。
          </p>
          <div className="mt-6 space-y-6">
            <div className="rounded-xl border-2 border-will-primary/20 bg-will-lighter/20 p-6">
              <p className="text-lg font-bold text-will-primary">欄1：What would you like ChatGPT to know about you?</p>
              <p className="mt-1 text-sm font-medium text-gray-500">（日本語UIでは「ChatGPTに自分についてどんなことを知っておいてほしいですか？」）</p>
              <p className="mt-3 text-base leading-7 text-gray-700">
                <strong>自分に関する基本情報・背景・状況</strong>を入力する欄です。ChatGPTが「この人はどんな人か」を理解するための情報を書きます。
              </p>
              <div className="mt-4 rounded-lg bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">書くべき情報の例</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                  <li>職業・業界・役職（例：「IT企業のプロダクトマネージャー」）</li>
                  <li>スキルレベル・専門知識（例：「Pythonは初心者、SQLは中級者」）</li>
                  <li>ゴール・目的（例：「副業で月10万円のフリーランス収入を目指している」）</li>
                  <li>利用しているツール・環境（例：「NotionとSlackを日常業務で使用」）</li>
                  <li>制約・前提条件（例：「予算は限られている」「チームは3名」）</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border-2 border-orange-200 bg-orange-50/30 p-6">
              <p className="text-lg font-bold text-orange-600">欄2：How would you like ChatGPT to respond?</p>
              <p className="mt-1 text-sm font-medium text-gray-500">（日本語UIでは「ChatGPTにどのように応答してほしいですか？」）</p>
              <p className="mt-3 text-base leading-7 text-gray-700">
                <strong>回答の形式・スタイル・トーン</strong>を指定する欄です。「どのように答えてほしいか」のルールを書きます。
              </p>
              <div className="mt-4 rounded-lg bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">書くべき内容の例</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                  <li>出力形式（例：「必ず箇条書きで、各項目50字以内」「結論を最初に述べること」）</li>
                  <li>文体・トーン（例：「ですます調・敬語で」「フレンドリーな話し言葉で」）</li>
                  <li>長さ・量（例：「回答全体を400字以内にまとめること」）</li>
                  <li>根拠・補足の指定（例：「重要な主張には根拠・出典を示すこと」）</li>
                  <li>使ってほしい言語（例：「日本語で答えて」「英語と日本語を併記して」）</li>
                </ul>
              </div>
            </div>
          </div>
          <Callout type="tip" title="まず欄2（回答の仕方）から書くのがコツ">
            効果を一番実感しやすいのは欄2（回答スタイルの指定）からです。「箇条書き・300字以内」「結論ファースト」など、出力形式を設定するだけでもChatGPTの使い心地が大幅に変わります。慣れてきたら欄1（自分の情報）も充実させていきましょう。
          </Callout>
        </motion.section>

        {/* テンプレート15例 */}
        <motion.section
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="templates">すぐに使えるテンプレート15例（職業別）</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            あなたの職業・状況に近いテンプレートを見つけて、そのままコピー&ペーストして使ってみましょう。一字一句同じでなく、自分の状況に合わせて修正してOKです。
          </p>
          <RichTable className="mt-6">
            <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left whitespace-nowrap">職業・状況</th>
                <th className="px-4 py-3 text-left">欄1：自分についての情報</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">欄2：回答の仕方</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {templates.map((t) => (
                <tr key={t.occupation} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-semibold text-will-primary whitespace-nowrap align-top">{t.occupation}</td>
                  <td className="px-4 py-3 text-sm text-gray-700 align-top">{t.knownField}</td>
                  <td className="px-4 py-3 text-sm text-gray-700 align-top hidden md:table-cell">{t.respondField}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <p className="mt-3 text-xs text-gray-500">
            ※ スマホ表示では「欄2：回答の仕方」列を省略しています。PCブラウザでご覧ください。
          </p>
        </motion.section>

        {/* 設定前後の比較 */}
        <motion.section
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="before-after">設定前後の比較：同じ質問でも回答がどう変わるか</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            「会議のまとめを作ってください」という同じ指示でも、Custom Instructionsの有無で返ってくる回答は大きく変わります。
          </p>
          <div className="mt-6 space-y-4">
            {beforeAfterExamples.map((ex) => (
              <div
                key={ex.type}
                className={`rounded-xl p-5 ${ex.type.includes("なし") ? "border border-gray-300 bg-gray-50" : "border-2 border-will-primary/30 bg-will-lighter/30"}`}
              >
                <p className={`text-sm font-bold ${ex.type.includes("なし") ? "text-gray-500" : "text-will-primary"}`}>
                  {ex.type.includes("なし") ? "❌ カスタム指示なし" : "✅ カスタム指示あり（営業マネージャー設定）"}
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-800">プロンプト: {ex.prompt}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{ex.response}</p>
              </div>
            ))}
          </div>
          <Callout type="info" title="よりリアルな比較例">
            <div>
              <p className="font-semibold">カスタム指示なしの回答例：</p>
              <p className="mt-1 text-sm">「会議のまとめのテンプレートです。①日時：②出席者：③議題：④決定事項：⑤次回アクション：……」という汎用的な回答。</p>
              <p className="mt-3 font-semibold">カスタム指示あり（営業職の設定）の回答例：</p>
              <p className="mt-1 text-sm">「今週の商談まとめ＞担当者別アクション〉期日付きタスクリスト」というフォーマットで、営業の文脈に沿った実用的な内容が返ってくる。</p>
            </div>
          </Callout>
        </motion.section>

        {/* メモリ機能との違い */}
        <motion.section
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="vs-memory">メモリ機能との違いと使い分け</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            ChatGPTには「Custom Instructions」と似た機能として「メモリ機能（Memory）」もあります。この2つは異なる仕組みを持っており、うまく使い分けることで最大限のパーソナライズが実現します。
          </p>
          <Callout type="info" title="Custom Instructions vs メモリ機能：一言で言うと">
            <div>
              <p><strong>Custom Instructions</strong>＝ 自分で書く「固定の設定書」。変わらない基本情報と常に守ってほしいルールを書く。</p>
              <p className="mt-2"><strong>メモリ機能</strong>＝ ChatGPTが会話から自動学習する「動的な記憶」。進行中のプロジェクト・最近の出来事・変化する情報が蓄積される。</p>
            </div>
          </Callout>
          <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-600">
                <tr>
                  <th className="px-4 py-3">比較項目</th>
                  <th className="px-4 py-3">Custom Instructions</th>
                  <th className="px-4 py-3">メモリ機能</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { item: "情報の種類", custom: "固定・変わらない基本情報", memory: "変動する・日々更新される情報" },
                  { item: "更新タイミング", custom: "自分が編集したときのみ", memory: "会話のたびに自動蓄積" },
                  { item: "文字制限", custom: "各欄1,500文字", memory: "制限なし（項目数に上限）" },
                  { item: "典型的な用途", custom: "職業・好みの出力形式・ルール", memory: "現在のプロジェクト・最近の課題" },
                  { item: "無料プランでの利用", custom: "利用可", memory: "利用可（容量制限あり）" },
                ].map((row) => (
                  <tr key={row.item} className="hover:bg-gray-50/50">
                    <td className="px-4 py-3 font-semibold text-gray-800">{row.item}</td>
                    <td className="px-4 py-3">{row.custom}</td>
                    <td className="px-4 py-3">{row.memory}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-base leading-8 text-gray-700">
            メモリ機能についてもっと詳しく知りたい方は、
            <Link href="/academy/blog/chatgpt-memory-feature-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTのメモリ機能完全ガイド
            </Link>
            をあわせてご覧ください。
          </p>
        </motion.section>

        {/* うまく使いこなすコツ5つ */}
        <motion.section
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="five-tips">うまく使いこなすコツ5つ</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            Custom Instructionsをただ設定するだけでなく、使い続けるための工夫を押さえておきましょう。
          </p>
          <div className="mt-6 space-y-4">
            {fiveTips.map((tip, i) => (
              <div key={tip.title} className="flex gap-4 rounded-xl border border-gray-200 p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-will-primary/10 text-sm font-bold text-will-primary">
                  {i + 1}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{tip.title}</p>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{tip.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="faq">よくある質問（FAQ）</ArticleH2>
          <RichFAQ items={[...faqItems]} />
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="summary" className="mt-0">まとめ：一度設定すれば毎回の回答が変わる</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            この記事では、ChatGPTのCustom Instructionsについて設定方法から活用法まで網羅的に解説しました。要点をまとめます。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">Custom Instructionsは一度設定するだけで全会話に自動適用される「自分専用の設定」</li>
            <li className="pl-1 marker:text-gray-500">設定は「設定 → パーソナライゼーション → カスタム指示」から3〜5ステップで完了</li>
            <li className="pl-1 marker:text-gray-500">欄1（自分の情報）と欄2（回答の仕方）を使い分けて、基本情報とルールを設定する</li>
            <li className="pl-1 marker:text-gray-500">最初は短い設定から始め、使いながら少しずつ充実させるのがコツ</li>
            <li className="pl-1 marker:text-gray-500">メモリ機能と組み合わせることで、固定情報＋動的情報の両方がパーソナライズされた最強の設定になる</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「毎回同じことを説明する手間」は、一度の設定で完全になくせます。今日からCustom Instructionsを設定して、ChatGPTをより自分専用のアシスタントとして活用しましょう。
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
            title="カスタム指示の活用ヒントを毎週お届けします"
            description="カスタム指示を使いこなすヒントをもっと知りたい方は、AIリブートのLINE公式アカウントへ。毎週実践的な情報をお届けしています。"
            buttonLabel="LINEで無料登録する"
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
            Custom Instructionsをマスターしたら、メモリ機能も組み合わせてさらにパーソナライズを深めましょう。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-memory-feature-guide"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              メモリ機能の完全ガイドを読む
            </Link>
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              プロンプトの書き方も学ぶ
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-memory-feature-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTのメモリ機能とは？設定方法から活用術まで完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜すぐ使える15の型
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-free-plan-comparison-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude・Gemini 無料プラン比較2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること
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
