import {createContext , useContext} from "react";

export const Context = createContext({
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{},
});

export const ThemeProvider = Context.Provider;