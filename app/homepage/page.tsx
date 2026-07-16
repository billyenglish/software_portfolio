"use client"
import Nav from "../components/nav";
import Footer from "../components/footer";
import { TypeAnimation } from "react-type-animation";
import { FaArrowAltCircleRight } from "react-icons/fa";



export default function Homepage() {
    return (
        <section className="border-2 min-w-full flex flex-col items-center justify-center">
            <Nav />
            <div className="flex flex-col justify-center items-center gap-10">
                <div>
                    <h2 className="text-6xl font-extralight tracking-wider">
                        <TypeAnimation
                            sequence={[
                                "Hi, I'm Billy",
                                3000,
                                "My Portfolio",
                                3000,
                                "Take A Look",
                                3000,
                            ]}
                            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                            deletionSpeed={{ type: "keyStrokeDelayInMs", value: 100 }}
                            repeat={Infinity}
                            wrapper="span"
                        />
                    </h2>
                </div>
                <div className="homepage-subtitle">
                    <h3 className="text-2xl w-200 tracking-tighter">
                        <TypeAnimation
                            sequence={[
                                "Software development backed by real-world experience managing the systems and infrastructure that power modern applications.",
                                3000,
                            ]}
                            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                            deletionSpeed={{ type: "keyStrokeDelayInMs", value: 100 }}
                            repeat={Infinity}
                            wrapper="span"
                        />
                    </h3>
                </div>
                <div className="flex gap-4">
                    <div className="border-2 h-5 w-5 rounded-2xl bg-black"></div>
                    <div className="border-2 h-5 w-5 rounded-2xl bg-black"></div>
                    <div className="border-2 h-5 w-5 rounded-2xl bg-black"></div>
                </div>
                <div>
                    <button>
                        <FaArrowAltCircleRight
                            className="text-4xl"
                        />
                    </button>
                </div>
            </div>
            <Footer />
        </section>
    );
};