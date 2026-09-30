"use client";
import Nav from "../components/navigation";
import Footer from "../components/footer";
import Button from "../subcomponents/button";

export default function Contact() {

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
                    gap-8
                "
            >
                <h2
                    className="
                        text-5xl
                        font-extralight
                        tracking-tight
                        mt-40
                    "
                >
                    Contact
                </h2>

                <form
                    className="
                        flex
                        flex-col
                        items-center
                        gap-4
                        h-100
                        w-100
                    "
                >
                    <div>
                        <input
                            type="text"
                            className="
                                border
                                h-12
                                w-110
                            "
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            className="
                                border
                                h-12
                                w-110
                            "
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className="
                                border
                                h-12
                                w-110
                            "
                            placeholder="What is this about?"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="subject-textarea"
                            id=""
                            className="
                                border
                                h-70
                                w-110
                                resize-none
                                overflow-y-auto
                            "
                            required
                        >
                        </textarea>
                    </div>
                    <div
                        className="
                            flex
                            gap-4
                        "
                    >
                        <Button
                            buttonText="
                                Submit
                            "
                            className="
                                border
                                pt-1
                                pb-1
                                w-20
                                rounded-sm
                                text-lg
                                cursor-pointer
                            "
                        />
                        <Button
                            buttonText="
                                Clear
                            "
                            className="
                                border
                                pt-1
                                pb-1
                                w-20
                                rounded-sm
                                text-lg
                                cursor-pointer
                            "
                        />
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}