"use client";
import { useState, useEffect } from "react";
import Introduction from "./components/introduction";
import Homepage from "./homepage/page";

export default function Home() {

  const [currentPageTimer, setCurrentPageTimer] = useState(10);

  useEffect(() => {
    const currentTimer = setInterval(() => {
      setCurrentPageTimer((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        }
        return 0;
    })
    }, 1000)

    return () => clearInterval(currentTimer);
  }, []);

  return (
    <>
      {
        currentPageTimer ? <Introduction /> : <Homepage />
      }
    </>
  );
}
