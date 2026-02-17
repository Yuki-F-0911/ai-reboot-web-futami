import type { Metadata } from "next";
import PromptTemplateForWorkPage from "@/components/academyLanding/blog/prompt-template-for-work/PromptTemplateForWorkPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成をAIで効率化 | AIリブート";
const pageDescription =
  "「プロンプト テンプレート 仕事」を軸に、メール作成・議事録・資料作成・データ分析・アイデア出しで使える実務テンプレート20選を紹介。Before/After付きで、すぐ現場で使える形に整理しています。";
const pageUrl = "https://ai-reboot.io/academy/blog/prompt-template-for-work";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-16T09:00:00+09:00";
const modifiedTime = "2026-02-16T09:00:00+09:00";
const howToSteps = [
  {
    name: "業務カテゴリを選ぶ",
    text: "メール・議事録・資料作成・データ分析・アイデア出しの中から、頻度が高い業務を1つ選びます。",
  },
  {
    name: "テンプレートをコピーする",
    text: "該当テンプレートをそのままコピーし、{変数}を自分の案件情報に置き換えます。",
  },
  {
    name: "出力を確認して修正点を追加する",
    text: "1回目の出力を確認し、不足している条件や文字数制約を追記して再実行します。",
  },
  {
    name: "Before/Afterで効果を比較する",
    text: "従来の依頼文とテンプレート利用後の出力を比較し、品質と作業時間の差を確認します。",
  },
  {
    name: "社内テンプレートとして保存する",
    text: "完成した文面を共有フォルダに保存し、チームで再利用できる状態にします。",
  },
] as const;

const faqItems = [
  {
    question: "どのAIツールでも使えますか？",
    answer:
      "はい。Role・Task・Context・Formatの4要素で書かれたプロンプトは、ChatGPTやClaudeなど多くの対話型AIで流用できます。ツールごとの差は、出力形式の指定を微調整すれば対応可能です。",
  },
  {
    question: "英語と日本語はどちらで書くべきですか？",
    answer:
      "普段の業務文書が日本語なら、日本語で具体的に指示するのが実務的です。英語情報の要約や海外向け文面が必要な場合のみ、英語指示を使うと効率的です。",
  },
  {
    question: "プロンプトを覚える必要はありますか？",
    answer:
      "暗記は不要です。よく使う業務テンプレートを保存し、目的に応じて「役割・条件・出力形式」だけ調整する運用が再現性と速度の両方を高めます。",
  },
  {
    question: "社内データをAIに入力しても大丈夫ですか？",
    answer:
      "社内規定と利用中ツールのデータ取り扱いポリシーを必ず確認してください。個人情報、顧客情報、未公開情報は匿名化・要約化したうえで扱うことが安全です。",
  },
  {
    question: "期待どおりの出力が出ない場合はどうすればいいですか？",
    answer:
      "曖昧な指示を減らし、出力形式を固定してから再実行するのが基本です。さらに良い回答例を1つ添えると、出力のぶれを抑えやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "プロンプト テンプレート 仕事",
    "プロンプト 書き方 コツ",
    "ChatGPT 仕事 活用",
    "AI メール作成",
    "AI 議事録 作成",
    "業務効率化 プロンプト",
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

export default function PromptTemplateForWorkRoute() {
  const howToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "仕事で使えるプロンプトテンプレートの実務導入手順",
    description:
      "業務カテゴリ別テンプレートをコピーし、Before/Afterで改善しながら、社内で再利用可能なプロンプトへ育てる手順。",
    totalTime: "PT30M",
    step: howToSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: pageUrl,
    })),
  };

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
          { name: "仕事用プロンプト", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <script
        id="prompt-template-for-work-howto-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToStructuredData),
        }}
      />
      <PromptTemplateForWorkPage faqItems={[...faqItems]} />
    </>
  );
}
