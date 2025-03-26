import styles from '../styles/AboutMeStyle.module.css';
import { useEffect, useState } from 'react';
import profileImage from '../assets/Sudarshan.png'; // Import the image directly

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
                <li>Spring Framework</li>
                <li>React</li>
                <li>MySQL / Firebase</li>
                <li>REST API's</li>
                <li>GitHub</li>
                <li>Docker</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.profileImageWrapper}>
              <div className={styles.imageBorder}></div>
              <img
                src={profileImage}
                alt="Profile"
                className={styles.profileImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/fallback-image.png';
                }}
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}