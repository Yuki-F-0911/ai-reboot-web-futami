import type { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    siteName: "AIリブートアカデミー",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
