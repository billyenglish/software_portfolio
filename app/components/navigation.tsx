"use client";
import { IoMdClose } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import Link from "next/link";
import { useState } from "react";
import { FaLinkSlash } from "react-icons/fa6";

const navMenu = [
    { title: 'Home', links: "/", id: 0 },
    { title: 'Projects', links: "/projects", id: 1 },
    { title: 'Skills', links: "/skills", id: 2 },
    { title: 'Experience', links: "/experience", id: 3 },
    { title: 'About', links: "/about", id: 4 },
    { title: 'Contact', links: "/contact", id: 5 },
];

export default function Nav() {

    const [createNavMenu, setCreateNavMenu] = useState(true);

    const handleCreateNavMenu = () => {
        setCreateNavMenu(prevMenu => !prevMenu);
    }

    return (
        <nav
            className="
                absolute
                flex
                justify-between
                items-center
                h-20
                w-screen
                pt-8
                pb-8
                pl-8
                pr-8
            "
        >
            <div>
                <h1
                    className="
                        text-lg
                        tracking-tighter
                        cursor-pointer
                    "
                >
                    Billy English
                </h1>
            </div>

            <div
                className="
                    hidden
                    lg:flex
                    items-center
                    gap-12
                "
            >
                <div>
                    <ul
                        className="
                            flex
                            gap-8
                        "
                    >
                        {navMenu.map((items) => (
                            <li
                                key={items.id}
                                className="
                                    tracking-tighter
                                    font-medium
                                    cursor-pointer
                                    text-md
                                "
                            >
                                <Link href={items.links}>
                                    {items.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div
                className="
                    lg:hidden
                    items-center
                "
            >
                <button
                    onClick={handleCreateNavMenu}
                    className="
                        text-3xl
                    "
                >
                    {createNavMenu ? <CgMenuGridO /> : <IoMdClose />}
                </button>
            </div>

            <div
                className="
                    absolute
                    w-screen
                    h-155
                    left-0
                    top-20
                    right-0
                    bottom-15
                    hidden
                    items-center
                "
            >
                <ul
                    className="
                        flex
                        flex-col
                        gap-4
                        pl-8
                    "
                >
                    {navMenu.map((items) => (
                        <li
                            key={items.id}
                            className="
                                text-3xl
                                sm:text-2xl
                                md:text-3xl
                                tracking-wider
                                cursor-pointer
                            "
                        >
                            {items.title}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};