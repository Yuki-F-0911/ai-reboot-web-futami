import Link from "next/link";

export default function GlossaryNotFound() {
  return (
    <main className="min-h-screen bg-depth-100 flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-will-primary font-semibold text-sm tracking-widest uppercase mb-3">
          404 Not Found
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-depth-900 mb-3">
          用語が見つかりませんでした
        </h1>
        <p className="text-depth-500 text-sm mb-8">
          お探しの用語は存在しないか、URLが誤っている可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/glossary"
            className="inline-flex items-center justify-center gap-2 bg-will-primary text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            用語集一覧へ戻る
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white border border-depth-200 text-depth-700 px-6 py-3 rounded-full font-semibold text-sm hover:border-will-primary hover:text-will-primary transition-colors"
          >
            トップページへ
          </Link>
        </div>
      </div>
    </main>
  );
}
