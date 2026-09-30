"use client";
import Nav from "../components/navigation";
import Footer from "../components/footer";
import Image from "next/image";
import ProfileImage from "../images/billyenglish.jpeg";

export default function About() {
    return (
        <>
            <Nav />
            <section
                className="
                    h-screen
                    w-screen
                    flex
                    flex-col
                    items-center
                    justify-center
                "
            >
                <div
                    className="
                        flex
                        h-5/7
                        w-screen
                    "
                >
                    <article
                        className="
                            w-screen
                            flex
                            justify-center
                            items-center
                        "
                    >
                        <div
                            className="
                                h-120
                                w-100
                                flex
                            "
                        >
                            <Image
                                src={ProfileImage}
                                alt="Billy English Profile Image"
                                className="
                                    object-cover
                                    grayscale-100
                                    opacity-90
                                    border-none
                                    backdrop-blur-md
                                "
                            />
                        </div>
                    </article>
                    <article
                        className="
                            w-screen
                            flex
                            flex-col
                            justify-center
                            gap-10
                        "
                    >
                        <h2
                            className="
                                text-5xl
                                font-extralight
                                tracking-tighter
                                text-left
                            "
                        >
                            About
                        </h2>
                        <div
                            className="
                                flex
                                flex-col
                                gap-8
                            "
                        >
                            <p
                                className="
                                    flex
                                    font-light
                                    text-xl
                                    tracking-tighter
                                    text-start
                                    leading-7
                                    pr-6
                                "
                            >
                                I&apos;m a software developer transitioning from large-scale data center operations into software engineering.
                                My background in infrastructure has given me hands-on experience troubleshooting Linux systems, working
                                with production environments, responding to incidents, and solving technical problems under pressure.
                            </p>

                            <p
                                className="
                                    flex
                                    font-light
                                    text-xl
                                    tracking-tighter
                                    text-start
                                    leading-7
                                    pr-6
                                "
                            >
                                Today, I focus on building modern full-stack applications using TypeScript, JavaScript, React, Next.js, Node.js,
                                and PostgreSQL. I enjoy working across the stack—from designing responsive user interfaces to building APIs, working
                                with databases, and thinking about how applications operate behind the scenes.
                            </p>

                            <p
                                className="
                                    flex
                                    font-light
                                    text-xl
                                    tracking-tighter
                                    text-start
                                    leading-7
                                    pr-6
                                "
                            >
                                I&apos;m continuing to strengthen my software engineering skills through hands-on projects and am looking for an opportunity
                                where I can contribute, learn from experienced engineers, and grow as a software engineer.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
            <Footer />
        </>
    );
};

