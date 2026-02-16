/**
 * Experience Component
 * 
 * Showcases your work history, roles, and technologies used
 * Pulls data from src/config/portfolio.ts
 */

import { PORTFOLIO_DATA } from '../config/portfolio'
import styles from './Experience.module.css'

interface Job {
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
}

function Experience() {
  // Get experience data from portfolio config
  const jobs: Job[] = PORTFOLIO_DATA.experience

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        
        <div className={styles.timeline}>
          {jobs.map((job, index) => (
            <div key={index} className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <h3 className={styles.position}>{job.position}</h3>
                <span className={styles.period}>{job.period}</span>
              </div>
              <p className={styles.company}>{job.company}</p>
              <p className={styles.description}>{job.description}</p>
              
              <div className={styles.technologies}>
                {job.technologies.map(tech => (
                  <span key={tech} className={styles.tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
