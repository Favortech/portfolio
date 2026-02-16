

import PORTFOLIO_DATA from '../config/portfolio'
import styles from './Contact.module.css'

interface SocialLink {
  label: string
  url: string
  icon: string
}

function Contact() {
  const socialLinks: SocialLink[] = [
    { label: 'GitHub', url: PORTFOLIO_DATA.socials.github, icon: '💻' },
    { label: 'LinkedIn', url: PORTFOLIO_DATA.socials.linkedin, icon: '💼' },
    { label: 'Twitter', url: PORTFOLIO_DATA.socials.twitter, icon: '🐦' },
    { label: 'Email', url: `mailto:${PORTFOLIO_DATA.email}`, icon: '✉️' },
  ]

  return (
    <footer id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Let's Connect</h2>
        
        <p className={styles.description}>
          I'm always interested in hearing about new projects and opportunities. 
          Feel free to reach out if you'd like to collaborate!
        </p>

        <a href="mailto:alex@example.com" className={styles.emailButton}>
          Send me an email
        </a>

        <div className={styles.socialLinks}>
          {socialLinks.map(link => (
            <a 
              key={link.label}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              title={link.label}
            >
              <span className={styles.icon}>{link.icon}</span>
              <span className={styles.label}>{link.label}</span>
            </a>
          ))}
        </div>

        <div className={styles.footer}>
          <p>&copy; 2026 {PORTFOLIO_DATA.name}. All rights reserved. Built with React & TypeScript.</p>
        </div>
      </div>
    </footer>
  )
}

export default Contact
