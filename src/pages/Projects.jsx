import React from 'react';
import img1 from '../assets/java-script (1).png';
import img2 from '../assets/jpsystem.jpg';
import img3 from '../assets/employee.jpg';
import styles from '../styles/ProjectStyle.module.css';

function Projects({ id }) {
  const projects = [
    {
      id: 1,
      image: img1,
      title: "Quize Apllication",
      description: "Application for Conducting the exam",
      tags: ["React"],
      link: "#",
      deployed: true
    },
    {
      id: 2,
      image: img2,
      title: "Movie recommendation System",
      description: "Application for reccomend movies to user using knn algorithm",
      tags: ["React", "Spring Boot"],
      link: "#",
      deployed: true
    },
    {
      id: 3,
      image: img3,
      title: "Employee Management",
      description: "A comprehensive system for managing employee data",
      tags: ["React", "Spring Boot"],
      link: "#",
      deployed: true
    }
    
  ];

  const ProjectCard = ({ image, title, description, tags, link, deployed }) => {
    return (
      <div className={styles.projectCard}>
        <img src={image} alt={title} className={styles.projectImage} />
        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.projectDescription}>{description}</p>
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.projectLink}
          >
            View Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id={id} className={styles.projectsSection}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle}>Projects</h1>
        <p className={styles.sectionSubtitle}>Some of my recent work</p>
        
        <div className={styles.projectsGrid}>
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              deployed={project.deployed}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;