export type Theme = 'light' | 'dark';

export type toggleThemeFn = (e: React.ChangeEvent<HTMLInputElement>) => void;

export type ThemeContextProps = {
    theme: Theme;
    switchTheme: toggleThemeFn;
};