import Nav from "../components/nav";
import Footer from "../components/footer";
import Image from "next/image"
import profileImage from "../images/billyenglish.jpeg"

export default function AboutMe() {
    return (
        <section className="flex min-h-screen">
            <Nav />
            <article className="flex items-center justify-center min-h-screen min-w-1/2">
                <Image
                    src={profileImage}
                    alt="Billy English"
                    className="auto w-120 mt-8"
                />
            </article>
            <article className="flex flex-col gap-12 w-1/2 min-h-screen items-center justify-center pl-10 pr-10">
                <h3 className="text-4xl font-extralight tracking-wider">About Me</h3>

                <p className="text-lg leading-8">
                    Software Engineer with a background spanning large-scale infrastructure and modern full-stack
                    development. I currently work at AWS and previously worked in data center operations at Twitter,
                    where I supported mission-critical systems and developed a strong understanding of reliability,
                    scalability, and performance in production environments.
                </p>

                <p className="text-lg leading-8">
                    I build full-stack web applications using React, TypeScript, Node.js, and SQL, with additional
                    experience in Java, C#, and Python. My infrastructure background shapes how I approach development—focusing
                    on clean architecture, maintainability, and systems that perform reliably under real-world conditions.
                </p>

                <p className="text-lg leading-8">
                    I enjoy building practical, scalable software and continuously improving through hands-on development and
                    real-world problem solving.
                </p>
            </article>
            <Footer />
        </section>
    );
};