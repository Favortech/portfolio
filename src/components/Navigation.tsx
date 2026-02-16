/**
 * Navigation Component
 *
 * This is a functional React component. Here's what you need to know:
 * 1. Components return JSX (looks like HTML but it's JavaScript)
 * 2. Props are like function parameters - they pass data from parent to child
 * 3. We use TypeScript for type safety
 */

import styles from "../components/Navigation.module.css";
import { useTheme } from "../context/ThemeContext";
import { PORTFOLIO_DATA } from "../config/portfolio";
import { Link } from "react-router-dom";

function Navigation() {
  const { isDark, toggleTheme } = useTheme();

  // Define navigation links
  const links = [
    { label: "About", href: "about" },
    { label: "Experience", href: "experience" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo/Name - click to go to top */}
       
        <Link to="/" className={styles.logo}> {PORTFOLIO_DATA.name}</Link>

        {/* Navigation Links */}
        <ul className={styles.navLinks}>
          {/* 
            Map: This loops through the 'links' array and creates an <li> for each one
            Key: React needs unique keys to track which items are which (performance)
          */}
          {links.map((link) => (
            <li key={link.label}>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
          <li>
            <Link
              to={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </li>
          {/* Dark Mode Toggle Button */}
          <li>
            <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              aria-label="Toggle theme"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
