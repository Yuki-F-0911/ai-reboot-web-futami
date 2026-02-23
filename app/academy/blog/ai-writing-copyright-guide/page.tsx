import type { Metadata } from "next";
import AiWritingCopyrightGuidePage from "@/components/academyLanding/blog/ai-writing-copyright-guide/AiWritingCopyrightGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIに書かせた文章は自分の文章か？著作権・倫理・クレジット問題を初心者向けに解説 | AIリブート";
const pageDescription =
  "AIが書いた文章の著作権はどうなる？学校のレポートや仕事の文書にAIを使っていいの？初心者が疑問に思う「AIと著作権・倫理」の問題を、難しい法律用語を使わずに解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-writing-copyright-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-24T16:00:00+09:00";
const modifiedTime = "2026-02-24";

const faqItems = [
  {
    question: "AIで書いた文章をブログに載せることは問題ありますか？",
    answer:
      "現時点（2026年2月）では、著作権上の問題は生じにくいとされています。AIが自動生成した文章は原則として著作権保護の対象外とされているため、それを使用することで著作権侵害になるケースは少ないと考えられています。ただし、読者や読者の信頼を守るという観点から「AI生成コンテンツを含む」と明記することを推奨する動きもあります。また、Google等の検索エンジンはAI生成コンテンツ自体を問題視しているわけではなく、コンテンツの質と有用性を評価しています。",
  },
  {
    question: "AIが書いた文章をSEO目的で使うとペナルティがありますか？",
    answer:
      "Googleは「AI生成コンテンツだからペナルティ」という方針はとっていません。評価の基準は「人間が作ったか、AIが作ったか」ではなく「コンテンツが役に立つか、質が高いか」です。ただし、大量の低品質AI生成コンテンツを機械的に量産する行為はスパムとみなされる可能性があります。AI生成コンテンツであっても、人間が編集・確認し、読者にとって本当に役立つ内容に仕上げることが大切です。",
  },
  {
    question: "会社でAIを使うことを上司に報告する必要はありますか？",
    answer:
      "会社の規定によります。AI使用を報告・申請の対象としている企業もあれば、特にルールがない企業もあります。まず社内のAI利用ポリシーや情報セキュリティガイドラインを確認してください。明確な規定がない場合でも、業務の透明性という観点から、AIを使用した旨を上司に共有しておくと、後々のトラブルを防ぐことができます。また、機密情報をAIに入力していないかどうかは、報告の有無にかかわらず常に守るべき点です。",
  },
  {
    question: "AIの回答に間違いがあって、それを信じてしまったら責任は？",
    answer:
      "最終的な責任は、その情報を使用した人間（あなた）にあります。「AIが言っていたから」という理由は、法的にも社会的にも免責にはなりません。AIはハルシネーション（もっともらしい嘘）を生成することがあるため、重要な意思決定や他者に影響を与える内容についてはAIの出力をそのまま信じず、別途確認することが大切です。特に医療・法律・金融に関する情報は、必ず専門家に確認してください。",
  },
  {
    question: "AIに自分の文章スタイルを学習させてもいいですか？",
    answer:
      "多くのAIサービスでは、会話の内容を使ってモデルを訓練する設定が含まれている場合があります。自分の文章スタイルを学習させること自体は一般的に問題ありませんが、プライバシーの観点から、個人情報や機密情報が含まれる文章をトレーニングデータとして提供しないよう注意が必要です。サービスごとのプライバシーポリシーを確認し、必要に応じてデータ使用オプトアウトの設定を行うことをお勧めします。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 著作権 文章",
    "ChatGPT 著作権 問題",
    "AI 文章 使っていい",
    "生成AI 著作権 2026",
    "AI 倫理 初心者",
    "ChatGPT レポート 使っていい",
    "AI 文章 仕事 使用可",
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

export default function AiWritingCopyrightGuideRoute() {
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
          { name: "AIに書かせた文章は自分の文章か？著作権・倫理・クレジット問題を初心者向けに解説", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiWritingCopyrightGuidePage faqItems={[...faqItems]} />
    </>
  );
}
