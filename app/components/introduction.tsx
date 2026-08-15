"use client";
import { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import ThemeContext from "../providetheme/themecontext";

export default function Introduction() {

    const { darkMode } = useContext(ThemeContext);

    return (
        <section
            className={`
                min-h-screen
                min-w-full
                flex
                flex-col
                items-center
                justify-center
                bg-[#070B14]
        `}>
            <h3
                className={`
                    text-6xl
                    sm:text-5xl
                    2xl:text-7xl
                    sm:leading-22
                    md:leading-24
                    lg:leading-26
                    xl:leading-28
                    2xl:leading-30
                    font-light
                    text-center
                    light-custom-title
                    light-custom-title::after
                `}>
                <TypeAnimation
                    sequence={[
                        "Code With Purpose",
                        3000,
                        "Build With Passion",
                        3000,
                        "Learn With Limits",
                        3000,
                        "Let's Create Something Great",
                        4000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                />
            </h3>
        </section>
    );
};