import type { Metadata } from "next";
import AiSmartphoneAppsPage from "@/components/academyLanding/blog/ai-smartphone-apps/AiSmartphoneAppsPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIアプリおすすめ20選【スマホ版2026】iPhone/Android比較・無料TOP5 | AIリブート";
const pageDescription =
  "2026年版のAIスマホアプリ20選をカテゴリ別で比較。iPhone/Androidの差、完全無料で使えるTOP5、月額課金の判断基準、日本語対応が強いアプリまで初心者向けに整理しました。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-smartphone-apps";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T19:30:00+09:00";

const faqItems = [
  {
    question: "2026年にスマホで使うなら、AIアプリは最初に何を入れるべきですか？",
    answer:
      "最初は用途を3つに絞るのが定着しやすいです。例えば、チャット1本（ChatGPTかGemini）、翻訳1本（DeepLかGoogle翻訳）、生産性1本（Notion）から始めると使い分けが混乱しません。",
  },
  {
    question: "iPhoneとAndroidでAIアプリの選び方は変わりますか？",
    answer:
      "主要アプリは両対応ですが、一部は差があります。Google RecorderはAndroid中心、NottaやLINE WORKS AiNoteはiPhone導線が明確です。先に使いたい機能を決めてOS差を確認すると失敗しにくいです。",
  },
  {
    question: "完全無料で実用レベルのAIアプリはありますか？",
    answer:
      "あります。Google翻訳、Microsoft Translator、Papago、Google Recorderなどは無料で実用に乗せやすいです。チャット系は無料枠でも始められますが、利用上限に到達しやすいため用途を絞る運用が有効です。",
  },
  {
    question: "ChatGPTとGeminiとClaudeは、スマホだとどれが初心者向きですか？",
    answer:
      "迷ったら、普段のタスクで1週間ずつ試す方法が確実です。日常的な質問整理はChatGPT、Googleサービス連携はGemini、長文読解や要約はClaudeが選ばれやすい傾向があります。",
  },
  {
    question: "月額課金するなら、どのタイミングで判断すべきですか？",
    answer:
      "無料枠の上限で週2回以上止まる、あるいは有料機能で1日20分以上の時短が見込めるなら課金検討の目安です。頻度と時短効果を先に数値化するとミスマッチを減らせます。",
  },
  {
    question: "日本語対応が強いAIアプリはどれですか？",
    answer:
      "翻訳はDeepL・Papago・Google翻訳が安定しやすく、チャットはChatGPT・Gemini・Claudeが日本語利用しやすいです。音声文字起こしはNottaやAiNoteが日本語運用で使われやすい一方、用途によって精度差が出るため試用が必要です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI アプリ おすすめ スマホ 2026",
    "iPhone AI アプリ",
    "Android AI アプリ",
    "無料 AI アプリ 日本語",
    "AIアプリ 比較",
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

export default function AiSmartphoneAppsRoute() {
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
          { name: "AIアプリおすすめ20選【スマホ版2026】", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiSmartphoneAppsPage faqItems={[...faqItems]} />
    </>
  );
}

