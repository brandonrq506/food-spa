import { ThemeContextProps } from "../types";
import { createContext } from "react";

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);