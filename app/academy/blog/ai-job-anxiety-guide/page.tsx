import type { Metadata } from "next";
import AiJobAnxietyGuidePage from "@/components/academyLanding/blog/ai-job-anxiety-guide/AiJobAnxietyGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIに仕事を奪われる？という不安に正直に答える【2026年版】 | AIリブート";
const pageDescription =
  "「AIに仕事を奪われるのでは」という不安は多くの人が感じています。2026年現在の現実を正直に伝えながら、不安と向き合い、今から準備できることを解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-job-anxiety-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-24T19:00:00+09:00";
const modifiedTime = "2026-02-24T19:00:00+09:00";

const faqItems = [
  {
    question: "特に仕事を奪われやすい年代はありますか？",
    answer:
      "年代よりも「担当している作業の種類」の方が影響します。定型的・反復的な作業（データ入力・定型文書作成・簡易翻訳等）が多い人は、年代に関わらずリスクが高い。逆に、高度な専門判断・対人関係・身体的作業が中心の人は、年代問わずリスクが低い傾向があります。重要なのは年齢ではなく、自分の仕事の「作業内容の構成比」を見直すことです。",
  },
  {
    question: "AIが普及しても、需要が増える職業はありますか？",
    answer:
      "はい。AIを設計・開発・運用するエンジニア・データサイエンティスト、AI活用を支援するコンサルタント、AI時代の倫理・規制に関わる専門家などは需要が増えています。また、介護・保育・医療行為など人の温かみが求められる対人サービス、身体作業が中心の職人仕事（建設・調理・修繕等）も人材不足が続いており、中長期的な需要は安定しています。",
  },
  {
    question: "今の仕事を続けながら、AIに対応するスキルを身につけるにはどうすればいいですか？",
    answer:
      "まず今の仕事の中でAIを使ってみることが最も近道です。メールの下書き、会議の議事録まとめ、企画書のアイデア出しなど、日常業務の一部にChatGPTやClaudeを組み込む。週に1〜2時間を使って仕事内でAIを試す習慣が、最も効率的な学習です。特別な時間を確保して「AI勉強」をするより、仕事の中でAIを使いながら学ぶ方が実力がつきます。",
  },
  {
    question: "子どもに「将来AIに仕事を奪われない」ためにどんな教育が必要ですか？",
    answer:
      "特定のスキルより「変化に適応する力」「自ら学ぶ力」「人と協力する力」を育てる方が長期的に有効です。具体的には、答えのない問いに粘り強く取り組む経験、自分の考えを言葉で伝える練習、多様な人と協働する体験が重要です。AIを恐れさせるのではなく、AIを道具として自然に使える環境（家庭でのAI活用体験等）に早くから触れさせることも有効です。",
  },
  {
    question: "AIを使いこなせるようになるのに、プログラミングの知識は必要ですか？",
    answer:
      "ChatGPTやClaude、Geminiなどの一般的なAIツールを使う分には、プログラミングの知識は不要です。日本語で話しかけるだけで使えます。より高度な自動化（業務フローへの組み込み、独自AIの開発等）を目指す場合は役立ちますが、まずは「AIを仕事で使いこなす」レベルを目標にするなら、プログラミング不要です。難しく考えず、まず使い始めることが大切です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 仕事 奪われる",
    "AI 雇用 影響 2026",
    "AI 失業 不安",
    "生成AI 仕事 なくなる",
    "AI 仕事 対策",
    "ChatGPT 仕事 変化",
    "AI時代 生き残り方",
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

export default function AiJobAnxietyGuideRoute() {
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
          { name: "AIに仕事を奪われる？という不安に正直に答える", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiJobAnxietyGuidePage faqItems={[...faqItems]} />
    </>
  );
}
