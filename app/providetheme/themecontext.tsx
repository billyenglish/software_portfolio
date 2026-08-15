"use client";

import { createContext } from "react";

const CreateTheme = createContext({
    darkMode: true,
    handleDarkMode: () => {},
});

export default CreateTheme;