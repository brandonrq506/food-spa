import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { Theme, ThemeContextProps, toggleThemeFn } from "../types";

type ThemeProviderProps = {
    children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        const browserPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const localStoragePreference = localStorage.getItem("theme") as Theme ?? browserPreference;
        setTheme(localStoragePreference);
    }, []);

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    const switchTheme: toggleThemeFn = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "dark" ? "light" : "dark";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    const value: ThemeContextProps = {
        theme,
        switchTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};