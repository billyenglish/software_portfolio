"use client";


export default function Button({
    buttonText,
    className
}) {

    return (
        <button
            className={className}
        >
            {buttonText}
        </button>
    );
};