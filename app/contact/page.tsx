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
                    justify-center
                    gap-8
                "
            >
                <h2
                    className="
                        text-5xl
                        font-extralight
                        tracking-tight
                    "
                >
                    Contact
                </h2>

                <form
                    className="
                        flex
                        flex-col
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
                                w-100
                            "
                            placeholder="Full Name"
                        />
                    </div>
                    <div>
                        <Button
                            buttonText="
                                Submit
                            "
                            className="
                                border
                                pt-1
                                pb-1
                            "
                        />
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}