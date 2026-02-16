/**
 * Hero Component
 * 
 * This section introduces you to visitors with a compelling message
 * Inspired by Brittany Chiang's portfolio design
 */

import PORTFOLIO_DATA from '../config/portfolio'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        {/* Main Heading */}
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.highlight}>{PORTFOLIO_DATA.name} </span>
        </h1>

        {/* Subtitle with role description */}
        <h2 className={styles.subtitle}>
       {PORTFOLIO_DATA.title}
        </h2>

        {/* Description paragraph */}
        <p className={styles.description}>
         {PORTFOLIO_DATA.intro} <br />
         {PORTFOLIO_DATA.description}
           </p>

        {/* Call-to-action buttons */}
        <div className={styles.buttonGroup}>
          <a href="#projects" className={`${styles.button} ${styles.primary}`}>
            View My Work
          </a>
          <a href="#contact" className={`${styles.button} ${styles.secondary}`}>
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className={styles.socialLinks}>
          <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={PORTFOLIO_DATA.socials.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero
