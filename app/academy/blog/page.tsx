import type { Metadata } from "next";
import Link from "next/link";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "アカデミーブログ一覧 | AIリブート";
const pageDescription =
  "AIリブートアカデミーのブログ一覧です。生成AIの基礎知識、実務活用、資格・スキル、キャリア、法人向け導入ガイドまで8記事をカテゴリ別に掲載しています。";
const pageUrl = "https://ai-reboot.io/academy/blog";
const pageOgImagePath = "/academy/opengraph-image";

type BlogCategory = "AI基礎知識" | "実務活用" | "資格・スキル" | "キャリア・転職" | "法人向け";

type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  category: BlogCategory;
};

const blogPosts: readonly BlogPost[] = [
  {
    slug: "what-is-generative-ai",
    title: "生成AIとは？初心者向けにわかりやすく解説",
    summary: "生成AIの定義、主要ツールの違い、最初の使い方を非技術者向けに整理した入門記事です。",
    category: "AI基礎知識",
  },
  {
    slug: "how-to-learn-generative-ai",
    title: "社会人のための生成AI学習ロードマップ",
    summary: "0〜100日で実務活用まで到達するための学習フェーズと、つまずき回避のポイントを解説します。",
    category: "AI基礎知識",
  },
  {
    slug: "prompt-template-for-work",
    title: "仕事で使えるプロンプトテンプレート集",
    summary: "メール・議事録・資料作成など、業務で再利用できる実践テンプレートをカテゴリ別にまとめました。",
    category: "実務活用",
  },
  {
    slug: "ai-certification-guide",
    title: "AI資格おすすめ一覧｜難易度・費用を比較",
    summary: "G検定やE検定を含む主要資格を、目的・難易度・費用で比較して選び方を整理します。",
    category: "資格・スキル",
  },
  {
    slug: "skills-for-ai-era-career",
    title: "AI時代に必要なスキルを職種別に解説",
    summary: "営業、マーケ、管理職など職種ごとに、AI時代のキャリアに必要なスキルを整理した記事です。",
    category: "資格・スキル",
  },
  {
    slug: "ai-career-change-cases",
    title: "AI時代のキャリアチェンジ事例集",
    summary: "職種転換の進め方をBefore/Afterの観点で整理し、学習と実務接続の共通ポイントを紹介します。",
    category: "キャリア・転職",
  },
  {
    slug: "corporate-ai-adoption-guide",
    title: "中小企業の生成AI導入ガイド",
    summary: "導入ロードマップ、費用目安、部門別活用例を法人担当者向けに段階的に解説します。",
    category: "法人向け",
  },
  {
    slug: "corporate-ai-training",
    title: "法人向けAI研修で成果を出す完全ガイド",
    summary: "研修形式の選び方、KPI設計、社内定着の進め方を比較観点付きで整理した法人向け記事です。",
    category: "法人向け",
  },
] as const;

const categoryClassName: Record<BlogCategory, string> = {
  "AI基礎知識": "border border-harmony-light bg-harmony-lighter text-harmony",
  実務活用: "border border-orange-200 bg-orange-50 text-orange-700",
  "資格・スキル": "border border-wisdom-light bg-wisdom-lighter text-wisdom",
  "キャリア・転職": "border border-amber-200 bg-amber-50 text-amber-700",
  法人向け: "border border-will-primary/20 bg-will-lighter text-will-primary",
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: pageOgImagePath,
        width: 1200,
        height: 630,
        alt: "AIリブートアカデミー ブログ一覧",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageOgImagePath],
  },
};

export default function AcademyBlogPage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://ai-reboot.io" },
          { name: "アカデミー", url: "https://ai-reboot.io/academy" },
          { name: "ブログ", url: pageUrl },
        ]}
      />

      <main className="bg-slate-50 pb-20 pt-24 sm:pt-28">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AcademyBreadcrumb
            className="mb-6"
            items={[
              { label: "ホーム", href: "/" },
              { label: "アカデミー", href: "/academy" },
              { label: "ブログ" },
            ]}
          />

          <header className="rounded-2xl border border-will-primary/15 bg-gradient-to-br from-white via-will-lighter to-wisdom-lighter p-6 shadow-subtle sm:p-8">
            <p className="text-sm font-semibold tracking-wide text-will-primary">ACADEMY BLOG</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              アカデミーブログ一覧
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
              生成AIの基礎知識から、実務活用、資格・スキル、キャリア、法人向け導入まで、目的別に記事を探せます。
            </p>
          </header>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-subtle transition-all duration-300 hover:-translate-y-0.5 hover:border-will-primary/25 hover:shadow-soft"
              >
                <p
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${categoryClassName[post.category]}`}
                >
                  {post.category}
                </p>
                <h2 className="mt-4 text-xl font-bold leading-tight text-slate-900">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">{post.summary}</p>
                <Link
                  href={`/academy/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-will-primary transition-colors group-hover:text-growth"
                >
                  記事を読む
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
