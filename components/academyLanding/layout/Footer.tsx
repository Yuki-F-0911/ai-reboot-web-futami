import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const footerLinks = {
        main: [
            { name: "お知らせ", href: "/news" },
            { name: "お問い合わせ", href: "/contact" },
            { name: "会社情報", href: "https://willforward.co.jp/", external: true },
            { name: "法人のお客さま", href: "https://willforward.co.jp/business", external: true },
        ],
        legal: [
            { name: "プライバシーポリシー", href: "/privacy" },
            { name: "特定商取引法に基づく表記", href: "/law" },
        ]
    };

    return (
        <footer className="bg-navy-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Logo & Vision */}
                    <div className="space-y-6">
                        <Image
                            src="/images/logo-katakana.svg"
                            alt="AIリブートアカデミー"
                            width={300}
                            height={40}
                            className="h-8 w-auto brightness-0 invert"
                        />
                        <p className="text-slate-400 text-sm leading-relaxed">
                            生成AI時代の新しい自分へ。<br />
                            100日間で、AIと共創する力を身につける。<br />
                            経済産業省認定リスキリング講座。<br />
                            最大70%補助金対象
                        </p>
                    </div>

                    {/* Menu Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-slate-300">メニュー</h3>
                        <ul className="space-y-4">
                            {footerLinks.main.map((link) => (
                                <li key={link.name}>
                                    {link.external ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-white transition-colors text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-slate-300">法的情報</h3>
                        <ul className="space-y-4">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2024 AI REBOOT ACADEMY. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm">
                        Operating Company: Willforward, Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
