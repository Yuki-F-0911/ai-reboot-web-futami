import LineCtaBox from "@/components/blog/LineCtaBox";

type MidArticleCtaBoxProps = {
  slug?: string;
  className?: string;
};

const baseLineUrl = "https://bexn9pao.autosns.app/line";

export default function MidArticleCtaBox({
  slug = "academy-blog",
  className = "blog-cta-box rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-lime-50 to-amber-50 p-6",
}: MidArticleCtaBoxProps) {
  const href = `${baseLineUrl}?${new URLSearchParams({
    src: "blog",
    slug,
  }).toString()}`;

  return (
    <LineCtaBox
      className={className}
      href={href}
    />
  );
}
