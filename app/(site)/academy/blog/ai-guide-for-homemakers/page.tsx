import type { Metadata } from "next";
import AiGuideForHomemakerPage from "@/components/academyLanding/blog/ai-guide-for-homemakers/AiGuideForHomemakerPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "主婦がAIを使うと何が変わる？家事・育児・仕事探しに役立つ実践ガイド【2026年版】 | AIリブート";
const pageDescription =
  "専業主婦・兼業主婦がAIを使って日常を改善する方法を解説。献立作り・育児相談・家計管理から、将来の仕事探しまで。「主婦こそAIを使うべき」理由を正直にお伝えします。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-guide-for-homemakers";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-25T09:00:00+09:00";
const modifiedTime = "2026-02-25";

const faqItems = [
  {
    question: "スマートフォンだけでAIは使えますか？",
    answer:
      "はい、スマートフォン1台で十分です。ChatGPTやClaudeのアプリをダウンロードし、メールアドレスで登録するだけで今日から使えます。パソコンがなくても、タブレットでもOKです。無料で始められ、日常的な使い方（献立相談・文章作成・育児の質問）には無料プランで十分対応できます。",
  },
  {
    question: "主婦がAIを使うことで、家族に何か影響はありますか？",
    answer:
      "良い影響が多いと考えています。献立の悩みが減ることで余裕が生まれたり、子どもの質問に一緒に調べて答えることで親子の会話が増えたりします。AIが書いた文章の下書きを確認・修正する作業は、お子さんの文章力や論理的思考の発達にも役立てられます。ただし、AIの情報をそのまま鵜呑みにせず「本当にそうか」と確認する習慣をつけることが大切です。",
  },
  {
    question: "AIを使っていることを夫や子どもに伝えるべきですか？",
    answer:
      "伝える必要は必ずしもありませんが、特に子どもの宿題サポートでAIを使う場合は「一緒に考えるために使っている」と説明しておくと良いでしょう。夫に対しては、「こんな便利なことができた」と成果を共有することで、家庭でのAI活用が広がることもあります。献立や文書作成へのAI活用は、普通の調理本やテンプレートを参考にするのと同じ感覚です。",
  },
  {
    question: "個人的な家族の情報をAIに入力しても大丈夫ですか？",
    answer:
      "「子どもが嫌いな食材」「家族の大まかな人数・年齢層」程度の情報であれば問題ありません。ただし、家族の氏名・住所・生年月日・学校名・マイナンバー・銀行口座などの個人を特定できる情報は入力しないようにしましょう。「うちの子（小学3年生）が〜」というぼかした表現でも、AIは十分に文脈を理解して回答してくれます。",
  },
  {
    question: "AIで家事の時短をしたら、空いた時間で何をすればいいですか？",
    answer:
      "それは自由です。休息に使うのも立派な選択です。ただ「せっかくだから」と思うなら、AIを使ったスキルアップ（資格の勉強、英会話の練習、ビジネス文書の書き方の学習）に充てるのがおすすめです。将来の仕事復帰を考えているなら、AIを使いながら「業務で使えるAI活用スキル」を積み上げる時間に使うと、仕事復帰のときに大きな差になります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "主婦 AI 活用",
    "専業主婦 ChatGPT 使い方",
    "主婦 生成AI",
    "主婦 AI 時短",
    "ママ AI 活用法",
    "主婦 ChatGPT 活用",
    "家事 AI 効率化",
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

export default function AiGuideForHomemakersRoute() {
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
          { name: "主婦がAIを使うと何が変わる？家事・育児・仕事探しに役立つ実践ガイド【2026年版】", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiGuideForHomemakerPage faqItems={[...faqItems]} />
    </>
  );
}
