import type { Metadata } from "next";
import AiPracticalUsesSpring2026Page from "@/components/academyLanding/blog/ai-practical-uses-spring-2026/AiPracticalUsesSpring2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "今すぐ試せる！生成AIが仕事と日常で本当に役立った使い方15選【2026年春版】 | AIリブート";
const pageDescription =
  "ChatGPT・Claude・Geminiを使って実際に業務が楽になった15の活用例を紹介。仕事のメール・会議・資料作成から日常の調べ物まで、初心者でも今日から試せる具体的な使い方をプロンプト例つきで解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-practical-uses-spring-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T12:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "ChatGPT・Claude・Geminiのどれから始めればいいですか？",
    answer:
      "迷ったらChatGPTから始めるのが無難です。無料プランで主要機能を試せ、情報量も多いため困ったときに調べやすいです。Googleのサービスを日常的に使っているならGeminiも選択肢になります。いずれも無料で始められるため、1つ試してから比較してください。",
  },
  {
    question: "プロンプトを考えるのが大変で続きません。どうすればいいですか？",
    answer:
      "この記事のプロンプト例をそのままコピーして、部分的に自分の状況に書き換えるだけで十分です。「0から作る」必要はありません。同じプロンプトを繰り返し使うことで、自分なりのカスタマイズが自然に生まれます。",
  },
  {
    question: "AIに入力した情報は外部に漏れますか？",
    answer:
      "ChatGPTは設定で「学習への利用をオフ」にすることで入力内容のモデル学習への使用を防げます（2026年2月時点）。ただし、会社の機密情報・顧客情報・個人情報は入力しないことが原則です。社内規程のAI利用ガイドラインを確認してから使いましょう。",
  },
  {
    question: "AIの回答が間違っていることがあると聞きました。どう対処すればいいですか？",
    answer:
      "AIは自信を持って間違いを述べることがあります（ハルシネーション）。特に固有名詞・数値・日付・最新情報は要注意です。重要な判断に使う場合は、必ず公式サイトや一次情報で裏付けを取ってください。AIの回答は「初稿・参考情報」として扱うのが基本です。",
  },
  {
    question: "無料版でも15の使い方はすべて試せますか？",
    answer:
      "この記事で紹介した15選のほとんどは、ChatGPT・Claude・Geminiの無料プランで試せます。ただし、無料プランは1日の使用回数や文字数に制限がある場合があります。本格的に業務で使い始めたら、有料プランへの移行を検討するのがおすすめです。",
  },
  {
    question: "AIを使うと「自分で考える力」が衰えませんか？",
    answer:
      "使い方次第です。AIに「答えを出してもらう」のではなく、「叩き台を作ってもらい、自分で判断・修正する」という使い方をすれば、思考力の低下は起きにくいです。この記事で紹介した「壁打ち（No.8）」や「コーチング（No.12）」の使い方は、むしろ自分の思考を深める使い方です。",
  },
  {
    question: "15個を全部試すのに、どれくらい時間がかかりますか？",
    answer:
      "1つの活用例を試すのに必要な時間は5〜15分程度です。全部をいきなりやろうとする必要はありません。今の仕事で「これ時間かかるな」と感じた場面に1つ当てはめてみることから始めてください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI 使い方 仕事 具体例",
    "ChatGPT 活用法 初心者",
    "AI 業務効率化 例",
    "生成AI 活用術 2026",
    "ChatGPT 使い方 おすすめ",
    "AI 日常 活用",
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
    publishedTime: publishedTime,
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

export default function AiPracticalUsesSpring2026Route() {
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
          { name: "生成AIの仕事に役立つ使い方15選", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiPracticalUsesSpring2026Page faqItems={[...faqItems]} />
    </>
  );
}
