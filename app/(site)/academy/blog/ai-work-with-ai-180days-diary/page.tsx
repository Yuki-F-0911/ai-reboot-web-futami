import type { Metadata } from "next";
import AiWorkWith180DaysDiaryPage from "@/components/academyLanding/blog/ai-work-with-ai-180days-diary/AiWorkWith180DaysDiaryPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIと仕事して180日：失ったもの・得たもの・気づいたことをすべて話します | AIリブート";
const pageDescription =
  "生成AIを仕事で使い始めて半年。便利になったこと、失敗したこと、変わった価値観を正直に記録。「AIを導入したら本当に効率が上がるの？」という疑問に、一人の会社員が正直に答えます。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-work-with-ai-180days-diary";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T13:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "AIを仕事で使い始めるのに、どんな準備が必要ですか？",
    answer:
      "特別な準備は必要ありません。ChatGPTやClaudeのアカウントを無料で作成し、今日の仕事で困っていることを1つ相談してみるだけで十分です。最初から環境を整えようとすると始まらないので、まず1つ使ってみることが最大の準備です。",
  },
  {
    question: "上司や会社に許可が必要ですか？",
    answer:
      "会社によって異なります。社内のAI利用ガイドラインが整備されている企業では、そのルールに従う必要があります。ガイドラインがない場合も、顧客情報や機密情報の入力は避け、下書き支援や情報収集などの個人業務から始めるのが安全です。迷ったら上司に一言相談するのがベストです。",
  },
  {
    question: "どのAIツールから始めるのが一番いいですか？",
    answer:
      "ChatGPT（無料版）から始めるのがおすすめです。ユーザー数が最多でネットの情報も豊富なため、わからないことがあっても調べやすい。慣れてきたらClaudeやGeminiも試してみると、それぞれの強みがわかって使い分けが上手になります。",
  },
  {
    question: "毎日使わないといけませんか？",
    answer:
      "必須ではありませんが、週3回以上使うと習慣化しやすくなります。私の場合、最初の1ヶ月は「今日もAIに頼ってみよう」と意識的に使いましたが、3ヶ月後には「これAIに聞けばいいか」と自然に思えるようになりました。毎日でなくても、定期的に使い続けることが大切です。",
  },
  {
    question: "使い始めて最初にどんな変化を感じましたか？",
    answer:
      "最初に「これは本物だ」と感じたのは、使い始めて3週間目にメールの下書きを頼んだときです。自分で書くと30分かかっていた取引先へのお断りメールが、AIが出した案をちょっと手直しするだけで10分で完成した。小さな変化ですが、「仕事が変わった」と実感した瞬間でした。",
  },
  {
    question: "最も失敗した体験は何ですか？",
    answer:
      "AIが自信満々に生成した数字を確認せずに資料に使ってしまい、上司に指摘されました。AIは存在しない統計データを「それらしく」作り出すことがあります（ハルシネーション）。以来、数字・固有名詞・引用は必ず原典を確認する習慣をつけました。この失敗が、AIとの正しい付き合い方を教えてくれました。",
  },
  {
    question: "AIで仕事の質は上がりましたか？",
    answer:
      "「上がった部分」と「変わらない部分」があります。文章の下書き・構成・要約・アイデア出しは明らかに質が上がりました。一方で、人間関係の機微が必要な場面や、深い専門知識が必要な判断は、AIに頼りすぎると逆に質が下がると感じています。AIが得意な領域を見極めることが、質向上の鍵です。",
  },
  {
    question: "プロンプトが下手でも大丈夫ですか？",
    answer:
      "大丈夫です。私も最初の3ヶ月はプロンプトのことを何も考えず、普通の日本語で話しかけていました。「もっと短くして」「もう少し丁寧に」と追加指示を出しながら会話を深めるだけで十分です。完璧なプロンプトを書こうとするより、対話を重ねるほうが早く良い結果が得られます。",
  },
  {
    question: "AIを使っていることを職場に言うべきですか？",
    answer:
      "積極的に言う必要はありませんが、隠す必要もありません。「AIに下書きを手伝ってもらいました」と一言添えるだけで、職場の信頼が損なわれることはほとんどありません。むしろ「AI活用して効率化した」と発信できる職場なら、積極的に共有するほうがプラスになります。",
  },
  {
    question: "180日続けられた理由は何ですか？",
    answer:
      "「成果が出たから」の一言に尽きます。使い続けることで週に3〜4時間の作業時間が減り、その分を企画や人との対話に使えるようになりました。節約できた時間で考える仕事の割合が増え、仕事が楽しくなった。「楽になるから続けられた」、そして「続けたからもっと楽になった」——この好循環が180日の原動力でした。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 仕事 体験談",
    "生成AI 使い続けた",
    "ChatGPT 仕事 変化",
    "AI 半年 効果",
    "AI 仕事 正直",
    "生成AI 導入 実例",
    "AI 習慣化 仕事",
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

export default function AiWorkWith180DaysDiaryRoute() {
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
          { name: "AIと仕事して180日", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiWorkWith180DaysDiaryPage faqItems={[...faqItems]} />
    </>
  );
}
