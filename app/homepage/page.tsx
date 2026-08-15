"use client";
import { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Nav from "../components/navigation";
import Footer from "../components/footer";
import ThemeContext from "../themecontext/themecontext";

export default function Homepage() {

    const { darkMode } = useContext(ThemeContext);

    return (
        <section
            className={`
                min-h-screen
                min-w-screen
                flex
                flex-col
                justify-center
                items-center
                ${ darkMode ? "bg-[var(--dark-background)]" : "bg-[var(--light-background)]" }
        `}>
            <Nav />
            <div className="
                flex
                flex-col
                justify-center
                items-center
                gap-8"
            >
                <div>
                    <h2
                        className={`
                            text-6xl
                            font-normal
                            text-center
                            ${ darkMode ? "text-[var(--dark-main-text)]" : "text-[var(--light-main-text)]" }
                    `}>
                        <TypeAnimation
                            sequence={[
                                "Hi, I'm Billy !",
                                3000,
                                "Software Engineer",
                                3000,
                                "Full-Stack Developer",
                                3000,
                                "CyberSecurity Enthusiast",
                                3000,
                            ]}
                            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                            deletionSpeed={{ type: "keyStrokeDelayInMs", value: 100 }}
                            repeat={Infinity}
                            wrapper="span"
                        />
                    </h2>
                </div>
                <div>
                    <h3
                        className={`
                            text-2xl
                            font-light
                            text-center
                            ${ darkMode ? "text-[var(--dark-secondary-text)]" : "text-[var(--light-secondary-text)]" }
                    `}>
                        <TypeAnimation
                            sequence={[
                                "Building software across languages and platforms.",
                                3000,
                            ]}
                            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                            deletionSpeed={{ type: "keyStrokeDelayInMs", value: 100 }}
                            repeat={Infinity}
                            wrapper="span"
                        />
                    </h3>
                </div>
                <div className="flex gap-4">
                    <div className={`h-5 w-5 rounded-2xl ${ darkMode ? "bg-[var(--dark-accent)]" : "bg-[var(--light-accent)]" } animate-bounce [animation-delay:0]`}></div>
                    <div className={`h-5 w-5 rounded-2xl ${ darkMode ? "bg-[var(--dark-accent)]" : "bg-[var(--light-accent)]" } animate-bounce [animation-delay:200ms]`}></div>
                    <div className={`h-5 w-5 rounded-2xl ${ darkMode ? "bg-[var(--dark-accent)]" : "bg-[var(--light-accent)]" } animate-bounce [animation-delay:400ms]`}></div>
                </div>
                <div
                    className="
                        flex
                        gap-4
                    "
                >
                    <button
                        className={`
                            px-4
                            py-2
                            w-35
                            rounded-lg
                            cursor-pointer
                            ${darkMode
                                ? "bg-[var(--dark-accent)] text-[var(--dark-main-text)]"
                                : "bg-[var(--dark-background)] text-[var(--main-text)]"
                            }
                        "
                    `}>
                        View Projects
                    </button>
                    <button
                        className={`
                            px-4
                            py-2
                            w-35
                            rounded-lg
                            cursor-pointer
                            ${darkMode
                                ? "bg-[var(--dark-accent)] text-[var(--dark-main-text)]"
                                : "bg-[var(--dark-background)] text-[var(--dark-main-text)]"
                            }
                    `}>
                        Resume
                    </button>
                </div>
                <div>
                    <button
                        className={`
                            text-4xl
                            animate-bounce
                            cursor-pointer
                    `}>
                        <FaArrowAltCircleRight
                            color={darkMode ? "var(--dark-accent)" : "var(--light-accent)"}
                        />
                    </button>
                </div>
            </div>
            <Footer />
        </section>
    );
};