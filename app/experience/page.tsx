"use client";
import Nav from "../components/navigation";
import Footer from "../components/footer";
import { SiTypescript, SiPostgresql } from "react-icons/si";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaXTwitter } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

const project1SkillsIcons = [
    { icon: <SiTypescript />, id: 0 },
    { icon: <FaReact />, id: 1 },
    { icon: <RiNextjsFill />, id: 2 },
    { icon: <FaNodeJs />, id: 3 },
    { icon: <SiPostgresql />, id: 4 },
    { icon: <FaGolang />, id: 5 },
    { icon: <FaDocker />, id: 6 }
];

const projectSkillsList = [
    { title: "Linux", id: 0 },
    { title: "Troubleshooting", id: 1 },
    { title: "RCA", id: 2 },
    { title: "Incident Reponse", id: 3 },
    { title: "AWS", id: 4 }
];

export default function Experience() {
    return (
        <>
            <Nav />
            <section
                className="
                    h-screen
                    w-screen
                    flex
                    flex-col
                "
            >
                <div
                    className="
                        flex
                    "
                >
                    <div
                        className="
                            h-34
                            w-screen
                            flex
                            flex-col
                            gap-2
                            mt-24
                            pl-7

                        "
                    >
                        <h2
                            className="
                                text-2xl
                                font-black
                                tracking-tighter
                                uppercase
                            "
                        >
                            Experience
                        </h2>
                        <h3
                            className="
                                text-4xl
                                font-semibold
                            "
                        >
                            My Journey
                        </h3>
                        <p
                            className="
                                text-lg
                                tracking-tighter
                                font-light
                            "
                        >
                            From data centers to code -- building systems, solving problems, and
                            creating software that makes an impact.
                        </p>
                    </div>
                </div>
                <div
                    className="
                        pl-4
                        pr-7
                        h-screen
                        flex
                    "
                >
                    <div
                        className="
                            w-5/6
                            flex
                            flex-col
                            gap-6
                        "
                    >
                        <div
                            className="
                                flex
                                pl-4
                                gap-4
                            "
                        >
                            <div>
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                    "
                                >
                                    <i>
                                        <FaCode
                                            className="
                                            text-5xl
                                        "
                                        />
                                    </i>
                                    <div>
                                        <h4
                                            className="
                                                text-lg
                                                font-black
                                                tracking-tighter
                                            "
                                        >
                                            Software Development
                                        </h4>

                                        <h5
                                            className="
                                                text-xl
                                                font-semibold
                                                tracking-tighter
                                            "
                                        >
                                            Independent Software Projects
                                        </h5>
                                        <div
                                            className="
                                                flex
                                                gap-6
                                            "
                                        >
                                            <p>Software Engineer</p>
                                            <ul>
                                                <li
                                                className="
                                                    list-disc
                                                    text-md
                                                "
                                                >
                                                    2023 - Present
                                                </li>
                                            </ul>
                                        </div>
                                        <p
                                            className="
                                                text-md
                                            "
                                        >
                                            Built and continue to build full-stack applications and personal projects,
                                            focusing on scalable, responsive, and maintainable solutions.
                                        </p>
                                    </div>
                                </div>
                                <ul
                                    className="
                                        flex
                                        flex-col
                                        pl-4
                                        gap-1
                                        text-md
                                    "
                                >
                                    <li
                                        className="
                                            list-disc
                                        "
                                    >
                                        The Board -- full-stack message board (Typescript, React, Node.js, PostgresSQL)
                                    </li>
                                    <li
                                        className="
                                            list-disc
                                        "
                                    >
                                        ServicePulse -- infrastructure monitoring dashboard (Go, Docker)
                                    </li>
                                </ul>
                                <div
                                    className="
                                        flex
                                        items-center
                                        pl-4
                                        gap-4
                                        mt-3
                                    "
                                >
                                    <p
                                        className="
                                            text-md
                                        "
                                    >
                                        Skills:
                                    </p>
                                    <ul
                                        className="
                                            flex
                                            gap-6
                                        "
                                    >
                                        {project1SkillsIcons.map((items) => (
                                            <li
                                                key={items.id}
                                                className="
                                                    list-
                                                    text-2xl
                                                    flex
                                                    justify-center
                                                    cursor-pointer
                                                "
                                            >
                                                {items.icon}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            className="
                                pl-4
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4
                                "
                            >
                                <i>
                                    <FaAws
                                        className="
                                            text-5xl
                                        "
                                    />
                                </i>
                                <div>
                                    <h4
                                        className="
                                            text-lg
                                            font-black
                                            tracking-tighter
                                            capitalize
                                        "
                                    >
                                        infrastructure &amp; operations
                                    </h4>
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-6
                                        "
                                    >
                                        <p
                                            className="
                                                text-md
                                            "
                                        >
                                            DCO Level 3
                                        </p>
                                        <ul>
                                            <li
                                                className="
                                                    list-disc
                                                    text-md
                                                "
                                            >
                                                Dec 2025 - Present
                                            </li>
                                        </ul>
                                    </div>
                                    <p
                                        className="
                                            text-md
                                        "
                                    >
                                        Built and continue to build full-stack applications and personal projects,
                                        focusing on scalable, responsive, and maintainable solutions.
                                    </p>
                                </div>
                            </div>
                            <ul
                                className="
                                    flex
                                    flex-col
                                    pl-4
                                    gap-1
                                    text-md
                                "
                            >
                                <li
                                    className="
                                        list-disc
                                    "
                                >
                                    The Board -- full-stack message board (Typescript, React, Node.js, PostgresSQL)
                                </li>
                                <li
                                    className="
                                        list-disc
                                    "
                                >
                                    ServicePulse -- infrastructure monitoring dashboard (Go, Docker)
                                </li>
                            </ul>
                            <div
                                className="
                                    flex
                                    items-center
                                    pl-4
                                    gap-4
                                    mt-2
                                "
                            >
                                <p
                                    className="
                                        text-md
                                    "
                                >
                                    Skills:
                                </p>
                                <ul
                                    className="
                                        flex
                                        gap-6
                                    "
                                >
                                    {projectSkillsList.map((items) => (
                                        <li
                                            key={items.id}
                                                className="
                                                    border
                                                    list-
                                                    text-sm
                                                    flex
                                                    justify-center
                                                    cursor-pointer
                                                    pt-0.4
                                                    pb-0.4
                                                    pl-0.75
                                                    pr-0.75
                                                    rounded-md
                                                "
                                            >
                                                {items.title}
                                         </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="
                                pl-4
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4
                                "
                            >
                                <i>
                                    <FaXTwitter
                                        className="
                                            text-5xl
                                        "
                                    />
                                </i>
                                <div>
                                    <h4
                                        className="
                                            text-lg
                                            font-black
                                            tracking-tighter
                                            capitalize
                                        "
                                    >
                                        infrastructure &amp; operations
                                    </h4>
                                    <div
                                        className="
                                            flex
                                            gap-6
                                            text-md
                                        "
                                    >
                                        <p>DCO Level 3</p>
                                        <ul>
                                            <li
                                                className="
                                                    list-disc
                                                "
                                            >
                                                Dec 2025 - Present
                                            </li>
                                        </ul>
                                    </div>
                                    <p
                                        className="
                                            text-md
                                        "
                                    >
                                        Built and continue to build full-stack applications and personal projects,
                                        focusing on scalable, responsive, and maintainable solutions.
                                    </p>
                                </div>
                            </div>
                            <ul
                                className="
                                    flex
                                    flex-col
                                    pl-4
                                    gap-2
                                    text-md
                                "
                            >
                                <li
                                    className="
                                        list-disc
                                    "
                                >
                                    The Board -- full-stack message board (Typescript, React, Node.js, PostgresSQL)
                                </li>
                                <li
                                    className="
                                        list-disc
                                    "
                                >
                                    ServicePulse -- infrastructure monitoring dashboard (Go, Docker)
                                </li>
                            </ul>
                            <div
                                className="
                                    flex
                                    items-center
                                    pl-4
                                    gap-4
                                    mt-3
                                "
                            >
                                <p>
                                    Skills:
                                </p>
                                <ul
                                    className="
                                        flex
                                        gap-6
                                        text-md
                                    "
                                >
                                    {projectSkillsList.map((items) => (
                                        <li
                                            key={items.id}
                                                className="
                                                    border
                                                    list-
                                                    text-sm
                                                    flex
                                                    justify-center
                                                    cursor-pointer
                                                    pt-0.4
                                                    pb-0.4
                                                    pl-0.75
                                                    pr-0.75
                                                    rounded-md
                                                "
                                            >
                                                {items.title}
                                         </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};