import {createContext, useState} from 'react';
export const ThemeMainContext = createContext();
function ThemeContext({children}) {
    const [theme, setTheme] = useState("dark");
    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    const valueContext = {theme, handleTheme}
    return (
        <ThemeMainContext.Provider value={valueContext}>
            {children}
        </ThemeMainContext.Provider>
    )
}
export default ThemeContext;
