"use client";

export default function Input({
    type = "text",
    className = "",
    placeholder = ""
}) {
    return (
        <input
            type={type}
            className={className}
            placeholder={placeholder}
        />
    );
};