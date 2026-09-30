"use client";

type ButtonType = {
    buttonText: string;
    className: string;
}

export default function Button({
    buttonText,
    className
}: ButtonType) {

    return (
        <button
            className={className}
        >
            {buttonText}
        </button>
    );
};