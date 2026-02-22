import type { Metadata } from "next";
import EuAiAct2026ComplianceJpPage from "@/components/academyLanding/blog/eu-ai-act-2026-compliance-jp/EuAiAct2026ComplianceJpPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "EU AI法（EU AI Act）2026年対応ガイド｜日本企業が今すぐ確認すべき7つのポイント | AIリブート";
const pageDescription =
  "2026年8月から本格適用のEU AI法。日本企業でも対応が必要なケースと不要なケースを整理。リスクレベル分類、義務一覧、チェックリストをわかりやすく解説。社内ガイドライン雛形はLINE登録で無料配布。";
const pageUrl = "https://ai-reboot.io/academy/blog/eu-ai-act-2026-compliance-jp";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T10:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "EU AI法は日本企業に直接適用されますか？",
    answer:
      "EU域内でAIシステムを提供・使用する場合には適用されます。日本に本社がある企業でも、EU向けにサービスを展開している、またはEU域内の取引先やユーザーにAI出力を届けている場合は対象になり得ます。国内のみで完結している業務であれば、現時点では直接適用外です。",
  },
  {
    question: "中小企業は対応が必要ですか？",
    answer:
      "EU AI法は中小企業（SME）や個人事業主に対して一部の義務を軽減する規定を設けています。ただし、「高リスクAI」に分類されるシステムを提供・使用する場合は規模を問わず義務が発生します。まずEUとの取引・サービス展開の有無を確認するのが先決です。",
  },
  {
    question: "「高リスクAI」に該当する具体例を教えてください。",
    answer:
      "採用・昇進の選考に使うAIシステム、医療診断を補助するシステム、信用スコアリング、重要インフラ管理（電力・水道など）に使われるシステムが代表的な高リスクAIです。汎用の文書作成AIやChatGPT等の会話AIは高リスク分類には通常含まれません。",
  },
  {
    question: "2026年8月に何が施行されますか？",
    answer:
      "2026年8月2日からGPAI（汎用AIモデル）に関する規制（第5章）と、高リスクAIに関する一部の義務が本格適用されます。禁止AIシステムの規定（第5条）は2025年2月に先行発効済みです。完全適用は2027年8月（高リスクAI全般）まで段階的に進みます。",
  },
  {
    question: "対応していない場合のペナルティはどの程度ですか？",
    answer:
      "違反の種類によって異なります。禁止AIシステムの使用は最大3,500万ユーロまたは全世界売上高の7%、高リスクAIの義務違反は最大1,500万ユーロまたは売上高の3%、その他の義務違反は最大750万ユーロまたは売上高の1.5%が上限として規定されています（確認日：2026-02-22）。",
  },
  {
    question: "「禁止AIシステム」とは何ですか？",
    answer:
      "EU AI法が使用を全面禁止しているAIシステムです。主なものは「サブリミナル操作・欺瞞的な技術で人の行動を変容させるシステム」「社会的スコアリングシステム」「リアルタイム生体認証による公共空間での監視（限定的例外あり）」「AIによる感情認識（職場・教育分野）」などです。",
  },
  {
    question: "日本でも同様のAI規制が作られる予定はありますか？",
    answer:
      "日本では2025年時点で拘束力のある法律は制定されておらず、経済産業省や内閣府が「AI事業者ガイドライン」を発表する形をとっています。2026年以降に規制の法制化議論が進む可能性はありますが、EUほどの包括的規制は短期的には予定されていません（確認日：2026-02-22）。",
  },
  {
    question: "ChatGPTやClaudeなど汎用AIツールを業務利用している場合、EU AI法は関係しますか？",
    answer:
      "ChatGPT・Claude・GeminiはGPAI（汎用AIモデル）に分類されます。これらを使ってEU市場向けのサービスやシステムを構築している場合、GPAI利用者としての透明性義務が発生する可能性があります。単に社内業務の効率化（議事録作成・文書要約など）に使っているだけであれば、現時点での直接義務は限定的です。",
  },
  {
    question: "今すぐ取り組むべきことは何ですか？",
    answer:
      "まず①EU向けサービス・取引の有無を確認し、②社内で使用しているAIシステムのリストを作成し、③それぞれのリスク分類を確認することです。高リスクに該当しないことが確認できれば、追加対応の優先度は下がります。社内AI利用ガイドラインの整備は、EU AI法対応に限らず早めに着手することを推奨します。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "EU AI Act 2026",
    "EU AI法 日本",
    "EU AI規制 対応",
    "AI規制 日本企業",
    "EU AI Act コンプライアンス",
    "AI法 施行",
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

export default function EuAiAct2026ComplianceJpRoute() {
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
          { name: "EU AI法2026年対応ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <EuAiAct2026ComplianceJpPage faqItems={[...faqItems]} />
    </>
  );
}
