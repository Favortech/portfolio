/**
 * About Component
 * 
 * Tells visitors about you, your background, and your skills
 */

import PORTFOLIO_DATA from '../config/portfolio'
import styles from './About.module.css'

function About() {

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        
        <div className={styles.content}>
          <p>
           {PORTFOLIO_DATA.about.paragraph1}
          </p>
          
          <p>
       {PORTFOLIO_DATA.about.paragraph2}
          </p>

          <h3 className={styles.title}>Skills</h3>
          <div className={styles.skillsList}>
            {PORTFOLIO_DATA.skills.map(skill => (
              <span key={skill} className={styles.skillTag}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
