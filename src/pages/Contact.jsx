import styles from '../styles/ContactStyle.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.sectionSubtitle}>Have a project in mind or want to collaborate? Let's talk!</p>
        
        <form 
          action="https://formspree.io/f/mjkyewpw" 
          method="POST" 
          className={styles.contactForm}
        >
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" "
              className={styles.formInput}
              required
            />
            <label htmlFor="name" className={styles.formLabel}>Your Name</label>
            <span className={styles.inputHighlight}></span>
          </div>
          
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              className={styles.formInput}
              required
            />
            <label htmlFor="email" className={styles.formLabel}>Email Address</label>
            <span className={styles.inputHighlight}></span>
          </div>
          
          <div className={styles.formGroup}>
            <textarea
              name="message"
              id="message"
              placeholder=" "
              className={`${styles.formInput} ${styles.formTextarea}`}
              rows="5"
              required
            ></textarea>
            <label htmlFor="message" className={styles.formLabel}>Your Message</label>
            <span className={styles.inputHighlight}></span>
          </div>
          
          <button type="submit" className={styles.submitButton}>
            <span>Send Message</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;