import ThemeContext from "../themecontext/themecontext";;
import { useContext } from "react";

type ExperienceCardsProps = {
    cardTitle: string;
    subTitle: string;
    dateTitle: string;
    experience1: string;
    experience2: string;
    experience3: string;
    experience4: string;
    experience5: string;
    experience6: string;
    id: number;
}

export default function ExperienceCards({
    cardTitle,
    subTitle,
    dateTitle,
    experience1,
    experience2,
    experience3,
    experience4,
    experience5,
    experience6
}:ExperienceCardsProps) {

    const { darkMode } = useContext(ThemeContext);

    return (
        <div
            className={`
                flex
                flex-col
                h-110
                w-180
                gap-2
                p-8
                rounded-sm
     `}>
            <h3
                className={`
                    text-xl
                    font-bold
                    tracking-tighter
                    ${ darkMode ? "text-[var(--dark-secondary-text)]" : "text-[var(--dark-secondary-text)]" }
            `}>
                {cardTitle} <span className={`
                    text-lg
                    font-light
                    ${ darkMode ? "text-[var(--dark-accent)]" : "text-[var(--light-main-text)]" }
                `}>{subTitle}</span>
            </h3>

            <p
                className={`
                    text-md
                    font-light
                    ${ darkMode ? "text-[var(--dark-accent)]" : "text-[var(--light-main-text)]" }
            `}>
                {dateTitle}
            </p>

            <hr
                className={`
                    border-1
                    ${ darkMode ? "border-[var(--dark-borders)]" : "border-[var(--dark-borders)]" }
                `}
            />

            <ul
                className={`
                    flex
                    flex-col
                    gap-1
                    text-md
                    ${ darkMode ? "text-[var(--dark-main-text)]" : "text-[var(--dark-main-text)]" }
                `}>
                <li>
                    {experience1}
                </li>
                <li>
                    {experience2}
                </li>
                <li>
                    {experience3}
                </li>
                <li>
                    {experience4}
                </li>
                <li>
                    {experience5}
                </li>
                <li>
                    {experience6}
                </li>
            </ul>
        </div>
    );
};