type LineCtaBoxProps = {
  className?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
};

const defaultLineUrl = "https://bexn9pao.autosns.app/line";
const defaultTitle = "LINE登録で「AI活用スターター特典セット」を受け取る";
const defaultDescription =
  "実務で使える生成AI活用テンプレートを、自己理解・キャリア設計の視点とあわせてLINEで無料配布しています。";
const defaultButtonLabel = "LINEで特典を受け取る（無料）";

export default function LineCtaBox({
  className = "blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6",
  title = defaultTitle,
  description = defaultDescription,
  buttonLabel = defaultButtonLabel,
  href = defaultLineUrl,
}: LineCtaBoxProps) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-gray-900">{title}</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        {buttonLabel}
      </a>
    </section>
  );
}
