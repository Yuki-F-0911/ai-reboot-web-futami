import type { Metadata } from "next";
import AiLearner3monthChallengesPage from "@/components/academyLanding/blog/ai-learner-3month-challenges/AiLearner3monthChallengesPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIを使い始めた人が3ヶ月後に直面する5つの壁と、それぞれの乗り越え方【2026年版】 | AIリブート";
const pageDescription =
  "AI学習を始めて3ヶ月、あの新鮮な興奮が薄れてきた...そんなあなたへ。「飽き」「期待はずれ」「孤独感」「上達感のなさ」など、多くの人が3ヶ月後に直面するリアルな壁を正直に解説し、それぞれの乗り越え方を提示します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-learner-3month-challenges";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T16:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "3ヶ月後に辞めてしまったら取り返しがつきませんか？",
    answer:
      "まったく取り返しがつかないということはありません。AIツール自体は今後もあり続けますし、一度身につけた感覚は再開すれば戻ります。ただ、「続ける習慣」があると蓄積の速度が大きく違います。辞めてしまった場合も、再開のハードルは最初より低いので、「今日から再スタート」と決めるだけで十分です。",
  },
  {
    question: "AIは結局、自分のような使い方では意味がないのでしょうか？",
    answer:
      "そんなことはありません。AIは万能ではありませんが、「大げさな使い方」しか効果がないわけでもありません。メールの下書き、調べ物のまとめ、議事録の整理——地味な使い方でも、積み重なると週に1〜2時間の節約になります。「自分には関係ない」と感じたとき、実はそれが「まだ正しい使い方を見つけていないだけ」のサインであることが多いです。",
  },
  {
    question: "周りが誰もAIを使っていない職場です。どうすればいいですか？",
    answer:
      "職場の同僚に話す必要はありません。職場外のオンラインコミュニティや学習グループを活用するのが現実的です。AIリブートのLINEコミュニティや、SNS上のAI活用グループは、「職場では話せない」という方の参加が多いです。同じ状況の人と繋がるだけで、孤独感はかなり和らぎます。",
  },
  {
    question: "毎日使わないといけませんか？週2〜3回でも大丈夫？",
    answer:
      "週2〜3回でも十分に習慣化できます。大切なのは「頻度」より「具体的な使い場面があるか」です。「毎日使おう」という曖昧な目標より、「火曜と木曜の会議準備にAIを使う」という具体的なトリガーのほうが、継続率が高くなります。",
  },
  {
    question: "AIを使いこなせたと感じるのはいつですか？",
    answer:
      "「使いこなせた」という明確な瞬間はありません。ただ、多くの人が「あ、自分はAIを使えるようになった」と感じるのは、「AIなしではやっていなかった仕事を、AIのおかげでやり遂げた」という体験が1つ生まれたときです。それは3ヶ月後かもしれませんし、6ヶ月後かもしれません。「使いこなせた基準」を高く設定しすぎず、小さな達成を積み重ねることが大事です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 学習 続かない",
    "ChatGPT 飽きた",
    "AI 挫折 乗り越え",
    "生成AI 続け方",
    "AI 使いこなせない",
    "ChatGPT マンネリ",
    "AI 学習 3ヶ月",
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

export default function AiLearner3monthChallengesRoute() {
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
          { name: "AIを使い始めた人が3ヶ月後に直面する5つの壁", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiLearner3monthChallengesPage faqItems={[...faqItems]} />
    </>
  );
}
