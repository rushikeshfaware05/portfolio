import { useEffect, useRef, useState } from 'react';
import styles from '../styles/HomeStyle.module.css';
import twitter from '../assets/twitter-dark.svg';
import github from '../assets/github-dark.svg';
import linkedin from '../assets/linkedin-dark.svg';
import CV from '../assets/RushikeshAware10.pdf';

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
    { name: "Spring Core", color: "#68A063" },
    { name: "React", color: "#61DAFB" },
    { name: "GitHub", color: "#FF9900" },
    { name: "Spring JDBC", color: "#2496ED" },
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
          <h1 className={styles.name}>Rushikesh Aware</h1>
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
                <h3>Quize Application</h3>
                <p>Apllication to conduct the exam</p>
                </div>
                <div className={styles.projectCard}>
                <h3>Movies recommend System</h3>
                  <p>Suggest movies to user using knn algorithm</p>
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
              <div className={styles.codeTitle}>Rushikesh.js</div>
            </div>
            <pre className={styles.codeBlock}>
              <code>
{`const developer = {\n`}
{`  name: "Rushikesh Aware",\n`}
{`  role: "${roles[currentRoleIndex]}",\n`}
{`  skills: [\n`}
{`    "JavaScript", "React", "Java",\n`}
{`    "Spring Core", "MySQL", "Spring JDBC"\n`}
{`  ],\n`}
{`  contact: {\n`}
{`    email: "rushikeshfaware05@gmail.com",\n`}
{`    twitter: "@rushi05",\n`}
{`    github: "rushikeshfaware05"\n`}
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
        <a href="https://github.com/rushikeshfaware05" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <img src={github} alt="GitHub" />
          <span>GitHub</span>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
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