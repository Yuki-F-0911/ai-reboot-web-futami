import type { Metadata } from "next";
import AiPrivacySafetyGuidePage from "@/components/academyLanding/blog/ai-privacy-safety-guide/AiPrivacySafetyGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "生成AIに個人情報を入れても大丈夫？｜安全に使うための5つのルール【2026年版】 | AIリブート";
const pageDescription =
  "ChatGPT・Claude・Geminiに個人情報や会社の情報を入力しても安全？2026年2月時点の各ツールのデータポリシーを正確に比較し、オプトアウト設定の手順を図解。「何が危険で何は安全か」の境界線を5つのルールで明確にします。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-privacy-safety-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T13:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "ChatGPTに入力した情報は他のユーザーに見られることがありますか？",
    answer:
      "通常の利用では、あなたが入力した内容が他のユーザーの回答に直接表示されることはありません。ただし、デフォルト設定では入力データがモデルの学習に使われる可能性があり、学習済みモデルを通じて間接的に情報が反映されるリスクはゼロではありません。オプトアウト設定をONにすることで、学習への利用を防ぐことができます。",
  },
  {
    question: "オプトアウト設定をONにするとAIの回答品質は下がりますか？",
    answer:
      "いいえ、オプトアウト設定はあなたのデータがモデルの学習に使われるかどうかの設定であり、AIの回答品質には影響しません。同じモデルが使われ、同じ品質の回答が返ってきます。安心してオプトアウト設定をONにしてください。",
  },
  {
    question: "無料版のChatGPTを仕事で使っても大丈夫ですか？",
    answer:
      "オプトアウト設定（Settings → Data Controls → 「Improve the model for everyone」をOFF）を行えば、学習への利用を防げます。ただし、無料版はユーザー自身の設定に依存するため、会社として組織的にAIを導入する場合はTeam版やEnterprise版の利用が推奨されます。これらのプランでは契約上データの学習利用が禁止されています。",
  },
  {
    question: "一度AIに入力してしまった情報を取り消すことはできますか？",
    answer:
      "会話を削除することは可能です。ChatGPTやClaudeでは、チャット履歴から個別の会話を削除できます。ただし、すでにモデルの学習に使われた場合は、その情報を完全に除去することは技術的に困難です。だからこそ、入力前の判断（SNS公開テスト）が重要です。Geminiでは「Gemini Apps Activity」から過去のアクティビティを削除できますが、人間のレビュー対象となったデータは最大3年間保持される点に注意が必要です。",
  },
  {
    question: "Claudeは他のツールより安全なのですか？",
    answer:
      "2025年10月以降、Claudeの無料・Pro・Maxプランもデフォルトでデータが学習に使用される設定に変わりました。そのため、オプトアウト設定が必要という点ではChatGPTやGeminiと同様です。ただし、Claudeはオプトアウト時の保持期間が30日と短く、自動フィルタリングで機微データを除外する仕組みがあるなど、プライバシーへの配慮は比較的強い方と言えます。Team/Enterprise版では他のツールと同様に契約で学習利用が禁止されています。",
  },
  {
    question: "子どもにAIを使わせる場合、追加で注意すべきことはありますか？",
    answer:
      "はい、いくつかの追加注意点があります。まず、各ツールには年齢制限があります（ChatGPT/Claudeは13歳以上、Geminiは18歳以上）。子どもは個人情報の概念を十分理解していない場合があるため、「名前・学校名・住所は絶対に入力しない」というルールを事前に共有してください。また、保護者アカウントで利用し、会話履歴を定期的に確認することも有効です。",
  },
  {
    question: "企業のAI利用ガイドラインにはどのような内容を含めるべきですか？",
    answer:
      "最低限含めるべき項目は次の通りです。(1) 使用可能なAIツールのリスト、(2) 入力禁止情報の定義（個人情報・顧客情報・営業秘密・未公開財務情報）、(3) オプトアウト設定の必須化、(4) AI出力の社外公開前チェック体制、(5) インシデント発生時の報告フロー、(6) 定期的なポリシー見直しの頻度。経済産業省の「AI事業者ガイドライン v1.1」も参考になります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI 個人情報 大丈夫",
    "ChatGPT セキュリティ 安全性",
    "AI 情報漏洩 対策",
    "ChatGPT 会社で使う 注意点",
    "生成AI 安全 使い方",
    "ChatGPT オプトアウト 設定",
    "AI プライバシー 保護",
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

export default function AiPrivacySafetyGuideRoute() {
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
          { name: "生成AIに個人情報を入れても大丈夫？", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiPrivacySafetyGuidePage faqItems={[...faqItems]} />
    </>
  );
}
