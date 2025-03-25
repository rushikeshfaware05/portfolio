import styles from '../styles/AboutMeStyle.module.css';
import { useEffect, useState } from 'react';

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className={`${styles.aboutSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <div className={styles.underline}></div>
            <p className={styles.introText}>
              Passionate <span className={styles.highlight}>Full Stack Developer</span> with expertise in building modern web applications.
            </p>
            <div className={styles.description}>
              <p>
                With over 3 years of professional experience, I specialize in JavaScript frameworks like React and Next.js for frontend development, 
                and Node.js with Express for backend solutions. I'm passionate about creating efficient, scalable, and user-friendly applications.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving to deliver exceptional digital experiences. I stay updated with 
                the latest technologies and best practices to ensure my work meets modern standards.
              </p>
            </div>
            <div className={styles.skillsList}>
              <h3 className={styles.skillsTitle}>Technologies I work with:</h3>
              <ul>
                <li>React.js / Next.js</li>
                <li>Node.js / Express</li>
                <li>TypeScript</li>
                <li>MongoDB / PostgreSQL</li>
                <li>GraphQL / REST APIs</li>
                <li>Docker / AWS</li>
              </ul>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.profileImageWrapper}>
              <div className={styles.imageBorder}></div>
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className={styles.profileImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}