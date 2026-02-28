import type { Metadata } from "next";
import AiJobFutureCareerGuidePage from "@/components/academyLanding/blog/ai-job-future-career-guide/AiJobFutureCareerGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIに仕事を奪われる？不安の正体と、今日から始めるAI時代のキャリア戦略【2026年版】 | AIリブート";
const pageDescription =
  "AIに仕事を奪われる不安を、職種別データと最新動向で冷静に整理。影響度マトリクスと3ステップの行動計画で、今の仕事を強みに変える方法を解説します。まずは今日できる1アクションを実行し、転職と現職の判断軸を整えましょう。具体例を見ながら判断できます。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-job-future-career-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T21:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "AIに仕事を奪われる確率はどれくらいですか？",
    answer:
      "野村総合研究所とオックスフォード大学の共同研究（2015年）では日本の労働人口の約49%が技術的にはAIで代替可能と試算されました。ただしこれは「技術的に可能」という意味であり、実際にすべて置き換わるわけではありません。2026年現在、ILOの分析では「完全に自動化される職業」より「業務の一部がAIに置き換わる職業」の方が圧倒的に多いとされています。重要なのは確率ではなく、あなたの仕事のどの部分がAIに任せられ、どの部分に人間の価値が残るかを見極めることです。",
  },
  {
    question: "事務職はAIで不要になりますか？",
    answer:
      "事務職が完全になくなることは当面ありません。ただしデータ入力・書類作成・スケジュール管理など定型業務の多くはAIで効率化が進んでいます。逆に「イレギュラーな判断」「社内外の調整」「気配りを要するコミュニケーション」は人間が担い続けます。事務職の方こそAIを味方につけることで、ルーティンワークを減らし、より付加価値の高い業務に時間を使えるようになります。",
  },
  {
    question: "AIの勉強は何から始めればいいですか？",
    answer:
      "まずはChatGPT・Claude・Geminiの無料プランを実際に使ってみることをおすすめします。本や講座で理論を学ぶよりも、日常業務で「メールの下書き」「議事録の要約」「アイデア出し」など具体的なタスクをAIに任せてみる実践が最も効果的です。操作に慣れてきたら、プロンプトの書き方や業務への組み込み方を体系的に学ぶステップに進みましょう。",
  },
  {
    question: "AI時代に有利な資格はありますか？",
    answer:
      "2026年現在、AI関連の代表的な資格にはG検定（ジェネラリスト検定）、AI実装検定、ITパスポートなどがあります。ただし資格そのものよりも「実際にAIを使って成果を出した経験」の方が市場価値は高いです。資格は体系的な知識の整理には有効ですが、まずはAIを業務に活用する実践を優先し、知識を深めたくなったら資格学習を検討するのが効率的な順序です。",
  },
  {
    question: "プログラミングは覚えるべきですか？",
    answer:
      "必須ではありません。ChatGPT・Claude・Geminiはすべて日本語で指示を出せるため、プログラミング知識がなくてもビジネスでの活用は十分可能です。ただしプログラミングの基礎知識があると、AIとの対話精度が上がったり、業務自動化の幅が広がったりするメリットはあります。「まずAIを使いこなす → 必要を感じたらプログラミングも学ぶ」の順序がおすすめです。",
  },
  {
    question: "40代・50代からでもAIキャリアの転換は間に合いますか？",
    answer:
      "十分に間に合います。むしろ40代・50代は業界知識や業務経験が豊富なため、AIと組み合わせた時の成果が出やすいのが強みです。AI活用に必要なのはITスキルではなく「自分の業務のどこにAIを活かせるか」という視点であり、これは業務経験が長い方ほど的確に見極められます。年齢を理由に躊躇する必要はまったくありません。",
  },
  {
    question: "AIの導入で給料は下がりますか？",
    answer:
      "AI導入だけを理由に給料が下がることは一般的ではありません。むしろAIを活用して生産性を高められる人材は、社内外で評価が上がる傾向にあります。リクルートの2025年調査でも、AI活用スキルを持つ人材の求人倍率は上昇傾向です。懸念すべきは「AIの登場」ではなく「AIを使えないまま生産性で差がつくこと」です。",
  },
  {
    question: "転職すべきですか？それとも今の会社でAIスキルを磨くべきですか？",
    answer:
      "まずは今の職場でAI活用を始めることをおすすめします。理由は2つ。第一に、あなたの業界知識×AIが最も成果を出しやすい組み合わせだからです。第二に、AI活用の実績を作ってからの方が、転職する場合もより良い条件で動けるからです。「AIを使える人材」として社内で認知されることは、転職市場でも大きなアドバンテージになります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 仕事 奪われる",
    "AI時代 キャリア",
    "生成AI 仕事 なくなる",
    "AI 転職 不安",
    "ChatGPT 仕事への影響",
    "AI時代 キャリア戦略",
    "AI 仕事 将来",
    "AI 職種 影響",
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

export default function AiJobFutureCareerGuideRoute() {
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
          { name: "AIに仕事を奪われる？AI時代のキャリア戦略", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiJobFutureCareerGuidePage faqItems={[...faqItems]} />
    </>
  );
}
