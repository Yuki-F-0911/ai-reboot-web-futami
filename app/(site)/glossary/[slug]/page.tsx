import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllGlossaryTerms, getGlossaryTermBySlug, getRelatedTerms } from "@/data/glossary";
import RelatedTerms from "@/components/glossary/RelatedTerms";
import { getCategoryColor } from "@/components/glossary/categoryUtils";
import LineCtaBox from "@/components/blog/LineCtaBox";

export const dynamicParams = false;

const baseUrl = "https://ai-reboot.io";

const glossaryMetadataOverrides: Record<string, { title: string; description: string }> = {
  "ai-debate": {
    title: "AIディベートとは | AI Reboot Glossary",
    description:
      "AIディベートとは何か？AIを使った討論・議論の最前線を解説。AI×ディベートの活用法を専門家がわかりやすく解説します。",
  },
  "claude-code": {
    title: "Claude Codeとは？CLIエージェントの特徴・Cursorとの違いを解説｜AI Reboot",
    description:
      "AnthropicのCLIベースAIコーディングエージェント。ターミナルから自然言語でコードの実装・テスト・デバッグ・git操作を自律実行。CursorやGitHub Copilotとの違い、主要機能・活用法をわかりやすく解説。",
  },
};

export function generateStaticParams() {
  return getAllGlossaryTerms().map((term) => ({ slug: term.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);
  if (!term) return {};

  const metadataOverride = glossaryMetadataOverrides[slug];
  const title = metadataOverride?.title ?? `${term.term}とは？わかりやすく解説｜AI Reboot`;
  const description = metadataOverride?.description ?? term.summary;
  const url = `${baseUrl}/glossary/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "AI REBOOT",
      locale: "ja_JP",
      type: "article",
      images: [
        {
          url: `${baseUrl}/images/ogp-default.webp`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/ogp-default.webp`],
    },
  };
}


export default async function GlossaryDetailPage({ params }: Props) {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);
  if (!term) notFound();

  const relatedTerms = getRelatedTerms(term.relatedSlugs);
  const url = `${baseUrl}/glossary/${slug}`;
  const descriptionParagraphs = term.description.split("\n\n");
  const shouldInsertLineCta = slug === "ai-debate" || slug === "anthropic-api";
  const lineCtaInsertIndex = (() => {
    if (!shouldInsertLineCta || descriptionParagraphs.length < 2) {
      return descriptionParagraphs.length;
    }

    const totalChars = descriptionParagraphs.reduce((sum, paragraph) => sum + paragraph.length, 0);
    const threshold = Math.floor(totalChars * 0.7);
    let runningChars = 0;

    for (let i = 0; i < descriptionParagraphs.length; i += 1) {
      runningChars += descriptionParagraphs[i].length;
      if (runningChars >= threshold) {
        return Math.min(i + 1, descriptionParagraphs.length - 1);
      }
    }

    return descriptionParagraphs.length - 1;
  })();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.summary,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "生成AI用語集",
      url: `${baseUrl}/glossary`,
    },
    url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-depth-100">
        {/* ヘッダー帯 */}
        <div
          className="bg-depth-900 bg-gradient-to-br from-depth-900 via-depth-800 to-depth-700 text-white pt-24 pb-10 px-4"
          style={{ backgroundColor: '#0F0F14', backgroundImage: 'linear-gradient(to bottom right, #0F0F14, #1A1A23, #2D2D3F)' }}
        >
          <div className="max-w-3xl mx-auto">
            {/* パンくず */}
            <nav aria-label="パンくずリスト" className="mb-5 text-xs text-depth-400 flex flex-wrap items-center gap-1">
              <Link href="/" className="hover:text-white transition-colors">
                ホーム
              </Link>
              <span>/</span>
              <Link href="/glossary" className="hover:text-white transition-colors">
                生成AI用語集
              </Link>
              <span>/</span>
              <span className="text-depth-300">{term.term}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${getCategoryColor(term.category)}`}
              >
                {term.category}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold mb-2 leading-snug">{term.term}</h1>
            <p className="text-depth-400 text-sm">{term.reading}</p>
          </div>
        </div>

        {/* 本文 */}
        <div className="max-w-3xl mx-auto px-4 py-10">
          <article className="bg-white rounded-2xl shadow-soft p-6 sm:p-8">
            {/* 一文定義 */}
            <section className="mb-8 pb-8 border-b border-depth-200">
              <h2 className="text-xs font-semibold text-depth-500 uppercase tracking-wider mb-3">
                一文定義
              </h2>
              <p className="text-depth-900 text-base sm:text-lg font-medium leading-relaxed">
                {term.summary}
              </p>
            </section>

            {/* 詳細解説 */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-depth-900 mb-4">詳細解説</h2>
              {shouldInsertLineCta ? (
                <>
                  <div className="prose prose-sm max-w-none text-depth-700 leading-relaxed space-y-4">
                    {descriptionParagraphs.slice(0, lineCtaInsertIndex).map((paragraph, i) => (
                      <p key={`before-cta-${i}`}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="my-8">
                    <LineCtaBox />
                  </div>
                  <div className="prose prose-sm max-w-none text-depth-700 leading-relaxed space-y-4">
                    {descriptionParagraphs.slice(lineCtaInsertIndex).map((paragraph, i) => (
                      <p key={`after-cta-${i}`}>{paragraph}</p>
                    ))}
                  </div>
                </>
              ) : (
                <div className="prose prose-sm max-w-none text-depth-700 leading-relaxed space-y-4">
                  {descriptionParagraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              )}
            </section>

            {/* 出典 */}
            <section className="mb-8 pt-8 border-t border-depth-200">
              <h2 className="text-lg font-bold text-depth-900 mb-4">参考情報・出典</h2>
              <ul className="space-y-2">
                {term.sources.map((source, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-will-primary mt-0.5 shrink-0">▸</span>
                    <div>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-will-primary hover:underline font-medium"
                      >
                        {source.title}
                      </a>
                      <span className="text-depth-500 ml-2">
                        — {source.publisher}（参照日: {source.accessedAt}）
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* メタ情報 */}
            <div className="pt-4 border-t border-depth-200 flex justify-between items-center text-xs text-depth-500">
              <span>最終更新: {term.updatedAt}</span>
              <Link href="/glossary" className="hover:text-will-primary transition-colors">
                ← 用語集一覧へ
              </Link>
            </div>
          </article>

          {/* 関連用語 */}
          <div className="mt-6 bg-white rounded-2xl shadow-soft p-6 sm:p-8">
            <RelatedTerms terms={relatedTerms} />
          </div>

          {/* CTA */}
          <div className="mt-8 bg-gradient-to-br from-will-primary to-will-secondary rounded-2xl p-6 text-white text-center">
            <h2 className="font-bold text-lg mb-2">AIスキルだけでなく、自分と未来を再設計する</h2>
            <p className="text-white/80 text-sm mb-4">
              生成AI活用力を体系的に習得し、自己理解・キャリアデザインを深め、志を同じくする仲間と共に学ぶ場がここにあります。
            </p>
            <Link
              href="/academy"
              className="inline-block bg-white text-will-primary font-semibold px-6 py-2.5 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              AIリブートアカデミーを見る
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
