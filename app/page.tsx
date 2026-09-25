"use client";
import Nav from "./components/navigation";
import Footer from "./components/footer";
import { TypeAnimation } from "react-type-animation";
import KeyBoard from "./images/keyboard.jpg";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <Nav />
      <section
        className="
          border
          h-screen
          w-screen
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            h-auto
            w-auto
            flex
            flex-col
            items-center
            justify-center
            gap-6
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
            "
          >
            <h2
              className="
                text-6xl
                font-light
                tracking-tighter
              "
            >
              Hi, I&apos;m <span className="font-bold">
                Billy
              </span>{" "}
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  3000,
                  "Fullstack Developer",
                  3000,
                  "Frontend Developer",
                  3000,
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                deletionSpeed={{ type: "keyStrokeDelayInMs", value: 100 }}
                repeat={Infinity}
                wrapper="span"
              />
            </h2>
          </div>
          <div>
            <p
                className="
                  text-xl
                  text-center
                  tracking-tighter
                "
              >
              I build modern, full-stack applications with TypeScript, React, Node.js, and PostgreSQL.
            </p>
          </div>
          <div>
            <button
              className="
                border-2
                text-lg
                pt-1
                pb-1
                p-2
                rounded-sm
              "
            >
              View My Work
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
