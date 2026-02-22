import type { Metadata } from "next";
import ClaudeArtifactsGuidePage from "@/components/academyLanding/blog/claude-artifacts-guide/ClaudeArtifactsGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "Claude Artifactsとは？コードなしでHTMLページ・ツール・スライドを作る方法【初心者向け】 | AIリブート";
const pageDescription =
  "ClaudeのArtifacts機能を徹底解説。プログラミング知識ゼロで計算ツール・ゲーム・HTML名刺・プレゼンスライドが作れる仕組みと使い方。無料プランでの利用可否・ChatGPT Canvasとの違い・今すぐ試せるプロンプト12選・使いこなす5つのコツを初心者向けに丁寧に解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/claude-artifacts-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T12:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "Claude Artifactsは無料プランでも使えますか？",
    answer:
      "2026年2月時点では、Claude.aiの無料プランでもArtifacts機能は利用できます。ただし、1日の利用回数に上限があり、上限に達すると翌日まで利用できなくなります。まず無料プランで試してみて、毎日活用したい場合は有料プラン（Pro）への移行を検討してみてください。",
  },
  {
    question: "Artifactsで作ったHTMLファイルはどうやって保存しますか？",
    answer:
      "Artifacts画面のコピーボタンでHTMLコードをコピーし、テキストエディタ（メモ帳、VSCode等）に貼り付けて「index.html」という名前で保存してください。保存したファイルをブラウザ（Chrome、Safari等）で開くと、インターネット不要でツールを使えます。よく使うツールはデスクトップに保存しておくと便利です。",
  },
  {
    question: "プログラミングの知識がゼロでも本当に作れますか？",
    answer:
      "はい、作れます。「BMI計算ツールをHTMLで作って」のような日本語の指示だけでコードが生成されます。生成されたコードを読む・理解する必要はありません。プレビューで動作を確認して「ここを変えて」と言えばOKです。ただし、複雑な機能になるほどAIの出力精度が下がることもあるため、まずはシンプルなものから始めることをおすすめします。",
  },
  {
    question: "ArtifactsはChatGPTのCanvasと同じ機能ですか？",
    answer:
      "似ていますが目的が異なります。Claude Artifactsは生成したHTMLやコードをその場で「動かして確認できる」プレビュー機能が特徴です。ChatGPT Canvasは文書やコードを「インライン編集しながら作り込む」共同編集機能が特徴です。動くツール・ゲーム・HTMLページを作りたいならArtifacts、文書を繰り返し修正して仕上げたいならCanvasが向いています。",
  },
  {
    question: "Artifactsで作ったツールをウェブサイトに公開できますか？",
    answer:
      "Artifactsで生成されたHTMLファイル自体を他人に共有することはできますが、URLで公開するにはウェブサーバーへのアップロードが必要です。GitHub PagesやNetlifyを使えば無料でHTMLを公開できます。ただし、この作業にはある程度の技術知識が必要です。まずはローカル（自分のPC）で使うことから始めることをおすすめします。",
  },
  {
    question: "Artifactsで日本語のコンテンツを作れますか？",
    answer:
      "はい、日本語で指示・出力ともに対応しています。「日本語で〇〇を作って」と伝えると、ボタンのラベルやメッセージも日本語になります。ただし、AIが自動で生成するデフォルトのUIは英語表記になることがあるため、「すべて日本語で表示して」と指定しておくと安全です。",
  },
  {
    question: "Artifactsが表示されない・プレビューが出ない場合はどうすればいいですか？",
    answer:
      "Artifactsは自動で起動することもありますが、「HTMLで作って」「ブラウザで動くものを作って」と明示するとプレビューが表示される確率が上がります。それでも表示されない場合は、「Artifactsとしてプレビューを表示してください」と明示的に指示してみてください。また、ブラウザのキャッシュをクリアするか、別ブラウザで試してみることも有効です。",
  },
  {
    question: "ClaudeとChatGPTのどちらが旅行計画やライフスタイル活用に向いていますか？",
    answer:
      "「動くツールを作る」ならClaudeのArtifacts、「文書を対話形式で磨く」ならChatGPTのCanvas、という使い分けが基本です。どちらも無料プランで試せるため、まず両方使ってみて自分に合う方を選ぶのが一番です。旅行計画やライフスタイル関連の質問はどちらも同程度に得意です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Claude Artifacts",
    "Artifacts 使い方",
    "Claude HTML作成",
    "コードなし ツール作成",
    "Claude 初心者",
    "Artifacts 無料",
    "Claude Canvas 違い",
    "AI ウェブページ 作成",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: pageOgImageUrl,
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageOgImageUrl],
  },
};

export default function ClaudeArtifactsGuideRoute() {
  return (
    <>
      <ArticleStructuredData
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
        imageUrl={pageOgImageUrl}
        articleType="BlogPosting"
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://ai-reboot.io" },
          { name: "アカデミー", url: "https://ai-reboot.io/academy" },
          { name: "ブログ", url: "https://ai-reboot.io/academy/blog" },
          { name: "Claude Artifacts完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ClaudeArtifactsGuidePage faqItems={[...faqItems]} />
    </>
  );
}
