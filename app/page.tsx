"use client"
import { useState, useEffect } from "react";
import Introduction from "./introduction/page";
import Homepage from "./homepage/page";

export default function Home() {

  const [currentDisplay, setCurrentDisplay] = useState(30);

  useEffect(() => {
    const handleCurrentDisplay = setInterval(() => {
      setCurrentDisplay(prevDisp => {
        if (prevDisp > 0) {
          return prevDisp - 1;
        }
        return 0;
      })
    }, 1000);

    return () => clearInterval(handleCurrentDisplay)
  }, []);

  return (
    <div className="border-2 min-h-screen flex justify-center align-center">
      <Homepage />
    </div>
  );
};
