import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css';
import { useContext, useState } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';
import '../index.css'

export const Navigation = () => {

// dodany useContext do zmiany kolorystyki, useState do obsługi przycisku zmieniającego motywy kolorystyczne,
//  i zmienne (stałe), które zamieniają kilka klas css na stringi; są wykorzystane jako warunkowe classNames 

    const {theme, setTheme} = useContext(ThemeContext);

    const [isDarkMode, setIsDarkMode] = useState(false);

    const buttonText = isDarkMode ? 'Light' : 'Dark';

    const handleOnClick = () => {
      setIsDarkMode(!isDarkMode);
      // tekst z przycisku jest przekazywany do theme i potem wykorzystywany w innych komponentach do warunkowej zmiany kolorystyki
      setTheme(buttonText);
      // kolor i tło body zmieniają się w zależności od stanu
      document.body.style.backgroundColor = isDarkMode ? 'var(--background-color-0)' : 'var(--background-color-8)';
      document.body.style.backgroundImage = isDarkMode ? 'var(--background-image-1)' : 'var(--background-image-2)';
    }

    const lightBtnClasses = [styles.nav__link, styles.nav__modeBtn, styles.nav__linkLight].join(" ");
    const darkBtnClasses = [styles.nav__link, styles.nav__modeBtn, styles.nav__linkDark].join(" ");
    const darkNavClasses = [styles.nav__link, styles.nav__linkDark].join(" ");
    const lightNavClasses = [styles.nav__link, styles.nav__linkLight].join(" ");

    return (
      <header className={styles.header}> 
            {/* <nav> */}
              <div>
                <NavLink className={isDarkMode ? darkNavClasses : lightNavClasses} to='/'>Home</NavLink>
                <NavLink className={isDarkMode ? darkNavClasses : lightNavClasses} to='/gallery'>Gallery</NavLink>
                <NavLink className={isDarkMode ? darkNavClasses : lightNavClasses} to='/pricing'>Pricing</NavLink>
                <NavLink className={isDarkMode ? darkNavClasses : lightNavClasses} to='/contactform'>Contact</NavLink>
              </div>
                <button className={isDarkMode ? darkBtnClasses : lightBtnClasses} onClick={handleOnClick}>{buttonText} mode</button>
            {/* </nav> */}
      </header>
    )
}

{/* <NavLink
end
className={({ isActive, isPending }) =>
  isActive ?"menu-item menu-item__active" : "menu-item"
  } to="/" >
   Home
 </NavLink> */}

{/* <header class="header"> 
      <div class="header__top">
        <div class="header__box">
          <a href="#Top" class="nav__logo">
            <img class="header__img" src="img/FOTO_TOTO.png" alt="logo"
          /></a>
          <nav class="header__nav">
            <ul class="nav__items">
              <li class="nav__item">
                <a href="#Example" class="nav__link">Examples</a>
              </li>
              <li class="nav__item">
                <a href="#Pricing" class="nav__link">Pricing</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header> */}