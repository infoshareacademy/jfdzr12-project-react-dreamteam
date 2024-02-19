import { createContext, useState } from "react";

export const ThemeContext = createContext('theme')

export const ThemeProvider = ({children}) => {
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




