"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./AX1MessagePage.module.css";

interface FormData {
    // 必須項目
    name: string;
    companyName: string;
    email: string;
    position: string;
    employeeCount: string;
    // 任意項目
    industry: string;
    aiUsageStatus: string;
    howDidYouKnow: string;
}

interface FormErrors {
    name?: string;
    companyName?: string;
    email?: string;
    position?: string;
    employeeCount?: string;
}

interface AX1EntryFormProps {
    hideScreeningText?: boolean;
    submitLabel?: string;
    entryType?: "ax1" | "ax1-special" | "ax1-0415";
}

export function AX1EntryForm({ hideScreeningText = false, submitLabel, entryType }: AX1EntryFormProps) {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        companyName: "",
        email: "",
        position: "",
        employeeCount: "",
        industry: "",
        aiUsageStatus: "",
        howDidYouKnow: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const resolvedEntryType = entryType ?? (hideScreeningText ? "ax1-special" : "ax1");
    const resolvedSubmitLabel = submitLabel ?? (hideScreeningText ? "エントリーする" : "エントリーする（審査制）");
    const successNote = hideScreeningText
        ? "追って詳細をご案内します。"
        : "審査の上、参加可否をご連絡いたします。";
    const formNotePrimary = hideScreeningText
        ? "※ エントリー後、ご登録いただいたメールアドレスに確認メールをお送りします。"
        : "※ エントリー後、審査の上、参加可否をご連絡いたします。";

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "お名前は必須です";
        }
        if (!formData.companyName.trim()) {
            newErrors.companyName = "会社名は必須です";
        }
        if (!formData.email.trim()) {
            newErrors.email = "メールアドレスは必須です";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "有効なメールアドレスを入力してください";
        }
        if (!formData.position.trim()) {
            newErrors.position = "役職は必須です";
        }
        if (!formData.employeeCount) {
            newErrors.employeeCount = "従業員数は必須です";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/ax1-entry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    entryType: resolvedEntryType,
                }),
            });

            if (response.ok) {
                setSubmitStatus("success");
                // フォームをリセット
                setFormData({
                    name: "",
                    companyName: "",
                    email: "",
                    position: "",
                    employeeCount: "",
                    industry: "",
                    aiUsageStatus: "",
                    howDidYouKnow: "",
                });
                setErrors({});
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("送信エラー:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        // エラーをクリア
        if (errors[field as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    // 送信完了時の表示
    if (submitStatus === "success") {
        return (
            <motion.div
                className={styles.formSuccess}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className={styles.successIcon}>✓</div>
                <h3>エントリーを受け付けました</h3>
                <p>
                    ご登録いただいたメールアドレスに確認メールをお送りします。
                    <br />
                    {successNote}
                </p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={styles.entryForm}>
            <div className={styles.formSection}>
                <h4 className={styles.formSectionTitle}>基本情報（必須）</h4>

                <div className={styles.formGrid}>
                    <div className={styles.formField}>
                        <label htmlFor="name">
                            お名前 <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="山田 太郎"
                            className={errors.name ? styles.inputError : ""}
                        />
                        {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                    </div>

                    <div className={styles.formField}>
                        <label htmlFor="companyName">
                            会社名 <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            value={formData.companyName}
                            onChange={(e) => handleInputChange("companyName", e.target.value)}
                            placeholder="株式会社〇〇"
                            className={errors.companyName ? styles.inputError : ""}
                        />
                        {errors.companyName && <span className={styles.errorText}>{errors.companyName}</span>}
                    </div>
                </div>

                <div className={styles.formField}>
                    <label htmlFor="email">
                        メールアドレス <span className={styles.required}>*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="example@company.co.jp"
                        className={errors.email ? styles.inputError : ""}
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.formGrid}>
                    <div className={styles.formField}>
                        <label htmlFor="position">
                            役職 <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            id="position"
                            value={formData.position}
                            onChange={(e) => handleInputChange("position", e.target.value)}
                            placeholder="代表取締役 / 部長 など"
                            className={errors.position ? styles.inputError : ""}
                        />
                        {errors.position && <span className={styles.errorText}>{errors.position}</span>}
                    </div>

                    <div className={styles.formField}>
                        <label htmlFor="employeeCount">
                            従業員数 <span className={styles.required}>*</span>
                        </label>
                        <select
                            id="employeeCount"
                            value={formData.employeeCount}
                            onChange={(e) => handleInputChange("employeeCount", e.target.value)}
                            className={errors.employeeCount ? styles.inputError : ""}
                        >
                            <option value="">選択してください</option>
                            <option value="1-10">1〜10名</option>
                            <option value="11-50">11〜50名</option>
                            <option value="51-100">51〜100名</option>
                            <option value="101-300">101〜300名</option>
                            <option value="301-500">301〜500名</option>
                            <option value="501-1000">501〜1,000名</option>
                            <option value="1001+">1,001名以上</option>
                        </select>
                        {errors.employeeCount && <span className={styles.errorText}>{errors.employeeCount}</span>}
                    </div>
                </div>
            </div>

            <div className={styles.formSection}>
                <h4 className={styles.formSectionTitle}>追加情報（任意）</h4>

                <div className={styles.formGrid}>
                    <div className={styles.formField}>
                        <label htmlFor="industry">業種</label>
                        <select
                            id="industry"
                            value={formData.industry}
                            onChange={(e) => handleInputChange("industry", e.target.value)}
                        >
                            <option value="">選択してください</option>
                            <option value="it-tech">IT・テクノロジー</option>
                            <option value="manufacturing">製造業</option>
                            <option value="finance">金融・保険</option>
                            <option value="retail">小売・卸売</option>
                            <option value="service">サービス業</option>
                            <option value="healthcare">医療・ヘルスケア</option>
                            <option value="education">教育・研修</option>
                            <option value="consulting">コンサルティング</option>
                            <option value="real-estate">不動産</option>
                            <option value="construction">建設・建築</option>
                            <option value="media">メディア・広告</option>
                            <option value="other">その他</option>
                        </select>
                    </div>

                    <div className={styles.formField}>
                        <label htmlFor="aiUsageStatus">AI活用状況</label>
                        <select
                            id="aiUsageStatus"
                            value={formData.aiUsageStatus}
                            onChange={(e) => handleInputChange("aiUsageStatus", e.target.value)}
                        >
                            <option value="">選択してください</option>
                            <option value="not-started">まだAIは導入していない</option>
                            <option value="individual-use">一部の社員が個人的に使用している</option>
                            <option value="trial">試験的に導入中</option>
                            <option value="partial-deployment">一部部署で本格導入済み</option>
                            <option value="company-wide">全社的に導入済み</option>
                        </select>
                    </div>
                </div>

                <div className={styles.formField}>
                    <label htmlFor="howDidYouKnow">このセミナーを知ったきっかけ</label>
                    <select
                        id="howDidYouKnow"
                        value={formData.howDidYouKnow}
                        onChange={(e) => handleInputChange("howDidYouKnow", e.target.value)}
                    >
                        <option value="">選択してください</option>
                        <option value="search">Google等の検索</option>
                        <option value="sns">SNS（X, Facebook, LinkedIn等）</option>
                        <option value="referral">知人・同僚からの紹介</option>
                        <option value="seminar">セミナー・イベント</option>
                        <option value="media">メディア記事</option>
                        <option value="other">その他</option>
                    </select>
                </div>
            </div>

            {submitStatus === "error" && (
                <motion.div
                    className={styles.formError}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    送信に失敗しました。しばらく時間をおいて再度お試しください。
                </motion.div>
            )}

            <motion.button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 0.98 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            >
                {isSubmitting ? (
                    <span className={styles.loadingText}>
                        <span className={styles.spinner}></span>
                        送信中...
                    </span>
                ) : (
                    resolvedSubmitLabel
                )}
            </motion.button>

            <p className={styles.formNote}>
                {formNotePrimary}
                <br />
                ※ 経営者・決裁者の方を対象としています。
            </p>
        </form>
    );
}
