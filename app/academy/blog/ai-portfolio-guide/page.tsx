import type { Metadata } from "next";
import AiPortfolioGuidePage from "@/components/academyLanding/blog/ai-portfolio-guide/AiPortfolioGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "AIスキルのポートフォリオ作り方2026｜転職・副業・社内評価につながる実績のまとめ方 | AIリブート";
const pageDescription =
  "AIポートフォリオの作り方を転職・副業・社内評価のシーン別に解説。プロンプト集・自動化フロー・分析ダッシュボードなど成果物の種類と、GitHubやNotionでの公開方法を5ステップで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-portfolio-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T10:00:00+09:00";
const modifiedTime = "2026-02-19T10:00:00+09:00";

const faqItems = [
  {
    question: "AIポートフォリオはプログラミング経験がなくても作れますか？",
    answer:
      "プログラミング経験がなくても作れます。業務特化型のプロンプト集、Notionで整備した業務テンプレート、Make/ZapierなどのノーコードツールによるAI自動化フローが代表的な成果物です。「課題→手法→成果」の構造で記録できれば、コードを書かなくても評価の対象になります。",
  },
  {
    question: "GitHubを使ったことがない場合、どこに公開すればいいですか？",
    answer:
      "まずはNotionが始めやすいです。ページを「Public」にしてURLを共有するだけで公開できます。プロンプト・手順・成果をNotion上で整理し、URLをまとめたポートフォリオページを1枚作ることで、採用担当者や発注者に共有しやすい形になります。GitHubはコードやスクリプトが増えてきた段階で検討します。",
  },
  {
    question: "副業でAIスキルを証明するには何を見せればいいですか？",
    answer:
      "発注者が知りたいのは「自分の業務に再現できるか」です。成果物に「使用ツール・前提条件・設定手順・成果サマリー」をセットで記録すると評価されやすくなります。ライティング支援なら編集前後の比較、自動化なら処理時間の変化、分析支援なら出力したレポートの例を添付するのが効果的です。",
  },
  {
    question: "社内評価でAIポートフォリオはどう活用できますか？",
    answer:
      "個人の成果だけでなく「チームでも再現できる手順書」があると評価されやすくなります。月次報告や業務レポートにAI活用セクションを設けて定点観測の形式で記録し、年次評価のタイミングで提示するのが現実的です。上司への提案時は「作業時間の削減量・コスト試算」を先に提示すると話が通りやすくなります。",
  },
  {
    question: "転職活動でAIスキルのポートフォリオはどこに記載しますか？",
    answer:
      "職務経歴書の「自己PR」または「スキル・実績」欄にGitHubやNotionのURLを添付するのが一般的です。「AIを活用できる」と書くだけでなく、「〇〇業務を週4時間から15分に短縮（プロンプト設計＋Zapier連携）」のように課題と成果を数値で記載すると面接での説明と一致した印象が与えられます。",
  },
  {
    question: "ポートフォリオに入れる成果物は何件必要ですか？",
    answer:
      "最低3件が目安です。ジャンルが異なる3点（例：プロンプト集・自動化フロー・業務設計ドキュメント）を選ぶと、対応範囲の広さが伝わります。1件の完成度を高めるより、目的が明確な3件を揃えるほうが初期段階では評価されやすい傾向があります。まず1件完成させてから追加する順序が現実的です。",
  },
  {
    question: "AIエンジニアのポートフォリオと非エンジニアのポートフォリオは何が違いますか？",
    answer:
      "AIエンジニアはモデルの実装・ファインチューニング・API連携など技術実装が中心です。非エンジニアは業務課題の定義・ツール選定・プロセス設計・業務定着の実績を中心に構成します。非エンジニアの場合は技術力より「問題解決の再現性」を見せることが評価のポイントです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI ポートフォリオ 作り方",
    "AIスキル 転職 証明",
    "生成AI 実績 まとめ方",
    "AI活用 副業 ポートフォリオ",
    "AIエンジニア ポートフォリオ",
    "AI 社内評価",
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

export default function AiPortfolioGuideRoute() {
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
          { name: "AIポートフォリオ作り方", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiPortfolioGuidePage faqItems={[...faqItems]} />
    </>
  );
}
