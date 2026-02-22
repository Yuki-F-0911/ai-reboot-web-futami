import type { Metadata } from "next";
import ChatgptCanvasGuidePage from "@/components/academyLanding/blog/chatgpt-canvas-guide/ChatgptCanvasGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "ChatGPTのCanvas（キャンバス）とは？文書・コード作成に革命！初心者でも使える新機能完全ガイド2026 | AIリブート";
const pageDescription =
  "ChatGPTのCanvas機能を徹底解説。2024年10月に追加された共同編集機能の使い方・起動方法・3つの主要用途（文書作成・コード・プレゼン）・特に役立つ場面8選・使いこなすコツ5つをステップバイステップで紹介。毎回コピペ不要でAIとリアルタイム編集できるようになります。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-canvas-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T12:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "Canvasはどのプランで使えますか？",
    answer:
      "2026年2月時点では、ChatGPT Plus（月額20ドル）・Team・Pro・Enterpriseプランで利用できます。無料プランでは使えません。ただし、OpenAIは段階的に無料プランへの開放を検討しているとも発表しており、今後変更になる可能性があります。",
  },
  {
    question: "Canvasはスマホでも使えますか？",
    answer:
      "ChatGPT公式アプリ（iOS・Android）でもCanvasは利用できます。ただし、PC（ブラウザ版）のほうが画面が広く、編集操作がしやすいため、本格的な文書・コード作成はPCでの利用を推奨します。",
  },
  {
    question: "通常のチャットとCanvasはどうやって使い分ければいい？",
    answer:
      "短い質問・調べもの・アイデア出しなら通常チャット、文書・コード・資料など「繰り返し編集しながら完成させる成果物」を作るときはCanvasが向いています。Canvasを使うと毎回全文をコピー＆ペーストする手間がなくなり、修正指示だけでAIが即座に反映してくれます。",
  },
  {
    question: "Canvasで作った文書は保存できますか？",
    answer:
      "Canvasで編集した内容は会話履歴として保存されます。ただし、WordやPDFとして直接エクスポートする機能は現時点（2026年2月）では用意されていません。必要に応じてテキストをコピーして別のアプリに貼り付けてください。",
  },
  {
    question: "Canvasでコードを書いてもらうとき、プログラミングの知識は必要ですか？",
    answer:
      "基本的なコードを書いてもらうだけなら知識は不要です。「Pythonで〇〇するコードを書いて」と日本語で指示するだけでCanvasにコードが表示されます。ただし、デバッグや本番環境への適用には多少の知識があると助かります。非エンジニアの方は「Google Apps Scriptでスプレッドシートを自動化する」などの実用的なユースケースから始めるのがおすすめです。",
  },
  {
    question: "Canvasはウェブ上の情報を参照できますか？",
    answer:
      "Canvasはブラウジング機能（ChatGPT Plus以上で利用可能）と組み合わせて使えます。ただし、Canvas内での直接的なリンク挿入や外部リソースの取り込みは現時点では限定的です。まずチャットで情報を収集し、その後Canvasで文書化するフローが効率的です。",
  },
  {
    question: "Canvasで長い文章を一部だけ修正できますか？",
    answer:
      "はい、できます。Canvas内で修正したい箇所をドラッグ選択し、「選択範囲を〇〇にして」と指示するか、Chat欄に「3段落目の〇〇の部分をもう少しフォーマルに」と指定することで、部分的な修正が可能です。全文を書き直すよりもずっと効率的です。",
  },
  {
    question: "Canvasで日本語の文書を作るとき、文体の統一はできますか？",
    answer:
      "できます。最初に「ですます調で統一してください」「専門用語は使わず、中学生にもわかる言葉で」などのスタイル指示をするか、「全体をフォーマルなビジネス文書に統一して」とCanvas全体への指示を出すことで文体の統一が可能です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT Canvas",
    "Canvas 使い方",
    "ChatGPT キャンバス",
    "ChatGPT 文書作成",
    "ChatGPT 共同編集",
    "Canvas 機能",
    "ChatGPT 新機能",
    "AI 文書編集",
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

export default function ChatgptCanvasGuideRoute() {
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
          { name: "ChatGPT Canvas完全ガイド2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ChatgptCanvasGuidePage faqItems={[...faqItems]} />
    </>
  );
}
