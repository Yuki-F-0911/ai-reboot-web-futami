import type { Metadata } from "next";
import ChatgptPromptTemplates50Page from "@/components/academyLanding/blog/chatgpt-prompt-templates-50/ChatgptPromptTemplates50Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "すぐ使える！ChatGPTプロンプトテンプレート50選｜仕事・勉強・日常のAI活用集【2026年版】 | AIリブート";
const pageDescription =
  "コピペで即使えるChatGPTプロンプトテンプレートを50個厳選。仕事効率化・文章作成・勉強・日常生活・クリエイティブの5カテゴリに分類し、NG例/OK例の対比と使い方のコツを解説。ChatGPT・Claude・Geminiすべてで使えます。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-prompt-templates-50";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T15:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "このテンプレートはChatGPT以外でも使えますか？",
    answer:
      "はい、すべてのテンプレートはClaude・Geminiでもそのまま使えます。生成AIのプロンプトは特定ツール専用ではなく、日本語の指示文として設計しているため、どのAIツールでも同様に動作します。ツールによって回答のニュアンスは異なるので、同じテンプレートを複数ツールに投げて比較するのもおすすめです。",
  },
  {
    question: "テンプレートの{...}部分はどう書き換えればいいですか？",
    answer:
      "{ }で囲まれた部分を、あなたの状況に合わせた具体的な情報に置き換えてください。たとえば{商品名}なら「iPhone 16」、{ターゲット層}なら「30代の共働き世帯」のように具体的に書くほど、AIの回答精度が上がります。曖昧な置き換え（「いい感じの商品」など）は避けましょう。",
  },
  {
    question: "プロンプトをそのままコピペしても期待通りの回答が返ってこない場合は？",
    answer:
      "テンプレートはあくまで出発点です。最初の回答が期待と違う場合は、「もう少し具体的に」「箇条書きで」「〇〇の観点を追加して」など追加指示を出してください。1回で完璧を求めるのではなく、2〜3回の会話で磨き上げるのがAI活用のコツです。",
  },
  {
    question: "仕事で使う場合、機密情報を入力しても大丈夫ですか？",
    answer:
      "無料プランではAIの学習に入力データが使われる可能性があるため、機密情報・個人情報の入力は避けてください。ChatGPT Team/Enterprise、Claude for Business、Gemini for Google Workspaceなどのビジネスプランではデータが学習に使われない設定が可能です。社内のAI利用ガイドラインも確認しましょう。",
  },
  {
    question: "プロンプトを書くときの一番大事なコツは？",
    answer:
      "「具体的に書く」ことです。「いい感じにして」ではなく「ビジネスメール形式で、300文字以内で、丁寧すぎない敬語で」のように条件を明示してください。役割（あなたは〇〇の専門家です）・目的・形式・制約を指定するだけで回答の質が大きく変わります。",
  },
  {
    question: "50個もあると選べません。まず何から試すべきですか？",
    answer:
      "「自分が毎週やっている面倒な作業」に近いテンプレートから始めてください。メールを書くのが面倒なら文章作成カテゴリ、会議資料の作成が大変なら仕事効率化カテゴリがおすすめです。1つ試して便利さを体感すると、自然と他のテンプレートも使いたくなります。",
  },
  {
    question: "無料プランでもすべてのテンプレートを使えますか？",
    answer:
      "はい、50個すべてのテンプレートは無料プランで問題なく使えます。特別な機能（プラグイン・ファイル添付等）を必要とするテンプレートは含まれていません。ChatGPT・Claude・Geminiのいずれも無料プランで今すぐ試せます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT プロンプト テンプレート",
    "ChatGPT 使い方 例文",
    "AI プロンプト 便利",
    "ChatGPT 活用 仕事",
    "生成AI テンプレ 集",
    "ChatGPT プロンプト コピペ",
    "AI 仕事 効率化",
    "ChatGPT テンプレート 50選",
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

export default function ChatgptPromptTemplates50Route() {
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
          { name: "ChatGPTプロンプトテンプレート50選", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ChatgptPromptTemplates50Page faqItems={[...faqItems]} />
    </>
  );
}
