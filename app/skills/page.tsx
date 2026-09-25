"use client";
import Nav from "../components/navigation";
import Footer from "../components/footer";
import { FaHtml5, FaCss3Alt, FaJava, FaC, FaGolang, FaSass, FaReact, FaNodeJs, FaLinux, FaGithub, FaGitAlt, FaDocker, FaNpm } from "react-icons/fa6";
import { SiJavascript, SiTypescript, SiPython, SiNextdotjs, SiTailwindcss, SiExpress, SiPostgresql, SiPrisma, SiPostman, SiFigma } from "react-icons/si";

const frontendLanguages = [
    { icon: <FaHtml5 />, title: 'HTML', id: 0 },
    { icon: <FaCss3Alt />, title: 'CSS', id: 1 },
    { icon: <SiNextdotjs />, title: 'NextJS', id: 2 },
    { icon: <SiTailwindcss />, title: 'TailwindCss', id: 3 },
    { icon: <FaSass />, title: 'Sass', id: 4 },
    { icon: <FaReact />, title: 'React', id: 5 },
    { icon: <SiJavascript />, title: 'JavaScript', id: 6 },
    { icon: <SiTypescript />, title: 'TypeScript', id: 7 },
];

const backendLanguages = [
    { icon: <FaNodeJs />, title: 'NodeJS', id: 0 },
    { icon: <SiExpress />, title: 'Express', id: 1 },
    { icon: <SiPostgresql />, title: 'PostgresSQL', id: 2 },
    { icon: <SiPython />, title: 'python', id: 3 },
    { icon: <FaJava />, title: 'Java', id: 4 },
    { icon: <FaC />, title: 'Programming', id: 5 },
    { icon: <FaGolang />, title: 'Go', id: 6 },
    { icon: <SiPostgresql />, title: 'PostgreSQL', id: 7 },
];

const toolTechnologies = [
    { icon: <FaLinux />, title: 'Linux', id: 0 },
    { icon: <FaGithub />, title: 'Github', id: 1 },
    { icon: <FaGitAlt />, title: 'Git', id: 2 },
    { icon: <SiPostman />, title: 'Postman', id: 3 },
    { icon: <SiPrisma />, title: 'Prisma', id: 4 },
    { icon: <FaDocker />, title: 'Docker', id: 5 },
    { icon: <FaNpm />, title: 'Npm', id: 6 },
    { icon: <SiFigma />, title: 'Figma', id: 7 }
];

export default function Skill() {
    return (
        <>
            <Nav />
            <section
                className="
                    h-screen
                    w-screen
                    flex
                    flex-col
                    gap-8
                    items-center
                    pt-40
                "
            >
                <h2
                    className="
                        text-5xl
                        tracking-tight
                        font-light
                    "
                >
                    Skills
                </h2>

                <div
                    className="
                        flex
                        flex-col
                        items-center
                        justify-center
                    "
                >
                    <div
                        className="
                            overflow-hidden
                            p-10
                            flex
                            flex-col
                            items-center
                            justify-center
                            gap-4
                        "
                    >
                        <h3
                            className="
                                text-2xl
                                tracking-tighter
                                font-light
                            "
                        >
                            Front-End
                        </h3>
                        <div
                            className="
                                animate-ticker
                                h-8
                                w-175
                            "
                        >
                            <ul
                                className="
                                    flex
                                    gap-18
                                "
                            >
                                {frontendLanguages.map((items) => (
                                    <li
                                        key={items.id}
                                        className="
                                            flex
                                            flex-col
                                            items-center
                                            justify-center
                                            capitalize
                                            gap-2
                                            cursor-pointer
                                            hover:scale-140
                                            hover:delay-300
                                            hover:animate-bounce
                                        "
                                    >
                                        <i
                                            className="
                                                text-4xl
                                                font-semibold
                                            "
                                        >
                                            {items.icon}
                                        </i>
                                        <p
                                            className="
                                                text-md
                                                font-medium
                                                tracking-tighter
                                            "
                                        >
                                            {items.title}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div
                        className="
                            overflow-hidden
                            p-10
                            flex
                            flex-col
                            items-center
                            justify-center
                            gap-4
                        "
                    >
                        <h3
                            className="
                                text-2xl
                                tracking-tighter
                                font-light
                            "
                        >
                            BackEnd
                        </h3>

                        <div
                            className="
                                animate-ticker-reverse
                                h-8
                                w-175
                            "
                        >
                            <ul
                                className="
                                    flex
                                    gap-18
                                "
                            >
                                {backendLanguages.map((items) => (
                                    <li
                                        key={items.id}
                                        className="
                                            flex
                                            flex-col
                                            items-center
                                            justify-center
                                            capitalize
                                            gap-2
                                            cursor-pointer
                                            hover:scale-120
                                            hover:delay-300
                                            hover:animate-bounce
                                        "
                                    >
                                        <i
                                            className="
                                                text-3xl
                                            "
                                        >
                                            {items.icon}
                                        </i>
                                        <p
                                            className="
                                                text-md
                                                tracking-tighter
                                                font-medium
                                            "
                                        >
                                            {items.title}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div
                            className="
                                overflow-hidden
                                p-10
                                flex
                                flex-col
                                items-center
                                justify-center
                                gap-4
                            "
                        >
                            <h3
                                className="
                                    text-2xl
                                    tracking-tighter
                                    font-light
                                "
                            >
                                Tools
                            </h3>

                            <div
                                className="
                                    animate-ticker
                                    h-8
                                    w-175
                                "
                            >
                                <ul
                                    className="
                                        flex
                                        gap-18
                                    "
                                >
                                    {toolTechnologies.map((items) => (
                                        <li
                                            key={items.id}
                                            className="
                                                flex
                                                flex-col
                                                items-center
                                                justify-center
                                                capitalize
                                                gap-2
                                                cursor-pointer
                                                hover:scale-120
                                                hover:delay-300
                                                hover:animate-bounce
                                            "
                                        >
                                            <i
                                                className="
                                                    text-3xl
                                                "
                                            >
                                                {items.icon}
                                            </i>
                                            <p
                                                className="
                                                    text-md
                                                    tracking-tighter
                                                    font-light
                                                "
                                            >
                                                {items.title}
                                            </p>
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