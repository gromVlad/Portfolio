import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Contact Me</h2>
      <form className={styles.form}>
        <input
          className={styles.inputField}
          type="email"
          placeholder="Email"
        />
        <textarea
          className={`${styles.inputField} ${styles.textareaField}`}
          placeholder="Message"
        ></textarea>
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
