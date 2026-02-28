import type { Metadata } from "next";
import AiPetCareGuidePage from "@/components/academyLanding/blog/ai-pet-care-guide/AiPetCareGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "AIでペットのお世話がもっと楽しく安心に！ChatGPTを使った犬・猫のケア＆相談術 | AIリブート";
const pageDescription =
  "ChatGPTをペットケアに活用する方法を5場面で解説。体調変化の相談・食事選び・しつけアドバイス・Vision機能で品種推定・用品比較まで、プロンプト例付きで紹介。AIはあくまで情報サポーターであり、緊急症状は必ず獣医師へ相談することも丁寧に解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-pet-care-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T17:00:00+09:00";
const modifiedTime = "2026-02-22T17:00:00+09:00";

const faqItems = [
  {
    question: "AIのアドバイスを信じてよいですか？医療判断はできますか？",
    answer:
      "AIは医療診断を行う資格を持っておらず、回答はあくまでも一般的な情報の整理です。「様子見でよいか病院へ行くべきか」の判断材料としては参考になりますが、治療方針の決定・薬の処方・手術の判断は必ず獣医師に委ねてください。症状が重い・急変している場合はAIより先にかかりつけ獣医師に電話を。",
  },
  {
    question: "ChatGPT無料プランでもペットケアの相談ができますか？",
    answer:
      "はい、無料プランでも体調相談・食事選び・しつけアドバイス・用品比較はほとんど対応しています。写真を読み取るVision機能（品種推定・皮膚状態の確認など）はChatGPT Plus（GPT-4o）またはGeminiが必要です。まずは無料プランで試してみてください。",
  },
  {
    question: "ペットの写真を送ると品種を教えてもらえますか？",
    answer:
      "ChatGPT Plus（GPT-4o）またはGeminiであれば、写真の特徴（毛色・耳の形・体型など）から品種を推定してくれます。血統書がない子や保護犬・保護猫の場合に参考になります。ただし確定的な品種鑑定ではないため、正確に知りたい場合は動物病院でのDNA検査をご検討ください。",
  },
  {
    question: "夜中にペットの体調が心配なとき、AIに相談してよいですか？",
    answer:
      "「夜中に病院が開いていない・明日まで待つべきか迷う」というときの情報整理として活用できます。特に「緊急受診が必要なサイン」の確認に役立ちます。ただし呼吸困難・意識がない・全く動かないなどの緊急症状は、夜間救急動物病院に迷わず連絡してください。AIは緊急対応の代替にはなりません。",
  },
  {
    question: "猫・犬に食べさせてはいけないものをAIで確認できますか？",
    answer:
      "「犬に与えてはいけない食べ物一覧を教えて」と入力するだけで、毒性リスクとともにリストを提示してくれます。ネギ類・チョコレート・ブドウ・キシリトールなど主要なものは正確に教えてくれますが、稀な食品や最新の研究情報は公式獣医師団体のガイドラインも合わせてご確認ください。",
  },
  {
    question: "しつけの相談もAIにできますか？専門トレーナーと何が違いますか？",
    answer:
      "AI は一般的なしつけの知識・ポジティブトレーニングの手順・行動の原因分析を教えてくれます。一方、専門トレーナーは実際の動作を見て個体差に合わせた指導ができます。AIは「基本的な考え方と第一歩の方法」を知るための入口として使い、問題行動が改善しない場合や攻撃性が強い場合は専門家への相談をおすすめします。",
  },
  {
    question: "AIが提案したフードや用品はそのまま購入してよいですか？",
    answer:
      "AIが提案する商品名は古い情報が含まれる場合があります。AIの回答は「選ぶときの基準・比較ポイント」の整理として使い、最終的な購入判断は最新のレビュー・獣医師の推薦・ペットショップでの確認を経て行うことをおすすめします。特にフードは成分と原産地を自分の目で確認してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI ペット",
    "ChatGPT 犬 猫 相談",
    "ペット 体調 AI",
    "ペットケア AI 活用",
    "ChatGPT Vision 品種 推定",
    "犬 猫 しつけ AI",
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

export default function AiPetCareGuideRoute() {
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
          { name: "AIでペットのお世話がもっと楽しく安心に！", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiPetCareGuidePage faqItems={[...faqItems]} />
    </>
  );
}
