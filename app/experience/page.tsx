"use client"
import Nav from "../components/navigation";
import Footer from "../components/footer";
import ExperienceCards from "../subcomponents/experience_cards";
import { BiSolidLeftArrowSquare, BiSolidRightArrowSquare } from "react-icons/bi";
import { useState, useContext } from "react";
import ThemeContext from "../themecontext/themecontext";

type ExperienceCardsProps = {
    cardTitle: string;
    subTitle: string;
    dateTitle: string;
    experience1: string;
    experience2: string;
    experience3: string;
    experience4: string;
    experience5: string;
    experience6: string;
    id: number;
}

export default function Experience() {

    const { darkMode } = useContext(ThemeContext);

    const experienceCard: ExperienceCardsProps[] = [
        {
            cardTitle: 'Level 3 Data Center Operations Technician,',
            subTitle: 'AWS (Contract – Brooksource)',
            dateTitle: '12/2025 – Present | Atlanta, GA',
            experience1: 'Supported large-scale production infrastructure in a 24/7 high-availability environment.',
            experience2: 'Led Level 3 escalations and performed root-cause analysis on system-impacting incidents.',
            experience3: 'Troubleshot Linux-based systems while following strict security and compliance standards.',
            experience4: 'Collaborated with cross-functional teams using documented runbooks and escalation paths.',
            experience5: `Applied strong troubleshooting and analytical skills to diagnose and resolve
            hardware, network, and software issues.`,
            experience6: `Collaborated with cross-functional teams, utilizing documented runbooks and
            escalation paths to resolve complex technical issues.`,
            id: 0,
        },
        {
            cardTitle: 'Software Engineer,',
            subTitle: 'Software Engineering Projects',
            dateTitle: '03/2023 – Present | Douglasville, GA',
            experience1: `Designed and built front-end and full-stack web applications using React,
            TypeScript, and modern JavaScript`,
            experience2: `Developed scalable application features using RESTful APIs, asynchronous data
            handling, and modular architecture`,
            experience3: ` Applied Object-Oriented and Functional Programming principles to improve code
            maintainability and performance`,
            experience4: `Implemented client-side state management and reusable components to support
            complex user interactions`,
            experience5: `Used Git-based workflows to manage features, refactors, and incremental
            improvements across projects`,
            experience6: '',
            id: 1,
        },
        {
            cardTitle: `Data Center Technician, MacStadium,`,
            subTitle: ``,
            dateTitle: `03/2023 – 05/2023 | Atlanta, GA`,
            experience1: `Diagnosed hardware and software issues in customer-facing infrastructure.`,
            experience2: `Installed and configured new services while ensuring security and compliance
            requirements.`,
            experience3: `Collaborated with team members to ensure reliable and secure service delivery.`,
            experience4: ``,
            experience5: ``,
            experience6: ``,
            id: 2
        },
        {
            cardTitle: `Site Operations Repair Technician,`,
            subTitle: ` Twitter / X`,
            dateTitle: `08/2020 – 03/2023 | Atlanta, GA`,
            experience1: `Supported mission-critical infrastructure during reduced staffing periods.`,
            experience2: ` Led repair workflows and defect resolution for large-scale data center
            environments.`,
            experience3: `Trained and mentored new hires to improve onboarding efficiency and operational
            quality.`,
            experience4: `Maintained mission-critical data center infrastructure during reduced staffing,
            ensuring high availability and uptime.`,
            experience5: ``,
            experience6: ``,
            id: 3
        }
    ];

    const [currentExperience, setCurrentExperience] = useState(0);

    const currentCard = experienceCard[currentExperience];

    const nextExperienceCard = () => {
        setCurrentExperience((prevCard) =>
            prevCard === experienceCard.length - 1 ? 0 : prevCard + 1
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
                gap-16
                ${ darkMode ? "bg-[var(--dark-background)]" : "bg-[var(--light-background)]" }
        `}>
            <Nav />
            <h2 className={`
                text-4xl
                font-normal
                tracking-wider
                text-center
                ${ darkMode ? "text-[var(--dark-main-text)]" : "text-[var(--light-main-text)]" }
            `}>
                Experience
            </h2>

             <div className="flex flex-col gap-10">
                <ExperienceCards
                    key={currentCard.id}
                    id={currentCard.id}
                    cardTitle={currentCard.cardTitle}
                    subTitle={currentCard.subTitle}
                    dateTitle={currentCard.dateTitle}
                    experience1={currentCard.experience1}
                    experience2={currentCard.experience2}
                    experience3={currentCard.experience3}
                    experience4={currentCard.experience4}
                    experience5={currentCard.experience5}
                    experience6={currentCard.experience6}
                />
            </div>

            <div className="flex items-center gap-2 justify-center w-225 pr-10">
                <button
                    className="text-4xl cursor-pointer"
                    onClick={() => alert("Left")}
                >
                    <BiSolidLeftArrowSquare
                        color={darkMode ? "var(--dark-accent)" : "var(--light-accent)"}
                    />
                </button>
                <button
                    className="text-4xl cursor-pointer"
                    onClick={nextExperienceCard}
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