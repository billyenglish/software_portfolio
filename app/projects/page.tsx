"use client";
import Nav from "../components/navigation";
import Footer from "../components/footer";
import { useState } from "react";

const projects = [
    {
        title: "Title 1",
        id: 0,
    },
    {
        title: "Title 2",
        id: 1,
    },
    {
        title: "Title 3",
        id: 2,
    },
];

export default function Projects() {

    const [currentProject, setCurrentProject] = useState(0);

    const project = projects[currentProject];

    const handleNext = () => {
        setCurrentProject(
            (currentProject + 1) % projects.length
        )
    }

    const handleBack = () => {
        setCurrentProject(
            (currentProject - 1 + projects.length) % projects.length
        )
    }

    return (
        <>
            <Nav />
            <section
                className="
                    border
                    h-screen
                    w-screen
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-10
                "
            >
                <h2
                    className="
                        text-5xl
                        tracking-tighter
                        font-extralight
                    "
                >
                    Project
                </h2>

                <div
                    className="
                        border
                        h-100
                        w-150
                    "
                >
                    {project.title}
                </div>

                <div
                    className="
                        flex
                        gap-10
                    "
                >
                    <button
                        className="
                            border
                            h-8
                            w-20
                            text-xl
                            tracking-tighter
                            rounded-xs
                            cursor-pointer
                            hover:scale-110
                            hover:delay-100
                            hover:duration-200
                        "
                        onClick={handleBack}
                    >
                        Back
                    </button>
                    <button
                        className="
                            border
                            h-8
                            w-20
                            text-xl
                            tracking-tighter
                            rounded-xs
                            cursor-pointer
                            hover:scale-110
                            hover:delay-100
                            hover:duration-200
                        "
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            </section>
            <Footer />
        </>
    );
};