"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

type Props = {
    source?: string;
    title?: string;
    description?: string;
};

export default function CorporateNewsletterCtaBox({
    source = "corporate",
    title = "AI経営変革の最新情報をお届けします",
    description = "AX-1の次回開催情報・経営者向けAI活用事例・業界レポートを、メールでお届けします。いつでも配信停止できます。",
}: Props) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;

        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email.trim(), source }),
            });

            if (res.ok) {
                setStatus("success");
            } else {
                const data = await res.json();
                setErrorMsg(data.error ?? "エラーが発生しました");
                setStatus("error");
            }
        } catch {
            setErrorMsg("送信に失敗しました。もう一度お試しください。");
            setStatus("error");
        }
    };

    return (
        <div
            style={{
                background: "#1E3A5F",
                borderRadius: "0.75rem",
                padding: "2.5rem 2rem",
                maxWidth: "56rem",
                margin: "0 auto",
            }}
        >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
                <Mail style={{ color: "rgba(255,231,166,0.8)", width: 24, height: 24, flexShrink: 0, marginTop: 2 }} />
                <div>
                    <p style={{ color: "#ffffff", fontSize: "1.2rem", fontWeight: 700, lineHeight: 1.4, margin: 0 }}>
                        {title}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", marginTop: "0.5rem", lineHeight: 1.7 }}>
                        {description}
                    </p>
                </div>
            </div>

            {status === "success" ? (
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1rem 1.25rem", background: "rgba(255,255,255,0.08)", borderRadius: "0.5rem" }}>
                    <CheckCircle style={{ color: "rgba(255,231,166,0.9)", width: 20, height: 20, flexShrink: 0 }} />
                    <p style={{ color: "rgba(255,255,255,0.9)", margin: 0, fontSize: "0.925rem" }}>
                        ご登録ありがとうございます。最新情報をお届けします。
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@company.co.jp"
                        required
                        style={{
                            flex: "1 1 260px",
                            padding: "0.75rem 1rem",
                            borderRadius: "0.5rem",
                            border: "1px solid rgba(255,255,255,0.2)",
                            background: "rgba(255,255,255,0.08)",
                            color: "#ffffff",
                            fontSize: "0.95rem",
                            outline: "none",
                        }}
                    />
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.75rem 1.5rem",
                            borderRadius: "0.5rem",
                            background: status === "loading" ? "rgba(255,231,166,0.5)" : "rgba(255,231,166,0.85)",
                            color: "#1E3A5F",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            border: "none",
                            cursor: status === "loading" ? "not-allowed" : "pointer",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {status === "loading" ? "送信中..." : "登録する"}
                        {status !== "loading" && <ArrowRight style={{ width: 16, height: 16 }} />}
                    </button>
                    {status === "error" && (
                        <p style={{ width: "100%", color: "rgba(255,180,180,0.9)", fontSize: "0.85rem", margin: "0.25rem 0 0" }}>
                            {errorMsg}
                        </p>
                    )}
                </form>
            )}

            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", marginTop: "0.875rem" }}>
                ※ 個人情報は適切に管理し、第三者への提供はいたしません。
            </p>
        </div>
    );
}
