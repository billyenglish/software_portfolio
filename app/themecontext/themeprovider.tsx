"use client";

import React, { useState } from "react";
import ThemeContext from "./themecontext";

type ThemeProviderProps = {
    children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [darkMode, setDarkMode] = useState(true);

    const handleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                handleDarkMode,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;