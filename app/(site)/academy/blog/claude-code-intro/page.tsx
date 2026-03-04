import type { Metadata } from "next";
import ClaudeCodeIntroPage from "@/components/academyLanding/blog/claude-code-intro/ClaudeCodeIntroPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Claude CodeとCursor/Copilotの違い【2026】| AIリブート";
const pageDescription =
  "Claude CodeはなぜCursorやCopilotと違うのか？「補完」vs「自律実行」の違いを実例で解説。インストール・料金・最初のタスク設定・失敗しないポイントまでを2026年版でわかりやすく説明します。";
const pageUrl = "https://ai-reboot.io/academy/blog/claude-code-intro";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-03-05T09:00:00+09:00";
const modifiedTime = "2026-03-04";

const faqItems = [
  {
    question: "Claude Codeは無料で使えますか？",
    answer:
      "Claude Codeのツール自体は無料でインストールできます。ただし利用にはAnthropicのAPIキーが必要で、API使用量に応じてトークン課金が発生します。Claude Proサブスクリプション（月$20）経由でも利用できますが、利用量に上限があります。個人の学習・検証用途なら月数ドル程度で収まるケースが多いですが、大規模な開発業務に使う場合は事前にコスト試算をすることをおすすめします。",
  },
  {
    question: "プログラミング初心者でもClaude Codeを使えますか？",
    answer:
      "コマンドラインの基本操作（ファイル移動・コマンド実行）ができれば、プログラミング初心者でも利用できます。Claude Codeは日本語で指示を出すだけでコードを生成・修正してくれるため、構文を完全に知らなくても動くものが作れます。ただし、生成されたコードが何をしているかを理解せずに使い続けると、バグや脆弱性に気づけないリスクがあります。最低限の読み解き力を並行して身につけることを推奨します。",
  },
  {
    question: "Claude CodeとGitHub CopilotやCursorとの違いは何ですか？",
    answer:
      "最大の違いは「補完」か「自律実行」かです。GitHub Copilotはエディタ内でコードを書きながら次の行を予測・補完するアシスタントです。Cursorはエディタ統合型でチャットしながらコードを修正できます。Claude CodeはCLIから複数ファイルの読み書き・コマンド実行・git操作まで含めたタスクを自律的に完結させます。「ファイルAとBを読んで、仕様書に合わせてリファクタリングし、テストを実行して確認して」という複合タスクを一度の指示で実行できるのがClaude Codeの特徴です。",
  },
  {
    question: "Claude Codeはどのプログラミング言語に対応していますか？",
    answer:
      "特定の言語に限定されておらず、Pythonをはじめ、JavaScript/TypeScript、Go、Java、Ruby、Rust、C/C++、PHPなど主要な言語に対応しています。テキストとして処理できるファイルであれば基本的に読み書き可能です。ただし、生成コードの精度はClaudeの学習データ量に依存するため、メジャーな言語・フレームワークほど精度が高い傾向があります。",
  },
  {
    question: "チームで複数人がClaude Codeを使う場合はどのように管理しますか？",
    answer:
      "各メンバーが個別のAnthropicアカウント・APIキーを用意するのが基本です。APIキーはAnthropicコンソールでUsage Limitsを設定してコスト上限を管理できます。プロジェクトのルート（CLAUDE.md）にClaude Code向けの指示ファイルを置くと、チーム全員が同じ文脈・コーディング規約でAIを活用できます。機密コードを扱う場合はAPIキーの管理ルールと、どの範囲のコードをClaude Codeに渡してよいかのガイドラインを策定してください。",
  },
  {
    question: "Claude Codeで生成したコードの著作権はどうなりますか？",
    answer:
      "一般的な考え方として、AIが生成したコードは著作権が発生しないか、開発者（ユーザー）に帰属するとされていますが、法的な解釈は国・地域・状況によって異なります。商用利用の場合はAnthropicの利用規約を確認し、必要に応じて法的専門家に相談することを推奨します。また、Claude CodeがOSSのコードを参照して生成した場合、ライセンス問題が生じる可能性もあるため、出力コードのライセンス確認を習慣づけてください。",
  },
  {
    question: "機密コードや社内の非公開ソースコードをClaude Codeに渡しても大丈夫ですか？",
    answer:
      "Claude CodeはAPIを経由してAnthropicのサーバーにコードが送信されます。Anthropicのデータ利用規約ではAPIで送信されたデータを学習に使用しないとされていますが、自社のセキュリティポリシーと照合した上で判断してください。特に個人情報・顧客データ・業界規制に関わるコードを含む場合は、情報セキュリティ担当者の確認が必要です。最重要機密コードはClaude Codeに直接渡さず、抽象化した疑似コードで相談する方法も有効です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Claude Code 使い方",
    "Claude Code とは",
    "Claude Code 始め方",
    "AIコーディング支援",
    "Claude Code 料金",
    "Anthropic CLI",
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

export default function ClaudeCodeIntroRoute() {
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
          { name: "Claude Codeとは？", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ClaudeCodeIntroPage faqItems={[...faqItems]} />
    </>
  );
}
