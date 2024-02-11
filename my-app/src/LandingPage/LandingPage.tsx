import { useEffect, useState } from 'react'
import styles from './LandingPage.module.css'


export const LandingPage = () => {

  const [slogan, setSlogan] = useState (0);

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
      <h1 className={styles.landingPage_title}>
        {getSloganPart()}
      </h1>
      <img className={styles.landingPage__img} src="img/girl-2436545_1280.jpg" alt="example image" />
    </section>
  )
}

