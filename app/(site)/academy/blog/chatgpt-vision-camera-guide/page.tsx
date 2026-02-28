import type { Metadata } from "next";
import ChatgptVisionCameraGuidePage from "@/components/academyLanding/blog/chatgpt-vision-camera-guide/ChatgptVisionCameraGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "ChatGPT画像認識（Vision）の使い方完全ガイド｜スマホで写真を撮るだけでAIが解説してくれる | AIリブート";
const pageDescription =
  "ChatGPTは文字だけじゃない。スマホのカメラで撮った写真をそのまま送れば、料理のカロリー計算・英語の看板翻訳・複雑な書類の解読まで何でも分析。2026年最新の画像認識機能を初心者向けに完全解説。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-vision-camera-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T16:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "ChatGPTの画像認識（Vision）機能は無料で使えますか？",
    answer:
      "はい、無料プランでも画像をアップロードして分析させることができます。ただし、無料プランでは1日あたりの利用回数に上限があります。頻繁に使いたい場合はChatGPT Plus（月額20ドル）への移行を検討してください。",
  },
  {
    question: "どんな画像でも送れますか？",
    answer:
      "JPEG・PNG・GIF・WebPなどの一般的な画像形式に対応しています。ただし、個人を特定できる顔写真、他人のプライバシーを侵害する画像、著作権で保護された素材のアップロードは避けましょう。医療画像（X線・MRIなど）は参考程度の情報しか得られず、正式な診断には使えません。",
  },
  {
    question: "スクリーンショットも送れますか？",
    answer:
      "はい、スクリーンショットも画像として送れます。エラーメッセージの解決方法を聞いたり、ウェブサイトのデザインについて意見をもらったりするのに便利です。ただし、個人情報が映り込んでいないか確認してから送りましょう。",
  },
  {
    question: "ChatGPTの画像認識はどのくらい正確ですか？",
    answer:
      "テキストの読み取り（OCR）・物体の識別・シーン理解の精度は高く、日常的な用途では実用に耐えます。ただし、細かい数字の読み取りや似た物体の区別でミスが出ることがあります。重要な情報は目視でも確認する習慣をつけましょう。",
  },
  {
    question: "送った写真はAIの学習に使われますか？",
    answer:
      "デフォルト設定では学習に使われる可能性があります。設定→データコントロール→「モデルのトレーニングに利用」をオフにすることで学習への提供を拒否できます。仕事の書類や個人情報が映った画像を送る前に、必ずこの設定を確認してください。",
  },
  {
    question: "複数の画像を同時に送れますか？",
    answer:
      "はい、1回のメッセージに複数の画像を添付できます。「この2枚の写真を比べて」「これらのレシートを合計して」など、複数画像を使った質問も可能です。",
  },
  {
    question: "Claude・GeminiとChatGPTの画像認識はどう違いますか？",
    answer:
      "ChatGPTはバランスが良く日本語の指示への反応が安定しています。Claudeは複雑な書類の読み取りや詳細な画像描写が得意。GeminiはGoogleレンズと連携しており、画像内の場所や商品の検索に強みがあります。どれも無料で試せるので、用途に合わせて使い分けましょう。",
  },
  {
    question: "ChatGPTのカメラ機能はスマホアプリだけですか？",
    answer:
      "スマホアプリはカメラで直接撮影→即送信ができて便利ですが、パソコン版（ブラウザ）でも画像ファイルを添付して送れます。スマホアプリはiOS・Android両方に対応しています。",
  },
  {
    question: "絵や手書き文字も認識できますか？",
    answer:
      "はい。手書きのメモ・ホワイトボードの内容・絵の説明・グラフの読み取りなども可能です。手書き文字は印刷文字より精度が落ちることがありますが、読み取り依頼を出せば多くの場合読んでくれます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT 画像認識 使い方",
    "ChatGPT カメラ 機能",
    "ChatGPT 写真 送り方",
    "AI 画像 分析",
    "ChatGPT Vision 入門",
    "ChatGPT 画像 スマホ",
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

export default function ChatgptVisionCameraGuideRoute() {
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
          { name: "ChatGPT画像認識（Vision）完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ChatgptVisionCameraGuidePage faqItems={[...faqItems]} />
    </>
  );
}
