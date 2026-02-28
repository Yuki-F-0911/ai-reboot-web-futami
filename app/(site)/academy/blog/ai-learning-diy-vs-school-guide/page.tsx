import type { Metadata } from "next";
import AiLearningDiyVsSchoolGuidePage from "@/components/academyLanding/blog/ai-learning-diy-vs-school-guide/AiLearningDiyVsSchoolGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIを独学で学ぶ vs スクールで学ぶ：後悔しない選び方の完全ガイド【2026年版】 | AIリブート";
const pageDescription =
  "AIを独学で習得しようとして挫折した人、スクールに入るべきか迷っている人へ。独学とスクール学習の具体的な違い・向いている人の特徴・費用対効果を正直に比較します。3つの質問で自分に合う方法がわかる判断フレームワーク付き。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-learning-diy-vs-school-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T14:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "AIスクールは高すぎる、独学でも使いこなせますか？",
    answer:
      "はい、独学でも十分使いこなせる人はいます。ただし条件があります。「AIを使う明確な目的がある」「自分でペース管理して継続できる実績がある」「つまずいたとき相談できる環境がある」——この3つが揃っている人は独学でも伸びます。逆に「過去に挫折経験がある」「何を学ぶか迷っている」「一人では続かない」という方にとって、スクールの費用は挫折のリスクへの保険とも言えます。",
  },
  {
    question: "スクールに入っても意味ない、という声も聞くのですが...？",
    answer:
      "スクールに入っても意味がなかったケースは確かに存在します。多くの場合、原因は「スクール選びのミス（カリキュラムが仕事に直結しない）」「入ったあとの自分の行動量が少なかった」「コミュニティをうまく使えなかった」のどれかです。スクールは魔法ではなく、あくまで続けるための環境と体系を提供するものです。入ること自体がゴールではなく、入ったあとに使いこなすことが大切です。",
  },
  {
    question: "何ヶ月くらいで仕事に使えるようになりますか？",
    answer:
      "目安として、「日常業務でAIを補助的に使えるレベル」は1〜3ヶ月、「業務の一部をAIで自動化・効率化できるレベル」は3〜6ヶ月が多いです。ただしこれは「毎日少しでも使い続けた場合」の話です。週1回だけ触る程度では、半年経っても初心者のままということも珍しくありません。継続の頻度が、習得スピードを最も大きく左右します。",
  },
  {
    question: "独学でどこまで学べますか？限界はありますか？",
    answer:
      "AIの基本的な活用（テキスト生成・要約・翻訳・アイデア出し）は独学でも十分習得できます。より高度な活用（業務フロー自動化・AIエージェント構築・API連携）になると、独学は可能ですが時間がかかります。また、「自分の使い方が正しいかどうか」を確認する機会がないため、非効率な方法を長期間続けてしまうリスクも独学特有のデメリットです。",
  },
  {
    question: "経産省のリスキリング補助金は本当に使えますか？",
    answer:
      "はい、条件を満たせば使えます。経産省のリスキリング補助金（人材開発支援助成金のデジタル・DX人材育成コース等）は、認定された訓練機関での受講費用の最大70%が補助される制度です。AIリブートアカデミーは補助金対応のプログラムを提供しています。詳細は専用ページまたはLINEからご確認ください。",
  },
  {
    question: "ChatGPTを少し触ったことがある程度でもスクールについていけますか？",
    answer:
      "はい、問題ありません。AIリブートアカデミーを含む多くのAIスクールは、「ほとんど触ったことがない初心者」を対象に設計されています。ChatGPTを少し触った経験があれば、むしろスムーズにスタートできます。入学前に「初心者でも大丈夫か」「受講前に準備することはあるか」を確認しておくと安心です。",
  },
  {
    question: "独学とスクール、どちらが仕事に直結しやすいですか？",
    answer:
      "スクールが仕事に直結しやすい傾向があります。理由は、体系的なカリキュラムが「業務活用」を前提に設計されており、講師やメンターからの業務視点のフィードバックが得られるからです。独学でも十分仕事に活かせるレベルに達することは可能ですが、「自分の業務にどう使うか」というカスタマイズは、独学者が最も時間を要する部分です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 学習 独学 スクール 比較",
    "AI スクール 必要",
    "生成AI 独学 難しい",
    "AI 学習 費用",
    "ChatGPT 独学 挫折",
    "AI スクール おすすめ",
    "生成AI 独学 続かない",
    "AI 学習 方法 選び方",
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

export default function AiLearningDiyVsSchoolGuideRoute() {
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
          { name: "AIを独学で学ぶ vs スクールで学ぶ", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiLearningDiyVsSchoolGuidePage faqItems={[...faqItems]} />
    </>
  );
}
