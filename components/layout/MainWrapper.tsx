"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { isAcademyPath } from "@/lib/academyRouting";

type MainWrapperProps = {
  children: React.ReactNode;
};

const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const useAcademySpacing = isAcademyPath(pathname);
  const isSeminarLP = pathname?.startsWith('/seminars/');
  const isWebtoon = pathname === '/webtoon';
  const isAX1Page = pathname?.startsWith('/corporate/ax1');

  // セミナーLP、アカデミーページ、webtoon、AX1 LPはヘッダー分のpaddingを入れない
  const mainClassName = (useAcademySpacing || isSeminarLP || isWebtoon || isAX1Page)
    ? "min-h-screen overflow-x-hidden"
    : "min-h-screen pt-16 overflow-x-hidden";

  return <main className={mainClassName}>{children}</main>;
};

export default MainWrapper;
