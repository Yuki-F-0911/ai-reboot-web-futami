import type { Metadata } from "next";
import ChatgptPlanComparisonPage from "@/components/academyLanding/blog/chatgpt-plan-comparison/ChatgptPlanComparisonPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "ChatGPT無料・Plus・Proの違いを比較｜2026年版の料金と選び方 | AIリブート";
const pageDescription =
  "ChatGPTの無料プラン・Plus（月額20ドル）・Pro（月額200ドル）を2026年2月時点で比較。料金、上限、GPT-5.2とGPT-5.3-Codexのアクセス差、用途別のおすすめ、変更・解約方法まで初心者向けに整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-plan-comparison";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T10:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "ChatGPT無料プランは1日どれくらい使えますか？",
    answer:
      "2026年2月20日時点の公式情報では、無料プランはGPT-5.2を5時間あたり10メッセージ使えます。上限到達後はminiモデルへ切り替わるため、実質の利用量は作業内容で変わります。",
  },
  {
    question: "Plusの20ドル課金で、体感はどこが一番変わりますか？",
    answer:
      "最も差が出やすいのは利用上限です。無料プランの5時間10メッセージに対し、Plusは3時間160メッセージの目安が提示されており、日常業務で止まりにくくなります。",
  },
  {
    question: "Proの200ドルは、どんな人なら元が取れますか？",
    answer:
      "高負荷の作業を毎日長時間回す人や、コーディング・調査・資料作成を1アカウントに集約する人は、Proの無制限アクセスとCodex拡張の恩恵が出やすくなります。",
  },
  {
    question: "GPT-5.2とGPT-5.3-Codexは同じものですか？",
    answer:
      "同じではありません。GPT-5.2はChatGPT全般で使う標準系モデル、GPT-5.3-Codexはコーディング用途向けモデルです。GPT-5.3-Codexは有料ChatGPTプラン向け提供です。",
  },
  {
    question: "日本での支払い方法は何がありますか？Apple Payは使えますか？",
    answer:
      "Web契約はOpenAI公式でクレジットカード/デビットカードが案内されています。iOS/Androidは各アプリストア課金です。Apple Pay表示はApple ID設定や地域条件に依存するため、購入画面で確認してください。",
  },
  {
    question: "ChatGPT Plus/Proはどこから解約できますか？",
    answer:
      "Web契約はChatGPTの設定画面から解約できます。iOSはAppleのサブスクリプション管理、AndroidはGoogle Playの定期購入管理から解約します。解約は次回請求日の24時間以上前が推奨です。",
  },
  {
    question: "PlusからProへ切り替える判断タイミングはいつですか？",
    answer:
      "Plus運用中に、GPT-5.2 ThinkingやGPT-5.3-Codexの上限・待機が業務ボトルネックになるならPro検討のタイミングです。毎日長時間のコーディング支援や重い比較分析を回し、停止時間が成果に直結する場合はProの投資回収がしやすくなります。",
  },
  {
    question: "解約やダウングレードは請求日に影響しますか？",
    answer:
      "Web・iOS・Androidいずれも、次回請求日直前だと更新がかかる可能性があるため24時間以上前の手続きが安全です。ダウングレード時も請求サイクルの切り替えタイミングを確認し、利用実績を見てプランを決めると無駄な課金を減らせます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT 無料 有料 違い",
    "ChatGPT Plus Pro 比較 2026",
    "ChatGPT 料金 2026",
    "ChatGPT プラン 選び方",
    "GPT-5.2 GPT-5.3-Codex",
    "ChatGPT 解約 方法",
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

export default function ChatgptPlanComparisonRoute() {
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
          { name: "ChatGPT無料・Plus・Proの違いを比較", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ChatgptPlanComparisonPage faqItems={[...faqItems]} />
    </>
  );
}
