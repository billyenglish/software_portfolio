"use client";
import { ReactNode, useState } from "react";
import ThemeContext from "../providetheme/themecontext";

type ThemeProviderProps = {
    children: ReactNode;
    darkMode: boolean;
    handleDarkMode: () => void;
}

export default function ThemeProvider({ children }: ThemeProviderProps) { 

    const [darkMode, setDarkMode] = useState(true);

    const handleDarkMode = () => { 
        setDarkMode(darkMode => !darkMode);
    }

    return (
        <ThemeContext.Provider value={{ darkMode, handleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};