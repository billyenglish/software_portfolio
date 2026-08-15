"use client";
import Nav from "../components/navigation";
import Footer from "../components/footer";
import { SiJavascript, SiTypescript, SiPython, SiScala, SiC, SiXml, SiTailwindcss, SiBulma, SiExpress, SiDjango, SiPostgresql, SiMysql, SiVite, SiJest, SiGnubash, SiSvg, SiNodedotjs, SiMongodb, SiWebpack, SiGraphql, SiCypress, SiVitest, SiJira } from "react-icons/si";
import { FaJava, FaGolang, FaRust, FaHtml5, FaCss3Alt, FaSass, FaReact, FaTerminal, FaBootstrap, FaGithub, FaNpm, FaFigma } from "react-icons/fa6";
import { BiSolidLeftArrowSquare ,BiSolidRightArrowSquare } from "react-icons/bi";
import { RiNextjsFill, RiNodejsFill } from "react-icons/ri";
import { TbSql } from "react-icons/tb";
import { useState, useContext } from "react";
import ThemeContext from "../themecontext/themecontext";

type Skills = {
    icon: React.ReactNode;
    title: string;
    id: number;
}

type SkillsCatergoriesProps = {
    skillsTitle: string;
    skills: Skills[];
}

export default function Skills() {

    const { darkMode } = useContext(ThemeContext);

    const skillsCatergories: SkillsCatergoriesProps[] =
    [
        {
            skillsTitle: "Programming Languages",
            skills: [
                {
                    icon: <SiJavascript />,
                    title: "JavaScript",
                    id: 0,
                },
                {
                    icon: <SiTypescript />,
                    title: "TypeScript",
                    id: 1,
                },
                {
                    icon: <SiPython />,
                    title: "Python",
                    id: 2,
                },
                {
                    icon: <SiScala />,
                    title: "Scala",
                    id: 3,
                },
                {
                    icon: <SiC />,
                    title: "C Programming",
                    id: 4,
                },
                {
                    icon: <FaJava />,
                    title: "Java",
                    id: 5,
                },
                {
                    icon: <FaGolang />,
                    title: "Go",
                    id: 6,
                },
                {
                    icon: <FaRust />,
                    title: "Rust",
                    id: 7,
                }
            ],
        },
        {
            skillsTitle: "Markup Languages",
            skills: [
                {
                    icon: <FaHtml5 />,
                    title: "HTML5",
                    id: 0
                },
                {
                    icon: <SiXml />,
                    title: "XML",
                    id: 1,
                },
                {
                    icon: <SiSvg />,
                    title: "SVG",
                    id: 2,
                }
            ],
        },
        {
            skillsTitle: "Scripting & CommandLine",
            skills: [
                {
                    icon: <SiGnubash />,
                    title: "Bash",
                    id: 0
                },
                {
                    icon: <FaTerminal />,
                    title: "Terminal",
                    id: 1,
                },
            ],
        },
        {
            skillsTitle: "FrontEnd",
            skills: [
                {
                    icon: <FaReact />,
                    title: "React",
                    id: 0,
                },
                {
                    icon: <RiNextjsFill />,
                    title: "NextJS",
                    id: 1,
                },
                {
                    icon: <SiTailwindcss />,
                    title: "TailwindCSS",
                    id: 2
                },
                {
                    icon: <FaSass />,
                    title: "Sass",
                    id: 3,
                },
                {
                    icon: <FaCss3Alt />,
                    title: "CSS",
                    id: 4,
                },
                {
                    icon: <SiBulma />,
                    title: "Bulma",
                    id: 5,
                },
                {
                    icon: <FaBootstrap />,
                    title: "Bootstrap",
                    id: 6,
                },
                {
                    icon: <SiVite />,
                    title: "Vite",
                    id: 7
                },
            ],
        },
        {
            skillsTitle: "Backend",
            skills: [
                {
                    icon: <RiNodejsFill />,
                    title: "NodeJS",
                    id: 0,
                },
                {
                    icon: <SiExpress />,
                    title: "Express",
                    id: 1,
                },
                {
                    icon: <SiDjango />,
                    title: "Django",
                    id: 2,
                },
                {
                    icon: <SiNodedotjs />,
                    title: "NodeJS",
                    id: 3,
                },
                {
                    icon: <SiGraphql />,
                    title: "GraphQL",
                    id: 4,
                },
            ],
        },
        {
            skillsTitle: "Databases",
            skills: [
                {
                    icon: <SiMysql />,
                    title: "MySql",
                    id: 0,
                },
                {
                    icon: <TbSql />,
                    title: "SQL",
                    id: 1,
                },
                {
                    icon: <SiPostgresql />,
                    title: "Postgresql",
                    id: 2,
                },
                {
                    icon: <SiMongodb />,
                    title: "Mongodb",
                    id: 3,
                },
            ],
        },
        {
            skillsTitle: "Tools & Infrastructure",
            skills: [
                {
                    icon: <FaGithub />,
                    title: "Github",
                    id: 0
                },
                {
                    icon: <FaNpm />,
                    title: "NPM",
                    id: 1,
                },
                {
                    icon: <SiWebpack />,
                    title: "Webpack",
                    id: 2,
                },
                {
                    icon: <FaFigma />,
                    title: "Figma",
                    id: 3,
                },
                {
                    icon: <SiWebpack />,
                    title: "Webpack",
                    id: 4,
                },
                {
                    icon: <SiJira />,
                    title: "Jira",
                    id: 5,
                },
                {
                    icon: "",
                    title: "",
                    id: 6,
                },
            ],
        },
        {
            skillsTitle: "Testing Tools",
            skills: [
                {
                    icon: <SiJest />,
                    title: "Jest",
                    id: 0,
                },
                {
                    icon: <SiCypress />,
                    title: "Cypress",
                    id: 1,
                },
                {
                    icon: <SiVitest />,
                    title: "Vitest",
                    id: 2,
                }
            ],
        },
        ];

        const [createCardIndex, setCreateCardIndex] = useState(0);

        const currentTitleCardIndex = skillsCatergories[createCardIndex];

        const currentCardIndexPrevious = () => {
            setCreateCardIndex(prevCard =>
                prevCard === skillsCatergories.length - 1 ? 0 : prevCard - 1
            )
        }

        const currentCardIndexNext = () => {
            setCreateCardIndex(nextCard =>
                 nextCard === skillsCatergories.length - 1 ? 0 : nextCard + 1
            )
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
                gap-18
                ${ darkMode ? "bg-[var(--dark-background)]" : "bg-[var(--light-background)]" }
            `}>
            <Nav />
            <h2
                className={`
                text-center
                font-normal
                text-4xl
                tracking-wider
                ${ darkMode ? "text-[var(--dark-main-text)]" : "text-[var(--light-main-text)]" }
            `}>
                Skills
            </h2>
            <div className="flex flex-col items-center justify-center gap-16">
                    <h4 className={`
                        text-2xl
                        font-light
                        tracking-wide
                        ${ darkMode ? "text-[var(--dark-secondary-text)]" : "text-[var(--light-secondary-text)]" }
                    `}>
                        {currentTitleCardIndex.skillsTitle}
                    </h4>


                    <div className="grid grid-cols-4 justify-items-center gap-20 p-6">
                        {currentTitleCardIndex.skills.map((skill) => (
                            <div
                                key={skill.id}
                                className="flex flex-col items-center gap-4"
                            >
                                <i
                                    className={`
                                        text-4xl
                                        ${ darkMode ? "text-[var(--dark-accent)]" : "text-[var(--light-primary0text)]" }
                                `}>
                                    {skill.icon}
                                </i>

                                <p
                                    className={`
                                    text-lg
                                    ${ darkMode ? "text-[var(--dark-main-text)]" : "text-[var(--light-primary-text)]" }
                                `}>
                                    {skill.title}
                                </p>
                            </div>
                        ))}
                </div>
                <div className="flex gap-10">
                        <button
                            className={`
                                text-4xl
                                cursor-pointer
                            onClick={currentCardIndexPrevious}
                        `}>
                            <BiSolidLeftArrowSquare
                                color={darkMode ? "var(--dark-accent)" : "var(--light-accent)"}
                            />
                        </button>
                        <button
                            className={`
                                text-4xl
                                cursor-pointer
                                hover:bg-slate-700
                            onClick={currentCardIndexNext}
                        `}>
                            <BiSolidRightArrowSquare
                                color={darkMode ? "var(--dark-accent)" : "var(--light-accent)"}
                            />
                        </button>
                </div>
            </div>
            <Footer />
        </section>
    );
};