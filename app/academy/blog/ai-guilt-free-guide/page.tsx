import type { Metadata } from "next";
import AiGuiltFreeGuidePage from "@/components/academyLanding/blog/ai-guilt-free-guide/AiGuiltFreeGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIを使うと「ズルい気がする」あなたへ：罪悪感の正体と、AI時代の正しい向き合い方【2026年版】 | AIリブート";
const pageDescription =
  "「AIに文章を書いてもらうのはズルくないか？」「考える力が落ちそう...」そんな罪悪感を持ちながらAIを使っていませんか？その感情の正体と、健全なAIとの向き合い方を丁寧に解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-guilt-free-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T18:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "職場でAIが禁止されているのに使ってしまった場合は？",
    answer:
      "まず、職場のAI利用ポリシーを確認してください。禁止の理由が情報漏えいリスクであれば、入力内容の種類によって問題の大小が変わります。機密情報を入力していない場合でも、ポリシー違反であることに変わりありません。上司や情報システム部門に相談し、適切なルールの下で使える環境を整えることをおすすめします。「バレなければ良い」ではなく、組織のルール整備を促す側に回ることが、AI時代の誠実な姿勢です。",
  },
  {
    question: "AIで書いた文章を自分の作品として出すのは問題ですか？",
    answer:
      "文脈によります。学校の課題や試験で禁止されている場合は、明確なルール違反です。仕事や個人の創作物については、各組織・場のルールに従うことが基本です。重要なのは「AIが書いた」か「自分が書いた」かより、「自分の意図・判断・責任が入っているか」という点です。AIが出した文章をそのままコピーするのと、AIの提案を叩き台にして自分の言葉で書き直すのでは、まったく意味が異なります。",
  },
  {
    question: "AIへの罪悪感がなくなったら危ない、ということはありますか？",
    answer:
      "罪悪感そのものよりも、「何が問題で何が問題でないか」を考え続ける習慣の方が大切です。罪悪感がゼロになることは問題ではありませんが、「AIを使うことへの無批判な受け入れ」になると危うい。自分の判断をAIに委ねすぎず、アウトプットへの責任を持ち続けることが、健全な使い方の本質です。",
  },
  {
    question: "子供の学習にAIを使うのは良くないですか？",
    answer:
      "使い方次第です。答えを直接出させてコピーするのは、学習の機会を奪います。「なぜそうなるの？」「他の方法はある？」とAIと対話しながら考える使い方なら、むしろ思考を深める道具になります。子供が問いを立て、AIを調べる道具として使い、自分の言葉でまとめる——このプロセスが習慣になれば、AI時代に必要な思考力が育ちます。",
  },
  {
    question: "AIを使いながらも自分らしさを保つコツは？",
    answer:
      "「自分が何を言いたいか」を最初に決めてからAIに頼む習慣をつけることです。先にAIに丸投げして返ってきたものを使うのではなく、自分のメッセージ・意図・視点をまず持ち、AIにはその表現や整理を手伝わせる。AIが出した表現の中に「これは自分の言葉じゃない」と感じる部分は書き直す。この往復の中に、あなたらしさが残ります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 罪悪感",
    "ChatGPT ズルい",
    "AI 使うの 抵抗ある",
    "AI 依存 怖い",
    "AI 思考力 低下",
    "生成AI 使い方 倫理",
    "AI 向き合い方",
    "AI 使いこなし 罪悪感",
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

export default function AiGuiltFreeGuideRoute() {
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
          { name: "AIを使うと「ズルい気がする」あなたへ", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiGuiltFreeGuidePage faqItems={[...faqItems]} />
    </>
  );
}
