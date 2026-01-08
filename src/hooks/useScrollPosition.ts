'use client'

import { useState, useEffect } from 'react'

/**
 * Hook to track scroll position
 * @returns Object with scrollY, scrollX, scrollDirection, and isAtTop
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    scrollY: 0,
    scrollX: 0,
    scrollDirection: 'up' as 'up' | 'down',
    isAtTop: true,
  })

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const currentScrollX = window.scrollX
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up'

      setScrollPosition({
        scrollY: currentScrollY,
        scrollX: currentScrollX,
        scrollDirection,
        isAtTop: currentScrollY < 10,
      })

      lastScrollY = currentScrollY
    }

    // Set initial position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}

/**
 * Hook to track scroll progress (0-100)
 * @returns Scroll progress percentage
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0
      setProgress(Math.min(100, Math.max(0, progress)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}
