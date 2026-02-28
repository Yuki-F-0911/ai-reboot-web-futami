import { Header, Footer } from "@/components/layout";
import MainWrapper from "@/components/layout/MainWrapper";
import ScrollDepthTracker from "@/components/layout/ScrollDepthTracker";
import MobileStickyBar from "@/components/ui/MobileStickyBar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
      <ScrollDepthTracker />
      <MobileStickyBar />
    </>
  );
}
