import { useState, useEffect } from 'react'

const Form = () => {

    const [formData, setFormData] = useState({
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
    
        if (formData.title.trim() === '') {
          isValid = false;
          newErrors.title = 'Tytuł jest wymagany';
        }
    
        if (!validateEmail(formData.email)) {
          isValid = false;
          newErrors.email = 'Nieprawidłowy adres email';
        }
    
        if (formData.message.trim().length < 20) {
          isValid = false;
          newErrors.message = 'Treść wiadomości musi zawierać co najmniej 20 znaków';
        }
    
        setErrors(newErrors);
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          // Tutaj możesz obsłużyć logikę wysyłki formularza
          console.log('Formularz wysłany:', formData);
        } else {
          console.log('Formularz zawiera błędy');
        }
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    return (
        
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Tytuł:</label>
                <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                />
                <div className="error">{errors.title}</div>
            </div>

            <div>
                <label htmlFor="email">E-mail nadawcy:</label>
                <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                <div className="error">{errors.email}</div>
            </div>

            <div>
                <label htmlFor="message">Treść wiadomości:</label>
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                />
                <div className="error">{errors.message}</div>
            </div>

            <button type="submit">Wyślij</button>
            </form>
    )

}

    export default Form;
