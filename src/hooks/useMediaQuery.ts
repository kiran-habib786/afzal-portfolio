'use client'

import { useState, useEffect } from 'react'
import { BREAKPOINTS } from '@/lib/constants'

type Breakpoint = keyof typeof BREAKPOINTS

/**
 * Hook for responsive design media queries
 * @param query - Media query string or breakpoint name
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string | Breakpoint): boolean {
  // Convert breakpoint name to media query if needed
  const mediaQuery = typeof query === 'string' && query in BREAKPOINTS
    ? `(min-width: ${BREAKPOINTS[query as Breakpoint]}px)`
    : query

  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(mediaQuery)
    
    // Set initial value
    setMatches(media.matches)

    // Create listener
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Add listener
    media.addEventListener('change', listener)
    
    return () => media.removeEventListener('change', listener)
  }, [mediaQuery])

  return matches
}

/**
 * Hook for common responsive breakpoints
 * @returns Object with boolean values for each breakpoint
 */
export function useBreakpoints() {
  const isSm = useMediaQuery('sm')
  const isMd = useMediaQuery('md')
  const isLg = useMediaQuery('lg')
  const isXl = useMediaQuery('xl')
  const is2Xl = useMediaQuery('2xl')

  return {
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    isMobile: !isMd,
    isTablet: isMd && !isLg,
    isDesktop: isLg,
  }
}

/**
 * Hook to check if user prefers reduced motion
 * @returns Boolean indicating if reduced motion is preferred
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    setPrefersReducedMotion(mediaQuery.matches)

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', listener)
    
    return () => mediaQuery.removeEventListener('change', listener)
  }, [])

  return prefersReducedMotion
}
