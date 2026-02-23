import type { Metadata } from "next";
import AiTimeSavingCalculationPage from "@/components/academyLanding/blog/ai-time-saving-calculation/AiTimeSavingCalculationPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIは本当に時間を節約してくれるのか：会社員・主婦・フリーランス別に具体的な数字で試算してみた【2026年版】 | AIリブート";
const pageDescription =
  "「AIで仕事が速くなる」は本当？会社員・主婦・フリーランスそれぞれのシナリオで、AIを使った場合とそうでない場合の時間を具体的に試算しました。数字で見るAIの価値をお伝えします。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-time-saving-calculation";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-24T10:00:00+09:00";
const modifiedTime = "2026-02-24";

const faqItems = [
  {
    question: "試算の数字はどこから来ていますか？実際の調査結果ですか？",
    answer:
      "正直にお答えします。この記事の試算は、実際のAI活用者の体験談や一般的な作業効率の変化を参考に作成した「シナリオベースの試算」です。公的な調査データに基づくものではありません。個人差・業種差・熟練度によって実際の効果は大きく異なります。「こういう使い方なら、このくらい節約できる可能性がある」という目安としてご参照ください。あなた自身が1〜2週間試してみることが、最も正確な答えを出す方法です。",
  },
  {
    question: "私の仕事には当てはまらない気がします。もっと具体的に教えてもらえますか？",
    answer:
      "ご自身の仕事に当てはめた試算は、AIに直接聞くのが最も早いです。ChatGPTやClaudeに「私は〇〇の仕事をしています。週の主な作業は△△と□□です。AIを使うとどの作業でどのくらい時間を節約できますか？」と入力してみてください。あなたの仕事内容に合わせた具体的な提案をしてもらえます。また、AIリブートアカデミーのLINE相談でも、職種別のAI活用アドバイスを提供しています。",
  },
  {
    question: "AIを使い始めた最初の1ヶ月は効果が出ないですか？",
    answer:
      "最初の1ヶ月は「学習曲線の谷」があります。プロンプトの書き方に慣れるまで、逆に時間がかかると感じることもあります。これは正常な経過です。「AIに何を頼めばいいか」「どう指示すれば意図通りの結果が出るか」を身につけるのに1〜4週間かかるのが一般的です。2ヶ月目以降から本格的な時間節約が始まる方が多いです。焦らず「投資期間」として最初の1ヶ月を捉えることをおすすめします。",
  },
  {
    question: "スマホだけで使っても同じくらい節約できますか？",
    answer:
      "スマホだけでも多くの場面で有効ですが、PCと比べると入力のしやすさや画面の見やすさで差が出ます。特に長文の下書き作成や、複数のウィンドウを行き来しながら作業する場合はPCの方が効率的です。ただし、「献立を考える」「メールの文面を確認する」「アイデアを出す」といった場面ではスマホだけでも十分効果があります。まずはスマホで試してみて、必要に応じてPCでも使うようにするのが自然な流れです。",
  },
  {
    question: "節約した時間を何に使えばいいですか？",
    answer:
      "この質問、実は非常に重要です。節約した時間の「使い道」が決まっていないと、なんとなく消費されてしまいます。おすすめは3つです：①より高度な仕事・創造的な作業に使う（AIが苦手な領域への投資）、②新しいスキルの学習に使う（AI活用スキル向上を含む）、③休息・趣味・家族との時間に使う（ウェルビーイングの向上）。どれが正解というわけではありませんが、「節約できた時間で何をするか」を先に決めておくと、AI活用のモチベーションも維持しやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 時間節約 効果",
    "ChatGPT 時短 どのくらい",
    "AI 仕事 効率化 時間",
    "生成AI コスパ",
    "ChatGPT 有料 元が取れる",
    "AI 業務効率化 数字",
    "生成AI ROI 個人",
    "AI 節約時間 試算",
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

export default function AiTimeSavingCalculationRoute() {
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
          { name: "AIは本当に時間を節約してくれるのか：具体的な数字で試算", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiTimeSavingCalculationPage faqItems={[...faqItems]} />
    </>
  );
}
