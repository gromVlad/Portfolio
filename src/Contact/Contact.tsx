import { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event:any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();

    const { name, email, message } = formData;

    emailjs.sendForm('service_q2odht4', 'template_tyhrtg9', event.target, 'Lmyhw665aEn2nPfUf')
      .then((result) => {
        console.log(result.text);
        // Reset the form
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title} id="contact">
        Contact Me
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          className={styles.inputField}
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="email"></label>
        <input
          className={styles.inputField}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="message"></label>
        <textarea
          className={`${styles.inputField} ${styles.textareaField}`}
          name="message"
          id="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;


