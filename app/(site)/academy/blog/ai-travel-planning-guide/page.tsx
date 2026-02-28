import type { Metadata } from "next";
import AiTravelPlanningGuidePage from "@/components/academyLanding/blog/ai-travel-planning-guide/AiTravelPlanningGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "AIで旅行計画が変わる！ChatGPT・Geminiを使った旅行準備の完全ガイド | AIリブート";
const pageDescription =
  "ChatGPT・GeminiでAI旅行計画を徹底解説。行き先選び・旅程表作成・持ち物リスト・費用シミュレーション・英会話フレーズ準備まで旅行の全ステップをAIで効率化。国内旅行・海外旅行両対応、今すぐ使えるプロンプト15選付き。AIの情報の注意点も丁寧に解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-travel-planning-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T12:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "旅行計画でAIを使うのは難しいですか？初心者でも使えますか？",
    answer:
      "難しくありません。「〇〇に3日間旅行したい。予算5万円でスケジュールを作って」のように自然な日本語で話しかけるだけで大丈夫です。難しい操作や設定は不要で、普通の会話のように条件を伝えると旅程表・持ち物リスト・現地情報などを返してくれます。初めてのAI活用として旅行計画から始める方も多いです。",
  },
  {
    question: "ChatGPTとGemini、旅行計画にはどちらが向いていますか？",
    answer:
      "両方に向き不向きがあります。ChatGPTは対話を重ねながら旅程を細かく作り込むのが得意で、「前回の条件に加えてこれも考慮して」というやりとりがスムーズです。GeminiはGoogleマップとの連携（Gemini Advanced）が強みで、場所の地図確認まで一連でできます。無料プランで試せるため、両方使って比べてみることをおすすめします。",
  },
  {
    question: "AIが提案した宿やレストランはそのまま予約していいですか？",
    answer:
      "AIが提案した宿・レストラン名はそのまま信用せず、必ずGoogleマップ・食べログ・じゃらん・楽天トラベルなどの実際のサービスで存在と最新情報（営業時間・価格・口コミ）を確認してから予約してください。AIは実在しない店名を自信満々に答える「ハルシネーション」が起きることがあります。AIは「条件に合う宿のイメージ」を提示するのが得意で、具体的な予約はあくまで人間が行うのが原則です。",
  },
  {
    question: "海外旅行のビザ情報をAIで確認しても大丈夫ですか？",
    answer:
      "参考にするのは構いませんが、ビザ・入国要件の最終確認は必ず外務省の海外安全情報（mofa.go.jp/mofaj/toko/visa/）や現地大使館の公式サイトで行ってください。AIの情報はカットオフ（学習データの更新停止日）以降の変更が反映されていないことがあり、古い情報を正しいとして提示するリスクがあります。",
  },
  {
    question: "無料のChatGPTでも旅行計画に十分使えますか？",
    answer:
      "はい、ChatGPTの無料プランでも旅行計画の基本的な用途（スケジュール作成・持ち物リスト・フレーズ集など）には十分対応できます。無料版の制限は1日の利用回数と、最新モデルへのアクセス優先度です。旅行計画は一度のやりとりで完成させるより、少しずつ対話して詰めていく使い方が多いため、無料プランでの上限に達することはあまりありません。",
  },
  {
    question: "旅行計画をAIで作るとき、どのくらい細かく条件を伝えればいいですか？",
    answer:
      "「行き先・日数・予算・出発地・一緒に行く人（子連れ、一人、カップル等）」の5点を伝えると、かなり精度の高い提案が得られます。さらに「車なし／公共交通のみ」「体力的にゆっくりめで」「グルメ重視／観光名所優先」などの好みを追加すると、より自分に合った旅程になります。最初は多少雑でも大丈夫です。「条件が足りない場合は質問してください」と付け加えるとAIから追加質問が来ることもあります。",
  },
  {
    question: "旅行中・現地でもAIを使えますか？",
    answer:
      "はい、旅行中もスマートフォンからChatGPT・GeminiアプリでAIに質問できます。「この電車の乗り換えを教えて」「このメニューは何？（写真）」「近くのコンビニを探して」など、現地でのリアルタイム相談にも使えます。ただし、旅行先でのデータ通信料に注意し、海外では現地SIMや国際ローミングを契約しておきましょう。",
  },
  {
    question: "旅行後にAIを使う方法はありますか？",
    answer:
      "はい、旅行後にも活用できます。①旅の体験をブログ記事や感想文に文章化してもらう ②Instagramのキャプションや旅行記をSNS向けにまとめてもらう ③撮った写真の内容に合ったキャプションを生成してもらう ④次の旅行のための参考情報として今回の旅の良かった点・改善点を整理する——などが実用的な使い方です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 旅行計画",
    "ChatGPT 旅行",
    "Gemini 旅行 計画",
    "旅程表 自動作成",
    "旅行 AI 活用",
    "旅行 ChatGPT プロンプト",
    "海外旅行 AI",
    "国内旅行 AI",
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

export default function AiTravelPlanningGuideRoute() {
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
          { name: "AI旅行計画完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiTravelPlanningGuidePage faqItems={[...faqItems]} />
    </>
  );
}
