import {useEffect, useState} from "react";

const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            window.localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            window.localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    };
    useEffect(() => {
        const localeTheme = window.localStorage.getItem('theme');
        if (localeTheme) {
            setTheme(localeTheme);
        }
    }, []);
    return [theme, toggleTheme];
}

export default useDarkMode;;