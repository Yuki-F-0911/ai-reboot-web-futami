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

const keywordTags = ["Claude Artifacts", "Artifacts 使い方", "コードなし HTML作成", "Claude 使い方", "AI ツール作成"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-artifacts", label: "Claude Artifactsとは何か" },
  { id: "what-you-can-make", label: "Artifactsで実際に作れるもの6選" },
  { id: "free-plan", label: "無料プランでも使えるのか" },
  { id: "vs-canvas", label: "ChatGPT Canvasとの違い" },
  { id: "prompt-examples", label: "今すぐ試せるプロンプト例12選" },
  { id: "tips", label: "Artifactsを使いこなす5つのコツ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "conclusion", label: "まとめ" },
] as const;

const summaryItems = [
  "Claude ArtifactsはAnthropicのAI「Claude」が生成したコード・HTMLページ・ツールをその場でプレビュー表示できる機能。プログラミング知識なしで動くウェブページや計算ツールが作れる",
  "作れるものは多岐にわたる：計算ツール、カウントダウンタイマー、ゲーム、HTML名刺、プレゼンスライドの骨格、Reactコンポーネントなど",
  "無料プラン（Claude.ai無料版）でもArtifactsは利用可能。毎日の利用制限はあるが、まず試すには十分",
  "ChatGPT Canvasが「文書・コードを一緒に編集する」機能なのに対し、Artifactsは「生成結果をその場で動かして確認できる」プレビュー機能が最大の違い",
  "コツは「何を作りたいか」を具体的に伝えること。「計算ツールを作って」より「身長・体重を入力するとBMIが計算されて評価コメントも出るツールをHTMLで作って」のほうが精度が上がる",
] as const;

const whatYouCanMake = [
  {
    title: "①計算ツール・シミュレーター",
    icon: "🧮",
    description:
      "BMI計算機、ローン返済シミュレーター、カロリー計算ツール、年齢計算機、単位換算ツールなど、数値を入力して結果を計算するあらゆるツールをHTMLで作れます。「入力フォームに数値を入れると計算結果が出る」という仕組みは、Artifactsが最も得意とする分野です。完成したコードをファイルとして保存し、サーバーなしでローカル環境でも使えます。",
    examples: ["BMI計算＋評価コメント付きツール", "月々のローン返済額シミュレーター", "目標達成日まで何日か計算するカウントダウンタイマー"],
  },
  {
    title: "②ミニゲーム・インタラクティブコンテンツ",
    icon: "🎮",
    description:
      "テキスト系のクイズゲーム、数字当てゲーム、タイピングゲームの骨格、カードめくりゲームなど、シンプルなブラウザゲームを作れます。「JavaScriptを使ったゲームを作って」と頼むと、Artifacts内でそのままプレイできる状態で生成されます。子供向けの算数ドリルや、社内研修用のクイズアプリとしても活用できます。",
    examples: ["都道府県クイズゲーム", "数字当てゲーム（1〜100で答えを探す）", "英単語フラッシュカード"],
  },
  {
    title: "③HTML名刺・プロフィールページ",
    icon: "📛",
    description:
      "自分の名前・職業・SNSリンクを含むシンプルなHTMLページを作れます。「名前：田中太郎、職業：フリーランスデザイナー、Twitterリンク付きのHTML名刺を作って」と伝えると、そのままブラウザで開けるHTMLファイルが生成されます。印刷用名刺のデザインではなく、URLを送れるデジタル名刺として活用できます。",
    examples: ["名前・職業・連絡先入りのデジタル名刺", "ポートフォリオの一枚ページ", "イベント案内用のシンプルなランディングページ"],
  },
  {
    title: "④プレゼン・スライド骨格",
    icon: "📊",
    description:
      "HTML/CSS製のプレゼンテーションを作れます。PowerPointとは異なり、ブラウザで表示するReveal.js風のスライドや、各スライドのテキスト内容をまとめた構造化文書として出力することが得意です。「3分間のプレゼン用に5枚スライドをHTMLで作って。テーマは新入社員研修」と依頼すると、デザイン付きのスライドが生成されます。",
    examples: ["社内向けツール紹介スライド（5枚）", "自己紹介プレゼンのHTML版", "商品説明スライドの骨格"],
  },
  {
    title: "⑤データ可視化・チャート",
    icon: "📈",
    description:
      "棒グラフ、折れ線グラフ、円グラフなど、数値データをビジュアル化するHTMLを作れます。「以下の売上データを棒グラフで可視化するHTMLを作って」とデータを貼り付けると、Chart.js等を使ったインタラクティブなグラフが生成されます。Excelのグラフより見た目がきれいで、ウェブに埋め込みやすいという利点があります。",
    examples: ["月次売上推移の棒グラフ", "アンケート結果の円グラフ", "複数商品の比較折れ線グラフ"],
  },
  {
    title: "⑥メモ・ToDoアプリのプロトタイプ",
    icon: "📝",
    description:
      "シンプルなToDoリスト、メモ帳アプリ、タスク管理ツールのプロトタイプを作れます。「チェックボックス付きのToDoリストをHTML/JavaScriptで作って。追加・削除・完了チェックができるもの」と依頼すると、実際に動くアプリが生成されます。アイデア段階のプロトタイプを即座に確認できるため、アプリ開発の初期検討に役立ちます。",
    examples: ["チェックボックス付きToDoリスト", "タグ付き日記アプリのプロトタイプ", "買い物リスト（カテゴリ分け付き）"],
  },
] as const;

const promptExamples = [
  {
    category: "計算ツール系",
    prompts: [
      "身長（cm）と体重（kg）を入力するとBMIを計算し、「低体重／普通体重／肥満（1度）」などの評価コメントも表示するHTMLツールを作ってください",
      "借入額・金利・返済期間を入力すると月々の返済額と総返済額が計算できる住宅ローンシミュレーターをHTMLで作ってください。デザインはシンプルに",
      "目標日（年月日）を入力すると今日から何日後かが表示されるカウントダウンタイマーHTMLを作ってください",
    ],
  },
  {
    category: "ゲーム・クイズ系",
    prompts: [
      "1から100の中からコンピューターが選んだ数字を当てるゲームをHTMLで作ってください。「大きい」「小さい」のヒントが出るもの",
      "日本の都道府県名を答える4択クイズゲームをHTMLで作ってください。10問出題して最後に点数が出るもの",
      "アルファベットA〜Zのタイピング練習ゲームをHTMLで作ってください。制限時間30秒で何文字打てるか測定できるもの",
    ],
  },
  {
    category: "名刺・プロフィール系",
    prompts: [
      "名前：山田花子、職業：フリーランスライター、メール：example@email.com、TwitterリンクをイメージしたシンプルなHTMLデジタル名刺を作ってください。白ベースのクリーンなデザインで",
      "私のポートフォリオ紹介ページをHTMLで作ってください。スキル：Webデザイン・Illustrator・写真撮影。最近の仕事：ECサイトのバナー制作、ブログデザイン。文字は読みやすいシンプルなデザイン",
    ],
  },
  {
    category: "プレゼン・スライド系",
    prompts: [
      "「AIを仕事で活用する3つのメリット」というテーマで、5枚のスライドをHTMLで作ってください。各スライドに見出しと箇条書き3点。濃紺×白のビジネス向けデザイン",
      "新入社員向けのビジネスメール作法研修スライドを6枚のHTMLで作ってください。件名の書き方・本文構成・締めの言葉を含む内容で",
    ],
  },
] as const;

const fiveTips = [
  {
    tip: "コツ1：「何のため」「誰が使うか」「どんな見た目か」を3点セットで伝える",
    detail:
      "「計算ツールを作って」だけでは曖昧です。「40代の一般ユーザーが使うBMI計算ツール。入力は身長・体重の2項目、結果には数値と評価コメントを表示。白ベースのシンプルデザイン」のように、目的・ユーザー・見た目の3点を伝えるとイメージ通りのものが生成されやすくなります。",
  },
  {
    tip: "コツ2：「HTMLで作って」と明示してArtifactsプレビューを引き出す",
    detail:
      "Claudeに「〇〇ツールを作って」と頼むだけではコードをテキストで返すこともあります。「HTMLとJavaScriptで作って。ブラウザで動くもの」と明示することで、Artifacts機能が発動してプレビューが表示される確率が上がります。「プレビューで確認できるようにして」と付け加えるのも有効です。",
  },
  {
    tip: "コツ3：「修正して」より「〇〇が〇〇なので、〇〇に変えて」と具体的に",
    detail:
      "生成されたものが気に入らない場合、「もっとよくして」という指示より「ボタンの色が背景と馴染みすぎているので、オレンジ色にして視認性を上げて」「フォントサイズが小さくて読みにくいので、本文を16pxに」のように、「問題点＋変更内容」を具体的に伝えると修正精度が上がります。",
  },
  {
    tip: "コツ4：完成品はHTMLファイルとして保存して再利用する",
    detail:
      "Artifactsで生成したコードは会話が終わると再アクセスしにくくなります。気に入ったツールができたら、コードをコピーして「index.html」という名前でPC上に保存しておきましょう。ブラウザでそのファイルを開けば、インターネット接続なしでいつでも使えます。よく使うツールはフォルダにまとめておくと便利です。",
  },
  {
    tip: "コツ5：「スタイルはTailwind CSS（または Bootstrap）で」と指定するときれいになりやすい",
    detail:
      "デフォルト状態では素朴なデザインになりがちです。「スタイルはTailwind CDNで整えて、モダンでクリーンなデザインに」「Bootstrap 5 CDNを使ってレスポンシブにして」と指定すると、見た目が格段によくなります。CDNは外部から読み込むだけなので、ファイルを追加する必要はありません。",
  },
] as const;

export default function ClaudeArtifactsGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Claude Artifacts完全ガイド" },
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
                className="rounded-full border border-will-primary/20/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="Claude Artifactsとは？コードなしでHTMLページ・ツール・スライドを作る方法【初心者向け】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Claude Artifactsとは？コードなしでHTMLページ・ツール・スライドを作る方法【初心者向け】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIにHTMLページを作ってもらいたいけど、コードのことはまったくわからない」——そんな方に届けたい機能が
            <strong>Claude Artifacts（アーティファクツ）</strong>です。
            AnthropicのAI「Claude」に搭載されたこの機能を使えば、プログラミングの知識ゼロでも、動く計算ツール・ゲーム・HTML名刺・スライドを
            数分で作れてしまいます。しかも、生成したものがその場でプレビュー表示されるため、「何ができたか」を目で確認しながら調整できます。
            この記事では、Artifactsの仕組みから実際に作れるもの・プロンプト例・コツまで、初心者の方でもすぐ使えるよう丁寧に解説します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-canvas-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT Canvas完全ガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            プロンプトの書き方入門
          </Link>
          ・
          <Link href="/academy/blog/ai-overview-map-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI全体マップ2026
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT上級活用テクニック
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

        {/* Artifactsとは何か */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="what-is-artifacts">Claude Artifactsとは何か</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Claude Artifactsは、Anthropicが提供するAI「Claude」（クロード）に搭載された<strong>コンテンツプレビュー機能</strong>です。
            Claudeがコード・HTMLページ・マークダウン文書などを生成したとき、チャット画面の横に独立したプレビューウィンドウが自動で開き、
            生成物を「実際に動く状態」で確認できます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            たとえば「BMI計算ツールをHTMLで作って」と頼むと、チャット画面の右側にフォーム付きの計算ツールが表示され、
            その場で実際に数値を入力して動作確認ができます。コードの中身を読む必要はありません。
            気に入らなければ「ボタンの色をオレンジにして」「フォントを大きくして」と追加指示を出すと、プレビューがリアルタイムで更新されます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            Artifactsが対応しているコンテンツの種類は以下の通りです。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-gray-700">
            <li className="pl-1 marker:text-gray-400"><strong>HTML/CSS/JavaScript</strong>：動くウェブページ、計算ツール、ゲームなど</li>
            <li className="pl-1 marker:text-gray-400"><strong>React（JSX）</strong>：インタラクティブなUIコンポーネント</li>
            <li className="pl-1 marker:text-gray-400"><strong>SVG</strong>：ベクターグラフィック・アイコン</li>
            <li className="pl-1 marker:text-gray-400"><strong>Markdown</strong>：構造化されたドキュメント・メモ</li>
            <li className="pl-1 marker:text-gray-400"><strong>Mermaid</strong>：フローチャート・組織図・ガントチャート</li>
          </ul>

          <Callout type="info" title="ArtifactsはClaude.aiのウェブ版・アプリで利用可能">
            Artifacts機能はClaude.ai（ウェブブラウザ版）とモバイルアプリで利用できます。
            APIを通じた直接アクセスでは、別途設定が必要です。2026年2月時点では、
            Claude.aiの無料プランでも一定の範囲で利用できます。
          </Callout>
        </motion.section>

        {/* 作れるもの6選 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="what-you-can-make">Artifactsで実際に作れるもの6選</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「プログラミングを一切知らない自分でも本当に作れるの？」——その答えは<strong>YES</strong>です。
            実際にどんなものが作れるのか、6つのカテゴリで紹介します。
          </p>
          <div className="mt-8 space-y-8">
            {whatYouCanMake.map((item) => (
              <section key={item.title} className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-8 text-gray-700">{item.description}</p>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">作れる例</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                    {item.examples.map((ex) => (
                      <li key={ex} className="pl-1 marker:text-gray-400">{ex}</li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 無料プランについて */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="free-plan">無料プランでも使えるのか</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「Artifactsって有料プランじゃないと使えないの？」——これはよく聞かれる質問です。
            結論から言えば、<strong>無料プランでもArtifactsは使えます</strong>（2026年2月時点）。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ただし、無料プランにはいくつかの制限があります。
          </p>

          <RichTable>
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-900">比較項目</th>
                <th className="px-4 py-3 font-semibold text-gray-900">無料プラン</th>
                <th className="px-4 py-3 font-semibold text-gray-900 bg-will-lighter/30">有料プラン（Pro）</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">Artifacts機能</td>
                <td className="px-4 py-3 text-gray-600">利用可能</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">利用可能</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">1日の利用上限</td>
                <td className="px-4 py-3 text-gray-600">あり（上限に達するとリセットまで待機）</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">無料より大幅に多い</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">使えるモデル</td>
                <td className="px-4 py-3 text-gray-600">Claude Sonnet 4.6 など（混雑時は制限あり）</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">最新モデルを優先利用</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">長文・複雑なArtifacts</td>
                <td className="px-4 py-3 text-gray-600">短め・シンプルな内容なら問題なし</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">複雑な処理も安定</td>
              </tr>
            </tbody>
          </RichTable>

          <p className="mt-5 text-base leading-8 text-gray-700">
            無料プランで1日数回の試し作りをするなら十分です。本格的に毎日使い込むなら、
            Claudeの有料プラン（Pro）への移行を検討してもよいでしょう。
            まずは無料プランで「どんなものが作れるか」を体験してみてください。
          </p>

          <Callout type="tip" title="無料プランで試すなら朝一がおすすめ">
            Claudeの無料プランは使用回数に上限があり、夕方〜夜は混雑することがあります。
            初めて使う場合は午前中や昼前に試すとスムーズです。
            上限に達した場合は「〇時間後にリセット」と表示されるので、待ってから再試行できます。
          </Callout>
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
          <MidArticleCtaBox slug="claude-artifacts-guide" />
        </motion.section>

        {/* ChatGPT Canvasとの違い */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="vs-canvas">ChatGPT Canvasとの違い</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「ClaudeのArtifactsとChatGPTのCanvasって何が違うの？」——どちらもAIが生成したコンテンツをプレビューできる機能ですが、
            設計思想が少し異なります。
          </p>

          <RichTable>
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-900">比較項目</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Claude Artifacts</th>
                <th className="px-4 py-3 font-semibold text-gray-900">ChatGPT Canvas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">主な強み</td>
                <td className="px-4 py-3 text-gray-600">HTMLアプリ・ゲーム・ツールを生成して<strong>即プレビュー・即動作確認</strong></td>
                <td className="px-4 py-3 text-gray-600">文書・コードを<strong>インライン編集</strong>しながら作り込む共同編集</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">対象コンテンツ</td>
                <td className="px-4 py-3 text-gray-600">HTML/JS/React/SVG/Mermaid/Markdown</td>
                <td className="px-4 py-3 text-gray-600">文書（テキスト）・コード</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">プレビュー機能</td>
                <td className="px-4 py-3 text-gray-600">あり（動くアプリとして確認できる）</td>
                <td className="px-4 py-3 text-gray-600">テキスト・コードの表示。コードの実行プレビューは限定的</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">部分選択編集</td>
                <td className="px-4 py-3 text-gray-600">なし（チャットで修正指示を出す）</td>
                <td className="px-4 py-3 text-gray-600">あり（テキストを選択して直接編集指示）</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">向いている用途</td>
                <td className="px-4 py-3 text-gray-600">「動くもの」を作る・プロトタイピング</td>
                <td className="px-4 py-3 text-gray-600">文書・レポートを繰り返し磨く</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">無料プランでの利用</td>
                <td className="px-4 py-3 text-gray-600">利用可能（回数制限あり）</td>
                <td className="px-4 py-3 text-gray-600">Plus以上が必要（2026年2月時点）</td>
              </tr>
            </tbody>
          </RichTable>

          <p className="mt-5 text-base leading-8 text-gray-700">
            一言でまとめると、<strong>「動くHTMLツールやアプリを作ってすぐ確認したい」ならArtifacts、
            「文書を何度も修正しながら完成させたい」ならCanvas</strong>が向いています。
            両方のAIを目的に応じて使い分けると、作業効率が大きく上がります。
          </p>

          <Callout type="info" title="どちらを先に試すべき？">
            プログラミング知識なしで「動くツール」「ゲーム」「HTML名刺」などを作りたいなら、
            Claude ArtifactsのほうがChatGPT Canvasより入門しやすいです。
            まず何か1つ作ってみることで「AIってここまでできるんだ」という感覚がつかめます。
          </Callout>
        </motion.section>

        {/* プロンプト例12選 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="prompt-examples">今すぐ試せるプロンプト例12選</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            以下のプロンプトをClaude.aiにそのままコピーして入力してみてください。
            Artifacts機能が自動的に起動してプレビューが表示されます。
          </p>
          <div className="mt-8 space-y-8">
            {promptExamples.map((group) => (
              <div key={group.category}>
                <ArticleH3>{group.category}</ArticleH3>
                <div className="mt-4 space-y-4">
                  {group.prompts.map((prompt, i) => (
                    <div key={i} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">プロンプト例 {i + 1}</p>
                      <p className="text-sm leading-7 text-gray-800 font-medium">{prompt}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Callout type="tip" title="プロンプトを自分向けにカスタマイズする">
            上のプロンプト例は、自分の名前・数値・テーマに置き換えて使ってください。
            「山田花子」→自分の名前、「BMI」→自分が計算したい内容、に変えるだけで、
            オリジナルのツールが完成します。完全に一から考えなくて大丈夫です。
          </Callout>
        </motion.section>

        {/* 5つのコツ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="tips">Artifactsを使いこなす5つのコツ</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Artifactsを初めて使うとき、うまく動くものが作れずに諦めてしまう人が多いです。
            以下のコツを押さえるだけで、成功率が大幅に上がります。
          </p>
          <div className="mt-8 space-y-6">
            {fiveTips.map((item, index) => (
              <div key={item.tip} className="rounded-xl border border-will-primary/20 bg-gray-50 p-6">
                <div className="flex items-start gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.tip}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          <ArticleH2 id="conclusion">まとめ：「作れない」の思い込みを捨てて、今日から作ってみよう</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Claude Artifactsは、「プログラミングは自分には無理」と思っていた方の常識を覆す機能です。この記事のポイントを振り返りましょう。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              Artifactsは生成したHTMLやコードをその場でプレビュー・動作確認できる機能。コードの知識は不要
            </li>
            <li className="pl-1 marker:text-gray-500">
              計算ツール・ゲーム・HTML名刺・スライド・データ可視化など幅広いものが作れる
            </li>
            <li className="pl-1 marker:text-gray-500">
              無料プランでも利用可能（回数制限あり）。まず試すには十分
            </li>
            <li className="pl-1 marker:text-gray-500">
              ChatGPT Canvasとの違いは「動くものを即プレビュー」できる点。用途に応じて使い分けよう
            </li>
            <li className="pl-1 marker:text-gray-500">
              コツは「何のため・誰が使う・どんな見た目か」を3点セットで伝えること
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            まずは「BMI計算ツールをHTMLで作って」と一言打つところから始めてみてください。
            数秒で動くツールが画面に現れるその瞬間に、AIの可能性を肌で感じることができます。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            Claude・ChatGPT最新情報やプロンプトテクニックを毎週お届けしています。AIリブートのLINE公式アカウントをぜひ登録してください。
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
            title="Claude・ChatGPT最新情報を毎週配信中"
            description="Artifacts・Canvas・最新AIツールの使い方を毎週お届けしています。AIリブートのLINE公式アカウントをぜひ登録してください。プログラミング知識なしで使えるAI活用術を無料でお届けします。"
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
            Artifactsを使いこなしたら、プロンプトの書き方を学ぶとさらに精度が上がります。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              プロンプトの書き方を学ぶ
            </Link>
            <Link
              href="/academy/blog/chatgpt-canvas-guide"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              ChatGPT Canvas完全ガイド
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-canvas-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTのCanvas（キャンバス）とは？文書・コード作成に革命！初心者でも使える新機能完全ガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-overview-map-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                2026年春のAI全体マップ｜初心者がまず知っておくべきツール・できること・始め方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT上級活用テクニック｜使いこなしの差がつく15の方法
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-writing-tool" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIライティングツール比較2026｜目的別おすすめ10選
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
