import type { Metadata } from "next";
import ChatgptFreeVsPaid2026Page from "@/components/academyLanding/blog/chatgpt-free-vs-paid-2026/ChatgptFreeVsPaid2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "ChatGPTに課金すべき？無料と有料（Plus/Pro）の違いを正直に解説【2026年版】 | AIリブート";
const pageDescription =
  "ChatGPTの無料版と有料版（Plus月額20ドル/Pro月額200ドル）の違いを2026年最新情報で正直に比較。「課金する価値があるか」を使い方別に判断できるよう整理しました。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-free-vs-paid-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-24T12:00:00+09:00";
const modifiedTime = "2026-02-24";

const faqItems = [
  {
    question: "ChatGPT Plusはいつでも解約できますか？",
    answer:
      "はい、いつでも解約できます。ChatGPT Plusはサブスクリプション制で、設定画面から月単位でキャンセル可能です。解約後は現在の請求期間の終了まで有料機能が使えます。「試しに1ヶ月だけ使ってみる」という使い方も可能ですので、気軽に始めてみてください。",
  },
  {
    question: "無料版から有料版に変えると、過去の会話はどうなりますか？",
    answer:
      "過去の会話はすべてそのまま保持されます。有料版に切り替えても会話履歴は消えません。逆に有料版から無料版に戻した場合も、過去の会話は引き続き閲覧できます。ただし、有料版で作成したカスタムGPTsは無料版では利用できなくなります（データ自体は保存されています）。",
  },
  {
    question: "学生・主婦でも課金する価値はありますか？",
    answer:
      "使い方次第です。学生であれば、レポートや論文の下書き・参考文献調査・語学学習など、毎日使う場面があれば月額20ドルの元は十分取れます。主婦の方も、献立管理・子どもの宿題サポート・副業の文章作成などで週に何度も使うなら価値があります。まず1ヶ月間無料版を本気で使い倒してみて、「もっと使いたい」「制限に引っかかる」と感じてから課金を検討するのが賢い順番です。",
  },
  {
    question: "ChatGPT PlusとClaude Proはどちらがいいですか？",
    answer:
      "用途によって異なります。ChatGPT Plusは画像生成（DALL-E）、Webブラウジング、カスタムGPTsなど機能の幅広さが強みです。Claude Pro（Anthropicの有料版）は長い文書の読み込み・分析や、丁寧で一貫性のある長文生成が得意です。「どっちが上か」ではなく「何に使いたいか」で選ぶのがポイントです。迷っているなら、まずどちらか一方の無料版を試してから判断することをおすすめします。",
  },
  {
    question: "GPT-o3は無料で使えますか？",
    answer:
      "2026年2月時点では、GPT-o3（高度推論モデル）は基本的にPlus以上のプランでの利用が前提です。無料版でも一部機能にアクセスできる場合がありますが、利用回数に厳しい制限があります。数学・コーディング・複雑な論理問題など「じっくり考えてほしい」タスクにo3系モデルを使いたい場合は、Plusへの課金を検討してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT 課金 すべき",
    "ChatGPT 無料 有料 違い",
    "ChatGPT Plus 料金",
    "ChatGPT 月額 元が取れる",
    "ChatGPT Plus 使い方",
    "ChatGPT 無料版 限界",
    "ChatGPT 2026",
    "GPT-4o 無料 制限",
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

export default function ChatgptFreeVsPaid2026Route() {
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
          { name: "ChatGPTに課金すべき？無料と有料の違いを正直に解説", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ChatgptFreeVsPaid2026Page faqItems={[...faqItems]} />
    </>
  );
}
