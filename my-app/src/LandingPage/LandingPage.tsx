import { useContext, useEffect, useState } from 'react'
import styles from './LandingPage.module.css'
import { ThemeContext } from '../providers/ThemeProvider'


export const LandingPage = () => {

  const [slogan, setSlogan] = useState (0);

// dodany useContext do zmiany kolorystyki i zmienne (stałe), które zamieniają kilka klas css na stringi; są wykorzystane jako warunkowe classNames 
  const { theme } = useContext(ThemeContext);

  const darkTitle = [styles.landingPage_title, styles.landingPage_titleDark].join(' ');

  useEffect(() => {
    const interval = setInterval(() => {
      setSlogan(prevSlogan => (prevSlogan + 1) % 3);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  const getSloganPart = () => {
    switch (slogan) {
      case 0:
        return (
          <>
            Your <b>moments</b>
          </>
        );
      case 1:
        return (
          <>
            My <b>passion</b>
          </>
        );
      case 2:
        return (
          <>
            Our <b className={styles.last__b}>story</b>
          </>
        );
      default:
        return '';
    }
  };

  return (
    <section className={styles.landingPage__box}>
      <h1 className={theme === 'Dark' ? darkTitle : styles.landingPage_title}>
        {getSloganPart()}
      </h1>
      <img className={styles.landingPage__img} src="img/girl-2436545_1280.jpg" alt="example image" />
    </section>
  )
}

