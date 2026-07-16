"use client"
import Link from "next/link"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="h-18 flex justify-evenly items-center min-w-screen absolute bottom-0 left-0 z-10">
            <div className="flex flex-col items-center">
                <h3>Billy English</h3>
                <p>Software Engineer</p>
            </div>

            <div className="flex flex-col items-center">
                <p className="">
                    Building software that is reliable, scalable, and user-focused. &copy; { new Date().getFullYear() }
                </p>
            </div>

            <div className="flex gap-6">
                <Link href="/" className="cursor-pointer">
                    <FaLinkedin className="text-2xl" />
                </Link>
                <Link href="/" className="cursor-pointer">
                    <FaGithub className="text-2xl" />
                </Link>
                <Link href="/" className="cursor-pointer">
                    <FaEnvelope className="text-2xl" />
                </Link>
            </div>
        </footer>
    );
};