"use client";
import Nav from "../components/navigation";
import Footer from "../components/footer";
import ThemeContext from "../themecontext/themecontext";;
import { useContext } from "react";


export default function Contact() {

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
            <h2 className={`
                text-4xl
                text-normal
                tracking-wider
                font-normal
                pt-20
                ${ darkMode ? "text-[var(--dark-main-text)]" : "text-[var(--light-main-text)]" }
            `}>
                Contact
            </h2>

            <div className="flex items-center justify-center h-150 w-200">
                <form className="flex flex-col gap-4">
                    <div>
                        <input
                            className={`
                                border-2
                                ${ darkMode ? "border-[var(--dark-borders)]" : "border-[(var(--light-borders)]" }
                                h-12
                                w-120
                                rounded-xs
                                placeholder-black
                                bg-[var(--light-background)]
\                            `}
                            type="text"
                            placeholder="Full Name"
                        />
                    </div>
                    <div>
                        <input
                            className={`
                                border-2
                                h-12 w-120
                                rounded-xs
                                placeholder-black
                                bg-[var(--light-background)]
                            `}
                            type="text"
                            placeholder="Subject"
                        />
                    </div>
                    <div>
                        <textarea
                            className={`
                                border-2
                                h-70
                                w-120
                                placeholder-black
                                rounded-xs
                                resize-none
                                scroll-auto
                                bg-[var(--light-background)]
                            `}
                            placeholder="Provider Details"
                        >
                        </textarea>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                        <button
                            className="
                                bg-slate-900
                                text-slate-200
                                flex
                                items-center
                                justify-center
                                p-2
                                text-lg
                                rounded-sm
                                h-10
                                w-20
                                cursor-pointer
                                hover:bg-slate-700
                            "
                            onClick={() => alert("Submit")}
                        >
                            Submit
                        </button>
                        <button
                            className="
                                bg-slate-900
                                text-slate-200
                                flex
                                items-center
                                justify-center
                                p-2
                                text-lg
                                rounded-sm
                                h-10
                                w-20
                                cursor-pointer
                                hover:bg-slate-700
                            "
                            onClick={() => alert("Clear")}>
                            Clear
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </section>
    )
}