'use client';

import { useMemo } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

const baseUrl = "https://ai-reboot.io";

const segmentLabelMap: Record<string, string> = {
  academy: "AIリブートアカデミー",
  subsidy: "補助金",
  "subsidy-guide": "補助金ガイド",
  "subsidy-eligible-courses": "補助金対象講座",
  "ai-course-comparison": "AI講座比較",
  "ai-training-for-individuals": "個人向けAI研修",
  "reskilling-course-recommendation": "おすすめ講座",
  "meti-reskilling-comparison": "経産省比較",
  reviews: "評判・口コミ",
  seminars: "セミナー",
  message: "代表メッセージ",
  corporate: "法人向けAI研修",
  company: "運営会社",
  contact: "お問い合わせ",
  blog: "ブログ",
  news: "お知らせ",
  events: "イベント",
  voices: "受講生の声",
  briefing: "無料説明会",
  legal: "特定商取引法",
  privacy: "プライバシーポリシー",
  terms: "利用規約",
  rebooters: "REBOOTERS",
  willtrust: "Willtrust",
  webtoon: "Webtoon",
};

function getSegmentLabel(segment: string): string {
  const decoded = decodeURIComponent(segment);
  return segmentLabelMap[decoded] ?? decoded.replace(/-/g, " ");
}

export default function BreadcrumbAutoStructuredData() {
  const pathname = usePathname();

  const structuredData = useMemo(() => {
    if (!pathname) {
      return null;
    }

    const segments = pathname.split("/").filter(Boolean);
    const items = [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: baseUrl,
      },
    ];

    let currentPath = "";
    segments.forEach((segment, index) => {
      currentPath = `${currentPath}/${segment}`;
      items.push({
        "@type": "ListItem",
        position: index + 2,
        name: getSegmentLabel(segment),
        item: `${baseUrl}${currentPath}`,
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items,
    };
  }, [pathname]);

  if (!structuredData || pathname?.startsWith("/api/")) {
    return null;
  }

  const hasDedicatedBreadcrumb = /^\/blog\/[^/]+$/.test(pathname);
  if (hasDedicatedBreadcrumb) {
    return null;
  }

  const scriptId =
    pathname === "/"
      ? "breadcrumb-auto-home"
      : `breadcrumb-auto-${pathname.replace(/[^a-zA-Z0-9]/g, "-")}`;

  return (
    <Script
      id={scriptId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
