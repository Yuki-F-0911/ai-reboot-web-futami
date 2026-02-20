import type { Metadata } from "next";
import OpenaiAtlasGuidePage from "@/components/academyLanding/blog/openai-atlas-guide/OpenaiAtlasGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "OpenAI Atlasとは？AIブラウザの使い方と活用シーン完全解説 | AIリブート";
const pageDescription =
  "OpenAI Atlasの提供状況と実務での使い方を2026年2月時点の公式情報で整理。通常ブラウザとの違い、導入時の注意点、AtlasとChatGPT agentの役割分担、企業導入で先に決める運用ルールと実装順序まで判断できるガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/openai-atlas-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T15:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "OpenAI Atlasとは何ですか？",
    answer:
      "OpenAI Atlasは、Web閲覧とAIエージェント支援を1つの画面で扱えるOpenAI提供のAIブラウザです。ページ要約、質問、フォーム入力補助などをブラウザ操作の流れで実行できます（確認日: 2026年2月20日）。",
  },
  {
    question: "OpenAI Atlasは無料で使えますか？",
    answer:
      "2026年2月時点のOpenAI公式リリースノートでは、AtlasはFreeを含む複数プランで提供対象に含まれています。実際の利用可能機能や上限はアカウント種別・地域・更新状況で変わるため、利用前に最新案内を確認してください。",
  },
  {
    question: "OpenAI Atlasは日本語で使えますか？",
    answer:
      "日本語での入力と利用は可能です。公式リリースノートでも日本語IMEに関する改善が記載されており、実務運用では固有名詞や数値の最終確認を組み合わせることで安定しやすくなります。",
  },
  {
    question: "OpenAI AtlasとChatGPTはどう使い分ければいいですか？",
    answer:
      "Web操作を伴う調査・収集・入力補助はAtlas、企画整理や文章の仕上げはChatGPTという分担が実務で回しやすいです。Atlasで素材を集め、ChatGPTで成果物品質を整える運用が効率的です。",
  },
  {
    question: "AtlasとOperatorの違いは何ですか？",
    answer:
      "OperatorはもともとOpenAIの自律操作エージェント研究プレビューとして公開され、その後ChatGPTのagent機能へ統合が進んでいます。Atlasはブラウザ体験そのものをAI化する方向で、日常のWeb業務に組み込みやすい点が違いです（確認日: 2026年2月20日）。",
  },
  {
    question: "法人導入で先に決めるべき運用ルールは何ですか？",
    answer:
      "最低限、入力データの範囲、承認が必要な操作、ログ保存方針、権限分離を先に定義してください。ブラウザ自動化は便利ですが、最終判断を人が担う工程を明確化することが安全運用の前提です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "OpenAI Atlas とは",
    "AI ブラウザ 使い方",
    "OpenAI Atlas 日本語",
    "AI エージェント ブラウザ",
    "Atlas vs Operator",
    "OpenAI新機能",
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

export default function OpenaiAtlasGuideRoute() {
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
          { name: "OpenAI Atlasとは？AIブラウザの使い方と活用シーン完全解説", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <OpenaiAtlasGuidePage faqItems={[...faqItems]} />
    </>
  );
}
