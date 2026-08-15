"use client";
import { useContext } from "react";
import Image from "next/image";
import Nav from "../components/navigation";
import Footer from "../components/footer";
import profileImage from "../images/billyenglish.jpeg"
import ThemeContext from "../themecontext/themecontext";

export default function AboutMe() {

    const { darkMode } = useContext(ThemeContext);

    return (
        <section
            className={`
                min-h-screen
                min-w-screen
                flex
                items-center
                justify-center
                ${ darkMode ? "bg-[var(--dark-background)]" : "bg-[var(--light-background)]" }
        `}>
            <Nav />
            <div className="flex items-center justify-center w-1/2 min-h-screen">
                    <Image
                        src={profileImage}
                        alt="Billy English"
                        height={475}
                    />
                </div>
                <div className="w-1/2 min-h-screen flex flex-col justify-center items-center gap-16">
                    <h3 className={`
                        text-4xl
                        font-normal
                        tracking-wider
                        ${ darkMode ? "text-[var(--dark-main-text)]" : "text-[var(--light-main-text)]" }
                    `}>
                        About Me
                    </h3>

                    <div
                        className={`
                            text-lg
                            flex
                            flex-col
                            gap-6
                            w-160
                            pl-6
                            pr-6"
                            ${ darkMode ? "text-[var(--dark-secondary-text)]" : "text-[var(--light-secondary-text)]" }
                        `}>
                        <p>
                            Software Engineer with a background spanning large-scale infrastructure and modern full-stack development.
                            I currently work at AWS and previously worked in data center operations at Twitter, where I supported mission-critical
                            systems and developed a strong understanding of reliability, scalability, and performance in production environments.
                        </p>

                        <p>
                            I build full-stack web applications using React, TypeScript, Node.js, and SQL, with additional experience in Java, C#,
                            and Python. My infrastructure background shapes how I approach development—focusing on clean architecture, maintainability,
                            and systems that perform reliably under real-world conditions.
                        </p>

                        <p>
                            I enjoy building practical, scalable software and continuously improving through hands-on development and real-world problem
                            solving.
                        </p>
                    </div>
                </div>
            <Footer />
        </section>
    )
}