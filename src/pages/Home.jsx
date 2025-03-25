import { useEffect, useRef, useState } from 'react';
import styles from '../styles/HomeStyle.module.css';
import twitter from '../assets/twitter-dark.svg';
import github from '../assets/github-dark.svg';
import linkedin from '../assets/linkedin-dark.svg';
import CV from '../assets/resume.pdf';

function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ["Full-Stack Developer", "Problem Solver", "Tech Enthusiast"];
  const [showCursor, setShowCursor] = useState(true);
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    { name: "Java", color: "#3776AB" },
    { name: "JavaScript", color: "#3178C6" },
    { name: "Spring Boot", color: "#68A063" },
    { name: "React", color: "#61DAFB" },
    { name: "GitHub", color: "#FF9900" },
    { name: "Docker", color: "#2496ED" },
  ];

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    let deleting = false;
    let currentText = '';
    const currentRole = roles[currentRoleIndex];

    const type = () => {
      if (!deleting) {
        currentText = currentRole.substring(0, i + 1);
        i++;
        if (i === currentRole.length) {
          deleting = true;
          setTimeout(() => {}, 1500);
        }
      } else {
        currentText = currentRole.substring(0, i - 1);
        i--;
        if (i === 0) {
          deleting = false;
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }

      setTypedText(currentText);
    };

    const interval = setInterval(type, 100 + Math.random() * 50);
    return () => clearInterval(interval);
  }, [currentRoleIndex]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={styles.container}>
      <div className={styles.heroContent}>
        <div className={styles.leftPanel}>
          <div className={styles.greeting}>
            <span className={styles.wave}>👋</span> Hi there! I'm
          </div>
          <h1 className={styles.name}>Sudarshan Bhosale</h1>
          <h2 className={styles.role}>
            {typedText}
            <span className={`${styles.cursor} ${showCursor ? styles.visible : ''}`}>|</span>
          </h2>
          
          <div className={styles.tabs}>
            <button 
              className={`${styles.tab} ${activeTab === 'about' ? styles.active : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'skills' ? styles.active : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'projects' ? styles.active : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
          </div>
          
          <div className={styles.tabContent}>
            {activeTab === 'about' && (
              <p className={styles.bio}>
                I build exceptional digital experiences with modern web technologies.
                Currently focused on creating scalable applications with React and SpringBoot.
              </p>
            )}
            
            {activeTab === 'skills' && (
              <div className={styles.techGrid}>
                {techStack.map((tech) => (
                  <div 
                    key={tech.name}
                    className={styles.techItem}
                    style={{ 
                      borderColor: hoveredTech === tech.name ? tech.color : '#2d3748',
                      transform: hoveredTech === tech.name ? 'translateY(-5px)' : 'none'
                    }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <span className={styles.techName} style={{ color: tech.color }}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'projects' && (
              <div className={styles.projectsPreview}>
                <div className={styles.projectCard}>
                  <h3>Expense Tracker System</h3>
                  <p>Full-stack solution with React, SpringBoot and MySQL</p>
                </div>
                <div className={styles.projectCard}>
                  <h3>Job Portal System</h3>
                  <p>Real-time collaboration with WebSockets</p>
                </div>
              </div>
            )}
          </div>
          
          <div className={styles.ctaButtons}>
            <a href="#contact" className={styles.primaryButton}>
              Get In Touch
            </a>
            <a 
              href={CV} 
              download 
              className={styles.secondaryButton}
            >
              Download CV
            </a>
          </div>
        </div>
        
        <div className={styles.rightPanel}>
          <div className={styles.codeWindow}>
            <div className={styles.codeHeader}>
              <div className={styles.codeButtons}>
                <span className={styles.red}></span>
                <span className={styles.yellow}></span>
                <span className={styles.green}></span>
              </div>
              <div className={styles.codeTitle}>sudarshan.js</div>
            </div>
            <pre className={styles.codeBlock}>
              <code>
{`const developer = {\n`}
{`  name: "Sudarshan Bhosale",\n`}
{`  role: "${roles[currentRoleIndex]}",\n`}
{`  skills: [\n`}
{`    "JavaScript", "React", "Java",\n`}
{`    "Spring Boot", "MySQL", "Docker"\n`}
{`  ],\n`}
{`  contact: {\n`}
{`    email: "bhosalesudarshan9@gmail.com",\n`}
{`    twitter: "@darker09",\n`}
{`    github: "Darker009"\n`}
{`  }\n`}
{`};\n\n`}
{`function buildSomethingAwesome() {\n`}
{`  return developer.skills.map(skill => \n`}
{`    <Project key={skill} tech={skill} />\n`}
{`  );\n`}
{`}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      
      <div className={styles.socialLinks}>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <img src={twitter} alt="Twitter" />
          <span>Twitter</span>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <img src={github} alt="GitHub" />
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <img src={linkedin} alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default Home;