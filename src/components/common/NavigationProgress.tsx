'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export function NavigationProgress() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isNavigating, setIsNavigating] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Reset on route change complete
    setIsNavigating(false)
    setProgress(100)
    
    const timeout = setTimeout(() => {
      setProgress(0)
    }, 200)
    
    return () => clearTimeout(timeout)
  }, [pathname, searchParams])

  // Listen for navigation start
  useEffect(() => {
    const handleStart = () => {
      setIsNavigating(true)
      setProgress(0)
      
      // Simulate progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval)
            return 90
          }
          return prev + 10
        })
      }, 100)
      
      return () => clearInterval(interval)
    }

    // Intercept link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (
        link &&
        link.href &&
        link.href.startsWith(window.location.origin) &&
        !link.href.includes('#') &&
        !link.target &&
        !e.ctrlKey &&
        !e.metaKey
      ) {
        const url = new URL(link.href)
        if (url.pathname !== pathname) {
          handleStart()
        }
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [pathname])

  return (
    <AnimatePresence>
      {isNavigating && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[100] h-1 bg-primary/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-accent to-primary"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
            style={{
              boxShadow: '0 0 10px var(--primary), 0 0 5px var(--primary)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
