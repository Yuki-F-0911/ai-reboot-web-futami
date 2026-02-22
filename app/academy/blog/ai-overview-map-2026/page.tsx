import type { Metadata } from "next";
import AiOverviewMap2026Page from "@/components/academyLanding/blog/ai-overview-map-2026/AiOverviewMap2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "2026年春のAI全体マップ｜初心者がまず知っておくべきツール・できること・始め方 | AIリブート";
const pageDescription =
  "ChatGPT、Claude、Gemini、AI画像生成...AIツールが多すぎて迷っていませんか？2026年春時点の生成AI全体像を「地図」のように整理。初心者が最初に読むべき決定版ガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-overview-map-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T11:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "生成AIとAIの違いは何ですか？",
    answer:
      "AI（人工知能）は画像認識・音声認識・予測など広い概念です。生成AI（Generative AI）はその中の一分野で、テキスト・画像・音声・動画などのコンテンツを新たに「生成」できるAIを指します。ChatGPT・Claude・Geminiはすべて生成AIの代表例です。",
  },
  {
    question: "ChatGPT・Claude・Geminiのどれを最初に使えばよいですか？",
    answer:
      "迷ったらChatGPTから始めてください。ユーザー数が最多でトラブル情報も多く、日本語の解説記事も豊富です。Claudeは文書の読み込み・長文分析に強く、Geminiはスマホにすでに入っているGoogle製アプリとの連携が得意です。まずChatGPTで感覚を掴んでから、用途に応じて試すのが効率的です。",
  },
  {
    question: "無料プランでも十分使えますか？",
    answer:
      "はい。ChatGPT・Claude・Geminiはいずれも無料プランがあり、文章作成・要約・翻訳・アイデア出しなど基本的な用途は十分カバーできます。毎日ヘビーに使って上限に引っかかるようになってから有料プランを検討するのが堅実です。",
  },
  {
    question: "AI画像生成はどのツールが一番おすすめですか？",
    answer:
      "目的によって異なります。手軽さならChatGPT（DALL-E 3搭載）、リアルな写真風ならMidjourney、無料で高品質なものを作りたいならStable Diffusionのクラウド版（Adobe Firefly等）が選択肢です。まずはChatGPTに「〇〇の画像を作って」と試してみるのが一番簡単です。",
  },
  {
    question: "GPT-5.3 CodexとClaude Opus 4.6・Sonnet 4.6の違いは？",
    answer:
      "GPT-5.3 Codexはコーディング特化モデルでプログラムを書いたり修正するのが得意です。Claude Opus 4.6は最上位の推論・長文分析モデル、Sonnet 4.6はコスト効率と性能のバランスに優れた中間モデルです。文章作成・分析・学習にはClaude、コード作成にはCodexという使い分けが基本です。",
  },
  {
    question: "Grok 3は他のAIと何が違うのですか？",
    answer:
      "Grok 3はX（旧Twitter）のxAIが開発したモデルで、リアルタイムのX上の情報を参照できる点が特徴です。「今起きているニュースについて教えて」などタイムリーな情報収集に向いています。一方、文書分析や長文生成の深さではClaude・GPT-5系に及ばない場面もあります。",
  },
  {
    question: "AIを使うと個人情報は漏れますか？",
    answer:
      "主要ツールはいずれもプライバシー設定から学習利用をオフにできます。氏名・住所・クレジットカード番号など個人を特定する情報は入力しない、というルールを守れば安全に使えます。会社の機密情報も入力しないのが基本です。",
  },
  {
    question: "AIコーディングツールはプログラミング未経験でも使えますか？",
    answer:
      "GitHub Copilot・Cursor・Bolt.newなどは、ある程度のプログラミング知識があると効果を最大化できます。ただしBolt.newやv0は「〇〇なWebサイトを作って」と日本語で指示するだけでHTMLを生成してくれるので、まったくの未経験でも動くものを作ることは可能です。",
  },
  {
    question: "AI動画生成ツールはどれを試せばよいですか？",
    answer:
      "2026年2月時点では、Sora（OpenAI）・Runway Gen-4・Kling AIが主要選択肢です。Soraは自然な映像生成に強く、RunwayはCreative系コンテンツに実績があります。まずは無料トライアルがあるRunwayかKling AIから試すのがおすすめです。",
  },
  {
    question: "最初の1週間で何をすればよいですか？",
    answer:
      "Day 1はChatGPTに登録して挨拶してみる。Day 2は仕事の困りごとを1つ相談する。Day 3はClaudeを試してみる。Day 4はGeminiをGmailと連携させてみる。Day 5は自分の業種でよく使うプロンプトを1つ作る。Day 6・7は使ったツールの感想をメモして、続けて使いたいものを1つ決める——この流れが挫折しにくい最初の1週間です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI 全体像 2026",
    "AI ツール 種類 初心者",
    "ChatGPT Claude 違い",
    "生成AI 何から始める",
    "AI 地図 わかりやすい",
    "AI ツール 比較 2026",
    "生成AI 全体マップ",
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

export default function AiOverviewMap2026Route() {
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
          { name: "2026年春のAI全体マップ", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiOverviewMap2026Page faqItems={[...faqItems]} />
    </>
  );
}
