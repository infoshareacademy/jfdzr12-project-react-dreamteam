import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css';
import { useContext, useState } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';
import '../index.css'
import { signOut } from 'firebase/auth';
import { auth } from '../api/firebase';

export const Navigation = ({ user }) => {

  // dodany useContext do zmiany kolorystyki, useState do obsługi przycisku zmieniającego motywy kolorystyczne,
  //  i zmienne (stałe), które zamieniają kilka klas css na stringi; są wykorzystane jako warunkowe classNames 

  const { setTheme } = useContext(ThemeContext);

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

  const lightBtnClasses = [`fa-solid`, `fa-moon`, `fa-lg`, styles.nav__modeBtnLight].join(" ");
  const darkBtnClasses = [`fa-solid`, `fa-sun`, `fa-lg`, styles.nav__modeBtnDark].join(" ");
  const darkNavClasses = [styles.nav__link, styles.nav__itemsDark, styles.header__dark].join(" ");
  const lightNavClasses = [styles.nav__link, styles.nav__itemsLight, styles.header__light].join(" ");
  const darkHeaderClasses = [styles.header, styles.header__dark].join(" ");
  const lightHeaderClasses = [styles.header, styles.header__light].join(" ");
  const darkLogo = [styles.logo__img, styles.logo__imgDark, styles.logo__name, styles.logo__nameDark].join(" ");
  const lightLogo = [styles.logo__img, styles.logo__name].join(" ");

  return (
    <header className={isDarkMode ? darkHeaderClasses : lightHeaderClasses}>
      <div className={styles.header__box}>
        <NavLink to="/" className={styles.logo__box}>
          <div className={styles.logo}>
            <img className={isDarkMode ? darkLogo : lightLogo} src={isDarkMode ? "/img/exampleLight.svg" : "/img/example.svg"} alt="logo image example" />
            <p className={isDarkMode ? darkLogo : lightLogo}>PhotoToTo</p>
          </div>
        </NavLink>
        <nav className={styles.nav}>
          <ul className={styles.nav__items}>
            <li><NavLink to="/gallery" className={isDarkMode ? darkNavClasses : lightNavClasses} >Gallery</NavLink></li>
            <li><NavLink to="/pricing" className={isDarkMode ? darkNavClasses : lightNavClasses} >Pricing</NavLink></li>
            <li><NavLink to="/contact" className={isDarkMode ? darkNavClasses : lightNavClasses} >Contact</NavLink></li>
            <li><NavLink to="/auth/signin" className={isDarkMode ? darkNavClasses : lightNavClasses} >Sign in</NavLink></li>
            {user && <li onClick={() => { signOut(auth) }} style={{ color: "red", textDecoration: "underline", cursor: "pointer" }}>
              Log Out
            </li>}
            {/* <li><NavLink to="auth/signup" className={isDarkMode ? darkNavClasses : lightNavClasses} >Sign up</NavLink></li> */}
            <i className={isDarkMode ? darkBtnClasses : lightBtnClasses} onClick={handleOnClick}></i>
          </ul>
        </nav>
      </div>
    </header>
  )
}
