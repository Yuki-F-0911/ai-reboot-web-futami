import type { Metadata } from "next";
import ChatgptMemoryFeatureGuidePage from "@/components/academyLanding/blog/chatgpt-memory-feature-guide/ChatgptMemoryFeatureGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "ChatGPTのメモリ機能とは？設定方法から活用術まで、会話を記憶するAIの使い方完全ガイド | AIリブート";
const pageDescription =
  "ChatGPTのメモリ機能（Memory）の仕組み・設定方法・活用事例を初心者向けに解説。無料・有料別の設定手順、スマホ/PC両対応。何を覚えさせると便利か15の実例、確認・編集・削除方法、Custom Instructionsとの違い、プライバシーの注意点まで網羅。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-memory-feature-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T09:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "ChatGPTのメモリ機能は無料でも使えますか？",
    answer:
      "はい、無料プランでも利用できます。ただし無料プランはメモリに保存できる量に制限があります。Plusプラン以上では容量が拡大され、より多くの情報を記憶させることができます。",
  },
  {
    question: "メモリに追加した情報は全会話で使われますか？",
    answer:
      "はい、メモリに保存された情報はChatGPTの新しいすべてのチャットで自動的に参照されます。ただし「一時的なチャット（Temporary Chat）」モードを使った場合はメモリは使用されません。",
  },
  {
    question: "メモリを削除すると困りますか？",
    answer:
      "メモリを削除してもChatGPTの基本機能には影響ありません。削除した場合は、以前覚えていた情報（職業・好み・名前など）を忘れるだけで、また普通の状態に戻るだけです。必要なら再度覚えさせることができます。",
  },
  {
    question: "メモリ機能とCustom Instructions（カスタム指示）はどう違いますか？",
    answer:
      "Custom Instructionsはユーザーが手動で入力する固定の指示文（常に守ってほしいルール）です。一方、メモリ機能は会話の中からChatGPTが自動的に学習・蓄積する情報です。両方を組み合わせて使うのが理想的です。",
  },
  {
    question: "ChatGPTがメモリを間違った情報で覚えてしまった場合は？",
    answer:
      "設定 → パーソナライゼーション → メモリを管理する（Manage Memory）から、メモリの内容を個別に確認・編集・削除できます。間違った情報は削除して、正しい情報を会話の中で伝え直しましょう。",
  },
  {
    question: "メモリ機能はスマホでも使えますか？",
    answer:
      "はい、iOSおよびAndroidの公式ChatGPTアプリでも利用できます。設定画面からメモリ機能のオン/オフや内容の確認が可能です。PCブラウザと同じアカウントを使えば、メモリも共有されます。",
  },
  {
    question: "会社のパソコンでChatGPTを使う場合、メモリに何を入れるのは危険ですか？",
    answer:
      "会社の機密情報・顧客情報・未公開の製品情報・財務データなどは入力しないことが鉄則です。メモリに保存された情報はOpenAIのサーバーに保存されます。会社のAI利用ガイドラインがある場合は必ずそちらに従ってください。",
  },
  {
    question: "メモリの容量制限はありますか？",
    answer:
      "あります。無料プランは比較的少なく、Plus・Proプランは容量が大きくなります。容量上限に近づくと古いメモリが自動的に削除されることがあります。重要な設定はCustom Instructionsに書いておくのが安全です。",
  },
  {
    question: "一時的なチャット（Temporary Chat）ではメモリは使われますか？",
    answer:
      "使われません。Temporary Chatモードは会話履歴もメモリも使用しない完全にプライベートなモードです。機密性の高い話題を扱う際はこのモードを使うことをおすすめします。",
  },
  {
    question: "ChatGPTのメモリ機能で覚えられないことはありますか？",
    answer:
      "はい。メモリ機能は「長期的に重要な個人情報」を覚えることが得意ですが、非常に細かな情報や一時的な情報は自動的に保存されないことがあります。重要なことは「これを覚えておいて：〇〇」と明示的に伝えるのが確実です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT メモリ機能",
    "ChatGPT 記憶",
    "ChatGPT Memory 設定",
    "ChatGPT 覚えさせる",
    "ChatGPT カスタム指示",
    "ChatGPT 個人化",
    "ChatGPT Memory 使い方",
    "生成AI 記憶 機能",
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

export default function ChatgptMemoryFeatureGuideRoute() {
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
          { name: "ChatGPTのメモリ機能完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ChatgptMemoryFeatureGuidePage faqItems={[...faqItems]} />
    </>
  );
}
