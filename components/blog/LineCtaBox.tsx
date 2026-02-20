type LineCtaBoxProps = {
  className?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
};

const defaultLineUrl = "https://bexn9pao.autosns.app/line";
const defaultTitle = "AIで仕事を変えたい方へ｜LINEで無料相談する";
const defaultDescription =
  "経産省リスキリング補助金対象の100日間プログラム「AIリブートアカデミー」について、LINEで気軽に相談できます。補助金の使い方・カリキュラム・学習イメージを無料でお伝えします。";
const defaultButtonLabel = "LINEで無料相談する（登録無料）";

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
