import Link from "next/link";
import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "outline" | "white";
    className?: string;
    onClick?: () => void;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    href,
    variant = "primary",
    className = "",
    onClick,
    fullWidth = false
}) => {
    const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";
    const sizeStyles = "px-6 py-3 md:px-8 md:py-4 text-sm md:text-base";
    const widthStyles = fullWidth ? "w-full" : "";

    const variantStyles = {
        primary: "text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:ring-cyan-500",
        secondary: "text-blue-900 bg-white border-2 border-transparent hover:bg-gray-50 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-blue-500",
        outline: "text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:ring-blue-500",
        white: "text-blue-600 bg-white hover:bg-gray-100 shadow-md hover:shadow-lg"
    };

    const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles[variant]} ${widthStyles} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedClasses}>
            {children}
        </button>
    );
};

export default Button;
