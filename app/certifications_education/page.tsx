"use client";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function CertificationEducation() {
    return (
        <section>
            <Nav />
            <article className="border-2 flex flex-col gap-10 justify-center items-center min-h-screen">
                <h2 className="text-4xl font-extralight">
                    Certification &amp; Education
                </h2>

                <div className="border flex flex-col h-125 w-140 p-10 gap-2 overflow-y-auto">
                    <h3 className="text-2xl font-normal">
                        Georgia State University, <span className="font-extralight italic">Associate of Science</span>
                    </h3>

                    <h4 className="text-xl font-extralight">
                        8/2016 – 5/2019 | Atlanta, GA
                    </h4>

                    <p>
                        Developed a strong foundation in programming, software development, algorithms, data structures
                        computer systems, networking, and database fundamentals.
                    </p>

                    <ul>
                        <li className="list-inside">
                            Relevant Coursework -
                        </li>
                        <ul className="list-disc list-outside pl-5 space-y-2 text-sm">
                            <li className="list-disc">
                                Java -
                                <ul>
                                    <li>
                                        Focused on programming, software development, algorithms, data structures, computer systems, and database fundamentals.
                                    </li>
                                </ul>
                            </li>
                            <li className="list-disc">
                                Python -
                                <ul>
                                    <li>
                                        Learned Python programming fundamentals, including variables, functions, loops, object-oriented programming, file handling,
                                        modules, and debugging techniques.
                                    </li>
                                </ul>
                            </li>
                            <li className="list-disc">
                                C -
                                <ul>
                                    <li>
                                        Learned the fundamentals of C programming, including pointers, memory management, functions, and data structures.
                                    </li>
                                </ul>
                            </li>
                            <li className="list-disc">
                                Bash/Shell Scripting -
                                <ul>
                                    <li>
                                        Wrote Bash scripts to automate tasks, manage files, execute system commands, and streamline Linux workflows.
                                    </li>
                                </ul>
                            </li>
                            <li className="list-disc">
                                Data Structures -
                                <ul>
                                    <li>
                                        Studied and applied fundamental data structures, including arrays, linked lists, stacks, queues, trees, hash tables,
                                        and graphs to solve programming problems efficiently.
                                    </li>
                                </ul>
                            </li>
                            <li className="list-disc">
                                Systems Programming -
                                <ul>
                                    <li>
                                        Studied low-level programming concepts, including memory management, processes, system calls, file operations, and operating system interactions.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </ul>
                </div>
            </article>
            <Footer />
        </section>
    );
};