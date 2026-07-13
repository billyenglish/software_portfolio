import { TypeAnimation } from "react-type-animation"

export default function Introduction() {
    return (
        <section className="min-h-screen flex justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-5">
                <h2 className="text-5xl font-extralight">
                    <TypeAnimation
                        sequence={[
                            "Welcome to My Software Portfolio",
                            3000,
                            "Software Engineer",
                            3000,
                            "UX/UI Designer",
                            3000,
                        ]}
                        speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                        deletionSpeed={{ type: "keyStrokeDelayInMs", value: 100 }}
                        repeat={Infinity}
                        wrapper="span"
                    />
                </h2>

                <h3 className="text-4xl font-extralight">
                    
                </h3>
            </div>
        </section>
    );
};