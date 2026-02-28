import type { Metadata } from "next";
import OllamaLocalLlmGuidePage from "@/components/academyLanding/blog/ollama-local-llm-guide/OllamaLocalLlmGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Ollamaで始めるローカルLLM実務ガイド｜導入手順・モデル選定・安全運用【2026年版】 | AIリブート";
const pageDescription =
  "OllamaでローカルLLMを始める手順を、インストール、モデル選び、公開設定、運用設計まで実務目線で整理。ローカル単独とCloud/API併用の判断軸も解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ollama-local-llm-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T09:00:00+09:00";

const faqItems = [
  {
    question: "Ollamaは無料で使えますか？",
    answer:
      "ローカルでモデルを実行する使い方は基本的に無料で始められます。Cloudモデルや追加サービスを使う場合は、料金ページで最新条件を確認してください（2026年2月20日時点）。",
  },
  {
    question: "ローカルLLMはインターネット未接続でも使えますか？",
    answer:
      "事前にモデルを取得しておけば、ローカル実行自体はオフライン環境でも可能です。ただし、モデル取得・更新や外部連携を使う場合はネットワーク接続が必要になります。",
  },
  {
    question: "モデルサイズはどう選ぶべきですか？",
    answer:
      "まず用途と許容遅延を決め、次に端末スペックへ合わせて小さいサイズから検証するのが安全です。精度不足を感じたら段階的にサイズを上げると、失敗コストを抑えられます。",
  },
  {
    question: "GPUが認識されないときは何を確認すればよいですか？",
    answer:
      "ドライバ、OS対応、実行環境を順に確認します。GPU未検出時はCPU実行にフォールバックして遅くなるため、公式FAQとIssue情報を見て環境差分を切り分けるのが有効です。",
  },
  {
    question: "社内PCでOllamaを使うときの注意点は何ですか？",
    answer:
      "公開設定を誤って外部からアクセス可能にしないこと、入力データの取り扱いルールを先に決めること、更新手順とログ管理の責任者を明確にすることが重要です。",
  },
  {
    question: "ローカル単独運用とCloud/API併用はどう使い分けますか？",
    answer:
      "機密性と低遅延を最優先するならローカル単独、スケールや共有運用を重視するならCloud/API併用が候補です。多くのチームはローカル検証から始め、要件が固まってから併用へ進みます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["Ollama 使い方", "ローカルLLM", "Ollama モデル選び", "Ollama セキュリティ", "ローカルAI運用", "LLM 導入手順"],
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

export default function OllamaLocalLlmGuideRoute() {
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
          { name: "OllamaローカルLLM実務ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <OllamaLocalLlmGuidePage faqItems={[...faqItems]} />
    </>
  );
}
