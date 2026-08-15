"use client";
import { createContext } from "react";

const ThemeContext = createContext({
    darkMode: true,
    handleDarkMode: () => {},
});

export default ThemeContext;