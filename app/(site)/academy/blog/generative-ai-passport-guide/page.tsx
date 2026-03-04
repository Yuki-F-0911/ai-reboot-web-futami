import type { Metadata } from "next";
import GenerativeAiPassportGuidePage from "@/components/academyLanding/blog/generative-ai-passport-guide/GenerativeAiPassportGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "生成AIパスポート 合格率・難易度・勉強時間を完全解説【2026年最新】独学で合格する40時間スケジュール | AIリブート";
const pageDescription =
  "生成AIパスポートの合格率は約80%・難易度は入門レベル。普段AIを使う人は20時間、これから学ぶ人は40時間が目安。2026年版の独学スケジュール・おすすめ教材・頻出テーマ・合格後の活かし方を1ページで完全解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/generative-ai-passport-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-03-04T09:00:00+09:00";

const faqItems = [
  {
    question: "生成AIパスポートの難易度は高いですか？",
    answer:
      "入門〜初中級レベルの位置づけで、AIの仕組み・リスク・活用リテラシーを広く問う試験です。実装問題中心ではないため、非エンジニアでも計画的に学べば十分合格を狙えます。",
  },
  {
    question: "合格までに必要な勉強時間はどれくらいですか？",
    answer:
      "目安は、普段からAIを使う人で20時間、断続的に使う人で30時間、これから本格的に学ぶ人で40時間です。週5〜7時間を確保すると1〜6週間で到達できます。",
  },
  {
    question: "独学でも合格できますか？",
    answer:
      "はい。シラバス確認→基礎理解→問題演習→弱点補強の順で進めれば独学でも十分可能です。学習ログを残し、正答率が低い分野を絞って復習するのがポイントです。",
  },
  {
    question: "参考書は何冊必要ですか？",
    answer:
      "最初は1冊で十分です。1冊を3周して知識を定着させ、必要に応じて弱点テーマだけ補助教材を追加する方が、複数冊を浅く読むより得点に直結しやすくなります。",
  },
  {
    question: "出題で特に注意すべきテーマは何ですか？",
    answer:
      "プロンプト設計、著作権・商用利用、情報漏えい対策やガイドラインなどのリスク管理は頻出です。用語暗記だけでなく、ケースを読んで適切な判断を選ぶ練習が有効です。",
  },
  {
    question: "合格後は転職や副業にどう活かせますか？",
    answer:
      "資格だけで差別化するのではなく、業務での活用実績とセットで示すことが重要です。提案資料改善、業務時間短縮、社内AI活用推進など具体成果に変換すると評価されやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AIパスポート 合格",
    "生成AIパスポート 難易度",
    "生成AIパスポート 勉強法",
    "生成AIパスポート 独学",
    "生成AIパスポート 参考書",
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

export default function GenerativeAiPassportGuideRoute() {
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
          { name: "生成AIパスポート試験の合格法2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <GenerativeAiPassportGuidePage faqItems={[...faqItems]} />
    </>
  );
}
