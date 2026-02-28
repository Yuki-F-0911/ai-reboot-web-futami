import type { Metadata } from "next";
import AiDocumentOcrGuidePage from "@/components/academyLanding/blog/ai-document-ocr-guide/AiDocumentOcrGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI OCRで書類処理を自動化する方法｜請求書・契約書の読取と会計連携【2026】 | AIリブート";
const pageDescription =
  "AI OCRを使った請求書・領収書・契約書の自動読み取りから、freee・マネーフォワード連携、電子帳簿保存法対応、ROI計算までを法人バックオフィス向けに整理。AIRead・DX Suite・Microsoft Document Intelligence・Google Document AIの比較も解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-document-ocr-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T15:30:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "AI OCRと従来OCRの違いは何ですか？",
    answer:
      "従来OCRは主に文字認識に特化しますが、AI OCRは書類分類、項目抽出、信頼度評価、後続システム連携まで含めて設計できます。実務では認識率だけでなく、例外処理と運用の再現性が差になります。",
  },
  {
    question: "請求書OCRの自動化はどこまで人手を減らせますか？",
    answer:
      "帳票品質と運用設計によりますが、定型請求書が多い環境では入力作業時間を大きく削減できます。一方で低信頼データは人手確認が必要なため、完全無人化ではなくレビュー前提で設計するのが現実的です。",
  },
  {
    question: "電子帳簿保存法に対応するにはOCRだけで十分ですか？",
    answer:
      "十分ではありません。OCRは検索項目生成に有効ですが、保存要件、訂正削除履歴、運用証跡などは別途システムと業務ルールで満たす必要があります。",
  },
  {
    question: "freee・マネーフォワード連携では、最初に何を作るべきですか？",
    answer:
      "最初は「OCR結果の正規化」と「低信頼データの保留キュー」を先に作るのが安全です。そのうえで取引・証憑APIに段階投入すると、誤登録時の影響を抑えられます。",
  },
  {
    question: "日本語手書き文字はどこで精度が落ちやすいですか？",
    answer:
      "手書き欄、押印付近、低解像度FAX、傾きが大きい画像で信頼度が下がりやすい傾向があります。手書き対応可のモデルでも confidence 閾値で人手確認へ回す運用が必要です。",
  },
  {
    question: "AI OCR導入ROIはどう計算すればよいですか？",
    answer:
      "月間処理件数、1件あたり削減時間、実質人件費単価で削減金額を算出し、そこからOCR利用料・レビュー工数・保守費を差し引いて純効果を出します。初期費用を純効果で割ると回収月数を算出できます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI OCR 書類 自動化",
    "AI 書類読み取り 2026",
    "OCR 請求書 自動処理",
    "帳票 AI 自動入力",
    "Document Intelligence 比較",
    "電子帳簿保存法 OCR",
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

export default function AiDocumentOcrGuideRoute() {
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
          { name: "AI OCRで書類処理を自動化する方法", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiDocumentOcrGuidePage faqItems={[...faqItems]} />
    </>
  );
}
