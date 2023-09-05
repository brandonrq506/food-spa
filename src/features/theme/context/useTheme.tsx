import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeContextProps } from "../types";

export const useTheme = (): ThemeContextProps => {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return themeContext;
};