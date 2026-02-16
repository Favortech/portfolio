/**
 * ThemeContext - Global Theme Management
 * 
 * This allows the entire app to access and toggle dark mode
 * Learn about React Context API - a way to share state without prop drilling
 */

import React, { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Provider component - wraps the entire app
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Check if user previously saved theme preference
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Update localStorage and document when theme changes
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use theme - makes it easy to access theme in any component
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
