"use client";

export default function SkillCards({
    icon,
    title,
}) {

    return (
        <div
            className="
                flex
                flex-col
                items-center
                justify-center
            "
        >
            <i>
                <icon
                    className="
                        text-5xl
                    "
                />
            </i>
            <p
                className="
                    uppercase
                    text-lg
                    font-normal
                "
            >
                {title}
            </p>
        </div>
    );
};