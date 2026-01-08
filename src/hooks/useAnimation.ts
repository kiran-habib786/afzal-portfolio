'use client'

import { useRef, useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './useMediaQuery'

/**
 * Hook for intersection observer based animations
 * @param options - Intersection observer options
 * @returns Object with ref and isInView boolean
 */
export function useInView(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Optionally disconnect after first intersection
          if (options.rootMargin === undefined) {
            observer.disconnect()
          }
        } else if (options.rootMargin !== undefined) {
          setIsInView(false)
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [options])

  return { ref, isInView }
}

/**
 * Hook for counting up numbers animation
 * @param end - Target number to count to
 * @param duration - Animation duration in ms
 * @returns Current animated value
 */
export function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(end)
      return
    }

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, prefersReducedMotion])

  return count
}

/**
 * Hook for typewriter text effect
 * @param text - Text to type
 * @param speed - Typing speed in ms per character
 * @returns Current displayed text
 */
export function useTypewriter(text: string, speed: number = 50) {
  const [displayText, setDisplayText] = useState('')
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(text)
      return
    }

    setDisplayText('')
    let index = 0

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, prefersReducedMotion])

  return displayText
}

/**
 * Hook for staggered animation delays
 * @param itemCount - Number of items
 * @param baseDelay - Base delay in ms
 * @param staggerDelay - Delay between each item in ms
 * @returns Array of delay values
 */
export function useStaggeredDelay(
  itemCount: number,
  baseDelay: number = 0,
  staggerDelay: number = 100
) {
  return Array.from({ length: itemCount }, (_, i) => baseDelay + i * staggerDelay)
}

/**
 * Hook for parallax effect based on scroll
 * @param speed - Parallax speed multiplier (0-1)
 * @returns Current transform value
 */
export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const handleScroll = () => {
      setOffset(window.scrollY * speed)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, prefersReducedMotion])

  return offset
}
