"use client";

import { createContext, ReactNode } from "react";

type ThemeProviderType = {
    children: ReactNode;
    handleDarkMode: () => void;
};

type ThemeContextType = {
    darkMode: boolean;
    handleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    darkMode: true,
    handleDarkMode: () => {},
});

export default ThemeContext;