"use client";
import { useState, ReactNode } from "react";
import ThemeContext from "../themecontext/themecontext"

type ThemeProviderProps = {
    children: ReactNode;
    handleDarkMode: () => void;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {

    const [darkMode, setDarkMode] = useState(true);

    const handleDarkMode = () => {
        setDarkMode(darkMode => !darkMode);
    }

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                handleDarkMode,
            }}>
            {children}
        </ThemeContext.Provider>
    )
}