import type { Metadata } from "next";
import OpenaiO3O4miniGuidePage from "@/components/academyLanding/blog/openai-o3-o4mini-guide/OpenaiO3O4miniGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "OpenAI o3/o4-mini使い方ガイド｜推論モデルの実務選定と料金判断【2026年版】 | AIリブート";
const pageDescription =
  "OpenAI o3/o4-miniの違いを2026年2月20日時点の公開情報で整理。推論モデルを選ぶ理由、GPT-4oやGPT-5系との使い分け、o3 API運用、料金判断軸、実務向け選定チャートまで中級者向けに解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/openai-o3-o4mini-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T20:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "OpenAI o3とo4-miniの違いは何ですか？",
    answer:
      "o3は高難度の推論や複雑な条件整理に強い推論モデルで、o4-miniは速度とコスト効率を重視した推論モデルです。精度優先ならo3、大量処理や短い往復を回すならo4-miniが選びやすくなります。",
  },
  {
    question: "ChatGPTでo4-miniはまだ使えますか？",
    answer:
      "2026年2月13日のOpenAI Help更新では、ChatGPTモデルセレクター上のo4-mini退役が案内されています。運用時はヘルプセンターの最新モデル一覧を確認し、UI表示とAPIモデルを分けて判断してください。",
  },
  {
    question: "o3はどんな業務タスクに向いていますか？",
    answer:
      "数式を含む分析、コード設計レビュー、複数制約の意思決定、反証条件の検討など、途中の思考工程が成果に直結するタスクに向いています。時間はかかっても根拠付きで結論を出したい場面で有効です。",
  },
  {
    question: "o4-miniはどんなときに選ぶべきですか？",
    answer:
      "チケット分類、下書き生成、一次トリアージ、ログ要約のような処理件数が多い業務で有効です。十分な推論品質を維持しつつ、レイテンシと費用を抑えたい場面で使いやすいモデルです。",
  },
  {
    question: "料金比較はどの指標で判断すればよいですか？",
    answer:
      "入力単価と出力単価に加え、推論モデルではreasoning tokensが出力課金に含まれる点を確認してください。1リクエスト単価より、1成果物あたりの実効コスト（再実行回数込み）で比較する方が実務的です。",
  },
  {
    question: "GPT-5系やDeep Researchとはどう使い分ければよいですか？",
    answer:
      "複雑推論を自前ワークフローへ組み込むならo3/o4-mini、最新総合性能を優先するならGPT-5系、外部情報を横断して調査レポート化するならDeep Researchが候補です。目的が『推論』か『調査』かで分けると判断が速くなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "OpenAI o3 使い方",
    "o4-mini 比較",
    "OpenAI 推論モデル",
    "o3 API",
    "ChatGPT o3",
    "推論モデル 料金",
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

export default function OpenaiO3O4miniGuideRoute() {
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
          { name: "OpenAI o3/o4-mini使い方ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <OpenaiO3O4miniGuidePage faqItems={[...faqItems]} />
    </>
  );
}
