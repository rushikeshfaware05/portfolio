import styles from '../styles/AboutMeStyle.module.css';
import { useEffect, useState } from 'react';
import profileImage from '../assets/rushi.jpg'; // Import the image directly

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
              Passionate <span className={styles.highlight}>Aspiring Full Stack Developer</span> excited to build modern web applications.
            </p>
            <div className={styles.description}>
              <p>
              Fresh out of academia with hands-on experience in _JavaScript_, _React_, _Core-Java_ & `_Spring-Boot_` . 
    I love turning ideas into functional applications and constantly expanding my 
    knowledge in web development.
              </p>
              <p>
              My projects demonstrate my ability to learn quickly and apply `_modern_` `_technologies_`.
    I'm eager to contribute my problem-solving skills and fresh perspective to 
    real-world development *challenges*.
              </p>
            </div>
            <div className={styles.skillsList}>
              <h3 className={styles.skillsTitle}>Technologies I'm proficient in:</h3>
              <ul>
                <li>Spring Framework</li>
                <li>React</li>
                <li>MySQL </li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
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