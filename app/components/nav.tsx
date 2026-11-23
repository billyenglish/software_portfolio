"use client";
import Link from 'next/link';
import { useState } from "react";

const navMenu = [
    { title: 'Home', link: '/', id: 0 },
    { title: 'Work', link: '/work', id: 1 },
    { title: 'About', link: '/about', id: 2 },
    { title: 'Contact', link: '/contact', id: 3 }
]

export default function Nav() {

    return (
        <nav
            className="
                flex
                fixed
                justify-between
                pt-6
                pb-6
                pl-10
                pr-10
                w-screen
                z-30
            "
        >
            <div>
                <Link href="/">
                    <svg
                        viewBox="0 0 64 40"
                        className="h-6 w-auto"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 3h17c9 0 14 4 14 10 0 4-2 7-6 8 5 1 8 4 8 8 0 6-5 8-14 8H2V3Zm8 7v7h9c4 0 6-1 6-4 0-2-2-3-6-3h-9Zm0 14v6h11c4 0 6-1 6-3s-2-3-6-3H10Z"
                                    />
                                    <path d="M37 3h25v7H45v6h14v7H45v7h17v7H28v-7h9V3Z" />
                    </svg>
                </Link>
            </div>

            <div>
                <ul
                    className="
                        flex
                        gap-14
                    "
                >
                    {navMenu.map((items) => (
                        <li
                            key={items.id}
                            className="
                                uppercase
                                font-stretch-110%
                                tracking-tighter
                                hover:underline
                                hover:underline-offset-2
                            "
                        >
                            <Link href={items.link}>
                                {items.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};