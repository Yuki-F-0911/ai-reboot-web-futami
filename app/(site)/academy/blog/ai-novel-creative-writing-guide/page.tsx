import type { Metadata } from "next";
import AiNovelCreativeWritingGuidePage from "@/components/academyLanding/blog/ai-novel-creative-writing-guide/AiNovelCreativeWritingGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "AIで小説・創作文章が書ける！ChatGPT・Claudeを使った創作入門ガイド【2026年版】 | AIリブート";
const pageDescription =
  "ChatGPTとClaudeを使った小説・創作文章の書き方を初心者向けに解説。プロット設計・キャラクター設定・場面描写・セリフ磨き・行き詰まり打開の5場面でのAI活用法、ジャンル別コピーできるプロンプト集（ファンタジー・恋愛・ミステリー）、ChatGPTとClaudeの創作適性比較、著作権の考え方まで丁寧に紹介。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-novel-creative-writing-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T15:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "AIが書いた小説は著作権的に問題ありませんか？",
    answer:
      "現時点（2026年）では、AIが生成したコンテンツの著作権については各国で法整備が進んでいる段階です。重要なのは「あなたがどの程度創作的に関わったか」です。プロンプトを設計して、AIの出力を選択・編集・書き直した場合、その創作的貢献はあなたにあります。「ボタン一発で全文生成してそのまま使う」のではなく、AIの出力を素材として自分で手を加える姿勢が大切です。最新の法的情報は文化庁など公的機関の情報もあわせてご確認ください。",
  },
  {
    question: "プロンプトを英語で書かないといけませんか？",
    answer:
      "いいえ、日本語で問題ありません。ChatGPTもClaudeも日本語の指示に対して日本語で創作を返してくれます。「ファンタジー小説のプロット」「情感豊かな場面描写」など、日本語で具体的に指示するだけで十分です。むしろ日本語のニュアンス（「切ない」「もどかしい」など）を伝えやすいので、日本語で書く方が意図が伝わることも多いです。",
  },
  {
    question: "ChatGPTとClaudeはどちらから始めたらいいですか？",
    answer:
      "まずはどちらでも構いません。プロット設計・アイデア量産にはChatGPTが、繊細な感情描写・文体磨きにはClaudeが向いています。両方とも無料プランで試せるので、一方で試してみて物足りなければもう一方も使ってみるという流れがスムーズです。",
  },
  {
    question: "AIを使うと自分の文章力が落ちませんか？",
    answer:
      "「AIの文章をそのまま使い続ける」なら落ちる可能性があります。しかし、AIの出力を参考にして「自分ならこう書く」と書き直す練習を続けると、むしろ表現の引き出しが増えます。料理の例えで言えば、優れたレシピを参考にしながら自分の料理を作る経験は、料理の腕を上げます。AIの出力を「完成品」ではなく「参考素材」として扱うかどうかで、効果が大きく変わります。",
  },
  {
    question: "小説を書いたことがない初心者でも使えますか？",
    answer:
      "はい、むしろ初心者の方に特におすすめです。「何から書けばいいかわからない」という状態に対して、AIは「どんな話を書きたいですか？」と引き出してくれます。書いたことがない方は、まず「400字の短いシーンを一つ書く」という小さな目標から始めてください。プロット設計・キャラ作りをAIと一緒に行うことで、自分だけでは行き詰まっていた創作の最初の壁を越えやすくなります。",
  },
  {
    question: "AIとの創作で著者名はどう扱えばいいですか？",
    answer:
      "個人の趣味・同人活動の範囲では特にルールはありません。商業出版の場合は出版社や媒体のガイドラインに従うのが安全です。また、AI利用を開示するかどうかは現時点では義務化されていない場合がほとんどですが、「AIを使って書きました」と開示することは読者への誠実な姿勢として好意的に受け取られることも多いです。",
  },
  {
    question: "長編小説（10万字以上）をAIで書くことはできますか？",
    answer:
      "AIは一度の会話で処理できる長さに上限があるため、10万字を一度に作ることは現実的ではありません。しかし「章ごとにAIと一緒に書き進める」「プロット管理はAIに相談しながら自分で書く」というアプローチで、長編の創作支援に活用することは十分可能です。「AIに長編小説を書かせる」より「AIを使いながら自分が長編を書く」という使い方が現実的です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 小説 書き方",
    "ChatGPT 創作",
    "Claude 小説",
    "AI 創作文章",
    "小説 AI 初心者",
    "創作 プロンプト",
    "AI ライティング 趣味",
    "ChatGPT 物語",
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

export default function AiNovelCreativeWritingGuideRoute() {
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
          { name: "AI小説・創作文章入門ガイド2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiNovelCreativeWritingGuidePage faqItems={[...faqItems]} />
    </>
  );
}
