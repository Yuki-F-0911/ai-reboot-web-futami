import LineCtaBox from "@/components/blog/LineCtaBox";

type MidArticleCtaBoxProps = {
  slug?: string;
  className?: string;
};

const baseLineUrl = "https://bexn9pao.autosns.app/line";

export default function MidArticleCtaBox({
  slug = "academy-blog",
  className = "",
}: MidArticleCtaBoxProps) {
  const href = `${baseLineUrl}?${new URLSearchParams({
    src: "blog",
    slug,
  }).toString()}`;

  return (
    <LineCtaBox
      className={className}
      href={href}
      title="まずはLINEで、AI活用の第一歩を相談してみませんか？"
      description="「自分にはどのツールが合う？」「補助金は使える？」といった疑問に、専門スタッフが個別にお答えします。匿名・無料で気軽にご相談いただけます。"
    />
  );
}
