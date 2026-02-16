/**
 * useScrollAnimation - Custom Hook for Fade-in Animations
 * 
 * This hook triggers animations when elements scroll into view
 * Learn about custom hooks - reusable logic separated from components
 */

import { useEffect, useRef } from 'react'

/**
 * Usage in a component:
 * 
 * function MyComponent() {
 *   const ref = useScrollAnimation()
 *   return <div ref={ref} className="fade-in">Content</div>
 * }
 */
export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    // IntersectionObserver watches when an element enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animation class when visible
            entry.target.classList.add('fade-in-visible')
            // Optional: stop observing after animation plays
            // observer.unobserve(entry.target)
          }
        })
      },
      {
        // Trigger when element is 20% visible
        threshold: 0.2,
        // Start animation a bit before element is fully visible
        rootMargin: '0px 0px -100px 0px',
      }
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return ref
}

// Optional: Hook to add fade-in class to multiple elements
export function useScrollAnimationElements() {
  useEffect(() => {
    // Find all elements with data-scroll-animate attribute
    const elements = document.querySelectorAll('[data-scroll-animate]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => elements.forEach((el) => observer.unobserve(el))
  }, [])
}
