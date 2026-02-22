import type { Metadata } from "next";
import ClaudeBeginnerGuidePage from "@/components/academyLanding/blog/claude-beginner-guide/ClaudeBeginnerGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Claudeの使い方入門｜登録から最初のチャットまで初心者向け解説【2026年版】 | AIリブート";
const pageDescription =
  "Claude入門として、Anthropic製Claudeの基本、ChatGPTとの違い、無料登録から初回チャット手順、無料とPro（月額20ドル）の違い、文書作成・要約・分析での実務活用までを2026年2月時点で整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/claude-beginner-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T19:30:00+09:00";

const faqItems = [
  {
    question: "Claude 3.7はもう使えないのですか？",
    answer:
      "2026年2月時点では、Claude 3.7 Sonnetは最新世代ではありません。最新ラインとしてSonnet 4.6とOpus 4.6が案内されているため、まずは現行モデルを前提に使い始めるのが安全です。",
  },
  {
    question: "Claude無料プランは1日何回まで使えますか？",
    answer:
      "固定の「1日◯回」は公開されておらず、会話の長さ、添付ファイル、アクセス集中状況で上限が変わる運用です。英語ヘルプでは5時間ごとにリセットされるセッション制限が案内されています。",
  },
  {
    question: "Claude Pro（月額20ドル）はどんな人に必要ですか？",
    answer:
      "毎日継続利用し、無料枠で不足を感じる人が検討しやすいです。Proでは利用量増加、モデル選択、優先アクセス、新機能先行などが提供されます。",
  },
  {
    question: "Claudeは日本語でどこまで実用になりますか？",
    answer:
      "日本語UIは対応済みで、会話も日本語で実用可能です。ただしUI翻訳はベータ扱いで、固有名詞や文体調整は最終確認が必要です。外部公開文書は必ず人が仕上げてください。",
  },
  {
    question: "ChatGPTとClaudeはどちらから始めるべきですか？",
    answer:
      "長文読解・要点整理を優先するならClaude、幅広い連携や拡張を重視するならChatGPTが選びやすい傾向です。最初は同じプロンプトで両方試し、業務との相性で決めるのが確実です。",
  },
  {
    question: "Claude Codeとは何が違いますか？",
    answer:
      "本記事は一般ユーザー向けのClaude入門です。Claude Codeは開発者向けのCLIツールで、コード編集やターミナル作業を前提にした別カテゴリの製品です。",
  },
  {
    question: "Claudeはスマホだけでも使い始められますか？",
    answer:
      "はい、スマホブラウザや対応アプリ環境で基本利用は可能です。まずは短い質問で応答傾向をつかみ、長文作業や資料整理が必要になった段階でPC利用を併用すると、操作性と生産性を両立しやすくなります。",
  },
  {
    question: "Claudeの回答品質を上げる最初の一言は何ですか？",
    answer:
      "最初に『あなたは◯◯の担当者として、以下の条件で回答してください』と役割と条件を明示するだけで品質が安定します。さらに出力形式を箇条書きや表で指定すると、実務で再利用しやすい回答になります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Claude 使い方 入門",
    "Claude 3.7 使い方",
    "Anthropic Claude 2026",
    "Claude 登録方法",
    "Claude 日本語",
    "Claude 無料 Pro 違い",
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

export default function ClaudeBeginnerGuideRoute() {
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
          { name: "Claudeの使い方入門", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ClaudeBeginnerGuidePage faqItems={[...faqItems]} />
    </>
  );
}
