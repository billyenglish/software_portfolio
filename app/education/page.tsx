"use client";
import Nav from "../components/navigation";
import Footer from "../components/footer";
import { BiSolidLeftArrowSquare ,BiSolidRightArrowSquare } from "react-icons/bi";
import ThemeContext from "../themecontext/themecontext";;
import { useContext } from "react";

const educationHistory = [
    {
        educationTitle: `Georgia State University,`,
        educationSubTitle: `Associate of Science`,
        educationDate: `8/2016 – 5/2019 | Atlanta, GA`,
        educationSummary: `Developed a strong foundation in programming, software development, algorithms, data structures<br />
        computer systems, networking, and database fundamentals.
        `,
        educationBulletTitle1: ``,
        educationBulletTitle2: ``,
        educationButtetTitle3: ``,

    }
];

export default function Education() {

    const { darkMode } = useContext(ThemeContext);

    return (
        <section
            className={`
                min-h-screen
                min-w-screen
                flex
                flex-col
                items-center
                justify-center
                gap-8
                ${ darkMode ? "bg-[var(--dark-background)]" : "bg-[var(--light-background)]" }
        `}>
            <Nav />
            <h2
                className={`
                    text-4xl
                    text-center
                    tracking-wider
                    font-normal
                    ${ darkMode ? "text-[var(--dark-main-text)]" : "text-[var(--dark-main-text)]" }
            `}>
                Education
            </h2>

            <div
                className={`
                    flex
                    flex-col
                    gap-3
                    w-200
                    p-10
            `}>
                <h3
                    className={`
                        text-2xl
                        tracking-tight
                        font-bold
                        ${ darkMode ? "text-[var(--dark-secondary-text)]" : "text-[var(--dark-secondary-text)]" }
                `}>
                    Georgia State University,&nbsp;
                    <span
                        className={`
                            text-xl
                            font-light
                            italic
                            ${ darkMode ? "text-[var(--dark-accent)]" : "text-[var(--light-main-text)]" }
                        `}>
                        Associate Degree of Science
                    </span>
                </h3>

                <h5
                    className={`
                        ${ darkMode ? "text-[var(--dark-main-text)]" : "text-[var(--light-main-text)]" }
                `}>
                    8/2016 – 5/2019 | Atlanta, GA
                </h5>

                <hr
                    className={
                        darkMode
                            ? "border-[var(--dark-secondary-text)]"
                            : "border-[var(--light-secondary-text)]"
                    }
                />

                <p className={`
                    text-md"
                    ${ darkMode ? "text-[var(--dark-main-text)]" : "text-[var(--light-main-text)]" }
                `}>
                    Developed a strong foundation in programming, software development, algorithms, data structures
                    computer systems, networking, and database fundamentals.
                </p>

                <ul
                    className="
                        flex
                        flex-col
                        gap-2
                        text-sm
                    "
                >
                    <li>
                        <span
                            className={`
                                underline
                                underline-offset-7
                                font-extrabold
                                pb-20
                                uppercase
                                ${ darkMode ? "text-[var(--dark-secondary-text)]" : "text-[var(--light-secondary-text)]" }
                        `}>
                            Relevant Coursework
                        </span>
                    </li>
                    <li>
                        <span
                            className={`
                                font-bold
                                tracking-wider
                                ${ darkMode ? "text-[var(--dark-secondary-text)]" : "text-[var(--light-secondary-text)]" }
                        `}>
                            Java
                        </span>
                        <ul className={`${ darkMode ? "text-[var(--dark-main-text)]" : "text-[var(--light-main-text)]"}`}>
                            <li>
                                Focused on programming, software development, algorithms, data structures, computer systems,
                                and database fundamentals.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span
                            className={`
                                font-bold
                                tracking-wider
                                ${ darkMode ? "text-[var(--dark-secondary-text)]" : "text-[var(--light-secondary-text)]" }
                        `}>
                            Python
                        </span>
                        <ul>
                            <li className={`${ darkMode ? "text-[var(--dark-main-text)]" : "text-[var(--light-main-text)]" }`}>
                                Learned Python programming fundamentals, including variables, functions, loops, object-oriented
                                programming, file handling, modules, and debugging techniques.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span
                            className={`
                                font-bold
                                tracking-wider
                                ${ darkMode ? "text-[var(--dark-secondary-text)]" : "text-[var(--light-secondary-text)]" }
                        `}>
                            C
                        </span>
                        <ul>
                            <li className={`${ darkMode ? "text-[var(--dark-main-text)]" : "text-[var(--light-main-text)]"}`}>
                                Learned the fundamentals of C programming, including pointers, memory management, functions, and
                                data structures.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span
                            className={`
                                font-bold
                                tracking-wider
                                ${ darkMode ? "text-[var(--dark-secondary-text)]" : "text-[var(--light-secondary-text)]" }
                        `}>
                            Data Structures
                        </span>
                        <ul>
                            <li className={`${ darkMode ? "text-[var(--dark-main-text)]" : "text-[var(--light-main-text)]"}`}>
                                Studied and applied fundamental data structures, including arrays, linked lists, stacks, queues, trees, hash tables,
                                and graphs to solve programming problems efficiently.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="flex gap-6">
                <button
                    className="
                        text-4xl
                        cursor-pointer
                    "
                >
                    <BiSolidLeftArrowSquare
                        color={darkMode ? "var(--dark-accent)" : "var(--light-accent)"}
                    />
                </button>
                <button
                    className="
                        text-4xl
                        cursor-pointer
                    "
                >
                    <BiSolidRightArrowSquare
                        color={darkMode ? "var(--dark-accent)" : "var(--light-accent)"}
                    />
                </button>
            </div>
            <Footer />
        </section>
    );
};