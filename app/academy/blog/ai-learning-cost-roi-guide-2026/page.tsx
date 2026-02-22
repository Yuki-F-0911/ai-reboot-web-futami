import type { Metadata } from "next";
import AiLearningCostRoiGuidePage from "@/components/academyLanding/blog/ai-learning-cost-roi-guide-2026/AiLearningCostRoiGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI学習にいくらかかる？無料と有料の境界線と、補助金で実質0円になる方法2026 | AIリブート";
const pageDescription =
  "AI学習の費用相場を徹底比較。無料YouTubeから有料スクールまで、本当のコストと価値を正直に解説。経産省リスキリング補助金を活用すれば最大70%補助。2026年最新の補助金情報と賢い選び方を届けます。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-learning-cost-roi-guide-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T14:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "AI学習は独学でも十分ですか？",
    answer:
      "「何をゴールにするか」次第です。ChatGPTの使い方を覚えるだけなら独学で十分です。しかし「仕事で安定した成果を出す」「体系的なスキルを身につける」には、個別フィードバックや実践演習が必要で、独学には限界があります。最初の1〜2ヶ月は無料リソースで試して、限界を感じてから有料を検討するのが合理的です。",
  },
  {
    question: "経産省リスキリング補助金はいくらもらえますか？",
    answer:
      "受講料の最大70%が補助されます（上限額は講座によって異なります）。10万円の講座なら最大7万円が補助され、自己負担は3万円になります。補助金はハローワークや指定機関に申請するものではなく、対象の教育訓練給付制度（特定一般教育訓練・専門実践教育訓練）を利用する形です。",
  },
  {
    question: "補助金の対象者は誰ですか？（会社員・フリーランス・主婦など）",
    answer:
      "雇用保険に加入している方が主な対象です。会社員の多くは要件を満たします。フリーランスや主婦の場合、以前に雇用保険に加入していた期間があれば対象になる場合があります。自営業者・フリーランスの場合は「第2号被保険者」として要件を確認してください。詳細はハローワークか講座提供機関にご相談ください。",
  },
  {
    question: "補助金の申請は難しいですか？",
    answer:
      "難しくはありませんが、手続きには数ステップあります。①ハローワークでキャリアコンサルティングを受ける（30〜60分）→②訓練前キャリアコンサルティングを完了させる→③対象講座を受講→④修了後に申請書類を提出。AIリブートアカデミーでは申請サポートを行っており、LINEで相談していただくと詳しい手順をご説明します。",
  },
  {
    question: "AIリブートアカデミーの費用はいくらですか？",
    answer:
      "AIリブートアカデミーの料金はLINE相談にてご案内しています。経産省リスキリング補助金の対象となることで実質負担を大幅に抑えられます。「補助金を使った場合の実質費用」を知りたい場合は、LINEで気軽にお問い合わせください。",
  },
  {
    question: "無料でAIを学ぶなら何から始めればいいですか？",
    answer:
      "まずChatGPT（無料プラン）を実際に使ってみることをおすすめします。YouTubeで「ChatGPT 使い方 初心者」と検索すると無料の動画が多数あります。OpenAI公式の「ChatGPT for Beginners」コースも無料で公開されています。ただし、無料リソースは体系的でないため、「何から学べばいいかわからない」という状態になりやすい点は注意が必要です。",
  },
  {
    question: "ChatGPT Plusなどの有料プランは必要ですか？",
    answer:
      "学習初期は必要ありません。ChatGPTの無料プランでもGPT-4oが利用でき、基本的な練習には十分です。ただし、頻繁に使うようになると利用制限に引っかかることがあります。「毎日10回以上使っていて制限がかかる」ようになったら、月額3,000円前後の有料プランを検討するタイミングです。",
  },
  {
    question: "AI学習にどのくらいの時間がかかりますか？",
    answer:
      "「ChatGPTを日常業務で使えるレベル」なら1〜2ヶ月（週3〜5時間）が目安です。「AI活用を仕事の武器にするレベル」には3〜6ヶ月かかります。AIリブートアカデミーの100日間プログラムは、毎日15〜30分の学習で業務効率化まで到達できるよう設計されています。",
  },
  {
    question: "補助金の締め切りはいつですか？",
    answer:
      "教育訓練給付制度に締め切りは設けられていませんが、政府の方針変更で条件が変わる場合があります。2026年現在、補助率70%という高い水準が続いていますが、将来の変更は確約されていません。補助金は「使えるときに使う」のが基本です。早めに情報収集することをおすすめします。",
  },
  {
    question: "AI学習で元が取れるまでどのくらいかかりますか？",
    answer:
      "活用方法次第ですが、週に2時間の業務時間短縮（資料作成・メール対応など）が実現できれば、年間104時間分の生産性向上になります。時給3,000円換算で年間312,000円相当の価値です。補助金を使えば自己負担が数万円に抑えられるため、1〜3ヶ月で元が取れる計算になります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI学習 費用",
    "リスキリング補助金 AI",
    "AI スクール 値段",
    "AI 独学 限界",
    "経産省 補助金 AI",
    "AI学習 コスパ",
    "生成AI 勉強 料金 2026",
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

export default function AiLearningCostRoiGuideRoute() {
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
          { name: "AI学習費用と補助金の完全ガイド2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiLearningCostRoiGuidePage faqItems={[...faqItems]} />
    </>
  );
}
