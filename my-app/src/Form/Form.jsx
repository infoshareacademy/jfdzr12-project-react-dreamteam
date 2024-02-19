import { useContext, useState } from 'react'
import styles from './Form.module.css'
import { ThemeContext } from '../providers/ThemeProvider';


const ContactForm = () => {
  const [form, setForm] = useState({
    title: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    title: '',
    email: '',
    message: '',
  });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { title: '', email: '', message: '' };

    if (form.title.trim() === '') {
      isValid = false;
      newErrors.title = 'Title is required';
    }

    if (!validateEmail(form.email)) {
      isValid = false;
      newErrors.email = 'Invalid email address';
    }

    if (form.message.trim().length < 20) {
      isValid = false;
      newErrors.message = 'Min. message length required: 20 characters';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form sent:', form);
    } else {
      console.log('The form contains errors');
    }
  }

    const handleChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
// dodany useContext do zmiany motywu kolorystycznego
  const { theme } = useContext(ThemeContext);
// dodane zmienne (stałe), które zamieniają kilka klas css na stringi; są wykorzystane jako warunkowe classNames 
  const formCardLightClasses = [styles.form__card, styles.form__cardLight].join(' ');
  const formCardDarkClasses = [styles.form__card, styles.form__cardDark].join(' ');
  const formBtnLightClasses = [styles.form__btn, styles.form__btnLight].join(' ');
  const formBtnDarkClasses = [styles.form__btn, styles.form__btnDark].join(' ');

  return (
    <form className={theme === 'Light' ? formCardLightClasses : formCardDarkClasses} onSubmit={handleSubmit}>
      <div className={styles.form__inputName}>
        <label htmlFor="title">Title:</label>
      </div>
      <div>
        <input
          className={styles.form__input}
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={handleChangeValue}
        />
        <div className={styles.error}>{errors.title}</div>
      </div>

      <div className={styles.form__inputName}>
        <label htmlFor="email">E-mail:</label>
      </div>
      <div>
        <input
          className={styles.form__input}
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChangeValue}
        />
        <div className={styles.error}>{errors.email}</div>
      </div>

      <div className={styles.form__inputName}>
        <label htmlFor="message">Message:</label>
      </div>
      <div>
        <textarea
          className={styles.form__input}
          id="message"
          name="message"
          value={form.message}
          onChange={handleChangeValue}
        />
        <div className={styles.error}>{errors.message}</div>
      </div>

      <button className={theme === 'Light' ? formBtnLightClasses : formBtnDarkClasses} type="submit">Send</button>
    </form>
  )
}

export default ContactForm
