/**
 * Projects Component
 * 
 * Highlights your best work with descriptions, links, and technologies used
 * Shows how to work with images and external links
 */

import PORTFOLIO_DATA from '../config/portfolio'
import styles from './Projects.module.css'

function Projects() {
  // Projects from portfolio config
  const projects = PORTFOLIO_DATA.projects

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        
        <div className={styles.projectsGrid}>
          {projects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <img src={project.imageUrl} alt={project.title} />
                <div className={styles.overlay}>
                  <div className={styles.links}>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      Live Demo
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectTechs}>
                  {project.technologies.map(tech => (
                    <span key={tech} className={styles.projectTech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
