import type { Metadata } from "next";
import AiBookReadingGuidePage from "@/components/academyLanding/blog/ai-book-reading-guide/AiBookReadingGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "AIで読書が変わる！ChatGPT・Claudeを使った本の要約・理解・アウトプット活用術【2026年版】 | AIリブート";
const pageDescription =
  "ChatGPT・ClaudeをAI読書パートナーとして活用する6つの方法を解説。本のタイトルだけで概要把握・PDFをClaudeで要約・読んだ内容をAIに説明してフィードバックをもらうラバーダック法・疑問を深掘り・仕事への活用アイデア・読書感想文作成まで。コピペで使えるプロンプト例付き。Claude vs ChatGPT読書活用比較・著作権の注意点も丁寧に解説。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-book-reading-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T18:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "ChatGPTやClaudeは本の内容を正確に知っているの？",
    answer:
      "有名な書籍・古典・ロングセラーについては高精度で回答できます。ただし発売直後の新刊・マイナーな専門書・最新の研究については情報が不正確・古いケースがあります。AIの要約は「原文への入口」として活用し、重要な情報は必ず原文と照合してください。",
  },
  {
    question: "本のPDFをAIに読み込ませることは著作権上問題ない？",
    answer:
      "個人の学習・研究目的でのAI活用は、現時点（2026年2月）では一般的にグレーゾーンとされていますが、多くの場合は問題ないとされています。ただし、要約内容をSNSで公開したり、商業利用したりする場合は著作権侵害にあたる可能性があります。また、全文をそのまま入力するより、理解したい箇所を抜粋して使う方がリスクが低くなります。",
  },
  {
    question: "ClaudeとChatGPT、読書活用に向いているのはどちら？",
    answer:
      "PDF要約・長文処理が目的ならClaudeが最強です。ClaudeはPDFを直接アップロードでき、長い文章の処理精度が高いです。一方、日本語での感想文作成・最新書評の検索（ChatGPT Plusのウェブ検索機能）・読書記録のアウトプットはChatGPTも優れています。両方とも無料プランで始められるので、用途に合わせて使い分けるのがおすすめです。",
  },
  {
    question: "AIを使うと本を読まなくなってしまうのでは？",
    answer:
      "むしろ逆の効果が起きやすいです。AIで本の概要を知ることで「もっと詳しく読みたい」という欲求が高まり、読書量が増えたという声が多くあります。AIは「本の代替」ではなく「本への案内人」です。AIの要約で興味を持ち、原文で深く味わう——この組み合わせが読書をより豊かにします。",
  },
  {
    question: "読書記録をAIと一緒に管理する良い方法は？",
    answer:
      "ChatGPTのプロジェクト機能やClaudeのプロジェクト機能を使うと、読書履歴・感想・気づきを継続的に管理できます。「読んだ本：〇〇、学んだこと：〇〇」と記録を積み上げていくと、数ヶ月後に「自分の読書の傾向」や「繰り返し登場するテーマ」をAIが分析してくれます。NotionやEvernoteと組み合わせる使い方も効果的です。",
  },
  {
    question: "難しい本（専門書・学術書）の理解にAIは役立つ？",
    answer:
      "非常に効果的です。「この概念を中学生にも分かる言葉で説明して」「この数式の意味を平易な日本語で」「この研究の実生活での意義は？」と聞くことで、難解な内容への理解の壁を越えられます。専門書を読む前に「この本の前提知識として理解すべきことは？」と聞いてから読み始めるだけで、理解速度が格段に上がります。",
  },
  {
    question: "スマホだけでAI読書活用はできる？",
    answer:
      "できます。ChatGPTアプリ・Claude.aiアプリはiOS・Android両方で利用できます。電車の中でAIに質問・スマホで読んだKindle本の気になる箇所をコピーしてAIに貼り付け、など、スマホだけで完結する活用法も多数あります。PDF要約はスマホからでも一部対応していますが、画面が広いPC・タブレットの方が操作しやすいです。",
  },
  {
    question: "AIに感想文を書いてもらうのは「ズル」じゃない？",
    answer:
      "AIが書いた文章をそのまま提出する（学校のレポートなど）は不正にあたる場合があります。しかしAIに「下書きを作ってもらい、それを元に自分の言葉で書き直す」のは、辞書やWikipediaを参考にするのと同様です。AIは「言語化のきっかけ」として使い、最終的には自分の言葉に置き換えることが大切です。個人のブログやSNS投稿については、AIアシストの利用を明示するかどうかは各プラットフォームのルールに従ってください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 読書活用",
    "ChatGPT 本 要約",
    "Claude PDF 要約",
    "読書 AI 活用術",
    "読書 習慣 AI",
    "本 理解 深める AI",
    "読書感想文 AI",
    "ラバーダック学習",
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

export default function AiBookReadingGuideRoute() {
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
          { name: "AIで読書が変わる！活用術2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiBookReadingGuidePage faqItems={[...faqItems]} />
    </>
  );
}
