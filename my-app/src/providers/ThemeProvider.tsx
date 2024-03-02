import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface ThemeContextProvider {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProvider>({theme: 'Light', setTheme: () => {}})

export const ThemeProvider = ({children}:ThemeProviderProps) => {
    const [theme, setTheme] = useState('Light');
    // if określa, jaki jest obraz i tło body po załadowaniu strony, przed kliknięciem w przycisk
    if(theme === 'Light') {
        document.body.style.backgroundColor = 'var(--background-color-0)';
        document.body.style.backgroundImage = 'var(--background-image-1)';
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
        )

}