"use client";
import { BiSolidLeftArrowSquare ,BiSolidRightArrowSquare } from "react-icons/bi";
import { useState, useContext } from "react";
import Nav from "../components/navigation";
import Footer from "../components/footer";
import ThemeContext from "../themecontext/themecontext";

export default function FeatureProjects() {

    const { darkMode } = useContext(ThemeContext);

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const currentProject = [
        { projectTitle: "Project 1", id: 0 },
        { projectTitle: "Project 2", id: 1 },
        { projectTitle: "Project 3", id: 2 }
    ];

    const currentIndex = currentProject[currentProjectIndex];

    const handlePreviousProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + currentProject.length) % currentProject.length);
    }

    const handleNextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % currentProject.length);
    }

    return (
        <section
            className={`
                min-h-screen
                min-w-screen
                flex
                flex-col
                justify-center
                items-center
                gap-12
                ${ darkMode ? "bg-[var(--dark-background)]" : "bg-[var(--light-background)]" }
        `}>
            <Nav />
            <h2 className={`
                text-4xl
                font-normal
                text-center
                pt-10
                ${ darkMode ? "text-[var(--dark-main-text)]" : "text-[var(--light-main-text)]" }
            `}>
                Feature Projects
            </h2>
            <div className={`
                border-2
                ${ darkMode ? "border-[var(--dark-borders)]" : "border-[var(--light-borders)]" }
                flex
                flex-col
                h-100
                w-150
                rounded-sm
                "
            `}>
                {currentIndex.projectTitle}
            </div>
            <div className="flex gap-5">
                <button
                    className="
                        text-4xl
                        cursor-pointer
                    "
                    onClick={handlePreviousProject}
                >
                    <BiSolidLeftArrowSquare
                        color={darkMode ? "var(--dark-accent)" : "var(--light-accent)"}
                    />
                </button>
                <button
                    className={`
                        text-4xl
                        cursor-pointer
                    onClick={handleNextProject}
                `}>
                    <BiSolidRightArrowSquare
                        color={darkMode ? "var(--dark-accent)" : "var(--light-accent)"}
                    />
                </button>
            </div>
            <Footer />
        </section>
    )
}