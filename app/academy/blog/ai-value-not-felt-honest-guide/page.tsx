import type { Metadata } from "next";
import AiValueNotFeltHonestGuidePage from "@/components/academyLanding/blog/ai-value-not-felt-honest-guide/AiValueNotFeltHonestGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIを試したけど、正直よくわからなかった人へ：本当の価値に気づく3つの転換点 | AIリブート";
const pageDescription =
  "ChatGPTを触ってみたけど「だからなに？」と感じた経験はありますか？AI学習が続かない本当の理由は「使い方を知らないまま試した」こと。見落としていた3つの転換点と、AIが急に役立つようになる瞬間を正直に解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-value-not-felt-honest-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T12:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "ChatGPTを試したけどたいしたことないと思うのは普通ですか？",
    answer:
      "はい、とても普通の反応です。ChatGPTを初めて使って「これだけ？」と感じる人は多くいます。理由の多くは「期待値が高すぎた」か「使い方が検索と同じだった」こと。短い一言で試すと答えも短く、価値が見えにくいのです。具体的な悩みをそのまま打ち込んで試してみると、印象が変わることがほとんどです。",
  },
  {
    question: "AIを使いこなすのに才能や技術知識が必要ですか？",
    answer:
      "まったく必要ありません。ChatGPTもClaudeもGeminiも、日本語で話しかけるだけで動きます。プログラミング知識や英語力も不要です。大切なのは「何に困っているか」を具体的に言葉にする力だけ。これは日常のコミュニケーションと同じスキルです。",
  },
  {
    question: "プロンプトの書き方に決まりはありますか？",
    answer:
      "決まったルールはありませんが、「誰が・何のために・どんなアウトプットが欲しいか」を含めると精度が上がります。たとえば「メールを書いて」より「40代会社員が、3年付き合いのある取引先に、予算不足を理由に断るメールを書いてほしい。柔らかい表現で150字程度」のほうが、使えるものが返ってきます。慣れるまでは「もっと短く」「もっとカジュアルに」と追加指示を重ねればOKです。",
  },
  {
    question: "どのくらい使えば慣れてきますか？",
    answer:
      "1〜2週間、毎日1回使うだけで「あ、これは使える」という場面が見えてきます。最初の1週間は好奇心で試す期間、2週目で実際の仕事や悩みに使ってみる期間と思ってください。1ヶ月継続できた人は、ほぼ全員が「生活の一部になった」と感じています。",
  },
  {
    question: "無料版のChatGPTでも価値を感じられますか？",
    answer:
      "十分感じられます。無料版のChatGPT（2026年2月時点）でも文章作成・要約・翻訳・アイデア出しの基本機能が使えます。まずは無料で試して、「もっと使いたい」と感じてから有料プランを検討するのが賢明です。",
  },
  {
    question: "使い道がないと思う場合はどうすれば？",
    answer:
      "「今日の仕事で一番面倒だったこと」を思い出してみてください。メールの返信、議事録のまとめ、資料の下書き、調べ物——これらはすべてAIが得意とする作業です。「面倒だな」と思った瞬間こそ、AIに頼むサインです。具体的な困りごとから始めると、使い道は自然に見えてきます。",
  },
  {
    question: "AIって嘘をつくと聞きましたが大丈夫ですか？",
    answer:
      "AIが間違った情報を出すこと（ハルシネーション）は起こり得ます。ただし最新モデルでは大幅に改善されており、特に「要約・整理・下書き作成」のような作業は精度が高いです。重要な数字や固有名詞は公式サイトで確認する習慣をつければ、日常的な用途では十分安全に使えます。",
  },
  {
    question: "スマホだけで使えますか？",
    answer:
      "はい、使えます。ChatGPT・Claude・GeminiはいずれもスマホアプリとWebブラウザの両方に対応しています。通勤中や移動中でもLINE感覚で使えます。",
  },
  {
    question: "英語が得意でないと使いにくいですか？",
    answer:
      "まったく問題ありません。ChatGPT・Claude・Geminiはいずれも日本語に完全対応しており、日本語で質問すれば日本語で回答が返ります。英語のほうが精度が高い場合もありますが、日本語での利用で実用上の不便はほとんどありません。",
  },
  {
    question: "AIを教えてくれる場所はどこにありますか？",
    answer:
      "YouTubeの無料動画、書籍、オンライン学習サービスなどがあります。ただし独学は情報が多すぎて迷子になりがちです。AIリブートアカデミーのような体系的なプログラムに参加すると、仲間と一緒に段階的に学べるため、継続率が大幅に上がります。経産省リスキリング補助金の対象なので、費用面も相談してみてください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT 使い方 わからない",
    "AI 価値 感じない",
    "ChatGPT つまらない",
    "AI 使いこなせない 初心者",
    "ChatGPT 使いこなし方",
    "AI 始め方 2026",
    "生成AI 初心者 価値",
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

export default function AiValueNotFeltHonestGuideRoute() {
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
          { name: "AIを試したけど価値がわからなかった人へ", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiValueNotFeltHonestGuidePage faqItems={[...faqItems]} />
    </>
  );
}
