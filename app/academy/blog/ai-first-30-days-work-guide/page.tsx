import type { Metadata } from "next";
import AiFirst30DaysWorkGuidePage from "@/components/academyLanding/blog/ai-first-30-days-work-guide/AiFirst30DaysWorkGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "生成AIを仕事で使い始めた人の「最初の30日」完全ガイド｜週別ロードマップ＆プロンプト例つき | AIリブート";
const pageDescription =
  "生成AIを仕事に取り入れたい社会人向け。Week 1〜4の週別ロードマップで、アカウント作成からチームへの展開まで30日で「AI使える人」になる手順をコピペ可能なプロンプト例つきで解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-first-30-days-work-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-21T09:00:00+09:00";
const modifiedTime = "2026-02-21T09:00:00+09:00";

const faqItems = [
  {
    question: "AIを全く使ったことがない人でも30日で使えるようになりますか？",
    answer:
      "はい。このガイドはAI未経験の方を想定しています。Week 1はアカウント作成と簡単な質問だけなので、スマホでLINEを送れる方なら問題なく始められます。",
  },
  {
    question: "ChatGPTとClaudeのどちらを使えばいいですか？",
    answer:
      "職場で承認されているツールがあればそちらを優先してください。特にない場合は、ChatGPT（無料プラン）が最も情報が多く始めやすいです。30日後に余裕があればClaudeやGeminiも試してみましょう。",
  },
  {
    question: "無料プランだけで30日間のガイドを実践できますか？",
    answer:
      "できます。この記事のプロンプト例はすべて無料プランで動作します。有料プランは使い込んでから検討しても遅くありません。",
  },
  {
    question: "1日どれくらいの時間を確保すればいいですか？",
    answer:
      "Week 1〜2は1日10〜15分、Week 3〜4は1日20〜30分が目安です。まとまった時間が取れなくても、業務の合間にAIに1つ質問するだけで効果があります。",
  },
  {
    question: "社内でAIの利用が禁止されている場合はどうすればいいですか？",
    answer:
      "まずは上司や情報システム部門に「承認されたAIツールはありますか？」と確認してください。完全禁止の場合は、プライベートの学習目的で使い、業務データは一切入力しない形で練習するのが安全です。",
  },
  {
    question: "AIに入力してはいけない情報は何ですか？",
    answer:
      "顧客名・個人情報・未発表の事業計画・取引金額など、社外に出てはいけない情報は入力しないでください。固有名詞を「A社」「Xプロジェクト」に置き換えてから入力すれば、同等の補助を受けられます。",
  },
  {
    question: "プロンプトの書き方が分からなくて挫折しそうです",
    answer:
      "最初から上手に書く必要はありません。「〇〇を教えて」という一言から始めて、「もう少し短くして」「箇条書きにして」と追加指示を出す練習をしてください。1回の完璧より、3回の会話の方が良い結果になります。",
  },
  {
    question: "上司にAI活用の成果をどう報告すればいいですか？",
    answer:
      "「議事録整理が30分から10分になった」のように、具体的なタスク名と削減時間の数字で伝えるのが効果的です。Week 4のプロンプト例を使えば、報告メモの下書きをAIに作らせることもできます。",
  },
  {
    question: "AIを使っていることを周囲に言うべきですか？",
    answer:
      "AI活用が推奨されている職場では、積極的に共有することをおすすめします。どのように使って効率化したかを具体的に話せると、チーム全体の生産性向上にもつながります。",
  },
  {
    question: "30日後の次のステップは何ですか？",
    answer:
      "プロンプトテンプレートの改良、2つ目のAIツールの比較検討、または画像生成・データ分析など用途の拡張が次のステップです。AIリブートアカデミーの100日間プログラムでは、体系的にステップアップできます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI 仕事 始め方",
    "AI 最初の30日",
    "ChatGPT 業務活用 初心者",
    "AI 仕事 使い方",
    "生成AI 導入 個人",
    "プロンプト 初心者 仕事",
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

export default function AiFirst30DaysWorkGuideRoute() {
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
          { name: "生成AI最初の30日ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiFirst30DaysWorkGuidePage faqItems={[...faqItems]} />
    </>
  );
}
