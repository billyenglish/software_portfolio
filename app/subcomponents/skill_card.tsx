"use client";
import { ReactNode } from "react";

type SkillCardType = {
    icon: ReactNode;
    title: string;
}

export default function SkillCards({
    icon,
    title,
}:SkillCardType) {

    return (
        <div
            className="
                flex
                flex-col
                items-center
                justify-center
            "
        >
            <i
                className="
                    text-5xl
                "
            >
                {icon}
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