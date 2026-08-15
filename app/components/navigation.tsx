"use client";
import { useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import Link from "next/link";
import ThemeContext from "../themecontext/themecontext";

const navMenuItems = [
    { title: "Home", href: "/", id: 0 },
    { title: "Feature Projects", href: "/feature_projects", id: 1 },
    { title: "Skills", href: "/skills", id: 2 },
    { title: "Experience", href: "/experience", id: 3 },
    { title: "Education", href: "/education", id: 4 },
    { title: "About Me", href: "/aboutme", id: 5 },
    { title: "Contact", href: "/contact", id: 6 },
];

export default function Navigation() {

    const [navOpen, setNavOpen] = useState(true);

    const handleNavOpen = () => {
        setNavOpen(navOpen => !navOpen);
    }

    const { darkMode, handleDarkMode } = useContext(ThemeContext);

    return (
        <nav
            className={`
                absolute
                top-0
                left-0
                w-full
                flex
                justify-between
                items-center
                p-5
                h-20
                z-20
        `}>
            <div>
                <h1
                    className={`
                        text-xl
                        text-bold
                        tracking-tighter
                        ${darkMode ? "text-[var(--dark-accent)]" : "text-[var(--light-main-text)]"}
                    "
                `}>
                    { navOpen ? "Billy English" : "Software Engineer"}
                </h1>
            </div>

            <div className={
                 navOpen ? "hidden" : "absolute translate-x-0 top-20 right-0 z-30 flex flex-col duration-500 transition-all ease-in-out"}>
                <ul
                    className="
                        flex
                        flex-col
                        gap-5
                        text-center
                        p-4
                    "
                >
                    {
                        navMenuItems.map((items) => (
                            <li
                                key={items.id}
                                className={`
                                    text-lg
                            `}>
                                <Link
                                    href={items.href}
                                    className={`
                                        ${ darkMode
                                            ? "text-[var(--dark-main-text)]"
                                            : "text-[var(--light-main-text)]"
                                        }
                                `}>
                                    {items.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div
                className={`
                    flex
                    items-center
                    justify-center
                    gap-6
                    ${darkMode ? "text-[var(--dark-main-text)]" : "text-[var(--light-main-text)]"}
            `}>
                <button
                    className="text-2xl cursor-pointer bg-origin-content"
                    onClick={handleDarkMode}
                >
                    {
                        darkMode ? <IoSunnySharp className="text-3xl" /> : <IoMoon />
                    }
                </button>
                <button
                    className="text-3xl cursor-pointer"
                    onClick={handleNavOpen}
                >
                    { navOpen ? <GiHamburgerMenu /> : <CgClose /> }
                </button>
            </div>
        </nav>
    );
};