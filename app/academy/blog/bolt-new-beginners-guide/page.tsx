import type { Metadata } from "next";
import BoltNewBeginnersGuidePage from "@/components/academyLanding/blog/bolt-new-beginners-guide/BoltNewBeginnersGuidePage";
import {
  ArticleStructuredData,
  BreadcrumbStructuredData,
  FAQStructuredData,
} from "@/components/seo/StructuredData";

const pageTitle =
  "Bolt.new完全入門ガイド｜AIでWebサイトを一瞬で作る方法【2026年最新版】 | AIリブート";
const pageDescription =
  "プログラミング経験ゼロでもOK。Bolt.newの始め方をステップバイステップで解説し、プロンプトの書き方、v0・Lovable・Replitとの比較、無料枠の活用法、料金プラン、初心者がつまずきやすいポイントまで2026年2月最新情報でまとめました。";
const pageUrl = "https://ai-reboot.io/academy/blog/bolt-new-beginners-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T22:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "Bolt.newは本当に無料で使えますか？",
    answer:
      "はい、無料プランがあります。月100万トークン（1日あたり30万トークン上限）が無料で付与され、シンプルなポートフォリオやLPであれば3〜5サイト分に相当します。クレジットカードの登録も不要です。ただしトークンは翌月に繰り越せないため、月内に使い切るのがお得です。",
  },
  {
    question: "プログラミングの知識がなくても使えますか？",
    answer:
      "はい、プログラミング経験ゼロでも使えます。Bolt.newはChatGPTと同じように日本語で「こんなサイトを作って」と話しかけるだけでコードを自動生成してくれます。生成されたコードを理解する必要もありません。ただし、複雑なアプリを作る場合はHTML/CSSの基礎知識があるとAIへの指示が的確になります。",
  },
  {
    question: "Bolt.newで作ったサイトは商用利用できますか？",
    answer:
      "はい、商用利用可能です。ただし無料プランで公開したサイトにはBoltのブランドロゴが表示されます。ロゴを非表示にしたい場合やカスタムドメインを使いたい場合は、月$25のProプランへのアップグレードが必要です。",
  },
  {
    question: "スマホからでも使えますか？",
    answer:
      "ブラウザベースのツールなのでスマホからアクセスは可能ですが、コードエディタやプレビュー画面の操作はパソコンの大画面が圧倒的に快適です。実際の制作作業はパソコン（できればChrome系ブラウザ）で行うことをおすすめします。",
  },
  {
    question: "日本語でプロンプトを書いても大丈夫ですか？",
    answer:
      "はい、日本語でのプロンプト入力に対応しています。「カフェのランディングページを作ってください」のように自然な日本語で指示できます。ただし、生成されるコード内のコメントや変数名は英語になることが多いです。サイトに表示するテキスト自体は日本語で出力されます。",
  },
  {
    question: "v0やLovableとどう違いますか？",
    answer:
      "Bolt.newは「ブラウザだけで完結し、最も手軽に始められる」点が最大の特徴です。v0（Vercel）はNext.jsに特化しUIの品質が高いですがコード知識があると有利、Lovable（旧GPT Engineer）はReactコードの美しさに強みがありますがフレームワーク選択肢が少なめです。プログラミング未経験で最初の一歩を踏み出すならBolt.newが最もハードルが低いです。",
  },
  {
    question: "トークンとは何ですか？どのくらい消費しますか？",
    answer:
      "トークンはBolt.newにおけるAI利用の単位です。テキストの長さやコードの複雑さに応じて消費されます。目安として、シンプルなポートフォリオサイトの新規作成で約20〜30万トークン、小さな修正依頼で数千〜数万トークンを消費します。プロジェクトが大きくなるほど1回あたりの消費量が増える傾向があります。",
  },
  {
    question: "作ったサイトのデータはどこに保存されますか？",
    answer:
      "プロジェクトのコードはBolt.newのクラウド上に保存されます。GitHubの個人アカウントと連携して、コードをGitHubリポジトリにエクスポートすることも可能です（組織アカウントは未対応）。サイトをBolt Hostingでデプロイした場合、ホスティングもBoltのインフラ上で管理されます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Bolt.new 使い方",
    "Bolt.new 入門",
    "AIでWebサイト作成",
    "ノーコード AI Web制作",
    "Bolt.new 無料",
    "Bolt.new 料金",
    "Vibe Coding ツール",
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

export default function BoltNewBeginnersGuideRoute() {
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
          {
            name: "Bolt.new完全入門ガイド",
            url: pageUrl,
          },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <BoltNewBeginnersGuidePage faqItems={[...faqItems]} />
    </>
  );
}
