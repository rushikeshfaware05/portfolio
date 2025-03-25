import { useState, useEffect } from 'react';
import SkillList from '../components/SkillList';
import styles from '../styles/SkillsStyle.module.css';
import checkMarkIcon from '../assets/checkmark-dark.svg';

function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  
  const frontendSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux", "Next.js"];
  const backendSkills = ["C", "Core Java", "JDBC", "Spring Core", "Spring Boot", "MySQL", "Node.js"];
  const tools = ["Git", "Docker", "VS Code", "Figma", "Postman"];

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
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>My Skills</h1>
        <p className={styles.subtitle}>Technologies I've been working with recently</p>
        
        <div className={styles.skillCategory}>
          <h2 className={styles.categoryTitle}>Frontend Development</h2>
          <div className={styles.skillList}>
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
          <div className={styles.skillList}>
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
          <div className={styles.skillList}>
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

        <div className={styles.progressBars}>
          <h2 className={styles.categoryTitle}>Skill Proficiency</h2>
          <div className={styles.progressItem}>
            <span data-percent="75%">Frontend Development</span>
            <div className={styles.progressBackground}>
              <div 
                className={`${styles.progressFill} ${styles.animateFrontend}`} 
                style={{ width: isVisible ? '75%' : '0%' }}
              />
            </div>
          </div>
          <div className={styles.progressItem}>
            <span data-percent="85%">Backend Development</span>
            <div className={styles.progressBackground}>
              <div 
                className={`${styles.progressFill} ${styles.animateBackend}`} 
                style={{ width: isVisible ? '85%' : '0%' }}
              />
            </div>
          </div>
          <div className={styles.progressItem}>
            <span data-percent="70%">UI/UX Design</span>
            <div className={styles.progressBackground}>
              <div 
                className={`${styles.progressFill} ${styles.animateDesign}`} 
                style={{ width: isVisible ? '70%' : '0%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
