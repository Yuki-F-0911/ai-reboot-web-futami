import Link from "next/link";
import type { GlossaryTerm } from "@/types/glossary";

type RelatedTermsProps = {
  terms: GlossaryTerm[];
};

export default function RelatedTerms({ terms }: RelatedTermsProps) {
  if (terms.length === 0) return null;

  return (
    <section className="mt-10 pt-8 border-t border-depth-200">
      <h2 className="text-lg font-bold text-depth-900 mb-4">関連用語</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {terms.map((term) => (
          <Link
            key={term.slug}
            href={`/glossary/${term.slug}`}
            className="flex items-center gap-3 p-3 bg-depth-100 rounded-lg hover:bg-will-lighter hover:text-will-primary transition-colors group"
          >
            <span className="text-will-primary text-lg leading-none">→</span>
            <div className="min-w-0">
              <p className="font-medium text-sm text-depth-900 group-hover:text-will-primary transition-colors truncate">
                {term.term}
              </p>
              <p className="text-xs text-depth-500 truncate">{term.reading}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
