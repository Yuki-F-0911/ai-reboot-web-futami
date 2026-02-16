import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Willtrust Auth",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuthWilltrustLayout({ children }: { children: ReactNode }) {
  return children;
}
