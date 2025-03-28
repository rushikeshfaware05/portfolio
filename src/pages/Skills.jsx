import { useState, useEffect } from 'react';
import styles from '../styles/SkillsStyle.module.css';
import checkMarkIcon from '../assets/checkmark-dark.svg';

const SkillList = ({ src, skill, isAnimated }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span 
      className={`${styles.skillItem} ${isAnimated ? styles.animated : ''} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.hologramEffect}></div>
      <img 
        src={src} 
        alt={`${skill} icon`} 
        className={`${styles.icon} ${isHovered ? styles.iconHover : ''}`}
      />
      <p className={styles.skillText}>{skill}</p>
      <div className={styles.particleEffect}></div>
    </span>
  );
};

function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React"];
  const backendSkills = ["C", "Core Java", "JDBC", "Spring Core", "Spring JDBC", "MySQL"];
  const tools = ["Git", "VS Code", "Eclipse IDE", "Spring Tool Suit 4"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateSkills();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const animateSkills = () => {
    const allSkills = [...frontendSkills, ...backendSkills, ...tools];
    let delay = 0;
    
    const animationSequence = allSkills.map((skill, index) => {
      delay += 100;
      return setTimeout(() => {
        setAnimatedSkills(prev => [...prev, skill]);
      }, delay);
    });

    return () => animationSequence.forEach(timer => clearTimeout(timer));
  };

  return (
    <section id="skills" className={styles.skillsContainer}>
      <div className={styles.matrixRain}></div>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>My Skills</h1>
        <p className={styles.subtitle}>Technologies I've been working with recently</p>
        
        <div className={styles.skillCategory}>
          <h2 className={styles.categoryTitle}>Frontend Development</h2>
          <div className={styles.skillGrid}>
            {frontendSkills.map(skill => (
              <SkillList 
                key={skill} 
                src={checkMarkIcon} 
                skill={skill} 
                isAnimated={isVisible && animatedSkills.includes(skill)}
              />
            ))}
          </div>
        </div>

        <div className={styles.skillCategory}>
          <h2 className={styles.categoryTitle}>Backend Development</h2>
          <div className={styles.skillGrid}>
            {backendSkills.map(skill => (
              <SkillList 
                key={skill} 
                src={checkMarkIcon} 
                skill={skill} 
                isAnimated={isVisible && animatedSkills.includes(skill)}
              />
            ))}
          </div>
        </div>

        <div className={styles.skillCategory}>
          <h2 className={styles.categoryTitle}>Tools & Platforms</h2>
          <div className={styles.skillGrid}>
            {tools.map(skill => (
              <SkillList 
                key={skill} 
                src={checkMarkIcon} 
                skill={skill} 
                isAnimated={isVisible && animatedSkills.includes(skill)}
              />
            ))}
          </div>
        </div>

        <div className={`${styles.progressBars} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.categoryTitle}>Skill Proficiency</h2>
          <div className={styles.progressItem}>
            <span data-percent="75%">Frontend Development</span>
            <div className={styles.progressBackground}>
              <div 
                className={`${styles.progressFill} ${styles.animateFrontend}`} 
                style={{ transform: isVisible ? 'scaleX(0.75)' : 'scaleX(0)' }}
              />
            </div>
          </div>
          <div className={styles.progressItem}>
            <span data-percent="85%">Backend Development</span>
            <div className={styles.progressBackground}>
              <div 
                className={`${styles.progressFill} ${styles.animateBackend}`} 
                style={{ transform: isVisible ? 'scaleX(0.85)' : 'scaleX(0)' }}
              />
            </div>
          </div>
          <div className={styles.progressItem}>
            <span data-percent="70%">UI/UX Design</span>
            <div className={styles.progressBackground}>
              <div 
                className={`${styles.progressFill} ${styles.animateDesign}`} 
                style={{ transform: isVisible ? 'scaleX(0.7)' : 'scaleX(0)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;