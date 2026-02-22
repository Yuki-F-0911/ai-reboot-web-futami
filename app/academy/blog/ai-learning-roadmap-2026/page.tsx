import type { Metadata } from "next";
import AiLearningRoadmapPage from "@/components/academyLanding/blog/ai-learning-roadmap-2026/AiLearningRoadmapPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI学習ロードマップ2026：ゼロから100日間で仕事に使えるようになるまでの完全地図 | AIリブート";
const pageDescription =
  "AI学習を始めたいのに何から手をつければいいかわからない方へ。0から100日間で仕事に活用できるレベルに達するための段階的ロードマップを完全公開。挫折しない学び方の秘訣と、各フェーズの具体的な目標・行動を解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-learning-roadmap-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T15:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "AI学習は100日で本当に実務で使えるようになりますか？",
    answer:
      "はい、可能です。ただし「使える」の定義が重要です。100日間で目指すのは「毎日AIを使って仕事の一部を効率化できる状態」です。週5時間削減できるタスクを1つ見つけ、自分のワークフローにAIを組み込むことは、多くの方が100日以内に達成しています。「AIを完全にマスターする」ではなく「AIと一緒に仕事ができる」状態を目標にすれば、現実的に達成できます。",
  },
  {
    question: "毎日どのくらいの時間をAI学習に使えばいいですか？",
    answer:
      "Phase 1（1〜30日）は1日15〜30分が目安です。大切なのは「毎日触れること」で、1回の量ではありません。Phase 2以降は仕事の中でAIを使う時間が増えるため、「学習時間」とは区別しにくくなります。週末にまとめて2〜3時間を使い、平日は仕事のついでにAIを試す、という進め方が多くの方に合っています。",
  },
  {
    question: "プログラミングの知識がなくても大丈夫ですか？",
    answer:
      "まったく問題ありません。このロードマップが想定する「仕事に使えるAI活用」は、プログラミング不要のツール（ChatGPT・Claude・Gemini等）が中心です。文章作成・要約・翻訳・アイデア出し・データ整理といった業務でAIを活用するには、日本語で話しかけるスキルだけで十分です。",
  },
  {
    question: "どのAIツールから始めるのがいいですか？",
    answer:
      "ChatGPTから始めることを推奨します。理由は、ユーザー数が最多のため参考情報が豊富、日本語対応が安定している、無料プランでも十分な機能が使えるの3点です。1〜2週間使い慣れたら、ClaudeやGeminiも試してみましょう。ツールに慣れれば慣れるほど、使い分けができるようになります。",
  },
  {
    question: "スマホだけでAIを学ぶことはできますか？",
    answer:
      "Phase 1（触れる習慣づくり）はスマホだけで十分進められます。ChatGPT・Claude・GeminiはいずれもiOS・Androidアプリがあり、通勤時間や休憩時間に練習できます。ただしPhase 2以降の「仕事への活用」では、業務で使うPCやソフトウェアとの連携が重要になるため、パソコンも組み合わせて使うことをおすすめします。",
  },
  {
    question: "会社でAIを使う場合、情報漏洩は大丈夫ですか？",
    answer:
      "会社での利用前に、必ず会社のAI利用ガイドラインを確認してください。ガイドラインがない場合は「顧客情報・社外秘情報・個人情報は入力しない」を徹底すれば安全に使えます。ChatGPT Teamプラン等の法人向けプランでは、入力データが学習に使われない契約も選べます。",
  },
  {
    question: "自己流で学ぶのとスクールで学ぶのはどちらが早いですか？",
    answer:
      "目的と状況によります。「まずAIを触ってみる」だけなら自己流で十分です。ただし「仕事で確実に使えるようになる」「短期間でスキルを体系化したい」という場合は、伴走型のプログラムのほうが3〜5倍速く進む傾向があります。AIリブートアカデミーの100日プログラムでは、迷う時間をなくし、確実に実務活用できる状態に導きます。",
  },
  {
    question: "途中で挫折しないためのコツはありますか？",
    answer:
      "最も効果的な方法は「仕事のどこかで使う」ことを毎日の習慣にすることです。「AI学習」と構えるより、「明日の会議メモをAIにまとめてもらおう」という感覚で始めると続きやすいです。また、同じ目標を持つ仲間やコミュニティに参加することで、孤独感がなくなり継続率が大幅に上がります。",
  },
  {
    question: "Phase 1〜4を全部やるとどのくらいの費用がかかりますか？",
    answer:
      "自己流の場合、Phase 1〜2はChatGPT無料プランだけで進められるため費用ゼロ。Phase 3以降でChatGPT Plus（月額3,000円程度）を使い始めると便利ですが必須ではありません。経産省リスキリング補助金を活用すれば、体系的なスクール学習を実質0円に近い費用で受けることも可能です。",
  },
  {
    question: "100日後、どんな仕事でAIを活用できるようになりますか？",
    answer:
      "具体的には、①メール・ビジネス文書の下書きを3分以内に作成、②会議の議事録を音声から自動生成、③資料・企画書のアウトライン作成、④データの要約・分析補助、⑤アイデアブレインストーミング——これらを日常的にこなせるようになります。業種・職種によって活用領域は異なりますが、「週5時間以上削減」を実感している方がほとんどです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI学習 ロードマップ",
    "AI 勉強 方法 初心者",
    "生成AI 学習 計画",
    "ChatGPT 使いこなす 期間",
    "AI 学習 スケジュール",
    "AI 初心者 何から始める",
    "生成AI マスター 方法 2026",
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

export default function AiLearningRoadmapRoute() {
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
          { name: "AI学習ロードマップ2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiLearningRoadmapPage faqItems={[...faqItems]} />
    </>
  );
}
