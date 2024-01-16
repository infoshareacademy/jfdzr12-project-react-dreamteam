import styles from './LandingPage.module.css'

export const LandingPage = () => {
  return (
    <section className={styles.landingPage__box}>
      <h1 className={styles.landingPage_title}>
        Your <b>moments</b><br />My <b>passion</b><br />Our <b>story</b>
      </h1>
      <img className={styles.landingPage__img} src="img/girl-2436545_1280.jpg" alt="example image" />
    </section>
  )
}