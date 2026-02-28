import type { Metadata } from "next";
import ChatgptExamStudyGuidePage from "@/components/academyLanding/blog/chatgpt-exam-study-guide/ChatgptExamStudyGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "ChatGPTで資格・試験勉強が変わる！暗記・過去問・弱点克服に使えるAI活用術【2026年版】 | AIリブート";
const pageDescription =
  "ChatGPTを使った資格勉強の活用術を完全解説。暗記カード自動生成・過去問の解説依頼・弱点分析・学習スケジュール作成まで、プロンプト例付きで紹介。FP・TOEIC・宅建・ITパスポートなど人気資格への応用ヒントと、AIを使う際の注意点もまとめています。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-exam-study-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T16:00:00+09:00";
const modifiedTime = "2026-02-22T16:00:00+09:00";

const faqItems = [
  {
    question: "ChatGPTに問題を作ってもらうことはできますか？",
    answer:
      "できます。「〔分野名〕の一問一答を10問作って」と指示するだけで、正解・解説付きの問題を生成してくれます。類似問題の量産にも使えるため、問題集にない角度から演習できるのが利点です。",
  },
  {
    question: "AIの解答・解説はどのくらい正確ですか？",
    answer:
      "全般的に質は高いですが、法改正後の情報・最新の試験範囲・具体的な数値には誤りが混じることがあります（ハルシネーション）。公式テキストや試験実施団体の発表と照合して使うことが大切です。「理解を助ける足がかり」として使い、最終確認は公式資料で行うのが安全です。",
  },
  {
    question: "無料のChatGPTでも資格勉強に使えますか？",
    answer:
      "はい、無料プランでも暗記カード生成・過去問解説・弱点分析・スケジュール作成のほとんどが使えます。ただし無料プランは利用回数や最新モデルへのアクセスに制限があるため、毎日集中的に使う場合はChatGPT Plusへのアップグレードを検討するとストレスが減ります。",
  },
  {
    question: "写真を撮った参考書のページをAIに解説してもらえますか？",
    answer:
      "ChatGPT Plus（GPT-4o）またはGeminiの場合、テキストの写真を送ると内容を読み取って解説してくれます。「このページで試験に出やすい部分を教えて」「赤線を引いた箇所の関連問題を3問作って」といった使い方ができます。",
  },
  {
    question: "AIに学習コーチになってもらうにはどうすればいいですか？",
    answer:
      "ChatGPTのカスタム指示（Custom Instructions）に「私は〔資格名〕の試験まで〔日数〕あります。毎日〔時間〕勉強できます。苦手分野は〔単元〕です」と設定しておくと、毎回の会話で自分の状況を踏まえたアドバイスをもらえます。まるで専属コーチのように機能します。",
  },
  {
    question: "ChatGPTとGemini、資格勉強にはどちらがおすすめですか？",
    answer:
      "初めて使うならChatGPTが使いやすい傾向があります。文章の解説品質・暗記カード生成・スケジュール管理の柔軟性で定評があります。GoogleサービスとのAPI連携や最新情報の参照を重視するならGeminiも試す価値があります。両方無料プランがあるので比較してみるのが一番確実です。",
  },
  {
    question: "AIに頼りすぎると本番で解けなくなりませんか？",
    answer:
      "「問題を解く前からAIに答えを見る」習慣は避けましょう。まず自分で解き、答えを出してからAIに解説を依頼するサイクルが効果的です。AIは「思考の壁打ち相手」として使い、試験本番と同じ状況（AIなし）での模試も定期的に行うことで実力が定着します。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT 資格勉強",
    "AI 試験対策",
    "暗記カード 自動生成 AI",
    "過去問 AI 解説",
    "FP TOEIC 宅建 AI 勉強",
    "学習スケジュール ChatGPT",
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

export default function ChatgptExamStudyGuideRoute() {
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
          { name: "ChatGPTで資格・試験勉強が変わる！AI活用術", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ChatgptExamStudyGuidePage faqItems={[...faqItems]} />
    </>
  );
}
