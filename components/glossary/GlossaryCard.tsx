import Link from "next/link";
import type { GlossaryTerm } from "@/types/glossary";
import { getCategoryColor } from "./categoryUtils";

type GlossaryCardProps = {
  term: GlossaryTerm;
};

export default function GlossaryCard({ term }: GlossaryCardProps) {
  return (
    <Link
      href={`/glossary/${term.slug}`}
      className="block group bg-white border border-depth-200 rounded-xl p-5 hover:border-will-primary hover:shadow-soft transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="min-w-0">
          <h3 className="font-bold text-depth-900 group-hover:text-will-primary transition-colors text-base leading-snug">
            {term.term}
          </h3>
          <p className="text-xs text-depth-500 mt-0.5">{term.reading}</p>
        </div>
        <span
          className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${getCategoryColor(term.category)}`}
        >
          {term.category}
        </span>
      </div>
      <p className="text-sm text-depth-600 line-clamp-2 leading-relaxed">{term.summary}</p>
    </Link>
  );
}
