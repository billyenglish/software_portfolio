"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const navMenuIconFooter = [
    { icon: <FaGithub />, id: 0 },
    { icon: <FaLinkedin />, id: 1 },
    { icon: <FaEnvelope />, id: 2 },
];

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="
                absolute
                bottom-0
                w-screen
                h-14
                flex
                justify-between
                items-center
                pt-8
                pb-8
                pl-8
                pr-8
            "
        >
            <div>
                <p
                    className="
                        flex
                        items-center
                        text-md
                        font-medium
                        gap-2
                        cursor-pointer
                    "
                >
                    <span className="text-xl sm:text-md md:text-md font-medium">&copy;</span>
                    <span>{currentYear}</span>
                    <span className="text-md tracking-tighter">Billy English <span className="hidden md:inline lg:inline">| Software Engineer</span></span>
                </p>
            </div>

            <div>
                <ul
                    className="
                        flex
                        gap-6
                    "
                >
                    {navMenuIconFooter.map((items) => (
                        <li
                            key={items.id}
                            className="
                                text-2xl
                                font-semibold
                                cursor-pointer
                            "
                        >
                            {items.icon}
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};