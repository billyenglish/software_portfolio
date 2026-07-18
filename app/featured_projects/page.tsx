"use client";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Projects() {
    return (
        <section className="border-2 min-h-screen">
            <Nav />
            <article className="border-2 min-h-screen min-w-screen flex flex-col items-center justify-center">
                <h3 className="text-4xl font-extralight tracking-tighter">
                    Featured Projects
                </h3>

                <div>
                    <div>
                        Project Title
                    </div>
                    <div>
                        Projects
                    </div>
                </div>
            </article>
            <Footer />
        </section>
    );
};