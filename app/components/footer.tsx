"use client";
import { useContext } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import ThemeContext from "../themecontext/themecontext";


const socialLinks = [
    {
        icons: <FaGithub />,
        link: "/",
        id: 0
    },
    {
        icons: <FaLinkedin />,
        link: "/",
        id: 1
    },
    {
        icons: <FaEnvelope />,
        link: "/",
        id: 2
    }
];

export default function Footer() {

    const { darkMode } = useContext(ThemeContext);

    return (
        <footer
            className="
                absolute
                bottom-0
                left-0
                w-full
                h-15
                flex
                justify-between
                items-center
                p-6
            "
        >
            <div>
                <p
                    className={`
                        ${darkMode ? "text-[var(--dark-accent)]" : "text-[var(--light-main-text)]"}
                `}>
                    &copy; 2026 Billy English. All rights reserved.
                </p>
            </div>

            <div>
                <ul className={`
                    flex
                    justify-center
                    items-center
                    gap-6
                    text-2xl
                    ${darkMode ? "text-[var(--dark-accent)]" : "text-[var(--light-main-text)]"}
                `}>
                    {
                    socialLinks.map((socialLink) => (
                        <i
                            key={socialLink.id}
                            className={`cursor-pointer"
                        `}>
                            {socialLink.icons}
                        </i>
                    ))
                    }
                </ul>
            </div>
        </footer>
    )
}