import LineCtaBox from "@/components/blog/LineCtaBox";

type MidArticleCtaBoxProps = {
  slug?: string;
  bonusId?: string;
  bonusTitle?: string;
  bonusDescription?: string;
  className?: string;
};

const baseLineUrl = "https://bexn9pao.autosns.app/line";

export default function MidArticleCtaBox({
  slug = "academy-blog",
  bonusId = "bonus05",
  bonusTitle = "業種別プロンプト50選",
  bonusDescription = "業務で使える実践テンプレートを、LINE登録特典として無料配布しています。",
  className = "blog-cta-box rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-lime-50 to-amber-50 p-6",
}: MidArticleCtaBoxProps) {
  const href = `${baseLineUrl}?${new URLSearchParams({
    src: "blog",
    slug,
    bonus: bonusId,
  }).toString()}`;

  return (
    <LineCtaBox
      className={className}
      title={`LINE登録で「${bonusTitle}」を受け取る`}
      description={bonusDescription}
      buttonLabel="LINEで特典を受け取る（無料）"
      href={href}
    />
  );
}
