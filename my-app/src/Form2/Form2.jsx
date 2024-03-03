import { useContext, useState } from 'react'
import styles from './Form2.module.css'
import { ThemeContext } from '../providers/ThemeProvider';

const Form2 = ({ nameText, submitText, isPasswordHidden = false, handleSubmit, singUpText, signUpLink }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const onSubmit = e => {
    e.preventDefault()
    return handleSubmit({ email, password })
  }

  // dodany useContext do zmiany motywu kolorystycznego
  const { theme } = useContext(ThemeContext);
  // dodane zmienne (stałe), które zamieniają kilka klas css na stringi; są wykorzystane jako warunkowe classNames
  const formCardLightClasses = [styles.form__card, styles.form__cardLight].join(' ');
  const formCardDarkClasses = [styles.form__card, styles.form__cardDark].join(' ');
  const lightContactUs = [styles.contactUs, styles.contactUs__light].join(' ')
  const darkContactUs = [styles.contactUs, styles.contactUs__dark].join(' ')
  const lightInput = [styles.form__input, styles.form__inputLight].join(' ');
  const darkInput = [styles.form__input, styles.form__inputDark].join(' ');
  const lightInputName = [styles.form__inputName, styles.form__inputNameLight].join(' ');
  const darkInputName = [styles.form__inputName, styles.form__inputNameDark].join(' ');

  return (
    <form className={theme === 'Light' ? formCardLightClasses : formCardDarkClasses} onSubmit={onSubmit}>

      <div className={theme === 'Light' ? lightContactUs : darkContactUs}>
        {nameText}
      </div>

      <div className={theme === 'Light' ? lightInputName : darkInputName}>
        <label htmlFor="email">E-mail</label>
      </div>
      <div>
        <input className={theme === 'Light' ? lightInput : darkInput} type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      {!isPasswordHidden && (
        <>
          <div className={theme === 'Light' ? lightInputName : darkInputName}>
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input className={theme === 'Light' ? lightInput : darkInput} type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </>
      )}

      <div className={styles.error}>{singUpText}{signUpLink}</div>

      <button className={styles.form__btn} type="submit">{submitText}</button>
    </form>)

}

export default Form2
