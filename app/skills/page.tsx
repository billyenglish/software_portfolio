import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaBootstrap, FaNodeJs, FaPython, FaJava, FaGithub, FaNpm, FaFigma } from "react-icons/fa6";
import { SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiMongoose, SiVite, SiWebpack, SiJest } from "react-icons/si";
import { TbCircleLetterC } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import { BsFillTerminalFill } from "react-icons/bs";
import Nav from "../components/nav";
import Footer from "../components/footer"

export default function Skills() {

    const frontEndSkill = [
        { icon: <FaHtml5 />, title: "HTML", id: 0 },
        { icon: <FaCss3Alt />, title: "CSS", id: 1 },
        { icon: <SiJavascript />, title: "JavaScript", id: 2 },
        { icon: <SiTypescript />, title: "Typescript", id: 3 },
        { icon: <FaReact />, title: "React", id: 4 },
        { icon: <SiTailwindcss />, title: "Tailwind", id: 5 },
        { icon: <FaSass />, title: "Sass", id: 6 },
        { icon: <FaBootstrap />, title: "Bootstrap", id: 7 }
    ];

    const backEndSkill = [
        { icon: <FaNodeJs />, title: "NodeJS", id: 0 },
        { icon: <SiExpress />, title: "ExpressJS", id: 1 },
        { icon: <FaPython />, title: "Python", id: 2 },
        { icon: <SiMongodb />, title: "MongoDB", id: 3 },
        { icon: <FaJava />, title: "Java", id: 4 },
        { icon: <GrGraphQl />, title: "GraphQL", id: 5 },
        { icon: <SiMongoose />, title: "Mongoose", id: 6 },
        { icon: <TbCircleLetterC />, title: "Programming", id: 7 }
    ];

    const devTool = [
        { icon: <FaGithub />, title: "Github", id: 0 },
        { icon: <RiNextjsFill />, title: "NextJS", id: 1 },
        { icon: <SiVite />, title: "Vite", id: 2 },
        { icon: <SiWebpack />, title: "Webpack", id: 3 },
        { icon: <FaNpm />, title: "Npm", id: 4 },
        { icon: <BsFillTerminalFill />, title: "Terminal", id: 5 },
        { icon: <FaFigma />, title: "Figma", id: 6 },
        { icon: <SiJest />, title: "Jest", id: 7 }
    ]

    return (
        <section className="border-2 min-h-screen flex flex-col gap-20 justify-center items-center">
            <Nav />
            <h2 className="text-4xl font-extralight tracking-tight">
                Skills
            </h2>

            <div className="mb-10">
                <div className="grid grid-cols-3 gap-40">
                    <div className="grid grid-cols-2 gap-10">
                        {frontEndSkill.map((frontEnd) => (
                            <div
                                key={frontEnd.id}
                                className="flex flex-col items-center justify-center gap-2"
                            >
                                <span className="text-5xl">
                                    {frontEnd.icon}
                                </span>

                                <p className="text-lg font-montserrat">
                                    {frontEnd.title}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                        {backEndSkill.map((backEnd) => (
                            <div
                                key={backEnd.id}
                                className="flex flex-col items-center justify-center gap-2"
                            >
                                <span className="text-5xl">
                                    {backEnd.icon}
                                </span>

                                <p className="text-lg font-montserrat">
                                    {backEnd.title}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                        {devTool.map((tool)=> (
                            <div
                                key={tool.id}
                                className="flex flex-col items-center justify-center gap-2"
                            >
                                <span className="text-5xl">
                                    {tool.icon}
                                </span>

                                <p className="text-lg font-montserrat">
                                    {tool.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};