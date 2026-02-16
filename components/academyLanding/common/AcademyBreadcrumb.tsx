"use client";

import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type AcademyBreadcrumbProps = {
  items: readonly BreadcrumbItem[];
  className?: string;
};

export default function AcademyBreadcrumb({ items, className = "" }: AcademyBreadcrumbProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="パンくず" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 sm:text-sm">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-orange-600">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-slate-700">{item.label}</span>
            )}
            {index < items.length - 1 ? <span className="text-slate-300">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
