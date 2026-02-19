"use client";

import type { MouseEvent } from "react";

type ArticleTOCItem = {
  id: string;
  label: string;
};

type ArticleTOCProps = {
  items: readonly ArticleTOCItem[];
  className?: string;
};

export default function ArticleTOC({ items, className = "" }: ArticleTOCProps) {
  if (items.length === 0) {
    return null;
  }

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav
      aria-label="記事目次"
      className={`mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 ${className}`.trim()}
      data-copy-exclude
    >
      <p className="text-xs font-semibold tracking-wide text-slate-500">この記事の内容</p>
      <ol className="mt-3 space-y-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(event) => handleAnchorClick(event, item.id)}
              className="inline-flex items-start gap-2 text-sm leading-7 text-slate-700 transition-colors hover:text-will-primary"
            >
              <span className="mt-0.5 text-xs font-semibold text-slate-400">{index + 1}.</span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
