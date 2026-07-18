"use client"
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaX, FaMoon } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";

const navMenu = [
    { navTitle: 'Home', navLink: '/', id: 0 },
    { navTitle: 'Featured Projects', navLink: '/featured_projects', id: 1 },
    { navTitle: 'Skills', navLink: '/skills', id: 2 },
    { navTitle: 'Experience', navLink: '/experience', id: 3 },
    { navTitle: 'About Me', navLink: '/about', id: 4 },
    { navTitle: 'Education', navLink: '/education', id: 5 },
    { navTitle: 'Contact', navLink: '/contact', id: 6 }
];

export default function Nav() {

    const [openMenu, setOpenMenu] = useState(true);
    const [themeMode, setThemeMode] = useState(true);

    const handleOpenMenu = () => {
        setOpenMenu(prevMenu => !prevMenu)
    }

    const handleThemeMode = () => {
        setThemeMode(prevMode => !prevMode);
    }

    return (
        <nav className="flex items-center justify-between absolute top-0 left-0 min-w-full h-20 pl-8 pr-8 z-10">
            <div>
                <h1 className="text-xl font-light tracking-wider cursor-pointer">
                    <Link href="/">
                        { openMenu ? "Billy English" : "Software Engineer" }
                    </Link>
                </h1>
            </div>

            <div className="flex items-center justify-center gap-4">
                <button onClick={handleThemeMode}>
                    { themeMode
                        ? <FaMoon className="text-2xl cursor-pointer" />
                        : <MdSunny className="text-2xl cursor-pointer" />
                    }
                </button>
                <button onClick={handleOpenMenu}>
                    { openMenu
                        ?   <FaBars className="text-2xl cursor-pointer" />
                        : <FaX className="text-2xl cursor-pointer" /> }
                </button>
            </div>

            <div className="border-2 absolute right-0 top-20">
                <ul>
                    {navMenu.map((links) => (
                        <li key={links.id}>
                            <Link href={links.navLink}>
                                {links.navTitle}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

