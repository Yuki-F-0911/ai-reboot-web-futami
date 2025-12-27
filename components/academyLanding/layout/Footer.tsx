import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const footerLinks = {
        services: [
            { name: "AIリブートアカデミー", href: "/academy" },
            { name: "生成AI活用力研修「AIリブート」", href: "/corporate" },
        ],
        support: [
            { name: "お問い合わせ", href: "/contact" },
            { name: "プライバシーポリシー", href: "#privacy" },
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
                    {/* サービス */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-slate-300">サービス</h3>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* サポート */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-slate-300">サポート</h3>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link) => (
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
